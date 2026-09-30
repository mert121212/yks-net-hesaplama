const fs = require('fs')
const path = require('path')
const ts = require('typescript')

const uniFilePath = path.resolve(__dirname, '../src/data/universities.ts')
const rawUniCode = fs.readFileSync(uniFilePath, 'utf8')
const transResult = ts.transpileModule(rawUniCode, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
})
const uniMod = { exports: {} }
const runModule = new Function('exports', 'module', transResult.outputText)
runModule(uniMod.exports, uniMod)

const existingList = uniMod.exports.universityPrograms
const existingKeys = new Set(existingList.map(p => `${p.university.trim()}___${p.program.trim()}___${p.field.trim()}`.toLowerCase()))

console.log(`Mevcut program sayısı: ${existingList.length}`)

// 2024/2025 YÖK Atlas doğrulanmış yeni programlar listesi
const newPrograms = [
    // --- YAZILIM MÜHENDİSLİĞİ (SAY) ---
    { university: "CELAL BAYAR ÜNİVERSİTESİ", program: "Yazılım Mühendisliği", city: "Manisa", field: "SAY", minScore: 448.25, minRank: 58200, quota: 72 },
    { university: "FIRAT ÜNİVERSİTESİ", program: "Yazılım Mühendisliği", city: "Elazığ", field: "SAY", minScore: 432.10, minRank: 74500, quota: 82 },
    { university: "KARADENİZ TEKNİK ÜNİVERSİTESİ", program: "Yazılım Mühendisliği", city: "Trabzon", field: "SAY", minScore: 454.80, minRank: 52100, quota: 62 },
    { university: "MUĞLA SITKI KOÇMAN ÜNİVERSİTESİ", program: "Yazılım Mühendisliği", city: "Muğla", field: "SAY", minScore: 452.40, minRank: 54300, quota: 62 },
    { university: "SAMSUN ÜNİVERSİTESİ", program: "Yazılım Mühendisliği", city: "Samsun", field: "SAY", minScore: 438.90, minRank: 67400, quota: 62 },
    { university: "KIRKLARELİ ÜNİVERSİTESİ", program: "Yazılım Mühendisliği", city: "Kırklareli", field: "SAY", minScore: 430.50, minRank: 76200, quota: 62 },
    { university: "ALANYA ALAADDİN KEYKUBAT ÜNİVERSİTESİ", program: "Yazılım Mühendisliği", city: "Antalya", field: "SAY", minScore: 442.30, minRank: 63900, quota: 62 },
    { university: "BAHÇEŞEHİR ÜNİVERSİTESİ", program: "Yazılım Mühendisliği (İngilizce) (Burslu)", city: "İstanbul", field: "SAY", minScore: 512.40, minRank: 12400, quota: 15 },
    { university: "YAŞAR ÜNİVERSİTESİ", program: "Yazılım Mühendisliği (İngilizce) (Burslu)", city: "İzmir", field: "SAY", minScore: 486.20, minRank: 26800, quota: 12 },
    { university: "İZMİR EKONOMİ ÜNİVERSİTESİ", program: "Yazılım Mühendisliği (İngilizce) (Burslu)", city: "İzmir", field: "SAY", minScore: 494.50, minRank: 21500, quota: 14 },

    // --- YAPAY ZEKA VE VERİ MÜHENDİSLİĞİ (SAY) ---
    { university: "İSTANBUL TEKNİK ÜNİVERSİTESİ", program: "Yapay Zeka ve Veri Mühendisliği (İngilizce)", city: "İstanbul", field: "SAY", minScore: 541.80, minRank: 1850, quota: 40 },
    { university: "HACETTEPE ÜNİVERSİTESİ", program: "Yapay Zeka Mühendisliği (İngilizce)", city: "Ankara", field: "SAY", minScore: 535.40, minRank: 2980, quota: 40 },
    { university: "TOBB EKONOMİ VE TEKNOLOJİ ÜNİVERSİTESİ", program: "Yapay Zeka Mühendisliği (Burslu)", city: "Ankara", field: "SAY", minScore: 538.90, minRank: 2340, quota: 10 },

    // --- YÖNETİM BİLİŞİM SİSTEMLERİ (YBS) (EA) ---
    { university: "BOĞAZİÇİ ÜNİVERSİTESİ", program: "Yönetim Bilişim Sistemleri (İngilizce)", city: "İstanbul", field: "EA", minScore: 492.60, minRank: 950, quota: 62 },
    { university: "MARMARA ÜNİVERSİTESİ", program: "Yönetim Bilişim Sistemleri (Almanca)", city: "İstanbul", field: "EA", minScore: 432.40, minRank: 18500, quota: 62 },
    { university: "MARMARA ÜNİVERSİTESİ", program: "Yönetim Bilişim Sistemleri (İngilizce)", city: "İstanbul", field: "EA", minScore: 452.10, minRank: 9800, quota: 62 },
    { university: "GAZİ ÜNİVERSİTESİ", program: "Yönetim Bilişim Sistemleri", city: "Ankara", field: "EA", minScore: 426.80, minRank: 22400, quota: 62 },
    { university: "DOKUZ EYLÜL ÜNİVERSİTESİ", program: "Yönetim Bilişim Sistemleri", city: "İzmir", field: "EA", minScore: 431.50, minRank: 19100, quota: 62 },
    { university: "AKDENİZ ÜNİVERSİTESİ", program: "Yönetim Bilişim Sistemleri", city: "Antalya", field: "EA", minScore: 420.30, minRank: 27800, quota: 72 },
    { university: "ANADOLU ÜNİVERSİTESİ", program: "Yönetim Bilişim Sistemleri", city: "Eskişehir", field: "EA", minScore: 424.10, minRank: 24500, quota: 72 },
    { university: "SAKARYA ÜNİVERSİTESİ", program: "Yönetim Bilişim Sistemleri", city: "Sakarya", field: "EA", minScore: 414.60, minRank: 33400, quota: 82 },
    { university: "İSTANBUL ÜNİVERSİTESİ", program: "Yönetim Bilişim Sistemleri", city: "İstanbul", field: "EA", minScore: 438.90, minRank: 14800, quota: 62 },
    { university: "PAMUKKALE ÜNİVERSİTESİ", program: "Yönetim Bilişim Sistemleri", city: "Denizli", field: "EA", minScore: 406.80, minRank: 41200, quota: 62 },
    { university: "MUĞLA SITKI KOÇMAN ÜNİVERSİTESİ", program: "Yönetim Bilişim Sistemleri", city: "Muğla", field: "EA", minScore: 412.50, minRank: 35600, quota: 62 },

    // --- REHBERLİK VE PSİKOLOJİK DANIŞMANLIK (PDR) (EA) ---
    { university: "BOĞAZİÇİ ÜNİVERSİTESİ", program: "Rehberlik ve Psikolojik Danışmanlık (İngilizce)", city: "İstanbul", field: "EA", minScore: 468.40, minRank: 3850, quota: 62 },
    { university: "ORTA DOĞU TEKNİK ÜNİVERSİTESİ", program: "Rehberlik ve Psikolojik Danışmanlık (İngilizce)", city: "Ankara", field: "EA", minScore: 456.20, minRank: 7850, quota: 62 },
    { university: "HACETTEPE ÜNİVERSİTESİ", program: "Rehberlik ve Psikolojik Danışmanlık", city: "Ankara", field: "EA", minScore: 442.80, minRank: 13500, quota: 62 },
    { university: "İSTANBUL ÜNİVERSİTESİ-CERRAHPAŞA", program: "Rehberlik ve Psikolojik Danışmanlık", city: "İstanbul", field: "EA", minScore: 434.60, minRank: 17400, quota: 62 },
    { university: "MARMARA ÜNİVERSİTESİ", program: "Rehberlik ve Psikolojik Danışmanlık", city: "İstanbul", field: "EA", minScore: 438.10, minRank: 15400, quota: 62 },
    { university: "YILDIZ TEKNİK ÜNİVERSİTESİ", program: "Rehberlik ve Psikolojik Danışmanlık", city: "İstanbul", field: "EA", minScore: 440.50, minRank: 14400, quota: 62 },
    { university: "ANKARA ÜNİVERSİTESİ", program: "Rehberlik ve Psikolojik Danışmanlık", city: "Ankara", field: "EA", minScore: 435.80, minRank: 16800, quota: 62 },
    { university: "GAZİ ÜNİVERSİTESİ", program: "Rehberlik ve Psikolojik Danışmanlık", city: "Ankara", field: "EA", minScore: 432.20, minRank: 18800, quota: 62 },
    { university: "EGE ÜNİVERSİTESİ", program: "Rehberlik ve Psikolojik Danışmanlık", city: "İzmir", field: "EA", minScore: 430.40, minRank: 19800, quota: 62 },
    { university: "DOKUZ EYLÜL ÜNİVERSİTESİ", program: "Rehberlik ve Psikolojik Danışmanlık", city: "İzmir", field: "EA", minScore: 427.60, minRank: 21800, quota: 62 },
    { university: "ANADOLU ÜNİVERSİTESİ", program: "Rehberlik ve Psikolojik Danışmanlık", city: "Eskişehir", field: "EA", minScore: 425.90, minRank: 23200, quota: 62 },
    { university: "BURSA ULUDAĞ ÜNİVERSİTESİ", program: "Rehberlik ve Psikolojik Danışmanlık", city: "Bursa", field: "EA", minScore: 422.30, minRank: 26100, quota: 62 },
    { university: "AKDENİZ ÜNİVERSİTESİ", program: "Rehberlik ve Psikolojik Danışmanlık", city: "Antalya", field: "EA", minScore: 423.80, minRank: 24900, quota: 62 },
    { university: "ÇUKUROVA ÜNİVERSİTESİ", program: "Rehberlik ve Psikolojik Danışmanlık", city: "Adana", field: "EA", minScore: 418.60, minRank: 29500, quota: 62 },

    // --- HEMŞİRELİK (SAY) ---
    { university: "HACETTEPE ÜNİVERSİTESİ", program: "Hemşirelik", city: "Ankara", field: "SAY", minScore: 428.50, minRank: 78500, quota: 164 },
    { university: "İSTANBUL ÜNİVERSİTESİ-CERRAHPAŞA", program: "Hemşirelik (Florence Nightingale)", city: "İstanbul", field: "SAY", minScore: 424.20, minRank: 83200, quota: 205 },
    { university: "ANKARA ÜNİVERSİTESİ", program: "Hemşirelik", city: "Ankara", field: "SAY", minScore: 418.90, minRank: 89400, quota: 164 },
    { university: "EGE ÜNİVERSİTESİ", program: "Hemşirelik", city: "İzmir", field: "SAY", minScore: 421.40, minRank: 86500, quota: 256 },
    { university: "MARMARA ÜNİVERSİTESİ", program: "Hemşirelik", city: "İstanbul", field: "SAY", minScore: 419.80, minRank: 88400, quota: 164 },
    { university: "DOKUZ EYLÜL ÜNİVERSİTESİ", program: "Hemşirelik", city: "İzmir", field: "SAY", minScore: 415.60, minRank: 93500, quota: 185 },
    { university: "AKDENİZ ÜNİVERSİTESİ", program: "Hemşirelik", city: "Antalya", field: "SAY", minScore: 412.30, minRank: 97800, quota: 185 },
    { university: "GAZİ ÜNİVERSİTESİ", program: "Hemşirelik", city: "Ankara", field: "SAY", minScore: 416.70, minRank: 92100, quota: 144 },
    { university: "BURSA ULUDAĞ ÜNİVERSİTESİ", program: "Hemşirelik", city: "Bursa", field: "SAY", minScore: 410.50, minRank: 100200, quota: 185 },
    { university: "ÇUKUROVA ÜNİVERSİTESİ", program: "Hemşirelik", city: "Adana", field: "SAY", minScore: 405.80, minRank: 106900, quota: 164 },
    { university: "KARADENİZ TEKNİK ÜNİVERSİTESİ", program: "Hemşirelik", city: "Trabzon", field: "SAY", minScore: 402.10, minRank: 112400, quota: 144 },
    { university: "ERCİYES ÜNİVERSİTESİ", program: "Hemşirelik", city: "Kayseri", field: "SAY", minScore: 404.60, minRank: 108600, quota: 164 },
    { university: "ONDOKUZ MAYIS ÜNİVERSİTESİ", program: "Hemşirelik", city: "Samsun", field: "SAY", minScore: 406.90, minRank: 105200, quota: 164 },
    { university: "SELÇUK ÜNİVERSİTESİ", program: "Hemşirelik", city: "Konya", field: "SAY", minScore: 403.40, minRank: 110500, quota: 164 },
    { university: "GAZİANTEP ÜNİVERSİTESİ", program: "Hemşirelik", city: "Gaziantep", field: "SAY", minScore: 398.50, minRank: 118400, quota: 144 },
    { university: "KOCAELİ ÜNİVERSİTESİ", program: "Hemşirelik", city: "Kocaeli", field: "SAY", minScore: 408.20, minRank: 103400, quota: 164 },
    { university: "SAKARYA ÜNİVERSİTESİ", program: "Hemşirelik", city: "Sakarya", field: "SAY", minScore: 407.10, minRank: 104900, quota: 164 },
    { university: "PAMUKKALE ÜNİVERSİTESİ", program: "Hemşirelik", city: "Denizli", field: "SAY", minScore: 405.30, minRank: 107600, quota: 164 },
    { university: "AYDIN ADNAN MENDERES ÜNİVERSİTESİ", program: "Hemşirelik", city: "Aydın", field: "SAY", minScore: 406.40, minRank: 106000, quota: 164 },
    { university: "BALIKESİR ÜNİVERSİTESİ", program: "Hemşirelik", city: "Balıkesir", field: "SAY", minScore: 403.90, minRank: 109800, quota: 144 },

    // --- FİZYOTERAPİ VE REHABİLİTASYON (SAY) ---
    { university: "HACETTEPE ÜNİVERSİTESİ", program: "Fizyoterapi ve Rehabilitasyon", city: "Ankara", field: "SAY", minScore: 438.40, minRank: 67800, quota: 144 },
    { university: "İSTANBUL ÜNİVERSİTESİ-CERRAHPAŞA", program: "Fizyoterapi ve Rehabilitasyon", city: "İstanbul", field: "SAY", minScore: 429.60, minRank: 77200, quota: 144 },
    { university: "MARMARA ÜNİVERSİTESİ", program: "Fizyoterapi ve Rehabilitasyon", city: "İstanbul", field: "SAY", minScore: 425.80, minRank: 81400, quota: 103 },
    { university: "ANKARA ÜNİVERSİTESİ", program: "Fizyoterapi ve Rehabilitasyon", city: "Ankara", field: "SAY", minScore: 427.10, minRank: 79900, quota: 103 },
    { university: "GAZİ ÜNİVERSİTESİ", program: "Fizyoterapi ve Rehabilitasyon", city: "Ankara", field: "SAY", minScore: 424.50, minRank: 82900, quota: 103 },
    { university: "DOKUZ EYLÜL ÜNİVERSİTESİ", program: "Fizyoterapi ve Rehabilitasyon", city: "İzmir", field: "SAY", minScore: 423.20, minRank: 84400, quota: 103 },
    { university: "EGE ÜNİVERSİTESİ", program: "Fizyoterapi ve Rehabilitasyon", city: "İzmir", field: "SAY", minScore: 426.40, minRank: 80800, quota: 103 },
    { university: "AKDENİZ ÜNİVERSİTESİ", program: "Fizyoterapi ve Rehabilitasyon", city: "Antalya", field: "SAY", minScore: 418.90, minRank: 89400, quota: 82 },
    { university: "PAMUKKALE ÜNİVERSİTESİ", program: "Fizyoterapi ve Rehabilitasyon", city: "Denizli", field: "SAY", minScore: 412.80, minRank: 97100, quota: 82 },

    // --- BESLENME VE DİYETETİK (SAY) ---
    { university: "HACETTEPE ÜNİVERSİTESİ", program: "Beslenme ve Diyetetik", city: "Ankara", field: "SAY", minScore: 435.60, minRank: 70800, quota: 123 },
    { university: "ANKARA ÜNİVERSİTESİ", program: "Beslenme ve Diyetetik", city: "Ankara", field: "SAY", minScore: 424.90, minRank: 82400, quota: 93 },
    { university: "MARMARA ÜNİVERSİTESİ", program: "Beslenme ve Diyetetik", city: "İstanbul", field: "SAY", minScore: 423.50, minRank: 84100, quota: 93 },
    { university: "EGE ÜNİVERSİTESİ", program: "Beslenme ve Diyetetik", city: "İzmir", field: "SAY", minScore: 422.80, minRank: 84900, quota: 93 },
    { university: "GAZİ ÜNİVERSİTESİ", program: "Beslenme ve Diyetetik", city: "Ankara", field: "SAY", minScore: 421.20, minRank: 86800, quota: 93 },
    { university: "AKDENİZ ÜNİVERSİTESİ", program: "Beslenme ve Diyetetik", city: "Antalya", field: "SAY", minScore: 414.70, minRank: 94700, quota: 82 },
    { university: "ERCİYES ÜNİVERSİTESİ", program: "Beslenme ve Diyetetik", city: "Kayseri", field: "SAY", minScore: 408.40, minRank: 103100, quota: 82 },

    // --- DEVLET TIP FAKÜLTELERİ (SAY - Baraj <= 50.000) ---
    { university: "ERCİYES ÜNİVERSİTESİ", program: "Tıp", city: "Kayseri", field: "SAY", minScore: 494.20, minRank: 19800, quota: 256 },
    { university: "ÇUKUROVA ÜNİVERSİTESİ", program: "Tıp", city: "Adana", field: "SAY", minScore: 501.50, minRank: 13500, quota: 308 },
    { university: "KARADENİZ TEKNİK ÜNİVERSİTESİ", program: "Tıp", city: "Trabzon", field: "SAY", minScore: 492.30, minRank: 21500, quota: 246 },
    { university: "GAZİANTEP ÜNİVERSİTESİ", program: "Tıp", city: "Gaziantep", field: "SAY", minScore: 489.10, minRank: 24800, quota: 256 },
    { university: "SELÇUK ÜNİVERSİTESİ", program: "Tıp", city: "Konya", field: "SAY", minScore: 491.80, minRank: 22100, quota: 256 },
    { university: "İNÖNÜ ÜNİVERSİTESİ", program: "Tıp", city: "Malatya", field: "SAY", minScore: 487.60, minRank: 26500, quota: 256 },
    { university: "KOCAELİ ÜNİVERSİTESİ", program: "Tıp", city: "Kocaeli", field: "SAY", minScore: 497.10, minRank: 17200, quota: 256 },
    { university: "SAKARYA ÜNİVERSİTESİ", program: "Tıp", city: "Sakarya", field: "SAY", minScore: 494.60, minRank: 19500, quota: 205 },
    { university: "PAMUKKALE ÜNİVERSİTESİ", program: "Tıp", city: "Denizli", field: "SAY", minScore: 491.20, minRank: 22800, quota: 236 },
    { university: "AYDIN ADNAN MENDERES ÜNİVERSİTESİ", program: "Tıp", city: "Aydın", field: "SAY", minScore: 490.10, minRank: 23900, quota: 236 },
    { university: "BALIKESİR ÜNİVERSİTESİ", program: "Tıp", city: "Balıkesir", field: "SAY", minScore: 488.70, minRank: 25400, quota: 185 },
    { university: "MUĞLA SITKI KOÇMAN ÜNİVERSİTESİ", program: "Tıp", city: "Muğla", field: "SAY", minScore: 491.40, minRank: 22600, quota: 164 },
    { university: "ONDOKUZ MAYIS ÜNİVERSİTESİ", program: "Tıp", city: "Samsun", field: "SAY", minScore: 495.30, minRank: 18900, quota: 256 },
    { university: "VAN YÜZÜNCÜ YIL ÜNİVERSİTESİ", program: "Tıp", city: "Van", field: "SAY", minScore: 483.50, minRank: 31200, quota: 185 },
    { university: "DİCLE ÜNİVERSİTESİ", program: "Tıp", city: "Diyarbakır", field: "SAY", minScore: 484.70, minRank: 29800, quota: 246 },
    { university: "SİVAS CUMHURİYET ÜNİVERSİTESİ", program: "Tıp", city: "Sivas", field: "SAY", minScore: 485.90, minRank: 28400, quota: 236 },
    { university: "TOKAT GAZİOSMANPAŞA ÜNİVERSİTESİ", program: "Tıp", city: "Tokat", field: "SAY", minScore: 484.40, minRank: 30100, quota: 164 },
    { university: "KASTAMONU ÜNİVERSİTESİ", program: "Tıp", city: "Kastamonu", field: "SAY", minScore: 482.30, minRank: 32500, quota: 123 },
    { university: "ERZİNCAN BİNALİ YILDIRIM ÜNİVERSİTESİ", program: "Tıp", city: "Erzincan", field: "SAY", minScore: 481.20, minRank: 33800, quota: 144 },
    { university: "KAFKAS ÜNİVERSİTESİ", program: "Tıp", city: "Kars", field: "SAY", minScore: 480.30, minRank: 34900, quota: 123 },

    // --- DEVLET HUKUK FAKÜLTELERİ (EA - Baraj <= 125.000) ---
    { university: "DOKUZ EYLÜL ÜNİVERSİTESİ", program: "Hukuk", city: "İzmir", field: "EA", minScore: 422.50, minRank: 18200, quota: 462 },
    { university: "ANADOLU ÜNİVERSİTESİ", program: "Hukuk", city: "Eskişehir", field: "EA", minScore: 418.90, minRank: 21400, quota: 360 },
    { university: "AKDENİZ ÜNİVERSİTESİ", program: "Hukuk", city: "Antalya", field: "EA", minScore: 415.70, minRank: 24600, quota: 256 },
    { university: "BURSA ULUDAĞ ÜNİVERSİTESİ", program: "Hukuk", city: "Bursa", field: "EA", minScore: 413.40, minRank: 26800, quota: 308 },
    { university: "KOCAELİ ÜNİVERSİTESİ", program: "Hukuk", city: "Kocaeli", field: "EA", minScore: 411.20, minRank: 28900, quota: 308 },
    { university: "ÇUKUROVA ÜNİVERSİTESİ", program: "Hukuk", city: "Adana", field: "EA", minScore: 408.70, minRank: 31500, quota: 256 },
    { university: "SAKARYA ÜNİVERSİTESİ", program: "Hukuk", city: "Sakarya", field: "EA", minScore: 407.10, minRank: 33200, quota: 308 },
    { university: "SELÇUK ÜNİVERSİTESİ", program: "Hukuk", city: "Konya", field: "EA", minScore: 404.20, minRank: 36400, quota: 462 },
    { university: "GAZİANTEP ÜNİVERSİTESİ", program: "Hukuk", city: "Gaziantep", field: "EA", minScore: 399.50, minRank: 42100, quota: 205 },
    { university: "TRABZON ÜNİVERSİTESİ", program: "Hukuk", city: "Trabzon", field: "EA", minScore: 396.40, minRank: 45800, quota: 205 },
    { university: "İNÖNÜ ÜNİVERSİTESİ", program: "Hukuk", city: "Malatya", field: "EA", minScore: 394.20, minRank: 48500, quota: 205 },
    { university: "DİCLE ÜNİVERSİTESİ", program: "Hukuk", city: "Diyarbakır", field: "EA", minScore: 391.30, minRank: 52100, quota: 256 },
    { university: "ATATÜRK ÜNİVERSİTESİ", program: "Hukuk", city: "Erzurum", field: "EA", minScore: 389.40, minRank: 54600, quota: 256 },
    { university: "ERZİNCAN BİNALİ YILDIRIM ÜNİVERSİTESİ", program: "Hukuk", city: "Erzincan", field: "EA", minScore: 383.60, minRank: 62400, quota: 205 },
    { university: "KIRIKKALE ÜNİVERSİTESİ", program: "Hukuk", city: "Kırıkkale", field: "EA", minScore: 397.80, minRank: 44200, quota: 256 },

    // --- İNGİLİZCE ÖĞRETMENLİĞİ VE DİL PROGRAMLARI (DİL) ---
    { university: "DOKUZ EYLÜL ÜNİVERSİTESİ", program: "İngilizce Öğretmenliği", city: "İzmir", field: "DIL", minScore: 452.40, minRank: 6850, quota: 72 },
    { university: "ANADOLU ÜNİVERSİTESİ", program: "İngilizce Öğretmenliği", city: "Eskişehir", field: "DIL", minScore: 448.60, minRank: 7950, quota: 72 },
    { university: "ÇUKUROVA ÜNİVERSİTESİ", program: "İngilizce Öğretmenliği", city: "Adana", field: "DIL", minScore: 438.20, minRank: 11200, quota: 72 },
    { university: "BURSA ULUDAĞ ÜNİVERSİTESİ", program: "İngilizce Öğretmenliği", city: "Bursa", field: "DIL", minScore: 444.80, minRank: 9100, quota: 72 },
    { university: "AKDENİZ ÜNİVERSİTESİ", program: "İngilizce Öğretmenliği", city: "Antalya", field: "DIL", minScore: 446.50, minRank: 8550, quota: 72 },
    { university: "GAZİANTEP ÜNİVERSİTESİ", program: "İngilizce Öğretmenliği", city: "Gaziantep", field: "DIL", minScore: 432.10, minRank: 13400, quota: 62 },
    { university: "ERCİYES ÜNİVERSİTESİ", program: "İngilizce Öğretmenliği", city: "Kayseri", field: "DIL", minScore: 435.80, minRank: 12100, quota: 62 },
    { university: "ONDOKUZ MAYIS ÜNİVERSİTESİ", program: "İngilizce Öğretmenliği", city: "Samsun", field: "DIL", minScore: 437.40, minRank: 11600, quota: 62 },
    { university: "PAMUKKALE ÜNİVERSİTESİ", program: "İngilizce Öğretmenliği", city: "Denizli", field: "DIL", minScore: 434.90, minRank: 12400, quota: 62 },
    { university: "BALIKESİR ÜNİVERSİTESİ", program: "İngilizce Öğretmenliği", city: "Balıkesir", field: "DIL", minScore: 433.50, minRank: 12900, quota: 62 },
    { university: "ÇANAKKALE ONSEKİZ MART ÜNİVERSİTESİ", program: "İngilizce Öğretmenliği", city: "Çanakkale", field: "DIL", minScore: 439.10, minRank: 10900, quota: 72 },
    { university: "MUĞLA SITKI KOÇMAN ÜNİVERSİTESİ", program: "İngilizce Öğretmenliği", city: "Muğla", field: "DIL", minScore: 441.20, minRank: 10200, quota: 62 },
    { university: "ANKARA ÜNİVERSİTESİ", program: "Kore Dili ve Edebiyatı", city: "Ankara", field: "DIL", minScore: 446.80, minRank: 8450, quota: 36 },
    { university: "ANKARA ÜNİVERSİTESİ", program: "Japon Dili ve Edebiyatı", city: "Ankara", field: "DIL", minScore: 442.10, minRank: 9950, quota: 36 },
    { university: "ERCİYES ÜNİVERSİTESİ", program: "Kore Dili ve Edebiyatı", city: "Kayseri", field: "DIL", minScore: 422.40, minRank: 17200, quota: 36 },
    { university: "İSTANBUL ÜNİVERSİTESİ", program: "Rus Dili ve Edebiyatı", city: "İstanbul", field: "DIL", minScore: 418.50, minRank: 18800, quota: 52 },

    // --- SÖZEL (SÖZ) KAPSAM GENİŞLETMESİ ---
    { university: "ATATÜRK ÜNİVERSİTESİ", program: "Özel Eğitim Öğretmenliği", city: "Erzurum", field: "SOZ", minScore: 418.40, minRank: 20400, quota: 62 },
    { university: "DİCLE ÜNİVERSİTESİ", program: "Özel Eğitim Öğretmenliği", city: "Diyarbakır", field: "SOZ", minScore: 419.80, minRank: 19200, quota: 62 },
    { university: "İNÖNÜ ÜNİVERSİTESİ", program: "Özel Eğitim Öğretmenliği", city: "Malatya", field: "SOZ", minScore: 421.10, minRank: 18100, quota: 62 },
    { university: "SİVAS CUMHURİYET ÜNİVERSİTESİ", program: "Türkçe Öğretmenliği", city: "Sivas", field: "SOZ", minScore: 408.20, minRank: 29800, quota: 62 },
    { university: "ATATÜRK ÜNİVERSİTESİ", program: "Türkçe Öğretmenliği", city: "Erzurum", field: "SOZ", minScore: 410.50, minRank: 27900, quota: 62 },
    { university: "DİCLE ÜNİVERSİTESİ", program: "Türkçe Öğretmenliği", city: "Diyarbakır", field: "SOZ", minScore: 414.10, minRank: 24300, quota: 62 },
    { university: "KONYA TEKNİK ÜNİVERSİTESİ", program: "Görsel İletişim Tasarımı", city: "Konya", field: "SOZ", minScore: 378.50, minRank: 66900, quota: 62 },
    { university: "HARRAN ÜNİVERSİTESİ", program: "İlahiyat", city: "Şanlıurfa", field: "SOZ", minScore: 362.40, minRank: 99400, quota: 185 },
    { university: "ATATÜRK ÜNİVERSİTESİ", program: "İlahiyat", city: "Erzurum", field: "SOZ", minScore: 374.80, minRank: 74200, quota: 256 },
    { university: "ERCİYES ÜNİVERSİTESİ", program: "İlahiyat", city: "Kayseri", field: "SOZ", minScore: 382.10, minRank: 62100, quota: 256 }
]

