const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../public/images/blog');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

function svgWrapper(title, subtitle, badgeText, gradientId, colors, mainArt) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675" style="background:#0f172a;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <defs>
    <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colors[0]}" />
      <stop offset="50%" stop-color="${colors[1]}" />
      <stop offset="100%" stop-color="${colors[2]}" />
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.18)" />
      <stop offset="100%" stop-color="rgba(255,255,255,0.04)" />
    </linearGradient>
    <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${colors[0]}" stop-opacity="0.8" />
      <stop offset="100%" stop-color="${colors[2]}" stop-opacity="0.2" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.4" />
    </filter>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="24" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background Base with Gradient Wave -->
  <rect width="1200" height="675" fill="#090d16" />
  <circle cx="200" cy="150" r="320" fill="${colors[0]}" opacity="0.18" filter="url(#glow)" />
  <circle cx="1050" cy="500" r="380" fill="${colors[1]}" opacity="0.22" filter="url(#glow)" />
  
  <!-- Subtle Grid Pattern -->
  <g opacity="0.06" stroke="#ffffff" stroke-width="1">
    <line x1="0" y1="75" x2="1200" y2="75" />
    <line x1="0" y1="150" x2="1200" y2="150" />
    <line x1="0" y1="225" x2="1200" y2="225" />
    <line x1="0" y1="300" x2="1200" y2="300" />
    <line x1="0" y1="375" x2="1200" y2="375" />
    <line x1="0" y1="450" x2="1200" y2="450" />
    <line x1="0" y1="525" x2="1200" y2="525" />
    <line x1="0" y1="600" x2="1200" y2="600" />
    <line x1="150" y1="0" x2="150" y2="675" />
    <line x1="300" y1="0" x2="300" y2="675" />
    <line x1="450" y1="0" x2="450" y2="675" />
    <line x1="600" y1="0" x2="600" y2="675" />
    <line x1="750" y1="0" x2="750" y2="675" />
    <line x1="900" y1="0" x2="900" y2="675" />
    <line x1="1050" y1="0" x2="1050" y2="675" />
  </g>

  <!-- Left Content Box -->
  <g transform="translate(80, 100)">
    <!-- Badge -->
    <rect x="0" y="0" width="340" height="42" rx="21" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" />
    <circle cx="21" cy="21" r="7" fill="${colors[0]}" />
    <text x="42" y="27" fill="#e2e8f0" font-size="14" font-weight="700" letter-spacing="1.5">${badgeText}</text>

    <!-- Main Title -->
    <text x="0" y="110" fill="#ffffff" font-size="44" font-weight="800" line-height="1.2">
      ${title.map((line, idx) => `<tspan x="0" dy="${idx === 0 ? 0 : 54}">${line}</tspan>`).join('')}
    </text>

    <!-- Subtitle -->
    <text x="0" y="250" fill="#94a3b8" font-size="20" font-weight="400">
      ${subtitle.map((line, idx) => `<tspan x="0" dy="${idx === 0 ? 0 : 30}">${line}</tspan>`).join('')}
    </text>

    <!-- Brand Footer -->
    <g transform="translate(0, 420)">
      <rect x="0" y="0" width="48" height="48" rx="14" fill="url(#${gradientId})" />
      <path d="M16 16h16M24 16v16" stroke="#ffffff" stroke-width="3" stroke-linecap="round" />
      <text x="64" y="25" fill="#f8fafc" font-size="18" font-weight="700">YKS Net Hesaplama</text>
      <text x="64" y="44" fill="#64748b" font-size="13" font-weight="500">yksnethesapla.com • Resmi Kılavuz Verileri</text>
    </g>
  </g>

  <!-- Right Visual Area -->
  <g transform="translate(680, 80)" filter="url(#shadow)">
    ${mainArt}
  </g>
