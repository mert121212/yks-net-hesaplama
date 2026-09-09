import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import InteractiveOBPCalculator from '@/components/InteractiveOBPCalculator'

export const metadata: Metadata = {
    title: 'OBP Nedir ve Nasıl Hesaplanır? Kırık OBP ve Katsayı Analizi 2027',
    description: 'YKS OBP hesaplama formülü, diploma notunun yerleştirme puanına etkisi, kırık OBP cezası ve okul birinciliği kontenjanı hakkında kapsamlı uzman rehberi.',
    keywords: 'obp nedir, obp nasıl hesaplanır, obp hesaplama, kırık obp, diploma notu yks, okul birinciliği kontenjanı, yks yerleştirme puanı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/obp-hesaplama' },
    openGraph: {
        title: 'OBP Nedir ve Nasıl Hesaplanır? Lise Diploma Notunun YKS\'ye Etkisi',
        description: 'Diploma notu sıralamanızı nasıl etkiler? Kırık OBP cezası, katsayı hesaplama ve gerçek sıralama simülasyonları.',
        type: 'article',
        publishedTime: '2026-02-24',
        modifiedTime: '2026-02-27',
        url: 'https://yksnethesapla.com/blog/obp-hesaplama',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'OBP Nedir ve Nasıl Hesaplanır? Kırık OBP Rehberi'
            }
        ],
    },
}

