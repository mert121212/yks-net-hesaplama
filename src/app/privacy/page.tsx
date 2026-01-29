import Link from 'next/link'
import { Calculator } from 'lucide-react'

export const metadata = {
    title: 'Gizlilik Politikası | YKS Net Hesaplama',
    description: 'YKS Net Hesaplama gizlilik politikası ve kişisel veri koruma uygulamaları.',
}

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                            <Calculator className="h-8 w-8 text-primary-600" />
                            <h1 className="text-xl font-bold text-gray-900">YKS Net Hesaplama</h1>
                        </Link>
                        <nav className="flex space-x-6">
                            <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                                Ana Sayfa
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Gizlilik Politikası</h1>

                    <div className="prose max-w-none">
                        <p className="text-gray-600 mb-6">
                            Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Genel Bilgiler</h2>
                            <p className="text-gray-700 mb-4">
                                YKS Net Hesaplama ("biz", "bizim" veya "site") olarak, gizliliğinizi korumayı taahhüt ediyoruz.
                                Bu gizlilik politikası, kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Topladığımız Bilgiler</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Hesaplama verileri (TYT, AYT, YDT net değerleri)</li>
                                <li>Google Analytics verileri (anonim kullanım istatistikleri)</li>
                                <li>Çerez (cookie) bilgileri</li>
                                <li>IP adresi ve tarayıcı bilgileri</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Bilgilerin Kullanımı</h2>
                            <p className="text-gray-700 mb-4">Topladığımız bilgileri şu amaçlarla kullanırız:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Net hesaplama hizmetini sağlamak</li>
                                <li>Site performansını iyileştirmek</li>
                                <li>Kullanıcı deneyimini geliştirmek</li>
                                <li>İstatistiksel analizler yapmak</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Google Analytics</h2>
                            <p className="text-gray-700 mb-4">
                                Sitemizde Google Analytics kullanıyoruz. Bu hizmet anonim kullanım verilerini toplar ve
                                site trafiğini analiz etmemize yardımcı olur. Google Analytics hakkında daha fazla bilgi için
                                <a href="https://policies.google.com/privacy" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                    Google Gizlilik Politikası
                                </a>'nı inceleyebilirsiniz.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Google AdSense</h2>
                            <p className="text-gray-700 mb-4">
                                Sitemizde Google AdSense reklamları gösterilmektedir. Google, reklam gösterimi için
                                çerezler kullanabilir. Reklam kişiselleştirmesini devre dışı bırakmak için
                                <a href="https://www.google.com/settings/ads" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                    Google Reklam Ayarları
                                </a>'nı ziyaret edebilirsiniz.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Çerezler (Cookies)</h2>
                            <p className="text-gray-700 mb-4">
                                Sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanır. Çerezleri tarayıcı
                                ayarlarınızdan devre dışı bırakabilirsiniz, ancak bu durumda bazı site özellikleri
                                düzgün çalışmayabilir.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Veri Güvenliği</h2>
                            <p className="text-gray-700 mb-4">
                                Kişisel bilgilerinizi korumak için uygun teknik ve organizasyonel önlemler alıyoruz.
                                Ancak, internet üzerinden veri iletiminin %100 güvenli olduğunu garanti edemeyiz.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. İletişim</h2>
                            <p className="text-gray-700 mb-4">
                                Gizlilik politikamız hakkında sorularınız varsa, GitHub üzerinden iletişime geçebilirsiniz:
                            </p>
                            <p className="text-gray-700">
                                <a href="https://github.com/mert121212/yks-net-hesaplama" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                                    GitHub Repository
                                </a>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Değişiklikler</h2>
                            <p className="text-gray-700">
                                Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler
                                olduğunda bu sayfada duyuru yapacağız.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}