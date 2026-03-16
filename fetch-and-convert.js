const https = require('https')

const scoreTypes = ['SAY', 'EA', 'SOZ', 'DIL']
const fieldMap = { 'SAY': 'SAY', 'EA': 'EA', 'SOZ': 'SÖZ', 'DIL': 'DİL' }

function fetchPrograms(scoreType) {
    return new Promise((resolve, reject) => {
        const body = JSON.stringify({
            jsonrpc: '2.0',
            method: 'tools/call',
            id: 1,
            params: {
                name: 'search_bachelor_degree_programs',
                arguments: {
                    score_type: scoreType,
                    results_limit: 500
                }
            }
        })

        const options = {
            hostname: 'yokatlasmcp.fastmcp.app',
            path: '/mcp',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/event-stream',
                'Content-Length': Buffer.byteLength(body)
            }
        }

        const req = https.request(options, (res) => {
            let data = ''
            res.on('data', chunk => data += chunk)
            res.on('end', () => {
                try {
                    const match = data.match(/data: (\{.+\})/s)
                    if (!match) { resolve([]); return }
                    const parsed = JSON.parse(match[1])
                    const text = parsed.result.content[0].text
                    const programs = JSON.parse(text).programs || []
                    resolve(programs.map(p => ({ ...p, _scoreType: scoreType })))
                } catch (e) {
                    console.error(`Parse error for ${scoreType}:`, e.message)
                    resolve([])
                }
            })
        })

        req.on('error', reject)
        req.setTimeout(30000, () => { req.destroy(); reject(new Error('Timeout')) })
        req.write(body)
        req.end()
    })
}

function toTitleCase(str) {
    if (!str) return ''
    const lower = str.toLowerCase()
        .replace(/i̇/g, 'i').replace(/İ/g, 'İ')
    return lower.replace(/(^|\s|-)(\S)/g, (_, pre, char) => pre + char.toUpperCase())
        .replace(/Üniversitesi/g, 'Üniversitesi')
}

function fixName(str) {
    if (!str) return ''
    // Fix common Turkish university name patterns
    return str
        .replace(/ÜNIVERSITESI/gi, 'Üniversitesi')
        .replace(/UNIVERSITESI/gi, 'Üniversitesi')
        .split(' ')
        .map(w => {
            if (w.length <= 2) return w.toUpperCase()
            return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        })
        .join(' ')
        .replace(/\bOdtü\b/g, 'ODTÜ')
        .replace(/\bİtü\b/g, 'İTÜ')
        .replace(/\bMef\b/g, 'MEF')
        .replace(/\bTobb\b/g, 'TOBB')
}

async function main() {
    const fs = require('fs')
    let allPrograms = []

    for (const scoreType of scoreTypes) {
        console.log(`Fetching ${scoreType}...`)
        try {
            const programs = await fetchPrograms(scoreType)
            console.log(`  Got ${programs.length} programs`)
            allPrograms = allPrograms.concat(programs)
            await new Promise(r => setTimeout(r, 1500))
        } catch (e) {
            console.error(`  Error: ${e.message}`)
        }
    }

    console.log(`Total raw: ${allPrograms.length}`)

    // Convert to our format
    const seen = new Set()
    const converted = []

    for (const p of allPrograms) {
        const score = parseFloat(p.taban?.['2025'] || '0')
        const rank = parseInt(p.tbs?.['2025'] || '0')
        const quotaStr = p.kontenjan?.['2025'] || '0'
        const quota = parseInt(quotaStr.split('+')[0]) || 30

        if (score < 200 || rank === 0) continue

        const university = fixName(p.uni_adi || '')
        const program = fixName(p.program_adi || '')
        const city = fixName(p.sehir_adi || '')
        const field = fieldMap[p._scoreType] || 'SAY'

        const key = `${university}-${program}-${field}`
        if (seen.has(key)) continue
        seen.add(key)

        converted.push({
            university,
            program,
            city,
            field,
            minScore: Math.round(score * 100) / 100,
            minRank: rank,
            quota
        })
    }

    // Sort by score desc
    converted.sort((a, b) => b.minScore - a.minScore)

    console.log(`Unique programs: ${converted.length}`)

    const ts = `import { UniversityProgram } from '@/types/yks'

// 2025 YKS taban puanları - YÖKAtlas verilerine dayalı (${new Date().toLocaleDateString('tr-TR')})
export const universityPrograms: UniversityProgram[] = ${JSON.stringify(converted, null, 2)}
`

    fs.writeFileSync('src/data/universities.ts', ts, 'utf8')
    console.log('Done! Written to src/data/universities.ts')
}

main().catch(console.error)
