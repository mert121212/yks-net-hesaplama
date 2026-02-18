// Üniversite Verisi Üretici
// Gerçekçi taban puanları ve sıralamalarla orta-alt seviye üniversiteler

const fs = require('fs');

// Bölgesel Devlet Üniversiteleri
const regionalUniversities = [
    'Ağrı İbrahim Çeçen Üniversitesi', 'Aksaray Üniversitesi', 'Amasya Üniversitesi',
    'Ardahan Üniversitesi', 'Artvin Çoruh Üniversitesi', 'Bartın Üniversitesi',
    'Bayburt Üniversitesi', 'Bilecik Şeyh Edebali Üniversitesi', 'Bingöl Üniversitesi',
    'Bitlis Eren Üniversitesi', 'Çankırı Karatekin Üniversitesi', 'Giresun Üniversitesi',
    'Gümüşhane Üniversitesi', 'Hakkari Üniversitesi', 'Iğdır Üniversitesi',
    'Karabük Üniversitesi', 'Karaman Üniversitesi', 'Kastamonu Üniversitesi',
    'Kilis 7 Aralık Üniversitesi', 'Kırklareli Üniversitesi', 'Kırşehir Ahi Evran Üniversitesi',
    'Mardin Artuklu Üniversitesi', 'Muş Alparslan Üniversitesi', 'Nevşehir Hacı Bektaş Veli Üniversitesi',
    'Niğde Ömer Halisdemir Üniversitesi', 'Osmaniye Korkut Ata Üniversitesi',
    'Siirt Üniversitesi', 'Sinop Üniversitesi', 'Şırnak Üniversitesi',
    'Tokat Gaziosmanpaşa Üniversitesi', 'Uşak Üniversitesi', 'Yalova Üniversitesi',
    'Zonguldak Bülent Ecevit Üniversitesi'
];

// Vakıf Üniversiteleri (Orta Seviye)
const vakifUniversities = [
    'İstanbul Aydın Üniversitesi (Vakıf)', 'İstanbul Gelişim Üniversitesi (Vakıf)',
    'İstanbul Kültür Üniversitesi (Vakıf)', 'İstanbul Ticaret Üniversitesi (Vakıf)',
    'Beykent Üniversitesi (Vakıf)', 'Haliç Üniversitesi (Vakıf)',
    'İstanbul Arel Üniversitesi (Vakıf)', 'Maltepe Üniversitesi (Vakıf)',
    'Okan Üniversitesi (Vakıf)', 'Üsküdar Üniversitesi (Vakıf)',
    'Yeditepe Üniversitesi (Vakıf)', 'Atılım Üniversitesi (Vakıf)',
    'Başkent Üniversitesi (Vakıf)', 'Çankaya Üniversitesi (Vakıf)',
    'İzmir Ekonomi Üniversitesi (Vakıf)', 'Yaşar Üniversitesi (Vakıf)'
];

