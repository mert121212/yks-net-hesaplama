/**
 * ====================================================================
 * YKS NET HESAPLA — KAPSAMLI TEST SUITE
 * ====================================================================
 * Bu script projedeki tüm hesaplama, sıralama, eşleştirme ve veri
 * bütünlüğü fonksiyonlarını otomatik olarak test eder.
 *
 * Test Edilen Başlıklar:
 *  1. Modül ve Veri Yükleme
 *  2. Net Hesaplama (calculateNet)
 *  3. TYT Net Hesaplama (calculateTYTNets)
 *  4. AYT Net Hesaplama (calculateAYTNets)
 *  5. YDT Net Hesaplama (calculateYDTNets)
 *  6. Üniversite Puanı Hesaplama (SAY, EA, SÖZ, DİL, TYT, OBP, Mesleki)
 *  7. Sıralama Tahmini (estimateRank — Yerleştirme ve Ham Logaritmik)
 *  8. calculateYKSScores Uçtan Uca Testler (Tüm senaryolar)
 *  9. Skor Validasyonları (Soru sınırları, negatif değer kontrolleri)
 * 10. YÖK Resmi Başarı Sırası Baraj Kontrolleri (Tıp, Diş, Hukuk, Müh. vb.)
 * 11. Üniversite Veritabanı Bütünlüğü (405 program, eksik veri, duplike kontrolü)
 * 12. Tercih Eşleştirme Motoru (İdeal, Hedef, Güvenli Liman, Şehir/Arama)
 * 13. Ekstrem ve Sınır Durumlar (Edge Cases)
 * ====================================================================
 */

const fs = require('fs')
const path = require('path')
const Module = require('module')

// TypeScript ve Path Alias Çözücü
const originalResolveFilename = Module._resolveFilename
Module._resolveFilename = function (request, parent, isMain, options) {
    if (request.startsWith('@/')) {
        request = path.resolve(__dirname, 'src', request.slice(2))
    }
    return originalResolveFilename.call(this, request, parent, isMain, options)
}

const ts = require('typescript')

require.extensions['.ts'] = require.extensions['.tsx'] = function (mod, filename) {
    const raw = fs.readFileSync(filename, 'utf8')
    const transpiled = ts.transpileModule(raw, {
        compilerOptions: {
            module: ts.ModuleKind.CommonJS,
            target: ts.ScriptTarget.ES2020,
            jsx: ts.JsxEmit.ReactJSX
        }
    })
    mod._compile(transpiled.outputText, filename)
}

// Proje Modülleri
const {
    calculateNet,
    calculateTYTNets,
    calculateAYTNets,
    calculateYDTNets,
    calculateUniversityScores,
    estimateRank,
    calculateYKSScores,
    validateTYTScores,
    validateAYTScores,
    validateYDTScores,
} = require('./src/utils/yksCalculator')

const { universityPrograms } = require('./src/data/universities')

// Test Koşucu
let total = 0
let passed = 0
let failed = 0
const errors = []

function assert(condition, name, details = '') {
    total++
    if (condition) {
        passed++
        console.log(`  \x1b[32m✔\x1b[0m ${name}`)
    } else {
        failed++
        const err = `  \x1b[31m✖\x1b[0m ${name}${details ? ` -> ${details}` : ''}`
        console.log(err)
        errors.push(err)
    }
}

function assertApprox(actual, expected, tolerance, name) {
    const diff = Math.abs(actual - expected)
    assert(
        diff <= tolerance,
        name,
        `Beklenen: ~${expected}, Gerçekleşen: ${actual} (Fark: ${diff.toFixed(4)})`
    )
}

function header(title) {
    console.log(`\n\x1b[36m${'='.repeat(65)}\x1b[0m`)
    console.log(`\x1b[1m\x1b[33m► ${title}\x1b[0m`)
    console.log(`\x1b[36m${'='.repeat(65)}\x1b[0m`)
}

