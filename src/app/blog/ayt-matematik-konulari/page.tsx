import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

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
        modifiedTime: '2026-08-19',
        url: 'https://yksnethesapla.com/blog/ayt-matematik-konulari',
    },
}

export default function AYTMatematikKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
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
                            <time className="text-gray-600">19 Ağustos 2026</time>
                            <span className="text-gray-600">• 14 dk okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            AYT Matematik: LTİ ve Trigonometri&apos;yi Çözen Sınavı Çözer
                        </h1>
                        <p className="text-xl text-gray-600">
                            SAY ilk 50 bine girmek isteyen herkesin geçmesi gereken kapı burası. AYT Matematik&apos;te 25 netin altında kalırsan o kapı açılmaz. Gel beraber plan yapalım.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Bir gerçeği söylemem lazım ve bu birçok öğrencinin duymak istemediği bir gerçek: TYT&apos;de 100 net bile yapsan, AYT Matematik netin 15&apos;in altındaysa ilk 50 bine giremezsin. Sayısal da Eşit Ağırlık da fark etmez. Yerleştirme puanının %60&apos;ı AYT&apos;den geldiği için ve AYT içinde de en ağır katsayıya sahip test Matematik olduğu için, bu testteki performansın her şeyi belirliyor.
                        </p>

                        <p>
                            Ama güzel haber şu: AYT&apos;de süre sorunu yaşamıyorsun. TYT&apos;de soru başına 82 saniye düşerken, AYT&apos;de soru başına 4.5 dakikan var. Rahat rahat düşünebilirsin. Burada mesele hız değil, bilgi derinliği. Formülü ezberleyip geçenler ilk zor soruda eleniyor, mantığını kavrayanlar ise 35 netin üstüne çıkıyor.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            AYT Matematik Soru Dağılımı
                        </h2>
                        <p>
                            Bu tabloyu çok iyi incele. Çünkü çalışma planını bu tabloya göre kurman lazım. Hangi konudan kaç soru geliyor, hangisi kolay hangisi zor, hepsini yazdım:
                        </p>
                        <div className="bg-slate-50 rounded-xl p-6 my-6 border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-4 text-lg">Konulara Göre Ortalama Soru Sayıları</h3>
                            <div className="space-y-4">
                                <p className="text-slate-700"><strong>Fonksiyonlar (2-3 Soru):</strong> Her şeyin temeli. Bunu bilmeden türev yapılamaz. Bileşke, ters, parçalı fonksiyonları sular seller gibi bilmelisin.</p>
                                <p className="text-slate-700"><strong>Polinomlar ve 2. Derece Denklemler (2-3 Soru):</strong> Bölme algoritması ve kök bulma mantığı mutlaka sorulur.</p>
                                <p className="text-slate-700"><strong>Parabol ve Eşitsizlik Sistemleri (2 Soru):</strong> Grafik okuma yeteneğinin en çok test edildiği yer burası.</p>
                                <p className="text-slate-700"><strong>Logaritma (2-3 Soru):</strong> Kolay kısımdır. Sadece 4-5 tane kuralı var. Kuralı bilen, soruyu alır.</p>
                                <p className="text-slate-700"><strong>Diziler (1-2 Soru):</strong> Aritmetik ve geometrik diziler genelde klasik soru tipleriyle gelir. Kaçırmaman lazım.</p>
                                <p className="text-slate-700"><strong>Trigonometri (4-5 Soru):</strong> İşte geldik kırılma noktasına. Sınavın tam yüzde 12'si buradan çıkıyor. Yarım açı ve ters trigonometrik fonksiyonları çok sık soruyorlar.</p>
                                <p className="text-slate-700"><strong>Limit ve Süreklilik (2-3 Soru):</strong> Türevin ön hazırlığıdır. Belirsizlik durumlarını iyi öğrenmelisin.</p>
                                <p className="text-slate-700"><strong>Türev (4-5 Soru):</strong> Sınavın en baba konusudur. Geometrik yorum, maksimum-minimum problemleri ve ilişkili oranlar her sene can yakar.</p>
                                <p className="text-slate-700"><strong>İntegral (4-5 Soru):</strong> Belirli integral ve alan hesabı mutlaka var. İntegral yapamayan birinin sayısalda üst sıralara oynaması çok zordur.</p>
                                <p className="text-slate-700"><strong>Geometri ve Analitik (9-10 Soru):</strong> Sana dereceyi getirecek olan asıl kısım budur. Formülleri mantığıyla anlarsan inanılmaz rahat edersin.</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            LTİ Hakkında Gerçekçi Konuşalım
                        </h2>
                        <p>
                            LTİ dediğimiz üçlü (Limit, Türev, İntegral) toplamda 10 ila 13 soru getiriyor. Trigonometriyi de eklersen 14-18 soru. Yani 40 sorunun neredeyse yarısı sadece bu 4 konudan çıkıyor. LTİ bilmeyen birinin AYT Matematik&apos;te 20 netin üstüne çıkması matematiksel olarak neredeyse olanaksız.
                        </p>

                        <p>
                            Ama LTİ&apos;ye direkt dalma. Sırayla git: Önce Fonksiyonları tam oturt. Fonksiyon grafiği okuyamayan birinin Türev&apos;de &quot;geometrik yorum&quot; sorusunu çözmesi mümkün değil. Sonra Logaritma ve Diziler&apos;i hallet (bunlar kolay, cebine koy). Sonra Trigonometri. En son Limit → Türev → İntegral sırasıyla ilerle.
                        </p>

                        <p>
                            Ben öğrencilerime genelde şöyle bir takvim veriyorum: Eylül-Kasım arası Fonksiyon, Polinom, Parabol ve Trigonometri. Aralık-Şubat arası Limit, Türev, İntegral. Mart-Mayıs arası soru bankası ve deneme. Bu takvim yüzlerce öğrencide işe yaradı.
                        </p>

                        <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-lg my-6">
                            <h3 className="font-bold text-purple-900 mb-2">Analitik Geometriyi Hafife Alma</h3>
                            <p className="text-gray-700 text-sm">
                                AYT Geometri&apos;de Noktanın Analitiği, Doğrunun Analitiği ve Çemberin Analitiği konularından her sene toplam 3-4 soru geliyor. Bu konular formül ağırlıklı, ezberle ama mantığını da anla. Mesela iki nokta arası uzaklık formülünü biliyorsan, noktanın doğruya uzaklığı formülü de zaten aynı mantıkla türetiliyor. Bunu anlayan öğrenci formül ezberlemeden 4 soruyu da yapar.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">AYT Matematik Netlerini Puana Çevir</h3>
                            <p className="text-blue-100 mb-6">
                                AYT Matematik netlerinin SAY ve EA puanlarına ne kadar katkı yaptığını hemen gör.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Hemen Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Devamını oku</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-matematik-konulari" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">TYT Matematik Rehberi →</p>
                                    <p className="text-xs text-gray-600 mt-1">Temel kavramlar ve problem çözme taktikleri.</p>
                                </Link>
                                <Link href="/blog/ayt-puan-hesaplama" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">AYT Puan Hesaplama →</p>
                                    <p className="text-xs text-gray-600 mt-1">SAY, EA ve SÖZ katsayıları nasıl işliyor?</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
