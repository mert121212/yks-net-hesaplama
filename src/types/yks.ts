// YKS ile ilgili tip tanımlamaları

export interface TYTScores {
    turkce: { dogru: number; yanlis: number }
    matematik: { dogru: number; yanlis: number }
    sosyal: { dogru: number; yanlis: number }
    fen: { dogru: number; yanlis: number }
}

export interface AYTScores {
    matematik: { dogru: number; yanlis: number }
    fizik: { dogru: number; yanlis: number }
    kimya: { dogru: number; yanlis: number }
    biyoloji: { dogru: number; yanlis: number }
    edebiyat: { dogru: number; yanlis: number }
    tarih1: { dogru: number; yanlis: number }
    cografya1: { dogru: number; yanlis: number }
    tarih2: { dogru: number; yanlis: number }
    cografya2: { dogru: number; yanlis: number }
    felsefe: { dogru: number; yanlis: number }
    din: { dogru: number; yanlis: number }
}

export interface YDTScores {
    ydt: { dogru: number; yanlis: number }
}

export interface NetScores {
    tyt: {
        turkce: number
        matematik: number
        sosyal: number
        fen: number
        toplam: number
    }
    ayt: {
        matematik: number
        fizik: number
        kimya: number
        biyoloji: number
        edebiyat: number
        tarih1: number
        cografya1: number
        tarih2: number
        cografya2: number
        felsefe: number
        din: number
        toplam: number
    }
    ydt: {
        ydt: number
    }
}

export interface UniversityScore {
    say: number
    ea: number
    soz: number
    dil: number
}

export interface ScoreCalculationResult {
    nets: NetScores
    points: UniversityScore
    tytScore: number
    aytScore: number
    ydtScore: number
    obp?: number
    estimatedRanks?: {
        say?: number
        ea?: number
        soz?: number
        dil?: number
    }
}

export interface UniversityProgram {
    university: string
    program: string
    city: string
    field: FieldType
    minScore: number
    minRank: number
    quota: number
}

export type ExamType = 'TYT' | 'AYT' | 'YDT'
export type FieldType = 'SAY' | 'EA' | 'SOZ' | 'DIL'