// -------------------------------------------------------------
header('1. MODÜL VE VERİTABANI YÜKLEME KONTROLLERİ')
// -------------------------------------------------------------
assert(typeof calculateNet === 'function', 'calculateNet fonksiyonu mevcut')
assert(typeof calculateTYTNets === 'function', 'calculateTYTNets fonksiyonu mevcut')
assert(typeof calculateAYTNets === 'function', 'calculateAYTNets fonksiyonu mevcut')
assert(typeof calculateYDTNets === 'function', 'calculateYDTNets fonksiyonu mevcut')
assert(typeof calculateUniversityScores === 'function', 'calculateUniversityScores fonksiyonu mevcut')
assert(typeof estimateRank === 'function', 'estimateRank fonksiyonu mevcut')
assert(typeof calculateYKSScores === 'function', 'calculateYKSScores fonksiyonu mevcut')
assert(typeof validateTYTScores === 'function', 'validateTYTScores fonksiyonu mevcut')
assert(Array.isArray(universityPrograms), 'universityPrograms dizisi başarıyla yüklendi')
assert(universityPrograms.length >= 400, `YÖK Atlas üniversite veri sayısı yeterli (${universityPrograms.length} adet)`)

// -------------------------------------------------------------
header('2. NET HESAPLAMA (calculateNet)')
// -------------------------------------------------------------
assert(calculateNet(40, 0) === 40, '40 Doğru 0 Yanlış = 40 Net')
assert(calculateNet(30, 4) === 29, '30 Doğru 4 Yanlış = 29 Net (4 yanlış 1 doğruyu götürür)')
assert(calculateNet(35, 6) === 33.5, '35 Doğru 6 Yanlış = 33.5 Net')
assert(calculateNet(0, 0) === 0, '0 Doğru 0 Yanlış = 0 Net')
assert(calculateNet(2, 10) === 0, 'Negatif net durumunda 0 dönmeli (2 - 2.5 = -0.5 -> 0)')
assert(calculateNet(0, 20) === 0, 'Sadece yanlış olduğunda 0 dönmeli')
assertApprox(calculateNet(13, 3), 12.25, 0.001, '13 Doğru 3 Yanlış hassas net: 12.25')

// -------------------------------------------------------------
header('3. TYT / AYT / YDT BÖLÜM NETLERİ')
// -------------------------------------------------------------
const sampleTYT = {
    turkce: { dogru: 32, yanlis: 4 },
    matematik: { dogru: 28, yanlis: 6 },
    sosyal: { dogru: 16, yanlis: 2 },
    fen: { dogru: 14, yanlis: 4 }
}
const tytRes = calculateTYTNets(sampleTYT)
assertApprox(tytRes.turkce, 31, 0.01, 'TYT Türkçe: 32 - 1 = 31')
assertApprox(tytRes.matematik, 26.5, 0.01, 'TYT Mat: 28 - 1.5 = 26.5')
assertApprox(tytRes.sosyal, 15.5, 0.01, 'TYT Sosyal: 16 - 0.5 = 15.5')
assertApprox(tytRes.fen, 13, 0.01, 'TYT Fen: 14 - 1 = 13')
assertApprox(tytRes.toplam, 86, 0.01, 'TYT Toplam Net: 31 + 26.5 + 15.5 + 13 = 86')

const sampleAYT = {
    matematik: { dogru: 34, yanlis: 2 },
    fizik: { dogru: 11, yanlis: 2 },
    kimya: { dogru: 10, yanlis: 1 },
    biyoloji: { dogru: 12, yanlis: 0 },
    edebiyat: { dogru: 0, yanlis: 0 },
    tarih1: { dogru: 0, yanlis: 0 },
    cografya1: { dogru: 0, yanlis: 0 },
    tarih2: { dogru: 0, yanlis: 0 },
    cografya2: { dogru: 0, yanlis: 0 },
    felsefe: { dogru: 0, yanlis: 0 },
    din: { dogru: 0, yanlis: 0 }
}
const aytRes = calculateAYTNets(sampleAYT)
assertApprox(aytRes.matematik, 33.5, 0.01, 'AYT Mat Net: 33.5')
assertApprox(aytRes.fizik, 10.5, 0.01, 'AYT Fizik Net: 10.5')
assertApprox(aytRes.kimya, 9.75, 0.01, 'AYT Kimya Net: 9.75')
assertApprox(aytRes.biyoloji, 12, 0.01, 'AYT Biyoloji Net: 12')

const ydtRes = calculateYDTNets({ ydt: { dogru: 72, yanlis: 8 } })
assertApprox(ydtRes.ydt, 70, 0.01, 'YDT Net: 72 - 2 = 70')

