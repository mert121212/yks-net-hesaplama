import { Suspense } from 'react'
import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import SEOContent from '@/components/SEOContent'
import CalculatorApp from '@/components/CalculatorApp'

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Suspense fallback={null}>
                <StructuredData />
            </Suspense>

            {/* Hero — Modern, Yüksek Değerli & Güven Verici Tasarım */}
            <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white py-10 sm:py-14 shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold mb-4 text-blue-100 shadow-sm">
                        <span>🎓</span>
                        <span>2027 ÖSYM Kılavuzu & YÖK Atlas Veritabanı Uyumlu</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 tracking-tight leading-tight">
                        YKS Net & Puan Hesaplama 2027
                    </h1>
                    <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed font-normal">
                        TYT, AYT ve YDT optik formundaki doğru ve yanlışlarını gir; 4 yanlışın sildiği netleri, ÖSYM standart sapma katsayılarını ve OBP katkısıyla tahmini yerleştirme puanını hemen gör.
                    </p>

                    {/* Hızlı Erişim Butonları */}
                    <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
                        <Link href="/tyt-net-hesaplama" className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-xs sm:text-sm font-bold text-white border border-white/20 transition shadow-sm hover:scale-[1.02]">
                            ⚡ Sadece TYT Net Hesapla →
                        </Link>
                        <Link href="/ayt-net-hesaplama" className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-xs sm:text-sm font-bold text-white border border-white/20 transition shadow-sm hover:scale-[1.02]">
                            📐 Sadece AYT Net Hesapla →
                        </Link>
                        <Link href="/yks-puan-hesaplama" className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-xs sm:text-sm font-bold text-white border border-white/20 transition shadow-sm hover:scale-[1.02]">
                            🎯 YKS Puan & Sıralama →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Hesaplama aracı — Anchor ile doğrudan odaklanılabilir */}
            <section id="hesaplama" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-20">
                <CalculatorApp />
            </section>

            {/* Zenginleştirilmiş İçerik & Rehberler */}
            <SEOContent />
        </div>
    )
}
