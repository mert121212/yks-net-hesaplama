import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'İletişim | YKS Net Hesaplama',
    description: 'YKS Net Hesaplama ile iletişime geçin. Sorularınız, önerileriniz ve geri bildirimleriniz için bize ulaşın.',
}

export default function IletisimPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                        İletişim
                    </h1>
                    <p className="text-center text-gray-600 mb-12">
                        Sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçin
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                            <div className="text-blue-600 text-3xl mb-4">📧</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">E-posta</h3>
                            <p className="text-gray-700 mb-4">
                                Sorularınız için bize e-posta gönderebilirsiniz
                            </p>
                            <a
                                href="mailto:mertcaliskan36065d@gmail.com"
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                mertcaliskan36065d@gmail.com
                            </a>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                            <div className="text-purple-600 text-3xl mb-4">⏰</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Yanıt Süresi</h3>
                            <p className="text-gray-700 mb-4">
                                E-postalarınıza genellikle 24-48 saat içinde yanıt veriyoruz
                            </p>
                            <p className="text-sm text-gray-600">
                                Hafta içi: 09:00 - 18:00<br />
                                Hafta sonu: Sınırlı destek
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                            Sık Sorulan Sorular
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Sorularınızın cevaplarını SSS sayfamızda bulabilirsiniz:
                        </p>
                        <a
                            href="/sss"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            SSS Sayfasına Git →
                        </a>
                    </div>

                    <div className="border-t pt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                            Bize Ulaşın
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">📝 Geri Bildirim</h3>
                                <p className="text-gray-700">
                                    Platformumuzu geliştirmemize yardımcı olun. Önerilerinizi ve geri bildirimlerinizi
                                    bizimle paylaşın.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">🐛 Hata Bildirimi</h3>
                                <p className="text-gray-700">
                                    Bir hata veya sorun mu buldunuz? Lütfen bize bildirin, en kısa sürede
                                    düzeltelim.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">💡 Özellik Önerisi</h3>
                                <p className="text-gray-700">
                                    Platformumuza eklemek istediğiniz özellikler var mı? Fikirlerinizi
                                    duymak isteriz.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">🤝 İş Birliği</h3>
                                <p className="text-gray-700">
                                    İş birliği teklifleri için bizimle iletişime geçebilirsiniz.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                        <h3 className="font-semibold text-gray-900 mb-3 text-center">
                            📍 Adres Bilgisi
                        </h3>
                        <p className="text-center text-gray-700">
                            YKS Net Hesaplama<br />
                            Online Eğitim Platformu<br />
                            Türkiye
                        </p>
                    </div>

                    <div className="mt-8 text-center text-sm text-gray-600">
                        <p>
                            E-posta gönderirken lütfen konuyu açıkça belirtin ve gerekli detayları ekleyin.
                            Bu sayede size daha hızlı ve etkili yardımcı olabiliriz.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
