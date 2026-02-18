// Üniversite Eşleştirme Testi

console.log('=== ÜNİVERSİTE EŞLEŞTİRME TESTİ ===\n');

// Test fonksiyonu
function testMatching(userRank, programMinRank, programName) {
    // ESKİ YANLIŞ MANTIK
    const oldLogic = programMinRank <= userRank * 1.2;

    // YENİ DOĞRU MANTIK
    const newLogic = userRank <= programMinRank * 1.2;

    console.log(`\nProgram: ${programName}`);
    console.log(`Kullanıcı Sıralaması: ${userRank.toLocaleString('tr-TR')}`);
    console.log(`Program Min Sıralama: ${programMinRank.toLocaleString('tr-TR')}`);
    console.log(`Eski Mantık (YANLIŞ): ${oldLogic ? '✓ Göster' : '✗ Gösterme'}`);
    console.log(`Yeni Mantık (DOĞRU): ${newLogic ? '✓ Göster' : '✗ Gösterme'}`);
}

console.log('TEST 1: Çok Kötü Sıralama (2 Milyon)');
testMatching(2000000, 100, 'Hacettepe Tıp');
testMatching(2000000, 500000, 'Orta Seviye Üniversite');
testMatching(2000000, 1800000, 'Düşük Puanlı Bölüm');

console.log('\n\nTEST 2: İyi Sıralama (10,000)');
testMatching(10000, 100, 'Hacettepe Tıp');
testMatching(10000, 8000, 'İyi Mühendislik');
testMatching(10000, 12000, 'Tolerans Dahilinde');
testMatching(10000, 15000, 'Tolerans Dışında');

console.log('\n\nTEST 3: Orta Sıralama (100,000)');
testMatching(100000, 50000, 'Üst Seviye Bölüm');
testMatching(100000, 90000, 'Uygun Bölüm');
testMatching(100000, 120000, 'Tolerans Dahilinde');
testMatching(100000, 150000, 'Tolerans Dışında');

console.log('\n\n=== SONUÇ ===');
console.log('Eski mantık: Program sıralaması kullanıcıdan küçükse göster (YANLIŞ!)');
console.log('Yeni mantık: Kullanıcı sıralaması programdan küçükse göster (DOĞRU!)');
console.log('\nÖrnek: 2M sıralamada Hacettepe Tıp (100 sıralama)');
console.log('Eski: 100 <= 2.4M → Göster (YANLIŞ!)');
console.log('Yeni: 2M <= 120 → Gösterme (DOĞRU!)');
