/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║              ULTRA-DETAYLI AI İÇERİK TESPİT MOTORU v2.0               ║
 * ║          Türkçe İçerik Analizi — yksnethesapla.com için               ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 * 
 * Bu script aşağıdaki 12 bağımsız analiz katmanını çalıştırır:
 * 
 *  1.  Morfolojik Analiz       — Türkçe fiil çekimleri, resmi/gayri-resmi ayrımı
 *  2.  Leksik Zenginlik        — TTR, hapax legomena, kelime çeşitliliği
 *  3.  Sentaks Analizi         — Cümle uzunluk dağılımı, standart sapma, burstiness
 *  4.  Stilistik Kalıp Tespiti — AI'ya özgü geçiş ifadeleri, dolgu cümleleri
 *  5.  Okunabilirlik Skoru     — Ateşman formülü (Türkçe uyarlamalı)
 *  6.  Burstiness Ölçümü       — İnsan vs AI cümle uzunluk varyansı
 *  7.  Tekrar (Repetition)     — N-gram tekrar oranları, klişe yoğunluğu
 *  8.  Kişisellik Endeksi      — Zamir, soru, ünlem, hitap analizi
 *  9.  Noktalama Kalıpları     — Virgül/nokta oranı, soru-ünlem dağılımı
 * 10.  Paragraf Yapısı         — Paragraf uzunlukları, geçiş tutarlılığı
 * 11.  Kelime Uzunluk Dağılımı — Entropi, Zipf uyumu
 * 12.  Semantik Tutarlılık     — Konu kümesi analizi, kelime bulutu yoğunluğu
 * 
 * Her katman 0-100 arası bağımsız skor üretir.
 * Final AI skoru ağırlıklı ortalama ile hesaplanır.
 * 
 * Kullanım: node ultra-ai-detector.js
 */

const fs = require('fs');
const path = require('path');

// ═══════════════════════════════════════════════════════════════
//  KONFIGÜRASYON
// ═══════════════════════════════════════════════════════════════

const PROJECT_ROOT = 'c:\\Users\\kasir\\Desktop\\yks net hesapla';
const SCAN_DIRS = [
    path.join(PROJECT_ROOT, 'src/app'),
    path.join(PROJECT_ROOT, 'src/components'),
];
const MIN_WORD_COUNT = 30; // Bu kadardan az kelimeli dosyalar atlanır
const OUTPUT_TOP_N = 60;   // Raporda gösterilecek max dosya sayısı

// ═══════════════════════════════════════════════════════════════
//  KATMAN AĞIRLIKLARI (toplam = 1.0)
// ═══════════════════════════════════════════════════════════════

const LAYER_WEIGHTS = {
    morphology:         0.18,  // En güçlü sinyal: Türkçe fiil kalıpları
    lexicalRichness:    0.10,
    syntax:             0.10,
    stylistic:          0.14,  // AI geçiş ifadeleri
    readability:        0.06,
    burstiness:         0.10,  // İnsan yazısının en güçlü özelliği
    repetition:         0.08,
    personality:        0.12,  // Kişisel hitap, soru, ünlem
    punctuation:        0.04,
    paragraphStructure: 0.03,
    wordLengthDist:     0.03,
    semanticCoherence:  0.02,
};

// ═══════════════════════════════════════════════════════════════
//  TÜRKÇE DİL VERİTABANI
// ═══════════════════════════════════════════════════════════════

