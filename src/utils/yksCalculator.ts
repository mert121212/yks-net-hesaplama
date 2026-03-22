import { TYTScores, AYTScores, YDTScores, NetScores, UniversityScore, ScoreCalculationResult } from '@/types/yks'

// TYT soru sayıları
const TYT_QUESTIONS = {
    turkce: 40,
    matematik: 40,
    sosyal: 20,
    fen: 20
}

// AYT soru sayıları
const AYT_QUESTIONS = {
    matematik: 40,
    fizik: 14,
    kimya: 13,
    biyoloji: 13,
    edebiyat: 24,
    tarih1: 10,
    cografya1: 6,
    tarih2: 11,
    cografya2: 11,
    felsefe: 12,
    din: 6
}

// YDT soru sayısı
const YDT_QUESTIONS = {
    ydt: 80
}

// Net hesaplama fonksiyonu
// Eksi net puan hesaplamada 0 olarak kabul edilir (ÖSYM davranışı)
export function calculateNet(dogru: number, yanlis: number): number {
    const net = dogru - (yanlis / 4)
    return Math.round(Math.max(0, net) * 100) / 100
}

// TYT net hesaplama
export function calculateTYTNets(scores: TYTScores): NetScores['tyt'] {
    const turkceNet = calculateNet(scores.turkce.dogru, scores.turkce.yanlis)
    const matematikNet = calculateNet(scores.matematik.dogru, scores.matematik.yanlis)
    const sosyalNet = calculateNet(scores.sosyal.dogru, scores.sosyal.yanlis)
    const fenNet = calculateNet(scores.fen.dogru, scores.fen.yanlis)

    return {
        turkce: turkceNet,
        matematik: matematikNet,
        sosyal: sosyalNet,
        fen: fenNet,
        toplam: Math.round((turkceNet + matematikNet + sosyalNet + fenNet) * 100) / 100
    }
}

// AYT net hesaplama
export function calculateAYTNets(scores: AYTScores): NetScores['ayt'] {
    const matematikNet = calculateNet(scores.matematik.dogru, scores.matematik.yanlis)
    const fizikNet = calculateNet(scores.fizik.dogru, scores.fizik.yanlis)
    const kimyaNet = calculateNet(scores.kimya.dogru, scores.kimya.yanlis)
    const biyolojiNet = calculateNet(scores.biyoloji.dogru, scores.biyoloji.yanlis)
    const edebiyatNet = calculateNet(scores.edebiyat.dogru, scores.edebiyat.yanlis)
    const tarih1Net = calculateNet(scores.tarih1.dogru, scores.tarih1.yanlis)
    const cografya1Net = calculateNet(scores.cografya1.dogru, scores.cografya1.yanlis)
    const tarih2Net = calculateNet(scores.tarih2.dogru, scores.tarih2.yanlis)
    const cografya2Net = calculateNet(scores.cografya2.dogru, scores.cografya2.yanlis)
    const felsefeNet = calculateNet(scores.felsefe.dogru, scores.felsefe.yanlis)
    const dinNet = calculateNet(scores.din.dogru, scores.din.yanlis)

    const toplam = matematikNet + fizikNet + kimyaNet + biyolojiNet +
        edebiyatNet + tarih1Net + cografya1Net + tarih2Net +
        cografya2Net + felsefeNet + dinNet

    return {
        matematik: matematikNet,
        fizik: fizikNet,
        kimya: kimyaNet,
        biyoloji: biyolojiNet,
        edebiyat: edebiyatNet,
        tarih1: tarih1Net,
        cografya1: cografya1Net,
        tarih2: tarih2Net,
        cografya2: cografya2Net,
        felsefe: felsefeNet,
        din: dinNet,
        toplam: Math.round(toplam * 100) / 100
    }
}

// YDT net hesaplama
export function calculateYDTNets(scores: YDTScores): NetScores['ydt'] {
    const ydtNet = calculateNet(scores.ydt.dogru, scores.ydt.yanlis)
    return { ydt: ydtNet }
}

