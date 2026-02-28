import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Hakkımızda | YKS Net Hesaplama',
    description: 'YKS Net Hesaplama platformu hakkında bilgi. Misyonumuz, vizyonumuz ve size nasıl yardımcı olduğumuz.',
}

export default function HakkimizdaPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                        Hakkımızda
                    </h1>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Biz Kimiz?
                            </h2>
                            <p className="mb-4">
                                YKS Net Hesaplama, Türkiye'deki lise öğrencilerine YKS (Yükseköğretim Kurumları Sınavı)
                                hazırlık sürecinde yardımcı olmak amacıyla oluşturulmuş ücretsiz bir eğitim platformudur.
                            </p>
                            <p>
                                2024 yılında kurulan platformumuz, öğrencilerin sınav performanslarını takip etmelerini,
                                hedef üniversitelerini belirlemelerini ve başarı şanslarını değerlendirmelerini kolaylaştırmayı
                                amaçlamaktadır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Misyonumuz
                            </h2>
                            <p>
                                Her öğrencinin YKS sürecinde ihtiyaç duyduğu araçlara ücretsiz ve kolay bir şekilde
                                erişebilmesini sağlamak. Öğrencilerin doğru kararlar almasına yardımcı olacak güvenilir,
                                güncel ve kullanıcı dostu bir platform sunmak.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Vizyonumuz
                            </h2>
                            <p>
                                Türkiye'nin en kapsamlı ve güvenilir YKS hesaplama ve üniversite rehberlik platformu
                                olmak. Öğrencilerin eğitim hayatlarındaki en önemli kararlardan birini verirken yanlarında
                                olmak ve onlara en iyi şekilde rehberlik etmek.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Neler Sunuyoruz?
                            </h2>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    <strong>YKS Net Hesaplama:</strong> TYT, AYT ve YDT netlerinizi girerek puan ve
                                    tahmini sıralamanızı hesaplayın
                                </li>
                                <li>
                                    <strong>Üniversite Önerileri:</strong> 575+ üniversite programı arasından size
                                    uygun olanları keşfedin
                                </li>
                                <li>
                                    <strong>OBP Hesaplama:</strong> Ortaöğretim Başarı Puanınızı hesaplayın ve
                                    YKS puanınıza etkisini görün
                                </li>
                                <li>
                                    <strong>YKS Geri Sayım:</strong> Sınava kalan süreyi takip edin ve motivasyonunuzu
                                    koruyun
                                </li>
                                <li>
                                    <strong>YKS Rehberi:</strong> Sınav hakkında detaylı bilgi ve hazırlık ipuçları
                                </li>
                                <li>
                                    <strong>SSS:</strong> Sık sorulan sorular ve cevapları
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Neden Bizi Tercih Etmelisiniz?
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-blue-900 mb-2">✓ Ücretsiz</h3>
                                    <p className="text-sm">Tüm özelliklerimiz tamamen ücretsiz</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-purple-900 mb-2">✓ Güncel</h3>
                                    <p className="text-sm">2025 YKS verilerine göre güncellenmiş</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-green-900 mb-2">✓ Kolay Kullanım</h3>
                                    <p className="text-sm">Sade ve anlaşılır arayüz</p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-orange-900 mb-2">✓ Kapsamlı</h3>
                                    <p className="text-sm">575+ üniversite programı verisi</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                İletişim
                            </h2>
                            <p>
                                Sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçebilirsiniz.
                            </p>
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                <p className="text-sm">
                                    <strong>E-posta:</strong> info@yksnethesaplama.com
                                </p>
                                <p className="text-sm mt-2">
                                    <a href="/iletisim" className="text-blue-600 hover:text-blue-800 underline">
                                        İletişim formunu kullanın →
                                    </a>
                                </p>
                            </div>
                        </section>

                        <section className="border-t pt-8 mt-8">
                            <p className="text-center text-gray-600 italic">
                                "Başarıya giden yolda yanınızdayız. İyi çalışmalar dileriz!"
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
