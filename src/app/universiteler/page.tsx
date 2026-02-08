'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import UniversityRecommendations from '@/components/UniversityRecommendations'

function UniversityPageContent() {
    const searchParams = useSearchParams()

    // URL'den parametreleri al
    const sayScore = parseFloat(searchParams.get('say') || '0')
    const eaScore = parseFloat(searchParams.get('ea') || '0')
    const sozScore = parseFloat(searchParams.get('soz') || '0')
    const dilScore = parseFloat(searchParams.get('dil') || '0')

    const sayRank = parseInt(searchParams.get('sayRank') || '0')
    const eaRank = parseInt(searchParams.get('eaRank') || '0')
    const sozRank = parseInt(searchParams.get('sozRank') || '0')
    const dilRank = parseInt(searchParams.get('dilRank') || '0')

    const points = {
        say: sayScore,
        ea: eaScore,
        soz: sozScore,
        dil: dilScore
    }

    const estimatedRanks = {
        say: sayRank,
        ea: eaRank,
        soz: sozRank,
        dil: dilRank
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        <span className="font-medium">Ana Sayfaya Dön</span>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Kazanabileceğiniz Üniversiteler ve Bölümler
                    </h1>
                    <p className="text-gray-600">
                        Puanlarınıza ve tahmini sıralamanıza göre kazanma şansınız yüksek olan bölümler
                    </p>
                </div>

                <UniversityRecommendations
                    estimatedRanks={estimatedRanks}
                    points={points}
                />
            </main>
        </div>
    )
}

export default function UniversityPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
        }>
            <UniversityPageContent />
        </Suspense>
    )
}
