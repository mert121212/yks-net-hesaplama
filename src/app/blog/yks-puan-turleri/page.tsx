import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import ArticleFeedback from '@/components/ArticleFeedback'
import ReadingProgress from '@/components/ReadingProgress'
import LastUpdatedBadge from '@/components/LastUpdatedBadge'

export const metadata: Metadata = {
    title: 'YKS Puan Türleri (SAY, EA, SÖZ, DİL) ve Bölümleri 2027: Baraj Tehlikesi',
    description: 'Hangi test hangi bölümü kazandırır? SAY, EA, SÖZ katsayıları, TYT\'nin %40 etkisi ve 50.001 olsan bile Tıp yazdırtmayan YÖK barajları.',
    keywords: 'yks puan türleri, say bölümleri, ea bölümleri, söz bölümleri, tyt ile alan bölümler, ayt puan türleri, yks barajları',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-puan-turleri' },
    openGraph: {
        title: 'YKS Puan Türleri: Hangi Test Hangi Bölümü Etkiler?',
        description: 'SAY, EA, SÖZ ve DİL puan türleri, test ağırlıkları ve resmi sıralama barajları.',
        type: 'article',
        publishedTime: '2026-01-15',
        modifiedTime: '2026-10-29',
        url: 'https://yksnethesapla.com/blog/yks-puan-turleri',
        images: [
            {
                url: '/images/blog/yks-puan-turleri.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Puan Türleri Rehberi'
            }
        ],
    },
}

