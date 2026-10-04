import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Net Hesaplama Nasıl Yapılır? 4 Yanlış 1 Doğruyu Nasıl Götürür?',
    description: 'YKS net hesaplama mantığı, 4 yanlışın bir doğruyu silme kuralı, testlerin bağımsızlığı ve kafa karıştıran standart sapma efsanesi.',
    keywords: 'yks net hesaplama, tyt net hesaplama, 4 yanlış 1 doğruyu götürür mü, standart sapma yks, yks katsayılar 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir' },
    openGraph: {
        title: 'YKS Net Hesaplama Nasıl Yapılır? 4 Yanlış 1 Doğruyu Nasıl Götürür?',
        description: 'ÖSYM net hesaplama formülü, eksi net durumu ve test katsayılarının puana yansıması.',
        type: 'article',
        publishedTime: '2026-02-15',
        modifiedTime: '2026-03-01',
        url: 'https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir',
        images: [
            {
                url: '/images/blog/yks-net-hesaplama-nasil-yapilir.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Net Hesaplama Rehberi'
            }
        ],
    },
}

export default function YKSNetHesaplama() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS Net Hesaplama Nasıl Yapılır? 4 Yanlış 1 Doğru Kuralı" 
                    description="YKS net hesaplama formülü, 4 yanlışın bir doğruyu götürmesi mantığı, test bazlı net dağılımı ve standart sapmanın puana etkisi."
                    datePublished="2026-02-15"
                    dateModified="2026-03-01"
                    url="https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir"
                    keywords={['yks net hesaplama', 'tyt net hesaplama', '4 yanlış 1 doğruyu götürür mü', 'standart sapma yks', 'yks katsayılar 2027']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Net Hesaplama</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-15">15 Şubat 2026</time>
                            <span className="text-gray-600">• 6 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS Net Hesaplama: 4 Yanlış Kuralı, Eksi Netler ve Şehir Efsaneleri
                        </h1>
                        <p className="text-xl text-gray-600">
                            Kağıt üzerinde basit bir çıkarma işlemi gibi görünse de sınav çıkışında herkesin aklını karıştıran o meşhur hesap: Sallamak mı mantıklı, boş bırakmak mı?
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-net-hesaplama-nasil-yapilir.jpg"
                        alt="YKS Net Hesaplama: 4 Yanlış Kuralı ve Puan Mantığı"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Denemeden çıkıyorsun, cevap anahtarını önüne alıyorsun ve kalbin güm güm atarak doğruları sayıyorsun. Derken bir bakıyorsun 8 tane yanlış gelmiş. İşte o an insanın içine bir kurt düşer: <em>&ldquo;Acaba bu yanlışlar kaç doğrumu yedi, netim neye indi?&rdquo;</em>
                        </p>

                        <p>
                            ÖSYM&apos;nin sınav sisteminde kural çok nettir ama öğrencilerin kulaktan dolma inançları yüzünden her sene binlerce doğru çöpe gider. Gel, işin matematiğini tane tane konuşalım.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Dört Yanlış Bir Doğruyu Tam Olarak Nasıl Eritir?
                        </h2>
                        <p>
                            Formül gayet açık: <strong>Her yanlış cevap, tam 0,25 netini alır götürür.</strong> Dört yanlış bir araya geldiğinde ise kan ter içinde çözdüğün 1 tam doğru soruyu buharlaştırır.
                        </p>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-4">
                            <p className="text-base text-blue-900 font-mono font-bold">
                                Ham Net = Doğru Sayısı − (Yanlış Sayısı ÷ 4)
                            </p>
                            <p className="text-sm text-blue-800 mt-2">
                                Örnek: TYT Türkçe testinde 34 doğru, 6 yanlış yaptın diyelim. Yanlışların faturası: 6 ÷ 4 = 1,50 net. Doğrularından düşelim: 34 − 1,50 = <strong>32,50 Net.</strong>
                            </p>
                        </div>

                        <p>
                            İşte bu yüzden <em>&ldquo;Aman iki şık arasında kaldım, birini işaretleyeyim gitsin&rdquo;</em> kumardır. İki şıkka indirip mantıklı bir eleme yaptıysan işaretlemeye değer; ama zerre fikrin olmadığı bir soruyu sallamak, netini resmen ateşe atmaktır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. Matematikteki Yanlışım Türkçeyi Vurur mu?
                        </h2>
                        <p>
                            Öğrencilerden en sık gelen panik sorusu: <em>&ldquo;Hocam matematikte çok yanlış yaptım, Türkçe netlerimden de düşer mi?&rdquo;</em>
                        </p>
                        <p>
                            <strong>Kocaman bir hayır.</strong> ÖSYM testleri birbirinden bağımsız odacıklar gibi değerlendirir. 
                        </p>
                        <p>
                            Matematikte 5 doğru 20 yanlış yapsan bile (ki netin 0&apos;ın altına iner), o eksi bakiye yalnızca Matematik testinde sıfır olarak kalır. Asla gidip de mis gibi yaptığın 35 Türkçenden 1 milim bile eksiltmez. Her test kendi bacağından asılır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. Şehir Efsanesi: &ldquo;Zor Soruyu Çözen Fazla Puan Alır mı?&rdquo;
                        </h2>
                        <p>
                            Bunu her sene dershanelerde, koridorlarda duyarsın: <em>&ldquo;Oğlum integralin son sorusunu çözdüm, o soru çok zordu, kesin bana 5 puan getirecek!&rdquo;</em>
                        </p>
                        <p>
                            Gerçek şu: <strong>ÖSYM soru bazlı standart sapma uygulamaz.</strong> 
                        </p>
                        <p>
                            Sınavdaki 1. temel işlem sorusu ile Türkiye&apos;nin yüzde birinin çözebildiği o kabus geometri sorusunun ham puan katkısı birbirine kuruşu kuruşuna eşittir. Standart sapma sorunun zorluğuna göre değil, o testin Türkiye ortalamasına göre belirlenir. Yani Matematik testi genel olarak zor geçmişse, Matematik&apos;teki *her* netin değeri artar; tek bir soruya özel ekstra puan piyangosu vurmaz. O yüzden zor soruyla inatlaşıp 4 dakikanı heba etmek yerine 2 tane kolay soru çözmek her zaman kazandırır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. TYT Derslerinin Net Katsayıları (Gerçek Tablo)
                        </h2>
                        <p>
                            Son yılların ÖSYM istatistiklerine göre 1 netin TYT puanına yaklaşık katkısı şu şekildedir:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead className="bg-gray-100 text-gray-800 text-sm">
                                    <tr>
                                        <th className="p-3 border">Test</th>
                                        <th className="p-3 border">Soru</th>
                                        <th className="p-3 border">1 Netin Yaklaşık Katkısı</th>
                                        <th className="p-3 border">Taktik Not</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">TYT Türkçe</td>
                                        <td className="p-3 border">40</td>
                                        <td className="p-3 border text-blue-700 font-bold">~1,32 - 1,34 Puan</td>
                                        <td className="p-3 border text-gray-600">Süre yiyici, güne ilk başlama alanı.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">TYT Matematik</td>
                                        <td className="p-3 border">40</td>
                                        <td className="p-3 border text-blue-700 font-bold">~1,33 - 1,35 Puan</td>
                                        <td className="p-3 border text-gray-600">Fark yaratan test; 20+ net yığılmayı deler.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">TYT Sosyal</td>
                                        <td className="p-3 border">20</td>
                                        <td className="p-3 border text-blue-700 font-bold">~1,35 - 1,37 Puan</td>
                                        <td className="p-3 border text-gray-600">En ucuz net kaynağı; 15 dakikada 15 net.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">TYT Fen</td>
                                        <td className="p-3 border">20</td>
                                        <td className="p-3 border text-blue-700 font-bold">~1,36 - 1,38 Puan</td>
                                        <td className="p-3 border text-gray-600">TM ve Eşit Ağırlıkçıların gizli silahı.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Hemen Kendi Netlerini Hesapla</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Kağıt kalemle uğraşma. Doğru ve yanlışlarını gir; 4 yanlış 1 doğru kuralına ve güncel ÖSYM katsayılarına göre puanını saniyeler içinde hesaplayalım.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Puan ve Sıralama Hesaplayıcıyı Aç →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
