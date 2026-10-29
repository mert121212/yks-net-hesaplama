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
        modifiedTime: '2026-10-29',
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
                    dateModified="2026-10-29"
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
                            <span className="text-gray-600">• 9 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            AYT Puan Hesaplama: 1 Net Kaç Puan Getirir, Masayı Nasıl Dağıtır?
                        </h1>
                        <p className="text-xl text-gray-600">
                            TYT&apos;den çıkıp &ldquo;Sınavım berbat geçti, mezuna kaldım&rdquo; diye karalar bağlayan öğrencilerin ertesi gün AYT&apos;de yazdığı geri dönüş hikâyelerini her sene görüyoruz. Çünkü sıralamanın asıl lokomotifi pazar günkü oturumdur.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/ayt-puan-hesaplama.jpg"
                        alt="AYT Puan Hesaplama: Test Katsayıları ve Ağırlıklar"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her yıl binlerce aday cumartesi günkü TYT sonrasında moral çöküntüsü yaşayıp pazar sabahı AYT&apos;ye sanki formalite icabı giriyormuş gibi isteksizce gidiyor. Bir YKS öğrencisinin yapabileceği en büyük hata budur.
                        </p>

                        <p>
                            4 yıllık bir lisans programına (Tıp, Hukuk, Mühendislik, Psikoloji, Öğretmenlik vb.) yerleşmek istiyorsan, cebindeki yerleştirme puanının <strong>tam %60&apos;ını pazar günkü AYT belirler.</strong> TYT&apos;nin katkısı yalnızca %40 ile sınırlıdır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Matematiksel Gerçek: 1 AYT Neti = 2,3 TYT Neti
                        </h2>
                        <p>
                            ÖSYM&apos;nin katsayı ve soru sayısı oranlarını yan yana koyduğunda ortaya çıkan tablo son derece nettir:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>TYT&apos;de 1 Net:</strong> Yaklaşık <strong>1,32 - 1,35 puan</strong> kazandırır.</li>
                            <li><strong>AYT&apos;de 1 Net:</strong> Tam olarak <strong>2,90 - 3,10 puan</strong> civarında getirir.</li>
                        </ul>
                        <p>
                            Bu ne anlama geliyor? Cumartesi günü TYT&apos;de rakibinden 10 net geriye mi düştün? Pazar günü AYT&apos;de fazladan çıkaracağın yalnızca 4-5 net, o farkı tamamen kapatıp seni rakibinin önüne geçirir! Bu yüzden AYT asla bırakılmaz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Puan Türlerine Göre AYT Test Katsayıları ve Ağırlıkları
                        </h2>

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
                                        <td className="p-3 font-semibold border">TYT Toplam Katkısı</td>
                                        <td className="p-3 border">120 Soru</td>
                                        <td className="p-3 border">%40</td>
                                        <td className="p-3 border">%40</td>
                                        <td className="p-3 border">%40</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">AYT Matematik</td>
                                        <td className="p-3 border">40 Soru</td>
                                        <td className="p-3 border font-bold text-blue-700">%30 (~3,0 Puan)</td>
                                        <td className="p-3 border font-bold text-emerald-700">%30 (~3,0 Puan)</td>
                                        <td className="p-3 border text-gray-400">-</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">AYT Fen Bilimleri (Fiz-Kim-Biyo)</td>
                                        <td className="p-3 border">40 Soru</td>
                                        <td className="p-3 border font-bold text-blue-700">%30 (~3,0 Puan)</td>
                                        <td className="p-3 border text-gray-400">-</td>
                                        <td className="p-3 border text-gray-400">-</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">AYT Edebiyat - Sosyal-1</td>
                                        <td className="p-3 border">40 Soru</td>
                                        <td className="p-3 border text-gray-400">-</td>
                                        <td className="p-3 border font-bold text-emerald-700">%30 (~3,0 Puan)</td>
                                        <td className="p-3 border font-bold text-purple-700">%30 (~3,0 Puan)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">AYT Sosyal-2 Testi</td>
                                        <td className="p-3 border">40 Soru</td>
                                        <td className="p-3 border text-gray-400">-</td>
                                        <td className="p-3 border text-gray-400">-</td>
                                        <td className="p-3 border font-bold text-purple-700">%30 (~3,0 Puan)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Peki Alanım Dışındaki Testi Çözsem Puanım Düşer mi?
                        </h2>
                        <p>
                            Sınav esnasında öğrencilerin en çok tereddüt ettiği soru: <em>&ldquo;Hocam ben Eşit Ağırlıkçıyım, sürem arttı; Sosyal-2&apos;yi veya Fen&apos;i de çözsem EA puanım düşer mi?&rdquo;</em>
                        </p>
                        <p>
                            <strong>Kesinlikle düşmez!</strong> AYT sınavında sana 160 soruluk tek bir kitapçık verilir. Kendi alanın dışındaki testleri çözmen asıl puan türünü zerre kadar etkilemez veya puanını kırmaz. Aksine; fazladan çözdüğün Sosyal-2 testi senin Sözel puanını da hesaplatır ve tercih döneminde eline ikinci bir alternatif puan türü verir.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">AYT Puanını ve Sıralamanı Simüle Et</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Testlerdeki netlerini gir; SAY, EA ve SÖZ puanlarını güncel ÖSYM katsayılarıyla anında hesaplayalım.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Puan Hesaplama Motoruna Git →
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            AYT Puanı Hakkında Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">Standart sapma her yıl puanları nasıl etkiler?</h3>
                                <p className="text-sm text-gray-700">
                                    Türkiye genelinde ortalaması düşük olan ve adayların zorlandığı testlerin (genellikle AYT Matematik ve Fizik) standart sapma değeri yükselir ve o testten çıkarılan 1 net, ortalaması yüksek testlere göre biraz daha fazla puan getirebilir.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">AYT baraj puanı kalktı mı?</h3>
                                <p className="text-sm text-gray-700">
                                    Evet, YÖK kararıyla TYT&apos;deki 150 ve AYT&apos;deki 180 puanlık genel baraj uygulaması kaldırılmıştır. Artık ilgili testten 0,5 net çıkaran her adayın puanı hesaplanır. Ancak Tıp, Hukuk, Mühendislik gibi bölümlerdeki başarı sırası barajları hâlâ geçerlidir.
                                </p>
                            </div>
                        </div>

                        <p className="mt-8">
                            Hangi puan türünün senin hayalindeki mesleğe kapı açtığını görmek için <Link href="/blog/yks-puan-turleri" className="text-blue-600 font-semibold hover:underline">YKS Puan Türleri Rehberi</Link>&apos;ne göz atabilir, AYT&apos;de en çok soru getiren konuları <Link href="/blog/ayt-matematik-konulari" className="text-blue-600 font-semibold hover:underline">AYT Matematik Konuları</Link> listemizden takip edebilirsin.
                        </p>

                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
