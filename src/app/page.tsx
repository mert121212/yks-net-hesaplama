import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Sadece client gerektiren bileşenler lazy load
const CalculatorApp = dynamic(() => import('@/components/CalculatorApp'), {
    loading: () => (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <div className="card animate-pulse h-64 bg-gray-200 rounded-xl" />
                <div className="card animate-pulse h-64 bg-gray-200 rounded-xl" />
            </div>
            <div className="card animate-pulse h-64 bg-gray-200 rounded-xl" />
        </div>
    ),
    ssr: false,
})

const StructuredData = dynamic(() => import('@/components/StructuredData'), { ssr: true })
const SEOContent = dynamic(() => import('@/components/SEOContent'), {
    loading: () => <div className="h-96" />,
})

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Suspense fallback={null}>
                <StructuredData />
            </Suspense>

            {/* Hero — tamamen static, sıfır JS */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 sm:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                        YKS Net Hesaplama 2026
                    </h1>
                    <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
                        TYT, AYT ve YDT netlerinizi hesaplayın. Hızlı, doğru ve ücretsiz.
                    </p>
                </div>
            </section>

            {/* Hesaplama aracı — client-side, lazy */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Suspense fallback={
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="card animate-pulse h-64 bg-gray-200 rounded-xl" />
                            <div className="card animate-pulse h-64 bg-gray-200 rounded-xl" />
                        </div>
                        <div className="card animate-pulse h-64 bg-gray-200 rounded-xl" />
                    </div>
                }>
                    <CalculatorApp />
                </Suspense>
            </main>

            {/* SEO içeriği — static */}
            <Suspense fallback={<div className="h-96" />}>
                <SEOContent />
            </Suspense>
        </div>
    )
}
