// Üniversite verilerinde puan-sıralama tutarlılığını otomatik düzeltme
// Kullanım: node fix-universities-ranking-consistency.js

const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'src', 'data', 'universities.ts');

function loadPrograms() {
  const content = fs.readFileSync(FILE_PATH, 'utf8');

  // validate-universities.js ile uyumlu regex
  const programRegex =
    /\{\s*university:\s*'([^']+)',\s*program:\s*'([^']+)',\s*city:\s*'([^']+)',\s*field:\s*'([^']+)',\s*minScore:\s*(\d+(?:\.\d+)?),\s*minRank:\s*(\d+),\s*quota:\s*(\d+)\s*\}/g;

  const programs = [];
  let match;

  while ((match = programRegex.exec(content)) !== null) {
    programs.push({
      university: match[1],
      program: match[2],
      city: match[3],
      field: match[4],
      minScore: parseFloat(match[5]),
      minRank: parseInt(match[6], 10),
      quota: parseInt(match[7], 10),
    });
  }

  return { content, programs, programRegex };
}

function fixConsistency(programs) {
  const byField = {};
  for (const p of programs) {
    byField[p.field] = byField[p.field] || [];
    byField[p.field].push(p);
  }

  const fixedPrograms = [];

  Object.keys(byField).forEach((field) => {
    const list = byField[field].slice().sort((a, b) => a.minRank - b.minRank);

    // Monotonik: sıralama kötüleştikçe (rank büyüdükçe) puan artmasın
    for (let i = 1; i < list.length; i++) {
      if (list[i].minScore > list[i - 1].minScore) {
        // Puanı bir önceki programdan çok az aşağı çek
        list[i].minScore = Math.max(
          300,
          Math.min(list[i - 1].minScore - 0.01, list[i].minScore)
        );
        // 2 ondalığa yuvarla
        list[i].minScore = Math.round(list[i].minScore * 100) / 100;
      }
    }

    fixedPrograms.push(...list);
  });

  // Orijinal sıralamayı yaklaşık korumak için minRank'e göre tekrar global sırala
  fixedPrograms.sort((a, b) => a.minRank - b.minRank);

  return fixedPrograms;
}

function rewriteFile(originalContent, originalPrograms, fixedPrograms) {
  let output = originalContent;

  // Her eski kaydı yeni değerlerle sırayla değiştir
  for (let i = 0; i < originalPrograms.length; i++) {
    const oldP = originalPrograms[i];
    const newP = fixedPrograms[i];

    const oldBlock =
      `{` +
      `\n  university: '${oldP.university}',` +
      `\n  program: '${oldP.program}',` +
      `\n  city: '${oldP.city}',` +
      `\n  field: '${oldP.field}',` +
      `\n  minScore: ${oldP.minScore},` +
      `\n  minRank: ${oldP.minRank},` +
      `\n  quota: ${oldP.quota}\n}`;

    const newBlock =
      `{` +
      `\n  university: '${newP.university}',` +
      `\n  program: '${newP.program}',` +
      `\n  city: '${newP.city}',` +
      `\n  field: '${newP.field}',` +
      `\n  minScore: ${newP.minScore},` +
      `\n  minRank: ${newP.minRank},` +
      `\n  quota: ${newP.quota}\n}`;

    output = output.replace(oldBlock, newBlock);
  }

  fs.writeFileSync(FILE_PATH, output, 'utf8');
}

function main() {
  console.log('🔧 Üniversite puan-sıralama tutarlılığı düzeltme başlatılıyor...');
  const { content, programs } = loadPrograms();
  console.log(`   Okunan program sayısı: ${programs.length}`);

  const fixedPrograms = fixConsistency(programs);
  console.log('   Tutarlılık düzeltmeleri uygulandı.');

  rewriteFile(content, programs, fixedPrograms);
  console.log('✅ universities.ts güncellendi. Şimdi validate-universities.js ile tekrar kontrol edebilirsiniz.');
}

if (require.main === module) {
  main();
}

