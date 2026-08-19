const fs = require('fs');
const path = require('path');

const dirsToScan = [
    path.join(__dirname, 'src/app/blog'),
    path.join(__dirname, 'src/app/yks-rehberi')
];

const aiMarkers = [
    "Önemlidir", "Sağlar", "Hayati öneme sahiptir", "Şüphesiz",
    "Göz ardı edilmemelidir", "Etkili bir şekilde", "Kapsamlı",
    "Detaylı", "Stratejiler", "Ancak", "Öte yandan", "Bununla birlikte",
    "Son derece", "Rehber niteliğinde", "Optimum", "Maksimum",
    "Odaklanmak", "Bağlamında", "Açısından", "Gerekmektedir", "Yapılmalıdır",
    "Unutulmamalıdır", "Edilmelidir", "Sağlamaktadır", "Oluşturmaktadır",
    "Artırmak için", "Zorunludur"
];

let totalWords = 0;
let markerCounts = {};
let fileReports = [];

function analyzeFile(filePath) {
    if (!filePath.endsWith('page.tsx')) return;
    
    const content = fs.readFileSync(filePath, 'utf8');
    const textOnly = content.replace(/<[^>]*>?/gm, ''); // crude HTML tag removal
    const words = textOnly.split(/\s+/);
    totalWords += words.length;
    
    let fileMarkerCount = 0;
    
    aiMarkers.forEach(marker => {
        const regex = new RegExp(`\\b${marker}\\b`, 'gi');
        const matches = content.match(regex);
        if (matches) {
            markerCounts[marker] = (markerCounts[marker] || 0) + matches.length;
            fileMarkerCount += matches.length;
        }
    });

    // Look for passive voice (common in AI) - roughly checking verbs ending in "ılmalıdır", "inmelidir"
    const passiveMatches = content.match(/\w+(ılmalıdır|inmelidir|unmalıdır|ünmelidir|ilmelidir)/gi);
    const passiveCount = passiveMatches ? passiveMatches.length : 0;

    fileReports.push({
        file: path.relative(__dirname, filePath),
        markerCount: fileMarkerCount,
        passiveCount: passiveCount,
        wordCount: words.length
    });
}

function processDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else {
            analyzeFile(fullPath);
        }
    }
}

dirsToScan.forEach(processDirectory);

console.log("=== AI Tone Analysis Report ===\n");
console.log(`Total Words Analyzed: ${totalWords}`);
console.log("\n--- Top AI Vocabulary Markers Found ---");
Object.entries(markerCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .forEach(([marker, count]) => {
        console.log(`${marker}: ${count}`);
    });

console.log("\n--- File Breakdown (Highest AI Density) ---");
fileReports.sort((a, b) => {
    const densityA = (a.markerCount + a.passiveCount * 2) / a.wordCount;
    const densityB = (b.markerCount + b.passiveCount * 2) / b.wordCount;
    return densityB - densityA;
}).slice(0, 5).forEach(report => {
    const density = ((report.markerCount + report.passiveCount * 2) / report.wordCount * 100).toFixed(2);
    console.log(`${report.file}`);
    console.log(`  AI Markers: ${report.markerCount}, Passive Verbs: ${report.passiveCount}, Density Score: ${density}%`);
});
