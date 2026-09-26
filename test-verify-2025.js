/**
 * 2025 ÖSYM Resmi Verileri ile Sıralama Doğrulama Testi
 */

const HAM_TABLES = {
    tyt: [
        [500, 1], [480, 180], [460, 2050], [440, 8163], [420, 21061],
        [400, 44193], [380, 79260], [360, 127655], [340, 193064], [320, 282276],
        [300, 404024], [280, 570335], [260, 794784], [240, 1073527], [220, 1379866],
        [200, 1686626], [180, 1977665], [160, 2210463], [140, 2303695], [120, 2310493],
        [100, 2310599],
    ],
    say: [
        [500, 1], [480, 701], [460, 4715], [440, 12449], [420, 24779],
        [400, 40857], [380, 60085], [360, 81946], [340, 106251], [320, 134493],
        [300, 169418], [280, 213365], [260, 270804], [240, 348345], [220, 458302],
        [200, 627659], [180, 892884], [160, 1149472], [140, 1277493], [120, 1291435],
        [100, 1291531],
    ],
    ea: [
        [500, 1], [480, 32], [460, 175], [440, 560], [420, 1325],
        [400, 2823], [380, 6028], [360, 15691], [340, 35436], [320, 68083],
        [300, 115961], [280, 185253], [260, 285967], [240, 431085], [220, 629436],
        [200, 875112], [180, 1134243], [160, 1350772], [140, 1474465], [120, 1494355],
        [100, 1494612],
    ],
    soz: [
        [500, 1], [480, 4], [460, 21], [440, 76], [420, 227],
        [400, 652], [380, 1782], [360, 4912], [340, 12653], [320, 29315],
        [300, 60680], [280, 115851], [260, 205996], [240, 338388], [220, 515827],
        [200, 723293], [180, 920945], [160, 1070609], [140, 1155714], [120, 1173742],
        [100, 1174047],
    ],
    dil: [
        [500, 5], [480, 66], [460, 410], [440, 1231], [420, 2880],
        [400, 5789], [380, 10552], [360, 17443], [340, 25724], [320, 34564],
        [300, 43840], [280, 53317], [260, 63300], [240, 73733], [220, 85010],
        [200, 97273], [180, 111159], [160, 125793], [140, 135895], [120, 140051],
        [100, 140657],
    ],
};

const YERLESTIRME_TABLES = {
    tyt: [
        [550, 14], [530, 601], [510, 3648], [490, 11733], [470, 27141],
        [450, 56634], [430, 103442], [410, 137133], [390, 193064], [370, 282276],
        [350, 404024], [330, 570335], [310, 794784], [290, 1073527], [270, 1379866],
        [250, 1686626], [230, 1977665], [200, 2210463], [180, 2303695], [150, 2310493],
        [100, 2310599],
    ],
    say: [
        [550, 57], [530, 1930], [510, 7081], [490, 16140], [470, 29410],
        [450, 50453], [430, 87117], [410, 106251], [390, 134493], [370, 169418],
        [350, 213365], [330, 270804], [310, 348345], [290, 458302], [270, 627659],
        [250, 892884], [230, 1149472], [200, 1277493], [180, 1291435], [150, 1291531],
        [100, 1291531],
    ],
    ea: [
        [550, 4], [530, 58], [510, 261], [490, 742], [470, 1629],
        [450, 4191], [430, 20244], [410, 35436], [390, 68083], [370, 115961],
        [350, 185253], [330, 285967], [310, 431085], [290, 629436], [270, 875112],
        [250, 1134243], [230, 1350772], [200, 1474465], [180, 1494355], [150, 1494612],
        [100, 1494612],
    ],
    soz: [
        [550, 1], [530, 7], [510, 26], [490, 77], [470, 254],
        [450, 454], [430, 5036], [410, 12653], [390, 29315], [370, 60680],
        [350, 115851], [330, 205996], [310, 338388], [290, 515827], [270, 723293],
        [250, 920945], [230, 1070609], [200, 1155714], [180, 1173742], [150, 1174047],
        [100, 1174047],
    ],
    dil: [
        [550, 12], [530, 151], [510, 596], [490, 1606], [470, 3526],
        [450, 8910], [430, 17443], [410, 25724], [390, 34564], [370, 43840],
        [350, 53317], [330, 63300], [310, 73733], [290, 85010], [270, 97273],
        [250, 111159], [230, 125793], [200, 135895], [180, 140051], [150, 140657],
        [100, 140657],
    ],
};

