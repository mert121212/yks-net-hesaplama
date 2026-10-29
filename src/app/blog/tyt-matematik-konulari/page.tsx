import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'
import ArticleFeedback from '@/components/ArticleFeedback'
import ReadingProgress from '@/components/ReadingProgress'
import LastUpdatedBadge from '@/components/LastUpdatedBadge'

export const metadata: Metadata = {
    title: 'TYT Matematik Konuları ve Soru Dağılımı 2027: Netlere Göre Çalışma Planı',
    description: 'TYT Matematik 40 sorunun konu dağılımı, hangi konudan kaç soru çıktığı ve 0 netten 30+ nete uzanan gerçekçi çalışma taktikleri.',
    keywords: 'tyt matematik konuları, tyt matematik soru dağılımı 2027, tyt matematik nasıl çalışılır, yks matematik net artırma, tyt geometri',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-matematik-konulari' },
    openGraph: {
        title: 'TYT Matematik Konuları ve Soru Dağılımı 2027',
        description: 'ÖSYM ne soruyor, hangi konular banko net getiriyor? Net seviyene göre nokta atışı stratejiler.',
        type: 'article',
        publishedTime: '2026-07-14',
        modifiedTime: '2026-10-29',
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
                <ReadingProgress />
                <BlogArticleSchema 
                    title="TYT Matematik Konuları ve Soru Dağılımı 2027 | Çalışma Rehberi" 
                    description="TYT Matematik testinde hangi konudan kaç soru çıkıyor? Konu analizi, seviyelere göre çalışma planı ve net artırma stratejileri."
                    datePublished="2026-07-14"
                    dateModified="2026-10-29"
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
                            <time className="text-gray-600" dateTime="2026-07-14">14 Temmuz 2026</time>
                            <span className="text-gray-600">• 12 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT Matematik Konuları ve Soru Dağılımı: 40 Sorunun Şifresi
                        </h1>
                        <p className="text-xl text-gray-600">
                            Sorular klasik formül ezberinden çok okuduğunu anlama, modelleme ve hızlı düşünme becerisini sınıyor. Hangi konudan kaç soru çıkıyor ve bulunduğun net bandından bir üst basamağa nasıl çıkarsın?
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/tyt-matematik-konulari.jpg"
                        alt="TYT Matematik Konuları ve Soru Dağılımı (2027)"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS hazırlığında en sık duyduğumuz serzeniş şudur: <em>&ldquo;Hocam konuyu anlıyorum, formülü biliyorum ama denemede soruyu okurken kaybolup gidiyorum!&rdquo;</em> Bunun sebebi çok açık: ÖSYM artık eski nesil &ldquo;x kaçtır?&rdquo; sorularını geride bıraktı.
                        </p>

                        <p>
                            Bugün karşımıza çıkan TYT Matematik; bir kafenin indirim kampanyasını, bir marangozun kestiği tahtayı veya bir cep telefonunun şarj yüzdesini anlatan minyatür paragraflardan oluşuyor. Yani Türkçeyi hızlı ve doğru anlamayan bir adayın matematikte 25-30 net bandına ulaşması neredeyse imkânsız. Bu 40 soruluk sınavı 30 Temel Matematik ve 10 Geometri olarak ikiye ayırıp haritayı net görelim.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Matematik Konuları ve Soru Dağılımı Tablosu
                        </h2>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full bg-white border border-gray-200 text-sm text-left">
                                <thead className="bg-slate-100 text-gray-800 font-semibold border-b">
                                    <tr>
                                        <th className="py-3 px-4 border">Konu Başlığı</th>
                                        <th className="py-3 px-4 text-center border">Soru Sayısı</th>
                                        <th className="py-3 px-4 border">ÖSYM Nasıl Sorar?</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="py-2.5 px-4 font-medium border">Temel Kavramlar & Sayı Basamakları</td>
                                        <td className="py-2.5 px-4 text-center font-bold border">3 - 4</td>
                                        <td className="py-2.5 px-4 border">Kutucuklara sayı yerleştirme, tek-çift sayı mantığı.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-2.5 px-4 font-medium border">Rasyonel ve Ondalık Sayılar</td>
                                        <td className="py-2.5 px-4 text-center font-bold border">1 - 2</td>
                                        <td className="py-2.5 px-4 border">Şekilli modelleme, pasta/cetvel paylaştırma.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 px-4 font-medium border">Basit Eşitsizlik & Mutlak Değer</td>
                                        <td className="py-2.5 px-4 text-center font-bold border">2 - 3</td>
                                        <td className="py-2.5 px-4 border">Sıcaklık aralıkları, tartı ölçümleri, uzaklık tanımı.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-2.5 px-4 font-medium border">Üslü ve Köklü İfadeler</td>
                                        <td className="py-2.5 px-4 text-center font-bold border">2 - 3</td>
                                        <td className="py-2.5 px-4 border">Cetvel üzerinde köklü sayının yerini tahmin etme.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 px-4 font-medium border">Bölünebilme Kuralları & EBOB - EKOK</td>
                                        <td className="py-2.5 px-4 text-center font-bold border">1 - 2</td>
                                        <td className="py-2.5 px-4 border">Periyodik tekrar durumları (nöbet, lamba yanma).</td>
                                    </tr>
                                    <tr className="bg-amber-50">
                                        <td className="py-2.5 px-4 font-bold text-amber-950 border">Problemler Bloğu (Sınavın Omurgası)</td>
                                        <td className="py-2.5 px-4 text-center font-bold text-amber-900 border">11 - 13</td>
                                        <td className="py-2.5 px-4 text-amber-950 border">Sayı, kesir, yaş, yüzde-kâr, hız, grafik yorumlama.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 px-4 font-medium border">Mantık ve Kümeler</td>
                                        <td className="py-2.5 px-4 text-center font-bold border">2</td>
                                        <td className="py-2.5 px-4 border">Önermelerin doğruluğu ve Venn şeması kesişimleri.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-2.5 px-4 font-medium border">Fonksiyonlar</td>
                                        <td className="py-2.5 px-4 text-center font-bold border">2</td>
                                        <td className="py-2.5 px-4 border">Değer bulma, bileşke ve temel grafik okuma (AYT anahtarı).</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 px-4 font-medium border">Veri, İstatistik ve Olasılık (PKOB)</td>
                                        <td className="py-2.5 px-4 text-center font-bold border">2 - 3</td>
                                        <td className="py-2.5 px-4 border">Medyan, mod hesabı, seçme ve sıralama senaryoları.</td>
                                    </tr>
                                    <tr className="bg-blue-50 font-semibold">
                                        <td className="py-2.5 px-4 text-blue-950 border">Geometri (Üçgen, Dörtgen, Çember, Katı Cisim)</td>
                                        <td className="py-2.5 px-4 text-center text-blue-900 border">9 - 10</td>
                                        <td className="py-2.5 px-4 text-blue-950 border">Katlama, döndürme, benzerlik ve hacim hesabı.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Net Seviyene Göre Gerçekçi Çalışma Haritası
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-red-50/70 border border-red-200 rounded-xl">
                                <h3 className="font-bold text-red-900 text-base mb-1">0 - 10 Net Bandı: Temel İşlem ve İlk 12 Soru</h3>
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    En büyük tuzak: Hemen kalın ve yeni nesil soru bankalarına saldırmak. Yapamazsın, moralin bozulur ve kitabı kapatırsın. İlk hedefin işlem hatasını sıfırlamak olmalı. Rasyonel sayılar, üslü-köklü ifadeler, basit eşitsizlik ve mutlak değer konularını sindir. Bu grup sana sınavın başında 7-8 temiz net bırakır.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-900 text-base mb-1">10 - 20 Net Bandı: Problem Rutini ve Süre Yönetimi</h3>
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    Konu eksiğin yok denecek kadar azdır ama bir soruya 3,5 dakika gömüyorsundur. İlacın şudur: Her sabah istisnasız kronometreyle 15 karışık problem çözmek. Denklem kurmayı otomatikleştirirsen problem bloğundan 8-9 net çekmeye başlarsın.
                                </p>
                            </div>

                            <div className="p-5 bg-blue-50/70 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-900 text-base mb-1">20 - 30 Net Bandı: Geometriyi Masaya Koyma Vakti</h3>
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    Öğrencilerin en çok tıkandığı yer burasıdır. İlk 30 sorudan 25 net yapıp geometriye hiç bakmazlar. Oysa geometrideki 10 sorunun en az 4-5 tanesi sadece üçgende açı ve benzerlik bilerek çözülür. Geometriyi ihmal eden bir adayın 30 neti görmesi matematiksel olarak çok zordur.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-900 text-base mb-1">30+ Net Bandı: Branş Denemeleri ve İnatlaşmama Sanatı</h3>
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    Artık konu fasikülü çözmeyi bırakmalısın. Haftada en az 3 TYT Matematik branş denemesi çözmeli, turlama taktiğini mükemmelleştirmelisin. Çözemediğin soruyla inatlaşmayıp yanına işaret koyup geçmek sana sınav kazandırır.
                                </p>
                            </div>
                        </div>

                        <QuickNetSimulator />

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">TYT Matematik Netin Sıralamana Nasıl Yansır?</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                TYT Matematik katsayısı yaklaşık 3,3 puandır. Netlerindeki her 3 artış seni on binlerce adayın önüne geçirir. Güncel netlerini simülatörümüze girerek puan karşılığını hemen görebilirsin.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Puan ve Sıralama Simülatörünü Aç →
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Matematik Hakkında Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">Yeni nesil matematik soruları nasıl çözülür?</h3>
                                <p className="text-sm text-gray-700">
                                    Yeni nesil sorularda en kritik adım hikâyeyi ayıklamaktır. Sorudaki isimleri, senaryoyu bir kenara bırakıp verilen sayıları ve senden istenen değişkeni alt alta yazarak matematiksel denkleme çevir. Uzun sorular genellikle en kolay denkleme sahip olanlardır.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">TYT Matematik denemelerine ne zaman başlanmalı?</h3>
                                <p className="text-sm text-gray-700">
                                    İlk 12 konu ve problemler bittiğinde hemen branş denemelerine başlanabilir. Tüm geometri konularının bitmesini beklersen sınav yaklaşana kadar süre pratiği yapamazsın.
                                </p>
                            </div>
                        </div>

                        <p className="mt-8">
                            Daha kapsamlı bir hazırlık için <Link href="/blog/sifirdan-tyt-matematik-calisma-rehberi" className="text-blue-600 font-semibold hover:underline">Sıfırdan TYT Matematik Çalışma Rehberi</Link>&apos;ne ve netlerini hızlıca yukarı taşıyacak <Link href="/blog/tyt-net-artirma-taktikleri" className="text-blue-600 font-semibold hover:underline">TYT Net Artırma Taktikleri</Link> yazımıza göz atabilirsin.
                        </p>

                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
