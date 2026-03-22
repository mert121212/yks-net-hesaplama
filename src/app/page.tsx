'use client'

import { useState, Suspense, memo } from 'react'
import { Calculator } from 'lucide-react'
import dynamic from 'next/dynamic'
import { TYTScores, AYTScores, YDTScores } from '@/types/yks'
import { calculateYKSScores } from '@/utils/yksCalculator'
import ShareResults from '@/components/ShareResults'

// Lazy load components with better loading states
const TYTSection = dynamic(() => import('@/components/TYTSection'), {
    loading: () => <div className="card animate-pulse h-64 bg-gray-200 rounded-xl"></div>
})
const AYTSection = dynamic(() => import('@/components/AYTSection'), {
    loading: () => <div className="card animate-pulse h-64 bg-gray-200 rounded-xl"></div>
})
const YDTSection = dynamic(() => import('@/components/YDTSection'), {
    loading: () => <div className="card animate-pulse h-64 bg-gray-200 rounded-xl"></div>
})
const OBPInput = dynamic(() => import('@/components/OBPInput'), {
    loading: () => <div className="card animate-pulse h-32 bg-gray-200 rounded-xl"></div>
})
const CountdownTimer = dynamic(() => import('@/components/CountdownTimer'), {
    loading: () => <div className="animate-pulse h-10 w-32 bg-gray-200 rounded"></div>
})
const StructuredData = dynamic(() => import('@/components/StructuredData'))
const SEOContent = dynamic(() => import('@/components/SEOContent'), {
    loading: () => <div className="animate-pulse h-96 bg-gray-100"></div>
})

// Memoized components for better performance
const HeroSection = memo(function HeroSection() {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="mb-4">
                        <Suspense fallback={<div className="animate-pulse h-10 w-40 bg-blue-400 rounded mx-auto"></div>}>
                            <CountdownTimer />
                        </Suspense>
                    </div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                        YKS Net Hesaplama 2026
                    </h1>
                    <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
                        TYT, AYT ve YDT netlerinizi hesaplayın. Hızlı, doğru ve ücretsiz.
                    </p>
                </div>
            </div>
        </section>
    )
})

