// Üniversite verilerini doğrula

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

console.log(`📊 Toplam ${programs.length} program bulundu\n`);

// Sorunları tespit et
const issues = [];

// 1. Puan ve sıralama tutarlılığı kontrolü
console.log('🔍 Puan-Sıralama Tutarlılığı Kontrolü...');
let scoreRankIssues = 0;

programs.forEach((prog, index) => {
    // Yüksek puan = düşük sıralama olmalı
    // Düşük puan = yüksek sıralama olmalı

    // Aynı alan içinde karşılaştır
    const sameField = programs.filter(p => p.field === prog.field);

    sameField.forEach(other => {
        if (other === prog) return;

        // Eğer puan daha yüksekse, sıralama daha düşük olmalı
        if (prog.minScore > other.minScore && prog.minRank > other.minRank) {
            scoreRankIssues++;
            if (scoreRankIssues <= 10) { // İlk 10 hatayı göster
                issues.push({
                    type: 'PUAN-SIRALAMA UYUMSUZLUĞU',
                    message: `${prog.university} - ${prog.program} (${prog.field}): Puan ${prog.minScore} > ${other.minScore} ama sıralama ${prog.minRank} > ${other.minRank} (${other.university} - ${other.program})`
                });
            }
        }
    });
});

console.log(`   ${scoreRankIssues > 0 ? '❌' : '✅'} ${scoreRankIssues} puan-sıralama uyumsuzluğu bulundu\n`);

// 2. Puan aralığı kontrolü
console.log('🔍 Puan Aralığı Kontrolü...');
const fieldRanges = {
    'SAY': { min: 300, max: 600 },
    'EA': { min: 300, max: 600 },
    'SOZ': { min: 300, max: 600 },
    'DIL': { min: 300, max: 600 }
};

let scoreRangeIssues = 0;
programs.forEach(prog => {
    const range = fieldRanges[prog.field];
    if (prog.minScore < range.min || prog.minScore > range.max) {
        scoreRangeIssues++;
        if (scoreRangeIssues <= 10) {
            issues.push({
                type: 'PUAN ARALIK DIŞI',
                message: `${prog.university} - ${prog.program} (${prog.field}): Puan ${prog.minScore} (beklenen: ${range.min}-${range.max})`
            });
        }
    }
});

console.log(`   ${scoreRangeIssues > 0 ? '❌' : '✅'} ${scoreRangeIssues} puan aralık dışı bulundu\n`);

// 3. Sıralama aralığı kontrolü
console.log('🔍 Sıralama Aralığı Kontrolü...');
let rankRangeIssues = 0;
programs.forEach(prog => {
    if (prog.minRank < 50 || prog.minRank > 500000) {
        rankRangeIssues++;
        if (rankRangeIssues <= 10) {
            issues.push({
                type: 'SIRALAMA ARALIK DIŞI',
                message: `${prog.university} - ${prog.program}: Sıralama ${prog.minRank} (beklenen: 50-500000)`
            });
        }
    }
});

console.log(`   ${rankRangeIssues > 0 ? '❌' : '✅'} ${rankRangeIssues} sıralama aralık dışı bulundu\n`);

// 4. Duplicate kontrolü
console.log('🔍 Duplicate Program Kontrolü...');
const duplicates = new Map();
programs.forEach(prog => {
    const key = `${prog.university}|${prog.program}|${prog.field}`;
    if (duplicates.has(key)) {
        duplicates.set(key, duplicates.get(key) + 1);
    } else {
        duplicates.set(key, 1);
    }
});

const duplicateCount = Array.from(duplicates.values()).filter(count => count > 1).length;
console.log(`   ${duplicateCount > 0 ? '❌' : '✅'} ${duplicateCount} duplicate program bulundu\n`);

if (duplicateCount > 0) {
    duplicates.forEach((count, key) => {
        if (count > 1 && issues.length < 50) {
            const [uni, prog, field] = key.split('|');
            issues.push({
                type: 'DUPLICATE',
                message: `${uni} - ${prog} (${field}): ${count} kez tekrar ediyor`
            });
        }
    });
}

// 5. Alan dağılımı
console.log('📈 Alan Dağılımı:');
const fieldCounts = {};
programs.forEach(prog => {
    fieldCounts[prog.field] = (fieldCounts[prog.field] || 0) + 1;
});

Object.entries(fieldCounts).forEach(([field, count]) => {
    const percentage = ((count / programs.length) * 100).toFixed(1);
    console.log(`   ${field}: ${count} program (%${percentage})`);
});

// Sonuçları göster
console.log('\n' + '='.repeat(60));
if (issues.length === 0) {
    console.log('✅ TÜM KONTROLLER BAŞARILI!');
} else {
    console.log(`❌ ${issues.length} SORUN BULUNDU:\n`);
    issues.slice(0, 20).forEach((issue, i) => {
        console.log(`${i + 1}. [${issue.type}] ${issue.message}`);
    });

    if (issues.length > 20) {
        console.log(`\n... ve ${issues.length - 20} sorun daha`);
    }
}
console.log('='.repeat(60));

// Özet
console.log('\n📊 ÖZET:');
console.log(`   Toplam Program: ${programs.length}`);
console.log(`   Puan-Sıralama Uyumsuzluğu: ${scoreRankIssues}`);
console.log(`   Puan Aralık Dışı: ${scoreRangeIssues}`);
console.log(`   Sıralama Aralık Dışı: ${rankRangeIssues}`);
console.log(`   Duplicate: ${duplicateCount}`);
console.log(`   Toplam Sorun: ${scoreRankIssues + scoreRangeIssues + rankRangeIssues + duplicateCount}`);
