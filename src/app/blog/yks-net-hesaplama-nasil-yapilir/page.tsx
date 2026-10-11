import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import ArticleFeedback from '@/components/ArticleFeedback'
import ReadingProgress from '@/components/ReadingProgress'
import LastUpdatedBadge from '@/components/LastUpdatedBadge'

export const metadata: Metadata = {
    title: 'YKS Net Hesaplama Nasıl Yapılır? 4 Yanlış 1 Doğruyu Nasıl Götürür?',
    description: 'YKS net hesaplama mantığı, 4 yanlışın bir doğruyu silme kuralı, testlerin bağımsızlığı ve kafa karıştıran standart sapma efsanesi.',
    keywords: 'yks net hesaplama, tyt net hesaplama, 4 yanlış 1 doğruyu götürür mü, standart sapma yks, yks katsayılar 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir' },
    openGraph: {
        title: 'YKS Net Hesaplama Nasıl Yapılır? 4 Yanlış 1 Doğruyu Nasıl Götürür?',
        description: 'ÖSYM net hesaplama formülü, eksi net durumu ve test katsayılarının puana yansıması.',
        type: 'article',
        publishedTime: '2026-05-28',
        modifiedTime: '2026-08-30',
        url: 'https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir',
        images: [
            {
                url: '/images/blog/yks-net-hesaplama-nasil-yapilir.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Net Hesaplama Rehberi'
            }
        ],
    },
}

