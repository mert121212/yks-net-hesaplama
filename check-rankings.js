// Sıralama istatistiklerini kontrol et

const fs = require('fs');

// Dosyayı oku
const content = fs.readFileSync('src/data/universities.ts', 'utf8');

// Programları çıkar
const programRegex = /\{\s*university:\s*'([^']+)',\s*program:\s*'([^']+)',\s*city:\s*'([^']+)',\s*field:\s*'([^']+)',\s*minScore:\s*(\d+),\s*minRank:\s*(\d+),\s*quota:\s*(\d+)\s*\}/g;

const programs = [];
let match;

while ((match = programRegex.exec(content)) !== null) {
    programs.push({
        university: match[1],
        program: match[2],
        city: match[3],
        field: match[4],
        minScore: parseInt(match[5]),
        minRank: parseInt(match[6]),
        quota: parseInt(match[7])
    });
}

console.log(`📊 Toplam ${programs.length} program\n`);

// Alan bazında istatistikler
const fields = ['SAY', 'EA', 'SOZ', 'DIL'];

fields.forEach(field => {
    const fieldProgs = programs.filter(p => p.field === field);

    if (fieldProgs.length === 0) return;

    const ranks = fieldProgs.map(p => p.minRank).sort((a, b) => a - b);
    const scores = fieldProgs.map(p => p.minScore).sort((a, b) => b - a);

    console.log(`\n${field} (${fieldProgs.length} program):`);
    console.log(`  Sıralama:`);
    console.log(`    En iyi: ${ranks[0].toLocaleString()}`);
    console.log(`    En kötü: ${ranks[ranks.length - 1].toLocaleString()}`);
    console.log(`    Ortalama: ${Math.round(ranks.reduce((a, b) => a + b, 0) / ranks.length).toLocaleString()}`);
    console.log(`    Medyan: ${ranks[Math.floor(ranks.length / 2)].toLocaleString()}`);

    console.log(`  Puan:`);
    console.log(`    En yüksek: ${scores[0]}`);
    console.log(`    En düşük: ${scores[scores.length - 1]}`);
    console.log(`    Ortalama: ${Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)}`);

    // Sıralama dağılımı
    const ranges = [
        { name: '1-1000', count: ranks.filter(r => r <= 1000).length },
        { name: '1001-5000', count: ranks.filter(r => r > 1000 && r <= 5000).length },
        { name: '5001-10000', count: ranks.filter(r => r > 5000 && r <= 10000).length },
        { name: '10001-50000', count: ranks.filter(r => r > 10000 && r <= 50000).length },
        { name: '50001-100000', count: ranks.filter(r => r > 50000 && r <= 100000).length },
        { name: '100000+', count: ranks.filter(r => r > 100000).length }
    ];

    console.log(`  Dağılım:`);
    ranges.forEach(range => {
        if (range.count > 0) {
            const percentage = ((range.count / fieldProgs.length) * 100).toFixed(1);
            console.log(`    ${range.name}: ${range.count} program (%${percentage})`);
        }
    });
});

// En düşük sıralamaya sahip 10 program
console.log('\n\n🔝 En İYİ 10 Program (En Düşük Sıralama):');
const topPrograms = programs.sort((a, b) => a.minRank - b.minRank).slice(0, 10);
topPrograms.forEach((prog, i) => {
    console.log(`${i + 1}. ${prog.university} - ${prog.program} (${prog.field}): Sıralama ${prog.minRank.toLocaleString()}, Puan ${prog.minScore}`);
});

// En yüksek sıralamaya sahip 10 program
console.log('\n\n📉 En KÖTÜ 10 Program (En Yüksek Sıralama):');
const bottomPrograms = programs.sort((a, b) => b.minRank - a.minRank).slice(0, 10);
bottomPrograms.forEach((prog, i) => {
    console.log(`${i + 1}. ${prog.university} - ${prog.program} (${prog.field}): Sıralama ${prog.minRank.toLocaleString()}, Puan ${prog.minScore}`);
});

// Gerçekçi olmayan sıralamalar (çok düşük)
console.log('\n\n⚠️  ÇOK DÜŞÜK SIRALAMALAR (< 100):');
const tooLow = programs.filter(p => p.minRank < 100);
if (tooLow.length > 0) {
    tooLow.forEach(prog => {
        console.log(`  ${prog.university} - ${prog.program} (${prog.field}): Sıralama ${prog.minRank}`);
    });
} else {
    console.log('  ✅ Yok');
}

// Gerçekçi olmayan sıralamalar (çok yüksek)
console.log('\n⚠️  ÇOK YÜKSEK SIRALAMALAR (> 200000):');
const tooHigh = programs.filter(p => p.minRank > 200000);
if (tooHigh.length > 0) {
    console.log(`  ${tooHigh.length} program bulundu`);
    tooHigh.slice(0, 10).forEach(prog => {
        console.log(`  ${prog.university} - ${prog.program} (${prog.field}): Sıralama ${prog.minRank.toLocaleString()}`);
    });
    if (tooHigh.length > 10) {
        console.log(`  ... ve ${tooHigh.length - 10} program daha`);
    }
} else {
    console.log('  ✅ Yok');
}
