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
                            Sıfırdan TYT Matematik Nasıl Çalışılır? Temelden 20+ Nete Yol Haritası
                        </h1>
                        <p className="text-xl text-gray-600">
                            &quot;Benim matematiğe kafam basmıyor&quot; cümlesi bir gerçek değil, sadece bir inançtır. Doğru sırayla ve doğru yöntemle çalışıldığında 0-3 net bandından 15-20 nete çıkmak herkes için mümkündür.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Geçen sene rehberlik odasına ağlayarak gelen bir kız öğrenci vardı. Adı Elif. Deneme sınavında TYT Matematik: 2 doğru, 14 yanlış. Kağıdı masaya fırlattı ve dedi ki: &quot;Hocam ben bu hayatta matematik yapamayacağım, kabul ettim artık.&quot;
                        </p>

                        <p>
                            Elif&apos;e bir şey söyledim o gün. Aynı şeyi şimdi sana da söylüyorum.
                        </p>

                        <p>
                            Matematik yeteneği diye bir şey yok. Ciddiyim. Var olan şey doğru sırayla, doğru seviyeden başlamak. Elif&apos;in tek problemi 9. sınıf matematiğindeki delik yüzünden 11. sınıf konularına dalmasıydı — tabii ki çözemezdi. Temeli olmayan bina çöker. Haziran&apos;da sınava girdiğinde 19 net yaptı. 2 netten 19 nete. Sihir değil, sıralama meselesi.
                        </p>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg text-amber-950 text-sm my-6">
                            <strong>Tanıdık geldi mi?</strong> Arkadaşın sana &quot;şu kitap çok iyi&quot; diye ileri seviye bir soru bankası verdi. Açtın, ilk testte 3 tanesini bile yapamadın. Kitabı kapattın, &quot;ben matematikten anlamıyorum&quot; dedin. Hata sende değil — o kitap senin seviyene uygun değildi. Hepsi bu.
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sıfırdan Başlayanların Yaptığı 3 Klasik Hata
                        </h2>

                        <p>
                            Bunları bilmezsen 3 ay boşa gider. Abartmıyorum, resmen 3 ay.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                            1. YouTube&apos;da Soru Çözümü İzleyip &quot;Anladım&quot; Demek
                        </h3>
                        <p>
                            Koltuğa yaslanmışsın, elinde çay. Hocanın çözüm videosu açık. Adam x&apos;i öbür tarafa atıyor, çarpanlarına ayırıyor, cevap C şıkkı. Sen kafanla onaylıyorsun: &quot;He tamam, mantıklı.&quot;
                        </p>
                        <p>
                            Sonra kitabı açıyorsun, benzer soruyu çözmeye çalışıyorsun. Kalem havada. Hiçbir şey gelmiyor. Niye? Çünkü izlerken beynin sadece &quot;evet doğru&quot; diyor, kendisi üretmiyor. Film izlemekle senaryo yazmak aynı şey mi? Değil.
                        </p>
                        <p>
                            <strong>Kural basit: Kalemi eline almadan, kağıdı karalamadan, yanlış yapıp sinirlenip tekrar denemeden matematik öğrenilmez.</strong> Nokta.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                            2. Daha İlk Hafta &quot;Yeni Nesil&quot; Soruya Dalma
                        </h3>
                        <p>
                            ÖSYM artık hikayeli, uzun metinli sorular soruyor — doğru. Ama daha <em>2x + 5 = 17</em> denklemini refleks gibi çözemiyorsan, o 8 satırlık problem sorusunun karşısında donarsin. Bina yapıyorsun düşün: temeli atmadan çatı mı koyarsın? Önce klasik soru, sonra yeni nesil. Sırayı bozma.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
                            3. &quot;Günde 100 Soru Çözeceğim&quot; Yalanı
                        </h3>
                        <p>
                            Temeli sıfır olan biri günde 80 soru çözmeye kalkarsa ne olur? Üç gün dayanır, dördüncü gün masadan kalkar bir daha oturmaz. Başlangıçta <strong>15 soru yeter</strong>. Ama o 15 sorunun her birini anlayarak, niye yanlış yaptığını analiz ederek çöz. Göz ucuyla geçiştirilmiş 70 soru, dikkatlice çözülmüş 15 sorunun yanında hiçbir şeydir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Hangi Konudan Başlamalı? (Sırayı Bozarsan Çökersin)
                        </h2>

                        <p>
                            Matematik birikimli bir ders — her konu bir öncekinin üstüne biner. Rasyonel sayıları bilmeden mutlak değer yapamazsın. Çarpanlara ayırmayı öğrenmeden fonksiyon çözemezsin. Bu yüzden &quot;en çok soru çıkan konudan başlayayım&quot; deme. Aşağıdaki sırayı takip et, atlama.
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead className="bg-gray-100 text-gray-800 text-sm">
                                    <tr>
                                        <th className="p-3 border">Aşama</th>
                                        <th className="p-3 border">Konu Başlıkları</th>
                                        <th className="p-3 border">Hedef Net Aralığı</th>
                                        <th className="p-3 border">Tahmini Süre</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">1. Adım: İşlem Temeli</td>
                                        <td className="p-3 border">Dört işlem, İşaret kuralları, Harfli ifadeler, Basit denklem</td>
                                        <td className="p-3 border">0 - 5 Net</td>
                                        <td className="p-3 border">2 - 3 Hafta</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">2. Adım: Temel Sayı Teorisi</td>
                                        <td className="p-3 border">Doğal-Tam Sayılar, Tek-Çift, Asal Sayılar, Ardışık Sayılar, Basamak Kavramı</td>
                                        <td className="p-3 border">5 - 10 Net</td>
                                        <td className="p-3 border">3 Hafta</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">3. Adım: Cebir Omurgası</td>
                                        <td className="p-3 border">Rasyonel Sayılar, Basit Eşitsizlikler, Mutlak Değer, Üslü-Köklü Sayılar</td>
                                        <td className="p-3 border">10 - 15 Net</td>
                                        <td className="p-3 border">4 Hafta</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">4. Adım: Problem Dünyası</td>
                                        <td className="p-3 border">Oran-Orantı, Sayı-Kesir, Yaş, Yüzde-Kâr-Zarar, Grafik Problemleri</td>
                                        <td className="p-3 border">15 - 22 Net</td>
                                        <td className="p-3 border">Sürekli (Her gün rutin)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Tüm konuların yıllara göre soru dağılımı için <Link href="/blog/tyt-matematik-konulari" className="text-blue-600 font-semibold hover:underline">TYT Matematik Konuları ve Soru Dağılımı</Link> kılavuzumuzu inceleyin.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3 Dakika Kuralı: Soruyu Çözemediğinde Ne Yapacaksın?
                        </h2>

                        <p>
                            Bir soruda takıldığınız an hemen soru çözüm videosuna tıklamak en yaygın alışkanlıktır. Bu alışkanlığı şu <strong>3 Dakika Kuralı</strong> ile değiştirin:
                        </p>

                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>1. Dakika (Okuma ve Not Alma):</strong> Soruyu acele etmeden okuyun. Verilenleri ve isteneni kağıdın kenarına sembollerle yazın (Örn: <em>Ahmet = x, Mehmet = x + 4</em>).</li>
                            <li><strong>2. Dakika (Formül ve İlke Arama):</strong> Bu soru hangi konuya ait? Hangi kuralı bilmem gerekiyor? Bildiğiniz tüm formülleri veya benzer soru kalıplarını zihninizde tarayın.</li>
                            <li><strong>3. Dakika (Deneme ve Karalama):</strong> Sonucu bulamasanız bile bir denklem kurmaya çalışın, farklı yollar deneyin.</li>
                        </ol>

                        <p>
                            3 dakikanın sonunda hala tıkandıysanız çözümü izleyin. Ama videoyu izlerken şunu sorun: <em>&quot;Hoca sorunun hangi cümlesini okuyup bu adımı attı? Ben neyi göremedim?&quot;</em> Çözümü anladıktan sonra videoyu kapatın ve o soruyu temiz bir kağıda <strong>kendi elinizle baştan çözün</strong>. Kendi elinizle çözemediğiniz hiçbir soru öğrenilmiş sayılmaz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Problemler Nasıl Çalışılır? (12 Soruluk Altın Madeni)
                        </h2>

                        <p>
                            TYT Matematik testinde 40 sorunun 10 ila 13 tanesi doğrudan problemlerden çıkar. Yani testin %30&apos;u problemlerdir.
                        </p>

                        <p>
                            Problemler ayrı bir ders veya ayrı bir konu değildir; okuduğunu anlama (Türkçe) ve denklem kurma (Matematik) becerisinin birleşimidir. <Link href="/blog/tyt-turkce-paragraf-teknikleri" className="text-blue-600 font-semibold hover:underline">TYT paragraf çözme teknikleri</Link> ile okuma hızınızı artırdığınızda problemlerinizin de hızlandığını göreceksiniz.
                        </p>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
                            <h3 className="text-lg font-bold text-blue-900 mb-2">Günlük Problem Rutini (Sabit Alışkanlık)</h3>
                            <p className="text-sm text-blue-800 mb-3">
                                Temel cebir konularını (Rasyonel, Üslü, Köklü, Basit Denklem) bitirdiğiniz günden itibaren sınava kadar her gün istisnasız:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-blue-900">
                                <li><strong>Her gün 15 problem sorusu çözün.</strong></li>
                                <li>İlk ay süre tutmayın; denklemi doğru kurmaya odaklanın.</li>
                                <li>2. aydan itibaren soru başına 2 dakika kronometre tutun.</li>
                                <li>Çözemediğiniz soru tiplerini (özellikle karışım veya işçi gibi takıldığınız yerleri) işaretleyip hafta sonu tekrar çözün.</li>
                            </ul>
                        </div>

                        {/* CTA Kutusu */}
                        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-8 text-center my-10 shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">Mevcut Matematik Netinizle Sıralamanızı Test Edin</h3>
                            <p className="text-emerald-100 max-w-2xl mx-auto mb-6 text-sm md:text-base">
                                Matematik netinizi 5 artırdığınızda Türkiye sıralamanızın kaç bin kişi ileri fırladığını görmek için net hesaplayıcımızı kullanın.
                            </p>
                            <Link 
                                href="/" 
                                className="inline-block bg-white text-teal-800 font-bold px-8 py-3 rounded-xl shadow-md hover:bg-emerald-50 transition transform hover:-translate-y-0.5"
                            >
                                Sıralama Simülasyonu Yap →
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Matematik Çalışma Programı: Haftalık Örnek
                        </h2>

                        <p>
                            Temeli zayıf bir öğrencinin haftalık çalışma dengesi nasıl olmalı? İşte günde 2-2.5 saat matematik ayıran bir öğrenci için gerçekçi şablon:
                        </p>

                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6 text-sm text-gray-800 space-y-3">
                            <p><strong>Pazartesi:</strong> Yeni Konu Anlatımı (Kısa özet + 20 temel kavrama sorusu)</p>
                            <p><strong>Salı:</strong> Aynı konudan 25 pekiştirme sorusu (Temel seviye soru bankası)</p>
                            <p><strong>Çarşamba:</strong> 15 Günlük Problem + Önceki haftanın konusundan 15 tekrar sorusu</p>
                            <p><strong>Perşembe:</strong> Yeni Konunun 2. kısmı veya bir sonraki alt başlık (25 soru)</p>
                            <p><strong>Cuma:</strong> 15 Problem + Konu kavrama testi (Zorluk bir tık artırılır)</p>
                            <p><strong>Cumartesi:</strong> Haftalık Deneme veya 20 soruluk mini tarama testi</p>
                            <p><strong>Pazar:</strong> Hafta boyunca çözülemeyen soruların video çözümlerinin incelenmesi ve yeniden çözümü</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Son Söz: Sabır ve Süreklilik
                        </h2>

                        <p>
                            Matematik netleri hemen yarın 15 nete çıkmaz. İlk 3-4 hafta boyunca çalıştığınız halde netlerinizin kıpırdamadığını görebilirsiniz. Bu çok doğaldır; çünkü zihniniz taşları yerine oturtmaktadır.
                        </p>

                        <p>
                            Kritik eşik aşıldığında netler birden 5&apos;ten 12&apos;ye, ardından 18&apos;e sıçrar. Tek yapmanız gereken her gün masaya oturmak, kalemi elden bırakmamak ve kurallara sadık kalmaktır. Sınavda garanti net getiren başlıkları incelemek için <Link href="/blog/tyt-kesin-cikan-konular" className="text-blue-600 font-semibold hover:underline">TYT&apos;de Kesin Çıkan Konular</Link> yazımıza göz atın.
                        </p>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#sifirdanMatematik</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#tytMatematik</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#matematikCalismaYontemi</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#problemCozme</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#yksRehberlik</span>
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
