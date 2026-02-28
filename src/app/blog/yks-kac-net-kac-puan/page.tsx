import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'YKS\'de Kaç Net Kaç Puan Eder? 2026 Tablosu | YKS Net Hesaplama',
    description: 'TYT ve AYT\'de kaç net yaparsanız kaç puan alırsınız? Net-puan dönüşüm tablosu ve hesaplama. YKS 2026 için güncel.',
    keywords: 'kaç net kaç puan, yks net puan tablosu, tyt kaç net kaç puan, ayt kaç net kaç puan',
}

export default function YKSKacNetKacPuan() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Kaç Net Kaç Puan</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600">22 Şubat 2026</time>
                            <span className="text-gray-600">• 6 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS'de Kaç Net Kaç Puan Eder? 2026
                        </h1>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            YKS'de net sayınız ile puan arasındaki ilişki her yıl değişir. Sınavın zorluğu,
                            öğrenci sayısı ve diğer faktörler puanları etkiler. İşte genel bir rehber.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                            <h3 className="font-bold text-blue-900 mb-3">💡 Önemli Not</h3>
                            <p className="text-gray-700">
                                Aşağıdaki tablolar tahmini değerlerdir. Gerçek puanlar sınavın zorluğuna göre
                                değişebilir. Kesin puanınızı öğrenmek için hesaplama aracımızı kullanın.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">TYT Net-Puan Tablosu</h2>

                        <div className="overflow-x-auto my-8">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left font-semibold border-b">TYT Net</th>
                                        <th className="px-6 py-3 text-left font-semibold border-b">Tahmini Puan</th>
                                        <th className="px-6 py-3 text-left font-semibold border-b">Seviye</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-green-50">
                                        <td className="px-6 py-4">100-120 net</td>
                                        <td className="px-6 py-4 font-semibold">480-500</td>
                                        <td className="px-6 py-4 text-green-700">Mükemmel</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4">90-100 net</td>
                                        <td className="px-6 py-4 font-semibold">450-480</td>
                                        <td className="px-6 py-4 text-green-600">Çok İyi</td>
                                    </tr>
                                    <tr className="border-b bg-blue-50">
                                        <td className="px-6 py-4">80-90 net</td>
                                        <td className="px-6 py-4 font-semibold">420-450</td>
                                        <td className="px-6 py-4 text-blue-700">İyi</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4">70-80 net</td>
                                        <td className="px-6 py-4 font-semibold">390-420</td>
                                        <td className="px-6 py-4 text-blue-600">İyi</td>
                                    </tr>
                                    <tr className="border-b bg-yellow-50">
                                        <td className="px-6 py-4">60-70 net</td>
                                        <td className="px-6 py-4 font-semibold">360-390</td>
                                        <td className="px-6 py-4 text-yellow-700">Orta</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4">50-60 net</td>
                                        <td className="px-6 py-4 font-semibold">330-360</td>
                                        <td className="px-6 py-4 text-yellow-600">Orta</td>
                                    </tr>
                                    <tr className="border-b bg-orange-50">
                                        <td className="px-6 py-4">40-50 net</td>
                                        <td className="px-6 py-4 font-semibold">300-330</td>
                                        <td className="px-6 py-4 text-orange-700">Geliştirilmeli</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4">30-40 net</td>
                                        <td className="px-6 py-4 font-semibold">270-300</td>
                                        <td className="px-6 py-4 text-orange-600">Geliştirilmeli</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">SAY Puanı Net-Puan Tablosu</h2>

                        <div className="overflow-x-auto my-8">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-green-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left font-semibold border-b">AYT Net (SAY)</th>
                                        <th className="px-6 py-3 text-left font-semibold border-b">Tahmini SAY Puanı</th>
                                        <th className="px-6 py-3 text-left font-semibold border-b">Hedef Bölümler</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-green-50">
                                        <td className="px-6 py-4">70-80 net</td>
                                        <td className="px-6 py-4 font-semibold">520-560</td>
                                        <td className="px-6 py-4 text-sm">Tıp (İyi Üniversiteler)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4">60-70 net</td>
                                        <td className="px-6 py-4 font-semibold">480-520</td>
                                        <td className="px-6 py-4 text-sm">Mühendislik (İyi Üniversiteler)</td>
                                    </tr>
                                    <tr className="border-b bg-blue-50">
                                        <td className="px-6 py-4">50-60 net</td>
                                        <td className="px-6 py-4 font-semibold">440-480</td>
                                        <td className="px-6 py-4 text-sm">Mühendislik (Orta Üniversiteler)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4">40-50 net</td>
                                        <td className="px-6 py-4 font-semibold">400-440</td>
                                        <td className="px-6 py-4 text-sm">Mühendislik, Fen Fakülteleri</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4">30-40 net</td>
                                        <td className="px-6 py-4 font-semibold">360-400</td>
                                        <td className="px-6 py-4 text-sm">Fen Fakülteleri, MYO</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Kendi Puanınızı Hesaplayın!</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                Netlerinizi girerek gerçek puanınızı öğrenin
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Net Artırma Stratejileri</h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                                <h3 className="font-bold text-green-900 mb-2">1. Zayıf Konuları Güçlendir</h3>
                                <p className="text-gray-700">
                                    Hangi konularda daha çok yanlış yapıyorsanız o konulara odaklanın.
                                    1 konuyu tam öğrenmek, 10 konuyu yarım öğrenmekten iyidir.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                                <h3 className="font-bold text-blue-900 mb-2">2. Düzenli Deneme Çöz</h3>
                                <p className="text-gray-700">
                                    Haftada en az 2 deneme çözün. Zaman yönetimini öğrenin ve
                                    sınav stresine alışın.
                                </p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                                <h3 className="font-bold text-purple-900 mb-2">3. Yanlışlarını Analiz Et</h3>
                                <p className="text-gray-700">
                                    Her deneme sonrası yanlışlarınızı inceleyin. Aynı hataları
                                    tekrar etmeyin.
                                </p>
                            </div>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-net-hesaplama-nasil-yapilir" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">YKS Net Hesaplama →</p>
                                </Link>
                                <Link href="/blog/yks-hazirlik-programi" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    <p className="font-semibold text-green-900">YKS Hazırlık Programı →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