export default function YKSPuanTurleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <ReadingProgress />
                <BlogArticleSchema 
                    title="YKS Puan Türleri (SAY, EA, SÖZ, DİL) ve Bölümleri 2027" 
                    description="SAY, EA, SÖZ ve DİL puan türlerinde testlerin ağırlıkları, TYT'nin %40 katkısı, puan türlerine göre bölümler ve başarı sırası barajları."
                    datePublished="2026-01-15"
                    dateModified="2026-10-29"
                    url="https://yksnethesapla.com/blog/yks-puan-turleri"
                    keywords={['yks puan türleri', 'say bölümleri', 'ea bölümleri', 'söz bölümleri', 'tyt ile alan bölümler', 'ayt puan türleri', 'yks barajları']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Puan Türleri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-01-15">15 Ocak 2026</time>
                            <span className="text-gray-600">• 11 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS Puan Türleri: Hangi Test Seni Hangi Mesleğe Götürür?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Masada saatlerce soru çözüyorsun ama çözdüğün test hedeflediğin bölüme etki ediyor mu? SAY, EA, SÖZ ve DİL arasındaki farkları, TYT&apos;nin kritik %40 payını ve gözden kaçan YÖK barajlarını tek tek masaya yatırıyoruz.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-puan-turleri.jpg"
                        alt="YKS Puan Türleri: Hangi Test Hangi Bölüm İçin Çözülür?"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her sene tercih döneminde rehberlik masalarında aynı sahneyi yaşarız: Öğrenci Yönetim Bilişim Sistemleri (YBS) okumak istiyordur; aylarca deli gibi Fizik ve Kimya çözüp Sayısal kasmıştır. Tercih listesini açtığında yüzü kireç gibi olur: <em>&ldquo;Hocam YBS Eşit Ağırlıkla mı alıyormuş?&rdquo;</em> Evet, Eşit Ağırlıkla alıyor. Ve o çözülen yüzlerce fen sorusu, EA sıralamasına zerre kadar katkı sağlamadı.
                        </p>

                        <p>
                            Bu hataya düşmemek için daha ilk günden hangi puan türünün hangi testlerle hesaplandığını kafana kazımalısın. Temel formül hiç değişmez: Lisans (4 yıllık) programları için <strong>TYT %40, AYT ise %60 ağırlığa sahiptir.</strong> Şimdi bu 4 puan türünü detaylarıyla inceleyelim.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Sayısal (SAY): Mühendislik, Sağlık ve Temel Bilimler
                        </h2>
                        <p>
                            Sayısal puanı; TYT sınavının tamamı ile AYT&apos;deki Matematik ve Fen Bilimleri testlerinden gelir. TYT&apos;deki Türkçe ve Sosyal netlerin de sayısal puanını yükseltir. Adayların en çok yanıldığı nokta budur: &ldquo;Ben sayısalcıyım, tarihe bakmama gerek yok&rdquo; diyen bir öğrenci, TYT Sosyal&apos;deki o kolay 12-13 neti çöpe atarak binlerce kişinin gerisine düşer.
                        </p>

                        <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl my-4">
                            <h3 className="font-bold text-blue-950 text-lg mb-2">Sayısal Ağırlık Dağılımı:</h3>
                            <ul className="text-sm text-blue-900 space-y-1.5 list-disc pl-5">
                                <li><strong>TYT (%40 Toplam):</strong> Türkçe (%13), Temel Matematik (%13), Fen (%7), Sosyal (%7)</li>
                                <li><strong>AYT Matematik (%30):</strong> 40 soru (İçinde 9-10 Geometri sorusu dahil)</li>
                                <li><strong>AYT Fen Bilimleri (%30):</strong> 14 Fizik, 13 Kimya, 13 Biyoloji</li>
                            </ul>
                            <p className="text-xs text-blue-800 mt-3 pt-2 border-t border-blue-200">
                                <strong>Popüler Sayısal Bölümleri:</strong> Tıp, Diş Hekimliği, Eczacılık, Bilgisayar Mühendisliği, Yazılım Mühendisliği, Elektrik-Elektronik, Makine, Endüstri Mühendisliği, Mimarlık, Hemşirelik, Moleküler Biyoloji ve Genetik, Fizyoterapi.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. Eşit Ağırlık (EA): Hukuk, Yönetim ve İnsan Odaklı Kariyerler
                        </h2>
                        <p>
                            Eşit Ağırlık puan türünde sıralamayı sırtlayan iki temel lokomotif vardır: <strong>AYT Matematik</strong> ve <strong>Edebiyat-Sosyal-1</strong> testi. Sayısalcıların büyük kısmı AYT&apos;de edebiyata elini sürmez, sözelcilerin çoğu da matematikten uzak durur. İşte bu yüzden EA alanında Matematikte 20-25 netin üzerine çıkan bir öğrenci adeta roket hızıyla ilk 10 bine tırmanır.
                        </p>

                        <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl my-4">
                            <h3 className="font-bold text-emerald-950 text-lg mb-2">Eşit Ağırlık Dağılımı:</h3>
                            <ul className="text-sm text-emerald-900 space-y-1.5 list-disc pl-5">
                                <li><strong>TYT (%40 Toplam):</strong> Tüm dersler yine genel ağırlıklarına göre puan getirir.</li>
                                <li><strong>AYT Matematik (%30):</strong> 40 soru (Sayısalcılarla aynı matematik kitapçığı çözülür).</li>
                                <li><strong>AYT Edebiyat - Sosyal-1 (%30):</strong> 24 Edebiyat, 10 Tarih-1, 6 Coğrafya-1.</li>
                            </ul>
                            <p className="text-xs text-emerald-800 mt-3 pt-2 border-t border-emerald-200">
                                <strong>Popüler EA Bölümleri:</strong> Hukuk, Psikoloji, Yönetim Bilişim Sistemleri (YBS), Rehberlik ve Psikolojik Danışmanlık (PDR), İktisat, İşletme, Uluslararası İlişkiler, Siyaset Bilimi, Sınıf Öğretmenliği.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. Sözel (SÖZ): Medya, Sanat, Eğitim ve Toplum Bilimleri
                        </h2>
                        <p>
                            Sözelciler için AYT maratonu iki ayrı 40 soruluk testten ibarettir: Edebiyat-Sosyal-1 ve Sosyal-2. Matematik korkusu olan öğrencilerin sığınağı gibi görünse de sözelde derece yapmak inanılmaz bir ezber ve okuma disiplini ister. Çünkü rakiplerin de edebiyatı ve tarihi iyi yapar; farkı genellikle TYT Matematik&apos;ten çıkaracağın 5-10 net belirler.
                        </p>

                        <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl my-4">
                            <h3 className="font-bold text-purple-950 text-lg mb-2">Sözel Dağılımı:</h3>
                            <ul className="text-sm text-purple-900 space-y-1.5 list-disc pl-5">
                                <li><strong>TYT (%40 Toplam):</strong> Türkçe ve Sosyal başta olmak üzere 120 sorunun tamamı.</li>
                                <li><strong>AYT Edebiyat-Sosyal-1 (%30):</strong> 24 Edebiyat, 10 Tarih-1, 6 Coğrafya-1.</li>
                                <li><strong>AYT Sosyal-2 (%30):</strong> 11 Tarih-2, 11 Coğrafya-2, 12 Felsefe Grubu (Mantık, Psikoloji, Sosyoloji), 6 Din Kültürü.</li>
                            </ul>
                            <p className="text-xs text-purple-800 mt-3 pt-2 border-t border-purple-200">
                                <strong>Popüler Sözel Bölümleri:</strong> Özel Eğitim Öğretmenliği, Türkçe Öğretmenliği, Okul Öncesi Öğretmenliği, Gastronomi ve Mutfak Sanatları, İlahiyat, Radyo Televizyon ve Sinema, Halkla İlişkiler, Tarih, Coğrafya.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. Yabancı Dil (DİL): Tercümanlık, Öğretmenlik ve Filoloji
                        </h2>
                        <p>
                            Dil puanı hesaplanırken pazar öğleden sonra oturumuna (YDT) girilir. Burada 80 adet gramer, çeviri, paragraf ve diyalog sorusu çözülür. YDT&apos;nin puan ağırlığı %60&apos;tır; ancak dilcilerin sıralamasını asıl belirleyen ve birbirinden ayıran sınav cumartesi günkü TYT&apos;dir. YDT&apos;de 75+ net yapan iki adaydan TYT&apos;de 70 net yapan öğrenci ilk 1.000&apos;e girerken, TYT&apos;de 45 nette kalan öğrenci 8.000&apos;lere gerileyebilir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            YÖK&apos;ün Acımasız Sıralama Barajları: Paran Olsa Bile Tercih Edemezsin!
                        </h2>
                        <p>
                            Burası YKS&apos;nin en katı kuralıdır. Vakıf (özel) üniversitelerinde %100 ücretli okumak istesen, yıllık yüz binlerce lira ödemeye hazır olsan dahi, eğer YÖK&apos;ün belirlediği resmi başarı sırası barajının bir kişi bile gerisindeysen, ÖSYM tercih sistemi o bölümü yazmana izin vermez.
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-slate-100 text-gray-800">
                                    <tr>
                                        <th className="p-3 border">Program</th>
                                        <th className="p-3 border">Puan Türü</th>
                                        <th className="p-3 border font-bold text-red-700">Resmi Başarı Sırası Barajı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Tıp Fakültesi</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-bold text-red-600">İlk 50.000 (50.001 olursan tercih ekranı kapanır)</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Diş Hekimliği</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-bold text-red-600">İlk 80.000</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Eczacılık</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-bold text-red-600">İlk 100.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Hukuk</td>
                                        <td className="p-3 border">EA</td>
                                        <td className="p-3 border font-bold text-red-600">İlk 125.000</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Mimarlık</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-bold text-red-600">İlk 250.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Mühendislik Programları</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-bold text-red-600">İlk 300.000 (Ziraat ve Orman hariç)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Öğretmenlik Programları</td>
                                        <td className="p-3 border">İlgili Puan</td>
                                        <td className="p-3 border font-bold text-red-600">İlk 300.000 (PDR dahil)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Netlerin Barajı Aşıyor mu? Anında Test Et</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Deneme netlerini girerek Sayısal, Eşit Ağırlık veya Sözel puanını hesaplayabilir, baraj sıralamasını geçip geçmediğini güncel ÖSYM katsayılarıyla görebilirsin.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                YKS Puan ve Baraj Simülatörünü Aç →
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Puan Türleri Hakkında Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">AYT&apos;de hem Matematik hem Sosyal çözersem iki puanım da hesaplanır mı?</h3>
                                <p className="text-sm text-gray-700">
                                    Evet. AYT&apos;de süren 180 dakikadır. Kitapçıkta yer alan tüm testler önündedir. Matematik ve Fen çözersen Sayısal puanın; Matematik ve Edebiyat-Sosyal-1 çözersen Eşit Ağırlık puanın ayrı ayrı hesaplanır. Bir test diğer puan türünü düşürmez.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">0,5 Net Kuralı Nedir?</h3>
                                <p className="text-sm text-gray-700">
                                    Bir puan türünün hesaplanabilmesi için ilgili testlerin en az birinden 0,5 net çıkarman gerekir. Örneğin TYT puanının hesaplanması için Temel Matematik veya Türkçe testinden en az 0,5 netin olmalıdır. AYT Sayısal için de Matematik veya Fen testinden en az 0,5 net yapman şarttır.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">TYT puanı ile hangi bölümler tercih edilir?</h3>
                                <p className="text-sm text-gray-700">
                                    TYT puanıyla yalnızca 2 yıllık ön lisans programları (Anestezi, İlk ve Acil Yardım, Bilgisayar Programcılığı, Adalet vb.) ve özel yetenek sınavıyla öğrenci alan bölümler tercih edilebilir. 4 yıllık lisans programları için mutlaka AYT veya YDT puanı gerekir.
                                </p>
                            </div>
                        </div>

                        <p className="mt-8">
                            Çalışma planını netleştirmek için <Link href="/blog/ayt-matematik-konulari" className="text-blue-600 font-semibold hover:underline">AYT Matematik Konuları</Link> ve <Link href="/blog/tyt-matematik-konulari" className="text-blue-600 font-semibold hover:underline">TYT Matematik Konuları</Link> rehberlerimizi inceleyebilirsin. Ayrıca diploma notunun puanına yapacağı net katkıyı görmek için <Link href="/blog/obp-hesaplama" className="text-blue-600 font-semibold hover:underline">OBP Hesaplama Rehberi</Link>&apos;ne göz atabilirsin.
                        </p>

                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
