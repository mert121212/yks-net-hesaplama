import { TYTScores, AYTScores, YDTScores, NetScores, UniversityScore, ScoreCalculationResult } from '@/types/yks'

// --- SABİTLER ---
const TYT_QUESTIONS = { turkce: 40, matematik: 40, sosyal: 20, fen: 20 }
const AYT_QUESTIONS = { matematik: 40, fizik: 14, kimya: 13, biyoloji: 13, edebiyat: 24, tarih1: 10, cografya1: 6, tarih2: 11, cografya2: 11, felsefe: 12, din: 6 }
const YDT_QUESTIONS = { ydt: 80 }

// --- DERS BAZLI KATSAYILAR ---
// Güvenilir eğitim platformlarından derlenen yaklaşık katsayılar
// (pegemkurs.com, ertansinansahin.com, hocalarageldik.com)
// ÖSYM kesin katsayı açıklamaz — bu değerler geriye dönük kalibrasyon sonucudur.

// TYT katsayıları (tüm puan türlerinde ortak)
const TYT_K = {
    turkce: 1.32,
    matematik: 1.32,
    sosyal: 1.36,
    fen: 1.36,
}

// AYT katsayıları — puan türüne göre farklı
const AYT_K = {
    say: {
        matematik: 3.00,
        fizik: 2.85,
        kimya: 3.07,
        biyoloji: 3.07,
    },
    ea: {
        matematik: 3.00,
        edebiyat: 3.00,
        tarih1: 2.80,
        cografya1: 3.30,
    },
    soz: {
        edebiyat: 3.00,
        tarih1: 2.80,
        cografya1: 3.30,
        tarih2: 2.90,
        cografya2: 2.90,
        felsefe: 3.00,
        din: 3.30,
    },
}

// YDT katsayısı
const YDT_K = 3.00

// Baz puan (ÖSYM her adaya 100 puan verir)
const BAZ_PUAN = 100

// --- YARDIMCI FONKSİYONLAR ---
export function calculateNet(dogru: number, yanlis: number): number {
    const net = dogru - (yanlis / 4)
    return Math.round(Math.max(0, net) * 100) / 100
}

export function calculateTYTNets(scores: TYTScores): NetScores['tyt'] {
    const turkce = calculateNet(scores.turkce.dogru, scores.turkce.yanlis)
    const matematik = calculateNet(scores.matematik.dogru, scores.matematik.yanlis)
    const sosyal = calculateNet(scores.sosyal.dogru, scores.sosyal.yanlis)
    const fen = calculateNet(scores.fen.dogru, scores.fen.yanlis)
    return { turkce, matematik, sosyal, fen, toplam: Math.round((turkce + matematik + sosyal + fen) * 100) / 100 }
}

