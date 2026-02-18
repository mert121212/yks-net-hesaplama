# SEO Geliştirme Planı - YKS Net Hesaplama

## 🎯 ÖNCELIK 1: İçerik Genişletme (En Önemli!)

### 1.1 Blog/Makale Bölümü Ekle
**Neden Önemli:** Google içerik zenginliğini sever. Blog yazıları organik trafik çeker.

**Eklenecek Sayfalar:**
- `/blog/yks-2026-degisiklikler` - YKS 2026'da neler değişti?
- `/blog/tyt-matematik-cozum-teknikleri` - TYT Matematik nasıl çözülür?
- `/blog/ayt-fen-calisma-plani` - AYT Fen için 3 aylık çalışma planı
- `/blog/yks-puan-turleri-rehberi` - SAY, EA, SÖZ, DİL puan türleri
- `/blog/obp-nedir-nasil-hesaplanir` - OBP detaylı rehber
- `/blog/universite-tercih-stratejileri` - Tercih yaparken dikkat edilecekler
- `/blog/yks-sinav-gunu-onerileri` - Sınav günü taktikleri
- `/blog/tyt-ayt-farklar` - TYT ve AYT arasındaki farklar

**SEO Etkisi:** Her makale 1000+ kelime, hedef keyword'ler, internal linkler → Organik trafik 3-5x artış

---

## 🎯 ÖNCELIK 2: Dinamik Sayfa Oluşturma

### 2.1 Üniversite Detay Sayfaları
**URL Yapısı:** `/universiteler/[slug]`
- `/universiteler/istanbul-universitesi`
- `/universiteler/bogazici-universitesi`
- `/universiteler/odtu`

**İçerik:**
- Üniversite hakkında bilgi
- Taban puanları (SAY, EA, SÖZ, DİL)
- Bölümler ve kontenjanlar
- Kampüs bilgileri
- YKS ile giriş koşulları

**SEO Etkisi:** 100+ üniversite sayfası = 100+ indexed page → Google'da daha fazla görünürlük

### 2.2 Bölüm Detay Sayfaları
**URL Yapısı:** `/bolumler/[slug]`
- `/bolumler/bilgisayar-muhendisligi`
- `/bolumler/tip-fakultesi`
- `/bolumler/hukuk-fakultesi`

**İçerik:**
- Bölüm tanıtımı
- Hangi üniversitelerde var?
- Taban puanları
- Mezuniyet sonrası kariyer
- Gerekli YKS puanı

**SEO Etkisi:** Long-tail keyword'lerde üst sıralara çıkma

---

## 🎯 ÖNCELIK 3: Teknik SEO İyileştirmeleri

### 3.1 robots.ts Güncelleme
```typescript
// Şu anda baseUrl hala eski domain kullanıyor!
const baseUrl = 'https://yksnethesapla.com' // Hardcode et
```

### 3.2 OG Image Oluştur
**Eksik:** `/public/og-image.png` dosyası yok!
- 1200x630 boyutunda
- "YKS Net Hesaplama 2026" yazısı
- Görsel çekici tasarım
- Brand renkleri (mavi tonları)

### 3.3 Favicon ve Icons
**Kontrol Et:**
- `/public/favicon.ico` var mı?
- `/public/icon.svg` var mı?
- `/public/site.webmanifest` doğru mu?

### 3.4 Internal Linking Stratejisi
**Şu Anda:** Footer'da linkler var ama yeterli değil

