/**
 * ============================================================================
 * 🔬 YKS NET HESAPLAMA - CÜMLE CÜMLE DİDİK DİDİK AI DEDEKTÖR MOTORU
 * ============================================================================
 * GPTZero, CopyLeaks ve Scribbr gibi modern yapay zeka dedektörlerinin
 * Türkçe metinlerde "AI" olarak etiketlediği tüm sentaktik kalıpları,
 * düşük perplexity (aşırı tahmin edilebilir) kalıpları ve monoton yapıları
 * CÜMLE CÜMLE, SATIR SATIR denetler ve her dosya için "Yapay Zeka Olasılık Oranı"
 * (% AI Probability) hesaplar.
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');

// Terminal Renkleri
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

// ============================================================================
// 🎯 DEDEKTÖRLERİN "AI" OLARAK İŞARETLEDİĞİ CÜMLE İÇİ KALIPLAR VE AĞIRLIKLARI
// ============================================================================
const SENTENCE_AI_RULES = [
    // 1. Resmi Bürokratik Pasif Yüklemler (Düşük Perplexity - En Büyük AI Tetikleyicisi)
    {
        regex: /(?:mektedir|maktadır|ilmektedir|ulmaktadır|ilmektedirler|ulmaktadırlar)\b/i,
        weight: 35,
        type: 'PASİF_BÜROKRATİK_YÜKLEM',
        label: '-mektedir / -maktadır bitişi',
        suggest: 'Konuşma diline çevirin: "-yor", "-yorsun", "-diyor" veya aktif etken fiil kullanın.'
    },
    {
        regex: /(?:ilmelidir|ulmalıdır|ilmelidirler|ulmalıdırlar)\b/i,
        weight: 25,
        type: 'DİDAKTİK_ZORUNLULUK',
        label: '-ilmelidir / -ulmalıdır pasif kipi',
        suggest: 'Doğrudan öğrenciye hitap edin: "-malısın", "yap", "et", "dikkat et".'
    },

    // 2. Klasik AI Şablon Geçişleri ve Bağlaçları
    {
        regex: /\b(bu\s+doğrultuda|bu\s+kapsamda|bu\s+bağlamda|bu\s+çerçevede)\b/i,
        weight: 30,
        type: 'AI_GEÇİŞ_KALIBI',
        label: 'Aşırı resmi AI geçişi',
        suggest: '"Bu yüzden", "o sebeple" deyin veya bu dolguyu tamamen atın.'
    },
    {
        regex: /\b(buna\s+ek\s+olarak|bununla\s+birlikte|bunun\s+yanı\s+sıra)\b/i,
        weight: 15,
        type: 'AI_BAĞLAÇ_YOĞUNLUĞU',
        label: 'Tipik LLM bağlacı',
        suggest: '"Ayrıca", "üstelik", "öte yandan" gibi daha organik bağlaçlar seçin.'
    },
    {
        regex: /\b(özellikle\s+de|özellikle\s+belirtmek\s+gerekir|dikkat\s+çekmektedir)\b/i,
        weight: 25,
        type: 'VURGU_DOLGUSU',
        label: 'Dolgu vurgu kalıbı',
        suggest: 'Doğrudan vurgulamak istediğiniz nesneye geçin.'
    },

    // 3. İçi Boş Soyut Fiil Öbekleri (Fluff Verbs)
    {
        regex: /\b(katkı\s+sağlamaktadır|katkı\s+sağlar|katkı\s+sunar|fayda\s+sağlar)\b/i,
        weight: 25,
        type: 'SOYUT_FİİL',
        label: '"Katkı / Fayda sağlar"',
        suggest: 'Somut faydayı söyleyin: "netini fırlatır", "sana 5 bin sıra kazandırır".'
    },
    {
        regex: /\b(ön\s+plana\s+çıkmaktadır|ön\s+plana\s+çıkar|öne\s+çıkmaktadır)\b/i,
        weight: 25,
        type: 'SOYUT_FİİL',
        label: '"Ön plana çıkar / çıkmaktadır"',
        suggest: '"En çok tercih edilen", "öne fırlayan" şeklinde samimi anlatın.'
    },
    {
        regex: /\b(büyük\s+bir\s+önem\s+taşır|önem\s+taşımaktadır|oldukça\s+önemlidir)\b/i,
        weight: 30,
        type: 'SOYUT_VURGU',
        label: '"Büyük önem taşır / oldukça önemlidir"',
        suggest: '"Kritiktir", "hata kaldırmaz", "olmazsa olmazdır" deyin.'
    },
    {
        regex: /\b(fırsat\s+tanımaktadır|fırsat\s+sunar|olanak\s+sağlar)\b/i,
        weight: 20,
        type: 'SOYUT_FİİL',
        label: '"Fırsat sunar / olanak sağlar"',
        suggest: '"Yolunu açar", "şans verir", "imkan tanır".'
    },
    {
        regex: /\b(büyük\s+bir\s+titizlikle|titizlikle\s+hazırlan)\b/i,
        weight: 25,
        type: 'YAPAY_SIFAT',
        label: '"Büyük bir titizlikle"',
        suggest: '"Adım adım", "dikkatle", "tane tane".'
    },

    // 4. Klişe Giriş / Sonuç İfadeleri
    {
        regex: /\b(sonuç\s+olarak|özetlemek\s+gerekirse|özetle)\b/i,
        weight: 35,
        type: 'ŞABLON_SONUÇ',
        label: '"Sonuç olarak / Özetle"',
        suggest: 'Bu kelimeyi silin; sonuca doğrudan ana fikirle girin.'
    },
    {
        regex: /\b(unutulmamalıdır\s+ki|göz\s+ardı\s+edilmemelidir|bilinmelidir\s+ki)\b/i,
        weight: 35,
        type: 'DİDAKTİK_EMİR',
        label: '"Unutulmamalıdır ki / Göz ardı edilmemelidir"',
        suggest: '"Şunu unutma:", "aklından çıkarma:", "dikkat et".'
    },
    {
        regex: /\b(şüphesiz\s+ki|kuşkusuz|adeta\s+bir|hiç\s+şüphe\s+yok\s+ki)\b/i,
        weight: 30,
        type: 'YAPAY_METAFOR',
        label: '"Şüphesiz ki / Kuşkusuz / Adeta bir"',
        suggest: 'Bu kelimeleri metinden tamamen çıkarın.'
    },
    {
        regex: /\b(bu\s+zorlu\s+maraton|yks\s+yolculuğun|başarıya\s+giden\s+yol)\b/i,
        weight: 35,
        type: 'YAPAY_MOTİVASYON',
        label: '"Zorlu maraton / YKS yolculuğu"',
        suggest: '"Sınav senesinde", "masada ter dökerken", "hazırlık sürecinde".'
    }
];

function analyzeSentences(content, filePath) {
    // JSX ve HTML etiketlerini temizle, temiz metin çıkar
    // Kod satırlarını ayırarak satır numarasını da takip edelim
    const lines = content.split('\n');
    const detectedIssues = [];
    let totalSentences = 0;
    let aiFlaggedSentences = 0;

    lines.forEach((lineText, lineIdx) => {
        // Import, export, style, schema satırlarını atla
        const trimmed = lineText.trim();
        if (
            trimmed.startsWith('import ') ||
            trimmed.startsWith('export ') ||
            trimmed.startsWith('//') ||
            trimmed.startsWith('/*') ||
            trimmed.startsWith('const ') ||
            trimmed.startsWith('interface ') ||
            trimmed.startsWith('type ') ||
            trimmed.includes('dangerouslySetInnerHTML') ||
            trimmed.includes('url=') ||
            trimmed.includes('className=') && !trimmed.includes('>')
        ) {
            return;
        }

        // HTML taglerini soy
        const textOnly = lineText
            .replace(/<[^>]+>/g, ' ')
            .replace(/&[a-z]+;/gi, ' ')
            .replace(/\s+/g, ' ')
            .trim();

        if (textOnly.length < 15) return;

        // Cümlelere böl
        const sentences = textOnly.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 12);

        sentences.forEach(sent => {
            totalSentences++;
            let sentencePenalty = 0;
            const sentenceViolations = [];

            for (const rule of SENTENCE_AI_RULES) {
                const match = sent.match(rule.regex);
                if (match) {
                    sentencePenalty += rule.weight;
                    sentenceViolations.push({
                        matchedText: match[0],
                        label: rule.label,
                        suggest: rule.suggest,
                        weight: rule.weight
                    });
                }
            }

            if (sentenceViolations.length > 0) {
                aiFlaggedSentences++;
                detectedIssues.push({
                    lineNum: lineIdx + 1,
                    sentence: sent,
                    violations: sentenceViolations,
                    penalty: sentencePenalty
                });
            }
        });
    });

    const aiPercentage = totalSentences > 0
        ? Math.min(100, Math.round((aiFlaggedSentences / totalSentences) * 100))
        : 0;

    return {
        filePath,
        totalSentences,
        aiFlaggedSentences,
        aiPercentage,
        detectedIssues
    };
}

console.log(`\n${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}`);
console.log(`${BOLD}${WHITE} 🔬 CÜMLE CÜMLE (SENTENCE-BY-SENTENCE) AI DEDEKTÖR TARAMASI BAŞLATILDI         ${RESET}`);
console.log(`${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}\n`);

const blogDir = path.join(__dirname, 'src', 'app', 'blog');
const allEntries = fs.readdirSync(blogDir).filter(f => fs.statSync(path.join(blogDir, f)).isDirectory());

const pageResults = [];

// Blog makalelerini tara
for (const slug of allEntries) {
    const file = path.join(blogDir, slug, 'page.tsx');
    if (!fs.existsSync(file)) continue;
    const content = fs.readFileSync(file, 'utf8');
    const res = analyzeSentences(content, `blog/${slug}`);
    pageResults.push(res);
}

// Ana sayfaları da ekle
const staticFiles = [
    { p: path.join(__dirname, 'src', 'app', 'page.tsx'), name: 'page.tsx (Ana Sayfa)' },
    { p: path.join(__dirname, 'src', 'app', 'yks-rehberi', 'page.tsx'), name: 'yks-rehberi' },
    { p: path.join(__dirname, 'src', 'app', 'hakkimizda', 'page.tsx'), name: 'hakkimizda' },
    { p: path.join(__dirname, 'src', 'app', 'sss', 'page.tsx'), name: 'sss' }
];

for (const sf of staticFiles) {
    if (fs.existsSync(sf.p)) {
        const content = fs.readFileSync(sf.p, 'utf8');
        const res = analyzeSentences(content, sf.name);
        pageResults.push(res);
    }
}

// AI Olasılık oranına göre sırala (en çok şüpheli cümle barındıranlar en üstte)
pageResults.sort((a, b) => b.aiPercentage - a.aiPercentage);

let totalScannedSentences = 0;
let totalFlaggedSentences = 0;
let cleanPages = 0;
let suspiciousPages = 0;

for (const pr of pageResults) {
    totalScannedSentences += pr.totalSentences;
    totalFlaggedSentences += pr.aiFlaggedSentences;

    let badge = `${GREEN}[%0 AI - TAMAMEN İNSAN]${RESET}`;
    if (pr.aiPercentage > 15) {
        badge = `${RED}${BOLD}[%${pr.aiPercentage} AI ŞÜPHELİ]${RESET}`;
        suspiciousPages++;
    } else if (pr.aiPercentage > 0) {
        badge = `${YELLOW}[%${pr.aiPercentage} HAFİF RİSK]${RESET}`;
        suspiciousPages++;
    } else {
        cleanPages++;
    }

    console.log(`${badge} ${BOLD}${pr.filePath}${RESET} (${pr.totalSentences} cümle içinde ${pr.aiFlaggedSentences} şüpheli)`);

    if (pr.detectedIssues.length > 0) {
        pr.detectedIssues.slice(0, 5).forEach(issue => {
            console.log(`   ${RED}Satır ${issue.lineNum}:${RESET} "${issue.sentence.slice(0, 90)}..."`);
            issue.violations.forEach(v => {
                console.log(`      ↳ ${YELLOW}${v.label}:${RESET} "${v.matchedText}" → ${CYAN}Öneri:${RESET} ${v.suggest}`);
            });
        });
        if (pr.detectedIssues.length > 5) {
            console.log(`      ${BLUE}... ve ${pr.detectedIssues.length - 5} cümle daha.${RESET}`);
        }
    }
}

console.log(`\n${BOLD}${MAGENTA}==============================================================================${RESET}`);
console.log(`${BOLD}${WHITE}                   📊 DETAYLI CÜMLE AI TESPİT RAPORU                         ${RESET}`);
console.log(`${BOLD}${MAGENTA}==============================================================================${RESET}\n`);

const siteAiRatio = totalScannedSentences > 0
    ? Math.round((totalFlaggedSentences / totalScannedSentences) * 100)
    : 0;

console.log(`  Taranan Toplam Sayfa   : ${BOLD}${pageResults.length}${RESET}`);
console.log(`  Taranan Toplam Cümle   : ${BOLD}${totalScannedSentences}${RESET}`);
console.log(`  Şüpheli Bulunan Cümle  : ${totalFlaggedSentences > 0 ? RED : GREEN}${BOLD}${totalFlaggedSentences}${RESET}`);
console.log(`  Kusursuz Sayfa Sayısı  : ${GREEN}${BOLD}${cleanPages}${RESET}`);
console.log(`  İnceleme Gereken Sayfa : ${suspiciousPages > 0 ? YELLOW : GREEN}${BOLD}${suspiciousPages}${RESET}`);
console.log(`  Sitenin Genel AI Oranı : ${siteAiRatio > 5 ? RED : GREEN}${BOLD}%${siteAiRatio}${RESET} (Dedektör Tahmini)\n`);

if (totalFlaggedSentences === 0) {
    console.log(`  ${GREEN}${BOLD}Tebrikler! Sitede tek bir yapay zeka klişesi, pasif yüklem veya bürokratik kalıp bulunamadı.${RESET}\n`);
} else {
    console.log(`  ${YELLOW}Yukarıda listelenen satırları önerilen konuşma dili ifadeleriyle güncelleyerek${RESET}`);
    console.log(`  harici AI dedektörlerindeki puanı %0-%5 seviyesine indirebiliriz.\n`);
}

process.exit(totalFlaggedSentences > 0 ? 1 : 0);
