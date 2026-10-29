// Sıralama istatistiklerini kontrol et
const fs = require('fs');
const path = require('path');

const files = [
    { file: 'src/data/universities/sayisal.ts', field: 'SAY' },
    { file: 'src/data/universities/esitAgirlik.ts', field: 'EA' },
    { file: 'src/data/universities/sozel.ts', field: 'SOZ' },
    { file: 'src/data/universities/dil.ts', field: 'DIL' },
];

function extractPrograms(filePath) {
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf8');
    const jsonMatch = content.match(/\[([\s\S]*?)\]\s*(?:;|\n|$)/);
    if (!jsonMatch) return [];

    try {
        return JSON.parse(`[${jsonMatch[1]}]`);
    } catch (e) {
        // Fallback regex if trailing comma or non-strict JSON
        const items = [];
        const objRegex = /\{[\s\S]*?"university":\s*"([^"]+)"[\s\S]*?"program":\s*"([^"]+)"[\s\S]*?"city":\s*"([^"]+)"[\s\S]*?"field":\s*"([^"]+)"[\s\S]*?"minScore":\s*([\d.]+)[\s\S]*?"minRank":\s*(\d+)[\s\S]*?"quota":\s*(\d+)[\s\S]*?\}/g;
        let m;
        while ((m = objRegex.exec(content)) !== null) {
            items.push({
                university: m[1],
                program: m[2],
                city: m[3],
                field: m[4],
                minScore: parseFloat(m[5]),
                minRank: parseInt(m[6]),
                quota: parseInt(m[7]),
            });
        }
        return items;
    }
}

let allPrograms = [];

files.forEach(({ file, field }) => {
    const list = extractPrograms(file);
    console.log(`📁 ${field} (${path.basename(file)}): ${list.length} program`);
    allPrograms = allPrograms.concat(list);
});

console.log(`\n📊 TOPLAM: ${allPrograms.length} üniversite programı\n`);

// Alan bazında istatistikler
const fields = ['SAY', 'EA', 'SOZ', 'DIL'];

fields.forEach(field => {
    const fieldProgs = allPrograms.filter(p => p.field === field);
    if (fieldProgs.length === 0) return;

    const ranks = fieldProgs.map(p => p.minRank).sort((a, b) => a - b);
    const scores = fieldProgs.map(p => p.minScore).sort((a, b) => b - a);

    console.log(`\n${field} (${fieldProgs.length} program):`);
    console.log(`  Sıralama:`);
    console.log(`    En iyi: ${ranks[0].toLocaleString('tr-TR')}`);
    console.log(`    En kötü: ${ranks[ranks.length - 1].toLocaleString('tr-TR')}`);
    console.log(`    Ortalama: ${Math.round(ranks.reduce((a, b) => a + b, 0) / ranks.length).toLocaleString('tr-TR')}`);
    console.log(`    Medyan: ${ranks[Math.floor(ranks.length / 2)].toLocaleString('tr-TR')}`);

    console.log(`  Puan:`);
    console.log(`    En yüksek: ${scores[0]}`);
    console.log(`    En düşük: ${scores[scores.length - 1]}`);
    console.log(`    Ortalama: ${(scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2)}`);

    // Sıralama dağılımı
    const ranges = [
        { name: '1 - 1.000', count: ranks.filter(r => r <= 1000).length },
        { name: '1.001 - 5.000', count: ranks.filter(r => r > 1000 && r <= 5000).length },
        { name: '5.001 - 10.000', count: ranks.filter(r => r > 5000 && r <= 10000).length },
        { name: '10.001 - 50.000', count: ranks.filter(r => r > 10000 && r <= 50000).length },
        { name: '50.001 - 100.000', count: ranks.filter(r => r > 50000 && r <= 100000).length },
        { name: '100.001 - 200.000', count: ranks.filter(r => r > 100000 && r <= 200000).length },
        { name: '200.000+', count: ranks.filter(r => r > 200000).length },
    ];

    console.log(`  Dağılım:`);
    ranges.forEach(range => {
        if (range.count > 0) {
            const percentage = ((range.count / fieldProgs.length) * 100).toFixed(1);
            console.log(`    ${range.name}: ${range.count} program (%${percentage})`);
        }
    });
});

console.log('\n\n🔝 En İYİ 5 Program:');
allPrograms.sort((a, b) => a.minRank - b.minRank).slice(0, 5).forEach((p, i) => {
    console.log(`  ${i + 1}. ${p.university} - ${p.program} (${p.field}): Sıra ${p.minRank.toLocaleString('tr-TR')}, Puan ${p.minScore}`);
});

console.log('\n📉 En Yüksek Sıralamalı 5 Program:');
allPrograms.sort((a, b) => b.minRank - a.minRank).slice(0, 5).forEach((p, i) => {
    console.log(`  ${i + 1}. ${p.university} - ${p.program} (${p.field}): Sıra ${p.minRank.toLocaleString('tr-TR')}, Puan ${p.minScore}`);
});
