// AŞIRI DETAYLI YKS HESAPLAMA TEST SUITE'İ

const { calculateUniversityScores, calculateNet, estimateRank, calculateYKSScores } = require('./src/utils/yksCalculator.ts');

console.log("=========================================================");
console.log("YKS HESAPLAMA MOTORU - DETAYLI VE AŞIRI TEST SENARYOLARI");
console.log("=========================================================\n");

let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
    if (condition) {
        passedTests++;
        console.log(`[BAŞARILI] ${message}`);
    } else {
        failedTests++;
        console.error(`[HATA] ${message}`);
    }
}

function assertClose(actual, expected, tolerance = 0.05, message) {
    const diff = Math.abs(actual - expected);
    if (diff <= tolerance) {
        passedTests++;
        console.log(`[BAŞARILI] ${message} (Gerçek: ${actual}, Beklenen: ${expected})`);
    } else {
        failedTests++;
        console.error(`[HATA] ${message} (Gerçek: ${actual}, Beklenen: ${expected}, Fark: ${diff})`);
    }
}

// 1. Yardımcı Fonksiyon: Net Hesaplama (calculateNet) Testleri
console.log("\n--- BÖLÜM 1: NET HESAPLAMA TESTLERİ ---");
assert(calculateNet(40, 0) === 40, "40 Doğru 0 Yanlış = 40 Net");
assert(calculateNet(39, 4) === 38, "39 Doğru 4 Yanlış = 38 Net");
assert(calculateNet(10, 10) === 7.5, "10 Doğru 10 Yanlış = 7.5 Net");
assert(calculateNet(0, 40) === 0, "0 Doğru 40 Yanlış = 0 Net (Eksi netler 0'a yuvarlanmalı)");
assert(calculateNet(15, 3) === 14.25, "15 Doğru 3 Yanlış = 14.25 Net");

// 2. Minimum Net (0.5 kuralı) Testleri
console.log("\n--- BÖLÜM 2: MİNİMUM NET (0.5) KURALI TESTLERİ ---");
const emptyTYT = {
    turkce: {dogru:0, yanlis:0}, matematik: {dogru:0, yanlis:0},
    sosyal: {dogru:0, yanlis:0}, fen: {dogru:0, yanlis:0}
};
const emptyAYT = {
    matematik: {dogru:0, yanlis:0}, fizik: {dogru:0, yanlis:0}, kimya: {dogru:0, yanlis:0}, biyoloji: {dogru:0, yanlis:0},
    edebiyat: {dogru:0, yanlis:0}, tarih1: {dogru:0, yanlis:0}, cografya1: {dogru:0, yanlis:0}, tarih2: {dogru:0, yanlis:0},
    cografya2: {dogru:0, yanlis:0}, felsefe: {dogru:0, yanlis:0}, din: {dogru:0, yanlis:0}
};
const emptyYDT = { ydt: {dogru:0, yanlis:0} };

// TYT'de 0 net -> Puan hesaplanmamalı
let res = calculateYKSScores(emptyTYT, emptyAYT, emptyYDT, 0);
assert(res.estimatedRanks.say === undefined, "0 Netli TYT'de SAY Sıralaması Yoktur");
assert(res.estimatedRanks.ea === undefined, "0 Netli TYT'de EA Sıralaması Yoktur");

// TYT'de Türkçe 0.5 net
const tyt05Turkce = { ...emptyTYT, turkce: {dogru:1, yanlis:2} }; // 1D 2Y = 0.5 net
const ayt05Say = { ...emptyAYT, matematik: {dogru:1, yanlis:2} }; // 0.5 net SAY
res = calculateYKSScores(tyt05Turkce, ayt05Say, emptyYDT, 0);
assert(res.nets.tyt.turkce === 0.5, "Türkçe tam olarak 0.5 net");
assert(res.nets.ayt.matematik === 0.5, "AYT Mat tam olarak 0.5 net");
assert(res.estimatedRanks.say !== undefined, "TYT 0.5 + AYT 0.5 net ile SAY Sıralaması Hesaplanır");

// TYT'de sadece Sosyal'den 40 net (TR/Mat 0) -> Sıralama hesaplanmamalı
const tytSadeceSosyal = { ...emptyTYT, sosyal: {dogru:20, yanlis:0} };
res = calculateYKSScores(tytSadeceSosyal, emptyAYT, emptyYDT, 0);
assert(res.estimatedRanks.say === undefined, "Sadece Sosyal yapıldığında SAY Sıralaması Hesaplanmaz");

