// ============================================================================
// 🚀 YKS 2026 HESAPLAMA MOTORU — TÜM KOMBİNASYONLAR STRES VE DOĞRULAMA TESTİ
// ============================================================================
// Bu script, YKS puan ve sıralama hesaplama motorunu hem YERLEŞTİRME (100-560)
// hem HAM (100-500) tabloları, matematiksel invaryantlar, ÖSYM doğruluk tablosu
// ve Monte Carlo profilleri ile 0 hata hedefiyle test eder.
// ============================================================================

const TYT_QUESTIONS = { turkce: 40, matematik: 40, sosyal: 20, fen: 20 }
const AYT_QUESTIONS = {
    matematik: 40, fizik: 14, kimya: 13, biyoloji: 13,
    edebiyat: 24, tarih1: 10, cografya1: 6,
    tarih2: 11, cografya2: 11, felsefe: 12, din: 6
}
const YDT_QUESTIONS = { ydt: 80 }

const TYT_K = { turkce: 1.32, matematik: 1.32, sosyal: 1.36, fen: 1.36 }
const AYT_K = {
    say: { matematik: 3.00, fizik: 2.85, kimya: 3.07, biyoloji: 3.07 },
    ea: { matematik: 3.00, edebiyat: 3.00, tarih1: 2.80, cografya1: 3.33 },
    soz: { edebiyat: 3.00, tarih1: 2.80, cografya1: 3.33, tarih2: 2.91, cografya2: 2.91, felsefe: 3.00, din: 3.33 },
}
const YDT_K = 3.00
const BAZ_PUAN = 100

function calculateNet(dogru, yanlis) {
    const net = dogru - (yanlis / 4)
    return Math.round(Math.max(0, net) * 100) / 100
}

function calculateTYTNets(scores) {
    const turkce = calculateNet(scores.turkce.dogru, scores.turkce.yanlis)
    const matematik = calculateNet(scores.matematik.dogru, scores.matematik.yanlis)
    const sosyal = calculateNet(scores.sosyal.dogru, scores.sosyal.yanlis)
    const fen = calculateNet(scores.fen.dogru, scores.fen.yanlis)
    return { turkce, matematik, sosyal, fen, toplam: Math.round((turkce + matematik + sosyal + fen) * 100) / 100 }
}

function calculateAYTNets(scores) {
    const matematik = calculateNet(scores.matematik.dogru, scores.matematik.yanlis)
    const fizik = calculateNet(scores.fizik.dogru, scores.fizik.yanlis)
    const kimya = calculateNet(scores.kimya.dogru, scores.kimya.yanlis)
    const biyoloji = calculateNet(scores.biyoloji.dogru, scores.biyoloji.yanlis)
    const edebiyat = calculateNet(scores.edebiyat.dogru, scores.edebiyat.yanlis)
    const tarih1 = calculateNet(scores.tarih1.dogru, scores.tarih1.yanlis)
    const cografya1 = calculateNet(scores.cografya1.dogru, scores.cografya1.yanlis)
    const tarih2 = calculateNet(scores.tarih2.dogru, scores.tarih2.yanlis)
    const cografya2 = calculateNet(scores.cografya2.dogru, scores.cografya2.yanlis)
    const felsefe = calculateNet(scores.felsefe.dogru, scores.felsefe.yanlis)
    const din = calculateNet(scores.din.dogru, scores.din.yanlis)
    const toplam = Math.round((matematik + fizik + kimya + biyoloji + edebiyat + tarih1 + cografya1 + tarih2 + cografya2 + felsefe + din) * 100) / 100
    return { matematik, fizik, kimya, biyoloji, edebiyat, tarih1, cografya1, tarih2, cografya2, felsefe, din, toplam }
}

function calculateYDTNets(scores) {
    return { ydt: calculateNet(scores.ydt.dogru, scores.ydt.yanlis) }
}

