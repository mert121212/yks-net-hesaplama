import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'YKS Net Hesaplama Nasıl Yapılır? 2026 Güncel Rehber | YKS Net Hesaplama',
    description: 'YKS net hesaplama işlemini adım adım öğrenin. TYT, AYT ve YDT netlerinizi doğru hesaplayarak üniversite puanınızı öğrenin. 2026 güncel formüller ve örnekler.',
    keywords: 'yks net hesaplama, yks net hesaplama nasıl yapılır, tyt net hesaplama, ayt net hesaplama, yks puan hesaplama',
    openGraph: {
        title: 'YKS Net Hesaplama Nasıl Yapılır? 2026 Güncel Rehber',
        description: 'YKS net hesaplama işlemini adım adım öğrenin. TYT, AYT ve YDT netlerinizi doğru hesaplayarak üniversite puanınızı öğrenin.',
        type: 'article',
        publishedTime: '2026-02-28',
    },
}

export default function YKSNetHesaplamaRehberi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    {/* Breadcrumb */}
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Net Hesaplama Nasıl Yapılır?</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                Rehber
                            </span>
                            <time className="text-gray-600">28 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS Net Hesaplama Nasıl Yapılır? 2026 Güncel Rehber
                        </h1>
                        <p className="text-xl text-gray-600">
                            YKS net hesaplama işlemini adım adım öğrenin. TYT, AYT ve YDT netlerinizi doğru hesaplayarak üniversite puanınızı öğrenin.
                        </p>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">YKS Net Hesaplama Nedir?</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            YKS (Yükseköğretim Kurumları Sınavı) net hesaplama, sınavda doğru ve yanlış cevaplarınızdan
                            elde ettiğiniz net sayısını hesaplama işlemidir. Bu net sayıları, üniversite yerleştirme
                            puanınızın hesaplanmasında kullanılır.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                            <p className="text-gray-800 font-medium">
                                💡 <strong>Önemli Not:</strong> YKS'de her yanlış cevap, doğru cevaplarınızdan 0.25 net düşürür.
                                Boş bıraktığınız sorular ise net hesabınızı etkilemez.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Net Hesaplama Formülü</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            YKS net hesaplama formülü oldukça basittir:
                        </p>

                        <div className="bg-gray-100 p-6 rounded-lg my-6 text-center">
                            <p className="text-2xl font-bold text-gray-900">
                                Net = Doğru - (Yanlış ÷ 4)
                            </p>
                        </div>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Örnek Hesaplama:</h3>
                        <div className="bg-green-50 p-6 rounded-lg my-6">
                            <p className="text-gray-800 mb-2">
                                <strong>Soru:</strong> TYT Matematik'te 30 doğru, 10 yanlış yaptınız. Net sayınız kaçtır?
                            </p>
                            <p className="text-gray-800 mb-2">
                                <strong>Çözüm:</strong> Net = 30 - (10 ÷ 4) = 30 - 2.5 = <strong className="text-green-700">27.5 net</strong>
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">TYT Net Hesaplama</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            TYT (Temel Yeterlilik Testi), tüm öğrencilerin girdiği temel sınavdır. TYT'de 5 farklı
                            ders bulunur ve toplam 120 soru sorulur.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">TYT Soru Dağılımı:</h3>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-gray-900 font-semibold border-b">Ders</th>
                                        <th className="px-6 py-3 text-left text-gray-900 font-semibold border-b">Soru Sayısı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 text-gray-700">Türkçe</td>
                                        <td className="px-6 py-4 text-gray-700">40 soru</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 text-gray-700">Matematik</td>
                                        <td className="px-6 py-4 text-gray-700">40 soru</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 text-gray-700">Fen Bilimleri</td>
                                        <td className="px-6 py-4 text-gray-700">20 soru</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 text-gray-700">Sosyal Bilimler</td>
                                        <td className="px-6 py-4 text-gray-700">20 soru</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-gray-900 font-bold">TOPLAM</td>
                                        <td className="px-6 py-4 text-gray-900 font-bold">120 soru</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">AYT Net Hesaplama</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            AYT (Alan Yeterlilik Testi), öğrencilerin alan tercihlerine göre girdikleri sınavdır.
                            SAY, EA, SÖZ ve DİL olmak üzere 4 farklı puan türü vardır.
                        </p>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">AYT Soru Dağılımı:</h3>
                        <div className="grid md:grid-cols-2 gap-6 my-6">
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h4 className="font-bold text-blue-900 mb-3">SAY (Sayısal)</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Matematik: 40 soru</li>
                                    <li>• Fizik: 14 soru</li>
                                    <li>• Kimya: 13 soru</li>
                                    <li>• Biyoloji: 13 soru</li>
                                </ul>
                            </div>
                            <div className="bg-purple-50 p-6 rounded-lg">
                                <h4 className="font-bold text-purple-900 mb-3">EA (Eşit Ağırlık)</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Matematik: 40 soru</li>
                                    <li>• Edebiyat: 24 soru</li>
                                    <li>• Tarih-1: 10 soru</li>
                                    <li>• Coğrafya-1: 6 soru</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 p-6 rounded-lg">
                                <h4 className="font-bold text-green-900 mb-3">SÖZ (Sözel)</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Edebiyat: 24 soru</li>
                                    <li>• Tarih-1: 10 soru</li>
                                    <li>• Coğrafya-1: 6 soru</li>
                                    <li>• Tarih-2: 11 soru</li>
                                    <li>• Coğrafya-2: 11 soru</li>
                                    <li>• Felsefe: 12 soru</li>
                                    <li>• Din Kültürü: 6 soru</li>
                                </ul>
                            </div>
                            <div className="bg-orange-50 p-6 rounded-lg">
                                <h4 className="font-bold text-orange-900 mb-3">DİL (Yabancı Dil)</h4>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Yabancı Dil: 80 soru</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">YKS Puan Hesaplama</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Net hesaplamadan sonra, bu netler ÖSYM tarafından belirlenen katsayılarla çarpılarak
                            ham puanınız hesaplanır. Ham puan, OBP (Ortaöğretim Başarı Puanı) ile birleştirilerek
                            yerleştirme puanınız oluşur.
                        </p>

                        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8 rounded-r-lg">
                            <p className="text-gray-800">
                                <strong>⚠️ Dikkat:</strong> YKS puan hesaplama formülü karmaşıktır ve ÖSYM tarafından
                                her yıl güncellenir. En doğru sonuç için{' '}
                                <Link href="/" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                                    YKS Net Hesaplama aracımızı
                                </Link>{' '}
                                kullanmanızı öneririz.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sık Sorulan Sorular</h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">❓ Boş bıraktığım sorular net hesabımı etkiler mi?</h3>
                                <p className="text-gray-700">
                                    Hayır, boş bıraktığınız sorular net hesabınızı etkilemez. Sadece doğru ve yanlış
                                    cevaplarınız hesaplamaya dahil edilir.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">❓ Her yanlış kaç net düşürür?</h3>
                                <p className="text-gray-700">
                                    YKS'de her yanlış cevap 0.25 net düşürür. Yani 4 yanlış = 1 doğru kaybı anlamına gelir.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">❓ Kaç net kaç puan eder?</h3>
                                <p className="text-gray-700">
                                    Net-puan dönüşümü her yıl değişir ve sınavın zorluğuna göre belirlenir. Genel olarak
                                    TYT'de 80+ net, AYT'de 60+ net iyi sayılır.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">❓ OBP nedir ve nasıl hesaplanır?</h3>
                                <p className="text-gray-700">
                                    OBP (Ortaöğretim Başarı Puanı), lise diploma notunuzun YKS puanınıza katkısıdır.
                                    Diploma notunuz × 5 formülüyle hesaplanır ve YKS puanınızın %12'sini oluşturur.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">
                                Hemen Net Hesaplamanızı Yapın!
                            </h2>
                            <p className="text-xl mb-6 text-blue-100">
                                TYT, AYT ve YDT netlerinizi girerek üniversite puanınızı ve tahmini sıralamanızı öğrenin
                            </p>
                            <Link
                                href="/"
                                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                            >
                                Ücretsiz Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sonuç</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            YKS net hesaplama, üniversite yerleştirme sürecinin en önemli adımlarından biridir.
                            Doğru net hesaplama yaparak hedef üniversitenize olan mesafenizi görebilir ve
                            çalışma programınızı buna göre ayarlayabilirsiniz.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Unutmayın, her net önemlidir! Düzenli çalışma ve doğru strateji ile hedeflerinize
                            ulaşabilirsiniz. Başarılar dileriz! 🎓
                        </p>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/yks-rehberi" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">YKS Rehberi →</p>
                                    <p className="text-sm text-gray-700">YKS hakkında detaylı bilgi</p>
                                </Link>
                                <Link href="/sss" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">Sık Sorulan Sorular →</p>
                                    <p className="text-sm text-gray-700">YKS ile ilgili tüm sorular</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
