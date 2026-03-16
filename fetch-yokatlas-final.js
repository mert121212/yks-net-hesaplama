const https = require('https')
const fs = require('fs')

function get(url) {
    return new Promise((resolve, reject) => {
        const req = https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Referer': 'https://yokatlas.yok.gov.tr/'
            }
        }, res => {
            const chunks = []
            res.on('data', c => chunks.push(c))
            res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
        })
        req.on('error', reject)
        req.setTimeout(15000, () => { req.destroy(); reject(new Error('Timeout')) })
    })
}

function sleep(ms) {
    return new Promise(r => setTimeout(r, ms))
}

// YÖKAtlas dynamic content endpoints
// 1000_1_1.php = taban puanı ve sıralama tablosu
async function fetchProgramData(yopKodu) {
    try {
        const url = `https://yokatlas.yok.gov.tr/content/lisans-dynamic/1000_1_1.php?y=${yopKodu}`
        const html = await get(url)

        if (html.includes('File not found') || html.length < 50) return null

        // Extract score and rank from table
        const rows = html.match(/<tr[^>]*>[\s\S]*?<\/tr>/gi) || []
        const data = {}

        for (const row of rows) {
            const cells = row.match(/<td[^>]*>([\s\S]*?)<\/td>/gi) || []
            const texts = cells.map(c => c.replace(/<[^>]+>/g, '').trim())

            if (texts[0] && texts[0].includes('2025')) {
                data.year = '2025'
                data.minScore = parseFloat(texts[1]) || 0
                data.minRank = parseInt(texts[2]?.replace(/\./g, '')) || 0
                data.quota = parseInt(texts[3]) || 0
                break
            }
        }

        return Object.keys(data).length > 0 ? data : null
    } catch (e) {
        return null
    }
}

// Get program list from YÖKAtlas search
async function fetchProgramList(puanTuru, page = 1) {
    // Use the tercih sihirbazi which has a filterable list
    const url = `https://yokatlas.yok.gov.tr/tercih-sihirbazi-t4-tablo.php?p=${puanTuru}&sayfa=${page}`
    const html = await get(url)

    const programs = []

    // Extract rows with yop codes
    const linkMatches = html.matchAll(/href="lisans\.php\?y=(\d+)"[^>]*>([^<]+)<\/a>/g)
    for (const match of linkMatches) {
        programs.push({ yop: match[1], name: match[2].trim() })
    }

    // Also try table rows
    const tableRows = html.match(/<tr[^>]*class="[^"]*"[^>]*>[\s\S]*?<\/tr>/gi) || []
    for (const row of tableRows) {
        const yopMatch = row.match(/y=(\d+)/)
        const cells = row.match(/<td[^>]*>([\s\S]*?)<\/td>/gi) || []
        const texts = cells.map(c => c.replace(/<[^>]+>/g, '').trim())

        if (yopMatch && texts.length >= 3) {
            programs.push({
                yop: yopMatch[1],
                university: texts[0],
                program: texts[1],
                city: texts[2],
                minScore: parseFloat(texts[3]) || 0,
                minRank: parseInt(texts[4]?.replace(/\./g, '')) || 0,
                quota: parseInt(texts[5]) || 0
            })
        }
    }

    return programs
}

