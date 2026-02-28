// Yeni programları universities.ts dosyasına ekle
const fs = require('fs');

// Mevcut dosyayı oku
const currentFile = fs.readFileSync('src/data/universities.ts', 'utf8');

// Yeni programları üret
const output = require('./generate-universities.js');

console.log('Programlar ekleniyor...');