export default function YKSNetHesaplama() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <ReadingProgress />
                <BlogArticleSchema 
                    title="YKS Net Hesaplama Nasıl Yapılır? 4 Yanlış 1 Doğru Kuralı" 
                    description="YKS net hesaplama formülü, 4 yanlışın bir doğruyu götürmesi mantığı, test bazlı net dağılımı ve standart sapmanın puana etkisi."
                    datePublished="2026-05-28"
                    dateModified="2026-08-30"
                    url="https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir"
                    keywords={['yks net hesaplama', 'tyt net hesaplama', '4 yanlış 1 doğruyu götürür mü', 'standart sapma yks', 'yks katsayılar 2027']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Net Hesaplama</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-05-28">28 Mayıs 2026</time>
                            <span className="text-gray-600">• 6 dk okuma</span>
                            <LastUpdatedBadge date="2026-08-30" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS Net Hesaplama: 4 Yanlış Kuralı, Eksi Netler ve Şehir Efsaneleri
                        </h1>
                        <p className="text-xl text-gray-600">
                            Kağıt üzerinde basit bir çıkarma işlemi gibi görünse de sınav çıkışında herkesin aklını karıştıran o meşhur hesap: Sallamak mı mantıklı, boş bırakmak mı?
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-net-hesaplama-nasil-yapilir.jpg"
                        alt="YKS Net Hesaplama: 4 Yanlış Kuralı ve Puan Mantığı"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS hazırlık sürecinde deneme sınavı sonrasında optik form kontrol edilirken en çok merak edilen konulardan biri, yanlış cevapların toplam nete ve yerleştirme puanına nasıl yansıyacağıdır. Doğru ve yanlış sayılarını toplarken yapılan basit hesap hataları, adayın mevcut durumunu yanlış yorumlamasına yol açabilir.
                        </p>

                        <p>
                            ÖSYM kılavuzunda yer alan ham puan hesaplama formülü oldukça nettir. Ancak sınav stratejisi geliştirirken yanlış cevapların etkisini, testlerin bağımsızlığını ve standart sapmanın işleyişini tam olarak bilmek gerekir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Dört Yanlış Bir Doğruyu Nasıl Götürür?
                        </h2>
                        <p>
                            ÖSYM uygulamasında her bir yanlış cevap, adayın o testteki toplam doğru sayısından <strong>0,25 net</strong> eksiltir. Dört yanlış cevap bir araya geldiğinde ise adayın 1 tam doğru cevabının getirisini sıfırlar.
                        </p>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-4">
                            <p className="text-base text-blue-900 font-mono font-bold">
                                Ham Net = Doğru Sayısı − (Yanlış Sayısı ÷ 4)
                            </p>
                            <p className="text-sm text-blue-800 mt-2">
                                <strong>Örnek:</strong> TYT Türkçe testinde 34 doğru ve 6 yanlış yapan bir adayın hesabı: 6 ÷ 4 = 1,50 net düşüşü anlamına gelir. Toplam net: 34 − 1,50 = <strong>32,50 Net</strong> olarak kayda geçer.
                            </p>
                        </div>

                        <p>
                            Bu matematiksel kural nedeniyle, seçenekler arasında hiçbir mantıklı eleme yapılamayan ve tamamen rastgele işaretlenen sorular adayın net ortalamasını istatistiksel olarak aşağı çeker. Ancak iki seçenek arasında kalınan ve bilgiye dayalı eleme yapılan durumlarda soruya dönmek daha rasyonel bir yaklaşımdır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. Bir Testteki Yanlışlar Diğer Testin Netini Düşürür mü?
                        </h2>
                        <p>
                            Adayların sıkça tereddüt ettiği sorulardan biri de bir dersin yanlışlarının başka bir derse sirayet edip etmeyeceğidir:
                        </p>
                        <p>
                            <strong>Hayır.</strong> ÖSYM kılavuzu uyarınca her alt testin (Türkçe, Sosyal, Matematik, Fen) ham net hesabı birbirinden tamamen bağımsız olarak hesaplanır.
                        </p>
                        <p>
                            Örneğin Matematik testinde 3 doğru, 16 yanlış yapan bir adayın neti formül gereği 3 − (16 ÷ 4) = <strong>−1,00 net</strong> olur. Ancak bu negatif sonuç yalnızca ilgili Matematik testinin ham puanını 0 olarak belirler; kesinlikle adayın başarılı olduğu Türkçe (örneğin 35 net) ya da Sosyal netlerinden düşülmez. Her ders kendi ham net sınırları içinde değerlendirilir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. Soru Bazlı Standart Sapma Efsanesi ve Gerçek Hesaplama
                        </h2>
                        <p>
                            Öğrenciler arasında yaygın olan bir diğer yanlış inanış, &ldquo;zor soruların daha fazla puan getirdiği&rdquo; algısıdır.
                        </p>
                        <p>
                            <strong>ÖSYM soru bazlı değil, test bazlı standart sapma uygular.</strong>
                        </p>
                        <p>
                            Aynı test içerisindeki tüm sorular ham net bakımından eşit değere sahiptir (+1,00 net). Örneğin TYT Matematik testindeki ilk temel kavram sorusu ile son kısımdaki zorlu bir geometri sorusunun test içi net getirisi tamamen aynıdır. 
                        </p>
                        <p>
                            Standart sapma şu şekilde çalışır: ÖSYM, o yıl sınava giren tüm adayların bir testteki ortalamasını ve standart sapmasını hesaplar; ardından adayların ham netlerini standart puanlara dönüştürür. Türkiye ortalaması düşük olan bir testte (örneğin Matematik veya Fen) yapılan her netin ağırlıklı puan katkısı, ortalaması daha yüksek olan testlere göre biraz daha fazla puan üretebilir. Ancak bu durum tekil sorulara değil, testin tamamına yansır. Dolayısıyla sınav esnasında tek bir soruyla inatlaşmak yerine kolay ve orta düzey soruları firesiz toplamak her zaman en verimli taktiği oluşturur.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. TYT Alt Testlerinin Yaklaşık Puan Katsayıları
                        </h2>
                        <p>
                            Aşağıdaki tablo, son yılların resmi ÖSYM YKS Değerlendirme Raporları ve sınav kılavuzlarındaki standart puan dönüşümleri referans alınarak derlenmiştir:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead className="bg-gray-100 text-gray-800 text-sm">
                                    <tr>
                                        <th className="p-3 border">Test Adı</th>
                                        <th className="p-3 border">Soru Sayısı</th>
                                        <th className="p-3 border">1 Netin Yaklaşık Katkısı</th>
                                        <th className="p-3 border">Açıklama</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">TYT Türkçe</td>
                                        <td className="p-3 border">40</td>
                                        <td className="p-3 border text-blue-700 font-bold">~1,32 - 1,34 Puan</td>
                                        <td className="p-3 border text-gray-600">Okuma hızı ve paragraf hakimiyeti belirleyicidir.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">TYT Matematik</td>
                                        <td className="p-3 border">40</td>
                                        <td className="p-3 border text-blue-700 font-bold">~1,33 - 1,35 Puan</td>
                                        <td className="p-3 border text-gray-600">Ortalaması düşük olduğu için sıralamada yüksek getiri sağlar.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">TYT Sosyal Bilimler</td>
                                        <td className="p-3 border">20</td>
                                        <td className="p-3 border text-blue-700 font-bold">~1,35 - 1,37 Puan</td>
                                        <td className="p-3 border text-gray-600">Tarih, Coğrafya, Felsefe ve Din kültürü sorularını kapsar.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">TYT Fen Bilimleri</td>
                                        <td className="p-3 border">20</td>
                                        <td className="p-3 border text-blue-700 font-bold">~1,36 - 1,38 Puan</td>
                                        <td className="p-3 border text-gray-600">Fizik, Kimya ve Biyoloji temel kazanımlarından oluşur.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-500 italic">
                            *Kaynak: ÖSYM YKS Sayısal Bilgiler ve Değerlendirme Raporları (2022–2025 dönemi analizleri). Katsayılar her yıl sınava katılan adayların genel başarı ortalaması ve standart sapmasına göre küsurat düzeyinde güncellenir.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Hemen Kendi Netlerini Hesapla</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Kağıt kalemle uğraşma. Doğru ve yanlışlarını gir; 4 yanlış 1 doğru kuralına ve güncel ÖSYM katsayılarına göre puanını saniyeler içinde hesaplayalım.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Puan ve Sıralama Hesaplayıcıyı Aç →
                            </Link>
                        </div>
                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
