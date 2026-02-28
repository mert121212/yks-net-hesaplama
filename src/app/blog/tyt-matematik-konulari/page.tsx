import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'TYT Matematik Konuları ve Soru Dağılımı 2026 | YKS Net Hesaplama',
    description: 'TYT Matematik sınavında hangi konular çıkıyor? Konu dağılımı, soru sayıları ve çalışma stratejileri. 2026 YKS için güncel.',
    keywords: 'tyt matematik konuları, tyt matematik soru dağılımı, tyt matematik 2026, yks matematik',
}

export default function TYTMatematikKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Matematik Konuları</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">TYT</span>
                            <time className="text-gray-600">19 Şubat 2026</time>
                            <span className="text-gray-600">• 7 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TYT Matematik Konuları ve Soru Dağılımı 2026
                        </h1>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            TYT Matematik, 40 sorudan oluşur ve YKS'nin en önemli derslerinden biridir.
                            Hangi konulardan kaç soru çıktığını bilmek, çalışma stratejinizi belirlemenize yardımcı olur.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                            <h3 className="font-bold text-blue-900 mb-3">📊 Genel Bilgiler</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• <strong>Toplam Soru:</strong> 40 soru</li>
                                <li>• <strong>Süre:</strong> Yaklaşık 50 dakika (toplam 135 dakika içinde)</li>
                                <li>• <strong>Zorluk:</strong> Orta seviye</li>
                                <li>• <strong>Hedef:</strong> 30+ net iyi sayılır</li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">TYT Matematik Konu Dağılımı</h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-green-900 mb-3">1. Temel Kavramlar (4-5 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Sayı Kümeleri ve Özellikleri</li>
                                    <li>• Bölme ve Bölünebilme</li>
                                    <li>• EBOB - EKOK</li>
                                    <li>• Rasyonel Sayılar</li>
                                    <li>• Basit Eşitsizlikler</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">2. Denklemler ve Eşitsizlikler (5-6 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Birinci Dereceden Denklemler</li>
                                    <li>• İkinci Dereceden Denklemler</li>
                                    <li>• Mutlak Değer</li>
                                    <li>• Eşitsizlik Sistemleri</li>
                                    <li>• Üslü ve Köklü Sayılar</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-purple-900 mb-3">3. Fonksiyonlar (4-5 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Fonksiyon Kavramı</li>
                                    <li>• Fonksiyon Türleri</li>
                                    <li>• Fonksiyon İşlemleri</li>
                                    <li>• Ters Fonksiyon</li>
                                    <li>• Fonksiyon Grafikleri</li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-orange-900 mb-3">4. Polinomlar (3-4 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Polinom Kavramı</li>
                                    <li>• Polinomlarda İşlemler</li>
                                    <li>• Çarpanlara Ayırma</li>
                                    <li>• Polinomların Çözümü</li>
                                </ul>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-red-900 mb-3">5. Permütasyon ve Kombinasyon (3-4 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Permütasyon</li>
                                    <li>• Kombinasyon</li>
                                    <li>• Olasılık</li>
                                    <li>• Binom Açılımı</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-yellow-900 mb-3">6. Geometri (8-10 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Üçgenler (Açı, Kenar, Alan)</li>
                                    <li>• Dörtgenler (Kare, Dikdörtgen, Paralelkenar)</li>
                                    <li>• Çember ve Daire</li>
                                    <li>• Analitik Geometri (Doğru, Eğim)</li>
                                    <li>• Katı Cisimler (Hacim, Alan)</li>
                                </ul>
                            </div>

                            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-indigo-900 mb-3">7. Veri, Sayma ve Olasılık (4-5 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Veri Analizi</li>
                                    <li>• Merkezi Eğilim Ölçüleri (Ortalama, Medyan, Mod)</li>
                                    <li>• Grafik Yorumlama</li>
                                    <li>• Olasılık Hesaplamaları</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">TYT Netlerinizi Hesaplayın!</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                Matematik netinizi anında öğrenin
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Çalışma Stratejileri</h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                                <h3 className="font-bold text-green-900 mb-2">1. Geometriye Öncelik Verin</h3>
                                <p className="text-gray-700">
                                    Geometri 8-10 soru ile en fazla soru çıkan konudur. Bu konuya daha fazla zaman ayırın.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                                <h3 className="font-bold text-blue-900 mb-2">2. Temel Konuları İyi Öğrenin</h3>
                                <p className="text-gray-700">
                                    Sayı kümeleri, denklemler gibi temel konular diğer konuların da temelidir.
                                    Bu konuları sağlam öğrenin.
                                </p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                                <h3 className="font-bold text-purple-900 mb-2">3. Bol Soru Çözün</h3>
                                <p className="text-gray-700">
                                    Matematik pratik ister. Her gün en az 20-30 soru çözün. Farklı kaynaklardan
                                    sorular çözmeye özen gösterin.
                                </p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                                <h3 className="font-bold text-orange-900 mb-2">4. Zaman Yönetimi</h3>
                                <p className="text-gray-700">
                                    40 soru için yaklaşık 50 dakikanız var. Soru başına ortalama 1-1.5 dakika ayırın.
                                    Takıldığınız soruları işaretleyip geçin.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sık Yapılan Hatalar</h2>

                        <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
                            <h3 className="font-bold text-red-900 mb-3">⚠️ Dikkat Edilmesi Gerekenler</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>❌ Geometri konusunu ihmal etmek</li>
                                <li>❌ Sadece konu çalışıp soru çözmemek</li>
                                <li>❌ Zor sorularda çok zaman kaybetmek</li>
                                <li>❌ Formülleri ezberlemeden anlamaya çalışmamak</li>
                                <li>❌ Deneme sınavlarında zaman yönetimi yapmamak</li>
                            </ul>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-net-hesaplama-rehberi" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    <p className="font-semibold text-green-900">TYT Net Hesaplama →</p>
                                </Link>
                                <Link href="/blog/ayt-matematik-konulari" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">AYT Matematik Konuları →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
