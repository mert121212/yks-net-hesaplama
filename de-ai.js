const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'src/app/blog');

const replacements = [
    { regex: /Bu makalede/g, replacement: "Bu yazımızda" },
    { regex: /Sonuç olarak,?/g, replacement: "Toparlamak gerekirse," },
    { regex: /Özetle,?/g, replacement: "Kısacası," },
    { regex: /Unutmayın ki,?/g, replacement: "Şunu unutma ki," },
    { regex: /Unutmayalım ki,?/g, replacement: "Aklımızda bulunsun," },
    { regex: /Detaylı analiz/g, replacement: "Tüm detaylar" },
    { regex: /Bununla birlikte,?/g, replacement: "Bunun yanında," },
    { regex: /Kapsamlı rehber/gi, replacement: "Rehber" },
    { regex: /Algoritması/g, replacement: "Mantığı" },
    { regex: /Algoritma/g, replacement: "Sistem" },
    { regex: /Optimizasyon/g, replacement: "İyileştirme" },
    { regex: /Parametreler/g, replacement: "Kriterler" },
    { regex: /Stratejik adımlar/g, replacement: "Taktikler" },
    { regex: /Göz ardı etmeyin/g, replacement: "Gözden kaçırmayın" },
    { regex: /Kritik öneme sahiptir/g, replacement: "Çok önemlidir" },
    { regex: /Makalemizde/g, replacement: "Yazımızda" },
    { regex: /Adayların büyük bir kısmı/g, replacement: "Çoğu arkadaşımız" },
    { regex: /Değerlendirme yönergeleri/g, replacement: "Kurallar" },
    { regex: /sınav sürecinde/g, replacement: "sınav yolculuğunda" },
];

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('page.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            for (const { regex, replacement } of replacements) {
                if (regex.test(content)) {
                    content = content.replace(regex, replacement);
                    modified = true;
                }
            }
            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

processDirectory(blogDir);
console.log("De-AI process completed.");
