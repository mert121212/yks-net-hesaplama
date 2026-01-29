export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "YKS Net Hesaplama",
        "description": "YKS 2026 net hesaplama aracı ile TYT, AYT ve YDT netlerinizi hesaplayın. Üniversite puanlarınızı öğrenin.",
        "url": "https://yks-net-hesaplama.vercel.app",
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
            "url": "https://yks-net-hesaplama.vercel.app"
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
        "screenshot": "https://yks-net-hesaplama.vercel.app/og-image.png"
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
            />
        </>
    )
}