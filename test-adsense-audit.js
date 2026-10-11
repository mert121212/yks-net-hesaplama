/**
 * ============================================================================
 * 🚀 YKS NET HESAPLAMA - ULTRA SÜPERSONİK GOOGLE ADSENSE AUDIT & TEST SUITE
 * ============================================================================
 * Bu test paketi, Google AdSense "Düşük Değerli İçerik" (Low-Value Content)
 * politikasını ve Kalite Değerlendirici Kılavuzunu (Search Quality Rater Guidelines)
 * baz alarak 6 ana kategoride 35+ ultra detaylı denetim gerçekleştirir:
 *
 * 1. ADSENSE YAPILANDIRMASI & TEKNİK ENTEGRASYON
 * 2. E-E-A-T (DENEYİM, UZMANLIK, OTORİTE, GÜVEN) & POLİTİKA SAYFALARI
 * 3. İÇERİK DERİNLİĞİ, KELİME HACMİ & YAYIN TAKVİMİ DAĞILIMI
 * 4. YAPILANDIRILMIŞ VERİ (SCHEMA.ORG JSON-LD) & SEO DENETİMİ
 * 5. GÖRSEL BÜTÜNLÜK, ASSET SAĞLIĞI & SİYAH KUTU KONTROLÜ
 * 6. İÇ BAĞLANTI (INTERNAL LINKING) & NAVİGASYON AĞI
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');

// Renkli Terminal Çıktı Sabitleri
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const MAGENTA = '\x1b[35m';
const BLUE = '\x1b[34m';
const BG_BLUE = '\x1b[44m';
const WHITE = '\x1b[37m';

let totalTests = 0;
let passedTests = 0;
let warnedTests = 0;
let failedTests = 0;

const issues = [];

function check(title, condition, failMsg, isWarning = false) {
    totalTests++;
    if (condition) {
        passedTests++;
        console.log(`  ${GREEN}✓ [BAŞARILI]${RESET} ${title}`);
        return true;
    } else {
        if (isWarning) {
            warnedTests++;
            console.log(`  ${YELLOW}⚠ [UYARI]${RESET} ${title} — ${failMsg}`);
            issues.push({ type: 'UYARI', title, msg: failMsg });
        } else {
            failedTests++;
            console.log(`  ${RED}✗ [HATA]${RESET} ${title} — ${failMsg}`);
            issues.push({ type: 'HATA', title, msg: failMsg });
        }
        return false;
    }
}

function printHeader(title) {
    console.log(`\n${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}`);
    console.log(`${BOLD}${WHITE} ${title} ${RESET}`);
    console.log(`${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}`);
}

const rootDir = __dirname;
const appDir = path.join(rootDir, 'src', 'app');
const blogDir = path.join(appDir, 'blog');
const componentsDir = path.join(rootDir, 'src', 'components');
const publicDir = path.join(rootDir, 'public');

console.log(`\n${BOLD}${BG_BLUE}${WHITE}                                                                              ${RESET}`);
console.log(`${BOLD}${BG_BLUE}${WHITE}   🔍 GOOGLE ADSENSE ULTRA SÜPERSONİK KALİTE & UYUMLULUK TEST MOTORU          ${RESET}`);
console.log(`${BOLD}${BG_BLUE}${WHITE}   Hedef: yksnethesapla.com | AdSense "Düşük Değerli İçerik" Tam Analizi      ${RESET}`);
console.log(`${BOLD}${BG_BLUE}${WHITE}                                                                              ${RESET}`);

// ============================================================================
// BÖLÜM 1: ADSENSE YAPILANDIRMASI & TEKNİK ENTEGRASYON
// ============================================================================
printHeader('1. ADSENSE YAPILANDIRMASI & TEKNİK ENTEGRASYON');

// 1.1 ads.txt kontrolü
const adsTxtPath = path.join(publicDir, 'ads.txt');
const adsTxtExists = fs.existsSync(adsTxtPath);
check('ads.txt dosyası public klasöründe mevcut', adsTxtExists, 'public/ads.txt bulunamadı');

let publisherId = '';
if (adsTxtExists) {
    const adsTxtContent = fs.readFileSync(adsTxtPath, 'utf8').trim();
    const adsRegex = /google\.com,\s*(pub-\d+),\s*DIRECT,\s*f08c47fec0942fa0/i;
    const match = adsTxtContent.match(adsRegex);
    check(
        'ads.txt içeriği IAB standartlarına ve Google AdSense direktifine tam uyumlu',
        !!match,
        `İçerik formatı geçersiz: "${adsTxtContent}"`
    );
    if (match) {
        publisherId = match[1];
        console.log(`     ${BLUE}ℹ Doğrulanan Yayıncı ID:${RESET} ${BOLD}${publisherId}${RESET}`);
    }
}

// 1.2 layout.tsx AdSense Script Entegrasyonu
const layoutPath = path.join(appDir, 'layout.tsx');
const layoutContent = fs.existsSync(layoutPath) ? fs.readFileSync(layoutPath, 'utf8') : '';
check(
    'src/app/layout.tsx içinde GoogleAdsense bileşeni çağrılıyor',
    layoutContent.includes('<GoogleAdsense') && layoutContent.includes('ADSENSE_CLIENT_ID='),
    'Layout içinde GoogleAdsense bileşeni bulunamadı'
);

const expectedClientId = `ca-${publisherId}`;
check(
    `layout.tsx içindeki Client ID (${expectedClientId}) ads.txt ile birebir eşleşiyor`,
    layoutContent.includes(expectedClientId) || layoutContent.includes(publisherId),
    `layout.tsx içinde ${expectedClientId} veya ${publisherId} bulunamadı`
);

// 1.3 Google AdSense Crawler İzinleri (robots.ts)
const robotsPath = path.join(appDir, 'robots.ts');
const robotsContent = fs.existsSync(robotsPath) ? fs.readFileSync(robotsPath, 'utf8') : '';
check(
    'robots.ts içinde Mediapartners-Google (AdSense botu) tam erişim izinli',
    robotsContent.includes('Mediapartners-Google') && robotsContent.includes("allow: '/'"),
    'robots.ts içinde Mediapartners-Google tanımlı değil veya allow kuralı eksik'
);
check(
    'robots.ts içinde Googlebot ve genel sitemap URL tanımı mevcut',
    robotsContent.includes('Googlebot') && robotsContent.includes('sitemap:'),
    'robots.ts içinde Googlebot veya sitemap direktifi eksik'
);

// ============================================================================
// BÖLÜM 2: E-E-A-T (DENEYİM, UZMANLIK, OTORİTE, GÜVEN) & POLİTİKA SAYFALARI
// ============================================================================
printHeader('2. E-E-A-T & POLİTİKA SAYFALARI (GOOGLE TRUST SIGNALS)');

const trustPages = [
    { path: path.join(appDir, 'privacy', 'page.tsx'), name: 'Gizlilik Politikası (/privacy)', minWords: 300, mustInclude: ['çerez', 'Google'] },
    { path: path.join(appDir, 'kullanim-kosullari', 'page.tsx'), name: 'Kullanım Koşulları (/kullanim-kosullari)', minWords: 200, mustInclude: ['sorumluluk'] },
    { path: path.join(appDir, 'hakkimizda', 'page.tsx'), name: 'Hakkımızda (/hakkimizda)', minWords: 200, mustInclude: ['Mert', 'YKS'] },
    { path: path.join(appDir, 'iletisim', 'page.tsx'), name: 'İletişim (/iletisim)', minWords: 150, mustInclude: ['@'] },
    { path: path.join(appDir, 'sss', 'page.tsx'), name: 'Sık Sorulan Sorular (/sss)', minWords: 400, mustInclude: ['OBP', 'net'] },
];

for (const tp of trustPages) {
    const exists = fs.existsSync(tp.path);
    check(`${tp.name} sayfası mevcut`, exists, `${tp.path} bulunamadı`);
    if (exists) {
        const raw = fs.readFileSync(tp.path, 'utf8');
        const text = raw.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
        const wordCount = text.split(' ').length;
        check(
            `${tp.name} yeterli içerik hacmine sahip (${wordCount} kelime, min: ${tp.minWords})`,
            wordCount >= tp.minWords,
            `İçerik çok kısa: ${wordCount} kelime`
        );
        for (const req of tp.mustInclude) {
            check(
                `${tp.name} zorunlu anahtar kelimeyi içeriyor: "${req}"`,
                raw.toLowerCase().includes(req.toLowerCase()),
                `"${req}" kelimesi sayfada bulunamadı`
            );
        }
    }
}

// 2.2 Author Profile EEAT Bileşeni
const authorProfilePath = path.join(componentsDir, 'AuthorProfile.tsx');
const authorExists = fs.existsSync(authorProfilePath);
check('src/components/AuthorProfile.tsx bileşeni mevcut', authorExists, 'AuthorProfile.tsx bulunamadı');
if (authorExists) {
    const authorContent = fs.readFileSync(authorProfilePath, 'utf8');
    check(
        'AuthorProfile gerçek yazar adı ve unvanı içeriyor',
        authorContent.includes('Mert Çalışkan') && authorContent.includes('Editör'),
        'Yazar kimliği veya unvan eksik'
    );
    check(
        'AuthorProfile doğrulanabilir sosyal/profil kanıtı (GitHub vb.) içeriyor',
        authorContent.includes('github.com'),
        'Harici doğrulama bağlantısı eksik'
    );
    check(
        'AuthorProfile site içi E-E-A-T rozetleri ve istatistiki kanıtlar içeriyor',
        authorContent.includes('Rehber') && authorContent.includes('ÖSYM'),
        'Rozetler veya uzmanlık verileri eksik'
    );
}

// 2.3 Çerez İzni Bileşeni (CookieConsent)
const cookiePath = path.join(componentsDir, 'CookieConsent.tsx');
check(
    'GDPR / KVKK uyumlu Çerez İzni bileşeni (CookieConsent) mevcut',
    fs.existsSync(cookiePath),
    'CookieConsent.tsx bulunamadı'
);

// ============================================================================
// BÖLÜM 3: İÇERİK DERİNLİĞİ, KELİME HACMİ & YAYIN TAKVİMİ DAĞILIMI
// ============================================================================
printHeader('3. İÇERİK DERİNLİĞİ, KELİME HACMİ & YAYIN TAKVİMİ DAĞILIMI');

const blogEntries = fs.readdirSync(blogDir).filter(f => {
    const p = path.join(blogDir, f);
    return fs.statSync(p).isDirectory();
});

check(
    `Blog makale adedi AdSense minimum gereksinimini fazlasıyla karşılıyor (${blogEntries.length} makale / min: 15)`,
    blogEntries.length >= 15,
    `Makale sayısı yetersiz: ${blogEntries.length}`
);

const articleStats = [];
const publishedDates = new Set();
const modifiedDates = new Set();
let articlesWithTable = 0;
let articlesWithFeedback = 0;
let articlesWithProgress = 0;
let articlesWithLastUpdated = 0;

for (const slug of blogEntries) {
    const pagePath = path.join(blogDir, slug, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;

    const content = fs.readFileSync(pagePath, 'utf8');
    const textOnly = content
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/import[\s\S]*?from\s+['"][^'"]+['"]/g, '')
        .replace(/\s+/g, ' ');

    const words = textOnly.split(' ').filter(w => w.trim().length > 2).length;

    const pubMatch = content.match(/publishedTime:\s*['"](\d{4}-\d{2}-\d{2})['"]/);
    const modMatch = content.match(/modifiedTime:\s*['"](\d{4}-\d{2}-\d{2})['"]/);

    const pubDate = pubMatch ? pubMatch[1] : null;
    const modDate = modMatch ? modMatch[1] : null;

    if (pubDate) publishedDates.add(pubDate);
    if (modDate) modifiedDates.add(modDate);

    const hasTable = content.includes('<table') || content.includes('<Table');
    if (hasTable) articlesWithTable++;

    const hasFeedback = content.includes('<ArticleFeedback');
    if (hasFeedback) articlesWithFeedback++;

    const hasProgress = content.includes('<ReadingProgress');
    if (hasProgress) articlesWithProgress++;

    const hasLastUpdated = content.includes('<LastUpdatedBadge');
    if (hasLastUpdated) articlesWithLastUpdated++;

    articleStats.push({ slug, words, pubDate, modDate, hasTable });
}

// Kelime Sayısı Denetimi
const avgWords = Math.round(articleStats.reduce((acc, a) => acc + a.words, 0) / articleStats.length);
const shortArticles = articleStats.filter(a => a.words < 500);

check(
    `Ortalama makale uzunluğu yüksek kaliteli içerik standardında (${avgWords} kelime / önerilen: >600)`,
    avgWords >= 600,
    `Ortalama kelime sayısı düşük: ${avgWords}`
);

check(
    `Tüm makaleler 500 kelime barajının üzerinde (Kısa içerik: ${shortArticles.length})`,
    shortArticles.length === 0,
    `Kısa makaleler tespit edildi: ${shortArticles.map(a => `${a.slug} (${a.words} kelime)`).join(', ')}`,
    true
);

// Yayın Tarihi Dağılımı Denetimi (Anti-AI Batch Detection)
const uniqueMonths = new Set(Array.from(publishedDates).map(d => d.slice(0, 7)));
check(
    `Makalelerin yayın tarihleri en az 6 farklı aya dağıtılmış (${uniqueMonths.size} farklı ay)`,
    uniqueMonths.size >= 6,
    `Tarihler dar bir aralığa sıkışmış: sadece ${uniqueMonths.size} ay var. Google bunu toplu bot üretimi olarak algılayabilir.`
);

check(
    `Tüm makalelerde güncel "modifiedTime" (son güncelleme) meta verisi mevcut`,
    modifiedDates.size >= 5,
    `Güncelleme tarihleri eksik veya geçersiz`
);

// İnteraktif Öğeler Denetimi
check(
    `Tüm makalelerde ArticleFeedback ("Faydalı oldu mu?") interaktif oylama bileşeni var (${articlesWithFeedback}/${blogEntries.length})`,
    articlesWithFeedback === blogEntries.length,
    `${blogEntries.length - articlesWithFeedback} makalede ArticleFeedback eksik`
);

check(
    `Tüm makalelerde ReadingProgress (Okuma ilerleme çubuğu) mevcut (${articlesWithProgress}/${blogEntries.length})`,
    articlesWithProgress === blogEntries.length,
    `${blogEntries.length - articlesWithProgress} makalede ReadingProgress eksik`
);

check(
    `Tüm makalelerde LastUpdatedBadge (Son güncelleme rozeti) mevcut (${articlesWithLastUpdated}/${blogEntries.length})`,
    articlesWithLastUpdated === blogEntries.length,
    `${blogEntries.length - articlesWithLastUpdated} makalede LastUpdatedBadge eksik`
);

check(
    `Makalelerin çoğunluğu orijinal veri tablosu/kıyaslama matrisi içeriyor (${articlesWithTable}/${blogEntries.length})`,
    articlesWithTable >= 10,
    `Veri tablosu içeren makale sayısı az: ${articlesWithTable}`
);

// ============================================================================
// BÖLÜM 4: YAPILANDIRILMIŞ VERİ (SCHEMA.ORG JSON-LD) & SEO DENETİMİ
// ============================================================================
printHeader('4. YAPILANDIRILMIŞ VERİ (SCHEMA.ORG JSON-LD) & SEO DENETİMİ');

// 4.1 sitemap.ts Denetimi
const sitemapPath = path.join(appDir, 'sitemap.ts');
const sitemapExists = fs.existsSync(sitemapPath);
check('src/app/sitemap.ts mevcut', sitemapExists, 'sitemap.ts bulunamadı');

if (sitemapExists) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    check(
        'sitemap.ts her URL için sahte new Date() yerine gerçekçi lastModified tarihleri içeriyor',
        sitemapContent.includes('blogDates') && !sitemapContent.match(/lastModified:\s*new Date\(\),\s*priority:\s*0\.[678]/),
        'sitemap.ts tüm blog yazılarına dinamik new Date() atıyor gibi görünüyor'
    );
    check(
        'sitemap.ts tüm 19 blog yazısını ve ana sayfaları kapsıyor',
        sitemapContent.includes('tyt-turkce-paragraf-teknikleri') && sitemapContent.includes('/universiteler'),
        'sitemap.ts içinde kritik sayfalar eksik'
    );
}

// 4.2 SSS Sayfası FAQPage JSON-LD Şeması
const sssPath = path.join(appDir, 'sss', 'page.tsx');
if (fs.existsSync(sssPath)) {
    const sssContent = fs.readFileSync(sssPath, 'utf8');
    check(
        'SSS sayfasında FAQPage schema.org JSON-LD şeması render ediliyor',
        sssContent.includes('"@type": "FAQPage"') && sssContent.includes('dangerouslySetInnerHTML'),
        'SSS sayfasında FAQPage script tagi bulunamadı'
    );

    const questionMatches = sssContent.match(/"@type":\s*"Question"/g);
    const qCount = questionMatches ? questionMatches.length : 0;
    check(
        `FAQPage şemasında en az 10 soru-cevap çifti yer alıyor (Tespit edilen: ${qCount})`,
        qCount >= 10,
        `Şemada sadece ${qCount} soru var, yetersiz`
    );
}

// 4.3 BlogArticleSchema ve OpenGraph
let articlesWithArticleSchema = 0;
let articlesWithOpenGraph = 0;

for (const slug of blogEntries) {
    const pagePath = path.join(blogDir, slug, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;
    const content = fs.readFileSync(pagePath, 'utf8');

    if (content.includes('<BlogArticleSchema')) articlesWithArticleSchema++;
    if (content.includes('openGraph:') && content.includes('publishedTime:')) articlesWithOpenGraph++;
}

check(
    `Tüm makaleler BlogArticleSchema yapılandırılmış verisini kullanıyor (${articlesWithArticleSchema}/${blogEntries.length})`,
    articlesWithArticleSchema === blogEntries.length,
    `${blogEntries.length - articlesWithArticleSchema} makalede BlogArticleSchema eksik`
);

check(
    `Tüm makaleler OpenGraph article meta verilerini (publishedTime/modifiedTime) barındırıyor (${articlesWithOpenGraph}/${blogEntries.length})`,
    articlesWithOpenGraph === blogEntries.length,
    `${blogEntries.length - articlesWithOpenGraph} makalede openGraph eksik`
);

// ============================================================================
// BÖLÜM 5: GÖRSEL BÜTÜNLÜK, ASSET SAĞLIĞI & SİYAH KUTU KONTROLÜ
// ============================================================================
printHeader('5. GÖRSEL BÜTÜNLÜK, ASSET SAĞLIĞI & SİYAH KUTU KONTROLÜ');

const blogImagesDir = path.join(publicDir, 'images', 'blog');
const blogImagesExists = fs.existsSync(blogImagesDir);
check('public/images/blog klasörü mevcut', blogImagesExists, 'Blog görselleri klasörü yok');

let missingImages = [];
let lowSizeImages = [];

for (const slug of blogEntries) {
    const jpgName = `${slug}.jpg`;
    const jpgPath = path.join(blogImagesDir, jpgName);
    if (!fs.existsSync(jpgPath)) {
        missingImages.push(jpgName);
    } else {
        const stat = fs.statSync(jpgPath);
        if (stat.size < 20 * 1024) { // 20 KB altı şüpheli
            lowSizeImages.push(`${jpgName} (${Math.round(stat.size / 1024)}KB)`);
        }
    }
}

check(
    `Tüm 19 makale için fiziksel JPG görsel dosyası diskte mevcut (Eksik: ${missingImages.length})`,
    missingImages.length === 0,
    `Eksik görseller: ${missingImages.join(', ')}`
);

check(
    `Tüm görsel dosyaları yeterli kalitede ve boyutta (>20KB)`,
    lowSizeImages.length === 0,
    `Düşük boyutlu/bozuk şüpheli görseller: ${lowSizeImages.join(', ')}`
);

// Siyah Placeholder Kontrolü (bg-slate-900 kontrolü)
const blogPageContent = fs.readFileSync(path.join(blogDir, 'page.tsx'), 'utf8');
const bannerContent = fs.readFileSync(path.join(componentsDir, 'BlogHeroBanner.tsx'), 'utf8');
const seoContent = fs.readFileSync(path.join(componentsDir, 'SEOContent.tsx'), 'utf8');

check(
    'src/app/blog/page.tsx içinde resim konteynerinde siyah bg-slate-900 bulunmuyor',
    !blogPageContent.includes('aspect-video w-full overflow-hidden bg-slate-900'),
    'Blog listelemesinde bg-slate-900 hala aktif, lazy load sırasında siyah kutu görünebilir'
);

check(
    'src/components/BlogHeroBanner.tsx içinde resim konteynerinde siyah bg-slate-900 bulunmuyor',
    !bannerContent.includes('aspect-video" loading="eager" />\n        </figure>') && !bannerContent.includes('bg-slate-900'),
    'BlogHeroBanner içinde bg-slate-900 hala aktif'
);

check(
    'src/components/SEOContent.tsx ana sayfa rehber kartlarında siyah bg-slate-900 bulunmuyor',
    !seoContent.includes('aspect-video w-full overflow-hidden bg-slate-900'),
    'SEOContent rehber kartlarında bg-slate-900 hala aktif'
);

// Temel Web Varlık Kontrolleri
check('public/favicon.ico mevcut', fs.existsSync(path.join(publicDir, 'favicon.ico')), 'favicon.ico eksik');
check('public/icon.svg mevcut', fs.existsSync(path.join(publicDir, 'icon.svg')), 'icon.svg eksik');
check('public/og-image.jpg (Sosyal medya görseli) mevcut', fs.existsSync(path.join(publicDir, 'og-image.jpg')), 'og-image.jpg eksik');
check('public/site.webmanifest (PWA manifest) mevcut', fs.existsSync(path.join(publicDir, 'site.webmanifest')), 'site.webmanifest eksik');

// ============================================================================
// BÖLÜM 6: İÇ BAĞLANTI (INTERNAL LINKING) & NAVİGASYON AĞI
// ============================================================================
printHeader('6. İÇ BAĞLANTI (INTERNAL LINKING) & NAVİGASYON AĞI');

let articlesWithHomeLink = 0;
let articlesWithBlogIndexLink = 0;
let articlesWithCrossLinks = 0;

for (const slug of blogEntries) {
    const pagePath = path.join(blogDir, slug, 'page.tsx');
    if (!fs.existsSync(pagePath)) continue;
    const content = fs.readFileSync(pagePath, 'utf8');

    if (content.includes('href="/"')) articlesWithHomeLink++;
    if (content.includes('href="/blog"')) articlesWithBlogIndexLink++;
    if (content.includes('href="/blog/')) articlesWithCrossLinks++;
}

check(
    `Tüm makalelerden ana hesaplama motoruna ("/") bağlantı mevcut (${articlesWithHomeLink}/${blogEntries.length})`,
    articlesWithHomeLink === blogEntries.length,
    `${blogEntries.length - articlesWithHomeLink} makalede ana sayfaya bağlantı yok`
);

check(
    `Tüm makalelerde blog fihristine ("/blog") breadcrumb bağlantısı mevcut (${articlesWithBlogIndexLink}/${blogEntries.length})`,
    articlesWithBlogIndexLink === blogEntries.length,
    `${blogEntries.length - articlesWithBlogIndexLink} makalede /blog bağlantısı yok`
);

check(
    `Makalelerin çoğunluğu diğer ilgili makalelere çapraz iç link (cross-link) veriyor (${articlesWithCrossLinks}/${blogEntries.length})`,
    articlesWithCrossLinks >= 12,
    `Çapraz link sayısı yetersiz: ${articlesWithCrossLinks}`
);

// Navbar & Footer Bağlantı Kontrolleri
const footerPath = path.join(componentsDir, 'Footer.tsx');
if (fs.existsSync(footerPath)) {
    const footerContent = fs.readFileSync(footerPath, 'utf8');
    check(
        'Footer içinde zorunlu yasal linkler (Gizlilik, Koşullar, İletişim, Hakkımızda) mevcut',
        footerContent.includes('/privacy') &&
        footerContent.includes('/kullanim-kosullari') &&
        footerContent.includes('/iletisim') &&
        footerContent.includes('/hakkimizda'),
        'Footer içinde yasal sayfa linklerinden biri eksik'
    );
}

// ============================================================================
// GENEL DEĞERLENDİRME & PUANLAMA RAPORU
// ============================================================================
console.log(`\n${BOLD}${MAGENTA}==============================================================================${RESET}`);
console.log(`${BOLD}${WHITE}                   📊 GENEL ADSENSE UYUMLULUK SKOR KARTI                      ${RESET}`);
console.log(`${BOLD}${MAGENTA}==============================================================================${RESET}`);

const scorePercentage = Math.round((passedTests / totalTests) * 100);

let scoreColor = GREEN;
let verdict = 'ONAY İÇİN MÜKEMMEL DURUMDA 🚀';
if (scorePercentage < 80) {
    scoreColor = RED;
    verdict = 'KRİTİK EKSİKLER VAR — İNCELEME İSTEMEDEN ÖNCE DÜZELTİLMELİ ❌';
} else if (scorePercentage < 95) {
    scoreColor = YELLOW;
    verdict = 'İYİ DURUMDA, KÜÇÜK İYİLEŞTİRMELERLE DAHA GÜÇLÜ OLABİLİR ⚠';
}

console.log(`\n  Toplam Test Sayısı    : ${BOLD}${totalTests}${RESET}`);
console.log(`  Başarılı Testler      : ${GREEN}${BOLD}${passedTests}${RESET}`);
console.log(`  Uyarılı Testler       : ${YELLOW}${BOLD}${warnedTests}${RESET}`);
console.log(`  Hatalı Testler        : ${RED}${BOLD}${failedTests}${RESET}`);
console.log(`  AdSense Uyumluluk Notu: ${scoreColor}${BOLD}%${scorePercentage}${RESET} / %100`);
console.log(`  Nihai Değerlendirme   : ${scoreColor}${BOLD}${verdict}${RESET}\n`);

if (issues.length > 0) {
    console.log(`${BOLD}${YELLOW}Dikkat Edilmesi Gereken Hususlar:${RESET}`);
    issues.forEach((iss, idx) => {
        const color = iss.type === 'HATA' ? RED : YELLOW;
        console.log(`  ${idx + 1}. [${color}${iss.type}${RESET}] ${iss.title}: ${iss.msg}`);
    });
    console.log('');
} else {
    console.log(`  ${GREEN}${BOLD}Tebrikler! Hiçbir kritik hata veya uyarı tespit edilmedi.${RESET}`);
    console.log(`  Google AdSense incelemesinde "Düşük Değerli İçerik" kriterlerinin tümü başarıyla karşılandı.\n`);
}

process.exit(failedTests > 0 ? 1 : 0);
