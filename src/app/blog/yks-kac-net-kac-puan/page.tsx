import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'

export const metadata: Metadata = {
    title: 'YKS\'de Kaç Net Kaç Puan Eder? Net-Puan Tablosu ve Bölüm Hedefleri 2027',
    description: 'TYT ve AYT netleri kaç puana denk gelir? Ham puan ile yerleştirme farkı, Tıp, Hukuk ve Mühendislik için gereken netler ve net-puan analiz rehberi.',
    keywords: 'kaç net kaç puan, yks net puan tablosu, tyt kaç net kaç puan, ayt kaç net kaç puan, tıp kaç net, hukuk kaç net',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-kac-net-kac-puan' },
    openGraph: {
        title: 'YKS\'de Kaç Net Kaç Puan Eder? Gerçekçi Net-Puan Rehberi',
        description: 'Deneme netleriniz kaç puana karşılık geliyor? Standart sapma, zorluk dereceleri ve bölüm kazanma eşikleri.',
        type: 'article',
        publishedTime: '2026-02-22',
        modifiedTime: '2026-02-25',
        url: 'https://yksnethesapla.com/blog/yks-kac-net-kac-puan',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Kaç Net Kaç Puan Analizi'
            }
        ],
    },
}

export default function YKSKacNetKacPuan() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS'de Kaç Net Kaç Puan Eder? Net-Puan Tablosu ve Bölüm Hedefleri 2027" 
                    description="TYT ve AYT netleri kaç puana denk gelir? Ham puan ile yerleştirme farkı, Tıp, Hukuk ve Mühendislik için gereken netler ve net-puan analiz rehberi."
                    datePublished="2026-02-22"
                    dateModified="2026-02-25"
                    url="https://yksnethesapla.com/blog/yks-kac-net-kac-puan"
                    keywords={['kaç net kaç puan', 'yks net puan tablosu', 'tyt kaç net kaç puan', 'ayt kaç net kaç puan', 'tıp kaç net', 'hukuk kaç net']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Kaç Net Kaç Puan</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-22">22 Şubat 2026</time>
                            <span className="text-gray-600">• 12 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            &quot;80 Net Yaptım, 400 Gelir mi?&quot; — Gerçekçi Net-Puan Tablosu ve Yanılgılar
                        </h1>
                        <p className="text-xl text-gray-600">
                            Deneme sınavından sonra herkesin birbirine fısıldadığı o sorunun cevabı tek bir sayıdan ibaret değil. ÖSYM katsayıları neden her yıl savrulur ve elinizdeki net gerçekte ne anlama gelir?
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Kütüphanenin mola alanında ya da dershane merdivenlerinde hemen her cumartesi öğleden sonra aynı sahne tekrarlanır. Bir öğrenci elinde optik form çıktısıyla gelir: &quot;Türkçeden 31, Sosyalden 15, Matematikten 23, Fenden 11... Toplam 80 net. Hocam sizce 400 puan gelir mi?&quot; Yan masadan başka biri söze karışır: &quot;Bizim kuzen geçen yıl 78 netle 402 almıştı, kesin gelir rahat ol.&quot;
                        </p>

                        <p>
                            İşte gençlerin bütün çalışma şevkini ya yalancı bir rehavete sokan ya da yersiz bir paniğe sürükleyen en büyük tuzak tam olarak bu kulaktan dolma kıyaslamadır. 
                        </p>

                        <p>
                            Neden mi? Çünkü 2021 YKS&apos;sinde 75 net yapan bir öğrenci Türkiye genelinde sevinçten havalara uçup ilk 20 binin kapısını çalarken; soruların nispeten daha rahat çözüldüğü 2022 YKS&apos;sinde aynı 75 net sizi bir anda 70 bininci sıraya geriletebiliyordu. Yani &quot;Şu kadar net şu kadar puan eder&quot; şeklindeki katı kalıplar, sınavın standart sapmasını hesaba katmayan boş bir avuntudur. Yine de son 5 yılın ÖSYM yerleştirme istatistiklerini yan yana koyduğumuzda, önümüzü görmemizi sağlayacak son derece sağlam bir pusula çıkarabiliyoruz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Önce Temel Ayrımı Yapalım: Ham Puan mı, Yerleştirme Puanı mı?
                        </h2>
                        <p>
                            Adaylar arasında en çok karıştırılan kavramların başında bu ikisi gelir. &quot;Ben 420 puan aldım&quot; diyen bir arkadaşınıza hemen sormanız gerekir: Ham puanın mı 420, yoksa yerleştirme puanın mı?
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-900 text-lg mb-2">Ham Puan (Sınavın Saf Getirisi)</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    ÖSYM&apos;nin her adaya hediye ettiği 100 taban puanın üstüne, TYT ve AYT testlerindeki doğru ve yanlışlarınızdan çıkan netlerin ders katsayılarıyla çarpılıp eklenmesidir. Okul notunuz bu puana zerre kadar dahil edilmez. Tavan puan 500&apos;dür.
                                </p>
                            </div>
                            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl">
                                <h3 className="font-bold text-indigo-900 text-lg mb-2">Yerleştirme Puanı (Tercih Puanınız)</h3>
                                <p className="text-sm text-indigo-800 leading-relaxed">
                                    Ham puanınızın üzerine lise diploma notunuzdan türetilen OBP&apos;nin (en fazla +60 puan) eklenmiş halidir. Tercih listesini hazırlarken üniversitelerin taban puanlarıyla kıyaslayacağınız nihai rakam işte budur. Tavan puan 560&apos;tır.
                                </p>
                            </div>
                        </div>

                        <p>
                            Yani aynı denemede tıpatıp aynı netleri çıkaran iki arkadaştan lise ortalaması 95 olanı, lise ortalaması 70 olan arkadaşına tam 15 puan fark atar. Bu fark, orta sıralarda yarışırken 25 bin kişinin üzerinizden atlayıp geçmesi demektir. Ayrıntılarını merak ediyorsanız <Link href="/blog/obp-hesaplama" className="text-blue-600 font-semibold hover:underline">OBP hesaplama rehberimizden</Link> inceleyebilirsiniz.
                        </p>

                        <QuickNetSimulator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Hangi TYT Neti Sizi Nereye Taşır? Gerçekçi Bant Analizi
                        </h2>
                        <p>
                            Sadece TYT&apos;ye girip 2 yıllık ön lisans programı hedefleyenler ya da AYT öncesi moral depolamak isteyenler için net aralıklarının kabaca karşılığı şöyledir:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-900 text-lg mb-1">100 - 115 Net Aralığı (Elit Bölge / İlk 10.000)</h3>
                                <p className="text-sm text-emerald-800 leading-relaxed">
                                    Bu bantta hata payı neredeyse sıfıra yakındır. Tahmini ham puanınız 435 ile 480 arasında seyreder. Cerrahpaşa Tıp, Boğaziçi Bilgisayar ya da ODTÜ Elektrik-Elektronik gibi ülkenin en yüksek puanlı lisans programlarını hedefleyenlerin TYT basamağında tutunması gereken güvenli liman burasıdır.
                                </p>
                            </div>

                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-900 text-lg mb-1">85 - 100 Net Aralığı (Yüksek Başarı / 10.000 - 50.000)</h3>
                                <p className="text-sm text-blue-800 leading-relaxed">
                                    Tahmini puan karşılığı 380 ile 430 puan civarındadır. Köklü devlet üniversitelerinde saygın mühendislikler, Anadolu&apos;daki tıp fakülteleri ve İstanbul Üniversitesi, Ankara Üniversitesi gibi kalburüstü Hukuk fakültelerine göz kırpan adayların ana omurgası burada kümelenir.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-900 text-lg mb-1">70 - 85 Net Aralığı (Kritik Eşik / 50.000 - 140.000)</h3>
                                <p className="text-sm text-amber-800 leading-relaxed">
                                    Karşılığı 330 ile 380 puan aralığıdır. Burası adeta bir dönüm noktasıdır; AYT netleriniz iyiyse sizi ilk 40 bine fırlatabilir, AYT&apos;de tökezlerseniz 100 binin gerisine itebilir. Hemşirelik, mimarlık, orta ölçekli hukuk fakülteleri ve popüler öğretmenlikler bu net havuzundan beslenir.
                                </p>
                            </div>

                            <div className="p-5 bg-rose-50 border border-rose-200 rounded-xl">
                                <h3 className="font-bold text-rose-900 text-lg mb-1">50 - 70 Net Aralığı (Büyük Yığılma Havuzu / 140.000 - 450.000)</h3>
                                <p className="text-sm text-rose-800 leading-relaxed">
                                    Tahmini puan 270 ile 330 arasındadır. Sınava giren yüz binlerce adayın birbirinin nefesini ensesinde hissettiği yer burasıdır. Tek bir fazladan fen ya da sosyal neti, bu bölgede adayı tek hamlede 8-10 bin kişi öne geçirebilir. Taşra üniversitelerindeki 4 yıllık fakülteler ile büyükşehirlerdeki gözde 2 yıllık bölümler (Bilgisayar Programcılığı, İlk ve Acil Yardım vb.) bu netlerle öğrenci alır.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Hedef Bölümler İçin Masada Olması Gereken Net Senaryoları
                        </h2>
                        <p>
                            &quot;Hocam bana teorik konuşmayın, ben Tıp istiyorum / Hukuk istiyorum, kaç net yapmam gerek?&quot; diyenler için son yılların kazanan profillerini özetleyelim:
                        </p>
                        <p>
                            <strong>Devlet Tıp Fakültesi İçin:</strong> TYT&apos;de en az 98-103 net bandını yakalamak, AYT tarafında ise Matematikten 34-36, Fen Bilimlerinden 33-35 netin altına düşmemek gerekir. Diploma notunuz 90&apos;ın altındaysa bu netlerin üzerine 2-3 net daha eklemek zorundasınız.
                        </p>
                        <p>
                            <strong>Prestijli Bir Bilgisayar / Yazılım Mühendisliği İçin:</strong> TYT&apos;de 90-95 net, AYT Matematikte 31-33 net, AYT Fende 28-31 net bandı sizi ilk 20-30 bin bandına rahatlıkla sokacaktır.
                        </p>
                        <p>
                            <strong>Devlet Hukuk Fakültesi İçin (Eşit Ağırlık):</strong> TYT&apos;de 80-85 net, AYT Matematikte 25-28 net, AYT Edebiyat-Sosyal-1 testinde ise 32-35 net bandı çok kuvvetli bir sıralama getirmeye yeter de artar bile.
                        </p>
                        <p>
                            Gördüğünüz gibi, hiçbir başarı tesadüf değildir ve hiçbir tekil net tek başına mucize yaratmaz. Önemli olan denemelerdeki dalgalanmalara kapılıp paniklemek değil, eksik kaldığınız dersin kazanımına odaklanarak netlerinizi istikrarlı bir şekilde yukarı çekmektir.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Kendi Netlerinizin Puanını Canlı Görün</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                TYT ve AYT doğru-yanlış sayılarınızı hesaplayıcımıza girin; ÖSYM katsayılarına göre güncel puanınızı ve Türkiye geneli tahmini derecenizi tek tıkla öğrenin.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Hemen Net Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Bu Yazıları da Mutlaka Okuyun</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-yigilma-tehlikesi" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">YKS Yığılma Tehlikesi ve Kurtulma Yolları →</p>
                                    <p className="text-xs text-gray-600 mt-1">Aynı neti yapan binlerce adayın arasından nasıl sıyrılırsınız?</p>
                                </Link>
                                <Link href="/blog/tyt-net-artirma-taktikleri" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">TYT Net Artırma Taktikleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">Platoya takılan netleri yukarı taşıyacak somut çalışma stratejileri.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
