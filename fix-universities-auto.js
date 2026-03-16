// Otomatik üniversite verisi düzeltme scripti
// Kullanım: node fix-universities-auto.js

const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'src', 'data', 'universities.ts');

function loadRawFile() {
    const content = fs.readFileSync(FILE_PATH, 'utf8');

    const firstBracket = content.indexOf('[');
    const lastBracket = content.lastIndexOf(']');

    if (firstBracket === -1 || lastBracket === -1) {
        throw new Error('Köşeli parantezler bulunamadı, dosya formatı beklenen gibi değil.');
    }

    const header = content.slice(0, firstBracket);
    const arrayText = content.slice(firstBracket, lastBracket + 1);

    // JSON.parse yerine JS parser kullan (virgüller / küçük sapmalar tolere edilsin)
    let programs;
    try {
        const vm = require('vm');
        const sandbox = {};
        vm.createContext(sandbox);
        vm.runInContext('data = ' + arrayText, sandbox);
        programs = sandbox.data;
    } catch (e) {
        console.error('JS parse hatası. universities.ts içindeki dizi geçerli JS/JSON olmalı.');
        throw e;
    }

    if (!Array.isArray(programs)) {
        throw new Error('Beklenen format: dizi (Array).');
    }

    return { header, programs };
}

function normalizeField(field) {
    if (field === 'SÖZ') return 'SOZ';
    if (field === 'DİL') return 'DIL';
    return field;
}

function fixPrograms(programs) {
    // 1) Alan kodlarını normalize et
    const normalized = programs.map(p => ({
        ...p,
        field: normalizeField(p.field),
    }));

    // 2) Aynı üniversite + program + şehir için yanlış alanlı kopyaları at
    const groupedByUpc = new Map();

    for (const prog of normalized) {
        const key = `${prog.university}|${prog.program}|${prog.city}`;
        if (!groupedByUpc.has(key)) {
            groupedByUpc.set(key, []);
        }
        groupedByUpc.get(key).push(prog);
    }

    const resolved = [];

    for (const [, group] of groupedByUpc) {
        if (group.length === 1) {
            resolved.push(group[0]);
            continue;
        }

        // Öncelik: SAY > EA > SOZ > DIL
        const priority = ['SAY', 'EA', 'SOZ', 'DIL'];

        let chosen = null;
        for (const field of priority) {
            const candidate = group.find(p => p.field === field);
            if (candidate) {
                chosen = candidate;
                break;
            }
        }

        if (!chosen) {
            // Hiçbiri öncelikli değilse, ilkini al
            chosen = group[0];
        }

        resolved.push(chosen);
    }

    // 3) Aynı üniversite+program+şehir+field kombinasyonundaki kopyaları da temizle
    const finalMap = new Map();
    for (const prog of resolved) {
        const key = `${prog.university}|${prog.program}|${prog.city}|${prog.field}`;
        if (!finalMap.has(key)) {
            finalMap.set(key, prog);
        } else {
            const existing = finalMap.get(key);
            // Daha iyi (daha küçük) sıralamaya sahip olanı tut
            if (typeof prog.minRank === 'number' && typeof existing.minRank === 'number') {
                if (prog.minRank < existing.minRank) {
                    finalMap.set(key, prog);
                }
            }
        }
    }

    return Array.from(finalMap.values());
}

function saveFile(header, programs) {
    // Güzel biçimlendirilmiş JSON yaz
    const arrayText = JSON.stringify(programs, null, 2);

    let prefix = header;
    if (!prefix.trim()) {
        prefix = "import { UniversityProgram } from '@/types/yks'\n\n// 2025 YKS taban puanları - YÖKAtlas (14.03.2026)\nexport const universityPrograms: UniversityProgram[] = ";
    }

    const output = `${prefix}${arrayText}\n`;

    fs.writeFileSync(FILE_PATH, output, 'utf8');
}

function main() {
    console.log('🔧 Üniversite verisi otomatik düzeltme başlatılıyor...');
    const { header, programs } = loadRawFile();
    console.log(`   Okunan program sayısı: ${programs.length}`);

    const fixed = fixPrograms(programs);
    console.log(`   Düzeltilmiş program sayısı: ${fixed.length}`);

    saveFile(header, fixed);
    console.log('✅ universities.ts başarıyla güncellendi.');
}

if (require.main === module) {
    main();
}

