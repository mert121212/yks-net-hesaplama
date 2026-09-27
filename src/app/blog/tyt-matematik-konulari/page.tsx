import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'

export const metadata: Metadata = {
    title: 'TYT Matematik Konuları ve Soru Dağılımı 2027 | Çalışma Rehberi',
    description: 'TYT Matematik testinde hangi konudan kaç soru çıkıyor? Konu analizi, seviyelere göre çalışma planı ve net artırma stratejileri.',
    keywords: 'tyt matematik konuları, tyt matematik soru dağılımı 2027, tyt matematik nasıl çalışılır, yks matematik net artırma, tyt geometri',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-matematik-konulari' },
    openGraph: {
        title: 'TYT Matematik Konuları ve Soru Dağılımı 2027',
        description: 'TYT Matematik testinde soru dağılımı, konuların ağırlıkları ve çalışma planı.',
        type: 'article',
        publishedTime: '2026-02-19',
        modifiedTime: '2026-02-22',
        url: 'https://yksnethesapla.com/blog/tyt-matematik-konulari',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'TYT Matematik Konuları ve Soru Dağılımı 2027'
            }
        ],
    },
}

export default function TYTMatematikKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="TYT Matematik Konuları ve Soru Dağılımı 2027 | Çalışma Rehberi" 
                    description="TYT Matematik testinde hangi konudan kaç soru çıkıyor? Konu analizi, seviyelere göre çalışma planı ve net artırma stratejileri."
                    datePublished="2026-02-19"
                    dateModified="2026-02-22"
                    url="https://yksnethesapla.com/blog/tyt-matematik-konulari"
                    keywords={['tyt matematik konuları', 'tyt matematik soru dağılımı 2027', 'tyt matematik nasıl çalışılır', 'yks matematik net artırma', 'tyt geometri']}
                />
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
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-19">19 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT Matematik Konuları ve Soru Dağılımı (2027)
                        </h1>
                        <p className="text-xl text-gray-600">
                            TYT Matematik testindeki 40 sorunun konu bazında dağılımı, soru karakterleri ve farklı net hedefleri için çalışma önerileri.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            TYT Matematik testi 30 temel matematik ve 10 geometri sorusundan oluşur. Sorular kural bilgisinden çok okuduğunu anlama, modelleme kurma ve zamanı verimli kullanma becerisini ölçer.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Matematik Konu Dağılımı Tablosu
                        </h2>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full bg-white border border-gray-200 text-sm text-left">
                                <thead className="bg-gray-100 text-gray-800 font-semibold border-b">
                                    <tr>
                                        <th className="py-2.5 px-4">Konu Başlığı</th>
                                        <th className="py-2.5 px-4 text-center">Soru Sayısı</th>
                                        <th className="py-2.5 px-4">Soru Tipi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="py-2.5 px-4 font-medium">Temel Kavramlar & Sayı Basamakları</td>
                                        <td className="py-2.5 px-4 text-center font-semibold">3 - 4 Soru</td>
                                        <td className="py-2.5 px-4">Tek-çift sayılar, kutu yerleştirme mantığı.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-2.5 px-4 font-medium">Rasyonel & Ondalık Sayılar</td>
                                        <td className="py-2.5 px-4 text-center font-semibold">1 - 2 Soru</td>
                                        <td className="py-2.5 px-4">Şekil modelleme ve ölçeklendirme.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 px-4 font-medium">Basit Eşitsizlik & Mutlak Değer</td>
                                        <td className="py-2.5 px-4 text-center font-semibold">2 - 3 Soru</td>
                                        <td className="py-2.5 px-4">Sayı doğrusu aralıkları ve mesafe hesabı.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-2.5 px-4 font-medium">Üslü ve Köklü İfadeler</td>
                                        <td className="py-2.5 px-4 text-center font-semibold">2 - 3 Soru</td>
                                        <td className="py-2.5 px-4">Yaklaşık değer bulma ve işlem kurguları.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 px-4 font-medium">Bölme - Bölünebilme & EBOB - EKOK</td>
                                        <td className="py-2.5 px-4 text-center font-semibold">1 - 2 Soru</td>
                                        <td className="py-2.5 px-4">Kalan bulma ve periyodik durumlar.</td>
                                    </tr>
                                    <tr className="bg-amber-50">
                                        <td className="py-2.5 px-4 font-bold text-amber-900">Problemler (Tüm Türler)</td>
                                        <td className="py-2.5 px-4 text-center font-bold text-amber-900">11 - 13 Soru</td>
                                        <td className="py-2.5 px-4 text-amber-900">Sayı, kesir, yüzde, yaş, hız ve grafik.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 px-4 font-medium">Kümeler & Mantık</td>
                                        <td className="py-2.5 px-4 text-center font-semibold">1 - 2 Soru</td>
                                        <td className="py-2.5 px-4">Venn şeması ve önermeler.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-2.5 px-4 font-medium">Fonksiyonlar</td>
                                        <td className="py-2.5 px-4 text-center font-semibold">1 - 2 Soru</td>
                                        <td className="py-2.5 px-4">Değer bulma, bileşke ve grafik okuma.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 px-4 font-medium">Veri - İstatistik</td>
                                        <td className="py-2.5 px-4 text-center font-semibold">1 Soru</td>
                                        <td className="py-2.5 px-4">Mod, medyan, aritmetik ortalama.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-2.5 px-4 font-medium">Permütasyon, Kombinasyon, Olasılık</td>
                                        <td className="py-2.5 px-4 text-center font-semibold">2 Soru</td>
                                        <td className="py-2.5 px-4">Seçim, dizilim ve olasılık hesabı.</td>
                                    </tr>
                                    <tr className="bg-blue-50 font-semibold">
                                        <td className="py-2.5 px-4 text-blue-900">Geometri (Üçgen, Dörtgen, Katı Cisim)</td>
                                        <td className="py-2.5 px-4 text-center text-blue-900">9 - 10 Soru</td>
                                        <td className="py-2.5 px-4 text-blue-900">Katlama, açı, benzerlik ve alan.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Seviyeye Göre Çalışma Yaklaşımı
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="p-4 bg-gray-50 border rounded-xl">
                                <h3 className="font-bold text-gray-900 text-base mb-1">0 - 10 Net Aralığı</h3>
                                <p className="text-sm text-gray-700">
                                    Öncelik dört işlem hızını artırmak ve temel cebirsel kuralları (rasyonel sayılar, basit eşitsizlik, mutlak değer) kavramaktır. Ağır problemlerden önce klasik soru tipleri çözülmelidir.
                                </p>
                            </div>

                            <div className="p-4 bg-gray-50 border rounded-xl">
                                <h3 className="font-bold text-gray-900 text-base mb-1">10 - 20 Net Aralığı</h3>
                                <p className="text-sm text-gray-700">
                                    Konu temeli oluşmuştur ancak problem kurma refleksinde yavaşlık vardır. Günlük 15-20 problem sorusu çözerek denklem kurma süresi kısaltılmalıdır.
                                </p>
                            </div>

                            <div className="p-4 bg-gray-50 border rounded-xl">
                                <h3 className="font-bold text-gray-900 text-base mb-1">20 - 30 Net Aralığı</h3>
                                <p className="text-sm text-gray-700">
                                    Netlerin 30 üzerine çıkabilmesi için geometriye odaklanmak gerekir. Üçgende açılar, özel üçgenler ve benzerlik konuları düzenli pratikle net kazandırır.
                                </p>
                            </div>

                            <div className="p-4 bg-gray-50 border rounded-xl">
                                <h3 className="font-bold text-gray-900 text-base mb-1">30+ Net Hedefleyenler</h3>
                                <p className="text-sm text-gray-700">
                                    Konu eksiğinden çok süre yönetimi ve branş denemeleri öne çıkar. Hatalı sorular ve turlama disiplini analiz edilmelidir.
                                </p>
                            </div>
                        </div>

                        <QuickNetSimulator />

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Netlerinizi Hesaplayın</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Matematik doğru ve yanlış sayılarınızı girerek TYT ve AYT puanınıza katkısını görün.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Puan Hesaplama Aracına Git →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
