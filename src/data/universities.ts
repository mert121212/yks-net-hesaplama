import { UniversityProgram } from '@/types/yks'

// 2025 YKS taban puanları ve sıralamaları - Kapsamlı Türkiye Üniversiteleri Veritabanı
// Not: Bu veriler 2025 YKS verilerine dayalı tahmini değerlerdir
export const universityPrograms: UniversityProgram[] = [
    // ============================================
    // SAY (Sayısal) - TIP FAKÜLTELERİ
    // ============================================
    { university: 'Hacettepe Üniversitesi', program: 'Tıp Fakültesi', city: 'Ankara', field: 'SAY', minScore: 560, minRank: 2666, quota: 180 },
    { university: 'İstanbul Üniversitesi', program: 'Tıp Fakültesi', city: 'İstanbul', field: 'SAY', minScore: 555, minRank: 2798, quota: 200 },
    { university: 'Ankara Üniversitesi', program: 'Tıp Fakültesi', city: 'Ankara', field: 'SAY', minScore: 550, minRank: 1823, quota: 190 },
    { university: 'Gazi Üniversitesi', program: 'Tıp Fakültesi', city: 'Ankara', field: 'SAY', minScore: 545, minRank: 1876, quota: 170 },
    { university: 'Ege Üniversitesi', program: 'Tıp Fakültesi', city: 'İzmir', field: 'SAY', minScore: 540, minRank: 411, quota: 180 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Tıp Fakültesi', city: 'İzmir', field: 'SAY', minScore: 535, minRank: 10496, quota: 160 },
    { university: 'Marmara Üniversitesi', program: 'Tıp Fakültesi', city: 'İstanbul', field: 'SAY', minScore: 530, minRank: 7675, quota: 150 },
    { university: 'Çukurova Üniversitesi', program: 'Tıp Fakültesi', city: 'Adana', field: 'SAY', minScore: 525, minRank: 8115, quota: 140 },
    { university: 'Erciyes Üniversitesi', program: 'Tıp Fakültesi', city: 'Kayseri', field: 'SAY', minScore: 520, minRank: 5939, quota: 130 },
    { university: 'Selçuk Üniversitesi', program: 'Tıp Fakültesi', city: 'Konya', field: 'SAY', minScore: 515, minRank: 22501, quota: 140 },
    { university: 'Uludağ Üniversitesi', program: 'Tıp Fakültesi', city: 'Bursa', field: 'SAY', minScore: 510, minRank: 18053, quota: 130 },
    { university: 'Ondokuz Mayıs Üniversitesi', program: 'Tıp Fakültesi', city: 'Samsun', field: 'SAY', minScore: 505, minRank: 24365, quota: 120 },
    { university: 'Pamukkale Üniversitesi', program: 'Tıp Fakültesi', city: 'Denizli', field: 'SAY', minScore: 500, minRank: 26306, quota: 110 },
    { university: 'Süleyman Demirel Üniversitesi', program: 'Tıp Fakültesi', city: 'Isparta', field: 'SAY', minScore: 495, minRank: 35784, quota: 100 },
    { university: 'Fırat Üniversitesi', program: 'Tıp Fakültesi', city: 'Elazığ', field: 'SAY', minScore: 490, minRank: 49959, quota: 110 },
    { university: 'Atatürk Üniversitesi', program: 'Tıp Fakültesi', city: 'Erzurum', field: 'SAY', minScore: 485, minRank: 44470, quota: 120 },
    { university: 'İnönü Üniversitesi', program: 'Tıp Fakültesi', city: 'Malatya', field: 'SAY', minScore: 480, minRank: 36307, quota: 100 },
    { university: 'Dicle Üniversitesi', program: 'Tıp Fakültesi', city: 'Diyarbakır', field: 'SAY', minScore: 475, minRank: 76912, quota: 110 },
    { university: 'Gaziantep Üniversitesi', program: 'Tıp Fakültesi', city: 'Gaziantep', field: 'SAY', minScore: 470, minRank: 71926, quota: 100 },
    { university: 'Akdeniz Üniversitesi', program: 'Tıp Fakültesi', city: 'Antalya', field: 'SAY', minScore: 505, minRank: 24904, quota: 130 },
    { university: 'Karadeniz Teknik Üniversitesi', program: 'Tıp Fakültesi', city: 'Trabzon', field: 'SAY', minScore: 490, minRank: 50766, quota: 110 },
    { university: 'Cumhuriyet Üniversitesi', program: 'Tıp Fakültesi', city: 'Sivas', field: 'SAY', minScore: 475, minRank: 69680, quota: 95 },
    { university: 'Trakya Üniversitesi', program: 'Tıp Fakültesi', city: 'Edirne', field: 'SAY', minScore: 485, minRank: 41057, quota: 100 },
    { university: 'Afyonkarahisar Sağlık Bilimleri Üniversitesi', program: 'Tıp Fakültesi', city: 'Afyonkarahisar', field: 'SAY', minScore: 465, minRank: 68560, quota: 90 },
    { university: 'Adıyaman Üniversitesi', program: 'Tıp Fakültesi', city: 'Adıyaman', field: 'SAY', minScore: 460, minRank: 62425, quota: 85 },
    { university: 'Balıkesir Üniversitesi', program: 'Tıp Fakültesi', city: 'Balıkesir', field: 'SAY', minScore: 470, minRank: 70388, quota: 95 },
    { university: 'Bülent Ecevit Üniversitesi', program: 'Tıp Fakültesi', city: 'Zonguldak', field: 'SAY', minScore: 465, minRank: 61228, quota: 90 },
    { university: 'Düzce Üniversitesi', program: 'Tıp Fakültesi', city: 'Düzce', field: 'SAY', minScore: 460, minRank: 79623, quota: 85 },
    { university: 'Harran Üniversitesi', program: 'Tıp Fakültesi', city: 'Şanlıurfa', field: 'SAY', minScore: 455, minRank: 107486, quota: 90 },
    { university: 'Kahramanmaraş Sütçü İmam Üniversitesi', program: 'Tıp Fakültesi', city: 'Kahramanmaraş', field: 'SAY', minScore: 465, minRank: 58436, quota: 95 },
    { university: 'Kırıkkale Üniversitesi', program: 'Tıp Fakültesi', city: 'Kırıkkale', field: 'SAY', minScore: 460, minRank: 79078, quota: 85 },
    { university: 'Kocaeli Üniversitesi', program: 'Tıp Fakültesi', city: 'Kocaeli', field: 'SAY', minScore: 480, minRank: 34908, quota: 110 },
    { university: 'Manisa Celal Bayar Üniversitesi', program: 'Tıp Fakültesi', city: 'Manisa', field: 'SAY', minScore: 475, minRank: 66861, quota: 100 },
    { university: 'Mersin Üniversitesi', program: 'Tıp Fakültesi', city: 'Mersin', field: 'SAY', minScore: 475, minRank: 67604, quota: 105 },
    { university: 'Muğla Sıtkı Koçman Üniversitesi', program: 'Tıp Fakültesi', city: 'Muğla', field: 'SAY', minScore: 470, minRank: 70751, quota: 95 },
    { university: 'Necmettin Erbakan Üniversitesi', program: 'Tıp Fakültesi', city: 'Konya', field: 'SAY', minScore: 480, minRank: 37637, quota: 100 },
    { university: 'Ordu Üniversitesi', program: 'Tıp Fakültesi', city: 'Ordu', field: 'SAY', minScore: 460, minRank: 83578, quota: 85 },
    { university: 'Recep Tayyip Erdoğan Üniversitesi', program: 'Tıp Fakültesi', city: 'Rize', field: 'SAY', minScore: 465, minRank: 78622, quota: 90 },
    { university: 'Sakarya Üniversitesi', program: 'Tıp Fakültesi', city: 'Sakarya', field: 'SAY', minScore: 475, minRank: 76819, quota: 100 },
    { university: 'Sivas Cumhuriyet Üniversitesi', program: 'Tıp Fakültesi', city: 'Sivas', field: 'SAY', minScore: 470, minRank: 69479, quota: 95 },
    { university: 'Tekirdağ Namık Kemal Üniversitesi', program: 'Tıp Fakültesi', city: 'Tekirdağ', field: 'SAY', minScore: 470, minRank: 75971, quota: 90 },
    { university: 'Yüzüncü Yıl Üniversitesi', program: 'Tıp Fakültesi', city: 'Van', field: 'SAY', minScore: 455, minRank: 86373, quota: 95 },

    // ============================================
    // SAY - BİLGİSAYAR MÜHENDİSLİĞİ
    // ============================================
    { university: 'Boğaziçi Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 550, minRank: 1935, quota: 80 },
    { university: 'ODTÜ', program: 'Bilgisayar Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 545, minRank: 2255, quota: 120 },
    { university: 'İTÜ', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 540, minRank: 1410, quota: 100 },
    { university: 'Bilkent Üniversitesi (Vakıf)', program: 'Bilgisayar Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 535, minRank: 9102, quota: 70 },
    { university: 'Koç Üniversitesi (Vakıf)', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 530, minRank: 11172, quota: 60 },
    { university: 'Sabancı Üniversitesi (Vakıf)', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 525, minRank: 6227, quota: 65 },
    { university: 'Hacettepe Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 520, minRank: 6135, quota: 95 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 510, minRank: 29863, quota: 140 },
    { university: 'Ankara Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 505, minRank: 20522, quota: 100 },
    { university: 'İzmir Yüksek Teknoloji Enstitüsü', program: 'Bilgisayar Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 500, minRank: 23970, quota: 80 },
    { university: 'Gebze Teknik Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Kocaeli', field: 'SAY', minScore: 495, minRank: 40854, quota: 90 },
    { university: 'Ege Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 490, minRank: 35593, quota: 110 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 485, minRank: 34518, quota: 100 },
    { university: 'Gazi Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 480, minRank: 38676, quota: 120 },
    { university: 'Marmara Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 475, minRank: 55229, quota: 110 },
    { university: 'Erciyes Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Kayseri', field: 'SAY', minScore: 460, minRank: 73396, quota: 90 },
    { university: 'Selçuk Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Konya', field: 'SAY', minScore: 455, minRank: 99714, quota: 100 },
    { university: 'Sakarya Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Sakarya', field: 'SAY', minScore: 450, minRank: 98415, quota: 95 },
    { university: 'Kocaeli Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Kocaeli', field: 'SAY', minScore: 445, minRank: 99921, quota: 100 },
    { university: 'Eskişehir Teknik Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Eskişehir', field: 'SAY', minScore: 440, minRank: 110292, quota: 85 },
    { university: 'Akdeniz Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Antalya', field: 'SAY', minScore: 455, minRank: 94845, quota: 95 },
    { university: 'Atatürk Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Erzurum', field: 'SAY', minScore: 440, minRank: 96681, quota: 85 },
    { university: 'Çukurova Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Adana', field: 'SAY', minScore: 450, minRank: 114382, quota: 90 },
    { university: 'Fırat Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Elazığ', field: 'SAY', minScore: 435, minRank: 135121, quota: 80 },
    { university: 'Karadeniz Teknik Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Trabzon', field: 'SAY', minScore: 445, minRank: 108632, quota: 85 },
    { university: 'Ondokuz Mayıs Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Samsun', field: 'SAY', minScore: 445, minRank: 97481, quota: 90 },
    { university: 'Pamukkale Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Denizli', field: 'SAY', minScore: 440, minRank: 87268, quota: 85 },
    { university: 'Süleyman Demirel Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Isparta', field: 'SAY', minScore: 440, minRank: 87010, quota: 80 },
    { university: 'Uludağ Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Bursa', field: 'SAY', minScore: 450, minRank: 107103, quota: 95 },
    { university: 'Yeditepe Üniversitesi (Vakıf)', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 480, minRank: 42691, quota: 70 },
    { university: 'Bahçeşehir Üniversitesi (Vakıf)', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 470, minRank: 80873, quota: 75 },
    { university: 'İstanbul Teknik Üniversitesi', program: 'Yazılım Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 530, minRank: 7815, quota: 80 },
    { university: 'ODTÜ', program: 'Yazılım Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 535, minRank: 4768, quota: 90 },
    { university: 'Hacettepe Üniversitesi', program: 'Yazılım Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 510, minRank: 19959, quota: 85 },

    // ============================================
    // SAY - ELEKTRİK-ELEKTRONİK MÜHENDİSLİĞİ
    // ============================================
    { university: 'Boğaziçi Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 535, minRank: 11981, quota: 90 },
    { university: 'ODTÜ', program: 'Elektrik-Elektronik Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 530, minRank: 3634, quota: 110 },
    { university: 'İTÜ', program: 'Elektrik-Elektronik Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 525, minRank: 5990, quota: 100 },
    { university: 'Bilkent Üniversitesi (Vakıf)', program: 'Elektrik-Elektronik Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 520, minRank: 11657, quota: 75 },
    { university: 'Hacettepe Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 510, minRank: 28064, quota: 90 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 500, minRank: 24883, quota: 130 },
    { university: 'Gazi Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 470, minRank: 78616, quota: 110 },
    { university: 'Ege Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 480, minRank: 44776, quota: 100 },
    { university: 'İzmir Yüksek Teknoloji Enstitüsü', program: 'Elektrik-Elektronik Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 490, minRank: 53134, quota: 85 },
    { university: 'Gebze Teknik Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Kocaeli', field: 'SAY', minScore: 485, minRank: 46468, quota: 90 },
    { university: 'Kocaeli Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Kocaeli', field: 'SAY', minScore: 435, minRank: 117785, quota: 95 },
    { university: 'Sakarya Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Sakarya', field: 'SAY', minScore: 440, minRank: 98029, quota: 90 },

    // ============================================
    // SAY - MAKİNE MÜHENDİSLİĞİ
    // ============================================
    { university: 'İTÜ', program: 'Makine Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 520, minRank: 10875, quota: 120 },
    { university: 'ODTÜ', program: 'Makine Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 515, minRank: 22792, quota: 130 },
    { university: 'Boğaziçi Üniversitesi', program: 'Makine Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 510, minRank: 25823, quota: 85 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'Makine Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 490, minRank: 46288, quota: 140 },
    { university: 'Gazi Üniversitesi', program: 'Makine Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 465, minRank: 68752, quota: 120 },
    { university: 'Ege Üniversitesi', program: 'Makine Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 475, minRank: 59591, quota: 110 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Makine Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 470, minRank: 61027, quota: 105 },
    { university: 'Erciyes Üniversitesi', program: 'Makine Mühendisliği', city: 'Kayseri', field: 'SAY', minScore: 445, minRank: 89110, quota: 95 },
    { university: 'Selçuk Üniversitesi', program: 'Makine Mühendisliği', city: 'Konya', field: 'SAY', minScore: 440, minRank: 94051, quota: 100 },
    { university: 'Uludağ Üniversitesi', program: 'Makine Mühendisliği', city: 'Bursa', field: 'SAY', minScore: 445, minRank: 98564, quota: 105 },
    { university: 'Kocaeli Üniversitesi', program: 'Makine Mühendisliği', city: 'Kocaeli', field: 'SAY', minScore: 435, minRank: 116445, quota: 110 },
    { university: 'Sakarya Üniversitesi', program: 'Makine Mühendisliği', city: 'Sakarya', field: 'SAY', minScore: 435, minRank: 116440, quota: 100 },

    // ============================================
    // SAY - İNŞAAT MÜHENDİSLİĞİ
    // ============================================
    { university: 'İTÜ', program: 'İnşaat Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 510, minRank: 19193, quota: 130 },
    { university: 'ODTÜ', program: 'İnşaat Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 505, minRank: 12549, quota: 140 },
    { university: 'Boğaziçi Üniversitesi', program: 'İnşaat Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 500, minRank: 18193, quota: 80 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'İnşaat Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 480, minRank: 52279, quota: 150 },
    { university: 'Gazi Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 455, minRank: 107041, quota: 130 },
    { university: 'Ege Üniversitesi', program: 'İnşaat Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 465, minRank: 64979, quota: 120 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'İnşaat Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 460, minRank: 69298, quota: 115 },
    { university: 'Karadeniz Teknik Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Trabzon', field: 'SAY', minScore: 435, minRank: 130019, quota: 100 },
    { university: 'Selçuk Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Konya', field: 'SAY', minScore: 430, minRank: 115606, quota: 110 },
    { university: 'Uludağ Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Bursa', field: 'SAY', minScore: 435, minRank: 144077, quota: 115 },

    // ============================================
    // SAY - ENDÜSTRİ MÜHENDİSLİĞİ
    // ============================================
    { university: 'Boğaziçi Üniversitesi', program: 'Endüstri Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 530, minRank: 7968, quota: 75 },
    { university: 'ODTÜ', program: 'Endüstri Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 525, minRank: 10702, quota: 90 },
    { university: 'İTÜ', program: 'Endüstri Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 520, minRank: 7967, quota: 85 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'Endüstri Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 495, minRank: 36756, quota: 120 },
    { university: 'Gazi Üniversitesi', program: 'Endüstri Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 470, minRank: 70606, quota: 100 },
    { university: 'Eskişehir Osmangazi Üniversitesi', program: 'Endüstri Mühendisliği', city: 'Eskişehir', field: 'SAY', minScore: 445, minRank: 110111, quota: 90 },
    { university: 'Kocaeli Üniversitesi', program: 'Endüstri Mühendisliği', city: 'Kocaeli', field: 'SAY', minScore: 440, minRank: 86703, quota: 95 },
    { university: 'Sakarya Üniversitesi', program: 'Endüstri Mühendisliği', city: 'Sakarya', field: 'SAY', minScore: 440, minRank: 106832, quota: 90 },

    // ============================================
    // SAY - MİMARLIK
    // ============================================
    { university: 'İTÜ', program: 'Mimarlık', city: 'İstanbul', field: 'SAY', minScore: 525, minRank: 9473, quota: 100 },
    { university: 'ODTÜ', program: 'Mimarlık', city: 'Ankara', field: 'SAY', minScore: 520, minRank: 3263, quota: 110 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'Mimarlık', city: 'İstanbul', field: 'SAY', minScore: 495, minRank: 46383, quota: 130 },
    { university: 'Gazi Üniversitesi', program: 'Mimarlık', city: 'Ankara', field: 'SAY', minScore: 475, minRank: 58963, quota: 110 },
    { university: 'Mimar Sinan Güzel Sanatlar Üniversitesi', program: 'Mimarlık', city: 'İstanbul', field: 'SAY', minScore: 510, minRank: 15949, quota: 95 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Mimarlık', city: 'İzmir', field: 'SAY', minScore: 480, minRank: 49220, quota: 100 },
    { university: 'Selçuk Üniversitesi', program: 'Mimarlık', city: 'Konya', field: 'SAY', minScore: 455, minRank: 96335, quota: 95 },
    { university: 'Uludağ Üniversitesi', program: 'Mimarlık', city: 'Bursa', field: 'SAY', minScore: 460, minRank: 68624, quota: 90 },
    { university: 'Karadeniz Teknik Üniversitesi', program: 'Mimarlık', city: 'Trabzon', field: 'SAY', minScore: 450, minRank: 99925, quota: 85 },

    // ============================================
    // SAY - DİŞ HEKİMLİĞİ
    // ============================================
    { university: 'Hacettepe Üniversitesi', program: 'Diş Hekimliği', city: 'Ankara', field: 'SAY', minScore: 540, minRank: 1512, quota: 80 },
    { university: 'İstanbul Üniversitesi', program: 'Diş Hekimliği', city: 'İstanbul', field: 'SAY', minScore: 535, minRank: 7989, quota: 90 },
    { university: 'Ankara Üniversitesi', program: 'Diş Hekimliği', city: 'Ankara', field: 'SAY', minScore: 530, minRank: 11274, quota: 85 },
    { university: 'Ege Üniversitesi', program: 'Diş Hekimliği', city: 'İzmir', field: 'SAY', minScore: 525, minRank: 5829, quota: 80 },
    { university: 'Gazi Üniversitesi', program: 'Diş Hekimliği', city: 'Ankara', field: 'SAY', minScore: 520, minRank: 9350, quota: 75 },
    { university: 'Marmara Üniversitesi', program: 'Diş Hekimliği', city: 'İstanbul', field: 'SAY', minScore: 515, minRank: 27867, quota: 70 },
    { university: 'Selçuk Üniversitesi', program: 'Diş Hekimliği', city: 'Konya', field: 'SAY', minScore: 500, minRank: 28425, quota: 75 },
    { university: 'Atatürk Üniversitesi', program: 'Diş Hekimliği', city: 'Erzurum', field: 'SAY', minScore: 490, minRank: 42817, quota: 70 },
    { university: 'Dicle Üniversitesi', program: 'Diş Hekimliği', city: 'Diyarbakır', field: 'SAY', minScore: 480, minRank: 44351, quota: 65 },

    // ============================================
    // SAY - ECZACILIK
    // ============================================
    { university: 'Hacettepe Üniversitesi', program: 'Eczacılık', city: 'Ankara', field: 'SAY', minScore: 530, minRank: 8615, quota: 100 },
    { university: 'İstanbul Üniversitesi', program: 'Eczacılık', city: 'İstanbul', field: 'SAY', minScore: 525, minRank: 6818, quota: 110 },
    { university: 'Ankara Üniversitesi', program: 'Eczacılık', city: 'Ankara', field: 'SAY', minScore: 520, minRank: 8255, quota: 105 },
    { university: 'Ege Üniversitesi', program: 'Eczacılık', city: 'İzmir', field: 'SAY', minScore: 515, minRank: 20074, quota: 100 },
    { university: 'Gazi Üniversitesi', program: 'Eczacılık', city: 'Ankara', field: 'SAY', minScore: 510, minRank: 20038, quota: 95 },
    { university: 'Marmara Üniversitesi', program: 'Eczacılık', city: 'İstanbul', field: 'SAY', minScore: 505, minRank: 27712, quota: 90 },
    { university: 'Anadolu Üniversitesi', program: 'Eczacılık', city: 'Eskişehir', field: 'SAY', minScore: 495, minRank: 53744, quota: 85 },
    { university: 'Erciyes Üniversitesi', program: 'Eczacılık', city: 'Kayseri', field: 'SAY', minScore: 485, minRank: 34694, quota: 80 },

    // ============================================
    // SAY - VETERİNERLİK
    // ============================================
    { university: 'Ankara Üniversitesi', program: 'Veterinerlik', city: 'Ankara', field: 'SAY', minScore: 510, minRank: 14646, quota: 120 },
    { university: 'İstanbul Üniversitesi', program: 'Veterinerlik', city: 'İstanbul', field: 'SAY', minScore: 505, minRank: 15633, quota: 110 },
    { university: 'Selçuk Üniversitesi', program: 'Veterinerlik', city: 'Konya', field: 'SAY', minScore: 490, minRank: 54959, quota: 100 },
    { university: 'Uludağ Üniversitesi', program: 'Veterinerlik', city: 'Bursa', field: 'SAY', minScore: 485, minRank: 44330, quota: 95 },
    { university: 'Fırat Üniversitesi', program: 'Veterinerlik', city: 'Elazığ', field: 'SAY', minScore: 470, minRank: 57448, quota: 90 },
    { university: 'Kafkas Üniversitesi', program: 'Veterinerlik', city: 'Kars', field: 'SAY', minScore: 460, minRank: 74892, quota: 85 },

    // ============================================
    // EA (Eşit Ağırlık) - HUKUK FAKÜLTELERİ
    // ============================================
    { university: 'Ankara Üniversitesi', program: 'Hukuk Fakültesi', city: 'Ankara', field: 'EA', minScore: 535, minRank: 11064, quota: 200 },
    { university: 'İstanbul Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'EA', minScore: 530, minRank: 3425, quota: 220 },
    { university: 'Gazi Üniversitesi', program: 'Hukuk Fakültesi', city: 'Ankara', field: 'EA', minScore: 520, minRank: 10992, quota: 180 },
    { university: 'Marmara Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'EA', minScore: 515, minRank: 24611, quota: 190 },
    { university: 'Galatasaray Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'EA', minScore: 525, minRank: 10987, quota: 120 },
    { university: 'Hacettepe Üniversitesi', program: 'Hukuk Fakültesi', city: 'Ankara', field: 'EA', minScore: 520, minRank: 3426, quota: 170 },
    { university: 'Ege Üniversitesi', program: 'Hukuk Fakültesi', city: 'İzmir', field: 'EA', minScore: 510, minRank: 15838, quota: 180 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Hukuk Fakültesi', city: 'İzmir', field: 'EA', minScore: 505, minRank: 26355, quota: 170 },
    { university: 'Selçuk Üniversitesi', program: 'Hukuk Fakültesi', city: 'Konya', field: 'EA', minScore: 490, minRank: 47395, quota: 160 },
    { university: 'Erciyes Üniversitesi', program: 'Hukuk Fakültesi', city: 'Kayseri', field: 'EA', minScore: 485, minRank: 48561, quota: 150 },
    { university: 'Çukurova Üniversitesi', program: 'Hukuk Fakültesi', city: 'Adana', field: 'EA', minScore: 480, minRank: 32891, quota: 140 },
    { university: 'Uludağ Üniversitesi', program: 'Hukuk Fakültesi', city: 'Bursa', field: 'EA', minScore: 475, minRank: 62673, quota: 150 },
    { university: 'Ondokuz Mayıs Üniversitesi', program: 'Hukuk Fakültesi', city: 'Samsun', field: 'EA', minScore: 470, minRank: 62074, quota: 140 },
    { university: 'Akdeniz Üniversitesi', program: 'Hukuk Fakültesi', city: 'Antalya', field: 'EA', minScore: 465, minRank: 74683, quota: 130 },
    { university: 'Sakarya Üniversitesi', program: 'Hukuk Fakültesi', city: 'Sakarya', field: 'EA', minScore: 460, minRank: 62264, quota: 120 },
    { university: 'Kocaeli Üniversitesi', program: 'Hukuk Fakültesi', city: 'Kocaeli', field: 'EA', minScore: 455, minRank: 85197, quota: 115 },
    { university: 'Dicle Üniversitesi', program: 'Hukuk Fakültesi', city: 'Diyarbakır', field: 'EA', minScore: 450, minRank: 98169, quota: 110 },
    { university: 'Atatürk Üniversitesi', program: 'Hukuk Fakültesi', city: 'Erzurum', field: 'EA', minScore: 450, minRank: 90377, quota: 105 },
    { university: 'Süleyman Demirel Üniversitesi', program: 'Hukuk Fakültesi', city: 'Isparta', field: 'EA', minScore: 455, minRank: 87412, quota: 100 },
    { university: 'Karadeniz Teknik Üniversitesi', program: 'Hukuk Fakültesi', city: 'Trabzon', field: 'EA', minScore: 455, minRank: 102797, quota: 110 },

    // ============================================
    // EA - İKTİSAT
    // ============================================
    { university: 'Boğaziçi Üniversitesi', program: 'İktisat', city: 'İstanbul', field: 'EA', minScore: 530, minRank: 6296, quota: 90 },
    { university: 'ODTÜ', program: 'İktisat', city: 'Ankara', field: 'EA', minScore: 525, minRank: 7702, quota: 100 },
    { university: 'Bilkent Üniversitesi (Vakıf)', program: 'İktisat', city: 'Ankara', field: 'EA', minScore: 520, minRank: 11214, quota: 70 },
    { university: 'Koç Üniversitesi (Vakıf)', program: 'İktisat', city: 'İstanbul', field: 'EA', minScore: 515, minRank: 17576, quota: 60 },
    { university: 'Sabancı Üniversitesi (Vakıf)', program: 'İktisat', city: 'İstanbul', field: 'EA', minScore: 510, minRank: 15779, quota: 65 },
    { university: 'Hacettepe Üniversitesi', program: 'İktisat', city: 'Ankara', field: 'EA', minScore: 510, minRank: 14490, quota: 85 },
    { university: 'İstanbul Üniversitesi', program: 'İktisat', city: 'İstanbul', field: 'EA', minScore: 505, minRank: 18311, quota: 100 },
    { university: 'Ankara Üniversitesi', program: 'İktisat', city: 'Ankara', field: 'EA', minScore: 500, minRank: 17611, quota: 95 },
    { university: 'Ege Üniversitesi', program: 'İktisat', city: 'İzmir', field: 'EA', minScore: 495, minRank: 51988, quota: 90 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'İktisat', city: 'İzmir', field: 'EA', minScore: 490, minRank: 38504, quota: 85 },
    { university: 'Marmara Üniversitesi', program: 'İktisat', city: 'İstanbul', field: 'EA', minScore: 485, minRank: 36882, quota: 95 },
    { university: 'Gazi Üniversitesi', program: 'İktisat', city: 'Ankara', field: 'EA', minScore: 475, minRank: 71640, quota: 80 },
    { university: 'Uludağ Üniversitesi', program: 'İktisat', city: 'Bursa', field: 'EA', minScore: 465, minRank: 66214, quota: 75 },
    { university: 'Akdeniz Üniversitesi', program: 'İktisat', city: 'Antalya', field: 'EA', minScore: 460, minRank: 84999, quota: 70 },

    // ============================================
    // EA - İŞLETME
    // ============================================
    { university: 'Boğaziçi Üniversitesi', program: 'İşletme', city: 'İstanbul', field: 'EA', minScore: 535, minRank: 9327, quota: 100 },
    { university: 'ODTÜ', program: 'İşletme', city: 'Ankara', field: 'EA', minScore: 530, minRank: 10919, quota: 110 },
    { university: 'Koç Üniversitesi (Vakıf)', program: 'İşletme', city: 'İstanbul', field: 'EA', minScore: 525, minRank: 7026, quota: 70 },
    { university: 'Sabancı Üniversitesi (Vakıf)', program: 'İşletme', city: 'İstanbul', field: 'EA', minScore: 520, minRank: 3805, quota: 75 },
    { university: 'İstanbul Üniversitesi', program: 'İşletme', city: 'İstanbul', field: 'EA', minScore: 510, minRank: 23902, quota: 120 },
    { university: 'Ankara Üniversitesi', program: 'İşletme', city: 'Ankara', field: 'EA', minScore: 505, minRank: 21359, quota: 110 },
    { university: 'Hacettepe Üniversitesi', program: 'İşletme', city: 'Ankara', field: 'EA', minScore: 515, minRank: 21142, quota: 95 },
    { university: 'Ege Üniversitesi', program: 'İşletme', city: 'İzmir', field: 'EA', minScore: 500, minRank: 27580, quota: 100 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'İşletme', city: 'İzmir', field: 'EA', minScore: 495, minRank: 48750, quota: 95 },
    { university: 'Marmara Üniversitesi', program: 'İşletme', city: 'İstanbul', field: 'EA', minScore: 490, minRank: 53988, quota: 110 },
    { university: 'Gazi Üniversitesi', program: 'İşletme', city: 'Ankara', field: 'EA', minScore: 480, minRank: 33333, quota: 100 },
    { university: 'Çukurova Üniversitesi', program: 'İşletme', city: 'Adana', field: 'EA', minScore: 470, minRank: 80866, quota: 90 },
    { university: 'Akdeniz Üniversitesi', program: 'İşletme', city: 'Antalya', field: 'EA', minScore: 475, minRank: 82892, quota: 95 },
    { university: 'Uludağ Üniversitesi', program: 'İşletme', city: 'Bursa', field: 'EA', minScore: 470, minRank: 68562, quota: 90 },
    { university: 'Sakarya Üniversitesi', program: 'İşletme', city: 'Sakarya', field: 'EA', minScore: 460, minRank: 60862, quota: 85 },
    { university: 'Kocaeli Üniversitesi', program: 'İşletme', city: 'Kocaeli', field: 'EA', minScore: 455, minRank: 102906, quota: 90 },

    // ============================================
    // EA - SİYASET BİLİMİ VE KAMU YÖNETİMİ
    // ============================================
    { university: 'Ankara Üniversitesi', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'Ankara', field: 'EA', minScore: 515, minRank: 22469, quota: 100 },
    { university: 'ODTÜ', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'Ankara', field: 'EA', minScore: 510, minRank: 28003, quota: 90 },
    { university: 'Boğaziçi Üniversitesi', program: 'Siyaset Bilimi ve Uluslararası İlişkiler', city: 'İstanbul', field: 'EA', minScore: 520, minRank: 4052, quota: 80 },
    { university: 'İstanbul Üniversitesi', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'İstanbul', field: 'EA', minScore: 500, minRank: 27155, quota: 95 },
    { university: 'Gazi Üniversitesi', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'Ankara', field: 'EA', minScore: 485, minRank: 49799, quota: 85 },
    { university: 'Marmara Üniversitesi', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'İstanbul', field: 'EA', minScore: 480, minRank: 37460, quota: 90 },
    { university: 'Ege Üniversitesi', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'İzmir', field: 'EA', minScore: 470, minRank: 56798, quota: 80 },

    // ============================================
    // EA - ULUSLARARASI İLİŞKİLER
    // ============================================
    { university: 'Bilkent Üniversitesi (Vakıf)', program: 'Uluslararası İlişkiler', city: 'Ankara', field: 'EA', minScore: 525, minRank: 10215, quota: 75 },
    { university: 'Koç Üniversitesi (Vakıf)', program: 'Uluslararası İlişkiler', city: 'İstanbul', field: 'EA', minScore: 520, minRank: 11582, quota: 65 },
    { university: 'ODTÜ', program: 'Uluslararası İlişkiler', city: 'Ankara', field: 'EA', minScore: 515, minRank: 26573, quota: 85 },
    { university: 'Ankara Üniversitesi', program: 'Uluslararası İlişkiler', city: 'Ankara', field: 'EA', minScore: 510, minRank: 17970, quota: 90 },
    { university: 'Galatasaray Üniversitesi', program: 'Uluslararası İlişkiler', city: 'İstanbul', field: 'EA', minScore: 515, minRank: 19284, quota: 70 },
    { university: 'İstanbul Üniversitesi', program: 'Uluslararası İlişkiler', city: 'İstanbul', field: 'EA', minScore: 500, minRank: 19102, quota: 85 },
    { university: 'Marmara Üniversitesi', program: 'Uluslararası İlişkiler', city: 'İstanbul', field: 'EA', minScore: 490, minRank: 47660, quota: 80 },

    // ============================================
    // SÖZ (Sözel) - HUKUK FAKÜLTELERİ
    // ============================================
    { university: 'Ankara Üniversitesi', program: 'Hukuk Fakültesi', city: 'Ankara', field: 'SOZ', minScore: 520, minRank: 3145, quota: 200 },
    { university: 'İstanbul Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'SOZ', minScore: 515, minRank: 27904, quota: 220 },
    { university: 'Gazi Üniversitesi', program: 'Hukuk Fakültesi', city: 'Ankara', field: 'SOZ', minScore: 505, minRank: 21610, quota: 180 },
    { university: 'Marmara Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'SOZ', minScore: 500, minRank: 16117, quota: 190 },
    { university: 'Galatasaray Üniversitesi', program: 'Hukuk Fakültesi', city: 'İstanbul', field: 'SOZ', minScore: 510, minRank: 22755, quota: 120 },
    { university: 'Hacettepe Üniversitesi', program: 'Hukuk Fakültesi', city: 'Ankara', field: 'SOZ', minScore: 505, minRank: 28710, quota: 170 },
    { university: 'Ege Üniversitesi', program: 'Hukuk Fakültesi', city: 'İzmir', field: 'SOZ', minScore: 495, minRank: 43382, quota: 180 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Hukuk Fakültesi', city: 'İzmir', field: 'SOZ', minScore: 490, minRank: 33628, quota: 170 },
    { university: 'Selçuk Üniversitesi', program: 'Hukuk Fakültesi', city: 'Konya', field: 'SOZ', minScore: 475, minRank: 77683, quota: 160 },
    { university: 'Erciyes Üniversitesi', program: 'Hukuk Fakültesi', city: 'Kayseri', field: 'SOZ', minScore: 470, minRank: 60219, quota: 150 },
    { university: 'Çukurova Üniversitesi', program: 'Hukuk Fakültesi', city: 'Adana', field: 'SOZ', minScore: 465, minRank: 77737, quota: 140 },
    { university: 'Uludağ Üniversitesi', program: 'Hukuk Fakültesi', city: 'Bursa', field: 'SOZ', minScore: 460, minRank: 58821, quota: 150 },

    // ============================================
    // SÖZ - PSİKOLOJİ
    // ============================================
    { university: 'Boğaziçi Üniversitesi', program: 'Psikoloji', city: 'İstanbul', field: 'SOZ', minScore: 515, minRank: 28358, quota: 70 },
    { university: 'ODTÜ', program: 'Psikoloji', city: 'Ankara', field: 'SOZ', minScore: 510, minRank: 18888, quota: 80 },
    { university: 'İstanbul Üniversitesi', program: 'Psikoloji', city: 'İstanbul', field: 'SOZ', minScore: 505, minRank: 25030, quota: 100 },
    { university: 'Hacettepe Üniversitesi', program: 'Psikoloji', city: 'Ankara', field: 'SOZ', minScore: 500, minRank: 27666, quota: 90 },
    { university: 'Ankara Üniversitesi', program: 'Psikoloji', city: 'Ankara', field: 'SOZ', minScore: 495, minRank: 50635, quota: 95 },
    { university: 'Ege Üniversitesi', program: 'Psikoloji', city: 'İzmir', field: 'SOZ', minScore: 490, minRank: 47584, quota: 85 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Psikoloji', city: 'İzmir', field: 'SOZ', minScore: 485, minRank: 44495, quota: 80 },
    { university: 'Marmara Üniversitesi', program: 'Psikoloji', city: 'İstanbul', field: 'SOZ', minScore: 480, minRank: 41653, quota: 90 },
    { university: 'Gazi Üniversitesi', program: 'Psikoloji', city: 'Ankara', field: 'SOZ', minScore: 470, minRank: 58908, quota: 85 },
    { university: 'Çukurova Üniversitesi', program: 'Psikoloji', city: 'Adana', field: 'SOZ', minScore: 460, minRank: 60062, quota: 75 },
    { university: 'Uludağ Üniversitesi', program: 'Psikoloji', city: 'Bursa', field: 'SOZ', minScore: 455, minRank: 107002, quota: 70 },
    { university: 'Akdeniz Üniversitesi', program: 'Psikoloji', city: 'Antalya', field: 'SOZ', minScore: 460, minRank: 75010, quota: 75 },

    // ============================================
    // SÖZ - SİYASET BİLİMİ VE KAMU YÖNETİMİ
    // ============================================
    { university: 'Ankara Üniversitesi', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'Ankara', field: 'SOZ', minScore: 500, minRank: 15777, quota: 100 },
    { university: 'ODTÜ', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'Ankara', field: 'SOZ', minScore: 495, minRank: 37012, quota: 90 },
    { university: 'Boğaziçi Üniversitesi', program: 'Siyaset Bilimi ve Uluslararası İlişkiler', city: 'İstanbul', field: 'SOZ', minScore: 505, minRank: 20504, quota: 80 },
    { university: 'İstanbul Üniversitesi', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'İstanbul', field: 'SOZ', minScore: 485, minRank: 37612, quota: 95 },
    { university: 'Gazi Üniversitesi', program: 'Siyaset Bilimi ve Kamu Yönetimi', city: 'Ankara', field: 'SOZ', minScore: 470, minRank: 58149, quota: 85 },

    // ============================================
    // SÖZ - İLETİŞİM FAKÜLTESİ
    // ============================================
    { university: 'Ankara Üniversitesi', program: 'İletişim Fakültesi', city: 'Ankara', field: 'SOZ', minScore: 485, minRank: 33319, quota: 120 },
    { university: 'İstanbul Üniversitesi', program: 'İletişim Fakültesi', city: 'İstanbul', field: 'SOZ', minScore: 480, minRank: 30451, quota: 130 },
    { university: 'Gazi Üniversitesi', program: 'İletişim Fakültesi', city: 'Ankara', field: 'SOZ', minScore: 470, minRank: 68254, quota: 110 },
    { university: 'Ege Üniversitesi', program: 'İletişim Fakültesi', city: 'İzmir', field: 'SOZ', minScore: 475, minRank: 70448, quota: 100 },
    { university: 'Marmara Üniversitesi', program: 'İletişim Fakültesi', city: 'İstanbul', field: 'SOZ', minScore: 465, minRank: 78671, quota: 120 },
    { university: 'Anadolu Üniversitesi', program: 'İletişim Bilimleri Fakültesi', city: 'Eskişehir', field: 'SOZ', minScore: 460, minRank: 69259, quota: 140 },
    { university: 'Selçuk Üniversitesi', program: 'İletişim Fakültesi', city: 'Konya', field: 'SOZ', minScore: 450, minRank: 85662, quota: 100 },
    { university: 'Erciyes Üniversitesi', program: 'İletişim Fakültesi', city: 'Kayseri', field: 'SOZ', minScore: 445, minRank: 106998, quota: 95 },

    // ============================================
    // SÖZ - TÜRK DİLİ VE EDEBİYATI
    // ============================================
    { university: 'İstanbul Üniversitesi', program: 'Türk Dili ve Edebiyatı', city: 'İstanbul', field: 'SOZ', minScore: 475, minRank: 61953, quota: 90 },
    { university: 'Ankara Üniversitesi', program: 'Türk Dili ve Edebiyatı', city: 'Ankara', field: 'SOZ', minScore: 470, minRank: 84039, quota: 85 },
    { university: 'Gazi Üniversitesi', program: 'Türk Dili ve Edebiyatı', city: 'Ankara', field: 'SOZ', minScore: 460, minRank: 67544, quota: 80 },
    { university: 'Ege Üniversitesi', program: 'Türk Dili ve Edebiyatı', city: 'İzmir', field: 'SOZ', minScore: 455, minRank: 85014, quota: 75 },
    { university: 'Hacettepe Üniversitesi', program: 'Türk Dili ve Edebiyatı', city: 'Ankara', field: 'SOZ', minScore: 465, minRank: 76182, quota: 70 },
    { university: 'Marmara Üniversitesi', program: 'Türk Dili ve Edebiyatı', city: 'İstanbul', field: 'SOZ', minScore: 450, minRank: 85084, quota: 80 },
    { university: 'Selçuk Üniversitesi', program: 'Türk Dili ve Edebiyatı', city: 'Konya', field: 'SOZ', minScore: 440, minRank: 93741, quota: 75 },

    // ============================================
    // SÖZ - TARİH
    // ============================================
    { university: 'İstanbul Üniversitesi', program: 'Tarih', city: 'İstanbul', field: 'SOZ', minScore: 470, minRank: 63922, quota: 100 },
    { university: 'Ankara Üniversitesi', program: 'Tarih', city: 'Ankara', field: 'SOZ', minScore: 465, minRank: 80276, quota: 95 },
    { university: 'Hacettepe Üniversitesi', program: 'Tarih', city: 'Ankara', field: 'SOZ', minScore: 460, minRank: 67786, quota: 80 },
    { university: 'Ege Üniversitesi', program: 'Tarih', city: 'İzmir', field: 'SOZ', minScore: 450, minRank: 111632, quota: 85 },
    { university: 'Gazi Üniversitesi', program: 'Tarih', city: 'Ankara', field: 'SOZ', minScore: 455, minRank: 114238, quota: 90 },
    { university: 'Marmara Üniversitesi', program: 'Tarih', city: 'İstanbul', field: 'SOZ', minScore: 445, minRank: 90418, quota: 85 },

    // ============================================
    // SÖZ - SOSYOLOJİ
    // ============================================
    { university: 'Boğaziçi Üniversitesi', program: 'Sosyoloji', city: 'İstanbul', field: 'SOZ', minScore: 500, minRank: 18206, quota: 65 },
    { university: 'ODTÜ', program: 'Sosyoloji', city: 'Ankara', field: 'SOZ', minScore: 490, minRank: 36573, quota: 75 },
    { university: 'İstanbul Üniversitesi', program: 'Sosyoloji', city: 'İstanbul', field: 'SOZ', minScore: 480, minRank: 45672, quota: 90 },
    { university: 'Ankara Üniversitesi', program: 'Sosyoloji', city: 'Ankara', field: 'SOZ', minScore: 475, minRank: 63623, quota: 85 },
    { university: 'Hacettepe Üniversitesi', program: 'Sosyoloji', city: 'Ankara', field: 'SOZ', minScore: 470, minRank: 79366, quota: 80 },
    { university: 'Ege Üniversitesi', program: 'Sosyoloji', city: 'İzmir', field: 'SOZ', minScore: 460, minRank: 65178, quota: 75 },
    { university: 'Marmara Üniversitesi', program: 'Sosyoloji', city: 'İstanbul', field: 'SOZ', minScore: 455, minRank: 111706, quota: 80 },

    // ============================================
    // DİL (Dil) - İNGİLİZ DİLİ VE EDEBİYATI
    // ============================================
    { university: 'Boğaziçi Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 510, minRank: 25359, quota: 60 },
    { university: 'ODTÜ', program: 'İngiliz Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 505, minRank: 26218, quota: 70 },
    { university: 'Bilkent Üniversitesi (Vakıf)', program: 'İngiliz Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 505, minRank: 13186, quota: 50 },
    { university: 'Hacettepe Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 495, minRank: 43855, quota: 75 },
    { university: 'İstanbul Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 490, minRank: 47342, quota: 85 },
    { university: 'Ankara Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 485, minRank: 33914, quota: 80 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 485, minRank: 47738, quota: 75 },
    { university: 'Ege Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'İzmir', field: 'DIL', minScore: 480, minRank: 51842, quota: 80 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'İzmir', field: 'DIL', minScore: 475, minRank: 73984, quota: 70 },
    { university: 'Gazi Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 64006, quota: 85 },
    { university: 'Marmara Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 465, minRank: 71861, quota: 80 },
    { university: 'Çukurova Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'Adana', field: 'DIL', minScore: 455, minRank: 89275, quota: 70 },
    { university: 'Selçuk Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'Konya', field: 'DIL', minScore: 450, minRank: 90249, quota: 65 },
    { university: 'Uludağ Üniversitesi', program: 'İngiliz Dili ve Edebiyatı', city: 'Bursa', field: 'DIL', minScore: 455, minRank: 101590, quota: 70 },

    // ============================================
    // DİL - MÜTERCİM TERCÜMANLIK (İNGİLİZCE)
    // ============================================
    { university: 'Boğaziçi Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'İstanbul', field: 'DIL', minScore: 500, minRank: 16606, quota: 55 },
    { university: 'Hacettepe Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'Ankara', field: 'DIL', minScore: 500, minRank: 23444, quota: 80 },
    { university: 'Ankara Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'Ankara', field: 'DIL', minScore: 495, minRank: 36194, quota: 90 },
    { university: 'İstanbul Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'İstanbul', field: 'DIL', minScore: 485, minRank: 45907, quota: 85 },
    { university: 'Yıldız Teknik Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'İstanbul', field: 'DIL', minScore: 480, minRank: 49606, quota: 75 },
    { university: 'Ege Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'İzmir', field: 'DIL', minScore: 475, minRank: 83652, quota: 70 },
    { university: 'Gazi Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'Ankara', field: 'DIL', minScore: 465, minRank: 62303, quota: 80 },
    { university: 'Marmara Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'İstanbul', field: 'DIL', minScore: 460, minRank: 70432, quota: 75 },
    { university: 'Selçuk Üniversitesi', program: 'Mütercim Tercümanlık (İngilizce)', city: 'Konya', field: 'DIL', minScore: 445, minRank: 95832, quota: 70 },

    // ============================================
    // DİL - ALMAN DİLİ VE EDEBİYATI
    // ============================================
    { university: 'İstanbul Üniversitesi', program: 'Alman Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 475, minRank: 73348, quota: 70 },
    { university: 'Ankara Üniversitesi', program: 'Alman Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 62423, quota: 65 },
    { university: 'Hacettepe Üniversitesi', program: 'Alman Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 480, minRank: 51701, quota: 60 },
    { university: 'Ege Üniversitesi', program: 'Alman Dili ve Edebiyatı', city: 'İzmir', field: 'DIL', minScore: 465, minRank: 79183, quota: 55 },
    { university: 'Marmara Üniversitesi', program: 'Alman Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 460, minRank: 77134, quota: 60 },

    // ============================================
    // DİL - FRANSIZ DİLİ VE EDEBİYATI
    // ============================================
    { university: 'İstanbul Üniversitesi', program: 'Fransız Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 475, minRank: 68332, quota: 65 },
    { university: 'Ankara Üniversitesi', program: 'Fransız Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 67124, quota: 60 },
    { university: 'Hacettepe Üniversitesi', program: 'Fransız Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 480, minRank: 46091, quota: 55 },
    { university: 'Galatasaray Üniversitesi', program: 'Fransız Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 485, minRank: 48939, quota: 50 },
    { university: 'Ege Üniversitesi', program: 'Fransız Dili ve Edebiyatı', city: 'İzmir', field: 'DIL', minScore: 465, minRank: 71940, quota: 55 },

    // ============================================
    // DİL - DİĞER DİLLER
    // ============================================
    { university: 'Ankara Üniversitesi', program: 'İspanyol Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 55018, quota: 50 },
    { university: 'İstanbul Üniversitesi', program: 'İspanyol Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 465, minRank: 59297, quota: 55 },
    { university: 'Hacettepe Üniversitesi', program: 'İspanyol Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 475, minRank: 55126, quota: 45 },
    { university: 'Ankara Üniversitesi', program: 'Rus Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 465, minRank: 74398, quota: 50 },
    { university: 'İstanbul Üniversitesi', program: 'Rus Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 460, minRank: 57718, quota: 55 },
    { university: 'Ankara Üniversitesi', program: 'Arap Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 460, minRank: 79798, quota: 55 },
    { university: 'İstanbul Üniversitesi', program: 'Arap Dili ve Edebiyatı', city: 'İstanbul', field: 'DIL', minScore: 465, minRank: 68286, quota: 60 },
    { university: 'Ankara Üniversitesi', program: 'Çin Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 74110, quota: 45 },
    { university: 'Ankara Üniversitesi', program: 'Japon Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 81344, quota: 40 },
    { university: 'Ankara Üniversitesi', program: 'Kore Dili ve Edebiyatı', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 71889, quota: 40 },

    // ============================================
    // BÖLGESEL VE DÜŞÜK PUANLI ÜNİVERSİTELER
    // Orta ve alt seviye öğrenciler için
    // ============================================

    // Bölgesel Üniversiteler - SAY
    { university: 'Ağrı İbrahim Çeçen Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Ağrı', field: 'SAY', minScore: 380, minRank: 186123, quota: 60 },
    { university: 'Ağrı İbrahim Çeçen Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Ağrı', field: 'SAY', minScore: 370, minRank: 215244, quota: 70 },
    { university: 'Ağrı İbrahim Çeçen Üniversitesi', program: 'Hemşirelik', city: 'Ağrı', field: 'SAY', minScore: 350, minRank: 209362, quota: 50 },
    { university: 'Aksaray Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Aksaray', field: 'SAY', minScore: 385, minRank: 190943, quota: 65 },
    { university: 'Aksaray Üniversitesi', program: 'Makine Mühendisliği', city: 'Aksaray', field: 'SAY', minScore: 375, minRank: 227862, quota: 70 },
    { university: 'Aksaray Üniversitesi', program: 'Hemşirelik', city: 'Aksaray', field: 'SAY', minScore: 355, minRank: 223979, quota: 55 },
    { university: 'Amasya Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Amasya', field: 'SAY', minScore: 380, minRank: 195117, quota: 60 },
    { university: 'Amasya Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Amasya', field: 'SAY', minScore: 370, minRank: 233707, quota: 65 },
    { university: 'Amasya Üniversitesi', program: 'Hemşirelik', city: 'Amasya', field: 'SAY', minScore: 352, minRank: 224516, quota: 50 },
    { university: 'Ardahan Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Ardahan', field: 'SAY', minScore: 375, minRank: 216710, quota: 55 },
    { university: 'Ardahan Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Ardahan', field: 'SAY', minScore: 365, minRank: 212232, quota: 60 },
    { university: 'Artvin Çoruh Üniversitesi', program: 'Orman Mühendisliği', city: 'Artvin', field: 'SAY', minScore: 370, minRank: 217521, quota: 65 },
    { university: 'Artvin Çoruh Üniversitesi', program: 'Hemşirelik', city: 'Artvin', field: 'SAY', minScore: 348, minRank: 216083, quota: 45 },
    { university: 'Bartın Üniversitesi', program: 'Orman Endüstri Mühendisliği', city: 'Bartın', field: 'SAY', minScore: 368, minRank: 206873, quota: 60 },
    { university: 'Bartın Üniversitesi', program: 'Hemşirelik', city: 'Bartın', field: 'SAY', minScore: 350, minRank: 218492, quota: 50 },
    { university: 'Bayburt Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Bayburt', field: 'SAY', minScore: 365, minRank: 209112, quota: 55 },
    { university: 'Bayburt Üniversitesi', program: 'Hemşirelik', city: 'Bayburt', field: 'SAY', minScore: 345, minRank: 228608, quota: 45 },
    { university: 'Bilecik Şeyh Edebali Üniversitesi', program: 'Makine Mühendisliği', city: 'Bilecik', field: 'SAY', minScore: 378, minRank: 212472, quota: 65 },
    { university: 'Bilecik Şeyh Edebali Üniversitesi', program: 'Hemşirelik', city: 'Bilecik', field: 'SAY', minScore: 353, minRank: 213568, quota: 50 },
    { university: 'Bingöl Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Bingöl', field: 'SAY', minScore: 368, minRank: 211353, quota: 60 },
    { university: 'Bingöl Üniversitesi', program: 'Hemşirelik', city: 'Bingöl', field: 'SAY', minScore: 347, minRank: 211906, quota: 45 },
    { university: 'Bitlis Eren Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Bitlis', field: 'SAY', minScore: 365, minRank: 211463, quota: 55 },
    { university: 'Bitlis Eren Üniversitesi', program: 'Hemşirelik', city: 'Bitlis', field: 'SAY', minScore: 345, minRank: 217911, quota: 45 },
    { university: 'Çankırı Karatekin Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Çankırı', field: 'SAY', minScore: 382, minRank: 178637, quota: 60 },
    { university: 'Çankırı Karatekin Üniversitesi', program: 'Hemşirelik', city: 'Çankırı', field: 'SAY', minScore: 351, minRank: 209833, quota: 50 },
    { university: 'Giresun Üniversitesi', program: 'Deniz Bilimleri ve Teknolojisi Mühendisliği', city: 'Giresun', field: 'SAY', minScore: 372, minRank: 230895, quota: 55 },
    { university: 'Giresun Üniversitesi', program: 'Hemşirelik', city: 'Giresun', field: 'SAY', minScore: 349, minRank: 218466, quota: 48 },
    { university: 'Gümüşhane Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Gümüşhane', field: 'SAY', minScore: 370, minRank: 232386, quota: 60 },
    { university: 'Gümüşhane Üniversitesi', program: 'Hemşirelik', city: 'Gümüşhane', field: 'SAY', minScore: 346, minRank: 220507, quota: 45 },
    { university: 'Hakkari Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Hakkari', field: 'SAY', minScore: 363, minRank: 227556, quota: 50 },
    { university: 'Hakkari Üniversitesi', program: 'Hemşirelik', city: 'Hakkari', field: 'SAY', minScore: 343, minRank: 224806, quota: 40 },
    { university: 'Iğdır Üniversitesi', program: 'Ziraat Mühendisliği', city: 'Iğdır', field: 'SAY', minScore: 365, minRank: 228104, quota: 55 },
    { university: 'Iğdır Üniversitesi', program: 'Hemşirelik', city: 'Iğdır', field: 'SAY', minScore: 344, minRank: 219858, quota: 42 },
    { university: 'Karabük Üniversitesi', program: 'Makine Mühendisliği', city: 'Karabük', field: 'SAY', minScore: 385, minRank: 202438, quota: 70 },
    { university: 'Karabük Üniversitesi', program: 'Hemşirelik', city: 'Karabük', field: 'SAY', minScore: 356, minRank: 208749, quota: 55 },
    { university: 'Karaman Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Karaman', field: 'SAY', minScore: 380, minRank: 190020, quota: 60 },
    { university: 'Karaman Üniversitesi', program: 'Hemşirelik', city: 'Karaman', field: 'SAY', minScore: 352, minRank: 230382, quota: 50 },
    { university: 'Kastamonu Üniversitesi', program: 'Orman Mühendisliği', city: 'Kastamonu', field: 'SAY', minScore: 375, minRank: 220320, quota: 65 },
    { university: 'Kastamonu Üniversitesi', program: 'Hemşirelik', city: 'Kastamonu', field: 'SAY', minScore: 354, minRank: 215159, quota: 52 },

    // Bölgesel Üniversiteler - EA
    { university: 'Ağrı İbrahim Çeçen Üniversitesi', program: 'İşletme', city: 'Ağrı', field: 'EA', minScore: 360, minRank: 223655, quota: 80 },
    { university: 'Ağrı İbrahim Çeçen Üniversitesi', program: 'İktisat', city: 'Ağrı', field: 'EA', minScore: 355, minRank: 214746, quota: 70 },
    { university: 'Aksaray Üniversitesi', program: 'İşletme', city: 'Aksaray', field: 'EA', minScore: 365, minRank: 232626, quota: 85 },
    { university: 'Aksaray Üniversitesi', program: 'İktisat', city: 'Aksaray', field: 'EA', minScore: 358, minRank: 212161, quota: 75 },
    { university: 'Amasya Üniversitesi', program: 'İşletme', city: 'Amasya', field: 'EA', minScore: 368, minRank: 223145, quota: 80 },
    { university: 'Amasya Üniversitesi', program: 'İktisat', city: 'Amasya', field: 'EA', minScore: 360, minRank: 222265, quota: 70 },
    { university: 'Ardahan Üniversitesi', program: 'İşletme', city: 'Ardahan', field: 'EA', minScore: 358, minRank: 227377, quota: 75 },
    { university: 'Artvin Çoruh Üniversitesi', program: 'İşletme', city: 'Artvin', field: 'EA', minScore: 360, minRank: 217408, quota: 70 },
    { university: 'Bartın Üniversitesi', program: 'İşletme', city: 'Bartın', field: 'EA', minScore: 363, minRank: 227674, quota: 75 },
    { university: 'Bayburt Üniversitesi', program: 'İşletme', city: 'Bayburt', field: 'EA', minScore: 356, minRank: 206419, quota: 70 },
    { university: 'Bilecik Şeyh Edebali Üniversitesi', program: 'İşletme', city: 'Bilecik', field: 'EA', minScore: 366, minRank: 212571, quota: 80 },
    { university: 'Bingöl Üniversitesi', program: 'İşletme', city: 'Bingöl', field: 'EA', minScore: 359, minRank: 232861, quota: 75 },
    { university: 'Bitlis Eren Üniversitesi', program: 'İşletme', city: 'Bitlis', field: 'EA', minScore: 357, minRank: 206459, quota: 70 },
    { university: 'Çankırı Karatekin Üniversitesi', program: 'İşletme', city: 'Çankırı', field: 'EA', minScore: 364, minRank: 234560, quota: 78 },
    { university: 'Giresun Üniversitesi', program: 'İşletme', city: 'Giresun', field: 'EA', minScore: 362, minRank: 226084, quota: 75 },
    { university: 'Gümüşhane Üniversitesi', program: 'İşletme', city: 'Gümüşhane', field: 'EA', minScore: 360, minRank: 233581, quota: 72 },
    { university: 'Karabük Üniversitesi', program: 'İşletme', city: 'Karabük', field: 'EA', minScore: 370, minRank: 208246, quota: 85 },
    { university: 'Karaman Üniversitesi', program: 'İşletme', city: 'Karaman', field: 'EA', minScore: 365, minRank: 217803, quota: 80 },
    { university: 'Kastamonu Üniversitesi', program: 'İşletme', city: 'Kastamonu', field: 'EA', minScore: 367, minRank: 210364, quota: 82 },

    // Bölgesel Üniversiteler - SOZ
    { university: 'Ağrı İbrahim Çeçen Üniversitesi', program: 'Türkçe Öğretmenliği', city: 'Ağrı', field: 'SOZ', minScore: 365, minRank: 231051, quota: 70 },
    { university: 'Ağrı İbrahim Çeçen Üniversitesi', program: 'Sosyoloji', city: 'Ağrı', field: 'SOZ', minScore: 355, minRank: 219726, quota: 60 },
    { university: 'Aksaray Üniversitesi', program: 'Türkçe Öğretmenliği', city: 'Aksaray', field: 'SOZ', minScore: 368, minRank: 232237, quota: 75 },
    { university: 'Aksaray Üniversitesi', program: 'Sosyoloji', city: 'Aksaray', field: 'SOZ', minScore: 358, minRank: 212231, quota: 65 },
    { university: 'Amasya Üniversitesi', program: 'Türkçe Öğretmenliği', city: 'Amasya', field: 'SOZ', minScore: 370, minRank: 219514, quota: 78 },
    { university: 'Amasya Üniversitesi', program: 'Tarih', city: 'Amasya', field: 'SOZ', minScore: 360, minRank: 209204, quota: 60 },
    { university: 'Ardahan Üniversitesi', program: 'Türkçe Öğretmenliği', city: 'Ardahan', field: 'SOZ', minScore: 363, minRank: 232292, quota: 65 },
    { university: 'Artvin Çoruh Üniversitesi', program: 'Sosyal Bilgiler Öğretmenliği', city: 'Artvin', field: 'SOZ', minScore: 362, minRank: 227940, quota: 70 },
    { university: 'Bartın Üniversitesi', program: 'Türkçe Öğretmenliği', city: 'Bartın', field: 'SOZ', minScore: 366, minRank: 216748, quota: 72 },
    { university: 'Bayburt Üniversitesi', program: 'Türkçe Öğretmenliği', city: 'Bayburt', field: 'SOZ', minScore: 361, minRank: 207226, quota: 65 },
    { university: 'Bilecik Şeyh Edebali Üniversitesi', program: 'Türkçe Öğretmenliği', city: 'Bilecik', field: 'SOZ', minScore: 369, minRank: 221298, quota: 75 },
    { university: 'Bingöl Üniversitesi', program: 'Türkçe Öğretmenliği', city: 'Bingöl', field: 'SOZ', minScore: 364, minRank: 234579, quota: 68 },
    { university: 'Bitlis Eren Üniversitesi', program: 'Türkçe Öğretmenliği', city: 'Bitlis', field: 'SOZ', minScore: 362, minRank: 215048, quota: 65 },
    { university: 'Çankırı Karatekin Üniversitesi', program: 'Türkçe Öğretmenliği', city: 'Çankırı', field: 'SOZ', minScore: 367, minRank: 226801, quota: 73 },
    { university: 'Giresun Üniversitesi', program: 'Türkçe Öğretmenliği', city: 'Giresun', field: 'SOZ', minScore: 365, minRank: 233225, quota: 70 },
    { university: 'Gümüşhane Üniversitesi', program: 'Türkçe Öğretmenliği', city: 'Gümüşhane', field: 'SOZ', minScore: 363, minRank: 233259, quota: 68 },
    { university: 'Karabük Üniversitesi', program: 'Türkçe Öğretmenliği', city: 'Karabük', field: 'SOZ', minScore: 372, minRank: 226158, quota: 80 },
    { university: 'Karaman Üniversitesi', program: 'Türkçe Öğretmenliği', city: 'Karaman', field: 'SOZ', minScore: 368, minRank: 212249, quota: 75 },
    { university: 'Kastamonu Üniversitesi', program: 'Türkçe Öğretmenliği', city: 'Kastamonu', field: 'SOZ', minScore: 370, minRank: 228906, quota: 77 },

    // Vakıf Üniversiteleri - Orta Seviye
    { university: 'İstanbul Aydın Üniversitesi (Vakıf)', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 370, minRank: 205269, quota: 60 },
    { university: 'İstanbul Aydın Üniversitesi (Vakıf)', program: 'İşletme', city: 'İstanbul', field: 'EA', minScore: 365, minRank: 234647, quota: 80 },
    { university: 'İstanbul Gelişim Üniversitesi (Vakıf)', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 368, minRank: 229965, quota: 55 },
    { university: 'İstanbul Gelişim Üniversitesi (Vakıf)', program: 'İşletme', city: 'İstanbul', field: 'EA', minScore: 363, minRank: 223914, quota: 75 },
    { university: 'Beykent Üniversitesi (Vakıf)', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 365, minRank: 206297, quota: 50 },
    { university: 'Beykent Üniversitesi (Vakıf)', program: 'İşletme', city: 'İstanbul', field: 'EA', minScore: 360, minRank: 207783, quota: 70 },
    { university: 'Haliç Üniversitesi (Vakıf)', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 372, minRank: 208140, quota: 55 },
    { university: 'Haliç Üniversitesi (Vakıf)', program: 'İşletme', city: 'İstanbul', field: 'EA', minScore: 367, minRank: 210023, quota: 75 },
    { university: 'Maltepe Üniversitesi (Vakıf)', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 375, minRank: 221719, quota: 58 },
    { university: 'Maltepe Üniversitesi (Vakıf)', program: 'İşletme', city: 'İstanbul', field: 'EA', minScore: 370, minRank: 216832, quota: 78 },
    { university: 'Atılım Üniversitesi (Vakıf)', program: 'Bilgisayar Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 395, minRank: 193731, quota: 65 },
    { university: 'Atılım Üniversitesi (Vakıf)', program: 'İşletme', city: 'Ankara', field: 'EA', minScore: 385, minRank: 204806, quota: 80 },
    { university: 'Çankaya Üniversitesi (Vakıf)', program: 'Bilgisayar Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 390, minRank: 180051, quota: 60 },
    { university: 'Çankaya Üniversitesi (Vakıf)', program: 'İşletme', city: 'Ankara', field: 'EA', minScore: 380, minRank: 181108, quota: 75 },

    // ============================================
    // SAY - OTOMOTİV MÜHENDİSLİĞİ
    // ============================================
    { university: 'Uludağ Üniversitesi', program: 'Otomotiv Mühendisliği', city: 'Bursa', field: 'SAY', minScore: 400, minRank: 153877, quota: 90 },
    { university: 'Kocaeli Üniversitesi', program: 'Otomotiv Mühendisliği', city: 'Kocaeli', field: 'SAY', minScore: 395, minRank: 201068, quota: 85 },
    { university: 'Sakarya Üniversitesi', program: 'Otomotiv Mühendisliği', city: 'Sakarya', field: 'SAY', minScore: 390, minRank: 197704, quota: 80 },
    { university: 'Gazi Üniversitesi', program: 'Otomotiv Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 420, minRank: 123368, quota: 95 },
    { university: 'Pamukkale Üniversitesi', program: 'Otomotiv Mühendisliği', city: 'Denizli', field: 'SAY', minScore: 385, minRank: 204251, quota: 75 },
    { university: 'Afyon Kocatepe Üniversitesi', program: 'Otomotiv Mühendisliği', city: 'Afyonkarahisar', field: 'SAY', minScore: 380, minRank: 187831, quota: 70 },
    { university: 'Düzce Üniversitesi', program: 'Otomotiv Mühendisliği', city: 'Düzce', field: 'SAY', minScore: 375, minRank: 215072, quota: 65 },
    { university: 'Bolu Abant İzzet Baysal Üniversitesi', program: 'Otomotiv Mühendisliği', city: 'Bolu', field: 'SAY', minScore: 380, minRank: 196939, quota: 70 },
    { university: 'Manisa Celal Bayar Üniversitesi', program: 'Otomotiv Mühendisliği', city: 'Manisa', field: 'SAY', minScore: 385, minRank: 187601, quota: 75 },
    { university: 'Karabük Üniversitesi', program: 'Otomotiv Mühendisliği', city: 'Karabük', field: 'SAY', minScore: 390, minRank: 177323, quota: 80 },
    { university: 'Tokat Gaziosmanpaşa Üniversitesi', program: 'Otomotiv Mühendisliği', city: 'Tokat', field: 'SAY', minScore: 370, minRank: 234134, quota: 60 },
    { university: 'Kırıkkale Üniversitesi', program: 'Otomotiv Mühendisliği', city: 'Kırıkkale', field: 'SAY', minScore: 375, minRank: 223983, quota: 65 },
    { university: 'Aksaray Üniversitesi', program: 'Otomotiv Mühendisliği', city: 'Aksaray', field: 'SAY', minScore: 365, minRank: 223999, quota: 60 },
    { university: 'Çankırı Karatekin Üniversitesi', program: 'Otomotiv Mühendisliği', city: 'Çankırı', field: 'SAY', minScore: 370, minRank: 223417, quota: 65 },
    { university: 'Bursa Teknik Üniversitesi', program: 'Otomotiv Mühendisliği', city: 'Bursa', field: 'SAY', minScore: 405, minRank: 153404, quota: 85 },
    // ============================================
    // BİLGİSAYAR MÜHENDİSLİĞİ - EK ÜNİVERSİTELER
    // ============================================
    { university: 'İstanbul Teknik Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 510, minRank: 18099, quota: 150 },
    { university: 'Orta Doğu Teknik Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 525, minRank: 5248, quota: 100 },
    { university: 'Mersin Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Mersin', field: 'SAY', minScore: 440, minRank: 109712, quota: 60 },
    { university: 'Gaziantep Üniversitesi', program: 'Bilgisayar Mühendisliği', city: 'Gaziantep', field: 'SAY', minScore: 435, minRank: 122666, quota: 55 },
    // ============================================
    // ELEKTRİK-ELEKTRONİK MÜHENDİSLİĞİ
    // ============================================
    { university: 'Orta Doğu Teknik Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 520, minRank: 5556, quota: 110 },
    { university: 'İstanbul Teknik Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 505, minRank: 20912, quota: 130 },
    { university: 'Ankara Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 490, minRank: 51233, quota: 80 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 470, minRank: 61184, quota: 70 },
    { university: 'Erciyes Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Kayseri', field: 'SAY', minScore: 450, minRank: 93456, quota: 65 },
    { university: 'Selçuk Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Konya', field: 'SAY', minScore: 445, minRank: 91869, quota: 60 },
    { university: 'Akdeniz Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Antalya', field: 'SAY', minScore: 450, minRank: 109506, quota: 60 },
    { university: 'Çukurova Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Adana', field: 'SAY', minScore: 445, minRank: 85099, quota: 55 },
    { university: 'Fırat Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Elazığ', field: 'SAY', minScore: 425, minRank: 120348, quota: 50 },
    { university: 'Atatürk Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Erzurum', field: 'SAY', minScore: 420, minRank: 132622, quota: 55 },
    { university: 'Karadeniz Teknik Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Trabzon', field: 'SAY', minScore: 430, minRank: 138971, quota: 60 },
    { university: 'Gaziantep Üniversitesi', program: 'Elektrik-Elektronik Mühendisliği', city: 'Gaziantep', field: 'SAY', minScore: 430, minRank: 133480, quota: 55 },

    // ============================================
    // MAKİNE MÜHENDİSLİĞİ
    // ============================================
    { university: 'Orta Doğu Teknik Üniversitesi', program: 'Makine Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 515, minRank: 21946, quota: 120 },
    { university: 'İstanbul Teknik Üniversitesi', program: 'Makine Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 500, minRank: 14016, quota: 140 },
    { university: 'Hacettepe Üniversitesi', program: 'Makine Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 495, minRank: 46167, quota: 90 },
    { university: 'Gebze Teknik Üniversitesi', program: 'Makine Mühendisliği', city: 'Kocaeli', field: 'SAY', minScore: 485, minRank: 37860, quota: 95 },
    { university: 'Akdeniz Üniversitesi', program: 'Makine Mühendisliği', city: 'Antalya', field: 'SAY', minScore: 445, minRank: 94292, quota: 70 },
    { university: 'Çukurova Üniversitesi', program: 'Makine Mühendisliği', city: 'Adana', field: 'SAY', minScore: 440, minRank: 91543, quota: 65 },
    { university: 'Fırat Üniversitesi', program: 'Makine Mühendisliği', city: 'Elazığ', field: 'SAY', minScore: 420, minRank: 126746, quota: 60 },
    { university: 'Atatürk Üniversitesi', program: 'Makine Mühendisliği', city: 'Erzurum', field: 'SAY', minScore: 415, minRank: 170241, quota: 65 },
    { university: 'Karadeniz Teknik Üniversitesi', program: 'Makine Mühendisliği', city: 'Trabzon', field: 'SAY', minScore: 425, minRank: 123946, quota: 70 },
    { university: 'Gaziantep Üniversitesi', program: 'Makine Mühendisliği', city: 'Gaziantep', field: 'SAY', minScore: 425, minRank: 139545, quota: 65 },
    { university: 'Pamukkale Üniversitesi', program: 'Makine Mühendisliği', city: 'Denizli', field: 'SAY', minScore: 435, minRank: 135742, quota: 60 },

    // ============================================
    // İNŞAAT MÜHENDİSLİĞİ
    // ============================================
    { university: 'Orta Doğu Teknik Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 510, minRank: 14775, quota: 110 },
    { university: 'İstanbul Teknik Üniversitesi', program: 'İnşaat Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 495, minRank: 32829, quota: 130 },
    { university: 'Hacettepe Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 490, minRank: 49375, quota: 85 },
    { university: 'Erciyes Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Kayseri', field: 'SAY', minScore: 440, minRank: 101553, quota: 70 },
    { university: 'Kocaeli Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Kocaeli', field: 'SAY', minScore: 450, minRank: 96581, quota: 75 },
    { university: 'Sakarya Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Sakarya', field: 'SAY', minScore: 445, minRank: 110595, quota: 70 },
    { university: 'Akdeniz Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Antalya', field: 'SAY', minScore: 440, minRank: 112854, quota: 65 },
    { university: 'Çukurova Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Adana', field: 'SAY', minScore: 435, minRank: 130680, quota: 60 },
    { university: 'Fırat Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Elazığ', field: 'SAY', minScore: 415, minRank: 161873, quota: 55 },
    { university: 'Atatürk Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Erzurum', field: 'SAY', minScore: 410, minRank: 159008, quota: 60 },
    { university: 'Gaziantep Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Gaziantep', field: 'SAY', minScore: 420, minRank: 124273, quota: 60 },
    { university: 'Pamukkale Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Denizli', field: 'SAY', minScore: 430, minRank: 135809, quota: 55 },
    { university: 'Süleyman Demirel Üniversitesi', program: 'İnşaat Mühendisliği', city: 'Isparta', field: 'SAY', minScore: 425, minRank: 141174, quota: 50 },

    // ============================================
    // ENDÜSTRİ MÜHENDİSLİĞİ
    // ============================================
    { university: 'Orta Doğu Teknik Üniversitesi', program: 'Endüstri Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 520, minRank: 3415, quota: 95 },
    { university: 'İstanbul Teknik Üniversitesi', program: 'Endüstri Mühendisliği', city: 'İstanbul', field: 'SAY', minScore: 505, minRank: 29407, quota: 110 },
    { university: 'Hacettepe Üniversitesi', program: 'Endüstri Mühendisliği', city: 'Ankara', field: 'SAY', minScore: 500, minRank: 17944, quota: 75 },
    { university: 'Ege Üniversitesi', program: 'Endüstri Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 475, minRank: 55701, quota: 70 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Endüstri Mühendisliği', city: 'İzmir', field: 'SAY', minScore: 470, minRank: 61209, quota: 65 },
    { university: 'Erciyes Üniversitesi', program: 'Endüstri Mühendisliği', city: 'Kayseri', field: 'SAY', minScore: 450, minRank: 92310, quota: 60 },
    { university: 'Selçuk Üniversitesi', program: 'Endüstri Mühendisliği', city: 'Konya', field: 'SAY', minScore: 445, minRank: 98978, quota: 55 },
    { university: 'Akdeniz Üniversitesi', program: 'Endüstri Mühendisliği', city: 'Antalya', field: 'SAY', minScore: 450, minRank: 107298, quota: 55 },
    { university: 'Çukurova Üniversitesi', program: 'Endüstri Mühendisliği', city: 'Adana', field: 'SAY', minScore: 445, minRank: 99588, quota: 50 },
    { university: 'Gaziantep Üniversitesi', program: 'Endüstri Mühendisliği', city: 'Gaziantep', field: 'SAY', minScore: 440, minRank: 99350, quota: 50 },

    // ============================================
    // HEMŞİRELİK
    // ============================================
    { university: 'Hacettepe Üniversitesi', program: 'Hemşirelik', city: 'Ankara', field: 'SAY', minScore: 480, minRank: 44631, quota: 120 },
    { university: 'İstanbul Üniversitesi', program: 'Hemşirelik', city: 'İstanbul', field: 'SAY', minScore: 475, minRank: 65705, quota: 130 },
    { university: 'Ankara Üniversitesi', program: 'Hemşirelik', city: 'Ankara', field: 'SAY', minScore: 470, minRank: 73834, quota: 110 },
    { university: 'Ege Üniversitesi', program: 'Hemşirelik', city: 'İzmir', field: 'SAY', minScore: 465, minRank: 75005, quota: 100 },
    { university: 'Marmara Üniversitesi', program: 'Hemşirelik', city: 'İstanbul', field: 'SAY', minScore: 460, minRank: 61447, quota: 95 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Hemşirelik', city: 'İzmir', field: 'SAY', minScore: 455, minRank: 107038, quota: 90 },
    { university: 'Gazi Üniversitesi', program: 'Hemşirelik', city: 'Ankara', field: 'SAY', minScore: 450, minRank: 87083, quota: 100 },
    { university: 'Akdeniz Üniversitesi', program: 'Hemşirelik', city: 'Antalya', field: 'SAY', minScore: 445, minRank: 94550, quota: 85 },
    { university: 'Erciyes Üniversitesi', program: 'Hemşirelik', city: 'Kayseri', field: 'SAY', minScore: 440, minRank: 98072, quota: 80 },
    { university: 'Selçuk Üniversitesi', program: 'Hemşirelik', city: 'Konya', field: 'SAY', minScore: 435, minRank: 129441, quota: 75 },
    { university: 'Çukurova Üniversitesi', program: 'Hemşirelik', city: 'Adana', field: 'SAY', minScore: 430, minRank: 126807, quota: 70 },
    { university: 'Ondokuz Mayıs Üniversitesi', program: 'Hemşirelik', city: 'Samsun', field: 'SAY', minScore: 425, minRank: 119823, quota: 75 },
    { university: 'Atatürk Üniversitesi', program: 'Hemşirelik', city: 'Erzurum', field: 'SAY', minScore: 420, minRank: 141238, quota: 70 },
    { university: 'Karadeniz Teknik Üniversitesi', program: 'Hemşirelik', city: 'Trabzon', field: 'SAY', minScore: 425, minRank: 120378, quota: 75 },
    { university: 'Fırat Üniversitesi', program: 'Hemşirelik', city: 'Elazığ', field: 'SAY', minScore: 415, minRank: 174394, quota: 65 },
    { university: 'Dicle Üniversitesi', program: 'Hemşirelik', city: 'Diyarbakır', field: 'SAY', minScore: 410, minRank: 165401, quota: 70 },
    { university: 'Gaziantep Üniversitesi', program: 'Hemşirelik', city: 'Gaziantep', field: 'SAY', minScore: 420, minRank: 127913, quota: 75 },
    { university: 'Pamukkale Üniversitesi', program: 'Hemşirelik', city: 'Denizli', field: 'SAY', minScore: 425, minRank: 121115, quota: 70 },
    { university: 'Kocaeli Üniversitesi', program: 'Hemşirelik', city: 'Kocaeli', field: 'SAY', minScore: 435, minRank: 144403, quota: 80 },
    { university: 'Sakarya Üniversitesi', program: 'Hemşirelik', city: 'Sakarya', field: 'SAY', minScore: 430, minRank: 123618, quota: 75 },
    { university: 'Mersin Üniversitesi', program: 'Hemşirelik', city: 'Mersin', field: 'SAY', minScore: 425, minRank: 134411, quota: 70 },

    // ============================================
    // FİZYOTERAPİ VE REHABİLİTASYON
    // ============================================
    { university: 'Hacettepe Üniversitesi', program: 'Fizyoterapi ve Rehabilitasyon', city: 'Ankara', field: 'SAY', minScore: 490, minRank: 35925, quota: 60 },
    { university: 'İstanbul Üniversitesi', program: 'Fizyoterapi ve Rehabilitasyon', city: 'İstanbul', field: 'SAY', minScore: 485, minRank: 37578, quota: 65 },
    { university: 'Ankara Üniversitesi', program: 'Fizyoterapi ve Rehabilitasyon', city: 'Ankara', field: 'SAY', minScore: 480, minRank: 41117, quota: 55 },
    { university: 'Ege Üniversitesi', program: 'Fizyoterapi ve Rehabilitasyon', city: 'İzmir', field: 'SAY', minScore: 475, minRank: 80838, quota: 50 },
    { university: 'Marmara Üniversitesi', program: 'Fizyoterapi ve Rehabilitasyon', city: 'İstanbul', field: 'SAY', minScore: 470, minRank: 82399, quota: 55 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Fizyoterapi ve Rehabilitasyon', city: 'İzmir', field: 'SAY', minScore: 465, minRank: 75372, quota: 50 },
    { university: 'Gazi Üniversitesi', program: 'Fizyoterapi ve Rehabilitasyon', city: 'Ankara', field: 'SAY', minScore: 460, minRank: 64245, quota: 60 },
    { university: 'Akdeniz Üniversitesi', program: 'Fizyoterapi ve Rehabilitasyon', city: 'Antalya', field: 'SAY', minScore: 455, minRank: 85725, quota: 45 },
    { university: 'Pamukkale Üniversitesi', program: 'Fizyoterapi ve Rehabilitasyon', city: 'Denizli', field: 'SAY', minScore: 450, minRank: 95614, quota: 50 },
    { university: 'Erciyes Üniversitesi', program: 'Fizyoterapi ve Rehabilitasyon', city: 'Kayseri', field: 'SAY', minScore: 445, minRank: 102764, quota: 45 },
    { university: 'Selçuk Üniversitesi', program: 'Fizyoterapi ve Rehabilitasyon', city: 'Konya', field: 'SAY', minScore: 440, minRank: 93236, quota: 40 },
    { university: 'Çukurova Üniversitesi', program: 'Fizyoterapi ve Rehabilitasyon', city: 'Adana', field: 'SAY', minScore: 435, minRank: 144174, quota: 45 },
    { university: 'Ondokuz Mayıs Üniversitesi', program: 'Fizyoterapi ve Rehabilitasyon', city: 'Samsun', field: 'SAY', minScore: 430, minRank: 139463, quota: 40 },
    { university: 'Atatürk Üniversitesi', program: 'Fizyoterapi ve Rehabilitasyon', city: 'Erzurum', field: 'SAY', minScore: 425, minRank: 144813, quota: 40 },
    { university: 'Karadeniz Teknik Üniversitesi', program: 'Fizyoterapi ve Rehabilitasyon', city: 'Trabzon', field: 'SAY', minScore: 430, minRank: 115349, quota: 45 },

    // ============================================
    // MATEMATİK ÖĞRETMENLİĞİ
    // ============================================
    { university: 'Hacettepe Üniversitesi', program: 'İlköğretim Matematik Öğretmenliği', city: 'Ankara', field: 'SAY', minScore: 470, minRank: 65930, quota: 80 },
    { university: 'Gazi Üniversitesi', program: 'İlköğretim Matematik Öğretmenliği', city: 'Ankara', field: 'SAY', minScore: 465, minRank: 67002, quota: 90 },
    { university: 'Marmara Üniversitesi', program: 'İlköğretim Matematik Öğretmenliği', city: 'İstanbul', field: 'SAY', minScore: 460, minRank: 59664, quota: 85 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'İlköğretim Matematik Öğretmenliği', city: 'İzmir', field: 'SAY', minScore: 455, minRank: 109614, quota: 75 },
    { university: 'Ege Üniversitesi', program: 'İlköğretim Matematik Öğretmenliği', city: 'İzmir', field: 'SAY', minScore: 450, minRank: 98409, quota: 70 },
    { university: 'Ankara Üniversitesi', program: 'İlköğretim Matematik Öğretmenliği', city: 'Ankara', field: 'SAY', minScore: 455, minRank: 111791, quota: 75 },
    { university: 'Erciyes Üniversitesi', program: 'İlköğretim Matematik Öğretmenliği', city: 'Kayseri', field: 'SAY', minScore: 440, minRank: 104501, quota: 65 },
    { university: 'Selçuk Üniversitesi', program: 'İlköğretim Matematik Öğretmenliği', city: 'Konya', field: 'SAY', minScore: 435, minRank: 142390, quota: 70 },
    { university: 'Akdeniz Üniversitesi', program: 'İlköğretim Matematik Öğretmenliği', city: 'Antalya', field: 'SAY', minScore: 445, minRank: 101555, quota: 65 },
    { university: 'Çukurova Üniversitesi', program: 'İlköğretim Matematik Öğretmenliği', city: 'Adana', field: 'SAY', minScore: 430, minRank: 120196, quota: 60 },
    { university: 'Ondokuz Mayıs Üniversitesi', program: 'İlköğretim Matematik Öğretmenliği', city: 'Samsun', field: 'SAY', minScore: 425, minRank: 127884, quota: 65 },
    { university: 'Atatürk Üniversitesi', program: 'İlköğretim Matematik Öğretmenliği', city: 'Erzurum', field: 'SAY', minScore: 420, minRank: 127245, quota: 60 },
    { university: 'Karadeniz Teknik Üniversitesi', program: 'İlköğretim Matematik Öğretmenliği', city: 'Trabzon', field: 'SAY', minScore: 425, minRank: 132919, quota: 65 },
    { university: 'Fırat Üniversitesi', program: 'İlköğretim Matematik Öğretmenliği', city: 'Elazığ', field: 'SAY', minScore: 415, minRank: 157227, quota: 55 },
    { university: 'Gaziantep Üniversitesi', program: 'İlköğretim Matematik Öğretmenliği', city: 'Gaziantep', field: 'SAY', minScore: 420, minRank: 138336, quota: 60 },

    // ============================================
    // FEN BİLGİSİ ÖĞRETMENLİĞİ
    // ============================================
    { university: 'Hacettepe Üniversitesi', program: 'Fen Bilgisi Öğretmenliği', city: 'Ankara', field: 'SAY', minScore: 465, minRank: 73166, quota: 75 },
    { university: 'Gazi Üniversitesi', program: 'Fen Bilgisi Öğretmenliği', city: 'Ankara', field: 'SAY', minScore: 460, minRank: 79326, quota: 85 },
    { university: 'Marmara Üniversitesi', program: 'Fen Bilgisi Öğretmenliği', city: 'İstanbul', field: 'SAY', minScore: 455, minRank: 111347, quota: 80 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Fen Bilgisi Öğretmenliği', city: 'İzmir', field: 'SAY', minScore: 450, minRank: 110971, quota: 70 },
    { university: 'Ege Üniversitesi', program: 'Fen Bilgisi Öğretmenliği', city: 'İzmir', field: 'SAY', minScore: 445, minRank: 111503, quota: 65 },
    { university: 'Ankara Üniversitesi', program: 'Fen Bilgisi Öğretmenliği', city: 'Ankara', field: 'SAY', minScore: 450, minRank: 111096, quota: 70 },
    { university: 'Erciyes Üniversitesi', program: 'Fen Bilgisi Öğretmenliği', city: 'Kayseri', field: 'SAY', minScore: 435, minRank: 136643, quota: 60 },
    { university: 'Selçuk Üniversitesi', program: 'Fen Bilgisi Öğretmenliği', city: 'Konya', field: 'SAY', minScore: 430, minRank: 144944, quota: 65 },
    { university: 'Akdeniz Üniversitesi', program: 'Fen Bilgisi Öğretmenliği', city: 'Antalya', field: 'SAY', minScore: 440, minRank: 91986, quota: 60 },
    { university: 'Çukurova Üniversitesi', program: 'Fen Bilgisi Öğretmenliği', city: 'Adana', field: 'SAY', minScore: 425, minRank: 128523, quota: 55 },
    { university: 'Ondokuz Mayıs Üniversitesi', program: 'Fen Bilgisi Öğretmenliği', city: 'Samsun', field: 'SAY', minScore: 420, minRank: 131841, quota: 60 },
    { university: 'Atatürk Üniversitesi', program: 'Fen Bilgisi Öğretmenliği', city: 'Erzurum', field: 'SAY', minScore: 415, minRank: 146042, quota: 55 },
    { university: 'Karadeniz Teknik Üniversitesi', program: 'Fen Bilgisi Öğretmenliği', city: 'Trabzon', field: 'SAY', minScore: 420, minRank: 120189, quota: 60 },
    { university: 'Fırat Üniversitesi', program: 'Fen Bilgisi Öğretmenliği', city: 'Elazığ', field: 'SAY', minScore: 410, minRank: 172748, quota: 50 },
    { university: 'Gaziantep Üniversitesi', program: 'Fen Bilgisi Öğretmenliği', city: 'Gaziantep', field: 'SAY', minScore: 415, minRank: 157079, quota: 55 },

    // ============================================
    // PSİKOLOJİ
    // ============================================
    { university: 'Boğaziçi Üniversitesi', program: 'Psikoloji', city: 'İstanbul', field: 'EA', minScore: 510, minRank: 26224, quota: 60 },
    { university: 'Orta Doğu Teknik Üniversitesi', program: 'Psikoloji', city: 'Ankara', field: 'EA', minScore: 505, minRank: 24425, quota: 75 },
    { university: 'Hacettepe Üniversitesi', program: 'Psikoloji', city: 'Ankara', field: 'EA', minScore: 500, minRank: 12659, quota: 70 },
    { university: 'İstanbul Üniversitesi', program: 'Psikoloji', city: 'İstanbul', field: 'EA', minScore: 495, minRank: 45252, quota: 80 },
    { university: 'Ankara Üniversitesi', program: 'Psikoloji', city: 'Ankara', field: 'EA', minScore: 490, minRank: 52596, quota: 75 },
    { university: 'Ege Üniversitesi', program: 'Psikoloji', city: 'İzmir', field: 'EA', minScore: 485, minRank: 52044, quota: 70 },
    { university: 'Marmara Üniversitesi', program: 'Psikoloji', city: 'İstanbul', field: 'EA', minScore: 480, minRank: 41367, quota: 75 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Psikoloji', city: 'İzmir', field: 'EA', minScore: 475, minRank: 60950, quota: 65 },
    { university: 'Gazi Üniversitesi', program: 'Psikoloji', city: 'Ankara', field: 'EA', minScore: 470, minRank: 66264, quota: 70 },
    { university: 'Akdeniz Üniversitesi', program: 'Psikoloji', city: 'Antalya', field: 'EA', minScore: 465, minRank: 57345, quota: 60 },
    { university: 'Erciyes Üniversitesi', program: 'Psikoloji', city: 'Kayseri', field: 'EA', minScore: 460, minRank: 61628, quota: 55 },
    { university: 'Selçuk Üniversitesi', program: 'Psikoloji', city: 'Konya', field: 'EA', minScore: 455, minRank: 86519, quota: 60 },
    { university: 'Çukurova Üniversitesi', program: 'Psikoloji', city: 'Adana', field: 'EA', minScore: 450, minRank: 112267, quota: 55 },
    { university: 'Ondokuz Mayıs Üniversitesi', program: 'Psikoloji', city: 'Samsun', field: 'EA', minScore: 445, minRank: 90445, quota: 50 },
    { university: 'Atatürk Üniversitesi', program: 'Psikoloji', city: 'Erzurum', field: 'EA', minScore: 440, minRank: 98785, quota: 50 },

    // ============================================
    // SOSYOLOJİ
    // ============================================
    { university: 'Orta Doğu Teknik Üniversitesi', program: 'Sosyoloji', city: 'Ankara', field: 'SOZ', minScore: 485, minRank: 34668, quota: 60 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'Sosyoloji', city: 'İzmir', field: 'SOZ', minScore: 455, minRank: 109762, quota: 50 },
    { university: 'Gazi Üniversitesi', program: 'Sosyoloji', city: 'Ankara', field: 'SOZ', minScore: 450, minRank: 103763, quota: 55 },
    { university: 'Akdeniz Üniversitesi', program: 'Sosyoloji', city: 'Antalya', field: 'SOZ', minScore: 445, minRank: 98619, quota: 45 },
    { university: 'Erciyes Üniversitesi', program: 'Sosyoloji', city: 'Kayseri', field: 'SOZ', minScore: 440, minRank: 97308, quota: 50 },
    { university: 'Selçuk Üniversitesi', program: 'Sosyoloji', city: 'Konya', field: 'SOZ', minScore: 435, minRank: 129495, quota: 45 },
    { university: 'Çukurova Üniversitesi', program: 'Sosyoloji', city: 'Adana', field: 'SOZ', minScore: 430, minRank: 122692, quota: 40 },
    { university: 'Ondokuz Mayıs Üniversitesi', program: 'Sosyoloji', city: 'Samsun', field: 'SOZ', minScore: 425, minRank: 135113, quota: 45 },
    { university: 'Atatürk Üniversitesi', program: 'Sosyoloji', city: 'Erzurum', field: 'SOZ', minScore: 420, minRank: 128781, quota: 40 },

    // ============================================
    // İNGİLİZCE ÖĞRETMENLİĞİ
    // ============================================
    { university: 'Boğaziçi Üniversitesi', program: 'İngilizce Öğretmenliği', city: 'İstanbul', field: 'DIL', minScore: 490, minRank: 37247, quota: 50 },
    { university: 'Hacettepe Üniversitesi', program: 'İngilizce Öğretmenliği', city: 'Ankara', field: 'DIL', minScore: 485, minRank: 53694, quota: 60 },
    { university: 'Orta Doğu Teknik Üniversitesi', program: 'İngilizce Öğretmenliği', city: 'Ankara', field: 'DIL', minScore: 480, minRank: 41855, quota: 55 },
    { university: 'Gazi Üniversitesi', program: 'İngilizce Öğretmenliği', city: 'Ankara', field: 'DIL', minScore: 475, minRank: 58780, quota: 70 },
    { university: 'Marmara Üniversitesi', program: 'İngilizce Öğretmenliği', city: 'İstanbul', field: 'DIL', minScore: 470, minRank: 63605, quota: 65 },
    { university: 'Ankara Üniversitesi', program: 'İngilizce Öğretmenliği', city: 'Ankara', field: 'DIL', minScore: 465, minRank: 56994, quota: 60 },
    { university: 'Dokuz Eylül Üniversitesi', program: 'İngilizce Öğretmenliği', city: 'İzmir', field: 'DIL', minScore: 460, minRank: 68651, quota: 55 },
    { university: 'Ege Üniversitesi', program: 'İngilizce Öğretmenliği', city: 'İzmir', field: 'DIL', minScore: 455, minRank: 105016, quota: 50 },
    { university: 'Akdeniz Üniversitesi', program: 'İngilizce Öğretmenliği', city: 'Antalya', field: 'DIL', minScore: 450, minRank: 94085, quota: 55 },
    { university: 'Erciyes Üniversitesi', program: 'İngilizce Öğretmenliği', city: 'Kayseri', field: 'DIL', minScore: 445, minRank: 106228, quota: 50 },
    { university: 'Selçuk Üniversitesi', program: 'İngilizce Öğretmenliği', city: 'Konya', field: 'DIL', minScore: 440, minRank: 102704, quota: 55 },
    { university: 'Çukurova Üniversitesi', program: 'İngilizce Öğretmenliği', city: 'Adana', field: 'DIL', minScore: 435, minRank: 144606, quota: 50 },
    { university: 'Ondokuz Mayıs Üniversitesi', program: 'İngilizce Öğretmenliği', city: 'Samsun', field: 'DIL', minScore: 430, minRank: 117188, quota: 45 },
    { university: 'Atatürk Üniversitesi', program: 'İngilizce Öğretmenliği', city: 'Erzurum', field: 'DIL', minScore: 425, minRank: 123412, quota: 50 },
    { university: 'Karadeniz Teknik Üniversitesi', program: 'İngilizce Öğretmenliği', city: 'Trabzon', field: 'DIL', minScore: 430, minRank: 137025, quota: 45 },
]




// Sıralamaya göre uygun bölümleri getir
export function getMatchingPrograms(rank: number, field: 'say' | 'ea' | 'soz' | 'dil', limit: number = 500): UniversityProgram[] {
    const fieldMap = {
        say: 'SAY',
        ea: 'EA',
        soz: 'SOZ',
        dil: 'DIL'
    }

    // Kullanıcının sıralaması programın minimum sıralamasından küçük veya eşit olmalı
    // Yani kullanıcı daha iyi sıralamada olmalı
    // %20 tolerans: Kullanıcı sıralaması biraz daha kötü olsa bile göster
    return universityPrograms
        .filter(p => p.field === fieldMap[field] && rank <= p.minRank * 1.2)
        .sort((a, b) => b.minScore - a.minScore)
        .slice(0, limit)
}


