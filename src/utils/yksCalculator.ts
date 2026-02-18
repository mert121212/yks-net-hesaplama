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
export function calculateUniversityScores(
    tytNets: NetScores['tyt'],
    aytNets: NetScores['ayt'],
    ydtNets: NetScores['ydt'],
    obp: number = 0,
    obpHalved: boolean = false,
    obpMesleki: boolean = false
): UniversityScore {
    // OBP katsayısı: Normal 0.12, yarıya düşürülmüşse 0.06
    const obpKatsayi = obpHalved ? 0.06 : 0.12
    const obpContribution = obp * obpKatsayi

    // Mesleki lise ek puanı: 0.06 katsayısı ile
    const meslekiEkPuan = obpMesleki ? obp * 0.06 : 0

    // Bu katsayılar yaklaşık değerlerdir, gerçek hesaplama daha karmaşıktır
    const tytBase = (tytNets.toplam * 3.3) + obpContribution + meslekiEkPuan

    const sayScore = tytBase + (aytNets.matematik * 3.3) + (aytNets.fizik * 3.3) +
        (aytNets.kimya * 3.3) + (aytNets.biyoloji * 3.3)

    const eaScore = tytBase + (aytNets.matematik * 3.3) + (aytNets.edebiyat * 3.3) +
        (aytNets.tarih1 * 3.3) + (aytNets.cografya1 * 3.3)

    const sozScore = tytBase + (aytNets.edebiyat * 3.3) + (aytNets.tarih1 * 3.3) +
        (aytNets.cografya1 * 3.3) + (aytNets.tarih2 * 3.3) +
        (aytNets.cografya2 * 3.3) + (aytNets.felsefe * 3.3) + (aytNets.din * 3.3)

    const dilScore = tytBase + (ydtNets.ydt * 3.3)

    return {
        say: Math.max(100, Math.round(sayScore * 100) / 100),
        ea: Math.max(100, Math.round(eaScore * 100) / 100),
        soz: Math.max(100, Math.round(sozScore * 100) / 100),
        dil: Math.max(100, Math.round(dilScore * 100) / 100)
    }
}

// Tahmini sıralama hesaplama (2025 verilerine göre yaklaşık)
// Gerçek YKS sıralama dağılımına daha yakın formüller
export function estimateRank(score: number, field: 'say' | 'ea' | 'soz' | 'dil'): number {
    // Puan aralıklarına göre daha gerçekçi sıralama tahmini
    // 2024-2025 YKS verilerine dayalı yaklaşık değerler

    if (score < 150) return 2000000 // Çok düşük puan

    const rankFormulas = {
        say: (s: number) => {
            if (s >= 550) return Math.round(100 + (560 - s) * 50) // Tıp seviyesi
            if (s >= 500) return Math.round(500 + (550 - s) * 100) // Üst mühendislik
            if (s >= 450) return Math.round(5500 + (500 - s) * 200) // Orta mühendislik
            if (s >= 400) return Math.round(15500 + (450 - s) * 400) // Alt mühendislik
            if (s >= 350) return Math.round(35500 + (400 - s) * 800)
            if (s >= 300) return Math.round(75500 + (350 - s) * 1500)
            if (s >= 250) return Math.round(150500 + (300 - s) * 2500)
            if (s >= 200) return Math.round(275500 + (250 - s) * 4000)
            return Math.round(475500 + (200 - s) * 8000)
        },
        ea: (s: number) => {
            if (s >= 530) return Math.round(150 + (540 - s) * 50) // Üst hukuk
            if (s >= 480) return Math.round(650 + (530 - s) * 100) // Orta hukuk/işletme
            if (s >= 430) return Math.round(5650 + (480 - s) * 200) // Alt hukuk/işletme
            if (s >= 380) return Math.round(15650 + (430 - s) * 400)
            if (s >= 330) return Math.round(35650 + (380 - s) * 800)
            if (s >= 280) return Math.round(75650 + (330 - s) * 1500)
            if (s >= 230) return Math.round(150650 + (280 - s) * 2500)
            if (s >= 180) return Math.round(275650 + (230 - s) * 4000)
            return Math.round(475650 + (180 - s) * 8000)
        },
        soz: (s: number) => {
            if (s >= 520) return Math.round(200 + (530 - s) * 50) // Üst hukuk (sözel)
            if (s >= 470) return Math.round(700 + (520 - s) * 100) // Orta hukuk/psikoloji
            if (s >= 420) return Math.round(5700 + (470 - s) * 200) // Alt hukuk/edebiyat
            if (s >= 370) return Math.round(15700 + (420 - s) * 400)
            if (s >= 320) return Math.round(35700 + (370 - s) * 800)
            if (s >= 270) return Math.round(75700 + (320 - s) * 1500)
            if (s >= 220) return Math.round(150700 + (270 - s) * 2500)
            if (s >= 170) return Math.round(275700 + (220 - s) * 4000)
            return Math.round(475700 + (170 - s) * 8000)
        },
        dil: (s: number) => {
            if (s >= 510) return Math.round(150 + (520 - s) * 50) // Üst dil bölümleri
            if (s >= 460) return Math.round(650 + (510 - s) * 80) // Orta dil bölümleri
            if (s >= 410) return Math.round(4650 + (460 - s) * 150) // Alt dil bölümleri
            if (s >= 360) return Math.round(12150 + (410 - s) * 300)
            if (s >= 310) return Math.round(27150 + (360 - s) * 600)
            if (s >= 260) return Math.round(57150 + (310 - s) * 1200)
            if (s >= 210) return Math.round(117150 + (260 - s) * 2000)
            if (s >= 160) return Math.round(217150 + (210 - s) * 3500)
            return Math.round(392150 + (160 - s) * 7000)
        }
    }

    return Math.max(1, rankFormulas[field](score))
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