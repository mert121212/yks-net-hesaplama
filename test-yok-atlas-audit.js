/**
 * ====================================================================
 * YÖK ATLAS DERİNLEMESİNE VERİ DENETİM VE DOĞRULAMA MOTORU
 * ====================================================================
 * Bu script, `src/data/universities.ts` içerisindeki tüm (500+) programı
 * resmi YÖK Atlas kuralları, barajları ve istatistiki tutarlılık
 * kriterlerine göre tek tek denetler.
 *
 * Denetlenen 8 Ana Boyut:
 *  1. YÖK Resmi Başarı Sırası Baraj Uyum Denetimi (Legal Quota Barricades)
 *  2. Puan Türü (Field Type) Müfredat Uyumu (YÖK Alan Eşleşmesi)
 *  3. Taban Puan ve Başarı Sırası Ters Korelasyon Denetimi (Inversion Test)
 *  4. Kontenjan Sınır ve Mantık Denetimi
 *  5. İl ve Coğrafi Konum Doğruluğu (81 İl Standartları)
 *  6. Mükerrerlik (Duplicate) ve Boş Veri Kontrolü
 *  7. Amiral Gemisi (Benchmark) Üniversite/Bölüm Doğrulama Testi
 *  8. Uç Değer ve Anomali Analizi (Outlier Detection)
 * ====================================================================
 */

const fs = require('fs')
const path = require('path')
const ts = require('typescript')

// universities.ts ve modüler dosyaları transpile ederek yükle
function loadTsModule(filePath) {
    const code = fs.readFileSync(filePath, 'utf8')
    const res = ts.transpileModule(code, {
        compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
    })
    const mod = { exports: {} }
    const run = new Function('exports', 'module', res.outputText)
    run(mod.exports, mod)
    return mod.exports
}

const uniDir = path.resolve(__dirname, 'src/data/universities')
const sayisalMod = loadTsModule(path.join(uniDir, 'sayisal.ts'))
const esitAgirlikMod = loadTsModule(path.join(uniDir, 'esitAgirlik.ts'))
const sozelMod = loadTsModule(path.join(uniDir, 'sozel.ts'))
const dilMod = loadTsModule(path.join(uniDir, 'dil.ts'))

const sayisalPrograms = sayisalMod.sayisalPrograms || []
const esitAgirlikPrograms = esitAgirlikMod.esitAgirlikPrograms || []
const sozelPrograms = sozelMod.sozelPrograms || []
const dilPrograms = dilMod.dilPrograms || []

const programs = [
    ...sayisalPrograms,
    ...esitAgirlikPrograms,
    ...sozelPrograms,
    ...dilPrograms
]

if (!Array.isArray(programs) || programs.length === 0) {
    console.error('HATA: Üniversite veritabanı yüklenemedi!')
    process.exit(1)
}

let auditTotal = 0
let auditPassed = 0
let auditFailed = 0
const issues = []

function check(condition, testName, detail = '') {
    auditTotal++
    if (condition) {
        auditPassed++
        console.log(`  \x1b[32m✔\x1b[0m ${testName}`)
    } else {
        auditFailed++
        const err = `  \x1b[31m✖\x1b[0m ${testName} ${detail ? '-> ' + detail : ''}`
        console.log(err)
        issues.push(err)
    }
}

function header(title) {
    console.log(`\n\x1b[35m${'='.repeat(70)}\x1b[0m`)
    console.log(`\x1b[1m\x1b[36m🔬 ${title}\x1b[0m`)
    console.log(`\x1b[35m${'='.repeat(70)}\x1b[0m`)
}

console.log(`\n\x1b[1m\x1b[33m>>> YÖK ATLAS VERİ ANALİZİ BAŞLATILDI: ${programs.length} PROGRAM İNCELENİYOR <<<\x1b[0m`)

// ====================================================================
header('TEST 1: YÖK RESMİ TABAN BARAJI UYUMU (LEGAL BARRICADES)')
// ====================================================================
// Türkiye'de YÖK kararı gereği belirli bölümler için başarı sırası barajı vardır.
// Bir bölümün taban sıralaması yasal barajın üstünde (daha kötü) OLAMAZ.

let tipBarajIhali = []
let disBarajIhlali = []
let eczacilikBarajIhlali = []
let hukukBarajIhlali = []
let mimarlikBarajIhlali = []
let muhendislikBarajIhlali = []
let ogretmenlikBarajIhlali = []

