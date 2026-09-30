import { Metadata } from 'next'
import Link from 'next/link'
import UniversityDirectory from '@/components/UniversityDirectory'

export const metadata: Metadata = {
    title: 'YKS Üniversite Taban Puanları ve Başarı Sıralamaları 2025/2026 | YÖK Atlas Verileri',
    description: '2025 ve 2026 YKS taban puanları, başarı sıralamaları ve kontenjanları. Tıp, Hukuk, Mühendislik ve tüm 4 yıllık lisans programlarının güncel YÖK Atlas taban başarı sıraları.',
    keywords: 'üniversite taban puanları, yks başarı sıralamaları, 2025 taban puanları, tıp taban puanları, bilgisayar mühendisliği sıralama, hukuk taban puanı, yks tbs',
    alternates: { canonical: 'https://yksnethesapla.com/universiteler' },
    openGraph: {
        title: 'YKS Üniversite Taban Puanları ve Başarı Sıralamaları 2025/2026 | YÖK Atlas',
        description: 'Tüm lisans bölümlerinin güncel taban puanı, başarı sırası ve kontenjan bilgileri. Ücretsiz üniversite tercih atlası.',
        url: 'https://yksnethesapla.com/universiteler',
    }
}

export default function UniversitelerPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/40 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
                
                {/* Hero Başlık */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full mb-3 tracking-wide">
                        🎓 YÖK ATLAS RESMİ VERİTABANI
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                        Üniversite Taban Puanları ve Başarı Sıralamaları
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        ÖSYM ve YÖK Atlas verileriyle hazırlanan güncel lisans taban puanları, kontenjanlar ve taban başarı sıraları (TBS). Hedefindeki bölümü anında ara ve karşılaştır.
                    </p>
                </div>

                {/* İnteraktif Arama & Filtreleme Atlası */}
                <UniversityDirectory />

                {/* Eğitici & Derinlemesine Rehber İçeriği (SEO & Katma Değer) */}
                <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-sm space-y-10 text-gray-700 leading-relaxed">
                    
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <span className="p-2 bg-blue-100 text-blue-600 rounded-xl text-lg">📊</span>
                            Tercih Yaparken Neden Puana Değil, Sıralamaya Bakılmalı?
                        </h2>
                        <p className="mb-4">
                            YKS adaylarının en sık yaptığı kritik hata, geçen yılın <strong>taban puanını</strong> bu yılki deneme veya sınav puanıyla kıyaslamaktır. Sınavın zorluk derecesi her yıl değişir. Örneğin 2021 gibi zor bir sınavda 420 puan alan bir aday ilk 20.000&apos;e girebilirken, 2022 veya 2023 gibi nispeten daha kolay bir sınavda aynı 420 puan sizi 50.000 veya 60.000 bandına geriletebilir.
                        </p>
                        <p>
                            Bu sebeple üniversiteler öğrenci kabul ederken puana değil, o puan türündeki <strong>Taban Başarı Sırasına (TBS)</strong> göre öğrenci alır. Tercih listenizi oluştururken referans almanız gereken tek güvenilir metrik yukarıdaki tabloda yer alan başarı sıralarıdır.
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                        <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-100">
                            <h3 className="font-bold text-blue-900 text-lg mb-2">1. Güvenli Aralık (%20 Kuralı)</h3>
                            <p className="text-sm text-gray-600">
                                Sıralamanızın %20 üstünden başlayarak (örneğin 50.000 sıradaysanız 40.000&apos;den), %25-30 altına kadar (65.000&apos;e kadar) dengeli bir tercih listesi oluşturun.
                            </p>
                        </div>
                        <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100">
                            <h3 className="font-bold text-emerald-900 text-lg mb-2">2. Kontenjan Değişimleri</h3>
                            <p className="text-sm text-gray-600">
                                Bir bölümün kontenjanı artmışsa sıralaması gerileyebilir (puanı düşebilir); kontenjanı azaltılmışsa sıralaması yükselebilir.
                            </p>
                        </div>
                        <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-100">
                            <h3 className="font-bold text-purple-900 text-lg mb-2">3. OBP Etkisini Unutmayın</h3>
                            <p className="text-sm text-gray-600">
                                Yerleştirme sıralaması diploma notunuzun (0,12 katsayısı) eklenmesiyle oluşur. Ham sıralamanız ile yerleştirme sıralamanız arasında binlerce kişi oynayabilir.
                            </p>
                        </div>
                    </section>

                    {/* SSS */}
                    <section className="pt-6 border-t border-gray-100 space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Sıkça Sorulan Sorular (Üniversite Taban Puanları)
                        </h2>

                        <div className="space-y-4">
                            <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/50">
                                <h3 className="font-bold text-gray-900 text-base mb-1">
                                    Taban Başarı Sırası (TBS) ne anlama gelir?
                                </h3>
                                <p className="text-sm text-gray-600">
                                    TBS, ilgili programa bir önceki yerleştirme döneminde genel kontenjandan en son yerleşen adayın Türkiye genelindeki başarı sırasını ifade eder.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/50">
                                <h3 className="font-bold text-gray-900 text-base mb-1">
                                    Baraj sıralaması olan bölümler hangileridir?
                                </h3>
                                <p className="text-sm text-gray-600">
                                    YÖK kararıyla Tıp Fakültesi için ilk 50.000, Diş Hekimliği için ilk 80.000, Eczacılık için ilk 100.000, Hukuk için ilk 125.000 ve Mühendislik programları (Ziraat, Su Ürünleri ve Orman hariç) için ilk 300.000 başarı sırası barajı uygulanır. Bu sıralamanın dışında kalan adaylar ilgili programları tercih edemez.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/50">
                                <h3 className="font-bold text-gray-900 text-base mb-1">
                                    Taban puanı dolmayan bölümler ne anlama gelir?
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Kontenjanı boş kalan veya yeterli sayıda tercih almayan programlarda taban puan oluşmaz. Bu bölümlere ilgili puan türünde puanı hesaplanan her aday yerleşme şansına sahiptir.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Kaynakça ve Yasal Bilgilendirme */}
                    <section className="pt-6 border-t border-gray-100 text-xs text-gray-500 space-y-2">
                        <p>
                            <strong>Veri Kaynağı:</strong> Bu sayfadaki taban puanı, kontenjan ve taban başarı sırası (TBS) verileri Yükseköğretim Kurulu (YÖK Atlas) ve ÖSYM tarafından yayımlanan resmi YKS Yükseköğretim Programları ve Kontenjanları Kılavuzlarından derlenmiştir.
                        </p>
                        <p>
                            <strong>Yasal Uyarı:</strong> Sayfadaki veriler adaylara tercih hazırlığı sürecinde rehberlik sağlamak amacıyla sunulmaktadır. Kesin yerleştirme işlemleri ÖSYM&apos;nin o yıl yayımlayacağı resmi tercih kılavuzu esas alınarak yürütülür.
                        </p>
                    </section>
                </div>

            </div>
        </div>
    )
}