// Şehirler
const cities = {
    'Ağrı İbrahim Çeçen Üniversitesi': 'Ağrı',
    'Aksaray Üniversitesi': 'Aksaray',
    'Amasya Üniversitesi': 'Amasya',
    'Ardahan Üniversitesi': 'Ardahan',
    'Artvin Çoruh Üniversitesi': 'Artvin',
    'Bartın Üniversitesi': 'Bartın',
    'Bayburt Üniversitesi': 'Bayburt',
    'Bilecik Şeyh Edebali Üniversitesi': 'Bilecik',
    'Bingöl Üniversitesi': 'Bingöl',
    'Bitlis Eren Üniversitesi': 'Bitlis',
    'Çankırı Karatekin Üniversitesi': 'Çankırı',
    'Giresun Üniversitesi': 'Giresun',
    'Gümüşhane Üniversitesi': 'Gümüşhane',
    'Hakkari Üniversitesi': 'Hakkari',
    'Iğdır Üniversitesi': 'Iğdır',
    'Karabük Üniversitesi': 'Karabük',
    'Karaman Üniversitesi': 'Karaman',
    'Kastamonu Üniversitesi': 'Kastamonu',
    'Kilis 7 Aralık Üniversitesi': 'Kilis',
    'Kırklareli Üniversitesi': 'Kırklareli',
    'Kırşehir Ahi Evran Üniversitesi': 'Kırşehir',
    'Mardin Artuklu Üniversitesi': 'Mardin',
    'Muş Alparslan Üniversitesi': 'Muş',
    'Nevşehir Hacı Bektaş Veli Üniversitesi': 'Nevşehir',
    'Niğde Ömer Halisdemir Üniversitesi': 'Niğde',
    'Osmaniye Korkut Ata Üniversitesi': 'Osmaniye',
    'Siirt Üniversitesi': 'Siirt',
    'Sinop Üniversitesi': 'Sinop',
    'Şırnak Üniversitesi': 'Şırnak',
    'Tokat Gaziosmanpaşa Üniversitesi': 'Tokat',
    'Uşak Üniversitesi': 'Uşak',
    'Yalova Üniversitesi': 'Yalova',
    'Zonguldak Bülent Ecevit Üniversitesi': 'Zonguldak',
    'İstanbul Aydın Üniversitesi (Vakıf)': 'İstanbul',
    'İstanbul Gelişim Üniversitesi (Vakıf)': 'İstanbul',
    'İstanbul Kültür Üniversitesi (Vakıf)': 'İstanbul',
    'İstanbul Ticaret Üniversitesi (Vakıf)': 'İstanbul',
    'Beykent Üniversitesi (Vakıf)': 'İstanbul',
    'Haliç Üniversitesi (Vakıf)': 'İstanbul',
    'İstanbul Arel Üniversitesi (Vakıf)': 'İstanbul',
    'Maltepe Üniversitesi (Vakıf)': 'İstanbul',
    'Okan Üniversitesi (Vakıf)': 'İstanbul',
    'Üsküdar Üniversitesi (Vakıf)': 'İstanbul',
    'Yeditepe Üniversitesi (Vakıf)': 'İstanbul',
    'Atılım Üniversitesi (Vakıf)': 'Ankara',
    'Başkent Üniversitesi (Vakıf)': 'Ankara',
    'Çankaya Üniversitesi (Vakıf)': 'Ankara',
    'İzmir Ekonomi Üniversitesi (Vakıf)': 'İzmir',
    'Yaşar Üniversitesi (Vakıf)': 'İzmir'
};

// Popüler Bölümler
const programs = {
    SAY: [
        { name: 'Bilgisayar Mühendisliği', baseScore: 420, baseRank: 25000, quota: 80 },
        { name: 'Elektrik-Elektronik Mühendisliği', baseScore: 410, baseRank: 35000, quota: 70 },
        { name: 'Makine Mühendisliği', baseScore: 405, baseRank: 40000, quota: 75 },
        { name: 'İnşaat Mühendisliği', baseScore: 400, baseRank: 45000, quota: 80 },
        { name: 'Endüstri Mühendisliği', baseScore: 415, baseRank: 30000, quota: 65 },
        { name: 'Hemşirelik', baseScore: 380, baseRank: 80000, quota: 60 },
        { name: 'Fizyoterapi ve Rehabilitasyon', baseScore: 390, baseRank: 60000, quota: 50 },
        { name: 'Beslenme ve Diyetetik', baseScore: 385, baseRank: 70000, quota: 45 },
        { name: 'Matematik', baseScore: 370, baseRank: 100000, quota: 50 },
        { name: 'Fizik', baseScore: 365, baseRank: 110000, quota: 45 },
        { name: 'Kimya', baseScore: 365, baseRank: 110000, quota: 45 },
        { name: 'Biyoloji', baseScore: 370, baseRank: 100000, quota: 50 }
    ],
    EA: [
        { name: 'İşletme', baseScore: 400, baseRank: 50000, quota: 100 },
        { name: 'İktisat', baseScore: 395, baseRank: 55000, quota: 80 },
        { name: 'Uluslararası İlişkiler', baseScore: 410, baseRank: 35000, quota: 60 },
        { name: 'Siyaset Bilimi ve Kamu Yönetimi', baseScore: 390, baseRank: 60000, quota: 70 },
        { name: 'Maliye', baseScore: 385, baseRank: 70000, quota: 65 },
        { name: 'Çalışma Ekonomisi ve Endüstri İlişkileri', baseScore: 375, baseRank: 90000, quota: 55 },
        { name: 'Turizm İşletmeciliği', baseScore: 370, baseRank: 100000, quota: 80 },
        { name: 'Gastronomi ve Mutfak Sanatları', baseScore: 365, baseRank: 110000, quota: 60 }
    ],
    SOZ: [
        { name: 'Psikoloji', baseScore: 420, baseRank: 25000, quota: 70 },
        { name: 'Sosyoloji', baseScore: 385, baseRank: 70000, quota: 60 },
        { name: 'Türk Dili ve Edebiyatı', baseScore: 380, baseRank: 80000, quota: 65 },
        { name: 'Tarih', baseScore: 375, baseRank: 90000, quota: 55 },
        { name: 'Felsefe', baseScore: 370, baseRank: 100000, quota: 50 },
        { name: 'Coğrafya', baseScore: 365, baseRank: 110000, quota: 50 },
        { name: 'Arkeoloji', baseScore: 360, baseRank: 120000, quota: 40 },
        { name: 'Sanat Tarihi', baseScore: 365, baseRank: 110000, quota: 45 },
        { name: 'Türkçe Öğretmenliği', baseScore: 390, baseRank: 60000, quota: 80 },
        { name: 'Sosyal Bilgiler Öğretmenliği', baseScore: 385, baseRank: 70000, quota: 75 },
        { name: 'Sınıf Öğretmenliği', baseScore: 395, baseRank: 55000, quota: 100 },
        { name: 'Okul Öncesi Öğretmenliği', baseScore: 390, baseRank: 60000, quota: 90 }
    ],
    DIL: [
        { name: 'İngiliz Dili ve Edebiyatı', baseScore: 420, baseRank: 25000, quota: 60 },
        { name: 'Mütercim Tercümanlık (İngilizce)', baseScore: 425, baseRank: 20000, quota: 55 },
        { name: 'İngilizce Öğretmenliği', baseScore: 430, baseRank: 18000, quota: 70 }
    ]
};

