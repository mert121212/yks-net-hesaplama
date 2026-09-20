import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'

export const metadata: Metadata = {
    title: 'TYT Matematik Konuları ve Soru Dağılımı 2027 | Kapsamlı Çalışma Rehberi',
    description: 'TYT Matematik sınavında hangi konudan kaç soru çıkıyor? 0-10, 10-20 ve 30+ net seviyelerine özel taktikler, süre yönetimi ve güncel soru dağılım analizi.',
    keywords: 'tyt matematik konuları, tyt matematik soru dağılımı 2027, tyt matematik nasıl çalışılır, yks matematik net artırma, tyt geometri',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-matematik-konulari' },
    openGraph: {
        title: 'TYT Matematik Konuları ve Soru Dağılımı 2027 | Kapsamlı Rehber',
        description: 'TYT Matematik testini 30+ nete taşıyacak konu analizleri, seviyelere göre çalışma planı ve sınav süresi yönetimi rehberi.',
        type: 'article',
        publishedTime: '2026-02-19',
        modifiedTime: '2026-02-22',
        url: 'https://yksnethesapla.com/blog/tyt-matematik-konulari',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'TYT Matematik Konuları ve Soru Dağılımı 2027 | Çalışma Rehberi'
            }
        ],
    },
}

export default function TYTMatematikKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="TYT Matematik Konuları ve Soru Dağılımı 2027 | Kapsamlı Çalışma Rehberi" 
                    description="TYT Matematik sınavında hangi konudan kaç soru çıkıyor? 0-10, 10-20 ve 30+ net seviyelerine özel taktikler, süre yönetimi ve güncel soru dağılım analizi."
                    datePublished="2026-02-19"
                    dateModified="2026-02-22"
                    url="https://yksnethesapla.com/blog/tyt-matematik-konulari"
                    keywords={['tyt matematik konuları', 'tyt matematik soru dağılımı 2027', 'tyt matematik nasıl çalışılır', 'yks matematik net artırma', 'tyt geometri']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Matematik Konuları ve Rehberi</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Temel Yeterlilik Testi</span>
                            <time className="text-gray-600" dateTime="2026-02-19">19 Şubat 2026</time>
                            <span className="text-gray-600">• 15 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT Matematik Konuları, Soru Dağılımı ve 30+ Net İçin Sahada Test Edilmiş Çalışma Rehberi
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Formül ezberlemek TYT Matematik&apos;te seni en fazla 8-10 nete götürür. ÖSYM artık &quot;şu formülü yaz x&apos;i bul&quot; demiyor; sana bir hayat hikayesi anlatıyor, o hikayenin içindeki matematiği senin çekip çıkarmanı bekliyor.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Haziran&apos;da sınav salonundan çıkan 10 öğrenciden 9&apos;unun kurduğu ilk cümle ne biliyor musun?
                        </p>
                        <p className="border-l-4 border-amber-500 pl-4 italic text-gray-800 font-medium bg-amber-50/60 py-2 rounded-r">
                            — &quot;Hocam sorular çözülmeyecek gibi değildi aslında... Ama süre öyle bir uçtu ki, arkadaki 10 geometri sorusuna göz ucuyla bile bakamadım.&quot;
                        </p>
                        <p>
                            Klasik manzara. Hiç şaşmaz. Çünkü TYT Matematik bir bilgi yarışması değil; süreye ve stres seviyene karşı oynadığın bir satranç maçı. 
                        </p>
                        <p>
                            Kalın soru bankalarını masaya dizip 1. sayfadan 400. sayfaya kadar sırayla çözmeye kalkışırsan Kasım ayında tükenirsin. Akıllı adam ne yapar? ÖSYM&apos;nin son 6 yılda masaya koyduğu 240 soruyu açar, &quot;Bu adamlar nereden vuruyor?&quot; diye bakar ve kendi seviyesine göre rota çizer.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            ÖSYM TYT Matematik&apos;te Ne Soruyor? Gerçek Soru Dağılım Haritası
                        </h2>
                        <p>
                            Toplam 40 soru var. Kabaca 30 tanesi temel matematik ile problemler, kalan 10 tanesi ise geometri. Kafandaki o &quot;her konudan bir soru çıkar&quot; masalını unut. Dağılım hiç de eşit değil:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm text-left">
                                <thead className="bg-slate-100 text-gray-800 font-semibold border-b">
                                    <tr>
                                        <th className="py-3 px-4">Konu Başlığı</th>
                                        <th className="py-3 px-4">Ortalama Soru</th>
                                        <th className="py-3 px-4">Soru Tipi & Karakteri</th>
                                        <th className="py-3 px-4">Önem Derecesi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Temel Kavramlar & Sayı Basamakları</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">3 - 4 Soru</td>
                                        <td className="py-3 px-4">Tek-çift sayı yorumları, kutucuk içine sayı yerleştirme mantığı.</td>
                                        <td className="py-3 px-4 text-emerald-700 font-medium">Hayati (Hızlı Net)</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Rasyonel & Ondalık Sayılar</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">1 - 2 Soru</td>
                                        <td className="py-3 px-4">Pasta dilimi, cetvel veya ölçeklendirme üzerinden görsel modelleme.</td>
                                        <td className="py-3 px-4 text-emerald-700 font-medium">Garanti Puan</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Basit Eşitsizlikler & Mutlak Değer</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">2 - 3 Soru</td>
                                        <td className="py-3 px-4">Sayı doğrusu üzerinde uzaklık ve günlük hayat sıcaklık/mesafe aralıkları.</td>
                                        <td className="py-3 px-4 text-amber-700 font-medium">Eleyici Eşik</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Üslü ve Köklü İfadeler</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">2 - 3 Soru</td>
                                        <td className="py-3 px-4">Yaklaşık değer hesaplama, tartı ve boy ölçüm kurguları.</td>
                                        <td className="py-3 px-4 text-emerald-700 font-medium">Çok Yüksek</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Bölme - Bölünebilme & EBOB - EKOK</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">1 - 2 Soru</td>
                                        <td className="py-3 px-4">Kalan bulma kuralları ve periyodik tekrarlayan olay kurguları.</td>
                                        <td className="py-3 px-4 text-slate-700">Orta</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Problemler (Tüm Türler)</td>
                                        <td className="py-3 px-4 font-bold text-red-600">11 - 13 Soru</td>
                                        <td className="py-3 px-4">Sayı-kesir, yüzde, kâr-zarar, hız, yaş ve tablo-grafik okuma.</td>
                                        <td className="py-3 px-4 text-red-700 font-bold">Sınavın Omurgası</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Kümeler & Kartezyen Çarpım</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">1 Soru</td>
                                        <td className="py-3 px-4">Venn şeması ve boyalı bölgeyi harflerle ifade etme.</td>
                                        <td className="py-3 px-4 text-emerald-700 font-medium">Garanti Puan</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Fonksiyonlar</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">1 - 2 Soru</td>
                                        <td className="py-3 px-4">Grafik okuma, bileşke ve ters fonksiyon uygulaması (AYT köprüsü).</td>
                                        <td className="py-3 px-4 text-indigo-700 font-medium">Kritik Temel</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Mantık / Polinomlar</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">1 Soru</td>
                                        <td className="py-3 px-4">Önermelerin doğruluk değeri veya basit katsayı ilişkileri.</td>
                                        <td className="py-3 px-4 text-slate-700">Kolay Net</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Veri - İstatistik</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">1 Soru</td>
                                        <td className="py-3 px-4">Medyan (ortanca), mod (tepe değer) ve açıklık hesapları.</td>
                                        <td className="py-3 px-4 text-emerald-700 font-medium">Kaçırılmayacak 1 Net</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Permütasyon, Kombinasyon, Olasılık</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">2 Soru</td>
                                        <td className="py-3 px-4">Dizilim, seçim ve deneysel/teorik olasılık modelleri.</td>
                                        <td className="py-3 px-4 text-amber-700 font-medium">Seçici ve Zor</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-bold text-gray-900">Geometri (Üçgen, Dörtgen, Katı Cisim)</td>
                                        <td className="py-3 px-4 font-bold text-purple-700">9 - 10 Soru</td>
                                        <td className="py-3 px-4">Katlama, döndürme, benzerlik, çokgenler ve prizma/piramit hacimleri.</td>
                                        <td className="py-3 px-4 text-purple-700 font-bold">Derece Belirleyici</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Şu Anki Netine Göre Acil Eylem Planı
                        </h2>
                        <p>
                            Rehberlikte gördüğüm en büyük saçmalık şudur: 7 net yapan çocukla 26 net yapan çocuğa aynı ödev verilir. Olmaz, yürümez o iş. 7 net yapan adamın eksiği işlem refleksidir; 26 net yapanınki ise süre yönetimi ve geometri korkusudur. Kendine dürüst ol, hangi gruptasın seç:
                        </p>

                        <div className="space-y-6 my-6">
                            <div className="p-5 bg-slate-50 border-l-4 border-amber-500 rounded-r-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Grup: 0 - 10 Net Arasında Boğuşanlar</h3>
                                <p className="text-gray-700 mb-3">
                                    Lütfen rica ediyorum, o yarım sayfalık &quot;yeni nesil&quot; problem kitaplarını hemen masadan kaldır. Neden biliyor musun? Çünkü senin derdin soruyu anlamamak değil; eksiyle eksiyi çarparken duraksaman, payda eşitlerken 20 saniye kaybetmen. Beynin dört işlemde ekstra efor harcarken yeni nesil sorunun kurgusuna odaklanamazsın.
                                </p>
                                <p className="text-gray-700 text-sm font-semibold text-amber-950">
                                    Reçete: Önce temel 4 işlem refleksini hızlandır. Rasyonel sayılar, tek-çift sayılar, basit eşitsizlikler ve mutlak değeri klasik sorularla hallet. 3 hafta sadece buna çalış, netin doğrudan 15&apos;e fırlayacak.
                                </p>
                            </div>

                            <div className="p-5 bg-slate-50 border-l-4 border-blue-500 rounded-r-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Grup: 10 - 20 Net Arasında Takılıp Kalanlar</h3>
                                <p className="text-gray-700 mb-3">
                                    Konuları biliyorsun. Biri formülü sorduğunda çatır çatır söylüyorsun. Ama denemede problem sorusunu açtığında kilitleniyorsun. Soruyu baştan sona bir gazete haberi gibi okuyup bitiriyorsun, sonra kalemi kağıda koyup &quot;ben ne okudum az önce?&quot; diyorsun.
                                </p>
                                <p className="text-gray-700 text-sm font-semibold text-blue-950">
                                    Reçete: Soruyu parça parça oku. İlk cümleyi okudun mu? Hemen kenara yaz: &quot;Babanın yaşı = 3x&quot;. İkinci cümleyi okudun mu? &quot;Çocuk = x&quot;. Soru bitmeden denklem masada hazır olmalı. Ayrıca her sabah kahvaltıdan önce 15 problem çözmeyi ibadet gibi yap.
                                </p>
                            </div>

                            <div className="p-5 bg-slate-50 border-l-4 border-emerald-500 rounded-r-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Grup: 20 - 30 Net Bandına Gelip Tıkananlar</h3>
                                <p className="text-gray-700 mb-3">
                                    Buradaki öğrencilerin %90&apos;ının tek bir ortak günahı vardır: Geometriye bakmamak. &quot;Hocam ben geometri yapamıyorum, matematikten 28 yaparım yeter.&quot; Yetmez arkadaşım, derece istiyorsan yetmez. 40 sorunun 10 tanesi geometri. Geometriyi çöpe atarak 35 nete ulaşamazsın.
                                </p>
                                <p className="text-gray-700 text-sm font-semibold text-emerald-950">
                                    Reçete: Üçgende açılar, özel üçgenler (3-4-5, 30-60-90) ve benzerlik. Bu üç konuyu bitir, geometriden anında +4 net kazanırsın. Geometri çizim yeteneğidir; her gün 10 soru çöz, gözün 2 haftada şekilleri görmeye başlar.
                                </p>
                            </div>

                            <div className="p-5 bg-slate-50 border-l-4 border-purple-500 rounded-r-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">4. Grup: 30+ Net Yapıp Derece Arayanlar</h3>
                                <p className="text-gray-700 mb-3">
                                    Bu seviyede konu eksiği falan kalmamıştır. Kaybettiğin 3-4 net nereden gidiyor? Ya soru kökündeki &quot;daima&quot; kelimesini atladın ya da işlem yaparken 7 kere 8&apos;e 54 dedin. Bir de ÖSYM&apos;nin bilerek hazırladığı o 2 tane eleyici tuzak soru.
                                </p>
                                <p className="text-gray-700 text-sm font-semibold text-purple-950">
                                    Reçete: Konu çalışmayı tamamen bırak. Haftada 4 branş denemesi çöz, sadece yapamadığın soruların mantığını cımbızla ayıkla. Permütasyon, kombinasyon ve olasılık olasılıklarını artık şansa bırakma.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sorularla İnatlaşma: Altın Turlama Kuralı
                        </h2>
                        <p>
                            Bir problem sorusuna 4 dakika gömdün. Çıkmadı. Sinirlendin, &quot;ben bunu nasıl yapamam&quot; dedin, 2 dakika daha harcadın. Sonuç? Yanlış çıktı. Ve o 6 dakika yüzünden arka sayfadaki 3 tane tek satırlık çerez soruyu göremeden süre bitti.
                        </p>
                        <p>
                            Bunu yapma. Soruyu okudun, 40 saniyede aklına bir yöntem gelmedi mi? Yanına küçük bir yıldız koy ve hemen geç. Bütün testi tara, cepteki 22-25 neti garantiye al. Sonra geri dön o yıldızlı sorulara. Kafandaki panik bittiği için beyninin o soruları nasıl çatır çatır çözdüğüne kendin bile inanamayacaksın.
                        </p>

                        <div className="my-8">
                            <QuickNetSimulator />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Deneme Bitti, Kitapçığı Kapatmadan Önce Şu 3 Şeyi Sor
                        </h2>
                        <p>
                            Denemeyi çözüp sadece &quot;23 doğru 6 yanlış&quot; diye kenara atmak vakit kaybıdır. Yanlışlarına bakarken kendine dürüst ol:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Bilgi eksikliği mi?</strong> Kuralı bilmediğin için mi gitti? O zaman hemen o konudan 20 soru çöz.</li>
                            <li><strong>Süre paniği mi?</strong> Son 15 dakikada telaştan mı salladın? Turlama taktiğini geliştirmen lazım.</li>
                            <li><strong>Dikkatsizlik mi?</strong> &quot;Hangisi kesinlikle doğrudur&quot; sorusunda aksi örneği düşünmedin mi? Soru köklerinin altını fosforlu kalemle çiz.</li>
                        </ul>

                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 my-10 text-center text-white shadow-xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3">Mevcut Matematik Netinle Hedefine Ne Kadar Yakınsın?</h3>
                            <p className="text-blue-100 max-w-xl mx-auto mb-6 text-base md:text-lg">
                                TYT ve AYT matematik netlerini sistemimize girerek güncel ÖSYM katsayılarıyla ham puanını ve tahmini sıralama bandını saniyeler içinde hesapla.
                            </p>
                            <Link 
                                href="/" 
                                className="inline-block bg-white text-blue-700 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-all shadow-md hover:shadow-lg text-lg"
                            >
                                YKS Puanını ve Sıralamanı Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Rehberler ve Kaynaklar</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/ayt-matematik-konulari" className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-blue-100">
                                    <p className="font-semibold text-blue-900">AYT Matematik Konuları ve Dağılımı →</p>
                                    <p className="text-xs text-gray-600 mt-1">Limit, Türev, İntegral ve Trigonometriye giden yol haritası.</p>
                                </Link>
                                <Link href="/blog/tyt-kesin-cikan-konular" className="p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors border border-emerald-100">
                                    <p className="font-semibold text-emerald-900">TYT&apos;de Kesin Çıkan Konular →</p>
                                    <p className="text-xs text-gray-600 mt-1">ÖSYM&apos;nin her yıl soru havuzunu doldurduğu garanti konular.</p>
                                </Link>
                                <Link href="/blog/tyt-net-artirma-taktikleri" className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors border border-purple-100">
                                    <p className="font-semibold text-purple-900">TYT Net Artırma Taktikleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">60-70 net barajında tıkananlar için pratik çıkış stratejileri.</p>
                                </Link>
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors border border-amber-100">
                                    <p className="font-semibold text-amber-900">1 Net Kaç Kişi Öne Geçirir? →</p>
                                    <p className="text-xs text-gray-600 mt-1">Yığılma bölgelerinde her bir doğru cevabın gerçek sıralama etkisi.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
