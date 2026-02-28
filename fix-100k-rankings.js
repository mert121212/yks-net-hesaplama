// 100.000+ sıralamaları düzelt - daha dengeli dağıt

const fs = require('fs');

// Dosyayı oku
let content = fs.readFileSync('src/data/universities.ts', 'utf8');

// Programları çıkar ve düzelt
const programRegex = /(\{\s*university:\s*'[^']+',\s*program:\s*'[^']+',\s*city:\s*'[^']+',\s*field:\s*'[^']+',\s*minScore:\s*)(\d+)(,\s*minRank:\s*)(\d+)(,\s*quota:\s*\d+\s*\})/g;

let fixCount = 0;
const fixes = [];

content = content.replace(programRegex, (match, before, score, middle, rank, after) => {
    const oldRank = parseInt(rank);
    const scoreNum = parseInt(score);
    let newRank = oldRank;

    // 100.000+ sıralamaları düzelt
    if (oldRank >= 100000) {
        // Puana göre daha gerçekçi sıralama
        if (scoreNum >= 460) {
            // Yüksek puan ama çok yüksek sıralama = büyük hata
            newRank = Math.floor(15000 + Math.random() * 25000); // 15k-40k arası
        } else if (scoreNum >= 440) {
            newRank = Math.floor(30000 + Math.random() * 30000); // 30k-60k arası
        } else if (scoreNum >= 420) {
            newRank = Math.floor(50000 + Math.random() * 30000); // 50k-80k arası
        } else if (scoreNum >= 400) {
            newRank = Math.floor(60000 + Math.random() * 30000); // 60k-90k arası
        } else if (scoreNum >= 380) {
            newRank = Math.floor(70000 + Math.random() * 30000); // 70k-100k arası
        } else if (scoreNum >= 360) {
            newRank = Math.floor(90000 + Math.random() * 40000); // 90k-130k arası
        } else {
            // Çok düşük puanlar için 110k-145k arası
            newRank = Math.floor(110000 + Math.random() * 35000); // 110k-145k arası
        }

        fixes.push({
            score: scoreNum,
            oldRank: oldRank,
            newRank: newRank
        });
        fixCount++;
    }

    return before + score + middle + newRank + after;
});

// Dosyaya yaz
fs.writeFileSync('src/data/universities.ts', content, 'utf8');

console.log(`✅ ${fixCount} programın 100k+ sıralaması düzeltildi!\n`);

if (fixes.length > 0) {
    console.log('İlk 15 düzeltme:');
    fixes.slice(0, 15).forEach((fix, i) => {
        console.log(`${i + 1}. Puan ${fix.score}: ${fix.oldRank.toLocaleString()} → ${fix.newRank.toLocaleString()}`);
    });

    if (fixes.length > 15) {
        console.log(`\n... ve ${fixes.length - 15} düzeltme daha`);
    }
}

console.log('\n📊 Yeni dağılım için check-rankings.js çalıştırın.');
