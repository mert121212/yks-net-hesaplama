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
    title: 'Üniversite Tercih Stratejileri 2027: 24 Tercih Listesi Hazırlama Rehberi',
    description: 'YKS tercih listesi nasıl hazırlanır? Puana değil başarı sırasına bakma kuralı, uydurma ölü tercih efsanesi, 24 tercihi dengeli dağıtma formülü ve kırık OBP tuzağı.',
    keywords: 'üniversite tercih stratejileri, yks tercih nasıl yapılır, ölü tercih nedir, tercih listesi hazırlama, yök atlas tercih rehberi 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/universite-tercih-stratejileri' },
    openGraph: {
        title: 'Üniversite Tercih Stratejileri 2027: 24 Tercih Listesi Rehberi',
        description: 'Derece yapıp açıkta kalmamak için: Tercih masası taktikleri, YÖK Atlas analizi ve sıralama aralıkları.',
        type: 'article',
        publishedTime: '2026-02-14',
        modifiedTime: '2026-10-29',
        url: 'https://yksnethesapla.com/blog/universite-tercih-stratejileri',
        images: [
            {
                url: '/images/blog/universite-tercih-stratejileri.jpg',
                width: 1200,
                height: 630,
                alt: 'Üniversite Tercih Stratejileri'
            }
        ],
    },
}