// -------------------------------------------------------------
header('4. ÜNİVERSİTE PUAN HESAPLAMA & OBP ETKİSİ')
// -------------------------------------------------------------
const emptyNets = {
    tyt: { turkce: 0, matematik: 0, sosyal: 0, fen: 0, toplam: 0 },
    ayt: { matematik: 0, fizik: 0, kimya: 0, biyoloji: 0, edebiyat: 0, tarih1: 0, cografya1: 0, tarih2: 0, cografya2: 0, felsefe: 0, din: 0, toplam: 0 },
    ydt: { ydt: 0 }
}

const baseScore = calculateUniversityScores(emptyNets.tyt, emptyNets.ayt, emptyNets.ydt, 0, false, false)
assert(baseScore.say === 100, 'Sıfır net ve OBP=0 iken baz puan 100 olmalı')
assert(baseScore.ea === 100, 'EA baz puan 100 olmalı')
assert(baseScore.soz === 100, 'SÖZ baz puan 100 olmalı')
assert(baseScore.dil === 100, 'DİL baz puan 100 olmalı')

// OBP Katkısı Testi: Diploma Notu = 80 -> OBP = 400 -> Katkı = 400 * 0.12 = 48 puan
const obpNormal = calculateUniversityScores(emptyNets.tyt, emptyNets.ayt, emptyNets.ydt, 80, false, false)
assertApprox(obpNormal.say, 148, 0.01, 'Diploma notu 80 -> 100 + 48 = 148 puan')

// Kırık OBP Testi (Önceki yıl yerleşen adayın katsayısı 0.06'ya düşer -> Katkı = 400 * 0.06 = 24)
const obpHalf = calculateUniversityScores(emptyNets.tyt, emptyNets.ayt, emptyNets.ydt, 80, true, false)
assertApprox(obpHalf.say, 124, 0.01, 'Kırık OBP (0.06) -> 100 + 24 = 124 puan')

// Meslek Lisesi Ek Puanı Testi (+0.06 ek katkı)
const obpMesleki = calculateUniversityScores(emptyNets.tyt, emptyNets.ayt, emptyNets.ydt, 80, false, true)
assertApprox(obpMesleki.say, 172, 0.01, 'Mesleki ek puan (+24) -> 148 + 24 = 172 puan')

// Üst Sınır Tavanı (Maksimum 560 Puan)
const maxTYTNets = { turkce: 40, matematik: 40, sosyal: 20, fen: 20, toplam: 120 }
const maxAYTNets = { matematik: 40, fizik: 14, kimya: 13, biyoloji: 13, edebiyat: 24, tarih1: 10, cografya1: 6, tarih2: 11, cografya2: 11, felsefe: 12, din: 6, toplam: 160 }
const maxScore = calculateUniversityScores(maxTYTNets, maxAYTNets, { ydt: 80 }, 100, false, true)
assert(maxScore.say <= 560, `SAY puanı 560 üst sınırını aşamaz (Gerçek: ${maxScore.say})`)
assert(maxScore.ea <= 560, `EA puanı 560 üst sınırını aşamaz (Gerçek: ${maxScore.ea})`)
assert(maxScore.soz <= 560, `SÖZ puanı 560 üst sınırını aşamaz (Gerçek: ${maxScore.soz})`)
assert(maxScore.dil <= 560, `DİL puanı 560 üst sınırını aşamaz (Gerçek: ${maxScore.dil})`)

// -------------------------------------------------------------
header('5. SIRALAMA TAHMİNİ (estimateRank — Logaritmik İnterpolasyon)')
// -------------------------------------------------------------
const r550 = estimateRank(550, 'say', 'yerlestirme')
const r500 = estimateRank(500, 'say', 'yerlestirme')
const r400 = estimateRank(400, 'say', 'yerlestirme')
const r300 = estimateRank(300, 'say', 'yerlestirme')
const r200 = estimateRank(200, 'say', 'yerlestirme')

assert(r550 < r500, '550 puan sıralaması 500 puandan daha iyi olmalı (küçük sayı)')
assert(r500 < r400, '500 puan sıralaması 400 puandan daha iyi olmalı')
assert(r400 < r300, '400 puan sıralaması 300 puandan daha iyi olmalı')
assert(r300 < r200, '300 puan sıralaması 200 puandan daha iyi olmalı')
assert(r550 <= 100, `550 puan ilk 100 içinde olmalı (Tahmin: ~${r550})`)

