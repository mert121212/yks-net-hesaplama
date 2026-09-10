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
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AYT ve Katsayılar</span>
                            <time className="text-gray-600" dateTime="2026-02-09">9 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            AYT Puan Hesaplama: 1 AYT Neti Neden 2,5 TYT Netine Bedeldir?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Aylarca TYT neti peşinde koşarken pazar günkü sınavı unutanların yaptığı büyük hata: 4 yıllık fakültelerin kapısını açan puanın tam %60&apos;ı AYT&apos;den gelir.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS hazırlık sürecinde her kış şahit olduğumuz değişmez bir tablo vardır: Öğrenci kasım, aralık, hatta ocak ayına kadar günün 8 saatini yalnızca TYT Türkçe paragrafına ve TYT problemlerine ayırır. &quot;AYT&apos;ye ne zaman başlayacaksın?&quot; dediğinizde de genelde aynı yanıt gelir:
                        </p>

                        <div className="bg-slate-100 border-l-4 border-slate-500 p-4 rounded-r-lg text-slate-800 italic text-base my-4">
                            &quot;Hocam önce TYT&apos;de bir 75-80 neti göreyim, içim rahatlasın. Sonra AYT&apos;ye asılırım.&quot;
                        </div>

                        <p>
                            Bu yaklaşım, sınav matematiğini tamamen yanlış okumaktır.
                        </p>

                        <p>
                            Çünkü 4 yıllık lisans programlarına (Tıp, Mühendislik, Hukuk, Psikoloji vb.) yerleşirken kullanılan puanın %40&apos;ı TYT&apos;den, tam <strong>%60&apos;ı ise pazar günkü AYT&apos;den</strong> gelir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Matematiksel Gerçek: 1 AYT Neti = ~2,3 - 2,5 TYT Neti
                        </h2>
                        <p>
                            Katsayıları alt alta koyduğunuzda tablo çok nettir:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>TYT&apos;de çözdüğünüz 1 net, yerleştirme puanınıza yaklaşık <strong>1,32 - 1,35 puan</strong> kazandırır.</li>
                            <li>Pazar günü kendi alanınızda yapacağınız 1 AYT neti ise yaklaşık <strong>3,00 - 3,20 puan</strong> getirir.</li>
                        </ul>
                        <p>
                            Yani cumartesi günkü sınavda 5 net kaybetmiş bir aday, pazar günü AYT&apos;de sadece 2 net fazla yaparak o açığı kuruşu kuruşuna kapatabilir. Cumartesi günü kötü geçen bir TYT yüzünden moral bozup pazar gününü çöpe atmak bu yüzden yapılabilecek en büyük yanlıştır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            SAY (Sayısal) Puanının Ağırlık Dağılımı
                        </h2>
                        <p>
                            Sayısal öğrencisi pazar günü 40 Matematik ve 40 Fen Bilimleri (14 Fizik, 13 Kimya, 13 Biyoloji) çözer.
                        </p>
                        <p>
                            Bu 80 sorunun puan dağılımında en büyük ağırlık tek başına Matematiktedir:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>AYT Matematik (40 soru):</strong> Sayısal puanının AYT payının tam %50&apos;sini tek başına sırtlar (Net başına ~3,0 puan).</li>
                            <li><strong>AYT Fizik (14 soru):</strong> Net başına yaklaşık 2,85 - 3,00 puan.</li>
                            <li><strong>AYT Kimya (13 soru):</strong> Net başına yaklaşık 3,00 - 3,10 puan.</li>
                            <li><strong>AYT Biyoloji (13 soru):</strong> Net başına yaklaşık 2,90 - 3,05 puan.</li>
                        </ul>
                        <p>
                            Tıp ya da iyi bir mühendislik hedefleyen bir öğrenci, AYT Matematikte 30 netin üzerine çıkmadığı sürece bu hedefini sadece Fen netleriyle kurtarmakta çok zorlanır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            EA (Eşit Ağırlık) Puanında Sıralamayı Belirleyen Ders
                        </h2>
                        <p>
                            Eşit Ağırlık puanı, AYT Matematik (40 soru) ile Türk Dili ve Edebiyatı - Sosyal Bilimler-1 (40 soru) testlerinden oluşur:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>24 Edebiyat</li>
                            <li>10 Tarih-1</li>
                            <li>6 Coğrafya-1</li>
                            <li>40 Temel/İleri Matematik</li>
                        </ul>
                        <p>
                            Eşit Ağırlıkta derece yapmak isteyen hemen her ciddi aday Edebiyatta 18-22 net bandını yakalar. Farkı açan yer neresidir? Tabii ki AYT Matematik. Türkiye genelinde Eşit Ağırlıkçıların AYT Matematik ortalaması 5-7 net civarındadır. Masaya oturup AYT Matematikten 24-28 net çıkaran bir Eşit Ağırlık öğrencisi, ilk 5 bin - 10 bin aralığına çok rahat tırmanır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            SÖZ (Sözel) Puanında Dikkat Edilmesi Gereken Ayrıntı
                        </h2>
                        <p>
                            Sözelciler Edebiyat-Sosyal-1 (40 soru) ve Sosyal-2 (40 soru) olmak üzere toplam 80 soru çözer. Sosyal-2 testinde Tarih-2 (11 soru), Coğrafya-2 (11 soru), Felsefe Grubu (12 soru) ve Din Kültürü (6 soru) yer alır.
                        </p>
                        <p>
                            Sözel alanda soru kaçırmamak için kavram ve dönem bilgisine hakim olmak şarttır. Fakat sözel adaylarının gözden kaçırdığı en kritik hamle: Cumartesi günkü TYT&apos;de yapılacak 5-8 temel matematik neti, sözel sıralamasında on binlerce adayın bir anda önüne geçmenizi sağlar.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sınav Salonunda Pratik Taktik: Çift Puan Türü
                        </h2>
                        <p>
                            AYT sınavında size tek bir kitapçık verilir ve süre 180 dakikadır. Kitapçığın içinde tüm testler bulunur.
                        </p>
                        <p>
                            Diyelim ki asıl hedefiniz Eşit Ağırlık. Kendi testlerinizi (Matematik ve Edebiyat-Sosyal-1) 130 dakikada bitirdiniz ve önünüzde 50 dakika boş vakit kaldı. Kalemi bırakıp beklemek yerine, arkadaki Sosyal-2 testini açıp yapabildiğiniz Tarih ve Coğrafya sorularını işaretleyin. 
                        </p>
                        <p>
                            Bu hamle sizin Eşit Ağırlık puanınızı bir milim bile düşürmez; fakat tercih dönemi geldiğinde cebinizde sürpriz ve güçlü bir Sözel puanının da bulunmasını sağlar.
                        </p>

                        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 my-10 text-center text-white shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">AYT Netlerinizle Puanınızı Hesaplayın</h3>
                            <p className="text-purple-100 mb-6 max-w-xl mx-auto text-sm">
                                TYT ve AYT deneme netlerinizi girerek SAY, EA ve SÖZ puanlarınızı ve geçmiş yıl katsayılarına göre sıralama tahminlerinizi anında görün.
                            </p>
                            <Link href="/" className="inline-block bg-white text-purple-900 px-8 py-3.5 rounded-xl font-bold hover:bg-purple-50 transition-colors shadow">
                                AYT Puanını Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Diğer Rehberler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/ayt-matematik-konulari" className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors border border-purple-100">
                                    <p className="font-semibold text-purple-900">AYT Matematik Konuları ve Dağılımı →</p>
                                    <p className="text-xs text-gray-600 mt-1">Trigonometri ve LTİ bloklarına çalışma stratejisi.</p>
                                </Link>
                                <Link href="/blog/yks-puan-turleri" className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-blue-100">
                                    <p className="font-semibold text-blue-900">YKS Puan Türleri ve Bölümleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">Hangi fakültenin hangi puan türüyle öğrenci aldığının dökümü.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
