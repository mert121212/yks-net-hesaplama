import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import ArticleFeedback from '@/components/ArticleFeedback'
import ReadingProgress from '@/components/ReadingProgress'
import LastUpdatedBadge from '@/components/LastUpdatedBadge'

export const metadata: Metadata = {
    title: 'AYT Puan Hesaplama 2027: SAY, EA ve SÖZ Katsayıları ve Net Değeri',
    description: 'AYT netlerinin gücü: 1 AYT neti neden 2,3 TYT netine bedel? Sayısal, Eşit Ağırlık ve Sözel katsayıları ile yerleştirme puanı mantığı.',
    keywords: 'ayt puan hesaplama, ayt katsayıları, say katsayıları, ea katsayıları, söz katsayıları, yks yerleştirme puanı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/ayt-puan-hesaplama' },
    openGraph: {
        title: 'AYT Puan Hesaplama 2027: Katsayılar ve Gerçek Ağırlıklar',
        description: 'TYT kötü geçti diye havlu atanlar bu hesabı bilmiyor: AYT puanının %60 ağırlığı nasıl hayat kurtarır?',
        type: 'article',
        publishedTime: '2026-02-27',
        modifiedTime: '2026-07-10',
        url: 'https://yksnethesapla.com/blog/ayt-puan-hesaplama',
        images: [
            {
                url: '/images/blog/ayt-puan-hesaplama.jpg',
                width: 1200,
                height: 630,
                alt: 'AYT Puan Hesaplama ve Katsayılar'
            }
        ],
    },
}

