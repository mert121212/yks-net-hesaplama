import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'OBP Nedir? 2026 Ortaöğretim Başarı Puanı Hesaplama ve Puan Kırılması',
    description: 'OBP hesaplama formülü, puan kırılması durumu ve meslek lisesi ek puanı. Diploma notunuzun YKS puanınıza +30 ile +60 puan arasında nasıl katkı sağladığını öğrenin.',
    keywords: 'obp nedir, obp hesaplama, ortaöğretim başarı puanı, diploma notu, yks obp, puan kırılması',
    alternates: { canonical: 'https://yksnethesapla.com/blog/obp-hesaplama' },
    openGraph: {
        title: 'OBP Nedir? 2026 Ortaöğretim Başarı Puanı Hesaplama ve Puan Kırılması',
        description: 'OBP hesaplama formülü ve puan kırılması durumu. Diploma notunuzun YKS puanınıza etkisi.',
        type: 'article',
        publishedTime: '2026-02-24',
        url: 'https://yksnethesapla.com/blog/obp-hesaplama',
    },
}

export default function OBPHesaplama() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">OBP Hesaplama</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600">24 Şubat 2026</time>
                            <span className="text-gray-600">• 5 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            OBP Nedir? 2026 Ortaöğretim Başarı Puanı Hesaplama
                        </h1>
                        <p className="text-xl text-gray-700">
                            OBP, lise hayatınız boyunca verdiğiniz emeklerin YKS sonucunuza
                            +30 ile +60 puan arasında katkı sağlamasıdır.
                        </p>
                    </header>

                    <div className="prose prose-lg max-w-none">

                        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">OBP Nasıl Hesaplanır?</h2>
                        <p className="text-gray-700 mb-4">
                            Diploma notunuz önce 5 ile çarpılır, ardından çıkan sonuç 0,12 katsayısı ile
                            ham puanınıza eklenir:
                        </p>
                        <div className="bg-gray-100 p-5 rounded-lg mb-6 text-center">
                            <p className="text-xl font-bold text-gray-900">OBP Katkısı = Diploma Notu × 0,6</p>
                            <p className="text-sm text-gray-600 mt-2">(Diploma Notu × 5 = OBP → OBP × 0,12 = Katkı)</p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">OBP Örnekleri</h2>
                        <div className="space-y-4 my-6">
                            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                                <h3 className="font-bold text-green-900 mb-2">Yüksek Diploma Notu (90)</h3>
                                <p className="text-gray-700 text-sm">OBP = 90 × 5 = 450 → Katkı = 450 × 0,12 = <strong className="text-green-700">+54 puan</strong></p>
                            </div>
                            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-900 mb-2">Orta Diploma Notu (75)</h3>
                                <p className="text-gray-700 text-sm">OBP = 75 × 5 = 375 → Katkı = 375 × 0,12 = <strong className="text-blue-700">+45 puan</strong></p>
                            </div>
                            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
                                <h3 className="font-bold text-orange-900 mb-2">Düşük Diploma Notu (60)</h3>
                                <p className="text-gray-700 text-sm">OBP = 60 × 5 = 300 → Katkı = 300 × 0,12 = <strong className="text-orange-700">+36 puan</strong></p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">⚠️ Puan Kırılması Durumu</h2>
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
                            <p className="text-gray-700">
                                Eğer geçen yıl bir yükseköğretim programına yerleştiyseniz (tercih yapıp kazandıysanız),
                                bu yıl OBP katsayınız <strong>0,12&apos;den 0,06&apos;ya düşer.</strong> Bu da yaklaşık
                                <strong> 20–30 puan kaybetmeniz</strong> demektir.
                            </p>
                        </div>
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg mb-8">
                            <p className="text-yellow-900 text-sm">
                                <strong>Örnek:</strong> Diploma notu 85 olan ve geçen yıl yerleşen bir aday:
                                Normal katkı = 85 × 0,6 = 51 puan. Kırılmış katkı = 85 × 0,3 = 25,5 puan.
                                Fark: yaklaşık 25,5 puan kayıp.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">OBP&apos;nizi Hesaplayın</h2>
                            <p className="text-xl mb-6 text-blue-100">Diploma notunuzu girerek OBP katkınızı ve toplam puanınızı öğrenin</p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Özel Durumlar</h2>
                        <div className="space-y-4 my-6">
                            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-gray-400">
                                <h3 className="font-bold text-gray-900 mb-2">Meslek Lisesi Mezunları</h3>
                                <p className="text-gray-700 text-sm">
                                    Meslek lisesi mezunları kendi alanlarındaki ilgili programlara başvururken
                                    ek puan avantajından yararlanabilir. Diğer alanlara başvururken standart OBP uygulanır.
                                    Detaylar için ÖSYM kılavuzunu inceleyin.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-gray-400">
                                <h3 className="font-bold text-gray-900 mb-2">Açık Lise Mezunları</h3>
                                <p className="text-gray-700 text-sm">
                                    Açık lise mezunları da OBP hesaplamasından yararlanır. Diploma notları aynı formülle hesaplanır.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sıkça Sorulan Sorular</h2>
                        <div className="space-y-4 my-6">
                            <div className="border-b pb-4">
                                <h3 className="font-bold text-gray-900 mb-2">OBP&apos;yi artırabilir miyim?</h3>
                                <p className="text-gray-700 text-sm">Mezun olduktan sonra OBP&apos;nizi değiştiremezsiniz. Lise öğrencisiyseniz notlarınızı yükselterek artırabilirsiniz.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h3 className="font-bold text-gray-900 mb-2">OBP zorunlu mu?</h3>
                                <p className="text-gray-700 text-sm">Evet, OBP otomatik olarak hesaplanır ve YKS puanınıza eklenir. Reddedemezsiniz.</p>
                            </div>
                            <div className="pb-4">
                                <h3 className="font-bold text-gray-900 mb-2">Ham puan ile yerleştirme puanı arasındaki fark nedir?</h3>
                                <p className="text-gray-700 text-sm">Ham puan, sadece netlerinizden gelen puandır (max 500). Yerleştirme puanı ise ham puana OBP katkısının eklenmiş halidir.</p>
                            </div>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-net-hesaplama-nasil-yapilir" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">YKS Net Hesaplama →</p>
                                </Link>
                                <Link href="/blog/ayt-puan-hesaplama" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">AYT Puan Hesaplama →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