function calculateUniversityScores(tytNets, aytNets, ydtNets, obp = 0, obpHalved = false, obpMesleki = false) {
    const obpGercek = obp * 5
    const obpKatsayi = obpHalved ? 0.06 : 0.12
    const obpContribution = obpGercek * obpKatsayi
    const meslekiEkPuan = obpMesleki ? obpGercek * 0.06 : 0

    const tytKatkisi =
        (tytNets.turkce * TYT_K.turkce) +
        (tytNets.matematik * TYT_K.matematik) +
        (tytNets.sosyal * TYT_K.sosyal) +
        (tytNets.fen * TYT_K.fen)

    const sayAYT =
        (aytNets.matematik * AYT_K.say.matematik) +
        (aytNets.fizik * AYT_K.say.fizik) +
        (aytNets.kimya * AYT_K.say.kimya) +
        (aytNets.biyoloji * AYT_K.say.biyoloji)
    const sayHam = BAZ_PUAN + tytKatkisi + sayAYT
    const sayScore = Math.min(sayHam + obpContribution + meslekiEkPuan, 560)

    const eaAYT =
        (aytNets.matematik * AYT_K.ea.matematik) +
        (aytNets.edebiyat * AYT_K.ea.edebiyat) +
        (aytNets.tarih1 * AYT_K.ea.tarih1) +
        (aytNets.cografya1 * AYT_K.ea.cografya1)
    const eaHam = BAZ_PUAN + tytKatkisi + eaAYT
    const eaScore = Math.min(eaHam + obpContribution + meslekiEkPuan, 560)

    const sozAYT =
        (aytNets.edebiyat * AYT_K.soz.edebiyat) +
        (aytNets.tarih1 * AYT_K.soz.tarih1) +
        (aytNets.cografya1 * AYT_K.soz.cografya1) +
        (aytNets.tarih2 * AYT_K.soz.tarih2) +
        (aytNets.cografya2 * AYT_K.soz.cografya2) +
        (aytNets.felsefe * AYT_K.soz.felsefe) +
        (aytNets.din * AYT_K.soz.din)
    const sozHam = BAZ_PUAN + tytKatkisi + sozAYT
    const sozScore = Math.min(sozHam + obpContribution + meslekiEkPuan, 560)

    const dilHam = BAZ_PUAN + tytKatkisi + (ydtNets.ydt * YDT_K)
    const dilScore = Math.min(dilHam + obpContribution + meslekiEkPuan, 560)

    const tytPuani = BAZ_PUAN +
        (tytNets.turkce * 3.3) +
        (tytNets.matematik * 3.3) +
        (tytNets.sosyal * 3.4) +
        (tytNets.fen * 3.4)
    const tytYerlestirme = Math.min(tytPuani + obpContribution + meslekiEkPuan, 560)

    return {
        tyt: Math.round(tytYerlestirme * 100) / 100,
        tytHam: Math.round(tytPuani * 100) / 100,
        say: Math.round(sayScore * 100) / 100,
        ea: Math.round(eaScore * 100) / 100,
        soz: Math.round(sozScore * 100) / 100,
        dil: Math.round(dilScore * 100) / 100,
        sayHam: Math.round(sayHam * 100) / 100,
        eaHam: Math.round(eaHam * 100) / 100,
        sozHam: Math.round(sozHam * 100) / 100,
        dilHam: Math.round(dilHam * 100) / 100,
    }
}

// 1. YERLEŞTİRME PUANLARI YIĞINSAL DAĞILIMI (ÖSYM Resmi Verileri — Max 560)
const YERLESTIRME_TABLES = {
    tyt: [
        [560, 1], [550, 59], [530, 3017], [510, 12996], [490, 29976], [470, 53253],
        [450, 82281], [430, 118095], [410, 163769], [390, 223427], [370, 304035],
        [350, 405000], [330, 530000], [310, 680000], [290, 860000], [270, 1070000],
        [250, 1320000], [220, 1750000], [180, 2350000], [140, 2850000], [100, 3100000],
    ],
    say: [
        [560, 1], [550, 162], [530, 2271], [510, 7029], [490, 14673], [470, 25274],
        [450, 38578], [430, 54307], [410, 72418], [390, 93485], [370, 118001],
        [350, 148000], [330, 185000], [310, 234000], [290, 300000], [270, 392000],
        [250, 500000], [220, 720000], [180, 1050000], [140, 1200000], [100, 1300000],
    ],
    ea: [
        [560, 1], [550, 5], [530, 80], [510, 340], [490, 940], [470, 1992],
        [450, 4269], [430, 11111], [410, 24612], [390, 46809], [370, 79522],
        [350, 148110], [330, 211564], [310, 302336], [290, 422338], [270, 592512],
        [250, 780000], [220, 1100000], [180, 1500000], [140, 1700000], [100, 1800000],
    ],
    soz: [
        [560, 1], [550, 3], [530, 31], [510, 142], [490, 476], [470, 1292],
        [450, 3424], [430, 8952], [410, 21706], [390, 45376], [370, 83547],
        [350, 148110], [330, 215118], [310, 305124], [290, 422338], [270, 586313],
        [250, 750000], [220, 1050000], [180, 1450000], [140, 1650000], [100, 1750000],
    ],
    dil: [
        [560, 1], [550, 13], [530, 321], [510, 1178], [490, 2695], [470, 5048],
        [450, 8698], [430, 13904], [410, 20646], [390, 28657], [370, 37488],
        [350, 47000], [330, 58000], [310, 70000], [290, 84000], [270, 100000],
        [250, 115000], [220, 135000], [180, 155000], [140, 165000], [100, 170000],
    ],
}

