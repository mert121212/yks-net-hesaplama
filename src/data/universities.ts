import { UniversityProgram } from '@/types/yks'

// 2025 YKS taban puanları ve sıralamaları (genişletilmiş veri)
export const universityPrograms: UniversityProgram[] = [
    // SAY (Sayısal) - Tıp Fakülteleri
    { university: 'Hacettepe Üniversitesi', program: 'Tıp Fakültesi', city: 'Ankara', field: 'SAY', minScore: 560, minRank: 100, quota: 180 },
    { university: 'İstanbul Üniversitesi', program: 'Tıp Fakültesi', city: 'İstanbul', field: 'SAY', minScore: 555, minRank: 120, quota: 200 },
    { university: 'Ankara Üniversitesi', program: 'Tıp Fakültesi', city: 'Ankara', field: 'SAY', minScore: 550, minRank: 150, quota: 190 },
    { university: 'Gazi Üniversitesi', program: 'Tıp Fakültesi', city: 'Ankara', field: 'SAY', minScore: 545, minRank: 200, quota: 170 },
    { university: 'Ege Üniversitesi', program: 'Tıp Fakültesi', city: 'İzmir', field: 'SAY', minScore: 540, minRank: 250, quota: 180 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Tıp Fakültesi', city: 'İzmir', field: 'SAY', minScore: 535, minRank: 300, quota: 160 },
    { university: 'Marmara Üniversitesi', program: 'Tıp Fakültesi', city: 'İstanbul', field: 'SAY', minScore: 530, minRank: 400, quota: 150 },
    { university: 'Çukurova Üniversitesi', program: 'Tıp Fakültesi', city: 'Adana', field: 'SAY', minScore: 525, minRank: 500, quota: 140 },
    { university: 'Erciyes Üniversitesi', program: 'Tıp Fakültesi', city: 'Kayseri', field: 'SAY', minScore: 520, minRank: 600, quota: 130 },
    { university: 'Selçuk Üniversitesi', program: 'Tıp Fakültesi', city: 'Konya', field: 'SAY', minScore: 515, minRank: 800, quota: 140 },
    { university: 'Uludağ Üniversitesi', program: 'Tıp Fakültesi', city: 'Bursa', field: 'SAY', minScore: 510, minRank: 1000, quota: 130 },
    { university: 'Ondokuz Mayıs Üniversitesi', program: 'Tıp Fakültesi', city: 'Samsun', field: 'SAY', minScore: 505, minRank: 1200, quota: 120 },
    { university: 'Pamukkale Üniversitesi', program: 'Tıp Fakültesi', city: 'Denizli', field: 'SAY', minScore: 500, minRank: 1500, quota: 110 },
    { university: 'Süleyman Demirel Üniversitesi', program: 'Tıp Fakültesi', city: 'Isparta', field: 'SAY', minScore: 495, minRank: 1800, quota: 100 },
    { university: 'Fırat Üniversitesi', program: 'Tıp Fakültesi', city: 'Elazığ', field: 'SAY', minScore: 490, minRank: 2000, quota: 110 },

    // SAY - Bilgisayar Mühendisliği
    { university: 'Boğaziçi Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 550, minRank: 150, quota: 80 },
    { university: 'ODTÜ', program: 'Bilgisayar Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 545, minRank: 200, quota: 120 },
    { university: 'İTÜ', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 540, minRank: 250, quota: 100 },
    { university: 'Bilkent Üniversitesi (Vakıf)', program: 'Bilgisayar Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 535, minRank: 300, quota: 70 },
    { university: 'Koç Üniversitesi (Vakıf)', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 530, minRank: 350, quota: 60 },
    { university: 'Sabancı Üniversitesi (Vakıf)', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 525, minRank: 400, quota: 65 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 510, minRank: 800, quota: 140 },
    { university: 'Ankara Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 505, minRank: 1000, quota: 100 },
    { university: 'İzmir Yüksek Teknoloji Enstitüsü', program: 'Bilgisayar Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 500, minRank: 1200, quota: 80 },
    { university: 'Gebze Teknik Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Kocaeli', field: 'SAY', minScore: 495, minRank: 1500, quota: 90 },
    { university: 'Ege Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 490, minRank: 1800, quota: 110 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 485, minRank: 2000, quota: 100 },
    { university: 'Hacettepe Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 520, minRank: 600, quota: 95 },
    { university: 'Gazi Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 480, minRank: 2500, quota: 120 },
    { university: 'Marmara Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 475, minRank: 3000, quota: 110 },
    { university: 'Erciyes Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Kayseri', field: 'SAY', minScore: 460, minRank: 4000, quota: 90 },
    { university: 'Selçuk Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Konya', field: 'SAY', minScore: 455, minRank: 4500, quota: 100 },
    { university: 'Sakarya Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Sakarya', field: 'SAY', minScore: 450, minRank: 5000, quota: 95 },
    { university: 'Kocaeli Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Kocaeli', field: 'SAY', minScore: 445, minRank: 5500, quota: 100 },
    { university: 'Eskişehir Teknik Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Eskişehir', field: 'SAY', minScore: 440, minRank: 6000, quota: 85 },

    // SAY - Elektrik-Elektronik Mühendisliği
    { university: 'Boğaziçi Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 535, minRank: 300, quota: 90 },
    { university: 'ODTÜ', program: 'Elektrik-Elektronik Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 530, minRank: 400, quota: 110 },
    { university: 'İTÜ', program: 'Elektrik-Elektronik Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 525, minRank: 500, quota: 100 },
    { university: 'Bilkent Üniversitesi (Vakıf)', program: 'Elektrik-Elektronik Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 520, minRank: 600, quota: 75 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 500, minRank: 1200, quota: 130 },
    { university: 'Hacettepe Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 510, minRank: 800, quota: 90 },
    { university: 'Gazi Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 470, minRank: 3500, quota: 110 },
    { university: 'Ege Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 480, minRank: 2500, quota: 100 },

    // SAY - Makine Mühendisliği
    { university: 'İTÜ', program: 'Makine Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 520, minRank: 600, quota: 120 },
    { university: 'ODTÜ', program: 'Makine Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 515, minRank: 700, quota: 130 },
    { university: 'Boğaziçi Üniversitesi', program: 'Makine Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 510, minRank: 800, quota: 85 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'Makine Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 490, minRank: 1800, quota: 140 },
    { university: 'Gazi Üniversitesi', program: 'Makine Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 465, minRank: 4000, quota: 120 },
    { university: 'Ege Üniversitesi', program: 'Makine Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 475, minRank: 3000, quota: 110 },

    // SAY - İnşaat Mühendisliği
    { university: 'İTÜ', program: 'İnşaat Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 510, minRank: 800, quota: 130 },
    { university: 'ODTÜ', program: 'İnşaat Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 505, minRank: 1000, quota: 140 },
    { university: 'Boğaziçi Üniversitesi', program: 'İnşaat Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 500, minRank: 1200, quota: 80 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'İnşaat Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 480, minRank: 2500, quota: 150 },
    { university: 'Gazi Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 455, minRank: 4500, quota: 130 },
    { university: 'Ege Üniversitesi', program: 'İnşaat Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 465, minRank: 4000, quota: 120 },

    // SAY - Endüstri Mühendisliği
    { university: 'Boğaziçi Üniversitesi', program: 'Endüstri Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 530, minRank: 400, quota: 75 },
    { university: 'ODTÜ', program: 'Endüstri Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 525, minRank: 500, quota: 90 },
    { university: 'İTÜ', program: 'Endüstri Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 520, minRank: 600, quota: 85 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'Endüstri Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 495, minRank: 1500, quota: 120 },
    { university: 'Gazi Üniversitesi', program: 'Endüstri Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 470, minRank: 3500, quota: 100 },

    // SAY - Mimarlık
    { university: 'İTÜ', program: 'Mimarlık', city: 'İstanbul', field: 'SAY', minScore: 525, minRank: 500, quota: 100 },
    { university: 'ODTÜ', program: 'Mimarlık', city: 'Ankara', field: 'SAY', minScore: 520, minRank: 600, quota: 110 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'Mimarlık', city: 'İstanbul', field: 'SAY', minScore: 495, minRank: 1500, quota: 130 },
    { university: 'Gazi Üniversitesi', program: 'Mimarlık', city: 'Ankara', field: 'SAY', minScore: 475, minRank: 3000, quota: 110 },
    { university: 'Mimar Sinan Güzel Sanatlar Üniversitesi', program: 'Mimarlık', city: 'İstanbul', field: 'SAY', minScore: 510, minRank: 800, quota: 95 },

    // EA (Eşit Ağırlık) - Hukuk Fakülteleri
    { university: 'Ankara Üniversitesi', program: 'Hukuk Fakültesi', city: 'Ankara', field: 'EA', minScore: 535, minRank: 180, quota: 200 },
    { university: 'İstanbul Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'EA', minScore: 530, minRank: 200, quota: 220 },
    { university: 'Gazi Üniversitesi', program: 'Hukuk Fakültesi', city: 'Ankara', field: 'EA', minScore: 520, minRank: 300, quota: 180 },
    { university: 'Marmara Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'EA', minScore: 515, minRank: 350, quota: 190 },
    { university: 'Galatasaray Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'EA', minScore: 525, minRank: 250, quota: 120 },
    { university: 'Hacettepe Üniversitesi', program: 'Hukuk Fakültesi', city: 'Ankara', field: 'EA', minScore: 520, minRank: 300, quota: 170 },
    { university: 'Ege Üniversitesi', program: 'Hukuk Fakültesi', city: 'İzmir', field: 'EA', minScore: 510, minRank: 400, quota: 180 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Hukuk Fakültesi', city: 'İzmir', field: 'EA', minScore: 505, minRank: 500, quota: 170 },
    { university: 'Selçuk Üniversitesi', program: 'Hukuk Fakültesi', city: 'Konya', field: 'EA', minScore: 490, minRank: 1000, quota: 160 },
    { university: 'Erciyes Üniversitesi', program: 'Hukuk Fakültesi', city: 'Kayseri', field: 'EA', minScore: 485, minRank: 1200, quota: 150 },
    { university: 'Çukurova Üniversitesi', program: 'Hukuk Fakültesi', city: 'Adana', field: 'EA', minScore: 480, minRank: 1500, quota: 140 },
    { university: 'Uludağ Üniversitesi', program: 'Hukuk Fakültesi', city: 'Bursa', field: 'EA', minScore: 475, minRank: 1800, quota: 150 },
    { university: 'Ondokuz Mayıs Üniversitesi', program: 'Hukuk Fakültesi', city: 'Samsun', field: 'EA', minScore: 470, minRank: 2000, quota: 140 },
    { university: 'Akdeniz Üniversitesi', program: 'Hukuk Fakültesi', city: 'Antalya', field: 'EA', minScore: 465, minRank: 2500, quota: 130 },
    { university: 'Sakarya Üniversitesi', program: 'Hukuk Fakültesi', city: 'Sakarya', field: 'EA', minScore: 460, minRank: 3000, quota: 120 },

    // EA - İktisat
    { university: 'Boğaziçi Üniversitesi', program: 'İktisat', city: 'İstanbul', field: 'EA', minScore: 530, minRank: 200, quota: 90 },
    { university: 'ODTÜ', program: 'İktisat', city: 'Ankara', field: 'EA', minScore: 525, minRank: 250, quota: 100 },
    { university: 'Bilkent Üniversitesi (Vakıf)', program: 'İktisat', city: 'Ankara', field: 'EA', minScore: 520, minRank: 300, quota: 70 },
    { university: 'Koç Üniversitesi (Vakıf)', program: 'İktisat', city: 'İstanbul', field: 'EA', minScore: 515, minRank: 350, quota: 60 },
    { university: 'Sabancı Üniversitesi (Vakıf)', program: 'İktisat', city: 'İstanbul', field: 'EA', minScore: 510, minRank: 400, quota: 65 },
    { university: 'Hacettepe Üniversitesi', program: 'İktisat', city: 'Ankara', field: 'EA', minScore: 510, minRank: 400, quota: 85 },
    { university: 'İstanbul Üniversitesi', program: 'İktisat', city: 'İstanbul', field: 'EA', minScore: 505, minRank: 500, quota: 100 },
    { university: 'Ankara Üniversitesi', program: 'İktisat', city: 'Ankara', field: 'EA', minScore: 500, minRank: 600, quota: 95 },
    { university: 'Ege Üniversitesi', program: 'İktisat', city: 'İzmir', field: 'EA', minScore: 495, minRank: 800, quota: 90 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'İktisat', city: 'İzmir', field: 'EA', minScore: 490, minRank: 1000, quota: 85 },
    { university: 'Marmara Üniversitesi', program: 'İktisat', city: 'İstanbul', field: 'EA', minScore: 485, minRank: 1200, quota: 95 },
    { university: 'Gazi Üniversitesi', program: 'İktisat', city: 'Ankara', field: 'EA', minScore: 475, minRank: 1800, quota: 80 },

    // EA - İşletme
    { university: 'Boğaziçi Üniversitesi', program: 'İşletme', city: 'İstanbul', field: 'EA', minScore: 535, minRank: 180, quota: 100 },
    { university: 'ODTÜ', program: 'İşletme', city: 'Ankara', field: 'EA', minScore: 530, minRank: 200, quota: 110 },
    { university: 'Koç Üniversitesi (Vakıf)', program: 'İşletme', city: 'İstanbul', field: 'EA', minScore: 525, minRank: 250, quota: 70 },
    { university: 'Sabancı Üniversitesi (Vakıf)', program: 'İşletme', city: 'İstanbul', field: 'EA', minScore: 520, minRank: 300, quota: 75 },
    { university: 'İstanbul Üniversitesi', program: 'İşletme', city: 'İstanbul', field: 'EA', minScore: 510, minRank: 400, quota: 120 },
    { university: 'Ankara Üniversitesi', program: 'İşletme', city: 'Ankara', field: 'EA', minScore: 505, minRank: 500, quota: 110 },
    { university: 'Hacettepe Üniversitesi', program: 'İşletme', city: 'Ankara', field: 'EA', minScore: 515, minRank: 350, quota: 95 },
    { university: 'Ege Üniversitesi', program: 'İşletme', city: 'İzmir', field: 'EA', minScore: 500, minRank: 600, quota: 100 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'İşletme', city: 'İzmir', field: 'EA', minScore: 495, minRank: 800, quota: 95 },
    { university: 'Marmara Üniversitesi', program: 'İşletme', city: 'İstanbul', field: 'EA', minScore: 490, minRank: 1000, quota: 110 },
    { university: 'Gazi Üniversitesi', program: 'İşletme', city: 'Ankara', field: 'EA', minScore: 480, minRank: 1500, quota: 100 },
    { university: 'Çukurova Üniversitesi', program: 'İşletme', city: 'Adana', field: 'EA', minScore: 470, minRank: 2000, quota: 90 },

    // EA - Siyaset Bilimi ve Kamu Yönetimi
    { university: 'Ankara Üniversitesi', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'Ankara', field: 'EA', minScore: 515, minRank: 350, quota: 100 },
    { university: 'ODTÜ', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'Ankara', field: 'EA', minScore: 510, minRank: 400, quota: 90 },
    { university: 'Boğaziçi Üniversitesi', program: 'Siyaset Bilimi ve Uluslararası İlişkiler', city: 'İstanbul', field: 'EA', minScore: 520, minRank: 300, quota: 80 },
    { university: 'İstanbul Üniversitesi', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'İstanbul', field: 'EA', minScore: 500, minRank: 600, quota: 95 },
    { university: 'Gazi Üniversitesi', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'Ankara', field: 'EA', minScore: 485, minRank: 1200, quota: 85 },

    // EA - Uluslararası İlişkiler
    { university: 'Bilkent Üniversitesi (Vakıf)', program: 'Uluslararası İlişkiler', city: 'Ankara', field: 'EA', minScore: 525, minRank: 250, quota: 75 },
    { university: 'Koç Üniversitesi (Vakıf)', program: 'Uluslararası İlişkiler', city: 'İstanbul', field: 'EA', minScore: 520, minRank: 300, quota: 65 },
    { university: 'ODTÜ', program: 'Uluslararası İlişkiler', city: 'Ankara', field: 'EA', minScore: 515, minRank: 350, quota: 85 },
    { university: 'Ankara Üniversitesi', program: 'Uluslararası İlişkiler', city: 'Ankara', field: 'EA', minScore: 510, minRank: 400, quota: 90 },
    { university: 'Galatasaray Üniversitesi', program: 'Uluslararası İlişkiler', city: 'İstanbul', field: 'EA', minScore: 515, minRank: 350, quota: 70 },

    // SÖZ (Sözel) - Hukuk Fakülteleri
    { university: 'Ankara Üniversitesi', program: 'Hukuk Fakültesi', city: 'Ankara', field: 'SOZ', minScore: 520, minRank: 250, quota: 200 },
    { university: 'İstanbul Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'SOZ', minScore: 515, minRank: 300, quota: 220 },
    { university: 'Gazi Üniversitesi', program: 'Hukuk Fakültesi', city: 'Ankara', field: 'SOZ', minScore: 505, minRank: 400, quota: 180 },
    { university: 'Marmara Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'SOZ', minScore: 500, minRank: 500, quota: 190 },
    { university: 'Galatasaray Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'SOZ', minScore: 510, minRank: 350, quota: 120 },
    { university: 'Hacettepe Üniversitesi', program: 'Hukuk Fakültesi', city: 'Ankara', field: 'SOZ', minScore: 505, minRank: 400, quota: 170 },
    { university: 'Ege Üniversitesi', program: 'Hukuk Fakültesi', city: 'İzmir', field: 'SOZ', minScore: 495, minRank: 600, quota: 180 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Hukuk Fakültesi', city: 'İzmir', field: 'SOZ', minScore: 490, minRank: 800, quota: 170 },
    { university: 'Selçuk Üniversitesi', program: 'Hukuk Fakültesi', city: 'Konya', field: 'SOZ', minScore: 475, minRank: 1500, quota: 160 },
    { university: 'Erciyes Üniversitesi', program: 'Hukuk Fakültesi', city: 'Kayseri', field: 'SOZ', minScore: 470, minRank: 1800, quota: 150 },
    { university: 'Çukurova Üniversitesi', program: 'Hukuk Fakültesi', city: 'Adana', field: 'SOZ', minScore: 465, minRank: 2000, quota: 140 },
    { university: 'Uludağ Üniversitesi', program: 'Hukuk Fakültesi', city: 'Bursa', field: 'SOZ', minScore: 460, minRank: 2500, quota: 150 },

    // SÖZ - Psikoloji
    { university: 'Boğaziçi Üniversitesi', program: 'Psikoloji', city: 'İstanbul', field: 'SOZ', minScore: 515, minRank: 300, quota: 70 },
    { university: 'ODTÜ', program: 'Psikoloji', city: 'Ankara', field: 'SOZ', minScore: 510, minRank: 350, quota: 80 },
    { university: 'İstanbul Üniversitesi', program: 'Psikoloji', city: 'İstanbul', field: 'SOZ', minScore: 505, minRank: 400, quota: 100 },
    { university: 'Hacettepe Üniversitesi', program: 'Psikoloji', city: 'Ankara', field: 'SOZ', minScore: 500, minRank: 500, quota: 90 },
    { university: 'Ankara Üniversitesi', program: 'Psikoloji', city: 'Ankara', field: 'SOZ', minScore: 495, minRank: 600, quota: 95 },
    { university: 'Ege Üniversitesi', program: 'Psikoloji', city: 'İzmir', field: 'SOZ', minScore: 490, minRank: 800, quota: 85 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Psikoloji', city: 'İzmir', field: 'SOZ', minScore: 485, minRank: 1000, quota: 80 },
    { university: 'Marmara Üniversitesi', program: 'Psikoloji', city: 'İstanbul', field: 'SOZ', minScore: 480, minRank: 1200, quota: 90 },
    { university: 'Gazi Üniversitesi', program: 'Psikoloji', city: 'Ankara', field: 'SOZ', minScore: 470, minRank: 1800, quota: 85 },
    { university: 'Çukurova Üniversitesi', program: 'Psikoloji', city: 'Adana', field: 'SOZ', minScore: 460, minRank: 2500, quota: 75 },

    // SÖZ - Siyaset Bilimi ve Kamu Yönetimi
    { university: 'Ankara Üniversitesi', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'Ankara', field: 'SOZ', minScore: 500, minRank: 500, quota: 100 },
    { university: 'ODTÜ', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'Ankara', field: 'SOZ', minScore: 495, minRank: 600, quota: 90 },
    { university: 'Boğaziçi Üniversitesi', program: 'Siyaset Bilimi ve Uluslararası İlişkiler', city: 'İstanbul', field: 'SOZ', minScore: 505, minRank: 400, quota: 80 },
    { university: 'İstanbul Üniversitesi', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'İstanbul', field: 'SOZ', minScore: 485, minRank: 1000, quota: 95 },
    { university: 'Gazi Üniversitesi', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'Ankara', field: 'SOZ', minScore: 470, minRank: 1800, quota: 85 },

    // SÖZ - İletişim Fakültesi
    { university: 'Ankara Üniversitesi', program: 'İletişim Fakültesi', city: 'Ankara', field: 'SOZ', minScore: 485, minRank: 1000, quota: 120 },
    { university: 'İstanbul Üniversitesi', program: 'İletişim Fakültesi', city: 'İstanbul', field: 'SOZ', minScore: 480, minRank: 1200, quota: 130 },
    { university: 'Gazi Üniversitesi', program: 'İletişim Fakültesi', city: 'Ankara', field: 'SOZ', minScore: 470, minRank: 1800, quota: 110 },
    { university: 'Ege Üniversitesi', program: 'İletişim Fakültesi', city: 'İzmir', field: 'SOZ', minScore: 475, minRank: 1500, quota: 100 },
    { university: 'Marmara Üniversitesi', program: 'İletişim Fakültesi', city: 'İstanbul', field: 'SOZ', minScore: 465, minRank: 2000, quota: 120 },
    { university: 'Anadolu Üniversitesi', program: 'İletişim Bilimleri Fakültesi', city: 'Eskişehir', field: 'SOZ', minScore: 460, minRank: 2500, quota: 140 },

    // SÖZ - Türk Dili ve Edebiyatı
    { university: 'İstanbul Üniversitesi', program: 'Türk Dili ve Edebiyatı', city: 'İstanbul', field: 'SOZ', minScore: 475, minRank: 1500, quota: 90 },
    { university: 'Ankara Üniversitesi', program: 'Türk Dili ve Edebiyatı', city: 'Ankara', field: 'SOZ', minScore: 470, minRank: 1800, quota: 85 },
    { university: 'Gazi Üniversitesi', program: 'Türk Dili ve Edebiyatı', city: 'Ankara', field: 'SOZ', minScore: 460, minRank: 2500, quota: 80 },
    { university: 'Ege Üniversitesi', program: 'Türk Dili ve Edebiyatı', city: 'İzmir', field: 'SOZ', minScore: 455, minRank: 3000, quota: 75 },
    { university: 'Hacettepe Üniversitesi', program: 'Türk Dili ve Edebiyatı', city: 'Ankara', field: 'SOZ', minScore: 465, minRank: 2000, quota: 70 },

    // SÖZ - Tarih
    { university: 'İstanbul Üniversitesi', program: 'Tarih', city: 'İstanbul', field: 'SOZ', minScore: 470, minRank: 1800, quota: 100 },
    { university: 'Ankara Üniversitesi', program: 'Tarih', city: 'Ankara', field: 'SOZ', minScore: 465, minRank: 2000, quota: 95 },
    { university: 'Hacettepe Üniversitesi', program: 'Tarih', city: 'Ankara', field: 'SOZ', minScore: 460, minRank: 2500, quota: 80 },
    { university: 'Ege Üniversitesi', program: 'Tarih', city: 'İzmir', field: 'SOZ', minScore: 450, minRank: 3500, quota: 85 },
    { university: 'Gazi Üniversitesi', program: 'Tarih', city: 'Ankara', field: 'SOZ', minScore: 455, minRank: 3000, quota: 90 },

    // SÖZ - Sosyoloji
    { university: 'Boğaziçi Üniversitesi', program: 'Sosyoloji', city: 'İstanbul', field: 'SOZ', minScore: 500, minRank: 500, quota: 65 },
    { university: 'ODTÜ', program: 'Sosyoloji', city: 'Ankara', field: 'SOZ', minScore: 490, minRank: 800, quota: 75 },
    { university: 'İstanbul Üniversitesi', program: 'Sosyoloji', city: 'İstanbul', field: 'SOZ', minScore: 480, minRank: 1200, quota: 90 },
    { university: 'Ankara Üniversitesi', program: 'Sosyoloji', city: 'Ankara', field: 'SOZ', minScore: 475, minRank: 1500, quota: 85 },
    { university: 'Hacettepe Üniversitesi', program: 'Sosyoloji', city: 'Ankara', field: 'SOZ', minScore: 470, minRank: 1800, quota: 80 },

    // DİL (Dil) - İngiliz Dili ve Edebiyatı
    { university: 'Boğaziçi Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 510, minRank: 200, quota: 60 },
    { university: 'ODTÜ', program: 'İngiliz Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 505, minRank: 250, quota: 70 },
    { university: 'Bilkent Üniversitesi (Vakıf)', program: 'İngiliz Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 505, minRank: 250, quota: 50 },
    { university: 'Hacettepe Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 495, minRank: 350, quota: 75 },
    { university: 'İstanbul Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 490, minRank: 500, quota: 85 },
    { university: 'Ankara Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 485, minRank: 600, quota: 80 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 485, minRank: 600, quota: 75 },
    { university: 'Ege Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'İzmir', field: 'DIL', minScore: 480, minRank: 800, quota: 80 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'İzmir', field: 'DIL', minScore: 475, minRank: 1000, quota: 70 },
    { university: 'Gazi Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 1200, quota: 85 },
    { university: 'Marmara Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 465, minRank: 1500, quota: 80 },
    { university: 'Çukurova Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'Adana', field: 'DIL', minScore: 455, minRank: 2000, quota: 70 },

    // DİL - Mütercim Tercümanlık (İngilizce)
    { university: 'Boğaziçi Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'İstanbul', field: 'DIL', minScore: 500, minRank: 300, quota: 55 },
    { university: 'Hacettepe Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'Ankara', field: 'DIL', minScore: 500, minRank: 300, quota: 80 },
    { university: 'Ankara Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'Ankara', field: 'DIL', minScore: 495, minRank: 400, quota: 90 },
    { university: 'İstanbul Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'İstanbul', field: 'DIL', minScore: 485, minRank: 600, quota: 85 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'İstanbul', field: 'DIL', minScore: 480, minRank: 800, quota: 75 },
    { university: 'Ege Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'İzmir', field: 'DIL', minScore: 475, minRank: 1000, quota: 70 },
    { university: 'Gazi Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'Ankara', field: 'DIL', minScore: 465, minRank: 1500, quota: 80 },
    { university: 'Marmara Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'İstanbul', field: 'DIL', minScore: 460, minRank: 1800, quota: 75 },

    // DİL - Amerikan Kültürü ve Edebiyatı
    { university: 'Hacettepe Üniversitesi', program: 'Amerikan Kültürü ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 490, minRank: 500, quota: 60 },
    { university: 'Ankara Üniversitesi', program: 'Amerikan Kültürü ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 480, minRank: 800, quota: 65 },
    { university: 'Bilkent Üniversitesi (Vakıf)', program: 'Amerikan Kültürü ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 495, minRank: 350, quota: 45 },

    // DİL - Alman Dili ve Edebiyatı
    { university: 'İstanbul Üniversitesi', program: 'Alman Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 475, minRank: 1000, quota: 70 },
    { university: 'Ankara Üniversitesi', program: 'Alman Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 1200, quota: 65 },
    { university: 'Hacettepe Üniversitesi', program: 'Alman Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 480, minRank: 800, quota: 60 },
    { university: 'Ege Üniversitesi', program: 'Alman Dili ve Edebiyatı', city: 'İzmir', field: 'DIL', minScore: 465, minRank: 1500, quota: 55 },

    // DİL - Fransız Dili ve Edebiyatı
    { university: 'İstanbul Üniversitesi', program: 'Fransız Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 475, minRank: 1000, quota: 65 },
    { university: 'Ankara Üniversitesi', program: 'Fransız Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 1200, quota: 60 },
    { university: 'Hacettepe Üniversitesi', program: 'Fransız Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 480, minRank: 800, quota: 55 },
    { university: 'Galatasaray Üniversitesi', program: 'Fransız Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 485, minRank: 600, quota: 50 },

    // DİL - İspanyol Dili ve Edebiyatı
    { university: 'Ankara Üniversitesi', program: 'İspanyol Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 1200, quota: 50 },
    { university: 'İstanbul Üniversitesi', program: 'İspanyol Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 465, minRank: 1500, quota: 55 },
    { university: 'Hacettepe Üniversitesi', program: 'İspanyol Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 475, minRank: 1000, quota: 45 },

    // DİL - Çeviribilim
    { university: 'Hacettepe Üniversitesi', program: 'Çeviribilim', city: 'Ankara', field: 'DIL', minScore: 490, minRank: 500, quota: 70 },
    { university: 'İstanbul Üniversitesi', program: 'Çeviribilim', city: 'İstanbul', field: 'DIL', minScore: 480, minRank: 800, quota: 75 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'Çeviribilim', city: 'İstanbul', field: 'DIL', minScore: 470, minRank: 1200, quota: 65 },

    // Ek SAY Bölümleri - Diş Hekimliği
    { university: 'Hacettepe Üniversitesi', program: 'Diş Hekimliği', city: 'Ankara', field: 'SAY', minScore: 540, minRank: 250, quota: 80 },
    { university: 'İstanbul Üniversitesi', program: 'Diş Hekimliği', city: 'İstanbul', field: 'SAY', minScore: 535, minRank: 300, quota: 90 },
    { university: 'Ankara Üniversitesi', program: 'Diş Hekimliği', city: 'Ankara', field: 'SAY', minScore: 530, minRank: 400, quota: 85 },
    { university: 'Ege Üniversitesi', program: 'Diş Hekimliği', city: 'İzmir', field: 'SAY', minScore: 525, minRank: 500, quota: 80 },
    { university: 'Gazi Üniversitesi', program: 'Diş Hekimliği', city: 'Ankara', field: 'SAY', minScore: 520, minRank: 600, quota: 75 },
    { university: 'Marmara Üniversitesi', program: 'Diş Hekimliği', city: 'İstanbul', field: 'SAY', minScore: 515, minRank: 800, quota: 70 },

    // Ek SAY Bölümleri - Eczacılık
    { university: 'Hacettepe Üniversitesi', program: 'Eczacılık', city: 'Ankara', field: 'SAY', minScore: 530, minRank: 400, quota: 100 },
    { university: 'İstanbul Üniversitesi', program: 'Eczacılık', city: 'İstanbul', field: 'SAY', minScore: 525, minRank: 500, quota: 110 },
    { university: 'Ankara Üniversitesi', program: 'Eczacılık', city: 'Ankara', field: 'SAY', minScore: 520, minRank: 600, quota: 105 },
    { university: 'Ege Üniversitesi', program: 'Eczacılık', city: 'İzmir', field: 'SAY', minScore: 515, minRank: 800, quota: 100 },
    { university: 'Gazi Üniversitesi', program: 'Eczacılık', city: 'Ankara', field: 'SAY', minScore: 510, minRank: 1000, quota: 95 },
    { university: 'Marmara Üniversitesi', program: 'Eczacılık', city: 'İstanbul', field: 'SAY', minScore: 505, minRank: 1200, quota: 90 },

    // Ek SAY Bölümleri - Veterinerlik
    { university: 'Ankara Üniversitesi', program: 'Veterinerlik', city: 'Ankara', field: 'SAY', minScore: 510, minRank: 800, quota: 120 },
    { university: 'İstanbul Üniversitesi', program: 'Veterinerlik', city: 'İstanbul', field: 'SAY', minScore: 505, minRank: 1000, quota: 110 },
    { university: 'Selçuk Üniversitesi', program: 'Veterinerlik', city: 'Konya', field: 'SAY', minScore: 490, minRank: 1800, quota: 100 },
    { university: 'Uludağ Üniversitesi', program: 'Veterinerlik', city: 'Bursa', field: 'SAY', minScore: 485, minRank: 2000, quota: 95 },

]

// Sıralamaya göre uygun bölümleri getir
export function getMatchingPrograms(rank: number, field: 'say' | 'ea' | 'soz' | 'dil', limit: number = 500): UniversityProgram[] {
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