export default function UniversiteTercihStratejileri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <ReadingProgress />
                <BlogArticleSchema 
                    title="Üniversite Tercih Stratejileri 2027: 24 Tercih Listesi Hazırlama Rehberi" 
                    description="YKS tercih listesi nasıl hazırlanır? Sıralama aralıkları, ölü tercih kavramı, 24 tercih hakkının dağılımı ve kırık OBP uyarısı."
                    datePublished="2026-02-14"
                    dateModified="2026-10-29"
                    url="https://yksnethesapla.com/blog/universite-tercih-stratejileri"
                    keywords={['üniversite tercihleri', 'yks tercih nasıl yapılır', 'ölü tercih nedir', 'tercih listesi hazırlama', 'yök atlas tercih']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Tercih Stratejileri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Tercih Masası</span>
                            <time className="text-gray-600" dateTime="2026-02-14">14 Şubat 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Üniversite Tercih Stratejileri: 24 Tercihi Heba Etmeme Rehberi
                        </h1>
                        <p className="text-xl text-gray-600">
                            Sınavda 40 bin yapıp hatalı tercih listesi yüzünden açıkta kalanları da gördük, 90 bin yapıp akıllı tercihle geleceğin parlak bölümüne yerleşenleri de. Savaş sınav salonunda değil, tercih ekranında biter.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/universite-tercih-stratejileri.jpg"
                        alt="Üniversite Tercih Rehberi: 24 Tercih Listesi Nasıl Yapılır?"
                    />

                    <TableOfContents items={[
                        { id: 'en-buyuk-yanilgi', title: '1. Kural: Puana Değil, Sıralamaya Bakacaksın!' },
                        { id: 'olu-tercih-efsanesi', title: '2. Kural: Şehir Efsanesi Olan \'Ölü Tercih\' Gerçeği' },
                        { id: '24-tercih-dagilimi', title: '24 Tercih Dağılım Formülü (Altın Oran: 4-12-8)' },
                        { id: 'yok-atlas-analizi', title: 'YÖK Atlas\'ı Profesyonelce Kullanma Taktikleri' },
                        { id: 'kirik-obp-tehlikesi', title: 'Yazıp Gitmemenin Bedeli: Kırık OBP Felaketi' },
                        { id: 'sikca-sorulanlar', title: 'Sıkça Sorulan Sorular' },
                    ]} />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS sonuçları açıklandığında telefonlar susmaz. Adaylar aylarca döktükleri terin karşılığı olan puan belgesini ellerine aldıklarında ikinci bir şok dalgasıyla karşılaşırlar: <em>&ldquo;Hocam geçen sene 420 puan alan yer bu sene 450&apos;ye mi çıkar, benim 430 puanım var nereyi yazmalıyım?&rdquo;</em>
                        </p>

                        <p>
                            Bu soru, tercih döneminin en ölümcül hatasını içerir. Tercih sürecinde puan tamamen önemsiz bir referanstır; tek gerçek para birimi <strong>başarı sıralamasıdır</strong>.
                        </p>

                        <h2 id="en-buyuk-yanilgi" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Kural: Puana Değil, Sıralamaya Bakacaksın!
                        </h2>

                        <p>
                            Sınav kolay olduğunda 450 puan alan 80 bininci olabilir. Sınav çok zor olduğunda 400 puan alan aday ilk 25 bine girebilir. Üniversite bölümlerinin kontenjanları sabittir. Hacettepe Tıp Fakültesi her sene ilk 2.000 kişiyi alır; o 2.000&apos;inci kişinin kaç puan aldığı kontenjanı değiştirmez.
                        </p>

                        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg text-red-950 text-sm my-6">
                            <strong>Önemli Uyarı:</strong> Tercih kılavuzundaki taban puanları unutun. Listenizi hazırlarken yalnızca son 3 yılın başarı sıralaması trendini karşılaştıracaksınız.
                        </div>

                        <h2 id="olu-tercih-efsanesi" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. Kural: Şehir Efsanesi Olan &ldquo;Ölü Tercih&rdquo; Gerçeği
                        </h2>

                        <p>
                            Kulaktan kulağa yayılan en komik hurafe şudur: <em>&ldquo;Düşük sıralamalı bir yeri üst sıraya yazarsan, alt sıradaki yüksek bölüm yanar, buna ölü tercih denir.&rdquo;</em>
                        </p>

                        <p>
                            ÖSYM yerleştirme algoritması böyle çalışmaz! Algoritma aday bazlı çalışır:
                        </p>

                        <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
                            <li>ÖSYM sistemi Türkiye birincisinden başlar ve sırayla her adayın 24 tercihini yukarıdan aşağıya doğru tarar.</li>
                            <li>Senin 35 bin sıralaman varsa, 40 binlik bir adayın 1. sıraya yazdığı bölüme sen 20. sıraya yazsan bile sistem o kontenjanı <strong>önce sana verir</strong>; çünkü senin puanın ve sıran daha yüksektir.</li>
                            <li><strong>Gerçek Ölü Tercih Şudur:</strong> Gitmek istemediğin bir bölümü, çok istediğin bir bölümün üstüne yazıp kazandığında alttaki hayaline veda etmek zorunda kalmandır. Listenin sıralaması sadece ve sadece senin <strong>istek sıranı</strong> yansıtmalıdır.</li>
                        </ol>

                        <h2 id="24-tercih-dagilimi" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            24 Tercih Dağılım Formülü (Altın Oran: 4 - 12 - 8)
                        </h2>

                        <p>
                            ÖSYM adaylara tam 24 tercih hakkı sunar. Bu 24 tercihi tek bir dar aralığa yığmak büyük risktir. Örneğin <strong>50.000 sıralamaya</strong> sahip bir adayın listesini şöyle bölmesi gerekir:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-gray-100 text-gray-800">
                                    <tr>
                                        <th className="p-3 border">Tercih Sırası</th>
                                        <th className="p-3 border">Kategori</th>
                                        <th className="p-3 border">50k Sıralama İçin Örnek Aralık</th>
                                        <th className="p-3 border">Amaç</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">1 - 4. Tercih</td>
                                        <td className="p-3 text-purple-700 font-bold border">Hayal / Zirve Tercihler</td>
                                        <td className="p-3 border">30.000 - 45.000</td>
                                        <td className="p-3 border">Sürpriz kontenjan artışlarını yakalama şansı.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">5 - 16. Tercih</td>
                                        <td className="p-3 text-blue-700 font-bold border">Gerçekçi / Göbek Tercihler</td>
                                        <td className="p-3 border">45.000 - 62.000</td>
                                        <td className="p-3 border">Yerleşme ihtimalinin en yüksek olduğu asıl havuz.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">17 - 24. Tercih</td>
                                        <td className="p-3 text-emerald-700 font-bold border">Güvenli Liman / Garanti</td>
                                        <td className="p-3 border">63.000 - 85.000</td>
                                        <td className="p-3 border">Sıralama yığılmalarına karşı açıkta kalmayı önleyen kalkan.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="yok-atlas-analizi" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            YÖK Atlas&apos;ı Profesyonelce Kullanma Taktikleri
                        </h2>

                        <p>
                            YÖK Atlas sadece son giren kişinin sıralamasını görmek için kullanılmaz. Şu 3 göstergeye mutlaka bakmalısın:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                            <li><strong>Kontenjan Değişimi:</strong> Hedeflediğin bölümün kontenjanı geçen yıl 60 kişiyken bu yıl 40&apos;a düşürüldüyse, o bölümün sıralaması kesinlikle yukarı tırmanır (yani daha zorlaşır).</li>
                            <li><strong>Akreditasyon ve Öğretim Üyesi Sayısı:</strong> Mühendisliklerde MÜDEK, tıpta TEPDAD akreditasyonu olup olmadığına bak. Prof. ve Doç. kadrosu yetersiz olan yeni açılmış bölümlerde eğitim aksayabilir.</li>
                            <li><strong>Öğrencinin Geldiği Şehirler:</strong> O bölümü daha çok yerel öğrenciler mi tercih etmiş yoksa Türkiye geneli bir talep mi var? Bu da bölümün marka değerini gösterir.</li>
                        </ul>

                        <h2 id="kirik-obp-tehlikesi" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Yazıp Gitmemenin Bedeli: Kırık OBP Felaketi
                        </h2>

                        <p>
                            Adayların en büyük pişmanlığı: <em>&ldquo;Açıkta kalmayayım diye son sıraya istemediğim bir 2 yıllık veya 4 yıllık bölüm yazdım, kazandım ama kayıt yaptırmadım.&rdquo;</em>
                        </p>

                        <p>
                            ÖSYM kuralları gereği, bir yükseköğretim programına merkezi yerleştirmeyle yerleşen adayın (ister kayıt yaptırsın ister yaptırmasın) ertesi yıl OBP katkısı <strong>yarı yarıya düşürülür</strong> (0,12 katsayısı 0,06&apos;ya iner). Bu da ortalama 30-35 puanlık bir ceza demektir ve ertesi yıl ilk 50 bin hedefini imkansız hale getirir. Detaylar için <Link href="/blog/obp-hesaplama" className="text-blue-600 font-semibold hover:underline">OBP Hesaplama Rehberimizi</Link> inceleyebilirsin.
                        </p>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-2xl p-8 text-center my-10 shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">Hangi Puan Türü Hangi Bölümü Alır?</h3>
                            <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-sm md:text-base">
                                SAY, EA, SÖZ ve DİL puan türleriyle alım yapan popüler bölümleri ve baraj sıralamalarını incele.
                            </p>
                            <Link 
                                href="/blog/hangi-puan-turu-hangi-bolum" 
                                className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-xl shadow-md hover:bg-blue-50 transition transform hover:-translate-y-0.5"
                            >
                                Bölüm ve Puan Türü Rehberine Git →
                            </Link>
                        </div>

                        <h2 id="sikca-sorulanlar" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">24 tercihin tamamını doldurmak zorunlu mu?</h3>
                                <p className="text-sm text-gray-600">
                                    Hayır. İster 1 tercih yapın, ister 24 tercihi doldurun. Asıl önemli olan kural, kazanıp gitmek istemeyeceğiniz hiçbir bölümü sadece liste dolsun diye yazmamaktır.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Tıp, Diş veya Hukuk baraj sıralamasını aşamazsam ne olur?</h3>
                                <p className="text-sm text-gray-600">
                                    YÖK&apos;ün belirlediği başarı sırası barajını (örn. Tıp 50 bin, Diş 80 bin, Hukuk 125 bin) 1 kişiyle bile kaçırsanız, o bölümleri tercih listenize yazsanız dahi sistem tercih hakkı tanımaz veya geçersiz sayar.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Ek tercihlerde şansım daha mı yüksek olur?</h3>
                                <p className="text-sm text-gray-600">
                                    Hayır, tam tersine ek tercihlerde kurallar daha katıdır. Bir bölüme ek yerleştirmede başvurabilmek için, o bölümün ilk yerleştirmede oluşan taban puanına eşit veya üzerinde bir puana sahip olmanız şarttır.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#yksTercih</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#tercihStratejileri</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#yokAtlas</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <Link href="/blog" className="text-blue-600 hover:underline font-medium">← Blog Listesine Dön</Link>
                            <Link href="/blog/hangi-puan-turu-hangi-bolum" className="text-blue-600 hover:underline font-medium">Hangi Puan Türü Hangi Bölüm? →</Link>
                        </div>
                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
