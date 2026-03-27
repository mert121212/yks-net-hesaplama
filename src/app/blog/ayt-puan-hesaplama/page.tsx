import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: '2026 AYT Puan Hesaplama: SAY, EA, SÖZ ve DİL Rehberi | YKS Net Hesaplama',
    description: 'AYT sınavında SAY, EA, SÖZ ve DİL puanları nasıl hesaplanır? 0,5 net şartı, katsayı mantığı, başarı sırası barajları ve puan türü seçimi rehberi.',
    keywords: 'ayt puan hesaplama, say puanı, ea puanı, söz puanı, dil puanı, ayt net hesaplama, başarı sırası barajı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/ayt-puan-hesaplama' },
    openGraph: {
        title: '2026 AYT Puan Hesaplama: SAY, EA, SÖZ ve DİL Rehberi',
        description: 'AYT sınavında SAY, EA, SÖZ ve DİL puanları nasıl hesaplanır? Katsayı mantığı ve başarı sırası barajları.',
        type: 'article',
        publishedTime: '2026-02-26',
        url: 'https://yksnethesapla.com/blog/ayt-puan-hesaplama',
    },
}

export default function AYTPuanHesaplama() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">AYT Puan Hesaplama</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AYT</span>
                            <time className="text-gray-600">26 Şubat 2026</time>
                            <span className="text-gray-600">• 7 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            2026 AYT Puan Hesaplama: SAY, EA, SÖZ ve DİL Rehberi
                        </h1>
                        <p className="text-xl text-gray-600">
                            AYT, yerleştirme puanınızın yaklaşık %60&apos;ını oluşturur. Puan türlerine göre
                            netlerin getirisini bilmek stratejik bir avantaj sağlar.
                        </p>
                    </header>

                    <div className="prose prose-lg max-w-none">

                        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">AYT Puanı Nasıl Hesaplanır?</h2>
                        <p className="text-gray-700 mb-4">
                            AYT puanınız hesaplanırken 4 yanlışın 1 doğruyu götürdüğü net sayınız temel alınır:
                        </p>
                        <div className="bg-gray-100 p-5 rounded-lg mb-6 text-center">
                            <p className="text-xl font-bold text-gray-900">Net = Doğru − (Yanlış ÷ 4)</p>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-6">
                            <h3 className="font-bold text-amber-900 mb-2">⚠️ Kritik Uyarı: Baraj Bilgisi</h3>
                            <p className="text-gray-700">
                                2022&apos;den itibaren TYT&apos;deki 150 puan barajı <strong>kaldırılmıştır.</strong> Ancak
                                AYT puanınızın hesaplanabilmesi için ilgili testlerden toplamda en az
                                <strong> 0,5 net</strong> yapmış olmanız gerekir.
                            </p>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-8">
                            <h3 className="font-bold text-amber-900 mb-2">⚠️ Katsayı Notu</h3>
                            <p className="text-gray-700">
                                ÖSYM, puan hesaplamada standart sapma normalizasyonu kullanır ve kesin katsayıları
                                kamuoyuyla paylaşmaz. İnternette dolaşan sabit katsayı tabloları gerçeği yansıtmaz.
                                Hesaplama aracımız gerçek sonuçlara yakın bir <strong>tahmin</strong> üretir.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Puan Türlerine Göre Test Ağırlıkları</h2>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-purple-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Puan Türü</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Temel Testler</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">AYT Katkı Oranı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="px-5 py-4 font-medium text-green-700">SAY</td>
                                        <td className="px-5 py-4 text-sm">Mat + Fizik + Kimya + Biyo</td>
                                        <td className="px-5 py-4 text-center font-bold">~%60</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="px-5 py-4 font-medium text-blue-700">EA</td>
                                        <td className="px-5 py-4 text-sm">Mat + Edb + Tar-1 + Coğ-1</td>
                                        <td className="px-5 py-4 text-center font-bold">~%60</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-5 py-4 font-medium text-purple-700">SÖZ</td>
                                        <td className="px-5 py-4 text-sm">Edb + Sos-1 + Sos-2</td>
                                        <td className="px-5 py-4 text-center font-bold">~%60</td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-4 font-medium text-orange-700">DİL</td>
                                        <td className="px-5 py-4 text-sm">YDT (80 soru)</td>
                                        <td className="px-5 py-4 text-center font-bold">~%60</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">4 Puan Türü ve Soru Dağılımı</h2>
                        <div className="grid md:grid-cols-2 gap-6 my-6">
                            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-green-900 mb-3">🔬 SAY (Sayısal)</h3>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                    <li>• Matematik: 40 soru</li>
                                    <li>• Fizik: 14 soru</li>
                                    <li>• Kimya: 13 soru</li>
                                    <li>• Biyoloji: 13 soru</li>
                                </ul>
                                <p className="text-xs text-gray-500 mt-3">Bölümler: Tıp, Mühendislik, Eczacılık, Mimarlık</p>
                            </div>
                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">⚖️ EA (Eşit Ağırlık)</h3>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                    <li>• Matematik: 40 soru</li>
                                    <li>• Edebiyat: 24 soru</li>
                                    <li>• Tarih-1: 10 soru</li>
                                    <li>• Coğrafya-1: 6 soru</li>
                                </ul>
                                <p className="text-xs text-gray-500 mt-3">Bölümler: Hukuk, İktisat, İşletme, Uluslararası İlişkiler</p>
                            </div>
                            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-purple-900 mb-3">📚 SÖZ (Sözel)</h3>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                    <li>• Edebiyat: 24 soru</li>
                                    <li>• Tarih-1 &amp; 2: 21 soru</li>
                                    <li>• Coğrafya-1 &amp; 2: 17 soru</li>
                                    <li>• Felsefe: 12 soru, Din: 6 soru</li>
                                </ul>
                                <p className="text-xs text-gray-500 mt-3">Bölümler: Türk Dili, Tarih, Psikoloji, Sosyoloji</p>
                            </div>
                            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-orange-900 mb-3">🌍 DİL (Yabancı Dil)</h3>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                    <li>• YDT: 80 soru</li>
                                    <li>• (İngilizce, Almanca, Fransızca, Arapça)</li>
                                </ul>
                                <p className="text-xs text-gray-500 mt-3">Bölümler: İngilizce Öğretmenliği, Mütercim-Tercümanlık</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Başarı Sırası Barajları</h2>
                        <p className="text-gray-700 mb-4">
                            Bazı bölümlere girmek için sadece puan yetmez; belli bir sıralama içinde olmanız şarttır.
                            Bu barajlar ÖSYM kılavuzunda her yıl güncellenir:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-red-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Bölüm</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Puan Türü</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Başarı Sırası Şartı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-5 py-3">Tıp</td><td className="px-5 py-3">SAY</td><td className="px-5 py-3 text-center font-bold text-red-700">İlk 50.000</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3">Hukuk</td><td className="px-5 py-3">EA</td><td className="px-5 py-3 text-center font-bold text-red-700">İlk 125.000</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3">Mimarlık</td><td className="px-5 py-3">SAY</td><td className="px-5 py-3 text-center font-bold text-orange-700">İlk 250.000</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3">Mühendislik</td><td className="px-5 py-3">SAY</td><td className="px-5 py-3 text-center font-bold text-orange-700">İlk 300.000</td></tr>
                                    <tr><td className="px-5 py-3">Öğretmenlik</td><td className="px-5 py-3">SAY/EA/SÖZ</td><td className="px-5 py-3 text-center font-bold text-orange-700">İlk 300.000</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-500 mb-6">* Kesin baraj değerleri için ÖSYM kılavuzunu kontrol edin. Yukarıdaki değerler 2025 verilerine dayanmaktadır.</p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">AYT Puanınızı Hemen Hesaplayın</h2>
                            <p className="text-xl mb-6 text-blue-100">SAY, EA, SÖZ ve DİL puanlarınızı anında öğrenin</p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Ücretsiz Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sıkça Sorulan Sorular</h2>
                        <div className="space-y-4 my-6">
                            <div className="border-b pb-4">
                                <h3 className="font-bold text-gray-900 mb-2">Birden fazla puan türüyle başvurabilir miyim?</h3>
                                <p className="text-gray-700 text-sm">Evet. Tercih sırasında farklı puan türlerinden bölümler seçebilirsiniz.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h3 className="font-bold text-gray-900 mb-2">AYT&apos;de kaç net iyi sayılır?</h3>
                                <p className="text-gray-700 text-sm">SAY için 50+ net, EA için 45+ net, SÖZ için 40+ net iyi sayılır. Hedef bölümünüze göre değişir.</p>
                            </div>
                            <div className="pb-4">
                                <h3 className="font-bold text-gray-900 mb-2">TYT&apos;den düşük puan alsam AYT&apos;ye girebilir miyim?</h3>
                                <p className="text-gray-700 text-sm">2022&apos;den itibaren TYT barajı kaldırılmıştır. İlgili testlerden 0,5 net yapmanız yeterlidir.</p>
                            </div>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-puan-turleri" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">YKS Puan Türleri →</p>
                                </Link>
                                <Link href="/blog/tyt-net-hesaplama-rehberi" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    <p className="font-semibold text-green-900">TYT Net Hesaplama →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