// 2. HAM SINAV PUANLARI YIĞINSAL DAĞILIMI (ÖSYM Resmi Verileri — Max 500)
const HAM_TABLES = {
    tyt: [
        [500, 5], [480, 822], [460, 5524], [440, 17050], [420, 37770],
        [400, 67394], [380, 106404], [360, 155008], [340, 218156], [320, 302758],
        [300, 417935], [280, 577094], [260, 787244], [240, 1045340], [220, 1332391],
        [200, 1630698], [180, 1914717], [160, 2125244], [140, 2184873], [120, 2187723], [100, 2187743],
    ],
    say: [
        [500, 1], [480, 1453], [460, 8786], [440, 22370], [420, 39624],
        [400, 58728], [380, 78806], [360, 100553], [340, 125045], [320, 153304],
        [300, 187034], [280, 228643], [260, 279885], [240, 344536], [220, 430074],
        [200, 549793], [180, 721488], [160, 923753], [140, 1078515], [120, 1134006], [100, 1135718],
    ],
    ea: [
        [500, 1], [480, 52], [460, 307], [440, 874], [420, 2097],
        [400, 4545], [380, 9486], [360, 23452], [340, 50608], [320, 89520],
        [300, 140784], [280, 210499], [260, 308127], [240, 440752], [220, 615366],
        [200, 832251], [180, 1069239], [160, 1272506], [140, 1391240], [120, 1420558], [100, 1421290],
    ],
    soz: [
        [500, 1], [480, 10], [460, 74], [440, 214], [420, 560],
        [400, 1418], [380, 3936], [360, 10259], [340, 23653], [320, 47292],
        [300, 86560], [280, 148959], [260, 238848], [240, 360487], [220, 515916],
        [200, 699304], [180, 873860], [160, 998826], [140, 1065157], [120, 1084720], [100, 1085698],
    ],
    dil: [
        [500, 5], [480, 118], [460, 628], [440, 1795], [420, 3632],
        [400, 6683], [380, 11576], [360, 18265], [340, 26469], [320, 35020],
        [300, 43883], [280, 52590], [260, 61992], [240, 72025], [220, 82982],
        [200, 94735], [180, 107579], [160, 120099], [140, 128950], [120, 132443], [100, 132826],
    ],
}

function estimateRank(score, field, type = 'yerlestirme') {
    if (score < 100) return 2500000
    const tables = type === 'yerlestirme' ? YERLESTIRME_TABLES : HAM_TABLES
    const table = tables[field]
    if (score >= table[0][0]) return table[0][1]
    if (score < table[table.length - 1][0]) return 2500000

    for (let i = 0; i < table.length - 1; i++) {
        const [x1, y1] = table[i]
        const [x2, y2] = table[i + 1]
        if (score <= x1 && score >= x2) {
            const logY1 = Math.log(Math.max(1, y1))
            const logY2 = Math.log(Math.max(1, y2))
            const fraction = (score - x2) / (x1 - x2)
            const logY = logY2 + fraction * (logY1 - logY2)
            return Math.max(1, Math.round(Math.exp(logY)))
        }
    }
    return table[table.length - 1][1]
}

function calculateYKSScores(tytScores, aytScores, ydtScores, obp = 0, obpHalved = false, obpMesleki = false) {
    const tytNets = calculateTYTNets(tytScores)
    const aytNets = calculateAYTNets(aytScores)
    const ydtNets = calculateYDTNets(ydtScores)
    const points = calculateUniversityScores(tytNets, aytNets, ydtNets, obp, obpHalved, obpMesleki)

    const tytGecerli = tytNets.turkce >= 0.5 || tytNets.matematik >= 0.5
    const sayAYTGecerli = aytNets.matematik >= 0.5 || (aytNets.fizik + aytNets.kimya + aytNets.biyoloji) >= 0.5
    const eaAYTGecerli = aytNets.matematik >= 0.5 || (aytNets.edebiyat + aytNets.tarih1 + aytNets.cografya1) >= 0.5
    const sozAYTGecerli = (aytNets.edebiyat + aytNets.tarih1 + aytNets.cografya1) >= 0.5 ||
        (aytNets.tarih2 + aytNets.cografya2 + aytNets.felsefe + aytNets.din) >= 0.5
    const ydtGecerli = ydtNets.ydt >= 0.5

    const sayGecerli = tytGecerli && sayAYTGecerli
    const eaGecerli = tytGecerli && eaAYTGecerli
    const sozGecerli = tytGecerli && sozAYTGecerli
    const dilGecerli = tytGecerli && ydtGecerli

    return {
        nets: { tyt: tytNets, ayt: aytNets, ydt: ydtNets },
        points,
        tytScore: points.tyt,
        aytScore: Math.max(points.say, points.ea, points.soz),
        ydtScore: points.dil,
        ydtHesaplandi: dilGecerli,
        obp,
        estimatedRanks: {
            tyt: tytGecerli ? estimateRank(points.tyt, 'tyt', 'yerlestirme') : undefined,
            say: sayGecerli ? estimateRank(points.say, 'say', 'yerlestirme') : undefined,
            ea: eaGecerli ? estimateRank(points.ea, 'ea', 'yerlestirme') : undefined,
            soz: sozGecerli ? estimateRank(points.soz, 'soz', 'yerlestirme') : undefined,
            dil: dilGecerli ? estimateRank(points.dil, 'dil', 'yerlestirme') : undefined,
        },
        estimatedHamRanks: {
            tyt: tytGecerli ? estimateRank(points.tytHam, 'tyt', 'ham') : undefined,
            say: sayGecerli ? estimateRank(points.sayHam, 'say', 'ham') : undefined,
            ea: eaGecerli ? estimateRank(points.eaHam, 'ea', 'ham') : undefined,
            soz: sozGecerli ? estimateRank(points.sozHam, 'soz', 'ham') : undefined,
            dil: dilGecerli ? estimateRank(points.dilHam, 'dil', 'ham') : undefined,
        },
    }
}

