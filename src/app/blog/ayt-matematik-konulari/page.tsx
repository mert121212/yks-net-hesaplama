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
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-purple-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Konu</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Soru Sayısı</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Durum ve Tavsiyem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Fonksiyonlar (Bileşke, Ters, Parçalı)</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3">Her şeyin temeli. Bunu bilmeden türev yapılamaz.</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Polinomlar ve 2. Derece Denklemler</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3">Bölme algoritması ve kök bulma mutlaka sorulur.</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Parabol ve Eşitsizlik Sistemleri</td><td className="px-5 py-3 text-center font-bold">2</td><td className="px-5 py-3">Grafik okuma yeteneği çok önemli burada.</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium text-green-800 font-bold">Logaritma</td><td className="px-5 py-3 text-center font-bold text-green-700">2 - 3</td><td className="px-5 py-3 text-green-700 font-bold">Kolay. 4-5 formülü bil, garanti 2-3 net.</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium text-green-800 font-bold">Diziler (Aritmetik ve Geometrik)</td><td className="px-5 py-3 text-center font-bold text-green-700">1 - 2</td><td className="px-5 py-3 text-green-700 font-bold">Kolay. Genelde klasik soru tipi çıkar.</td></tr>
                                    <tr className="border-b bg-yellow-50"><td className="px-5 py-3 font-bold text-amber-900">TRİGONOMETRİ</td><td className="px-5 py-3 text-center font-bold text-amber-800 text-lg">4 - 5</td><td className="px-5 py-3 text-amber-800 font-bold">40 sorunun %12&apos;si. Yarım açı ve ters trigonometrik fonksiyonlar sık çıkıyor.</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Limit ve Süreklilik</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3">Türev&apos;in ön koşulu. Belirsizlik durumlarını çok iyi bil.</td></tr>
                                    <tr className="border-b bg-red-50"><td className="px-5 py-3 font-bold text-red-900">TÜREV</td><td className="px-5 py-3 text-center font-bold text-red-700 text-lg">4 - 5</td><td className="px-5 py-3 text-red-700 font-bold">En zor bölüm. Geometrik yorum, maksimum-minimum, ilişkili oranlar.</td></tr>
                                    <tr className="border-b bg-red-50"><td className="px-5 py-3 font-bold text-red-900">İNTEGRAL</td><td className="px-5 py-3 text-center font-bold text-red-700 text-lg">4 - 5</td><td className="px-5 py-3 text-red-700 font-bold">Belirli integral ve alan hesabı her sene çıkıyor. İntegral bilmeyenin SAY yapması çok zor.</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Permütasyon, Kombinasyon, Olasılık</td><td className="px-5 py-3 text-center font-bold">2</td><td className="px-5 py-3">Genelde 1&apos;i kolay 1&apos;i zor olur.</td></tr>
                                    <tr className="bg-blue-50"><td className="px-5 py-3 font-bold text-blue-900">GEOMETRİ ve ANALİTİK GEOMETRİ</td><td className="px-5 py-3 text-center font-bold text-blue-800 text-lg">9 - 10</td><td className="px-5 py-3 text-blue-800 font-bold">Derece yaptıran kısım. Analitik geometri formüllerini çok iyi bil.</td></tr>
                                </tbody>
                            </table>
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