// Üniversite puanları hesaplama (OBP dahil)
// ÖNEMLİ NOT: ÖSYM'nin gerçek puan formülü standart sapma normalizasyonu içerir
// ve her yıl sınava giren adayların performansına göre değişir.
// Bu hesaplama, gerçek sonuçlara yakın bir TAHMİN üretir; kesin değildir.
//
// Katsayı dengesi:
//   TYT: 120 soru → katsayı 1.33 → tam net katkısı ≈ 160
//   AYT: 80 soru  → katsayı 3.0  → tam net katkısı ≈ 240
//   Baz puan: 100 → Toplam max ham puan ≈ 500 ✓
export function calculateUniversityScores(
    tytNets: NetScores['tyt'],
    aytNets: NetScores['ayt'],
    ydtNets: NetScores['ydt'],
    obp: number = 0,
    obpHalved: boolean = false,
    obpMesleki: boolean = false
): UniversityScore {
    // OBP katkısı:
    // Diploma notu (0-100) → OBP (0-500): diploma * 5
    // Puan katkısı: OBP * 0.12 (normal) veya OBP * 0.06 (yarıya düşürülmüş)
    const obpGercek = obp * 5
    const obpKatsayi = obpHalved ? 0.06 : 0.12
    const obpContribution = obpGercek * obpKatsayi
    const meslekiEkPuan = obpMesleki ? obpGercek * 0.06 : 0

    // TYT katkısı — katsayı 1.33 (TYT'nin %40 ağırlığını doğru yansıtır)
    const TYT_KATSAYI = 1.33
    const tytKatkisi =
        (tytNets.turkce * TYT_KATSAYI) +
        (tytNets.matematik * TYT_KATSAYI) +
        (tytNets.sosyal * TYT_KATSAYI) +
        (tytNets.fen * TYT_KATSAYI)

    const bazPuan = 100

    // Ham puan (OBP hariç) 500 ile sınırlandırılır
    // AYT katsayısı 3.0 — her puan türü sadece kendi branş netlerini kullanır

    // --- SAY puanı (Matematik + Fizik + Kimya + Biyoloji) ---
    const sayAYT =
        (aytNets.matematik * 3.0) +
        (aytNets.fizik * 3.0) +
        (aytNets.kimya * 3.0) +
        (aytNets.biyoloji * 3.0)
    const sayHam = Math.min(bazPuan + tytKatkisi + sayAYT, 500)
    const sayScore = sayHam + obpContribution + meslekiEkPuan

    // --- EA puanı (Matematik + Edebiyat + Tarih-1 + Coğrafya-1) ---
    const eaAYT =
        (aytNets.matematik * 3.0) +
        (aytNets.edebiyat * 3.0) +
        (aytNets.tarih1 * 3.0) +
        (aytNets.cografya1 * 3.0)
    const eaHam = Math.min(bazPuan + tytKatkisi + eaAYT, 500)
    const eaScore = eaHam + obpContribution + meslekiEkPuan

    // --- SÖZ puanı (Edebiyat + Tarih-1 + Coğrafya-1 + Tarih-2 + Coğrafya-2 + Felsefe + Din) ---
    const sozAYT =
        (aytNets.edebiyat * 3.0) +
        (aytNets.tarih1 * 3.0) +
        (aytNets.cografya1 * 3.0) +
        (aytNets.tarih2 * 3.0) +
        (aytNets.cografya2 * 3.0) +
        (aytNets.felsefe * 3.0) +
        (aytNets.din * 3.0)
    const sozHam = Math.min(bazPuan + tytKatkisi + sozAYT, 500)
    const sozScore = sozHam + obpContribution + meslekiEkPuan

    // --- DİL puanı (YDT) ---
    const dilHam = Math.min(bazPuan + tytKatkisi + (ydtNets.ydt * 3.0), 500)
    const dilScore = dilHam + obpContribution + meslekiEkPuan

    const result: UniversityScore = {
        say: Math.max(100, Math.round(sayScore * 100) / 100),
        ea: Math.max(100, Math.round(eaScore * 100) / 100),
        soz: Math.max(100, Math.round(sozScore * 100) / 100),
        dil: Math.max(100, Math.round(dilScore * 100) / 100),
        // Ham puanlar (OBP öncesi) — kullanıcıya ayrıca gösterilebilir
        sayHam: Math.round(sayHam * 100) / 100,
        eaHam: Math.round(eaHam * 100) / 100,
        sozHam: Math.round(sozHam * 100) / 100,
        dilHam: Math.round(dilHam * 100) / 100,
    }
    return result
}