function estimateRank(score, field, type) {
    if (type === undefined) type = 'yerlestirme';
    if (score < 100) return 2500000;
    const tables = type === 'yerlestirme' ? YERLESTIRME_TABLES : HAM_TABLES;
    const table = tables[field];
    if (score >= table[0][0]) return table[0][1];
    if (score < table[table.length - 1][0]) return 2500000;

    for (let i = 0; i < table.length - 1; i++) {
        const [x1, y1] = table[i];
        const [x2, y2] = table[i + 1];
        if (score <= x1 && score >= x2) {
            const logY1 = Math.log(Math.max(1, y1));
            const logY2 = Math.log(Math.max(1, y2));
            const fraction = (score - x2) / (x1 - x2);
            const logY = logY2 + fraction * (logY1 - logY2);
            return Math.max(1, Math.round(Math.exp(logY)));
        }
    }
    return table[table.length - 1][1];
}

console.log('='.repeat(80));
console.log('2025 OSYM VERILERI ILE SIRALAMA DOGRULAMA TESTI');
console.log('='.repeat(80));

let errors = 0;
let tests = 0;

function testExactPoint(score, field, type, expectedRank, label) {
    tests++;
    const result = estimateRank(score, field, type);
    const isExact = result === expectedRank;
    if (!isExact) {
        errors++;
        console.log('FAIL ' + label + ': Puan=' + score + ', Beklenen=' + expectedRank + ', Sonuc=' + result);
    } else {
        console.log('OK   ' + label + ': Puan=' + score + ', Siralama=' + result);
    }
}

function testRange(score, field, type, minRank, maxRank, label) {
    tests++;
    const result = estimateRank(score, field, type);
    const inRange = result >= minRank && result <= maxRank;
    if (!inRange) {
        errors++;
        console.log('FAIL ' + label + ': Puan=' + score + ', Sonuc=' + result + ', Beklenen=[' + minRank + '-' + maxRank + ']');
    } else {
        console.log('OK   ' + label + ': Puan=' + score + ', Siralama=' + result + ' (aralik: ' + minRank + '-' + maxRank + ')');
    }
}

// TEST 1: HAM PUAN TABLO NOKTALARI
console.log('\n--- HAM PUAN TABLO NOKTALARI ---');
testExactPoint(500, 'tyt', 'ham', 1, 'TYT Ham 500');
testExactPoint(480, 'tyt', 'ham', 180, 'TYT Ham 480');
testExactPoint(460, 'tyt', 'ham', 2050, 'TYT Ham 460');
testExactPoint(440, 'tyt', 'ham', 8163, 'TYT Ham 440');
testExactPoint(400, 'tyt', 'ham', 44193, 'TYT Ham 400');
testExactPoint(300, 'tyt', 'ham', 404024, 'TYT Ham 300');

testExactPoint(500, 'say', 'ham', 1, 'SAY Ham 500');
testExactPoint(480, 'say', 'ham', 701, 'SAY Ham 480');
testExactPoint(460, 'say', 'ham', 4715, 'SAY Ham 460');
testExactPoint(400, 'say', 'ham', 40857, 'SAY Ham 400');
testExactPoint(300, 'say', 'ham', 169418, 'SAY Ham 300');