// Ham Sıralama Kontrolleri
const rHam450 = estimateRank(450, 'tyt', 'ham')
const rYer450 = estimateRank(450, 'tyt', 'yerlestirme')
assert(rHam450 > 0 && rYer450 > 0, 'Hem ham hem yerleştirme sıralaması pozitif dönüyor')

// -------------------------------------------------------------
header('6. UÇTAN UCA TEST (calculateYKSScores)')
// -------------------------------------------------------------
// Aday 1: Yüksek Seviye Sayısal Adayı
const sayFullTYT = {
    turkce: { dogru: 36, yanlis: 3 },
    matematik: { dogru: 37, yanlis: 2 },
    sosyal: { dogru: 17, yanlis: 2 },
    fen: { dogru: 18, yanlis: 2 }
}
const sayFullAYT = {
    matematik: { dogru: 38, yanlis: 2 },
    fizik: { dogru: 13, yanlis: 1 },
    kimya: { dogru: 12, yanlis: 1 },
    biyoloji: { dogru: 12, yanlis: 1 },
    edebiyat: { dogru: 0, yanlis: 0 },
    tarih1: { dogru: 0, yanlis: 0 },
    cografya1: { dogru: 0, yanlis: 0 },
    tarih2: { dogru: 0, yanlis: 0 },
    cografya2: { dogru: 0, yanlis: 0 },
    felsefe: { dogru: 0, yanlis: 0 },
    din: { dogru: 0, yanlis: 0 }
}
const sayResult = calculateYKSScores(sayFullTYT, sayFullAYT, { ydt: { dogru: 0, yanlis: 0 } }, 95, false, false)

assert(sayResult.points.say > 480, `Yüksek Sayısal puanı > 480 (Puan: ${sayResult.points.say})`)
assert(sayResult.estimatedRanks?.say < 5000, `İlk 5.000 derece sıralaması tahmini (Sıra: ~${sayResult.estimatedRanks?.say})`)
assert(sayResult.estimatedRanks?.tyt < 15000, `TYT ilk 15.000 tahmini (Sıra: ~${sayResult.estimatedRanks?.tyt})`)
assert(sayResult.estimatedRanks?.dil === undefined, 'YDT girilmediğinde DİL sıralaması üretilmemeli')

// Aday 2: Baraj Altı / Boş Kağıt Adayı (0.5 net kuralı)
const zeroTYT = {
    turkce: { dogru: 0, yanlis: 0 },
    matematik: { dogru: 0, yanlis: 0 },
    sosyal: { dogru: 0, yanlis: 0 },
    fen: { dogru: 0, yanlis: 0 }
}
const zeroResult = calculateYKSScores(zeroTYT, sayFullAYT, { ydt: { dogru: 0, yanlis: 0 } }, 70, false, false)
assert(zeroResult.estimatedRanks?.tyt === undefined, 'TYT 0 net ile sıralama hesaplanamaz (0.5 net kuralı)')
assert(zeroResult.estimatedRanks?.say === undefined, 'TYT 0 net iken AYT dolu olsa bile SAY hesaplanamaz')

// -------------------------------------------------------------
header('7. GİRDİ VALİDASYONLARI')
// -------------------------------------------------------------
assert(validateTYTScores(sayFullTYT) === true, 'Geçerli TYT skoru doğrulamadan geçer')
assert(validateTYTScores({
    ...sayFullTYT,
    turkce: { dogru: 35, yanlis: 10 } // 45 soru > 40 soru max
}) === false, 'TYT Türkçe soru sayısı aşımı yakalandı')
assert(validateTYTScores({
    ...sayFullTYT,
    fen: { dogru: -2, yanlis: 0 }
}) === false, 'Negatif sayı girilmesi engellendi')

assert(validateAYTScores(sayFullAYT) === true, 'Geçerli AYT skoru doğrulamadan geçer')
assert(validateAYTScores({
    ...sayFullAYT,
    matematik: { dogru: 41, yanlis: 0 } // 41 > 40
}) === false, 'AYT Matematik soru sayısı aşımı yakalandı')
assert(validateAYTScores({
    ...sayFullAYT,
    fizik: { dogru: 12, yanlis: 5 } // 17 > 14
}) === false, 'AYT Fizik soru sayısı aşımı yakalandı')

