import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import ArticleFeedback from '@/components/ArticleFeedback'
import ReadingProgress from '@/components/ReadingProgress'
import LastUpdatedBadge from '@/components/LastUpdatedBadge'
import TableOfContents from '@/components/TableOfContents'

export const metadata: Metadata = {
    title: 'TYT\'de En Çok Çıkan Konular 2027: Banko Soru Dağılımı ve Net Rehberi',
    description: 'ÖSYM\'nin her yıl istisnasız sorduğu garantili TYT konuları: Türkçe, Matematik, Fen ve Sosyal testlerinde en az 70 net getiren banko başlıklar ve çalışma stratejisi.',
    keywords: 'tyt kesin çıkan konular, tyt en çok çıkan konular, tyt banko konular, tyt soru dağılımı 2027, tyt matematik çıkan konular',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-kesin-cikan-konular' },
    openGraph: {
        title: 'TYT\'de En Çok Çıkan Konular: Banko 70+ Net Getiren Konular',
        description: 'ÖSYM son 7 yılın sınav analizi: Macera aramadan ilk 70 neti cebe koyabileceğin banko soru başlıkları.',
        type: 'article',
        publishedTime: '2026-03-28',
        modifiedTime: '2026-10-29',
        url: 'https://yksnethesapla.com/blog/tyt-kesin-cikan-konular',
        images: [
            {
                url: '/images/blog/tyt-kesin-cikan-konular.jpg',
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
                <ReadingProgress />
                <BlogArticleSchema 
                    title="TYT'de En Çok Çıkan Konular 2027: Banko Soru Dağılımı ve Net Rehberi" 
                    description="ÖSYM'nin her yıl istisnasız sorduğu garantili TYT konuları: Türkçe, Matematik, Fen ve Sosyal testlerinde en az 70 net getiren banko başlıklar ve çalışma stratejisi."
                    datePublished="2026-03-28"
                    dateModified="2026-10-29"
                    url="https://yksnethesapla.com/blog/tyt-kesin-cikan-konular"
                    keywords={['tyt kesin çıkan konular', 'tyt en çok çıkan konular', 'tyt banko konular', 'tyt soru dağılımı 2027', 'tyt matematik çıkan konular']}
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
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Strateji & Analiz</span>
                            <time className="text-gray-600" dateTime="2026-03-28">28 Mart 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT&apos;de Her Yıl İstisnasız Çıkan Banko Konular (120 Sorunun Şifresi)
                        </h1>
                        <p className="text-xl text-gray-600">
                            Bütün müfredatı aynı iştahla ezberlemeye çalışmak en büyük zaman kaybıdır. ÖSYM&apos;nin son 7 yıllık soru havuzuna baktığında görüyorsun ki 120 sorunun en az 75&apos;i her sene aynı kapıdan çıkar.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/tyt-kesin-cikan-konular.jpg"
                        alt="TYT&apos;de Her Yıl En Çok Soru Gelen Banko Konular"
                    />

                    <TableOfContents items={[
                        { id: 'pareto-kurali', title: 'TYT\'de Pareto Kuralı: %20 Konu ile %70 Net' },
                        { id: 'turkce-banko', title: '1. TYT Türkçe: 30+ Netin Garantili Başlıkları' },
                        { id: 'matematik-banko', title: '2. TYT Matematik ve Geometri: 20 Banko Soru' },
                        { id: 'fen-banko', title: '3. TYT Fen (Fizik, Kimya, Biyoloji): Bedava 15 Net' },
                        { id: 'sosyal-banko', title: '4. TYT Sosyal: Harita ve Temel Kavramlar' },
                        { id: 'calisma-stratejisi', title: 'Banko Konuları Çalışırken Yapılan Hatalar' },
                        { id: 'sikca-sorulanlar', title: 'Sıkça Sorulan Sorular' },
                    ]} />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Masanın üstünde 10 farklı kalın konu anlatım kitabı, binlerce sayfa formül... İnsanın baktıkça gözü korkuyor. Ama sana çok somut bir saha gerçeği söyleyeyim: <strong>ÖSYM soru komisyonu her yıl sıfırdan fantezi soru üretmez.</strong>
                        </p>

                        <p>
                            Soru yazarları belirli kazanımları ölçmek zorundadır. Örneğin biyolojide kalıtım soy ağacı sormadan, coğrafyada dünya veya Türkiye haritası vermeden, Türkçede düşünceyi geliştirme yollarına değinmeden geçen tek bir YKS yılı yoktur. Zamanın kısıtlıysa veya netlerini hızla 65-75 aralığına çekmek istiyorsan, önceliği bu garanti kalelere vermelisin.
                        </p>

                        <h2 id="pareto-kurali" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT&apos;de Pareto Kuralı: %20 Konu ile %70 Net
                        </h2>

                        <p>
                            Pareto ilkesi der ki; sonuçların %80&apos;i eylemlerin %20&apos;sinden kaynaklanır. TYT sınavında da durum farksızdır. Müfredattaki yaklaşık 90 alt konunun sadece 20-25 tanesi sınavın %65&apos;ini oluşturur. Kalan 65 konu ise birer veya ikişer yıllık aralıklarla ya gelir ya gelmez.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg text-blue-950 text-sm my-6">
                            <strong>Altın Kural:</strong> &ldquo;Acaba bu sene mantık çıkar mı, karmaşık sayı gelir mi?&rdquo; diye günlerini harcamak yerine; kesin çıkacağını bildiğin paragraf, problemler, periyodik sistem ve kalıtımı bitir. Önce kaleyi sağlama al, sonra surların dışındaki detaylara bak.
                        </div>

                        <h2 id="turkce-banko" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. TYT Türkçe: 30+ Netin Garantili Başlıkları (40 Soru)
                        </h2>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead className="bg-gray-100 text-gray-800 text-sm">
                                    <tr>
                                        <th className="p-3 border">Konu Başlığı</th>
                                        <th className="p-3 border">Soru Sayısı</th>
                                        <th className="p-3 border">Sınavdaki Rolü</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Paragrafta Ana Düşünce & Yardımcı Düşünceler</td>
                                        <td className="p-3 border">22 - 26 Soru</td>
                                        <td className="p-3 text-emerald-600 font-medium border">Sınavın omurgası, günlük rutin şart</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Sözcükte ve Cümlede Anlam</td>
                                        <td className="p-3 border">6 - 8 Soru</td>
                                        <td className="p-3 text-emerald-600 font-medium border">İlk 8 sorunun garanti puan kaynağı</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Yazım Kuralları ve Noktalama İşaretleri</td>
                                        <td className="p-3 border">4 Soru</td>
                                        <td className="p-3 text-blue-600 font-medium border">2 günde cebe koyulabilen 4 net</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Cümlenin Ögeleri & Sözcük Türleri</td>
                                        <td className="p-3 border">2 - 3 Soru</td>
                                        <td className="p-3 text-gray-600 border">ÖSYM&apos;nin her yıl sorduğu klasik dil bilgisi</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Türkçede 30 neti geçmek isteyen bir adayın her sabah aksatmadan 20-25 paragraf çözmesi gerekir. Detaylı teknikler için <Link href="/blog/tyt-turkce-paragraf-teknikleri" className="text-blue-600 font-semibold hover:underline">TYT Türkçe Paragraf Çözme Teknikleri</Link> yazımıza göz atabilirsin.
                        </p>

                        <h2 id="matematik-banko" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. TYT Matematik ve Geometri: 20 Banko Soru (40 Soru)
                        </h2>

                        <p>
                            TYT Matematikte formül ezberinden ziyade temel denklem kurma refleksi ölçülür:
                        </p>

                        <div className="space-y-3 my-4">
                            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                                <h3 className="font-bold text-emerald-950 text-base">Problemler (11 - 13 Soru) — Kesin Banko!</h3>
                                <p className="text-sm text-emerald-900 mt-1">
                                    Sayı-kesir, yaş, yüzde-kâr-zarar, hareket ve grafik problemleri testin üçte biridir. Ayrı bir ders gibi her gün 15 soru çözülmeden sınavda hız kazanmak imkansızdır.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                                <h3 className="font-bold text-blue-950 text-base">Temel Sayılar & Basamak Kavramı (3 - 5 Soru)</h3>
                                <p className="text-sm text-blue-900 mt-1">
                                    Tek-çift sayı yorumları, asal sayılar ve basamak çözümleme soruları sınavın ilk 7 sorusunda mutlaka karşına çıkar.
                                </p>
                            </div>

                            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                                <h3 className="font-bold text-purple-950 text-base">Rasyonel, Üslü ve Köklü Sayılar (4 - 5 Soru)</h3>
                                <p className="text-sm text-purple-900 mt-1">
                                    Yeni nesil günlük hayat kurgularıyla sarılmış rasyonel sayı ve mutlak değer soruları her yıl 4 net getirir.
                                </p>
                            </div>

                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                                <h3 className="font-bold text-amber-950 text-base">Geometride: Üçgenler ve Katı Cisimler (5 Soru)</h3>
                                <p className="text-sm text-amber-900 mt-1">
                                    Özel üçgenler (3-4-5, 30-60-90), üçgende alan ve prizmaların hacim formülü (katı cisim) her sınavda en az 4-5 soru garantiler.
                                </p>
                            </div>
                        </div>

                        <p>
                            Sıfırdan başlayanlar için konu sırası tavsiyemiz <Link href="/blog/sifirdan-tyt-matematik-calisma-rehberi" className="text-blue-600 font-semibold hover:underline">Sıfırdan TYT Matematik Rehberi</Link> içeriğimizde detaylandırılmıştır.
                        </p>

                        <h2 id="fen-banko" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. TYT Fen (Fizik, Kimya, Biyoloji): Bedava 15 Net (20 Soru)
                        </h2>

                        <p>
                            Eşit ağırlık ve sözelcilerin &ldquo;ben fen yapamam&rdquo; diyerek terk ettiği bu 20 soru, aslında sınavın en çabuk öğrenilen netleridir:
                        </p>

                        <div className="grid md:grid-cols-3 gap-4 my-6">
                            <div className="border border-sky-200 bg-sky-50/50 p-4 rounded-xl">
                                <h4 className="font-bold text-sky-950 mb-2">Fizik (7 Soru)</h4>
                                <ul className="text-xs text-sky-900 space-y-1.5">
                                    <li>• <strong>Isı ve Sıcaklık:</strong> 1 soru (İç enerji, genleşme)</li>
                                    <li>• <strong>Optik:</strong> 1-2 soru (Aynalar, kırılma)</li>
                                    <li>• <strong>Madde ve Özellikleri:</strong> 1 soru (Özkütle, adezyon)</li>
                                    <li>• <strong>Hareket ve Kuvvet:</strong> 1 soru (Hız-zaman grafiği)</li>
                                </ul>
                            </div>

                            <div className="border border-teal-200 bg-teal-50/50 p-4 rounded-xl">
                                <h4 className="font-bold text-teal-950 mb-2">Kimya (7 Soru)</h4>
                                <ul className="text-xs text-teal-900 space-y-1.5">
                                    <li>• <strong>Kimya Bilimi & Periyodik Sistem:</strong> 2 soru</li>
                                    <li>• <strong>Kimyasal Türler Arası Etkileşim:</strong> 1 soru (Güçlü/zayıf bağ)</li>
                                    <li>• <strong>Maddenin Halleri:</strong> 1 soru (Viskozite, buhar basıncı)</li>
                                    <li>• <strong>Asitler, Bazlar ve Tuzlar:</strong> 1 soru</li>
                                </ul>
                            </div>

                            <div className="border border-emerald-200 bg-emerald-50/50 p-4 rounded-xl">
                                <h4 className="font-bold text-emerald-950 mb-2">Biyoloji (6 Soru)</h4>
                                <ul className="text-xs text-emerald-900 space-y-1.5">
                                    <li>• <strong>Kalıtım:</strong> 1 soru (Soy ağacı - BANKO!)</li>
                                    <li>• <strong>Hücre ve Organelleri:</strong> 1 soru</li>
                                    <li>• <strong>Canlıların Temel Bileşenleri:</strong> 1 soru (Lipit, protein)</li>
                                    <li>• <strong>Ekosistem Ekolojisi:</strong> 1 soru (Besin piramidi)</li>
                                </ul>
                            </div>
                        </div>

                        <h2 id="sosyal-banko" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. TYT Sosyal: Harita ve Temel Kavramlar (20 Soru)
                        </h2>

                        <p>
                            Sayısalcıların çoğu sosyal testini son 15 güne bırakır. Oysa günde 20 dakikalık odaklanmayla 16-17 nete ulaşmak çok kolaydır:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                            <li><strong>Coğrafya (5 Soru):</strong> Dünya ve Türkiye dilsiz haritası üzerinde çöl, deprem kuşağı ve yoğun nüfuslu yerleri bilmek doğrudan 2 net kazandırır. İklim tipleri ve rüzgarlar her sene 1 soru getirir.</li>
                            <li><strong>Tarih (5 Soru):</strong> İlk Türk devletlerindeki teşkilatlanma (ikili teşkilat, kut inancı) ve Kurtuluş Savaşı genelgeler/kongreler her yıl sorulur. Bilgi değil, paragraf yorumudur.</li>
                            <li><strong>Felsefe & Din (10 Soru):</strong> Felsefe akımlarının anahtar kelimeleri (Epistemoloji: bilgi, Ontoloji: varlık, Rasyonalizm: akılcılık vb.) ile Din Kültüründe ibadet ve ahlak kavramları 10 sorunun 8&apos;ini çözer.</li>
                        </ul>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-2xl p-8 text-center my-10 shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">Bu Banko Netlerle Kaç Puan Alırsın?</h3>
                            <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-sm md:text-base">
                                Türkçe 30, Matematik 20, Sosyal 15, Fen 12 net yaptığında toplam 77 netle kaç puan alacağını anında simüle et.
                            </p>
                            <Link 
                                href="/tyt-net-hesaplama" 
                                className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-xl shadow-md hover:bg-blue-50 transition transform hover:-translate-y-0.5"
                            >
                                TYT Netini Simüle Et →
                            </Link>
                        </div>

                        <h2 id="calisma-stratejisi" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Banko Konuları Çalışırken Yapılan Hatalar
                        </h2>

                        <p>
                            Bir konunun banko olduğunu bilmek yetmez, onu doğru çalışmak gerekir. Öğrencilerin yaptığı en büyük hata, bildiği banko konulardan binlerce soru çözüp kendini tatmin ederken, az bildiği diğer banko konuyu ertelemektir.
                        </p>

                        <p>
                            Örneğin; problem çözmeyi seviyorsan günde 40 problem çözüp optik ve kalıtımı sıfır bırakmak mantıksızdır. Kalıtımdan gelecek 1 net ile problemden gelecek 1 netin TYT puan katkısı neredeyse eşittir. Eforunu dengeli dağıtmalısın.
                        </p>

                        <h2 id="sikca-sorulanlar" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Sadece banko konuları çalışarak 70 net yapılır mı?</h3>
                                <p className="text-sm text-gray-600">
                                    Evet. Türkçe (30 net), Matematik temel+problemler (18 net), Sosyal (15 net) ve Fen temel (10 net) toplandığında 73 nete rahatlıkla ulaşılır. Bu taban oluşturulduktan sonra kalan konularla 85-90+ netlere çıkılır.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">ÖSYM her yıl soru dağılımını değiştirir mi?</h3>
                                <p className="text-sm text-gray-600">
                                    Büyük oranda hayır. MEB müfredatı ve ÖSYM kazanımları bellidir. Paragraf, problemler, periyodik sistem, kalıtım ve harita bilgisi gibi başlıklar son 10 yıldır hiç sekmeden her sınavda yer almıştır.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Banko konuları ne kadar sürede bitirebilirim?</h3>
                                <p className="text-sm text-gray-600">
                                    Planlı bir çalışma temposuyla günde 4-5 saat ayıran bir öğrenci, tüm derslerin banko konularını 6 ila 8 hafta arasında tamamlayıp branş denemelerine geçebilir.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#tytKonulari</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#bankoKonular</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#yks2027</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <Link href="/blog" className="text-blue-600 hover:underline font-medium">← Blog Listesine Dön</Link>
                            <Link href="/blog/tyt-net-artirma-taktikleri" className="text-blue-600 hover:underline font-medium">TYT Net Artırma Taktikleri →</Link>
                        </div>
                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
