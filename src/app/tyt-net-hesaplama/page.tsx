import type { Metadata } from 'next'
import Link from 'next/link'
import CalculatorApp from '@/components/CalculatorApp'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'TYT Net Hesaplama 2027 [ÖSYM Katsayılarıyla] ⚡ Hızlı TYT Puanı',
    description: '2027 TYT net ve puan hesaplama: Türkçe, Temel Matematik, Sosyal ve Fen testlerinden doğru ve yanlışlarını gir, ÖSYM katsayılarıyla ham puanını ve OBP yerleştirme sıralamanı hemen öğren!',
    keywords: 'tyt net hesaplama, tyt puan hesaplama 2027, tyt net hesaplama motoru, tyt puanı hesapla, tyt katsayıları 2027',
    alternates: { canonical: 'https://yksnethesapla.com/tyt-net-hesaplama' },
    openGraph: {
        title: 'TYT Net Hesaplama 2027 [ÖSYM Katsayılarıyla] ⚡ Hızlı TYT Puanı',
        description: 'Türkçe, Matematik, Sosyal ve Fen netlerini gir, 2027 ÖSYM katsayılarıyla TYT puanını ve tahmini sıralamanı hemen öğren.',
        url: 'https://yksnethesapla.com/tyt-net-hesaplama',
        type: 'website',
    },
}

export default function TYTNetHesaplamaPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <StructuredData
                title="TYT Net Hesaplama 2027"
                description="2027 TYT net ve puan hesaplama aracı. Türkçe, Temel Matematik, Sosyal ve Fen netlerini ÖSYM katsayılarıyla hesaplayın."
                url="https://yksnethesapla.com/tyt-net-hesaplama"
            />

            {/* Hero */}
            <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 text-white py-10 sm:py-14 shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <nav className="mb-4 text-xs sm:text-sm text-blue-200">
                        <Link href="/" className="hover:underline">Ana Sayfa</Link>
                        {' > '}
                        <span className="text-white font-medium">TYT Net Hesaplama</span>
                    </nav>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold mb-4 text-blue-100 shadow-sm">
                        <span>⚡</span>
                        <span>120 Soru • 165 Dakika • Güncel ÖSYM Test Katsayıları</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 tracking-tight leading-tight">
                        TYT Net Hesaplama 2027
                    </h1>
                    <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed font-normal">
                        Türkçe (40), Temel Matematik (40), Sosyal Bilimler (20) ve Fen Bilimleri (20) testlerindeki doğru ve yanlışlarını gir; 4 yanlış 1 doğru kuralıyla netlerini ve OBP katkılı TYT puanını anında gör.
                    </p>
                </div>
            </section>

            {/* Hesaplama Aracı */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-20">
                <CalculatorApp mode="tyt" />
            </main>

            {/* Bilgilendirici Rehber & Tablolar */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
                <div className="bg-white rounded-2xl shadow-md border border-gray-200/80 p-6 sm:p-10 space-y-8 text-gray-800">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                            TYT Net Hesaplama Nasıl Yapılır? Formül ve Katsayılar
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            ÖSYM Temel Yeterlilik Testi&apos;nde (TYT) toplam 120 soru sorulur. Her testte yapılan her 4 yanlış, 1 doğru cevabı götürür. Net formülü şudur:
                        </p>
                        <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl my-4 text-center">
                            <span className="text-sm font-bold text-blue-900 block font-mono">
                                Net Sayısı = Doğru Sayısı - (Yanlış Sayısı ÷ 4)
                            </span>
                            <span className="text-xs text-blue-700 block mt-1">
                                Örnek: 32 Doğru, 6 Yanlış yaptıysan: 32 - (6 ÷ 4) = 32 - 1,5 = <strong>30,50 Net</strong>
                            </span>
                        </div>
                    </div>

                    {/* Test Ağırlıkları Tablosu */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            TYT Testlerinin Puan Ağırlıkları ve Soru Dağılımı
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-gray-100 text-gray-800">
                                    <tr>
                                        <th className="p-3 border">Test Adı</th>
                                        <th className="p-3 border">Soru Sayısı</th>
                                        <th className="p-3 border">Puan Ağırlığı</th>
                                        <th className="p-3 border">Ortalama Soru Başına Katsayı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Türkçe</td>
                                        <td className="p-3 border">40 Soru</td>
                                        <td className="p-3 text-blue-600 font-bold border">%33</td>
                                        <td className="p-3 border">~3,30 Puan</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Temel Matematik</td>
                                        <td className="p-3 border">40 Soru</td>
                                        <td className="p-3 text-indigo-600 font-bold border">%33</td>
                                        <td className="p-3 border">~3,30 Puan</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Sosyal Bilimler</td>
                                        <td className="p-3 border">20 Soru (5 Tarih, 5 Coğ, 5 Fel, 5 Din)</td>
                                        <td className="p-3 text-emerald-600 font-bold border">%17</td>
                                        <td className="p-3 border">~3,40 Puan</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Fen Bilimleri</td>
                                        <td className="p-3 border">20 Soru (7 Fiz, 7 Kim, 6 Biyo)</td>
                                        <td className="p-3 text-purple-600 font-bold border">%17</td>
                                        <td className="p-3 border">~3,40 Puan</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 0.5 Net Kuralı Uyarısı */}
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
                        <h4 className="font-bold text-amber-950 text-base mb-1">
                            ⚠️ Önemli: 0,5 Net Kuralı Nedir?
                        </h4>
                        <p className="text-sm text-amber-900 leading-relaxed">
                            ÖSYM kurallarına göre bir adayın TYT puanının hesaplanabilmesi için <strong>Türkçe VEYA Temel Matematik</strong> testlerinin en az birinden minimum <strong>0,5 ham net</strong> çıkarması şarttır. Hem Türkçe hem de Matematik testinde 0 veya eksi nete düşen adayın Sosyal ve Fen netleri hesaplanmaya dahil edilmez ve TYT puanı oluşmaz.
                        </p>
                    </div>

                    {/* İlgili Bağlantılar */}
                    <div className="border-t pt-6">
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">TYT Hazırlığı İçin Kritik Rehberler</h4>
                        <div className="grid sm:grid-cols-3 gap-3 text-sm">
                            <Link href="/blog/tyt-sure-yetistirme-turlama-taktigi" className="p-3 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 font-medium text-blue-900 transition">
                                ⏱️ 165 Dk Turlama Taktiği →
                            </Link>
                            <Link href="/blog/tyt-kesin-cikan-konular" className="p-3 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 font-medium text-emerald-900 transition">
                                🎯 TYT Banko Çıkan Konular →
                            </Link>
                            <Link href="/ayt-net-hesaplama" className="p-3 bg-purple-50 hover:bg-purple-100 rounded-xl border border-purple-200 font-medium text-purple-900 transition">
                                📊 AYT Net Hesaplama Motoru →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
