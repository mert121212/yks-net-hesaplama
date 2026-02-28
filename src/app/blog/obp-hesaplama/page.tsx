import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'OBP (Ortaöğretim Başarı Puanı) Nedir? Nasıl Hesaplanır? 2026',
    description: 'Lise diploma notunuzun YKS puanınıza etkisi nedir? OBP hesaplama formülü ve örnekleri. OBP nedir, nasıl hesaplanır?',
    keywords: 'obp nedir, obp hesaplama, ortaöğretim başarı puanı, diploma notu, yks obp',
}

export default function OBPHesaplama() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">OBP Hesaplama</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600">24 Şubat 2026</time>
                            <span className="text-gray-600">• 5 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            OBP Nedir? Nasıl Hesaplanır?
                        </h1>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            OBP (Ortaöğretim Başarı Puanı), lise diploma notunuzun YKS puanınıza katkısıdır.
                            YKS puanınızın %12'sini oluşturur ve doğru hesaplanması çok önemlidir.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">OBP Nedir?</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            OBP, lise eğitiminiz boyunca aldığınız notların ortalamasının YKS puanınıza eklenmesidir.
                            Bu sistem, sadece sınav gününüzün değil, 4 yıllık çalışmanızın da değerlendirilmesini sağlar.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                            <h3 className="font-bold text-blue-900 mb-3">📊 OBP Hesaplama Formülü</h3>
                            <div className="bg-white p-4 rounded-lg my-4">
                                <p className="text-2xl font-bold text-gray-900 text-center">
                                    OBP = Diploma Notu × 5
                                </p>
                            </div>
                            <p className="text-sm text-gray-700">
                                Örnek: Diploma notunuz 85 ise → OBP = 85 × 5 = 425 puan
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">OBP Örnekleri</h2>

                        <div className="space-y-4 my-8">
                            <div className="bg-green-50 p-6 rounded-lg">
                                <h3 className="font-bold text-green-900 mb-2">Örnek 1: Yüksek Diploma Notu</h3>
                                <p className="text-gray-700 mb-2">Diploma Notu: 90</p>
                                <p className="text-gray-700 mb-2">OBP = 90 × 5 = <strong className="text-green-700">450 puan</strong></p>
                                <p className="text-sm text-gray-600">YKS puanınıza 450 × 0.12 = 54 puan eklenir</p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">Örnek 2: Orta Diploma Notu</h3>
                                <p className="text-gray-700 mb-2">Diploma Notu: 75</p>
                                <p className="text-gray-700 mb-2">OBP = 75 × 5 = <strong className="text-blue-700">375 puan</strong></p>
                                <p className="text-sm text-gray-600">YKS puanınıza 375 × 0.12 = 45 puan eklenir</p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-lg">
                                <h3 className="font-bold text-orange-900 mb-2">Örnek 3: Düşük Diploma Notu</h3>
                                <p className="text-gray-700 mb-2">Diploma Notu: 60</p>
                                <p className="text-gray-700 mb-2">OBP = 60 × 5 = <strong className="text-orange-700">300 puan</strong></p>
                                <p className="text-sm text-gray-600">YKS puanınıza 300 × 0.12 = 36 puan eklenir</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">OBP'nizi Hesaplayın!</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                Diploma notunuzu girerek OBP'nizi öğrenin
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Özel Durumlar</h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">📌 Meslek Lisesi Mezunları</h3>
                                <p className="text-gray-700">
                                    Meslek lisesi mezunları, kendi alanlarındaki bölümlere başvururken OBP'lerinin
                                    tamamını kullanabilirler. Diğer alanlara başvururken OBP'nin yarısı hesaba katılır.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">📌 Daha Önce Yerleşenler</h3>
                                <p className="text-gray-700">
                                    Daha önce bir programa yerleşip kayıt yaptıranlar, o yılki puanlarını kullanabilirler.
                                    Yeni sınavda daha düşük puan alsalar bile eski puanları geçerlidir.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">📌 Açık Lise Mezunları</h3>
                                <p className="text-gray-700">
                                    Açık lise mezunları da OBP hesaplamasından yararlanır. Diploma notları aynı
                                    formülle hesaplanır.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sık Sorulan Sorular</h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">❓ OBP'yi artırabilir miyim?</h3>
                                <p className="text-gray-700">
                                    Hayır, mezun olduktan sonra OBP'nizi değiştiremezsiniz. Ancak lise öğrencisiyseniz
                                    notlarınızı yükselterek OBP'nizi artırabilirsiniz.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">❓ OBP zorunlu mu?</h3>
                                <p className="text-gray-700">
                                    Evet, OBP otomatik olarak hesaplanır ve YKS puanınıza eklenir. Reddedemezsiniz.
                                </p>
                            </div>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-net-hesaplama-nasil-yapilir" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">YKS Net Hesaplama →</p>
                                </Link>
                                <Link href="/blog/ayt-puan-hesaplama" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">AYT Puan Hesaplama →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
