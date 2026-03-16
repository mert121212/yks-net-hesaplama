const https = require('https')
const fs = require('fs')

function get(url) {
    return new Promise((resolve, reject) => {
        const req = https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'application/json, text/html, */*'
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

// YÖKAtlas program list endpoint
async function fetchProgramList(puanTuru) {
    // b= parameter is program code, we need the list endpoint
    const url = `https://yokatlas.yok.gov.tr/tercih-sihirbazi-t4-tablo.php?p=${puanTuru}`
    const html = await get(url)

    // Extract program data from table
    const rows = []
    const rowRegex = /<tr[^>]*>[\s\S]*?<\/tr>/gi
    const tdRegex = /<td[^>]*>([\s\S]*?)<\/td>/gi
    const linkRegex = /y=(\d+)/

    let rowMatch
    while ((rowMatch = rowRegex.exec(html)) !== null) {
        const row = rowMatch[0]
        const tds = []
        let tdMatch
        while ((tdMatch = tdRegex.exec(row)) !== null) {
            tds.push(tdMatch[1].replace(/<[^>]+>/g, '').trim())
        }

        const linkMatch = row.match(linkRegex)
        if (linkMatch && tds.length >= 4) {
            rows.push({
                yop: linkMatch[1],
                data: tds
            })
        }
    }

    return rows
}

async function fetchProgramDetail(yopKodu) {
    const url = `https://yokatlas.yok.gov.tr/lisans.php?y=${yopKodu}`
    const html = await get(url)

    // Extract key data
    const result = { yop: yopKodu }

    // University name
    const uniMatch = html.match(/<h2[^>]*>([^<]+)<\/h2>/)
    if (uniMatch) result.university = uniMatch[1].trim()

    // Program name  
    const progMatch = html.match(/<h3[^>]*>([^<]+)<\/h3>/)
    if (progMatch) result.program = progMatch[1].trim()

    // Score and rank from tables
    const scoreMatch = html.match(/(\d{3}\.\d+)/)
    if (scoreMatch) result.minScore = parseFloat(scoreMatch[1])

    return result
}

// Better approach: use the search/filter endpoint
async function fetchByPuanTuru(puanTuru) {
    // Try the netler endpoint which has structured data
    const url = `https://yokatlas.yok.gov.tr/netler.php?p=${puanTuru}`
    const html = await get(url)
    console.log(`${puanTuru} page length: ${html.length}`)

    // Look for JSON data in page
    const jsonMatch = html.match(/var\s+\w+\s*=\s*(\[[\s\S]+?\]);/)
    if (jsonMatch) {
        try {
            return JSON.parse(jsonMatch[1])
        } catch (e) { }
    }

    return []
}

async function main() {
    // Test with a known program
    console.log('Testing YÖKAtlas direct access...')

    // Boğaziçi Bilgisayar Mühendisliği - known yop code
    const testUrl = 'https://yokatlas.yok.gov.tr/lisans.php?y=102210277'
    const html = await get(testUrl)

    // Extract title
    const titleMatch = html.match(/<title>([^<]+)<\/title>/)
    console.log('Title:', titleMatch ? titleMatch[1] : 'not found')

    // Find score data
    const scoreMatches = html.match(/\d{3}\.\d{5}/g)
    console.log('Scores found:', scoreMatches ? scoreMatches.slice(0, 5) : 'none')

    // Find rank data
    const rankMatches = html.match(/>\s*(\d{1,3}(?:\.\d{3})*)\s*</g)
    console.log('Sample data:', rankMatches ? rankMatches.slice(0, 10) : 'none')

    // Save sample for inspection
    fs.writeFileSync('sample-page.html', html.substring(0, 5000))
    console.log('Saved sample to sample-page.html')
}

main().catch(console.error)
