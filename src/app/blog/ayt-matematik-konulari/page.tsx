import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'AYT Matematik Konuları ve Soru Dağılımı 2027 | Detaylı Rehber',
    description: 'AYT Matematik konuları, LTİ (Limit, Türev, İntegral), Trigonometri soru dağılımı ve SAY/EA puan türüne etkisi. 2027 güncel analiz.',
    keywords: 'ayt matematik konuları, ayt matematik soru dağılımı, lti nasıl çalışılır, trigonometri, ayt matematik 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/ayt-matematik-konulari' },
    openGraph: {
        title: 'AYT Matematik Konuları ve Soru Dağılımı 2027',
        description: 'AYT Matematik sınavına nasıl hazırlanılır? Tüm konular, soru sayıları ve çalışma önerileri.',
        type: 'article',
        publishedTime: '2026-02-18',
        modifiedTime: '2026-02-21',
        url: 'https://yksnethesapla.com/blog/ayt-matematik-konulari',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'AYT Matematik Konuları ve Stratejisi'
            }
        ],
    },
}

export default function AYTMatematikKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="AYT Matematik Konuları ve Soru Dağılımı 2027 | Detaylı Rehber" 
                    description="AYT Matematik konuları, LTİ (Limit, Türev, İntegral), Trigonometri soru dağılımı ve SAY/EA puan türüne etkisi. 2027 güncel analiz."
                    datePublished="2026-02-18"
                    dateModified="2026-02-21"
                    url="https://yksnethesapla.com/blog/ayt-matematik-konulari"
                    keywords={['ayt matematik konuları', 'ayt matematik soru dağılımı', 'lti nasıl çalışılır', 'trigonometri', 'ayt matematik 2027']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">AYT Matematik</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AYT</span>
                            <time className="text-gray-600" dateTime="2026-02-18">18 Şubat 2026</time>
                            <span className="text-gray-600">• 10 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            AYT Matematik: LTİ ve Trigonometriyi Çözen Sınavı Kazanır
                        </h1>
                        <p className="text-xl text-gray-600">
                            SAY ve EA&apos;da ilk 50 bine girmek isteyen herkesin aşmak zorunda olduğu asıl eşik burasıdır. 40 sorunun konu anatomisi ve Limit-Türev-İntegral çalışma sırası.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            TYT denemesinde 90 neti görüp pazar günkü AYT denemesinde 15 nette takılı kalan bir adayın yaşadığı kafa karışıklığı çok doğaldır.
                        </p>
                        <p>
                            Çünkü iki sınavın ölçtüğü şey birbirinden tamamen farklı.
                        </p>
                        <p>
                            TYT bir hız ve dikkat sınavıdır; soru başına ortalama 1 dakikanız vardır. AYT ise sabır ve derinlik sınavıdır. 180 dakikalık süreniz vardır; acele etmeniz gerekmez. Ama karşınıza çıkan soru, formül ezberinden ziyade konunun mantığını ne kadar içselleştirdiğinizi tartar.
                        </p>
                        <p>
                            Eğer AYT Matematikte 25 netin üzerine çıkmak istiyorsanız, önünüzdeki 40 sorunun mantıksal dağılımını çok iyi bilmelisiniz:
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            40 Sorunun Konu Anatomisi
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-900 text-lg mb-1">1. Temel Omurga: Fonksiyonlar ve Polinomlar (İlk 6-8 Soru)</h3>
                                <p className="text-sm text-blue-800 leading-relaxed">
                                    Fonksiyonlar, Polinomlar, 2. Derece Denklemler ve Parabol. Burası binanın temelidir. Fonksiyon grafiğini okuyamayan, tepe noktasını yorumlayamayan bir öğrencinin türevin geometrik yorumunu çözmesi imkansızdır. Bu gruptaki soruları kayıpsız geçmek zorundasınız.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-900 text-lg mb-1">2. Cepteki Puanlar: Logaritma ve Diziler (4-5 Soru)</h3>
                                <p className="text-sm text-emerald-800 leading-relaxed">
                                    AYT&apos;nin kuralları en net, sürprizi en az olan bölgesidir. Logaritmanın temel özelliklerini ve aritmetik/geometrik dizi formüllerini sindirmiş bir aday, bu 4-5 soruyu fire vermeden cebe koyar. Buradan soru kaçırmak sınav masasında puan hediye etmektir.
                                </p>
                            </div>

                            <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
                                <h3 className="font-bold text-purple-900 text-lg mb-1">3. Kader Belirleyen Blok: Trigonometri ve LTİ (14-16 Soru)</h3>
                                <p className="text-sm text-purple-800 leading-relaxed">
                                    4-5 soru Trigonometri, 2-3 soru Limit, 4-5 soru Türev ve 4 soru İntegral. Sınavın üçte birinden fazlası tek başına bu dörtlüden gelir. Dereceye oynayan öğrenciyle ortalama sırada kalan adayı ayıran yer tam burasıdır.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-900 text-lg mb-1">4. Geometri ve Analitik (10 Soru)</h3>
                                <p className="text-sm text-amber-800 leading-relaxed">
                                    Noktanın ve doğrunun analitiği, çember analitiği ve katı cisimler. Çoğu öğrenci cebirle boğuşmaktan geometriye bakmaz bile. Oysa analitik geometri formülünü oturtan öğrenci burada çok rahat net toplar.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Limit, Türev, İntegral Bloğuna Hangi Sırayla Çalışmalı?
                        </h2>
                        <p>
                            Öğrencilerin yaptığı en büyük hata, fonksiyon ve trigonometri temeli zayıfken hemen gidip bir Türev fasikülü çözmeye çalışmaktır.
                        </p>
                        <p>
                            Böyle yaparsanız 3 gün sonra tıkanırsınız. Türev dediğiniz şey aslında bir fonksiyonun anlık değişim hızı, yani teğetinin eğimidir. Eğim ise doğrudan analitik geometridir.
                        </p>
                        <p>
                            Sıralamayı asla bozmayın:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Önce Fonksiyon grafikleri ve Trigonometriyi sağlamlaştırın.</li>
                            <li>Ardından Limit ve Süreklilik konusunu bitirin.</li>
                            <li>Limit zihninizde oturduğunda Türev son derece mantıklı gelmeye başlar.</li>
                            <li>Türevi tam kavradığınızda ise İntegral, onun ters işlemi olarak kendiliğinden oturur.</li>
                        </ol>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Ne Zaman Branş Denemesine Geçilmeli?
                        </h2>
                        <p>
                            AYT Matematik tek bir kaynaktan soru çözerek bitmez. Konuyu öğrendikten sonra en az iki farklı zorluk seviyesindeki kitaptan tarama yapmalısınız.
                        </p>
                        <p>
                            Bahar aylarına gelindiğinde konu eksiklerinizin en az %80&apos;i tamamlanmış olmalıdır. Ardından haftada 2 adet 40 soruluk AYT Matematik branş denemesi çözmeye başlamalısınız. Denemede hangi konuda tökezlediğinizi görüp sadece o konunun fasikülünden 30-40 soru çözmek, netinizi 15&apos;lerden 30&apos;un üzerine çıkaracak en garantili yöntemdir.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">AYT Netlerinizin Sıralama Karşılığını Görün</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                Matematik ve Fen veya Edebiyat netlerinizi hesaplayıcımıza girerek, AYT&apos;deki her bir fazladan netin sizi Türkiye genelinde kaç bin basamak yukarı fırlatacağını anında test edin.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                AYT Sıralama Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Diğer Matematik ve Puan Rehberleri</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-matematik-konulari" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">TYT Matematik Konuları ve Taktikleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">Temel kavramlardan problem stratejilerine hızlanma yöntemleri.</p>
                                </Link>
                                <Link href="/blog/ayt-puan-hesaplama" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">AYT Puan Hesaplama Rehberi →</p>
                                    <p className="text-xs text-gray-600 mt-1">SAY ve EA puan hesaplamasında testlerin getirdiği katsayılar.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
