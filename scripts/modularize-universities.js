const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const uniFilePath = path.resolve(__dirname, '../src/data/universities.ts');
const rawUniCode = fs.readFileSync(uniFilePath, 'utf8');

const transResult = ts.transpileModule(rawUniCode, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
});
const uniMod = { exports: {} };
const runModule = new Function('exports', 'module', transResult.outputText);
runModule(uniMod.exports, uniMod);

const programs = uniMod.exports.universityPrograms;
console.log('Total programs loaded:', programs.length);

const say = programs.filter(p => p.field === 'SAY');
const ea = programs.filter(p => p.field === 'EA');
const soz = programs.filter(p => p.field === 'SOZ');
const dil = programs.filter(p => p.field === 'DIL');

console.log(`Split counts -> SAY: ${say.length}, EA: ${ea.length}, SOZ: ${soz.length}, DIL: ${dil.length}`);

const targetDir = path.resolve(__dirname, '../src/data/universities');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

function generateFieldTs(programs, arrayName, fieldLabel) {
    return `import { UniversityProgram } from '@/types/yks'

// 2025 YKS ${fieldLabel} Taban Puanları ve Başarı Sıraları - YÖK Atlas
export const ${arrayName}: UniversityProgram[] = ${JSON.stringify(programs, null, 2)}
`
}

fs.writeFileSync(path.join(targetDir, 'sayisal.ts'), generateFieldTs(say, 'sayisalPrograms', 'Sayısal (SAY)'), 'utf8');
fs.writeFileSync(path.join(targetDir, 'esitAgirlik.ts'), generateFieldTs(ea, 'esitAgirlikPrograms', 'Eşit Ağırlık (EA)'), 'utf8');
fs.writeFileSync(path.join(targetDir, 'sozel.ts'), generateFieldTs(soz, 'sozelPrograms', 'Sözel (SÖZ)'), 'utf8');
fs.writeFileSync(path.join(targetDir, 'dil.ts'), generateFieldTs(dil, 'dilPrograms', 'Yabancı Dil (DİL)'), 'utf8');

const indexContent = `import { UniversityProgram } from '@/types/yks'
import { sayisalPrograms } from './sayisal'
import { esitAgirlikPrograms } from './esitAgirlik'
import { sozelPrograms } from './sozel'
import { dilPrograms } from './dil'

export { sayisalPrograms } from './sayisal'
export { esitAgirlikPrograms } from './esitAgirlik'
export { sozelPrograms } from './sozel'
export { dilPrograms } from './dil'

// 2025 YKS Tüm Alanlar Taban Puanları ve Başarı Sıraları (YÖK Atlas)
export const universityPrograms: UniversityProgram[] = [
  ...sayisalPrograms,
  ...esitAgirlikPrograms,
  ...sozelPrograms,
  ...dilPrograms
]
`
fs.writeFileSync(path.join(targetDir, 'index.ts'), indexContent, 'utf8');

// Update src/data/universities.ts to re-export
const rootUniContent = `// Re-export all modularized university program data
export * from './universities'
`
fs.writeFileSync(uniFilePath, rootUniContent, 'utf8');

console.log('Modularization completed successfully!');
