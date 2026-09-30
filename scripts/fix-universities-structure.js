const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, '../src/data/universities.ts')
let content = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n')

// Hatalı bloğu bul
const badStartMarker = '  const targetField = fieldMap[fieldKey,\n'
const badEndMarker = '\n]\n\n  return universityPrograms'

const startPos = content.indexOf(badStartMarker)
const endPos = content.indexOf(badEndMarker)

if (startPos === -1 || endPos === -1) {
    console.error('İşaretçiler bulunamadı!')
    process.exit(1)
}

const extractedPrograms = content.slice(startPos + badStartMarker.length, endPos).trim()

// getMatchingPrograms fonksiyonunu düzelt
const restOfFile = `  const targetField = fieldMap[fieldKey]\n\n  return universityPrograms` + content.slice(endPos + badEndMarker.length)

// Dosyanın ilk kısmını al (başlangıçtan "  }\n]" kısmına kadar)
const firstPartEndMarker = '    "quota": 155\n  }\n]'
const firstPartEndPos = content.indexOf(firstPartEndMarker)

if (firstPartEndPos === -1) {
    console.error('firstPartEndMarker bulunamadı!')
    process.exit(1)
}

const beforeClosing = content.slice(0, firstPartEndPos + '    "quota": 155\n  }'.length)

// Şimdi tüm dosyayı doğru sırayla birleştir
const fixedContent = `${beforeClosing},\n${extractedPrograms}\n]\n\n// Basit eşleşme fonksiyonu: kullanıcı sıralamasına ve alana göre programları getirir\nexport function getMatchingPrograms(\n  userRank: number,\n  fieldKey: 'say' | 'ea' | 'soz' | 'dil',\n  limit: number = 500\n): UniversityProgram[] {\n  const fieldMap: Record<typeof fieldKey, FieldType> = {\n    say: 'SAY',\n    ea: 'EA',\n    soz: 'SOZ',\n    dil: 'DIL'\n  }\n\n${restOfFile}\n`

fs.writeFileSync(filePath, fixedContent, 'utf8')
console.log('universities.ts yapısı başarıyla düzeltildi!')
