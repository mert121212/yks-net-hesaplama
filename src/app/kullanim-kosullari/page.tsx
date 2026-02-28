import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Kullanım Koşulları | YKS Net Hesaplama',
    description: 'YKS Net Hesaplama platformu kullanım koşulları, hizmet şartları ve sorumluluk reddi.',
}

export default function KullanimKosullariPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                        Kullanım Koşulları
                    </h1>
                    <p className="text-center text-gray-600 mb-8">
                        Son Güncelleme: 21 Şubat 2026
                    </p>

                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                1. Genel Hükümler
                            </h2>
                            <p className="mb-4">
                                YKS Net Hesaplama platformunu ("Platform") kullanarak aşağıdaki kullanım koşullarını
                                kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız, lütfen platformu kullanmayınız.
                            </p>
                            <p>
                                Platform, Türkiye'deki lise öğrencilerine YKS (Yükseköğretim Kurumları Sınavı)
                                hazırlık sürecinde yardımcı olmak amacıyla oluşturulmuş ücretsiz bir eğitim platformudur.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                2. Hizmet Kapsamı
                            </h2>
                            <p className="mb-4">
                                Platform aşağıdaki hizmetleri sunmaktadır:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>YKS net hesaplama ve puan tahmini</li>
                                <li>Üniversite program önerileri</li>
                                <li>OBP (Ortaöğretim Başarı Puanı) hesaplama</li>
                                <li>YKS geri sayım takibi</li>
                                <li>YKS rehberi ve bilgilendirme içerikleri</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                3. Sorumluluk Reddi
                            </h2>
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                                <p className="font-semibold text-yellow-800 mb-2">⚠️ Önemli Uyarı</p>
                                <p className="text-yellow-700">
                                    Platform tarafından sağlanan tüm hesaplamalar, tahminler ve öneriler
                                    <strong> yalnızca bilgilendirme amaçlıdır</strong> ve kesin sonuçları garanti etmez.
                                </p>
                            </div>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>
                                    Puan ve sıralama tahminleri geçmiş yıl verilerine dayanmaktadır ve
                                    gerçek sonuçlardan farklılık gösterebilir
                                </li>
                                <li>
                                    Üniversite taban puanları ve kontenjanlar her yıl değişiklik gösterebilir
                                </li>
                                <li>
                                    Resmi başvurularınızı yapmadan önce ÖSYM'nin resmi web sitesini kontrol ediniz
                                </li>
                                <li>
                                    Platform, kullanıcıların kararlarından ve sonuçlarından sorumlu değildir
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                4. Kullanıcı Sorumlulukları
                            </h2>
                            <p className="mb-4">
                                Platform kullanıcıları olarak:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Doğru ve güncel bilgiler girmeyi taahhüt edersiniz</li>
                                <li>Platformu yalnızca yasal amaçlarla kullanacağınızı kabul edersiniz</li>
                                <li>Platformun güvenliğini tehlikeye atacak eylemlerden kaçınırsınız</li>
                                <li>Diğer kullanıcıların haklarına saygı gösterirsiniz</li>
                                <li>Platformun içeriğini izinsiz kopyalamaz veya dağıtmazsınız</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                5. Fikri Mülkiyet Hakları
                            </h2>
                            <p className="mb-4">
                                Platform üzerindeki tüm içerik, tasarım, logo, yazılım ve diğer materyaller
                                YKS Net Hesaplama'ya aittir ve telif hakkı yasaları ile korunmaktadır.
                            </p>
                            <p>
                                İçeriğin izinsiz kopyalanması, çoğaltılması, dağıtılması veya ticari amaçla
                                kullanılması yasaktır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                6. Gizlilik
                            </h2>
                            <p className="mb-4">
                                Kişisel verilerinizin işlenmesi ve korunması hakkında detaylı bilgi için
                                <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline ml-1">
                                    Gizlilik Politikası
                                </a> sayfamızı inceleyiniz.
                            </p>
                            <p>
                                Platform, kullanıcıların girdiği verileri yalnızca hizmet sunmak amacıyla
                                kullanır ve üçüncü şahıslarla paylaşmaz.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                7. Hizmet Değişiklikleri
                            </h2>
                            <p>
                                Platform, önceden haber vermeksizin hizmetlerinde değişiklik yapma,
                                hizmetleri geçici veya kalıcı olarak durdurma hakkını saklı tutar.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                8. Üçüncü Taraf Bağlantıları
                            </h2>
                            <p>
                                Platform, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin
                                içeriğinden ve gizlilik politikalarından sorumlu değiliz.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                9. Garanti Reddi
                            </h2>
                            <p className="mb-4">
                                Platform "olduğu gibi" sunulmaktadır. Aşağıdaki garantileri vermemekteyiz:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Hizmetin kesintisiz veya hatasız olacağı</li>
                                <li>Sonuçların doğru veya güvenilir olacağı</li>
                                <li>Hataların düzeltileceği</li>
                                <li>Platformun her zaman erişilebilir olacağı</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                10. Sorumluluk Sınırlaması
                            </h2>
                            <p>
                                Platform ve yöneticileri, platformun kullanımından kaynaklanan doğrudan veya
                                dolaylı zararlardan sorumlu tutulamaz. Bu sınırlama, veri kaybı, kar kaybı,
                                itibar kaybı veya diğer maddi/manevi zararları içerir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                11. Uygulanacak Hukuk
                            </h2>
                            <p>
                                Bu kullanım koşulları Türkiye Cumhuriyeti yasalarına tabidir. Uyuşmazlıkların
                                çözümünde Türkiye mahkemeleri yetkilidir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                12. Değişiklikler
                            </h2>
                            <p>
                                Bu kullanım koşulları zaman zaman güncellenebilir. Önemli değişiklikler
                                platform üzerinden duyurulacaktır. Güncellemelerden sonra platformu kullanmaya
                                devam etmeniz, yeni koşulları kabul ettiğiniz anlamına gelir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                13. İletişim
                            </h2>
                            <p className="mb-4">
                                Kullanım koşulları hakkında sorularınız için bizimle iletişime geçebilirsiniz:
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p><strong>E-posta:</strong> info@yksnethesaplama.com</p>
                                <p className="mt-2">
                                    <a href="/iletisim" className="text-blue-600 hover:text-blue-800 underline">
                                        İletişim sayfasını ziyaret edin →
                                    </a>
                                </p>
                            </div>
                        </section>

                        <section className="border-t pt-8 mt-8">
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <p className="text-center text-gray-700">
                                    <strong>Son Güncelleme:</strong> 21 Şubat 2026<br />
                                    <span className="text-sm">Bu kullanım koşulları en son yukarıdaki tarihte güncellenmiştir.</span>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
