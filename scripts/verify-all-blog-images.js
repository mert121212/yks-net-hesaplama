const fs = require('fs');
const path = require('path');

const blogDir = path.resolve(__dirname, '../src/app/blog');
const entries = fs.readdirSync(blogDir);

let allValid = true;
let checkedCount = 0;

entries.forEach(entry => {
    const fullPath = path.join(blogDir, entry);
    if (fs.statSync(fullPath).isDirectory()) {
        const pagePath = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pagePath)) {
            const content = fs.readFileSync(pagePath, 'utf8');
            const match = content.match(/\/images\/blog\/([a-zA-Z0-9_.-]+)/g);
            if (match) {
                match.forEach(imgUrl => {
                    checkedCount++;
                    const diskPath = path.join(__dirname, '../public', imgUrl);
                    if (!fs.existsSync(diskPath)) {
                        console.error(`MISSING IMAGE: ${imgUrl} referenced in ${entry}/page.tsx`);
                        allValid = false;
                    } else {
                        const stats = fs.statSync(diskPath);
                        if (stats.size === 0) {
                            console.error(`ZERO BYTE IMAGE: ${imgUrl} in ${entry}/page.tsx`);
                            allValid = false;
                        }
                    }
                });
            }
        }
    }
});

if (allValid) {
    console.log(`ALL BLOG IMAGES VERIFIED: ${checkedCount} references all exist on disk and have valid file sizes!`);
} else {
    process.exit(1);
}
