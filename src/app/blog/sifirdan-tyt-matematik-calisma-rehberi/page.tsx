import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'Sıfırdan TYT Matematik Nasıl Çalışılır? Temelden 20+ Nete Yol Haritası',
    description: 'Matematik temeli olmayanlar için adım adım TYT çalışma rehberi. İşlem yeteneğinden problemlere, konu sırası, soru çözüm taktikleri ve kaynak seçimi.',
    keywords: 'sıfırdan matematik nasıl çalışılır, tyt matematik sıfırdan, matematik çalışma yöntemleri, temel matematik nasıl geliştirilir, tyt matematik 15 net',
    alternates: { canonical: 'https://yksnethesapla.com/blog/sifirdan-tyt-matematik-calisma-rehberi' },
    openGraph: {
        title: 'Sıfırdan TYT Matematik Nasıl Çalışılır: 0 Netten 20 Nete Çıkış',
        description: 'Matematik fobisini kırma rehberi: Konu sırası, işlem pratikleri ve yeni nesil soru çözme mantığı.',
        type: 'article',
        publishedTime: '2026-09-10',
        modifiedTime: '2026-09-10',
        url: 'https://yksnethesapla.com/blog/sifirdan-tyt-matematik-calisma-rehberi',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Sıfırdan TYT Matematik Çalışma Rehberi'
            }
        ],
    },
}