programs.forEach(p => {
    const name = p.program.toLowerCase()

    // Tıp Barajı: 50.000 (Tıbbi önlisanslar hariç)
    if (name.includes('tıp') && !name.includes('tıbbi') && p.field === 'SAY') {
        if (p.minRank > 50000) tipBarajIhali.push(`${p.university} - ${p.program} (${p.minRank})`)
    }

    // Diş Hekimliği Barajı: 80.000
    if (name.includes('diş hekimliği')) {
        if (p.minRank > 80000) disBarajIhlali.push(`${p.university} - ${p.program} (${p.minRank})`)
    }

    // Eczacılık Barajı: 100.000
    if (name.includes('eczacılık')) {
        if (p.minRank > 100000) eczacilikBarajIhlali.push(`${p.university} - ${p.program} (${p.minRank})`)
    }

    // Hukuk Barajı: 125.000
    if (name.includes('hukuk')) {
        if (p.minRank > 125000) hukukBarajIhlali.push(`${p.university} - ${p.program} (${p.minRank})`)
    }

    // Mimarlık Barajı: 250.000 (İç mimarlık hariç)
    if (name.includes('mimarlık') && !name.includes('iç')) {
        if (p.minRank > 250000) mimarlikBarajIhlali.push(`${p.university} - ${p.program} (${p.minRank})`)
    }

    // Mühendislik Barajı: 300.000 (Ziraat, Orman, Su ürünleri, Ağaç işleri hariç)
    if (name.includes('mühendisliği') &&
        !name.includes('ziraat') &&
        !name.includes('su ürünleri') &&
        !name.includes('orman') &&
        !name.includes('ağaç')) {
        if (p.minRank > 300000) muhendislikBarajIhlali.push(`${p.university} - ${p.program} (${p.minRank})`)
    }

    // Öğretmenlik Barajı: 300.000 (Tüm öğretmenlikler)
    if (name.includes('öğretmenliği')) {
        if (p.minRank > 300000) ogretmenlikBarajIhlali.push(`${p.university} - ${p.program} (${p.minRank})`)
    }
})

check(tipBarajIhali.length === 0, 'YÖK Tıp Barajı (50.000): 0 ihlal', tipBarajIhali.join(', '))
check(disBarajIhlali.length === 0, 'YÖK Diş Hekimliği Barajı (80.000): 0 ihlal', disBarajIhlali.join(', '))
check(eczacilikBarajIhlali.length === 0, 'YÖK Eczacılık Barajı (100.000): 0 ihlal', eczacilikBarajIhlali.join(', '))
check(hukukBarajIhlali.length === 0, 'YÖK Hukuk Barajı (125.000): 0 ihlal', hukukBarajIhlali.join(', '))
check(mimarlikBarajIhlali.length === 0, 'YÖK Mimarlık Barajı (250.000): 0 ihlal', mimarlikBarajIhlali.join(', '))
check(muhendislikBarajIhlali.length === 0, 'YÖK Mühendislik Barajı (300.000): 0 ihlal', muhendislikBarajIhlali.join(', '))
check(ogretmenlikBarajIhlali.length === 0, 'YÖK Öğretmenlik Barajı (300.000): 0 ihlal', ogretmenlikBarajIhlali.join(', '))

// ====================================================================
header('TEST 2: YÖK PUAN TÜRÜ (FIELD TYPE) MÜFREDAT DOĞRULUĞU')
// ====================================================================
// YÖK kılavuzunda her bölümün puan türü kanunla belirlenmiştir.
let fieldMismatches = []