const TURKISH_DB = {
    // --- 1. MORFOLOJİK KALIPLAR ---
    // Resmi fiil sonekleri (AI'nın aşırı kullandığı)
    formalVerbSuffixes: [
        'maktadır', 'mektedir', 'lmaktadır', 'lmektedir',
        'ılmaktadır', 'ilmektedir', 'ulmaktadır', 'ülmektedir',
        'nmaktadır', 'nmektedir', 'unulmaktadır',
        'bulunmaktadır', 'gerekmektedir', 'olmaktadır',
        'taşımaktadır', 'oluşturmaktadır', 'sağlamaktadır',
        'içermektedir', 'gerektirmektedir', 'sunmaktadır',
        'barındırmaktadır', 'yansıtmaktadır',
    ],
    // Zorunluluk kalıpları (AI sıkça kullanır)
    obligationSuffixes: [
        'ılmalıdır', 'ilmelidir', 'ulmalıdır', 'ülmelidir',
        'malıdır', 'melidir', 'nmalıdır', 'nmelidir',
        'yapılmalıdır', 'edilmelidir', 'sağlanmalıdır',
        'dikkate alınmalıdır', 'göz önünde bulundurulmalıdır',
        'unutulmamalıdır', 'ihmal edilmemelidir',
    ],
    // Edilgen yapılar
    passiveConstructions: [
        'edilebilir', 'yapılabilir', 'sağlanabilir', 'gerçekleştirilebilir',
        'uygulanabilir', 'değerlendirilebilir', 'kullanılabilir',
        'ifade edilebilir', 'ele alınabilir', 'tespit edilebilir',
        'gözlemlenmektedir', 'bilinmektedir', 'görülmektedir',
        'kabul edilmektedir', 'değerlendirilmektedir',
        'belirtilmektedir', 'öngörülmektedir', 'varsayılmaktadır',
    ],
    // Gayri-resmi/İnsani fiil kalıpları (düşük AI skoru)
    informalVerbForms: [
        'yapabilirsin', 'edebilirsin', 'çözebilirsin', 'bakabilirsin',
        'kullanabilirsin', 'deneyebilirsin', 'geçebilirsin',
        'yaparsın', 'edersin', 'görürsün', 'bulursun',
        'yaparsan', 'edersen', 'bakarsan', 'çözersen',
        'yapıyorsun', 'ediyorsun', 'çözüyorsun', 'bakıyorsun',
        'yaptıysan', 'ettiysen', 'çözdüysen', 'baktıysan',
        'yapma', 'etme', 'bakma', 'çözme', 'bırakma',
        'dene', 'bak', 'çöz', 'gir', 'oku', 'yaz', 'geç',
    ],

    // --- 2. STİLİSTİK KALIPLAR ---
    // AI geçiş ifadeleri (çok güçlü sinyal)
    aiTransitionPhrases: [
        // Kesinlik ifadeleri
        'şüphesiz', 'kuşkusuz', 'hiç şüphesiz', 'şüphe yok ki',
        'tartışmasız', 'aşikârdır', 'açıktır ki', 'malumunuz',
        // Bağlam ifadeleri
        'bu bağlamda', 'bu doğrultuda', 'bu kapsamda', 'bu çerçevede',
        'bu perspektiften', 'bu açıdan bakıldığında', 'bu minvalde',
        'söz konusu', 'ilgili husus', 'bu hususta', 'bu noktada',
        // Zıtlık/ekleme
        'bununla birlikte', 'öte yandan', 'diğer taraftan',
        'nitekim', 'zira', 'ayrıca belirtmek gerekir ki',
        'bunun yanı sıra', 'ilaveten', 'ek olarak',
        // Sonuç
        'sonuç olarak', 'nihayetinde', 'netice itibarıyla',
        'sonuç itibarıyla', 'özetle ifade etmek gerekirse',
        'genel bir değerlendirme yapıldığında',
    ],
    // Pompöz/şişirilmiş ifadeler
    inflatedExpressions: [
        'son derece', 'hayati önem', 'büyük önem', 'kritik önem',
        'olağanüstü', 'eşsiz', 'benzersiz', 'müstesna',
        'kapsamlı', 'bütüncül', 'holistik', 'multidisipliner',
        'paradigma', 'optimum', 'optimizasyon', 'maksimum verimlilik',
        'etkili bir şekilde', 'verimli bir şekilde', 'sistematik bir şekilde',
        'stratejik', 'dinamik', 'yenilikçi', 'öncü', 'vizyoner',
        'rehber niteliğinde', 'mihenk taşı', 'dönüm noktası',
        'paradigma değişimi', 'sürdürülebilir',
    ],
    // Genel dolgu cümleleri
    genericFillers: [
        'göz ardı edilmemelidir', 'unutulmamalıdır', 'dikkat edilmelidir',
        'önemle belirtmek gerekir', 'vurgulamak gerekir',
        'altını çizmek gerekir', 'ifade etmek gerekir',
        'belirtmekte fayda var', 'söylemek mümkündür',
        'açıkça görülmektedir', 'kolayca anlaşılabilir',
        'yadsınamaz bir gerçektir', 'su götürmez bir şekilde',
        'değinmek gerekmektedir', 'ele almak gerekmektedir',
        'irdelemek gerekmektedir', 'incelemek gerekmektedir',
    ],
    // AI cümle başlangıçları
    aiSentenceStarters: [
        'bu noktada', 'bu süreçte', 'bu anlamda', 'bu kapsamda',
        'bu yaklaşım', 'bu strateji', 'bu yöntem', 'bu teknik',
        'söz konusu', 'ilgili', 'mevcut', 'bahse konu',
        'yukarıda belirtildiği üzere', 'daha önce değinildiği gibi',
        'bilindiği üzere', 'aşağıda detaylı olarak',
    ],

    // --- 3. İNSANİ GÖSTERGELER ---
    // Konuşma dili ifadeleri
    conversationalMarkers: [
        'yani', 'mesela', 'hani', 'işte', 'zaten', 'aslında',
        'bence', 'gerçekten', 'cidden', 'harbiden', 'resmen',
        'vallahi', 'ya', 'lan', 'abi', 'ha', 'tamam',
        'iyi de', 'peki', 'neyse', 'tabii', 'tabi',
        'ama işte', 'bir de', 'bir bakıma', 'nasıl diyeyim',
        'açıkçası', 'doğrusu', 'kısaca', 'basitçe',
    ],
    // Samimi/doğrudan ifadeler
    directAddressMarkers: [
        // sen formları
        'senin', 'sana', 'sende', 'senden', 'seninle',
        // informal imperative
        'dene', 'denedin', 'gördün', 'buldun', 'anladın',
        'yapabilirsin', 'edebilirsin', 'öğrenirsin',
        'oku', 'çöz', 'bak', 'düşün', 'kontrol et',
        // 1. tekil
        'ben', 'benim', 'bana', 'bende', 'benden',
        'anlattım', 'yazdım', 'gördüm', 'düşünüyorum',
    ],
    // Günlük/konuşma dili fiilleri
    colloquialVerbs: [
        'kıpırdamıyor', 'patladığın', 'dalıyordu', 'kaçar',
        'donarsın', 'eritiyor', 'dağıtıyor', 'takılırsan',
        'tutturduğun', 'sıkışanlar', 'bırakıyor', 'kazanıyor',
        'açıyorsun', 'kapatıyorsun', 'atlıyorsun', 'geçiyorsun',
        'diyordu', 'diyor', 'denir', 'derler',
        'sıçrar', 'patlar', 'kopar', 'çöker',
    ],
    // Retorik sorular (insan göstergesi)
    rhetoricalQuestionMarkers: [
        'değil mi', 'olmaz mı', 'düşünmedin mi',
        'neden', 'nasıl', 'ne zaman', 'niye', 'niçin',
        'kaç kere', 'hangi', 'kim', 'kimin',
    ],

    // --- 4. N-GRAM KLİŞE VERİTABANI ---
    aiCliches: [
        'genel olarak değerlendirildiğinde',
        'bu durum göz önüne alındığında',
        'tüm bunlar bir arada düşünüldüğünde',
        'konuya farklı bir perspektiften bakıldığında',
        'günümüz koşullarında',
        'modern dünyada',
        'teknolojinin gelişmesiyle birlikte',
        'eğitim alanında',
        'akademik başarı',
        'kişisel gelişim',
        'sınav sürecinde',
        'hazırlık döneminde',
        'doğru stratejiyle',
        'planlı bir şekilde',
        'disiplinli bir çalışmayla',
    ],
};

// ═══════════════════════════════════════════════════════════════
//  METİN ÇIKARICI (JSX/TSX'ten saf metin elde et)
// ═══════════════════════════════════════════════════════════════

