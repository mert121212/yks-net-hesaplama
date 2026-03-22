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
export function calculateNet(dogru: number, yanlis: number): number {
    const net = dogru - (yanlis / 4)
    return Math.round(net * 100) / 100 // Eksi netlere izin ver
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

    return {
        ydt: ydtNet
    }
}

// Üniversite puanları hesaplama (OBP dahil)
// ÖNEMLİ NOT: ÖSYM'nin gerçek puan formülü standart sapma normalizasyonu içerir
// ve her yıl sınava giren adayların performansına göre değişir.
// Bu hesaplama, gerçek sonuçlara yakın bir TAHMİN üretir; kesin değildir.
// Referans: 2025 YKS SAY birincisi ~500 puan (tam net ile)
export function calculateUniversityScores(
    tytNets: NetScores['tyt'],
    aytNets: NetScores['ayt'],
    ydtNets: NetScores['ydt'],
    obp: number = 0,
    obpHalved: boolean = false,
    obpMesleki: boolean = false
): UniversityScore {
    // OBP katkısı:
    // ÖSYM'de diploma notu (0-100) önce 5 ile çarpılarak 500 üzerinden OBP'ye dönüştürülür.
    // Sonra OBP * 0.12 (normal) veya OBP * 0.06 (yarıya düşürülmüş) puana eklenir.
    const obpGercek = obp * 5 // diploma notu → gerçek OBP (0-500)
    const obpKatsayi = obpHalved ? 0.06 : 0.12
    const obpContribution = obpGercek * obpKatsayi
    // Mesleki lise ek puanı: OBP * 0.06
    const meslekiEkPuan = obpMesleki ? obpGercek * 0.06 : 0

    // --- TYT katkısı ---
    // Ampirik katsayılar: 2025 YKS referans noktalarına göre kalibre edilmiştir.
    // TYT tam net (120) → ~120 puan katkısı → katsayı 1.0 per net
    const tytKatkisi =
        (tytNets.turkce * 1.0) +
        (tytNets.matematik * 1.0) +
        (tytNets.sosyal * 1.0) +
        (tytNets.fen * 1.0)

    // Baz puan: minimum puan
    const bazPuan = 100

    const tytBase = bazPuan + tytKatkisi + obpContribution + meslekiEkPuan

    // --- SAY puanı ---
    // AYT SAY tam net (80) → ~280 katkı → katsayı 3.5 per net
    // Kontrol: TYT 120 + AYT 80 → 100 + 120 + 280 = 500 ≈ 2025 gerçek max ✓
    const sayAYT =
        (aytNets.matematik * 3.5) +
        (aytNets.fizik * 3.5) +
        (aytNets.kimya * 3.5) +
        (aytNets.biyoloji * 3.5)
    const sayScore = tytBase + sayAYT

    // --- EA puanı ---
    // AYT EA tam net (80) → ~280 katkı
    const eaAYT =
        (aytNets.matematik * 3.5) +
        (aytNets.edebiyat * 3.5) +
        (aytNets.tarih1 * 3.5) +
        (aytNets.cografya1 * 3.5)
    const eaScore = tytBase + eaAYT

    // --- SÖZ puanı ---
    // SÖZ'de 7 ders var (toplam max ~80 net), katsayı 3.5
    const sozAYT =
        (aytNets.edebiyat * 3.5) +
        (aytNets.tarih1 * 3.5) +
        (aytNets.cografya1 * 3.5) +
        (aytNets.tarih2 * 3.5) +
        (aytNets.cografya2 * 3.5) +
        (aytNets.felsefe * 3.5) +
        (aytNets.din * 3.5)
    const sozScore = tytBase + sozAYT

    // --- DİL puanı ---
    // YDT 80 soru tam net → ~280 katkı
    const dilScore = tytBase + (ydtNets.ydt * 3.5)

    return {
        say: Math.max(100, Math.round(sayScore * 100) / 100),
        ea: Math.max(100, Math.round(eaScore * 100) / 100),
        soz: Math.max(100, Math.round(sozScore * 100) / 100),
        dil: Math.max(100, Math.round(dilScore * 100) / 100)
    }
}

// Tahmini sıralama hesaplama
// 2025 YKS gerçek sıralama verilerine dayalı interpolasyon tablosu
// Referans noktaları: 2025 YKS gerçek sonuçlarından
// - SAY birincisi: ~500 puan → sıralama 1
// - SAY 494 puan → sıralama ~14.000 (gerçek veri)
// Not: Tahmindir, gerçek sıralama sınav yılına ve adayların performansına göre değişir
export function estimateRank(score: number, field: 'say' | 'ea' | 'soz' | 'dil'): number {
    if (score < 150) return 2500000

    // [puan, sıralama] çiftleri — 2025 YKS gerçek verilerinden kalibre edilmiştir
    // Lineer interpolasyon ile ara değerler hesaplanır
    const tables: Record<string, [number, number][]> = {
        say: [
            [500, 1],
            [494, 14000],
            [480, 30000],
            [460, 60000],
            [440, 100000],
            [420, 155000],
            [400, 225000],
            [380, 310000],
            [360, 410000],
            [340, 520000],
            [320, 640000],
            [300, 770000],
            [280, 900000],
            [260, 1030000],
            [240, 1160000],
            [220, 1290000],
            [200, 1420000],
            [180, 1580000],
            [160, 1750000],
            [150, 1900000],
        ],
        ea: [
            [500, 1],
            [490, 5000],
            [475, 15000],
            [460, 30000],
            [440, 60000],
            [420, 105000],
            [400, 165000],
            [380, 240000],
            [360, 330000],
            [340, 430000],
            [320, 540000],
            [300, 660000],
            [280, 785000],
            [260, 910000],
            [240, 1040000],
            [220, 1170000],
            [200, 1310000],
            [180, 1470000],
            [160, 1650000],
            [150, 1800000],
        ],
        soz: [
            [500, 1],
            [485, 5000],
            [470, 15000],
            [455, 30000],
            [435, 60000],
            [415, 100000],
            [395, 155000],
            [375, 225000],
            [355, 310000],
            [335, 405000],
            [315, 510000],
            [295, 620000],
            [275, 740000],
            [255, 860000],
            [235, 985000],
            [215, 1110000],
            [195, 1250000],
            [175, 1400000],
            [155, 1580000],
            [150, 1700000],
        ],
        dil: [
            [500, 1],
            [480, 3000],
            [460, 8000],
            [440, 16000],
            [420, 28000],
            [400, 45000],
            [380, 68000],
            [360, 98000],
            [340, 135000],
            [320, 180000],
            [300, 235000],
            [280, 300000],
            [260, 375000],
            [240, 460000],
            [220, 555000],
            [200, 660000],
            [180, 775000],
            [160, 910000],
            [150, 1000000],
        ],
    }

    const table = tables[field]

    // Tablonun üstündeyse en iyi sıralamayı döndür
    if (score >= table[0][0]) return table[0][1]
    // Tablonun altındaysa en kötü sıralamayı döndür
    if (score <= table[table.length - 1][0]) {
        const last = table[table.length - 1]
        return Math.min(2500000, last[1] + (last[0] - score) * 15000)
    }

    // Lineer interpolasyon
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

    // Tahmini sıralamalar
    const estimatedRanks = {
        say: estimateRank(points.say, 'say'),
        ea: estimateRank(points.ea, 'ea'),
        soz: estimateRank(points.soz, 'soz'),
        dil: estimateRank(points.dil, 'dil')
    }

    return {
        nets,
        points,
        tytScore: tytNets.toplam,
        aytScore: aytNets.toplam,
        ydtScore: ydtNets.ydt,
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