import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'YKS\'de Kaç Net Kaç Puan Eder? 2026 Tablosu | YKS Net Hesaplama',
    description: 'TYT ve AYT\'de kaç net yaparsanız kaç puan alırsınız? Net-puan dönüşüm tablosu ve hesaplama. YKS 2026 için güncel.',
    keywords: 'kaç net kaç puan, yks net puan tablosu, tyt kaç net kaç puan, ayt kaç net kaç puan',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-kac-net-kac-puan' },
    openGraph: {
        title: 'YKS\'de Kaç Net Kaç Puan Eder? 2026 Tablosu',
        description: 'TYT ve AYT\'de kaç net yaparsanız kaç puan alırsınız? Net-puan dönüşüm tablosu.',
        type: 'article',
        publishedTime: '2026-02-22',
        url: 'https://yksnethesapla.com/blog/yks-kac-net-kac-puan',
    },
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

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">TYT Net ve Puan İlişkisi</h2>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6 rounded-lg">
                            <h3 className="font-bold text-amber-900 mb-2">⚠️ Önemli Bilgi</h3>
                            <p className="text-gray-700">
                                TYT tek başına bir yerleştirme puanı üretmez. SAY, EA, SÖZ ve DİL puanları
                                TYT <strong>ve</strong> AYT netlerinin birlikte hesaplanmasıyla oluşur.
                                Aşağıdaki tablo, TYT netinin nihai puana katkısını gösterir; gerçek puanınız
                                AYT netlerinize de bağlıdır.
                            </p>
                        </div>

                        <div className="overflow-x-auto my-8">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left font-semibold border-b">TYT Toplam Net</th>
                                        <th className="px-6 py-3 text-left font-semibold border-b">TYT Katkısı (tahmini)</th>
                                        <th className="px-6 py-3 text-left font-semibold border-b">Seviye</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-green-50">
                                        <td className="px-6 py-4">110-120 net</td>
                                        <td className="px-6 py-4 font-semibold">~146-160 puan katkı</td>
                                        <td className="px-6 py-4 text-green-700">Mükemmel</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4">90-110 net</td>
                                        <td className="px-6 py-4 font-semibold">~120-146 puan katkı</td>
                                        <td className="px-6 py-4 text-green-600">Çok İyi</td>
                                    </tr>
                                    <tr className="border-b bg-blue-50">
                                        <td className="px-6 py-4">70-90 net</td>
                                        <td className="px-6 py-4 font-semibold">~93-120 puan katkı</td>
                                        <td className="px-6 py-4 text-blue-700">İyi</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4">50-70 net</td>
                                        <td className="px-6 py-4 font-semibold">~67-93 puan katkı</td>
                                        <td className="px-6 py-4 text-yellow-700">Orta</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4">30-50 net</td>
                                        <td className="px-6 py-4 font-semibold">~40-67 puan katkı</td>
                                        <td className="px-6 py-4 text-orange-700">Geliştirilmeli</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-500 mb-8">* Baz puan (100) + TYT katkısı (net × 1.33) + OBP katkısı = AYT olmadan temel puan. Nihai puan AYT netlerinize göre değişir.</p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">SAY Puanı Net-Puan Tablosu</h2>
                        <p className="text-gray-700 mb-4">
                            Aşağıdaki tablo, TYT tam net (120) + OBP katkısı olmadan, yalnızca AYT SAY netine göre
                            tahmini SAY puanlarını gösterir. Gerçek puanınız TYT netlerinize ve OBP'nize göre değişir.
                        </p>

                        <div className="overflow-x-auto my-8">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-green-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left font-semibold border-b">AYT SAY Net (toplam)</th>
                                        <th className="px-6 py-3 text-left font-semibold border-b">Tahmini SAY Puanı*</th>
                                        <th className="px-6 py-3 text-left font-semibold border-b">Hedef Bölümler</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-green-50">
                                        <td className="px-6 py-4">70-80 net</td>
                                        <td className="px-6 py-4 font-semibold">~460-500</td>
                                        <td className="px-6 py-4 text-sm">Tıp (İyi Üniversiteler)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4">55-70 net</td>
                                        <td className="px-6 py-4 font-semibold">~410-460</td>
                                        <td className="px-6 py-4 text-sm">Mühendislik (İyi Üniversiteler)</td>
                                    </tr>
                                    <tr className="border-b bg-blue-50">
                                        <td className="px-6 py-4">40-55 net</td>
                                        <td className="px-6 py-4 font-semibold">~360-410</td>
                                        <td className="px-6 py-4 text-sm">Mühendislik (Orta Üniversiteler)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4">25-40 net</td>
                                        <td className="px-6 py-4 font-semibold">~310-360</td>
                                        <td className="px-6 py-4 text-sm">Fen Fakülteleri</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4">10-25 net</td>
                                        <td className="px-6 py-4 font-semibold">~260-310</td>
                                        <td className="px-6 py-4 text-sm">MYO, Açık Öğretim</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-500 mb-8">* TYT ~100 net varsayımıyla tahmini değerlerdir. ÖSYM kesin katsayıları açıklamaz.</p>

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
