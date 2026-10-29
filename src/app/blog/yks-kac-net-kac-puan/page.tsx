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
    title: 'YKS\'de Kaç Net Kaç Puan Getirir? Net-Puan Karşılaştırması 2027',
    description: 'Kaç netle Tıp, Hukuk, Mühendislik kazanılır? Sabit puan yalanı, ham puan vs yerleştirme puanı farkı ve net aralıklarının gerçek karşılığı.',
    keywords: 'kaç net kaç puan, yks net puan tablosu, tyt kaç net kaç puan, ayt kaç net kaç puan, tıp kaç net, hukuk kaç net',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-kac-net-kac-puan' },
    openGraph: {
        title: 'YKS\'de Kaç Net Kaç Puan Getirir? Net-Puan Karşılaştırması 2027',
        description: 'Deneme netlerinin gerçek hayattaki karşılığı. Hedefindeki fakülte için kaç net yapman gerekiyor?',
        type: 'article',
        publishedTime: '2026-08-10',
        modifiedTime: '2026-10-29',
        url: 'https://yksnethesapla.com/blog/yks-kac-net-kac-puan',
        images: [
            {
                url: '/images/blog/yks-kac-net-kac-puan.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Kaç Net Kaç Puan Analizi'
            }
        ],
    },
}

export default function YKSKacNetKacPuan() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <ReadingProgress />
                <BlogArticleSchema 
                    title="YKS'de Kaç Net Kaç Puan Getirir? Net-Puan Karşılaştırması 2027" 
                    description="TYT ve AYT netleri kaç puana denk gelir? Ham puan ile yerleştirme puanı farkı, OBP etkisi ve bölüm hedefleri için net aralıkları."
                    datePublished="2026-08-10"
                    dateModified="2026-10-29"
                    url="https://yksnethesapla.com/blog/yks-kac-net-kac-puan"
                    keywords={['kaç net kaç puan', 'yks net puan tablosu', 'tyt kaç net kaç puan', 'ayt kaç net kaç puan', 'tıp kaç net', 'hukuk kaç net']}
                />
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
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Hedef Masası</span>
                            <time className="text-gray-600" dateTime="2026-08-10">10 Ağustos 2026</time>
                            <span className="text-gray-600">• 11 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS&apos;de Kaç Net Kaç Puan Getirir? Sabit Puan Tuzağı ve Bölüm Hedefleri
                        </h1>
                        <p className="text-xl text-gray-600">
                            İnternette dolaşan &ldquo;Şu kadar net yaparsan şu puanı alırsın&rdquo; tarzı sabit tabloların neredeyse tamamı yanıltıcıdır. Çünkü sınavın o yılki genel zorluğu, aynı netin değerini baştan aşağı değiştirir.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-kac-net-kac-puan.jpg"
                        alt="YKS'de Kaç Net Kaç Puan Eder?"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Adayların her sene en çok arattığı kalıplar şunlardır: <em>&ldquo;TYT 75 net kaç puan?&rdquo;</em> ya da <em>&ldquo;Tıp kazanmak için kaç net lazım?&rdquo;</em> Bu sorulara tek bir sayı verip geçenler sınav sisteminin mantığını bilmeyenlerdir.
                        </p>

                        <p>
                            Bunun somut kanıtı çok tazedir: 2021 YKS gibi çok zor bir sınavda Sayısalda 68 TYT ve 52 AYT yapan bir öğrenci ilk 16 bine girip devlet Tıp Fakültesi&apos;ne yerleşti. Ancak soruların daha kolay sorulduğu bir başka sınav yılında aynı 68 TYT neti adayı ancak 65 bininci yapabildi. Bu yüzden sabit puanların peşinde koşmak yerine başarı aralıklarını ve yerleştirme formülünü kavramak zorundasın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Ham Puan ile Yerleştirme Puanı Arasındaki OBP Farkı
                        </h2>
                        <p>
                            Sınav sonuç belgende iki ayrı sütun yer alır:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-900 text-lg mb-2">1. Ham Puan (Yalnızca Sınav Netlerin)</h3>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    ÖSYM&apos;nin 100 taban puanının üzerine girdiğin testlerdeki doğru ve yanlışların eklenmesiyle hesaplanır. Maksimum 500 olabilir. Tercih döneminde tek başına geçerliliği yoktur.
                                </p>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h3 className="font-bold text-blue-900 text-lg mb-2">2. Yerleştirme Puanı (Tercih Yapacağın Puan)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Ham puanının üzerine 4 yıllık lise diploma notun (OBP × 0,6) eklenir. Tercih ekranında yalnızca bu puan ve bunun getirdiği başarı sırası kullanılır.
                                </p>
                            </div>
                        </div>

                        <p>
                            Aynı neti yapan iki arkadaştan birinin diploma notu 70, diğerininki 95 ise; aralarında sınava girmeden önce tam <strong>15 puanlık</strong> bir fark oluşur. Orta sıralarda 15 puan, 20 binden fazla adayı geride bırakmak anlamına gelir.
                        </p>

                        <QuickNetSimulator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Popüler Bölümler İçin Ortalama TYT ve AYT Net İhtiyacı Tablosu
                        </h2>
                        <p>
                            ÖSYM&apos;nin son yıllardaki yığınsal verilerine göre hedef bölümler için masaya koyman gereken gerçekçi net aralıkları şöyledir:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-slate-100 text-gray-800 font-semibold border-b">
                                    <tr>
                                        <th className="p-3 border">Hedeflenen Program</th>
                                        <th className="p-3 border">Puan Türü</th>
                                        <th className="p-3 border text-center text-blue-700">Ortalama TYT Neti</th>
                                        <th className="p-3 border text-center text-purple-700 font-bold">Ortalama AYT Neti</th>
                                        <th className="p-3 border">Sıralama Eşiği</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Tıp Fakültesi (Devlet)</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border text-center font-bold text-blue-700">95 - 105 Net</td>
                                        <td className="p-3 border text-center font-bold text-purple-700">66 - 74 Net</td>
                                        <td className="p-3 border font-semibold text-red-600">İlk 25.000 (Baraj: 50k)</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Diş Hekimliği</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border text-center font-bold text-blue-700">85 - 95 Net</td>
                                        <td className="p-3 border text-center font-bold text-purple-700">56 - 65 Net</td>
                                        <td className="p-3 border font-semibold text-red-600">İlk 45.000 (Baraj: 80k)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Hukuk Fakültesi (Devlet)</td>
                                        <td className="p-3 border">EA</td>
                                        <td className="p-3 border text-center font-bold text-blue-700">75 - 85 Net</td>
                                        <td className="p-3 border text-center font-bold text-purple-700">50 - 60 Net</td>
                                        <td className="p-3 border font-semibold text-red-600">İlk 60.000 (Baraj: 125k)</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Bilgisayar / Yazılım Mühendisliği</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border text-center font-bold text-blue-700">80 - 100 Net</td>
                                        <td className="p-3 border text-center font-bold text-purple-700">52 - 70 Net</td>
                                        <td className="p-3 border">5.000 - 85.000 (Üniversiteye göre)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Yönetim Bilişim Sistemleri (YBS)</td>
                                        <td className="p-3 border">EA</td>
                                        <td className="p-3 border text-center font-bold text-blue-700">65 - 80 Net</td>
                                        <td className="p-3 border text-center font-bold text-purple-700">40 - 52 Net</td>
                                        <td className="p-3 border">İlk 110.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Psikoloji / PDR</td>
                                        <td className="p-3 border">EA</td>
                                        <td className="p-3 border text-center font-bold text-blue-700">65 - 75 Net</td>
                                        <td className="p-3 border text-center font-bold text-purple-700">38 - 48 Net</td>
                                        <td className="p-3 border">İlk 130.000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Mevcut Netlerin Kaç Puan Getirir?</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Denemelerdeki doğru ve yanlışlarını hesaplayıcımıza gir; hedefine kaç net kaldığını ve Türkiye sıralamanı hemen öğren.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Canlı Puan ve Sıralama Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Kaç Net Kaç Puan Hakkında Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">Tercih yaparken puana mı sıralamaya mı bakılır?</h3>
                                <p className="text-sm text-gray-700">
                                    Kesinlikle başarı sırasına bakılır. Puanlar sınavın kolaylığına veya zorluğuna göre 30-40 puan inip çıkabilir; ancak başarı sıralamaları her yıl çok daha istikrarlı bir aralıkta hareket eder.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">TYT 70 net iyi bir net midir?</h3>
                                <p className="text-sm text-gray-700">
                                    TYT 70 net, 3 milyon aday arasında seni yaklaşık ilk %8-10&apos;luk başarılı dilime sokar. Eğer arkasından sağlam bir AYT (örneğin 45-50+ net) gelirse rahatlıkla mühendislik, hukuk ve popüler bölümler kazanılabilir.
                                </p>
                            </div>
                        </div>

                        <p className="mt-8">
                            1 netin sıralamayı nasıl etkilediğini görmek için <Link href="/blog/yks-1-net-kac-kisi-atar" className="text-blue-600 font-semibold hover:underline">1 Net Kaç Kişi Atar?</Link> analizimize bakabilir, diploma notunun etkisini görmek için <Link href="/blog/obp-hesaplama" className="text-blue-600 font-semibold hover:underline">OBP Hesaplama Rehberi</Link>&apos;mizi inceleyebilirsin.
                        </p>

                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
