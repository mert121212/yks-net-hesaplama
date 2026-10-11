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
        modifiedTime: '2026-09-28',
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
                    dateModified="2026-09-28"
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
                            <span className="text-gray-600">• 8 dk okuma</span>
                            <LastUpdatedBadge date="2026-09-28" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS&apos;de Kaç Net Kaç Puan Getirir? Hedefine Kaç Net Kaldı?
                        </h1>
                        <p className="text-xl text-gray-600">
                            İnternetteki o sabit &ldquo;Şu kadar net yaparsan şu puanı alırsın&rdquo; tablolarının hepsi palavra. Çünkü sınavın zorluğuna göre aynı net seni vezir de eder, rezil de.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-kac-net-kac-puan.jpg"
                        alt="YKS&apos;de Kaç Net Kaç Puan Eder?"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Google&apos;da en çok aratılan cümlelerden biri şudur: <em>&ldquo;TYT 70 net kaç puan?&rdquo;</em> ya da <em>&ldquo;Tıp için kaç net lazım?&rdquo;</em>
                        </p>

                        <p>
                            Sana acı bir örnek vereyim: 2021 YKS&apos;de (tarihin en zor sınavıydı) 65 TYT ve 50 AYT yapan bir öğrenci Sayısalda ilk 15 bine girip çatır çatır Tıp Fakültesi kazandı. Ama soruların leblebi gibi dağıtıldığı 2022 veya 2023 sınavında aynı 65 TYT ile ancak 60 bininci olabildin! Yani sabit bir puan peşinde koşmak yerine başarı aralıklarını ve net gruplarını anlamak zorundasın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Ham Puan vs. Yerleştirme Puanı (OBP Kazığı)
                        </h2>
                        <p>
                            Sonuç belgen eline geldiğinde iki ayrı puan göreceksin:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-900 text-lg mb-2">1. Ham Puan (Safi Sınav Başarın)</h3>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    ÖSYM&apos;nin 100 taban puanının üstüne sınavda yaptığın netlerin eklenmesiyle oluşur. Maksimum 500 olabilir. Ama tercih yaparken tek başına hiçbir işe yaramaz.
                                </p>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h3 className="font-bold text-blue-900 text-lg mb-2">2. Yerleştirme Puanı (Gerçek Kaderin)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Ham puanına lise diploma notun (OBP × 0,6) eklenir. Tercihlerini sadece bu yerleştirme puanına ve yanındaki sıralamaya göre yaparsın.
                                </p>
                            </div>
                        </div>

                        <p>
                            İki adayın sınav netleri birebir aynı olsun. Biri lisede yatmış diploma notu 70, diğeri çalışmış 95. Aralarındaki yerleştirme farkı tam <strong>15 puandır!</strong> Ve o 15 puan, 70 bininci sıradaki adayı bir anda 45 bine fırlatır.
                        </p>

                        <QuickNetSimulator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Bölüm Hedeflerine Göre Gerçekçi Net Tablosu
                        </h2>
                        <p>
                            Ortalama standart bir ÖSYM sınavında hayalindeki bölümler için masaya koyman gereken asgari net karnesi kabaca şöyledir:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-red-50/80 border border-red-200 rounded-xl">
                                <h3 className="font-bold text-red-950 text-lg mb-1">Devlet Tıp & Üst Sıra Diş Hekimliği (İlk 20.000)</h3>
                                <p className="text-sm text-red-900 leading-relaxed">
                                    <strong>TYT:</strong> 95 - 105 Net | <strong>AYT Sayısal:</strong> 65 - 72 Net. Burada hata payı çok azdır; AYT Matematikte en az 34-35 neti görmek zorundasın.
                                </p>
                            </div>

                            <div className="p-5 bg-purple-50/80 border border-purple-200 rounded-xl">
                                <h3 className="font-bold text-purple-950 text-lg mb-1">Köklü Devlet Hukuk Fakülteleri (İlk 35.000 EA)</h3>
                                <p className="text-sm text-purple-900 leading-relaxed">
                                    <strong>TYT:</strong> 75 - 85 Net | <strong>AYT Edebiyat-Matematik:</strong> 55 - 62 Net. (AYT Matematikte 25+ net yapan Eşit Ağırlıkçı Hukuk kapısını sonuna kadar aralar.)
                                </p>
                            </div>

                            <div className="p-5 bg-blue-50/80 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">Mühendislik & Mimarlık (50.000 - 100.000)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    <strong>TYT:</strong> 65 - 80 Net | <strong>AYT Sayısal:</strong> 42 - 55 Net. Yığılmanın en sert olduğu bölgedir; 3 net fazla yapan binlerce kişiyi eler.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50/80 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">Öğretmenlikler & İktisadi İdari Bilimler (100.000 - 200.000)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    <strong>TYT:</strong> 50 - 65 Net | <strong>AYT:</strong> 30 - 45 Net. Temel konuları sağlamlaştıran ve düzenli deneme çözen birinin en rahat ulaşacağı banttır.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Kendi Hedef Netlerini Hesapla</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Kaç nette olduğunu ve hedefine kaç net kaldığını öğrenmek için hesaplama motorumuza mevcut doğrularını gir.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Net ve Sıralama Hesapla →
                            </Link>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Hedef Bölümlere Göre Ortalama Net İhtiyacı
                        </h2>
                        <p>
                            Adayların en sık sorduğu soru <em>"İstediğim bölüme girmek için TYT ve AYT'de kaçar net yapmalıyım?"</em> sorusudur. Geçmiş yılların ÖSYM yerleştirme verilerine göre popüler bölümlerin ortalama net barajları aşağıda listelenmiştir:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-teal-50 text-teal-950 font-semibold">
                                    <tr>
                                        <th className="p-3 border">Hedef Bölüm</th>
                                        <th className="p-3 border">Puan Türü</th>
                                        <th className="p-3 border">Gereken TYT Neti</th>
                                        <th className="p-3 border">Gereken AYT Neti</th>
                                        <th className="p-3 border">Ortalama Sıralama</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Tıp Fakültesi (Devlet)</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-bold text-teal-700">95 - 105 Net</td>
                                        <td className="p-3 border font-bold text-teal-700">68 - 74 Net</td>
                                        <td className="p-3 border">İlk 25.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Diş Hekimliği</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-bold text-teal-700">85 - 95 Net</td>
                                        <td className="p-3 border font-bold text-teal-700">58 - 65 Net</td>
                                        <td className="p-3 border">İlk 45.000</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Hukuk Fakültesi</td>
                                        <td className="p-3 border">EA</td>
                                        <td className="p-3 border font-bold text-teal-700">75 - 85 Net</td>
                                        <td className="p-3 border font-bold text-teal-700">50 - 58 Net</td>
                                        <td className="p-3 border">İlk 70.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Bilgisayar Mühendisliği</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-bold text-teal-700">80 - 100 Net</td>
                                        <td className="p-3 border font-bold text-teal-700">55 - 72 Net</td>
                                        <td className="p-3 border">5.000 - 90.000 (Geniş)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Yönetim Bilişim (YBS)</td>
                                        <td className="p-3 border">EA</td>
                                        <td className="p-3 border font-bold text-teal-700">65 - 80 Net</td>
                                        <td className="p-3 border font-bold text-teal-700">42 - 52 Net</td>
                                        <td className="p-3 border">İlk 120.000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Bu netlerin sıralamanıza yansımasını görmek için <Link href="/blog/yks-1-net-kac-kisi-atar" className="text-blue-600 font-semibold hover:underline">1 Net Kaç Kişi Atar?</Link> analizimizi okuyabilir, diploma notunuzun oluşturacağı katkıyı <Link href="/blog/obp-hesaplama" className="text-blue-600 font-semibold hover:underline">OBP Hesaplama Rehberi</Link> üzerinden hesaplayabilirsiniz. Tercih stratejileri için <Link href="/blog/universite-tercih-stratejileri" className="text-blue-600 font-semibold hover:underline">Üniversite Tercih Rehberi</Link> yazımıza göz atın.
                        </p>

                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