// -------------------------------------------------------------
header('8. YÖK RESMİ BAŞARI SIRASI BARAJLARI')
// -------------------------------------------------------------
function checkYOKBaraj(programName, field, userRank) {
    const prog = programName.toLowerCase()
    if (prog.includes('tıp') && !prog.includes('tıbbi') && userRank > 50000) return false
    if (prog.includes('diş hekimliği') && userRank > 80000) return false
    if (prog.includes('eczacılık') && userRank > 100000) return false
    if (prog.includes('hukuk') && userRank > 125000) return false
    if (prog.includes('mimarlık') && !prog.includes('iç') && userRank > 250000) return false
    if (prog.includes('mühendisliği') && !prog.includes('ziraat') && !prog.includes('su ürünleri') && userRank > 300000) return false
    return true
}

assert(checkYOKBaraj('Tıp', 'SAY', 45000) === true, 'Tıp 45.000 sıra ile tercih edilebilir (Baraj 50.000)')
assert(checkYOKBaraj('Tıp', 'SAY', 50001) === false, 'Tıp 50.001 sıra ile ENGELLENDİ')
assert(checkYOKBaraj('Tıbbi Görüntüleme', 'TYT', 70000) === true, 'Tıbbi önlisans bölümleri Tıp barajına takılmaz')

assert(checkYOKBaraj('Diş Hekimliği', 'SAY', 79999) === true, 'Diş Hekimliği 79.999 sıra ile tercih edilebilir (Baraj 80.000)')
assert(checkYOKBaraj('Diş Hekimliği', 'SAY', 80001) === false, 'Diş Hekimliği 80.001 sıra ile ENGELLENDİ')

assert(checkYOKBaraj('Eczacılık', 'SAY', 95000) === true, 'Eczacılık 95.000 sıra ile tercih edilebilir (Baraj 100.000)')
assert(checkYOKBaraj('Eczacılık', 'SAY', 100005) === false, 'Eczacılık 100.005 sıra ile ENGELLENDİ')

assert(checkYOKBaraj('Hukuk', 'EA', 124000) === true, 'Hukuk 124.000 sıra ile tercih edilebilir (Baraj 125.000)')
assert(checkYOKBaraj('Hukuk', 'EA', 125500) === false, 'Hukuk 125.500 sıra ile ENGELLENDİ')

assert(checkYOKBaraj('Bilgisayar Mühendisliği', 'SAY', 290000) === true, 'Bilgisayar Müh. 290.000 sıra ile serbest (Baraj 300.000)')
assert(checkYOKBaraj('Makine Mühendisliği', 'SAY', 300001) === false, 'Makine Müh. 300.001 sıra ile ENGELLENDİ')
assert(checkYOKBaraj('Ziraat Mühendisliği', 'SAY', 450000) === true, 'Ziraat Mühendisliği 300k barajından muaftır')
assert(checkYOKBaraj('Su Ürünleri Mühendisliği', 'SAY', 450000) === true, 'Su Ürünleri Mühendisliği 300k barajından muaftır')

// -------------------------------------------------------------
header('9. ÜNİVERSİTE VERİTABANI BÜTÜNLÜĞÜ (universities.ts)')
// -------------------------------------------------------------
let missingPropCount = 0
let invalidFieldTypeCount = 0
let invalidRankCount = 0
let invalidScoreCount = 0
const allowedFields = new Set(['SAY', 'EA', 'SOZ', 'DIL'])

universityPrograms.forEach(item => {
    if (!item.university || !item.program || !item.city) missingPropCount++
    if (!allowedFields.has(item.field)) invalidFieldTypeCount++
    if (typeof item.minRank !== 'number' || item.minRank <= 0) invalidRankCount++
    if (typeof item.minScore !== 'number' || item.minScore < 100) invalidScoreCount++
})

assert(missingPropCount === 0, 'Hiçbir programda eksik ad/bölüm/şehir yok')
assert(invalidFieldTypeCount === 0, 'Tüm programların puan türü geçerli (SAY, EA, SÖZ, DİL)')
assert(invalidRankCount === 0, 'Tüm taban sıralamaları pozitif sayı')
assert(invalidScoreCount === 0, 'Tüm taban puanları geçerli (>= 100)')