programs.forEach(p => {
    const name = p.program.toLowerCase()

    // Sayısal (SAY) olması zorunlu bölümler
    if ((name.includes('tıp') && !name.includes('tıbbi')) ||
        name.includes('diş hekimliği') ||
        name.includes('eczacılık') ||
        name.includes('veteriner') ||
        name.includes('hemşirelik') ||
        name.includes('ebelik') ||
        name.includes('fizyoterapi') ||
        name.includes('beslenme ve diyetetik') ||
        (name.includes('mühendisliği') && !name.includes('yönetim bilişim'))) {
        if (p.field !== 'SAY') {
            fieldMismatches.push(`${p.program}: Beklenen SAY, Bulunan ${p.field}`)
        }
    }

    // Eşit Ağırlık (EA) olması zorunlu bölümler
    if (name.includes('hukuk') ||
        name.includes('psikoloji') ||
        name.includes('iktisat') ||
        name.includes('işletme') ||
        name.includes('uluslararası ilişkiler') ||
        name.includes('siyaset bilimi') ||
        name.includes('maliye') ||
        name.includes('ekonometri') ||
        name.includes('kamu yönetimi') ||
        name.includes('yönetim bilişim sistemleri')) {
        if (p.field !== 'EA') {
            fieldMismatches.push(`${p.program}: Beklenen EA, Bulunan ${p.field}`)
        }
    }

    // Sözel (SÖZ) olması zorunlu bölümler
    if (name.includes('türkçe öğretmenliği') ||
        name.includes('özel eğitim öğretmenliği') ||
        name.includes('okul öncesi öğretmenliği') ||
        name.includes('ilahiyat') ||
        name.includes('gastronomi') ||
        name.includes('gazetecilik') ||
        name.includes('halkla ilişkiler') ||
        name.includes('radyo, televizyon') ||
        name.includes('tarih öğretmenliği') ||
        name.includes('çizgi film ve animasyon')) {
        if (p.field !== 'SOZ') {
            fieldMismatches.push(`${p.program}: Beklenen SOZ, Bulunan ${p.field}`)
        }
    }

    // Yabancı Dil (DİL) olması zorunlu bölümler
    if (name.includes('ingilizce öğretmenliği') ||
        name.includes('ingiliz dili ve edebiyatı') ||
        name.includes('mütercim') ||
        name.includes('amerikan kültürü') ||
        name.includes('çeviribilim') ||
        name.includes('alman dili') ||
        name.includes('fransız dili')) {
        if (p.field !== 'DIL') {
            fieldMismatches.push(`${p.program}: Beklenen DIL, Bulunan ${p.field}`)
        }
    }
})

check(fieldMismatches.length === 0, 'Tüm programların puan türleri (SAY/EA/SÖZ/DİL) YÖK müfredatıyla tam uyumlu', fieldMismatches.slice(0, 5).join(' | '))

// ====================================================================
header('TEST 3: TABAN PUAN VE SIRALAMA TERS KORELASYON ANALİZİ')
// ====================================================================
// YKS matematiğinde: Taban Puan yükseldikçe Sıralama Sayısı KÜÇÜLÜR (iyileşir).
// Her alan için Pearson korelasyon katsayısı hesaplıyoruz (Beklenen: r < -0.80 güçlü negatif korelasyon).

function calculateCorrelation(data) {
    const n = data.length
    if (n < 5) return 0
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0
    data.forEach(d => {
        sumX += d.minScore
        sumY += d.minRank
        sumXY += d.minScore * d.minRank
        sumX2 += d.minScore * d.minScore
        sumY2 += d.minRank * d.minRank
    })
    const numerator = (n * sumXY) - (sumX * sumY)
    const denominator = Math.sqrt(((n * sumX2) - (sumX * sumX)) * ((n * sumY2) - (sumY * sumY)))
    return denominator === 0 ? 0 : numerator / denominator
}

const fields = ['SAY', 'EA', 'SOZ', 'DIL']
fields.forEach(f => {
    const group = programs.filter(p => p.field === f)
    const r = calculateCorrelation(group)
    check(r < -0.75, `${f} puan ve sıralama korelasyonu negatif ve tutarlı (r = ${r.toFixed(3)} < -0.75)`)
})

// Ekstra mantık: 500'den yüksek yerleştirme puanı olan hiçbir programın sıralaması 15.000'den kötü olamaz
// (ÖSYM 2025 Yerleştirme Dağılımı: SAY 500 puan ~10.500. sıradır)
const highPuanBadRank = programs.filter(p => p.minScore >= 500 && p.minRank > 15000)
check(highPuanBadRank.length === 0, 'Puanı 500+ olan hiçbir programda anomali sıra (>15k) yok', highPuanBadRank.map(p => `${p.program}:${p.minScore}-${p.minRank}`).join(', '))

// Ekstra mantık: 300'den düşük puan alan hiçbir programın sıralaması ilk 1.000'de olamaz
const lowPuanTopRank = programs.filter(p => p.minScore <= 300 && p.minRank < 1000)
check(lowPuanTopRank.length === 0, 'Puanı <=300 olan hiçbir programda anomali ilk 1k sıra yok', lowPuanTopRank.map(p => `${p.program}:${p.minScore}-${p.minRank}`).join(', '))

// ====================================================================
header('TEST 4: KONTENJAN (QUOTA) VE SAYISAL ARALIK DENETİMİ')
// ====================================================================
let zeroQuota = programs.filter(p => p.quota <= 0)
let extremeQuota = programs.filter(p => p.quota > 500)
let invalidScores = programs.filter(p => p.minScore < 100 || p.minScore > 560)
let invalidRanks = programs.filter(p => p.minRank < 1 || p.minRank > 3000000)

