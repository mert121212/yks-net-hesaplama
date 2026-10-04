import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'

export const metadata: Metadata = {
    title: 'TYT Net Hesaplama Rehberi 2027: Test Katsayıları ve Puan Mantığı',
    description: 'İki kişi aynı neti yapıp nasıl farklı puan alır? Türkçe, Matematik, Fen ve Sosyal testlerinin ağırlıkları, 0,5 net şartı ve standart sapma.',
    keywords: 'tyt net hesaplama, tyt katsayıları, tyt puan hesaplama 2027, tyt matematik katsayısı, yks net hesaplama',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-net-hesaplama-rehberi' },
    openGraph: {
        title: 'TYT Net Hesaplama Rehberi 2027: Test Ağırlıkları ve Katsayılar',
        description: 'Aynı neti yapıp farklı puan almanın sırrı: TYT test ağırlıkları ve 0,5 net kuralının perde arkası.',
        type: 'article',
        publishedTime: '2026-02-12',
        modifiedTime: '2026-03-01',
        url: 'https://yksnethesapla.com/blog/tyt-net-hesaplama-rehberi',
        images: [
            {
                url: '/images/blog/tyt-net-hesaplama-rehberi.jpg',
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
                    dateModified="2026-03-01"
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
                            <span className="text-gray-600">• 7 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT Net Hesaplama: Aynı Neti Yapan İki Arkadaş Neden Farklı Puan Alır?
                        </h1>
                        <p className="text-xl text-gray-600">
                            İkiniz de 75 net yapmışsınızdır ama arkadaşın senden 10 puan yüksek alır. &ldquo;Hocam torpil mi var?&rdquo; diye soranlara işin matematiksel iç yüzünü anlatıyoruz.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/tyt-net-hesaplama-rehberi.jpg"
                        alt="TYT Net Hesaplama: Test Ağırlıkları ve Puan Mantığı"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her deneme kulislerinde aynı sahne yaşanır: İki arkadaş masaya oturur. İkisinin de toplam neti 68&apos;dir. Biri 315 puan alırken öbürü 304 puanda kalır. İşte o an akıllara hemen şu soru takılır: <em>&ldquo;Her netin değeri aynı değil miydi?&rdquo;</em>
                        </p>

                        <p>
                            Cevap: Hem evet, hem hayır. Her test kendi içinde soru başına eşit getiri sunsa da, testlerin katsayıları ve Türkiye genelindeki yapılma ortalaması (standart sapma) dengeyi altüst eder.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT&apos;deki 120 Sorunun Pasta Paylaşımı
                        </h2>
                        <p>
                            120 soruluk TYT sınavında derslerin genel puana ağırlık oranları kabaca şöyledir:
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 not-prose">
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 text-center">
                                <span className="text-xs font-bold uppercase text-blue-700">Omurga Test</span>
                                <h3 className="font-bold text-blue-900 text-lg mt-1">Türkçe</h3>
                                <p className="text-3xl font-black text-blue-600 my-1">%33</p>
                                <p className="text-xs text-blue-700 font-medium">40 Soru (~1,33 Puan)</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 text-center">
                                <span className="text-xs font-bold uppercase text-blue-700">Fark Yaratan</span>
                                <h3 className="font-bold text-blue-900 text-lg mt-1">Matematik</h3>
                                <p className="text-3xl font-black text-blue-600 my-1">%33</p>
                                <p className="text-xs text-blue-700 font-medium">40 Soru (~1,34 Puan)</p>
                            </div>
                            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-center">
                                <span className="text-xs font-bold uppercase text-emerald-700">Hızlı Puan</span>
                                <h3 className="font-bold text-emerald-900 text-lg mt-1">Fen Bilimleri</h3>
                                <p className="text-3xl font-black text-emerald-600 my-1">%17</p>
                                <p className="text-xs text-emerald-700 font-medium">20 Soru (~1,36 Puan)</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-center">
                                <span className="text-xs font-bold uppercase text-amber-700">Gizli Silah</span>
                                <h3 className="font-bold text-amber-900 text-lg mt-1">Sosyal Bilimler</h3>
                                <p className="text-3xl font-black text-amber-600 my-1">%17</p>
                                <p className="text-xs text-amber-700 font-medium">20 Soru (~1,36 Puan)</p>
                            </div>
                        </div>

                        <p>
                            Gördüğün gibi Türkçe ve Matematik toplam puanın tam 3&apos;te 2&apos;sini sırtlar. Ama burada asıl dikkat çeken detay: <strong>Fen ve Sosyal sorularının soru başına puan değeri, Türkçe ve Matematikten milimetrik olarak daha yüksektir!</strong> Çünkü Türkiye ortalaması bu testlerde düşüktür.
                        </p>

                        <QuickNetSimulator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Alan Ayrımı Yok: Her Net Herkese Yarar!
                        </h2>
                        <p>
                            Eşit Ağırlıkçıların yaptığı en büyük hata: <em>&ldquo;Ben EA&apos;yım, Fenle ne işim olur?&rdquo;</em> diyerek 20 soruluk TYT Feni optikte bomboş bırakmak.
                        </p>
                        <p>
                            TYT ortak bir sınavdır. Sayısalcının çözdüğü 1 Fizik sorusu ne getiriyorsa, Eşit Ağırlıkçının çözdüğü 1 Fizik sorusu da tıpatıp aynı puanı getirir. Hatta bir EA öğrencisinin temel kavramları çalışıp yapacağı 6-7 Fen neti, onu on binlerce adayın önüne fırlatır. Aynısı Sayısalcının Sosyal çözmesi için de geçerlidir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            0,5 Net Kuralı: Puanın Hesaplanmayabilir!
                        </h2>
                        <p>
                            ÖSYM&apos;nin acımasız bir kuralı vardır: <strong>TYT puanının hesaplanabilmesi için Türkçe veya Temel Matematik testlerinin en az birinden minimum 0,5 ham net çıkarmak zorundasın.</strong>
                        </p>
                        <p>
                            Yani sen Sosyalde 20&apos;de 20 yap, Fende 20&apos;de 20 yap; eğer hem Türkçede hem Matematikte 0 net veya eksi net aldıysan TYT puanın sistemde HESAPLANMAZ. Bu kuralı bilmeyip sınavda strateji hatası yapanlar her sene hüsrana uğruyor.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">TYT Puanını ve Sıralamanı Hesapla</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Doğru ve yanlışlarını gir; ÖSYM&apos;nin en güncel test katsayılarıyla ham puanını ve Türkiye sıralamanı saniyeler içinde gör.
                            </p>
                            <Link href="/#hesaplama" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Net Hesaplayıcıya Git →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Rehberler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-kesin-cikan-konular" className="p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                                    <p className="font-semibold text-emerald-900">TYT&apos;de Banko Çıkan Konular →</p>
                                    <p className="text-xs text-gray-600 mt-1">ÖSYM&apos;nin her yıl düzenli sorduğu soru listesi.</p>
                                </Link>
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">1 Net Kaç Kişi Attırır? →</p>
                                    <p className="text-xs text-gray-600 mt-1">Hangi net aralığında 1 net 15 bin kişi oynatır?</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
