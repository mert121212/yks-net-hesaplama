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
    title: 'TYT Net Artırma Taktikleri: 60-70 Platosundan 85+ Nete Çıkış',
    description: 'TYT netlerin aylardır 60-70 bandında çakılıp kaldı mı? Platonun gerçek sebepleri, branş denemesi taktiği, 4 adımlı deneme analizi ve net sıçratma rehberi.',
    keywords: 'tyt net artırma, tyt deneme analizi, tyt netleri nasıl artar, tyt 70 net platosu, tyt branş denemesi',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-net-artirma-taktikleri' },
    openGraph: {
        title: 'TYT Net Artırma Taktikleri: 60-70 Platosundan 85+ Nete Çıkış',
        description: 'Aylardır aynı netlerde sayıklayanlara gerçekçi çıkış planı. Analiz cetveli, branş denemesi ve net bandı stratejileri.',
        type: 'article',
        publishedTime: '2026-03-14',
        modifiedTime: '2026-10-29',
        url: 'https://yksnethesapla.com/blog/tyt-net-artirma-taktikleri',
        images: [
            {
                url: '/images/blog/tyt-net-artirma-taktikleri.jpg',
                width: 1200,
                height: 630,
                alt: 'TYT Net Artırma Taktikleri'
            }
        ],
    },
}

