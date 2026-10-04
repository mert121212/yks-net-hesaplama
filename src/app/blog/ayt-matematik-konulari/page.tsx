import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'AYT Matematik Konuları ve Soru Dağılımı 2027: LTİ ve Trigonometriyi Fethetme Rehberi',
    description: 'AYT Matematik 40 sorunun dağılımı, korkulan Limit-Türev-İntegral bloğu, Trigonometri taktikleri ve derece getiren çalışma zinciri.',
    keywords: 'ayt matematik konuları, ayt matematik soru dağılımı, lti nasıl çalışılır, trigonometri, ayt matematik 2027, türev integral taktikleri',
    alternates: { canonical: 'https://yksnethesapla.com/blog/ayt-matematik-konulari' },
    openGraph: {
        title: 'AYT Matematik Konuları ve Soru Dağılımı 2027',
        description: 'AYT Matematik şakaya gelmez; sıralamanın kralını belirler. Konu zinciri ve net kurtarma rehberi.',
        type: 'article',
        publishedTime: '2026-02-18',
        modifiedTime: '2026-03-01',
        url: 'https://yksnethesapla.com/blog/ayt-matematik-konulari',
        images: [
            {
                url: '/images/blog/ayt-matematik-konulari.jpg',
                width: 1200,
                height: 630,
                alt: 'AYT Matematik Konuları ve Stratejisi'
            }
        ],
    },
}

