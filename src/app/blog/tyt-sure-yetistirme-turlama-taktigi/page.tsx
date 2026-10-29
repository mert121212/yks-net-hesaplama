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
    title: 'TYT Süre Yetiştirme ve Turlama Taktiği: 165 Dakika Yönetimi 2027',
    description: 'TYT sınavında süre yetiştirememe sorununa kesin çözüm: 1. ve 2. tur stratejisi, ders bazlı dakika dağılımı ve soruyla inatlaşmama sanatı.',
    keywords: 'tyt süre yetiştirme, tyt turlama taktiği, yks zaman yönetimi, tyt 165 dakika, tyt hızlanma teknikleri',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-sure-yetistirme-turlama-taktigi' },
    openGraph: {
        title: 'TYT Süre Yetiştirme ve Turlama Taktiği: 165 Dakika Yönetimi',
        description: 'Denemede son 20 soruyu göremeden süre mi bitiyor? Turlama taktiğiyle 120 sorunun tamamını tarama rehberi.',
        type: 'article',
        publishedTime: '2026-10-29',
        modifiedTime: '2026-10-29',
        url: 'https://yksnethesapla.com/blog/tyt-sure-yetistirme-turlama-taktigi',
        images: [
            {
                url: '/images/blog/tyt-net-hesaplama-rehberi.jpg',
                width: 1200,
                height: 630,
                alt: 'TYT Süre Yetiştirme ve Turlama Taktiği'
            }
        ],
    },
}

