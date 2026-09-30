const fs = require('fs')
const path = require('path')

const target = path.resolve(__dirname, '../src/data/universities.ts')
let content = fs.readFileSync(target, 'utf8')

// 1. Unicode combining dot karakteri temizliği (i̇ -> i)
content = content.replace(/i\u0307/g, 'i')

// 2. Türkçe karakter düzeltmeleri
content = content.replace(/"city": "Balikesir"/g, '"city": "Balıkesir"')
content = content.replace(/"city": "Aydin"/g, '"city": "Aydın"')
content = content.replace(/"city": "Diyarbakir"/g, '"city": "Diyarbakır"')
content = content.replace(/"city": "Kirikkale"/g, '"city": "Kırıkkale"')

// 3. NFC Standardizasyonu
content = content.normalize('NFC')

fs.writeFileSync(target, content, 'utf8')
console.log('Başarılı: universities.ts şehir ve Unicode karakterleri normalize edildi.')
