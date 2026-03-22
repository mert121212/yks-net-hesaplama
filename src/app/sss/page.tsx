import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, HelpCircle, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Sıkça Sorulan Sorular (SSS) - YKS Net Hesaplama 2026',
    description: 'YKS net hesaplama, puan hesaplama, üniversite tercihleri ve sıralama hakkında sıkça sorulan sorular ve cevapları.',
    keywords: 'yks sss, net hesaplama sss, puan hesaplama soruları, yks soruları, tyt ayt sorular',
}

export default function SSS() {
    const faqCategories = [
        {
            category: 'Net Hesaplama',
            icon: '🧮',
            questions: [
                {
                    q: 'Net nasıl hesaplanır?',
                    a: 'Net hesaplama formülü: Doğru sayısı - (Yanlış sayısı ÷ 4). Örneğin 30 doğru 8 yanlış yaparsanız: 30 - (8÷4) = 30 - 2 = 28 net olur.'
                },
                {
                    q: 'Negatif net olur mu?',
                    a: 'Evet, negatif net olabilir. Eğer yanlış sayınız doğru sayınızın 4 katından fazlaysa netiniz eksi olur. Örneğin 2 doğru 15 yanlış: 2 - (15÷4) = 2 - 3.75 = -1.75 net.'
                },
                {
                    q: 'Boş bıraktığım sorular nete etki eder mi?',
                    a: 'Hayır, boş bıraktığınız sorular net hesaplamasına dahil edilmez. Sadece doğru ve yanlış cevaplar hesaplamaya katılır.'
                },
                {
                    q: 'TYT\'de kaç net yapmalıyım?',
                    a: 'TYT\'de toplam 120 soru vardır. Üniversite kazanmak için minimum 150 puan almanız gerekir, bu da yaklaşık 40-50 net civarı demektir. Ancak iyi bir bölüm için 80+ net hedeflemelisiniz.'
                }
            ]
        },
        {
            category: 'Puan Hesaplama',
            icon: '📊',
            questions: [
                {
                    q: 'YKS puanı nasıl hesaplanır?',
                    a: 'YKS puanı TYT ve AYT netlerinizin katsayılarla çarpılıp toplanmasıyla hesaplanır. Her alan (SAY, EA, SÖZ, DİL) için farklı katsayılar kullanılır. Ayrıca OBP (Ortaöğretim Başarı Puanı) 0.12 katsayısıyla eklenir.'
                },
                {
                    q: 'OBP nedir ve nasıl hesaplanır?',
                    a: 'OBP (Ortaöğretim Başarı Puanı), lise diploma notunuzun YKS puanınıza katkısıdır. Diploma notunuz (0-100) önce 5 ile çarpılarak gerçek OBP\'ye (0-500) dönüştürülür, ardından 0.12 katsayısıyla çarpılır. Örneğin diploma notunuz 85 ise: 85 × 5 = 425 OBP, 425 × 0.12 = 51 puan katkı sağlar. Diploma notu 100 ise maksimum 60 puan katkı alırsınız.'
                },
                {
                    q: 'SAY, EA, SÖZ, DİL puanları nedir?',
                    a: 'SAY (Sayısal): Mühendislik, tıp, fen bilimleri için. EA (Eşit Ağırlık): İktisat, işletme, hukuk için. SÖZ (Sözel): Edebiyat, tarih, psikoloji için. DİL: Yabancı dil bölümleri için kullanılır.'
                },
                {
                    q: 'Minimum kaç puan almalıyım?',
                    a: 'Herhangi bir üniversiteye yerleşebilmek için minimum 150 puan almanız gerekir. Ancak tercih ettiğiniz bölümün taban puanına göre bu değişir.'
                }
            ]
        },
        {
            category: 'Sıralama ve Yerleştirme',
            icon: '🎯',
            questions: [
                {
                    q: 'Tahmini sıralama ne kadar doğru?',
                    a: 'Sitemizde gösterilen tahmini sıralamalar 2024-2025 YKS verilerine dayalı yaklaşık değerlerdir. Gerçek sıralamanız ÖSYM tarafından açıklanacak resmi sonuçlarda belli olacaktır.'
                },
                {
                    q: 'Hangi üniversiteleri kazanabilirim?',
                    a: 'Puanınızı hesapladıktan sonra "Kazanabileceğiniz Üniversiteler" butonuna tıklayarak tahmini sıralamanıza göre kazanma şansınız yüksek olan bölümleri görebilirsiniz.'
                },
                {
                    q: 'Taban puanlar her yıl değişir mi?',
                    a: 'Evet, taban puanlar her yıl o bölüme yerleşen son kişinin puanına göre belirlenir. Kontenjan, tercih sayısı ve adayların başarısına göre değişiklik gösterir.'
                },
                {
                    q: 'Sıralamam taban puandan yüksek ama kazanamadım, neden?',
                    a: 'Yerleştirme sadece puana değil, tercih sıranıza ve kontenjan durumuna da bağlıdır. Bir bölümü üst sıralarda tercih etmezseniz kontenjan dolduğunda yerleşemeyebilirsiniz.'
                }
            ]
        },
        {
            category: 'Sınav Hakkında',
            icon: '📝',
            questions: [
                {
                    q: '2026 YKS ne zaman?',
                    a: '2026 YKS sınavı Haziran ayında yapılacaktır. TYT ve AYT sınavları farklı günlerde gerçekleştirilir. Kesin tarihler ÖSYM tarafından açıklanacaktır.'
                },
                {
                    q: 'TYT\'de kaç soru var?',
                    a: 'TYT\'de toplam 120 soru vardır: Türkçe 40, Matematik 40, Sosyal Bilimler 20, Fen Bilimleri 20 soru.'
                },
                {
                    q: 'AYT\'de kaç soru var?',
                    a: 'AYT\'de toplam 80 soru vardır. Sayısal için: Matematik 40, Fizik 14, Kimya 13, Biyoloji 13. Sözel için: Edebiyat 24, Tarih-1 10, Coğrafya-1 6, Tarih-2 11, Coğrafya-2 11, Felsefe 12, Din 6 soru.'
                },
                {
                    q: 'YDT nedir?',
                    a: 'YDT (Yabancı Dil Testi), yabancı dil bölümlerine başvuracak adaylar için yapılan 80 soruluk bir testtir. İngilizce, Almanca, Fransızca, Arapça, Rusça dillerinden birini seçebilirsiniz.'
                }
            ]
        },
        {
            category: 'Site Kullanımı',
            icon: '💻',
            questions: [
                {
                    q: 'Hesaplamalarım kaydediliyor mu?',
                    a: 'Hayır, gizliliğiniz için hesaplamalarınız sunucularımızda saklanmaz. Tüm hesaplamalar tarayıcınızda yapılır. Sayfayı yenilediğinizde verileriniz silinir.'
                },
                {
                    q: 'Mobil cihazdan kullanabilir miyim?',
                    a: 'Evet, sitemiz tüm cihazlarda (telefon, tablet, bilgisayar) sorunsuz çalışacak şekilde tasarlanmıştır.'
                },
                {
                    q: 'Üniversite listesinde aradığım bölüm yok, neden?',
                    a: 'Veritabanımızda 314 popüler üniversite programı bulunmaktadır. Tüm bölümler eklenmemiş olabilir. 2026 YKS sonuçları açıklandıktan sonra veritabanımız güncellenecektir.'
                },
                {
                    q: 'Filtreleme nasıl çalışır?',
                    a: 'Üniversite önerileri sayfasında arama kutusu, şehir filtresi ve üniversite tipi (Devlet/Vakıf) filtrelerini kullanarak size uygun bölümleri bulabilirsiniz.'
                }
            ]
        },
        {
            category: 'Genel Sorular',
            icon: '❓',
            questions: [
                {
                    q: 'Bu site ücretsiz mi?',
                    a: 'Evet, sitemiz tamamen ücretsizdir ve ücretsiz kalacaktır. Tüm öğrencilerin kullanımına açıktır.'
                },
                {
                    q: 'Verileriniz ne kadar güncel?',
                    a: 'Üniversite taban puanları ve sıralama verileri 2024-2025 YKS verilerine dayanmaktadır. 2026 YKS sonuçları açıklandıktan sonra güncellenecektir.'
                },
                {
                    q: 'Hesaplamalar ÖSYM ile aynı mı?',
                    a: 'Hesaplama formüllerimiz ÖSYM\'nin kullandığı formüllere dayanmaktadır, ancak kesin sonuçlar için ÖSYM\'nin resmi hesaplama aracını kullanmalısınız.'
                },
                {
                    q: 'Geri bildirimde bulunabilir miyim?',
                    a: 'Evet, önerileriniz ve geri bildirimleriniz için bizimle iletişime geçebilirsiniz. Sitenizi sürekli geliştirmeye çalışıyoruz.'
                }
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
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
