import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'

export const metadata: Metadata = {
    title: 'TYT Matematik Konuları ve Soru Dağılımı 2027: Netlere Göre Çalışma Planı',
    description: 'TYT Matematik 40 sorunun konu dağılımı, hangi konudan kaç soru çıktığı ve 0 netten 30+ nete uzanan gerçekçi çalışma taktikleri.',
    keywords: 'tyt matematik konuları, tyt matematik soru dağılımı 2027, tyt matematik nasıl çalışılır, yks matematik net artırma, tyt geometri',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-matematik-konulari' },
    openGraph: {
        title: 'TYT Matematik Konuları ve Soru Dağılımı 2027',
        description: 'ÖSYM ne soruyor, hangi konular banko net getiriyor? Net seviyene göre nokta atışı stratejiler.',
        type: 'article',
        publishedTime: '2026-02-19',
        modifiedTime: '2026-03-01',
        url: 'https://yksnethesapla.com/blog/tyt-matematik-konulari',
        images: [
            {
                url: '/images/blog/tyt-matematik-konulari.jpg',
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
                    dateModified="2026-03-01"
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
                            <span className="text-gray-600">• 9 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT Matematik Konuları ve Soru Dağılımı: 40 Sorunun Şifresi
                        </h1>
                        <p className="text-xl text-gray-600">
                            Sorular formül ezberinden çok okuduğunu anlamayı ve modellemeyi ölçüyor. Peki ÖSYM tam olarak hangi konudan ne istiyor?
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/tyt-matematik-konulari.jpg"
                        alt="TYT Matematik Konuları ve Soru Dağılımı (2027)"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Açık konuşalım: Birçok öğrenci TYT Matematiği hala 90&apos;ların klasik sınavı sanıyor. <em>&ldquo;Formülü ezberlerim, x&apos;i çekerim, cevabı yapıştırırım.&rdquo;</em> Yok öyle bir dünya.
                        </p>

                        <p>
                            ÖSYM son yıllarda şunu yapıyor: Basit bir rasyonel sayı veya denklem kurma mantığını alıyor, içine bir mimarın cetvelini ya da bir kafenin menüsünü giydirip 15 satırlık hikaye yazıyor. Yani Türkçe paragrafı çözemeyen bir öğrencinin TYT matematikte 30 nete ulaşması mucizedir. 30 temel matematik ve 10 geometriden oluşan bu 40 soruluk canavarı dize getirmek istiyorsan, haritayı iyi bilmek zorundasın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            ÖSYM&apos;nin Masadaki Dağılımı (Konu Tablosu)
                        </h2>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full bg-white border border-gray-200 text-sm text-left">
                                <thead className="bg-gray-100 text-gray-800 font-semibold border-b">
                                    <tr>
                                        <th className="py-2.5 px-4">Konu Başlığı</th>
                                        <th className="py-2.5 px-4 text-center">Soru Sayısı</th>
                                        <th className="py-2.5 px-4">ÖSYM Ne İster?</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="py-2.5 px-4 font-medium">Temel Kavramlar & Sayı Basamakları</td>
                                        <td className="py-2.5 px-4 text-center font-semibold">3 - 4 Soru</td>
                                        <td className="py-2.5 px-4">Tek-çift mantığı, kutucuklara sayı doldurma bulmacaları.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-2.5 px-4 font-medium">Rasyonel & Ondalık Sayılar</td>
                                        <td className="py-2.5 px-4 text-center font-semibold">1 - 2 Soru</td>
                                        <td className="py-2.5 px-4">Pizza dilimi, boyalı kareler ve ölçeklendirme.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 px-4 font-medium">Basit Eşitsizlik & Mutlak Değer</td>
                                        <td className="py-2.5 px-4 text-center font-semibold">2 - 3 Soru</td>
                                        <td className="py-2.5 px-4">Termometre, hava durumu aralıkları, mesafe hesabı.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-2.5 px-4 font-medium">Üslü ve Köklü Sayılar</td>
                                        <td className="py-2.5 px-4 text-center font-semibold">2 - 3 Soru</td>
                                        <td className="py-2.5 px-4">Cetvel üstünde köklü sayının yerini kestirme.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 px-4 font-medium">Bölme - Bölünebilme & EBOB - EKOK</td>
                                        <td className="py-2.5 px-4 text-center font-semibold">1 - 2 Soru</td>
                                        <td className="py-2.5 px-4">Periyodik tekrar eden nöbet/ışık soruları.</td>
                                    </tr>
                                    <tr className="bg-amber-50">
                                        <td className="py-2.5 px-4 font-bold text-amber-900">Problemler (Sınavın Kalbi)</td>
                                        <td className="py-2.5 px-4 text-center font-bold text-amber-900">11 - 13 Soru</td>
                                        <td className="py-2.5 px-4 text-amber-900">Sayı, kesir, yüzde, grafik okuma. Hızlı denklem kurma şart.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 px-4 font-medium">Fonksiyonlar & Kümeler</td>
                                        <td className="py-2.5 px-4 text-center font-semibold">2 - 3 Soru</td>
                                        <td className="py-2.5 px-4">AYT&apos;nin temeli. Grafik okuma ve küme kesişimleri.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-2.5 px-4 font-medium">PKOB (Permütasyon - Olasılık)</td>
                                        <td className="py-2.5 px-4 text-center font-semibold">2 Soru</td>
                                        <td className="py-2.5 px-4">Birçok adayın boş bıraktığı, çözenin öne fırladığı alan.</td>
                                    </tr>
                                    <tr className="bg-blue-50 font-semibold">
                                        <td className="py-2.5 px-4 text-blue-900">Geometri (Üçgen, Dörtgen, Katı Cisim)</td>
                                        <td className="py-2.5 px-4 text-center text-blue-900">9 - 10 Soru</td>
                                        <td className="py-2.5 px-4 text-blue-900">Katlama, döndürme, benzerlik. 30 netin anahtarı.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Şu Anki Netine Göre Acil Eylem Planı
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-red-50/70 border border-red-200 rounded-xl">
                                <h3 className="font-bold text-red-900 text-base mb-1">0 - 10 Net Bandı: &ldquo;Temelim Yok, Nereden Başlayayım?&rdquo;</h3>
                                <p className="text-sm text-gray-800">
                                    Lütfen gidip de 2026 model kalın, yeni nesil soru bankalarıyla kendini hırpalama. İlk yapacağın iş: Dört işlem hatasını sıfırlamak. Rasyonel sayılar, tek-çift sayılar, basit eşitsizlik ve üslü sayılar. Bu dört konuyu hallettiğinde cebinde zaten 6-8 net garanti. Her gün 5 tane basit denklem kurma problemi çözerek beynini Türkçeyi matematiğe çevirmeye alıştır.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-900 text-base mb-1">10 - 20 Net Bandı: &ldquo;Biliyorum Ama Süre Yetmiyor&rdquo;</h3>
                                <p className="text-sm text-gray-800">
                                    Senin derdin konu bilmemek değil; soruya bakıp ne yapacağını düşünürken 2 dakikayı eritmek. Problemlerde tıkanıyorsun. İlacın şu: Her sabah uyanır uyanmaz kronometreyle 15 karışık problem. Masaya yapış, süreyi hisset. 3 hafta sonra problemlerin hızlanacak ve 18-20 bandına kendiliğinden vuracaksın.
                                </p>
                            </div>

                            <div className="p-5 bg-blue-50/70 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-900 text-base mb-1">20 - 30 Net Bandı: &ldquo;Geometriyi Çöpe Atarak Bu İş Olmaz&rdquo;</h3>
                                <p className="text-sm text-gray-800">
                                    Bize gelen öğrencilerin en büyük gafleti: Geometriyi görmezden gelip matematikten 30 net beklemek. Kalan 30 sorudan 28 net yapmak imkansıza yakınken, geometrideki 10 sorunun en az 5 tanesi sadece üçgende açı ve benzerlik bilerek çözülüyor. Her gün istisnasız 10 geometri sorusu çözmeyenin 30 neti görmesi hayaldir.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-900 text-base mb-1">30+ Net Hedefleyenler: Derece Grubu</h3>
                                <p className="text-sm text-gray-800">
                                    Artık konu fasikülüyle işin kalmadı. Senin işin haftada 3-4 adet kaliteli branş denemesi çözmek ve PKOB (Olasılık) ile analitik geometrideki o sürpriz tuzak soruları avlamak. Takıldığın sorudan hemen sıyrılmayı alışkanlık haline getir; dereceyi getiren şey inatlaşmamaktır.
                                </p>
                            </div>
                        </div>

                        <QuickNetSimulator />

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Matematik Netinin Puanına Etkisini Test Et</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Matematikte hedefin kaç? Doğru ve yanlışlarını hesaplama motorumuza yaz, tahmini YKS puanını ve Türkiye sıralamanı hemen öğren.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Puan Hesaplama Motoruna Git →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