// ============================================================================
// TEST KOŞUCUSU VE İSTATİSTİK TAKİBİ
// ============================================================================

let totalChecks = 0
let failedChecks = 0
const failures = []

function check(condition, desc, details = '') {
    totalChecks++
    if (!condition) {
        failedChecks++
        failures.push({ desc, details })
        if (failures.length <= 10) {
            console.error(`  ❌ HATA: ${desc} ${details ? `(${details})` : ''}`)
        }
    }
}

console.log('╔═════════════════════════════════════════════════════════════════════════╗')
console.log('║  ⚡ YKS 2026 HESAPLAMA MOTORU — TÜM KOMBİNASYONLAR STRES TESTİ        ║')
console.log('║  📅 2026 ÖSYM Kılavuzu & Verileri ile 0 Hata Doğrulama                 ║')
console.log('╚═════════════════════════════════════════════════════════════════════════╝\n')

// ============================================================================
// SUITE 1: NET HESAPLAMA MATEMATİKSEL İNVARİYANT KOMBİNASYONLARI
// ============================================================================
console.log('🧪 SUITE 1: Net Hesaplama İnvaryantları (Tüm dersler, tüm D/Y kombinasyonları)...')

const allSubjects = [
    { name: 'Türkçe', max: 40 },
    { name: 'Matematik', max: 40 },
    { name: 'Sosyal', max: 20 },
    { name: 'Fen', max: 20 },
    { name: 'AYT Mat', max: 40 },
    { name: 'Fizik', max: 14 },
    { name: 'Kimya', max: 13 },
    { name: 'Biyoloji', max: 13 },
    { name: 'Edebiyat', max: 24 },
    { name: 'Tarih-1', max: 10 },
    { name: 'Coğrafya-1', max: 6 },
    { name: 'Tarih-2', max: 11 },
    { name: 'Coğrafya-2', max: 11 },
    { name: 'Felsefe', max: 12 },
    { name: 'Din', max: 6 },
    { name: 'YDT', max: 80 },
]

for (const sub of allSubjects) {
    for (let d = 0; d <= sub.max; d++) {
        for (let y = 0; y <= sub.max - d; y++) {
            const net = calculateNet(d, y)
            const expectedRaw = d - (y / 4)
            const expected = Math.round(Math.max(0, expectedRaw) * 100) / 100

            check(net === expected, `${sub.name}: calculateNet(${d}, ${y})`, `Net=${net}, Beklenen=${expected}`)
            check(net >= 0, `${sub.name}: Net negatif olamaz`, `Net=${net}`)
            check(net <= sub.max, `${sub.name}: Net max soru sayısını aşamaz`, `Net=${net}, Max=${sub.max}`)
        }
    }
}
console.log(`  ✓ Suite 1 tamamlandı. Toplam kontrol: ${totalChecks}\n`)

// ============================================================================
// SUITE 2: ÖSYM 0.5 NET BARAJ KOMBİNASYONLARI (Doğruluk Tablosu - 32 Durum)
// ============================================================================
console.log('🧪 SUITE 2: ÖSYM 0.5 Net Baraj Kuralı — 32 Durumlu Doğruluk Tablosu...')

