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
                            <span className="text-gray-600">• 14 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            AYT Matematik: LTİ ve Trigonometriyi Çözen Sınavın Hakimi Olur
                        </h1>
                        <p className="text-xl text-gray-600">
                            SAY ve EA ilk 40 bine oynamak isteyen herkesin geçmek zorunda olduğu o devasa kale kapısı. AYT Matematikte 25 netin altında kalanların neden rüya fakültelere giremediğini ve 40 sorunun mantığını konuşalım.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Kütüphane masasında önüne açtığı belirli integral sorusuna 20 dakikadır boş gözlerle bakan bir öğrencinin çaresizliğini çok iyi bilirim. TYT denemesinde 95 neti görmüş, Türkçeyi su gibi içmiş, temel matematikte problem tanımıyor; fakat pazar günkü AYT kitapçığını açtığında 15 nette tıkanıp kalıyor.
                        </p>

                        <p>
                            Bu hayal kırıklığının temelinde tek bir yanılgı yatar: Öğrenci, AYT&apos;yi TYT&apos;nin biraz daha uzun sorularından ibaret sanır.
                        </p>

                        <p>
                            Halbuki iki sınav birbirinden geceyle gündüz kadar farklıdır. TYT bir sprint koşusudur; soru başına yaklaşık 80 saniyeniz vardır ve hızınızı tartarlar. AYT ise bir derin dalış müsabakasıdır. Soru başına neredeyse 4,5 dakikanız vardır. Süre baskısı hissetmezsiniz ama karşınıza çıkan soru sizden formül ezberi değil, saf matematiksel olgunluk ve soyut düşünebilme kabiliyeti talep eder.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            40 Soruluk Kalenin Katmanları
                        </h2>
                        <p>
                            AYT Matematik kitapçığı rastgele serpiştirilmiş sorulardan oluşmaz; adım adım inşa edilmiş mantıksal bir piramittir:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-900 text-lg mb-1">1. Katman: Temel Omurga (İlk 6 - 8 Soru)</h3>
                                <p className="text-sm text-blue-800 leading-relaxed">
                                    Fonksiyonlar, Polinomlar, 2. Derece Denklemler ve Karmaşık Sayılar. Burası piramidin temelidir. Bir öğrenci fonksiyon grafiğini okuyamıyor, tepe noktasını yorumlayamıyorsa türevin geometrik yorumunu çözmesi imkansızdır. Bu gruptaki soruları kayıpsız geçmek zorundasınız.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-900 text-lg mb-1">2. Katman: Cepte Puanlar (Logaritma ve Diziler / 4 - 5 Soru)</h3>
                                <p className="text-sm text-emerald-800 leading-relaxed">
                                    AYT&apos;nin en cömert, en kurallı bölgesidir. Logaritmanın temel taban değiştirme kurallarını ve aritmetik/geometrik dizi formüllerini sindirmiş bir aday, bu 4-5 soruyu adeta çerez gibi cebine koyar. Buradan soru kaçırmak sınav masasında puan hediye etmektir.
                                </p>
                            </div>

                            <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
                                <h3 className="font-bold text-purple-900 text-lg mb-1">3. Katman: Zirve Geçidi (Trigonometri ve LTİ / 14 - 16 Soru)</h3>
                                <p className="text-sm text-purple-800 leading-relaxed">
                                    İşte sınavın kaderini çizen devasa vadi burasıdır. 4-5 soru Trigonometriden, 2-3 soru Limit-Süreklilikten, 4-5 soru Türevden ve 4 soru İntegralden gelir. Tek başına 15 sorudan bahsediyoruz! Tıp fakültesini, ODTÜ Mühendisliğini ya da Boğaziçi İktisadı kazananlarla açıkta kalanları ayıran tek şey bu vadide ayakta kalabilmektir.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-900 text-lg mb-1">4. Katman: Sessiz Derece Belirleyici (Geometri ve Analitik / 10 Soru)</h3>
                                <p className="text-sm text-amber-800 leading-relaxed">
                                    Noktanın ve doğrunun analitiği, çemberin analitiği, katı cisimler ve üçgenler. Çoğu öğrenci cebirle boğuşmaktan geometriye vakit ayıramaz. Oysa analitik geometri tamamen koordinat düzleminde denklem kurma sanatıdır ve formüllerin mantığını anlayan bir öğrenciye bedavadan 10 net kazandırır.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            LTİ Bloğuna Nasıl Yaklaşmalısınız?
                        </h2>
                        <p>
                            Öğrencilerin yaptığı en vahim hata, fonksiyon ve trigonometri temeli zayıfken hemen gidip bir Türev fasikülü satın alıp çözmeye çalışmaktır.
                        </p>
                        <p>
                            Böyle yaparsanız üçüncü günde pes edersiniz. Türev dediğiniz şey aslında bir fonksiyonun anlık değişim hızıdır; yani eğimdir. Eğim ise doğrudan analitik geometridir. Sırayı asla bozmayın: Önce fonksiyon grafikleri ve trigonometriyi taş gibi sağlamlaştırın. Ardından Limiti halledin. Limit zihninizde oturduğunda Türev bir anda çok mantıklı gelmeye başlar. Türevi kavradığınızda ise İntegral, onun tersine sarılmış bir film şeridi gibi önünüzde açılır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Soru Bankasından Denemeye Geçiş Takvimi
                        </h2>
                        <p>
                            AYT Matematik, sadece tek bir test kitabını baştan sona çözerek kazanılmaz. Konuyu öğrendikten sonra en az 2 farklı zorluk seviyesindeki kaynaktan tarama yapmalısınız.
                        </p>
                        <p>
                            Şubat ayı bittiğinde konu eksiklerinizin en az yüzde 80&apos;i tamamlanmış olmalıdır. Mart ayından itibaren haftada 2 adet 40 soruluk AYT Matematik branş denemesi çözmeye başlamalısınız. Branş denemesinde hangi soru tipinde tökezlediğinizi anında tespit edip sadece o konunun fasikülünden 30-40 soru çözerek deliği kapatmak, netinizi 18&apos;den 32&apos;ye fırlatacak yegane reçetedir.
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
