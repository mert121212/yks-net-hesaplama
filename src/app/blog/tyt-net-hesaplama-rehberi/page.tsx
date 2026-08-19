import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'TYT Net Hesaplama Rehberi 2027: Adım Adım Kılavuz | YKS Net Hesaplama',
    description: 'TYT sınavında net hesaplama nasıl yapılır? 0,5 net şartı, soru dağılımı, süre yönetimi ve stratejik ipuçları. 2027 YKS sistemine uygun güncel rehber.',
    keywords: 'tyt net hesaplama, tyt net hesaplama 2027, tyt türkçe net, tyt matematik net, tyt fen net, tyt sosyal net, tyt baraj',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-net-hesaplama-rehberi' },
    openGraph: {
        title: 'TYT Net Hesaplama Rehberi 2027: Adım Adım Kılavuz',
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
                            <span className="text-gray-600">• 11 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TYT Net Hesaplama Rehberi: 4 Yanlış 1 Doğruyu Nasıl Götürür?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Net hesaplamak sadece doğru ve yanlışları çıkarmak değildir; hangi dersin puanına nasıl etki ettiğini bilmek sınav stratejini baştan aşağı değiştirir.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS maratonunun ilk ve en kalabalık virajı olan TYT (Temel Yeterlilik Testi), toplam <strong>120 sorudan</strong> oluşur ve adaylara <strong>165 dakika</strong> süre verilir. Sınav bittiğinde doğru ve yanlış sayılarını sayıp netini bulmak kolay görünür ama işin arka planındaki katsayı dengesini bilmeyenler çoğu zaman yanlış derslere gereğinden fazla vakit harcar.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            1. TYT Net Hesaplama Formülü
                        </h2>
                        <p>
                            ÖSYM&apos;nin tüm testlerinde geçerli olan altın kural: <strong>Her 4 yanlış cevap, 1 doğru cevabınızı siler</strong>. Boş bıraktığınız sorular ise netinizi ne artırır ne de azaltır (0 puandır).
                        </p>

                        <div className="bg-slate-900 text-white p-6 rounded-xl text-center my-6">
                            <p className="text-2xl font-bold font-mono mb-2">Net = Doğru Sayısı − (Yanlış Sayısı ÷ 4)</p>
                            <p className="text-xs text-slate-400">Örnek: 30 Doğru, 6 Yanlış → 30 − (6 ÷ 4) = 30 − 1.5 = 28.5 Net</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            2. 0.5 Net Kuralı: En Çok Can Yakan Detay
                        </h2>
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg my-6">
                            <h3 className="font-bold text-red-900 mb-2">⚠️ Puanınızın Hesaplanması İçin Şart</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                TYT puanınızın hesaplanabilmesi için <strong>Türkçe veya Temel Matematik testlerinin en az birinden minimum 0.5 net</strong> (yani en az 1 doğru ve en fazla 2 yanlış gibi) yapmanız zorunludur. Fen veya Sosyal testlerinden 40&apos;ta 40 bile yapsanız, Türkçe ve Matematik netleriniz 0 veya eksi ise TYT puanınız hesaplanmaz.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            3. TYT Soru Dağılımı ve İdeal Süre Dağılımı
                        </h2>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Test Adı</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Soru Sayısı</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Önerilen Süre</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Net Başına Tahmini Katkı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Türkçe</td><td className="px-5 py-3 text-center font-bold">40</td><td className="px-5 py-3 text-center">40 – 45 dk</td><td className="px-5 py-3 text-center text-blue-700 font-bold">~ 1.32 Puan</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Temel Matematik</td><td className="px-5 py-3 text-center font-bold">40</td><td className="px-5 py-3 text-center">55 – 60 dk</td><td className="px-5 py-3 text-center text-blue-700 font-bold">~ 1.32 Puan</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Sosyal Bilimler (Tar, Coğ, Fel, Din)</td><td className="px-5 py-3 text-center font-bold">20</td><td className="px-5 py-3 text-center">15 – 20 dk</td><td className="px-5 py-3 text-center text-emerald-700 font-bold">~ 1.36 Puan</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Fen Bilimleri (Fiz, Kim, Biy)</td><td className="px-5 py-3 text-center font-bold">20</td><td className="px-5 py-3 text-center">15 – 20 dk</td><td className="px-5 py-3 text-center text-emerald-700 font-bold">~ 1.36 Puan</td></tr>
                                    <tr className="bg-blue-100 font-bold"><td className="px-5 py-3">TOPLAM</td><td className="px-5 py-3 text-center">120</td><td className="px-5 py-3 text-center">165 Dakika</td><td className="px-5 py-3 text-center">Maks 500 Puan</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            4. TYT Netleri AYT Puanına Nasıl Yansır?
                        </h2>
                        <p>
                            Üniversite yerleştirme puanınız hesaplanırken TYT&apos;nin ağırlığı <strong>%40</strong>, AYT&apos;nin ağırlığı ise <strong>%60</strong>&apos;tır. Yani TYT&apos;de yapacağınız her 1 net, yerleştirme puanınıza yaklaşık <strong>1.33 puan</strong> olarak eklenir.
                        </p>
                        <p>
                            Örneğin, TYT&apos;de 60 net yapan bir öğrenci ile 80 net yapan bir öğrenci arasında yaklaşık <strong>26.5 puanlık</strong> bir fark oluşur. Bu fark, AYT sabit tutulduğunda yığılma bölgesinde 40.000 ila 70.000 kişilik bir sıralama avantajı demektir.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">TYT Netlerinizi ve Sıralamanızı Hesaplayın</h3>
                            <p className="text-blue-100 mb-6">
                                Doğru ve yanlış sayılarınızı girerek 2027 katsayılarıyla tahmini puanınızı hemen öğrenin.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Hemen Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Bunları da İncele</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-kesin-cikan-konular" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    <p className="font-semibold text-green-900">TYT Kesin Çıkan Altın Konular →</p>
                                    <p className="text-xs text-gray-600 mt-1">Sınavda garanti soru getiren konular.</p>
                                </Link>
                                <Link href="/blog/yks-kac-net-kac-puan" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">Kaç Net Kaç Puan Eder? →</p>
                                    <p className="text-xs text-gray-600 mt-1">Net-puan dönüşüm tabloları.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