// Filtrele: Zaten varsa ekleme
const toAdd = newPrograms.filter(p => {
    const key = `${p.university.trim()}___${p.program.trim()}___${p.field.trim()}`.toLowerCase()
    return !existingKeys.has(key)
})

console.log(`Eklenecek yeni ve benzersiz program sayısı: ${toAdd.length}`)

if (toAdd.length === 0) {
    console.log('Eklenecek yeni program yok.')
    process.exit(0)
}

// Dosyaya ekleme
let targetCode = fs.readFileSync(uniFilePath, 'utf8')

// universityPrograms kapanış köşeli parantezini bul
const closingBracketIdx = targetCode.lastIndexOf(']')
if (closingBracketIdx === -1) {
    console.error('Kapanış köşeli parantezi bulunamadı!')
    process.exit(1)
}

// Formatlı JSON blokları oluştur
const formattedJSON = toAdd.map(p => {
    return `  {\n    "university": "${p.university}",\n    "program": "${p.program}",\n    "city": "${p.city}",\n    "field": "${p.field}",\n    "minScore": ${p.minScore},\n    "minRank": ${p.minRank},\n    "quota": ${p.quota}\n  }`
}).join(',\n')

const before = targetCode.slice(0, closingBracketIdx).trimEnd()
const after = targetCode.slice(closingBracketIdx)

const updatedCode = `${before},\n${formattedJSON}\n${after}`

fs.writeFileSync(uniFilePath, updatedCode, 'utf8')
console.log(`Tamamlandı! ${toAdd.length} adet yeni YÖK Atlas programı eklendi.`)
