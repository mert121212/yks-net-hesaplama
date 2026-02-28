import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'TYT Net Hesaplama: Adım Adım Kılavuz 2026 | YKS Net Hesaplama',
    description: 'TYT sınavında net hesaplama nasıl yapılır? Türkçe, Matematik, Fen ve Sosyal netlerinizi doğru hesaplayın. Formüller ve örneklerle detaylı rehber.',
    keywords: 'tyt net hesaplama, tyt net hesaplama 2026, tyt türkçe net, tyt matematik net, tyt fen net, tyt sosyal net',
}

export default function TYTNetHesaplamaRehberi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Net Hesaplama Rehberi</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                TYT
                            </span>
                            <time className="text-gray-600">27 Şubat 2026</time>
                            <span className="text-gray-600">• 6 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TYT Net Hesaplama: Adım Adım Kılavuz 2026
                        </h1>
                        <p className="text-xl text-gray-600">
                            TYT sınavında net hesaplama nasıl yapılır? Türkçe, Matematik, Fen ve Sosyal netlerinizi doğru hesaplayın.
                        </p>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">TYT Nedir?</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            TYT (Temel Yeterlilik Testi), YKS'nin ilk oturumudur ve tüm öğrencilerin girmesi zorunludur.
                            TYT'de başarılı olmadan AYT'ye geçemezsiniz. TYT puanı, hem tek başına bazı programlara
                            yerleşmek için hem de AYT puanınızın hesaplanmasında kullanılır.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">TYT Soru Dağılımı</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            TYT sınavı 120 sorudan oluşur ve 4 farklı dersten sorular içerir:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-gray-900 font-semibold border-b">Ders</th>
                                        <th className="px-6 py-3 text-left text-gray-900 font-semibold border-b">Soru Sayısı</th>
                                        <th className="px-6 py-3 text-left text-gray-900 font-semibold border-b">Süre</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 text-gray-700">Türkçe</td>
                                        <td className="px-6 py-4 text-gray-700">40 soru</td>
                                        <td className="px-6 py-4 text-gray-700">~40 dakika</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 text-gray-700">Matematik</td>
                                        <td className="px-6 py-4 text-gray-700">40 soru</td>
                                        <td className="px-6 py-4 text-gray-700">~50 dakika</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 text-gray-700">Fen Bilimleri</td>
                                        <td className="px-6 py-4 text-gray-700">20 soru</td>
                                        <td className="px-6 py-4 text-gray-700">~20 dakika</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 text-gray-700">Sosyal Bilimler</td>
                                        <td className="px-6 py-4 text-gray-700">20 soru</td>
                                        <td className="px-6 py-4 text-gray-700">~25 dakika</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-gray-900 font-bold">TOPLAM</td>
                                        <td className="px-6 py-4 text-gray-900 font-bold">120 soru</td>
                                        <td className="px-6 py-4 text-gray-900 font-bold">135 dakika</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">TYT Net Hesaplama Formülü</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            TYT'de her ders için ayrı ayrı net hesaplanır. Formül şu şekildedir:
                        </p>

                        <div className="bg-gray-100 p-6 rounded-lg my-6 text-center">
                            <p className="text-2xl font-bold text-gray-900">
                                Net = Doğru - (Yanlış ÷ 4)
                            </p>
                        </div>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Örnek Hesaplamalar:</h3>

                        <div className="space-y-6 my-8">
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h4 className="font-bold text-blue-900 mb-3">📝 Türkçe Net Hesaplama</h4>
                                <p className="text-gray-800 mb-2">
                                    <strong>Durum:</strong> 32 doğru, 6 yanlış, 2 boş
                                </p>
                                <p className="text-gray-800 mb-2">
                                    <strong>Hesaplama:</strong> 32 - (6 ÷ 4) = 32 - 1.5 = <strong className="text-blue-700">30.5 net</strong>
                                </p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg">
                                <h4 className="font-bold text-green-900 mb-3">🔢 Matematik Net Hesaplama</h4>
                                <p className="text-gray-800 mb-2">
                                    <strong>Durum:</strong> 25 doğru, 12 yanlış, 3 boş
                                </p>
                                <p className="text-gray-800 mb-2">
                                    <strong>Hesaplama:</strong> 25 - (12 ÷ 4) = 25 - 3 = <strong className="text-green-700">22 net</strong>
                                </p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-lg">
                                <h4 className="font-bold text-purple-900 mb-3">🔬 Fen Bilimleri Net Hesaplama</h4>
                                <p className="text-gray-800 mb-2">
                                    <strong>Durum:</strong> 15 doğru, 4 yanlış, 1 boş
                                </p>
                                <p className="text-gray-800 mb-2">
                                    <strong>Hesaplama:</strong> 15 - (4 ÷ 4) = 15 - 1 = <strong className="text-purple-700">14 net</strong>
                                </p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-lg">
                                <h4 className="font-bold text-orange-900 mb-3">🌍 Sosyal Bilimler Net Hesaplama</h4>
                                <p className="text-gray-800 mb-2">
                                    <strong>Durum:</strong> 16 doğru, 3 yanlış, 1 boş
                                </p>
                                <p className="text-gray-800 mb-2">
                                    <strong>Hesaplama:</strong> 16 - (3 ÷ 4) = 16 - 0.75 = <strong className="text-orange-700">15.25 net</strong>
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">
                                TYT Netlerinizi Hemen Hesaplayın!
                            </h2>
                            <p className="text-xl mb-6 text-blue-100">
                                Ücretsiz hesaplama aracımızla TYT netlerinizi anında öğrenin
                            </p>
                            <Link
                                href="/"
                                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                            >
                                Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">TYT'de Başarılı Olmak İçin İpuçları</h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">1. Zaman Yönetimi</h3>
                                <p className="text-gray-700">
                                    TYT'de 120 soru için 135 dakikanız var. Her soru için ortalama 1 dakika ayırın.
                                    Takıldığınız soruları işaretleyip geçin, sonra dönün.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">2. Doğru Sıralama</h3>
                                <p className="text-gray-700">
                                    Önce güçlü olduğunuz dersleri çözün. Genellikle Türkçe → Sosyal → Fen → Matematik
                                    sırası önerilir ama kendi stratejinizi belirleyin.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">3. Şıkları Eleme</h3>
                                <p className="text-gray-700">
                                    Emin olmadığınız sorularda şıkları elemeye çalışın. 2 şık arasında kaldıysanız
                                    işaretleme yapın, 3-4 şık arasındaysanız boş bırakın.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">4. Düzenli Deneme</h3>
                                <p className="text-gray-700">
                                    Haftada en az 1-2 TYT denemesi çözün. Zaman yönetimini ve sınav stresini
                                    yönetmeyi öğrenin.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sık Sorulan Sorular</h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">❓ TYT'de kaç net iyi sayılır?</h3>
                                <p className="text-gray-700">
                                    80+ net çok iyi, 60-80 net iyi, 40-60 net orta seviye sayılır. Hedef üniversitenize
                                    göre değişir.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">❓ TYT'de hangi ders daha önemli?</h3>
                                <p className="text-gray-700">
                                    Tüm dersler önemlidir ama Matematik ve Türkçe daha fazla soru içerdiği için
                                    ağırlıkları daha fazladır.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">❓ TYT'de boş bırakmak mı yoksa şans işaretlemek mi?</h3>
                                <p className="text-gray-700">
                                    Eğer 2 şık arasında kaldıysanız işaretleyin. 3-4 şık arasındaysanız boş bırakın.
                                    İstatistiksel olarak 2 şık arasında şansınız %50'dir.
                                </p>
                            </div>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-net-hesaplama-nasil-yapilir" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">YKS Net Hesaplama Rehberi →</p>
                                    <p className="text-sm text-gray-700">Genel YKS net hesaplama</p>
                                </Link>
                                <Link href="/blog/ayt-puan-hesaplama" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">AYT Puan Hesaplama →</p>
                                    <p className="text-sm text-gray-700">AYT puanlarını hesaplayın</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