const ResultsPanel = memo(function ResultsPanel({
    results,
    previouslyPlaced = false,
    previousYearScore = 0
}: {
    results: any,
    previouslyPlaced?: boolean,
    previousYearScore?: number
}) {
    return (
        <div className="card sticky-results">
            <h2 className="section-title">Sonuçlar</h2>

            {/* TYT Sonuçları */}
            <div className="mb-6">
                <h3 className="subsection-title">TYT Netleri</h3>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span>Türkçe:</span>
                        <span className="font-semibold">{results.nets.tyt.turkce.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Matematik:</span>
                        <span className="font-semibold">{results.nets.tyt.matematik.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Sosyal:</span>
                        <span className="font-semibold">{results.nets.tyt.sosyal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Fen:</span>
                        <span className="font-semibold">{results.nets.tyt.fen.toFixed(2)}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between text-lg font-bold text-primary-600">
                        <span>TYT Toplam:</span>
                        <span>{results.nets.tyt.toplam.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            {/* AYT Sonuçları */}
            <div className="mb-6">
                <h3 className="subsection-title">AYT Netleri</h3>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span>Matematik:</span>
                        <span className="font-semibold">{results.nets.ayt.matematik.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Fizik:</span>
                        <span className="font-semibold">{results.nets.ayt.fizik.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Kimya:</span>
                        <span className="font-semibold">{results.nets.ayt.kimya.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Biyoloji:</span>
                        <span className="font-semibold">{results.nets.ayt.biyoloji.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Edebiyat:</span>
                        <span className="font-semibold">{results.nets.ayt.edebiyat.toFixed(2)}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between text-base font-bold text-green-600">
                        <span>AYT Toplam:</span>
                        <span>{results.nets.ayt.toplam.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            {/* YDT Sonuçları */}
            <div className="mb-6">
                <h3 className="subsection-title">YDT Netleri</h3>
                <div className="flex justify-between text-lg font-bold text-orange-600">
                    <span>YDT:</span>
                    <span>{results.nets.ydt.ydt.toFixed(2)}</span>
                </div>
            </div>

            {/* Üniversite Puanları */}
            <div className="mb-6">
                <h3 className="subsection-title">Üniversite Puanları</h3>
                <div className="mb-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-xs text-yellow-800">
                        ⚠️ Bu puanlar tahminidir. ÖSYM'nin gerçek formülü standart sapma normalizasyonu içerdiğinden kesin sonuç sınav sonrasında açıklanır.
                    </p>
                </div>

                {/* Geçen Yıl Puanı Uyarısı */}
                {previouslyPlaced && previousYearScore > 0 && (
                    <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                        <p className="text-xs text-amber-800 font-medium mb-2">
                            📌 Geçen Yılki Puanınız: {previousYearScore.toFixed(2)}
                        </p>
                        {(results.points.say < previousYearScore ||
                            results.points.ea < previousYearScore ||
                            results.points.soz < previousYearScore ||
                            results.points.dil < previousYearScore) && (
                                <p className="text-xs text-amber-700">
                                    ⚠️ Bazı puanlarınız geçen yılki puanınızdan düşük.
                                    Yerleştirmede geçen yılki puanınız baz alınacaktır.
                                </p>
                            )}
                    </div>
                )}

                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span>SAY:</span>
                        <span className="font-semibold text-green-600">{results.points.say.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>EA:</span>
                        <span className="font-semibold text-blue-600">{results.points.ea.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>SÖZ:</span>
                        <span className="font-semibold text-purple-600">{results.points.soz.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>DİL:</span>
                        <span className="font-semibold text-orange-600">
                            {results.ydtHesaplandi ? results.points.dil.toFixed(2) : 'Hesaplanmadı'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Tahmini Sıralamalar */}
            {results.estimatedRanks && (
                <div className="mb-6">
                    <h3 className="subsection-title">Tahmini Sıralamalar</h3>
                    <div className="mb-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-xs text-yellow-800">
                            ⚠️ Sıralamalar 2025 YKS verilerine göre tahmindir, ±%20 sapma olabilir.
                        </p>
                    </div>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>SAY:</span>
                            <span className="font-semibold text-green-600">
                                {results.estimatedRanks.say?.toLocaleString('tr-TR')}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>EA:</span>
                            <span className="font-semibold text-blue-600">
                                {results.estimatedRanks.ea?.toLocaleString('tr-TR')}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>SÖZ:</span>
                            <span className="font-semibold text-purple-600">
                                {results.estimatedRanks.soz?.toLocaleString('tr-TR')}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>DİL:</span>
                            <span className="font-semibold text-orange-600">
                                {results.ydtHesaplandi
                                    ? results.estimatedRanks.dil?.toLocaleString('tr-TR')
                                    : 'Hesaplanmadı'}
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Paylaşım Butonu */}
            <ShareResults
                tytNet={results.nets.tyt.toplam}
                aytNet={results.nets.ayt.toplam}
                ydtNet={results.nets.ydt.ydt}
                scoreType={
                    results.points.say >= Math.max(results.points.ea, results.points.soz, results.points.dil) ? 'SAY' :
                        results.points.ea >= Math.max(results.points.soz, results.points.dil) ? 'EA' :
                            results.points.soz >= results.points.dil ? 'SÖZ' : 'DİL'
                }
                totalScore={Math.max(results.points.say, results.points.ea, results.points.soz, results.points.dil)}
            />
        </div>
    )
})

export default function HomePage() {
    const [tytScores, setTytScores] = useState<TYTScores>({
        turkce: { dogru: 0, yanlis: 0 },
        matematik: { dogru: 0, yanlis: 0 },
        sosyal: { dogru: 0, yanlis: 0 },
        fen: { dogru: 0, yanlis: 0 }
    })

    const [aytScores, setAytScores] = useState<AYTScores>({
        matematik: { dogru: 0, yanlis: 0 },
        fizik: { dogru: 0, yanlis: 0 },
        kimya: { dogru: 0, yanlis: 0 },
        biyoloji: { dogru: 0, yanlis: 0 },
        edebiyat: { dogru: 0, yanlis: 0 },
        tarih1: { dogru: 0, yanlis: 0 },
        cografya1: { dogru: 0, yanlis: 0 },
        tarih2: { dogru: 0, yanlis: 0 },
        cografya2: { dogru: 0, yanlis: 0 },
        felsefe: { dogru: 0, yanlis: 0 },
        din: { dogru: 0, yanlis: 0 }
    })

    const [ydtScores, setYdtScores] = useState<YDTScores>({
        ydt: { dogru: 0, yanlis: 0 }
    })

    const [obp, setObp] = useState<number>(0)
    const [obpHalved, setObpHalved] = useState<boolean>(false)
    const [obpMesleki, setObpMesleki] = useState<boolean>(false)
    const [previouslyPlaced, setPreviouslyPlaced] = useState<boolean>(false)
    const [previousYearScore, setPreviousYearScore] = useState<number>(0)

    const handleTYTScoreChange = (subject: keyof TYTScores, field: 'dogru' | 'yanlis', value: number) => {
        setTytScores(prev => ({
            ...prev,
            [subject]: {
                ...prev[subject],
                [field]: value
            }
        }))
    }

    const handleAYTScoreChange = (subject: keyof AYTScores, field: 'dogru' | 'yanlis', value: number) => {
        setAytScores(prev => ({
            ...prev,
            [subject]: {
                ...prev[subject],
                [field]: value
            }
        }))
    }

    const handleYDTScoreChange = (subject: keyof YDTScores, field: 'dogru' | 'yanlis', value: number) => {
        setYdtScores(prev => ({
            ...prev,
            [subject]: {
                ...prev[subject],
                [field]: value
            }
        }))
    }

    // Herhangi bir değer girilmiş mi kontrol et
    const hasAnyInput = () => {
        const tytHasInput = Object.values(tytScores).some(s => s.dogru > 0 || s.yanlis > 0)
        const aytHasInput = Object.values(aytScores).some(s => s.dogru > 0 || s.yanlis > 0)
        const ydtHasInput = ydtScores.ydt.dogru > 0 || ydtScores.ydt.yanlis > 0
        return tytHasInput || aytHasInput || ydtHasInput || obp > 0
    }

    const results = hasAnyInput() ? calculateYKSScores(tytScores, aytScores, ydtScores, obp, obpHalved, obpMesleki) : null

    return (
        <div className="min-h-screen">
            <Suspense fallback={null}>
                <StructuredData />
            </Suspense>

            <HeroSection />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sol Kolon - Hesaplama Formu */}
                    <div className="lg:col-span-2 space-y-8" id="hesaplama">
                        <Suspense fallback={<div className="card animate-pulse h-64 bg-gray-200 rounded-xl"></div>}>
                            <TYTSection
                                scores={tytScores}
                                onScoreChange={handleTYTScoreChange}
                            />
                        </Suspense>

                        <Suspense fallback={<div className="card animate-pulse h-64 bg-gray-200 rounded-xl"></div>}>
                            <AYTSection
                                scores={aytScores}
                                onScoreChange={handleAYTScoreChange}
                            />
                        </Suspense>

                        <Suspense fallback={<div className="card animate-pulse h-64 bg-gray-200 rounded-xl"></div>}>
                            <YDTSection
                                scores={ydtScores}
                                onScoreChange={handleYDTScoreChange}
                            />
                        </Suspense>

                        <Suspense fallback={<div className="card animate-pulse h-32 bg-gray-200 rounded-xl"></div>}>
                            <OBPInput
                                obp={obp}
                                onObpChange={setObp}
                                obpHalved={obpHalved}
                                onObpHalvedChange={setObpHalved}
                                obpMesleki={obpMesleki}
                                onObpMeslekiChange={setObpMesleki}
                                previouslyPlaced={previouslyPlaced}
                                onPreviouslyPlacedChange={setPreviouslyPlaced}
                                previousYearScore={previousYearScore}
                                onPreviousYearScoreChange={setPreviousYearScore}
                            />
                        </Suspense>
                    </div>

                    {/* Sağ Kolon - Sonuçlar */}
                    <div className="space-y-6" id="sonuclar">
                        {results ? (
                            <ResultsPanel
                                results={results}
                                previouslyPlaced={previouslyPlaced}
                                previousYearScore={previousYearScore}
                            />
                        ) : (
                            <div className="card">
                                <h2 className="section-title">Sonuçlar</h2>
                                <div className="text-center py-12">
                                    <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                                    <p className="text-gray-500">
                                        Hesaplama yapmak için lütfen doğru ve yanlış sayılarını girin.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Suspense fallback={<div className="h-96"></div>}>
                <SEOContent />
            </Suspense>
        </div>
    )
}