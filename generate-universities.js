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
    'Zonguldak Bülent Ecevit Üniversitesi', 'Adana Alparslan Türkeş Bilim ve Teknoloji Üniversitesi',
    'Afyon Kocatepe Üniversitesi', 'Ahi Evran Üniversitesi', 'Alanya Alaaddin Keykubat Üniversitesi',
    'Anadolu Üniversitesi', 'Artuklu Üniversitesi', 'Bandırma Onyedi Eylül Üniversitesi',
    'Batman Üniversitesi', 'Bolu Abant İzzet Baysal Üniversitesi', 'Burdur Mehmet Akif Ersoy Üniversitesi',
    'Bursa Teknik Üniversitesi', 'Çanakkale Onsekiz Mart Üniversitesi', 'Düzce Üniversitesi',
    'Erzincan Binali Yıldırım Üniversitesi', 'Eskişehir Osmangazi Üniversitesi', 'Eskişehir Teknik Üniversitesi',
    'Gaziosmanpaşa Üniversitesi', 'Hitit Üniversitesi', 'İskenderun Teknik Üniversitesi',
    'İzmir Katip Çelebi Üniversitesi', 'Kayseri Üniversitesi', 'Kırşehir Ahi Evran Üniversitesi',
    'Kütahya Dumlupınar Üniversitesi', 'Malatya Turgut Özal Üniversitesi', 'Munzur Üniversitesi',
    'Ordu Üniversitesi', 'Recep Tayyip Erdoğan Üniversitesi', 'Sivas Bilim ve Teknoloji Üniversitesi',
    'Tekirdağ Namık Kemal Üniversitesi', 'Tunceli Munzur Üniversitesi', 'Van Yüzüncü Yıl Üniversitesi'
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
    'İzmir Ekonomi Üniversitesi (Vakıf)', 'Yaşar Üniversitesi (Vakıf)',
    'Acıbadem Mehmet Ali Aydınlar Üniversitesi (Vakıf)', 'Altınbaş Üniversitesi (Vakıf)',
    'Antalya Bilim Üniversitesi (Vakıf)', 'Biruni Üniversitesi (Vakıf)',
    'Doğuş Üniversitesi (Vakıf)', 'Fatih Sultan Mehmet Vakıf Üniversitesi (Vakıf)',
    'Fenerbahçe Üniversitesi (Vakıf)', 'İbn Haldun Üniversitesi (Vakıf)',
    'İstanbul 29 Mayıs Üniversitesi (Vakıf)', 'İstanbul Bilgi Üniversitesi (Vakıf)',
    'İstanbul Esenyurt Üniversitesi (Vakıf)', 'İstanbul Medipol Üniversitesi (Vakıf)',
    'İstanbul Rumeli Üniversitesi (Vakıf)', 'İstanbul Sabahattin Zaim Üniversitesi (Vakıf)',
    'İstanbul Topkapı Üniversitesi (Vakıf)', 'İstinye Üniversitesi (Vakıf)',
    'Kadir Has Üniversitesi (Vakıf)', 'MEF Üniversitesi (Vakıf)',
    'Nişantaşı Üniversitesi (Vakıf)', 'Piri Reis Üniversitesi (Vakıf)',
    'TED Üniversitesi (Vakıf)', 'TOBB Ekonomi ve Teknoloji Üniversitesi (Vakıf)',
    'Ufuk Üniversitesi (Vakıf)', 'Yeni Yüzyıl Üniversitesi (Vakıf)'
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
    'Yaşar Üniversitesi (Vakıf)': 'İzmir',
    'Adana Alparslan Türkeş Bilim ve Teknoloji Üniversitesi': 'Adana',
    'Afyon Kocatepe Üniversitesi': 'Afyonkarahisar',
    'Ahi Evran Üniversitesi': 'Kırşehir',
    'Alanya Alaaddin Keykubat Üniversitesi': 'Antalya',
    'Anadolu Üniversitesi': 'Eskişehir',
    'Artuklu Üniversitesi': 'Mardin',
    'Bandırma Onyedi Eylül Üniversitesi': 'Balıkesir',
    'Batman Üniversitesi': 'Batman',
    'Bolu Abant İzzet Baysal Üniversitesi': 'Bolu',
    'Burdur Mehmet Akif Ersoy Üniversitesi': 'Burdur',
    'Bursa Teknik Üniversitesi': 'Bursa',
    'Çanakkale Onsekiz Mart Üniversitesi': 'Çanakkale',
    'Düzce Üniversitesi': 'Düzce',
    'Erzincan Binali Yıldırım Üniversitesi': 'Erzincan',
    'Eskişehir Osmangazi Üniversitesi': 'Eskişehir',
    'Eskişehir Teknik Üniversitesi': 'Eskişehir',
    'Gaziosmanpaşa Üniversitesi': 'Tokat',
    'Hitit Üniversitesi': 'Çorum',
    'İskenderun Teknik Üniversitesi': 'Hatay',
    'İzmir Katip Çelebi Üniversitesi': 'İzmir',
    'Kayseri Üniversitesi': 'Kayseri',
    'Kütahya Dumlupınar Üniversitesi': 'Kütahya',
    'Malatya Turgut Özal Üniversitesi': 'Malatya',
    'Munzur Üniversitesi': 'Tunceli',
    'Ordu Üniversitesi': 'Ordu',
    'Recep Tayyip Erdoğan Üniversitesi': 'Rize',
    'Sivas Bilim ve Teknoloji Üniversitesi': 'Sivas',
    'Tekirdağ Namık Kemal Üniversitesi': 'Tekirdağ',
    'Tunceli Munzur Üniversitesi': 'Tunceli',
    'Van Yüzüncü Yıl Üniversitesi': 'Van',
    'Acıbadem Mehmet Ali Aydınlar Üniversitesi (Vakıf)': 'İstanbul',
    'Altınbaş Üniversitesi (Vakıf)': 'İstanbul',
    'Antalya Bilim Üniversitesi (Vakıf)': 'Antalya',
    'Biruni Üniversitesi (Vakıf)': 'İstanbul',
    'Doğuş Üniversitesi (Vakıf)': 'İstanbul',
    'Fatih Sultan Mehmet Vakıf Üniversitesi (Vakıf)': 'İstanbul',
    'Fenerbahçe Üniversitesi (Vakıf)': 'İstanbul',
    'İbn Haldun Üniversitesi (Vakıf)': 'İstanbul',
    'İstanbul 29 Mayıs Üniversitesi (Vakıf)': 'İstanbul',
    'İstanbul Bilgi Üniversitesi (Vakıf)': 'İstanbul',
    'İstanbul Esenyurt Üniversitesi (Vakıf)': 'İstanbul',
    'İstanbul Medipol Üniversitesi (Vakıf)': 'İstanbul',
    'İstanbul Rumeli Üniversitesi (Vakıf)': 'İstanbul',
    'İstanbul Sabahattin Zaim Üniversitesi (Vakıf)': 'İstanbul',
    'İstanbul Topkapı Üniversitesi (Vakıf)': 'İstanbul',
    'İstinye Üniversitesi (Vakıf)': 'İstanbul',
    'Kadir Has Üniversitesi (Vakıf)': 'İstanbul',
    'MEF Üniversitesi (Vakıf)': 'İstanbul',
    'Nişantaşı Üniversitesi (Vakıf)': 'İstanbul',
    'Piri Reis Üniversitesi (Vakıf)': 'İstanbul',
    'TED Üniversitesi (Vakıf)': 'Ankara',
    'TOBB Ekonomi ve Teknoloji Üniversitesi (Vakıf)': 'Ankara',
    'Ufuk Üniversitesi (Vakıf)': 'Ankara',
    'Yeni Yüzyıl Üniversitesi (Vakıf)': 'İstanbul'
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
        { name: 'Biyoloji', baseScore: 370, baseRank: 100000, quota: 50 },
        { name: 'Ziraat Mühendisliği', baseScore: 375, baseRank: 90000, quota: 60 },
        { name: 'Gıda Mühendisliği', baseScore: 380, baseRank: 80000, quota: 55 },
        { name: 'Çevre Mühendisliği', baseScore: 385, baseRank: 75000, quota: 50 },
        { name: 'Jeoloji Mühendisliği', baseScore: 370, baseRank: 100000, quota: 45 },
        { name: 'Harita Mühendisliği', baseScore: 375, baseRank: 95000, quota: 50 },
        { name: 'Orman Mühendisliği', baseScore: 365, baseRank: 110000, quota: 55 },
        { name: 'Peyzaj Mimarlığı', baseScore: 370, baseRank: 105000, quota: 45 },
        { name: 'Şehir ve Bölge Planlama', baseScore: 380, baseRank: 85000, quota: 50 }
    ],
    EA: [
        { name: 'İşletme', baseScore: 400, baseRank: 50000, quota: 100 },
        { name: 'İktisat', baseScore: 395, baseRank: 55000, quota: 80 },
        { name: 'Uluslararası İlişkiler', baseScore: 410, baseRank: 35000, quota: 60 },
        { name: 'Siyaset Bilimi ve Kamu Yönetimi', baseScore: 390, baseRank: 60000, quota: 70 },
        { name: 'Maliye', baseScore: 385, baseRank: 70000, quota: 65 },
        { name: 'Çalışma Ekonomisi ve Endüstri İlişkileri', baseScore: 375, baseRank: 90000, quota: 55 },
        { name: 'Turizm İşletmeciliği', baseScore: 370, baseRank: 100000, quota: 80 },
        { name: 'Gastronomi ve Mutfak Sanatları', baseScore: 365, baseRank: 110000, quota: 60 },
        { name: 'Uluslararası Ticaret ve Lojistik', baseScore: 380, baseRank: 80000, quota: 70 },
        { name: 'Bankacılık ve Finans', baseScore: 385, baseRank: 75000, quota: 65 },
        { name: 'Muhasebe ve Finansal Yönetim', baseScore: 375, baseRank: 90000, quota: 75 },
        { name: 'İnsan Kaynakları Yönetimi', baseScore: 370, baseRank: 100000, quota: 60 }
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
        { name: 'Okul Öncesi Öğretmenliği', baseScore: 390, baseRank: 60000, quota: 90 },
        { name: 'Rehberlik ve Psikolojik Danışmanlık', baseScore: 400, baseRank: 50000, quota: 70 },
        { name: 'Radyo, Televizyon ve Sinema', baseScore: 380, baseRank: 80000, quota: 60 },
        { name: 'Gazetecilik', baseScore: 375, baseRank: 90000, quota: 55 },
        { name: 'Halkla İlişkiler ve Tanıtım', baseScore: 370, baseRank: 100000, quota: 65 }
    ],
    DIL: [
        { name: 'İngiliz Dili ve Edebiyatı', baseScore: 420, baseRank: 25000, quota: 60 },
        { name: 'Mütercim Tercümanlık (İngilizce)', baseScore: 425, baseRank: 20000, quota: 55 },
        { name: 'İngilizce Öğretmenliği', baseScore: 430, baseRank: 18000, quota: 70 },
        { name: 'Alman Dili ve Edebiyatı', baseScore: 400, baseRank: 50000, quota: 45 },
        { name: 'Fransız Dili ve Edebiyatı', baseScore: 400, baseRank: 50000, quota: 45 },
        { name: 'Rus Dili ve Edebiyatı', baseScore: 385, baseRank: 70000, quota: 40 }
    ]
};

