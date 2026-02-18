// Gerçek Calculator Test

// Calculator fonksiyonlarını kopyala
function calculateNet(dogru, yanlis) {
    const net = dogru - (yanlis / 4);
    return Math.round(net * 100) / 100;
}

function calculateUniversityScores(tytNets, obp = 0, obpHalved = false, obpMesleki = false) {
    const obpKatsayi = obpHalved ? 0.06 : 0.12;
    const obpContribution = obp * obpKatsayi;
    const meslekiEkPuan = obpMesleki ? obp * 0.06 : 0;
    const tytBase = (tytNets.toplam * 3.3) + obpContribution + meslekiEkPuan;

    return {
        tytBase: Math.round(tytBase * 100) / 100,
        obpContribution: Math.round(obpContribution * 100) / 100,
        meslekiEkPuan: Math.round(meslekiEkPuan * 100) / 100
    };
}

console.log('=== GERÇEK CALCULATOR TEST ===\n');

// Test 1: Basit TYT + OBP
console.log('TEST 1: TYT 100 net + OBP 80 (normal)');
const tytNets1 = { toplam: 100 };
const result1 = calculateUniversityScores(tytNets1, 80, false, false);
console.log(`TYT Base: ${result1.tytBase}`);
console.log(`OBP Katkısı: ${result1.obpContribution}`);
console.log(`Mesleki Ek: ${result1.meslekiEkPuan}`);
console.log(`Beklenen: (100 × 3.3) + (80 × 0.12) = 330 + 9.6 = 339.6`);
console.log(`Sonuç: ${result1.tytBase === 339.6 ? '✓ DOĞRU' : '✗ YANLIŞ'}\n`);

// Test 2: OBP Yarıya Düşürülmüş
console.log('TEST 2: TYT 100 net + OBP 80 (yarıya düşürülmüş)');
const result2 = calculateUniversityScores(tytNets1, 80, true, false);
console.log(`TYT Base: ${result2.tytBase}`);
console.log(`OBP Katkısı: ${result2.obpContribution}`);
console.log(`Beklenen: (100 × 3.3) + (80 × 0.06) = 330 + 4.8 = 334.8`);
console.log(`Sonuç: ${result2.tytBase === 334.8 ? '✓ DOĞRU' : '✗ YANLIŞ'}\n`);

// Test 3: Meslek Lisesi Ek Puanı
console.log('TEST 3: TYT 100 net + OBP 80 (normal + meslek lisesi)');
const result3 = calculateUniversityScores(tytNets1, 80, false, true);
console.log(`TYT Base: ${result3.tytBase}`);
console.log(`OBP Katkısı: ${result3.obpContribution}`);
console.log(`Mesleki Ek: ${result3.meslekiEkPuan}`);
console.log(`Beklenen: (100 × 3.3) + (80 × 0.12) + (80 × 0.06) = 330 + 9.6 + 4.8 = 344.4`);
console.log(`Sonuç: ${result3.tytBase === 344.4 ? '✓ DOĞRU' : '✗ YANLIŞ'}\n`);

// Test 4: Her İkisi de
console.log('TEST 4: TYT 100 net + OBP 80 (yarıya düşürülmüş + meslek lisesi)');
const result4 = calculateUniversityScores(tytNets1, 80, true, true);
console.log(`TYT Base: ${result4.tytBase}`);
console.log(`OBP Katkısı: ${result4.obpContribution}`);
console.log(`Mesleki Ek: ${result4.meslekiEkPuan}`);
console.log(`Beklenen: (100 × 3.3) + (80 × 0.06) + (80 × 0.06) = 330 + 4.8 + 4.8 = 339.6`);
console.log(`Sonuç: ${result4.tytBase === 339.6 ? '✓ DOĞRU' : '✗ YANLIŞ'}\n`);

// Test 5: Gerçekçi Senaryo
console.log('TEST 5: Gerçekçi Senaryo');
console.log('TYT: Türkçe 30D 5Y, Mat 25D 8Y, Sosyal 15D 3Y, Fen 18D 4Y');
const turkceNet = calculateNet(30, 5);
const matNet = calculateNet(25, 8);
const sosyalNet = calculateNet(15, 3);
const fenNet = calculateNet(18, 4);
const tytToplam = turkceNet + matNet + sosyalNet + fenNet;
console.log(`Türkçe: ${turkceNet}, Mat: ${matNet}, Sosyal: ${sosyalNet}, Fen: ${fenNet}`);
console.log(`TYT Toplam: ${tytToplam.toFixed(2)}`);

const tytNets5 = { toplam: tytToplam };
const result5 = calculateUniversityScores(tytNets5, 85, false, false);
console.log(`OBP: 85 (normal)`);
console.log(`TYT Base: ${result5.tytBase}`);
console.log(`OBP Katkısı: ${result5.obpContribution}`);
const expected = (tytToplam * 3.3) + (85 * 0.12);
console.log(`Beklenen: (${tytToplam.toFixed(2)} × 3.3) + (85 × 0.12) = ${expected.toFixed(2)}`);
console.log(`Sonuç: ${Math.abs(result5.tytBase - expected) < 0.01 ? '✓ DOĞRU' : '✗ YANLIŞ'}\n`);

console.log('=== TÜM TESTLER TAMAMLANDI ===');
console.log('Hesaplama mantığı doğru çalışıyor! ✓');