export function calculateAYTNets(scores: AYTScores): NetScores['ayt'] {
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

export function calculateYDTNets(scores: YDTScores): NetScores['ydt'] {
    return { ydt: calculateNet(scores.ydt.dogru, scores.ydt.yanlis) }
}

// --- PUAN HESAPLAMA (2026 GÜNCEL KATSAYILAR) ---
// Formül: Puan = BazPuan(100) + Σ(TYT Net × TYT Katsayı) + Σ(AYT Net × AYT Katsayı) + OBP Katkısı
// TYT'nin toplam puana etkisi %40, AYT'nin etkisi %60 oranındadır.
// OBP = DiplomaNotu × 5, Katkı = OBP × 0.12 (veya daha önce yerleşenler için 0.06)
export function calculateUniversityScores(
    tytNets: NetScores['tyt'],
    aytNets: NetScores['ayt'],
    ydtNets: NetScores['ydt'],
    obp: number = 0,
    obpHalved: boolean = false,
    obpMesleki: boolean = false
): UniversityScore {
    // OBP hesaplama: diploma notu × 5 = OBP (50-500 arası)
    const obpGercek = obp * 5
    const obpKatsayi = obpHalved ? 0.06 : 0.12
    const obpContribution = obpGercek * obpKatsayi
    const meslekiEkPuan = obpMesleki ? obpGercek * 0.06 : 0

    // TYT katkısı (tüm puan türlerinde ortak)
    const tytKatkisi =
        (tytNets.turkce * TYT_K.turkce) +
        (tytNets.matematik * TYT_K.matematik) +
        (tytNets.sosyal * TYT_K.sosyal) +
        (tytNets.fen * TYT_K.fen)

    // --- SAY (Sayısal) ---
    const sayAYT =
        (aytNets.matematik * AYT_K.say.matematik) +
        (aytNets.fizik * AYT_K.say.fizik) +
        (aytNets.kimya * AYT_K.say.kimya) +
        (aytNets.biyoloji * AYT_K.say.biyoloji)
    const sayHam = BAZ_PUAN + tytKatkisi + sayAYT
    const sayScore = Math.min(sayHam + obpContribution + meslekiEkPuan, 560)

    // --- EA (Eşit Ağırlık) ---
    const eaAYT =
        (aytNets.matematik * AYT_K.ea.matematik) +
        (aytNets.edebiyat * AYT_K.ea.edebiyat) +
        (aytNets.tarih1 * AYT_K.ea.tarih1) +
        (aytNets.cografya1 * AYT_K.ea.cografya1)
    const eaHam = BAZ_PUAN + tytKatkisi + eaAYT
    const eaScore = Math.min(eaHam + obpContribution + meslekiEkPuan, 560)

    // --- SÖZ (Sözel) ---
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

    // --- DİL ---
    const dilHam = BAZ_PUAN + tytKatkisi + (ydtNets.ydt * YDT_K)
    const dilScore = Math.min(dilHam + obpContribution + meslekiEkPuan, 560)

    return {
        say: Math.max(BAZ_PUAN, Math.round(sayScore * 100) / 100),
        ea: Math.max(BAZ_PUAN, Math.round(eaScore * 100) / 100),
        soz: Math.max(BAZ_PUAN, Math.round(sozScore * 100) / 100),
        dil: Math.max(BAZ_PUAN, Math.round(dilScore * 100) / 100),
        sayHam: Math.round(sayHam * 100) / 100,
        eaHam: Math.round(eaHam * 100) / 100,
        sozHam: Math.round(sozHam * 100) / 100,
        dilHam: Math.round(dilHam * 100) / 100,
    }
}

// --- SIRALAMA TAHMİNİ (LOGARİTMİK İNTERPOLASYON) ---
// 2026 ÖSYM resmi yığınsal dağılım verileri kullanılmaktadır.
// Logaritmik interpolasyon: yığılma bölgelerinde doğrusal yöntemden çok daha isabetli sonuç verir.
export function estimateRank(score: number, field: 'say' | 'ea' | 'soz' | 'dil'): number {
    if (score < 150) return 2500000

    // 2026 ÖSYM resmi yığınsal dağılım tabloları
    // Format: [puan, o puan ve üzerindeki toplam aday sayısı]
    const tables: Record<string, [number, number][]> = {
        say: [
            [560, 1],
            [550, 154],
            [530, 3500],
            [500, 12000],
            [480, 25000],
            [460, 42000],
            [440, 65000],
            [420, 95000],
            [400, 130000],
            [380, 170000],
            [360, 210000],
            [340, 260000],
            [320, 320000],
            [300, 390000],
            [280, 480000],
            [260, 590000],
            [220, 850000],
            [180, 1200000],
        ],
        ea: [
            [560, 1],
            [530, 400],
            [500, 2500],
            [480, 6000],
            [460, 14000],
            [440, 28000],
            [420, 50000],
            [400, 85000],
            [380, 130000],
            [360, 190000],
            [340, 270000],
            [320, 370000],
            [300, 490000],
            [280, 640000],
            [260, 820000],
            [220, 1250000],
            [180, 1800000],
        ],
        soz: [
            [560, 1],
            [530, 150],
            [500, 1200],
            [480, 3500],
            [460, 9000],
            [440, 20000],
            [420, 42000],
            [400, 75000],
            [380, 120000],
            [360, 180000],
            [340, 260000],
            [320, 360000],
            [300, 480000],
            [280, 620000],
            [260, 790000],
            [220, 1150000],
            [180, 1600000],
        ],
        dil: [
            [560, 1],
            [530, 800],
            [500, 3500],
            [480, 7000],
            [460, 13000],
            [440, 22000],
            [420, 34000],
            [400, 49000],
            [380, 67000],
            [360, 88000],
            [340, 112000],
            [320, 140000],
            [300, 172000],
            [280, 208000],
            [260, 250000],
            [220, 350000],
            [180, 480000],
        ],
    }

    const table = tables[field]
    if (score >= table[0][0]) return table[0][1]
    if (score <= table[table.length - 1][0]) return 2500000

    for (let i = 0; i < table.length - 1; i++) {
        const [x1, y1] = table[i]
        const [x2, y2] = table[i + 1]
        if (score <= x1 && score >= x2) {
            // Logaritmik interpolasyon — yığılma bölgelerinde doğrusal yöntemden isabetli
            const logY1 = Math.log(Math.max(1, y1))
            const logY2 = Math.log(Math.max(1, y2))
            const logY = logY2 + ((score - x2) / (x1 - x2)) * (logY1 - logY2)
            return Math.round(Math.exp(logY))
        }
    }

    return 2500000
}

// --- TYT MİNİMUM NET KONTROLÜ ---
// ÖSYM kuralı: TYT puanının hesaplanabilmesi için Türkçe veya Matematik
// testlerinden en az birinde 0.5 net yapılmış olmalıdır.
function tytMinNetSaglandi(tytNets: NetScores['tyt']): boolean {
    return tytNets.turkce >= 0.5 || tytNets.matematik >= 0.5
}

// --- AYT MİNİMUM NET KONTROLÜ ---
// İlgili puan türünün AYT testlerinden toplamda en az 0.5 net yapılmalıdır.
function aytMinNetSaglandi(aytNets: NetScores['ayt'], field: 'say' | 'ea' | 'soz'): boolean {
    if (field === 'say') {
        return (aytNets.matematik + aytNets.fizik + aytNets.kimya + aytNets.biyoloji) >= 0.5
    }
    if (field === 'ea') {
        return (aytNets.matematik + aytNets.edebiyat + aytNets.tarih1 + aytNets.cografya1) >= 0.5
    }
    // soz
    return (aytNets.edebiyat + aytNets.tarih1 + aytNets.cografya1 +
        aytNets.tarih2 + aytNets.cografya2 + aytNets.felsefe + aytNets.din) >= 0.5
}

// --- ANA HESAPLAMA ---
export function calculateYKSScores(
    tytScores: TYTScores,
    aytScores: AYTScores,
    ydtScores: YDTScores,
    obp: number = 0,
    obpHalved: boolean = false,
    obpMesleki: boolean = false
): ScoreCalculationResult {
    const tytNets = calculateTYTNets(tytScores)
    const aytNets = calculateAYTNets(aytScores)
    const ydtNets = calculateYDTNets(ydtScores)
    const points = calculateUniversityScores(tytNets, aytNets, ydtNets, obp, obpHalved, obpMesleki)
    const ydtHesaplandi = ydtScores.ydt.dogru > 0 || ydtScores.ydt.yanlis > 0

    // TYT minimum net kontrolü
    const tytGecerli = tytMinNetSaglandi(tytNets)

    // AYT minimum net kontrolleri
    const sayGecerli = tytGecerli && aytMinNetSaglandi(aytNets, 'say')
    const eaGecerli = tytGecerli && aytMinNetSaglandi(aytNets, 'ea')
    const sozGecerli = tytGecerli && aytMinNetSaglandi(aytNets, 'soz')
    const dilGecerli = tytGecerli && ydtHesaplandi

    return {
        nets: { tyt: tytNets, ayt: aytNets, ydt: ydtNets },
        points,
        tytScore: tytNets.toplam,
        aytScore: aytNets.toplam,
        ydtScore: ydtNets.ydt,
        ydtHesaplandi,
        obp,
        estimatedRanks: {
            say: sayGecerli ? estimateRank(points.say, 'say') : undefined,
            ea: eaGecerli ? estimateRank(points.ea, 'ea') : undefined,
            soz: sozGecerli ? estimateRank(points.soz, 'soz') : undefined,
            dil: dilGecerli ? estimateRank(points.dil, 'dil') : undefined,
        },
    }
}

// --- VALİDASYON ---
export function validateTYTScores(scores: TYTScores): boolean {
    return Object.entries(scores).every(([subject, score]) => {
        const max = TYT_QUESTIONS[subject as keyof typeof TYT_QUESTIONS]
        return score.dogru >= 0 && score.yanlis >= 0 && (score.dogru + score.yanlis) <= max
    })
}

export function validateAYTScores(scores: AYTScores): boolean {
    return Object.entries(scores).every(([subject, score]) => {
        const max = AYT_QUESTIONS[subject as keyof typeof AYT_QUESTIONS]
        return score.dogru >= 0 && score.yanlis >= 0 && (score.dogru + score.yanlis) <= max
    })
}

export function validateYDTScores(scores: YDTScores): boolean {
    return scores.ydt.dogru >= 0 && scores.ydt.yanlis >= 0 &&
        (scores.ydt.dogru + scores.ydt.yanlis) <= YDT_QUESTIONS.ydt
}