// Veri üret
let output = [];
let count = 0;

// Bölgesel üniversiteler için
regionalUniversities.forEach(uni => {
    const city = cities[uni];

    // SAY programları - daha fazla program
    programs.SAY.slice(0, 10).forEach(prog => {
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

    // EA programları - daha fazla program
    programs.EA.slice(0, 6).forEach(prog => {
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

    // SOZ programları - daha fazla program
    programs.SOZ.slice(0, 6).forEach(prog => {
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

    // DIL programları
    if (Math.random() > 0.5) { // %50 üniversitede dil programı var
        programs.DIL.slice(0, 2).forEach(prog => {
            const variance = Math.random() * 20 - 10;
            output.push({
                university: uni,
                program: prog.name,
                city: city,
                field: 'DIL',
                minScore: Math.round(prog.baseScore + variance),
                minRank: Math.round(prog.baseRank * (1 + Math.random() * 0.3)),
                quota: prog.quota
            });
            count++;
        });
    }
});

// Vakıf üniversiteleri için
vakifUniversities.forEach(uni => {
    const city = cities[uni];

    // SAY programları - daha fazla program
    programs.SAY.slice(0, 8).forEach(prog => {
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

    // EA programları - daha fazla program
    programs.EA.slice(0, 6).forEach(prog => {
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

    // SOZ programları
    programs.SOZ.slice(0, 4).forEach(prog => {
        const variance = Math.random() * 30 - 15;
        output.push({
            university: uni,
            program: prog.name,
            city: city,
            field: 'SOZ',
            minScore: Math.round(prog.baseScore + variance - 20),
            minRank: Math.round(prog.baseRank * (1.2 + Math.random() * 0.5)),
            quota: Math.round(prog.quota * 0.7)
        });
        count++;
    });

    // DIL programları
    programs.DIL.slice(0, 2).forEach(prog => {
        const variance = Math.random() * 30 - 15;
        output.push({
            university: uni,
            program: prog.name,
            city: city,
            field: 'DIL',
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