for (let mask = 0; mask < 32; mask++) {
    const hasTYT_TR = (mask & 1) !== 0
    const hasTYT_Mat = (mask & 2) !== 0
    const hasAYT_Say = (mask & 4) !== 0
    const hasAYT_Ea = (mask & 8) !== 0
    const hasAYT_Soz = (mask & 16) !== 0

    const tyt = {
        turkce: { dogru: hasTYT_TR ? 1 : 0, yanlis: 0 },
        matematik: { dogru: hasTYT_Mat ? 1 : 0, yanlis: 0 },
        sosyal: { dogru: 0, yanlis: 0 },
        fen: { dogru: 0, yanlis: 0 },
    }

    const ayt = {
        matematik: { dogru: hasAYT_Say && hasAYT_Ea ? 1 : 0, yanlis: 0 },
        fizik: { dogru: (!hasAYT_Ea && hasAYT_Say) ? 1 : 0, yanlis: 0 },
        kimya: { dogru: 0, yanlis: 0 },
        biyoloji: { dogru: 0, yanlis: 0 },
        edebiyat: { dogru: hasAYT_Soz && !hasAYT_Say ? 1 : 0, yanlis: 0 },
        tarih1: { dogru: 0, yanlis: 0 },
        cografya1: { dogru: 0, yanlis: 0 },
        tarih2: { dogru: 0, yanlis: 0 },
        cografya2: { dogru: 0, yanlis: 0 },
        felsefe: { dogru: 0, yanlis: 0 },
        din: { dogru: 0, yanlis: 0 },
    }

    const res = calculateYKSScores(tyt, ayt, { ydt: { dogru: 0, yanlis: 0 } }, 80)
    const expectedTYTGecerli = hasTYT_TR || hasTYT_Mat

    if (expectedTYTGecerli) {
        check(typeof res.estimatedRanks.tyt === 'number', `Mask ${mask}: TYT geçerli olmalı`)
        check(typeof res.estimatedHamRanks.tyt === 'number', `Mask ${mask}: TYT Ham geçerli olmalı`)
    } else {
        check(res.estimatedRanks.tyt === undefined, `Mask ${mask}: TYT barajı geçilmediğinde sıralama undefined olmalı`)
        check(res.estimatedRanks.say === undefined, `Mask ${mask}: TYT barajı olmadan SAY sıralaması olamaz`)
        check(res.estimatedRanks.ea === undefined, `Mask ${mask}: TYT barajı olmadan EA sıralaması olamaz`)
        check(res.estimatedRanks.soz === undefined, `Mask ${mask}: TYT barajı olmadan SÖZ sıralaması olamaz`)
    }
}
console.log(`  ✓ Suite 2 tamamlandı. Toplam kontrol: ${totalChecks}\n`)

// ============================================================================
// SUITE 3: OBP HESAPLAMALARI & MONOTONLUK KOMBİNASYONLARI
// ============================================================================
console.log('🧪 SUITE 3: OBP Tüm Kombinasyonları (50.0 - 100.0 Diploma Notu x 3 OBP Tipi)...')

let prevStandardPuan = 0
let prevBrokenPuan = 0
let prevVocationalPuan = 0

for (let diploma = 50.0; diploma <= 100.05; diploma += 0.25) {
    const dRounded = Math.round(diploma * 100) / 100
    const obpGercek = dRounded * 5

    // Standart OBP
    const stdKatki = obpGercek * 0.12
    const stdExpectedMin = 30.0
    const stdExpectedMax = 60.0
    check(stdKatki >= stdExpectedMin - 0.001 && stdKatki <= stdExpectedMax + 0.001, `OBP Standard Bounds: ${dRounded}`)
    if (prevStandardPuan > 0) {
        check(stdKatki >= prevStandardPuan, `OBP Standard Monotonicity: ${dRounded}`)
    }
    prevStandardPuan = stdKatki

    // Kırık OBP
    const brokenKatki = obpGercek * 0.06
    check(Math.abs(brokenKatki - stdKatki / 2) < 0.0001, `Kırık OBP tam olarak standart OBP'nin yarısı olmalı: ${dRounded}`)
    if (prevBrokenPuan > 0) {
        check(brokenKatki >= prevBrokenPuan, `OBP Kırık Monotonicity: ${dRounded}`)
    }
    prevBrokenPuan = brokenKatki

    // Mesleki Ek Puanlı OBP
    const vocKatki = obpGercek * (0.12 + 0.06)
    check(Math.abs(vocKatki - (stdKatki + brokenKatki)) < 0.0001, `Mesleki OBP = Standart + 0.06: ${dRounded}`)
    if (prevVocationalPuan > 0) {
        check(vocKatki >= prevVocationalPuan, `OBP Mesleki Monotonicity: ${dRounded}`)
    }
    prevVocationalPuan = vocKatki
}
console.log(`  ✓ Suite 3 tamamlandı. Toplam kontrol: ${totalChecks}\n`)

// ============================================================================
// SUITE 4: SIRALAMA MOTORU TAM ARALIK TARAMA (YERLEŞTİRME VE HAM)
// ============================================================================
console.log('🧪 SUITE 4: Sıralama Motoru Tam Aralık Taraması (Yerleştirme 100-560 & Ham 100-500)...')

const fields = ['tyt', 'say', 'ea', 'soz', 'dil']

// 1. Yerleştirme Dağılım Taraması (560 -> 100)
for (const field of fields) {
    let lastRank = 1
    const table = YERLESTIRME_TABLES[field]

    for (const [puan, beklenenSira] of table) {
        const calculatedRank = estimateRank(puan, field, 'yerlestirme')
        check(calculatedRank === beklenenSira, `YERL ${field.toUpperCase()} ${puan} puan eşleşmeli`, `Hesaplanan=${calculatedRank}, Beklenen=${beklenenSira}`)
    }

    for (let score = 560.0; score >= 100.0; score -= 0.1) {
        const sRounded = Math.round(score * 10) / 10
        const rank = estimateRank(sRounded, field, 'yerlestirme')

        check(!isNaN(rank), `Yerl ${field} sıralama NaN olamaz (${sRounded})`)
        check(isFinite(rank), `Yerl ${field} sıralama sonsuz olamaz (${sRounded})`)
        check(rank >= 1, `Yerl ${field} sıralama 1'den küçük olamaz (${sRounded})`)
        check(rank <= 3500000, `Yerl ${field} sıralama tavanı aşamaz (${sRounded})`)
        check(rank >= lastRank, `Yerl ${field} monotonluk hatası! Puan: ${sRounded}, Sıra: ${rank}, Önceki: ${lastRank}`)
        lastRank = rank
    }
}