testExactPoint(500, 'ea', 'ham', 1, 'EA Ham 500');
testExactPoint(480, 'ea', 'ham', 32, 'EA Ham 480');
testExactPoint(460, 'ea', 'ham', 175, 'EA Ham 460');
testExactPoint(400, 'ea', 'ham', 2823, 'EA Ham 400');

testExactPoint(500, 'soz', 'ham', 1, 'SOZ Ham 500');
testExactPoint(480, 'soz', 'ham', 4, 'SOZ Ham 480');
testExactPoint(400, 'soz', 'ham', 652, 'SOZ Ham 400');

testExactPoint(500, 'dil', 'ham', 5, 'DIL Ham 500');
testExactPoint(480, 'dil', 'ham', 66, 'DIL Ham 480');

// TEST 2: YERLESTIRME TABLO NOKTALARI
console.log('\n--- YERLESTIRME TABLO NOKTALARI ---');
testExactPoint(550, 'tyt', 'yerlestirme', 14, 'TYT Yer 550');
testExactPoint(530, 'tyt', 'yerlestirme', 601, 'TYT Yer 530');
testExactPoint(510, 'tyt', 'yerlestirme', 3648, 'TYT Yer 510');
testExactPoint(490, 'tyt', 'yerlestirme', 11733, 'TYT Yer 490');
testExactPoint(470, 'tyt', 'yerlestirme', 27141, 'TYT Yer 470');

testExactPoint(550, 'say', 'yerlestirme', 57, 'SAY Yer 550');
testExactPoint(530, 'say', 'yerlestirme', 1930, 'SAY Yer 530');
testExactPoint(510, 'say', 'yerlestirme', 7081, 'SAY Yer 510');
testExactPoint(490, 'say', 'yerlestirme', 16140, 'SAY Yer 490');

testExactPoint(550, 'ea', 'yerlestirme', 4, 'EA Yer 550');
testExactPoint(530, 'ea', 'yerlestirme', 58, 'EA Yer 530');
testExactPoint(510, 'ea', 'yerlestirme', 261, 'EA Yer 510');

testExactPoint(550, 'soz', 'yerlestirme', 1, 'SOZ Yer 550');
testExactPoint(530, 'soz', 'yerlestirme', 7, 'SOZ Yer 530');

testExactPoint(550, 'dil', 'yerlestirme', 12, 'DIL Yer 550');
testExactPoint(530, 'dil', 'yerlestirme', 151, 'DIL Yer 530');

// TEST 3: ARA PUANLAR MANTIKLILIK
console.log('\n--- ARA PUAN MANTIKLILIK ---');
testRange(490, 'say', 'ham', 1, 701, 'SAY Ham 490');
testRange(470, 'say', 'ham', 701, 4715, 'SAY Ham 470');
testRange(490, 'tyt', 'ham', 1, 180, 'TYT Ham 490');
testRange(470, 'tyt', 'ham', 180, 2050, 'TYT Ham 470');
testRange(540, 'say', 'yerlestirme', 57, 1930, 'SAY Yer 540');
testRange(520, 'say', 'yerlestirme', 1930, 7081, 'SAY Yer 520');
testRange(540, 'ea', 'yerlestirme', 4, 58, 'EA Yer 540');

// TEST 4: KRITIK "1" HATASI KONTROLU
console.log('\n--- KRITIK: SIRALAMA=1 HATASI KONTROLU ---');
const criticalTests = [
    { score: 540, field: 'say', type: 'yerlestirme', label: 'SAY Yer 540' },
    { score: 545, field: 'say', type: 'yerlestirme', label: 'SAY Yer 545' },
    { score: 540, field: 'tyt', type: 'yerlestirme', label: 'TYT Yer 540' },
    { score: 545, field: 'tyt', type: 'yerlestirme', label: 'TYT Yer 545' },
    { score: 540, field: 'ea', type: 'yerlestirme', label: 'EA Yer 540' },
    { score: 490, field: 'say', type: 'ham', label: 'SAY Ham 490' },
    { score: 495, field: 'say', type: 'ham', label: 'SAY Ham 495' },
    { score: 490, field: 'tyt', type: 'ham', label: 'TYT Ham 490' },
    { score: 495, field: 'tyt', type: 'ham', label: 'TYT Ham 495' },
];
for (const t of criticalTests) {
    tests++;
    const result = estimateRank(t.score, t.field, t.type);
    const maxTop = t.type === 'ham' ? 500 : 550;
    if (result <= 1 && t.score < maxTop) {
        errors++;
        console.log('FAIL KRITIK! ' + t.label + ': Siralama=1 (yanlis!)');
    } else {
        console.log('OK   ' + t.label + ': Siralama=' + result + ' (1 degil, dogru)');
    }
}

