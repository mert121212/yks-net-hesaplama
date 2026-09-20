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
                            Her yıl Ocak ayında rehberlik servisine gelen öğrencilerle aynı diyaloğu yaşarım. Çocuk masaya oturur, elinde 65 TYT neti: <em>&quot;Hocam ben TYT&apos;de 80 neti görmeden AYT&apos;ye başlayamam, içim elvermiyor.&quot;</em>
                        </p>

                        <p>
                            Gözünü seveyim yapma şunu. Bu, YKS&apos;deki en büyük intihardır.
                        </p>

                        <p>
                            Neden biliyor musun? Çünkü 4 yıllık bir üniversiteye (Tıp, Hukuk, Mühendislik, Psikoloji, Mimarlık fark etmez) yerleşirken seni o kapıdan sokacak olan puanın %40&apos;ı TYT&apos;den, <strong>tam %60&apos;ı ise Pazar günkü AYT&apos;den</strong> gelir. Sen cumartesi günkü sınav için 8 ay boyunca yırtınıyorsun ama asıl kararın verileceği pazar gününü son 2 aya sıkıştırıyorsun. Tam bir akıl tutulması.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Masanın Üstündeki Matematik: 1 AYT Neti = 2.5 TYT Neti
                        </h2>
                        <p>
                            Katsayıları alt alta yazıp hesap makinesine basalım, gözünle gör:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Cumartesi günü TYT&apos;de kan ter içinde çözdüğün 1 net, puanına yaklaşık <strong>1.32 - 1.34 puan</strong> ekler.</li>
                            <li>Pazar günü kendi alanında çözeceğin tek 1 AYT neti ise hanene tam <strong>3.00 - 3.20 puan</strong> yazar!</li>
                        </ul>
                        <p>
                            Bunun Türkçesi ne demek? Cumartesi günü TYT Türkçe&apos;de süren yetmedi ve 5 net eksik yaptın diye kriz geçirmene hiç gerek yok. Pazar günü AYT&apos;de fazladan yapacağın 2 tane doğru cevap, o kaybettiğin 5 neti siler süpürür, seni üstüne bir de kâra geçirir. Cumartesi çıkışında &quot;sınavım kötü geçti&quot; diye ağlayıp Pazar günkü AYT&apos;ye moralsiz giren öğrenci kendi ayağına sıkar.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            SAY (Sayısal): Krallık AYT Matematik&apos;te
                        </h2>
                        <p>
                            Sayısalcı pazar günü 40 Matematik, 40 Fen (Fizik, Kimya, Biyoloji) çözer.
                        </p>
                        <p>
                            Burada çok net bir hiyerarşi var: 40 soruluk AYT Matematik, SAY puanının neredeyse yarısını tek başına taşır. Net başına yaklaşık 3.0 puan gelir. Fende Fizik neti ~2.9 puan, Kimya ~3.05, Biyoloji ~2.95 civarındadır.
                        </p>
                        <p>
                            İstediğin kadar Feni fulle; AYT Matematik&apos;te 28-30 net bandını aşamadığın sürece ilk 30 bindeki devlet tıp fakülteleri ya da iyi mühendislikler hayal olarak kalır. Sayısalın şahı AYT Matematiktir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            EA (Eşit Ağırlık): Hukukun Kapısını Edebiyat Değil, Matematik Açar
                        </h2>
                        <p>
                            Eşit Ağırlıkçıların en büyük yanılgısı sürekli Edebiyat ezberlemektir.
                        </p>
                        <p>
                            İyi bir hukuk veya psikoloji hedefleyen hemen her EA öğrencisi Edebiyatta 18-22 neti zaten yapar. Orada kimse kimseye fark atamaz. Asıl fark nerede açılır? Tabii ki AYT Matematikte!
                        </p>
                        <p>
                            Türkiye genelinde Eşit Ağırlık adaylarının AYT Matematik ortalaması kaç biliyor musun? Sadece 5-6 net. Sen o masaya oturup AYT Matematikten 22-25 net çıkardığın an, Türkiye&apos;de ilk 5 binin kapısını tekmeleyerek açarsın. Edebiyat seni yarışta tutar; dereceyi sana getirecek olan Matematiktir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            SÖZ (Sözel): Gizli Silahın TYT Matematik
                        </h2>
                        <p>
                            Sözelciler Edebiyat-Sosyal-1 ve Sosyal-2 testlerinden toplam 80 soru çözer. Kavram bilgisi, tarih dönemleri, coğrafya haritaları havada uçuşur.
                        </p>
                        <p>
                            Ama sözelcilerin %90&apos;ının kaçırdığı dev bir açık kapı var: Cumartesi günkü TYT&apos;de yapacağın <strong>sadece 6-7 temel matematik neti</strong>, seni Türkiye&apos;deki tüm sözelcilerin %95&apos;inin önüne fırlatır. Çünkü rakiplerin matematikten tamamen kaçıyor. O boşluğu kullanan sözelci derece yapar.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sınav Salonu Taktiği: 50 Dakikan Kaldıysa Sakın Uyumaya Kalkma!
                        </h2>
                        <p>
                            AYT&apos;de süre 180 dakika ve testlerin hepsi tek kitapçıkta.
                        </p>
                        <p>
                            Diyelim ki Eşit Ağırlıkçısın. Matematik ve Edebiyat-Sosyal-1 testlerini 130 dakikada bitirdin. Masada boş boş oturup tavanı izleyen veya kafayı sıraya koyup uyuyan adaylar görüyorum. Yapma!
                        </p>
                        <p>
                            Aç arkadaki Sosyal-2 testini. Tarih-2 ve Coğrafya-2&apos;de yapabildiğin 10-15 soruyu işaretle. Bu işaretlemeler senin Eşit Ağırlık puanından tek bir kuruş bile eksiltmez. Ama tercih dönemi geldiğinde elinde canavar gibi ikinci bir Sözel puanı bulunur. İki biletle çekilişe katılmak varken niye tek biletle yetinesin?
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
