# Üniversite Verileri API Araştırması

## Araştırma Sonuçları

### ÖSYM Resmi API
**Durum:** ❌ YOK

ÖSYM'nin resmi bir açık veri API'si bulunmuyor. ÖSYM sadece PDF ve web sayfaları üzerinden veri yayınlıyor.

### Alternatif Çözümler

#### 1. GitHub - Universities in Turkey API
**URL:** https://github.com/nejdetkadir/universities-in-turkey-api
**Durum:** ⚠️ Sınırlı

- Sadece üniversite listesi var
- Taban puanları ve YKS verileri YOK
- Unofficial API
- Güncel değil

#### 2. Başarı Sıralamaları (basarisiralamalari.com)
**Durum:** ⚠️ Web Scraping Gerekli

- En kapsamlı YKS verileri
- API yok, sadece web sitesi
- Web scraping yapılabilir ama:
  - Yasal sorunlar olabilir
  - Site yapısı değişirse bozulur
  - Rate limiting olabilir

#### 3. Diğer Siteler
- **netpuanlar.com** - API yok
- **tabanpuanlari.net** - API yok
- **yokatlas.yok.gov.tr** - API yok (YÖK resmi sitesi)

## Mevcut Seçenekler

### Seçenek 1: Manuel Veri Girişi (Şu Anki Yaklaşım) ✅
**Avantajlar:**
- Tam kontrol
- Güvenilir veriler
- API bağımlılığı yok
- Maliyet yok
- Hızlı (bundle içinde)

**Dezavantajlar:**
- Manuel güncelleme gerekir
- Her yıl YKS sonrası güncelleme

**Maliyet:** $0
**Süre:** Yılda 1 kez güncelleme (2-3 saat)

### Seçenek 2: Web Scraping
**Avantajlar:**
- Otomatik veri çekme
- Güncel veriler

**Dezavantajlar:**
- Yasal riskler
- Site yapısı değişirse bozulur
- Rate limiting
- Sunucu maliyeti
- Karmaşık bakım

**Maliyet:** $20-50/ay (sunucu + proxy)
**Süre:** İlk kurulum 1 hafta, sürekli bakım

### Seçenek 3: Kendi API'mizi Oluştur
**Avantajlar:**
- Tam kontrol
- Diğer geliştiricilere de hizmet
- Potansiyel gelir kaynağı

**Dezavantajlar:**
- Yüksek maliyet
- Sürekli bakım
- Veri toplama sorumluluğu

**Maliyet:** $100-200/ay (sunucu + veritabanı)
**Süre:** İlk kurulum 2-3 hafta

### Seçenek 4: ÖSYM PDF'lerini Parse Et
**Avantajlar:**
- Resmi kaynak
- Güvenilir

**Dezavantajlar:**
- PDF parsing zor
- Yılda 1 kez manuel işlem
- Hata riski yüksek

**Maliyet:** $0
**Süre:** Yılda 1 kez (4-5 saat)

## Önerilen Yaklaşım

### Kısa Vadede (Şimdi)
**Manuel Veri Girişi** (Mevcut yaklaşım)

**Neden?**
1. ✅ Zaten 405 program var
2. ✅ Maliyet yok
3. ✅ Hızlı ve güvenilir
4. ✅ API bağımlılığı yok
5. ✅ Yasal sorun yok

### Orta Vadede (3-6 Ay)
**ÖSYM PDF Parser Oluştur**

**Adımlar:**
1. 2026 YKS sonuçları açıklandığında (Temmuz 2026)
2. ÖSYM'nin yayınladığı PDF'leri indir
3. PDF parsing scripti yaz (Python + pdfplumber)
4. Verileri JSON'a çevir
5. universities.ts'yi güncelle

**Tahmini Süre:** 1 gün
**Maliyet:** $0

### Uzun Vadede (1+ Yıl)
**Topluluk Destekli Açık Veri Projesi**

**Fikir:**
1. GitHub'da açık kaynak proje oluştur
2. YKS verilerini JSON formatında paylaş
3. Diğer geliştiricilerin katkısını al
4. Her yıl topluluk olarak güncelle

**Avantajlar:**
- Açık kaynak
- Topluluk desteği
- Diğer projelere de fayda
- SEO için backlink

## Sonuç ve Tavsiye

**Şu an için en iyi çözüm:** Manuel veri girişi (mevcut yaklaşım)

**Neden?**
1. ÖSYM'nin resmi API'si yok
2. Web scraping yasal ve teknik riskli
3. Mevcut 405 program yeterli
4. Yılda 1 kez güncelleme kabul edilebilir
5. Maliyet $0

**2026 YKS Sonrası Plan:**
1. ÖSYM PDF'lerini bekle (Temmuz 2026)
2. PDF parsing scripti yaz
3. Tüm üniversite verilerini güncelle (1000+ program)
4. Açık kaynak olarak GitHub'da paylaş

**Uzun Vadeli Vizyon:**
- Türkiye'nin en kapsamlı açık YKS veri kaynağı ol
- API oluştur ve diğer geliştiricilere sun
- Topluluk destekli proje yap

## Teknik Detaylar

### PDF Parsing için Gerekli Araçlar:
```python
# Python ile ÖSYM PDF parsing
import pdfplumber
import json

def parse_osym_pdf(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            table = page.extract_table()
            # Parse table data
            # Convert to JSON
    return data
```

### Veri Formatı:
```json
{
  "university": "Hacettepe Üniversitesi",
  "program": "Tıp Fakültesi",
  "city": "Ankara",
  "field": "SAY",
  "minScore": 560,
  "minRank": 100,
  "quota": 180,
  "year": 2026
}
```

## Kaynaklar

1. **ÖSYM Resmi:** https://www.osym.gov.tr
2. **YÖK Atlas:** https://yokatlas.yok.gov.tr
3. **Başarı Sıralamaları:** https://www.basarisiralamalari.com
4. **GitHub - Universities API:** https://github.com/nejdetkadir/universities-in-turkey-api

## Sonuç

Şu an için API'ye ihtiyaç yok. Mevcut manuel yaklaşım en iyi çözüm. 2026 YKS sonrası PDF parsing ile otomatik güncelleme yapabiliriz.
