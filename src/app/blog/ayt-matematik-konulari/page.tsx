import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'AYT Matematik Konuları 2027: LTİ, Fonksiyonlar ve Eleme Sınavı Rehberi',
    description: 'AYT Matematik\'te Limit, Türev, İntegral (LTİ) ve Fonksiyonlar nasıl çalışılır? SAY öğrencileri için 2027 ÖSYM güncel konu rehberi ve strateji.',
    keywords: 'ayt matematik konuları, ayt matematik 2027, limit türev integral, fonksiyonlar, say matematik, yks matematik',
    alternates: { canonical: 'https://yksnethesapla.com/blog/ayt-matematik-konulari' },
    openGraph: {
        title: 'AYT Matematik Konuları 2027: LTİ, Fonksiyonlar ve Eleme Sınavı Rehberi',
        description: 'AYT Matematik\'te LTİ ve Fonksiyonlar nasıl çalışılır? SAY öğrencileri için güncel rehber.',
        type: 'article',
        publishedTime: '2027-02-18',
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
                        <span className="text-gray-900">AYT Matematik Konuları</span>
                    </nav>
                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AYT</span>
                            <time className="text-gray-600">18 Şubat 2027</time>
                            <span className="text-gray-600">• 10 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            AYT Matematik Konuları 2027: LTİ, Fonksiyonlar ve Eleme Sınavı Rehberi
                        </h1>
                        <p className="text-xl text-gray-700">
                            AYT Matematik bir &quot;bilgi sınavı&quot;dır, TYT ise &quot;hız sınavı&quot;. Bu farkı kavramadan
                            hazırlanan adaylar, bildikleri soruları bile çözemeden sınavdan çıkar. 2027 AYT Matematik
                            konu dağılımı ve başarı stratejilerini bu rehberde bulabilirsiniz.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS sisteminde Eşit Ağırlık (EA) ve Sayısal (SAY) öğrencilerini rakiplerinden ayıran en temel
                            test AYT Matematiktir. TYT Matematik'te öğrenciler daha çok zaman yönetimi ve problem çözme
                            pratiği ile savaşırken, AYT Matematik doğrudan formül bilme, teorem uygulama ve analitik
                            düşünme becerisini ölçer. Bu yüzden AYT Matematik testinde süreden çok <strong>bilgi eksiği</strong>
                            sorun yaratır.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">AYT Matematik ve TYT Matematik Arasındaki 3 Temel Fark</h2>
                        <ul className="list-disc list-inside space-y-4 mb-8">
                            <li><strong>Hız vs Bilgi:</strong> TYT'de soruyu anlamak vakit alır. AYT'de ise soruyu anlarsınız ama formülü veya çözüm yöntemini bilmiyorsanız kaleminizi oynatamazsınız.</li>
                            <li><strong>Konu Derinliği:</strong> TYT'de konular daha yüzeyseldir (Temel Kavramlar, Oran-Orantı). AYT'de ise her konu kendi içinde bir denizdir (Örn: Türevin geometrik yorumu, İntegralde alan hesabı).</li>
                            <li><strong>Soru Seçiciliği:</strong> AYT Matematik'te yapılan 1 netin standart sapma getirisi ve puan katkısı, TYT Matematik'ten yaklaşık 2-2.5 kat daha fazladır.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">2027 AYT Matematik Konu Dağılımı ve Tahmini Soru Sayıları</h2>
                        <p className="mb-4">
                            ÖSYM'nin son yıllardaki sınav analizlerine göre, AYT Matematik'te 40 sorunun (geometri dahil)
                            dağılımı genellikle aşağıdaki tabloda belirtilen ağırlıklarda olmaktadır.
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">AYT Matematik Konusu</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Tahmini Soru</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Stratejik Önem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-red-50"><td className="px-5 py-3 font-medium">Limit, Türev ve İntegral (LTİ)</td><td className="px-5 py-3 text-center font-bold text-lg">9-11</td><td className="px-5 py-3 text-red-700">🔴 En Yüksek (Belirleyici)</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Trigonometri</td><td className="px-5 py-3 text-center font-bold">4-5</td><td className="px-5 py-3 text-orange-700">🟠 Yüksek</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Fonksiyonlar (Uygulamalar ve Grafikler)</td><td className="px-5 py-3 text-center font-bold">2-3</td><td className="px-5 py-3 text-orange-700">🟠 Yüksek (Temel Konu)</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Logaritma</td><td className="px-5 py-3 text-center font-bold">2-3</td><td className="px-5 py-3 text-green-700">🟢 Garanti Net Getiren</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Diziler</td><td className="px-5 py-3 text-center font-bold">1-2</td><td className="px-5 py-3 text-green-700">🟢 Garanti Net Getiren</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Olasılık, Permütasyon, Kombinasyon</td><td className="px-5 py-3 text-center font-bold">2-3</td><td className="px-5 py-3 text-yellow-700">🟡 Orta</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">İkinci Dereceden Denklemler ve Eşitsizlikler</td><td className="px-5 py-3 text-center font-bold">2</td><td className="px-5 py-3 text-blue-700">Temel Bilgi</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Parabol</td><td className="px-5 py-3 text-center font-bold">1</td><td className="px-5 py-3 text-blue-700">Temel Bilgi</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Polinomlar</td><td className="px-5 py-3 text-center font-bold">1-2</td><td className="px-5 py-3 text-yellow-700">🟡 Orta</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Temel Kavramlar ve Mantık (TYT Temelli)</td><td className="px-5 py-3 text-center font-bold">2-3</td><td className="px-5 py-3 text-gray-600">Alt Yapı</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Geometri (Tüm Konular)</td><td className="px-5 py-3 text-center font-bold">10</td><td className="px-5 py-3 text-purple-700">🟣 Yüksek Önem</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg mb-8">
                            <h3 className="font-bold text-amber-900 mb-2">⚠️ LTİ (Limit, Türev, İntegral) Gerçeği</h3>
                            <p className="text-gray-700 text-sm">
                                Eğer hedefiniz Sayısalda ilk 50.000 veya Eşit Ağırlıkta ilk 30.000 ise, LTİ konularını
                                es geçme lüksünüz yoktur. Sınavın tam kalbini oluşturan bu 10 soru, sizi binlerce rakibinizin
                                önüne atacak veya gerisine düşürecektir.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Fonksiyonlar: Tüm AYT'nin Temel Taşı</h2>
                        <p className="mb-4">
                            Öğrenciler genellikle Limit, Türev ve İntegral konularına büyük bir hevesle başlar ancak bir
                            süre sonra tıkanırlar. Bunun en büyük sebebi <strong>Fonksiyonlar</strong> konusundaki eksikliklerdir.
                        </p>
                        <p className="mb-4">
                            Fonksiyonlar konusu AYT Matematik'in alfabesidir. Eğer fonksiyon okumayı, fonksiyon grafiklerini
                            yorumlamayı (ötüleme, simetri alma, mutlak değerini çizme) bilmiyorsanız:
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-6">
                            <li>Parabol sorularını çözemezsiniz.</li>
                            <li>Polinomlarda P(x-2) mantığını kuramazsınız.</li>
                            <li>Türevin geometrik yorumunda grafiğe teğet çizemezsiniz.</li>
                            <li>İntegralde eğri altında kalan alanı hesaplarken sınırları bulamazsınız.</li>
                        </ul>
                        <p className="font-medium text-blue-900 bg-blue-50 p-4 rounded-lg">
                            Özetle: Fonksiyon bilmeden AYT Matematik çalışılmaz! AYT kampınıza başlamadan önce mutlaka 
                            en az 1 hafta sadece Fonksiyon Grafikleri ve Uygulamaları konusuna çalışın.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Trigonometri: Hem Garanti Net Hem De Zorlayıcı</h2>
                        <p className="mb-4">
                            Trigonometriden her yıl ortalama 4 veya 5 soru gelir. Bu soruların en az 2 tanesi temel
                            özdeşlikler, sadeleştirme veya dik üçgende oran bulma gibi klasik ve çözülebilir sorulardır.
                            Ancak geriye kalan sorular (özellikle toplam-fark formülleri, yarım açı veya trigonometrik
                            denklemler) analitik düzlemle harmanlanarak oldukça seçici olabilir.
                        </p>
                        
                        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl my-6">
                            <h4 className="font-bold text-gray-900 mb-2">Trigonometri Çalışma Taktikleri:</h4>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li><strong>Formül Kağıdı:</strong> Trigonometri tamamen formül ezberidir. Kendi formül kağıdınızı oluşturun ve masanıza asın.</li>
                                <li><strong>Geometri Temeli:</strong> Trigonometri çözebilmek için temel geometri (özellikle dik üçgen, özel üçgenler ve benzerlik) şarttır.</li>
                                <li><strong>Birim Çember:</strong> Tüm konunun mantığı birim çemberde yatar. Birim çemberdeki işaretleri ve açıların bölgelere göre davranışını ezberlemeyin, mantığını çizin.</li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">AYT Geometri: TYT'den Farkı Nedir?</h2>
                        <p className="mb-4">
                            AYT Geometri, TYT Geometriye göre çok daha "klasik" sorular içerir. TYT'de katlama, kesme,
                            döndürme, hikayeleştirme gibi yeni nesil sorular varken, AYT'de ağırlıklı olarak Çember,
                            Daire, Analitik Geometri ve Katı Cisimler doğrudan bilgi soruları şeklinde karşımıza çıkar.
                        </p>
                        <p className="mb-4">
                            Özellikle <strong>Analitik Geometri</strong> konusundan her yıl banko 3 soru gelmektedir.
                            Noktanın ve doğrunun analitik incelenmesi, simetri-dönüşüm konuları AYT Geometrinin belkemiğidir.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Puanınızı ve Sıralamanızı Öğrenin</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                Netlerinizi hesaplayın, hedefinize ne kadar kaldığını anında görün.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Hemen Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Son Taktikler: Fasikül Çözmenin Önemi</h2>
                        <p className="mb-4">
                            AYT Matematik, sadece soru bankası çözerek halledilemez. Soru bankalarındaki testler konuyu genel
                            hatlarıyla tarar. Ancak Limit, Türev, İntegral, Trigonometri, Logaritma, Diziler, Fonksiyonlar ve
                            Polinomlar için mutlaka <strong>konu fasikülleri</strong> bitirmelisiniz. Apotemi, Acil, Orijinal
                            gibi yayınların fasikülleri size bir konuyu sıfırdan alıp en zor noktasına kadar öğretir.
                        </p>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Matematik Çalışanlara Önerilen Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-puan-turleri" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">SAY ve EA Puan Türleri →</p>
                                    <p className="text-sm text-gray-600 mt-1">Matematik netleri sıralamayı ne kadar etkiler?</p>
                                </Link>
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">1 Net Kaç Kişi Attırır? →</p>
                                    <p className="text-sm text-gray-600 mt-1">AYT Matematikte yapılan 1 netin standart sapma gücü</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
