export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "YKS Net Hesaplama",
        "description": "YKS 2026 net hesaplama aracı ile TYT, AYT ve YDT netlerinizi hesaplayın. Üniversite puanlarınızı öğrenin.",
        "url": "https://yksnethesapla.com",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web Browser",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "TRY"
        },
        "creator": {
            "@type": "Person",
            "name": "Mert Çalışkan",
            "url": "https://github.com/mert121212"
        },
        "publisher": {
            "@type": "Organization",
            "name": "YKS Net Hesaplama",
            "url": "https://yksnethesapla.com"
        },
        "inLanguage": "tr-TR",
        "keywords": [
            "YKS net hesaplama",
            "TYT net hesaplama",
            "AYT net hesaplama",
            "YDT net hesaplama",
            "üniversite puan hesaplama",
            "YKS 2026"
        ],
        "featureList": [
            "TYT Net Hesaplama",
            "AYT Net Hesaplama",
            "YDT Net Hesaplama",
            "Üniversite Puan Hesaplama",
            "YKS Geri Sayım",
            "SAY EA SÖZ DİL Puan Hesaplama"
        ],
        "screenshot": "https://yksnethesapla.com/og-image.png"
    }

    const howToData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "YKS Net Hesaplama Nasıl Yapılır?",
        "description": "YKS sınavında aldığınız doğru ve yanlış sayılarını kullanarak net hesaplama yapın ve üniversite puanlarınızı öğrenin.",
        "image": "https://yksnethesapla.com/og-image.png",
        "totalTime": "PT5M",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "TRY",
            "value": "0"
        },
        "tool": [
            {
                "@type": "HowToTool",
                "name": "YKS Net Hesaplama Aracı"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "name": "TYT Netlerini Girin",
                "text": "TYT sınavında aldığınız Türkçe, Matematik, Sosyal Bilimler ve Fen Bilimleri derslerinden doğru ve yanlış sayılarınızı girin.",
                "position": 1
            },
            {
                "@type": "HowToStep",
                "name": "AYT Netlerini Girin",
                "text": "AYT sınavında aldığınız Matematik, Fizik, Kimya, Biyoloji, Edebiyat, Tarih, Coğrafya, Felsefe ve Din Kültürü derslerinden doğru ve yanlış sayılarınızı girin.",
                "position": 2
            },
            {
                "@type": "HowToStep",
                "name": "YDT Netlerini Girin (Opsiyonel)",
                "text": "Yabancı Dil Testi'ne girdiyseniz, YDT'den aldığınız doğru ve yanlış sayılarını girin.",
                "position": 3
            },
            {
                "@type": "HowToStep",
                "name": "OBP'nizi Girin",
                "text": "Ortaöğretim Başarı Puanınızı (lise diploma notunuzu) 0-100 arasında girin. Gerekirse OBP katsayı seçeneklerini işaretleyin.",
                "position": 4
            },
            {
                "@type": "HowToStep",
                "name": "Sonuçlarınızı Görün",
                "text": "Sistem otomatik olarak TYT, AYT ve YDT netlerinizi hesaplar. SAY, EA, SÖZ ve DİL puan türlerinden aldığınız puanları ve tahmini sıralamalarınızı görüntüleyin.",
                "position": 5
            }
        ]
    }

    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Ana Sayfa",
                "item": "https://yksnethesapla.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "YKS Net Hesaplama",
                "item": "https://yksnethesapla.com/#hesaplama"
            }
        ]
    }

    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "YKS net hesaplama nasıl yapılır?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "YKS net hesaplama formülü: Net = Doğru Sayısı - (Yanlış Sayısı ÷ 4). Örneğin 30 doğru, 8 yanlış yaparsanız: 30 - (8÷4) = 28 net. Boş bırakılan sorular hesaplamayı etkilemez."
                }
            },
            {
                "@type": "Question",
                "name": "YKS 2026 ne zaman?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "YKS 2026 sınavı iki gün olarak yapılacaktır. TYT (Temel Yeterlilik Testi) 20 Haziran 2026 Cumartesi, AYT (Alan Yeterlilik Testi) ve YDT (Yabancı Dil Testi) 21 Haziran 2026 Pazar günü uygulanacaktır."
                }
            },
            {
                "@type": "Question",
                "name": "TYT'de baraj puanı var mı?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hayır. 2022 yılından itibaren TYT'de 150 puan barajı uygulaması tamamen kaldırılmıştır. Puanınızın hesaplanması için Türkçe veya Matematik testinden en az 0,5 net yapmanız yeterlidir."
                }
            },
            {
                "@type": "Question",
                "name": "OBP nedir ve nasıl hesaplanır?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "OBP (Ortaöğretim Başarı Puanı), lise diploma notunuzun YKS puanına katkısıdır. Formül: Diploma Notu × 0,6 = Puan Katkısı. Örneğin diploma notu 85 olan bir aday +51 puan katkı alır. Geçen yıl yerleşenler için katsayı yarıya düşer."
                }
            },
            {
                "@type": "Question",
                "name": "TYT'de kaç soru var?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TYT'de toplam 120 soru vardır: Türkçe 40, Matematik 40, Sosyal Bilimler 20, Fen Bilimleri 20 soru. Toplam süre 165 dakikadır."
                }
            },
            {
                "@type": "Question",
                "name": "AYT'de kaç soru var?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AYT'de toplam 80 soru vardır. Sayısal: Matematik 40, Fizik 14, Kimya 13, Biyoloji 13. Sözel: Edebiyat 24, Tarih-1 10, Coğrafya-1 6, Tarih-2 11, Coğrafya-2 11, Felsefe 12, Din 6 soru."
                }
            },
            {
                "@type": "Question",
                "name": "SAY, EA, SÖZ, DİL puanı nedir?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "YKS'de 4 puan türü vardır. SAY (Sayısal): Mühendislik, Tıp için. EA (Eşit Ağırlık): Hukuk, İktisat için. SÖZ (Sözel): Edebiyat, Tarih için. DİL (Yabancı Dil): Yabancı dil bölümleri için kullanılır."
                }
            },
            {
                "@type": "Question",
                "name": "YKS'ye kaç gün kaldı?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "YKS 2026 sınavına kalan süreyi canlı olarak yksnethesapla.com/geri-sayim adresindeki geri sayım sayfamızdan takip edebilirsiniz. TYT 20 Haziran 2026, AYT 21 Haziran 2026 tarihinde yapılacaktır."
                }
            }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
            />
        </>
    )
}