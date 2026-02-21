import { UniversityProgram } from '@/types/yks'

// 2025 YKS taban puanlar─▒ ve s─▒ralamalar─▒ - Kapsaml─▒ T├╝rkiye ├£niversiteleri Veritaban─▒
// Not: Bu veriler 2025 YKS verilerine dayal─▒ tahmini de─şerlerdir
export const universityPrograms: UniversityProgram[] = [
    // ============================================
    // SAY (Say─▒sal) - TIP FAK├£LTELER─░
    // ============================================
    { university: 'Hacettepe ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Ankara', field: 'SAY', minScore: 560, minRank: 100, quota: 180 },
    { university: '─░stanbul ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: '─░stanbul', field: 'SAY', minScore: 555, minRank: 120, quota: 200 },
    { university: 'Ankara ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Ankara', field: 'SAY', minScore: 550, minRank: 150, quota: 190 },
    { university: 'Gazi ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Ankara', field: 'SAY', minScore: 545, minRank: 200, quota: 170 },
    { university: 'Ege ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: '─░zmir', field: 'SAY', minScore: 540, minRank: 250, quota: 180 },
    { university: 'Dokuz Eyl├╝l ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: '─░zmir', field: 'SAY', minScore: 535, minRank: 300, quota: 160 },
    { university: 'Marmara ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: '─░stanbul', field: 'SAY', minScore: 530, minRank: 400, quota: 150 },
    { university: '├çukurova ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Adana', field: 'SAY', minScore: 525, minRank: 500, quota: 140 },
    { university: 'Erciyes ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Kayseri', field: 'SAY', minScore: 520, minRank: 600, quota: 130 },
    { university: 'Sel├ğuk ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Konya', field: 'SAY', minScore: 515, minRank: 800, quota: 140 },
    { university: 'Uluda─ş ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Bursa', field: 'SAY', minScore: 510, minRank: 1000, quota: 130 },
    { university: 'Ondokuz May─▒s ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Samsun', field: 'SAY', minScore: 505, minRank: 1200, quota: 120 },
    { university: 'Pamukkale ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Denizli', field: 'SAY', minScore: 500, minRank: 1500, quota: 110 },
    { university: 'S├╝leyman Demirel ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Isparta', field: 'SAY', minScore: 495, minRank: 1800, quota: 100 },
    { university: 'F─▒rat ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Elaz─▒─ş', field: 'SAY', minScore: 490, minRank: 2000, quota: 110 },
    { university: 'Atat├╝rk ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Erzurum', field: 'SAY', minScore: 485, minRank: 2500, quota: 120 },
    { university: '─░n├Ân├╝ ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Malatya', field: 'SAY', minScore: 480, minRank: 3000, quota: 100 },
    { university: 'Dicle ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Diyarbak─▒r', field: 'SAY', minScore: 475, minRank: 3500, quota: 110 },
    { university: 'Gaziantep ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Gaziantep', field: 'SAY', minScore: 470, minRank: 4000, quota: 100 },
    { university: 'Akdeniz ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Antalya', field: 'SAY', minScore: 505, minRank: 1200, quota: 130 },
    { university: 'Karadeniz Teknik ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Trabzon', field: 'SAY', minScore: 490, minRank: 2000, quota: 110 },
    { university: 'Cumhuriyet ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Sivas', field: 'SAY', minScore: 475, minRank: 3500, quota: 95 },
    { university: 'Trakya ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Edirne', field: 'SAY', minScore: 485, minRank: 2500, quota: 100 },
    { university: 'Afyonkarahisar Sa─şl─▒k Bilimleri ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Afyonkarahisar', field: 'SAY', minScore: 465, minRank: 4500, quota: 90 },
    { university: 'Ad─▒yaman ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Ad─▒yaman', field: 'SAY', minScore: 460, minRank: 5000, quota: 85 },
    { university: 'Bal─▒kesir ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Bal─▒kesir', field: 'SAY', minScore: 470, minRank: 4000, quota: 95 },
    { university: 'B├╝lent Ecevit ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Zonguldak', field: 'SAY', minScore: 465, minRank: 4500, quota: 90 },
    { university: 'D├╝zce ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'D├╝zce', field: 'SAY', minScore: 460, minRank: 5000, quota: 85 },
    { university: 'Harran ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: '┼Şanl─▒urfa', field: 'SAY', minScore: 455, minRank: 5500, quota: 90 },
    { university: 'Kahramanmara┼ş S├╝t├ğ├╝ ─░mam ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Kahramanmara┼ş', field: 'SAY', minScore: 465, minRank: 4500, quota: 95 },
    { university: 'K─▒r─▒kkale ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'K─▒r─▒kkale', field: 'SAY', minScore: 460, minRank: 5000, quota: 85 },
    { university: 'Kocaeli ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Kocaeli', field: 'SAY', minScore: 480, minRank: 3000, quota: 110 },
    { university: 'Manisa Celal Bayar ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Manisa', field: 'SAY', minScore: 475, minRank: 3500, quota: 100 },
    { university: 'Mersin ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Mersin', field: 'SAY', minScore: 475, minRank: 3500, quota: 105 },
    { university: 'Mu─şla S─▒tk─▒ Ko├ğman ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Mu─şla', field: 'SAY', minScore: 470, minRank: 4000, quota: 95 },
    { university: 'Necmettin Erbakan ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Konya', field: 'SAY', minScore: 480, minRank: 3000, quota: 100 },
    { university: 'Ordu ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Ordu', field: 'SAY', minScore: 460, minRank: 5000, quota: 85 },
    { university: 'Recep Tayyip Erdo─şan ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Rize', field: 'SAY', minScore: 465, minRank: 4500, quota: 90 },
    { university: 'Sakarya ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Sakarya', field: 'SAY', minScore: 475, minRank: 3500, quota: 100 },
    { university: 'Sivas Cumhuriyet ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Sivas', field: 'SAY', minScore: 470, minRank: 4000, quota: 95 },
    { university: 'Tekirda─ş Nam─▒k Kemal ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Tekirda─ş', field: 'SAY', minScore: 470, minRank: 4000, quota: 90 },
    { university: 'Y├╝z├╝nc├╝ Y─▒l ├£niversitesi', program: 'T─▒p Fak├╝ltesi', city: 'Van', field: 'SAY', minScore: 455, minRank: 5500, quota: 95 },

    // ============================================
    // SAY - B─░LG─░SAYAR M├£HEND─░SL─░─Ş─░
    // ============================================
    { university: 'Bo─şazi├ği ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 550, minRank: 150, quota: 80 },
    { university: 'ODT├£', program: 'Bilgisayar M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 545, minRank: 200, quota: 120 },
    { university: '─░T├£', program: 'Bilgisayar M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 540, minRank: 250, quota: 100 },
    { university: 'Bilkent ├£niversitesi (Vak─▒f)', program: 'Bilgisayar M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 535, minRank: 300, quota: 70 },
    { university: 'Ko├ğ ├£niversitesi (Vak─▒f)', program: 'Bilgisayar M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 530, minRank: 350, quota: 60 },
    { university: 'Sabanc─▒ ├£niversitesi (Vak─▒f)', program: 'Bilgisayar M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 525, minRank: 400, quota: 65 },
    { university: 'Hacettepe ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 520, minRank: 600, quota: 95 },
    { university: 'Y─▒ld─▒z Teknik ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 510, minRank: 800, quota: 140 },
    { university: 'Ankara ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 505, minRank: 1000, quota: 100 },
    { university: '─░zmir Y├╝ksek Teknoloji Enstit├╝s├╝', program: 'Bilgisayar M├╝hendisli─şi', city: '─░zmir', field: 'SAY', minScore: 500, minRank: 1200, quota: 80 },
    { university: 'Gebze Teknik ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Kocaeli', field: 'SAY', minScore: 495, minRank: 1500, quota: 90 },
    { university: 'Ege ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: '─░zmir', field: 'SAY', minScore: 490, minRank: 1800, quota: 110 },
    { university: 'Dokuz Eyl├╝l ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: '─░zmir', field: 'SAY', minScore: 485, minRank: 2000, quota: 100 },
    { university: 'Gazi ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 480, minRank: 2500, quota: 120 },
    { university: 'Marmara ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 475, minRank: 3000, quota: 110 },
    { university: 'Erciyes ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Kayseri', field: 'SAY', minScore: 460, minRank: 4000, quota: 90 },
    { university: 'Sel├ğuk ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Konya', field: 'SAY', minScore: 455, minRank: 4500, quota: 100 },
    { university: 'Sakarya ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Sakarya', field: 'SAY', minScore: 450, minRank: 5000, quota: 95 },
    { university: 'Kocaeli ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Kocaeli', field: 'SAY', minScore: 445, minRank: 5500, quota: 100 },
    { university: 'Eski┼şehir Teknik ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Eski┼şehir', field: 'SAY', minScore: 440, minRank: 6000, quota: 85 },
    { university: 'Akdeniz ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Antalya', field: 'SAY', minScore: 455, minRank: 4500, quota: 95 },
    { university: 'Atat├╝rk ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Erzurum', field: 'SAY', minScore: 440, minRank: 6000, quota: 85 },
    { university: '├çukurova ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Adana', field: 'SAY', minScore: 450, minRank: 5000, quota: 90 },
    { university: 'F─▒rat ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Elaz─▒─ş', field: 'SAY', minScore: 435, minRank: 6500, quota: 80 },
    { university: 'Karadeniz Teknik ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Trabzon', field: 'SAY', minScore: 445, minRank: 5500, quota: 85 },
    { university: 'Ondokuz May─▒s ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Samsun', field: 'SAY', minScore: 445, minRank: 5500, quota: 90 },
    { university: 'Pamukkale ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Denizli', field: 'SAY', minScore: 440, minRank: 6000, quota: 85 },
    { university: 'S├╝leyman Demirel ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Isparta', field: 'SAY', minScore: 440, minRank: 6000, quota: 80 },
    { university: 'Uluda─ş ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Bursa', field: 'SAY', minScore: 450, minRank: 5000, quota: 95 },
    { university: 'Yeditepe ├£niversitesi (Vak─▒f)', program: 'Bilgisayar M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 480, minRank: 2500, quota: 70 },
    { university: 'Bah├ğe┼şehir ├£niversitesi (Vak─▒f)', program: 'Bilgisayar M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 470, minRank: 3500, quota: 75 },
    { university: '─░stanbul Teknik ├£niversitesi', program: 'Yaz─▒l─▒m M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 530, minRank: 400, quota: 80 },
    { university: 'ODT├£', program: 'Yaz─▒l─▒m M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 535, minRank: 300, quota: 90 },
    { university: 'Hacettepe ├£niversitesi', program: 'Yaz─▒l─▒m M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 510, minRank: 800, quota: 85 },

    // ============================================
    // SAY - ELEKTR─░K-ELEKTRON─░K M├£HEND─░SL─░─Ş─░
    // ============================================
    { university: 'Bo─şazi├ği ├£niversitesi', program: 'Elektrik-Elektronik M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 535, minRank: 300, quota: 90 },
    { university: 'ODT├£', program: 'Elektrik-Elektronik M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 530, minRank: 400, quota: 110 },
    { university: '─░T├£', program: 'Elektrik-Elektronik M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 525, minRank: 500, quota: 100 },
    { university: 'Bilkent ├£niversitesi (Vak─▒f)', program: 'Elektrik-Elektronik M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 520, minRank: 600, quota: 75 },
    { university: 'Hacettepe ├£niversitesi', program: 'Elektrik-Elektronik M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 510, minRank: 800, quota: 90 },
    { university: 'Y─▒ld─▒z Teknik ├£niversitesi', program: 'Elektrik-Elektronik M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 500, minRank: 1200, quota: 130 },
    { university: 'Gazi ├£niversitesi', program: 'Elektrik-Elektronik M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 470, minRank: 3500, quota: 110 },
    { university: 'Ege ├£niversitesi', program: 'Elektrik-Elektronik M├╝hendisli─şi', city: '─░zmir', field: 'SAY', minScore: 480, minRank: 2500, quota: 100 },
    { university: '─░zmir Y├╝ksek Teknoloji Enstit├╝s├╝', program: 'Elektrik-Elektronik M├╝hendisli─şi', city: '─░zmir', field: 'SAY', minScore: 490, minRank: 1800, quota: 85 },
    { university: 'Gebze Teknik ├£niversitesi', program: 'Elektrik-Elektronik M├╝hendisli─şi', city: 'Kocaeli', field: 'SAY', minScore: 485, minRank: 2000, quota: 90 },
    { university: 'Kocaeli ├£niversitesi', program: 'Elektrik-Elektronik M├╝hendisli─şi', city: 'Kocaeli', field: 'SAY', minScore: 435, minRank: 6500, quota: 95 },
    { university: 'Sakarya ├£niversitesi', program: 'Elektrik-Elektronik M├╝hendisli─şi', city: 'Sakarya', field: 'SAY', minScore: 440, minRank: 6000, quota: 90 },

    // ============================================
    // SAY - MAK─░NE M├£HEND─░SL─░─Ş─░
    // ============================================
    { university: '─░T├£', program: 'Makine M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 520, minRank: 600, quota: 120 },
    { university: 'ODT├£', program: 'Makine M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 515, minRank: 700, quota: 130 },
    { university: 'Bo─şazi├ği ├£niversitesi', program: 'Makine M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 510, minRank: 800, quota: 85 },
    { university: 'Y─▒ld─▒z Teknik ├£niversitesi', program: 'Makine M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 490, minRank: 1800, quota: 140 },
    { university: 'Gazi ├£niversitesi', program: 'Makine M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 465, minRank: 4000, quota: 120 },
    { university: 'Ege ├£niversitesi', program: 'Makine M├╝hendisli─şi', city: '─░zmir', field: 'SAY', minScore: 475, minRank: 3000, quota: 110 },
    { university: 'Dokuz Eyl├╝l ├£niversitesi', program: 'Makine M├╝hendisli─şi', city: '─░zmir', field: 'SAY', minScore: 470, minRank: 3500, quota: 105 },
    { university: 'Erciyes ├£niversitesi', program: 'Makine M├╝hendisli─şi', city: 'Kayseri', field: 'SAY', minScore: 445, minRank: 5500, quota: 95 },
    { university: 'Sel├ğuk ├£niversitesi', program: 'Makine M├╝hendisli─şi', city: 'Konya', field: 'SAY', minScore: 440, minRank: 6000, quota: 100 },
    { university: 'Uluda─ş ├£niversitesi', program: 'Makine M├╝hendisli─şi', city: 'Bursa', field: 'SAY', minScore: 445, minRank: 5500, quota: 105 },
    { university: 'Kocaeli ├£niversitesi', program: 'Makine M├╝hendisli─şi', city: 'Kocaeli', field: 'SAY', minScore: 435, minRank: 6500, quota: 110 },
    { university: 'Sakarya ├£niversitesi', program: 'Makine M├╝hendisli─şi', city: 'Sakarya', field: 'SAY', minScore: 435, minRank: 6500, quota: 100 },

    // ============================================
    // SAY - ─░N┼ŞAAT M├£HEND─░SL─░─Ş─░
    // ============================================
    { university: '─░T├£', program: '─░n┼şaat M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 510, minRank: 800, quota: 130 },
    { university: 'ODT├£', program: '─░n┼şaat M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 505, minRank: 1000, quota: 140 },
    { university: 'Bo─şazi├ği ├£niversitesi', program: '─░n┼şaat M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 500, minRank: 1200, quota: 80 },
    { university: 'Y─▒ld─▒z Teknik ├£niversitesi', program: '─░n┼şaat M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 480, minRank: 2500, quota: 150 },
    { university: 'Gazi ├£niversitesi', program: '─░n┼şaat M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 455, minRank: 4500, quota: 130 },
    { university: 'Ege ├£niversitesi', program: '─░n┼şaat M├╝hendisli─şi', city: '─░zmir', field: 'SAY', minScore: 465, minRank: 4000, quota: 120 },
    { university: 'Dokuz Eyl├╝l ├£niversitesi', program: '─░n┼şaat M├╝hendisli─şi', city: '─░zmir', field: 'SAY', minScore: 460, minRank: 4500, quota: 115 },
    { university: 'Karadeniz Teknik ├£niversitesi', program: '─░n┼şaat M├╝hendisli─şi', city: 'Trabzon', field: 'SAY', minScore: 435, minRank: 6500, quota: 100 },
    { university: 'Sel├ğuk ├£niversitesi', program: '─░n┼şaat M├╝hendisli─şi', city: 'Konya', field: 'SAY', minScore: 430, minRank: 7000, quota: 110 },
    { university: 'Uluda─ş ├£niversitesi', program: '─░n┼şaat M├╝hendisli─şi', city: 'Bursa', field: 'SAY', minScore: 435, minRank: 6500, quota: 115 },

    // ============================================
    // SAY - END├£STR─░ M├£HEND─░SL─░─Ş─░
    // ============================================
    { university: 'Bo─şazi├ği ├£niversitesi', program: 'End├╝stri M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 530, minRank: 400, quota: 75 },
    { university: 'ODT├£', program: 'End├╝stri M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 525, minRank: 500, quota: 90 },
    { university: '─░T├£', program: 'End├╝stri M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 520, minRank: 600, quota: 85 },
    { university: 'Y─▒ld─▒z Teknik ├£niversitesi', program: 'End├╝stri M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 495, minRank: 1500, quota: 120 },
    { university: 'Gazi ├£niversitesi', program: 'End├╝stri M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 470, minRank: 3500, quota: 100 },
    { university: 'Eski┼şehir Osmangazi ├£niversitesi', program: 'End├╝stri M├╝hendisli─şi', city: 'Eski┼şehir', field: 'SAY', minScore: 445, minRank: 5500, quota: 90 },
    { university: 'Kocaeli ├£niversitesi', program: 'End├╝stri M├╝hendisli─şi', city: 'Kocaeli', field: 'SAY', minScore: 440, minRank: 6000, quota: 95 },
    { university: 'Sakarya ├£niversitesi', program: 'End├╝stri M├╝hendisli─şi', city: 'Sakarya', field: 'SAY', minScore: 440, minRank: 6000, quota: 90 },

    // ============================================
    // SAY - M─░MARLIK
    // ============================================
    { university: '─░T├£', program: 'Mimarl─▒k', city: '─░stanbul', field: 'SAY', minScore: 525, minRank: 500, quota: 100 },
    { university: 'ODT├£', program: 'Mimarl─▒k', city: 'Ankara', field: 'SAY', minScore: 520, minRank: 600, quota: 110 },
    { university: 'Y─▒ld─▒z Teknik ├£niversitesi', program: 'Mimarl─▒k', city: '─░stanbul', field: 'SAY', minScore: 495, minRank: 1500, quota: 130 },
    { university: 'Gazi ├£niversitesi', program: 'Mimarl─▒k', city: 'Ankara', field: 'SAY', minScore: 475, minRank: 3000, quota: 110 },
    { university: 'Mimar Sinan G├╝zel Sanatlar ├£niversitesi', program: 'Mimarl─▒k', city: '─░stanbul', field: 'SAY', minScore: 510, minRank: 800, quota: 95 },
    { university: 'Dokuz Eyl├╝l ├£niversitesi', program: 'Mimarl─▒k', city: '─░zmir', field: 'SAY', minScore: 480, minRank: 2500, quota: 100 },
    { university: 'Sel├ğuk ├£niversitesi', program: 'Mimarl─▒k', city: 'Konya', field: 'SAY', minScore: 455, minRank: 4500, quota: 95 },
    { university: 'Uluda─ş ├£niversitesi', program: 'Mimarl─▒k', city: 'Bursa', field: 'SAY', minScore: 460, minRank: 4500, quota: 90 },
    { university: 'Karadeniz Teknik ├£niversitesi', program: 'Mimarl─▒k', city: 'Trabzon', field: 'SAY', minScore: 450, minRank: 5000, quota: 85 },

    // ============================================
    // SAY - D─░┼Ş HEK─░ML─░─Ş─░
    // ============================================
    { university: 'Hacettepe ├£niversitesi', program: 'Di┼ş Hekimli─şi', city: 'Ankara', field: 'SAY', minScore: 540, minRank: 250, quota: 80 },
    { university: '─░stanbul ├£niversitesi', program: 'Di┼ş Hekimli─şi', city: '─░stanbul', field: 'SAY', minScore: 535, minRank: 300, quota: 90 },
    { university: 'Ankara ├£niversitesi', program: 'Di┼ş Hekimli─şi', city: 'Ankara', field: 'SAY', minScore: 530, minRank: 400, quota: 85 },
    { university: 'Ege ├£niversitesi', program: 'Di┼ş Hekimli─şi', city: '─░zmir', field: 'SAY', minScore: 525, minRank: 500, quota: 80 },
    { university: 'Gazi ├£niversitesi', program: 'Di┼ş Hekimli─şi', city: 'Ankara', field: 'SAY', minScore: 520, minRank: 600, quota: 75 },
    { university: 'Marmara ├£niversitesi', program: 'Di┼ş Hekimli─şi', city: '─░stanbul', field: 'SAY', minScore: 515, minRank: 800, quota: 70 },
    { university: 'Sel├ğuk ├£niversitesi', program: 'Di┼ş Hekimli─şi', city: 'Konya', field: 'SAY', minScore: 500, minRank: 1200, quota: 75 },
    { university: 'Atat├╝rk ├£niversitesi', program: 'Di┼ş Hekimli─şi', city: 'Erzurum', field: 'SAY', minScore: 490, minRank: 1800, quota: 70 },
    { university: 'Dicle ├£niversitesi', program: 'Di┼ş Hekimli─şi', city: 'Diyarbak─▒r', field: 'SAY', minScore: 480, minRank: 2500, quota: 65 },

    // ============================================
    // SAY - ECZACILIK
    // ============================================
    { university: 'Hacettepe ├£niversitesi', program: 'Eczac─▒l─▒k', city: 'Ankara', field: 'SAY', minScore: 530, minRank: 400, quota: 100 },
    { university: '─░stanbul ├£niversitesi', program: 'Eczac─▒l─▒k', city: '─░stanbul', field: 'SAY', minScore: 525, minRank: 500, quota: 110 },
    { university: 'Ankara ├£niversitesi', program: 'Eczac─▒l─▒k', city: 'Ankara', field: 'SAY', minScore: 520, minRank: 600, quota: 105 },
    { university: 'Ege ├£niversitesi', program: 'Eczac─▒l─▒k', city: '─░zmir', field: 'SAY', minScore: 515, minRank: 800, quota: 100 },
    { university: 'Gazi ├£niversitesi', program: 'Eczac─▒l─▒k', city: 'Ankara', field: 'SAY', minScore: 510, minRank: 1000, quota: 95 },
    { university: 'Marmara ├£niversitesi', program: 'Eczac─▒l─▒k', city: '─░stanbul', field: 'SAY', minScore: 505, minRank: 1200, quota: 90 },
    { university: 'Anadolu ├£niversitesi', program: 'Eczac─▒l─▒k', city: 'Eski┼şehir', field: 'SAY', minScore: 495, minRank: 1500, quota: 85 },
    { university: 'Erciyes ├£niversitesi', program: 'Eczac─▒l─▒k', city: 'Kayseri', field: 'SAY', minScore: 485, minRank: 2000, quota: 80 },

    // ============================================
    // SAY - VETER─░NERL─░K
    // ============================================
    { university: 'Ankara ├£niversitesi', program: 'Veterinerlik', city: 'Ankara', field: 'SAY', minScore: 510, minRank: 800, quota: 120 },
    { university: '─░stanbul ├£niversitesi', program: 'Veterinerlik', city: '─░stanbul', field: 'SAY', minScore: 505, minRank: 1000, quota: 110 },
    { university: 'Sel├ğuk ├£niversitesi', program: 'Veterinerlik', city: 'Konya', field: 'SAY', minScore: 490, minRank: 1800, quota: 100 },
    { university: 'Uluda─ş ├£niversitesi', program: 'Veterinerlik', city: 'Bursa', field: 'SAY', minScore: 485, minRank: 2000, quota: 95 },
    { university: 'F─▒rat ├£niversitesi', program: 'Veterinerlik', city: 'Elaz─▒─ş', field: 'SAY', minScore: 470, minRank: 3500, quota: 90 },
    { university: 'Kafkas ├£niversitesi', program: 'Veterinerlik', city: 'Kars', field: 'SAY', minScore: 460, minRank: 4500, quota: 85 },

    // ============================================
    // EA (E┼şit A─ş─▒rl─▒k) - HUKUK FAK├£LTELER─░
    // ============================================
    { university: 'Ankara ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Ankara', field: 'EA', minScore: 535, minRank: 180, quota: 200 },
    { university: '─░stanbul ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: '─░stanbul', field: 'EA', minScore: 530, minRank: 200, quota: 220 },
    { university: 'Gazi ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Ankara', field: 'EA', minScore: 520, minRank: 300, quota: 180 },
    { university: 'Marmara ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: '─░stanbul', field: 'EA', minScore: 515, minRank: 350, quota: 190 },
    { university: 'Galatasaray ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: '─░stanbul', field: 'EA', minScore: 525, minRank: 250, quota: 120 },
    { university: 'Hacettepe ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Ankara', field: 'EA', minScore: 520, minRank: 300, quota: 170 },
    { university: 'Ege ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: '─░zmir', field: 'EA', minScore: 510, minRank: 400, quota: 180 },
    { university: 'Dokuz Eyl├╝l ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: '─░zmir', field: 'EA', minScore: 505, minRank: 500, quota: 170 },
    { university: 'Sel├ğuk ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Konya', field: 'EA', minScore: 490, minRank: 1000, quota: 160 },
    { university: 'Erciyes ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Kayseri', field: 'EA', minScore: 485, minRank: 1200, quota: 150 },
    { university: '├çukurova ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Adana', field: 'EA', minScore: 480, minRank: 1500, quota: 140 },
    { university: 'Uluda─ş ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Bursa', field: 'EA', minScore: 475, minRank: 1800, quota: 150 },
    { university: 'Ondokuz May─▒s ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Samsun', field: 'EA', minScore: 470, minRank: 2000, quota: 140 },
    { university: 'Akdeniz ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Antalya', field: 'EA', minScore: 465, minRank: 2500, quota: 130 },
    { university: 'Sakarya ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Sakarya', field: 'EA', minScore: 460, minRank: 3000, quota: 120 },
    { university: 'Kocaeli ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Kocaeli', field: 'EA', minScore: 455, minRank: 3500, quota: 115 },
    { university: 'Dicle ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Diyarbak─▒r', field: 'EA', minScore: 450, minRank: 4000, quota: 110 },
    { university: 'Atat├╝rk ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Erzurum', field: 'EA', minScore: 450, minRank: 4000, quota: 105 },
    { university: 'S├╝leyman Demirel ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Isparta', field: 'EA', minScore: 455, minRank: 3500, quota: 100 },
    { university: 'Karadeniz Teknik ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Trabzon', field: 'EA', minScore: 455, minRank: 3500, quota: 110 },

    // ============================================
    // EA - ─░KT─░SAT
    // ============================================
    { university: 'Bo─şazi├ği ├£niversitesi', program: '─░ktisat', city: '─░stanbul', field: 'EA', minScore: 530, minRank: 200, quota: 90 },
    { university: 'ODT├£', program: '─░ktisat', city: 'Ankara', field: 'EA', minScore: 525, minRank: 250, quota: 100 },
    { university: 'Bilkent ├£niversitesi (Vak─▒f)', program: '─░ktisat', city: 'Ankara', field: 'EA', minScore: 520, minRank: 300, quota: 70 },
    { university: 'Ko├ğ ├£niversitesi (Vak─▒f)', program: '─░ktisat', city: '─░stanbul', field: 'EA', minScore: 515, minRank: 350, quota: 60 },
    { university: 'Sabanc─▒ ├£niversitesi (Vak─▒f)', program: '─░ktisat', city: '─░stanbul', field: 'EA', minScore: 510, minRank: 400, quota: 65 },
    { university: 'Hacettepe ├£niversitesi', program: '─░ktisat', city: 'Ankara', field: 'EA', minScore: 510, minRank: 400, quota: 85 },
    { university: '─░stanbul ├£niversitesi', program: '─░ktisat', city: '─░stanbul', field: 'EA', minScore: 505, minRank: 500, quota: 100 },
    { university: 'Ankara ├£niversitesi', program: '─░ktisat', city: 'Ankara', field: 'EA', minScore: 500, minRank: 600, quota: 95 },
    { university: 'Ege ├£niversitesi', program: '─░ktisat', city: '─░zmir', field: 'EA', minScore: 495, minRank: 800, quota: 90 },
    { university: 'Dokuz Eyl├╝l ├£niversitesi', program: '─░ktisat', city: '─░zmir', field: 'EA', minScore: 490, minRank: 1000, quota: 85 },
    { university: 'Marmara ├£niversitesi', program: '─░ktisat', city: '─░stanbul', field: 'EA', minScore: 485, minRank: 1200, quota: 95 },
    { university: 'Gazi ├£niversitesi', program: '─░ktisat', city: 'Ankara', field: 'EA', minScore: 475, minRank: 1800, quota: 80 },
    { university: 'Uluda─ş ├£niversitesi', program: '─░ktisat', city: 'Bursa', field: 'EA', minScore: 465, minRank: 2500, quota: 75 },
    { university: 'Akdeniz ├£niversitesi', program: '─░ktisat', city: 'Antalya', field: 'EA', minScore: 460, minRank: 3000, quota: 70 },

    // ============================================
    // EA - ─░┼ŞLETME
    // ============================================
    { university: 'Bo─şazi├ği ├£niversitesi', program: '─░┼şletme', city: '─░stanbul', field: 'EA', minScore: 535, minRank: 180, quota: 100 },
    { university: 'ODT├£', program: '─░┼şletme', city: 'Ankara', field: 'EA', minScore: 530, minRank: 200, quota: 110 },
    { university: 'Ko├ğ ├£niversitesi (Vak─▒f)', program: '─░┼şletme', city: '─░stanbul', field: 'EA', minScore: 525, minRank: 250, quota: 70 },
    { university: 'Sabanc─▒ ├£niversitesi (Vak─▒f)', program: '─░┼şletme', city: '─░stanbul', field: 'EA', minScore: 520, minRank: 300, quota: 75 },
    { university: '─░stanbul ├£niversitesi', program: '─░┼şletme', city: '─░stanbul', field: 'EA', minScore: 510, minRank: 400, quota: 120 },
    { university: 'Ankara ├£niversitesi', program: '─░┼şletme', city: 'Ankara', field: 'EA', minScore: 505, minRank: 500, quota: 110 },
    { university: 'Hacettepe ├£niversitesi', program: '─░┼şletme', city: 'Ankara', field: 'EA', minScore: 515, minRank: 350, quota: 95 },
    { university: 'Ege ├£niversitesi', program: '─░┼şletme', city: '─░zmir', field: 'EA', minScore: 500, minRank: 600, quota: 100 },
    { university: 'Dokuz Eyl├╝l ├£niversitesi', program: '─░┼şletme', city: '─░zmir', field: 'EA', minScore: 495, minRank: 800, quota: 95 },
    { university: 'Marmara ├£niversitesi', program: '─░┼şletme', city: '─░stanbul', field: 'EA', minScore: 490, minRank: 1000, quota: 110 },
    { university: 'Gazi ├£niversitesi', program: '─░┼şletme', city: 'Ankara', field: 'EA', minScore: 480, minRank: 1500, quota: 100 },
    { university: '├çukurova ├£niversitesi', program: '─░┼şletme', city: 'Adana', field: 'EA', minScore: 470, minRank: 2000, quota: 90 },
    { university: 'Akdeniz ├£niversitesi', program: '─░┼şletme', city: 'Antalya', field: 'EA', minScore: 475, minRank: 1800, quota: 95 },
    { university: 'Uluda─ş ├£niversitesi', program: '─░┼şletme', city: 'Bursa', field: 'EA', minScore: 470, minRank: 2000, quota: 90 },
    { university: 'Sakarya ├£niversitesi', program: '─░┼şletme', city: 'Sakarya', field: 'EA', minScore: 460, minRank: 3000, quota: 85 },
    { university: 'Kocaeli ├£niversitesi', program: '─░┼şletme', city: 'Kocaeli', field: 'EA', minScore: 455, minRank: 3500, quota: 90 },

    // ============================================
    // EA - S─░YASET B─░L─░M─░ VE KAMU Y├ûNET─░M─░
    // ============================================
    { university: 'Ankara ├£niversitesi', program: 'Siyaset Bilimi ve Kamu Y├Ânetimi', city: 'Ankara', field: 'EA', minScore: 515, minRank: 350, quota: 100 },
    { university: 'ODT├£', program: 'Siyaset Bilimi ve Kamu Y├Ânetimi', city: 'Ankara', field: 'EA', minScore: 510, minRank: 400, quota: 90 },
    { university: 'Bo─şazi├ği ├£niversitesi', program: 'Siyaset Bilimi ve Uluslararas─▒ ─░li┼şkiler', city: '─░stanbul', field: 'EA', minScore: 520, minRank: 300, quota: 80 },
    { university: '─░stanbul ├£niversitesi', program: 'Siyaset Bilimi ve Kamu Y├Ânetimi', city: '─░stanbul', field: 'EA', minScore: 500, minRank: 600, quota: 95 },
    { university: 'Gazi ├£niversitesi', program: 'Siyaset Bilimi ve Kamu Y├Ânetimi', city: 'Ankara', field: 'EA', minScore: 485, minRank: 1200, quota: 85 },
    { university: 'Marmara ├£niversitesi', program: 'Siyaset Bilimi ve Kamu Y├Ânetimi', city: '─░stanbul', field: 'EA', minScore: 480, minRank: 1500, quota: 90 },
    { university: 'Ege ├£niversitesi', program: 'Siyaset Bilimi ve Kamu Y├Ânetimi', city: '─░zmir', field: 'EA', minScore: 470, minRank: 2000, quota: 80 },

    // ============================================
    // EA - ULUSLARARASI ─░L─░┼ŞK─░LER
    // ============================================
    { university: 'Bilkent ├£niversitesi (Vak─▒f)', program: 'Uluslararas─▒ ─░li┼şkiler', city: 'Ankara', field: 'EA', minScore: 525, minRank: 250, quota: 75 },
    { university: 'Ko├ğ ├£niversitesi (Vak─▒f)', program: 'Uluslararas─▒ ─░li┼şkiler', city: '─░stanbul', field: 'EA', minScore: 520, minRank: 300, quota: 65 },
    { university: 'ODT├£', program: 'Uluslararas─▒ ─░li┼şkiler', city: 'Ankara', field: 'EA', minScore: 515, minRank: 350, quota: 85 },
    { university: 'Ankara ├£niversitesi', program: 'Uluslararas─▒ ─░li┼şkiler', city: 'Ankara', field: 'EA', minScore: 510, minRank: 400, quota: 90 },
    { university: 'Galatasaray ├£niversitesi', program: 'Uluslararas─▒ ─░li┼şkiler', city: '─░stanbul', field: 'EA', minScore: 515, minRank: 350, quota: 70 },
    { university: '─░stanbul ├£niversitesi', program: 'Uluslararas─▒ ─░li┼şkiler', city: '─░stanbul', field: 'EA', minScore: 500, minRank: 600, quota: 85 },
    { university: 'Marmara ├£niversitesi', program: 'Uluslararas─▒ ─░li┼şkiler', city: '─░stanbul', field: 'EA', minScore: 490, minRank: 1000, quota: 80 },

    // ============================================
    // S├ûZ (S├Âzel) - HUKUK FAK├£LTELER─░
    // ============================================
    { university: 'Ankara ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Ankara', field: 'SOZ', minScore: 520, minRank: 250, quota: 200 },
    { university: '─░stanbul ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: '─░stanbul', field: 'SOZ', minScore: 515, minRank: 300, quota: 220 },
    { university: 'Gazi ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Ankara', field: 'SOZ', minScore: 505, minRank: 400, quota: 180 },
    { university: 'Marmara ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: '─░stanbul', field: 'SOZ', minScore: 500, minRank: 500, quota: 190 },
    { university: 'Galatasaray ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: '─░stanbul', field: 'SOZ', minScore: 510, minRank: 350, quota: 120 },
    { university: 'Hacettepe ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Ankara', field: 'SOZ', minScore: 505, minRank: 400, quota: 170 },
    { university: 'Ege ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: '─░zmir', field: 'SOZ', minScore: 495, minRank: 600, quota: 180 },
    { university: 'Dokuz Eyl├╝l ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: '─░zmir', field: 'SOZ', minScore: 490, minRank: 800, quota: 170 },
    { university: 'Sel├ğuk ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Konya', field: 'SOZ', minScore: 475, minRank: 1500, quota: 160 },
    { university: 'Erciyes ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Kayseri', field: 'SOZ', minScore: 470, minRank: 1800, quota: 150 },
    { university: '├çukurova ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Adana', field: 'SOZ', minScore: 465, minRank: 2000, quota: 140 },
    { university: 'Uluda─ş ├£niversitesi', program: 'Hukuk Fak├╝ltesi', city: 'Bursa', field: 'SOZ', minScore: 460, minRank: 2500, quota: 150 },

    // ============================================
    // S├ûZ - PS─░KOLOJ─░
    // ============================================
    { university: 'Bo─şazi├ği ├£niversitesi', program: 'Psikoloji', city: '─░stanbul', field: 'SOZ', minScore: 515, minRank: 300, quota: 70 },
    { university: 'ODT├£', program: 'Psikoloji', city: 'Ankara', field: 'SOZ', minScore: 510, minRank: 350, quota: 80 },
    { university: '─░stanbul ├£niversitesi', program: 'Psikoloji', city: '─░stanbul', field: 'SOZ', minScore: 505, minRank: 400, quota: 100 },
    { university: 'Hacettepe ├£niversitesi', program: 'Psikoloji', city: 'Ankara', field: 'SOZ', minScore: 500, minRank: 500, quota: 90 },
    { university: 'Ankara ├£niversitesi', program: 'Psikoloji', city: 'Ankara', field: 'SOZ', minScore: 495, minRank: 600, quota: 95 },
    { university: 'Ege ├£niversitesi', program: 'Psikoloji', city: '─░zmir', field: 'SOZ', minScore: 490, minRank: 800, quota: 85 },
    { university: 'Dokuz Eyl├╝l ├£niversitesi', program: 'Psikoloji', city: '─░zmir', field: 'SOZ', minScore: 485, minRank: 1000, quota: 80 },
    { university: 'Marmara ├£niversitesi', program: 'Psikoloji', city: '─░stanbul', field: 'SOZ', minScore: 480, minRank: 1200, quota: 90 },
    { university: 'Gazi ├£niversitesi', program: 'Psikoloji', city: 'Ankara', field: 'SOZ', minScore: 470, minRank: 1800, quota: 85 },
    { university: '├çukurova ├£niversitesi', program: 'Psikoloji', city: 'Adana', field: 'SOZ', minScore: 460, minRank: 2500, quota: 75 },
    { university: 'Uluda─ş ├£niversitesi', program: 'Psikoloji', city: 'Bursa', field: 'SOZ', minScore: 455, minRank: 3000, quota: 70 },
    { university: 'Akdeniz ├£niversitesi', program: 'Psikoloji', city: 'Antalya', field: 'SOZ', minScore: 460, minRank: 2500, quota: 75 },

    // ============================================
    // S├ûZ - S─░YASET B─░L─░M─░ VE KAMU Y├ûNET─░M─░
    // ============================================
    { university: 'Ankara ├£niversitesi', program: 'Siyaset Bilimi ve Kamu Y├Ânetimi', city: 'Ankara', field: 'SOZ', minScore: 500, minRank: 500, quota: 100 },
    { university: 'ODT├£', program: 'Siyaset Bilimi ve Kamu Y├Ânetimi', city: 'Ankara', field: 'SOZ', minScore: 495, minRank: 600, quota: 90 },
    { university: 'Bo─şazi├ği ├£niversitesi', program: 'Siyaset Bilimi ve Uluslararas─▒ ─░li┼şkiler', city: '─░stanbul', field: 'SOZ', minScore: 505, minRank: 400, quota: 80 },
    { university: '─░stanbul ├£niversitesi', program: 'Siyaset Bilimi ve Kamu Y├Ânetimi', city: '─░stanbul', field: 'SOZ', minScore: 485, minRank: 1000, quota: 95 },
    { university: 'Gazi ├£niversitesi', program: 'Siyaset Bilimi ve Kamu Y├Ânetimi', city: 'Ankara', field: 'SOZ', minScore: 470, minRank: 1800, quota: 85 },

    // ============================================
    // S├ûZ - ─░LET─░┼Ş─░M FAK├£LTES─░
    // ============================================
    { university: 'Ankara ├£niversitesi', program: '─░leti┼şim Fak├╝ltesi', city: 'Ankara', field: 'SOZ', minScore: 485, minRank: 1000, quota: 120 },
    { university: '─░stanbul ├£niversitesi', program: '─░leti┼şim Fak├╝ltesi', city: '─░stanbul', field: 'SOZ', minScore: 480, minRank: 1200, quota: 130 },
    { university: 'Gazi ├£niversitesi', program: '─░leti┼şim Fak├╝ltesi', city: 'Ankara', field: 'SOZ', minScore: 470, minRank: 1800, quota: 110 },
    { university: 'Ege ├£niversitesi', program: '─░leti┼şim Fak├╝ltesi', city: '─░zmir', field: 'SOZ', minScore: 475, minRank: 1500, quota: 100 },
    { university: 'Marmara ├£niversitesi', program: '─░leti┼şim Fak├╝ltesi', city: '─░stanbul', field: 'SOZ', minScore: 465, minRank: 2000, quota: 120 },
    { university: 'Anadolu ├£niversitesi', program: '─░leti┼şim Bilimleri Fak├╝ltesi', city: 'Eski┼şehir', field: 'SOZ', minScore: 460, minRank: 2500, quota: 140 },
    { university: 'Sel├ğuk ├£niversitesi', program: '─░leti┼şim Fak├╝ltesi', city: 'Konya', field: 'SOZ', minScore: 450, minRank: 3500, quota: 100 },
    { university: 'Erciyes ├£niversitesi', program: '─░leti┼şim Fak├╝ltesi', city: 'Kayseri', field: 'SOZ', minScore: 445, minRank: 4000, quota: 95 },

    // ============================================
    // S├ûZ - T├£RK D─░L─░ VE EDEB─░YATI
    // ============================================
    { university: '─░stanbul ├£niversitesi', program: 'T├╝rk Dili ve Edebiyat─▒', city: '─░stanbul', field: 'SOZ', minScore: 475, minRank: 1500, quota: 90 },
    { university: 'Ankara ├£niversitesi', program: 'T├╝rk Dili ve Edebiyat─▒', city: 'Ankara', field: 'SOZ', minScore: 470, minRank: 1800, quota: 85 },
    { university: 'Gazi ├£niversitesi', program: 'T├╝rk Dili ve Edebiyat─▒', city: 'Ankara', field: 'SOZ', minScore: 460, minRank: 2500, quota: 80 },
    { university: 'Ege ├£niversitesi', program: 'T├╝rk Dili ve Edebiyat─▒', city: '─░zmir', field: 'SOZ', minScore: 455, minRank: 3000, quota: 75 },
    { university: 'Hacettepe ├£niversitesi', program: 'T├╝rk Dili ve Edebiyat─▒', city: 'Ankara', field: 'SOZ', minScore: 465, minRank: 2000, quota: 70 },
    { university: 'Marmara ├£niversitesi', program: 'T├╝rk Dili ve Edebiyat─▒', city: '─░stanbul', field: 'SOZ', minScore: 450, minRank: 3500, quota: 80 },
    { university: 'Sel├ğuk ├£niversitesi', program: 'T├╝rk Dili ve Edebiyat─▒', city: 'Konya', field: 'SOZ', minScore: 440, minRank: 4500, quota: 75 },

    // ============================================
    // S├ûZ - TAR─░H
    // ============================================
    { university: '─░stanbul ├£niversitesi', program: 'Tarih', city: '─░stanbul', field: 'SOZ', minScore: 470, minRank: 1800, quota: 100 },
    { university: 'Ankara ├£niversitesi', program: 'Tarih', city: 'Ankara', field: 'SOZ', minScore: 465, minRank: 2000, quota: 95 },
    { university: 'Hacettepe ├£niversitesi', program: 'Tarih', city: 'Ankara', field: 'SOZ', minScore: 460, minRank: 2500, quota: 80 },
    { university: 'Ege ├£niversitesi', program: 'Tarih', city: '─░zmir', field: 'SOZ', minScore: 450, minRank: 3500, quota: 85 },
    { university: 'Gazi ├£niversitesi', program: 'Tarih', city: 'Ankara', field: 'SOZ', minScore: 455, minRank: 3000, quota: 90 },
    { university: 'Marmara ├£niversitesi', program: 'Tarih', city: '─░stanbul', field: 'SOZ', minScore: 445, minRank: 4000, quota: 85 },

    // ============================================
    // S├ûZ - SOSYOLOJ─░
    // ============================================
    { university: 'Bo─şazi├ği ├£niversitesi', program: 'Sosyoloji', city: '─░stanbul', field: 'SOZ', minScore: 500, minRank: 500, quota: 65 },
    { university: 'ODT├£', program: 'Sosyoloji', city: 'Ankara', field: 'SOZ', minScore: 490, minRank: 800, quota: 75 },
    { university: '─░stanbul ├£niversitesi', program: 'Sosyoloji', city: '─░stanbul', field: 'SOZ', minScore: 480, minRank: 1200, quota: 90 },
    { university: 'Ankara ├£niversitesi', program: 'Sosyoloji', city: 'Ankara', field: 'SOZ', minScore: 475, minRank: 1500, quota: 85 },
    { university: 'Hacettepe ├£niversitesi', program: 'Sosyoloji', city: 'Ankara', field: 'SOZ', minScore: 470, minRank: 1800, quota: 80 },
    { university: 'Ege ├£niversitesi', program: 'Sosyoloji', city: '─░zmir', field: 'SOZ', minScore: 460, minRank: 2500, quota: 75 },
    { university: 'Marmara ├£niversitesi', program: 'Sosyoloji', city: '─░stanbul', field: 'SOZ', minScore: 455, minRank: 3000, quota: 80 },

    // ============================================
    // D─░L (Dil) - ─░NG─░L─░Z D─░L─░ VE EDEB─░YATI
    // ============================================
    { university: 'Bo─şazi├ği ├£niversitesi', program: '─░ngiliz Dili ve Edebiyat─▒', city: '─░stanbul', field: 'DIL', minScore: 510, minRank: 200, quota: 60 },
    { university: 'ODT├£', program: '─░ngiliz Dili ve Edebiyat─▒', city: 'Ankara', field: 'DIL', minScore: 505, minRank: 250, quota: 70 },
    { university: 'Bilkent ├£niversitesi (Vak─▒f)', program: '─░ngiliz Dili ve Edebiyat─▒', city: 'Ankara', field: 'DIL', minScore: 505, minRank: 250, quota: 50 },
    { university: 'Hacettepe ├£niversitesi', program: '─░ngiliz Dili ve Edebiyat─▒', city: 'Ankara', field: 'DIL', minScore: 495, minRank: 350, quota: 75 },
    { university: '─░stanbul ├£niversitesi', program: '─░ngiliz Dili ve Edebiyat─▒', city: '─░stanbul', field: 'DIL', minScore: 490, minRank: 500, quota: 85 },
    { university: 'Ankara ├£niversitesi', program: '─░ngiliz Dili ve Edebiyat─▒', city: 'Ankara', field: 'DIL', minScore: 485, minRank: 600, quota: 80 },
    { university: 'Y─▒ld─▒z Teknik ├£niversitesi', program: '─░ngiliz Dili ve Edebiyat─▒', city: '─░stanbul', field: 'DIL', minScore: 485, minRank: 600, quota: 75 },
    { university: 'Ege ├£niversitesi', program: '─░ngiliz Dili ve Edebiyat─▒', city: '─░zmir', field: 'DIL', minScore: 480, minRank: 800, quota: 80 },
    { university: 'Dokuz Eyl├╝l ├£niversitesi', program: '─░ngiliz Dili ve Edebiyat─▒', city: '─░zmir', field: 'DIL', minScore: 475, minRank: 1000, quota: 70 },
    { university: 'Gazi ├£niversitesi', program: '─░ngiliz Dili ve Edebiyat─▒', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 1200, quota: 85 },
    { university: 'Marmara ├£niversitesi', program: '─░ngiliz Dili ve Edebiyat─▒', city: '─░stanbul', field: 'DIL', minScore: 465, minRank: 1500, quota: 80 },
    { university: '├çukurova ├£niversitesi', program: '─░ngiliz Dili ve Edebiyat─▒', city: 'Adana', field: 'DIL', minScore: 455, minRank: 2000, quota: 70 },
    { university: 'Sel├ğuk ├£niversitesi', program: '─░ngiliz Dili ve Edebiyat─▒', city: 'Konya', field: 'DIL', minScore: 450, minRank: 2500, quota: 65 },
    { university: 'Uluda─ş ├£niversitesi', program: '─░ngiliz Dili ve Edebiyat─▒', city: 'Bursa', field: 'DIL', minScore: 455, minRank: 2000, quota: 70 },

    // ============================================
    // D─░L - M├£TERC─░M TERC├£MANLIK (─░NG─░L─░ZCE)
    // ============================================
    { university: 'Bo─şazi├ği ├£niversitesi', program: 'M├╝tercim Terc├╝manl─▒k (─░ngilizce)', city: '─░stanbul', field: 'DIL', minScore: 500, minRank: 300, quota: 55 },
    { university: 'Hacettepe ├£niversitesi', program: 'M├╝tercim Terc├╝manl─▒k (─░ngilizce)', city: 'Ankara', field: 'DIL', minScore: 500, minRank: 300, quota: 80 },
    { university: 'Ankara ├£niversitesi', program: 'M├╝tercim Terc├╝manl─▒k (─░ngilizce)', city: 'Ankara', field: 'DIL', minScore: 495, minRank: 400, quota: 90 },
    { university: '─░stanbul ├£niversitesi', program: 'M├╝tercim Terc├╝manl─▒k (─░ngilizce)', city: '─░stanbul', field: 'DIL', minScore: 485, minRank: 600, quota: 85 },
    { university: 'Y─▒ld─▒z Teknik ├£niversitesi', program: 'M├╝tercim Terc├╝manl─▒k (─░ngilizce)', city: '─░stanbul', field: 'DIL', minScore: 480, minRank: 800, quota: 75 },
    { university: 'Ege ├£niversitesi', program: 'M├╝tercim Terc├╝manl─▒k (─░ngilizce)', city: '─░zmir', field: 'DIL', minScore: 475, minRank: 1000, quota: 70 },
    { university: 'Gazi ├£niversitesi', program: 'M├╝tercim Terc├╝manl─▒k (─░ngilizce)', city: 'Ankara', field: 'DIL', minScore: 465, minRank: 1500, quota: 80 },
    { university: 'Marmara ├£niversitesi', program: 'M├╝tercim Terc├╝manl─▒k (─░ngilizce)', city: '─░stanbul', field: 'DIL', minScore: 460, minRank: 1800, quota: 75 },
    { university: 'Sel├ğuk ├£niversitesi', program: 'M├╝tercim Terc├╝manl─▒k (─░ngilizce)', city: 'Konya', field: 'DIL', minScore: 445, minRank: 2500, quota: 70 },

    // ============================================
    // D─░L - ALMAN D─░L─░ VE EDEB─░YATI
    // ============================================
    { university: '─░stanbul ├£niversitesi', program: 'Alman Dili ve Edebiyat─▒', city: '─░stanbul', field: 'DIL', minScore: 475, minRank: 1000, quota: 70 },
    { university: 'Ankara ├£niversitesi', program: 'Alman Dili ve Edebiyat─▒', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 1200, quota: 65 },
    { university: 'Hacettepe ├£niversitesi', program: 'Alman Dili ve Edebiyat─▒', city: 'Ankara', field: 'DIL', minScore: 480, minRank: 800, quota: 60 },
    { university: 'Ege ├£niversitesi', program: 'Alman Dili ve Edebiyat─▒', city: '─░zmir', field: 'DIL', minScore: 465, minRank: 1500, quota: 55 },
    { university: 'Marmara ├£niversitesi', program: 'Alman Dili ve Edebiyat─▒', city: '─░stanbul', field: 'DIL', minScore: 460, minRank: 1800, quota: 60 },

    // ============================================
    // D─░L - FRANSIZ D─░L─░ VE EDEB─░YATI
    // ============================================
    { university: '─░stanbul ├£niversitesi', program: 'Frans─▒z Dili ve Edebiyat─▒', city: '─░stanbul', field: 'DIL', minScore: 475, minRank: 1000, quota: 65 },
    { university: 'Ankara ├£niversitesi', program: 'Frans─▒z Dili ve Edebiyat─▒', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 1200, quota: 60 },
    { university: 'Hacettepe ├£niversitesi', program: 'Frans─▒z Dili ve Edebiyat─▒', city: 'Ankara', field: 'DIL', minScore: 480, minRank: 800, quota: 55 },
    { university: 'Galatasaray ├£niversitesi', program: 'Frans─▒z Dili ve Edebiyat─▒', city: '─░stanbul', field: 'DIL', minScore: 485, minRank: 600, quota: 50 },
    { university: 'Ege ├£niversitesi', program: 'Frans─▒z Dili ve Edebiyat─▒', city: '─░zmir', field: 'DIL', minScore: 465, minRank: 1500, quota: 55 },

    // ============================================
    // D─░L - D─░─ŞER D─░LLER
    // ============================================
    { university: 'Ankara ├£niversitesi', program: '─░spanyol Dili ve Edebiyat─▒', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 1200, quota: 50 },
    { university: '─░stanbul ├£niversitesi', program: '─░spanyol Dili ve Edebiyat─▒', city: '─░stanbul', field: 'DIL', minScore: 465, minRank: 1500, quota: 55 },
    { university: 'Hacettepe ├£niversitesi', program: '─░spanyol Dili ve Edebiyat─▒', city: 'Ankara', field: 'DIL', minScore: 475, minRank: 1000, quota: 45 },
    { university: 'Ankara ├£niversitesi', program: 'Rus Dili ve Edebiyat─▒', city: 'Ankara', field: 'DIL', minScore: 465, minRank: 1500, quota: 50 },
    { university: '─░stanbul ├£niversitesi', program: 'Rus Dili ve Edebiyat─▒', city: '─░stanbul', field: 'DIL', minScore: 460, minRank: 1800, quota: 55 },
    { university: 'Ankara ├£niversitesi', program: 'Arap Dili ve Edebiyat─▒', city: 'Ankara', field: 'DIL', minScore: 460, minRank: 1800, quota: 55 },
    { university: '─░stanbul ├£niversitesi', program: 'Arap Dili ve Edebiyat─▒', city: '─░stanbul', field: 'DIL', minScore: 465, minRank: 1500, quota: 60 },
    { university: 'Ankara ├£niversitesi', program: '├çin Dili ve Edebiyat─▒', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 1200, quota: 45 },
    { university: 'Ankara ├£niversitesi', program: 'Japon Dili ve Edebiyat─▒', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 1200, quota: 40 },
    { university: 'Ankara ├£niversitesi', program: 'Kore Dili ve Edebiyat─▒', city: 'Ankara', field: 'DIL', minScore: 470, minRank: 1200, quota: 40 },

    // ============================================
    // B├ûLGESEL VE D├£┼Ş├£K PUANLI ├£N─░VERS─░TELER
    // Orta ve alt seviye ├Â─şrenciler i├ğin
    // ============================================

    // B├Âlgesel ├£niversiteler - SAY
    { university: 'A─şr─▒ ─░brahim ├çe├ğen ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'A─şr─▒', field: 'SAY', minScore: 380, minRank: 120000, quota: 60 },
    { university: 'A─şr─▒ ─░brahim ├çe├ğen ├£niversitesi', program: '─░n┼şaat M├╝hendisli─şi', city: 'A─şr─▒', field: 'SAY', minScore: 370, minRank: 150000, quota: 70 },
    { university: 'A─şr─▒ ─░brahim ├çe├ğen ├£niversitesi', program: 'Hem┼şirelik', city: 'A─şr─▒', field: 'SAY', minScore: 350, minRank: 200000, quota: 50 },
    { university: 'Aksaray ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Aksaray', field: 'SAY', minScore: 385, minRank: 110000, quota: 65 },
    { university: 'Aksaray ├£niversitesi', program: 'Makine M├╝hendisli─şi', city: 'Aksaray', field: 'SAY', minScore: 375, minRank: 140000, quota: 70 },
    { university: 'Aksaray ├£niversitesi', program: 'Hem┼şirelik', city: 'Aksaray', field: 'SAY', minScore: 355, minRank: 190000, quota: 55 },
    { university: 'Amasya ├£niversitesi', program: 'Elektrik-Elektronik M├╝hendisli─şi', city: 'Amasya', field: 'SAY', minScore: 380, minRank: 125000, quota: 60 },
    { university: 'Amasya ├£niversitesi', program: '─░n┼şaat M├╝hendisli─şi', city: 'Amasya', field: 'SAY', minScore: 370, minRank: 145000, quota: 65 },
    { university: 'Amasya ├£niversitesi', program: 'Hem┼şirelik', city: 'Amasya', field: 'SAY', minScore: 352, minRank: 195000, quota: 50 },
    { university: 'Ardahan ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Ardahan', field: 'SAY', minScore: 375, minRank: 135000, quota: 55 },
    { university: 'Ardahan ├£niversitesi', program: '─░n┼şaat M├╝hendisli─şi', city: 'Ardahan', field: 'SAY', minScore: 365, minRank: 160000, quota: 60 },
    { university: 'Artvin ├çoruh ├£niversitesi', program: 'Orman M├╝hendisli─şi', city: 'Artvin', field: 'SAY', minScore: 370, minRank: 145000, quota: 65 },
    { university: 'Artvin ├çoruh ├£niversitesi', program: 'Hem┼şirelik', city: 'Artvin', field: 'SAY', minScore: 348, minRank: 205000, quota: 45 },
    { university: 'Bart─▒n ├£niversitesi', program: 'Orman End├╝stri M├╝hendisli─şi', city: 'Bart─▒n', field: 'SAY', minScore: 368, minRank: 155000, quota: 60 },
    { university: 'Bart─▒n ├£niversitesi', program: 'Hem┼şirelik', city: 'Bart─▒n', field: 'SAY', minScore: 350, minRank: 200000, quota: 50 },
    { university: 'Bayburt ├£niversitesi', program: '─░n┼şaat M├╝hendisli─şi', city: 'Bayburt', field: 'SAY', minScore: 365, minRank: 160000, quota: 55 },
    { university: 'Bayburt ├£niversitesi', program: 'Hem┼şirelik', city: 'Bayburt', field: 'SAY', minScore: 345, minRank: 210000, quota: 45 },
    { university: 'Bilecik ┼Şeyh Edebali ├£niversitesi', program: 'Makine M├╝hendisli─şi', city: 'Bilecik', field: 'SAY', minScore: 378, minRank: 130000, quota: 65 },
    { university: 'Bilecik ┼Şeyh Edebali ├£niversitesi', program: 'Hem┼şirelik', city: 'Bilecik', field: 'SAY', minScore: 353, minRank: 192000, quota: 50 },
    { university: 'Bing├Âl ├£niversitesi', program: '─░n┼şaat M├╝hendisli─şi', city: 'Bing├Âl', field: 'SAY', minScore: 368, minRank: 155000, quota: 60 },
    { university: 'Bing├Âl ├£niversitesi', program: 'Hem┼şirelik', city: 'Bing├Âl', field: 'SAY', minScore: 347, minRank: 208000, quota: 45 },
    { university: 'Bitlis Eren ├£niversitesi', program: '─░n┼şaat M├╝hendisli─şi', city: 'Bitlis', field: 'SAY', minScore: 365, minRank: 162000, quota: 55 },
    { university: 'Bitlis Eren ├£niversitesi', program: 'Hem┼şirelik', city: 'Bitlis', field: 'SAY', minScore: 345, minRank: 212000, quota: 45 },
    { university: '├çank─▒r─▒ Karatekin ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: '├çank─▒r─▒', field: 'SAY', minScore: 382, minRank: 118000, quota: 60 },
    { university: '├çank─▒r─▒ Karatekin ├£niversitesi', program: 'Hem┼şirelik', city: '├çank─▒r─▒', field: 'SAY', minScore: 351, minRank: 198000, quota: 50 },
    { university: 'Giresun ├£niversitesi', program: 'Deniz Bilimleri ve Teknolojisi M├╝hendisli─şi', city: 'Giresun', field: 'SAY', minScore: 372, minRank: 142000, quota: 55 },
    { university: 'Giresun ├£niversitesi', program: 'Hem┼şirelik', city: 'Giresun', field: 'SAY', minScore: 349, minRank: 203000, quota: 48 },
    { university: 'G├╝m├╝┼şhane ├£niversitesi', program: '─░n┼şaat M├╝hendisli─şi', city: 'G├╝m├╝┼şhane', field: 'SAY', minScore: 370, minRank: 148000, quota: 60 },
    { university: 'G├╝m├╝┼şhane ├£niversitesi', program: 'Hem┼şirelik', city: 'G├╝m├╝┼şhane', field: 'SAY', minScore: 346, minRank: 209000, quota: 45 },
    { university: 'Hakkari ├£niversitesi', program: '─░n┼şaat M├╝hendisli─şi', city: 'Hakkari', field: 'SAY', minScore: 363, minRank: 168000, quota: 50 },
    { university: 'Hakkari ├£niversitesi', program: 'Hem┼şirelik', city: 'Hakkari', field: 'SAY', minScore: 343, minRank: 218000, quota: 40 },
    { university: 'I─şd─▒r ├£niversitesi', program: 'Ziraat M├╝hendisli─şi', city: 'I─şd─▒r', field: 'SAY', minScore: 365, minRank: 162000, quota: 55 },
    { university: 'I─şd─▒r ├£niversitesi', program: 'Hem┼şirelik', city: 'I─şd─▒r', field: 'SAY', minScore: 344, minRank: 215000, quota: 42 },
    { university: 'Karab├╝k ├£niversitesi', program: 'Makine M├╝hendisli─şi', city: 'Karab├╝k', field: 'SAY', minScore: 385, minRank: 108000, quota: 70 },
    { university: 'Karab├╝k ├£niversitesi', program: 'Hem┼şirelik', city: 'Karab├╝k', field: 'SAY', minScore: 356, minRank: 188000, quota: 55 },
    { university: 'Karaman ├£niversitesi', program: 'Bilgisayar M├╝hendisli─şi', city: 'Karaman', field: 'SAY', minScore: 380, minRank: 122000, quota: 60 },
    { university: 'Karaman ├£niversitesi', program: 'Hem┼şirelik', city: 'Karaman', field: 'SAY', minScore: 352, minRank: 196000, quota: 50 },
    { university: 'Kastamonu ├£niversitesi', program: 'Orman M├╝hendisli─şi', city: 'Kastamonu', field: 'SAY', minScore: 375, minRank: 138000, quota: 65 },
    { university: 'Kastamonu ├£niversitesi', program: 'Hem┼şirelik', city: 'Kastamonu', field: 'SAY', minScore: 354, minRank: 191000, quota: 52 },

    // B├Âlgesel ├£niversiteler - EA
    { university: 'A─şr─▒ ─░brahim ├çe├ğen ├£niversitesi', program: '─░┼şletme', city: 'A─şr─▒', field: 'EA', minScore: 360, minRank: 180000, quota: 80 },
    { university: 'A─şr─▒ ─░brahim ├çe├ğen ├£niversitesi', program: '─░ktisat', city: 'A─şr─▒', field: 'EA', minScore: 355, minRank: 195000, quota: 70 },
    { university: 'Aksaray ├£niversitesi', program: '─░┼şletme', city: 'Aksaray', field: 'EA', minScore: 365, minRank: 170000, quota: 85 },
    { university: 'Aksaray ├£niversitesi', program: '─░ktisat', city: 'Aksaray', field: 'EA', minScore: 358, minRank: 188000, quota: 75 },
    { university: 'Amasya ├£niversitesi', program: '─░┼şletme', city: 'Amasya', field: 'EA', minScore: 368, minRank: 165000, quota: 80 },
    { university: 'Amasya ├£niversitesi', program: '─░ktisat', city: 'Amasya', field: 'EA', minScore: 360, minRank: 182000, quota: 70 },
    { university: 'Ardahan ├£niversitesi', program: '─░┼şletme', city: 'Ardahan', field: 'EA', minScore: 358, minRank: 190000, quota: 75 },
    { university: 'Artvin ├çoruh ├£niversitesi', program: '─░┼şletme', city: 'Artvin', field: 'EA', minScore: 360, minRank: 185000, quota: 70 },
    { university: 'Bart─▒n ├£niversitesi', program: '─░┼şletme', city: 'Bart─▒n', field: 'EA', minScore: 363, minRank: 175000, quota: 75 },
    { university: 'Bayburt ├£niversitesi', program: '─░┼şletme', city: 'Bayburt', field: 'EA', minScore: 356, minRank: 195000, quota: 70 },
    { university: 'Bilecik ┼Şeyh Edebali ├£niversitesi', program: '─░┼şletme', city: 'Bilecik', field: 'EA', minScore: 366, minRank: 168000, quota: 80 },
    { university: 'Bing├Âl ├£niversitesi', program: '─░┼şletme', city: 'Bing├Âl', field: 'EA', minScore: 359, minRank: 188000, quota: 75 },
    { university: 'Bitlis Eren ├£niversitesi', program: '─░┼şletme', city: 'Bitlis', field: 'EA', minScore: 357, minRank: 192000, quota: 70 },
    { university: '├çank─▒r─▒ Karatekin ├£niversitesi', program: '─░┼şletme', city: '├çank─▒r─▒', field: 'EA', minScore: 364, minRank: 172000, quota: 78 },
    { university: 'Giresun ├£niversitesi', program: '─░┼şletme', city: 'Giresun', field: 'EA', minScore: 362, minRank: 178000, quota: 75 },
    { university: 'G├╝m├╝┼şhane ├£niversitesi', program: '─░┼şletme', city: 'G├╝m├╝┼şhane', field: 'EA', minScore: 360, minRank: 183000, quota: 72 },
    { university: 'Karab├╝k ├£niversitesi', program: '─░┼şletme', city: 'Karab├╝k', field: 'EA', minScore: 370, minRank: 158000, quota: 85 },
    { university: 'Karaman ├£niversitesi', program: '─░┼şletme', city: 'Karaman', field: 'EA', minScore: 365, minRank: 170000, quota: 80 },
    { university: 'Kastamonu ├£niversitesi', program: '─░┼şletme', city: 'Kastamonu', field: 'EA', minScore: 367, minRank: 165000, quota: 82 },

    // B├Âlgesel ├£niversiteler - SOZ
    { university: 'A─şr─▒ ─░brahim ├çe├ğen ├£niversitesi', program: 'T├╝rk├ğe ├û─şretmenli─şi', city: 'A─şr─▒', field: 'SOZ', minScore: 365, minRank: 150000, quota: 70 },
    { university: 'A─şr─▒ ─░brahim ├çe├ğen ├£niversitesi', program: 'Sosyoloji', city: 'A─şr─▒', field: 'SOZ', minScore: 355, minRank: 175000, quota: 60 },
    { university: 'Aksaray ├£niversitesi', program: 'T├╝rk├ğe ├û─şretmenli─şi', city: 'Aksaray', field: 'SOZ', minScore: 368, minRank: 145000, quota: 75 },
    { university: 'Aksaray ├£niversitesi', program: 'Sosyoloji', city: 'Aksaray', field: 'SOZ', minScore: 358, minRank: 168000, quota: 65 },
    { university: 'Amasya ├£niversitesi', program: 'T├╝rk├ğe ├û─şretmenli─şi', city: 'Amasya', field: 'SOZ', minScore: 370, minRank: 142000, quota: 78 },
    { university: 'Amasya ├£niversitesi', program: 'Tarih', city: 'Amasya', field: 'SOZ', minScore: 360, minRank: 165000, quota: 60 },
    { university: 'Ardahan ├£niversitesi', program: 'T├╝rk├ğe ├û─şretmenli─şi', city: 'Ardahan', field: 'SOZ', minScore: 363, minRank: 155000, quota: 65 },
    { university: 'Artvin ├çoruh ├£niversitesi', program: 'Sosyal Bilgiler ├û─şretmenli─şi', city: 'Artvin', field: 'SOZ', minScore: 362, minRank: 158000, quota: 70 },
    { university: 'Bart─▒n ├£niversitesi', program: 'T├╝rk├ğe ├û─şretmenli─şi', city: 'Bart─▒n', field: 'SOZ', minScore: 366, minRank: 148000, quota: 72 },
    { university: 'Bayburt ├£niversitesi', program: 'T├╝rk├ğe ├û─şretmenli─şi', city: 'Bayburt', field: 'SOZ', minScore: 361, minRank: 162000, quota: 65 },
    { university: 'Bilecik ┼Şeyh Edebali ├£niversitesi', program: 'T├╝rk├ğe ├û─şretmenli─şi', city: 'Bilecik', field: 'SOZ', minScore: 369, minRank: 143000, quota: 75 },
    { university: 'Bing├Âl ├£niversitesi', program: 'T├╝rk├ğe ├û─şretmenli─şi', city: 'Bing├Âl', field: 'SOZ', minScore: 364, minRank: 153000, quota: 68 },
    { university: 'Bitlis Eren ├£niversitesi', program: 'T├╝rk├ğe ├û─şretmenli─şi', city: 'Bitlis', field: 'SOZ', minScore: 362, minRank: 158000, quota: 65 },
    { university: '├çank─▒r─▒ Karatekin ├£niversitesi', program: 'T├╝rk├ğe ├û─şretmenli─şi', city: '├çank─▒r─▒', field: 'SOZ', minScore: 367, minRank: 147000, quota: 73 },
    { university: 'Giresun ├£niversitesi', program: 'T├╝rk├ğe ├û─şretmenli─şi', city: 'Giresun', field: 'SOZ', minScore: 365, minRank: 151000, quota: 70 },
    { university: 'G├╝m├╝┼şhane ├£niversitesi', program: 'T├╝rk├ğe ├û─şretmenli─şi', city: 'G├╝m├╝┼şhane', field: 'SOZ', minScore: 363, minRank: 156000, quota: 68 },
    { university: 'Karab├╝k ├£niversitesi', program: 'T├╝rk├ğe ├û─şretmenli─şi', city: 'Karab├╝k', field: 'SOZ', minScore: 372, minRank: 138000, quota: 80 },
    { university: 'Karaman ├£niversitesi', program: 'T├╝rk├ğe ├û─şretmenli─şi', city: 'Karaman', field: 'SOZ', minScore: 368, minRank: 145000, quota: 75 },
    { university: 'Kastamonu ├£niversitesi', program: 'T├╝rk├ğe ├û─şretmenli─şi', city: 'Kastamonu', field: 'SOZ', minScore: 370, minRank: 141000, quota: 77 },

    // Vak─▒f ├£niversiteleri - Orta Seviye
    { university: '─░stanbul Ayd─▒n ├£niversitesi (Vak─▒f)', program: 'Bilgisayar M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 370, minRank: 145000, quota: 60 },
    { university: '─░stanbul Ayd─▒n ├£niversitesi (Vak─▒f)', program: '─░┼şletme', city: '─░stanbul', field: 'EA', minScore: 365, minRank: 168000, quota: 80 },
    { university: '─░stanbul Geli┼şim ├£niversitesi (Vak─▒f)', program: 'Bilgisayar M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 368, minRank: 150000, quota: 55 },
    { university: '─░stanbul Geli┼şim ├£niversitesi (Vak─▒f)', program: '─░┼şletme', city: '─░stanbul', field: 'EA', minScore: 363, minRank: 172000, quota: 75 },
    { university: 'Beykent ├£niversitesi (Vak─▒f)', program: 'Bilgisayar M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 365, minRank: 155000, quota: 50 },
    { university: 'Beykent ├£niversitesi (Vak─▒f)', program: '─░┼şletme', city: '─░stanbul', field: 'EA', minScore: 360, minRank: 178000, quota: 70 },
    { university: 'Hali├ğ ├£niversitesi (Vak─▒f)', program: 'Bilgisayar M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 372, minRank: 142000, quota: 55 },
    { university: 'Hali├ğ ├£niversitesi (Vak─▒f)', program: '─░┼şletme', city: '─░stanbul', field: 'EA', minScore: 367, minRank: 165000, quota: 75 },
    { university: 'Maltepe ├£niversitesi (Vak─▒f)', program: 'Bilgisayar M├╝hendisli─şi', city: '─░stanbul', field: 'SAY', minScore: 375, minRank: 138000, quota: 58 },
    { university: 'Maltepe ├£niversitesi (Vak─▒f)', program: '─░┼şletme', city: '─░stanbul', field: 'EA', minScore: 370, minRank: 160000, quota: 78 },
    { university: 'At─▒l─▒m ├£niversitesi (Vak─▒f)', program: 'Bilgisayar M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 395, minRank: 65000, quota: 65 },
    { university: 'At─▒l─▒m ├£niversitesi (Vak─▒f)', program: '─░┼şletme', city: 'Ankara', field: 'EA', minScore: 385, minRank: 95000, quota: 80 },
    { university: '├çankaya ├£niversitesi (Vak─▒f)', program: 'Bilgisayar M├╝hendisli─şi', city: 'Ankara', field: 'SAY', minScore: 390, minRank: 72000, quota: 60 },
    { university: '├çankaya ├£niversitesi (Vak─▒f)', program: '─░┼şletme', city: 'Ankara', field: 'EA', minScore: 380, minRank: 102000, quota: 75 },
]

// S─▒ralamaya g├Âre uygun b├Âl├╝mleri getir
export function getMatchingPrograms(rank: number, field: 'say' | 'ea' | 'soz' | 'dil', limit: number = 500): UniversityProgram[] {
    const fieldMap = {
        say: 'SAY',
        ea: 'EA',
        soz: 'SOZ',
        dil: 'DIL'
    }

    // Kullan─▒c─▒n─▒n s─▒ralamas─▒ program─▒n minimum s─▒ralamas─▒ndan k├╝├ğ├╝k veya e┼şit olmal─▒
    // Yani kullan─▒c─▒ daha iyi s─▒ralamada olmal─▒
    // %20 tolerans: Kullan─▒c─▒ s─▒ralamas─▒ biraz daha k├Ât├╝ olsa bile g├Âster
    return universityPrograms
        .filter(p => p.field === fieldMap[field] && rank <= p.minRank * 1.2)
        .sort((a, b) => b.minScore - a.minScore)
        .slice(0, limit)
}
