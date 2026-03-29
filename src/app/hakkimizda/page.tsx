import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Hakkımızda | YKS Net Hesaplama - yksnethesapla.com',
    description: 'yksnethesapla.com kimler tarafından, neden kuruldu? ÖSYM standartlarında hesaplama altyapısı, veri gizliliği ve teknik yaklaşımımız hakkında bilgi.',
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
                            yksnethesapla.com — Geleceğinizi verilerle planlayın.
                        </p>
                    </header>

                    <div className="space-y-10 text-gray-700 leading-relaxed">

                        {/* Vizyon */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                YKS Net Hesaplama: Geleceğinizi Verilerle Planlayın
                            </h2>
                            <p className="mb-4">
                                Eğitim hayatının en kritik dönemeçlerinden biri olan YKS sürecinde adayların en büyük
                                ihtiyacı doğru ve güncel veriye ulaşmaktır. <strong>yksnethesapla.com</strong>,
                                2026 sınav atmosferine uygun olarak karmaşık katsayıları ve değişen sınav yönetmeliklerini
                                (0,5 net kuralı, barajların kaldırılması vb.) basit, hızlı ve tamamen ücretsiz bir
                                arayüzle öğrencilerin hizmetine sunmak amacıyla kurulmuştur.
                            </p>
                            <p>
                                Platformumuz, hem web teknolojileri alanında uzman yazılımcılar hem de sınav sistemine
                                hâkim eğitim gönüllüleri tarafından hayata geçirilmiştir. Amacımız, dijital kirliliğin
                                içinde öğrencilere en sade ve ÖSYM standartlarında bir hesaplama deneyimi sunmaktır.
                            </p>
                        </section>

                        {/* Neden biz */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Neden yksnethesapla.com?
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500">
                                    <h3 className="font-bold text-blue-900 mb-2">📊 Güncel Veri Seti</h3>
                                    <p className="text-sm text-gray-700">
                                        2026 YKS katsayıları ve son 3 yılın yığılma verilerine dayalı sıralama algoritması.
                                        Her yıl güncellenen referans noktaları.
                                    </p>
                                </div>
                                <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
                                    <h3 className="font-bold text-green-900 mb-2">✅ 0,5 Net Denetimi</h3>
                                    <p className="text-sm text-gray-700">
                                        Puanınızın hesaplanıp hesaplanmayacağını belirleyen kritik 0,5 net şartını
                                        otomatik olarak kontrol ederiz.
                                    </p>
                                </div>
                                <div className="bg-purple-50 p-5 rounded-xl border-l-4 border-purple-500">
                                    <h3 className="font-bold text-purple-900 mb-2">🔒 Veri Gizliliği</h3>
                                    <p className="text-sm text-gray-700">
                                        Privacy-First yaklaşımıyla girdiğiniz netler ve puanlar sunucularımızda
                                        saklanmaz; tüm işlem tarayıcınızda gerçekleşir.
                                    </p>
                                </div>
                                <div className="bg-orange-50 p-5 rounded-xl border-l-4 border-orange-500">
                                    <h3 className="font-bold text-orange-900 mb-2">📚 Kapsamlı Rehberlik</h3>
                                    <p className="text-sm text-gray-700">
                                        Sadece bir hesap makinesi değil; derinlemesine YKS blog içerikleri ve
                                        rehberlerle tam bir eğitim portalı.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Teknik altyapı */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Teknik Altyapı ve Güvenilirlik
                            </h2>
                            <p className="mb-4">
                                Sitemizde sunulan tahmini sıralamalar ve puanlar; geçmiş yılların (2023, 2024 ve 2025)
                                resmi yerleştirme sonuçları baz alınarak hazırlanan matematiksel interpolasyon
                                modelleriyle hesaplanır. Geliştirdiğimiz algoritma, aday sayısındaki değişimleri ve
                                sınavın muhtemel zorluk derecesini analiz ederek en yakın sonucu vermeyi hedefler.
                            </p>
                            <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-gray-400">
                                <p className="text-sm text-gray-700">
                                    <strong>Önemli Not:</strong> ÖSYM, puan hesaplamada standart sapma normalizasyonu
                                    kullanır ve kesin katsayıları kamuoyuyla paylaşmaz. Bu nedenle sitemizin ürettiği
                                    sonuçlar gerçekçi bir <strong>tahmindir</strong>; kesin değildir. Resmi sonuçlar
                                    için her zaman ÖSYM&apos;nin açıklamalarını takip edin.
                                </p>
                            </div>
                        </section>

                        {/* İletişim */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                İletişim ve Şeffaflık
                            </h2>
                            <p className="mb-4">
                                Gelişim sürecimizde en büyük motivasyonumuz sizden gelen geri bildirimlerdir.
                                Soru, öneri veya teknik destek talepleriniz için bize her zaman ulaşabilirsiniz.
                            </p>
                            <div className="bg-gray-50 p-5 rounded-xl space-y-2 text-sm">
                                <p><strong>E-posta:</strong> mertcaliskan36065d@gmail.com</p>
                                <p><strong>Lokasyon:</strong> Ankara, Türkiye</p>
                                <p>
                                    <Link href="/iletisim" className="text-blue-600 hover:underline font-medium">
                                        İletişim formunu kullanın →
                                    </Link>
                                </p>
                            </div>
                        </section>

                        {/* Yasal uyarı */}
                        <section className="border-t pt-8">
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                                <p className="text-sm text-amber-900">
                                    <strong>Yasal Uyarı:</strong> yksnethesapla.com bağımsız bir platformdur ve
                                    ÖSYM (Öğrenci Seçme ve Yerleştirme Merkezi) ile resmi bir bağı bulunmamaktadır.
                                    Sitede yer alan hesaplamalar ve sıralama tahminleri bilgilendirme amaçlıdır;
                                    resmi yerleştirme kararları yalnızca ÖSYM tarafından yapılır.
                                </p>
                            </div>
                        </section>

                        {/* Hızlı linkler */}
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
