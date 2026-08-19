import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'TYT Matematik Konuları ve Soru Dağılımı 2027 | Çalışma Rehberi',
    description: 'TYT Matematik konuları, soru dağılımları ve seviyene göre çalışma planı. Problemler, geometri ve temel kavramlar detaylı analizi.',
    keywords: 'tyt matematik konuları, tyt matematik soru dağılımı, tyt matematik nasıl çalışılır, yks matematik 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-matematik-konulari' },
    openGraph: {
        title: 'TYT Matematik Konuları ve Soru Dağılımı 2027',
        description: 'TYT Matematik sınavında hangi konular çıkıyor? Konu dağılımı ve çalışma taktikleri.',
        type: 'article',
        publishedTime: '2026-02-19',
        modifiedTime: '2026-08-19',
        url: 'https://yksnethesapla.com/blog/tyt-matematik-konulari',
    },
}

export default function TYTMatematikKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Matematik</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">TYT</span>
                            <time className="text-gray-600">19 Ağustos 2026</time>
                            <span className="text-gray-600">• 14 dk okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TYT Matematik: 40 Sorudan 30+&apos;unu Yapmanın Reçetesi
                        </h1>
                        <p className="text-xl text-gray-600">
                            Herkese aynı reçete verilmez. Şu an 10 net yapan birinin yapması gerekenlerle 25 net yapanın yapması gerekenler tamamen farklı. Gel sana özel planı çıkaralım.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Ben yıllardır öğrencilere matematik anlatıyorum ve şunu fark ettim: TYT Matematik sınavından çıkan herkes aynı şeyi söylüyor. &quot;Sorular aslında çok zor değildi ama süre yetmedi.&quot; Bu cümleyi her sene, her sınavdan sonra, yüzlerce kez duydum. Ve her seferinde aynı cevabı veriyorum: &quot;Süre yetmemesi demek, o soruyu çözmek için gereken yolu uzun yoldan gittin demek.&quot;
                        </p>

                        <p>
                            ÖSYM son 3-4 senedir TYT Matematik&apos;te çok ilginç bir şey yapıyor. Klasik &quot;x&apos;i bulun&quot; tipi işlem soruları neredeyse tamamen kalktı. Yerine bir hikaye anlatıyorlar, o hikayenin içinden denklemi kendin kurmanı bekliyorlar. Yani aslında TYT Matematik, kağıt üzerinde bir matematik sınavı ama gerçekte bir &quot;okuduğunu anlama + hızlı modelleme&quot; testi. Bunu anlamayan öğrenci saatlerce formül ezberler ama sınavda o formülleri nereye sokacağını bilemez.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Konulara Göre Soru Dağılımı — Son 5 Yılın Ortalaması
                        </h2>
                        <p>
                            Aşağıdaki tablo ÖSYM&apos;nin son 5 yıldaki TYT Matematik sorularını analiz ederek çıkardığım ortalama dağılım. Her sene 1-2 soru oynayabilir ama genel tablo bu şekilde:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Konu</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Ortalama Soru</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Benim Yorumum</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-red-50"><td className="px-5 py-3 font-bold text-red-900">Problemler (Sayı, Kesir, Yaş, İşçi, Hız, Yüzde, Kar-Zarar, Karışım)</td><td className="px-5 py-3 text-center font-bold text-red-700 text-lg">12 - 14</td><td className="px-5 py-3 text-red-700 font-bold">Sınavın kalbi. Bunu yapan sınavı yapar.</td></tr>
                                    <tr className="border-b bg-blue-50"><td className="px-5 py-3 font-bold text-blue-900">Geometri (Üçgen, Dörtgen, Çember, Alan-Çevre, Katı Cisim)</td><td className="px-5 py-3 text-center font-bold text-blue-800 text-lg">9 - 10</td><td className="px-5 py-3 text-blue-700 font-bold">Fark yaratan bölüm. 25 net üstü buradan gelir.</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Temel Kavramlar, Sayı Basamakları, Bölünebilme, EBOB-EKOK</td><td className="px-5 py-3 text-center font-bold">4 - 5</td><td className="px-5 py-3">Temel taşlar. Bunlar olmadan problem çözülmez.</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Üslü ve Köklü İfadeler</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3 text-green-700">Kolay, kısa sürede hallolur. Garanti net.</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Rasyonel Sayılar, Basit Eşitsizlikler</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3 text-green-700">Bunları da cebine koy.</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Mutlak Değer</td><td className="px-5 py-3 text-center font-bold">1 - 2</td><td className="px-5 py-3 text-orange-700">Tuzaklı çıkabiliyor. Dikkatli ol.</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Kümeler, Mantık</td><td className="px-5 py-3 text-center font-bold">2</td><td className="px-5 py-3 text-green-700">Formülleri bilince rahat.</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Fonksiyonlar</td><td className="px-5 py-3 text-center font-bold">1 - 2</td><td className="px-5 py-3">AYT için de köprü.</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Veri, İstatistik, Sayma</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3 text-green-700">Grafik okuma soruları genelde kolay olur.</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Permütasyon, Kombinasyon, Olasılık</td><td className="px-5 py-3 text-center font-bold">2</td><td className="px-5 py-3 text-red-600">Zor çıkıyor. Eleme sorusu.</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Tabloya bak, bir gerçek göreceksin: 40 sorunun 22-24 tanesi sadece <strong>Problemler ve Geometri</strong>&apos;den geliyor. Bu iki konuyu halleden biri, diğer konulardan hiçbir şey bilmese bile 22-24 net yapabilir. Ve 22-24 TYT Matematik neti seni sıralamada ciddi bir yere koyar.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Seviyene Göre Ne Yapmalısın?
                        </h2>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">Şu an 0-10 net yapıyorsan:</h3>
                        <p>
                            Dürüst olacağım: Sorunun soru çözmemekle alakası yok, sorunun temel işlem becerileriyle alakası. Çarpma tablosunda takılıyorsan, kesirlerde zorlanıyorsan, negatif sayılarla işlem yaparken kafan karışıyorsan — problem çözmeye geçmeden önce bunları düzeltmen lazım. Hayır, bu utanılacak bir şey değil. Birçok öğrenci 8. sınıf matematiğini bile tam oturtamadan YKS&apos;ye hazırlanmaya çalışıyor ve tabii ki tıkanıyor.
                        </p>
                        <p>
                            Reçetem: Her gün 50 tane kolay seviye problem çöz. Evet, 50 tane. &quot;Çok fazla&quot; deme, bunlar kolay sorular, toplamda 1 saat bile sürmez. İşlem hızını artırmak için yapıyorsun bunu. 3 hafta sonra farkı göreceksin.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">10-20 net arasındaysan:</h3>
                        <p>
                            Temelin var ama problemlerde denklem kurma aşamasında tıkanıyorsun muhtemelen. Çoğu öğrenci bu aşamada &quot;soruyu okudum, anladım, ama denklem kuramıyorum&quot; diyor. Bunun çözümü her gün en az 20 tane yeni nesil problem çözmek. Ama sadece çözmek değil — çözemediğin soruyu çözüm videosunu izlemeden önce en az 5 dakika kendin uğraş. Beynin o 5 dakikalık zorlanma esnasında yeni sinir bağlantıları kuruyor. Hemen çözüme bakarsan o bağlantı oluşmuyor.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">20-30 net yapıyorsan ve daha yukarı çıkmak istiyorsan:</h3>
                        <p>
                            Bu seviyede seni yukarı taşıyacak iki şey var: <strong>Geometri</strong> ve <strong>Süre yönetimi</strong>. Geometri&apos;de özellikle benzerlik, açıortay, çemberde teğet ve alan hesaplamaları konularına odaklan. Bu konulardan her sene mutlaka soru geliyor ve genelde &quot;ya çok iyi biliyorsun 1 dakikada çözersin, ya da hiç bilmiyorsun 5 dakika bakarsın yapamaz geçersin&quot; tipi sorular.
                        </p>
                        <p>
                            Süre yönetimi tarafında ise haftada en az 3 tane 40 soruluk branş denemesi çöz ve her birini 55 dakikada bitirmeye çalış. Sınavda sana soru başına ortalama 1 dakika 22 saniye düşüyor. Her deneme sonrası &quot;hangi soruya kaç dakika harcadım&quot; notunu tut.
                        </p>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg my-6">
                            <h3 className="font-bold text-yellow-900 mb-2">Yanlış Defteri Tutmayan Öğrenci İlerlemez</h3>
                            <p className="text-gray-700 text-sm">
                                Yaptığın her yanlışın fotoğrafını çek ya da soruyu bir deftere yapıştır. Pazar günleri o defterdeki soruları tekrar çöz. Aynı hatayı üst üste 3 kez yapıyorsan, o konuyu bilmiyorsun demektir — geri dön, konu anlatımından tekrar başla. Bu defter seni tanımanın en iyi yolu.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">TYT Matematik Netlerinin Puanına Katkısını Hesapla</h3>
                            <p className="text-blue-100 mb-6">
                                Şu anki matematik netlerin seni kaçıncı sıraya koyuyor? 5 net daha artırsan sıralaman nasıl değişir?
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Hemen Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Devamını oku</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/ayt-matematik-konulari" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">AYT Matematik Konuları →</p>
                                    <p className="text-xs text-gray-600 mt-1">Limit, Türev, İntegral ve Trigonometri rehberi.</p>
                                </Link>
                                <Link href="/blog/tyt-net-artirma-taktikleri" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    <p className="font-semibold text-green-900">TYT Net Artırma Taktikleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">60-70 net bandından nasıl çıkılır?</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