export default function AYTPuanHesaplama() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <ReadingProgress />
                <BlogArticleSchema 
                    title="AYT Puan Hesaplama 2027 | SAY, EA, SÖZ Katsayıları ve Ağırlıklar" 
                    description="AYT puan hesaplama yöntemi: SAY, EA ve SÖZ puan türlerinde test ağırlıkları, 1 AYT netinin puan değeri ve yerleştirmeye etkisi."
                    datePublished="2026-02-27"
                    dateModified="2026-07-10"
                    url="https://yksnethesapla.com/blog/ayt-puan-hesaplama"
                    keywords={['ayt puan hesaplama', 'ayt katsayıları', 'say katsayıları', 'ea katsayıları', 'söz katsayıları', 'yks yerleştirme puanı']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">AYT Puan Hesaplama</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Hesap Masası</span>
                            <time className="text-gray-600" dateTime="2026-02-27">27 Şubat 2026</time>
                            <span className="text-gray-600">• 7 dk okuma</span>
                            <LastUpdatedBadge date="2026-07-10" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            AYT Puan Hesaplama: 1 Net Kaç Puan Getirir, Masayı Nasıl Dağıtır?
                        </h1>
                        <p className="text-xl text-gray-600">
                            TYT&apos;den çıkıp &ldquo;Sınavım berbat geçti, mezuna kaldım&rdquo; diye ağlayan öğrencilerin ertesi gün AYT&apos;de yazdığı destanları her sene görüyoruz. Çünkü formülün kralı pazar günkü oturumda saklı.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/ayt-puan-hesaplama.jpg"
                        alt="AYT Puan Hesaplama: Test Katsayıları ve Ağırlıklar"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her yıl binlerce aday cumartesi günkü TYT sonrasında moral çöküntüsü yaşayıp pazar sabahı AYT&apos;ye sanki formalite icabı giriyormuş gibi gidiyor. Yapılabilecek en büyük intihar budur.
                        </p>

                        <p>
                            4 yıllık bir fakülteye (Tıp, Hukuk, Mühendislik, Psikoloji, Öğretmenlik) gitmek istiyorsan, cebindeki yerleştirme puanının <strong>tam %60&apos;ını pazar günkü AYT belirler.</strong> TYT&apos;nin payı sadece %40&apos;tır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Acı Gerçek: 1 AYT Neti = 2,3 TYT Neti
                        </h2>
                        <p>
                            ÖSYM&apos;nin soru ve katsayı matematiğini yan yana koyduğunda ortaya çıkan tablo çok çarpıcıdır:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>TYT&apos;de 1 Net:</strong> Yaklaşık <strong>1,32 - 1,35 puan</strong> kazandırır.</li>
                            <li><strong>AYT&apos;de 1 Net:</strong> Tamı tamına <strong>3,00 puan</strong> civarında getirir.</li>
                        </ul>
                        <p>
                            Bu ne anlama geliyor biliyor musun? Cumartesi günü TYT&apos;de rakibinden 10 net geriye mi düştün? Pazar günü AYT&apos;de fazladan 4-5 net yaptığın an rakibini ezip geçiyorsun demektir! O yüzden AYT hiçbir zaman bırakılmaz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Puan Türlerine Göre Masadaki Test Ağırlıkları
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-2">1. Sayısal (SAY) Puanı: 80 Soru</h3>
                                <p className="text-sm text-blue-900 mb-2">
                                    Sayısal öğrencisi 40 Matematik + 40 Fen (14 Fizik, 13 Kimya, 13 Biyoloji) çözer.
                                </p>
                                <ul className="text-sm text-blue-900 space-y-1 list-disc pl-5">
                                    <li><strong>AYT Matematik (40 Soru):</strong> Toplam puanın %30&apos;u (~3,00 puan/net)</li>
                                    <li><strong>AYT Fizik (14 Soru):</strong> Toplam puanın %10&apos;u (~2,85 puan/net)</li>
                                    <li><strong>AYT Kimya (13 Soru):</strong> Toplam puanın %10&apos;u (~3,05 puan/net)</li>
                                    <li><strong>AYT Biyoloji (13 Soru):</strong> Toplam puanın %10&apos;u (~3,00 puan/net)</li>
                                </ul>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-2">2. Eşit Ağırlık (EA) Puanı: 80 Soru</h3>
                                <p className="text-sm text-emerald-900 mb-2">
                                    Eşit Ağırlıkçı 40 Matematik + 40 Edebiyat-Sosyal-1 çözer.
                                </p>
                                <ul className="text-sm text-emerald-900 space-y-1 list-disc pl-5">
                                    <li><strong>AYT Matematik (40 Soru):</strong> Puanın %30&apos;u (~3,00 puan/net)</li>
                                    <li><strong>Edebiyat (24 Soru):</strong> Puanın %18&apos;i (~3,00 puan/net)</li>
                                    <li><strong>Tarih-1 (10 Soru):</strong> Puanın %7&apos;si (~2,80 puan/net)</li>
                                    <li><strong>Coğrafya-1 (6 Soru):</strong> Puanın %5&apos;i (~3,30 puan/net)</li>
                                </ul>
                            </div>

                            <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
                                <h3 className="font-bold text-purple-950 text-lg mb-2">3. Sözel (SÖZ) Puanı: 80 Soru</h3>
                                <p className="text-sm text-purple-900 mb-2">
                                    Sözel öğrencisi Edebiyat-Sosyal-1 (40) ve Sosyal-2 (40) testlerini çözer.
                                </p>
                                <ul className="text-sm text-purple-900 space-y-1 list-disc pl-5">
                                    <li><strong>Edebiyat-Sosyal-1 (40 Soru):</strong> Puanın %30&apos;u.</li>
                                    <li><strong>Sosyal-2 (40 Soru - Tarih-2, Coğrafya-2, Felsefe, Din):</strong> Puanın %30&apos;u.</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Peki Başka Testi Çözsem Puanım Düşer mi?
                        </h2>
                        <p>
                            Sınav anında en çok tereddüt edilen konu: <em>&ldquo;Hocam ben Eşit Ağırlıkçıyım, sürem arttı, Sosyal-2&apos;yi de çözsem EA puanım düşer mi?&rdquo;</em>
                        </p>
                        <p>
                            <strong>Asla düşmez.</strong> AYT&apos;de sana tek bir 160 soruluk dev kitapçık verilir. Kendi alanını bitirip fazladan çözdüğün hiçbir test senin asıl alan puanını zerre kadar aşağı çekmez. Aksine; fazladan çözdüğün Sosyal-2 testi senin Sözel puanını da hesaplatır, eline bedavadan ikinci bir tercih alternatifi geçer.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">AYT Puanını ve Sıralamanı Simüle Et</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Testlerdeki netlerini gir; SAY, EA ve SÖZ puanlarını ÖSYM katsayılarıyla anında hesaplayalım.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Hesaplama Motoruna Git →
                            </Link>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            AYT Katsayı ve Test Ağırlıkları Matrisi
                        </h2>
                        <p>
                            AYT puanı hesaplanırken sadece sınav anında yaptığınız netler değil, TYT'nin %40'lık temel katkısı da hesaplamaya doğrudan dahil edilir. Alanınıza göre testlerin net katkı katsayıları aşağıda özetlenmiştir:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-blue-50 text-blue-900 font-semibold">
                                    <tr>
                                        <th className="p-3 border">Test Adı</th>
                                        <th className="p-3 border">Soru Sayısı</th>
                                        <th className="p-3 border">SAY Ağırlığı</th>
                                        <th className="p-3 border">EA Ağırlığı</th>
                                        <th className="p-3 border">SÖZ Ağırlığı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">TYT Toplamı</td>
                                        <td className="p-3 border">120</td>
                                        <td className="p-3 border">%40</td>
                                        <td className="p-3 border">%40</td>
                                        <td className="p-3 border">%40</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">AYT Matematik</td>
                                        <td className="p-3 border">40</td>
                                        <td className="p-3 border">%30</td>
                                        <td className="p-3 border">%30</td>
                                        <td className="p-3 border">-</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">AYT Fizik - Kimya - Biyo</td>
                                        <td className="p-3 border">40</td>
                                        <td className="p-3 border">%30</td>
                                        <td className="p-3 border">-</td>
                                        <td className="p-3 border">-</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">AYT Edebiyat - Tarih-1 - Coğ-1</td>
                                        <td className="p-3 border">40</td>
                                        <td className="p-3 border">-</td>
                                        <td className="p-3 border">%30</td>
                                        <td className="p-3 border">%30</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">AYT Sosyal-2 Testi</td>
                                        <td className="p-3 border">40</td>
                                        <td className="p-3 border">-</td>
                                        <td className="p-3 border">-</td>
                                        <td className="p-3 border">%30</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Hangi puan türünün senin hedefine daha çok yaradığını merak ediyorsan <Link href="/blog/yks-puan-turleri" className="text-blue-600 font-semibold hover:underline">YKS Puan Türleri Rehberi</Link>&apos;ne mutlaka uğra. Lise diploma notunun net puanına katacağı değeri <Link href="/blog/obp-hesaplama" className="text-blue-600 font-semibold hover:underline">OBP Hesaplama Rehberi</Link> üzerinden kuruşu kuruşuna gör. AYT&apos;de en çok net kazandıran konuları da <Link href="/blog/ayt-matematik-konulari" className="text-blue-600 font-semibold hover:underline">AYT Matematik Konuları</Link> listemizden tek tek işaretle.
                        </p>

                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