export default function SifirdanTytMatematikRehberi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="Sıfırdan TYT Matematik Nasıl Çalışılır? Temelden 20+ Nete Yol Haritası" 
                    description="Matematik temeli olmayanlar için adım adım TYT çalışma rehberi. İşlem yeteneğinden problemlere, konu sırası, soru çözüm taktikleri ve kaynak seçimi."
                    datePublished="2026-09-10"
                    dateModified="2026-09-10"
                    url="https://yksnethesapla.com/blog/sifirdan-tyt-matematik-calisma-rehberi"
                    keywords={['sıfırdan matematik nasıl çalışılır', 'tyt matematik sıfırdan', 'matematik çalışma yöntemleri', 'temel matematik nasıl geliştirilir', 'tyt matematik 15 net']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Sıfırdan TYT Matematik Rehberi</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">TYT Matematik</span>
                            <time className="text-gray-600" dateTime="2026-09-10">10 Eylül 2026</time>
                            <span className="text-gray-600">• 12 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Sıfırdan TYT Matematik: 0 Netten 20 Nete Çıkma Rehberi
                        </h1>
                        <p className="text-xl text-gray-600">
                            Matematik yeteneği diye bir şey yok. Doğru sırayla, doğru seviyeden başlayınca 0-3 netten 15-20 nete çıkmak gayet mümkün. Burada nasıl yapılacağını anlattım.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Geçen sene bir öğrencim vardı, deneme sonucu TYT Matematik: 2 doğru, 14 yanlış. &quot;Ben matematik yapamam artık&quot; diyordu. Haziran&apos;da sınava girdi, 19 net yaptı.
                        </p>

                        <p>
                            Tek fark şuydu: 9. sınıf matematiğindeki delikleri kapatmadan 11. sınıf konularına dalıyordu. Temel yokken üst konu yapılmaz. Sıralama düzeltilince netler de geldi.
                        </p>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg text-amber-950 text-sm my-6">
                            <strong>Yaygın hata:</strong> Arkadaşın ileri seviye soru bankası veriyor, açıyorsun, ilk testte 3 soruyu bile yapamıyorsun. Kitabı kapatıyorsun. Sorun sende değil — o kitap senin seviyene uygun değil.
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sıfırdan Başlayanların Yaptığı 3 Hata
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                            1. Video İzleyip &quot;Anladım&quot; Demek
                        </h3>
                        <p>
                            Hocanın çözüm videosunu izliyorsun. Adam x&apos;i öbür tarafa atıyor, çarpanlarına ayırıyor, cevap C. Sen kafanla onaylıyorsun. Sonra kitabı açıyorsun, benzer soruyu çözmeye çalışıyorsun — hiçbir şey gelmiyor.
                        </p>
                        <p>
                            Çünkü izlemek ile çözmek farklı. Kalemi eline almadan, kağıdı karalamadan matematik öğrenilmez.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                            2. İlk Hafta &quot;Yeni Nesil&quot; Soruya Dalmak
                        </h3>
                        <p>
                            ÖSYM hikayeli, uzun metinli sorular soruyor — doğru. Ama <em>2x + 5 = 17</em> denklemini refleks gibi çözemiyorsan o 8 satırlık problemin karşısında donarsın. Önce klasik, sonra yeni nesil.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                            3. &quot;Günde 100 Soru&quot; Hedefi
                        </h3>
                        <p>
                            Temeli sıfır olan biri 80 soru çözmeye kalkarsa 3 gün dayanır, 4. gün bırakır. Başlangıçta <strong>15 soru yeter</strong> — ama o 15 soruyu anlayarak çöz, neden yanlış yaptığını analiz et. Göz ucuyla geçiştirilmiş 70 soru, dikkatlice çözülmüş 15 sorunun yanında bir şey ifade etmez.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Konu Sırası
                        </h2>

                        <p>
                            Matematik birikimli bir ders. Her konu bir öncekinin üstüne biner. Rasyonel sayıları bilmeden mutlak değer yapılmaz, çarpanlara ayırmayı öğrenmeden fonksiyon çözülmez. &quot;En çok soru çıkan konudan başlayım&quot; deme, sırayı takip et.
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead className="bg-gray-100 text-gray-800 text-sm">
                                    <tr>
                                        <th className="p-3 border">Aşama</th>
                                        <th className="p-3 border">Konular</th>
                                        <th className="p-3 border">Hedef Net</th>
                                        <th className="p-3 border">Süre</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">1. İşlem Temeli</td>
                                        <td className="p-3 border">Dört işlem, işaret kuralları, harfli ifadeler, basit denklem</td>
                                        <td className="p-3 border">0-5 net</td>
                                        <td className="p-3 border">2-3 hafta</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">2. Sayı Teorisi</td>
                                        <td className="p-3 border">Doğal-tam sayılar, tek-çift, asal sayılar, ardışık, basamak</td>
                                        <td className="p-3 border">5-10 net</td>
                                        <td className="p-3 border">3 hafta</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">3. Cebir</td>
                                        <td className="p-3 border">Rasyonel sayılar, basit eşitsizlikler, mutlak değer, üslü-köklü</td>
                                        <td className="p-3 border">10-15 net</td>
                                        <td className="p-3 border">4 hafta</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">4. Problemler</td>
                                        <td className="p-3 border">Oran-orantı, yaş, yüzde-kâr-zarar, grafik problemleri</td>
                                        <td className="p-3 border">15-22 net</td>
                                        <td className="p-3 border">Sürekli rutin</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Konuların yıllara göre dağılımı için <Link href="/blog/tyt-matematik-konulari" className="text-blue-600 font-semibold hover:underline">TYT Matematik Konuları</Link> sayfasına bakabilirsin.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3 Dakika Kuralı
                        </h2>

                        <p>
                            Bir soruda takılınca hemen çözüm videosuna bakmak yaygın alışkanlık. Bunun yerine:
                        </p>

                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>1. dakika:</strong> Soruyu oku, verilenleri ve isteneni kağıda yaz.</li>
                            <li><strong>2. dakika:</strong> Bu soru hangi konuya ait? Hangi formül/kural gerekiyor? Düşün.</li>
                            <li><strong>3. dakika:</strong> Bir denklem kurmaya çalış, farklı yollar dene.</li>
                        </ol>

                        <p>
                            3 dakika sonunda tıkandıysan çözümü izle. Ama izlerken &quot;hoca sorunun hangi cümlesinden bu adımı çıkardı, ben neyi göremedim?&quot; diye düşün. Sonra videoyu kapat, aynı soruyu sıfırdan kendin çöz. Kendin çözemediğin soru öğrenilmiş sayılmaz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Problem Çalışma Yöntemi
                        </h2>

                        <p>
                            TYT&apos;de 40 sorunun 10-13&apos;ü doğrudan problem. Testin yaklaşık %30&apos;u.
                        </p>

                        <p>
                            Problem ayrı bir ders değil — okuduğunu anlama (Türkçe) ve denklem kurma (Matematik) birleşimi. <Link href="/blog/tyt-turkce-paragraf-teknikleri" className="text-blue-600 font-semibold hover:underline">Paragraf çözme teknikleri</Link> ile okuma hızını artırdığında problemlerin de hızlanır.
                        </p>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
                            <h3 className="text-lg font-bold text-blue-900 mb-2">Günlük Problem Rutini</h3>
                            <p className="text-sm text-blue-800 mb-3">
                                Temel cebiri (rasyonel, üslü, köklü, denklem) bitirdikten sonra sınava kadar her gün:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-blue-900">
                                <li><strong>Her gün 15 problem çöz.</strong></li>
                                <li>İlk ay süre tutma, denklemi doğru kurmaya odaklan.</li>
                                <li>2. aydan itibaren soru başına 2 dk kronometre tut.</li>
                                <li>Çözemediğin tipleri (karışım, işçi vb.) işaretle, hafta sonu tekrar çöz.</li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-8 text-center my-10 shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">Matematik Netinle Sıralamanı Gör</h3>
                            <p className="text-emerald-100 max-w-2xl mx-auto mb-6 text-sm md:text-base">
                                Matematik netini 5 artırınca sıralamanın kaç bin kişi değiştiğini görmek için hesaplayıcıyı kullan.
                            </p>
                            <Link 
                                href="/" 
                                className="inline-block bg-white text-teal-800 font-bold px-8 py-3 rounded-xl shadow-md hover:bg-emerald-50 transition transform hover:-translate-y-0.5"
                            >
                                Net Hesaplayıcıya Git →
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Haftalık Program Örneği
                        </h2>

                        <p>
                            Günde 2-2,5 saat matematik ayıran bir öğrenci için:
                        </p>

                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6 text-sm text-gray-800 space-y-3">
                            <p><strong>Pzt:</strong> Yeni konu anlatımı + 20 temel soru</p>
                            <p><strong>Salı:</strong> Aynı konudan 25 pekiştirme sorusu</p>
                            <p><strong>Çrş:</strong> 15 problem + geçen haftanın konusundan 15 tekrar</p>
                            <p><strong>Prş:</strong> Yeni konunun 2. kısmı veya sonraki alt başlık (25 soru)</p>
                            <p><strong>Cuma:</strong> 15 problem + konu kavrama testi (biraz daha zor)</p>
                            <p><strong>Cts:</strong> Haftalık deneme veya 20 soruluk mini test</p>
                            <p><strong>Paz:</strong> Hafta boyunca çözemediğin soruların video çözümü + tekrar çözmek</p>
                        </div>

                        <p>
                            İlk 3-4 hafta çalıştığın halde netlerin kıpırdamayabilir. Normal. Beyin taşları yerine oturtuyor. Kritik eşik aşılınca netler birden 5&apos;ten 12&apos;ye, sonra 18&apos;e sıçrar. Garanti net getiren konular için <Link href="/blog/tyt-kesin-cikan-konular" className="text-blue-600 font-semibold hover:underline">TYT Kesin Çıkan Konular</Link> yazısına göz at.
                        </p>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#sifirdanMatematik</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#tytMatematik</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#problemCozme</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <Link href="/blog" className="text-blue-600 hover:underline font-medium">← Blog Listesine Dön</Link>
                            <Link href="/blog/yks-son-3-ay-calisma-plani" className="text-blue-600 hover:underline font-medium">YKS Son 3 Ay Planı →</Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
