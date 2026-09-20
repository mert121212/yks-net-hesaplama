import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'TYT\'de Kesin Çıkan Konular 2027 | Nokta Atışı Çalışma Programı',
    description: 'TYT Matematik, Türkçe, Fizik, Kimya, Biyoloji ve Tarihte her sene istisnasız sorulan, en çok net getiren kesin çıkan konular listesi 2027.',
    keywords: 'tyt kesin çıkan konular, tyt en çok çıkan konular, tyt matematik çıkan konular, tyt türkçe banko konular, tyt 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-kesin-cikan-konular' },
    openGraph: {
        title: 'TYT\'de Her Sene Banko Çıkan Konular',
        description: 'Vakti az olanlar ve netini hızlıca artırmak isteyenler için nokta atışı TYT konuları.',
        type: 'article',
        publishedTime: '2026-02-11',
        modifiedTime: '2026-02-14',
        url: 'https://yksnethesapla.com/blog/tyt-kesin-cikan-konular',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'TYT Kesin Çıkan Konular 2027'
            }
        ],
    },
}

export default function TYTKesinCikanKonular() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="TYT'de Zaman Kazanmanın Sırrı: Kesin Çıkacak Altın Konular"
                    description="TYT Matematik, Türkçe, Fizik, Kimya, Biyoloji ve Tarihte her sene istisnasız sorulan, en çok net getiren kesin çıkan konular listesi 2027."
                    datePublished="2026-02-11"
                    dateModified="2026-02-14"
                    url="https://yksnethesapla.com/blog/tyt-kesin-cikan-konular"
                    keywords={['tyt kesin çıkan konular', 'tyt en çok çıkan konular', 'tyt matematik çıkan konular', 'tyt türkçe banko konular', 'tyt 2027']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Kesin Çıkan Konular</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Özel Analiz</span>
                            <time className="text-gray-600" dateTime="2026-02-11">11 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Vakti Dar Olanlara: TYT&apos;de Her Sene Banko Çıkan Konular
                        </h1>
                        <p className="text-xl text-gray-600">
                            Müfredatta onlarca konu başlığı var ama ÖSYM soru kitapçığında her sene aynı garanti başlıklar yer alıyor. Masada puan bırakmak istemeyenler için net odaklı konu haritası.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed font-medium text-gray-800">
                            Masada 600 sayfalık kalın bir TYT konu anlatımı kitabı duruyor. Ön kapağını açıp 1. sayfadan itibaren satır satır okumaya çalışıyorsun. Akşam saat 22:00 olduğunda gözlerin yanıyor, kafan allak bullak ve içinde sadece kocaman bir suçluluk duygusu var: <em>&quot;Ben bu kadar konuyu sınava kadar nasıl yetiştireceğim?&quot;</em>
                        </p>
                        <p>
                            Sana çok net bir şey söyleyeyim: <strong>Yetiştirmek zorunda değilsin.</strong>
                        </p>
                        <p>
                            Çünkü ÖSYM&apos;nin soru hazırlama komisyonu her yıl müfredatın kuytu köşelerinden soru üretmek için pusuda beklemiyor. Son 8 yılın çıkmış sınav kitapçıklarını masaya yatırıp tek tek soru köklerini taradığında görüyorsun ki; ÖSYM&apos;nin asla vazgeçmediği, her Haziran ayında istisnasız sorduğu bir <strong>&quot;kemik soru omurgası&quot;</strong> var.
                        </p>
                        <p>
                            Eğer zamanın daralıyorsa ya da denemelerde bir türlü 65-70 net barajını aşamıyorsan, enerjini 5 yılda bir çıkan kıytırık detaylara harcamayı bırak. Önce masada duran şu garanti 40-50 neti cebe indireceğiz:
                        </p>

                        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-6 rounded-2xl my-8">
                            <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-1">
                                Sınav Masası Stratejisi
                            </span>
                            <h3 className="text-lg font-bold text-white mb-2">
                                80/20 Kuralı (Pareto Prensibi): Netlerin %80&apos;i Konuların %20&apos;sinden Gelir
                            </h3>
                            <p className="text-xs text-slate-300 leading-relaxed">
                                TYT müfredatında yaklaşık 95 farklı alt kazanım başlığı vardır. Ancak sınavdaki 120 sorunun tam 75 tanesi sadece 18 temel konu başlığından çıkar. Bütün kitabı ezberlemeye çalışmak yerine bu 18 başlıkta soru tipi ezberlemek seni ilk 100 bine taşımaya yeter.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Türkçe: 40 Sorunun 30&apos;unu Sırtlayan 3 Başlık
                        </h2>
                        <p>
                            Türkçe testinde başarının sırrı cilt cilt dil bilgisi ezberlemek değil, göz-beyin koordinasyonunu hızlandırmaktır.
                        </p>
                        <div className="space-y-3 my-4">
                            <div className="bg-emerald-50 p-4 rounded-xl border-l-4 border-emerald-500">
                                <h4 className="font-bold text-emerald-950 text-sm">1. Paragrafta Ana Düşünce &amp; Değinilmemiştir Soruları (14-16 Soru)</h4>
                                <p className="text-xs text-emerald-900 mt-1">
                                    Sınavın en büyük soru bloğudur. Her sabah aç karnına ilk iş 20 paragraf çözmeyen öğrencinin TYT&apos;de süresi kesinlikle yetmez. Bu sorular kural bilmeyi değil, odaklanmayı ölçer.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                                <h4 className="font-bold text-blue-950 text-sm">2. Cümlede ve Sözcükte Anlam (6-8 Soru)</h4>
                                <p className="text-xs text-blue-900 mt-1">
                                    Altı çizili sözün cümleye kattığı anlam, boşluk doldurma ve kesin yargı bulma. Tamamen okuduğunu anlama hızına bakar, 0 ezber gerektirir.
                                </p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500">
                                <h4 className="font-bold text-purple-950 text-sm">3. Yazım Kuralları ve Noktalama İşaretleri (4 Garanti Soru)</h4>
                                <p className="text-xs text-purple-900 mt-1">
                                    Dil bilgisinin en yüksek yatırım getirisine sahip yeridir. &quot;de/da&quot; yazımı, büyük harf kuralları, virgül ve noktalı virgül ayrımı. 2 akşamını verip 4 soruyu garantilersin.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Matematik: 20 Netin Kapısını Açan Çekirdek Konular
                        </h2>
                        <p>
                            Matematikte gözün korkmasın. Kimse senden ilk turda olimpiyat sorusu çözmeni beklemiyor. Masada duran kemik 20 net şuradan toplanır:
                        </p>
                        <div className="space-y-3 my-4">
                            <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-500">
                                <h4 className="font-bold text-amber-950 text-sm">1. Problemler (11-13 Soru)</h4>
                                <p className="text-xs text-amber-900 mt-1">
                                    Sayı, kesir, yüzde ve grafik problemleri. Matematiğin kalbidir. Günde 15 problem çözme alışkanlığı edinmeyen birinin matematikte 20&apos;yi geçme şansı yoktur.
                                </p>
                            </div>
                            <div className="bg-slate-100 p-4 rounded-xl border-l-4 border-slate-600">
                                <h4 className="font-bold text-slate-900 text-sm">2. Temel Kavramlar &amp; Sayı Basamakları (4 Soru)</h4>
                                <p className="text-xs text-slate-700 mt-1">
                                    Tek-çift sayılar, ardışık sayılar ve basamak çözümleme. Soruları dikkatli okuduğunda ilkokul 4 işlem mantığıyla çözülebilecek kadar sadedir.
                                </p>
                            </div>
                            <div className="bg-teal-50 p-4 rounded-xl border-l-4 border-teal-500">
                                <h4 className="font-bold text-teal-950 text-sm">3. Üslü - Köklü Sayılar ve EBOB-EKOK (3-4 Soru)</h4>
                                <p className="text-xs text-teal-900 mt-1">
                                    Genelde cetvel, termometre veya tartı görseli verip &quot;x değeri hangi aralıktadır?&quot; şeklinde yaklaşık değer sorarlar. Standart kurallardır.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Fen: Eşit Ağırlıkçı ve Sözelciler İçin Bedava 6-8 Net
                        </h2>
                        <p>
                            Eşit Ağırlıkçı ve Sözelci arkadaşların yaptığı en büyük hata Fen testinin kapağını bile açmamaktır. Oysa 9. sınıf fen konuları, 4 işlem matematikten bile daha kolaydır:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm">
                            <li><strong>Biyoloji - Hücre Zarından Madde Geçişleri ve Canlıların Ortak Özellikleri (2 Soru):</strong> 3 sayfalık bir özet oku, çıkmış 5 yıllık soruları çöz, 2 net cebinde.</li>
                            <li><strong>Kimya - Periyodik Tablo ve Maddenin Fiziksel/Kimyasal Halleri (2 Soru):</strong> Metaller, ametaller ve kaynama-erime mantığı. Formülsüz, tamamen mantık.</li>
                            <li><strong>Fizik - Isı, Sıcaklık ve Madde-Özkütle (2 Soru):</strong> Günlük hayat mantığı. Isı bir enerji midir, sıcaklık termometreyle nasıl ölçülür? İşte hepsi bu.</li>
                        </ul>

                        <div className="bg-slate-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-8">
                            <h3 className="font-bold text-slate-900 mb-2">Peki Diğer Konulara Hiç mi Bakılmayacak?</h3>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                Hedefiniz ilk 10.000 ise elbette tüm müfredatı taramanız gerekir. Ancak amacınız önce 60-70 net barajına sağlam basmaksa, önceliğiniz kesinlikle bu kemik liste olmalıdır. Buradaki sorularda fire vermemeye başladıktan sonra kalan zamanınızı detay konulara ayırabilirsiniz.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Bu Konuları Bitirdiğinizde Kaç Net Gelir?</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                Garanti konuları tamamlayıp alacağınız tahmini 55-65 neti hesaplama motorumuza girin ve güncel katsayılarla sıralamanızı canlı görün.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Tahmini Sıralamanızı Görün →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Rehberler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-net-artirma-taktikleri" className="p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                                    <p className="font-semibold text-emerald-900">TYT Net Artırma Taktikleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">60-70 bandında sıkışanlar için plato kırma yöntemleri.</p>
                                </Link>
                                <Link href="/blog/tyt-matematik-konulari" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">TYT Matematik Konuları Rehberi →</p>
                                    <p className="text-xs text-gray-600 mt-1">40 sorunun konu konu dağılımı ve çalışma öncelikleri.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
