import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'

export const metadata: Metadata = {
    title: 'YKS\'de Kaç Net Kaç Puan Getirir? Net-Puan Karşılaştırması 2027',
    description: 'TYT ve AYT netleri kaç puana denk gelir? Ham puan ile yerleştirme puanı farkı, OBP etkisi ve bölüm hedefleri için net aralıkları.',
    keywords: 'kaç net kaç puan, yks net puan tablosu, tyt kaç net kaç puan, ayt kaç net kaç puan, tıp kaç net, hukuk kaç net',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-kac-net-kac-puan' },
    openGraph: {
        title: 'YKS\'de Kaç Net Kaç Puan Getirir? Net-Puan Karşılaştırması 2027',
        description: 'Deneme netlerinizin puan ve başarı sırası karşılığı. Ham puan ve yerleştirme puanı ayrımı.',
        type: 'article',
        publishedTime: '2026-02-22',
        modifiedTime: '2026-02-25',
        url: 'https://yksnethesapla.com/blog/yks-kac-net-kac-puan',
        images: [
            {
                url: '/images/blog/yks-kac-net-kac-puan.svg',
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
                <BlogArticleSchema 
                    title="YKS'de Kaç Net Kaç Puan Getirir? Net-Puan Karşılaştırması 2027" 
                    description="TYT ve AYT netleri kaç puana denk gelir? Ham puan ile yerleştirme puanı farkı, OBP etkisi ve bölüm hedefleri için net aralıkları."
                    datePublished="2026-02-22"
                    dateModified="2026-02-25"
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
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-22">22 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS&apos;de Kaç Net Kaç Puan Eder?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Belirli bir netin kaç puan getireceği her sınav yılına göre değişir. Testlerin zorluğu, ortalamalar ve standart sapma puan karşılıklarını doğrudan etkiler.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-kac-net-kac-puan.svg"
                        alt="YKS&apos;de Kaç Net Kaç Puan Eder?"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS&apos;de sabit bir net-puan tablosu bulunmaz. Aynı net sayısı zor bir sınavda çok daha yüksek bir sıralama getirirken, kolay bir sınavda daha geride kalabilir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Ham Puan ve Yerleştirme Puanı Ayrımı
                        </h2>
                        <p>
                            Sonuç belgesinde iki temel puan türü yer alır:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-900 text-lg mb-2">Ham Puan</h3>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    ÖSYM&apos;nin 100 taban puanına testlerde yaptığınız netlerin eklenmesiyle oluşur. Lise diploma notu bu puana dahil edilmez. En fazla 500 olabilir.
                                </p>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h3 className="font-bold text-blue-900 text-lg mb-2">Yerleştirme Puanı</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Ham puana Ortaöğretim Başarı Puanının (OBP) eklenmesiyle elde edilir. Tercih döneminde üniversitelere yerleştirmede bu puan ve sıralama esas alınır.
                                </p>
                            </div>
                        </div>

                        <p>
                            Diploma notu 90 olan bir adayla diploma notu 70 olan iki adayın ham netleri tamamen aynı olsa dahi yerleştirme puanları arasında yaklaşık 12 puan fark oluşur. Bu fark orta başarı sıralamalarında binlerce kişilik oynamaya neden olabilir.
                        </p>

                        <QuickNetSimulator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Net Aralıkları ve Yaklaşık Karşılıkları
                        </h2>
                        <p>
                            Sınavın ortalama zorluk düzeyinde olduğu yıllar baz alındığında net aralıkları kabaca şu hedeflere karşılık gelir:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                                <h3 className="font-bold text-gray-900 text-lg mb-1">95 - 110 Net Aralığı</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    İlk 10.000 dilimi hedeflerinde görülür. Güçlü bir AYT netiyle birleştiğinde tıp fakülteleri ve üst sıra mühendislikler için gereken tabanı oluşturur.
                                </p>
                            </div>

                            <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                                <h3 className="font-bold text-gray-900 text-lg mb-1">80 - 95 Net Aralığı</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    20.000 ile 50.000 aralığındaki lisans programları için dengeli bir profildir. Diş hekimliği, mühendislik ve prestijli hukuk programlarında bu aralık sıkça görülür.
                                </p>
                            </div>

                            <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                                <h3 className="font-bold text-gray-900 text-lg mb-1">65 - 80 Net Aralığı</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    50.000 ile 120.000 aralığındaki en yoğun yığılma bölgesidir. Bu aralıkta AYT netlerinin ve diploma notunun sıralamaya etkisi belirgin şekilde artar.
                                </p>
                            </div>

                            <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                                <h3 className="font-bold text-gray-900 text-lg mb-1">50 - 65 Net Aralığı</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Aday sayısının en kalabalık olduğu gruptur. Bu dilimde yapılan 2-3 ek net dahi genel sıralamayı binlerce kişi öne taşıyabilir.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Netlerinizi Hesaplayın</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Güncel katsayılarla doğru-yanlış sayılarınızı girin, ham ve yerleştirme puanlarınızı karşılaştırın.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Net ve Puan Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Yazılar</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-yigilma-tehlikesi" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">YKS Yığılma Analizi →</p>
                                    <p className="text-xs text-gray-600 mt-1">Aynı puandaki adayların sıralama dağılımı.</p>
                                </Link>
                                <Link href="/blog/tyt-net-artirma-taktikleri" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">TYT Net Artırma Yolları →</p>
                                    <p className="text-xs text-gray-600 mt-1">Platoya takılan netleri artırma yöntemleri.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