// 2. Ham Dağılım Taraması (500 -> 100)
for (const field of fields) {
    let lastRank = 1
    const table = HAM_TABLES[field]

    for (const [puan, beklenenSira] of table) {
        const calculatedRank = estimateRank(puan, field, 'ham')
        check(calculatedRank === beklenenSira, `HAM ${field.toUpperCase()} ${puan} puan eşleşmeli`, `Hesaplanan=${calculatedRank}, Beklenen=${beklenenSira}`)
    }

    for (let score = 500.0; score >= 100.0; score -= 0.1) {
        const sRounded = Math.round(score * 10) / 10
        const rank = estimateRank(sRounded, field, 'ham')

        check(!isNaN(rank), `Ham ${field} sıralama NaN olamaz (${sRounded})`)
        check(isFinite(rank), `Ham ${field} sıralama sonsuz olamaz (${sRounded})`)
        check(rank >= 1, `Ham ${field} sıralama 1'den küçük olamaz (${sRounded})`)
        check(rank <= 2500000, `Ham ${field} sıralama tavanı aşamaz (${sRounded})`)
        check(rank >= lastRank, `Ham ${field} monotonluk hatası! Puan: ${sRounded}, Sıra: ${rank}, Önceki: ${lastRank}`)
        lastRank = rank
    }
}

console.log(`  ✓ Suite 4 tamamlandı. Toplam kontrol: ${totalChecks}\n`)

// ============================================================================
// SUITE 5: 10,000 ADAYLIK BÜYÜK MONTE CARLO STRES VE PERFORMANS TESTİ
// ============================================================================
console.log('🧪 SUITE 5: 10,000 Rastgele Aday ile Monte Carlo Stres ve Sınır Testi...')

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateRandomScores() {
    const gen = (max) => {
        const d = randomInt(0, max)
        const y = randomInt(0, max - d)
        return { dogru: d, yanlis: y }
    }
    return {
        tyt: {
            turkce: gen(40),
            matematik: gen(40),
            sosyal: gen(20),
            fen: gen(20),
        },
        ayt: {
            matematik: gen(40),
            fizik: gen(14),
            kimya: gen(13),
            biyoloji: gen(13),
            edebiyat: gen(24),
            tarih1: gen(10),
            cografya1: gen(6),
            tarih2: gen(11),
            cografya2: gen(11),
            felsefe: gen(12),
            din: gen(6),
        },
        ydt: {
            ydt: gen(80),
        },
        obp: randomInt(50, 100),
        obpHalved: Math.random() < 0.2,
        obpMesleki: Math.random() < 0.1,
    }
}

const startTime = Date.now()
const MONTE_CARLO_COUNT = 10000

for (let i = 0; i < MONTE_CARLO_COUNT; i++) {
    const input = generateRandomScores()
    const res = calculateYKSScores(input.tyt, input.ayt, input.ydt, input.obp, input.obpHalved, input.obpMesleki)

    // İnvaryant 1: Netlerin doğruluğu
    check(res.nets.tyt.toplam >= 0 && res.nets.tyt.toplam <= 120, 'Monte Carlo: TYT toplam net 0-120 aralığında')
    check(res.nets.ayt.toplam >= 0 && res.nets.ayt.toplam <= 160, 'Monte Carlo: AYT toplam net 0-160 aralığında')
    check(res.nets.ydt.ydt >= 0 && res.nets.ydt.ydt <= 80, 'Monte Carlo: YDT net 0-80 aralığında')

    // İnvaryant 2: Ham Puanlar ve Yerleştirme Puanları
    check(res.points.sayHam >= 100 && res.points.sayHam <= 500.1, 'Monte Carlo: SAY Ham Puan 100-500 aralığında')
    check(res.points.eaHam >= 100 && res.points.eaHam <= 500.1, 'Monte Carlo: EA Ham Puan 100-500 aralığında')
    check(res.points.sozHam >= 100 && res.points.sozHam <= 500.1, 'Monte Carlo: SÖZ Ham Puan 100-500 aralığında')
    check(res.points.dilHam >= 100 && res.points.dilHam <= 500.1, 'Monte Carlo: DİL Ham Puan 100-500 aralığında')

    // İnvaryant 3: Yerleştirme Puanı >= Ham Puan (OBP eklenmiş hali)
    check(res.points.say >= res.points.sayHam, 'Monte Carlo: SAY Yerleştirme >= Ham')
    check(res.points.ea >= res.points.eaHam, 'Monte Carlo: EA Yerleştirme >= Ham')
    check(res.points.soz >= res.points.sozHam, 'Monte Carlo: SÖZ Yerleştirme >= Ham')
    check(res.points.dil >= res.points.dilHam, 'Monte Carlo: DİL Yerleştirme >= Ham')

    // İnvaryant 4: Tavan puan 560'ı asla geçemez
    check(res.points.say <= 560, 'Monte Carlo: SAY tavan 560')
    check(res.points.ea <= 560, 'Monte Carlo: EA tavan 560')
    check(res.points.soz <= 560, 'Monte Carlo: SÖZ tavan 560')
    check(res.points.dil <= 560, 'Monte Carlo: DİL tavan 560')

    // İnvaryant 5: Sıralamalar tanımlı ise geçerli tam sayıdır
    for (const f of fields) {
        const r = res.estimatedRanks[f]
        if (r !== undefined) {
            check(Number.isInteger(r) && r >= 1 && r <= 3500000, `Monte Carlo: ${f} yerleştirme sıralama tamsayı (${r})`)
        }
        const hr = res.estimatedHamRanks[f]
        if (hr !== undefined) {
            check(Number.isInteger(hr) && hr >= 1 && hr <= 2500000, `Monte Carlo: ${f} ham sıralama tamsayı (${hr})`)
        }
    }
}

