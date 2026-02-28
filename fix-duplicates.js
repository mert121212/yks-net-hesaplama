// Duplicate programları temizle

const fs = require('fs');

// Dosyayı oku
let content = fs.readFileSync('src/data/universities.ts', 'utf8');

// Programları çıkar
const programRegex = /\{\s*university:\s*'([^']+)',\s*program:\s*'([^']+)',\s*city:\s*'([^']+)',\s*field:\s*'([^']+)',\s*minScore:\s*(\d+),\s*minRank:\s*(\d+),\s*quota:\s*(\d+)\s*\}/g;

const programs = [];
const seen = new Set();
const duplicates = [];
let match;

while ((match = programRegex.exec(content)) !== null) {
    const prog = {
        fullMatch: match[0],
        university: match[1],
        program: match[2],
        city: match[3],
        field: match[4],
        minScore: parseInt(match[5]),
        minRank: parseInt(match[6]),
        quota: parseInt(match[7])
    };

    const key = `${prog.university}|${prog.program}|${prog.field}`;

    if (seen.has(key)) {
        duplicates.push(prog.fullMatch);
        console.log(`❌ Duplicate bulundu: ${prog.university} - ${prog.program} (${prog.field})`);
    } else {
        seen.add(key);
        programs.push(prog);
    }
}

console.log(`\n📊 Toplam ${programs.length + duplicates.length} program bulundu`);
console.log(`✅ ${programs.length} benzersiz program`);
console.log(`❌ ${duplicates.length} duplicate program\n`);

// Duplicate'leri sil
duplicates.forEach(dup => {
    // İlk bulduğunu sil
    const index = content.indexOf(dup);
    if (index !== -1) {
        // Öncesindeki virgülü veya sonrasındaki virgülü da sil
        let start = index;
        let end = index + dup.length;

        // Sonrasında virgül varsa onu da sil
        if (content[end] === ',') {
            end++;
            // Sonrasındaki boşlukları da sil
            while (content[end] === ' ' || content[end] === '\n' || content[end] === '\r') {
                end++;
            }
        } else {
            // Öncesinde virgül varsa onu sil
            start--;
            while (start >= 0 && (content[start] === ' ' || content[start] === '\n' || content[start] === '\r' || content[start] === ',')) {
                start--;
            }
            start++;
        }

        content = content.substring(0, start) + content.substring(end);
    }
});

// Dosyaya yaz
fs.writeFileSync('src/data/universities.ts', content, 'utf8');

console.log('✅ Duplicate programlar temizlendi!');
console.log(`📊 Yeni toplam: ${programs.length} program`);
