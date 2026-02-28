// new-programs.txt'deki tüm programları universities.ts'ye güvenli şekilde ekle

const fs = require('fs');

// Dosyaları oku
let content = fs.readFileSync('src/data/universities.ts', 'utf8');
const newProgramsRaw = fs.readFileSync('new-programs.txt', 'utf8');

// new-programs.txt'den sadece program satırlarını al (yorum satırlarını atla)
const programLines = newProgramsRaw
    .split('\n')
    .filter(line => line.trim().startsWith('{ university:'))
    .join('\n');

// Array'in kapandığı yeri bul - export function'dan önce
const exportFunctionIndex = content.indexOf('// Sıralamaya göre uygun bölümleri getir');

// Son virgülü bul
const lastCommaBeforeExport = content.lastIndexOf(',', exportFunctionIndex);

// Yeni içeriği oluştur
const beforePrograms = content.substring(0, lastCommaBeforeExport + 1);
const afterPrograms = content.substring(exportFunctionIndex);

const newContent = beforePrograms + '\n' + programLines + '\n]\n\n' + afterPrograms;

// Dosyaya yaz
fs.writeFileSync('src/data/universities.ts', newContent, 'utf8');

console.log('✅ Tüm programlar güvenli şekilde eklendi!');

// Sayıyı kontrol et
const matches = newContent.match(/{ university:/g);
console.log(`📊 Toplam program sayısı: ${matches ? matches.length : 0}`);
