import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import StructuredData from '@/components/StructuredData'
import SEOContent from '@/components/SEOContent'

import CalculatorApp from '@/components/CalculatorApp'

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
                        YKS Net Hesaplama 2027
                    </h1>
                    <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
                        Optik formdaki doğru ve yanlışlarını gir; 4 yanlışın sildiği netleri, ÖSYM test katsayılarını ve OBP katkısıyla tahmini sıralamanı hemen gör.
                    </p>
                </div>
            </section>

            {/* Hesaplama aracı — Server Rendered */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <CalculatorApp />
            </section>

            {/* SEO içeriği — static, direct import */}
            <SEOContent />
        </div>
    )
}
