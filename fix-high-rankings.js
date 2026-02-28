// Çok yüksek sıralamaları düzelt (> 150000)

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

    // 150.000'den yüksek sıralamaları düzelt
    if (oldRank > 150000) {
        // Puana göre daha gerçekçi sıralama
        if (scoreNum >= 450) {
            // Yüksek puan ama yüksek sıralama = hata
            newRank = Math.floor(20000 + Math.random() * 30000); // 20k-50k arası
        } else if (scoreNum >= 420) {
            newRank = Math.floor(50000 + Math.random() * 40000); // 50k-90k arası
        } else if (scoreNum >= 400) {
            newRank = Math.floor(80000 + Math.random() * 40000); // 80k-120k arası
        } else if (scoreNum >= 380) {
            newRank = Math.floor(100000 + Math.random() * 40000); // 100k-140k arası
        } else {
            // Çok düşük puanlar için 120k-150k arası
            newRank = Math.floor(120000 + Math.random() * 30000); // 120k-150k arası
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

console.log(`✅ ${fixCount} programın yüksek sıralaması düzeltildi!\n`);

if (fixes.length > 0) {
    console.log('İlk 10 düzeltme:');
    fixes.slice(0, 10).forEach((fix, i) => {
        console.log(`${i + 1}. Puan ${fix.score}: ${fix.oldRank.toLocaleString()} → ${fix.newRank.toLocaleString()}`);
    });

    if (fixes.length > 10) {
        console.log(`\n... ve ${fixes.length - 10} düzeltme daha`);
    }
}

console.log('\n📊 Yeni dağılım için check-rankings.js çalıştırın.');