// Tahmini sıralama hesaplama
// 2025 YKS gerçek sıralama verilerine dayalı interpolasyon tablosu
// Not: Tahmindir, gerçek sıralama sınav yılına ve adayların performansına göre değişir
export function estimateRank(score: number, field: 'say' | 'ea' | 'soz' | 'dil'): number {
    if (score < 150) return 2500000

    // [puan, sıralama] çiftleri — 2025 YKS gerçek verilerinden kalibre edilmiştir
    // Orta/düşük puan aralıklarına ek referans noktaları eklenerek yığılma riski azaltıldı
    const tables: Record<string, [number, number][]> = {
        say: [
            [500, 1],
            [494, 14000],
            [485, 22000],
            [480, 30000],
            [470, 44000],
            [460, 60000],
            [450, 78000],
            [440, 100000],
            [430, 126000],
            [420, 155000],
            [410, 188000],
            [400, 225000],
            [390, 266000],
            [380, 310000],
            [370, 358000],
            [360, 410000],
            [355, 436000],
            [350, 463000],
            [345, 492000],
            [340, 522000],
            [335, 553000],
            [330, 585000],
            [325, 618000],
            [320, 652000],
            [315, 687000],
            [310, 723000],
            [305, 760000],
            [300, 798000],
            [295, 837000],
            [290, 877000],
            [285, 918000],
            [280, 960000],
            [275, 1000000],
            [270, 1040000],
            [265, 1080000],
            [260, 1120000],
            [255, 1160000],
            [250, 1200000],
            [240, 1280000],
            [230, 1360000],
            [220, 1430000],
            [210, 1500000],
            [200, 1560000],
            [180, 1680000],
            [160, 1800000],
            [150, 1900000],
        ],
        ea: [
            [500, 1],
            [490, 5000],
            [480, 11000],
            [475, 15000],
            [465, 22000],
            [460, 30000],
            [450, 44000],
            [440, 60000],
            [430, 81000],
            [420, 105000],
            [410, 133000],
            [400, 165000],
            [390, 201000],
            [380, 240000],
            [370, 283000],
            [360, 330000],
            [355, 355000],
            [350, 381000],
            [345, 408000],
            [340, 436000],
            [335, 465000],
            [330, 495000],
            [325, 526000],
            [320, 558000],
            [315, 591000],
            [310, 625000],
            [305, 660000],
            [300, 696000],
            [295, 733000],
            [290, 771000],
            [285, 810000],
            [280, 850000],
            [275, 891000],
            [270, 933000],
            [265, 975000],
            [260, 1018000],
            [255, 1062000],
            [250, 1107000],
            [240, 1198000],
            [230, 1290000],
            [220, 1380000],
            [210, 1460000],
            [200, 1530000],
            [180, 1660000],
            [160, 1790000],
            [150, 1880000],
        ],
        soz: [
            [500, 1],
            [490, 3000],
            [485, 5000],
            [475, 10000],
            [470, 15000],
            [460, 22000],
            [455, 30000],
            [445, 44000],
            [435, 60000],
            [425, 79000],
            [415, 100000],
            [405, 126000],
            [395, 155000],
            [385, 188000],
            [375, 225000],
            [365, 265000],
            [355, 310000],
            [350, 334000],
            [345, 359000],
            [340, 385000],
            [335, 412000],
            [330, 440000],
            [325, 469000],
            [320, 499000],
            [315, 530000],
            [310, 562000],
            [305, 595000],
            [300, 629000],
            [295, 664000],
            [290, 700000],
            [285, 737000],
            [280, 775000],
            [275, 814000],
            [270, 854000],
            [265, 895000],
            [260, 937000],
            [255, 980000],
            [250, 1024000],
            [240, 1114000],
            [230, 1205000],
            [220, 1295000],
            [210, 1380000],
            [200, 1460000],
            [180, 1610000],
            [160, 1760000],
            [150, 1860000],
        ],
        dil: [
            [500, 1],
            [490, 1500],
            [480, 3000],
            [470, 5500],
            [460, 8000],
            [450, 11500],
            [440, 16000],
            [430, 21500],
            [420, 28000],
            [410, 36000],
            [400, 45000],
            [390, 56000],
            [380, 68000],
            [370, 82000],
            [360, 98000],
            [350, 116000],
            [340, 135000],
            [330, 157000],
            [320, 180000],
            [315, 193000],
            [310, 207000],
            [305, 221000],
            [300, 235000],
            [295, 251000],
            [290, 267000],
            [285, 283000],
            [280, 300000],
            [275, 318000],
            [270, 337000],
            [265, 356000],
            [260, 375000],
            [255, 396000],
            [250, 417000],
            [240, 460000],
            [230, 507000],
            [220, 555000],
            [210, 607000],
            [200, 660000],
            [180, 775000],
            [160, 910000],
            [150, 1000000],
        ],
    }

    const table = tables[field]

    if (score >= table[0][0]) return table[0][1]
    if (score <= table[table.length - 1][0]) {
        const last = table[table.length - 1]
        return Math.min(2500000, last[1] + (last[0] - score) * 15000)
    }

    for (let i = 0; i < table.length - 1; i++) {
        const [highScore, highRank] = table[i]
        const [lowScore, lowRank] = table[i + 1]
        if (score <= highScore && score >= lowScore) {
            const ratio = (highScore - score) / (highScore - lowScore)
            return Math.round(highRank + ratio * (lowRank - highRank))
        }
    }

    return 2500000
}

