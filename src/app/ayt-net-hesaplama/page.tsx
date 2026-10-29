import type { Metadata } from 'next'
import Link from 'next/link'
import CalculatorApp from '@/components/CalculatorApp'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'AYT Net Hesaplama 2027 [SAY, EA, SÖZ] ⚡ AYT Puanı Hesapla',
    description: '2027 AYT net ve puan hesaplama: Sayısal, Eşit Ağırlık ve Sözel alan testlerinden doğru ve yanlışlarını gir; ÖSYM test katsayılarıyla %60 etkili AYT puanını ve sıralamanı anında gör!',
    keywords: 'ayt net hesaplama, ayt puan hesaplama 2027, say net hesaplama, ea net hesaplama, soz net hesaplama, ayt katsayilari',
    alternates: { canonical: 'https://yksnethesapla.com/ayt-net-hesaplama' },
    openGraph: {
        title: 'AYT Net Hesaplama 2027 [SAY, EA, SÖZ] ⚡ AYT Puanı Hesapla',
        description: 'Matematik, Fen ve Edebiyat-Sosyal testlerini gir, 2027 ÖSYM katsayılarıyla SAY, EA ve SÖZ puanlarını hemen öğren.',
        url: 'https://yksnethesapla.com/ayt-net-hesaplama',
        type: 'website',
    },
}

export default function AYTNetHesaplamaPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <StructuredData
                title="AYT Net Hesaplama 2027"
                description="2027 AYT net ve puan hesaplama aracı. SAY, EA ve SÖZ alan testlerini ÖSYM katsayılarıyla hesaplayın."
                url="https://yksnethesapla.com/ayt-net-hesaplama"
            />

            {/* Hero */}
            <section className="bg-gradient-to-r from-purple-700 via-indigo-800 to-slate-900 text-white py-10 sm:py-14 shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <nav className="mb-4 text-xs sm:text-sm text-purple-200">
                        <Link href="/" className="hover:underline">Ana Sayfa</Link>
                        {' > '}
                        <span className="text-white font-medium">AYT Net Hesaplama</span>
                    </nav>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold mb-4 text-purple-200 shadow-sm">
                        <span>🎓</span>
                        <span>SAY • EA • SÖZ • YKS Sıralamasının %60 Belirleyicisi</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 tracking-tight leading-tight">
                        AYT Net Hesaplama 2027
                    </h1>
                    <p className="text-base sm:text-lg text-purple-100 max-w-2xl mx-auto leading-relaxed font-normal">
                        AYT Matematik, Fizik, Kimya, Biyoloji, Edebiyat, Tarih ve Coğrafya testlerindeki doğru ve yanlışlarını gir; ÖSYM katsayılarıyla SAY, EA ve SÖZ puanlarını ve başarı sıranı hesapla.
                    </p>
                </div>
            </section>

            {/* Hesaplama Aracı */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-20">
                <CalculatorApp mode="ayt" />
            </main>

            {/* Bilgilendirici Rehber & Tablolar */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
                <div className="bg-white rounded-2xl shadow-md border border-gray-200/80 p-6 sm:p-10 space-y-8 text-gray-800">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                            AYT Netleri Puanı Nasıl Etkiler? (SAY, EA, SÖZ Formülleri)
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Alan Yeterlilik Testi&apos;nde (AYT) adaylar kendi alanlarına göre soru çözerler. AYT netleri, YKS yerleştirme puanının tam <strong>%60&apos;ını</strong> oluşturur. Yani TYT iyi bir temel atar, AYT ise sıralamayı ve kazanacağınız üniversiteyi tayin eder.
                        </p>
                    </div>

                    {/* Alanlara Göre Test Dağılımı */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Puan Türlerine Göre Çözülmesi Gereken Testler
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="border border-green-200 bg-green-50/60 p-4 rounded-xl">
                                <span className="text-xs font-bold text-green-800 bg-green-100 px-2 py-0.5 rounded">Sayısal (SAY)</span>
                                <h4 className="font-bold text-gray-900 mt-2 mb-1">Mühendislik & Tıp</h4>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• AYT Matematik (40 Soru)</li>
                                    <li>• AYT Fizik (14 Soru)</li>
                                    <li>• AYT Kimya (13 Soru)</li>
                                    <li>• AYT Biyoloji (13 Soru)</li>
                                </ul>
                            </div>

                            <div className="border border-blue-200 bg-blue-50/60 p-4 rounded-xl">
                                <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">Eşit Ağırlık (EA)</span>
                                <h4 className="font-bold text-gray-900 mt-2 mb-1">Hukuk & İktisat & PDR</h4>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• AYT Matematik (40 Soru)</li>
                                    <li>• Edebiyat (24 Soru)</li>
                                    <li>• Tarih-1 (10 Soru)</li>
                                    <li>• Coğrafya-1 (6 Soru)</li>
                                </ul>
                            </div>

                            <div className="border border-purple-200 bg-purple-50/60 p-4 rounded-xl">
                                <span className="text-xs font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded">Sözel (SÖZ)</span>
                                <h4 className="font-bold text-gray-900 mt-2 mb-1">Öğretmenlik & İletişim</h4>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Edebiyat-Sosyal-1 (40 Soru)</li>
                                    <li>• Tarih-2 (11 Soru)</li>
                                    <li>• Coğrafya-2 (11 Soru)</li>
                                    <li>• Felsefe Grubu (12 Soru) & Din (6)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Alan Dışı Çözme Kuralı */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
                        <h4 className="font-bold text-blue-950 text-base mb-1">
                            Alan Dışı Soru Çözmek Puanı Düşürür mü?
                        </h4>
                        <p className="text-sm text-blue-900 leading-relaxed">
                            Kesinlikle hayır! Bir Sayısal öğrencisinin Edebiyat testini çözmesi SAY puanını 0,01 puan bile düşürmez; sadece adayın bir de EA puanının hesaplanmasını sağlar. Zamanın yeterliyse kendi alanın dışındaki testleri de çözerek alternatif puan türlerinde derece şansını deneyebilirsin.
                        </p>
                    </div>

                    {/* İlgili Bağlantılar */}
                    <div className="border-t pt-6">
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">AYT Başarısı İçin Tavsiye Edilen Rehberler</h4>
                        <div className="grid sm:grid-cols-3 gap-3 text-sm">
                            <Link href="/blog/ayt-matematik-konulari" className="p-3 bg-indigo-50 hover:bg-indigo-100 rounded-xl border border-indigo-200 font-medium text-indigo-900 transition">
                                📐 AYT Matematik Konuları & LTİ →
                            </Link>
                            <Link href="/blog/yks-edebiyat-konulari" className="p-3 bg-purple-50 hover:bg-purple-100 rounded-xl border border-purple-200 font-medium text-purple-900 transition">
                                📚 AYT Edebiyat 24 Soru Anatomisi →
                            </Link>
                            <Link href="/tyt-net-hesaplama" className="p-3 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 font-medium text-blue-900 transition">
                                ⚡ TYT Net Hesaplama Motoru →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
