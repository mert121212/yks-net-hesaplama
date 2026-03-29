import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'İletişim | YKS Net Hesaplama - yksnethesapla.com',
    description: 'YKS Net Hesaplama ekibiyle iletişime geçin. Teknik destek, içerik önerisi veya iş birliği talepleriniz için bize ulaşın. 24-48 saat içinde yanıt veriyoruz.',
    keywords: 'yks net hesaplama iletişim, yksnethesapla iletişim, yks hesaplama destek',
    alternates: { canonical: 'https://yksnethesapla.com/iletisim' },
}

export default function IletisimPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">İletişim</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Görüşleriniz geleceğimizi şekillendiriyor. 2026 YKS hazırlık sürecinde
                            karşılaştığınız teknik sorunlar, içerik önerileri veya iş birliği talepleriniz
                            için ekibimizle doğrudan iletişime geçebilirsiniz.
                        </p>
                    </header>

                    {/* İletişim kanalları tablosu */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">İletişim Kanallarımız</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-xl">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b text-gray-900">İletişim Yolu</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b text-gray-900">Detaylar</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b text-gray-900">Yanıt Süresi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="px-5 py-4 font-medium">📧 E-Posta</td>
                                        <td className="px-5 py-4">
                                            <a href="mailto:mertcaliskan36065d@gmail.com" className="text-blue-600 hover:underline font-medium">
                                                mertcaliskan36065d@gmail.com
                                            </a>
                                        </td>
                                        <td className="px-5 py-4 text-sm text-gray-600">24 – 48 Saat</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="px-5 py-4 font-medium">🐛 Teknik Destek</td>
                                        <td className="px-5 py-4 text-sm text-gray-700">Hata bildirimleri ve bug raporları</td>
                                        <td className="px-5 py-4 text-sm text-green-700 font-medium">Öncelikli Yanıt</td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-4 font-medium">🤝 İş Birlikleri</td>
                                        <td className="px-5 py-4 text-sm text-gray-700">Eğitim kurumları ve içerik ortaklıkları</td>
                                        <td className="px-5 py-4 text-sm text-gray-600">3 İş Günü</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Çalışma saatleri */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Çalışma Saatleri</h2>
                        <p className="text-gray-700 mb-4">
                            Dijital tabanlı bir eğitim platformu olarak Türkiye genelinde tüm öğrencilere
                            hizmet veriyoruz. Teknik ekibimiz aşağıdaki saatlerde aktif destek sunmaktadır:
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500 text-center">
                                <p className="font-bold text-green-900 mb-1">Hafta İçi</p>
                                <p className="text-gray-700 text-sm">09:00 – 18:00</p>
                                <p className="text-xs text-green-700 mt-1">Tam Destek</p>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-xl border-l-4 border-yellow-500 text-center">
                                <p className="font-bold text-yellow-900 mb-1">Cumartesi</p>
                                <p className="text-gray-700 text-sm">10:00 – 14:00</p>
                                <p className="text-xs text-yellow-700 mt-1">Sınırlı Destek</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-gray-400 text-center">
                                <p className="font-bold text-gray-900 mb-1">Pazar</p>
                                <p className="text-gray-700 text-sm">—</p>
                                <p className="text-xs text-gray-600 mt-1">Sadece Acil Hata Bildirimleri</p>
                            </div>
                        </div>
                    </section>

                    {/* Konu başlığı rehberi */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">E-Posta Konu Başlığı Rehberi</h2>
                        <p className="text-gray-700 mb-4 text-sm">
                            Daha hızlı yanıt alabilmek için e-postanızın konu satırında şu etiketleri kullanın:
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                                <span className="font-mono font-bold text-red-700 text-sm whitespace-nowrap">[HATA]</span>
                                <p className="text-gray-700 text-sm">Sitedeki bir hesaplama hatası veya teknik sorun hakkında</p>
                            </div>
                            <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                <span className="font-mono font-bold text-blue-700 text-sm whitespace-nowrap">[ÖNERİ]</span>
                                <p className="text-gray-700 text-sm">Yeni bir özellik, içerik fikri veya iyileştirme önerisi</p>
                            </div>
                            <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                                <span className="font-mono font-bold text-green-700 text-sm whitespace-nowrap">[REKLAM]</span>
                                <p className="text-gray-700 text-sm">İş birliği ve reklam teklifleri</p>
                            </div>
                        </div>
                    </section>

                    {/* Konum ve SSS */}
                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-3">📍 Konum</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                YKS Net Hesaplama<br />
                                Online Eğitim Platformu<br />
                                <strong>Ankara, Türkiye</strong>
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-3">❓ Sık Sorulan Sorular</h3>
                            <p className="text-gray-700 text-sm mb-3">
                                Sorunuzun cevabı SSS sayfamızda olabilir.
                            </p>
                            <Link href="/sss" className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                                SSS Sayfasına Git →
                            </Link>
                        </div>
                    </div>

                    {/* Yasal uyarı */}
                    <div className="border-t pt-8">
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                            <p className="text-sm text-amber-900">
                                <strong>Yasal Uyarı:</strong> yksnethesapla.com bağımsız bir platformdur ve
                                ÖSYM (Öğrenci Seçme ve Yerleştirme Merkezi) ile resmi bir bağı bulunmamaktadır.
                                Resmi sınav bilgileri ve sonuçlar için{' '}
                                <a href="https://www.osym.gov.tr" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline font-medium">
                                    osym.gov.tr
                                </a>
                                {' '}adresini ziyaret edin.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
