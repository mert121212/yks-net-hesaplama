import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'AYT Matematik Konuları 2026: LTİ, Fonksiyonlar ve Eleme Sınavı Rehberi',
    description: 'AYT Matematik\'te Limit, Türev, İntegral (LTİ) ve Fonksiyonlar nasıl çalışılır? SAY öğrencileri için 2026 ÖSYM güncel konu rehberi ve strateji.',
    keywords: 'ayt matematik konuları, ayt matematik 2026, limit türev integral, fonksiyonlar, say matematik, yks matematik',
    alternates: { canonical: 'https://yksnethesapla.com/blog/ayt-matematik-konulari' },
    openGraph: {
        title: 'AYT Matematik Konuları 2026: LTİ, Fonksiyonlar ve Eleme Sınavı Rehberi',
        description: 'AYT Matematik\'te LTİ ve Fonksiyonlar nasıl çalışılır? SAY öğrencileri için güncel rehber.',
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
                            <span className="text-gray-600">• 9 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            AYT Matematik Konuları 2026: LTİ, Fonksiyonlar ve Eleme Sınavı Rehberi
                        </h1>
                        <p className="text-xl text-gray-700">
                            AYT Matematik bir &quot;bilgi sınavı&quot;dır, TYT ise &quot;hız sınavı&quot;. Bu farkı kavramadan
                            hazırlanan adaylar, bildikleri soruları bile çözemeden çıkar.
                        </p>
                    </header>
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 my-6">
                            <h3 className="font-bold text-purple-900 mb-3">📊 2026 Genel Bilgiler</h3>
                            <ul className="space-y-1 text-gray-700 text-sm">
                                <li>• <strong>Toplam Soru:</strong> 40 soru</li>
                                <li>• <strong>Süre:</strong> ~60 dakika (180 dakika içinde)</li>
                                <li>• <strong>Zorluk:</strong> Yüksek — bilgi ve kavrama sınavı</li>
                                <li>• <strong>Hedef:</strong> 25+ net çok iyi sayılır</li>
                                <li>• <strong>Puan Türü:</strong> SAY puanının en kritik dersi</li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Kutsal Üçlü: LTİ (Limit, Türev, İntegral)</h2>
                        <p className="text-gray-700 mb-4">
                            AYT Matematik&apos;te toplam <strong>10-12 soru</strong> Limit, Türev ve İntegral&apos;den gelir.
                            Bu üç konuda ustalaşmak, Tıp ve Mühendislik kapısını açar.
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-purple-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Konu</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Tahmini Soru</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Öncelik</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-red-50"><td className="px-5 py-3 font-medium">Türev (Kurallar + Uygulamalar)</td><td className="px-5 py-3 text-center font-bold">5-6</td><td className="px-5 py-3 text-red-700 font-bold">🔴 En Yüksek</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">İntegral (Belirsiz + Belirli)</td><td className="px-5 py-3 text-center font-bold">5-6</td><td className="px-5 py-3 text-red-700 font-bold">🔴 En Yüksek</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Fonksiyonlar</td><td className="px-5 py-3 text-center font-bold">5-7</td><td className="px-5 py-3 text-orange-700 font-bold">🟠 Yüksek</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Trigonometri</td><td className="px-5 py-3 text-center font-bold">6-8</td><td className="px-5 py-3 text-orange-700 font-bold">🟠 Yüksek</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Limit ve Süreklilik</td><td className="px-5 py-3 text-center font-bold">4-5</td><td className="px-5 py-3 text-yellow-700 font-bold">🟡 Orta</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Logaritma ve Üstel Fonksiyonlar</td><td className="px-5 py-3 text-center font-bold">4-5</td><td className="px-5 py-3 text-yellow-700 font-bold">🟡 Orta</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Diziler</td><td className="px-5 py-3 text-center font-bold">3-4</td><td className="px-5 py-3 text-blue-700 font-bold">🔵 Normal</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Analitik Geometri</td><td className="px-5 py-3 text-center font-bold">3-4</td><td className="px-5 py-3 text-blue-700 font-bold">🔵 Normal</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Fonksiyonlar: Her Şeyin Temeli</h2>
                        <p className="text-gray-700 mb-4">
                            Fonksiyon bilmeyenin ne Trigonometri ne de Türev yapabileceğini unutmayın.
                            Bu konu <strong>sınavın kalbidir</strong>. Bileşke fonksiyon, ters fonksiyon ve
                            fonksiyon grafikleri mutlaka pekiştirilmelidir.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Analitik Geometri: Formül Bilgisi Kritik</h2>
                        <p className="text-gray-700 mb-4">
                            AYT&apos;de formül bilgisi TYT&apos;den çok daha kritiktir. Doğru denklemi, çember denklemini
                            ve konik kesitlerini (parabol, elips, hiperbol) formülsüz çözmek neredeyse imkânsızdır.
                        </p>
                        <div className="space-y-3 my-6">
                            <div className="bg-gray-50 p-4 rounded-lg font-mono text-center">
                                <p className="text-lg font-bold">Doğru: y = mx + b</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg font-mono text-center">
                                <p className="text-lg font-bold">Çember: (x-a)² + (y-b)² = r²</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg font-mono text-center">
                                <p className="text-lg font-bold">Türev: [f(x)·g(x)]&apos; = f&apos;(x)·g(x) + f(x)·g&apos;(x)</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">SAY Puanınızı Hesaplayın</h2>
                            <p className="text-xl mb-6 text-blue-100">AYT netlerinizi girerek SAY puanınızı ve sıralamanızı öğrenin</p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Hesapla →
                            </Link>
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