export default function TYTNetArtirma() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <ReadingProgress />
                <BlogArticleSchema 
                    title="TYT Net Artırma Taktikleri: 60-70 Platosundan 85+ Nete Çıkış" 
                    description="TYT netlerin aylardır 60-70 bandında çakılıp kaldı mı? Platonun gerçek sebepleri, branş denemesi taktiği, 4 adımlı deneme analizi ve net sıçratma rehberi."
                    datePublished="2026-03-14"
                    dateModified="2026-10-29"
                    url="https://yksnethesapla.com/blog/tyt-net-artirma-taktikleri"
                    keywords={['tyt net artırma', 'tyt deneme analizi', 'tyt netleri nasıl artar', 'tyt 70 net platosu', 'tyt branş denemesi']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Net Artırma</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Saha Taktikleri</span>
                            <time className="text-gray-600" dateTime="2026-03-14">14 Mart 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT Net Artırma Yolları: 60-70 Bandındaki O Kör Düğümü Çözmek
                        </h1>
                        <p className="text-xl text-gray-600">
                            Haftalardır her denemeden sonra sonuç belgesinde 63, 65, bazen 61 görüp moralin mi bozuluyor? Sakin ol; bu bir kapasite problemi değil, tüm Türkiye&apos;nin yaşadığı meşhur &ldquo;TYT platosu&rdquo; tıkanmasıdır.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/tyt-net-artirma-taktikleri.jpg"
                        alt="TYT Net Artırma Taktikleri: 60-70 Bandından Çıkış Rehberi"
                    />

                    <TableOfContents items={[
                        { id: 'plato-nedir', title: '60-70 Platosu Neden Oluşur?' },
                        { id: 'net-bantlari', title: 'Net Bandına Göre Doğru Teşhis ve Tedavi' },
                        { id: 'deneme-analizi', title: '4 Kategorili Deneme Analiz Cetveli' },
                        { id: 'brans-denemesi', title: 'Genel Deneme Değil, Branş Denemesi Devrimi' },
                        { id: 'turlama-ve-sure', title: 'Süre Yetiştirememe Krizini Çözmek' },
                        { id: 'sikca-sorulanlar', title: 'Sıkça Sorulan Sorular' },
                    ]} />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS hazırlığında koçluk masalarında en sık karşılaştığımız yakınma şudur: <em>&ldquo;Hocam deli gibi konu çalışıyorum, masada saatlerimi harcıyorum ama denemeye girince netim 1 puan bile oynamıyor. Sanki görünmez bir duvara çarptım.&rdquo;</em>
                        </p>

                        <p>
                            Bu duvar gerçektir ve adına eğitim psikolojisinde <strong>öğrenme platosu</strong> denir. Sıfırdan 60 nete çıkmak görece kolaydır; çünkü temel konuları öğrendikçe boş bıraktığın sorular hemen doğruya dönüşür. Ancak 65&apos;ten 85&apos;e çıkmak artık konu bilmekle değil; <strong>süre yönetimi, strateji ve soru seçme refleksleriyle</strong> ilgilidir.
                        </p>

                        <h2 id="plato-nedir" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            60-70 Platosu Neden Oluşur?
                        </h2>

                        <p>
                            Öğrenciler netleri artmayınca &ldquo;demek ki konuyu tam anlamadım&rdquo; deyip tekrar sıfırdan video izlemeye başlarlar. Bu yapılabilecek en büyük hatadır. Platonun gerçek sebepleri şunlardır:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Konu Fazlalığı Değil Hız Eksikliği:</strong> Soruları çözebiliyorsun ama bir soruya 3,5 dakika harcıyorsun. Sınav bittiğinde arkada göremediğin 20 tane kolay soru kalıyor.</li>
                            <li><strong>Yalancı Deneme Analizi:</strong> Deneme bittikten sonra sadece doğru ve yanlış sayısını sayıp kitapçığı çekmeceye atmak.</li>
                            <li><strong>Zor Sorularla İnatlaşmak:</strong> İlk turda çözemediği bir geometri sorusuyla 6 dakika savaşıp psikolojik enerjisini tüketmek.</li>
                        </ul>

                        <h2 id="net-bantlari" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Net Bandına Göre Doğru Teşhis ve Tedavi
                        </h2>

                        <p>
                            Her net bandının ilacı farklıdır. Kendi net aralığına uygun olmayan yöntemi uygularsan yerinde saymaya devam edersin:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
                                <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">40 - 60 Net Arası</span>
                                <h3 className="font-bold text-amber-950 text-base mt-2 mb-1">Teşhis: Temel Konu Delikleri</h3>
                                <p className="text-sm text-amber-900">
                                    Henüz genel deneme çözme evresinde değilsin. Haftada en fazla 1 genel deneme çöz. Eforunun %80&apos;ini <Link href="/blog/tyt-kesin-cikan-konular" className="text-amber-950 font-bold underline">banko konulara</Link>, günlük 20 paragraf ve 15 problem rutinine ayır.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                                <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">60 - 75 Net Arası (Plato Bölgesi)</span>
                                <h3 className="font-bold text-blue-950 text-base mt-2 mb-1">Teşhis: Branş Hızı ve Taktik Tıkanması</h3>
                                <p className="text-sm text-blue-900">
                                    Konuların %85&apos;i tamam. Artık kalın konu kitaplarını rafa kaldır. Haftada 2 Türkçe, 2 Matematik ve 2 Fen branş denemesi çöz. Süre kısıtlaması koyarak hızını artır.
                                </p>
                            </div>

                            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200">
                                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">75 - 90+ Net Arası</span>
                                <h3 className="font-bold text-emerald-950 text-base mt-2 mb-1">Teşhis: İnce İşçilik ve Kör Noktalar</h3>
                                <p className="text-sm text-emerald-900">
                                    Netleri bu aşamada artıran şey marjinal konulardır: Geometride çember ve analitik, fizikte optik kırılma kuralları, sosyalde harita detayları. Denemeleri 165 dakika değil, 150 dakikada bitirme antrenmanı yap.
                                </p>
                            </div>
                        </div>

                        <h2 id="deneme-analizi" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4 Kategorili Deneme Analiz Cetveli
                        </h2>

                        <p>
                            Deneme bittiğinde yanlış yaptığın ve boş bıraktığın her soruyu şu 4 kutudan birine yazmak zorundasın:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-gray-100 text-gray-800">
                                    <tr>
                                        <th className="p-3 border">Kategori</th>
                                        <th className="p-3 border">Hatanın Nedeni</th>
                                        <th className="p-3 border">Uygulanacak Eylem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold text-red-600 border">1. Bilgi Eksikliği</td>
                                        <td className="p-3 border">Konunun formülünü veya kuralını hatırlamıyorsun.</td>
                                        <td className="p-3 border">O konunun özet defterini aç, kuralı yaz ve 10 pekiştirme sorusu çöz.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold text-amber-600 border">2. Dikkat & İşlem Hatası</td>
                                        <td className="p-3 border">Soru kökündeki &ldquo;değildir&rdquo;i görmedin veya <code className="bg-gray-200 px-1 rounded">-3x</code> yerine <code className="bg-gray-200 px-1 rounded">+3x</code> yazdın.</td>
                                        <td className="p-3 border">İşlemleri kağıda daha düzenli yaz; sorunun altını sadece anahtar kelimelerde çiz.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold text-blue-600 border">3. Süre Baskısı</td>
                                        <td className="p-3 border">Normalde evde çözebileceğin soruyu sınavda süre bittiği için yetiştiremedin.</td>
                                        <td className="p-3 border">Turlama taktiğini devreye sok; 1. turda sadece 1 dakikada çözülecekleri yap.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold text-purple-600 border">4. İki Şık Arasında Kalma</td>
                                        <td className="p-3 border">B ve D şıkları arasında kaldın ve yanlış olanı işaretledin.</td>
                                        <td className="p-3 border">Soruya kendi ön kabullerini katmayı bırak, doğrudan metnin söylediğine sadık kal.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="brans-denemesi" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Genel Deneme Değil, Branş Denemesi Devrimi
                        </h2>

                        <p>
                            Genel denemede 165 dakika boyunca 4 farklı derse konsantre olmak zihni çok yorar. Haftada 3-4 genel deneme çözen bir öğrenci tükenmişlik yaşar. Bunun yerine <strong>branş denemeleri</strong> çözmelisin.
                        </p>

                        <p>
                            Örneğin salı günü 40 soruluk bir Türkçe branş denemesi aç ve 45 dakika kronometre kur. Çarşamba günü 40 soruluk bir Matematik branş denemesi açıp 65 dakika süre ver. Branş bazında nerede tıkandığını görmek genel denemeye göre 3 kat daha nettir.
                        </p>

                        <h2 id="turlama-ve-sure" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Süre Yetiştirememe Krizini Çözmek
                        </h2>

                        <p>
                            TYT&apos;de net artıramamanın %50 sebebi sürenin yetmemesidir. Soruları sırayla 1&apos;den 120&apos;ye kadar inatla çözmeye çalışmak intihardır.
                        </p>

                        <p>
                            Çözüm <Link href="/blog/tyt-sure-yetistirme-turlama-taktigi" className="text-blue-600 font-semibold hover:underline">Turlama Taktiği</Link> sistemindedir. Bir soruya baktın, 30 saniye içinde yol haritası belirmedi mi? Yanına hemen bir soru işareti koy ve o soruyu atla. 120 sorunun tamamını tarayıp ilk turda kolay olan 60-70 soruyu cebe koyduktan sonra 2. tura dönmek, hem zihni rahatlatır hem de süreyi ikiye katlar.
                        </p>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-8 text-center my-10 shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">Netlerini Test Et, Sıralamanı Gör</h3>
                            <p className="text-emerald-100 max-w-2xl mx-auto mb-6 text-sm md:text-base">
                                Güncel netlerini gir, TYT ve AYT puanlarını anında gör ve hedefinle arasındaki mesafeyi ölç.
                            </p>
                            <Link 
                                href="/tyt-net-hesaplama" 
                                className="inline-block bg-white text-teal-800 font-bold px-8 py-3 rounded-xl shadow-md hover:bg-emerald-50 transition transform hover:-translate-y-0.5"
                            >
                                Net Hesaplama Aracına Git →
                            </Link>
                        </div>

                        <h2 id="sikca-sorulanlar" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Haftada kaç TYT denemesi çözülmeli?</h3>
                                <p className="text-sm text-gray-600">
                                    Konuları henüz bitmemiş bir öğrenci için haftada 1 genel deneme yeterlidir. Konuları büyük ölçüde bitmiş (70+ net bandındaki) bir öğrenci ise haftada 1 veya 2 genel deneme, yanına 3-4 adet branş denemesi eklemelidir.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Deneme netlerim bir denemede 75 diğerinde 62 geliyor, normal mi?</h3>
                                <p className="text-sm text-gray-600">
                                    Evet, çok normaldir. Yayınların zorluk seviyeleri, soru kalıpları ve o anki uyku-odaklanma durumun 8-12 netlik dalgalanmalara yol açabilir. Tek bir denemeye değil, son 5 denemenin aritmetik ortalamasına bakmalısın.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">TYT netleri kaç ayda sıçrama yapar?</h3>
                                <p className="text-sm text-gray-600">
                                    Analiz cetvelini ve branş denemesi disiplinini düzenli uygulayan bir adayda ortalama 3-4 hafta içinde plato kırılır ve 8-12 netlik kalıcı bir sıçrama görülür.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#tytNetArtirma</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#denemeAnalizi</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#bransDenemesi</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <Link href="/blog" className="text-blue-600 hover:underline font-medium">← Blog Listesine Dön</Link>
                            <Link href="/blog/tyt-sure-yetistirme-turlama-taktigi" className="text-blue-600 hover:underline font-medium">Turlama Taktiği →</Link>
                        </div>
                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