// Main: use the MCP API but fix encoding
async function fetchFromMCP(scoreType, limit = 500) {
    return new Promise((resolve, reject) => {
        const body = JSON.stringify({
            jsonrpc: '2.0',
            method: 'tools/call',
            id: 1,
            params: {
                name: 'search_bachelor_degree_programs',
                arguments: {
                    score_type: scoreType,
                    university_type: 'Devlet',
                    results_limit: limit
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

        const req = https.request(options, res => {
            const chunks = []
            res.on('data', c => chunks.push(c))
            res.on('end', () => {
                // Use latin1 to preserve bytes, then re-encode
                const raw = Buffer.concat(chunks).toString('latin1')
                // Convert latin1 to utf8 properly
                const utf8 = Buffer.from(raw, 'latin1').toString('utf8')

                try {
                    const match = utf8.match(/data: (\{[\s\S]+\})\s*$/)
                    if (!match) { resolve([]); return }
                    const parsed = JSON.parse(match[1])
                    const text = parsed.result.content[0].text
                    const programs = JSON.parse(text).programs || []
                    resolve(programs.map(p => ({ ...p, _scoreType: scoreType })))
                } catch (e) {
                    console.error(`Parse error: ${e.message}`)
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

const fieldMap = { 'SAY': 'SAY', 'EA': 'EA', 'SOZ': 'SÖZ', 'DIL': 'DİL' }

function fixName(str) {
    if (!str) return ''
    return str
        .split(' ')
        .map(w => {
            if (w.length <= 3 && w === w.toUpperCase()) return w
            return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        })
        .join(' ')
        .replace(/\bOdtü\b/gi, 'ODTÜ')
        .replace(/\bİtü\b/gi, 'İTÜ')
        .replace(/\bMef\b/gi, 'MEF')
        .replace(/\bTobb\b/gi, 'TOBB ETÜ')
}

async function main() {
    const scoreTypes = ['SAY', 'EA', 'SOZ', 'DIL']
    let allPrograms = []

    for (const st of scoreTypes) {
        console.log(`Fetching ${st} (devlet, 500 limit)...`)
        const programs = await fetchFromMCP(st, 500)
        console.log(`  Got ${programs.length} programs`)
        allPrograms = allPrograms.concat(programs)
        await sleep(2000)
    }

    // Also fetch vakif universities
    for (const st of ['SAY', 'EA']) {
        console.log(`Fetching ${st} (vakif, 200 limit)...`)
        const body = JSON.stringify({
            jsonrpc: '2.0', method: 'tools/call', id: 1,
            params: {
                name: 'search_bachelor_degree_programs',
                arguments: { score_type: st, university_type: 'Vakıf', fee_type: 'Burslu', results_limit: 200 }
            }
        })

        const programs = await new Promise((resolve) => {
            const options = {
                hostname: 'yokatlasmcp.fastmcp.app', path: '/mcp', method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json, text/event-stream', 'Content-Length': Buffer.byteLength(body) }
            }
            const req = https.request(options, res => {
                const chunks = []
                res.on('data', c => chunks.push(c))
                res.on('end', () => {
                    try {
                        const raw = Buffer.concat(chunks).toString('latin1')
                        const utf8 = Buffer.from(raw, 'latin1').toString('utf8')
                        const match = utf8.match(/data: (\{[\s\S]+\})\s*$/)
                        if (!match) { resolve([]); return }
                        const parsed = JSON.parse(match[1])
                        const text = parsed.result.content[0].text
                        resolve((JSON.parse(text).programs || []).map(p => ({ ...p, _scoreType: st })))
                    } catch (e) { resolve([]) }
                })
            })
            req.on('error', () => resolve([]))
            req.write(body)
            req.end()
        })

        console.log(`  Got ${programs.length} vakif programs`)
        allPrograms = allPrograms.concat(programs)
        await sleep(2000)
    }

    console.log(`\nTotal raw: ${allPrograms.length}`)

    // Convert
    const seen = new Set()
    const converted = []

    for (const p of allPrograms) {
        const score = parseFloat(p.taban?.['2025'] || '0')
        const rank = parseInt(p.tbs?.['2025'] || '0')
        const quotaStr = p.kontenjan?.['2025'] || '0'
        const quota = parseInt(quotaStr.split('+')[0]) || 30

        if (score < 200 || rank === 0) continue

        const university = p.uni_adi || ''
        const program = p.program_adi || ''
        const city = p.sehir_adi ? p.sehir_adi.charAt(0) + p.sehir_adi.slice(1).toLowerCase() : ''
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

    converted.sort((a, b) => b.minScore - a.minScore)
    console.log(`Unique programs: ${converted.length}`)

    // Check encoding of first item
    console.log('Sample:', JSON.stringify(converted[0]))

    const ts = `import { UniversityProgram } from '@/types/yks'\n\n// 2025 YKS taban puanları - YÖKAtlas (${new Date().toLocaleDateString('tr-TR')})\nexport const universityPrograms: UniversityProgram[] = ${JSON.stringify(converted, null, 2)}\n`

    fs.writeFileSync('src/data/universities.ts', ts, 'utf8')
    console.log('Done!')
}

main().catch(console.error)