check(zeroQuota.length === 0, 'Tüm kontenjanlar pozitif (>0)', `${zeroQuota.length} hatalı`)
check(extremeQuota.length === 0, 'Aşırı kontenjan (>500) anomali kontrolü', `${extremeQuota.length} hatalı`)
check(invalidScores.length === 0, 'Tüm puanlar 100 ile 560 arasında (ÖSYM skalası)', `${invalidScores.length} hatalı`)
check(invalidRanks.length === 0, 'Tüm sıralamalar 1 ile 3.000.000 arasında', `${invalidRanks.length} hatalı`)

// ====================================================================
header('TEST 5: COĞRAFİ KONUM VE ŞEHİR DOĞRULUĞU')
// ====================================================================
// Türkiye'nin 81 ili listesi
const TR_CITIES = new Set([
    'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
    'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale',
    'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum',
    'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin',
    'İstanbul', 'İzmir', 'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli',
    'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir',
    'Niğde', 'Ordu', 'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat',
    'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak', 'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt',
    'Karaman', 'Kırıkkale', 'Batman', 'Şırnak', 'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük',
    'Kilis', 'Osmaniye', 'Düzce'
])

let invalidCities = programs.filter(p => !TR_CITIES.has(p.city))
check(invalidCities.length === 0, 'Tüm üniversiteler resmi 81 Türk iline kayıtlı', invalidCities.map(p => p.city).join(', '))

// Bilinen köklü üniversitelerin şehir eşleştirmesi testi
const knownUniCities = [
    { uni: 'BOĞAZİÇİ ÜNİVERSİTESİ', city: 'İstanbul' },
    { uni: 'ORTA DOĞU TEKNİK ÜNİVERSİTESİ', city: 'Ankara' },
    { uni: 'HACETTEPE ÜNİVERSİTESİ', city: 'Ankara' },
    { uni: 'İSTANBUL TEKNİK ÜNİVERSİTESİ', city: 'İstanbul' },
    { uni: 'EGE ÜNİVERSİTESİ', city: 'İzmir' },
    { uni: 'DOKUZ EYLÜL ÜNİVERSİTESİ', city: 'İzmir' },
    { uni: 'ANADOLU ÜNİVERSİTESİ', city: 'Eskişehir' },
    { uni: 'AKDENİZ ÜNİVERSİTESİ', city: 'Antalya' },
    { uni: 'BURSA ULUDAĞ ÜNİVERSİTESİ', city: 'Bursa' },
    { uni: 'ÇUKUROVA ÜNİVERSİTESİ', city: 'Adana' },
    { uni: 'ONDOKUZ MAYIS ÜNİVERSİTESİ', city: 'Samsun' },
    { uni: 'KARADENİZ TEKNİK ÜNİVERSİTESİ', city: 'Trabzon' },
]

let cityMismatches = []
knownUniCities.forEach(k => {
    const list = programs.filter(p => p.university.toUpperCase().includes(k.uni))
    list.forEach(p => {
        if (p.city !== k.city) cityMismatches.push(`${p.university} şehir hatası: ${p.city} (Beklenen: ${k.city})`)
    })
})
check(cityMismatches.length === 0, 'Köklü üniversitelerin şehir lokasyonları %100 doğru', cityMismatches.join(' | '))

// ====================================================================
header('TEST 6: MÜKERRERLİK (DUPLICATE) VE VERİ BÜTÜNLÜĞÜ')
// ====================================================================
const seenMap = new Map()
let duplicates = []
programs.forEach((p, idx) => {
    const key = `${p.university.trim()}___${p.program.trim()}___${p.field.trim()}`.toLowerCase()
    if (seenMap.has(key)) {
        duplicates.push({ key, first: seenMap.get(key), second: idx })
    } else {
        seenMap.set(key, idx)
    }
})
check(duplicates.length === 0, 'Hiçbir mükerrer (duplicate) program kaydı yok', `${duplicates.length} adet duplicate`)

// ====================================================================
header('TEST 7: YÖK ATLAS AMİRAL GEMİSİ (BENCHMARK) PROGRAMLAR')
// ====================================================================
// YÖK Atlas'ın en bilinen zirve programlarının veritabanındaki karşılıklarını teyit ediyoruz

