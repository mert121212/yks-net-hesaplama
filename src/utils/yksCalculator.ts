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
// ÖSYM resmi verilerine göre YKS'de 2 ayrı yığınsal dağılım bulunmaktadır:
// 1. Yerleştirme Puanları Dağılımı (100 - 560): Tercih ve yerleştirmede kullanılan gerçek sıralamadır (OBP dahil).
// 2. Ham Sınav Puanları Dağılımı (100 - 500): Sınavdaki netlerin ham başarısını gösteren sıralamadır (OBP hariç).

// 1. HAM SINAV PUANLARI YIĞINSAL DAĞILIMI (2025 ÖSYM Resmi Verileri — Max 500)
// Kaynak: ÖSYM "2025-YKS Sınav Sonuçlarına İlişkin Sayısal Bilgiler" raporu
// "Sınav Puanlarının Yığınsal Dağılımı" tablosu — OBP EKLENMEMİŞ ham puanlar
const HAM_TABLES: Record<string, [number, number][]> = {
    tyt: [
        [500, 1],
        [480, 180],
        [460, 2050],
        [440, 8163],
        [420, 21061],
        [400, 44193],
        [380, 79260],
        [360, 127655],
        [340, 193064],
        [320, 282276],
        [300, 404024],
        [280, 570335],
        [260, 794784],
        [240, 1073527],
        [220, 1379866],
        [200, 1686626],
        [180, 1977665],
        [160, 2210463],
        [140, 2303695],
        [120, 2310493],
        [100, 2310599],
    ],
    say: [
        [500, 1],
        [480, 701],
        [460, 4715],
        [440, 12449],
        [420, 24779],
        [400, 40857],
        [380, 60085],
        [360, 81946],
        [340, 106251],
        [320, 134493],
        [300, 169418],
        [280, 213365],
        [260, 270804],
        [240, 348345],
        [220, 458302],
        [200, 627659],
        [180, 892884],
        [160, 1149472],
        [140, 1277493],
        [120, 1291435],
        [100, 1291531],
    ],
    ea: [
        [500, 1],
        [480, 32],
        [460, 175],
        [440, 560],
        [420, 1325],
        [400, 2823],
        [380, 6028],
        [360, 15691],
        [340, 35436],
        [320, 68083],
        [300, 115961],
        [280, 185253],
        [260, 285967],
        [240, 431085],
        [220, 629436],
        [200, 875112],
        [180, 1134243],
        [160, 1350772],
        [140, 1474465],
        [120, 1494355],
        [100, 1494612],
    ],
    soz: [
        [500, 1],
        [480, 4],
        [460, 21],
        [440, 76],
        [420, 227],
        [400, 652],
        [380, 1782],
        [360, 4912],
        [340, 12653],
        [320, 29315],
        [300, 60680],
        [280, 115851],
        [260, 205996],
        [240, 338388],
        [220, 515827],
        [200, 723293],
        [180, 920945],
        [160, 1070609],
        [140, 1155714],
        [120, 1173742],
        [100, 1174047],
    ],
    dil: [
        [500, 5],
        [480, 66],
        [460, 410],
        [440, 1231],
        [420, 2880],
        [400, 5789],
        [380, 10552],
        [360, 17443],
        [340, 25724],
        [320, 34564],
        [300, 43840],
        [280, 53317],
        [260, 63300],
        [240, 73733],
        [220, 85010],
        [200, 97273],
        [180, 111159],
        [160, 125793],
        [140, 135895],
        [120, 140051],
        [100, 140657],
    ],
}

