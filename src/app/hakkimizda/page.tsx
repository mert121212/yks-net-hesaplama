import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Hakkımızda | YKS Net Hesaplama Platformu',
    description: 'yksnethesapla.com hakkında: Kurucumuz, hesaplama metodolojimiz, veri gizliliği politikamız ve misyonumuz.',
    keywords: 'yks net hesaplama hakkında, yksnethesapla.com, yks hesaplama platformu',
    alternates: { canonical: 'https://yksnethesapla.com/hakkimizda' },
}

export default function HakkimizdaPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">

                    <header className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Hakkımızda
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            yksnethesapla.com — YKS adayları için sade, hızlı ve güncel net hesaplama platformu.
                        </p>
                    </header>

                    <div className="space-y-10 text-gray-700 leading-relaxed">

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Platformun Amacı
                            </h2>
                            <p className="mb-4">
                                YKS hazırlık sürecinde deneme sınavı sonuçlarını değerlendirmek, netlerin puana ve başarı sırasına karşılığını görmek adaylar için önemli bir ihtiyaçtır.
                            </p>
                            <p className="mb-4">
                                <strong>yksnethesapla.com</strong>, adayların TYT, AYT ve YDT netlerini ÖSYM&apos;nin yayımladığı resmi katsayılar ve geçmiş yılların yığınsal dağılım verileri doğrultusunda hızlıca hesaplayabilmeleri amacıyla kurulmuştur.
                            </p>
                            <p>
                                Platformumuz kullanıcıdan herhangi bir kayıt, e-posta veya kişisel veri talep etmez; hesaplamalar tamamen tarayıcınız üzerinde anlık olarak gerçekleştirilir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Temel İlkelerimiz
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500">
                                    <h3 className="font-bold text-blue-900 mb-2">Resmi Veri Odaklılık</h3>
                                    <p className="text-sm text-gray-700">
                                        Hesaplama algoritmalarımız ÖSYM&apos;nin geçmiş yıllara ait standart sapma ve katsayı tablolarına göre düzenlenir.
                                    </p>
                                </div>
                                <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
                                    <h3 className="font-bold text-green-900 mb-2">Kılavuz Kurallarına Uyum</h3>
                                    <p className="text-sm text-gray-700">
                                        0,5 net şartı, kırık OBP katsayısı ve program bazlı başarı sırası barajları sistem tarafından otomatik kontrol edilir.
                                    </p>
                                </div>
                                <div className="bg-purple-50 p-5 rounded-xl border-l-4 border-purple-500">
                                    <h3 className="font-bold text-purple-900 mb-2">Kullanıcı Gizliliği</h3>
                                    <p className="text-sm text-gray-700">
                                        Girdiğiniz net ve puan bilgileri hiçbir uzak sunucuya aktarılmaz veya kaydedilmez.
                                    </p>
                                </div>
                                <div className="bg-amber-50 p-5 rounded-xl border-l-4 border-amber-500">
                                    <h3 className="font-bold text-amber-900 mb-2">Sade ve Erişilebilir Arayüz</h3>
                                    <p className="text-sm text-gray-700">
                                        Karmaşık ve kafa karıştırıcı tablolar yerine tek bakışta anlaşılır sonuç kartları sunulur.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Hesaplama Metodolojimiz
                            </h2>
                            <p className="mb-4">
                                Sınav sonuç belgesinde yer alan puanlar, her yıl sınava katılan tüm adayların ilgili testlerdeki doğru ve yanlış ortalamaları ile standart sapma değerleri üzerinden oluşturulur.
                            </p>
                            <p className="mb-4">
                                Sitemizdeki hesaplama motoru, ÖSYM&apos;nin son yıllarda açıkladığı ortalama katsayıları ve yığınsal dağılım aralıklarını kullanarak gerçeğe en yakın tahmini sunmayı hedefler. Gerçek sınav sonuçları o yılki sınavın genel zorluğuna göre küçük farklılıklar gösterebilir.
                            </p>
                            <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-gray-400">
                                <p className="text-sm text-gray-700">
                                    <strong>Bilgilendirme:</strong> Sitemizde yer alan sonuçlar adaylara rehberlik amacıyla sunulan istatistiksel tahminlerdir. Resmi yerleştirme kararlarında ÖSYM&apos;nin resmi sonuç belgesi esastır.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Editöryel Bilgi
                            </h2>
                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                                        MÇ
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">Mert Çalışkan</h3>
                                        <p className="text-sm text-blue-600 font-medium">Proje Yöneticisi & İçerik Sorumlusu</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    ÖSYM yerleştirme verileri ve sınav istatistikleri doğrultusunda sitemizdeki hesaplama araçlarının doğruluğunu ve rehber içeriklerinin güncelliğini düzenli olarak denetlemektedir.
                                </p>
                                <div className="flex flex-wrap gap-2 text-xs">
                                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-md text-gray-700 font-medium">✓ Güncel ÖSYM Kılavuzu Takibi</span>
                                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-md text-gray-700 font-medium">✓ Ücretsiz Kullanım</span>
                                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-md text-gray-700 font-medium">✓ İstemci Taraflı Hesaplama</span>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                İletişim
                            </h2>
                            <p className="mb-4">
                                Soru, öneri veya hata bildirimleriniz için bizimle doğrudan iletişime geçebilirsiniz.
                            </p>
                            <div className="bg-gray-50 p-5 rounded-xl space-y-2 text-sm">
                                <p><strong>E-posta:</strong> iletisim@yksnethesapla.com</p>
                                <p><strong>Destek:</strong> destek@yksnethesapla.com</p>
                                <p><strong>Konum:</strong> Ankara, Türkiye</p>
                                <p>
                                    <Link href="/iletisim" className="text-blue-600 hover:underline font-medium">
                                        İletişim sayfasına git →
                                    </Link>
                                </p>
                            </div>
                        </section>

                        <section className="border-t pt-8">
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                                <p className="text-sm text-amber-900">
                                    <strong>Yasal Uyarı:</strong> yksnethesapla.com bağımsız bir eğitim platformudur ve ÖSYM (Öğrenci Seçme ve Yerleştirme Merkezi) ile doğrudan kurumsal veya resmi bir bağı bulunmamaktadır.
                                </p>
                            </div>
                        </section>

                        <section className="border-t pt-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Hızlı Bağlantılar</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <Link href="/" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center">
                                    <p className="font-semibold text-blue-900 text-sm">Net Hesapla →</p>
                                </Link>
                                <Link href="/sss" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-center">
                                    <p className="font-semibold text-green-900 text-sm">Sıkça Sorulan Sorular →</p>
                                </Link>
                                <Link href="/iletisim" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-center">
                                    <p className="font-semibold text-purple-900 text-sm">İletişim →</p>
                                </Link>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    )
}
