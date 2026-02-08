import { UniversityProgram } from '@/types/yks'

// 2025 YKS taban puanları ve sıralamaları (örnek veriler)
export const universityPrograms: UniversityProgram[] = [
    // SAY (Sayısal) Bölümler
    { university: 'Boğaziçi Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 550, minRank: 150, quota: 80 },
    { university: 'ODTÜ', program: 'Bilgisayar Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 545, minRank: 200, quota: 120 },
    { university: 'İTÜ', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 540, minRank: 250, quota: 100 },
    { university: 'Boğaziçi Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 535, minRank: 300, quota: 90 },
    { university: 'ODTÜ', program: 'Elektrik-Elektronik Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 530, minRank: 400, quota: 110 },
    { university: 'İTÜ', program: 'Makine Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 520, minRank: 600, quota: 120 },
    { university: 'Hacettepe Üniversitesi', program: 'Tıp Fakültesi', city: 'Ankara', field: 'SAY', minScore: 560, minRank: 100, quota: 180 },
    { university: 'İstanbul Üniversitesi', program: 'Tıp Fakültesi', city: 'İstanbul', field: 'SAY', minScore: 555, minRank: 120, quota: 200 },
    { university: 'Ankara Üniversitesi', program: 'Tıp Fakültesi', city: 'Ankara', field: 'SAY', minScore: 550, minRank: 150, quota: 190 },
    { university: 'Gazi Üniversitesi', program: 'Tıp Fakültesi', city: 'Ankara', field: 'SAY', minScore: 545, minRank: 200, quota: 170 },
    { university: 'Ege Üniversitesi', program: 'Tıp Fakültesi', city: 'İzmir', field: 'SAY', minScore: 540, minRank: 250, quota: 180 },
    { university: 'Bilkent Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 535, minRank: 300, quota: 70 },
    { university: 'Koç Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 530, minRank: 350, quota: 60 },
    { university: 'Sabancı Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 525, minRank: 400, quota: 65 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 510, minRank: 800, quota: 140 },
    { university: 'Ankara Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 505, minRank: 1000, quota: 100 },
    { university: 'İzmir Yüksek Teknoloji Enstitüsü', program: 'Bilgisayar Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 500, minRank: 1200, quota: 80 },
    { university: 'Gebze Teknik Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Kocaeli', field: 'SAY', minScore: 495, minRank: 1500, quota: 90 },
    { university: 'Ege Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 490, minRank: 1800, quota: 110 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 485, minRank: 2000, quota: 100 },

    // EA (Eşit Ağırlık) Bölümler
    { university: 'Boğaziçi Üniversitesi', program: 'İktisat', city: 'İstanbul', field: 'EA', minScore: 530, minRank: 200, quota: 90 },
    { university: 'ODTÜ', program: 'İktisat', city: 'Ankara', field: 'EA', minScore: 525, minRank: 250, quota: 100 },
    { university: 'Bilkent Üniversitesi', program: 'İktisat', city: 'Ankara', field: 'EA', minScore: 520, minRank: 300, quota: 70 },
    { university: 'Koç Üniversitesi', program: 'İktisat', city: 'İstanbul', field: 'EA', minScore: 515, minRank: 350, quota: 60 },
    { university: 'Sabancı Üniversitesi', program: 'İktisat', city: 'İstanbul', field: 'EA', minScore: 510, minRank: 400, quota: 65 },
    { university: 'Ankara Üniversitesi', program: 'Hukuk Fakültesi', city: 'Ankara', field: 'EA', minScore: 535, minRank: 180, quota: 200 },
    { university: 'İstanbul Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'EA', minScore: 530, minRank: 200, quota: 220 },
    { university: 'Gazi Üniversitesi', program: 'Hukuk Fakültesi', city: 'Ankara', field: 'EA', minScore: 520, minRank: 300, quota: 180 },
    { university: 'Marmara Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'EA', minScore: 515, minRank: 350, quota: 190 },
    { university: 'Hacettepe Üniversitesi', program: 'İktisat', city: 'Ankara', field: 'EA', minScore: 510, minRank: 400, quota: 85 },
    { university: 'İstanbul Üniversitesi', program: 'İktisat', city: 'İstanbul', field: 'EA', minScore: 505, minRank: 500, quota: 100 },
    { university: 'Ankara Üniversitesi', program: 'İktisat', city: 'Ankara', field: 'EA', minScore: 500, minRank: 600, quota: 95 },
    { university: 'Ege Üniversitesi', program: 'İktisat', city: 'İzmir', field: 'EA', minScore: 495, minRank: 800, quota: 90 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'İktisat', city: 'İzmir', field: 'EA', minScore: 490, minRank: 1000, quota: 85 },
    { university: 'Galatasaray Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'EA', minScore: 525, minRank: 250, quota: 120 },

    // SÖZ (Sözel) Bölümler
    { university: 'Ankara Üniversitesi', program: 'Hukuk Fakültesi', city: 'Ankara', field: 'SOZ', minScore: 520, minRank: 250, quota: 200 },
    { university: 'İstanbul Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'SOZ', minScore: 515, minRank: 300, quota: 220 },
    { university: 'Gazi Üniversitesi', program: 'Hukuk Fakültesi', city: 'Ankara', field: 'SOZ', minScore: 505, minRank: 400, quota: 180 },
    { university: 'Marmara Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'SOZ', minScore: 500, minRank: 500, quota: 190 },
    { university: 'Ankara Üniversitesi', program: 'Siyasal Bilgiler Fakültesi', city: 'Ankara', field: 'SOZ', minScore: 510, minRank: 350, quota: 150 },
    { university: 'İstanbul Üniversitesi', program: 'Edebiyat Fakültesi - Psikoloji', city: 'İstanbul', field: 'SOZ', minScore: 505, minRank: 400, quota: 100 },
    { university: 'Hacettepe Üniversitesi', program: 'Edebiyat Fakültesi - Psikoloji', city: 'Ankara', field: 'SOZ', minScore: 500, minRank: 500, quota: 90 },
    { university: 'Boğaziçi Üniversitesi', program: 'Psikoloji', city: 'İstanbul', field: 'SOZ', minScore: 515, minRank: 300, quota: 70 },
    { university: 'ODTÜ', program: 'Psikoloji', city: 'Ankara', field: 'SOZ', minScore: 510, minRank: 350, quota: 80 },
    { university: 'Ege Üniversitesi', program: 'Hukuk Fakültesi', city: 'İzmir', field: 'SOZ', minScore: 495, minRank: 600, quota: 170 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Hukuk Fakültesi', city: 'İzmir', field: 'SOZ', minScore: 490, minRank: 800, quota: 160 },
    { university: 'Ankara Üniversitesi', program: 'İletişim Fakültesi', city: 'Ankara', field: 'SOZ', minScore: 485, minRank: 1000, quota: 120 },
    { university: 'İstanbul Üniversitesi', program: 'İletişim Fakültesi', city: 'İstanbul', field: 'SOZ', minScore: 480, minRank: 1200, quota: 130 },
    { university: 'Galatasaray Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'SOZ', minScore: 510, minRank: 350, quota: 120 },

    // DİL (Dil) Bölümler
    { university: 'Boğaziçi Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 510, minRank: 200, quota: 60 },
    { university: 'ODTÜ', program: 'İngiliz Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 505, minRank: 250, quota: 70 },
    { university: 'Hacettepe Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'Ankara', field: 'DIL', minScore: 500, minRank: 300, quota: 80 },
    { university: 'Ankara Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'Ankara', field: 'DIL', minScore: 495, minRank: 400, quota: 90 },
    { university: 'İstanbul Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 490, minRank: 500, quota: 85 },
    { university: 'Bilkent Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 505, minRank: 250, quota: 50 },
    { university: 'Boğaziçi Üniversitesi', program: 'Mütercim Tercümanlık', city: 'İstanbul', field: 'DIL', minScore: 500, minRank: 300, quota: 55 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 485, minRank: 600, quota: 75 },
    { university: 'Ege Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'İzmir', field: 'DIL', minScore: 480, minRank: 800, quota: 80 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'İzmir', field: 'DIL', minScore: 475, minRank: 1000, quota: 70 },
]

// Sıralamaya göre uygun bölümleri getir
export function getMatchingPrograms(rank: number, field: 'say' | 'ea' | 'soz' | 'dil', limit: number = 10): UniversityProgram[] {
    const fieldMap = {
        say: 'SAY',
        ea: 'EA',
        soz: 'SOZ',
        dil: 'DIL'
    }

    return universityPrograms
        .filter(p => p.field === fieldMap[field] && p.minRank <= rank * 1.2) // %20 tolerans
        .sort((a, b) => b.minScore - a.minScore)
        .slice(0, limit)
}
