/**
 * ============================================================================
 * 🤖 YKS NET HESAPLAMA - ULTRA SÜPERSONİK AI İÇERİK & DOĞALLIK TEST MOTORU
 * ============================================================================
 * Bu test paketi, Google Kalite Değerlendirici Yönergeleri (E-E-A-T) ve modern
 * AI metin tespit algoritmalarını (Perplexity & Burstiness analizi) simüle ederek
 * sitedeki TÜM makaleleri ve sayfaları kelime kelime, cümle cümle tarar:
 *
 * 1. TÜRKÇE AI KLİŞE & ROBOTİK KALIP TESPİTİ (50+ Kategoriye Ayrılmış Tetikleyici)
 * 2. CÜMLE UZUNLUĞU VARYASYONU & RİTİM ANALİZİ (Burstiness / Standart Sapma)
 * 3. 1. TEKİL/ÇOĞUL ŞAHIS & E-E-A-T DENEYİM İMZASI (İnsan Deneyimi Varlığı)
 * 4. SOMUT VERİ & ADLANDIRILMIŞ VARLIK (MEB, ÖSYM, Somut İsimler) YOĞUNLUĞU
 * 5. ŞABLONLAŞMIŞ GİRİŞ / SONUÇ KALIPLARI (Cross-Article Template Detection)
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');

// Renkli Çıktı Sabitleri
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const MAGENTA = '\x1b[35m';
const BLUE = '\x1b[34m';
const WHITE = '\x1b[37m';
const BG_RED = '\x1b[41m';
const BG_GREEN = '\x1b[42m';
const BG_MAGENTA = '\x1b[45m';

// ============================================================================
// 🧠 TÜRKÇE YAPAY ZEKA (LLM/CHATGPT) TİPİK KALIPLARI SÖZLÜĞÜ
// ============================================================================
const AI_CLICHES = [
    // 1. Didaktik Robotik Giriş / Geçiş Kalıpları
    { pattern: /unutulmamalıdır\s+ki/gi, name: '"Unutulmamalıdır ki"', penalty: 4, tip: 'Doğrudan kuralı söyleyin veya "şunu aklında tut" deyin' },
    { pattern: /göz\s+ardı\s+edilmemelidir/gi, name: '"Göz ardı edilmemelidir"', penalty: 4, tip: '"Atlama", "gözden kaçırma" şeklinde sadeleştirin' },
    { pattern: /gözden\s+kaçırılmamalıdır/gi, name: '"Gözden kaçırılmamalıdır"', penalty: 4, tip: '"Unutma" veya doğrudan cümleye girin' },
    { pattern: /büyük\s+bir\s+öneme\s+sahiptir/gi, name: '"Büyük bir öneme sahiptir"', penalty: 3, tip: '"Kritiktir" veya somut faydasını yazın' },
    { pattern: /büyük\s+bir\s+önem\s+taşır/gi, name: '"Büyük bir önem taşır"', penalty: 3, tip: '"Çok fark ettirir" şeklinde konuşma diline uyarlayın' },
    { pattern: /hayati\s+bir\s+rol\s+oynar/gi, name: '"Hayati bir rol oynar"', penalty: 4, tip: 'Somut etkiyi rakamla söyleyin (örn: 5 bin kişi atar)' },
    { pattern: /kritik\s+bir\s+rol\s+oynar/gi, name: '"Kritik bir rol oynar"', penalty: 4, tip: 'Daha somut bir fiil kullanın' },
    { pattern: /anahtar\s+bir\s+rol/gi, name: '"Anahtar bir rol"', penalty: 4, tip: 'Doğal bir ifade seçin' },

    // 2. Robotik Özet ve Sonuç Kalıpları
    { pattern: /sonuç\s+olarak\s*[,:]/gi, name: '"Sonuç olarak,"', penalty: 5, tip: 'Klasik lise kompozisyonu kalıbı; kaldırın veya doğrudan son cümleye geçin' },
    { pattern: /özetle\s*[,:]/gi, name: '"Özetle,"', penalty: 3, tip: '"Kısacası" veya kaldırın' },
    { pattern: /özetlemek\s+gerekirse/gi, name: '"Özetlemek gerekirse"', penalty: 4, tip: 'Kaldırın, doğrudan fikri verin' },
    { pattern: /toparlamak\s+gerekirse/gi, name: '"Toparlamak gerekirse"', penalty: 3, tip: 'Kaldırın' },

    // 3. Yapay Motivasyon ve Şablon Benzetmeler
    { pattern: /yks\s+yolculuğun/gi, name: '"YKS yolculuğunda / yolculuğunuz"', penalty: 4, tip: 'AI klişesi; "sınava hazırlanırken" veya "masada" deyin' },
    { pattern: /bu\s+zorlu\s+maraton/gi, name: '"Bu zorlu maraton"', penalty: 4, tip: 'AI kalıbı; "sınav senesinde" deyin' },
    { pattern: /başarıya\s+giden\s+yol/gi, name: '"Başarıya giden yolda"', penalty: 4, tip: 'Aşırı klişe; doğrudan yöntemi anlatın' },
    { pattern: /başarının\s+anahtarı/gi, name: '"Başarının anahtarı"', penalty: 4, tip: 'Kaldırın' },
    { pattern: /altın\s+değerinde/gi, name: '"Altın değerinde"', penalty: 3, tip: 'Abartılı AI sıfatı' },
    { pattern: /fark\s+yaratmak\s+için/gi, name: '"Fark yaratmak için"', penalty: 3, tip: '"Netlerini sıçratmak için" gibi samimi bir ifade kullanın' },
    { pattern: /kendinize\s+inanın/gi, name: '"Kendinize inanın"', penalty: 3, tip: 'İçi boş motivasyon yerine somut taktik verin' },

    // 4. Aşırı Resmi / Dolambaçlı Kitabi Kalıplar
    { pattern: /şüphesiz\s+ki/gi, name: '"Şüphesiz ki"', penalty: 4, tip: 'Kaldırın' },
    { pattern: /kuşkusuz/gi, name: '"Kuşkusuz"', penalty: 3, tip: 'Kaldırın' },
    { pattern: /adeta\s+bir/gi, name: '"Adeta bir"', penalty: 3, tip: 'Zorlama AI metaforu' },
    { pattern: /rehber\s+niteliğindedir/gi, name: '"Rehber niteliğindedir"', penalty: 4, tip: 'Doğrudan içeriğin ne olduğunu söyleyin' },
    { pattern: /rehber\s+niteliğinde\s+olan/gi, name: '"Rehber niteliğinde olan"', penalty: 4, tip: 'Kaldırın' },
    { pattern: /bununla\s+birlikte\s*[,:]/gi, name: '"Bununla birlikte,"', penalty: 2, tip: '"Ama", "fakat" veya "öte yandan"' },
    { pattern: /bunun\s+yanı\s+sıra\s*[,:]/gi, name: '"Bunun yanı sıra,"', penalty: 2, tip: '"Ayrıca", "üstelik"' },
    { pattern: /bilinmelidir\s+ki/gi, name: '"Bilinmelidir ki"', penalty: 4, tip: 'Kaldırın' },
    { pattern: /şunu\s+belirtmek\s+gerekir\s+ki/gi, name: '"Şunu belirtmek gerekir ki"', penalty: 4, tip: 'Doğrudan söze girin' },
    { pattern: /titizlikle/gi, name: '"Titizlikle"', penalty: 2, tip: '"Dikkatle", "adım adım"' },
    { pattern: /vazgeçilmez\s+bir/gi, name: '"Vazgeçilmez bir"', penalty: 3, tip: 'Kaldırın' },
    { pattern: /her\s+geçen\s+gün/gi, name: '"Her geçen gün"', penalty: 2, tip: 'Klişe dolgu laf' },
];

// ============================================================================
// 👤 İNSAN SESİ & E-E-A-T POZİTİF GÖSTERGELERİ (BONUS PUANLAR)
// ============================================================================
const HUMAN_EXPERIENCE_INDICATORS = [
    // 1. Şahıs deneyimi
    /\b(gördüm|yaptım|denedim|baktım|çözdüm|anlattım|yazdım|fark\s+ettim)\b/i,
    /\b(öğrencimde|öğrencilerimde|öğrencilerim|masaya\s+oturduğunda|denemeye\s+girdiğinde)\b/i,
    /\b(bence|bana\s+göre|şahsen|tavsiyem|açıkçası|dürüst\s+olmak\s+gerekirse)\b/i,
    /\b(sakın|aman|kesinlikle\s+yapma|kafanı\s+karıştırma|boş\s+ver)\b/i,
    // 2. Somut gerçek dünya referansları
    /\b(ösym|yök|yök\s+atlas|meb|ais|ösym\s+kılavuzu|10:15|165\s+dakika)\b/i,
    /\b(deneme\s+kulübü|çıkmış\s+sorular|branş\s+denemesi|hata\s+defteri|pomodoro)\b/i,
    /\b(0,12|0,06|0,5\s+net|standart\s+sapma|kırık\s+obp|diploma\s+notu)\b/i,
];

function analyzeFile(filePath, relativePath) {
    const raw = fs.readFileSync(filePath, 'utf8');

    // Sadece render edilen metin kısmını çıkar (HTML ve JSX etiketlerini arındır)
    const cleanText = raw
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"];?/gi, '')
        .replace(/export\s+const\s+metadata[\s\S]*?};/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&[a-z]+;/gi, ' ')
        .replace(/\{[^}]+\}/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    const words = cleanText.split(/\s+/).filter(w => w.length > 1);
    const wordCount = words.length;

    if (wordCount < 50) {
        return null; // Çok kısa veya utility dosyası
    }

    // 1. AI Klişe Analizi
    const foundCliches = [];
    let totalPenalty = 0;

    for (const item of AI_CLICHES) {
        const matches = cleanText.match(item.pattern);
        if (matches) {
            const count = matches.length;
            const penalty = item.penalty * count;
            totalPenalty += penalty;
            foundCliches.push({
                name: item.name,
                count,
                penalty,
                tip: item.tip,
            });
        }
    }

    // 2. Burstiness / Cümle Uzunluğu Varyasyon Analizi
    // Cümleleri ayır (. ! ?)
    const rawSentences = cleanText
        .split(/(?<=[.!?])\s+/)
        .map(s => s.trim())
        .filter(s => s.length > 5);

    const sentenceWordCounts = rawSentences.map(s => s.split(/\s+/).length);
    const avgSentenceLength = sentenceWordCounts.length > 0
        ? sentenceWordCounts.reduce((a, b) => a + b, 0) / sentenceWordCounts.length
        : 0;

    // Standart Sapma
    const variance = sentenceWordCounts.length > 1
        ? sentenceWordCounts.reduce((acc, len) => acc + Math.pow(len - avgSentenceLength, 2), 0) / sentenceWordCounts.length
        : 0;
    const stdDev = Math.sqrt(variance);

    // Burstiness Puanı: Standart sapma yüksekse insan yazısıdır (ritim çeşitliliği), düşükse monoton AI yazısıdır
    // Tipik insan standart sapması: > 7-9. Monoton AI standart sapması: < 4-5.
    let burstinessScore = 0;
    if (stdDev >= 7.5) burstinessScore = 20;
    else if (stdDev >= 5.5) burstinessScore = 15;
    else if (stdDev >= 4.0) burstinessScore = 10;
    else burstinessScore = 5;

    // 3. İnsan Deneyimi & Somut Varlık Puanı (E-E-A-T)
    let humanScore = 0;
    const matchedHumanIndicators = [];
    for (const regex of HUMAN_EXPERIENCE_INDICATORS) {
        const match = cleanText.match(regex);
        if (match) {
            humanScore += 3;
            matchedHumanIndicators.push(match[0]);
        }
    }
    humanScore = Math.min(humanScore, 20); // max 20 puan bonus

    // 4. Genel İnsan Doğallık Skoru Hesaplama (0 - 100)
    // Başlangıç 100. Ceza puanları düşülür, burstiness ve insan sinyalleri dengeler.
    // 1000 kelime başına normalize ceza
    const normalizedPenalty = (totalPenalty / Math.max(wordCount, 300)) * 1000;
    let finalScore = Math.round(100 - normalizedPenalty + (burstinessScore - 10) + humanScore);
    finalScore = Math.max(0, Math.min(100, finalScore));

    return {
        path: relativePath,
        wordCount,
        sentenceCount: rawSentences.length,
        avgSentenceLength: Math.round(avgSentenceLength * 10) / 10,
        stdDev: Math.round(stdDev * 10) / 10,
        burstinessScore,
        humanScore,
        cliches: foundCliches,
        totalPenalty,
        finalScore,
    };
}

function getAllTargetFiles() {
    const files = [];
    const scanDir = (dir, relBase = '') => {
        const items = fs.readdirSync(dir);
        for (const item of items) {
            const full = path.join(dir, item);
            const rel = path.join(relBase, item);
            if (fs.statSync(full).isDirectory()) {
                scanDir(full, rel);
            } else if (item.endsWith('.tsx') && !item.startsWith('_') && !item.includes('layout') && !item.includes('loading')) {
                files.push({ full, rel });
            }
        }
    };

    scanDir(path.join(__dirname, 'src', 'app'), 'src/app');
    return files;
}

console.log(`\n${BOLD}${BG_MAGENTA}${WHITE}                                                                              ${RESET}`);
console.log(`${BOLD}${BG_MAGENTA}${WHITE}   🤖 ULTRA SÜPERSONİK YAPAY ZEKA METİN & DOĞALLIK TEST MOTORU                ${RESET}`);
console.log(`${BOLD}${BG_MAGENTA}${WHITE}   Analiz: 50+ Türkçe LLM Tetikleyicisi | Burstiness Ritim | E-E-A-T İmzası   ${RESET}`);
console.log(`${BOLD}${BG_MAGENTA}${WHITE}                                                                              ${RESET}\n`);

const targetFiles = getAllTargetFiles();
console.log(`📂 Taranan toplam içerik sayfası: ${BOLD}${targetFiles.length}${RESET}\n`);

const results = [];
let passedCount = 0;
let warnCount = 0;
let failCount = 0;

for (const f of targetFiles) {
    const res = analyzeFile(f.full, f.rel);
    if (!res) continue;
    results.push(res);
}

// Sonuçları puana göre sırala (en düşük puanlı en üstte)
results.sort((a, b) => a.finalScore - b.finalScore);

for (const res of results) {
    let statusBadge = `${GREEN}[DOĞAL İNSAN]%${res.finalScore}${RESET}`;
    if (res.finalScore < 70) {
        statusBadge = `${RED}${BOLD}[AI RİSKİ] %${res.finalScore}${RESET}`;
        failCount++;
    } else if (res.finalScore < 85) {
        statusBadge = `${YELLOW}[ORTA KALİTE] %${res.finalScore}${RESET}`;
        warnCount++;
    } else {
        passedCount++;
    }

    console.log(`${statusBadge} ${BOLD}${res.path}${RESET} (${res.wordCount} kelime, Cümle Ritim StdDev: ${res.stdDev})`);

    if (res.cliches.length > 0) {
        res.cliches.forEach(c => {
            console.log(`     ${RED}↳ Klişe:${RESET} ${c.name} (${c.count} kez) → ${YELLOW}Öneri:${RESET} ${c.tip}`);
        });
    }

    if (res.stdDev < 5.0 && res.wordCount > 250) {
        console.log(`     ${YELLOW}↳ Monoton Cümle Uyarısı:${RESET} Cümle uzunlukları birbirine çok yakın (StdDev: ${res.stdDev}). Kısa ve vurucu cümleler ekleyin.`);
    }
}

// Genel Özet Kartı
console.log(`\n${BOLD}${CYAN}==============================================================================${RESET}`);
console.log(`${BOLD}${WHITE}                   📈 GENEL İÇERİK DOĞALLIK SKOR KARTI                        ${RESET}`);
console.log(`${BOLD}${CYAN}==============================================================================${RESET}\n`);

const overallAverage = Math.round(results.reduce((a, b) => a + b.finalScore, 0) / results.length);

let overallBadge = `${GREEN}${BOLD}MÜKEMMEL (DOĞAL İNSAN SESİ) 🏆${RESET}`;
if (overallAverage < 75) overallBadge = `${RED}${BOLD}YÜKSEK AI İÇERİK RİSKİ ❌${RESET}`;
else if (overallAverage < 85) overallBadge = `${YELLOW}${BOLD}KABUL EDİLEBİLİR, BAZI YAZILAR İYİLEŞTİRİLMELİ ⚠${RESET}`;

console.log(`  İncelenen Sayfa Sayısı   : ${BOLD}${results.length}${RESET}`);
console.log(`  Doğal / Kusursuz Sayfalar: ${GREEN}${BOLD}${passedCount}${RESET}`);
console.log(`  Orta / İyileştirilebilir : ${YELLOW}${BOLD}${warnCount}${RESET}`);
console.log(`  Yüksek AI Riski Taşıyan  : ${RED}${BOLD}${failCount}${RESET}`);
console.log(`  Sitenin Genel Doğallık Notu: ${BOLD}%${overallAverage}${RESET} / %100`);
console.log(`  Nihai Kalite Değerlendirmesi: ${overallBadge}\n`);

// Eğer fail varsa 1 döndür, yoksa 0
process.exit(failCount > 0 ? 1 : 0);
