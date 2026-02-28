import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'AYT Puan Hesaplama: SAY, EA, SÖZ, DİL Puanları 2026 | YKS Net Hesaplama',
    description: 'AYT sınavında SAY, EA, SÖZ ve DİL puanları nasıl hesaplanır? Detaylı formüller, katsayılar ve örneklerle AYT puan hesaplama rehberi.',
    keywords: 'ayt puan hesaplama, say puanı, ea puanı, söz puanı, dil puanı, ayt net hesaplama',
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
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                AYT
                            </span>
                            <time className="text-gray-600">26 Şubat 2026</time>
                            <span className="text-gray-600">• 7 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            AYT Puan Hesaplama: SAY, EA, SÖZ, DİL Puanları
                        </h1>
                        <p className="text-xl text-gray-600">
                            AYT sınavında SAY, EA, SÖZ ve DİL puanları nasıl hesaplanır? Detaylı formüller ve örneklerle öğrenin.
                        </p>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">AYT Nedir?</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            AYT (Alan Yeterlilik Testi), YKS'nin ikinci oturumudur ve öğrencilerin seçtikleri alana göre
                            farklı derslerden sorular içerir. AYT'ye girebilmek için TYT'den en az 150 puan almanız gerekir.
                            AYT'de 4 farklı puan türü vardır: SAY, EA, SÖZ ve DİL.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">4 Puan Türü ve Soru Dağılımı</h2>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-green-900 mb-4">🔬 SAY (Sayısal)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Matematik: 40 soru</li>
                                    <li>• Fizik: 14 soru</li>
                                    <li>• Kimya: 13 soru</li>
                                    <li>• Biyoloji: 13 soru</li>
                                    <li className="font-bold text-green-800">Toplam: 80 soru</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-900 mb-4">⚖️ EA (Eşit Ağırlık)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Matematik: 40 soru</li>
                                    <li>• Edebiyat: 24 soru</li>
                                    <li>• Tarih-1: 10 soru</li>
                                    <li>• Coğrafya-1: 6 soru</li>
                                    <li className="font-bold text-blue-800">Toplam: 80 soru</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-purple-900 mb-4">📚 SÖZ (Sözel)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Edebiyat: 24 soru</li>
                                    <li>• Tarih-1: 10 soru</li>
                                    <li>• Coğrafya-1: 6 soru</li>
                                    <li>• Tarih-2: 11 soru</li>
                                    <li>• Coğrafya-2: 11 soru</li>
                                    <li>• Felsefe: 12 soru</li>
                                    <li>• Din Kültürü: 6 soru</li>
                                    <li className="font-bold text-purple-800">Toplam: 80 soru</li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-orange-900 mb-4">🌍 DİL (Yabancı Dil)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Yabancı Dil: 80 soru</li>
                                    <li className="text-sm">(İngilizce, Almanca, Fransızca, Arapça)</li>
                                    <li className="font-bold text-orange-800">Toplam: 80 soru</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">AYT Puan Hesaplama Formülü</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            AYT puanı, TYT puanı ve AYT ham puanının birleştirilmesiyle hesaplanır. Her puan türü için
                            farklı katsayılar kullanılır.
                        </p>

                        <div className="bg-gray-100 p-6 rounded-lg my-6">
                            <h3 className="font-bold text-gray-900 mb-4">Genel Formül:</h3>
                            <p className="text-lg text-gray-800 mb-2">
                                YKS Puanı = (TYT Puanı × 0.4) + (AYT Ham Puanı × 0.6)
                            </p>
                            <p className="text-sm text-gray-600">
                                * OBP (Ortaöğretim Başarı Puanı) bu hesaba eklenir
                            </p>
                        </div>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">SAY Puanı Katsayıları</h3>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-green-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-gray-900 font-semibold border-b">Ders</th>
                                        <th className="px-6 py-3 text-left text-gray-900 font-semibold border-b">Katsayı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-6 py-4">TYT Matematik</td><td className="px-6 py-4 font-semibold">3</td></tr>
                                    <tr className="border-b"><td className="px-6 py-4">TYT Fen</td><td className="px-6 py-4 font-semibold">3</td></tr>
                                    <tr className="border-b"><td className="px-6 py-4">AYT Matematik</td><td className="px-6 py-4 font-semibold">5</td></tr>
                                    <tr className="border-b"><td className="px-6 py-4">AYT Fizik</td><td className="px-6 py-4 font-semibold">5</td></tr>
                                    <tr className="border-b"><td className="px-6 py-4">AYT Kimya</td><td className="px-6 py-4 font-semibold">4</td></tr>
                                    <tr><td className="px-6 py-4">AYT Biyoloji</td><td className="px-6 py-4 font-semibold">4</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">EA Puanı Katsayıları</h3>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-gray-900 font-semibold border-b">Ders</th>
                                        <th className="px-6 py-3 text-left text-gray-900 font-semibold border-b">Katsayı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-6 py-4">TYT Matematik</td><td className="px-6 py-4 font-semibold">3</td></tr>
                                    <tr className="border-b"><td className="px-6 py-4">TYT Türkçe</td><td className="px-6 py-4 font-semibold">3</td></tr>
                                    <tr className="border-b"><td className="px-6 py-4">AYT Matematik</td><td className="px-6 py-4 font-semibold">4</td></tr>
                                    <tr className="border-b"><td className="px-6 py-4">AYT Edebiyat</td><td className="px-6 py-4 font-semibold">4</td></tr>
                                    <tr className="border-b"><td className="px-6 py-4">AYT Tarih-1</td><td className="px-6 py-4 font-semibold">3</td></tr>
                                    <tr><td className="px-6 py-4">AYT Coğrafya-1</td><td className="px-6 py-4 font-semibold">3</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">
                                AYT Puanınızı Hemen Hesaplayın!
                            </h2>
                            <p className="text-xl mb-6 text-blue-100">
                                SAY, EA, SÖZ ve DİL puanlarınızı anında öğrenin
                            </p>
                            <Link
                                href="/"
                                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                            >
                                Ücretsiz Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Hangi Puan Türünü Seçmeliyim?</h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                                <h3 className="font-bold text-green-900 mb-2">SAY (Sayısal) - Kimler Seçmeli?</h3>
                                <p className="text-gray-700 mb-3">
                                    Matematik ve fen bilimlerinde güçlüyseniz SAY tercih edin.
                                </p>
                                <p className="text-sm text-gray-600">
                                    <strong>Bölümler:</strong> Mühendislik, Tıp, Diş Hekimliği, Eczacılık, Mimarlık, Veterinerlik
                                </p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                                <h3 className="font-bold text-blue-900 mb-2">EA (Eşit Ağırlık) - Kimler Seçmeli?</h3>
                                <p className="text-gray-700 mb-3">
                                    Hem sayısal hem sözel derslerde dengeli iseniz EA tercih edin.
                                </p>
                                <p className="text-sm text-gray-600">
                                    <strong>Bölümler:</strong> İktisat, İşletme, Hukuk, Siyaset Bilimi, Uluslararası İlişkiler
                                </p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                                <h3 className="font-bold text-purple-900 mb-2">SÖZ (Sözel) - Kimler Seçmeli?</h3>
                                <p className="text-gray-700 mb-3">
                                    Edebiyat, tarih ve sosyal bilimlerde güçlüyseniz SÖZ tercih edin.
                                </p>
                                <p className="text-sm text-gray-600">
                                    <strong>Bölümler:</strong> Türk Dili, Tarih, Felsefe, Psikoloji, Sosyoloji, Gazetecilik
                                </p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                                <h3 className="font-bold text-orange-900 mb-2">DİL (Yabancı Dil) - Kimler Seçmeli?</h3>
                                <p className="text-gray-700 mb-3">
                                    Yabancı dilde çok güçlüyseniz DİL tercih edin.
                                </p>
                                <p className="text-sm text-gray-600">
                                    <strong>Bölümler:</strong> İngilizce Öğretmenliği, Mütercim-Tercümanlık, Amerikan Kültürü
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sık Sorulan Sorular</h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">❓ Birden fazla puan türü ile başvurabilir miyim?</h3>
                                <p className="text-gray-700">
                                    Evet! Tercih sırasında farklı puan türlerinden bölümler seçebilirsiniz. Örneğin hem SAY
                                    hem EA bölümlerine başvurabilirsiniz.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">❓ AYT'de kaç net iyi sayılır?</h3>
                                <p className="text-gray-700">
                                    SAY için 50+ net, EA için 45+ net, SÖZ için 40+ net iyi sayılır. Ancak hedef bölümünüze
                                    göre değişir.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">❓ TYT'den düşük puan alsam AYT'ye girebilir miyim?</h3>
                                <p className="text-gray-700">
                                    TYT'den en az 150 puan almanız gerekir. Aksi takdirde AYT puanınız hesaplanmaz.
                                </p>
                            </div>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-puan-turleri" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">YKS Puan Türleri →</p>
                                    <p className="text-sm text-gray-700">SAY, EA, SÖZ, DİL detaylı</p>
                                </Link>
                                <Link href="/blog/tyt-net-hesaplama-rehberi" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    <p className="font-semibold text-green-900">TYT Net Hesaplama →</p>
                                    <p className="text-sm text-gray-700">TYT netlerinizi hesaplayın</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