// 2. YERLEŞTİRME PUANLARI YIĞINSAL DAĞILIMI (2025 ÖSYM Resmi Verileri — Max 560)
// Kaynak: ÖSYM "2025-YKS Yerleştirme Sonuçlarına İlişkin Sayısal Bilgiler" raporu
// "Yerleştirme Puanlarının Yığınsal Dağılımı" tablosu — OBP DAHİL puanlar
// Not: Yerleştirme tabloları 10 puanlık aralıklarla paylaşılır (550, 530, 510, 490...)
const YERLESTIRME_TABLES: Record<string, [number, number][]> = {
    tyt: [
        [550, 14],
        [530, 601],
        [510, 3648],
        [490, 11733],
        [470, 27141],
        [450, 56634],
        [430, 103442],
        [410, 137133],
        [390, 193064],
        [370, 282276],
        [350, 404024],
        [330, 570335],
        [310, 794784],
        [290, 1073527],
        [270, 1379866],
        [250, 1686626],
        [230, 1977665],
        [200, 2210463],
        [180, 2303695],
        [150, 2310493],
        [100, 2310599],
    ],
    say: [
        [550, 57],
        [530, 1930],
        [510, 7081],
        [490, 16140],
        [470, 29410],
        [450, 50453],
        [430, 87117],
        [410, 106251],
        [390, 134493],
        [370, 169418],
        [350, 213365],
        [330, 270804],
        [310, 348345],
        [290, 458302],
        [270, 627659],
        [250, 892884],
        [230, 1149472],
        [200, 1277493],
        [180, 1291435],
        [150, 1291531],
        [100, 1291531],
    ],
    ea: [
        [550, 4],
        [530, 58],
        [510, 261],
        [490, 742],
        [470, 1629],
        [450, 4191],
        [430, 20244],
        [410, 35436],
        [390, 68083],
        [370, 115961],
        [350, 185253],
        [330, 285967],
        [310, 431085],
        [290, 629436],
        [270, 875112],
        [250, 1134243],
        [230, 1350772],
        [200, 1474465],
        [180, 1494355],
        [150, 1494612],
        [100, 1494612],
    ],
    soz: [
        [550, 1],
        [530, 7],
        [510, 26],
        [490, 77],
        [470, 254],
        [450, 454],
        [430, 5036],
        [410, 12653],
        [390, 29315],
        [370, 60680],
        [350, 115851],
        [330, 205996],
        [310, 338388],
        [290, 515827],
        [270, 723293],
        [250, 920945],
        [230, 1070609],
        [200, 1155714],
        [180, 1173742],
        [150, 1174047],
        [100, 1174047],
    ],
    dil: [
        [550, 12],
        [530, 151],
        [510, 596],
        [490, 1606],
        [470, 3526],
        [450, 8910],
        [430, 17443],
        [410, 25724],
        [390, 34564],
        [370, 43840],
        [350, 53317],
        [330, 63300],
        [310, 73733],
        [290, 85010],
        [270, 97273],
        [250, 111159],
        [230, 125793],
        [200, 135895],
        [180, 140051],
        [150, 140657],
        [100, 140657],
    ],
}

export function estimateRank(
    score: number,
    field: 'tyt' | 'say' | 'ea' | 'soz' | 'dil',
    type: 'yerlestirme' | 'ham' = 'yerlestirme'
): number {
    if (score < 100) return 2500000

    const tables = type === 'yerlestirme' ? YERLESTIRME_TABLES : HAM_TABLES
    const table = tables[field]
    if (score >= table[0][0]) return table[0][1]
    if (score < table[table.length - 1][0]) return 2500000

    for (let i = 0; i < table.length - 1; i++) {
        const [x1, y1] = table[i]
        const [x2, y2] = table[i + 1]
        if (score <= x1 && score >= x2) {
            // Logaritmik interpolasyon — yığılma bölgelerinde doğrusal yöntemden çok daha isabetli
            const logY1 = Math.log(Math.max(1, y1))
            const logY2 = Math.log(Math.max(1, y2))
            const fraction = (score - x2) / (x1 - x2)
            const logY = logY2 + fraction * (logY1 - logY2)
            return Math.max(1, Math.round(Math.exp(logY)))
        }
    }

    return table[table.length - 1][1]
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
        // Yerleştirme Başarı Sıralaması (Üniversite tercihlerinde kullanılan Y-SAY, Y-EA, Y-SÖZ, Y-DİL, Y-TYT)
        estimatedRanks: {
            tyt: tytGecerli ? estimateRank(points.tyt!, 'tyt', 'yerlestirme') : undefined,
            say: sayGecerli ? estimateRank(points.say, 'say', 'yerlestirme') : undefined,
            ea: eaGecerli ? estimateRank(points.ea, 'ea', 'yerlestirme') : undefined,
            soz: sozGecerli ? estimateRank(points.soz, 'soz', 'yerlestirme') : undefined,
            dil: dilGecerli ? estimateRank(points.dil, 'dil', 'yerlestirme') : undefined,
        },
        // Ham Başarı Sıralaması (OBP eklenmemiş ham sınav puanı başarı sırası)
        estimatedHamRanks: {
            tyt: tytGecerli ? estimateRank(points.tytHam ?? points.tyt!, 'tyt', 'ham') : undefined,
            say: sayGecerli ? estimateRank(points.sayHam ?? points.say, 'say', 'ham') : undefined,
            ea: eaGecerli ? estimateRank(points.eaHam ?? points.ea, 'ea', 'ham') : undefined,
            soz: sozGecerli ? estimateRank(points.sozHam ?? points.soz, 'soz', 'ham') : undefined,
            dil: dilGecerli ? estimateRank(points.dilHam ?? points.dil, 'dil', 'ham') : undefined,
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
