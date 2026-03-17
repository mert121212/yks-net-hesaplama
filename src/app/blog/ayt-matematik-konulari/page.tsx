import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'AYT Matematik Konuları: SAY Öğrencileri İçin Rehber 2026',
    description: 'AYT Matematik sınavına nasıl hazırlanılır? Tüm konular, formüller ve çözüm teknikleri. SAY öğrencileri için detaylı rehber.',
    keywords: 'ayt matematik konuları, ayt matematik 2026, say matematik, yks matematik',
    alternates: { canonical: 'https://yksnethesapla.com/blog/ayt-matematik-konulari' },
    openGraph: {
        title: 'AYT Matematik Konuları: SAY Öğrencileri İçin Rehber 2026',
        description: 'AYT Matematik sınavına nasıl hazırlanılır? Tüm konular ve çözüm teknikleri.',
        type: 'article',
        publishedTime: '2026-02-18',
        url: 'https://yksnethesapla.com/blog/ayt-matematik-konulari',
    },
}

export default function AYTMatematikKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">AYT Matematik Konuları</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AYT</span>
                            <time className="text-gray-600">18 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            AYT Matematik Konuları: SAY Öğrencileri İçin
                        </h1>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            AYT Matematik, SAY puanının en önemli dersidir. 40 sorudan oluşur ve yüksek katsayıya sahiptir.
                            Başarılı olmak için tüm konuları iyi bilmeniz gerekir.
                        </p>

                        <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
                            <h3 className="font-bold text-green-900 mb-3">📊 Genel Bilgiler</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• <strong>Toplam Soru:</strong> 40 soru</li>
                                <li>• <strong>Süre:</strong> Yaklaşık 60 dakika</li>
                                <li>• <strong>Zorluk:</strong> Yüksek seviye</li>
                                <li>• <strong>Hedef:</strong> 25+ net çok iyi sayılır</li>
                                <li>• <strong>Katsayı:</strong> SAY puanında en yüksek (5.0)</li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">AYT Matematik Konu Dağılımı</h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">1. Trigonometri (6-8 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Trigonometrik Fonksiyonlar</li>
                                    <li>• Trigonometrik Denklemler</li>
                                    <li>• Trigonometrik Eşitlikler</li>
                                    <li>• Ters Trigonometrik Fonksiyonlar</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-purple-900 mb-3">2. Fonksiyonlar (5-7 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Fonksiyon Kavramı ve Türleri</li>
                                    <li>• Fonksiyonlarda İşlemler</li>
                                    <li>• Ters ve Bileşke Fonksiyon</li>
                                    <li>• Özel Fonksiyonlar</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-green-900 mb-3">3. Logaritma ve Üstel Fonksiyonlar (4-5 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Üstel Fonksiyonlar</li>
                                    <li>• Logaritma Kavramı</li>
                                    <li>• Logaritma Özellikleri</li>
                                    <li>• Logaritmik Denklemler</li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-orange-900 mb-3">4. Diziler (3-4 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Aritmetik Dizi</li>
                                    <li>• Geometrik Dizi</li>
                                    <li>• Harmonik Dizi</li>
                                    <li>• Dizi Problemleri</li>
                                </ul>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-red-900 mb-3">5. Limit ve Süreklilik (4-5 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Limit Kavramı</li>
                                    <li>• Limit Hesaplama Yöntemleri</li>
                                    <li>• Süreklilik</li>
                                    <li>• Belirsizlik Durumları</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-yellow-900 mb-3">6. Türev (5-6 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Türev Kavramı</li>
                                    <li>• Türev Alma Kuralları</li>
                                    <li>• Türev Uygulamaları</li>
                                    <li>• Ekstremum Noktaları</li>
                                </ul>
                            </div>

                            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-indigo-900 mb-3">7. İntegral (5-6 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Belirsiz İntegral</li>
                                    <li>• Belirli İntegral</li>
                                    <li>• İntegral Alma Yöntemleri</li>
                                    <li>• Alan ve Hacim Hesaplama</li>
                                </ul>
                            </div>

                            <div className="bg-pink-50 border-l-4 border-pink-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-pink-900 mb-3">8. Analitik Geometri (3-4 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Doğru Denklemi</li>
                                    <li>• Çember Denklemi</li>
                                    <li>• Parabol, Elips, Hiperbol</li>
                                    <li>• Konikler</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">AYT Puanınızı Hesaplayın!</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                SAY puanınızı anında öğrenin
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Başarı İçin Stratejiler</h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                                <h3 className="font-bold text-blue-900 mb-2">1. Konu Sırasına Dikkat Edin</h3>
                                <p className="text-gray-700">
                                    Trigonometri ve Fonksiyonlar en çok soru çıkan konulardır. Bu konulara öncelik verin.
                                </p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                                <h3 className="font-bold text-green-900 mb-2">2. Formülleri İyi Bilin</h3>
                                <p className="text-gray-700">
                                    AYT Matematik'te çok sayıda formül var. Formülleri ezberlemek yerine anlamaya çalışın
                                    ve düzenli tekrar edin.
                                </p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                                <h3 className="font-bold text-purple-900 mb-2">3. Zor Sorulara Hazır Olun</h3>
                                <p className="text-gray-700">
                                    AYT Matematik soruları TYT'den daha zordur. Farklı kaynaklardan zor sorular çözün.
                                </p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                                <h3 className="font-bold text-orange-900 mb-2">4. Türev ve İntegral'e Önem Verin</h3>
                                <p className="text-gray-700">
                                    Bu konular hem çok soru çıkar hem de diğer konularla bağlantılıdır.
                                    İyi öğrenmeniz şarttır.
                                </p>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
                            <h3 className="font-bold text-yellow-900 mb-3">💡 Önemli İpuçları</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>✓ Her gün en az 2 saat AYT Matematik çalışın</li>
                                <li>✓ Haftada en az 1 AYT denemesi çözün</li>
                                <li>✓ Yanlış yaptığınız soruları not alın ve tekrar çözün</li>
                                <li>✓ Grafik çizme ve yorumlama becerilerinizi geliştirin</li>
                                <li>✓ Hesap makinesi kullanmadan pratik yapın</li>
                            </ul>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/ayt-puan-hesaplama" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">AYT Puan Hesaplama →</p>
                                </Link>
                                <Link href="/blog/tyt-matematik-konulari" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    <p className="font-semibold text-green-900">TYT Matematik Konuları →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
