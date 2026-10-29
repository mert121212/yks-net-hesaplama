import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'
import ArticleFeedback from '@/components/ArticleFeedback'
import ReadingProgress from '@/components/ReadingProgress'
import LastUpdatedBadge from '@/components/LastUpdatedBadge'
import TableOfContents from '@/components/TableOfContents'

export const metadata: Metadata = {
    title: 'TYT Net Hesaplama Rehberi 2027: Test Ağırlıkları ve Katsayılar',
    description: 'İki aday aynı neti yapıp nasıl farklı puan alır? TYT Türkçe, Matematik, Fen ve Sosyal test katsayıları, 0,5 net baraj kuralı ve net hesaplama formülü.',
    keywords: 'tyt net hesaplama, tyt katsayıları, tyt puan hesaplama 2027, tyt matematik katsayısı, yks net hesaplama',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-net-hesaplama-rehberi' },
    openGraph: {
        title: 'TYT Net Hesaplama Rehberi 2027: Test Ağırlıkları ve Katsayılar',
        description: 'Aynı neti yapıp farklı puan almanın sırrı: TYT test ağırlıkları ve 0,5 net kuralının perde arkası.',
        type: 'article',
        publishedTime: '2026-04-10',
        modifiedTime: '2026-10-29',
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
                <ReadingProgress />
                <BlogArticleSchema 
                    title="TYT Net Hesaplama Rehberi 2027: Test Ağırlıkları ve Katsayılar" 
                    description="TYT net hesabı nasıl yapılır? Türkçe, Matematik, Fen ve Sosyal testlerinin puan ağırlıkları, standart sapma ve 0,5 net kuralı."
                    datePublished="2026-04-10"
                    dateModified="2026-10-29"
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
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber & Formül</span>
                            <time className="text-gray-600" dateTime="2026-04-10">10 Nisan 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT Net Hesaplama: Aynı Neti Yapan İki Arkadaş Neden Farklı Puan Alır?
                        </h1>
                        <p className="text-xl text-gray-600">
                            İkiniz de 70 net yapmışsınızdır ama arkadaşın senden 12 puan yüksek alır ve 40 bin kişi öne geçer. Peki bu fark nereden kaynaklanıyor? İşte test katsayılarının ve standart sapmanın perde arkası.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/tyt-net-hesaplama-rehberi.jpg"
                        alt="TYT Net Hesaplama: Test Ağırlıkları ve Puan Mantığı"
                    />

                    <TableOfContents items={[
                        { id: 'pasta-paylasimi', title: 'TYT\'deki 120 Sorunun Pasta Paylaşımı (%33 ve %17 Dengesi)' },
                        { id: 'simulator', title: 'Hızlı Net Simülatörü' },
                        { id: 'alan-ayrimi-yok', title: 'Alan Ayrımı Yok: Her Net Herkese Eşit Yarar!' },
                        { id: '05-net-kurali', title: '0,5 Net Kuralı: Puanın Hesaplanmayabilir!' },
                        { id: '4-yanlis-1-dogru', title: '4 Yanlış 1 Doğruyu Nasıl Götürür? Örnek Net Tablosu' },
                        { id: 'sikca-sorulanlar', title: 'Sıkça Sorulan Sorular' },
                    ]} />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her deneme sınavı sonrası kütüphane koridorlarında aynı sahne yaşanır: İki öğrenci masaya oturur. İkisinin de toplam neti 68&apos;dir. Biri 314 puan alırken öbürü 298 puanda kalır. &ldquo;Hocam aynı nete neden farklı puan geldi?&rdquo; sorusu kafaları kurcalar.
                        </p>

                        <p>
                            Bunun sebebi çok nettir: TYT&apos;de toplam nete bakılmaz; o netlerin <strong>hangi testlerden toplandığına</strong> bakılır. Her testin soru sayısı, Türkiye genel ortalaması ve ÖSYM puan ağırlığı birbirinden farklıdır.
                        </p>

                        <h2 id="pasta-paylasimi" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT&apos;deki 120 Sorunun Pasta Paylaşımı
                        </h2>

                        <p>
                            120 soruluk TYT oturumunda ÖSYM&apos;nin belirlediği resmi test ağırlıkları şu şekildedir:
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 not-prose">
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 text-center">
                                <span className="text-xs font-bold uppercase text-blue-700">Omurga Test</span>
                                <h3 className="font-bold text-blue-900 text-lg mt-1">Türkçe</h3>
                                <p className="text-3xl font-black text-blue-600 my-1">%33</p>
                                <p className="text-xs text-blue-700 font-medium">40 Soru (~3,3 Puan)</p>
                            </div>
                            <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200 text-center">
                                <span className="text-xs font-bold uppercase text-indigo-700">Fark Yaratan</span>
                                <h3 className="font-bold text-indigo-900 text-lg mt-1">Matematik</h3>
                                <p className="text-3xl font-black text-indigo-600 my-1">%33</p>
                                <p className="text-xs text-indigo-700 font-medium">40 Soru (~3,3 Puan)</p>
                            </div>
                            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-center">
                                <span className="text-xs font-bold uppercase text-emerald-700">Hızlı Puan</span>
                                <h3 className="font-bold text-emerald-900 text-lg mt-1">Fen Bilimleri</h3>
                                <p className="text-3xl font-black text-emerald-600 my-1">%17</p>
                                <p className="text-xs text-emerald-700 font-medium">20 Soru (~3,4 Puan)</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-center">
                                <span className="text-xs font-bold uppercase text-amber-700">Gizli Silah</span>
                                <h3 className="font-bold text-amber-900 text-lg mt-1">Sosyal Bilimler</h3>
                                <p className="text-3xl font-black text-amber-600 my-1">%17</p>
                                <p className="text-xs text-amber-700 font-medium">20 Soru (~3,4 Puan)</p>
                            </div>
                        </div>

                        <p>
                            Türkçe ve Temel Matematik toplam puanın tam 3&apos;te 2&apos;sini sırtlar. Fen ve Sosyal testlerinde ise 20 soru bulunduğu için, soru başına düşen puan katsayısı Türkçe ve Matematikle neredeyse kafa kafayadır. Dolayısıyla <em>&ldquo;Sosyal nasıl olsa az puan getirir&rdquo;</em> yanılgısıyla 20 soruluk testi hafife alanlar çok büyük puan kaybı yaşar.
                        </p>

                        <div id="simulator">
                            <QuickNetSimulator />
                        </div>

                        <h2 id="alan-ayrimi-yok" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Alan Ayrımı Yok: Her Net Herkese Eşit Yarar!
                        </h2>

                        <p>
                            Eşit Ağırlık ve Sözel öğrencilerinin en sık düştüğü yanılgı şudur: <em>&ldquo;Ben EA&apos;yım, Fen çözsem neye yarar ki?&rdquo;</em>
                        </p>

                        <p>
                            TYT ortak bir sınavdır; bu sınavda <strong>alan ayrımı yoktur</strong>. Sayısal öğrencisinin çözdüğü 1 Fizik sorusu ne puan getiriyorsa, Eşit Ağırlıkçının veya Sözelcinin çözdüğü 1 Fizik sorusu da tıpatıp aynı puanı getirir. Hatta bir eşit ağırlık öğrencisinin temel kavramları çalışıp yapacağı 6-7 Fen neti, onu on binlerce adayın bir anda önüne fırlatır. Aynısı sayısalcının çözeceği tarih ve coğrafya soruları için de geçerlidir.
                        </p>

                        <h2 id="05-net-kurali" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            0,5 Net Kuralı: Puanın Hesaplanmayabilir!
                        </h2>

                        <p>
                            ÖSYM&apos;nin YKS kılavuzunda açıkça belirttiği kritik kural: <strong>TYT puanının hesaplanabilmesi için adayın Türkçe VEYA Temel Matematik testlerinin en az birinden minimum 0,5 ham net çıkarması şarttır.</strong>
                        </p>

                        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg text-red-950 text-sm my-6">
                            <strong>Dikkat:</strong> Sosyalde 20&apos;de 20 yap, Fende 20&apos;de 20 yap; şayet hem Türkçede hem de Matematikte 0 veya eksi nete düştüysen TYT puanın hesaplanmaz! Bu nedenle Türkçe veya Matematikten en az bir doğruyu net şekilde cebine koymadan diğer testlere dalmamalısın.
                        </div>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Detaylı TYT Puanını ve Sıralamanı Gör</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Doğru ve yanlışlarını gir; ÖSYM standart formülüyle ham puanını ve OBP katkılı yerleştirme sıralamanı hesapla.
                            </p>
                            <Link href="/tyt-net-hesaplama" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                TYT Net Hesaplayıcıya Git →
                            </Link>
                        </div>

                        <h2 id="4-yanlis-1-dogru" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4 Yanlış 1 Doğruyu Nasıl Götürür? Örnek Net Tablosu
                        </h2>

                        <p>
                            ÖSYM sınavlarında yapılan her yanlış cevap, doğru sayınızdan tam <strong>0,25 net düşürür</strong>. Boş bırakılan sorular ise net sayısını etkilemez. Aşağıdaki senaryo tablosunda rastgele işaretlemenin faturasını inceleyebilirsin:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-slate-100 text-slate-900 font-semibold">
                                    <tr>
                                        <th className="p-3 border">Toplam Soru</th>
                                        <th className="p-3 border">Doğru</th>
                                        <th className="p-3 border">Yanlış</th>
                                        <th className="p-3 border">Boş</th>
                                        <th className="p-3 border">Kaybedilen Net</th>
                                        <th className="p-3 border font-bold text-blue-700">Kalan Net</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 border">40 Türkçe</td>
                                        <td className="p-3 border">34</td>
                                        <td className="p-3 border">6</td>
                                        <td className="p-3 border">0</td>
                                        <td className="p-3 border text-red-600">-1,50 Net</td>
                                        <td className="p-3 border font-bold text-emerald-600">32,50 Net</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 border">40 Matematik</td>
                                        <td className="p-3 border">28</td>
                                        <td className="p-3 border">4</td>
                                        <td className="p-3 border">8</td>
                                        <td className="p-3 border text-red-600">-1,00 Net</td>
                                        <td className="p-3 border font-bold text-emerald-600">27,00 Net</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 border">20 Sosyal</td>
                                        <td className="p-3 border">15</td>
                                        <td className="p-3 border">5</td>
                                        <td className="p-3 border">0</td>
                                        <td className="p-3 border text-red-600">-1,25 Net</td>
                                        <td className="p-3 border font-bold text-emerald-600">13,75 Net</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 border">20 Fen</td>
                                        <td className="p-3 border">12</td>
                                        <td className="p-3 border">8</td>
                                        <td className="p-3 border">0</td>
                                        <td className="p-3 border text-red-600">-2,00 Net</td>
                                        <td className="p-3 border font-bold text-emerald-600">10,00 Net</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Kafanın karıştığı sorularda rastgele sallamayıp boş bırakmanın neden hayat kurtardığını <Link href="/blog/tyt-net-artirma-taktikleri" className="text-blue-600 font-semibold hover:underline">TYT Net Artırma Taktikleri</Link> yazımızda anlattık. AYT katsayıları ve puanların yerleştirmedeki rolü için <Link href="/blog/ayt-puan-hesaplama" className="text-blue-600 font-semibold hover:underline">AYT Puan Hesaplama Rehberi</Link> içeriğimizi inceleyebilirsin.
                        </p>

                        <h2 id="sikca-sorulanlar" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">TYT taban puanı kaçtır?</h3>
                                <p className="text-sm text-gray-600">
                                    ÖSYM, sınava giren her adaya 100 taban puan verir. Adayların yaptıkları netlere göre elde ettikleri puanlar bu 100 taban puanın üzerine eklenir ve en yüksek TYT ham puanı 500 olur.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">TYT puanı AYT yerleştirme puanını ne kadar etkiler?</h3>
                                <p className="text-sm text-gray-600">
                                    YKS yerleştirme puanı hesaplanırken TYT&apos;nin ağırlığı tam olarak %40&apos;tır. AYT&apos;nin ağırlığı ise %60&apos;tır. Yani TYT iyi bir temel atar, AYT ise sıralamayı belirler.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Standart sapma her sene değişir mi?</h3>
                                <p className="text-sm text-gray-600">
                                    Evet. Bir testin Türkiye genel ortalaması o yıl ne kadar düşükse (yani soru genel olarak ne kadar zorsa), o testten yapılan 1 netin standart puan getirisi o kadar yükselir.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#tytNetHesaplama</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#osymKatsayi</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#yks2027</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <Link href="/blog" className="text-blue-600 hover:underline font-medium">← Blog Listesine Dön</Link>
                            <Link href="/blog/yks-1-net-kac-kisi-atar" className="text-blue-600 hover:underline font-medium">1 Net Kaç Kişi Atar? →</Link>
                        </div>
                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
