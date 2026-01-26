# YKS Net Hesaplama Uygulaması

YKS (Yükseköğretim Kurumları Sınavı) için geliştirilmiş modern, hızlı ve SEO dostu net hesaplama uygulaması.

## 🚀 Özellikler

- **TYT Net Hesaplama**: Türkçe, Matematik, Sosyal Bilimler, Fen Bilimleri
- **AYT Net Hesaplama**: Tüm alan dersleri için detaylı hesaplama
- **YDT Net Hesaplama**: Yabancı dil testi hesaplama
- **Üniversite Puan Hesaplama**: SAY, EA, SÖZ, DİL alanları için puan hesaplama
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- **SEO Optimizasyonu**: Arama motorları için optimize edilmiş
- **Hızlı Performans**: Next.js 14 ve modern teknolojiler

## 🛠️ Teknolojiler

- **Framework**: Next.js 14 (App Router)
- **Dil**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animasyonlar**: Framer Motion
- **SEO**: Next.js SEO optimizasyonları

## 📦 Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda `http://localhost:3000` adresini açın.

## 🏗️ Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Ana layout
│   ├── page.tsx           # Ana sayfa
│   └── globals.css        # Global stiller
├── components/            # React bileşenleri
│   ├── ScoreInput.tsx     # Skor giriş bileşeni
│   └── TYTSection.tsx     # TYT bölümü
├── types/                 # TypeScript tip tanımları
│   └── yks.ts            # YKS ile ilgili tipler
└── utils/                 # Yardımcı fonksiyonlar
    └── yksCalculator.ts   # Net hesaplama fonksiyonları
```

## 🎯 Gelecek Özellikler

- [ ] AYT bölümü tamamlanması
- [ ] YDT bölümü tamamlanması
- [ ] Geçmiş hesaplamalar kaydetme
- [ ] Üniversite karşılaştırma aracı
- [ ] Hedef belirleme sistemi
- [ ] İstatistik ve analiz araçları
- [ ] PWA desteği
- [ ] Dark mode

## 📱 SEO Özellikleri

- Meta etiketleri optimizasyonu
- Open Graph desteği
- Twitter Card desteği
- Structured data
- Sitemap otomatik oluşturma
- Robots.txt optimizasyonu

## 🚀 Deployment

```bash
# Production build
npm run build

# Production sunucusu
npm start
```

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add some amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

Sorularınız için issue açabilir veya pull request gönderebilirsiniz.