function extractTextFromTSX(content) {
    let extracted = '';
    
    // 1) JSX metin içerikleri: > ... <
    const jsxTextRegex = />\s*([^<>{}`\n][^<>{}]*?)\s*</g;
    let match;
    while ((match = jsxTextRegex.exec(content)) !== null) {
        const text = match[1].trim()
            .replace(/&amp;/g, '&')
            .replace(/&apos;/g, "'")
            .replace(/&quot;/g, '"')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/\{[^}]*\}/g, '') // Remove JSX expressions
            .trim();
        
        if (text.length > 3 && 
            !/^[{}\[\]()=,;:!@#$%^&*]/.test(text) &&
            !text.startsWith('className') &&
            !text.startsWith('http') &&
            !text.startsWith('src=') &&
            !text.startsWith('href=') &&
            !/^\d+$/.test(text) &&
            !text.startsWith('//') &&
            !text.startsWith('/*')) {
            extracted += text + ' ';
        }
    }
    
    // 2) String prop değerleri (title, description, excerpt vb.)
    const propRegex = /(?:title|description|excerpt|alt|placeholder|label)\s*[:=]\s*[`'"]((?:[^`'"\\]|\\.)*?)[`'"]/g;
    while ((match = propRegex.exec(content)) !== null) {
        const text = match[1].trim();
        if (text.length > 15 && !text.includes('className') && !text.includes('http')) {
            extracted += text + ' ';
        }
    }
    
    // 3) q/a objelerindeki string değerleri
    const qaRegex = /[qa]\s*:\s*['"`]((?:[^'"`\\]|\\.)*?)['"`]/g;
    while ((match = qaRegex.exec(content)) !== null) {
        const text = match[1].trim();
        if (text.length > 10) {
            extracted += text + ' ';
        }
    }
    
    return extracted.replace(/\s+/g, ' ').trim();
}

// ═══════════════════════════════════════════════════════════════
//  YARDIMCI FONKSİYONLAR
// ═══════════════════════════════════════════════════════════════

/** Metni cümlelere böl */
function splitSentences(text) {
    return text
        .split(/(?<=[.!?…])\s+/)
        .filter(s => s.trim().length > 5)
        .map(s => s.trim());
}

/** Metni kelimelere böl */
function splitWords(text) {
    return text
        .toLowerCase()
        .replace(/[^\wğüşıöçĞÜŞİÖÇ\s]/g, '')
        .split(/\s+/)
        .filter(w => w.length > 0);
}

/** Metni paragraflara böl */
function splitParagraphs(text) {
    return text.split(/\n\s*\n/).filter(p => p.trim().length > 20);
}

/** Standart sapma hesapla */
function stdDev(arr) {
    if (arr.length < 2) return 0;
    const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
    const variance = arr.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / arr.length;
    return Math.sqrt(variance);
}

/** Varyasyon katsayısı */
function coefficientOfVariation(arr) {
    if (arr.length < 2) return 0;
    const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
    if (mean === 0) return 0;
    return stdDev(arr) / mean;
}

/** Entropi hesapla */
function entropy(arr) {
    const total = arr.reduce((a, b) => a + b, 0);
    if (total === 0) return 0;
    return -arr
        .filter(x => x > 0)
        .map(x => x / total)
        .reduce((sum, p) => sum + p * Math.log2(p), 0);
}

/** Regex ile sayım */
function countMatches(text, patterns, caseInsensitive = true) {
    let total = 0;
    const found = [];
    const flags = caseInsensitive ? 'gi' : 'g';
    
    patterns.forEach(pattern => {
        try {
            const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`\\b${escaped}`, flags);
            const matches = text.match(regex);
            if (matches) {
                total += matches.length;
                found.push({ pattern, count: matches.length });
            }
        } catch (e) {
            // ignore regex errors
        }
    });
    
    return { total, found };
}

/** Skoru 0-100 arasında sınırla */
function clamp(value, min = 0, max = 100) {
    return Math.max(min, Math.min(max, Math.round(value)));
}

// ═══════════════════════════════════════════════════════════════
//  ANALİZ KATMANLARI
// ═══════════════════════════════════════════════════════════════

/**
 * KATMAN 1: Morfolojik Analiz
 * Türkçe fiil çekimlerindeki resmi/gayri-resmi ayrımı
 */
function analyzeMorphology(text, words, sentences) {
    const wordCount = words.length;
    const sentenceCount = sentences.length;
    
    // Resmi fiil sonekleri
    const formalVerbs = countMatches(text, TURKISH_DB.formalVerbSuffixes);
    // Zorunluluk kalıpları
    const obligations = countMatches(text, TURKISH_DB.obligationSuffixes);
    // Edilgen yapılar
    const passives = countMatches(text, TURKISH_DB.passiveConstructions);
    // Gayri-resmi fiiller
    const informalVerbs = countMatches(text, TURKISH_DB.informalVerbForms);
    
    const formalDensity = ((formalVerbs.total + obligations.total + passives.total) / Math.max(sentenceCount, 1)) * 100;
    const informalDensity = (informalVerbs.total / Math.max(sentenceCount, 1)) * 100;
    
    // Resmilik oranı: resmi/(resmi+informal)
    const formalRatio = (formalVerbs.total + obligations.total + passives.total) /
        Math.max(formalVerbs.total + obligations.total + passives.total + informalVerbs.total, 1);
    
    // AI skoru: resmilik yüksekse AI, informaliyet yüksekse insan
    let score = clamp(formalRatio * 100 + (formalDensity * 3) - (informalDensity * 8));
    
    return {
        name: 'Morfolojik Analiz',
        score,
        details: {
            formalVerbCount: formalVerbs.total,
            obligationCount: obligations.total,
            passiveCount: passives.total,
            informalVerbCount: informalVerbs.total,
            formalDensityPerSentence: +(formalDensity).toFixed(2),
            informalDensityPerSentence: +(informalDensity).toFixed(2),
            formalRatio: +(formalRatio * 100).toFixed(1) + '%',
            topFormalPatterns: formalVerbs.found.concat(obligations.found).concat(passives.found)
                .sort((a, b) => b.count - a.count).slice(0, 5),
            topInformalPatterns: informalVerbs.found.sort((a, b) => b.count - a.count).slice(0, 5),
        },
    };
}

/**
 * KATMAN 2: Leksik Zenginlik
 * TTR (Type-Token Ratio), hapax legomena, kelime çeşitliliği
 */
function analyzeLexicalRichness(text, words) {
    const wordCount = words.length;
    const uniqueWords = new Set(words);
    const uniqueCount = uniqueWords.size;
    
    // Type-Token Ratio (kelime çeşitliliği)
    const ttr = uniqueCount / Math.max(wordCount, 1);
    
    // Hapax Legomena: sadece 1 kere geçen kelimeler
    const wordFreq = {};
    words.forEach(w => { wordFreq[w] = (wordFreq[w] || 0) + 1; });
    const hapaxCount = Object.values(wordFreq).filter(c => c === 1).length;
    const hapaxRatio = hapaxCount / Math.max(uniqueCount, 1);
    
    // Brunet'in W indeksi (kelime uzunluğundan bağımsız)
    const brunetW = wordCount > 0 ? Math.pow(wordCount, Math.pow(uniqueCount, -0.172)) : 0;
    
    // Yule'un K istatistiği (kelime tekrar deseni)
    const freqOfFreq = {};
    Object.values(wordFreq).forEach(f => { freqOfFreq[f] = (freqOfFreq[f] || 0) + 1; });
    let yuleSum = 0;
    Object.entries(freqOfFreq).forEach(([freq, count]) => {
        yuleSum += count * Math.pow(parseInt(freq), 2);
    });
    const yuleK = wordCount > 0 ? 10000 * (yuleSum - wordCount) / Math.pow(wordCount, 2) : 0;
    
    // AI metinleri genelde orta TTR'ye sahiptir (ne çok düşük ne çok yüksek)
    // İnsan metinleri daha değişken
    // Düşük TTR = çok tekrar, Yüksek TTR = çok çeşitli
    // AI genelde 0.35-0.55 arası stabil bir TTR üretir
    
    const aiTTRZone = Math.abs(ttr - 0.45) < 0.1 ? 20 : 0; // AI'nın tipik TTR aralığı
    const lowHapax = hapaxRatio < 0.4 ? 15 : 0; // Düşük hapax = tekrarlı = AI
    
    let score = clamp(aiTTRZone + lowHapax + (yuleK > 120 ? 15 : 0));
    
    return {
        name: 'Leksik Zenginlik',
        score,
        details: {
            totalWords: wordCount,
            uniqueWords: uniqueCount,
            ttr: +ttr.toFixed(4),
            hapaxLegomena: hapaxCount,
            hapaxRatio: +(hapaxRatio * 100).toFixed(1) + '%',
            brunetW: +brunetW.toFixed(2),
            yuleK: +yuleK.toFixed(2),
            top10FrequentWords: Object.entries(wordFreq)
                .filter(([w]) => w.length > 3)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 10)
                .map(([w, c]) => `${w} (${c})`),
        },
    };
}

/**
 * KATMAN 3: Sentaks Analizi
 * Cümle uzunluk dağılımı, yapısal çeşitlilik
 */
function analyzeSyntax(text, words, sentences) {
    const sentenceLengths = sentences.map(s => s.split(/\s+/).length);
    const avgLen = sentenceLengths.reduce((a, b) => a + b, 0) / Math.max(sentenceLengths.length, 1);
    const sd = stdDev(sentenceLengths);
    const cv = coefficientOfVariation(sentenceLengths);
    
    // Uzunluk aralıklarına göre dağılım
    const distribution = {
        veryShort: sentenceLengths.filter(l => l <= 5).length,    // 1-5 kelime
        short: sentenceLengths.filter(l => l > 5 && l <= 12).length,  // 6-12
        medium: sentenceLengths.filter(l => l > 12 && l <= 20).length, // 13-20
        long: sentenceLengths.filter(l => l > 20 && l <= 30).length,  // 21-30
        veryLong: sentenceLengths.filter(l => l > 30).length,   // 31+
    };
    
    const total = sentenceLengths.length || 1;
    
    // AI metinleri daha homojen cümle uzunluğuna sahiptir (düşük CV)
    // İnsan metinleri daha değişken (yüksek CV)
    const lowVariance = cv < 0.35 ? 30 : cv < 0.45 ? 15 : 0;
    
    // Çok uzun cümleler AI göstergesi
    const longSentenceRatio = (distribution.veryLong / total) * 100;
    const longPenalty = longSentenceRatio > 15 ? 20 : longSentenceRatio > 8 ? 10 : 0;
    
    // Çok kısa cümlelerin olmaması AI göstergesi (insan çok kısa cümleler de yazar)
    const noShortSentences = distribution.veryShort === 0 && distribution.short < total * 0.1 ? 15 : 0;
    
    // Ortalama cümle uzunluğu 25+ = AI eğilimi
    const avgLenPenalty = avgLen > 30 ? 25 : avgLen > 25 ? 15 : avgLen > 22 ? 8 : 0;
    
    let score = clamp(lowVariance + longPenalty + noShortSentences + avgLenPenalty);
    
    return {
        name: 'Sentaks Analizi',
        score,
        details: {
            sentenceCount: sentenceLengths.length,
            avgSentenceLength: +avgLen.toFixed(1),
            stdDeviation: +sd.toFixed(2),
            coefficientOfVariation: +cv.toFixed(3),
            distribution: {
                '1-5 kelime': distribution.veryShort,
                '6-12 kelime': distribution.short,
                '13-20 kelime': distribution.medium,
                '21-30 kelime': distribution.long,
                '31+ kelime': distribution.veryLong,
            },
            longestSentence: Math.max(...sentenceLengths, 0),
            shortestSentence: Math.min(...(sentenceLengths.length ? sentenceLengths : [0])),
        },
    };
}

/**
 * KATMAN 4: Stilistik Kalıp Tespiti
 * AI geçiş ifadeleri, dolgu cümleleri, klişeler
 */
function analyzeStylistic(text, words, sentences) {
    const wordCount = words.length;
    const sentenceCount = sentences.length;
    
    const transitions = countMatches(text, TURKISH_DB.aiTransitionPhrases);
    const inflated = countMatches(text, TURKISH_DB.inflatedExpressions);
    const fillers = countMatches(text, TURKISH_DB.genericFillers);
    const starters = countMatches(text, TURKISH_DB.aiSentenceStarters);
    const cliches = countMatches(text, TURKISH_DB.aiCliches);
    
    const totalAIMarkers = transitions.total + inflated.total + fillers.total + starters.total + cliches.total;
    const markerDensity = (totalAIMarkers / Math.max(sentenceCount, 1)) * 100;
    
    let score = clamp(
        (markerDensity * 12) +
        (transitions.total * 5) +
        (inflated.total * 4) +
        (fillers.total * 8) +
        (cliches.total * 6)
    );
    
    return {
        name: 'Stilistik Kalıp Tespiti',
        score,
        details: {
            totalAIMarkers,
            markerDensityPerSentence: +markerDensity.toFixed(2) + '%',
            breakdown: {
                transitionPhrases: transitions.total,
                inflatedExpressions: inflated.total,
                genericFillers: fillers.total,
                aiSentenceStarters: starters.total,
                cliches: cliches.total,
            },
            topFlaggedPhrases: [
                ...transitions.found, ...inflated.found,
                ...fillers.found, ...starters.found, ...cliches.found
            ].sort((a, b) => b.count - a.count).slice(0, 8),
        },
    };
}

/**
 * KATMAN 5: Okunabilirlik Skoru
 * Ateşman formülü (Türkçe Flesch uyarlaması)
 */
function analyzeReadability(text, words, sentences) {
    const wordCount = words.length;
    const sentenceCount = sentences.length;
    
    // Hece sayısı tahmini (Türkçe: sesli harf sayısı)
    const vowels = text.match(/[aeıioöuüAEIİOÖUÜ]/g);
    const syllableCount = vowels ? vowels.length : wordCount;
    
    const avgSyllablesPerWord = syllableCount / Math.max(wordCount, 1);
    const avgWordsPerSentence = wordCount / Math.max(sentenceCount, 1);
    
    // Ateşman formülü (Türkçe için):
    // Okunabilirlik = 198.825 - 40.175 × (hece/kelime) - 2.610 × (kelime/cümle)
    const atesman = 198.825 - (40.175 * avgSyllablesPerWord) - (2.610 * avgWordsPerSentence);
    
    // AI metinleri genelde 40-60 arası Ateşman skoru üretir (orta zorluk)
    // İnsan metinleri daha değişken: çok kolay veya çok zor olabilir
    const isAIRange = atesman >= 35 && atesman <= 65;
    
    let score = clamp(isAIRange ? 20 : 5);
    
    // Çok düşük okunabilirlik (çok zor metin) = AI eğilimi
    if (atesman < 30) score += 15;
    
    return {
        name: 'Okunabilirlik',
        score,
        details: {
            atesmanScore: +atesman.toFixed(1),
            interpretation: atesman > 70 ? 'Çok Kolay' :
                          atesman > 50 ? 'Kolay' :
                          atesman > 30 ? 'Orta' :
                          atesman > 15 ? 'Zor' : 'Çok Zor',
            avgSyllablesPerWord: +avgSyllablesPerWord.toFixed(2),
            avgWordsPerSentence: +avgWordsPerSentence.toFixed(1),
            estimatedSyllables: syllableCount,
        },
    };
}

/**
 * KATMAN 6: Burstiness Ölçümü
 * İnsan yazısının en belirgin özelliği: düzensiz cümle uzunlukları
 * AI metinleri çok düzgün, insan metinleri "patlak" (bursty)
 */
function analyzeBurstiness(text, words, sentences) {
    const sentenceLengths = sentences.map(s => s.split(/\s+/).length);
    
    if (sentenceLengths.length < 3) {
        return { name: 'Burstiness', score: 50, details: { note: 'Yetersiz veri' } };
    }
    
    // Ardışık cümle uzunluk farkları
    const diffs = [];
    for (let i = 1; i < sentenceLengths.length; i++) {
        diffs.push(Math.abs(sentenceLengths[i] - sentenceLengths[i - 1]));
    }
    
    const avgDiff = diffs.reduce((a, b) => a + b, 0) / diffs.length;
    const maxDiff = Math.max(...diffs);
    
    // Burstiness katsayısı: (σ - μ) / (σ + μ)
    // -1 = çok düzenli (AI), 0 = Poisson, +1 = çok patlak (insan)
    const mean = sentenceLengths.reduce((a, b) => a + b, 0) / sentenceLengths.length;
    const sd = stdDev(sentenceLengths);
    const burstiness = (sd - mean) / (sd + mean + 0.001); // +0.001 bölme hatası önlemi
    
    // Uzun-kısa alternasyon sayısı
    let alternations = 0;
    for (let i = 2; i < sentenceLengths.length; i++) {
        const prev = sentenceLengths[i - 1];
        const curr = sentenceLengths[i];
        const prevPrev = sentenceLengths[i - 2];
        if ((prev > prevPrev && prev > curr) || (prev < prevPrev && prev < curr)) {
            alternations++;
        }
    }
    const alternationRatio = alternations / Math.max(sentenceLengths.length - 2, 1);
    
    // Düşük burstiness = düzenli = AI
    // Yüksek burstiness = düzensiz = İnsan
    let score = clamp(
        (burstiness < -0.3 ? 60 : burstiness < -0.1 ? 35 : burstiness < 0.1 ? 20 : 5) +
        (avgDiff < 4 ? 20 : avgDiff < 7 ? 10 : 0) +
        (alternationRatio < 0.3 ? 15 : 0)
    );
    
    return {
        name: 'Burstiness (Patlak Yazım)',
        score,
        details: {
            burstinessCoefficient: +burstiness.toFixed(4),
            interpretation: burstiness > 0 ? 'İnsan benzeri (patlak)' :
                          burstiness > -0.2 ? 'Karışık' : 'AI benzeri (düzenli)',
            avgConsecutiveDiff: +avgDiff.toFixed(1),
            maxConsecutiveDiff: maxDiff,
            alternationRatio: +(alternationRatio * 100).toFixed(1) + '%',
            sentenceLengthSequence: sentenceLengths.slice(0, 15).join(', ') + 
                (sentenceLengths.length > 15 ? '...' : ''),
        },
    };
}

/**
 * KATMAN 7: Tekrar (Repetition) Analizi
 * N-gram tekrar oranları
 */
function analyzeRepetition(text, words) {
    const wordCount = words.length;
    
    // 2-gram (bigram) analizi
    const bigrams = {};
    for (let i = 0; i < words.length - 1; i++) {
        const bg = words[i] + ' ' + words[i + 1];
        bigrams[bg] = (bigrams[bg] || 0) + 1;
    }
    const repeatedBigrams = Object.entries(bigrams).filter(([, c]) => c >= 3);
    const bigramRepeatRatio = repeatedBigrams.length / Math.max(Object.keys(bigrams).length, 1);
    
    // 3-gram (trigram) analizi
    const trigrams = {};
    for (let i = 0; i < words.length - 2; i++) {
        const tg = words[i] + ' ' + words[i + 1] + ' ' + words[i + 2];
        trigrams[tg] = (trigrams[tg] || 0) + 1;
    }
    const repeatedTrigrams = Object.entries(trigrams).filter(([, c]) => c >= 2);
    const trigramRepeatRatio = repeatedTrigrams.length / Math.max(Object.keys(trigrams).length, 1);
    
    // Cümle başlangıç tekrarları
    const sentences = splitSentences(text);
    const starters = sentences.map(s => {
        const w = s.split(/\s+/).slice(0, 2).join(' ').toLowerCase();
        return w;
    });
    const starterFreq = {};
    starters.forEach(s => { starterFreq[s] = (starterFreq[s] || 0) + 1; });
    const repeatedStarters = Object.entries(starterFreq).filter(([, c]) => c >= 3);
    
    // AI metinleri daha tekrarlı kalıplar kullanır
    let score = clamp(
        (bigramRepeatRatio * 200) +
        (trigramRepeatRatio * 300) +
        (repeatedStarters.length * 10)
    );
    
    return {
        name: 'Tekrar Analizi',
        score,
        details: {
            uniqueBigrams: Object.keys(bigrams).length,
            repeatedBigrams: repeatedBigrams.length,
            bigramRepeatRatio: +(bigramRepeatRatio * 100).toFixed(2) + '%',
            uniqueTrigrams: Object.keys(trigrams).length,
            repeatedTrigrams: repeatedTrigrams.length,
            trigramRepeatRatio: +(trigramRepeatRatio * 100).toFixed(2) + '%',
            topRepeatedBigrams: repeatedBigrams.sort((a, b) => b[1] - a[1]).slice(0, 5)
                .map(([bg, c]) => `"${bg}" (${c}x)`),
            repeatedSentenceStarters: repeatedStarters.sort((a, b) => b[1] - a[1]).slice(0, 5)
                .map(([s, c]) => `"${s}" (${c}x)`),
        },
    };
}

/**
 * KATMAN 8: Kişisellik Endeksi
 * Zamir kullanımı, soru/ünlem, hitap analizi
 */
function analyzePersonality(text, words, sentences) {
    const wordCount = words.length;
    const sentenceCount = sentences.length;
    
    // Konuşma dili
    const conversational = countMatches(text, TURKISH_DB.conversationalMarkers);
    // Doğrudan hitap
    const directAddress = countMatches(text, TURKISH_DB.directAddressMarkers);
    // Günlük fiiller
    const colloquial = countMatches(text, TURKISH_DB.colloquialVerbs);
    // Retorik sorular
    const rhetorical = countMatches(text, TURKISH_DB.rhetoricalQuestionMarkers);
    
    const totalHumanMarkers = conversational.total + directAddress.total + colloquial.total + rhetorical.total;
    const humanDensity = (totalHumanMarkers / Math.max(sentenceCount, 1)) * 100;
    
    // Soru cümleleri
    const questionCount = (text.match(/\?/g) || []).length;
    const questionRatio = questionCount / Math.max(sentenceCount, 1);
    
    // Ünlem cümleleri
    const exclamationCount = (text.match(/!/g) || []).length;
    
    // Emoji/sembol kullanımı
    const emojiCount = (text.match(/[🎓⚡🎯💡📖📚🧮⚠️🔒✓📧🐛🤝📍❓⭐✅🔴🟡🟢]/g) || []).length;
    
    // Kişisellik ne kadar yüksekse AI skoru o kadar düşük
    let score = clamp(
        80 - (humanDensity * 5) -
        (questionRatio * 30) -
        (exclamationCount * 3) -
        (emojiCount * 2) -
        (colloquial.total * 5) -
        (directAddress.total * 3)
    );
    
    return {
        name: 'Kişisellik Endeksi',
        score,
        details: {
            totalHumanMarkers,
            humanDensityPerSentence: +humanDensity.toFixed(2) + '%',
            breakdown: {
                conversationalMarkers: conversational.total,
                directAddressMarkers: directAddress.total,
                colloquialVerbs: colloquial.total,
                rhetoricalQuestions: rhetorical.total,
            },
            questionMarks: questionCount,
            exclamationMarks: exclamationCount,
            emojis: emojiCount,
            topHumanIndicators: [
                ...conversational.found, ...directAddress.found,
                ...colloquial.found, ...rhetorical.found
            ].sort((a, b) => b.count - a.count).slice(0, 8),
        },
    };
}

/**
 * KATMAN 9: Noktalama Kalıpları
 */
function analyzePunctuation(text, sentences) {
    const commaCount = (text.match(/,/g) || []).length;
    const periodCount = (text.match(/\./g) || []).length;
    const semicolonCount = (text.match(/;/g) || []).length;
    const colonCount = (text.match(/:/g) || []).length;
    const dashCount = (text.match(/[—–-]/g) || []).length;
    const questionCount = (text.match(/\?/g) || []).length;
    const exclamationCount = (text.match(/!/g) || []).length;
    const parenthesisCount = (text.match(/[()]/g) || []).length;
    
    const sentenceCount = sentences.length;
    const commaPerSentence = commaCount / Math.max(sentenceCount, 1);
    
    // AI genelde virgülleri düzenli kullanır (2-3 per sentence)
    // AI soru ve ünlem az kullanır
    // AI parantez ve noktalı virgülü sever
    
    const regularCommaPattern = commaPerSentence > 1.5 && commaPerSentence < 3.5 ? 15 : 0;
    const lowQuestionUsage = questionCount < sentenceCount * 0.03 ? 10 : 0;
    const highSemicolon = semicolonCount > sentenceCount * 0.1 ? 10 : 0;
    
    let score = clamp(regularCommaPattern + lowQuestionUsage + highSemicolon);
    
    return {
        name: 'Noktalama Kalıpları',
        score,
        details: {
            commas: commaCount,
            periods: periodCount,
            semicolons: semicolonCount,
            colons: colonCount,
            dashes: dashCount,
            questionMarks: questionCount,
            exclamationMarks: exclamationCount,
            parentheses: parenthesisCount,
            commasPerSentence: +commaPerSentence.toFixed(2),
        },
    };
}

/**
 * KATMAN 10: Paragraf Yapısı
 */
function analyzeParagraphStructure(text) {
    const paragraphs = text.split(/\.\s+/).filter(p => p.trim().length > 20);
    
    if (paragraphs.length < 2) {
        return { name: 'Paragraf Yapısı', score: 30, details: { note: 'Yetersiz paragraf' } };
    }
    
    const paraLengths = paragraphs.map(p => p.split(/\s+/).length);
    const cv = coefficientOfVariation(paraLengths);
    
    // Düşük paragraf uzunluk varyansı = AI
    let score = clamp(cv < 0.3 ? 25 : cv < 0.5 ? 15 : 5);
    
    return {
        name: 'Paragraf Yapısı',
        score,
        details: {
            paragraphCount: paragraphs.length,
            avgParagraphLength: +(paraLengths.reduce((a, b) => a + b, 0) / paraLengths.length).toFixed(1),
            paragraphLengthCV: +cv.toFixed(3),
        },
    };
}

/**
 * KATMAN 11: Kelime Uzunluk Dağılımı
 */
function analyzeWordLengthDistribution(words) {
    const lengths = words.map(w => w.length);
    const avgLen = lengths.reduce((a, b) => a + b, 0) / lengths.length;
    
    // Uzunluk dağılımı
    const dist = {};
    lengths.forEach(l => { dist[l] = (dist[l] || 0) + 1; });
    
    // Entropi
    const counts = Object.values(dist);
    const ent = entropy(counts);
    
    // AI metinleri daha homojen kelime uzunluk dağılımına sahip
    // (daha düşük entropi)
    let score = clamp(ent < 2.5 ? 25 : ent < 3.0 ? 15 : 5);
    
    return {
        name: 'Kelime Uzunluk Dağılımı',
        score,
        details: {
            avgWordLength: +avgLen.toFixed(2),
            entropy: +ent.toFixed(3),
            distribution: Object.entries(dist)
                .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
                .reduce((obj, [k, v]) => { obj[k + ' harf'] = v; return obj; }, {}),
        },
    };
}

/**
 * KATMAN 12: Semantik Tutarlılık
 * Konu kelime kümesi analizi
 */
function analyzeSemanticCoherence(text, words) {
    // Konu anahtar kelimeleri (YKS bağlamı)
    const topicClusters = {
        sinav: ['sınav', 'ösym', 'yks', 'tyt', 'ayt', 'ydt', 'deneme', 'puan', 'sıralama', 'net', 'katsayı'],
        matematik: ['matematik', 'problem', 'denklem', 'geometri', 'fonksiyon', 'türev', 'integral'],
        turkce: ['türkçe', 'paragraf', 'dil', 'edebiyat', 'anlam', 'cümle', 'kelime'],
        strateji: ['strateji', 'plan', 'program', 'çalışma', 'tekrar', 'hedef', 'süre'],
        universite: ['üniversite', 'bölüm', 'fakülte', 'tercih', 'taban', 'kontenjan', 'yerleştirme'],
    };
    
    const clusterScores = {};
    for (const [cluster, keywords] of Object.entries(topicClusters)) {
        let count = 0;
        keywords.forEach(kw => {
            const regex = new RegExp(kw, 'gi');
            const matches = text.match(regex);
            if (matches) count += matches.length;
        });
        clusterScores[cluster] = count;
    }
    
    // Konu odağı: en yüksek kümeler arasındaki oran
    const sorted = Object.values(clusterScores).sort((a, b) => b - a);
    const focusRatio = sorted[0] / (sorted.reduce((a, b) => a + b, 1));
    
    // Çok dağınık konu = AI eğilimi (her konudan biraz bahseder)
    // Odaklı konu = İnsan eğilimi
    let score = clamp(focusRatio < 0.3 ? 20 : focusRatio < 0.5 ? 10 : 0);
    
    return {
        name: 'Semantik Tutarlılık',
        score,
        details: {
            topicClusterScores: clusterScores,
            topicFocusRatio: +(focusRatio * 100).toFixed(1) + '%',
            dominantTopic: Object.entries(clusterScores).sort((a, b) => b[1] - a[1])[0]?.[0] || 'belirsiz',
        },
    };
}

// ═══════════════════════════════════════════════════════════════
//  ANA ANALİZ FONKSİYONU
// ═══════════════════════════════════════════════════════════════

function analyzeFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const text = extractTextFromTSX(content);
    const words = splitWords(text);
    const sentences = splitSentences(text);
    
    if (words.length < MIN_WORD_COUNT) return null;
    
    const relativePath = path.relative(PROJECT_ROOT, filePath);
    
    // 12 katmanı çalıştır
    const layers = [
        analyzeMorphology(text, words, sentences),
        analyzeLexicalRichness(text, words),
        analyzeSyntax(text, words, sentences),
        analyzeStylistic(text, words, sentences),
        analyzeReadability(text, words, sentences),
        analyzeBurstiness(text, words, sentences),
        analyzeRepetition(text, words),
        analyzePersonality(text, words, sentences),
        analyzePunctuation(text, sentences),
        analyzeParagraphStructure(text),
        analyzeWordLengthDistribution(words),
        analyzeSemanticCoherence(text, words),
    ];
    
    // Ağırlıklı final skor hesapla
    const weightKeys = Object.keys(LAYER_WEIGHTS);
    let finalScore = 0;
    layers.forEach((layer, i) => {
        const weight = LAYER_WEIGHTS[weightKeys[i]] || 0;
        finalScore += layer.score * weight;
    });
    finalScore = clamp(finalScore);
    
    return {
        file: relativePath,
        wordCount: words.length,
        sentenceCount: sentences.length,
        finalScore,
        layers,
    };
}

// ═══════════════════════════════════════════════════════════════
//  DOSYA TARAYICI
// ═══════════════════════════════════════════════════════════════

function walkDir(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    
    const items = fs.readdirSync(dir);
    for (const item of items) {
        if (item === 'node_modules' || item === '.next' || item === '.git') continue;
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            results = results.concat(walkDir(fullPath));
        } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
            const result = analyzeFile(fullPath);
            if (result) results.push(result);
        }
    }
    return results;
}

// ═══════════════════════════════════════════════════════════════
//  RAPOR ÜRETICI
// ═══════════════════════════════════════════════════════════════

function generateReport(allResults) {
    const timestamp = new Date().toLocaleString('tr-TR');
    
    allResults.sort((a, b) => b.finalScore - a.finalScore);
    
    const totalWords = allResults.reduce((s, r) => s + r.wordCount, 0);
    const totalSentences = allResults.reduce((s, r) => s + r.sentenceCount, 0);
    const avgScore = allResults.reduce((s, r) => s + r.finalScore, 0) / allResults.length;
    
    const highRisk = allResults.filter(r => r.finalScore >= 55);
    const mediumRisk = allResults.filter(r => r.finalScore >= 30 && r.finalScore < 55);
    const lowRisk = allResults.filter(r => r.finalScore < 30);
    
    // HEADER
    console.log('\n');
    console.log('╔══════════════════════════════════════════════════════════════════════════╗');
    console.log('║                                                                        ║');
    console.log('║          🔬 ULTRA-DETAYLI AI İÇERİK TESPİT RAPORU v2.0 🔬             ║');
    console.log('║              yksnethesapla.com — 12 Katmanlı Analiz                    ║');
    console.log('║                                                                        ║');
    console.log('╚══════════════════════════════════════════════════════════════════════════╝');
    console.log(`\n  📅 Tarih: ${timestamp}`);
    console.log(`  📁 Taranan Dosya: ${allResults.length}`);
    console.log(`  📝 Toplam Kelime: ${totalWords.toLocaleString('tr-TR')}`);
    console.log(`  📄 Toplam Cümle: ${totalSentences.toLocaleString('tr-TR')}`);
    console.log(`  🧪 Analiz Katmanı: 12`);
    
    // GENEL SKOR TABLOSU
    console.log('\n\n═══════════════════════════════════════════════════════════════════════════');
    console.log('  📊 GENEL SKOR TABLOSU');
    console.log('═══════════════════════════════════════════════════════════════════════════\n');
    
    console.log(`  Ortalama AI Skoru: ${avgScore.toFixed(1)}/100`);
    console.log(`  ─────────────────────────────────────────`);
    console.log(`  🔴 Yüksek Risk (55+):  ${highRisk.length} dosya`);
    console.log(`  🟡 Orta Risk (30-54):  ${mediumRisk.length} dosya`);
    console.log(`  🟢 Düşük Risk (0-29):  ${lowRisk.length} dosya`);
    
    // DETAYLI DOSYA ANALİZLERİ
    console.log('\n\n═══════════════════════════════════════════════════════════════════════════');
    console.log('  📋 DOSYA BAZLI DETAYLI ANALİZ');
    console.log('═══════════════════════════════════════════════════════════════════════════');
    
    allResults.slice(0, OUTPUT_TOP_N).forEach((result, idx) => {
        const emoji = result.finalScore >= 55 ? '🔴' : result.finalScore >= 30 ? '🟡' : '🟢';
        const barLen = 30;
        const filled = Math.round(result.finalScore / 100 * barLen);
        const bar = '█'.repeat(filled) + '░'.repeat(barLen - filled);
        
        console.log(`\n  ────────────────────────────────────────────────────────────────────`);
        console.log(`  ${emoji} #${idx + 1} ${result.file}`);
        console.log(`  ────────────────────────────────────────────────────────────────────`);
        console.log(`  FINAL AI SKOR: [${bar}] ${result.finalScore}/100`);
        console.log(`  Kelime: ${result.wordCount} | Cümle: ${result.sentenceCount}`);
        console.log('');
        
        // Her katmanın sonucunu göster
        console.log('  ┌─────────────────────────────────────────────────────────┐');
        console.log('  │ Katman                          │ Skor  │ Ağırlık │ Etki  │');
        console.log('  ├─────────────────────────────────┼───────┼─────────┼───────┤');
        
        const weightKeys = Object.keys(LAYER_WEIGHTS);
        result.layers.forEach((layer, i) => {
            const weight = LAYER_WEIGHTS[weightKeys[i]] || 0;
            const impact = (layer.score * weight).toFixed(1);
            const name = layer.name.padEnd(33);
            const scoreStr = (layer.score + '').padStart(3);
            const weightStr = ((weight * 100).toFixed(0) + '%').padStart(4);
            const impactStr = impact.padStart(5);
            const indicator = layer.score >= 55 ? '🔴' : layer.score >= 30 ? '🟡' : '🟢';
            console.log(`  │ ${indicator} ${name}│ ${scoreStr}   │  ${weightStr}   │ ${impactStr} │`);
        });
        
        console.log('  └─────────────────────────────────────────────────────────┘');
        
        // Yüksek ve orta riskli dosyalar için detay göster
        if (result.finalScore >= 30) {
            console.log('');
            console.log('  📌 ÖNE ÇIKAN DETAYLAR:');
            
            result.layers.forEach(layer => {
                if (layer.score >= 30 && layer.details) {
                    console.log(`\n     [${layer.name}] (Skor: ${layer.score})`);
                    
                    if (layer.details.topFormalPatterns?.length > 0) {
                        console.log(`       Resmi kalıplar: ${layer.details.topFormalPatterns.map(p => `"${p.pattern}" (${p.count}x)`).join(', ')}`);
                    }
                    if (layer.details.topFlaggedPhrases?.length > 0) {
                        console.log(`       AI bayrakları: ${layer.details.topFlaggedPhrases.map(p => `"${p.pattern}" (${p.count}x)`).join(', ')}`);
                    }
                    if (layer.details.formalRatio) {
                        console.log(`       Resmilik oranı: ${layer.details.formalRatio}`);
                    }
                    if (layer.details.burstinessCoefficient !== undefined) {
                        console.log(`       Burstiness: ${layer.details.burstinessCoefficient} (${layer.details.interpretation})`);
                    }
                    if (layer.details.atesmanScore !== undefined) {
                        console.log(`       Ateşman: ${layer.details.atesmanScore} (${layer.details.interpretation})`);
                    }
                    if (layer.details.ttr !== undefined) {
                        console.log(`       TTR: ${layer.details.ttr}, Hapax: ${layer.details.hapaxRatio}`);
                    }
                    if (layer.details.totalHumanMarkers !== undefined) {
                        console.log(`       İnsan göstergeleri: ${layer.details.totalHumanMarkers} (yoğunluk: ${layer.details.humanDensityPerSentence})`);
                    }
                    if (layer.details.coefficientOfVariation !== undefined) {
                        console.log(`       Cümle uzunluk CV: ${layer.details.coefficientOfVariation}`);
                    }
                    if (layer.details.avgSentenceLength !== undefined) {
                        console.log(`       Ort. cümle uzunluğu: ${layer.details.avgSentenceLength} kelime`);
                    }
                    if (layer.details.topRepeatedBigrams?.length > 0) {
                        console.log(`       Tekrar eden 2-gramlar: ${layer.details.topRepeatedBigrams.join(', ')}`);
                    }
                    if (layer.details.sentenceLengthSequence) {
                        console.log(`       Cümle uzunluk dizisi: [${layer.details.sentenceLengthSequence}]`);
                    }
                }
            });
        }
    });
    
    // KATMAN BAZLI GENEL İSTATİSTİKLER
    console.log('\n\n═══════════════════════════════════════════════════════════════════════════');
    console.log('  📈 KATMAN BAZLI GENEL İSTATİSTİKLER');
    console.log('═══════════════════════════════════════════════════════════════════════════\n');
    
    const layerNames = allResults[0]?.layers.map(l => l.name) || [];
    layerNames.forEach((name, i) => {
        const scores = allResults.map(r => r.layers[i].score);
        const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
        const max = Math.max(...scores);
        const min = Math.min(...scores);
        const barLen = 25;
        const filled = Math.round(avg / 100 * barLen);
        const bar = '▓'.repeat(filled) + '░'.repeat(barLen - filled);
        
        console.log(`  ${name}`);
        console.log(`    Ort: [${bar}] ${avg.toFixed(1)} | Min: ${min} | Max: ${max}`);
    });
    
    // SONUÇ ve ÖNERİLER
    console.log('\n\n═══════════════════════════════════════════════════════════════════════════');
    console.log('  🏁 SONUÇ VE ÖNERİLER');
    console.log('═══════════════════════════════════════════════════════════════════════════\n');
    
    if (avgScore < 20) {
        console.log('  ✅ GENEL SONUÇ: İçerikler büyük oranda İNSAN YAZIMI.');
        console.log('     AI dedektörleri düşük risk algılayacaktır.');
    } else if (avgScore < 40) {
        console.log('  ⚠️  GENEL SONUÇ: Çoğu içerik insani, bazı sayfalar dikkat gerektiriyor.');
    } else {
        console.log('  🔴 GENEL SONUÇ: İçeriklerin önemli bir kısmı AI tonu taşıyor.');
    }
    
    if (highRisk.length > 0) {
        console.log('\n  🚨 ACİL DÜZELTME GEREKTİREN DOSYALAR:');
        highRisk.forEach(r => {
            console.log(`     ❌ ${r.file} (AI Skor: ${r.finalScore}/100)`);
            
            // En problemli katmanları bul
            const worstLayers = r.layers
                .filter(l => l.score >= 40)
                .sort((a, b) => b.score - a.score)
                .slice(0, 3);
            
            worstLayers.forEach(l => {
                console.log(`        ↳ ${l.name}: ${l.score}/100`);
            });
        });
    }
    
    if (mediumRisk.length > 0) {
        console.log('\n  ⚠️  GÖZDEN GEÇİRİLMESİ ÖNERİLEN DOSYALAR:');
        mediumRisk.forEach(r => {
            console.log(`     ⚡ ${r.file} (AI Skor: ${r.finalScore}/100)`);
        });
    }
    
    console.log('\n  💡 GENEL ÖNERİLER:');
    
    // Morfoloji önerisi
    const avgMorphScore = allResults.reduce((s, r) => s + r.layers[0].score, 0) / allResults.length;
    if (avgMorphScore > 25) {
        console.log('     1. "-maktadır/-mektedir" kalıplarını "-yor/-r/-ar" ile değiştirin');
        console.log('        Örn: "sağlamaktadır" → "sağlıyor" veya "sağlar"');
    }
    
    // Kişisellik önerisi
    const avgPersonality = allResults.reduce((s, r) => s + r.layers[7].score, 0) / allResults.length;
    if (avgPersonality > 40) {
        console.log('     2. "Sen" hitabı, soru cümleleri ve günlük ifadeler ekleyin');
        console.log('        Örn: "Adayların dikkat etmesi gerekmektedir" → "Buna dikkat et"');
    }
    
    // Stilistik önerisi
    const avgStylistic = allResults.reduce((s, r) => s + r.layers[3].score, 0) / allResults.length;
    if (avgStylistic > 20) {
        console.log('     3. "Bu bağlamda", "Söz konusu" gibi AI geçiş ifadelerini çıkarın');
    }
    
    // Burstiness önerisi
    const avgBurst = allResults.reduce((s, r) => s + r.layers[5].score, 0) / allResults.length;
    if (avgBurst > 30) {
        console.log('     4. Cümle uzunluklarını çeşitlendirin: kısa-uzun-kısa alternasyonu artırın');
    }
    
    console.log('\n  ─────────────────────────────────────────────────────────────────────');
    console.log('  12 katmanlı analiz motoru ile üretilmiştir.');
    console.log('  ─────────────────────────────────────────────────────────────────────\n');
}

// ═══════════════════════════════════════════════════════════════
//  ÇALIŞTIR
// ═══════════════════════════════════════════════════════════════

let allResults = [];
SCAN_DIRS.forEach(dir => {
    allResults = allResults.concat(walkDir(dir));
});

generateReport(allResults);
