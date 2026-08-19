import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'TYT Matematik Konuları 2027: Problemler, Geometri ve Yol Haritası',
    description: 'TYT Matematik\'te hangi konular çıkıyor? Problemler krallığı, yeni nesil geometri ve konu öncelik yol haritası. 2027 ÖSYM güncel rehber.',
    keywords: 'tyt matematik konuları, tyt matematik 2027, tyt problemler, tyt geometri, ebob ekok, yks matematik',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-matematik-konulari' },
    openGraph: {
        title: 'TYT Matematik Konuları 2027: Problemler, Geometri ve Yol Haritası',
        description: 'TYT Matematik\'te hangi konular çıkıyor? Problemler, geometri ve konu öncelik yol haritası.',
        type: 'article',
        publishedTime: '2027-02-19',
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
                        <span className="text-gray-900">TYT Matematik Konuları</span>
                    </nav>
                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">TYT</span>
                            <time className="text-gray-600">19 Şubat 2027</time>
                            <span className="text-gray-600">• 10 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TYT Matematik Konuları 2027: Problemler, Geometri ve Yol Haritası
                        </h1>
                        <p className="text-xl text-gray-700">
                            TYT Matematik = Problemler ve Hız demektir. 40 sorunun en az 12-14'ü doğrudan problem
                            sorusudur. Bu gerçeği bilerek hazırlanan adaylar, hem zamandan tasarruf eder hem de netlerini artırır.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 mt-8">
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">2027 TYT Matematikte Bizi Neler Bekliyor?</h2>
                        <p className="mb-4">
                            TYT Matematik testinde adayların en büyük şikayeti her zaman <strong>"Süre yetmedi"</strong> olmuştur. ÖSYM,
                            son yıllarda soruları zorlaştırmaktan ziyade, soruların uzunluğunu ve anlama/yorumlama süresini artırarak
                            eleme yapmaktadır. Bu nedenle TYT Matematik sadece bir bilgi testi değil, okuduğunu anlama ve hızlı
                            işlem yapma testidir.
                        </p>
                        
                        <p className="mb-6">
                            Sınava hazırlanırken çalışma masasında saatlerce uğraşıp çözdüğünüz sorular, sınav anında size puan kazandırmaz;
                            o soruları <strong>1,5 dakika altında</strong> çözebilecek pratikliğe ulaşmanız gerekir.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">2027 TYT Matematik Konu Dağılımı ve Analizi</h2>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Konu Adı</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Tahmini Soru Sayısı</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Önem Derecesi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-gray-50">
                                        <td className="px-5 py-3 font-medium">Temel Kavramlar ve Sayı Basamakları</td>
                                        <td className="px-5 py-3 text-center font-bold">3 - 4</td>
                                        <td className="px-5 py-3 text-blue-700">Yüksek (Temel atma)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-5 py-3 font-medium">Bölme, Bölünebilme, EBOB-EKOK</td>
                                        <td className="px-5 py-3 text-center font-bold">1 - 2</td>
                                        <td className="px-5 py-3 text-gray-600">Orta</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="px-5 py-3 font-medium">Rasyonel Sayılar</td>
                                        <td className="px-5 py-3 text-center font-bold">1 - 2</td>
                                        <td className="px-5 py-3 text-green-700">Garanti Net</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-5 py-3 font-medium">Basit Eşitsizlikler ve Mutlak Değer</td>
                                        <td className="px-5 py-3 text-center font-bold">2</td>
                                        <td className="px-5 py-3 text-orange-700">Önemli</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="px-5 py-3 font-medium">Üslü ve Köklü Sayılar</td>
                                        <td className="px-5 py-3 text-center font-bold">2 - 3</td>
                                        <td className="px-5 py-3 text-blue-700">Temel Bilgi</td>
                                    </tr>
                                    <tr className="border-b bg-red-50">
                                        <td className="px-5 py-3 font-medium">Çarpanlara Ayırma ve Denklem Çözme</td>
                                        <td className="px-5 py-3 text-center font-bold">2</td>
                                        <td className="px-5 py-3 text-red-700">Kritik Öneme Sahip</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="px-5 py-3 font-medium">Oran - Orantı</td>
                                        <td className="px-5 py-3 text-center font-bold">1 - 2</td>
                                        <td className="px-5 py-3 text-orange-700">Problemlerin Temeli</td>
                                    </tr>
                                    <tr className="border-b bg-red-100">
                                        <td className="px-5 py-3 font-medium font-bold text-red-900">PROBLEMLER (Tüm Çeşitler)</td>
                                        <td className="px-5 py-3 text-center font-bold text-xl text-red-900">12 - 14</td>
                                        <td className="px-5 py-3 text-red-900 font-bold">Sınavın Kalbi</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="px-5 py-3 font-medium">Kümeler, Mantık, Veri ve İstatistik</td>
                                        <td className="px-5 py-3 text-center font-bold">3 - 4</td>
                                        <td className="px-5 py-3 text-green-700">Garanti Net</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-5 py-3 font-medium">Permütasyon, Kombinasyon, Olasılık</td>
                                        <td className="px-5 py-3 text-center font-bold">2</td>
                                        <td className="px-5 py-3 text-purple-700">Zorlayıcı</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="px-5 py-3 font-medium">Geometri</td>
                                        <td className="px-5 py-3 text-center font-bold">10</td>
                                        <td className="px-5 py-3 text-orange-700">Aşırı Önemli</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
                            <h3 className="font-bold text-red-900 mb-2">🚨 Problemler İçin Özel Uyarı</h3>
                            <p className="text-gray-800">
                                TYT Matematikte 30 sorunun neredeyse yarısı Problemlerden oluşur. Problemler, bir "konu" olmaktan çıkmış,
                                tamamen bir okuduğunu anlama ve denklem kurma yeteneğine dönüşmüştür. Problemleri yapamayan bir öğrencinin
                                TYT Matematikte 20 netin üzerine çıkması imkansızdır.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">TYT Matematik İçin Başarı Stratejileri</h2>

                        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Rutin Oluşturun: Paragraf ve Problem</h3>
                        <p className="mb-4">
                            Tıpkı diş fırçalar gibi, sınava kadar her gün rutininiz olması gereken iki şey vardır: Paragraf ve Problem çözmek.
                            Her gün güne başlarken 20 Paragraf ve 20 Problem sorusu çözmek, sınav anındaki odaklanma sürenizi ve okuma
                            hızınızı muazzam derecede artıracaktır. Beyniniz her sabah bu sorularla uyanmaya alıştığında, gerçek sınav
                            sabahı da aynı performansı sergileyecektir.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. "Turlama Taktiği" Kullanın</h3>
                        <p className="mb-4">
                            Sınavda bir soruya takılıp 5 dakika uğraşmak, TYT'nin en büyük tuzağıdır. ÖSYM kasten bazı soruları çok uzun ve 
                            uğraştırıcı yapar ki, adaylar orada vakit kaybedip arka sayfalardaki çok kolay soruları göremeden sınavı bitirsin.
                        </p>
                        <p className="mb-4">
                            <strong>Çözüm:</strong> Bir soruya maksimum 1-1.5 dakika verin. Eğer çözüme giden yolu göremiyorsanız hemen
                            işaret koyup geçin. Tüm testi bitirdikten sonra (zamanınız artacağından) bu zor sorulara geri dönebilirsiniz.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Kaç Net Yapıyorsunuz?</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                Şu anki deneme netlerinizi girerek 2027 YKS Türkiye sıralamanızı ve puanınızı tahmin edin.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Sıralamanı Hesapla →
                            </Link>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Geometriyi İhmal Etmeyin</h3>
                        <p className="mb-4">
                            Birçok eşit ağırlık ve sayısal öğrencisi "Geometri yapamıyorum" diyerek 10 soruyu tamamen çöpe atar. Oysa 
                            TYT Geometri'de en az 3-4 soru sadece temel üçgen bilgisi (Pisagor, Özel Açılı Üçgenler) ile çözülebilecek 
                            basit düzeydedir. Üçgenleri çok iyi anlarsanız, çokgenler ve dörtgenlerin yarısını halletmiş olursunuz.
                            TYT Geometri yeni nesil olduğu için, katlama ve kesme sorularına bol bol pratik yapmalısınız.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Branş Denemeleri Ne Zaman Çözülmeli?</h3>
                        <p className="mb-4">
                            Eğer konuların %70'ini (özellikle Problemlere kadar olan kısmı) bitirdiyseniz, artık haftada en az 1 veya 2 kez 
                            TYT Matematik branş denemesi çözmeye başlamalısınız. Soru bankalarından soru çözerken rahatsınızdır, ancak
                            denemede konuların karmaşık olarak gelmesi ve süre baskısı gerçek performansınızı belirler. Süre tutmadan çözülen 
                            hiçbir TYT Matematik denemesi amacına ulaşmaz.
                        </p>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Önerilen Yazılar</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/ayt-matematik-konulari" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">AYT Matematik Konuları →</p>
                                    <p className="text-sm text-gray-600 mt-1">AYT Matematik stratejileri ve soru dağılımları</p>
                                </Link>
                                <Link href="/blog/tyt-kesin-cikan-konular" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">TYT'de Kesin Çıkan Konular →</p>
                                    <p className="text-sm text-gray-600 mt-1">Her yıl sekmeden sorulan garanti netlik konular</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
