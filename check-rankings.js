// Sıralama ve Yıl İstatistiklerini Kontrol Et
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
    const equalIdx = content.indexOf('=');
    if (equalIdx === -1) return [];
    const startIdx = content.indexOf('[', equalIdx);
    const endIdx = content.lastIndexOf(']');
    if (startIdx === -1 || endIdx === -1) return [];

    try {
        return JSON.parse(content.substring(startIdx, endIdx + 1));
    } catch (e) {
        return [];
    }
}

let allPrograms = [];

files.forEach(({ file, field }) => {
    const list = extractPrograms(file);
    const with26 = list.filter(p => p.minRank2026).length;
    const with25 = list.filter(p => p.minRank2025).length;
    console.log(`📁 ${field} (${path.basename(file)}): ${list.length} program (2026: ${with26}, 2025: ${with25})`);
    allPrograms = allPrograms.concat(list);
});

const total2026 = allPrograms.filter(p => p.minRank2026).length;
const total2025 = allPrograms.filter(p => p.minRank2025).length;
const totalBoth = allPrograms.filter(p => p.minRank2026 && p.minRank2025).length;

console.log(`\n📊 TOPLAM: ${allPrograms.length} üniversite programı`);
console.log(`⚡ 2026 Verisi Olan: ${total2026} program`);
console.log(`📅 2025 Verisi Olan: ${total2025} program`);
console.log(`🔄 Her İki Yıl da Olan (Karşılaştırılabilir): ${totalBoth} program\n`);

// Alan bazında istatistikler
const fields = ['SAY', 'EA', 'SOZ', 'DIL'];

fields.forEach(field => {
    const fieldProgs = allPrograms.filter(p => p.field === field);
    if (fieldProgs.length === 0) return;

    const ranks26 = fieldProgs.map(p => p.minRank2026 || p.minRank).sort((a, b) => a - b);
    const ranks25 = fieldProgs.map(p => p.minRank2025 || p.minRank).sort((a, b) => a - b);
    const scores26 = fieldProgs.map(p => p.minScore2026 || p.minScore).sort((a, b) => b - a);

    console.log(`\n${field} (${fieldProgs.length} program):`);
    console.log(`  2026 Sıralama: En iyi: ${ranks26[0].toLocaleString('tr-TR')} | En kötü: ${ranks26[ranks26.length - 1].toLocaleString('tr-TR')} | Medyan: ${ranks26[Math.floor(ranks26.length / 2)].toLocaleString('tr-TR')}`);
    console.log(`  2025 Sıralama: En iyi: ${ranks25[0].toLocaleString('tr-TR')} | En kötü: ${ranks25[ranks25.length - 1].toLocaleString('tr-TR')} | Medyan: ${ranks25[Math.floor(ranks25.length / 2)].toLocaleString('tr-TR')}`);
    console.log(`  Puan Aralığı : ${scores26[scores26.length - 1]} - ${scores26[0]} (Ortalama: ${(scores26.reduce((a, b) => a + b, 0) / scores26.length).toFixed(2)})`);
});

console.log('\n\n🔝 2026 vs 2025 Karşılaştırmalı Örnek Zirve Programlar:');
allPrograms.slice(0, 5).forEach((p, i) => {
    const diff = (p.minRank2025 && p.minRank2026) ? (p.minRank2025 - p.minRank2026) : null;
    const diffStr = diff !== null ? (diff > 0 ? `▲ +${diff.toLocaleString('tr-TR')} yükseldi` : `▼ ${Math.abs(diff).toLocaleString('tr-TR')} geriledi`) : '-';
    console.log(`  ${i + 1}. ${p.university} - ${p.program} (${p.field}):`);
    console.log(`     2026: Sıra ${p.minRank2026 ? p.minRank2026.toLocaleString('tr-TR') : '-'}, Puan ${p.minScore2026 || '-'}`);
    console.log(`     2025: Sıra ${p.minRank2025 ? p.minRank2025.toLocaleString('tr-TR') : '-'}, Puan ${p.minScore2025 || '-'}`);
    console.log(`     Trend: ${diffStr}`);
});