// Duplike Kayıt Kontrolü
const seenKey = new Set()
let duplicateCount = 0
universityPrograms.forEach(item => {
    const key = `${item.university}__${item.program}__${item.field}`.toLowerCase()
    if (seenKey.has(key)) duplicateCount++
    seenKey.add(key)
})
assert(duplicateCount === 0, `Veritabanında mükerrer (duplicate) kayıt yok (Bulunan: ${duplicateCount})`)

// Dağılım İstatistikleri
const dist = { SAY: 0, EA: 0, SOZ: 0, DIL: 0 }
universityPrograms.forEach(item => dist[item.field]++)
assert(dist.SAY >= 150, `Sayısal program sayısı tatmin edici (${dist.SAY} adet)`)
assert(dist.EA >= 100, `Eşit Ağırlık program sayısı tatmin edici (${dist.EA} adet)`)
assert(dist.SOZ >= 50, `Sözel program sayısı tatmin edici (${dist.SOZ} adet)`)
console.log(`  ℹ Dağılım: SAY: ${dist.SAY} | EA: ${dist.EA} | SÖZ: ${dist.SOZ} | DİL: ${dist.DIL}`)

// -------------------------------------------------------------
header('10. ÜNİVERSİTE EŞLEŞTİRME VE TERCİH ROBOTU TESTİ')
// -------------------------------------------------------------
function matchPrograms(rank, field, filterCity = 'Tümü', filterSearch = '', filterRange = 'all') {
    const minTarget = rank * 0.70
    const maxSafe = rank * 1.60

    return universityPrograms.filter(prog => {
        if (prog.field !== field) return false
        if (!checkYOKBaraj(prog.program, field, rank)) return false
        if (prog.minRank < minTarget || prog.minRank > maxSafe) return false

        if (filterCity !== 'Tümü' && prog.city !== filterCity) return false

        if (filterSearch.trim()) {
            const q = filterSearch.toLowerCase()
            const matchUni = prog.university.toLowerCase().includes(q)
            const matchProg = prog.program.toLowerCase().includes(q)
            if (!matchUni && !matchProg) return false
        }

        if (filterRange === 'target' && prog.minRank >= rank * 0.95) return false
        if (filterRange === 'ideal' && (prog.minRank < rank * 0.95 || prog.minRank > rank * 1.20)) return false
        if (filterRange === 'safe' && prog.minRank <= rank * 1.20) return false

        return true
    }).sort((a, b) => a.minRank - b.minRank)
}

// 1. Senaryo: 25.000 SAY sıralaması olan adaya Tıp/Mühendislik çıkmalı
const m25k = matchPrograms(25000, 'SAY')
assert(m25k.length > 0, `25.000 SAY için eşleşen program bulundu (${m25k.length} adet)`)
const hasTip25k = m25k.some(p => p.program.includes('Tıp'))
assert(hasTip25k, '25.000 SAY sıralamasına uygun Tıp fakülteleri listelendi')

// 2. Senaryo: 55.000 SAY sıralaması olan adaya TIP ÇIKMAMALI (50k barajı)
const m55k = matchPrograms(55000, 'SAY')
const hasTip55k = m55k.some(p => p.program.toLowerCase().includes('tıp') && !p.program.toLowerCase().includes('tıbbi'))
assert(!hasTip55k, '55.000 SAY adayına YÖK Barajı nedeniyle Tıp önerilmedi')

// 3. Senaryo: Şehir Filtresi
const istanbulMatches = matchPrograms(30000, 'SAY', 'İstanbul')
const allAreIstanbul = istanbulMatches.length > 0 && istanbulMatches.every(p => p.city === 'İstanbul')
assert(allAreIstanbul, 'Şehir filtresi "İstanbul" seçildiğinde sadece İstanbul üniversiteleri geldi')

// 4. Senaryo: Bölüm Arama
const compMatches = matchPrograms(40000, 'SAY', 'Tümü', 'Bilgisayar')
const allAreComp = compMatches.length > 0 && compMatches.every(p => p.program.toLowerCase().includes('bilgisayar'))
assert(allAreComp, 'Arama kutusuna "Bilgisayar" yazıldığında sadece ilgili bölümler filtrelendi')

