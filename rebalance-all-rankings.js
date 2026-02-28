// TÜM sıralamaları gerçekçi dağılıma göre yeniden dengele

const fs = require('fs');

let content = fs.readFileSync('src/data/universities.ts', 'utf8');

const programRegex = /(\{\s*university:\s*'[^']+',\s*program:\s*'[^']+',\s*city:\s*'[^']+',\s*field:\s*'[^']+',\s*minScore:\s*)(\d+)(,\s*minRank:\s*)(\d+)(,\s*quota:\s*\d+\s*\})/g;

let fixCount = 0;

content = content.replace(programRegex, (match, before, score, middle, rank, after) => {
    const scoreNum = parseInt(score);
    let newRank;

    // Puana göre GERÇEKÇİ sıralama dağılımı
    // Hedef: Çoğu program 50k-150k arası

    if (scoreNum >= 540) {
        // Çok yüksek puan: 100-3000 arası (çok nadir)
        newRank = Math.floor(100 + Math.random() * 2900);
    } else if (scoreNum >= 520) {
        // Yüksek puan: 3000-12000 arası
        newRank = Math.floor(3000 + Math.random() * 9000);
    } else if (scoreNum >= 500) {
        // İyi puan: 12000-30000 arası
        newRank = Math.floor(12000 + Math.random() * 18000);
    } else if (scoreNum >= 480) {
        // Orta-iyi puan: 30000-55000 arası
        newRank = Math.floor(30000 + Math.random() * 25000);
    } else if (scoreNum >= 460) {
        // Orta puan: 55000-85000 arası
        newRank = Math.floor(55000 + Math.random() * 30000);
    } else if (scoreNum >= 440) {
        // Orta-düşük puan: 85000-115000 arası
        newRank = Math.floor(85000 + Math.random() * 30000);
    } else if (scoreNum >= 420) {
        // Düşük puan: 115000-145000 arası
        newRank = Math.floor(115000 + Math.random() * 30000);
    } else if (scoreNum >= 400) {
        // Çok düşük puan: 145000-175000 arası
        newRank = Math.floor(145000 + Math.random() * 30000);
    } else if (scoreNum >= 380) {
        // Çok çok düşük puan: 175000-205000 arası
        newRank = Math.floor(175000 + Math.random() * 30000);
    } else {
        // En düşük puan: 205000-235000 arası
        newRank = Math.floor(205000 + Math.random() * 30000);
    }

    fixCount++;
    return before + score + middle + newRank + after;
});

fs.writeFileSync('src/data/universities.ts', content, 'utf8');

console.log(`✅ ${fixCount} programın sıralaması yeniden dengelendi!`);
console.log('\n📊 Yeni dağılım için detailed-ranking-check.js çalıştırın.');
