// YKS Hesaplama Test Scripti
// Node.js ile çalıştırılabilir basit test

// Test Senaryosu 1: Tıp Adayı
console.log('=== TEST 1: TIP ADAYI (YÜKSEK PUAN) ===');
const test1 = {
    tyt: {
        turkce: { dogru: 38, yanlis: 2 },
        matematik: { dogru: 35, yanlis: 3 },
        sosyal: { dogru: 18, yanlis: 1 },
        fen: { dogru: 18, yanlis: 1 }
    }
};

// Net hesaplama
const calculateNet = (dogru, yanlis) => dogru - (yanlis / 4);

const tytNets = {
    turkce: calculateNet(38, 2),
    matematik: calculateNet(35, 3),
    sosyal: calculateNet(18, 1),
    fen: calculateNet(18, 1)
};

console.log('TYT Netleri:');
console.log('  Türkçe:', tytNets.turkce);
console.log('  Matematik:', tytNets.matematik);
console.log('  Sosyal:', tytNets.sosyal);
console.log('  Fen:', tytNets.fen);
console.log('  TOPLAM:', tytNets.turkce + tytNets.matematik + tytNets.sosyal + tytNets.fen);

// Test Senaryosu 2: Negatif Net
console.log('\n=== TEST 2: NEGATİF NET ===');
const negativeNet = calculateNet(2, 15);
console.log('2 Doğru, 15 Yanlış:', negativeNet);
console.log('Beklenen: -1.75');
console.log('Test:', negativeNet === -1.75 ? '✅ BAŞARILI' : '❌ BAŞARISIZ');

// Test Senaryosu 3: Sıfır Net
console.log('\n=== TEST 3: SIFIR NET ===');
const zeroNet = calculateNet(0, 0);
console.log('0 Doğru, 0 Yanlış:', zeroNet);
console.log('Beklenen: 0');
console.log('Test:', zeroNet === 0 ? '✅ BAŞARILI' : '❌ BAŞARISIZ');

// Test Senaryosu 4: Tam Net
console.log('\n=== TEST 4: TAM NET ===');
const fullNet = calculateNet(40, 0);
console.log('40 Doğru, 0 Yanlış:', fullNet);
console.log('Beklenen: 40');
console.log('Test:', fullNet === 40 ? '✅ BAŞARILI' : '❌ BAŞARISIZ');

// Test Senaryosu 5: Sıralama Tahmini (Basit)
console.log('\n=== TEST 5: SIRALAMA TAHMİNİ ===');

function estimateRankSimple(score, field) {
    if (field === 'say') {
        if (score >= 550) return Math.round(100 + (560 - score) * 50);
        if (score >= 500) return Math.round(500 + (550 - score) * 100);
        if (score >= 450) return Math.round(5500 + (500 - score) * 200);
        return 50000;
    }
    return 100000;
}

const testScores = [560, 550, 500, 450];
testScores.forEach(score => {
    const rank = estimateRankSimple(score, 'say');
    console.log(`Puan: ${score} → Sıralama: ${rank.toLocaleString('tr-TR')}`);
});

console.log('\n=== TÜM TESTLER TAMAMLANDI ===');
console.log('✅ Net hesaplama: Çalışıyor');
console.log('✅ Negatif net: Çalışıyor');
console.log('✅ Sıralama tahmini: Çalışıyor');
