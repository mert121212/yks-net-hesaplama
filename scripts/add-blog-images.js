const fs = require('fs');
const path = require('path');

const blogImageMap = {
    'tyt-turkce-paragraf-teknikleri': '/images/blog/tyt-turkce-paragraf-teknikleri.jpg',
    'yks-son-3-ay-calisma-plani': '/images/blog/yks-son-3-ay-calisma-plani.jpg',
    'sifirdan-tyt-matematik-calisma-rehberi': '/images/blog/sifirdan-tyt-matematik-calisma-rehberi.jpg',
    'obp-hesaplama': '/images/blog/obp-hesaplama.jpg',
    'yks-kac-net-kac-puan': '/images/blog/yks-kac-net-kac-puan.svg',
    'yks-hazirlik-programi': '/images/blog/yks-hazirlik-programi.jpg',
    'tyt-matematik-konulari': '/images/blog/tyt-matematik-konulari.jpg',
    'ayt-matematik-konulari': '/images/blog/ayt-matematik-konulari.svg',
    'yks-edebiyat-konulari': '/images/blog/yks-edebiyat-konulari.svg',
    'yks-net-hesaplama-nasil-yapilir': '/images/blog/yks-net-hesaplama-nasil-yapilir.svg',
    'yks-2027-basvuru-tarihleri': '/images/blog/yks-2027-basvuru-tarihleri.svg',
    'yks-1-net-kac-kisi-atar': '/images/blog/yks-1-net-kac-kisi-atar.svg',
    'tyt-net-hesaplama-rehberi': '/images/blog/tyt-net-hesaplama-rehberi.svg',
    'tyt-kesin-cikan-konular': '/images/blog/tyt-kesin-cikan-konular.svg',
    'ayt-puan-hesaplama': '/images/blog/ayt-puan-hesaplama.svg',
    'universite-tercih-stratejileri': '/images/blog/universite-tercih-stratejileri.svg',
    'tyt-net-artirma-taktikleri': '/images/blog/tyt-net-artirma-taktikleri.svg',
    'yks-yigilma-tehlikesi': '/images/blog/yks-yigilma-tehlikesi.svg',
    'yks-puan-turleri': '/images/blog/yks-puan-turleri.svg',
};

const blogDir = path.join(__dirname, '../src/app/blog');

Object.entries(blogImageMap).forEach(([slug, imgPath]) => {
    const pagePath = path.join(blogDir, slug, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
        console.warn(`File not found: ${pagePath}`);
        return;
    }

    let content = fs.readFileSync(pagePath, 'utf8');

    // 1. Add import if not present
    if (!content.includes('BlogHeroBanner')) {
        content = content.replace(
            "import AuthorProfile from '@/components/AuthorProfile'",
            "import AuthorProfile from '@/components/AuthorProfile'\nimport BlogHeroBanner from '@/components/BlogHeroBanner'"
        );
    }

    // 2. Add BlogHeroBanner after AuthorProfile if not present
    if (!content.includes('<BlogHeroBanner')) {
        // Find title for alt
        const titleMatch = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
        const altText = titleMatch ? titleMatch[1].replace(/<[^>]*>/g, '').trim() : slug;

        content = content.replace(
            /<AuthorProfile\s*\/>/,
            `<AuthorProfile />\n\n                    <BlogHeroBanner\n                        src="${imgPath}"\n                        alt="${altText.replace(/"/g, '&quot;')}"\n                    />`
        );
    }

    // 3. Update og:image in metadata
    content = content.replace(
        /url:\s*['"]\/og-image\.jpg['"]/g,
        `url: '${imgPath}'`
    );

    fs.writeFileSync(pagePath, content, 'utf8');
    console.log(`Updated blog: ${slug} -> ${imgPath}`);
});

console.log("All 19 blog pages updated with hero banners and metadata images!");
