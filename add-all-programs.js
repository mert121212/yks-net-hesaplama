// new-programs.txt'deki tüm programları universities.ts'ye ekle

const fs = require('fs');

// Dosyaları oku
let content = fs.readFileSync('src/data/universities.ts', 'utf8');
const newPrograms = fs.readFileSync('new-programs.txt', 'utf8');

// Array'in kapandığı yeri bul (son ] karakteri)
const lastBracketIndex = content.lastIndexOf(']');

// Yeni içeriği oluştur - virgül ekle ve yeni programları ekle
const newContent = content.substring(0, lastBracketIndex) + ',' + newPrograms + '\n' + content.substring(lastBracketIndex);

// Dosyaya yaz
fs.writeFileSync('src/data/universities.ts', newContent, 'utf8');

console.log('✅ Tüm programlar eklendi!');

// Sayıyı kontrol et
const matches = newContent.match(/{ university:/g);
console.log(`📊 Toplam program sayısı: ${matches ? matches.length : 0}`);
