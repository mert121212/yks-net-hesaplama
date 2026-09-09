import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Puan Türleri (SAY, EA, SÖZ, DİL) ve Bölümleri 2027',
    description: 'YKS puan türleri rehberi: SAY, EA, SÖZ ve DİL alanlarının test ağırlıkları, TYT\'nin %40 etkisi ve hangi bölümün hangi puanla aldığına dair kapsamlı analiz.',
    keywords: 'yks puan türleri, say bölümleri, ea bölümleri, söz bölümleri, tyt ile alan bölümler, ayt puan türleri',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-puan-turleri' },
    openGraph: {
        title: 'YKS Puan Türleri: Hangi Sınav Hangi Kapıyı Açar?',
        description: 'SAY, EA, SÖZ ve DİL puan türlerinin şifreleri ve test ağırlık dağılımları.',
        type: 'article',
        publishedTime: '2026-02-06',
        modifiedTime: '2026-02-09',
        url: 'https://yksnethesapla.com/blog/yks-puan-turleri',
        images: [
            {
                url: '/og-image.jpg',
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
                <BlogArticleSchema 
                    title="YKS Puan Türleri (SAY, EA, SÖZ, DİL) ve Bölümleri 2027" 
                    description="YKS puan türleri rehberi: SAY, EA, SÖZ ve DİL alanlarının test ağırlıkları, TYT'nin %40 etkisi ve hangi bölümün hangi puanla aldığına dair kapsamlı analiz."
                    datePublished="2026-02-06"
                    dateModified="2026-02-09"
                    url="https://yksnethesapla.com/blog/yks-puan-turleri"
                    keywords={['yks puan türleri', 'say bölümleri', 'ea bölümleri', 'söz bölümleri', 'tyt ile alan bölümler', 'ayt puan türleri']}
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
                            <time className="text-gray-600" dateTime="2026-02-06">6 Şubat 2026</time>
                            <span className="text-gray-600">• 10 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT, SAY, EA, SÖZ: Hangi Sınav Hangi Fakültenin Kapısını Aralar?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Psikoloji hayali kurarken sınav anında Fizik çözmeye kalkanların düştüğü trajik yanılgı nedir? Puan türlerinin perde arkası, test katsayıları ve hedef bölüm eşleşmeleri.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Ağustos ayında tercih danışmanlığı yaparken asla unutamadığım bir anım var. Karşımda oturan kız öğrencim aylarca Hukuk Fakültesi hayaliyle yaşamıştı. Pazar günkü AYT sınavına girmiş, Edebiyat testini erkenden bitirip Matematikte birkaç zor soruyla boğuştuktan sonra &quot;Vaktim arttı, puanım yükselsin diye biraz da Fizik ve Biyoloji çözdüm&quot; dedi.
                        </p>

                        <p>
                            Sonuç belgesi geldiğinde Sayısal puanı epey iyi görünüyordu; ancak hedeflediği Eşit Ağırlık puanı Hukuk barajının birkaç puan gerisinde kalmıştı. Çünkü o pazar günü çözdüğü Fen sorularının Eşit Ağırlık puanına etkisi koskoca bir sıfırdı! 
                        </p>

                        <p>
                            Sınava hazırlanırken hangi testin hangi puanı beslediğini bilmemek, pusulasız okyanusa açılmaktan farksızdır. Gelin, ÖSYM&apos;nin bu karmaşık görünen haritasını berraklaştıralım.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Büyük Formül: %40 TYT + %60 AYT
                        </h2>
                        <p>
                            Eğer hedefiniz 4 yıllık bir lisans programıysa (Tıp, Mühendislik, Hukuk, İktisat, Öğretmenlik vb.), cumartesi günü girdiğiniz TYT tek başına sizi yerleştiremez. 
                        </p>
                        <p>
                            TYT, pazar günkü AYT puanınızın tabanına yüzde 40 oranında katılan bir ön hazırlıktır. Geriye kalan yüzde 60&apos;lık devasa pay ise pazar günü kendi alanınızda çözeceğiniz 80 soruluk uzmanlık testlerinden gelir. Yani cumartesi günü tökezleyen bir aday, pazar günkü AYT&apos;de göstereceği üstün performansla yarışı rahatlıkla lehine çevirebilir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Yalnızca TYT Puanı ile Nerelere Gidilir?
                        </h2>
                        <p>
                            Cumartesi günkü 120 soruluk sınavdan elde edilen TYT puanı, üniversitelerin 2 yıllık meslek yüksekokulu (ön lisans) programlarının kapısını açar. 
                        </p>
                        <p>
                            Bilgisayar Programcılığı, İlk ve Acil Yardım (Paramedik), Anestezi, Ağız ve Diş Sağlığı gibi hem istihdamı hızlı hem de DGS ile 4 yıllığa tamamlama imkanı olan gözde bölümler bu puanla öğrenci alır. Ayrıca Polis Meslek Yüksekokulları (PMYO) ve Beden Eğitimi (BESYO) veya Konservatuvar gibi özel yetenek sınavlarının ön eleme barajı da doğrudan TYT puanıyla belirlenir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            SAY (Sayısal): Rekabetin En Çetin Meydanı
                        </h2>
                        <p>
                            Sayısal alan, Türkiye&apos;de taban puanların ve sıralama yarışının en sert yaşandığı kulvardır. Pazar günü SAY puanınızın hesaplanması için iki test çözmeniz gerekir: 40 soruluk AYT Matematik (Geometri dahil) ve 40 soruluk AYT Fen Bilimleri (Fizik, Kimya, Biyoloji).
                        </p>
                        <p>
                            Tıp, Diş Hekimliği, Eczacılık, Bilgisayar ve Yazılım Mühendisliği, Mimarlık, Hemşirelik ve Temel Bilimler bu puan türüyle yarışır. Sayısalcıların pazar günü Edebiyat veya Tarih testlerine elini sürmesine kesinlikle gerek yoktur; o testlerin Sayısal puanına en küçük bir katkısı olmaz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            EA (Eşit Ağırlık): Matematik ile Sözelin Stratejik Dansı
                        </h2>
                        <p>
                            &quot;Matematiğim fena değil ama fen dersleriyle yıldızım barışmıyor&quot; diyenlerin ana buluşma noktasıdır. Pazar günü AYT Matematik (40 soru) ile Türk Dili ve Edebiyatı - Sosyal Bilimler-1 testini (40 soru) çözen adayların EA puanı hesaplanır.
                        </p>
                        <p>
                            Hukuk Fakülteleri, Psikoloji, Psikolojik Danışmanlık ve Rehberlik (PDR), İktisat, İşletme, Uluslararası İlişkiler ve Sınıf Öğretmenliği bu kulvarda yer alır. Son yılların en büyük parlayan yıldızı ise hem yazılım hem işletme dinamiklerini barındıran Yönetim Bilişim Sistemleri (YBS) bölümüdür. Eşit Ağırlıkta derece yapmak isteyen adayın gizli silahı, edebiyatı fullemeye yakın tutarken matematikte 25 netin üzerine tırmanabilmektir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            SÖZ (Sözel) ve DİL (Yabancı Dil) Kulvarları
                        </h2>
                        <p>
                            Sözel puan türünde yarışan adaylar pazar günü Edebiyat-Sosyal-1 testi ile Tarih-2, Coğrafya-2, Felsefe grubu ve Din Kültüründen oluşan Sosyal-2 testini çözer. Özel Eğitim Öğretmenliği, Türkçe Öğretmenliği, Gastronomi, Radyo-Televizyon ve Halkla İlişkiler bu havuzdadır. Sözelciler için en büyük avantaj, cumartesi günkü TYT&apos;de yapacakları 6-7 fazladan temel matematik netinin kendilerini on binlerce sözelcinin önüne fırlatmasıdır.
                        </p>
                        <p>
                            DİL puan türü ise pazar günü öğleden sonra gerçekleştirilen 80 soruluk YDT (Yabancı Dil Testi) ile hesaplanır. İngilizce Öğretmenliği, Mütercim-Tercümanlık ve Turizm Rehberliği gibi prestijli bölümler tamamen bu yabancı dil performansı üzerinden öğrenci kabul eder.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Hangi Puan Türünde Kaçıncısınız?</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                Deneme netlerinizi hesaplama motorumuza girin; SAY, EA ve SÖZ alanlarındaki ham ve yerleştirme puanlarınızı tek ekranda yan yana karşılaştırın.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Tüm Puan Türlerini Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Puan Türünüze Göre Seçilmiş Rehberler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/ayt-matematik-konulari" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">AYT Matematik Konuları ve Stratejisi →</p>
                                    <p className="text-xs text-gray-600 mt-1">SAY ve EA adaylarının kaderini belirleyen 40 sorunun şifreleri.</p>
                                </Link>
                                <Link href="/blog/yks-edebiyat-konulari" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">AYT Edebiyat Konuları ve Taktikleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">Eşit Ağırlık ve Sözel öğrencileri için yazar-eser mantığı.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
