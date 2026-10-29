import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import ArticleFeedback from '@/components/ArticleFeedback'
import ReadingProgress from '@/components/ReadingProgress'
import LastUpdatedBadge from '@/components/LastUpdatedBadge'
import TableOfContents from '@/components/TableOfContents'

export const metadata: Metadata = {
    title: 'Sıfırdan TYT Matematik Nasıl Çalışılır? 0 Netten 20 Nete Gerçekçi Plan',
    description: 'Matematik temeli zayıf olanlar için sıfırdan TYT matematik yol haritası. Konu sırası, doğru kaynak seçimi, günlük problem rutini ve 4 aşamalı çalışma taktiği.',
    keywords: 'sıfırdan matematik nasıl çalışılır, tyt matematik sıfırdan, temel matematik nasıl geliştirilir, tyt matematik 15 net, tyt matematik kaynak önerisi',
    alternates: { canonical: 'https://yksnethesapla.com/blog/sifirdan-tyt-matematik-calisma-rehberi' },
    openGraph: {
        title: 'Sıfırdan TYT Matematik Nasıl Çalışılır? 0 Netten 20 Nete Gerçekçi Plan',
        description: 'Matematik temeli zayıf olanlar için sıfırdan TYT matematik yol haritası. Konu sırası, kaynak seçimi ve günlük problem rutini.',
        type: 'article',
        publishedTime: '2026-09-08',
        modifiedTime: '2026-10-29',
        url: 'https://yksnethesapla.com/blog/sifirdan-tyt-matematik-calisma-rehberi',
        images: [
            {
                url: '/images/blog/sifirdan-tyt-matematik-calisma-rehberi.jpg',
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
                <ReadingProgress />
                <BlogArticleSchema 
                    title="Sıfırdan TYT Matematik Nasıl Çalışılır? 0 Netten 20 Nete Gerçekçi Plan" 
                    description="Matematik temeli zayıf olanlar için sıfırdan TYT matematik yol haritası. Konu sırası, doğru kaynak seçimi, günlük problem rutini ve 4 aşamalı çalışma taktiği."
                    datePublished="2026-09-08"
                    dateModified="2026-10-29"
                    url="https://yksnethesapla.com/blog/sifirdan-tyt-matematik-calisma-rehberi"
                    keywords={['sıfırdan matematik nasıl çalışılır', 'tyt matematik sıfırdan', 'temel matematik nasıl geliştirilir', 'tyt matematik 15 net', 'tyt matematik kaynak önerisi']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Sıfırdan TYT Matematik</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-09-08">8 Eylül 2026</time>
                            <span className="text-gray-600">• 10 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Sıfırdan TYT Matematik: 0-3 Netten 20 Nete Gerçekçi Yol Haritası
                        </h1>
                        <p className="text-xl text-gray-600">
                            Matematik bir yetenek sınavı değil; adım adım inşa edilen bir alışkanlık zinciridir. Masaya oturup denemede 2 doğru 11 yanlış görünce pes etmeyi düşünüyorsan önce bu sistemi incele.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/sifirdan-tyt-matematik-calisma-rehberi.jpg"
                        alt="Sıfırdan TYT Matematik Çalışma Rehberi"
                    />

                    <TableOfContents items={[
                        { id: 'temel-eksigi-nedir', title: 'Matematik Temeli Neden Yok Gibi Gelir?' },
                        { id: 'en-buyuk-3-hata', title: 'Sıfırdan Başlayanların Düştüğü 3 Büyük Tuzak' },
                        { id: '4-asamali-plan', title: '4 Aşamalı Konu Sıralaması ve Net Eşikleri' },
                        { id: 'kaynak-onerileri', title: 'Seviyeye Göre Kitap Seçimi (Hangi Kitapla Başlamalı?)' },
                        { id: '3-dakika-ve-hata-defteri', title: '3 Dakika Kuralı ve Hata Defteri Sistemi' },
                        { id: 'gunluk-rutin', title: 'Günde 2 Saatlik Çalışma Şablonu' },
                        { id: 'sikca-sorulanlar', title: 'Sıkça Sorulan Sorular' },
                    ]} />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Geçen sene kasım ayında ilk TYT denemesinde 3 doğru 14 yanlış yapan eşit ağırlık öğrencimiz vardı. &ldquo;Hocam ben ilkokuldan beri matematiği hiç anlamadım, sanırım bende sayısal kafa yok&rdquo; diyordu. Haziran sınavında aynı öğrenci TYT Matematik testinde <strong>21 doğru 3 yanlış</strong> yaptı.
                        </p>

                        <p>
                            Aramızdaki tek fark zeka veya mucizevi bir dershane hocası değildi. Yaptığı tek şey şuydu: 9. sınıfın en temel işlem deliklerini kapatmadan fonksiyon veya permütasyon testine dalmayı bıraktı. Sıralamayı düzelttiğinde netler kendiliğinden geldi.
                        </p>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg text-amber-950 text-sm my-6">
                            <strong>Önemli Farkındalık:</strong> Arkadaşının elinde gördüğün kalın ve zor soru bankasını alıp ilk 3 soruda tıkanıyorsan sorun sende değil. O kitap senin şu anki zihinsel işlem seviyen için yazılmadı. Her seviyenin bir antrenman sahası vardır.
                        </div>

                        <h2 id="temel-eksigi-nedir" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Matematik Temeli Neden Yok Gibi Gelir?
                        </h2>

                        <p>
                            Çoğu öğrenci &ldquo;temelim yok&rdquo; derken aslında fonksiyonların grafiğini çizemediğini kasteder. Oysa temel eksikliği çok daha basit yerde gizlidir:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Eksi ile eksinin çarpımında tereddüt etmek,</li>
                            <li>Payda eşitlerken işlem hatası yapmak,</li>
                            <li>Harfli ifadelerde parantezi dağıtırken işaret kaçırmak (örn. <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">-2(3x - 4) = -6x + 8</code> yerine <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">-6x - 8</code> yazmak),</li>
                            <li>Bir eşitlikte x&apos;i yalnız bırakırken karşıya bölme olarak atacağına çıkarma yapmak.</li>
                        </ul>

                        <p>
                            Bu 4 işlem refleksi otomatikleşmeden yeni nesil 8 satırlık bir TYT problemini çözmeye kalktığında, beynin sorunun mantığına odaklanamaz; işlem yükünün altında boğulur.
                        </p>

                        <h2 id="en-buyuk-3-hata" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sıfırdan Başlayanların Düştüğü 3 Büyük Tuzak
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="bg-red-50 p-5 rounded-xl border border-red-100">
                                <h3 className="font-bold text-red-900 text-lg mb-1">1. Video Çözümünü &ldquo;İzleyip Anlamakla&rdquo; Öğrenmeyi Karıştırmak</h3>
                                <p className="text-sm text-red-800">
                                    Hoca videoda x&apos;i sol tarafa atar, iki kare farkını uygular, şak diye cevabı bulur. Sen de kafanla onaylayıp &ldquo;tamam ya çok kolaymış&rdquo; dersin. Kitabı önüne alıp benzer soruyu görünce kalem oynamaz. Çünkü izlemek pasif, çözmek aktiftir. Kendi elinle kağıda dökmediğin hiçbir işlem senin değildir.
                                </p>
                            </div>

                            <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
                                <h3 className="font-bold text-amber-900 text-lg mb-1">2. İlk Aydan &ldquo;Yeni Nesil Hikayeli Soru&rdquo; Çözmeye Çalışmak</h3>
                                <p className="text-sm text-amber-800">
                                    ÖSYM soruları şekilli ve hikayeli soruyor, evet. Fakat hikayeyi soyutladığında geriye kalan şey <code className="bg-amber-100 px-1 rounded text-xs">2x + 15 = 45</code> denklemidir. Klasik sorularla denklem kurmayı pekiştirmeden yeni nesil şekilli sorulara geçmek motivasyon katilidir.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-blue-900 text-lg mb-1">3. Günde 100 Soru Hedefi Koyup 3. Günde Bırakmak</h3>
                                <p className="text-sm text-blue-800">
                                    Sıfır seviyesinde günde 100 soru çözemezsin. Bir soruda 5 dakika düşünmen normaldir. Günde <strong>20-25 kaliteli soru</strong> çözüp hepsinin çözüm mantığını sindirmek, üstünkörü geçiştirilmiş 80 sorudan 10 kat daha fazla net kazandırır.
                                </p>
                            </div>
                        </div>

                        <h2 id="4-asamali-plan" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4 Aşamalı Konu Sıralaması ve Net Eşikleri
                        </h2>

                        <p>
                            Matematik birbirine bağlı zincir halkaları gibidir. Konu sırasını rastgele seçemezsin. Aşağıdaki 4 aşamayı adım adım takip ettiğinde netlerinin nasıl kademeli yükseldiğini göreceksin:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead className="bg-gray-100 text-gray-800 text-sm">
                                    <tr>
                                        <th className="p-3 border">Aşama</th>
                                        <th className="p-3 border">Kapsadığı Konular</th>
                                        <th className="p-3 border">Ortalama Süre</th>
                                        <th className="p-3 border">Ulaşılan Net</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">1. İşlem Temeli</td>
                                        <td className="p-3 border">İşaret kuralları, parantez açma, harfli ifadeler, 1. derece basit denklemler</td>
                                        <td className="p-3 border">2-3 Hafta</td>
                                        <td className="p-3 font-semibold text-emerald-600 border">3 - 6 Net</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">2. Sayılar Dünyası</td>
                                        <td className="p-3 border">Tek-Çift Sayılar, Pozitif-Negatif, Asal Sayılar, Ardışık Sayılar, Basamak Kavramı, Bölme-Bölünebilme</td>
                                        <td className="p-3 border">3-4 Hafta</td>
                                        <td className="p-3 font-semibold text-emerald-600 border">7 - 11 Net</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">3. Cebir ve Eşitsizlik</td>
                                        <td className="p-3 border">Rasyonel Sayılar, Basit Eşitsizlikler, Mutlak Değer, Üslü ve Köklü İfadeler, Çarpanlara Ayırma</td>
                                        <td className="p-3 border">4 Hafta</td>
                                        <td className="p-3 font-semibold text-emerald-600 border">12 - 16 Net</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">4. Problemler ve Rutin</td>
                                        <td className="p-3 border">Oran-Orantı, Sayı-Kesir, Yaş, Yüzde-Kâr-Zarar, Hareket ve Grafik Problemleri</td>
                                        <td className="p-3 border">Sınava kadar her gün</td>
                                        <td className="p-3 font-semibold text-emerald-600 border">17 - 23+ Net</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Tüm konuların detaylı yıllık soru sayıları için <Link href="/blog/tyt-matematik-konulari" className="text-blue-600 font-semibold hover:underline">TYT Matematik Konuları ve Soru Dağılımı</Link> tablomuzu inceleyebilirsin.
                        </p>

                        <h2 id="kaynak-onerileri" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Seviyeye Göre Kitap Seçimi (Hangi Kitapla Başlamalı?)
                        </h2>

                        <p>
                            Doğru kaynak seçimi, sıfırdan başlayan bir öğrencinin başarısını belirleyen en kritik adımdır. Kütüphanedeki popüler kitapları değil, seviyenin gerektirdiği kitabı almalısın:
                        </p>

                        <div className="grid md:grid-cols-3 gap-4 my-6">
                            <div className="border border-emerald-200 bg-emerald-50/50 p-4 rounded-xl">
                                <span className="text-xs uppercase tracking-wider font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Seviye 0: Başlangıç</span>
                                <h4 className="font-bold text-gray-900 mt-2 mb-1">0 - 5 Net Arası</h4>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Antrenmanlarla Matematik 1</li>
                                    <li>• Aktif Matematik (0&apos;dan Başlayanlara)</li>
                                    <li>• Birey A Temel Düzey</li>
                                </ul>
                                <p className="text-xs text-gray-500 mt-2">Amacı: İşlem hızını artırmak ve işlem korkusunu yenmek.</p>
                            </div>

                            <div className="border border-blue-200 bg-blue-50/50 p-4 rounded-xl">
                                <span className="text-xs uppercase tracking-wider font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">Seviye 1: Gelişim</span>
                                <h4 className="font-bold text-gray-900 mt-2 mb-1">5 - 12 Net Arası</h4>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Mikro Orijinal TYT Matematik</li>
                                    <li>• 345 TYT Matematik (Klasik testler)</li>
                                    <li>• Çap TYT Matematik Soru Bankası</li>
                                </ul>
                                <p className="text-xs text-gray-500 mt-2">Amacı: ÖSYM tipi temel ve orta seviye soruları çözmek.</p>
                            </div>

                            <div className="border border-purple-200 bg-purple-50/50 p-4 rounded-xl">
                                <span className="text-xs uppercase tracking-wider font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded">Seviye 2: Zirve</span>
                                <h4 className="font-bold text-gray-900 mt-2 mb-1">12 - 20+ Net Arası</h4>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Bilgi Sarmal TYT Matematik</li>
                                    <li>• 345 ÖSYM Tipi Testler</li>
                                    <li>• Hız ve Renk Problem Soru Bankası</li>
                                </ul>
                                <p className="text-xs text-gray-500 mt-2">Amacı: Problem refleksini ve hız yönetimini kusursuzlaştırmak.</p>
                            </div>
                        </div>

                        <h2 id="3-dakika-ve-hata-defteri" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3 Dakika Kuralı ve Hata Defteri Sistemi
                        </h2>

                        <p>
                            Bir soruyu çözemediğin anda hemen video çözümüne basmak en büyük tembellik tuzağıdır. Beynin çabalamadan hazır çözümü gördüğünde kalıcı öğrenme gerçekleşmez. Bunun yerine <strong>3 Dakika Kuralı</strong> uygulayacaksın:
                        </p>

                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>1. Dakika (Verilenleri Yaz):</strong> Soruda ne verilmiş? <code className="bg-gray-100 px-1 rounded text-sm">a, b tek sayı</code> mı demiş, pozitif tam sayı mı? Kağıdın kenarına sadece sayıları ve şartları not et.</li>
                            <li><strong>2. Dakika (Strateji Seç):</strong> Bu soru hangi kurala bağlanıyor? İki kare farkı mı, oran-orantı mı, mutlak değerin içini eksi ile çarpmak mı?</li>
                            <li><strong>3. Dakika (İşlemi Dene):</strong> Yanlış çıksa bile denklemi kur. Kalem kağıda dokunmadan kafadan çözmeye çalışma.</li>
                        </ol>

                        <p>
                            3 dakika dolduğunda hala tıkandıysan videoyu aç. Hoca denklemi kurduğu ilk 20 saniyede videoyu hemen durdur ve gerisini kendin getirmeye çalış.
                        </p>

                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 my-6">
                            <h3 className="text-lg font-bold text-emerald-950 mb-2">Hata Defteri Nasıl Tutulur?</h3>
                            <p className="text-sm text-emerald-900 mb-3">
                                Çözemediğin veya yanlış yaptığın soruları test kitabından makasla kesip boş bir deftere yapıştır. Altına doğru çözümü yaz. Her pazar akşamı sadece bu defteri açıp soruları kapatarak yeniden çöz. Bir ay önce çözemediğin soruyu artık tek başına çözebiliyorsan netin kalıcı olarak artmış demektir.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-2xl p-8 text-center my-10 shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">Matematik Netin Puanını Nasıl Etkiliyor?</h3>
                            <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-sm md:text-base">
                                TYT Matematikte 5 netlik bir artışın yerleştirme puanını ve sıralamanı ne kadar ileri fırlattığını görmek için net hesaplayıcımızı kullan.
                            </p>
                            <Link 
                                href="/tyt-net-hesaplama" 
                                className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-xl shadow-md hover:bg-blue-50 transition transform hover:-translate-y-0.5"
                            >
                                TYT Netini Hesapla →
                            </Link>
                        </div>

                        <h2 id="gunluk-rutin" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Günde 2 Saatlik Çalışma Şablonu
                        </h2>

                        <p>
                            Matematik çalışırken saatlerce aynı konuya bakmak yerine odaklanmış bloklar uygulamalısın. Sıfırdan başlayan bir öğrencinin günlük 2 saatlik planı şu şekildedir:
                        </p>

                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6 text-sm text-gray-800 space-y-3">
                            <p><strong>0 - 30. Dakika:</strong> Konu dinleme veya ders notu okuma (Önemli formül ve kuralları özet kağıdına yazma).</p>
                            <p><strong>30 - 75. Dakika:</strong> Temel seviye 15-20 klasik soru çözümü (Hatasız işlem odaklı, süre tutmadan).</p>
                            <p><strong>75 - 90. Dakika:</strong> Çözülemeyen soruların video çözümlerini izleyip kapatarak kendi kendine yeniden çözme.</p>
                            <p><strong>90 - 120. Dakika:</strong> Günlük 10-15 soruluk problem rutini veya önceki haftanın konusundan karma tekrar testi.</p>
                        </div>

                        <h2 id="sikca-sorulanlar" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Geometri bilmeden TYT matematikte 15-20 net çıkar mı?</h3>
                                <p className="text-sm text-gray-600">
                                    Evet, mümkündür. TYT Matematik testinde 40 sorunun 30&apos;u temel matematik ve problemler, 10&apos;u geometridir. Geometriye hiç dokunmasan dahi ilk 30 sorudan 20-22 net çıkarma potansiyelin vardır. Ancak üçgende açı ve özel üçgenler gibi 2 temel konuyu öğrenirsen fazladan 2-3 neti çok rahat cebe koyarsın.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">0 netten 15 nete çıkmak kaç ay sürer?</h3>
                                <p className="text-sm text-gray-600">
                                    Haftada 5 gün düzenli olarak günde 2-2,5 saat odaklanmış çalışan bir öğrenci ortalama 2,5 - 3 ayda 12-15 net bandına ulaşır. İlk 3 hafta net artışı görünmeyebilir; işlem temeli oturup sayılar bittiğinde netler birden sıçrama yapar.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Çıkmış soruları ne zaman çözmeliyim?</h3>
                                <p className="text-sm text-gray-600">
                                    İlk 3 aşamayı tamamlamadan (yani cebir konularını bitirmeden) çıkmış TYT denemesi çözmek moral bozar. Konuları tamamlayıp 12-15 net bandına geldikten sonra son 7 yılın çıkmış sorularını konu konu ayırarak çözmeye başlamalısın.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#sifirdanMatematik</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#tytMatematik</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#problemCozme</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <Link href="/blog" className="text-blue-600 hover:underline font-medium">← Blog Listesine Dön</Link>
                            <Link href="/blog/tyt-kesin-cikan-konular" className="text-blue-600 hover:underline font-medium">TYT Kesin Çıkan Konular →</Link>
                        </div>
                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
