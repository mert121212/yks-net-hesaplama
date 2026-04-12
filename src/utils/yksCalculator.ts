import { TYTScores, AYTScores, YDTScores, NetScores, UniversityScore, ScoreCalculationResult } from '@/types/yks'

// --- SABİTLER ---
const TYT_QUESTIONS = { turkce: 40, matematik: 40, sosyal: 20, fen: 20 }
const AYT_QUESTIONS = { matematik: 40, fizik: 14, kimya: 13, biyoloji: 13, edebiyat: 24, tarih1: 10, cografya1: 6, tarih2: 11, cografya2: 11, felsefe: 12, din: 6 }
const YDT_QUESTIONS = { ydt: 80 }

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

// --- PUAN HESAPLAMA (GÜNCEL KATSAYILAR) ---
// 2025 standardizasyonu baz alınan katsayılar (tahmini ortalama)
// ÖSYM kesin katsayı açıklamaz — bu değerler geriye dönük kalibrasyon sonucudur
export function calculateUniversityScores(
    tytNets: NetScores['tyt'],
    aytNets: NetScores['ayt'],
    ydtNets: NetScores['ydt'],
    obp: number = 0,
    obpHalved: boolean = false,
    obpMesleki: boolean = false
): UniversityScore {
    const obpGercek = obp * 5
    const obpKatsayi = obpHalved ? 0.06 : 0.12
    const obpContribution = obpGercek * obpKatsayi
    const meslekiEkPuan = obpMesleki ? obpGercek * 0.06 : 0

    const K = {
        tyt: 1.38,   // TYT'nin bu yılki ağırlığı biraz daha yüksek
        aytMat: 3.25,   // Matematik standart sapması genellikle yüksektir
        aytFen: 3.10,   // Fizik/Kimya/Biyo ortalaması
        aytSoz: 3.05,   // Edebiyat/Sosyal grubu
        ydt: 3.00,
    }

    const tytKatkisi = (tytNets.turkce + tytNets.matematik + tytNets.sosyal + tytNets.fen) * K.tyt
    const bazPuan = 100

    // SAY
    const sayAYT = (aytNets.matematik * K.aytMat) + ((aytNets.fizik + aytNets.kimya + aytNets.biyoloji) * K.aytFen)
    const sayHam = Math.min(bazPuan + tytKatkisi + sayAYT, 500)
    const sayScore = sayHam + obpContribution + meslekiEkPuan

    // EA
    const eaAYT = (aytNets.matematik * K.aytMat) + ((aytNets.edebiyat + aytNets.tarih1 + aytNets.cografya1) * K.aytSoz)
    const eaHam = Math.min(bazPuan + tytKatkisi + eaAYT, 500)
    const eaScore = eaHam + obpContribution + meslekiEkPuan

    // SÖZ
    const sozAYT = (aytNets.edebiyat + aytNets.tarih1 + aytNets.cografya1 + aytNets.tarih2 + aytNets.cografya2 + aytNets.felsefe + aytNets.din) * K.aytSoz
    const sozHam = Math.min(bazPuan + tytKatkisi + sozAYT, 500)
    const sozScore = sozHam + obpContribution + meslekiEkPuan

    // DİL
    const dilHam = Math.min(bazPuan + tytKatkisi + (ydtNets.ydt * K.ydt), 500)
    const dilScore = dilHam + obpContribution + meslekiEkPuan

    return {
        say: Math.max(100, Math.round(sayScore * 100) / 100),
        ea: Math.max(100, Math.round(eaScore * 100) / 100),
        soz: Math.max(100, Math.round(sozScore * 100) / 100),
        dil: Math.max(100, Math.round(dilScore * 100) / 100),
        sayHam: Math.round(sayHam * 100) / 100,
        eaHam: Math.round(eaHam * 100) / 100,
        sozHam: Math.round(sozHam * 100) / 100,
        dilHam: Math.round(dilHam * 100) / 100,
    }
}

// --- SIRALAMA TAHMİNİ (YIĞILMA ODAKLI TABLO) ---
// ESŞ referans noktaları dahil, 2025 YKS yerleştirme verilerine göre kalibre edilmiştir
export function estimateRank(score: number, field: 'say' | 'ea' | 'soz' | 'dil'): number {
    if (score < 150) return 2500000

    const tables: Record<string, [number, number][]> = {
        say: [
            [560, 1],
            [530, 2500],
            [500, 12000],
            [470, 28000],
            [450, 42000],
            [425, 68000],
            [400, 95000],
            [375, 130000],
            [356, 161000],  // ESŞ referans
            [330, 240000],
            [300, 380000],
            [250, 650000],
            [200, 1100000],
        ],
        ea: [
            [560, 1],
            [530, 400],
            [500, 2500],
            [470, 9000],
            [440, 24000],
            [410, 48000],
            [380, 82000],
            [350, 126000],  // ESŞ referans
            [325, 185000],
            [300, 310000],
            [270, 520000],
            [200, 1300000],
        ],
        soz: [
            [560, 1],
            [520, 300],
            [490, 1800],
            [460, 7500],
            [430, 22000],
            [400, 55000],
            [370, 110000],
            [340, 185000],
            [310, 360000],
            [280, 580000],
            [200, 1380000],
        ],
        dil: [
            [560, 1],
            [530, 800],
            [500, 4200],
            [470, 11000],
            [440, 24000],
            [410, 45000],
            [380, 72000],
            [350, 115000],
            [320, 190000],
            [200, 750000],
        ],
    }

    const table = tables[field]
    if (score >= table[0][0]) return table[0][1]

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

    return {
        nets: { tyt: tytNets, ayt: aytNets, ydt: ydtNets },
        points,
        tytScore: tytNets.toplam,
        aytScore: aytNets.toplam,
        ydtScore: ydtNets.ydt,
        ydtHesaplandi,
        obp,
        estimatedRanks: {
            say: estimateRank(points.say, 'say'),
            ea: estimateRank(points.ea, 'ea'),
            soz: estimateRank(points.soz, 'soz'),
            dil: ydtHesaplandi ? estimateRank(points.dil, 'dil') : undefined,
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