// TEST 5: MONOTONLIK
console.log('\n--- MONOTONLIK TESTI ---');
const fields = ['tyt', 'say', 'ea', 'soz', 'dil'];
const types = ['ham', 'yerlestirme'];
for (const type of types) {
    for (const field of fields) {
        const maxScore = type === 'ham' ? 500 : 550;
        let prevRank = Infinity;
        let monoOk = true;
        let failAt = null;
        for (let score = 100; score <= maxScore; score += 5) {
            const rank = estimateRank(score, field, type);
            if (rank > prevRank) {
                monoOk = false;
                failAt = { score, rank, prevRank };
                break;
            }
            prevRank = rank;
        }
        tests++;
        if (!monoOk) {
            errors++;
            console.log('FAIL Monotonlik ' + type.toUpperCase() + ' ' + field.toUpperCase() + ': Puan=' + failAt.score + ' rank=' + failAt.rank + ' > onceki=' + failAt.prevRank);
        } else {
            console.log('OK   Monotonlik ' + type.toUpperCase() + ' ' + field.toUpperCase());
        }
    }
}

// SONUC
console.log('\n' + '='.repeat(80));
console.log('TOPLAM: ' + tests + ' test, ' + errors + ' hata');
if (errors === 0) {
    console.log('TUM TESTLER BASARILI!');
} else {
    console.log(errors + ' HATA BULUNDU!');
}
console.log('='.repeat(80));

// ORNEK SENARYOLAR
console.log('\n--- ORNEK SENARYOLAR ---');
const scenarios = [
    { desc: 'TYT 40T+30M+15S+10F (OBP=80)', tytT: 40, tytM: 30, tytS: 15, tytF: 10, obp: 80 },
    { desc: 'TYT 30T+20M+10S+5F (OBP=70)', tytT: 30, tytM: 20, tytS: 10, tytF: 5, obp: 70 },
    { desc: 'TYT 20T+15M+8S+3F (OBP=60)', tytT: 20, tytM: 15, tytS: 8, tytF: 3, obp: 60 },
    { desc: 'TYT 10T+5M+3S+2F (OBP=50)', tytT: 10, tytM: 5, tytS: 3, tytF: 2, obp: 50 },
];
for (const s of scenarios) {
    const BAZ = 100;
    const hamPuan = BAZ + (s.tytT * 3.3) + (s.tytM * 3.3) + (s.tytS * 3.4) + (s.tytF * 3.4);
    const obpGercek = s.obp * 5;
    const yerlestirmePuan = Math.min(hamPuan + obpGercek * 0.12, 560);
    const hamRank = estimateRank(Math.round(hamPuan * 100) / 100, 'tyt', 'ham');
    const yerRank = estimateRank(Math.round(yerlestirmePuan * 100) / 100, 'tyt', 'yerlestirme');
    console.log(s.desc);
    console.log('   Ham Puan: ' + hamPuan.toFixed(2) + ' -> Siralama: ' + hamRank);
    console.log('   Yerlestirme Puani: ' + yerlestirmePuan.toFixed(2) + ' -> Siralama: ' + yerRank);
}

if (typeof module !== 'undefined') {
    module.exports = { estimateRank, HAM_TABLES, YERLESTIRME_TABLES };
}
