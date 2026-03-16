const fs = require('fs')

// Strip UTF-8 BOM if present
let rawContent = fs.readFileSync('raw-universities.json', 'utf8')
if (rawContent.charCodeAt(0) === 0xFEFF) rawContent = rawContent.slice(1)

const raw = JSON.parse(rawContent)

// Score type mapping
const scoreTypeMap = {
    'SAY': 'SAY',
    'EA': 'EA',
    'SOZ': 'SÖZ',
    'DIL': 'DİL'
}

function toTitleCase(str) {
    if (!str) return ''
    return str.toLowerCase()
        .replace(/(?:^|\s|['"([{])\S/g, c => c.toUpperCase())
        .replace(/İ/g, 'İ')
        .replace(/I/g, 'I')
}

function fixCity(city) {
    if (!city) return ''
    return city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
        .replace('istanbul', 'İstanbul')
        .replace('izmir', 'İzmir')
        .replace('ankara', 'Ankara')
}

const programs = raw.map(p => {
    const score2025 = parseFloat(p.taban?.['2025'] || '0')
    const rank2025 = parseInt(p.tbs?.['2025'] || '0')
    const quota = p.kontenjan?.['2025'] ? parseInt(p.kontenjan['2025'].split('+')[0]) : 0

    if (score2025 < 200 || rank2025 === 0) return null

    const uniName = p.uni_adi ? toTitleCase(p.uni_adi) : ''
    const programName = p.program_adi ? toTitleCase(p.program_adi) : ''
    const city = p.sehir_adi ? toTitleCase(p.sehir_adi) : ''

    // Determine field from score_type in program data
    let field = 'SAY'
    if (p.puan_turu) {
        field = scoreTypeMap[p.puan_turu] || 'SAY'
    }

    return {
        university: uniName,
        program: programName,
        city: city,
        field: field,
        minScore: Math.round(score2025 * 100) / 100,
        minRank: rank2025,
        quota: quota || 30
    }
}).filter(Boolean)

// Remove duplicates
const seen = new Set()
const unique = programs.filter(p => {
    const key = `${p.university}-${p.program}-${p.field}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
})

console.log(`Total unique programs: ${unique.length}`)

// Generate TypeScript
const ts = `import { UniversityProgram } from '@/types/yks'

// 2025 YKS taban puanları - YÖKAtlas API'den çekilmiştir (${new Date().toLocaleDateString('tr-TR')})
export const universityPrograms: UniversityProgram[] = ${JSON.stringify(unique, null, 4)}
`

fs.writeFileSync('src/data/universities.ts', ts, 'utf8')
console.log('Written to src/data/universities.ts')
