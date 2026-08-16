// Gerçek Calculator Test - Yeni API'ye göre güncellendi

const TYT_K = { turkce: 1.32, matematik: 1.32, sosyal: 1.36, fen: 1.36 };
const AYT_K = {
    say: { matematik: 3.00, fizik: 2.85, kimya: 3.07, biyoloji: 3.07 }
};
const BAZ_PUAN = 100;

function calculateUniversityScores(tytNets, aytNets, ydtNets, obp = 0, obpHalved = false, obpMesleki = false) {
    const obpGercek = obp * 5;
    const obpKatsayi = obpHalved ? 0.06 : 0.12;
    const obpContribution = obpGercek * obpKatsayi;
    const meslekiEkPuan = obpMesleki ? obpGercek * 0.06 : 0;

    const tytKatkisi = (tytNets.turkce * TYT_K.turkce) + (tytNets.matematik * TYT_K.matematik) + (tytNets.sosyal * TYT_K.sosyal) + (tytNets.fen * TYT_K.fen);
    
    const sayAYT = (aytNets.matematik * AYT_K.say.matematik) + (aytNets.fizik * AYT_K.say.fizik) + (aytNets.kimya * AYT_K.say.kimya) + (aytNets.biyoloji * AYT_K.say.biyoloji);
    const sayHam = BAZ_PUAN + tytKatkisi + sayAYT;
    const sayScore = Math.min(sayHam + obpContribution + meslekiEkPuan, 560);

    return {
        say: Math.max(BAZ_PUAN, Math.round(sayScore * 100) / 100),
        sayHam: Math.round(sayHam * 100) / 100
    };
}

console.log('=== GERÇEK CALCULATOR TEST ===\n');

// Test 1: TYT + AYT Full, OBP 100
const tytFull = { turkce: 40, matematik: 40, sosyal: 20, fen: 20 };
const aytFull = { matematik: 40, fizik: 14, kimya: 13, biyoloji: 13 };
const result1 = calculateUniversityScores(tytFull, aytFull, {ydt:0}, 100);

console.log('TEST 1: TYT Full + AYT SAY Full + OBP 100');
console.log(`Ham SAY Puan: ${result1.sayHam}`); // Beklenen: 100 + (40*1.32*2 + 20*1.36*2) + (40*3 + 14*2.85 + 13*3.07*2) => 100 + 160 + 239.72 = 499.72 => 500'e yakın
console.log(`Yerleştirme SAY Puan: ${result1.say}`); // Beklenen: 499.72 + 60 = 559.72
console.log(`Sonuç: ${result1.say >= 559 ? '✓ BAŞARILI (560 limitine yakın)' : '✗ YANLIŞ'}\n`);

console.log('Tüm testler tamamlandı.');
