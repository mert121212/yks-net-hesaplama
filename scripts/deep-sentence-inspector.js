const fs = require('fs');
const path = require('path');

const PATTERNS = [
    { name: 'PASIF_MEKTEDIR', regex: /(?:mektedir|maktadır|ilmektedir|ulmaktadır|ilmektedirler|ulmaktadırlar)\b/i },
    { name: 'PASIF_MELIDIR', regex: /(?:ilmelidir|ulmalıdır|ilmelidirler|ulmalıdırlar|edilmelidir|yapılmalıdır)\b/i },
    { name: 'BILIRSINIZ_POLITE', regex: /(?:ebilirsiniz|abilirsiniz|edebilirsiniz|yapabilirsiniz|görebilirsiniz|inceleyebilirsiniz|faydalanabilirsiniz|öğrenebilirsiniz|ulaşabilirsiniz|hesaplayabilirsiniz|kullanabilirsiniz|başvurabilirsiniz)\b/i },
    { name: 'AI_GECIS', regex: /\b(bu\s+doğrultuda|bu\s+kapsamda|bu\s+bağlamda|bu\s+çerçevede|buna\s+ek\s+olarak|bunun\s+yanı\s+sıra|bununla\s+birlikte)\b/i },
    { name: 'AI_DOLGU', regex: /\b(katkı\s+sağla|ön\s+plana\s+çık|büyük\s+bir\s+önem|oldukça\s+önemlidir|sonuç\s+olarak|özetlemek\s+gerekirse|unutulmamalıdır\s+ki|göz\s+ardı\s+edilmemelidir|adeta\s+bir|kuşkusuz|şüphesiz\s+ki|başarıya\s+giden\s+yol|başarının\s+anahtarı)\b/i }
];

function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(fullPath));
        } else if (file.endsWith('.tsx') && !file.includes('layout') && !file.includes('loading') && !file.startsWith('_')) {
            results.push(fullPath);
        }
    });
    return results;
}

const allFiles = getFiles(path.join(__dirname, '..', 'src', 'app'))
    .concat(getFiles(path.join(__dirname, '..', 'src', 'components')));

console.log(`Toplam taranacak dosya: ${allFiles.length}`);

let totalHits = 0;
const report = [];

allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    const fileHits = [];

    lines.forEach((line, idx) => {
        const trimmed = line.trim();
        if (trimmed.startsWith('import ') || trimmed.startsWith('export ') || trimmed.startsWith('//') || trimmed.startsWith('const ') || trimmed.startsWith('type ') || trimmed.startsWith('interface ')) {
            return;
        }
        
        // Strip tags
        const text = line
            .replace(/<[^>]+>/g, ' ')
            .replace(/&[a-z]+;/gi, ' ')
            .replace(/\s+/g, ' ')
            .trim();

        if (text.length < 10) return;

        PATTERNS.forEach(pat => {
            const m = text.match(pat.regex);
            if (m) {
                fileHits.push({
                    lineNum: idx + 1,
                    type: pat.name,
                    matched: m[0],
                    text: text
                });
            }
        });
    });

    if (fileHits.length > 0) {
        totalHits += fileHits.length;
        const rel = path.relative(path.join(__dirname, '..'), file);
        report.push({ rel, hits: fileHits });
    }
});

console.log(`\nToplam bulunan şüpheli eşleşme: ${totalHits}`);
report.forEach(r => {
    console.log(`\n📄 ${r.rel} (${r.hits.length} adet):`);
    r.hits.forEach(h => {
        console.log(`   [L${h.lineNum}] [${h.type}] "${h.matched}" -> ${h.text.slice(0, 100)}...`);
    });
});
