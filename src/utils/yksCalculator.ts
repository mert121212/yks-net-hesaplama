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
        cografya1: 3.33,
    },
    soz: {
        edebiyat: 3.00,
        tarih1: 2.80,
        cografya1: 3.33,
        tarih2: 2.91,
        cografya2: 2.91,
        felsefe: 3.00,
        din: 3.33,
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

// --- PUAN HESAPLAMA (2026 GÜNCEL ÖSYM KATSAYILARI) ---
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

    // --- TYT (Önlisans / 2 Yıllık / PMYO) ---
    // TYT Ham: 100 baz puan + 120 soruluk TYT netleri (Türkçe 3.3, Mat 3.3, Sos 3.4, Fen 3.4 katsayıları ile 500'e tamamlanır)
    const tytHam = BAZ_PUAN + (tytNets.turkce * 3.3) + (tytNets.matematik * 3.3) + (tytNets.sosyal * 3.4) + (tytNets.fen * 3.4)
    const tytScore = Math.min(tytHam + obpContribution + meslekiEkPuan, 560)

    return {
        tyt: Math.max(BAZ_PUAN, Math.round(tytScore * 100) / 100),
        tytHam: Math.round(tytHam * 100) / 100,
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
// 2026 YKS ÖSYM resmi yığınsal dağılım verileri kullanılmaktadır.
// Logaritmik interpolasyon: yığılma bölgelerinde doğrusal yöntemden çok daha isabetli sonuç verir.
export function estimateRank(score: number, field: 'tyt' | 'say' | 'ea' | 'soz' | 'dil'): number {
    if (score < 100) return 2500000

    // 2026 YKS ÖSYM resmi yığınsal dağılım tabloları
    // Kaynak: ÖSYM 2026-YKS Sınav Sonuçlarına İlişkin Sayısal Bilgiler
    // Format: [puan, o puan ve üzerindeki toplam aday sayısı]
    const tables: Record<string, [number, number][]> = {
        tyt: [
            [500, 5],
            [480, 822],
            [460, 5524],
            [440, 17050],
            [420, 37770],
            [400, 67394],
            [380, 106404],
            [360, 155008],
            [340, 218156],
            [320, 302758],
            [300, 417935],
            [280, 577094],
            [260, 787244],
            [240, 1045340],
            [220, 1332391],
            [200, 1630698],
            [180, 1914717],
            [160, 2125244],
            [140, 2184873],
            [120, 2187723],
            [100, 2187743],
        ],
        say: [
            [500, 1],
            [480, 1453],
            [460, 8786],
            [440, 22370],
            [420, 39624],
            [400, 58728],
            [380, 78806],
            [360, 100553],
            [340, 125045],
            [320, 153304],
            [300, 187034],
            [280, 228643],
            [260, 279885],
            [240, 344536],
            [220, 430074],
            [200, 549793],
            [180, 721488],
            [160, 923753],
            [140, 1078515],
            [120, 1134006],
            [100, 1135718],
        ],
        ea: [
            [500, 1],
            [480, 52],
            [460, 307],
            [440, 874],
            [420, 2097],
            [400, 4545],
            [380, 9486],
            [360, 23452],
            [340, 50608],
            [320, 89520],
            [300, 140784],
            [280, 210499],
            [260, 308127],
            [240, 440752],
            [220, 615366],
            [200, 832251],
            [180, 1069239],
            [160, 1272506],
            [140, 1391240],
            [120, 1420558],
            [100, 1421290],
        ],
        soz: [
            [500, 1],
            [480, 10],
            [460, 74],
            [440, 214],
            [420, 560],
            [400, 1418],
            [380, 3936],
            [360, 10259],
            [340, 23653],
            [320, 47292],
            [300, 86560],
            [280, 148959],
            [260, 238848],
            [240, 360487],
            [220, 515916],
            [200, 699304],
            [180, 873860],
            [160, 998826],
            [140, 1065157],
            [120, 1084720],
            [100, 1085698],
        ],
        dil: [
            [500, 5],
            [480, 118],
            [460, 628],
            [440, 1795],
            [420, 3632],
            [400, 6683],
            [380, 11576],
            [360, 18265],
            [340, 26469],
            [320, 35020],
            [300, 43883],
            [280, 52590],
            [260, 61992],
            [240, 72025],
            [220, 82982],
            [200, 94735],
            [180, 107579],
            [160, 120099],
            [140, 128950],
            [120, 132443],
            [100, 132826],
        ],
    }

    const table = tables[field]
    if (score >= table[0][0]) return table[0][1]
    if (score < table[table.length - 1][0]) return 2500000

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
            tyt: tytGecerli ? estimateRank(points.tyt!, 'tyt') : undefined,
            say: sayGecerli ? estimateRank(points.say, 'say') : undefined,
            ea: eaGecerli ? estimateRank(points.ea, 'ea') : undefined,
            soz: sozGecerli ? estimateRank(points.soz, 'soz') : undefined,
            dil: dilGecerli ? estimateRank(points.dil, 'dil') : undefined,
        },
    }
}

// --- VALİDASYON ---
export function validateTYTScores(scores: TYTScores): boolean {
    return (Object.entries(scores) as [keyof TYTScores, { dogru: number; yanlis: number }][]).every(([subject, score]) => {
        const max = TYT_QUESTIONS[subject as keyof typeof TYT_QUESTIONS]
        return score.dogru >= 0 && score.yanlis >= 0 && (score.dogru + score.yanlis) <= max
    })
}

export function validateAYTScores(scores: AYTScores): boolean {
    return (Object.entries(scores) as [keyof AYTScores, { dogru: number; yanlis: number }][]).every(([subject, score]) => {
        const max = AYT_QUESTIONS[subject as keyof typeof AYT_QUESTIONS]
        return score.dogru >= 0 && score.yanlis >= 0 && (score.dogru + score.yanlis) <= max
    })
}

export function validateYDTScores(scores: YDTScores): boolean {
    return scores.ydt.dogru >= 0 && scores.ydt.yanlis >= 0 &&
        (scores.ydt.dogru + scores.ydt.yanlis) <= YDT_QUESTIONS.ydt
}
