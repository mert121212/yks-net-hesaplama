import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'AYT Matematik Konuları ve Soru Dağılımı 2027 | Derece Rehberi',
    description: '2027 AYT Matematik konuları, LTİ (Limit, Türev, İntegral), Trigonometri soru dağılımı ve SAY/EA için 30+ net yapma taktikleri.',
    keywords: 'ayt matematik konuları, ayt matematik soru dağılımı, lti nasıl çalışılır, trigonometri taktikleri, ayt matematik 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/ayt-matematik-konulari' },
    openGraph: {
        title: 'AYT Matematik Konuları: SAY ve EA İçin Derece Rehberi',
        description: 'AYT Matematik sınavına nasıl hazırlanılır? Tüm konular, soru sayıları ve çalışma taktikleri.',
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
                            <span className="text-gray-600">• 12 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            AYT Matematik Konuları ve Soru Dağılımı: 30+ Net İçin Stratejik Plan
                        </h1>
                        <p className="text-xl text-gray-600">
                            TYT hız sınavıysa, AYT saf bilgi ve derinlik sınavıdır. 40 soruluk testin kalbini oluşturan LTİ ve Trigonometriyi nasıl halledeceğini konuşuyoruz.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Açık konuşalım: Hem Sayısalda (SAY) hem de Eşit Ağırlıkta (EA) ilk 50.000&apos;e girmenin tek bir ortak şartı vardır, o da <strong>AYT Matematik testinde 25-30 netin üzerine çıkmaktır</strong>. TYT&apos;de istediğin kadar iyi yap, AYT Matematik netin 15&apos;in altındaysa ilk 50 bin hayal olur.
                        </p>

                        <p>
                            AYT Matematik&apos;te süre sorununuz yoktur; 180 dakikalık sürede rahat rahat işlem yapabilirsiniz. Burada tek mesele <strong>konuyu gerçekten derinlemesine bilip bilmediğinizdir</strong>. Formülü ezberleyip geçenler ilk ters köşede elenir, mantığını anlayanlar ise 35+ nete yürür.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            AYT Matematik Soru Dağılımı Tablosu
                        </h2>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-purple-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Konu Başlığı</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Soru Sayısı</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Kritiklik Derecesi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Fonksiyonlar (Bileşke, Ters, Grafikler)</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3 text-purple-700 font-bold">Anahtar (Her Şeyin Başı)</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Polinomlar & 2. Dereceden Denklemler</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3 text-blue-700">Yüksek</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Parabol & Eşitsizlik Sistemleri</td><td className="px-5 py-3 text-center font-bold">2</td><td className="px-5 py-3 text-blue-700">Orta-Yüksek</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Logaritma</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3 text-green-700 font-bold">Banko Net (Kolay)</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Diziler (Aritmetik & Geometrik Dizi)</td><td className="px-5 py-3 text-center font-bold">1 - 2</td><td className="px-5 py-3 text-green-700 font-bold">Banko Net (Kolay)</td></tr>
                                    <tr className="border-b bg-yellow-50"><td className="px-5 py-3 font-medium font-bold text-amber-900">TRİGONOMETRİ (Yarım Açı, Denklemler)</td><td className="px-5 py-3 text-center font-bold text-amber-800 text-lg">4 - 5</td><td className="px-5 py-3 text-amber-800 font-bold">🟡 Sınavın %12&apos;si</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Limit ve Süreklilik</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3 text-red-600 font-semibold">LTİ Başlangıcı</td></tr>
                                    <tr className="border-b bg-red-50"><td className="px-5 py-3 font-medium font-bold text-red-900">TÜREV (Geometrik Yorum, Ekstremum, Grafik)</td><td className="px-5 py-3 text-center font-bold text-red-700 text-lg">4 - 5</td><td className="px-5 py-3 text-red-700 font-bold">🔴 Eleme Bölümü</td></tr>
                                    <tr className="border-b bg-red-50"><td className="px-5 py-3 font-medium font-bold text-red-900">İNTEGRAL (Belirli İntegral, Alan Hesabı)</td><td className="px-5 py-3 text-center font-bold text-red-700 text-lg">4 - 5</td><td className="px-5 py-3 text-red-700 font-bold">🔴 Zirve Bölümü</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Permütasyon, Kombinasyon, Olasılık</td><td className="px-5 py-3 text-center font-bold">2</td><td className="px-5 py-3 text-gray-700">Seçici</td></tr>
                                    <tr className="border-b bg-blue-50"><td className="px-5 py-3 font-medium font-bold text-blue-900">AYT GEOMETRİ & ANALİTİK (Çember, Analitik, Dönüşüm)</td><td className="px-5 py-3 text-center font-bold text-blue-800 text-lg">9 - 10</td><td className="px-5 py-3 text-blue-800 font-bold">Derece Yaptıran Kısım</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            LTİ ve Trigonometriyi Bitirmeden Sınava Girilmez
                        </h2>
                        <p>
                            Yukarıdaki tabloya dikkatle bak: <strong>Trigonometri + Limit + Türev + İntegral</strong> dörtlüsünden toplam <strong>14 ila 16 soru</strong> geliyor. 40 sorunun neredeyse %40&apos;ı sadece bu 4 konudan ibaret.
                        </p>
                        <p>
                            Peki bu konulara nasıl çalışacaksın?
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Önce Fonksiyonları Hallet:</strong> Fonksiyon grafiği okuyamayan biri Türev&apos;de de İntegral&apos;de de perişan olur. Önce fonksiyonlar, parabol ve eşitsizlikler tam oturacak.</li>
                            <li><strong>Logaritma ve Dizileri Cebe Koy:</strong> Her sene 4 soru bu iki konudan gelir ve sorular genellikle formülü doğru uygulamaya dayanır. Buralardan kesinlikle fire vermemelisin.</li>
                            <li><strong>Türev Geometrik Yorumunu Görselleştir:</strong> Teğetin eğimi = türev mantığını kafana oturtmadan formül ezberleme. Grafikli soruları çözmek için GeoGebra gibi görsel araçlardan bile faydalanabilirsin.</li>
                        </ul>

                        <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-lg my-6">
                            <h3 className="font-bold text-purple-900 mb-2">💡 AYT Geometride Analitik Şart</h3>
                            <p className="text-gray-700 text-sm">
                                AYT Geometride her sene <strong>Noktanın ve Doğrunun Analitiği</strong> ile <strong>Çemberin Analitiği</strong> konularından en az 3-4 soru gelir. Analitik geometri formüllerini bir kağıda yazıp masanın karşısına as.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">AYT Netlerini Gir, Sıralamanı Öğren</h3>
                            <p className="text-blue-100 mb-6">
                                SAY ve EA puanlarını güncel ÖSYM katsayılarıyla hemen hesapla.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Hemen Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Başlıklar</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-matematik-konulari" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">TYT Matematik Rehberi →</p>
                                    <p className="text-xs text-gray-600 mt-1">Temel kavramlar ve problem taktikleri.</p>
                                </Link>
                                <Link href="/blog/ayt-puan-hesaplama" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">AYT Puan Hesaplama Kılavuzu →</p>
                                    <p className="text-xs text-gray-600 mt-1">SAY, EA ve SÖZ katsayıları.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
