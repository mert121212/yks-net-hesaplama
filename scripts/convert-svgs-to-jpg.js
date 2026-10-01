const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const blogDir = path.join(__dirname, '../public/images/blog');

async function convertAll() {
    const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.svg'));
    for (const file of files) {
        const inputPath = path.join(blogDir, file);
        const outputPath = path.join(blogDir, file.replace('.svg', '.jpg'));
        try {
            await sharp(inputPath, { density: 150 })
                .jpeg({ quality: 90 })
                .toFile(outputPath);
            console.log(`Converted: ${file} -> ${path.basename(outputPath)}`);
        } catch (err) {
            console.error(`Error converting ${file}:`, err);
        }
    }
    console.log('All SVGs converted to high-quality JPGs successfully!');
}

convertAll();
