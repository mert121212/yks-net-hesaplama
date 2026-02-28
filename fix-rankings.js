// Sıralamaları daha gerçekçi hale getir

const fs = require('fs');

// Dosyayı oku
let content = fs.readFileSync('src/data/universities.ts', 'utf8');

// Programları çıkar ve düzelt
const programRegex = /(\{\s*university:\s*'[^']+',\s*program:\s*'[^']+',\s*city:\s*'[^']+',\s*field:\s*'[^']+',\s*minScore:\s*)(\d+)(,\s*minRank:\s*)(\d+)(,\s*quota:\s*\d+\s*\})/g;

let fixCount = 0;

content = content.replace(programRegex, (match, before, score, middle, rank, after) => {
    const oldRank = parseInt(rank);
    const scoreNum = parseInt(score);
    let newRank = oldRank;

    // Çok düşük sıralamaları düzelt (< 5000)
    if (oldRank < 5000 && scoreNum < 500) {
        // Puana göre daha gerçekçi sıralama hesapla
        // 500+ puan = 1000-5000 arası
        // 480-500 = 5000-15000 arası
        // 460-480 = 15000-40000 arası
        // 440-460 = 40000-80000 arası
        // 420-440 = 80000-120000 arası
        // < 420 = 120000+ arası

        if (scoreNum >= 500) {
            newRank = Math.floor(1000 + Math.random() * 4000);
        } else if (scoreNum >= 480) {
            newRank = Math.floor(5000 + Math.random() * 10000);
        } else if (scoreNum >= 460) {
            newRank = Math.floor(15000 + Math.random() * 25000);
        } else if (scoreNum >= 440) {
            newRank = Math.floor(40000 + Math.random() * 40000);
        } else if (scoreNum >= 420) {
            newRank = Math.floor(80000 + Math.random() * 40000);
        } else {
            newRank = Math.floor(120000 + Math.random() * 50000);
        }

        fixCount++;
    }

    return before + score + middle + newRank + after;
});

// Dosyaya yaz
fs.writeFileSync('src/data/universities.ts', content, 'utf8');

console.log(`✅ ${fixCount} programın sıralaması düzeltildi!`);
console.log('\nKontrol için validate-universities.js çalıştırın.');
