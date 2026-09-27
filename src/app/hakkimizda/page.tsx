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
                                Biz Kimiz ve Neden Buradayız?
                            </h2>
                            <p className="mb-4">
                                Sınava hazırlık zaten stresli bir süreç. Üstüne bir de "Kaç netim var, kaç puan yapar?", "Bu 0,5 net kuralı nedir ya?" veya "OBP kırılırsa ne olur?" soruları kafanızı kurcalıyor. Biz de aynı yollardan geçtik, o stresi yaşadık. 
                            </p>
                            <p className="mb-4">
                                İnternette net hesaplama sitesi aradığınızda çoğu ya reklam bataklığı, ya eski katsayılarla çalışıyor ya da tıklanma peşinde abartılmış rakamlar gösteriyor. <strong>yksnethesapla.com</strong> bütün bu saçmalıklara kızıp "Biz düzgün bir şey yapalım" dediğimiz bir proje.
                            </p>
                            <p>
                                Ne yapmaya çalışıyoruz? ÖSYM mantığına sadık, güncel katsayılarla çalışan, seni gereksiz e-posta kayıtlarına zorlamayan, sade bir hesaplama motoru sunmak. Tamamen ücretsiz. Reklam olacak tabii (sunucu masrafları var çünkü) ama seni boğacak cinsten değil.
                            </p>
                        </section>

                        {/* Neden biz */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Neden Biz?
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500">
                                    <h3 className="font-bold text-blue-900 mb-2">📊 Gerçekçi Rakamlar</h3>
                                    <p className="text-sm text-gray-700">
                                        Geçmiş yılların yığılma verilerini ve son açıklanan katsayıları baz alıyoruz. "400 puan yaparsın" deyip seni uçurmuyoruz; acı da olsa gerçeği söylüyoruz.
                                    </p>
                                </div>
                                <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
                                    <h3 className="font-bold text-green-900 mb-2">✅ Kuralları Bilen Sistem</h3>
                                    <p className="text-sm text-gray-700">
                                        0,5 net kuralını, kırık OBP hesabını, başarı sırası barajlarını sistem otomatik kontrol ediyor. Yanlış bir şey girersen seni uyarıyor.
                                    </p>
                                </div>
                                <div className="bg-purple-50 p-5 rounded-xl border-l-4 border-purple-500">
                                    <h3 className="font-bold text-purple-900 mb-2">🔒 Bilgilerin Sende Kalır</h3>
                                    <p className="text-sm text-gray-700">
                                        Girdiğin netler, okul notun — hiçbiri sunucumuza gitmiyor. Tarayıcında hesaplanıp orada kalıyor. Sayfayı kapattığında her şey siliniyor.
                                    </p>
                                </div>
                                <div className="bg-orange-50 p-5 rounded-xl border-l-4 border-orange-500">
                                    <h3 className="font-bold text-orange-900 mb-2">📚 İnsan Gibi Yazıyoruz</h3>
                                    <p className="text-sm text-gray-700">
                                        Blog yazılarında resmi rapor dilinden kaçınıyoruz. Sanki kütüphanede yanında oturan bir arkadaşın sana anlatıyormuş gibi, sade ve net konuşuyoruz.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Teknik altyapı */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Puanları ve Sıralamaları Nasıl Hesaplıyoruz?
                            </h2>
                            <p className="mb-4">
                                Puan hesaplamaları kafadan uydurma rakamlar değil. ÖSYM&apos;nin resmi yerleştirme raporlarındaki dağılımları, geçmiş yılların standart sapma eğrilerini ve o yıl sınava giren kişi sayısını baz alıyoruz. Tam isabet garantisi veremeyiz tabii — bunu hiç kimse veremez çünkü standart sapma ancak sınav olduktan sonra kesinleşiyor — ama elimizdeki veriyle mümkün olan en yakın tahmini sunmaya çalışıyoruz.
                            </p>
                            <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-gray-400">
                                <p className="text-sm text-gray-700">
                                    <strong>Not:</strong> Sonuçlara &quot;büyük ihtimalle bu civarda olacak&quot; gözüyle bakın. Tercih listenizi yapmadan önce ÖSYM&apos;nin resmi sonuç belgesini mutlaka bekleyin. Biz bir tahmin aracıyız, ÖSYM&apos;nin yerini tutmayız.
                                </p>
                            </div>
                        </section>

                        {/* Editöryel Ekip ve E-E-A-T */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Arkamızda Kim Var?
                            </h2>
                            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                                        MÇ
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">Mert Çalışkan</h3>
                                        <p className="text-sm text-blue-600 font-medium">Kurucu</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                    ÖSYM yerleştirme verileri ve standart sapma katsayıları üzerinde çalışıyor. Sitedeki hesaplama motoru, rehber yazılar ve katsayı güncellemeleri doğrudan resmi ÖSYM verilerine dayanıyor. Bir hata gördüğünüzde veya katsayı değiştiğinde en kısa sürede güncellemeye çalışıyoruz.
                                </p>
                                <div className="flex flex-wrap gap-2 text-xs">
                                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-md text-gray-700 font-medium">✓ Resmi ÖSYM Kılavuzu Takibi</span>
                                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-md text-gray-700 font-medium">✓ Ücretsiz ve Bağımsız</span>
                                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-md text-gray-700 font-medium">✓ Veriler Sunucuya Gitmez</span>
                                </div>
                            </div>
                        </section>

                        {/* İletişim */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Bize Ulaşın
                            </h2>
                            <p className="mb-4">
                                Bir hesaplama hatası gördüyseniz, yeni bir özellik istiyorsanız veya sadece merhaba demek istiyorsanız — yazın bize. Gerçekten okuyor ve cevaplıyoruz.
                            </p>
                            <div className="bg-gray-50 p-5 rounded-xl space-y-2 text-sm">
                                <p><strong>Kurumsal E-posta:</strong> iletisim@yksnethesapla.com</p>
                                <p><strong>Destek:</strong> destek@yksnethesapla.com</p>
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
