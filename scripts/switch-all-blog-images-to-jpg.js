const fs = require('fs');
const path = require('path');

const blogDir = path.resolve(__dirname, '../src/app/blog');
const entries = fs.readdirSync(blogDir);

let updatedFiles = 0;

entries.forEach(entry => {
    const fullPath = path.join(blogDir, entry);
    if (fs.statSync(fullPath).isDirectory()) {
        const pagePath = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pagePath)) {
            let content = fs.readFileSync(pagePath, 'utf8');
            if (content.includes('.svg')) {
                // Replace /images/blog/*.svg with /images/blog/*.jpg
                const replaced = content.replace(/\/images\/blog\/([a-zA-Z0-9_-]+)\.svg/g, '/images/blog/$1.jpg');
                if (replaced !== content) {
                    fs.writeFileSync(pagePath, replaced, 'utf8');
                    console.log(`Updated to .jpg: ${entry}/page.tsx`);
                    updatedFiles++;
                }
            }
        }
    }
});

console.log(`Total blog files updated: ${updatedFiles}`);