// Ana hesaplama fonksiyonu
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

    const nets: NetScores = {
        tyt: tytNets,
        ayt: aytNets,
        ydt: ydtNets
    }

    const points = calculateUniversityScores(tytNets, aytNets, ydtNets, obp, obpHalved, obpMesleki)

    // YDT: hiç giriş yapılmamışsa DİL puanı hesaplanmaz
    const ydtHesaplandi = ydtScores.ydt.dogru > 0 || ydtScores.ydt.yanlis > 0

    const estimatedRanks = {
        say: estimateRank(points.say, 'say'),
        ea: estimateRank(points.ea, 'ea'),
        soz: estimateRank(points.soz, 'soz'),
        dil: ydtHesaplandi ? estimateRank(points.dil, 'dil') : undefined
    }

    return {
        nets,
        points,
        tytScore: tytNets.toplam,
        aytScore: aytNets.toplam,
        ydtScore: ydtNets.ydt,
        ydtHesaplandi,
        obp,
        estimatedRanks
    }
}

// Validasyon fonksiyonları
export function validateTYTScores(scores: TYTScores): boolean {
    return Object.entries(scores).every(([subject, score]) => {
        const maxQuestions = TYT_QUESTIONS[subject as keyof typeof TYT_QUESTIONS]
        return score.dogru >= 0 && score.yanlis >= 0 &&
            (score.dogru + score.yanlis) <= maxQuestions
    })
}

export function validateAYTScores(scores: AYTScores): boolean {
    return Object.entries(scores).every(([subject, score]) => {
        const maxQuestions = AYT_QUESTIONS[subject as keyof typeof AYT_QUESTIONS]
        return score.dogru >= 0 && score.yanlis >= 0 &&
            (score.dogru + score.yanlis) <= maxQuestions
    })
}

export function validateYDTScores(scores: YDTScores): boolean {
    return scores.ydt.dogru >= 0 && scores.ydt.yanlis >= 0 &&
        (scores.ydt.dogru + scores.ydt.yanlis) <= YDT_QUESTIONS.ydt
}
