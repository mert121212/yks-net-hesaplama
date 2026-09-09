import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'AYT Puan Hesaplama 2027 | SAY, EA, SÖZ Katsayıları ve Ağırlıklar',
    description: 'AYT puan hesaplama mantığı: SAY, EA ve SÖZ puan türlerinde test ağırlıkları, 1 AYT netinin TYT karşılığı ve yerleştirme puanına etkisi.',
    keywords: 'ayt puan hesaplama, ayt katsayıları, say katsayıları, ea katsayıları, söz katsayıları, yks yerleştirme puanı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/ayt-puan-hesaplama' },
    openGraph: {
        title: 'AYT Puan Hesaplama: Üniversite Kapısını Açan Gerçek Puan',
        description: 'AYT netlerinin Sayısal, Eşit Ağırlık ve Sözel puanlarına etkisi ve katsayılar.',
        type: 'article',
        publishedTime: '2026-02-09',
        modifiedTime: '2026-02-12',
        url: 'https://yksnethesapla.com/blog/ayt-puan-hesaplama',
        images: [
            {
                url: '/og-image.jpg',
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
                <BlogArticleSchema 
                    title="AYT Puan Hesaplama 2027 | SAY, EA, SÖZ Katsayıları ve Ağırlıklar" 
                    description="AYT puan hesaplama mantığı: SAY, EA ve SÖZ puan türlerinde test ağırlıkları, 1 AYT netinin TYT karşılığı ve yerleştirme puanına etkisi."
                    datePublished="2026-02-09"
                    dateModified="2026-02-12"
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
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-09">9 Şubat 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            AYT Puanınız Nasıl Hesaplanıyor? 1 AYT Neti Neden 2,5 TYT Netine Bedeldir?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Cumartesi günkü sınav için kendini paralayan adayların unuttuğu o büyük matematik: Lisans programlarının kapısını açan yerleştirme puanının yüzde 60&apos;ı pazar günkü kitapçıktan gelir.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her yıl kasım veya aralık ayında kütüphaneleri gezerken hep aynı çarpık manzarayı görürüm. Öğrenci sabah 9&apos;dan akşam 17&apos;ye kadar sadece TYT Türkçe paragrafı çözer, TYT problem sorularıyla cebelleşir. &quot;AYT&apos;ye ne zaman başlayacaksın?&quot; diye sorduğumda ise aldığım cevap neredeyse hep aynıdır: &quot;Hocam önce bir TYT&apos;yi 80 nete sabitleyeyim, şubatta AYT&apos;ye geçerim.&quot;
                        </p>

                        <p>
                            Bu stratejik intihardan başka bir şey değildir.
                        </p>

                        <p>
                            Neden mi? Çünkü 4 yıllık fakültelere yerleşirken kullanılan yerleştirme puanınızın yüzde 40&apos;ı TYT&apos;den, tam <strong>yüzde 60&apos;ı ise AYT&apos;den</strong> gelir. Dahası, matematiksel katsayı hesabına vurduğunuzda TYT&apos;de yapacağınız 1 net hanenize yaklaşık 1,32 puan yazarken; pazar günü AYT Matematik veya Fende yapacağınız tek bir doğru net hanenize tam <strong>3,0 puan</strong> kazandırır! Yani pazar günü çözeceğiniz her bir soru, cumartesi günkü soruların tam iki buçuk katı ağırlığındadır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sayısal (SAY) Puanının İç Mimarisi
                        </h2>
                        <p>
                            Sayısal alanda yarışan bir adayın pazar günü muhatap olduğu iki test vardır: 40 soruluk AYT Matematik ve 40 soruluk AYT Fen Bilimleri (14 Fizik, 13 Kimya, 13 Biyoloji).
                        </p>
                        <p>
                            Bu 80 soruluk paketin getirisinde en büyük aslan payı Matematiktedir. AYT&apos;nin getirdiği toplam puanın tam yarısı (%50) tek başına Matematikten akar. Geriye kalan yüzde 50 ise Fizik (%17), Kimya (%16,5) ve Biyoloji (%16,5) arasında adilce paylaştırılır.
                        </p>
                        <p>
                            Tıp, Diş Hekimliği veya Bilgisayar Mühendisliği isteyen bir öğrencinin AYT Matematikte 30&apos;un altına düşmesi halinde Fen derslerinde kusursuza yakın yapması gerekir. Kısacası Sayısalda zirveye oynamanın yolu Matematik kalesini düşürmemekten geçer.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Eşit Ağırlık (EA) Puanında Fark Yaratan Gizli Silah
                        </h2>
                        <p>
                            Eşit Ağırlıkçıların (TM grubu) puanı AYT Matematik (40 soru) ile Türk Dili ve Edebiyatı - Sosyal Bilimler-1 testinin (24 Edebiyat, 10 Tarih-1, 6 Coğrafya-1) harmanlanmasıyla oluşur.
                        </p>
                        <p>
                            Burada çok ilginç bir psikolojik dinamik işler: Eşit Ağırlık hazırlanan öğrencilerin büyük kısmı sözel kökenli olduğu için aylarca Edebiyat ezberler. Sınava giren hemen her ciddi EA adayı Edebiyatta 18-22 net bandına rahatlıkla ulaşır. 
                        </p>
                        <p>
                            Peki dereceyi kim yapar? Farkı kim açar? Türkiye geneli AYT Matematik ortalaması 5-6 netlerde sürünürken, masaya oturup AYT Matematikten 22-25 net çıkaran Eşit Ağırlık öğrencisi, standart sapmanın rüzgarını arkasına alarak ilk 5 binin kapısını tekmeleyerek açar. Edebiyat sizin barajınızdır, Matematik ise sizi şampiyon yapan roketinizdir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sözel (SÖZ) Puanının Bilgi Yoğunluğu
                        </h2>
                        <p>
                            Sözelciler için AYT tamamen bir okuma ve bilgi fırtınasıdır. Edebiyat-Sosyal-1 (40 soru) ve Sosyal-2 (40 soru) olmak üzere toplam 80 soru çözülür. Tarih, Coğrafya, Felsefe grubu mantık soruları ve Din Kültürü... 
                        </p>
                        <p>
                            Sözel alanda soru kaçırmamak için kavram haritalarını ve kronolojiyi çok iyi oturtmak gerekir. Ancak sözelcilerin gözden kaçırdığı en can alıcı taktik, cumartesi günkü TYT&apos;de yapacakları 5-6 temel matematik netidir. Sözel sıralamasında yarışanların yüzde 85&apos;i matematikten sıfır veya eksi net yaptığı için, o 5 net sizi tek hamlede 30 bin kişinin önüne geçirmeye yeter.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sınav Salonunda Hayat Kurtaran Taktik: Çift Puan Türü
                        </h2>
                        <p>
                            AYT kitapçığı tek parça halinde masanıza konur. Kitapçığın içinde Matematik de vardır, Fen de, Edebiyat da, Sosyal-2 de. Size toplam 180 dakika süre verilir.
                        </p>
                        <p>
                            Diyelim ki asıl hedefiniz Eşit Ağırlık. Matematik ve Edebiyat testlerinizi 130 dakikada bitirdiniz, kontrollerinizi yaptınız ve önünüzde koca bir 50 dakika kaldı. Kitapçığı kapatıp uyumayın! Açın arkadaki Sosyal-2 testini, yapabildiğiniz Tarih ve Coğrafya sorularını işaretleyin. Böylece hem EA puanınız hesaplanır hem de elinizde sapasağlam bir Sözel puanı oluşur. Tercih dönemi geldiğinde elinizde iki ayrı kozun bulunması size tahmin edemeyeceğiniz kadar büyük bir özgürlük kazandırır.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">AYT Netlerinizin Puan Getirisini Görün</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                Çözdüğünüz AYT deneme netlerini katsayı motorumuza girin; SAY, EA ve SÖZ puanlarınız ile tahmini sıralama dilimlerinizi tek tıkla inceleyin.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                AYT Puanını Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">AYT Başarısı İçin Sıradaki Adımlar</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/ayt-matematik-konulari" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">AYT Matematik ve LTİ Rehberi →</p>
                                    <p className="text-xs text-gray-600 mt-1">Trigonometri ve Türev-İntegral bloklarında net artırma adımları.</p>
                                </Link>
                                <Link href="/blog/yks-puan-turleri" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">YKS Puan Türleri ve Bölümleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">Hangi fakültenin hangi puan türüyle öğrenci aldığının tam dökümü.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