export default function OBPHesaplamaRehberi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="OBP Nedir ve Nasıl Hesaplanır? Kırık OBP ve Katsayı Analizi 2027" 
                    description="YKS OBP hesaplama formülü, diploma notunun yerleştirme puanına etkisi, kırık OBP cezası ve okul birinciliği kontenjanı hakkında kapsamlı uzman rehberi."
                    datePublished="2026-02-24"
                    dateModified="2026-02-27"
                    url="https://yksnethesapla.com/blog/obp-hesaplama"
                    keywords={['obp nedir', 'obp nasıl hesaplanır', 'obp hesaplama', 'kırık obp', 'diploma notu yks', 'okul birinciliği kontenjanı']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">OBP Hesaplama Rehberi</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-24">24 Şubat 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            OBP (Diploma Notu) Sıralamanızı Nasıl Değiştirir? Kırık OBP ve Katsayı Analizi
                        </h1>
                        <p className="text-xl text-gray-600">
                            Aynı netleri yapan iki adaydan biri hayalindeki fakülteye girerken diğeri neden 20 bin kişi geriye düşer? Ortaöğretim Başarı Puanının matematiksel anatomisi ve kırık OBP kuralı.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS hazırlık sürecinde adayların neredeyse tamamı enerjisini TYT ve AYT netlerini artırmaya odaklar. Ancak temmuz ayında ÖSYM sonuç belgesi ekranda belirdiğinde, birçok öğrencinin ham sıralaması ile yerleştirme sıralaması arasında şaşırtıcı bir fark oluşur. Bir adayın ham puan sıralamasında 42.000&apos;inci iken, yerleştirme sıralamasında 58.000&apos;e gerilemesinin temel sebebi <strong>Ortaöğretim Başarı Puanı (OBP)</strong> faktörüdür.
                        </p>
                        
                        <p>
                            OBP, yalnızca geçmişte alınmış notların bir dökümü değildir; sınav salonuna girmeden önce hanenize yazılan hazır bir puan sermayesidir. Bu rehberde OBP&apos;nin tam hesaplama formülünü, katsayı etkisini, kırık OBP kuralını ve sıralamanızı korumak için alabileceğiniz somut önlemleri inceliyoruz.
                        </p>

                        <InteractiveOBPCalculator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            OBP Nedir ve ÖSYM Tarafından Nasıl Hesaplanır?
                        </h2>
                        <p>
                            Ortaöğretim Başarı Puanı (OBP), adayın 9, 10, 11 ve 12. sınıftaki yıl sonu başarı notlarının aritmetik ortalaması olan lise diploma notunun ÖSYM standart puanlama sistemine dönüştürülmüş halidir.
                        </p>
                        <p>
                            Hesaplama süreci iki aşamalı bir matematiksel işlemden oluşur:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2 mb-4">
                            <li><strong>OBP Dönüşümü:</strong> Lise diploma notunuz (en düşük 50, en yüksek 100) doğrudan 5 katsayısıyla çarpılarak 250 ile 500 aralığında bir OBP değerine dönüştürülür.</li>
                            <li><strong>Yerleştirme Katkısı:</strong> Elde edilen bu OBP değeri, genel yerleştirme katsayısı olan <strong>0,12</strong> ile çarpılarak ham YKS puanınıza eklenir.</li>
                        </ol>

                        <div className="bg-slate-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-6">
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Pratik Hesaplama Formülü</h3>
                            <p className="text-sm text-slate-700 mb-2">
                                <code>OBP Katkı Puanı = Diploma Notu × 5 × 0,12 = <strong>Diploma Notu × 0,6</strong></code>
                            </p>
                            <p className="text-sm text-slate-600">
                                Kısaca diploma notunuzu doğrudan <strong>0,6</strong> ile çarparak YKS yerleştirme puanınıza eklenecek tam puanı bulabilirsiniz.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Diploma Notunun Sıralamaya Etkisi: Somut Örnekler
                        </h2>
                        <p>
                            ÖSYM yerleştirme puanında tavan ek puan 60&apos;tır (100 × 0,6 = 60 puan). Taban diploma notu olan 50 için bu katkı 30 puandır. Aradaki 30 puanlık makas, sınavdaki net karşılığı açısından devasa bir fark yaratır.
                        </p>
                        
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                                <thead className="bg-gray-100 text-gray-800">
                                    <tr>
                                        <th className="py-3 px-4 text-left font-semibold border-b">Diploma Notu</th>
                                        <th className="py-3 px-4 text-center font-semibold border-b">OBP Değeri (×5)</th>
                                        <th className="py-3 px-4 text-center font-semibold border-b">YKS Katkı Puanı (×0,12)</th>
                                        <th className="py-3 px-4 text-left font-semibold border-b">Eşdeğer AYT Matematik Neti</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-gray-700">
                                    <tr>
                                        <td className="py-3 px-4 font-bold text-red-600">65 (Düşük)</td>
                                        <td className="py-3 px-4 text-center">325</td>
                                        <td className="py-3 px-4 text-center font-bold">39,00 puan</td>
                                        <td className="py-3 px-4">Referans Noktası</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-3 px-4 font-bold text-amber-600">75 (Orta)</td>
                                        <td className="py-3 px-4 text-center">375</td>
                                        <td className="py-3 px-4 text-center font-bold">45,00 puan</td>
                                        <td className="py-3 px-4 text-green-700 font-semibold">+2 AYT Neti değerinde (+6 puan)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-bold text-blue-600">85 (İyi)</td>
                                        <td className="py-3 px-4 text-center">425</td>
                                        <td className="py-3 px-4 text-center font-bold">51,00 puan</td>
                                        <td className="py-3 px-4 text-green-700 font-semibold">+4 AYT Neti değerinde (+12 puan)</td>
                                    </tr>
                                    <tr className="bg-green-50">
                                        <td className="py-3 px-4 font-bold text-green-700">95 (Çok İyi)</td>
                                        <td className="py-3 px-4 text-center">475</td>
                                        <td className="py-3 px-4 text-center font-bold">57,00 puan</td>
                                        <td className="py-3 px-4 text-green-700 font-semibold">+6 AYT Neti değerinde (+18 puan)</td>
                                    </tr>
                                    <tr className="bg-emerald-100">
                                        <td className="py-3 px-4 font-bold text-emerald-800">100 (Tam Puan)</td>
                                        <td className="py-3 px-4 text-center">500</td>
                                        <td className="py-3 px-4 text-center font-bold">60,00 puan</td>
                                        <td className="py-3 px-4 text-emerald-800 font-bold">+7 AYT Neti değerinde (+21 puan)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Yukarıdaki tablodan görüleceği üzere, diploma notu 95 olan bir aday, diploma notu 65 olan bir rakibine göre sınava başlamadan önce tam <strong>18 puan</strong> öndedir. AYT Matematikte 1 netin yaklaşık 3 puan getirdiği düşünülürse, bu fark sınavda 6 tane eksiksiz AYT Matematik sorusu çözmeye denktir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Kırık OBP (Puan Kesintisi) Nedir? Kimleri Kapsar?
                        </h2>
                        <p>
                            YKS kılavuzunda yer alan en kritik kurallardan biri <strong>puan kırılması</strong> mekanizmasıdır. Amaç, üniversite kontenjanlarının verimli kullanılmasını sağlamak ve yerleştiği halde kayıt yaptırmayan adayların oluşturduğu mağduriyeti sınırlamaktır.
                        </p>
                        <p>
                            Eğer bir önceki yıl YKS merkezi yerleştirmesinde bir lisans veya ön lisans programına yerleştiyseniz (kayıt yaptırmış olun veya olmayın), ertesi yıl YKS&apos;ye girdiğinizde OBP katsayınız <strong>0,12 yerine 0,06</strong> olarak uygulanır.
                        </p>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-6">
                            <h3 className="font-bold text-red-900 mb-2">Kırık OBP&apos;nin Maliyeti</h3>
                            <p className="text-sm text-red-800 mb-3">
                                Diploma notunuz 90 ise normalde alacağınız katkı <strong>54 puandır</strong> (90 × 0,6). OBP kırıldığında bu katkı yarı yarıya düşerek <strong>27 puana</strong> iner.
                            </p>
                            <p className="text-sm text-red-900 font-semibold">
                                Kaybedilen 27 puan, orta ve üst yığılma bandında adayı tek bir hamlede 35.000 ile 60.000 kişi arasında geriye itebilir.
                            </p>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Hangi Durumlarda OBP Kırılır?</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li><strong>ÖSYM tercih listesiyle bir bölüme yerleştiyseniz:</strong> İster örgün, ister ikinci öğretim, ister açıköğretimin kontenjanlı bir programı olsun; yerleştiğiniz an kayıt yaptırmasanız dahi ertesi yıl OBP yarıya düşer.</li>
                            <li><strong>Özel yetenek sınavıyla bir programa kayıt yaptırdıysanız:</strong> Kayıt yapıldığı takdirde ertesi yıl OBP katsayısı kırılır.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Hangi Durumlarda OBP Kırılmaz?</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Tercih yaptınız ancak hiçbir programa yerleşemediyseniz katsayı kırılmaz.</li>
                            <li>Sınava girdiniz ancak hiç tercih bildiriminde bulunmadıysanız katsayı kırılmaz.</li>
                            <li>Bir programa yerleşmenizin üzerinden <strong>2 yıl</strong> geçmişse OBP normale döner (Örn. 2025&apos;te yerleşen adayın puanı 2026&apos;da kırılır, 2027&apos;de tekrar tam katsayıyla hesaplanır).</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Okul Birinciliği Kontenjanı Avantajı
                        </h2>
                        <p>
                            Liseden mezun olduğu yıl okul birincisi olan öğrenciler için devlet üniversitelerinde özel bir kontenjan ayrılır. Bu kontenjan sayesinde aday, genel kontenjan taban puanından daha düşük bir puanla o bölüme yerleşme şansı elde eder.
                        </p>
                        <p>
                            Ancak dikkat edilmesi gereken hayati bir kural vardır: <strong>Okul birinciliği hakkı yalnızca mezun olunan yıl geçerlidir.</strong> Bir sonraki yıl mezuna kalındığında bu ayrıcalık sona erer ve aday genel kontenjandan yarışır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Adaylar İçin Stratejik Yol Haritası
                        </h2>
                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h4 className="font-bold text-blue-900 mb-1">1. Hâlâ Lisede Okuyanlar (9, 10, 11 ve 12. Sınıflar):</h4>
                                <p className="text-sm text-gray-700">
                                    Yazılı sınavları asla ihmal etmeyin. Seçmeli dersler ve sözlü notları da dahil olmak üzere her bir puan, genel ortalamanızı yukarı taşır. Diploma notunuzu 80&apos;den 90&apos;a çıkarmak, sınavda fazladan 2-3 matematik sorusu çözmekle eşdeğerdir.
                                </p>
                            </div>
                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h4 className="font-bold text-amber-900 mb-1">2. Mezun Adaylar:</h4>
                                <p className="text-sm text-gray-700">
                                    Diploma notunuz artık değiştirilemez bir sabittir. Eğer lise ortalamanız düşükse, bunu kapatmanın tek yolu net hedeflerinizi rakiplerinizden 4-6 net daha yukarıda belirlemektir. Gerçekçi bir çalışma planıyla bu farkı rahatlıkla kapatabilirsiniz.
                                </p>
                            </div>
                            <div className="p-5 bg-red-50 border border-red-200 rounded-xl">
                                <h4 className="font-bold text-red-900 mb-1">3. Tercih Yapacaklar:</h4>
                                <p className="text-sm text-gray-700">
                                    Kesinlikle gitmeyi düşünmediğiniz hiçbir üniversite veya bölümü tercih listenize eklemeyin. &quot;Açıkta kalmayayım&quot; düşüncesiyle yazılan bir program, yerleşmeniz durumunda ertesi yıl 25-30 puanlık OBP kaybına yol açarak hazırlık sürecinizi sekteye uğratabilir.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Diploma Notunuzun Sıralamanıza Etkisini Görün</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                Hesaplama motorumuza diploma notunuzu ve kırık OBP durumunuzu girerek yerleştirme puanınızın ve tahmini sıralamanızın nasıl değiştiğini anında simüle edin.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                OBP ile Sıralama Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Rehberler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">1 Net Kaç Kişi Öne Atar? →</p>
                                    <p className="text-xs text-gray-600 mt-1">Yığılma bölgelerinde tek bir netin sıralama çarpanı analizi.</p>
                                </Link>
                                <Link href="/blog/universite-tercih-stratejileri" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">Üniversite Tercih Stratejileri →</p>
                                    <p className="text-xs text-gray-600 mt-1">Ölü tercih yapmadan 24 tercih hakkını dengeli kullanma rehberi.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
