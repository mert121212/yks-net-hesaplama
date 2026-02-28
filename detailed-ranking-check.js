// Detaylı sıralama dağılımı

const fs = require('fs');

const content = fs.readFileSync('src/data/universities.ts', 'utf8');
const programRegex = /\{\s*university:\s*'([^']+)',\s*program:\s*'([^']+)',\s*city:\s*'([^']+)',\s*field:\s*'([^']+)',\s*minScore:\s*(\d+),\s*minRank:\s*(\d+),\s*quota:\s*(\d+)\s*\}/g;

const programs = [];
let match;

while ((match = programRegex.exec(content)) !== null) {
    programs.push({
        university: match[1],
        program: match[2],
        field: match[4],
        minScore: parseInt(match[5]),
        minRank: parseInt(match[6])
    });
}

console.log(`📊 Toplam ${programs.length} program\n`);

// Detaylı dağılım
const ranges = [
    { name: '1-5.000', min: 0, max: 5000 },
    { name: '5.001-10.000', min: 5001, max: 10000 },
    { name: '10.001-20.000', min: 10001, max: 20000 },
    { name: '20.001-30.000', min: 20001, max: 30000 },
    { name: '30.001-50.000', min: 30001, max: 50000 },
    { name: '50.001-75.000', min: 50001, max: 75000 },
    { name: '75.001-100.000', min: 75001, max: 100000 },
    { name: '100.001-150.000', min: 100001, max: 150000 }
];

console.log('DETAYLI SIRALAMA DAĞILIMI:\n');

ranges.forEach(range => {
    const count = programs.filter(p => p.minRank >= range.min && p.minRank <= range.max).length;
    const percentage = ((count / programs.length) * 100).toFixed(1);
    const bar = '█'.repeat(Math.floor(count / 10));
    console.log(`${range.name.padEnd(20)} ${count.toString().padStart(3)} program (%${percentage.padStart(4)}) ${bar}`);
});

// Alan bazında detaylı dağılım
console.log('\n\nALAN BAZINDA DAĞILIM:\n');

['SAY', 'EA', 'SOZ', 'DIL'].forEach(field => {
    const fieldProgs = programs.filter(p => p.field === field);
    console.log(`\n${field} (${fieldProgs.length} program):`);

    ranges.forEach(range => {
        const count = fieldProgs.filter(p => p.minRank >= range.min && p.minRank <= range.max).length;
        if (count > 0) {
            const percentage = ((count / fieldProgs.length) * 100).toFixed(1);
            console.log(`  ${range.name.padEnd(20)} ${count.toString().padStart(3)} (%${percentage.padStart(4)})`);
        }
    });
});

// Sorunlu alanlar
console.log('\n\n⚠️  SORUNLU ALANLAR:\n');

const lowRankCount = programs.filter(p => p.minRank < 20000).length;
const lowRankPercentage = ((lowRankCount / programs.length) * 100).toFixed(1);

console.log(`20.000'den düşük sıralama: ${lowRankCount} program (%${lowRankPercentage})`);
console.log(`Bu çok fazla! Gerçek YKS'de bu kadar iyi sıralama çok nadir.`);
console.log(`\nÖnerilen dağılım:`);
console.log(`  1-20.000: %10-15 (şu an %${lowRankPercentage})`);
console.log(`  20.001-50.000: %25-30`);
console.log(`  50.001-100.000: %30-35`);
console.log(`  100.001-150.000: %20-25`);
