import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'

export const metadata: Metadata = {
    title: 'TYT Net Hesaplama Rehberi 2027 | Test Ağırlıkları ve Katsayılar',
    description: 'TYT net hesabı nasıl yapılır? Türkçe, Matematik, Fen ve Sosyal testlerinin puan ağırlıkları, standart sapma ve 0,5 net kuralı.',
    keywords: 'tyt net hesaplama, tyt katsayıları, tyt puan hesaplama 2027, tyt matematik katsayısı, yks net hesaplama',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-net-hesaplama-rehberi' },
    openGraph: {
        title: 'TYT Net Hesaplama Rehberi 2027 | Test Ağırlıkları ve Katsayılar',
        description: 'TYT testlerinin puan ağırlıkları, 4 yanlış 1 doğru kuralı ve net hesabı mantığı.',
        type: 'article',
        publishedTime: '2026-02-12',
        modifiedTime: '2026-02-15',
        url: 'https://yksnethesapla.com/blog/tyt-net-hesaplama-rehberi',
        images: [
            {
                url: '/images/blog/tyt-net-hesaplama-rehberi.svg',
                width: 1200,
                height: 630,
                alt: 'TYT Net Hesaplama Rehberi 2027'
            }
        ],
    },
}

export default function TYTNetHesaplamaRehberi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="TYT Net Hesaplama Rehberi 2027 | Test Ağırlıkları ve Katsayılar" 
                    description="TYT net hesabı nasıl yapılır? Türkçe, Matematik, Fen ve Sosyal testlerinin puan ağırlıkları, standart sapma ve 0,5 net kuralı."
                    datePublished="2026-02-12"
                    dateModified="2026-02-15"
                    url="https://yksnethesapla.com/blog/tyt-net-hesaplama-rehberi"
                    keywords={['tyt net hesaplama', 'tyt katsayıları', 'tyt puan hesaplama 2027', 'tyt matematik katsayısı', 'yks net hesaplama']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Net Hesaplama</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-12">12 Şubat 2026</time>
                            <span className="text-gray-600">• 6 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT Net Hesaplama: Test Ağırlıkları ve Puan Mantığı
                        </h1>
                        <p className="text-xl text-gray-600">
                            Aynı toplam nete sahip iki adayın farklı TYT puanları alması testlerin ağırlıkları ve standart sapma değerleriyle ilgilidir. Sistemin temel dinamikleri şunlardır.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/tyt-net-hesaplama-rehberi.svg"
                        alt="TYT Net Hesaplama: Test Ağırlıkları ve Puan Mantığı"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            TYT&apos;de ham net, her test için doğru cevap sayısından yanlış cevap sayısının dörtte birinin çıkarılmasıyla (Doğru - Yanlış/4) bulunur. Ancak ham netlerin puana dönüşümü her derste eşit değildir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Testlerinin Puan Dağılımı
                        </h2>
                        <p>
                            120 soruluk TYT sınavında testlerin genel puana katkı oranları şu şekildedir:
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 not-prose">
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 text-center">
                                <span className="text-xs font-bold uppercase text-blue-700">Temel Test</span>
                                <h3 className="font-bold text-blue-900 text-lg mt-1">Türkçe</h3>
                                <p className="text-3xl font-black text-blue-600 my-1">%33</p>
                                <p className="text-xs text-blue-700 font-medium">40 Soru (~1,32 Puan)</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 text-center">
                                <span className="text-xs font-bold uppercase text-blue-700">Temel Test</span>
                                <h3 className="font-bold text-blue-900 text-lg mt-1">Matematik</h3>
                                <p className="text-3xl font-black text-blue-600 my-1">%33</p>
                                <p className="text-xs text-blue-700 font-medium">40 Soru (~1,32 Puan)</p>
                            </div>
                            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-center">
                                <span className="text-xs font-bold uppercase text-emerald-700">Tamamlayıcı Test</span>
                                <h3 className="font-bold text-emerald-900 text-lg mt-1">Fen Bilimleri</h3>
                                <p className="text-3xl font-black text-emerald-600 my-1">%17</p>
                                <p className="text-xs text-emerald-700 font-medium">20 Soru (~1,36 Puan)</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-center">
                                <span className="text-xs font-bold uppercase text-amber-700">Tamamlayıcı Test</span>
                                <h3 className="font-bold text-amber-900 text-lg mt-1">Sosyal Bilimler</h3>
                                <p className="text-3xl font-black text-amber-600 my-1">%17</p>
                                <p className="text-xs text-amber-700 font-medium">20 Soru (~1,36 Puan)</p>
                            </div>
                        </div>

                        <p>
                            Türkçe ve Temel Matematik testleri toplam puanın üçte ikisini oluşturur. Fen ve Sosyal testleri ise kalan üçte birlik kısmı paylaşır. Soru başına getirilen net puanlar birbirine çok yakındır.
                        </p>

                        <QuickNetSimulator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Alan Ayrımı Olmaksızın Tüm Netlerin Değeri
                        </h2>
                        <p>
                            TYT ortak bir sınavdır. Yani Eşit Ağırlık veya Sözel öğrencisinin çözdüğü 1 Fen sorusu ile Sayısal öğrencisinin çözdüğü 1 Fen sorusunun TYT puanına katkısı aynıdır.
                        </p>
                        <p>
                            Benzer şekilde Sayısal öğrencisinin çözdüğü Coğrafya veya Tarih soruları da genel TYT puanını doğrudan artırır. Bu nedenle yalnızca kendi alan derslerine odaklanmak yerine diğer testlerdeki temel bilgi sorularını da yanıtlamak toplam neti hızla yukarı çeker.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            0,5 Net Kuralı Nedir?
                        </h2>
                        <p>
                            TYT puanının hesaplanabilmesi için adayın Türkçe veya Temel Matematik testlerinin en az birinden en az 0,5 ham net çıkarmış olması zorunludur.
                        </p>
                        <p>
                            Her iki testten de 0 net veya eksi net alan adayın Sosyal veya Fen netleri ne olursa olsun TYT puanı hesaplanmaz.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">TYT Puanınızı Hesaplayın</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Doğru ve yanlış sayılarınızı girerek standart katsayılarla hesaplanan TYT puanınızı hemen görün.
                            </p>
                            <Link href="/#hesaplama" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Net Hesaplayıcıya Git →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Yazılar</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-kesin-cikan-konular" className="p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                                    <p className="font-semibold text-emerald-900">TYT&apos;de Sık Çıkan Konular →</p>
                                    <p className="text-xs text-gray-600 mt-1">ÖSYM&apos;nin her yıl düzenli sorduğu konu listesi.</p>
                                </Link>
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">1 Netin Sıralama Etkisi →</p>
                                    <p className="text-xs text-gray-600 mt-1">Farklı başarı dilimlerinde 1 netin getirdiği sıralama farkı.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