export default function TYTSureYetistirmeTurlamaTaktigi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <ReadingProgress />
                <BlogArticleSchema 
                    title="TYT Süre Yetiştirme ve Turlama Taktiği: 165 Dakika Yönetimi" 
                    description="TYT sınavında 165 dakikayı doğru yönetme rehberi: Turlama taktiği, ders bazlı süre dağılımı ve sınav anında panik yönetimi."
                    datePublished="2026-10-29"
                    dateModified="2026-10-29"
                    url="https://yksnethesapla.com/blog/tyt-sure-yetistirme-turlama-taktigi"
                    keywords={['tyt süre yetiştirme', 'tyt turlama taktiği', 'yks zaman yönetimi', 'tyt 165 dakika']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Süre Yönetimi</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Sınav Stratejisi</span>
                            <time className="text-gray-600" dateTime="2026-10-29">29 Ekim 2026</time>
                            <span className="text-gray-600">• 11 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT Süre Yetiştirme ve Turlama Taktiği: 165 Dakikayı Yönetme Sanatı
                        </h1>
                        <p className="text-xl text-gray-600">
                            Denemeden çıktığında &ldquo;Son sayfadaki sorular çok kolaymış ama sürem yetmediği için göremedim&rdquo; diyorsan, sorun bilginde değil, kitapçık yönetimindedir. İşte 120 sorunun tamamını masaya koyan sistem.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/tyt-net-hesaplama-rehberi.jpg"
                        alt="TYT Süre Yetiştirme ve Turlama Taktiği"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            TYT&apos;de öğrencilerin başına gelen en büyük facia şudur: Türkçe&apos;de uzun bir felsefe paragrafına ya da Matematik&apos;te karmaşık bir geometri sorusuna takılıp 4-5 dakika harcarlar. Sınav bittiğinde bir bakarlar ki arkadaki Fen veya Sosyal testinde 30 saniyede çözülecek 6 tane kek soru bomboş kalmış.
                        </p>

                        <p>
                            TYT bir zeka yarışından çok <strong>zaman ve kriz yönetimi sınavıdır.</strong> 165 dakikada 120 soru çözmek demek, soru başına ortalama 82 saniye demektir. Bu süreyi tek bir soruya kurban etmemek için profesyonel sınav koçlarının kullandığı &ldquo;Turlama Taktiği&rdquo;ni alışkanlık haline getirmek zorundasın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Turlama Taktiği Nedir ve Nasıl Uygulanır?
                        </h2>
                        <p>
                            Turlama taktiği, sınavı baştan sona tek bir seferde bitirmeye çalışmak yerine <strong>iki aşamalı (iki turlu)</strong> çözme prensibidir.
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-2">1. Tur: Cepte Olan Netleri Toplama (İlk 110 - 120 Dakika)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    Kitapçığı açtığında sadece tek okuyuşta anladığın ve çözüm yolunu net gördüğün soruları çözersin. Bir soru 40-50 saniye içinde kafanda şekillenmediyse hemen yanına işaret koyup bir sonraki soruya atlarsın. Bu tur bittiğinde 120 sorunun tamamını görmüş ve yaklaşık 70-80 garanti neti optiğe kodlamış olursun.
                                </p>
                            </div>

                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-2">2. Tur: İşaretli Soruları Avlama (Kalan 45 - 55 Dakika)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Artık üzerinde sınavı yetiştirememe stresi yoktur; çünkü kolay soruların tamamı çözülmüştür. Şimdi birinci turda yanına işaret koyduğun, işlem gerektiren ya da iki şık arasında kaldığın sorulara rahat bir kafayla dönersin.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Soru Kitapçığında Kullanacağın 3 Basit Sembol
                        </h2>
                        <p>
                            Soru yanına rastgele karalama yapmak yerine net bir şifreleme dili kullan:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-800">
                            <li><strong>Daire içine alınmış Soru Numarası:</strong> &ldquo;Konuyu biliyorum, işlemim biraz uzun sürecek, 2. turda ilk bakacağım soru bu.&rdquo;</li>
                            <li><strong>Soru İşareti (?):</strong> &ldquo;İki seçenek arasında kaldım, kafamı toplayıp tekrar okumam lazım.&rdquo;</li>
                            <li><strong>Çarpı (X):</strong> &ldquo;Konu hakkında hiçbir fikrim yok, bu soruyla vakit kaybetmeyeceğim, tamamen pas geçiyorum.&rdquo;</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            İdeal 165 Dakika Dağılım Tablosu
                        </h2>
                        <p>
                            Her öğrencinin güçlü olduğu ders farklıdır; ancak Türkiye derecesi yapan adayların ortalama süre şablonu şöyledir:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border border-gray-200 text-sm">
                                <thead className="bg-slate-100 text-gray-800 font-semibold border-b">
                                    <tr>
                                        <th className="p-3 border">Test</th>
                                        <th className="p-3 border text-center">Soru Sayısı</th>
                                        <th className="p-3 border text-center">Hedeflenen Süre</th>
                                        <th className="p-3 border">Süre Aşımı Alarmı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">TYT Türkçe</td>
                                        <td className="p-3 border text-center">40 Soru</td>
                                        <td className="p-3 border text-center font-bold text-blue-700">40 - 45 Dakika</td>
                                        <td className="p-3 border text-red-600 font-medium">50 dakikayı geçerse hemen dersi bırak!</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Sosyal Bilimler</td>
                                        <td className="p-3 border text-center">20 Soru</td>
                                        <td className="p-3 border text-center font-bold text-emerald-700">12 - 15 Dakika</td>
                                        <td className="p-3 border text-gray-600">Bilgi soruları hızlı taranmalı.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Fen Bilimleri</td>
                                        <td className="p-3 border text-center">20 Soru</td>
                                        <td className="p-3 border text-center font-bold text-emerald-700">13 - 17 Dakika</td>
                                        <td className="p-3 border text-gray-600">Yoruma dayalı sorular seri geçilmeli.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Temel Matematik (1. Tur)</td>
                                        <td className="p-3 border text-center">40 Soru</td>
                                        <td className="p-3 border text-center font-bold text-purple-700">50 - 55 Dakika</td>
                                        <td className="p-3 border text-gray-600">Zor problemlere takılmadan kolaylar toplanmalı.</td>
                                    </tr>
                                    <tr className="border-b bg-amber-50">
                                        <td className="p-3 font-bold text-amber-950 border">2. Tur (Kurtarma Aşaması)</td>
                                        <td className="p-3 border text-center font-bold text-amber-950">-</td>
                                        <td className="p-3 border text-center font-bold text-amber-900">30 - 35 Dakika</td>
                                        <td className="p-3 border text-amber-950 font-medium">İşaretlenen 15-20 soruya sakin kafayla dönülür.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <QuickNetSimulator />

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Netlerindeki Artışı Canlı Gör</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Turlama taktiğiyle sınavda fazladan göreceğin 5-6 kolay soru sıralamanı nasıl etkiler? Netlerini hesaplayıcımıza girerek puan karşılığını hemen test et.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Puan Hesaplama Motorunu Aç →
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sınavda Süreyi Yiyip Bitiren 3 Ölümcül Alışkanlık
                        </h2>
                        <div className="space-y-4 my-6">
                            <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                                <h3 className="font-bold text-red-950 mb-1">1. Soruyla İnatlaşmak (&ldquo;Ben Bunu Çözmek Zorundayım&rdquo; Egosu)</h3>
                                <p className="text-sm text-red-900">
                                    Özellikle çok çalıştığın bir konudan (örneğin Yaş Problemleri) gelen zor bir soruyu çözemeyince gurur yapıp 4 dakika gömmek sınavı kaybettirir. Unutma: En zor sorunun getirdiği puanla en kolay sorunun puanı aynıdır (+1 net).
                                </p>
                            </div>
                            <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                                <h3 className="font-bold text-red-950 mb-1">2. Sürekli Saate Bakıp Paniklemek</h3>
                                <p className="text-sm text-red-900">
                                    Her iki soruda bir duvardaki saate bakmak odaklanmanı parçalar. Saate yalnızca bölüm bittiğinde (Türkçe bittiğinde, Sosyal bittiğinde) bakma disiplini geliştir.
                                </p>
                            </div>
                            <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                                <h3 className="font-bold text-red-950 mb-1">3. Toplu Kodlama Yapmak</h3>
                                <p className="text-sm text-red-900">
                                    120 sorunun tamamını çözüp en son optiğe geçirmeye çalışmak ölümcül bir risktir. Süre bittiğinde kodlayamadan sınavın alınması ya da kaydırma yapılması riski çok yüksektir. Sayfa sayfa kodlama en güvenli yöntemdir.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">Sınava hangi dersten başlamak daha mantıklıdır?</h3>
                                <p className="text-sm text-gray-700">
                                    Tek bir doğru sıra yoktur. Genel kural: Zihninin en dinç olduğu ilk 45 dakikada en çok odaklanma gerektiren testi (çoğu öğrenci için Türkçe veya Matematik) çözmektir. Ancak denemelerde farklı sıraları (Türkçe-Sosyal-Fen-Matematik veya Matematik-Fen-Türkçe-Sosyal) test ederek kendi en yüksek verim aldığın düzeni belirlemelisin.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">Turlama taktiği netlerimi hemen artırır mı?</h3>
                                <p className="text-sm text-gray-700">
                                    İlk 1-2 denemede alışkanlıkların değiştiği için tuhaf gelebilir. Ancak turlama disiplinini 3 deneme boyunca kararlılıkla uygulayan bir öğrenci, arkadaki kolay soruları kaçırmadığı için doğrudan 5 ila 10 netlik bir sıçrama yaşar.
                                </p>
                            </div>
                        </div>

                        <p className="mt-8">
                            Paragraf sorularında hızlanma tüyoları için <Link href="/blog/tyt-turkce-paragraf-teknikleri" className="text-blue-600 font-semibold hover:underline">TYT Türkçe Paragraf Teknikleri</Link>&apos;ne bakabilir, netlerini 70 bandından yukarı çekmek için <Link href="/blog/tyt-net-artirma-taktikleri" className="text-blue-600 font-semibold hover:underline">TYT Net Artırma Taktikleri</Link> rehberimizi inceleyebilirsin.
                        </p>

                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
