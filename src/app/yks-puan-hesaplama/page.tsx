import type { Metadata } from 'next'
import Link from 'next/link'
import CalculatorApp from '@/components/CalculatorApp'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
    title: 'YKS Puan Hesaplama 2027 [Ham ve Yerleştirme] ⚡ Sıralama Tahmini',
    description: '2027 YKS puan hesaplama: TYT (%40), AYT (%60) netlerin ve lise OBP diploma notun ile ham puanını, yerleştirme puanını ve tahmini Türkiye başarı sıranı hesapla!',
    keywords: 'yks puan hesaplama, yks puan hesaplama 2027, yks yerlestirme puani, yks ham puan, obp yerlestirme puani, yks siralamasi hesapla',
    alternates: { canonical: 'https://yksnethesapla.com/yks-puan-hesaplama' },
    openGraph: {
        title: 'YKS Puan Hesaplama 2027 [Ham ve Yerleştirme] ⚡ Sıralama Tahmini',
        description: 'TYT, AYT ve OBP katkısıyla 2027 ÖSYM katsayılarına göre yerleştirme puanını ve Türkiye sıralamanı hesapla.',
        url: 'https://yksnethesapla.com/yks-puan-hesaplama',
        type: 'website',
    },
}

export default function YKSPuanHesaplamaPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <StructuredData
                title="YKS Puan Hesaplama 2027"
                description="2027 YKS puan hesaplama: TYT, AYT netleri ve OBP diploma notuyla yerleştirme puanı ve sıralama hesaplama aracı."
                url="https://yksnethesapla.com/yks-puan-hesaplama"
            />

            {/* Hero */}
            <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-800 text-white py-10 sm:py-14 shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <nav className="mb-4 text-xs sm:text-sm text-indigo-200">
                        <Link href="/" className="hover:underline">Ana Sayfa</Link>
                        {' > '}
                        <span className="text-white font-medium">YKS Puan Hesaplama</span>
                    </nav>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold mb-4 text-indigo-100 shadow-sm">
                        <span>🎯</span>
                        <span>TYT %40 + AYT %60 + OBP Okul Puanı = Yerleştirme Puanı</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 tracking-tight leading-tight">
                        YKS Puan Hesaplama 2027
                    </h1>
                    <p className="text-base sm:text-lg text-indigo-100 max-w-2xl mx-auto leading-relaxed font-normal">
                        TYT ve AYT netlerini gir; ÖSYM&apos;nin 100 taban puanı, standart sapma katsayıları ve lise diploma notunun 0,6 katsayı katkısıyla yerleştirme puanını ve tahmini başarı sıranı anında gör.
                    </p>
                </div>
            </section>

            {/* Hesaplama Aracı */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-20">
                <CalculatorApp mode="all" />
            </main>

            {/* Bilgilendirici Rehber & Tablolar */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
                <div className="bg-white rounded-2xl shadow-md border border-gray-200/80 p-6 sm:p-10 space-y-8 text-gray-800">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                            Ham Puan ile Yerleştirme Puanı Arasındaki Fark Nedir?
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            ÖSYM sonuç belgenizde iki farklı puan grubu yer alır. Bunların farkını bilmek tercih döneminde hayati öneme sahiptir:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 my-4">
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                                <h4 className="font-bold text-blue-950 mb-1">1. Ham Puan (100 - 500 Puan)</h4>
                                <p className="text-xs text-blue-900 leading-relaxed">
                                    Sadece sınavdaki doğru ve yanlışlarınızdan elde ettiğiniz puandır. ÖSYM her adaya 100 taban puan verir; yaptığınız netlerin puanı bunun üzerine eklenir. Okul diploma notu bu puana dahil değildir.
                                </p>
                            </div>
                            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h4 className="font-bold text-emerald-950 mb-1">2. Yerleştirme Puanı (Y-YKS)</h4>
                                <p className="text-xs text-emerald-900 leading-relaxed">
                                    Ham puanınızın üzerine lise diploma notunuzdan gelen OBP katkısının (en fazla 60 puan) eklenmiş halidir. Üniversite tercihleri sadece ve sadece <strong>Yerleştirme Puanı ve Sıralaması</strong> ile yapılır.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* YKS Yerleştirme Formülü */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            YKS Yerleştirme Puanı Matematiksel Formülü
                        </h3>
                        <div className="bg-gray-100 p-5 rounded-xl border border-gray-200 text-sm font-mono space-y-2">
                            <p><strong>YKS Yerleştirme Puanı</strong> = Ham Puan + (Diploma Notu × 0,6)</p>
                            <p className="text-xs text-gray-600 font-sans">
                                Örneğin lise diploma notu 85 olan bir adayın OBP katkısı: 85 × 0,6 = <strong>+51 Puan</strong>&apos;dır.
                            </p>
                        </div>
                    </div>

                    {/* YÖK Başarı Sırası Barajları */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            YÖK Başarı Sırası Barajları (Bu Sıralamayı Aşmak Şarttır!)
                        </h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-gray-100 text-gray-800">
                                    <tr>
                                        <th className="p-3 border">Bölüm Adı</th>
                                        <th className="p-3 border">Puan Türü</th>
                                        <th className="p-3 border">YÖK Başarı Sırası Barajı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Tıp Fakültesi</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 font-bold text-red-600 border">İlk 50.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Diş Hekimliği</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 font-bold text-red-600 border">İlk 80.000</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Eczacılık</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 font-bold text-red-600 border">İlk 100.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Hukuk Fakültesi</td>
                                        <td className="p-3 border">EA</td>
                                        <td className="p-3 font-bold text-red-600 border">İlk 125.000</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Mühendislik Programları (Ziraat/Orman hariç)</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 font-bold text-red-600 border">İlk 300.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Öğretmenlik Programları</td>
                                        <td className="p-3 border">İlgili Puan Türü</td>
                                        <td className="p-3 font-bold text-red-600 border">İlk 300.000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* İlgili Bağlantılar */}
                    <div className="border-t pt-6">
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">Puan ve Tercih Rehberleri</h4>
                        <div className="grid sm:grid-cols-3 gap-3 text-sm">
                            <Link href="/blog/obp-hesaplama" className="p-3 bg-indigo-50 hover:bg-indigo-100 rounded-xl border border-indigo-200 font-medium text-indigo-900 transition">
                                🎓 OBP ve Kırık OBP Rehberi →
                            </Link>
                            <Link href="/blog/hangi-puan-turu-hangi-bolum" className="p-3 bg-purple-50 hover:bg-purple-100 rounded-xl border border-purple-200 font-medium text-purple-900 transition">
                                🧭 Hangi Puan Türü Hangi Bölüm? →
                            </Link>
                            <Link href="/blog/universite-tercih-stratejileri" className="p-3 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 font-medium text-blue-900 transition">
                                📋 24 Tercih Stratejisi →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
