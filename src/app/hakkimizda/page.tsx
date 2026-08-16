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
                                Sınava hazırlık zaten yeterince stresli bir süreç. Üstüne bir de "Acaba netlerimle nereye girerim?", "Şu 0,5 net kuralı beni vurur mu?" veya "OBP kırılırsa halim ne olur?" gibi kafa kurcalayan yüzlerce soruyla boğuştuğunuzu biliyoruz. Çünkü zamanında aynı yollardan biz de geçtik. 
                            </p>
                            <p className="mb-4">
                                İnternette net hesaplama siteleri aradığınızda genelde karşınıza her yeri reklam dolu, güncellenmemiş, eski katsayılarla çalışan veya sadece tıklanma uğruna yalan yanlış sonuçlar gösteren siteler çıkıyor. İşte <strong>yksnethesapla.com</strong> tam olarak bu duruma sinirlenip kolları sıvadığımız bir projedir. 
                            </p>
                            <p>
                                Amacımız; 2027 sınav maratonuna uygun, arkasında gerçekten öğrencilerin halinden anlayan bir ekibin olduğu, sade, reklamsız (veya en azından sizi boğmayan) ve en önemlisi <strong>ÖSYM mantığına sadık</strong> bir hesaplama motorunu tamamen ücretsiz olarak sunmaktır.
                            </p>
                        </section>

                        {/* Neden biz */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Bizi Diğerlerinden Ayıran Şeyler Neler?
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500">
                                    <h3 className="font-bold text-blue-900 mb-2">📊 Gerçekçi Veriler</h3>
                                    <p className="text-sm text-gray-700">
                                        Eski yılların yığılma oranlarını ve son açıklanan YKS katsayılarını birebir baz alıyoruz. Sizi sahte umutlarla şişirmiyor, acı da olsa en gerçekçi tabloyu önünüze koyuyoruz.
                                    </p>
                                </div>
                                <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
                                    <h3 className="font-bold text-green-900 mb-2">✅ Uyanık Algoritma</h3>
                                    <p className="text-sm text-gray-700">
                                        "Matematik ve fenden en az 0,5 net çıkarma" gibi herkesin son anda fark edip yıkıldığı o meşhur kuralları bizim sistemimiz otomatik kontrol eder ve sizi uyarır.
                                    </p>
                                </div>
                                <div className="bg-purple-50 p-5 rounded-xl border-l-4 border-purple-500">
                                    <h3 className="font-bold text-purple-900 mb-2">🔒 Netleriniz Sadece Sizde Kalır</h3>
                                    <p className="text-sm text-gray-700">
                                        Girdiğiniz netler, puanlar veya diploma notunuz hiçbir sunucumuza kaydedilmez. Her şey sadece o an kendi bilgisayarınızda veya telefonunuzda hesaplanır.
                                    </p>
                                </div>
                                <div className="bg-orange-50 p-5 rounded-xl border-l-4 border-orange-500">
                                    <h3 className="font-bold text-orange-900 mb-2">📚 Öğrenci Dostu Rehberlik</h3>
                                    <p className="text-sm text-gray-700">
                                        Blog yazılarımızı yazarken resmi ve sıkıcı bir dil kullanmıyoruz. Lise koridorlarında veya kütüphanede konuştuğunuz dilde, işinize yarayacak net taktikler veriyoruz.
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
                                Sitemizde gördüğünüz puanlar rastgele sayılar değildir. Son 3 yılın (2023, 2024 ve 2025) ÖSYM resmi yerleştirme raporlarındaki dağılımları alıyoruz. Geliştirdiğimiz motor; sınava giren kişi sayısındaki artışı, tahmini yığılma bölgelerini ve derslerin ağırlık oranlarını harmanlayarak size en yakın "tahmini" sonucu veriyor.
                            </p>
                            <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-gray-400">
                                <p className="text-sm text-gray-700">
                                    <strong>Küçük Bir Uyarı:</strong> ÖSYM'nin puanları nasıl hesapladığını (o meşhur standart sapmayı) sınav bitip herkesin ortalaması belli olmadan dünyanın en iyi algoritması bile %100 bilemez. O yüzden sitemizin verdiği sonuçlara "Büyük ihtimalle böyle olacak" gözüyle bakın ama tercih yaparken mutlaka resmi ÖSYM sonuç belgenizi bekleyin.
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