**Ekle:**
- Ana sayfada "İlgili Makaleler" bölümü
- Her sayfada "Sıradaki: ..." önerisi
- Breadcrumb navigation (zaten schema var, UI'da göster)
- Sidebar'da "Popüler Sayfalar"

---

## 🎯 ÖNCELIK 4: Kullanıcı Deneyimi (UX) İyileştirmeleri

### 4.1 Hızlı Hesaplama Butonları
**Ekle:** Örnek senaryolar
- "Örnek: 80 TYT Neti" butonu → Otomatik doldur
- "Örnek: Tıp Adayı" → Yüksek puanlı örnek
- "Örnek: Orta Seviye" → Ortalama örnek

**SEO Etkisi:** Daha fazla engagement → Daha düşük bounce rate → Daha iyi ranking

### 4.2 Sonuç Paylaşma
**Ekle:** "Sonuçlarımı Paylaş" butonu
- Twitter paylaşımı
- WhatsApp paylaşımı
- Link kopyalama
- Screenshot alma

**SEO Etkisi:** Social signals → Backlink potansiyeli

### 4.3 Karşılaştırma Aracı
**Yeni Sayfa:** `/karsilastir`
- 2 farklı hesaplama yan yana
- "Geçen yıl vs Bu yıl" karşılaştırması
- "Hedef vs Gerçek" karşılaştırması

---

## 🎯 ÖNCELIK 5: Schema Markup Genişletme

### 5.1 Mevcut Schema'lar ✅
- WebApplication ✅
- BreadcrumbList ✅
- FAQPage ✅

### 5.2 Eklenecek Schema'lar
**HowTo Schema:**
```json
{
  "@type": "HowTo",
  "name": "YKS Net Hesaplama Nasıl Yapılır?",
  "step": [
    {"@type": "HowToStep", "text": "TYT doğru ve yanlışlarınızı girin"},
    {"@type": "HowToStep", "text": "AYT doğru ve yanlışlarınızı girin"},
    {"@type": "HowToStep", "text": "OBP'nizi girin"},
    {"@type": "HowToStep", "text": "Sonuçlarınızı görün"}
  ]
}
```

**VideoObject Schema (Eğer video eklerseniz):**
- YouTube'da "YKS Net Hesaplama Nasıl Kullanılır?" videosu
- Schema ile Google'da video snippet

---

## 🎯 ÖNCELIK 6: Local SEO (Opsiyonel)

### 6.1 Şehir Bazlı Sayfalar
**URL:** `/universiteler/[sehir]`
- `/universiteler/istanbul`
- `/universiteler/ankara`
- `/universiteler/izmir`

**İçerik:**
- O şehirdeki üniversiteler
- Taban puanları
- Yaşam maliyeti
- Öğrenci yorumları

---

## 🎯 ÖNCELIK 7: Backlink Stratejisi

### 7.1 Hedef Siteler
**Eğitim Forumları:**
- uludagsozluk.com (YKS başlıkları)
- ekşisözlük.com (YKS entry'leri)
- Reddit r/Turkey

**Eğitim Siteleri:**
- Öğrenci blogları
- Dershane siteleri
- Eğitim haber siteleri

**Sosyal Medya:**
- Twitter: #YKS2026 hashtag'i
- Instagram: YKS hesapları
- TikTok: Eğitim içerik üreticileri

### 7.2 Guest Post Fırsatları
- "YKS 2026 Hazırlık Rehberi" makalesi yaz
- Diğer eğitim sitelerine gönder
- Makale sonunda siteye link ver

---

## 🎯 ÖNCELIK 8: Performans Optimizasyonu

### 8.1 Mevcut Durum ✅
- Bundle size: 179 kB ✅
- Lighthouse: 100/100 ✅
- Image optimization: ✅

### 8.2 İyileştirmeler
**Ekle:**
- Service Worker (PWA)
- Offline çalışma
- "Ana ekrana ekle" özelliği

**SEO Etkisi:** Core Web Vitals → Google ranking faktörü

---

## 🎯 ÖNCELIK 9: Kullanıcı İçeriği (UGC)

### 9.1 Yorum Sistemi
**Ekle:** Her sayfada yorum bölümü
- "Bu hesaplama aracını nasıl buldunuz?"
- "Hangi üniversiteyi hedefliyorsunuz?"
- Moderasyon gerekli

**SEO Etkisi:** Fresh content → Google sık sık indexler

### 9.2 Başarı Hikayeleri
**Yeni Sayfa:** `/basari-hikayeleri`
- Kullanıcıların YKS başarı hikayeleri
- "Bu aracı kullandım, şu üniversiteyi kazandım"
- Fotoğraf + hikaye

---

## 🎯 ÖNCELIK 10: Analytics ve Tracking

### 10.1 Mevcut ✅
- Google Analytics ✅
- Google Search Console (kurulacak) ⏳

### 10.2 Ekle
**Heatmap:**
- Hotjar veya Microsoft Clarity
- Kullanıcılar nereye tıklıyor?
- Hangi bölümler okunuyor?

**Event Tracking:**
- "Hesaplama Yapıldı" eventi
- "Üniversite Önerileri Görüntülendi" eventi
- "Sonuç Paylaşıldı" eventi

---

## 📊 UYGULAMA ÖNCELİK SIRASI

### Hemen Yapılacaklar (1 Hafta)
1. ✅ robots.ts domain güncelleme
2. ✅ OG image oluştur ve ekle
3. ✅ Favicon/icons kontrol
4. ✅ Internal linking güçlendir
5. ✅ HowTo schema ekle

### Kısa Vadede (1 Ay)
1. Blog bölümü kur (5-10 makale)
2. Üniversite detay sayfaları (ilk 20 üniversite)
3. Sonuç paylaşma özelliği
4. Örnek hesaplama butonları
5. Google Search Console'a sitemap submit

### Orta Vadede (3 Ay)
1. 50+ blog makalesi
2. 100+ üniversite sayfası
3. Bölüm detay sayfaları
4. Karşılaştırma aracı
5. Backlink kampanyası başlat

### Uzun Vadede (6+ Ay)
1. Kullanıcı yorumları sistemi
2. Başarı hikayeleri
3. Video içerik
4. PWA özellikleri
5. Mobil uygulama (opsiyonel)

---

## 🎯 BEKLENEN SONUÇLAR

### 1 Ay Sonra:
- Google'da indexlenen sayfa: 6 → 30+
- Organik trafik: +50%
- Anahtar kelime sıralaması: İlk 50'ye giriş

### 3 Ay Sonra:
- Google'da indexlenen sayfa: 100+
- Organik trafik: +200%
- Anahtar kelime sıralaması: İlk 20'ye giriş
- Backlink sayısı: 10+

### 6 Ay Sonra:
- Google'da indexlenen sayfa: 200+
- Organik trafik: +500%
- Anahtar kelime sıralaması: İlk 10'a giriş
- Backlink sayısı: 50+
- Domain Authority: 20+

### 12 Ay Sonra:
- "YKS net hesaplama" için ilk 3'te
- Günlük 5000+ ziyaretçi
- Domain Authority: 30+
- Backlink sayısı: 100+

---

## 💡 HIZLI KAZANIMLAR (Quick Wins)

Bu değişiklikler hemen yapılabilir ve etkisi hızlı görülür:

1. **robots.ts domain fix** (5 dakika)
2. **OG image ekle** (30 dakika)
3. **Meta description'ları optimize et** (1 saat)
4. **Internal linking ekle** (2 saat)
5. **HowTo schema ekle** (1 saat)
6. **SSS sayfasını genişlet** (2 saat)
7. **Footer'a daha fazla link** (30 dakika)
8. **Breadcrumb UI ekle** (1 saat)

**Toplam Süre:** 1 gün
**Beklenen Etki:** +20-30% SEO skoru artışı

---

## 🚀 SONUÇ

En kritik 3 şey:
1. **İçerik, içerik, içerik!** Blog yazıları en önemli
2. **Backlink stratejisi** - Diğer sitelerden link almak şart
3. **Kullanıcı deneyimi** - Bounce rate düşük olmalı

Şu anda sitenin teknik SEO'su mükemmel (100/100 Lighthouse). Eksik olan sadece içerik ve backlink!
