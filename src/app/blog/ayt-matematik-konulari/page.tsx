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
                            Cumartesi günü TYT&apos;de 85 net yapıp havalara uçan, ertesi gün AYT denemesine girince 14 netle masadan kalkan öğrencinin yüz ifadesini iyi bilirim. Resmen duvara toslamış gibi olur. &quot;Hocam ben dün ne yaptım, bugün ne yapıyorum?&quot; der.
                        </p>
                        <p>
                            Çok normal. Çünkü iki sınavın dünyası bambaşka.
                        </p>
                        <p>
                            TYT hızdır, panik kontrolüdür, soruyu gördüğün an pratik zekayla hamle yapmaktır. Ama AYT öyle değil. AYT sabır ister, derinlik ister. Sana 180 dakika verir; &quot;Al kardeşim, süren bol, otur düşün ama sakın beni hafife alma&quot; der. AYT&apos;de şansa veya hızlı okumaya yer yoktur. Formülü bilmek de yetmez; o formülün nereden çıktığını anlamadıysan ÖSYM seni ters köşe yapar.
                        </p>
                        <p>
                            Sayısalcı ya da Eşit Ağırlıkçı olman fark etmez; 25 netin üstüne zıplamak istiyorsan önündeki 40 sorunun haritasını gözün kapalı bilmen lazım:
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            40 Sorunun Konu Anatomisi: Nereden Ne Gelir?
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">1. Giriş Kapısı: Fonksiyonlar ve Parabol (İlk 6-8 Soru)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Fonksiyon grafiği okuyamayan birinin AYT Matematik yapma şansı sıfırdır. Ciddiyim, sıfır. Parabolün tepe noktasını, simetri eksenini, bileşke fonksiyonu adın gibi bileceksin. Çünkü birazdan göreceğin o devasa Türev ve İntegral konuları, tamamen fonksiyon diliyle konuşur. Bu ilk 6-8 soruda fire veren yarışa 1-0 geride başlar.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">2. Sınavın İkramı: Logaritma ve Diziler (4-5 Soru)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    AYT&apos;nin en dürüst, en az sürpriz barındıran yeridir. Logaritmanın temel 5-6 özelliğini ve aritmetik/geometrik dizi formüllerini kafana yazmışsan, bu 4 soruyu 8 dakikada çözer cebe atarsın. Buradan soru kaçıran öğrenci resmen masada rakibine puan hediye ediyordur.
                                </p>
                            </div>

                            <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
                                <h3 className="font-bold text-purple-950 text-lg mb-1">3. Ölüm Kalım Bölgesi: Trigonometri ve LTİ (14-16 Soru)</h3>
                                <p className="text-sm text-purple-900 leading-relaxed">
                                    İşte dananın kuyruğunun koptuğu yer. 4 soru Trigonometri, 2-3 soru Limit-Süreklilik, 4 soru Türev, 4 soru İntegral. Sınavın neredeyse yarısı! Tıp, Hukuk, ODTÜ veya İTÜ hayali kuran biri burayı pas geçemez. Buradaki soruları çözen ilk 30 bine girer; kaçan ise 100 bin bandına razı olur.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-950 text-lg mb-1">4. Gizli Maden: Analitik Geometri ve Katı Cisimler (10 Soru)</h3>
                                <p className="text-sm text-amber-900 leading-relaxed">
                                    Çoğu aday cebirle uğraşmaktan yorulup geometriye hiç bakmaz bile. Oysa doğrunun ve çemberin analitiği tamamen formül yerine koymadır. TYT geometrisi gibi &quot;görme yeteneği&quot; gerektirmez; denklemi yazarsın, tıkır tıkır çıkar. 10 sorunun en az 6&apos;sını cebe koymak işten bile değildir.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            LTİ Çıkmazı: Hangi Sırayla Çalışırsan Tıkanmazsın?
                        </h2>
                        <p>
                            Öğrencide şöyle bir heves görüyorum: Kırtasiyeye gidiyor, &quot;Bana en zor Türev fasikülünü ver abi&quot; diyor. Masaya oturuyor, 2. sayfada kalemi bırakıyor. Niye? Çünkü fonksiyon grafiği bilmiyor, trigonometrik yarım açı formülünü hatırlamıyor.
                        </p>
                        <p>
                            Türev dediğin şey bir fonksiyonun teğetinin eğimidir arkadaşım. Eğim bilmiyorsan türevi nasıl yapacaksın?
                        </p>
                        <p>
                            Sırayı bozma, akıntıya karşı kürek çekme:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>Önce Fonksiyon ve Trigonometri:</strong> Bu ikisi sağlamsa arkana yaslanabilirsin.</li>
                            <li><strong>Limit ve Süreklilik:</strong> Zaten kısa konudur, mantığı kaptın mı 3 günde biter.</li>
                            <li><strong>Türev:</strong> Türevin kurallarını ezberleme; geometrik yorumunu kafanda canlandır. Teğet denklemini kurmayı öğren.</li>
                            <li><strong>İntegral:</strong> Türevin tersi olduğunu anladığın an integral bir canavar olmaktan çıkar, eğlenceli bir bulmacaya dönüşür.</li>
                        </ol>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Ne Zaman AYT Branş Denemesine Geçmeli?
                        </h2>
                        <p>
                            &quot;Tüm konularım bitmeden deneme çözmem&quot; inadını bırak. Mart ayına geldiğinde konularının %75-80&apos;i bittiyse haftada 2 tane AYT Matematik branş denemesini masaya koyacaksın.
                        </p>
                        <p>
                            Denemede türevin maksimum-minimum probleminde mi patladın? Hemen o akşam fasikülü açıp sadece o alt başlıktan 30 soru çözeceksin. AYT neti öyle 500 sayfa baştan okunarak değil; denemede düşülen çukurların tek tek kapatılmasıyla 15&apos;ten 32&apos;ye çıkarılır.
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
