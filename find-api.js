const https = require('https')

function get(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
            const chunks = []
            res.on('data', c => chunks.push(c))
            res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
        }).on('error', reject)
    })
}

async function main() {
    const text = await get('https://yokatlas.yok.gov.tr/lisans-anasayfa.php')
    const matches = text.match(/ajax[^;]+\.php[^'"]+/g) || []
    const phpFiles = text.match(/["']([^"']*\.php[^"']*)['"]/g) || []
    console.log('PHP files found:')
    console.log([...new Set(phpFiles)].slice(0, 30).join('\n'))
}

main().catch(console.error)
