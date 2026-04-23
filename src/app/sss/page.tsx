import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, HelpCircle, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Sıkça Sorulan Sorular (SSS) - YKS Net Hesaplama 2026',
    description: 'YKS net hesaplama, 0,5 net şartı, baraj bilgisi, OBP kırılması, başarı sırası barajları ve 2026 sınav takvimi hakkında sıkça sorulan sorular.',
    keywords: 'yks sss, net hesaplama sss, 0.5 net şartı, baraj puanı, obp kırılması, başarı sırası barajı, yks 2026',
}

const sssFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        { "@type": "Question", "name": "TYT'de baraj puanı var mı?", "acceptedAnswer": { "@type": "Answer", "text": "2022 yılından itibaren TYT'de 150 puan barajı uygulaması tamamen kaldırılmıştır. Türkçe veya Matematik testinden en az 0,5 net yapmanız yeterlidir." } },
        { "@type": "Question", "name": "0,5 net şartı nedir?", "acceptedAnswer": { "@type": "Answer", "text": "TYT puanı için Türkçe veya Temel Matematik'ten en az 0,5 net yapmanız gerekir. Bu şart sağlanmazsa puan hesaplanmaz." } },
        { "@type": "Question", "name": "OBP nedir?", "acceptedAnswer": { "@type": "Answer", "text": "OBP (Ortaöğretim Başarı Puanı), lise diploma notunuzun YKS puanına katkısıdır. Formül: Diploma Notu × 0,6 = Puan Katkısı. Diploma notu 100 ise maksimum 60 puan katkı alırsınız." } },
        { "@type": "Question", "name": "Puan kırılması nedir?", "acceptedAnswer": { "@type": "Answer", "text": "Bir önceki yıl YKS ile bir yükseköğretim programına yerleşen adayların OBP katsayısı yarıya düşer (0,12 yerine 0,06). Bu yaklaşık 20-30 puan kayıp demektir." } },
        { "@type": "Question", "name": "YKS 2026 ne zaman?", "acceptedAnswer": { "@type": "Answer", "text": "TYT 20 Haziran 2026 Cumartesi, AYT ve YDT 21 Haziran 2026 Pazar günü yapılacaktır." } },
        { "@type": "Question", "name": "Hesaplamalarım kaydediliyor mu?", "acceptedAnswer": { "@type": "Answer", "text": "Hayır. Hesaplamalarınız sunucularımıza gönderilmez; tüm işlemler cihazınızda yerel olarak yapılır." } }
    ]
}
export default function SSS() {
    const faqCategories = [
        {
            category: 'Net ve Puan Hesaplama',
            icon: '🧮',
            questions: [
                {
                    q: 'Net nasıl hesaplanır?',
                    a: 'Net hesaplama formülü: Doğru sayısı − (Yanlış sayısı ÷ 4). Örneğin 30 doğru 8 yanlış yaparsanız: 30 − (8÷4) = 28 net olur. Boş bırakılan sorular hesaplamayı etkilemez.'
                },
                {
                    q: 'Negatif net olur mu?',
                    a: 'Evet. Yanlış sayınızın dörtte biri doğru sayınızdan fazlaysa netiniz eksiye düşer. Örneğin 2 doğru, 12 yanlış: 2 − (12÷4) = −1 net. Hesaplama motorumuz negatif netleri 0 olarak işler.'
                },
                {
                    q: 'Standart sapma puanımı nasıl etkiler?',
                    a: 'Sınavın zorluk derecesine göre her yıl katsayılar küçük değişimler gösterir. Türkiye ortalamasının düşük olduğu testlerde (genellikle Matematik ve Fen) yapacağınız netler, standart sapma nedeniyle size daha yüksek puan getirebilir.'
                },
                {
                    q: 'OBP (Diploma Notu) puanı ne kadar etkiler?',
                    a: 'Diploma notunuz 0,6 katsayısı ile çarpılarak puanınıza eklenir (Diploma Notu × 5 = OBP → OBP × 0,12 = Katkı). Diploma notu 100 olan aday 60 puan, 70 olan aday 42 puan katkı alır.'
                },
                {
                    q: 'Boş bıraktığım sorular nete etki eder mi?',
                    a: 'Hayır, boş bıraktığınız sorular net hesaplamasına dahil edilmez. Sadece doğru ve yanlış cevaplar hesaplamaya katılır.'
                }
            ]
        },
        {
            category: 'Baraj ve 0,5 Net Kuralı',
            icon: '⚠️',
            questions: [
                {
                    q: 'TYT\'de baraj puanı var mı?',
                    a: '2022 yılından itibaren TYT\'de 150 puan barajı uygulaması tamamen kaldırılmıştır. Puanınızın hesaplanması için Türkçe veya Matematik testinden en az 0,5 net yapmanız yeterlidir.'
                },
                {
                    q: '0,5 net şartı nedir?',
                    a: 'TYT puanı için Türkçe veya Temel Matematik\'ten en az 0,5 net yapmanız gerekir. AYT puanı için ilgili puan türünün testlerinden (örn. SAY için Matematik veya Fen) en az 0,5 net şarttır. Bu şart sağlanmazsa puan hesaplanmaz.'
                },
                {
                    q: 'Puan kırılması (OBP Kesintisi) nedir?',
                    a: 'Bir önceki yıl YKS ile bir yükseköğretim programına yerleşen adayların OBP katsayısı yarıya düşer (0,12 yerine 0,06). Diploma notu 85 olan bir aday için bu yaklaşık 25 puan kayıp demektir.'
                }
            ]
        },
        {
            category: 'Tercih ve Yerleştirme',
            icon: '🎯',
            questions: [
                {
                    q: 'Tahmini sıralamalar ne kadar güvenilir?',
                    a: 'Sitemizdeki sıralama motoru, 2023, 2024 ve 2025 yılındaki yığılma verilerini ve aday sayılarını baz alarak "en yakın ihtimali" hesaplar. Ancak resmi sonuçlar sadece ÖSYM tarafından açıklanır.'
                },
                {
                    q: 'Başarı sırası barajı nedir?',
                    a: 'Bazı bölümlere girmek için sadece puan yetmez; belli bir sıralama içinde olmanız şarttır. Tıp için ilk 50.000, Hukuk için ilk 125.000, Mimarlık için ilk 250.000, Mühendislik için ilk 300.000 sırası şartı aranır (2025 verileri).'
                },
                {
                    q: 'Taban puanlar her yıl değişir mi?',
                    a: 'Evet, taban puanlar her yıl o bölüme yerleşen son kişinin puanına göre belirlenir. Kontenjan, tercih sayısı ve adayların başarısına göre değişiklik gösterir.'
                }
            ]
        },
        {
            category: '2026 Sınav Takvimi',
            icon: '📅',
            questions: [
                {
                    q: '2026 YKS ne zaman yapılacak?',
                    a: 'ÖSYM takvimine göre TYT 20 Haziran 2026 (Cumartesi), AYT ve YDT 21 Haziran 2026 (Pazar) tarihinde yapılması planlanmaktadır. Güncel geri sayım aracımızı sayfamızın üst kısmında bulabilirsiniz.'
                },
                {
                    q: 'TYT\'de kaç soru var?',
                    a: 'TYT\'de toplam 120 soru vardır: Türkçe 40, Matematik 40, Sosyal Bilimler 20, Fen Bilimleri 20 soru. Toplam süre 165 dakikadır.'
                },
                {
                    q: 'AYT\'de kaç soru var?',
                    a: 'AYT\'de toplam 80 soru vardır. Sayısal: Matematik 40, Fizik 14, Kimya 13, Biyoloji 13. Sözel: Edebiyat 24, Tarih-1 10, Coğrafya-1 6, Tarih-2 11, Coğrafya-2 11, Felsefe 12, Din 6 soru.'
                },
                {
                    q: 'YDT nedir?',
                    a: 'YDT (Yabancı Dil Testi), yabancı dil bölümlerine başvuracak adaylar için yapılan 80 soruluk bir testtir. İngilizce, Almanca, Fransızca, Arapça dillerinden birini seçebilirsiniz.'
                }
            ]
        },
        {
            category: 'Site Kullanımı',
            icon: '💻',
            questions: [
                {
                    q: 'Hesaplamalarım kaydediliyor mu?',
                    a: 'Hayır. Hesaplamalarınız sunucularımıza gönderilmez; tüm işlemler cihazınızda yerel olarak yapılır. Gizliliğiniz tam anlamıyla korunur.'
                },
                {
                    q: 'Mobil cihazdan kullanabilir miyim?',
                    a: 'Evet, sitemiz tüm cihazlarda (telefon, tablet, bilgisayar) sorunsuz çalışacak şekilde tasarlanmıştır.'
                },
                {
                    q: 'Bu site ücretsiz mi?',
                    a: 'Evet, sitemiz tamamen ücretsizdir ve ücretsiz kalacaktır. Kayıt gerektirmez, tüm öğrencilerin kullanımına açıktır.'
                },
                {
                    q: 'Hesaplamalar ÖSYM ile aynı mı?',
                    a: 'Hesaplama formüllerimiz ÖSYM\'nin kullandığı formüllere dayanmaktadır. Ancak ÖSYM standart sapma normalizasyonu kullandığından kesin sonuçlar için ÖSYM\'nin resmi aracını kullanmalısınız. Sitemiz gerçekçi bir tahmin sunar.'
                }
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sssFaqSchema) }} />
            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        <span className="font-medium">Ana Sayfaya Dön</span>
                    </Link>
                </div>
                {/* Page Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                        <HelpCircle className="h-8 w-8 text-primary-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Sıkça Sorulan Sorular
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        YKS net hesaplama, puan hesaplama ve üniversite tercihleri hakkında
                        merak ettiğiniz her şey
                    </p>
                </div>

                {/* FAQ Categories */}
                <div className="space-y-8">
                    {faqCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="card">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">{category.icon}</span>
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {category.category}
                                </h2>
                            </div>

                            <div className="space-y-4">
                                {category.questions.map((faq, faqIndex) => (
                                    <details
                                        key={faqIndex}
                                        className="group bg-gray-50 rounded-lg overflow-hidden"
                                    >
                                        <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-gray-100 transition-colors">
                                            <h3 className="font-semibold text-gray-900 pr-4">
                                                {faq.q}
                                            </h3>
                                            <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                                        </summary>
                                        <div className="px-4 pb-4 pt-2">
                                            <p className="text-gray-700 leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Help Section */}
                <div className="mt-12 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        Sorunuz cevap bulamadı mı?
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Daha fazla bilgi için YKS Rehberi sayfamızı ziyaret edebilir veya
                        ÖSYM'nin resmi web sitesinden detaylı bilgi alabilirsiniz.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/yks-rehberi"
                            className="btn-primary"
                        >
                            YKS Rehberi
                        </Link>
                        <a
                            href="https://www.osym.gov.tr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                        >
                            ÖSYM Web Sitesi
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link
                        href="/"
                        className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all text-center"
                    >
                        <div className="text-2xl mb-2">🧮</div>
                        <div className="font-semibold text-gray-900">Net Hesapla</div>
                    </Link>
                    <Link
                        href="/geri-sayim"
                        className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all text-center"
                    >
                        <div className="text-2xl mb-2">⏰</div>
                        <div className="font-semibold text-gray-900">Geri Sayım</div>
                    </Link>
                    <Link
                        href="/yks-rehberi"
                        className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all text-center"
                    >
                        <div className="text-2xl mb-2">📚</div>
                        <div className="font-semibold text-gray-900">YKS Rehberi</div>
                    </Link>
                </div>
            </main>
        </div>
    )
}
