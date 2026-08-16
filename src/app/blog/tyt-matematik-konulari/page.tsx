import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'TYT Matematik Konuları 2027: Problemler, Geometri ve Yol Haritası',
    description: 'TYT Matematik\'te hangi konular çıkıyor? Problemler krallığı, yeni nesil geometri ve konu öncelik yol haritası. 2027 ÖSYM güncel rehber.',
    keywords: 'tyt matematik konuları, tyt matematik 2027, tyt problemler, tyt geometri, ebob ekok, yks matematik',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-matematik-konulari' },
    openGraph: {
        title: 'TYT Matematik Konuları 2027: Problemler, Geometri ve Yol Haritası',
        description: 'TYT Matematik\'te hangi konular çıkıyor? Problemler, geometri ve konu öncelik yol haritası.',
        type: 'article',
        publishedTime: '2027-02-19',
        url: 'https://yksnethesapla.com/blog/tyt-matematik-konulari',
    },
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
                            <time className="text-gray-600">19 Şubat 2027</time>
                            <span className="text-gray-600">• 8 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TYT Matematik Konuları 2027: Problemler, Geometri ve Yol Haritası
                        </h1>
                        <p className="text-xl text-gray-700">
                            TYT Matematik = Problemler. 40 sorunun 12-14&apos;ü doğrudan problem sorusudur.
                            Bu gerçeği bilerek hazırlanmak, rakiplerinizden bir adım önde olmanızı sağlar.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none">
                        <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
                            <h3 className="font-bold text-green-900 mb-3">📊 2027 Genel Bilgiler</h3>
                            <ul className="space-y-1 text-gray-700 text-sm">
                                <li>• <strong>Toplam Soru:</strong> 40 soru</li>
                                <li>• <strong>Süre:</strong> ~55 dakika (toplam 165 dakika içinde)</li>
                                <li>• <strong>Zorluk:</strong> Orta seviye — hız sınavı</li>
                                <li>• <strong>Hedef:</strong> 30+ net çok iyi sayılır</li>
                            </ul>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Problemler Krallığı</h2>
                        <p className="text-gray-700 mb-4">
                            TYT Matematik&apos;te en fazla soru çıkan alan <strong>Problemler</strong>&apos;dir (12-14 soru).
                            Her gün 20 problem çözmek bu alanda &quot;ilaç&quot; etkisi yapar.
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-green-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Konu</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Tahmini Soru</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Öncelik</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-red-50"><td className="px-5 py-3 font-medium">Problemler (Yaş, İşçi, Hız, Karışım)</td><td className="px-5 py-3 text-center font-bold">12-14</td><td className="px-5 py-3 text-red-700 font-bold">🔴 En Yüksek</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Geometri (Üçgen, Dörtgen, Çember)</td><td className="px-5 py-3 text-center font-bold">8-10</td><td className="px-5 py-3 text-orange-700 font-bold">🟠 Yüksek</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Denklemler ve Eşitsizlikler</td><td className="px-5 py-3 text-center font-bold">5-6</td><td className="px-5 py-3 text-yellow-700 font-bold">🟡 Orta</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Temel Kavramlar (EBOB, EKOK)</td><td className="px-5 py-3 text-center font-bold">4-5</td><td className="px-5 py-3 text-yellow-700 font-bold">🟡 Orta</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Fonksiyonlar</td><td className="px-5 py-3 text-center font-bold">4-5</td><td className="px-5 py-3 text-yellow-700 font-bold">🟡 Orta</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Veri, Sayma ve Olasılık</td><td className="px-5 py-3 text-center font-bold">4-5</td><td className="px-5 py-3 text-blue-700 font-bold">🔵 Normal</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Permütasyon ve Kombinasyon</td><td className="px-5 py-3 text-center font-bold">3-4</td><td className="px-5 py-3 text-blue-700 font-bold">🔵 Normal</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Yeni Nesil Geometri: Şekli Hayal Et</h2>
                        <p className="text-gray-700 mb-4">
                            2027 ÖSYM soruları artık sadece formül bilgisini değil,
                            <strong> şekli hayal etme</strong> becerisini ölçüyor.
                            Katlama, döndürme ve yansıma sorularında formül değil, zihinsel görselleştirme kazandırır.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Temel Formüller</h2>
                        <div className="space-y-3 my-6">
                            <div className="bg-gray-50 p-4 rounded-lg font-mono text-center">
                                <p className="text-lg font-bold">EBOB(a,b) × EKOK(a,b) = a × b</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg font-mono text-center">
                                <p className="text-lg font-bold">Hız × Zaman = Yol</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg font-mono text-center">
                                <p className="text-lg font-bold">Üçgen Alanı = (Taban × Yükseklik) ÷ 2</p>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Konu Önceliği Yol Haritası</h2>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
                            <p className="text-blue-900 font-medium mb-3">
                                İlk 12 temel konu bitmeden Problemlere geçmeyin. Temeli olmayan yapı çöker.
                            </p>
                            <ol className="text-gray-700 text-sm space-y-1 list-decimal list-inside">
                                <li>Sayı Kümeleri ve Temel İşlemler</li>
                                <li>EBOB – EKOK</li>
                                <li>Üslü ve Köklü Sayılar</li>
                                <li>Birinci Dereceden Denklemler</li>
                                <li>İkinci Dereceden Denklemler</li>
                                <li>Eşitsizlikler</li>
                                <li>Üçgenler</li>
                                <li>Dörtgenler</li>
                                <li>Çember ve Daire</li>
                                <li>Fonksiyonlar</li>
                                <li>Permütasyon – Kombinasyon</li>
                                <li>Veri Analizi</li>
                                <li className="font-bold text-blue-700">→ Problemler (Yaş, Hız, İşçi, Karışım)</li>
                            </ol>
                        </div>
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">TYT Netlerinizi Hesaplayın</h2>
                            <p className="text-xl mb-6 text-blue-100">Matematik netinizi ve tahmini puanınızı anında öğrenin</p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Hesapla →
                            </Link>
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