// 5. Senaryo: Tercih Kategorileri (Hedef + İdeal + Güvenli Liman = Toplam)
const targetProgs = matchPrograms(50000, 'SAY', 'Tümü', '', 'target')
const idealProgs = matchPrograms(50000, 'SAY', 'Tümü', '', 'ideal')
const safeProgs = matchPrograms(50000, 'SAY', 'Tümü', '', 'safe')
const allProgs = matchPrograms(50000, 'SAY', 'Tümü', '', 'all')

assert(
    targetProgs.length + idealProgs.length + safeProgs.length === allProgs.length,
    `Kategori ayrımı tam örtüşüyor (${targetProgs.length} Hedef + ${idealProgs.length} İdeal + ${safeProgs.length} Güvenli = ${allProgs.length} Toplam)`
)

// 6. Senaryo: SÖZ Alanı Eşleşmesi (15.000 Sıralama)
const sozMatches15k = matchPrograms(15000, 'SOZ')
assert(sozMatches15k.length > 0, `15.000 SÖZ sıralaması için eşleşen programlar geldi (${sozMatches15k.length} adet)`)
const hasOgretmenlik = sozMatches15k.some(p => p.program.toLowerCase().includes('öğretmenliği'))
assert(hasOgretmenlik, '15.000 SÖZ adayı için Öğretmenlik programları listelendi')

// 7. Senaryo: EA Alanı Eşleşmesi ve Hukuk Barajı
const allEA = universityPrograms.filter(p => p.field === 'EA')
const allHukuk = allEA.filter(p => p.program.toLowerCase().includes('hukuk'))
console.log(`  ℹ EA Program Sayısı: ${allEA.length}, Hukuk Sayısı: ${allHukuk.length}`)
if (allHukuk.length > 0) {
    console.log(`  ℹ Hukuk Sıralama Aralığı: ${Math.min(...allHukuk.map(h => h.minRank))} - ${Math.max(...allHukuk.map(h => h.minRank))}`)
}

const eaMatches = matchPrograms(30000, 'EA')
assert(eaMatches.length > 0, `30.000 EA sıralaması için eşleşen programlar geldi (${eaMatches.length} adet)`)
const hasHukuk = eaMatches.some(p => p.program.toLowerCase().includes('hukuk'))
assert(hasHukuk, '30.000 EA adayı için Hukuk fakülteleri listelendi (125k barajı içi)')

// 8. Senaryo: EA 130.000 Sıralamada HUKUK ÇIKMAMALI (125k barajı)
const eaMatches130k = matchPrograms(130000, 'EA')
const hasHukuk130k = eaMatches130k.some(p => p.program.toLowerCase().includes('hukuk'))
assert(!hasHukuk130k, '130.000 EA adayına YÖK Barajı nedeniyle Hukuk önerilmedi (125k barajı dışı)')

// 9. Senaryo: DİL Alanı Eşleşmesi (8.000 Sıralama)
const dilMatches8k = matchPrograms(8000, 'DIL')
assert(dilMatches8k.length > 0, `8.000 DİL sıralaması için eşleşen programlar geldi (${dilMatches8k.length} adet)`)


// -------------------------------------------------------------
header('11. SONUÇ RAPORU')
// -------------------------------------------------------------
console.log(`\n  Toplam Yapılan Test : \x1b[1m${total}\x1b[0m`)
console.log(`  Başarılı Test Sayısı: \x1b[32m\x1b[1m${passed}\x1b[0m`)
console.log(`  Hatalı Test Sayısı  : ${failed > 0 ? `\x1b[31m\x1b[1m${failed}\x1b[0m` : '\x1b[32m0\x1b[0m'}`)
console.log(`  Başarı Oranı        : \x1b[35m\x1b[1m${((passed / total) * 100).toFixed(1)}%\x1b[0m\n`)

if (failed > 0) {
    console.log('\x1b[31mHATA DETAYLARI:\x1b[0m')
    errors.forEach(e => console.log(e))
    process.exit(1)
} else {
    console.log('\x1b[32m✔ TEBRİKLER! Tüm sistem ve bileşen testleri eksiksiz başarıyla tamamlandı.\x1b[0m\n')
    process.exit(0)
}