// Veri üret
let output = [];
let count = 0;

// Bölgesel üniversiteler için
regionalUniversities.forEach(uni => {
    const city = cities[uni];

    // SAY programları
    programs.SAY.slice(0, 6).forEach(prog => {
        const variance = Math.random() * 20 - 10; // -10 ile +10 arası varyasyon
        output.push({
            university: uni,
            program: prog.name,
            city: city,
            field: 'SAY',
            minScore: Math.round(prog.baseScore + variance),
            minRank: Math.round(prog.baseRank * (1 + Math.random() * 0.3)),
            quota: prog.quota
        });
        count++;
    });

    // EA programları
    programs.EA.slice(0, 4).forEach(prog => {
        const variance = Math.random() * 20 - 10;
        output.push({
            university: uni,
            program: prog.name,
            city: city,
            field: 'EA',
            minScore: Math.round(prog.baseScore + variance),
            minRank: Math.round(prog.baseRank * (1 + Math.random() * 0.3)),
            quota: prog.quota
        });
        count++;
    });

    // SOZ programları
    programs.SOZ.slice(0, 4).forEach(prog => {
        const variance = Math.random() * 20 - 10;
        output.push({
            university: uni,
            program: prog.name,
            city: city,
            field: 'SOZ',
            minScore: Math.round(prog.baseScore + variance),
            minRank: Math.round(prog.baseRank * (1 + Math.random() * 0.3)),
            quota: prog.quota
        });
        count++;
    });
});

// Vakıf üniversiteleri için
vakifUniversities.forEach(uni => {
    const city = cities[uni];

    // SAY programları
    programs.SAY.slice(0, 5).forEach(prog => {
        const variance = Math.random() * 30 - 15;
        output.push({
            university: uni,
            program: prog.name,
            city: city,
            field: 'SAY',
            minScore: Math.round(prog.baseScore + variance - 20), // Vakıf genelde daha düşük
            minRank: Math.round(prog.baseRank * (1.2 + Math.random() * 0.5)),
            quota: Math.round(prog.quota * 0.7)
        });
        count++;
    });

    // EA programları
    programs.EA.slice(0, 4).forEach(prog => {
        const variance = Math.random() * 30 - 15;
        output.push({
            university: uni,
            program: prog.name,
            city: city,
            field: 'EA',
            minScore: Math.round(prog.baseScore + variance - 20),
            minRank: Math.round(prog.baseRank * (1.2 + Math.random() * 0.5)),
            quota: Math.round(prog.quota * 0.7)
        });
        count++;
    });
});

// TypeScript formatında çıktı
console.log(`\n// ============================================`);
console.log(`// BÖLGESEL VE VAKIF ÜNİVERSİTELERİ (${count} program)`);
console.log(`// Otomatik üretildi - ${new Date().toLocaleDateString('tr-TR')}`);
console.log(`// ============================================`);

output.forEach(item => {
    console.log(`    { university: '${item.university}', program: '${item.program}', city: '${item.city}', field: '${item.field}', minScore: ${item.minScore}, minRank: ${item.minRank}, quota: ${item.quota} },`);
});

console.log(`\n// Toplam ${count} yeni program eklendi`);
console.log(`// Mevcut 314 + Yeni ${count} = Toplam ${314 + count} program`);