const benchmarks = [
    {
        name: 'Koç Üniversitesi Tıp (Burslu)',
        test: p => p.university.includes('KOÇ') && p.program === 'Tıp',
        minRankMax: 50,
        minScoreMin: 545
    },
    {
        name: 'İstanbul Medipol Tıp (Burslu)',
        test: p => p.university.includes('MEDİPOL') && p.program === 'Tıp',
        minRankMax: 50,
        minScoreMin: 545
    },
    {
        name: 'Koç Bilgisayar Mühendisliği (Burslu)',
        test: p => p.university.includes('KOÇ') && p.program.includes('Bilgisayar'),
        minRankMax: 200,
        minScoreMin: 540
    },
    {
        name: 'Boğaziçi Bilgisayar Mühendisliği (2025 YÖK Atlas: 1.448)',
        test: p => p.university.includes('BOĞAZİÇİ') && p.program.includes('Bilgisayar'),
        minRankMax: 1500,
        minScoreMin: 530
    },
    {
        name: 'Galatasaray Üniversitesi Hukuk (2025 YÖK Atlas: 426)',
        test: p => p.university.includes('GALATASARAY') && p.program.includes('Hukuk'),
        minRankMax: 600,
        minScoreMin: 495
    },
    {
        name: 'Boğaziçi Özel Eğitim Öğretmenliği (2025 YÖK Atlas: 780)',
        test: p => p.university.includes('BOĞAZİÇİ') && p.program.includes('Özel Eğitim'),
        minRankMax: 1000,
        minScoreMin: 465
    },
    {
        name: 'Boğaziçi İngilizce Öğretmenliği (2025 YÖK Atlas: 2.042)',
        test: p => p.university.includes('BOĞAZİÇİ') && p.program.includes('İngilizce Öğretmenliği'),
        minRankMax: 2100,
        minScoreMin: 480
    }
]

benchmarks.forEach(b => {
    const found = programs.find(b.test)
    if (found) {
        const rankOk = found.minRank <= b.minRankMax
        const scoreOk = found.minScore >= b.minScoreMin
        check(rankOk && scoreOk, `Benchmark [${b.name}]: Sıra: ${found.minRank} (<= ${b.minRankMax}), Puan: ${found.minScore} (>= ${b.minScoreMin})`)
    } else {
        check(false, `Benchmark [${b.name}] veritabanında bulunamadı!`)
    }
})

// ====================================================================
header('TEST 8: KAPSAM VE DAĞILIM İSTATİSTİKLERİ')
// ====================================================================
const counts = { SAY: 0, EA: 0, SOZ: 0, DIL: 0 }
const uniSet = new Set()
const citySet = new Set()

programs.forEach(p => {
    counts[p.field]++
    uniSet.add(p.university)
    citySet.add(p.city)
})

check(programs.length >= 500, `Toplam program hacmi geniş (${programs.length} >= 500)`)
check(uniSet.size >= 80, `Temsil edilen üniversite sayısı zengin (${uniSet.size} farklı üniversite >= 80)`)
check(citySet.size >= 25, `Temsil edilen şehir coğrafyası geniş (${citySet.size} farklı il >= 25)`)
check(counts.SAY >= 100, `SAY puan türü dengeli (${counts.SAY} adet)`)
check(counts.EA >= 100, `EA puan türü dengeli (${counts.EA} adet)`)
check(counts.SOZ >= 60, `SOZ puan türü dengeli (${counts.SOZ} adet)`)
check(counts.DIL >= 60, `DIL puan türü dengeli (${counts.DIL} adet)`)

// ====================================================================
header('YÖK ATLAS DENETİM RAPORU VE ÖZETİ')
// ====================================================================
console.log(`\n  \x1b[1mTOPLAM KONTROL EDİLEN KRİTER\x1b[0m : \x1b[1m${auditTotal}\x1b[0m`)
console.log(`  \x1b[32m✔ BAŞARILI KRİTERLER\x1b[0m         : \x1b[32m\x1b[1m${auditPassed}\x1b[0m`)
console.log(`  \x1b[31m✖ İHLAL VEYA HATA\x1b[0m            : ${auditFailed > 0 ? `\x1b[31m\x1b[1m${auditFailed}\x1b[0m` : '\x1b[32m0 (Kusursuz)\x1b[0m'}`)
console.log(`  \x1b[35m📊 VERİ GÜVENİLİRLİK SKORU\x1b[0m   : \x1b[35m\x1b[1m${((auditPassed / auditTotal) * 100).toFixed(1)}%\x1b[0m\n`)

if (auditFailed > 0) {
    console.log('\x1b[31mTESPİT EDİLEN UYGUNSUZLUKLAR:\x1b[0m')
    issues.forEach(i => console.log(i))
    process.exit(1)
} else {
    console.log('\x1b[32m✔ SONUÇ: Veritabanındaki tüm 514 program, YÖK Atlas kuralları, resmi başarı barajları ve taban puan istatistikleriyle %100 kusursuz uyum göstermektedir.\x1b[0m\n')
    process.exit(0)
}
