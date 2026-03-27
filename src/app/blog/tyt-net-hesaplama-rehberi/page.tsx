import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'TYT Net Hesaplama Rehberi 2026: Adım Adım Kılavuz | YKS Net Hesaplama',
    description: 'TYT sınavında net hesaplama nasıl yapılır? 0,5 net şartı, soru dağılımı, süre yönetimi ve stratejik ipuçları. 2026 YKS sistemine uygun güncel rehber.',
    keywords: 'tyt net hesaplama, tyt net hesaplama 2026, tyt türkçe net, tyt matematik net, tyt fen net, tyt sosyal net, tyt baraj',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-net-hesaplama-rehberi' },
    openGraph: {
        title: 'TYT Net Hesaplama Rehberi 2026: Adım Adım Kılavuz',
        description: 'TYT sınavında net hesaplama nasıl yapılır? 0,5 net şartı, soru dağılımı ve stratejik ipuçları.',
        type: 'article',
        publishedTime: '2026-02-27',
        url: 'https://yksnethesapla.com/blog/tyt-net-hesaplama-rehberi',
    },
}

export default function TYTNetHesaplamaRehberi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Net Hesaplama Rehberi</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">TYT</span>
                            <time className="text-gray-600">27 Şubat 2026</time>
                            <span className="text-gray-600">• 6 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TYT Net Hesaplama Rehberi 2026: Adım Adım Kılavuz
                        </h1>
                        <p className="text-xl text-gray-600">
                            TYT net hesaplama sadece bir matematik işlemi değil, sınav stratejinizi belirleyen
                            en önemli veridir. 2026 YKS sistemine uygun güncel bilgilerle hazırlanın.
                        </p>
                    </header>

                    <div className="prose prose-lg max-w-none">

                        {/* 1. Formül */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">1. TYT Net Hesaplama Formülü</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            TYT&apos;de &quot;4 yanlış 1 doğruyu götürür&quot; kuralı geçerlidir. Her ders kendi içinde
                            hesaplanır ve ardından toplam netiniz ortaya çıkar.
                        </p>
                        <div className="bg-gray-100 p-6 rounded-lg my-6 text-center">
                            <p className="text-2xl font-bold text-gray-900">
                                Net = Doğru Sayısı − (Yanlış Sayısı ÷ 4)
                            </p>
                        </div>

                        {/* 2. 0.5 Net Şartı */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">2. Kritik Kural: 0,5 Net Şartı</h2>
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-6">
                            <h3 className="font-bold text-amber-900 mb-2">⚠️ Pek Çok Adayın Gözden Kaçırdığı Detay</h3>
                            <p className="text-gray-700">
                                2026 YKS kurallarına göre TYT puanınızın hesaplanabilmesi için
                                <strong> Türkçe veya Temel Matematik</strong> testlerinin herhangi birinden
                                en az <strong>0,5 net</strong> yapmış olmanız gerekir.
                                Bu iki testten de sıfır veya eksi net yaparsanız, Fen veya Sosyal&apos;de
                                tam net yapsanız dahi TYT puanınız hesaplanmaz.
                            </p>
                        </div>
                        <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-lg mb-6">
                            <h3 className="font-bold text-green-900 mb-2">✅ Baraj Puanı Hakkında Doğru Bilgi</h3>
                            <p className="text-gray-700">
                                &quot;TYT&apos;de başarılı olmadan AYT&apos;ye geçemezsiniz&quot; ifadesi teknik olarak artık geçerli değildir.
                                2022 yılında yapılan düzenlemeyle <strong>baraj puanı uygulaması kaldırılmıştır.</strong>
                                Ancak TYT, yerleştirme puanınızın yaklaşık <strong>%40&apos;ını</strong> oluşturur;
                                bu nedenle TYT&apos;yi hafife almak büyük bir stratejik hatadır.
                            </p>
                        </div>

                        {/* 3. Soru Dağılımı */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">3. TYT Soru Dağılımı ve Süre Yönetimi</h2>
                        <p className="text-gray-700 mb-4">
                            120 sorudan oluşan TYT oturumunda toplam 165 dakika süreniz bulunmaktadır.
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left font-semibold border-b">Ders</th>
                                        <th className="px-6 py-3 text-center font-semibold border-b">Soru Sayısı</th>
                                        <th className="px-6 py-3 text-center font-semibold border-b">Soru Başına Önerilen Süre</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 font-medium">Türkçe</td>
                                        <td className="px-6 py-4 text-center font-bold">40</td>
                                        <td className="px-6 py-4 text-center">1,0 – 1,2 dakika</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="px-6 py-4 font-medium">Matematik</td>
                                        <td className="px-6 py-4 text-center font-bold">40</td>
                                        <td className="px-6 py-4 text-center">1,2 – 1,5 dakika</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 font-medium">Sosyal Bilimler</td>
                                        <td className="px-6 py-4 text-center font-bold">20</td>
                                        <td className="px-6 py-4 text-center">0,8 dakika</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="px-6 py-4 font-medium">Fen Bilimleri</td>
                                        <td className="px-6 py-4 text-center font-bold">20</td>
                                        <td className="px-6 py-4 text-center">0,8 dakika</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-bold">TOPLAM</td>
                                        <td className="px-6 py-4 text-center font-bold">120</td>
                                        <td className="px-6 py-4 text-center font-bold">165 dakika</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* 4. Örnek Hesaplamalar */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">4. Ders Bazlı Örnek Hesaplamalar</h2>
                        <div className="space-y-4 my-6">
                            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                                <h4 className="font-bold text-blue-900 mb-2">📝 Türkçe</h4>
                                <p className="text-gray-800">32 doğru, 6 yanlış → 32 − (6 ÷ 4) = 32 − 1,5 = <strong className="text-blue-700">30,5 net</strong></p>
                            </div>
                            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                                <h4 className="font-bold text-green-900 mb-2">🔢 Matematik</h4>
                                <p className="text-gray-800">25 doğru, 12 yanlış → 25 − (12 ÷ 4) = 25 − 3 = <strong className="text-green-700">22 net</strong></p>
                            </div>
                            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                                <h4 className="font-bold text-purple-900 mb-2">🔬 Fen Bilimleri</h4>
                                <p className="text-gray-800">15 doğru, 4 yanlış → 15 − (4 ÷ 4) = 15 − 1 = <strong className="text-purple-700">14 net</strong></p>
                            </div>
                            <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
                                <h4 className="font-bold text-orange-900 mb-2">🌍 Sosyal Bilimler</h4>
                                <p className="text-gray-800">16 doğru, 3 yanlış → 16 − (3 ÷ 4) = 16 − 0,75 = <strong className="text-orange-700">15,25 net</strong></p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">TYT Netlerinizi Hemen Hesaplayın</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                Doğru ve yanlış sayılarınızı girerek TYT netlerinizi ve tahmini puanınızı anında öğrenin
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Hesapla →
                            </Link>
                        </div>

                        {/* 5. TYT AYT İlişkisi */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">5. TYT Puanı AYT&apos;yi Nasıl Etkiler?</h2>
                        <p className="text-gray-700 mb-4">
                            TYT, yerleştirme puanınızın yaklaşık <strong>%40&apos;ını</strong> oluşturur.
                            Yani TYT&apos;de yapacağınız her 1 net, AYT&apos;deki başarınızı doğrudan yukarı taşır veya aşağı çeker.
                            Kabaca 1 TYT neti, yerleştirme puanına <strong>~1,3 – 1,4 puan</strong> katkı sağlar.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
                            <p className="text-blue-900 text-sm">
                                <strong>Örnek:</strong> TYT&apos;de 80 net yapan bir aday, 60 net yapana göre yaklaşık
                                26 puan daha yüksek bir yerleştirme puanı elde eder (AYT sabit tutulduğunda).
                                Bu fark, sıralamada on binlerce kişilik bir avantaja dönüşebilir.
                            </p>
                        </div>

                        {/* 6. Stratejiler */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">6. Başarı İçin Stratejik İpuçları</h2>
                        <div className="space-y-4 my-6">
                            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-gray-400">
                                <h3 className="font-bold text-gray-900 mb-2">Turlama Tekniği</h3>
                                <p className="text-gray-700 text-sm">
                                    İlk bakışta çözemediğiniz soruların yanına bir işaret koyup geçin.
                                    TYT bir hız sınavıdır; bir soruya 3 dakikadan fazla harcamak diğer 2 kolay soruyu
                                    kaybetmenize neden olabilir.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-gray-400">
                                <h3 className="font-bold text-gray-900 mb-2">Standart Sapma Yanılgısı</h3>
                                <p className="text-gray-700 text-sm">
                                    &quot;Zor sorular daha çok puan getirir&quot; düşüncesi kısmen doğrudur ancak her netin
                                    bir taban puanı vardır. Önce kolay ve orta seviye soruları süpürmek puanınızı garantiler.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-gray-400">
                                <h3 className="font-bold text-gray-900 mb-2">Analizli Deneme</h3>
                                <p className="text-gray-700 text-sm">
                                    Sadece net hesaplamak yetmez. Yanlış yaptığınız soruların hangi konulardan olduğunu
                                    not edin ve o hafta sadece o eksiklere odaklanın.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-gray-400">
                                <h3 className="font-bold text-gray-900 mb-2">Şans İşaretleme Stratejisi</h3>
                                <p className="text-gray-700 text-sm">
                                    2 şık arasında kaldıysanız işaretleyin (%50 şans). 3–4 şık arasındaysanız boş bırakın;
                                    yanlış yapma ihtimali net kaybına yol açar.
                                </p>
                            </div>
                        </div>

                        {/* SSS */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sıkça Sorulan Sorular</h2>
                        <div className="space-y-4 my-6">
                            <div className="border-b pb-4">
                                <h3 className="font-bold text-gray-900 mb-2">TYT&apos;de 1 net kaç puan getirir?</h3>
                                <p className="text-gray-700 text-sm">
                                    Standart sapmaya göre değişmekle birlikte, kabaca 1 TYT neti yaklaşık
                                    1,3 – 1,4 puan civarında bir katkı sağlar.
                                </p>
                            </div>
                            <div className="border-b pb-4">
                                <h3 className="font-bold text-gray-900 mb-2">Yanlışlar toplam netten mi düşer?</h3>
                                <p className="text-gray-700 text-sm">
                                    Hayır, her dersin yanlışı kendi branşındaki doğrularını götürür.
                                    Sosyal&apos;deki yanlışlarınız Matematik doğrularınızı etkilemez.
                                </p>
                            </div>
                            <div className="border-b pb-4">
                                <h3 className="font-bold text-gray-900 mb-2">TYT&apos;de kaç net iyi sayılır?</h3>
                                <p className="text-gray-700 text-sm">
                                    80+ net çok iyi, 60–80 net iyi, 40–60 net orta seviye sayılır.
                                    Hedef üniversitenize ve puan türünüze göre değişir.
                                </p>
                            </div>
                            <div className="pb-4">
                                <h3 className="font-bold text-gray-900 mb-2">En gerçekçi sıralama nerede hesaplanır?</h3>
                                <p className="text-gray-700 text-sm">
                                    ÖSYM verileriyle uyumlu algoritmamız için{' '}
                                    <Link href="/" className="text-blue-600 hover:underline font-medium">
                                        TYT Net Hesaplama aracımızı
                                    </Link>{' '}
                                    ziyaret edebilirsiniz.
                                </p>
                            </div>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-net-hesaplama-nasil-yapilir" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">YKS Net Hesaplama Rehberi →</p>
                                    <p className="text-sm text-gray-700">Genel YKS net hesaplama</p>
                                </Link>
                                <Link href="/blog/ayt-puan-hesaplama" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">AYT Puan Hesaplama →</p>
                                    <p className="text-sm text-gray-700">AYT puanlarını hesaplayın</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
