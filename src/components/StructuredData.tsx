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
                    "text": "YKS net hesaplama için doğru cevap sayısından yanlış cevap sayısının 4'te birini çıkarmanız gerekir. Örneğin: 30 doğru, 8 yanlış = 30 - (8/4) = 28 net."
                }
            },
            {
                "@type": "Question",
                "name": "TYT'de kaç soru var?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TYT'de toplam 120 soru vardır. Türkçe 40, Matematik 40, Sosyal Bilimler 20, Fen Bilimleri 20 soru bulunur."
                }
            },
            {
                "@type": "Question",
                "name": "AYT'de kaç soru var?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AYT'de toplam 103 soru vardır. Matematik 40, Fizik 14, Kimya 13, Biyoloji 13, Edebiyat 24, Tarih-1 10, Coğrafya-1 6, Tarih-2 11, Coğrafya-2 11, Felsefe 12, Din 6 soru bulunur."
                }
            },
            {
                "@type": "Question",
                "name": "YKS puanı nasıl hesaplanır?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "YKS puanı TYT ve AYT netlerinize göre hesaplanır. SAY, EA, SÖZ ve DİL olmak üzere 4 farklı puan türü vardır. Her puan türü farklı ders ağırlıklarına sahiptir."
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