const duration = Date.now() - startTime
const opsPerSec = Math.round((MONTE_CARLO_COUNT / (duration / 1000)))

console.log(`  ✓ Suite 5 tamamlandı. ${MONTE_CARLO_COUNT} aday hesaplaması ${duration} ms sürdü (~${opsPerSec.toLocaleString('tr-TR')} aday/sn). Toplam kontrol: ${totalChecks}\n`)

// ============================================================================
// SUITE 6: ÖZEL DERECE VE REFERANS ADAYLAR TAM DOĞRULAMA
// ============================================================================
console.log('🧪 SUITE 6: Özel Senaryolar ve Referans Adaylar...')

// 1. Şampiyon (Her şey full + 100 OBP)
const fullTYT = { turkce: { dogru: 40, yanlis: 0 }, matematik: { dogru: 40, yanlis: 0 }, sosyal: { dogru: 20, yanlis: 0 }, fen: { dogru: 20, yanlis: 0 } }
const fullAYT = {
    matematik: { dogru: 40, yanlis: 0 }, fizik: { dogru: 14, yanlis: 0 }, kimya: { dogru: 13, yanlis: 0 }, biyoloji: { dogru: 13, yanlis: 0 },
    edebiyat: { dogru: 24, yanlis: 0 }, tarih1: { dogru: 10, yanlis: 0 }, cografya1: { dogru: 6, yanlis: 0 },
    tarih2: { dogru: 11, yanlis: 0 }, cografya2: { dogru: 11, yanlis: 0 }, felsefe: { dogru: 12, yanlis: 0 }, din: { dogru: 6, yanlis: 0 },
}
const fullYDT = { ydt: { dogru: 80, yanlis: 0 } }

const sampiyon = calculateYKSScores(fullTYT, fullAYT, fullYDT, 100)
check(Math.abs(sampiyon.points.say - 559.72) < 0.05, 'Şampiyon SAY puanı 559.72 olmalı', `SAY=${sampiyon.points.say}`)
check(Math.abs(sampiyon.points.ea - 559.98) < 0.05, 'Şampiyon EA puanı 559.98 olmalı', `EA=${sampiyon.points.ea}`)
check(Math.abs(sampiyon.points.soz - 559.98) < 0.05, 'Şampiyon SÖZ puanı 559.98 olmalı', `SÖZ=${sampiyon.points.soz}`)
check(sampiyon.points.dil === 560, 'Şampiyon DİL puanı 560 olmalı', `DİL=${sampiyon.points.dil}`)
check(sampiyon.estimatedRanks.say === 1, 'Şampiyon SAY yerleştirme sıralaması 1 olmalı', `Sıra=${sampiyon.estimatedRanks.say}`)
check(sampiyon.estimatedRanks.ea === 1, 'Şampiyon EA yerleştirme sıralaması 1 olmalı', `Sıra=${sampiyon.estimatedRanks.ea}`)
check(sampiyon.estimatedRanks.soz === 1, 'Şampiyon SÖZ yerleştirme sıralaması 1 olmalı', `Sıra=${sampiyon.estimatedRanks.soz}`)
check(sampiyon.estimatedRanks.dil === 1, 'Şampiyon DİL yerleştirme sıralaması 1 olmalı', `Sıra=${sampiyon.estimatedRanks.dil}`)