</svg>`;
}

const illustrations = [
    {
        id: 'ayt-matematik-konulari',
        title: ['AYT Matematik', 'Konu Dağılımı'],
        subtitle: ['Limit, Türev, İntegral ve Trigonometri', 'ağırlıkları ve çalışma sırası'],
        badge: 'AYT MATEMATİK • 40 SORU',
        gradId: 'aytMatGrad',
        colors: ['#6366f1', '#8b5cf6', '#d946ef'],
        art: `
      <!-- Big glass card -->
      <rect x="0" y="20" width="440" height="460" rx="32" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
      <!-- Math graph coordinate -->
      <path d="M 50 380 L 390 380 M 80 80 L 80 400" stroke="#64748b" stroke-width="2" stroke-linecap="round" />
      <!-- Parabola and Sine wave -->
      <path d="M 80 340 Q 180 120 280 260 T 380 140" fill="none" stroke="#38bdf8" stroke-width="5" stroke-linecap="round" filter="url(#glow)" />
      <!-- Shaded integral area -->
      <path d="M 120 380 Q 180 170 240 230 L 240 380 Z" fill="rgba(99,102,241,0.25)" />
      <!-- Math symbol badges -->
      <g transform="translate(260, 60)">
        <rect width="140" height="60" rx="16" fill="rgba(15,23,42,0.85)" stroke="#818cf8" stroke-width="2" />
        <text x="70" y="38" text-anchor="middle" fill="#38bdf8" font-size="24" font-weight="bold">∫ f(x) dx</text>
      </g>
      <g transform="translate(40, 110)">
        <rect width="130" height="55" rx="16" fill="rgba(15,23,42,0.85)" stroke="#c084fc" stroke-width="2" />
        <text x="65" y="36" text-anchor="middle" fill="#e879f9" font-size="22" font-weight="bold">lim x→a</text>
      </g>
      <g transform="translate(240, 310)">
        <rect width="160" height="60" rx="16" fill="rgba(15,23,42,0.85)" stroke="#34d399" stroke-width="2" />
        <text x="80" y="38" text-anchor="middle" fill="#4ade80" font-size="20" font-weight="bold">dy/dx • sin²x</text>
      </g>
      <!-- Target badge -->
      <circle cx="280" cy="260" r="14" fill="#f43f5e" />
      <circle cx="280" cy="260" r="7" fill="#ffffff" />
    `
    },
    {
        id: 'yks-edebiyat-konulari',
        title: ['AYT Edebiyat', 'Konu Dağılımı'],
        subtitle: ['Divan, Tanzimat, Servet-i Fünun', 've Cumhuriyet dönemi yazar-eserler'],
        badge: 'AYT EDEBİYAT • 24 SORU',
        gradId: 'edebiyatGrad',
        colors: ['#f59e0b', '#d97706', '#b45309'],
        art: `
      <rect x="0" y="20" width="440" height="460" rx="32" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
      <!-- Book icon 3D -->
      <g transform="translate(70, 70)">
        <rect x="20" y="40" width="260" height="180" rx="12" fill="#d97706" opacity="0.3" transform="rotate(-6)" />
        <rect x="40" y="20" width="260" height="180" rx="12" fill="#fbbf24" opacity="0.5" transform="rotate(-2)" />
        <rect x="50" y="10" width="260" height="180" rx="12" fill="#ffffff" />
        <line x1="180" y1="20" x2="180" y2="180" stroke="#cbd5e1" stroke-width="3" />
        <line x1="80" y1="50" x2="150" y2="50" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" />
        <line x1="80" y1="75" x2="160" y2="75" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round" />
        <line x1="80" y1="100" x2="140" y2="100" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round" />
        <line x1="200" y1="50" x2="280" y2="50" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" />
        <line x1="200" y1="75" x2="270" y2="75" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round" />
      </g>
      <!-- Literary Period Pills -->
      <g transform="translate(60, 290)">
        <rect width="140" height="42" rx="21" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="1.5" />
        <text x="70" y="26" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="bold">Divan Şiiri</text>
      </g>
      <g transform="translate(220, 290)">
        <rect width="160" height="42" rx="21" fill="rgba(217,119,6,0.2)" stroke="#f59e0b" stroke-width="1.5" />
        <text x="80" y="26" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="bold">Tanzimat I-II</text>
      </g>
      <g transform="translate(60, 350)">
        <rect width="180" height="42" rx="21" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="1.5" />
        <text x="90" y="26" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="bold">Cumhuriyet Romanı</text>
      </g>
      <g transform="translate(260, 350)">
        <rect width="120" height="42" rx="21" fill="rgba(217,119,6,0.2)" stroke="#f59e0b" stroke-width="1.5" />
        <text x="60" y="26" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="bold">Halk Edeb.</text>
      </g>
    `
    },
    {
        id: 'yks-net-hesaplama-nasil-yapilir',
        title: ['YKS Net Hesabı', 'Nasıl Yapılır?'],
        subtitle: ['4 yanlış 1 doğru kuralı,', 'ÖSYM standart sapması ve formüller'],
        badge: 'HESAPLAMA METODOLOJİSİ',
        gradId: 'netHesapGrad',
        colors: ['#10b981', '#059669', '#047857'],
        art: `
      <rect x="0" y="20" width="440" height="460" rx="32" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
      <!-- Formula Banner -->
      <g transform="translate(40, 60)">
        <rect width="360" height="90" rx="20" fill="rgba(16,185,129,0.15)" stroke="#10b981" stroke-width="2" />
        <text x="180" y="42" text-anchor="middle" fill="#6ee7b7" font-size="14" font-weight="bold" letter-spacing="1">HAM NET FORMÜLÜ</text>
        <text x="180" y="72" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="800">Net = Doğru − (Yanlış ÷ 4)</text>
      </g>
      <!-- Optical Bubbles Mockup -->
      <g transform="translate(70, 190)">
        <rect width="300" height="190" rx="16" fill="rgba(15,23,42,0.9)" stroke="rgba(255,255,255,0.1)" />
        <text x="30" y="40" fill="#94a3b8" font-size="14" font-weight="bold">1. Soru</text>
        <circle cx="100" cy="35" r="12" fill="#10b981" />
        <circle cx="140" cy="35" r="12" fill="rgba(255,255,255,0.1)" />
        <circle cx="180" cy="35" r="12" fill="rgba(255,255,255,0.1)" />
        <circle cx="220" cy="35" r="12" fill="rgba(255,255,255,0.1)" />
        <circle cx="260" cy="35" r="12" fill="rgba(255,255,255,0.1)" />
        
        <text x="30" y="85" fill="#94a3b8" font-size="14" font-weight="bold">2. Soru</text>
        <circle cx="100" cy="80" r="12" fill="rgba(255,255,255,0.1)" />
        <circle cx="140" cy="80" r="12" fill="#ef4444" />
        <circle cx="180" cy="80" r="12" fill="rgba(255,255,255,0.1)" />
        <circle cx="220" cy="80" r="12" fill="rgba(255,255,255,0.1)" />
        <circle cx="260" cy="80" r="12" fill="rgba(255,255,255,0.1)" />

        <text x="30" y="130" fill="#94a3b8" font-size="14" font-weight="bold">3. Soru</text>
        <circle cx="100" cy="125" r="12" fill="rgba(255,255,255,0.1)" />
        <circle cx="140" cy="125" r="12" fill="rgba(255,255,255,0.1)" />
        <circle cx="180" cy="125" r="12" fill="#10b981" />
        <circle cx="220" cy="125" r="12" fill="rgba(255,255,255,0.1)" />
        <circle cx="260" cy="125" r="12" fill="rgba(255,255,255,0.1)" />

        <text x="30" y="165" fill="#34d399" font-size="13" font-weight="bold">Sonuç: 2 Doğru, 1 Yanlış → 1.75 Net</text>
      </g>
      <!-- Stamp -->
      <g transform="translate(250, 360)">
        <circle cx="50" cy="50" r="45" fill="#10b981" filter="url(#glow)" opacity="0.8" />
        <text x="50" y="56" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="900">ÖSYM</text>
      </g>
    `
    },
    {
        id: 'yks-2027-basvuru-tarihleri',
        title: ['YKS 2027', 'Sınav Takvimi'],
        subtitle: ['Başvuru tarihleri, geç başvuru günü', 've sınav oturum takvimi'],
        badge: 'ÖSYM RESMİ TAKVİM',
        gradId: 'takvimGrad',
        colors: ['#0284c7', '#2563eb', '#1d4ed8'],
        art: `
      <rect x="0" y="20" width="440" height="460" rx="32" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
      <!-- Calendar Page -->
      <g transform="translate(60, 50)">
        <rect width="320" height="260" rx="20" fill="#ffffff" />
        <rect width="320" height="70" rx="20" fill="#2563eb" />
        <text x="160" y="44" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">HAZİRAN 2027</text>
        <circle cx="70" cy="120" r="22" fill="#3b82f6" />
        <text x="70" y="127" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">TYT</text>
        <text x="110" y="125" fill="#1e293b" font-size="15" font-weight="bold">1. Oturum (Cumartesi)</text>
        
        <circle cx="70" cy="180" r="22" fill="#8b5cf6" />
        <text x="70" y="187" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">AYT</text>
        <text x="110" y="185" fill="#1e293b" font-size="15" font-weight="bold">2. Oturum (Pazar)</text>

        <circle cx="70" cy="235" r="20" fill="#f59e0b" />
        <text x="70" y="241" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="bold">YDT</text>
        <text x="110" y="240" fill="#1e293b" font-size="15" font-weight="bold">3. Oturum (Pazar Öğleden Sonra)</text>
      </g>
      <!-- Clock Icon Widget -->
      <g transform="translate(100, 340)">
        <rect width="240" height="60" rx="16" fill="rgba(15,23,42,0.8)" stroke="#38bdf8" stroke-width="1.5" />
        <circle cx="40" cy="30" r="16" fill="#0284c7" />
        <path d="M40 20v10l6 4" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
        <text x="75" y="36" fill="#f8fafc" font-size="15" font-weight="bold">Başvuru: Şubat - Mart</text>
      </g>
    `
    },
    {
        id: 'yks-1-net-kac-kisi-atar',
        title: ['1 Net Kaç Kişi', 'Öne Atar?'],
        subtitle: ['Sıralama bandına göre 1 netin etkisi:', 'İlk 10 bin vs 100 bin farkı'],
        badge: 'SIRALAMA VE STANDART SAPMA',
        gradId: 'siralamaGrad',
        colors: ['#ec4899', '#f43f5e', '#e11d48'],
        art: `
      <rect x="0" y="20" width="440" height="460" rx="32" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
      <!-- Big Rocketing Arrow -->
      <path d="M 90 380 L 190 280 L 250 310 L 370 120" fill="none" stroke="#f43f5e" stroke-width="6" stroke-linecap="round" filter="url(#glow)" />
      <polygon points="370,105 385,130 355,130" fill="#f43f5e" />
      <!-- Ranking Cards -->
      <g transform="translate(50, 70)">
        <rect width="200" height="75" rx="18" fill="rgba(15,23,42,0.85)" stroke="#fb7185" stroke-width="2" />
        <text x="25" y="32" fill="#fda4af" font-size="13" font-weight="bold">YIĞILMA BÖLGESİ</text>
        <text x="25" y="60" fill="#ffffff" font-size="20" font-weight="900">+1 Net = ~4.200 Kişi</text>
      </g>
      <g transform="translate(190, 190)">
        <rect width="200" height="75" rx="18" fill="rgba(15,23,42,0.85)" stroke="#38bdf8" stroke-width="2" />
        <text x="25" y="32" fill="#7dd3fc" font-size="13" font-weight="bold">İLK 20 BİN BANDI</text>
        <text x="25" y="60" fill="#ffffff" font-size="20" font-weight="900">+1 Net = ~650 Kişi</text>
      </g>
      <!-- Podium base -->
      <g transform="translate(80, 360)">
        <rect x="0" y="20" width="70" height="40" fill="#64748b" rx="6" />
        <rect x="80" y="0" width="70" height="60" fill="#f59e0b" rx="6" />
        <rect x="160" y="30" width="70" height="30" fill="#94a3b8" rx="6" />
        <text x="115" y="35" text-anchor="middle" fill="#ffffff" font-size="20" font-weight="bold">1</text>
      </g>
    `
    },
    {
        id: 'tyt-net-hesaplama-rehberi',
        title: ['TYT Net Hesaplama', 'Katsayı Rehberi'],
        subtitle: ['Türkçe (%33), Matematik (%33),', 'Fen (%17) ve Sosyal (%17) testleri'],
        badge: 'TYT SINAV YAPISI',
        gradId: 'tytRehberGrad',
        colors: ['#0284c7', '#0369a1', '#075985'],
        art: `
      <rect x="0" y="20" width="440" height="460" rx="32" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
      <!-- 4 Test Grid -->
      <g transform="translate(45, 60)">
        <rect x="0" y="0" width="165" height="150" rx="20" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" stroke-width="2" />
        <text x="25" y="40" fill="#7dd3fc" font-size="14" font-weight="bold">TÜRKÇE</text>
        <text x="25" y="85" fill="#ffffff" font-size="34" font-weight="900">%33</text>
        <text x="25" y="120" fill="#94a3b8" font-size="13">40 Soru • ~1.32 Puan</text>
      </g>
      <g transform="translate(230, 60)">
        <rect x="0" y="0" width="165" height="150" rx="20" fill="rgba(99,102,241,0.15)" stroke="#818cf8" stroke-width="2" />
        <text x="25" y="40" fill="#a5b4fc" font-size="14" font-weight="bold">MATEMATİK</text>
        <text x="25" y="85" fill="#ffffff" font-size="34" font-weight="900">%33</text>
        <text x="25" y="120" fill="#94a3b8" font-size="13">40 Soru • ~1.32 Puan</text>
      </g>
      <g transform="translate(45, 230)">
        <rect x="0" y="0" width="165" height="150" rx="20" fill="rgba(52,211,153,0.15)" stroke="#34d399" stroke-width="2" />
        <text x="25" y="40" fill="#6ee7b7" font-size="14" font-weight="bold">FEN BİLİMLERİ</text>
        <text x="25" y="85" fill="#ffffff" font-size="34" font-weight="900">%17</text>
        <text x="25" y="120" fill="#94a3b8" font-size="13">20 Soru • ~1.36 Puan</text>
      </g>
      <g transform="translate(230, 230)">
        <rect x="0" y="0" width="165" height="150" rx="20" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" stroke-width="2" />
        <text x="25" y="40" fill="#fde68a" font-size="14" font-weight="bold">SOSYAL BİLİMLER</text>
        <text x="25" y="85" fill="#ffffff" font-size="34" font-weight="900">%17</text>
        <text x="25" y="120" fill="#94a3b8" font-size="13">20 Soru • ~1.36 Puan</text>
      </g>
      <!-- Total Bar -->
      <g transform="translate(45, 400)">
        <rect width="350" height="40" rx="12" fill="rgba(15,23,42,0.8)" stroke="rgba(255,255,255,0.15)" />
        <text x="175" y="25" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">Toplam: 120 Soru • 165 Dakika</text>
      </g>
    `
    },
    {
        id: 'tyt-kesin-cikan-konular',
        title: ['TYT Kesin Çıkan', 'Konular Analizi'],
        subtitle: ['Son 7 yılın ÖSYM soru dağılımı', 've garanti net getiren konular'],
        badge: 'ÖSYM ANALİZİ • 2018-2025',
        gradId: 'garantiGrad',
        colors: ['#f59e0b', '#ef4444', '#dc2626'],
        art: `
      <rect x="0" y="20" width="440" height="460" rx="32" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
      <!-- Target Bullseye -->
      <g transform="translate(220, 160)">
        <circle cx="0" cy="0" r="110" fill="none" stroke="rgba(239,68,68,0.2)" stroke-width="18" />
        <circle cx="0" cy="0" r="75" fill="none" stroke="rgba(239,68,68,0.4)" stroke-width="16" />
        <circle cx="0" cy="0" r="40" fill="none" stroke="#ef4444" stroke-width="14" />
        <circle cx="0" cy="0" r="16" fill="#ffffff" filter="url(#glow)" />
        <!-- Arrow hitting target -->
        <line x1="80" y1="-80" x2="6" y2="-6" stroke="#fbbf24" stroke-width="6" stroke-linecap="round" />
        <polygon points="6,-6 20,-16 16,-2" fill="#fbbf24" />
      </g>
      <!-- Guaranteed topics list -->
      <g transform="translate(50, 290)">
        <rect width="340" height="150" rx="20" fill="rgba(15,23,42,0.9)" stroke="rgba(255,255,255,0.15)" />
        <text x="25" y="38" fill="#4ade80" font-size="14" font-weight="bold">✓ Paragraf Ana Düşünce (24 Soru)</text>
        <text x="25" y="72" fill="#4ade80" font-size="14" font-weight="bold">✓ Problemler (Sayı-Kesir-Hız) (12 Soru)</text>
        <text x="25" y="106" fill="#4ade80" font-size="14" font-weight="bold">✓ Hücre & Kalıtım (Biyoloji) (3 Soru)</text>
        <text x="25" y="136" fill="#38bdf8" font-size="12">Yılda ortalama garanti ~45 net</text>
      </g>
    `
    },
    {
        id: 'ayt-puan-hesaplama',
        title: ['AYT Puan Türleri', 've Katsayılar'],
        subtitle: ['SAY, EA ve SÖZ puan hesaplama,', 'test ağırlıkları ve baraj şartları'],
        badge: 'AYT YERLEŞTİRME PUANI',
        gradId: 'aytPuanGrad',
        colors: ['#8b5cf6', '#7c3aed', '#6d28d9'],
        art: `
      <rect x="0" y="20" width="440" height="460" rx="32" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
      <!-- 3 Tier Badges -->
      <g transform="translate(50, 70)">
        <rect width="340" height="90" rx="20" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2" />
        <circle cx="50" cy="45" r="26" fill="#3b82f6" />
        <text x="50" y="52" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">SAY</text>
        <text x="95" y="40" fill="#ffffff" font-size="18" font-weight="bold">Sayısal Puan</text>
        <text x="95" y="65" fill="#93c5fd" font-size="13">AYT Mat (40) + AYT Fen (40)</text>
      </g>
      <g transform="translate(50, 180)">
        <rect width="340" height="90" rx="20" fill="rgba(168,85,247,0.15)" stroke="#a855f7" stroke-width="2" />
        <circle cx="50" cy="45" r="26" fill="#a855f7" />
        <text x="50" y="52" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">EA</text>
        <text x="95" y="40" fill="#ffffff" font-size="18" font-weight="bold">Eşit Ağırlık Puan</text>
        <text x="95" y="65" fill="#d8b4fe" font-size="13">AYT Mat (40) + Edebiyat-Sos1 (40)</text>
      </g>
      <g transform="translate(50, 290)">
        <rect width="340" height="90" rx="20" fill="rgba(244,63,94,0.15)" stroke="#f43f5e" stroke-width="2" />
        <circle cx="50" cy="45" r="26" fill="#f43f5e" />
        <text x="50" y="52" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">SÖZ</text>
        <text x="95" y="40" fill="#ffffff" font-size="18" font-weight="bold">Sözel Puan</text>
        <text x="95" y="65" fill="#fda4af" font-size="13">Edebiyat-Sos1 (40) + Sosyal-2 (40)</text>
      </g>
      <!-- Footer Note -->
      <text x="220" y="430" text-anchor="middle" fill="#94a3b8" font-size="14" font-weight="500">AYT Ağırlığı: %60 • TYT Ağırlığı: %40</text>
    `
    },
    {
        id: 'universite-tercih-stratejileri',
        title: ['Üniversite Tercih', 'Stratejileri'],
        subtitle: ['Sıralama aralıkları, %20 kuralı,', 'kontenjan değişimleri ve tercih listesi'],
        badge: 'YÖK ATLAS VE TERCİH DANIŞMANLIĞI',
        gradId: 'tercihGrad',
        colors: ['#0d9488', '#0f766e', '#115e59'],
        art: `
      <rect x="0" y="20" width="440" height="460" rx="32" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
      <!-- University Campus Building vector -->
      <g transform="translate(100, 60)">
        <!-- Roof pediment -->
        <polygon points="120,20 20,70 220,70" fill="#2dd4bf" opacity="0.8" />
        <rect x="30" y="70" width="180" height="15" fill="#0f766e" />
        <!-- Pillars -->
        <rect x="45" y="85" width="20" height="100" fill="#ffffff" rx="4" />
        <rect x="85" y="85" width="20" height="100" fill="#ffffff" rx="4" />
        <rect x="135" y="85" width="20" height="100" fill="#ffffff" rx="4" />
        <rect x="175" y="85" width="20" height="100" fill="#ffffff" rx="4" />
        <rect x="20" y="185" width="200" height="15" fill="#0f766e" />
      </g>
      <!-- 24 Choices List Mockup -->
      <g transform="translate(50, 280)">
        <rect width="340" height="140" rx="18" fill="rgba(15,23,42,0.9)" stroke="#14b8a6" stroke-width="1.5" />
        <text x="25" y="35" fill="#2dd4bf" font-size="14" font-weight="bold">1. Tercih: Hedef (%20 Üst Sıralama)</text>
        <line x1="25" y1="48" x2="315" y2="48" stroke="rgba(255,255,255,0.1)" />
        <text x="25" y="75" fill="#ffffff" font-size="14" font-weight="bold">2-18. Tercih: Gerçekçi Sıralama Bandı</text>
        <line x1="25" y1="88" x2="315" y2="88" stroke="rgba(255,255,255,0.1)" />
        <text x="25" y="115" fill="#99f6e4" font-size="14" font-weight="bold">19-24. Tercih: Güvenli Liman (%30 Altı)</text>
      </g>
    `
    },
    {
        id: 'tyt-net-artirma-taktikleri',
        title: ['TYT Net Artırma', 'Taktikleri'],
        subtitle: ['Deneme analizi, süre yönetimi,', 'turlama tekniği ve eksik kapatma'],
        badge: 'NET GELİŞİM REHBERİ',
        gradId: 'artirmaGrad',
        colors: ['#06b6d4', '#0891b2', '#0e7490'],
        art: `
      <rect x="0" y="20" width="440" height="460" rx="32" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
      <!-- Flying Rocket -->
      <g transform="translate(190, 80)">
        <!-- Rocket Body -->
        <path d="M 30 10 Q 70 30 70 90 L 50 110 L 10 110 L -10 90 Q -10 30 30 10 Z" fill="#ffffff" />
        <circle cx="30" cy="55" r="14" fill="#06b6d4" />
        <!-- Wings -->
        <polygon points="-10,90 -30,120 0,110" fill="#f43f5e" />
        <polygon points="70,90 90,120 60,110" fill="#f43f5e" />
        <!-- Fire -->
        <polygon points="15,110 30,150 45,110" fill="#fbbf24" filter="url(#glow)" />
      </g>
      <!-- Stepped Net Progress -->
      <g transform="translate(60, 260)">
        <rect x="0" y="70" width="80" height="70" rx="10" fill="rgba(6,182,212,0.3)" />
        <text x="40" y="110" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">45</text>
        <text x="40" y="130" text-anchor="middle" fill="#67e8f9" font-size="11">Başlangıç</text>

        <rect x="110" y="35" width="80" height="105" rx="10" fill="rgba(6,182,212,0.6)" />
        <text x="150" y="80" text-anchor="middle" fill="#ffffff" font-size="18" font-weight="bold">75</text>
        <text x="150" y="100" text-anchor="middle" fill="#e0f2fe" font-size="11">Deneme</text>

        <rect x="220" y="0" width="80" height="140" rx="10" fill="#06b6d4" filter="url(#glow)" />
        <text x="260" y="50" text-anchor="middle" fill="#ffffff" font-size="22" font-weight="bold">100+</text>
        <text x="260" y="70" text-anchor="middle" fill="#ffffff" font-size="11">Hedef</text>
      </g>
    `
    },
    {
        id: 'yks-yigilma-tehlikesi',
        title: ['YKS Yığılma Nedir?', 'Nasıl Önlem Alınır?'],
        subtitle: ['50 bin - 150 bin bandındaki aday yoğunluğu,', 'kolay sınav etkisi ve OBP kırıcıları'],
        badge: 'İSTATİSTİKSEL ANALİZ',
        gradId: 'yigilmaGrad',
        colors: ['#e11d48', '#be123c', '#9f1239'],
        art: `
      <rect x="0" y="20" width="440" height="460" rx="32" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
      <!-- Gaussian Bell Curve with high peak -->
      <path d="M 40 380 Q 140 380 180 280 Q 220 80 260 280 Q 300 380 400 380" fill="none" stroke="#f43f5e" stroke-width="4" filter="url(#glow)" />
      <!-- Shaded Yığılma Zone -->
      <path d="M 180 280 Q 220 80 260 280 L 260 380 L 180 380 Z" fill="rgba(244,63,94,0.3)" />
      <!-- Danger Alert Tag -->
      <g transform="translate(145, 110)">
        <rect width="150" height="44" rx="12" fill="rgba(15,23,42,0.9)" stroke="#fb7185" stroke-width="2" />
        <text x="75" y="28" text-anchor="middle" fill="#fda4af" font-size="14" font-weight="bold">⚠️ YIĞILMA BÖLGESİ</text>
      </g>
      <text x="220" y="220" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">~350.000 Aday</text>
      <text x="220" y="245" text-anchor="middle" fill="#fca5a5" font-size="13">0.5 Net Fark = 15.000 Sıra</text>
    `
    },
    {
        id: 'yks-puan-turleri',
        title: ['YKS Puan Türleri', 'Rehberi'],
        subtitle: ['TYT, SAY, EA, SÖZ ve DİL', 'puanları hangi bölümlerde geçerli?'],
        badge: 'GENEL KILAVUZ REHBERİ',
        gradId: 'puanTurGrad',
        colors: ['#6366f1', '#4f46e5', '#4338ca'],
        art: `
      <rect x="0" y="20" width="440" height="460" rx="32" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
      <g transform="translate(40, 50)">
        <rect x="0" y="0" width="165" height="165" rx="20" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2" />
        <text x="25" y="45" fill="#34d399" font-size="28" font-weight="900">SAY</text>
        <text x="25" y="75" fill="#ffffff" font-size="15" font-weight="bold">Sayısal</text>
        <text x="25" y="110" fill="#a7f3d0" font-size="12">Tıp, Diş Hekimliği,</text>
        <text x="25" y="130" fill="#a7f3d0" font-size="12">Mühendislikler</text>
      </g>
      <g transform="translate(235, 50)">
        <rect x="0" y="0" width="165" height="165" rx="20" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2" />
        <text x="25" y="45" fill="#60a5fa" font-size="28" font-weight="900">EA</text>
        <text x="25" y="75" fill="#ffffff" font-size="15" font-weight="bold">Eşit Ağırlık</text>
        <text x="25" y="110" fill="#bfdbfe" font-size="12">Hukuk, Psikoloji,</text>
        <text x="25" y="130" fill="#bfdbfe" font-size="12">İşletme, İktisat</text>
      </g>
      <g transform="translate(40, 245)">
        <rect x="0" y="0" width="165" height="165" rx="20" fill="rgba(168,85,247,0.2)" stroke="#a855f7" stroke-width="2" />
        <text x="25" y="45" fill="#c084fc" font-size="28" font-weight="900">SÖZ</text>
        <text x="25" y="75" fill="#ffffff" font-size="15" font-weight="bold">Sözel</text>
        <text x="25" y="110" fill="#e9d5ff" font-size="12">İletişim, Gastronomi,</text>
        <text x="25" y="130" fill="#e9d5ff" font-size="12">Tarih, Coğrafya</text>
      </g>
      <g transform="translate(235, 245)">
        <rect x="0" y="0" width="165" height="165" rx="20" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" stroke-width="2" />
        <text x="25" y="45" fill="#fbbf24" font-size="28" font-weight="900">DİL</text>
        <text x="25" y="75" fill="#ffffff" font-size="15" font-weight="bold">Yabancı Dil</text>
        <text x="25" y="110" fill="#fde68a" font-size="12">İng. Öğretmenliği,</text>
        <text x="25" y="130" fill="#fde68a" font-size="12">Tercümanlık</text>
      </g>
    `
    },
    {
        id: 'yks-kac-net-kac-puan',
        title: ['Kaç Net', 'Kaç Puan Getirir?'],
        subtitle: ['TYT ve AYT netlerinin puana dönüşümü,', 'bölüm bazlı ortalama net gereksinimleri'],
        badge: 'PUAN DÖNÜŞÜM TABLOLARI',
        gradId: 'kacNetGrad',
        colors: ['#059669', '#0d9488', '#0284c7'],
        art: `
      <rect x="0" y="20" width="440" height="460" rx="32" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
      <g transform="translate(45, 60)">
        <rect width="350" height="90" rx="18" fill="rgba(16,185,129,0.2)" stroke="#10b981" stroke-width="2" />
        <text x="25" y="38" fill="#6ee7b7" font-size="14" font-weight="bold">TIP FAKÜLTESİ HEDEFİ</text>
        <text x="25" y="72" fill="#ffffff" font-size="22" font-weight="900">TYT: 100+ | AYT: 68+ Net</text>
      </g>
      <g transform="translate(45, 175)">
        <rect width="350" height="90" rx="18" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2" />
        <text x="25" y="38" fill="#93c5fd" font-size="14" font-weight="bold">HUKUK FAKÜLTESİ HEDEFİ</text>
        <text x="25" y="72" fill="#ffffff" font-size="22" font-weight="900">TYT: 75+ | AYT EA: 52+ Net</text>
      </g>
      <g transform="translate(45, 290)">
        <rect width="350" height="90" rx="18" fill="rgba(168,85,247,0.2)" stroke="#a855f7" stroke-width="2" />
        <text x="25" y="38" fill="#d8b4fe" font-size="14" font-weight="bold">MÜHENDİSLİK HEDEFİ</text>
        <text x="25" y="72" fill="#ffffff" font-size="22" font-weight="900">TYT: 80+ | AYT: 50+ Net</text>
      </g>
      <text x="220" y="425" text-anchor="middle" fill="#94a3b8" font-size="13">ÖSYM Geçmiş Yıl Yığınsal Verileri Referans Alınmıştır</text>
    `
    }
];

illustrations.forEach(item => {
    const svgContent = svgWrapper(item.title, item.subtitle, item.badge, item.gradId, item.colors, item.art);
    const filePath = path.join(targetDir, `${item.id}.svg`);
    fs.writeFileSync(filePath, svgContent, 'utf8');
    console.log(`Created: ${filePath}`);
});

console.log("All 13 blog SVG illustrations generated successfully!");
