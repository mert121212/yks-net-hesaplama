import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Gizlilik Politikası | YKS Net Hesaplama - yksnethesapla.com',
    description: 'yksnethesapla.com gizlilik politikası. KVKK uyumu, Google AdSense çerez bildirimi, client-side veri işleme ve kullanıcı hakları.',
    alternates: { canonical: 'https://yksnethesapla.com/privacy' },
    robots: { index: false, follow: true },
}

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

                    <header className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-gray-900 mb-3">Gizlilik Politikası</h1>
                        <p className="text-gray-600">Son Güncelleme: 29 Mart 2026</p>
                    </header>

                    <div className="space-y-8 text-gray-700 leading-relaxed">

                        {/* 1. Giriş */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Veri Sorumlusu ve Giriş</h2>
                            <p className="mb-4">
                                <strong>yksnethesapla.com</strong> (&quot;Sitemiz&quot;), kullanıcılarımızın gizliliğine en üst
                                düzeyde önem vermektedir. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve
                                uluslararası veri koruma standartlarına (GDPR) uygun olarak hazırlanan bu politika,
                                sitemizi ziyaret eden adayların verilerinin nasıl işlendiğini şeffaf bir şekilde açıklar.
                            </p>
                            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg text-sm">
                                <p className="font-semibold text-green-800 mb-1">✅ Temel İlkemiz</p>
                                <p className="text-gray-700">
                                    Hesaplama aracına girdiğiniz TYT, AYT ve YDT net verileri kesinlikle
                                    sunucularımıza kayıt edilmez. Tüm hesaplama işlemleri kullanıcının kendi
                                    tarayıcısında (JavaScript tabanlı, client-side) gerçekleşir.
                                </p>
                            </div>
                        </section>

                        {/* 2. Toplanan veriler */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. İşlenen Veriler ve Client-Side Prensibi</h2>
                            <p className="mb-4">Sitemiz iki farklı veri kategorisiyle çalışır:</p>
                            <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                    <h3 className="font-semibold text-blue-900 mb-2">Hesaplama Verileri (Sunucuya Gönderilmez)</h3>
                                    <p className="text-sm text-gray-700">
                                        Girdiğiniz doğru/yanlış sayıları, net değerleri ve OBP bilgileri yalnızca
                                        tarayıcınızda işlenir. Bu veriler kişisel veri olarak saklanmamaktadır.
                                        Sayfayı kapattığınızda tüm veriler silinir.
                                    </p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                                    <h3 className="font-semibold text-purple-900 mb-2">Analitik ve Reklam Verileri (Anonim)</h3>
                                    <p className="text-sm text-gray-700">
                                        Google Analytics aracılığıyla anonim ziyaret istatistikleri (sayfa görüntüleme,
                                        oturum süresi, coğrafi bölge) toplanır. Bu veriler kişisel kimlik bilgisi içermez.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 3. Çerezler */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Çerezler (Cookies) ve Google DART Çerezi</h2>
                            <p className="mb-4">
                                Sitemiz, reklam sunumu ve trafik analizi için çerezler kullanmaktadır.
                            </p>
                            <div className="overflow-x-auto mb-4">
                                <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold border-b">Çerez Türü</th>
                                            <th className="px-4 py-3 text-left font-semibold border-b">Amaç</th>
                                            <th className="px-4 py-3 text-left font-semibold border-b">Sağlayıcı</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="px-4 py-3 font-medium">Analitik Çerezler</td>
                                            <td className="px-4 py-3 text-gray-600">Ziyaretçi istatistikleri</td>
                                            <td className="px-4 py-3 text-gray-600">Google Analytics</td>
                                        </tr>
                                        <tr className="border-b bg-gray-50">
                                            <td className="px-4 py-3 font-medium">Reklam Çerezleri (DART)</td>
                                            <td className="px-4 py-3 text-gray-600">İlgi alanına göre reklam</td>
                                            <td className="px-4 py-3 text-gray-600">Google AdSense</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium">Zorunlu Çerezler</td>
                                            <td className="px-4 py-3 text-gray-600">Site işlevselliği</td>
                                            <td className="px-4 py-3 text-gray-600">yksnethesapla.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg text-sm">
                                <p className="text-yellow-800">
                                    <strong>Google DART Çerezi:</strong> Google, sitemizde reklam yayınlamak için
                                    DART çerezlerini kullanır. Bu çerezler, kullanıcıların sitemize ve internetteki
                                    diğer sitelere yaptıkları ziyaretlere dayalı olarak reklam sunulmasını sağlar.
                                    Kullanıcılar,{' '}
                                    <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-yellow-700 hover:underline font-medium">
                                        Google Reklam ve İçerik Ağı gizlilik politikasını
                                    </a>
                                    {' '}ziyaret ederek DART çerezinin kullanılmasını engelleyebilirler.
                                </p>
                            </div>
                        </section>

                        {/* 4. AdSense */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Google AdSense ve Üçüncü Taraf Reklam Verenler</h2>
                            <p className="mb-4">
                                Sitemiz üzerinden reklam yayını yapan üçüncü taraf reklam satıcıları (Google AdSense dahil),
                                kullanıcıların web sitemizi ziyaretlerine ilişkin bilgileri — isminiz, adresiniz,
                                e-posta adresiniz veya telefon numaranız <strong>dışındaki</strong> bilgileri —
                                ilgi alanlarınıza uygun ürün ve hizmetlerin reklamını göstermek amacıyla kullanabilir.
                            </p>
                            <p className="text-sm text-gray-600">
                                Reklam kişiselleştirmesini devre dışı bırakmak için{' '}
                                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Google Reklam Ayarları
                                </a>
                                {' '}sayfasını ziyaret edebilirsiniz.
                            </p>
                        </section>

                        {/* 5. Google Analytics */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Google Analytics</h2>
                            <p className="mb-4">
                                Sitemizde Google Analytics kullanıyoruz. Bu hizmet anonim kullanım verilerini toplar
                                ve site trafiğini analiz etmemize yardımcı olur. IP anonimleştirme aktif olup
                                kişisel kimlik bilgisi işlenmemektedir.
                            </p>
                            <p className="text-sm text-gray-600">
                                Detaylar için{' '}
                                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Google Gizlilik Politikası
                                </a>
                                {' '}sayfasını inceleyebilirsiniz.
                            </p>
                        </section>

                        {/* 6. Kullanıcı hakları */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Kullanıcı Hakları (KVKK Madde 11)</h2>
                            <p className="mb-4">
                                6698 sayılı KVKK kapsamında aşağıdaki haklara sahipsiniz:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                                <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                                <li>Verilerin silinmesini veya yok edilmesini isteme</li>
                                <li>Tarayıcı ayarları üzerinden çerezleri reddetme veya silme</li>
                                <li>Veri işlemeye itiraz etme</li>
                            </ul>
                        </section>

                        {/* 7. Veri güvenliği */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Veri Güvenliği</h2>
                            <p>
                                Hesaplama verileriniz sunucularımıza iletilmediğinden veri ihlali riski minimaldır.
                                Analitik veriler için Google&apos;ın endüstri standardı güvenlik altyapısı kullanılmaktadır.
                                Sitemiz HTTPS protokolü ile şifreli bağlantı sağlar.
                            </p>
                        </section>

                        {/* 8. Üçüncü taraf linkler */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Üçüncü Taraf Bağlantıları</h2>
                            <p>
                                Sitemiz ÖSYM, YÖK ve diğer eğitim kurumlarına bağlantılar içerebilir.
                                Bu sitelerin gizlilik politikalarından sorumlu değiliz.
                                yksnethesapla.com, ÖSYM veya YÖK ile resmi bir bağı bulunmayan bağımsız bir platformdur.
                            </p>
                        </section>

                        {/* 9. İletişim */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. İletişim</h2>
                            <p className="mb-4">
                                Gizlilik politikamızla ilgili her türlü soru, düzeltme talebi veya geri bildirim için:
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg text-sm space-y-2">
                                <p><strong>E-posta:</strong> mertcaliskan36065d@gmail.com</p>
                                <p>
                                    <Link href="/iletisim" className="text-blue-600 hover:underline font-medium">
                                        İletişim formunu kullanın →
                                    </Link>
                                </p>
                            </div>
                        </section>

                        {/* 10. Değişiklikler */}
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Politika Değişiklikleri</h2>
                            <p>
                                Bu gizlilik politikası zaman zaman güncellenebilir. &quot;Son Güncelleme&quot; tarihi
                                her değişiklikte revize edilir. Platformu kullanmaya devam etmeniz güncel
                                politikayı kabul ettiğiniz anlamına gelir.
                            </p>
                        </section>

                        <div className="border-t pt-8">
                            <div className="bg-blue-50 p-5 rounded-xl text-center text-sm text-gray-600">
                                <p><strong>Son Güncelleme:</strong> 29 Mart 2026</p>
                                <p className="mt-1">yksnethesapla.com — Ankara, Türkiye</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
