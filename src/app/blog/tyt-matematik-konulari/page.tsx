import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'TYT Matematik Konuları ve Soru Dağılımı 2027 | Çalışma Rehberi',
    description: '2027 TYT Matematik konuları, güncel soru dağılımları ve derece yaptıran çalışma taktikleri. Problemler, geometri ve temel kavramlar analizi.',
    keywords: 'tyt matematik konuları, tyt matematik soru dağılımı, tyt matematik nasıl çalışılır, yks matematik 2027, tyt matematik taktikleri',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-matematik-konulari' },
    openGraph: {
        title: 'TYT Matematik Konuları ve Soru Dağılımı 2027',
        description: 'TYT Matematik sınavında hangi konular çıkıyor? Konu dağılımı ve çalışma stratejileri.',
        type: 'article',
        publishedTime: '2026-02-19',
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
                            <time className="text-gray-600">19 Şubat 2026</time>
                            <span className="text-gray-600">• 12 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TYT Matematik Konuları ve Soru Dağılımı: Sıfırdan 30+ Nete Yol Haritası
                        </h1>
                        <p className="text-xl text-gray-600">
                            ÖSYM artık formül ezberleyenleri değil, soruyu anlayıp hızlı denklem kurabilenleri seçiyor. Konu konu soru analizleri ve çalışma sırası.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            TYT Matematik sınavından çıkan hemen hemen herkesin söylediği ilk cümle şudur: <strong>&quot;Sorular zor değildi ama süre yetmedi.&quot;</strong> ÖSYM son yıllarda klasik işlem sorularını neredeyse tamamen kaldırdı. Artık bir sayfa uzunluğunda hikayeli sorular soruyorlar. Yani TYT Matematik aslında sadece bir matematik testi değil, okuduğunu anlama ve hızlı mantık yürütme testidir.
                        </p>

                        <p>
                            Çalışma masasında saatlerce uğraşıp 5 dakikada çözdüğün soru sana sınavda kazandırmaz. O soruyu <strong>1.5 dakikanın altında</strong> çözebilecek pratikliği kazanman lazım. Peki hangi konuya ne kadar mesai harcamalısın? Gel detaylı inceleyelim.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            TYT Matematik Konu Dağılımı ve Soru Sayıları
                        </h2>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Konu Başlığı</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Tahmini Soru Sayısı</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Zorluk & Önem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Temel Kavramlar & Sayı Basamakları</td><td className="px-5 py-3 text-center font-bold">3 - 4</td><td className="px-5 py-3 text-blue-700">Yüksek (Temel Taş)</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Bölme - Bölünebilme & EBOB - EKOK</td><td className="px-5 py-3 text-center font-bold">1 - 2</td><td className="px-5 py-3 text-gray-600">Orta</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Rasyonel Sayılar & Basit Eşitsizlikler</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3 text-green-700">Kolay (Kaçırma)</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Mutlak Değer</td><td className="px-5 py-3 text-center font-bold">1 - 2</td><td className="px-5 py-3 text-orange-700">Orta-Zor (Tuzaklı)</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Üslü ve Köklü İfadeler</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3 text-blue-700">Yüksek (Banko)</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Çarpanlara Ayırma & Oran-Orantı</td><td className="px-5 py-3 text-center font-bold">1 - 2</td><td className="px-5 py-3 text-gray-600">Orta</td></tr>
                                    <tr className="border-b bg-red-50"><td className="px-5 py-3 font-medium font-bold text-red-900">PROBLEMLER (Sayı, Kesir, Yaş, Hız, Yüzde)</td><td className="px-5 py-3 text-center font-bold text-red-700 text-lg">11 - 13</td><td className="px-5 py-3 text-red-700 font-bold">🔴 En Kritik Bölüm</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Kümeler & Mantık</td><td className="px-5 py-3 text-center font-bold">2</td><td className="px-5 py-3 text-green-700">Kolay Net</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Fonksiyonlar</td><td className="px-5 py-3 text-center font-bold">1 - 2</td><td className="px-5 py-3 text-purple-700">AYT Köprüsü</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Permütasyon, Kombinasyon, Olasılık (PKBO)</td><td className="px-5 py-3 text-center font-bold">2</td><td className="px-5 py-3 text-red-600">Zor (Eleme Sorusu)</td></tr>
                                    <tr className="border-b bg-blue-50"><td className="px-5 py-3 font-medium font-bold text-blue-900">GEOMETRİ (Üçgenler, Dörtgenler, Katı Cisim)</td><td className="px-5 py-3 text-center font-bold text-blue-800 text-lg">9 - 10</td><td className="px-5 py-3 text-blue-800 font-bold">Fark Yaratan Bölüm</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Seviye Seviye TYT Matematik Çalışma Planı
                        </h2>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">0 – 10 Net Arasındaysan:</h3>
                        <p>
                            Senin sorunun hız değil, temel işlem kabiliyetidir. Rasyonel sayılar, üslü-köklü sayılar ve temel denklem çözme mantığını oturtmadan problem çözmeye kalkarsan duvara toslarsın. Önce temel matematik fasiküllerinden her gün 50 kolay soru çözerek işlem hızını artır.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">10 – 20 Net Arasındaysan:</h3>
                        <p>
                            Temelin var ama problemlerde tıkanıyorsun. Her gün istisnasız <strong>20 adet yeni nesil problem</strong> çözmek zorundasın. Çözemediğin sorunun video çözümünü hemen izleme; en az 3-4 dakika kendin uğraş, sonra çözümü izleyip kapatıp kendin baştan çöz.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">20 – 30+ Net Hedefleyenler:</h3>
                        <p>
                            Seni 30 üstüne taşıyacak şey <strong>Geometri ve PKBO (Olasılık)</strong> konularıdır. Geometride üçgenleri halleden biri çokgenleri ve çemberi çok daha hızlı çözer. Ayrıca haftada 3 adet 40 soruluk branş denemesi çözerek süreyi 55 dakikanın altına indirmelisin.
                        </p>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg my-6">
                            <h3 className="font-bold text-yellow-900 mb-2">💡 Altın Tavsiye: Problem Günlüğü</h3>
                            <p className="text-gray-700 text-sm">
                                Yanlış yaptığın her problem sorusunun fotoğrafını çek veya soruyu bir deftere yapıştır. Pazar günleri sadece bu defterdeki soruları baştan çöz. Aynı mantık hatasını iki kez yapmamayı bu şekilde öğrenirsin.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">TYT Matematik Netlerini Puanına Dönüştür</h3>
                            <p className="text-blue-100 mb-6">
                                Matematik netlerinin SAY ve EA puanlarına katkısını hemen hesapla.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Hemen Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili İçerikler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/ayt-matematik-konulari" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">AYT Matematik Konuları →</p>
                                    <p className="text-xs text-gray-600 mt-1">Limit, Türev, İntegral ve Trigonometri rehberi.</p>
                                </Link>
                                <Link href="/blog/tyt-net-artirma-taktikleri" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    <p className="font-semibold text-green-900">TYT Net Artırma Taktikleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">Süre ve dikkat hatalarını sıfırlama adımları.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