export default function AYTMatematikKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="AYT Matematik Konuları ve Soru Dağılımı 2027 | Çalışma Planı" 
                    description="AYT Matematik konuları, LTİ (Limit, Türev, İntegral) ve Trigonometri soru dağılımı, SAY ve EA puanına etkisi ve çalışma sırası."
                    datePublished="2026-02-18"
                    dateModified="2026-03-01"
                    url="https://yksnethesapla.com/blog/ayt-matematik-konulari"
                    keywords={['ayt matematik konuları', 'ayt matematik soru dağılımı', 'lti nasıl çalışılır', 'trigonometri', 'ayt matematik 2027']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">AYT Matematik</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AYT Masası</span>
                            <time className="text-gray-600" dateTime="2026-02-18">18 Şubat 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            AYT Matematik Konuları ve Soru Dağılımı: Sıralamanın Kaderini Çizen 40 Soru
                        </h1>
                        <p className="text-xl text-gray-600">
                            TYT hız sınavıysa, AYT safi bilek gücüdür. Süre baskısı yok; 180 dakika boyunca bildiğin konuyu ilmek ilmek işleme sınavı.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/ayt-matematik-konulari.jpg"
                        alt="AYT Matematik Konuları, Soru Dağılımı ve Çalışma Sırası"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS sonucun geldiğinde ekranında gördüğün sıralamanın en az %60&apos;ını AYT belirler. İster Sayısalcı ol ister Eşit Ağırlıkçı; AYT Matematikte 30 barajını aşan bir adayın hedeflediği ilk 20-30 bin bandına girmemesi neredeyse imkansızdır.
                        </p>

                        <p>
                            İyi haber şu: TYT&apos;deki gibi &ldquo;Acaba süre yetecek mi?&rdquo; paniği yok. 40 soruya neredeyse soru başı 4-5 dakika ayıracak lüksün var. Kötü haber ise: <strong>Bilmiyorsan şansın sıfır.</strong> Sallayarak tutturamazsın, paragraf taktiğiyle sıyrılamazsın. Konuyu A&apos;dan Z&apos;ye kavramak zorundasın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            AYT Matematik Soru Dağılımı (40 Soruluk Şablon)
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">1. Altyapı Bloğu: Fonksiyon, Polinom, Parabol, Karmaşık Sayı (6 - 8 Soru)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Burası sınavın &ldquo;ısınma&rdquo; turudur ama asla hafife alınmaz. Fonksiyon ötelemelerini ve grafik okumayı bilmeyen birinin ne türevi ne integrali anlama şansı vardır. Polinom bölmesi ve parabol tepe noktası her sene en az 3-4 net demektir.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">2. Cepte Netler: Logaritma ve Diziler (4 - 5 Soru)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    AYT&apos;nin en cömert, en dürüst iki konusudur. Kuralları nettir, formülleri bellidir. Soru tipleri sürpriz yapmaz. Taban değiştirme ve aritmetik/geometrik dizi toplam formüllerini ezberleyen bir aday bu 4 soruyu 8 dakikada cebine koyar.
                                </p>
                            </div>

                            <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
                                <h3 className="font-bold text-purple-950 text-lg mb-1">3. Büyük Canavar: Trigonometri + LTİ (14 - 16 Soru)</h3>
                                <p className="text-sm text-purple-900 leading-relaxed">
                                    Sınavın kalbi, ciğeri burasıdır: Trigonometri (4 soru), Limit-Süreklilik (2 soru), Türev (4 soru), İntegral (4 soru). Birçok adayın korkudan kaçtığı bu blok aslında son derece kurallıdır. Bir kere zinciri kurduğunda sorular bulmaca gibi çözülür.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-950 text-lg mb-1">4. Analitik ve AYT Geometri (9 - 10 Soru)</h3>
                                <p className="text-sm text-amber-900 leading-relaxed">
                                    Noktanın ve doğrunun analitiği, çemberin analitiği, katı cisimler. Formülleri yerine koyma soruları çoğunluktadır. 30 net bandını 35+ üzerine fırlatan asıl gizli koz analitik geometridir.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            LTİ (Limit-Türev-İntegral) Bloğu Nasıl Çalışılır?
                        </h2>
                        <p>
                            Öğrencilerin yaptığı en büyük hata şu: Fonksiyonu tam oturtmadan türeve dalmak. Bu, temeli olmayan binanın 5. katını çıkmaya benzer; ilk rüzgarda çöker. Doğru çalışma zinciri milimetrik olarak şudur:
                        </p>
                        <ol className="list-decimal pl-6 space-y-3">
                            <li><strong>Önce Fonksiyon Grafikleri ve Eğim Mantığı:</strong> Bir doğrunun eğimi nedir, grafik nasıl ötelenir? Bunları adın gibi bileceksin.</li>
                            <li><strong>Trigonometri ile Açıları Isıt:</strong> Türev ve integraldeki dönüşümlerde trigonometrik özdeşlikler sürekli karşına çıkacak. Yarım açı formüllerini ezberlemeden ileri gitme.</li>
                            <li><strong>Limit ve Süreklilik (2-3 Günlük İş):</strong> Sağdan-soldan yaklaşma ve 0/0 belirsizliğini çarpanlara ayırma. En rahat oturacak konudur.</li>
                            <li><strong>Türevin Geometrik Yorumu:</strong> Türev alma kuralları çocuk oyuncağıdır; asıl olay &ldquo;teğetin eğimi&rdquo; ve &ldquo;maksimum-minimum&rdquo; problemleridir. Grafik çizmeyi öğrenmeden türev bitmiş sayılmaz.</li>
                            <li><strong>İntegral ve Eğri Altında Kalan Alan:</strong> Değişken değiştirmeyi (u-du) kaptıktan sonra alan sorularını şekil çizerek çözmeye odaklan.</li>
                        </ol>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Ne Zaman Branş Denemesine Başlamalısın?
                        </h2>
                        <p>
                            &ldquo;Tüm konular bitsin, mayısta başlarım&rdquo; diyenler haziranda hüsrana uğrar. 
                        </p>
                        <p>
                            İntegral devam ederken bile arkadaki 25 konunun tazeliğini korumak için haftada 1 tane AYT Matematik branş denemesi çözmek zorundasın. Unutulan bir logaritma kuralını denemede görüp hatırlamak, sınavda hatırlamaktan bin kat daha değerlidir.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">AYT Netlerinin Sıralamaya Etkisini Gör</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                AYT Matematikte yapacağın her 1 net, TYT&apos;deki neredeyse 2,5 nete bedeldir. Netlerini simülatörümüze gir, hedefine ne kadar yaklaştığını gör.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                AYT Sıralama Hesaplayıcıyı Aç →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