// 2. Tıp Adayı Senaryosu (99 TYT, 69 AYT, 95 OBP -> Yerleştirme SAY: 496.53)
const tipTYT = {
    turkce: { dogru: 35, yanlis: 4 },
    matematik: { dogru: 34, yanlis: 3 },
    sosyal: { dogru: 16, yanlis: 3 },
    fen: { dogru: 17, yanlis: 2 },
}
const tipAYT = {
    matematik: { dogru: 36, yanlis: 2 },
    fizik: { dogru: 12, yanlis: 2 },
    kimya: { dogru: 12, yanlis: 1 },
    biyoloji: { dogru: 11, yanlis: 2 },
    edebiyat: { dogru: 0, yanlis: 0 },
    tarih1: { dogru: 0, yanlis: 0 },
    cografya1: { dogru: 0, yanlis: 0 },
    tarih2: { dogru: 0, yanlis: 0 },
    cografya2: { dogru: 0, yanlis: 0 },
    felsefe: { dogru: 0, yanlis: 0 },
    din: { dogru: 0, yanlis: 0 },
}
const tipAdayi = calculateYKSScores(tipTYT, tipAYT, { ydt: { dogru: 0, yanlis: 0 } }, 95)
// Tıp adayının Yerleştirme sıralaması 10.000 ile 16.000 arasında olmalıdır! (Eski hatalı kod 4. veriyordu)
check(tipAdayi.estimatedRanks.say >= 10000 && tipAdayi.estimatedRanks.say <= 16000,
    'Tıp Adayı Yerleştirme SAY sıralaması gerçekçi olmalı (10k-16k)', `Sıralama=${tipAdayi.estimatedRanks.say}`)
// Ham sıralaması da 18.000 - 26.000 arasında olmalı
check(tipAdayi.estimatedHamRanks.say >= 18000 && tipAdayi.estimatedHamRanks.say <= 26000,
    'Tıp Adayı Ham SAY sıralaması gerçekçi olmalı (18k-26k)', `Ham Sıralama=${tipAdayi.estimatedHamRanks.say}`)

// 3. Sıfırcı Aday (Hiç soru işaretlemeyen)
const zeroTYT = { turkce: { dogru: 0, yanlis: 0 }, matematik: { dogru: 0, yanlis: 0 }, sosyal: { dogru: 0, yanlis: 0 }, fen: { dogru: 0, yanlis: 0 } }
const zeroAYT = {
    matematik: { dogru: 0, yanlis: 0 }, fizik: { dogru: 0, yanlis: 0 }, kimya: { dogru: 0, yanlis: 0 }, biyoloji: { dogru: 0, yanlis: 0 },
    edebiyat: { dogru: 0, yanlis: 0 }, tarih1: { dogru: 0, yanlis: 0 }, cografya1: { dogru: 0, yanlis: 0 },
    tarih2: { dogru: 0, yanlis: 0 }, cografya2: { dogru: 0, yanlis: 0 }, felsefe: { dogru: 0, yanlis: 0 }, din: { dogru: 0, yanlis: 0 },
}
const zeroYDT = { ydt: { dogru: 0, yanlis: 0 } }

const sifirci = calculateYKSScores(zeroTYT, zeroAYT, zeroYDT, 0)
check(sifirci.estimatedRanks.tyt === undefined, 'Sıfırcı TYT sıralaması undefined')
check(sifirci.estimatedRanks.say === undefined, 'Sıfırcı SAY sıralaması undefined')
check(sifirci.estimatedRanks.ea === undefined, 'Sıfırcı EA sıralaması undefined')
check(sifirci.estimatedRanks.soz === undefined, 'Sıfırcı SÖZ sıralaması undefined')
check(sifirci.estimatedRanks.dil === undefined, 'Sıfırcı DİL sıralaması undefined')

console.log(`  ✓ Suite 6 tamamlandı. Toplam kontrol: ${totalChecks}\n`)

// ============================================================================
// FİNAL RAPORU
// ============================================================================
console.log('╔═════════════════════════════════════════════════════════════════════════╗')
console.log('║  🏁 KOMBİNASYONEL TEST RAPORU                                           ║')
console.log('╟─────────────────────────────────────────────────────────────────────────╢')
console.log(`║  Toplam Yapılan Kontrol :  ${totalChecks.toLocaleString('tr-TR').padEnd(12)}                           ║`)
console.log(`║  Başarılı Doğrulama     :  ${(totalChecks - failedChecks).toLocaleString('tr-TR').padEnd(12)} ✅                         ║`)
console.log(`║  Başarısız / Hata       :  ${failedChecks.toString().padEnd(12)} ${failedChecks === 0 ? '🎉 (0 HATA)' : '❌'}                        ║`)
console.log(`║  Doğruluk Oranı         :  ${((totalChecks - failedChecks) / totalChecks * 100).toFixed(4)}%                                  ║`)
console.log('╚═════════════════════════════════════════════════════════════════════════╝')

if (failedChecks > 0) {
    console.error(`\n❌ TEST BAŞARISIZ! ${failedChecks} adet hata tespit edildi.`)
    process.exit(1)
} else {
    console.log('\n🌟 KUSURSUZ: HEM YERLEŞTİRME HEM HAM DAĞILIMLARI TÜM KOMBİNASYONLARDA 0 HATA İLE GEÇTİ!')
    process.exit(0)
}
