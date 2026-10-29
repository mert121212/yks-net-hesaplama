import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import ArticleFeedback from '@/components/ArticleFeedback'
import ReadingProgress from '@/components/ReadingProgress'
import LastUpdatedBadge from '@/components/LastUpdatedBadge'

export const metadata: Metadata = {
    title: 'YKS Net Hesaplama Nasıl Yapılır? 4 Yanlış 1 Doğru Kuralı ve Taktikler 2027',
    description: 'YKS net hesaplama formülü, 4 yanlışın 1 doğruyu silme mantığı, eksiye düşen netlerin durumu, sallamak mı boş bırakmak mı ikilemi ve katsayılar.',
    keywords: 'yks net hesaplama, tyt net hesaplama, 4 yanlış 1 doğruyu götürür mü, standart sapma yks, yks katsayılar 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir' },
    openGraph: {
        title: 'YKS Net Hesaplama Nasıl Yapılır? 4 Yanlış 1 Doğru Kuralı',
        description: 'ÖSYM net hesaplama formülü, eksi net durumu ve test katsayılarının puana yansıması.',
        type: 'article',
        publishedTime: '2026-05-28',
        modifiedTime: '2026-10-29',
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
                <ReadingProgress />
                <BlogArticleSchema 
                    title="YKS Net Hesaplama Nasıl Yapılır? 4 Yanlış 1 Doğru Kuralı" 
                    description="YKS net hesaplama formülü, 4 yanlışın bir doğruyu götürmesi mantığı, test bazlı net dağılımı ve standart sapmanın puana etkisi."
                    datePublished="2026-05-28"
                    dateModified="2026-10-29"
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
                            <time className="text-gray-600" dateTime="2026-05-28">28 Mayıs 2026</time>
                            <span className="text-gray-600">• 10 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS Net Hesaplama: 4 Yanlış Kuralı, Eksi Netler ve Sallama İkilemi
                        </h1>
                        <p className="text-xl text-gray-600">
                            Kağıt üzerinde basit bir çıkarma işlemi gibi görünse de optik formun başında her adayın aklını kurcalayan o soru: &ldquo;İki şık arasında kaldım, sallasam mı yoksa boş mu bıraksam?&rdquo; İşte işin matematiksel iç yüzü.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-net-hesaplama-nasil-yapilir.jpg"
                        alt="YKS Net Hesaplama: 4 Yanlış Kuralı ve Puan Mantığı"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Deneme biter bitmez cevap anahtarını önüne alıp doğru ve yanlışlarını saymaya başladığında hissettiğin o gerginliği hepimiz yaşadık. 32 doğru sayarsın, arkasından 8 yanlış gelince bir anda netin 30&apos;a çakılır. 
                        </p>

                        <p>
                            ÖSYM&apos;nin uyguladığı net hesaplama sistemi son derece basittir ancak stratejik açıdan ne zaman risk alıp ne zaman geri çekileceğini bilmeyen adaylar, sınav salonunda fazladan işaretledikleri 4-5 gereksiz soru yüzünden binlerce kişinin gerisine düşebilir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Dört Yanlış Bir Doğruyu Nasıl Siler?
                        </h2>
                        <p>
                            ÖSYM sınavlarında her yanlış cevap için adayın toplam doğru sayısından <strong>0,25 net</strong> kesilir. Dolayısıyla 4 yanlış birleştiğinde, büyük emekle çözdüğün 1 adet tam doğru sorunun puanı buharlaşır.
                        </p>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-4">
                            <p className="text-base text-blue-900 font-mono font-bold">
                                Ham Net = Doğru Sayısı − (Yanlış Sayısı ÷ 4)
                            </p>
                            <p className="text-sm text-blue-800 mt-2">
                                <strong>Somut Örnek:</strong> TYT Türkçe testinde 35 doğru, 6 yanlış yaptıysan: 6 ÷ 4 = 1,50 net kesintisi olur. Ham netin: 35 − 1,50 = <strong>33,50 Net</strong> olarak kayda geçer.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. Sallamak mı Mantıklı, Boş Bırakmak mı? (İhtimal Hesabı)
                        </h2>
                        <p>
                            Bu sorunun yanıtı kaç şık elediğine doğrudan bağlıdır:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-800">
                            <li><strong>Hiçbir fikrin yoksa (5 seçenek de duruyorsa):</strong> Asla işaretleme yapma! Doğru bilme ihtimalin %20, yanlış yapma ihtimalin %80&apos;dir. Bu kumar uzun vadede netlerini eritir.</li>
                            <li><strong>3 seçeneği kesin eleyip 2 seçenek arasında kaldıysan:</strong> İstatistiksel olarak işaretlemek mantıklıdır. Doğru çıkarsa +1,00 net alırsın, yanlış çıkarsa yalnızca -0,25 net kaybedersin. 4 soruda 2 doğru çıkarsan bile hanene net kâr yazılır.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. Bir Dersteki Yanlışlar Başka Dersi Etkiler mi?
                        </h2>
                        <p>
                            Öğrencilerin en büyük korkularından biri şudur: <em>&ldquo;Hocam Fen&apos;de çok yanlış yaptım, Türkçe netlerimden düşerler mi?&rdquo;</em>
                        </p>
                        <p>
                            <strong>Kesinlikle hayır.</strong> ÖSYM kılavuzuna göre her alt test kendi sınırları içinde değerlendirilir. Matematik testinde 2 doğru, 16 yanlış yaparsan netin: 2 − (16 ÷ 4) = <strong>−2,00 net</strong> olur. Ancak bu negatif puan sistem tarafından o test için 0 kabul edilir; asla Türkçe veya Sosyal&apos;deki netlerinden tek bir puan dahi eksiltmez.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. TYT ve AYT Test Katsayıları ve Net Değeri
                        </h2>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-slate-100 text-gray-800 font-semibold border-b">
                                    <tr>
                                        <th className="p-3 border">Test Adı</th>
                                        <th className="p-3 border text-center">Soru Sayısı</th>
                                        <th className="p-3 border text-center">1 Netin Puan Değeri</th>
                                        <th className="p-3 border">ÖSYM Değerlendirmesi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">TYT Türkçe</td>
                                        <td className="p-3 border text-center">40</td>
                                        <td className="p-3 border text-center font-bold text-blue-700">~1,32 Puan</td>
                                        <td className="p-3 border text-gray-600">Sınavın en yüksek toplam puan getiren testidir.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">TYT Temel Matematik</td>
                                        <td className="p-3 border text-center">40</td>
                                        <td className="p-3 border text-center font-bold text-blue-700">~1,34 Puan</td>
                                        <td className="p-3 border text-gray-600">Türkiye ortalaması (~7,9) düşük olduğu için sıralamada sıçratır.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">TYT Sosyal Bilimler</td>
                                        <td className="p-3 border text-center">20</td>
                                        <td className="p-3 border text-center font-bold text-blue-700">~1,36 Puan</td>
                                        <td className="p-3 border text-gray-600">Hızlı çözülüp kolay net toplanan alandır.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">TYT Fen Bilimleri</td>
                                        <td className="p-3 border text-center">20</td>
                                        <td className="p-3 border text-center font-bold text-blue-700">~1,37 Puan</td>
                                        <td className="p-3 border text-gray-600">Sayısalcı olmayanların fark yarattığı gizli silahtır.</td>
                                    </tr>
                                    <tr className="border-b bg-purple-50">
                                        <td className="p-3 font-bold text-purple-950 border">AYT Alan Testleri (Tümü)</td>
                                        <td className="p-3 border text-center font-bold text-purple-900">80</td>
                                        <td className="p-3 border text-center font-black text-red-600">~3,00 Puan</td>
                                        <td className="p-3 border text-purple-950 font-medium">1 AYT neti tam 2,3 TYT netine bedeldir!</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Netlerini Elle Hesaplama, Canlı Simüle Et</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Doğru ve yanlışlarını girerek 4 yanlış 1 doğru kuralına göre netlerini ve güncel ÖSYM katsayılarıyla Türkiye sıralamanı hemen öğren.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Net ve Sıralama Hesaplama Aracını Aç →
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Net Hesaplama Hakkında Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">0,5 net şartı nasıl işler?</h3>
                                <p className="text-sm text-gray-700">
                                    TYT puanınızın hesaplanabilmesi için Türkçe veya Matematik testinden en az 0,5 ham net çıkarmanız zorunludur. İkisi de 0 veya eksi ise puanınız hesaplanmaz.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">Boş bırakılan sorular neti düşürür mü?</h3>
                                <p className="text-sm text-gray-700">
                                    Hayır, boş bırakılan soruların net hesabına hiçbir olumsuz etkisi yoktur. Ne net ekler ne de net siler.
                                </p>
                            </div>
                        </div>

                        <p className="mt-8">
                            Netlerini artırma taktikleri için <Link href="/blog/tyt-net-artirma-taktikleri" className="text-blue-600 font-semibold hover:underline">TYT Net Artırma Rehberi</Link>&apos;ne göz atabilir, 1 netin sıralamada kaç kişiyi geride bıraktığını görmek için <Link href="/blog/yks-1-net-kac-kisi-atar" className="text-blue-600 font-semibold hover:underline">1 Net Kaç Kişi Atar?</Link> analizimizi okuyabilirsin.
                        </p>

                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
