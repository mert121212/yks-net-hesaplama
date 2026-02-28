import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'YKS 2026 Başvuru Tarihleri ve Takvimi | YKS Net Hesaplama',
    description: 'YKS 2026 başvuru tarihleri, sınav tarihleri ve sonuç açıklama tarihleri. Tüm önemli tarihler ve YKS takvimi.',
    keywords: 'yks 2026 tarihleri, yks başvuru tarihleri, yks sınav tarihi, yks sonuç tarihi',
}

export default function YKS2026BasvuruTarihleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS 2026 Başvuru Tarihleri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Takvim</span>
                            <time className="text-gray-600">23 Şubat 2026</time>
                            <span className="text-gray-600">• 4 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS 2026 Başvuru Tarihleri ve Takvimi
                        </h1>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12">
                            <h2 className="text-3xl font-bold mb-6 text-white">📅 YKS 2026 Önemli Tarihler</h2>
                            <div className="space-y-4">
                                <div className="bg-white/10 p-4 rounded-lg">
                                    <p className="font-bold text-xl mb-1">TYT Sınavı</p>
                                    <p className="text-blue-100">20 Haziran 2026 Cumartesi - 10:15</p>
                                </div>
                                <div className="bg-white/10 p-4 rounded-lg">
                                    <p className="font-bold text-xl mb-1">AYT Sınavı</p>
                                    <p className="text-blue-100">21 Haziran 2026 Pazar - 10:15</p>
                                </div>
                                <div className="bg-white/10 p-4 rounded-lg">
                                    <p className="font-bold text-xl mb-1">YDT Sınavı</p>
                                    <p className="text-blue-100">21 Haziran 2026 Pazar - 15:30</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">YKS 2026 Takvimi</h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-2">📝 Başvuru Dönemi</h3>
                                <p className="text-gray-700 mb-2"><strong>Başvuru Başlangıcı:</strong> 15 Mart 2026</p>
                                <p className="text-gray-700 mb-2"><strong>Başvuru Bitişi:</strong> 5 Nisan 2026</p>
                                <p className="text-sm text-gray-600 mt-3">
                                    ⚠️ Son gün yoğunluk olur, erken başvuru yapın!
                                </p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                                <h3 className="font-bold text-green-900 mb-2">🎫 Sınav Giriş Belgesi</h3>
                                <p className="text-gray-700 mb-2"><strong>Belge Yayın Tarihi:</strong> 10 Haziran 2026</p>
                                <p className="text-sm text-gray-600 mt-3">
                                    ÖSYM'nin web sitesinden indirebilirsiniz
                                </p>
                            </div>

                            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                                <h3 className="font-bold text-purple-900 mb-2">📊 Sonuç Açıklama</h3>
                                <p className="text-gray-700 mb-2"><strong>TYT-AYT Sonuçları:</strong> 15 Temmuz 2026 (tahmini)</p>
                                <p className="text-gray-700 mb-2"><strong>YDT Sonuçları:</strong> 15 Temmuz 2026 (tahmini)</p>
                                <p className="text-sm text-gray-600 mt-3">
                                    Sonuçlar ÖSYM'nin web sitesinden açıklanır
                                </p>
                            </div>

                            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
                                <h3 className="font-bold text-orange-900 mb-2">🎓 Tercih Dönemi</h3>
                                <p className="text-gray-700 mb-2"><strong>Tercih Başlangıcı:</strong> 20 Temmuz 2026 (tahmini)</p>
                                <p className="text-gray-700 mb-2"><strong>Tercih Bitişi:</strong> 5 Ağustos 2026 (tahmini)</p>
                                <p className="text-sm text-gray-600 mt-3">
                                    Tercihlerinizi dikkatlice yapın, değişiklik hakkınız var
                                </p>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                                <h3 className="font-bold text-red-900 mb-2">🏆 Yerleştirme Sonuçları</h3>
                                <p className="text-gray-700 mb-2"><strong>Sonuç Açıklama:</strong> 25 Ağustos 2026 (tahmini)</p>
                                <p className="text-sm text-gray-600 mt-3">
                                    Yerleştiğiniz programı ÖSYM'den öğrenebilirsiniz
                                </p>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
                            <h3 className="font-bold text-yellow-900 mb-3">⚠️ Önemli Uyarılar</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>✓ Başvuru ücretini zamanında yatırın</li>
                                <li>✓ Sınav giriş belgenizi mutlaka yazdırın</li>
                                <li>✓ Sınav günü kimliğinizi yanınıza alın</li>
                                <li>✓ Sınav salonuna en az 30 dakika önce gelin</li>
                                <li>✓ Tercih yaparken dikkatli olun, acele etmeyin</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Geri Sayımı Takip Edin!</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                YKS 2026'ya kalan süreyi canlı takip edin
                            </p>
                            <Link href="/geri-sayim" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Geri Sayım →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sınav Günü Hazırlık</h2>

                        <div className="space-y-4 my-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">📋 Yanınıza Almanız Gerekenler</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Sınav giriş belgesi (çıktı)</li>
                                    <li>Kimlik belgesi (nüfus cüzdanı, ehliyet veya pasaport)</li>
                                    <li>Kurşun kalem (2B veya HB)</li>
                                    <li>Silgi</li>
                                    <li>Kalemtıraş</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">❌ Sınava Götüremeyecekleriniz</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Cep telefonu</li>
                                    <li>Akıllı saat</li>
                                    <li>Hesap makinesi</li>
                                    <li>Müzik çalar</li>
                                    <li>Çanta (sınav salonuna)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-hazirlik-programi" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">YKS Hazırlık Programı →</p>
                                </Link>
                                <Link href="/geri-sayim" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">YKS Geri Sayım →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
