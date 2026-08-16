const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            const ext = path.extname(file);
            if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

const allFiles = getAllFiles(srcDir);
let changedFilesCount = 0;

allFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // Replace 2026 with 2027
    content = content.replace(/2026/g, '2027');

    // If it's a blog post page.tsx, try injecting AuthorProfile
    if (file.includes(path.join('src', 'app', 'blog')) && file.endsWith('page.tsx')) {
        if (!content.includes('AuthorProfile')) {
            // Add import
            content = content.replace(/import Link from 'next\/link'(\r?\n)/, "import Link from 'next/link'\nimport AuthorProfile from '@/components/AuthorProfile'\n");
            
            // Inject after </header>
            content = content.replace(/<\/header>/, "</header>\n\n                    <AuthorProfile />\n");
        }
    }

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        changedFilesCount++;
        console.log(`Updated: ${file}`);
    }
});

console.log(`Migration complete. Updated ${changedFilesCount} files.`);