// 3. Maksimum Sınır (560) Testleri
console.log("\n--- BÖLÜM 3: MAKSİMUM PUAN SINIRI (560) TESTLERİ ---");
const fullTYT = {
    turkce: {dogru:40, yanlis:0}, matematik: {dogru:40, yanlis:0},
    sosyal: {dogru:20, yanlis:0}, fen: {dogru:20, yanlis:0}
};
const fullAYT = {
    matematik: {dogru:40, yanlis:0}, fizik: {dogru:14, yanlis:0}, kimya: {dogru:13, yanlis:0}, biyoloji: {dogru:13, yanlis:0},
    edebiyat: {dogru:24, yanlis:0}, tarih1: {dogru:10, yanlis:0}, cografya1: {dogru:6, yanlis:0}, tarih2: {dogru:11, yanlis:0},
    cografya2: {dogru:11, yanlis:0}, felsefe: {dogru:12, yanlis:0}, din: {dogru:6, yanlis:0}
};
res = calculateYKSScores(fullTYT, fullAYT, emptyYDT, 100);
assertClose(res.points.say, 559.72, 0.1, "Full TYT + Full SAY AYT + 100 OBP = ~559.72");
assertClose(res.points.ea, 559.8, 0.1, "Full TYT + Full EA AYT + 100 OBP = ~559.8");
assertClose(res.points.soz, 560, 0.1, "Full TYT + Full SOZ AYT + 100 OBP = ~560"); 

// 4. OBP Etki Testleri
console.log("\n--- BÖLÜM 4: OBP (ORTAÖĞRETİM BAŞARI PUANI) TESTLERİ ---");
res = calculateYKSScores(tyt05Turkce, emptyAYT, emptyYDT, 0);
const basePoint = res.points.say;

res = calculateYKSScores(tyt05Turkce, emptyAYT, emptyYDT, 100);
assertClose(res.points.say, basePoint + 60, 0.01, "100 OBP = Tam 60 Puan Ekler");

res = calculateYKSScores(tyt05Turkce, emptyAYT, emptyYDT, 100, true, false); 
assertClose(res.points.say, basePoint + 30, 0.01, "Kırık 100 OBP = Tam 30 Puan Ekler");

res = calculateYKSScores(tyt05Turkce, emptyAYT, emptyYDT, 100, false, true); 
assertClose(res.points.say, basePoint + 90, 0.01, "Mesleki Ek Puanlı 100 OBP = Tam 90 Puan Ekler");

// 5. Sıralama (Logaritmik İnterpolasyon) Testleri
console.log("\n--- BÖLÜM 5: SIRALAMA TAHMİNİ (LOG. İNTERPOLASYON) TESTLERİ ---");
try {
    const rank500 = estimateRank(500, 'say');
    const rank490 = estimateRank(490, 'say');
    const rank480 = estimateRank(480, 'say');
    console.log(`Puan 500 Sıralama: ${rank500}`);
    console.log(`Puan 490 Sıralama: ${rank490}`);
    console.log(`Puan 480 Sıralama: ${rank480}`);
    
    if (rank500 > rank480) {
        failedTests++;
        console.error(`[HATA] 500 puan sıralaması (${rank500}), 480 puan sıralamasından (${rank480}) daha BÜYÜK olamaz! Tabloda veri hatası (Puan düştükçe aday sayısı artmalıdır).`);
    } else {
        passedTests++;
        console.log(`[BAŞARILI] Sıralama mantığı doğru yönde çalışıyor.`);
    }
} catch (e) {
    failedTests++;
    console.error(`[HATA] Sıralama hesaplarken hata: ${e}`);
}

// Sonuç Raporu
console.log("\n=========================================================");
console.log(`TEST SONUÇLARI: Toplam: ${passedTests + failedTests} | Başarılı: ${passedTests} | Başarısız: ${failedTests}`);
if (failedTests > 0) {
    console.log("UYARI: BAZI TESTLER BAŞARISIZ OLDU. KODU KONTROL EDİN!");
    process.exit(1);
} else {
    console.log("MÜKEMMEL: TÜM TESTLER BAŞARIYLA GEÇTİ!");
    process.exit(0);
}
