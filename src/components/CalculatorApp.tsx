'use client'

import { useState, memo } from 'react'
import { Calculator } from 'lucide-react'
import dynamic from 'next/dynamic'
import { TYTScores, AYTScores, YDTScores } from '@/types/yks'
import { calculateYKSScores } from '@/utils/yksCalculator'
import ShareResults from '@/components/ShareResults'

const PDFDownload = dynamic(() => import('@/components/PDFDownload'), { ssr: false })

const TYTSection = dynamic(() => import('@/components/TYTSection'), {
    loading: () => <div className="card animate-pulse h-64 bg-gray-200 rounded-xl" />,
    ssr: false,
})
const AYTSection = dynamic(() => import('@/components/AYTSection'), {
    loading: () => <div className="card animate-pulse h-64 bg-gray-200 rounded-xl" />,
    ssr: false,
})
const YDTSection = dynamic(() => import('@/components/YDTSection'), {
    loading: () => <div className="card animate-pulse h-64 bg-gray-200 rounded-xl" />,
    ssr: false,
})
const OBPInput = dynamic(() => import('@/components/OBPInput'), {
    loading: () => <div className="card animate-pulse h-32 bg-gray-200 rounded-xl" />,
    ssr: false,
})

const ResultsPanel = memo(function ResultsPanel({
    results,
    previouslyPlaced = false,
    previousYearScore = 0,
}: {
    results: ReturnType<typeof calculateYKSScores>
    previouslyPlaced?: boolean
    previousYearScore?: number
}) {
    const sayNet = results.nets.ayt.matematik + results.nets.ayt.fizik + results.nets.ayt.kimya + results.nets.ayt.biyoloji
    const eaNet = results.nets.ayt.matematik + results.nets.ayt.edebiyat + results.nets.ayt.tarih1 + results.nets.ayt.cografya1
    const sozNet = results.nets.ayt.edebiyat + results.nets.ayt.tarih1 + results.nets.ayt.cografya1 + results.nets.ayt.tarih2 + results.nets.ayt.cografya2 + results.nets.ayt.felsefe + results.nets.ayt.din

    const maxScore = Math.max(results.points.say, results.points.ea, results.points.soz, results.points.dil)
    const scoreType =
        results.points.say === maxScore ? 'SAY' :
            results.points.ea === maxScore ? 'EA' :
                results.points.soz === maxScore ? 'SÖZ' : 'DİL'
    const activeNet = scoreType === 'SAY' ? sayNet : scoreType === 'EA' ? eaNet : scoreType === 'SÖZ' ? sozNet : results.nets.ydt.ydt

    return (
        <div className="card sticky-results">
            <h2 className="section-title">Sonuçlar</h2>

            {/* TYT */}
            <div className="mb-6">
                <h3 className="subsection-title">TYT Netleri</h3>
                <div className="space-y-2 text-sm">
                    {(['turkce', 'matematik', 'sosyal', 'fen'] as const).map(k => (
                        <div key={k} className="flex justify-between">
                            <span className="capitalize">{k === 'turkce' ? 'Türkçe' : k === 'matematik' ? 'Matematik' : k === 'sosyal' ? 'Sosyal' : 'Fen'}:</span>
                            <span className="font-semibold">{results.nets.tyt[k].toFixed(2)}</span>
                        </div>
                    ))}
                    <hr className="my-2" />
                    <div className="flex justify-between text-base font-bold text-blue-600">
                        <span>TYT Toplam:</span>
                        <span>{results.nets.tyt.toplam.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            {/* AYT */}
            <div className="mb-6">
                <h3 className="subsection-title">AYT Netleri</h3>
                <div className="space-y-2 text-sm">
                    {(['matematik', 'fizik', 'kimya', 'biyoloji', 'edebiyat'] as const).map(k => (
                        <div key={k} className="flex justify-between">
                            <span className="capitalize">{k.charAt(0).toUpperCase() + k.slice(1)}:</span>
                            <span className="font-semibold">{results.nets.ayt[k].toFixed(2)}</span>
                        </div>
                    ))}
                    <hr className="my-2" />
                    <div className="flex justify-between text-sm font-bold text-green-600">
                        <span>SAY Neti (Mat+Fen):</span><span>{sayNet.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-blue-600">
                        <span>EA Neti (Mat+Ede+Sos1):</span><span>{eaNet.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-purple-600">
                        <span>SÖZ Neti (Ede+Sos):</span><span>{sozNet.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            {/* YDT */}
            <div className="mb-6">
                <h3 className="subsection-title">YDT Neti</h3>
                <div className="flex justify-between font-bold text-orange-600">
                    <span>YDT:</span><span>{results.nets.ydt.ydt.toFixed(2)}</span>
                </div>
            </div>

            {/* Puanlar */}
            <div className="mb-6">
                <h3 className="subsection-title">Üniversite Puanları</h3>
                <div className="mb-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-xs text-yellow-800">⚠️ Tahmini puanlardır. ÖSYM standart sapma normalizasyonu kullandığından kesin sonuç sınav sonrasında açıklanır.</p>
                </div>
                {previouslyPlaced && previousYearScore > 0 && (
                    <div className="mb-3 p-2 bg-amber-50 border border-amber-200 rounded-lg">
                        <p className="text-xs text-amber-800 font-medium">📌 Geçen Yılki Puanınız: {previousYearScore.toFixed(2)}</p>
                    </div>
                )}
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>SAY:</span><span className="font-semibold text-green-600">{results.points.say.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>EA:</span><span className="font-semibold text-blue-600">{results.points.ea.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>SÖZ:</span><span className="font-semibold text-purple-600">{results.points.soz.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>DİL:</span>
                        <span className="font-semibold text-orange-600">
                            {results.ydtHesaplandi ? results.points.dil.toFixed(2) : 'Hesaplanmadı'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Sıralamalar */}
            {results.estimatedRanks && (
                <div className="mb-6">
                    <h3 className="subsection-title">Tahmini Sıralamalar</h3>
                    <div className="mb-2 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-xs text-yellow-800">⚠️ 2025 YKS verilerine göre tahmindir, ±%20 sapma olabilir.</p>
                    </div>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span>SAY:</span><span className="font-semibold text-green-600">{results.estimatedRanks.say?.toLocaleString('tr-TR')}</span></div>
                        <div className="flex justify-between"><span>EA:</span><span className="font-semibold text-blue-600">{results.estimatedRanks.ea?.toLocaleString('tr-TR')}</span></div>
                        <div className="flex justify-between"><span>SÖZ:</span><span className="font-semibold text-purple-600">{results.estimatedRanks.soz?.toLocaleString('tr-TR')}</span></div>
                        <div className="flex justify-between"><span>DİL:</span>
                            <span className="font-semibold text-orange-600">
                                {results.ydtHesaplandi ? results.estimatedRanks.dil?.toLocaleString('tr-TR') : 'Hesaplanmadı'}
                            </span>
                        </div>
                    </div>
                </div>
            )}

            <ShareResults
                tytNet={results.nets.tyt.toplam}
                aytNet={activeNet}
                ydtNet={results.nets.ydt.ydt}
                scoreType={scoreType}
                totalScore={maxScore}
            />
            <PDFDownload results={results} />
        </div>
    )
})

export default function CalculatorApp() {
    const [tytScores, setTytScores] = useState<TYTScores>({
        turkce: { dogru: 0, yanlis: 0 }, matematik: { dogru: 0, yanlis: 0 },
        sosyal: { dogru: 0, yanlis: 0 }, fen: { dogru: 0, yanlis: 0 },
    })
    const [aytScores, setAytScores] = useState<AYTScores>({
        matematik: { dogru: 0, yanlis: 0 }, fizik: { dogru: 0, yanlis: 0 },
        kimya: { dogru: 0, yanlis: 0 }, biyoloji: { dogru: 0, yanlis: 0 },
        edebiyat: { dogru: 0, yanlis: 0 }, tarih1: { dogru: 0, yanlis: 0 },
        cografya1: { dogru: 0, yanlis: 0 }, tarih2: { dogru: 0, yanlis: 0 },
        cografya2: { dogru: 0, yanlis: 0 }, felsefe: { dogru: 0, yanlis: 0 },
        din: { dogru: 0, yanlis: 0 },
    })
    const [ydtScores, setYdtScores] = useState<YDTScores>({ ydt: { dogru: 0, yanlis: 0 } })
    const [obp, setObp] = useState(0)
    const [obpHalved, setObpHalved] = useState(false)
    const [obpMesleki, setObpMesleki] = useState(false)
    const [previouslyPlaced, setPreviouslyPlaced] = useState(false)
    const [previousYearScore, setPreviousYearScore] = useState(0)

    const handleTYT = (s: keyof TYTScores, f: 'dogru' | 'yanlis', v: number) =>
        setTytScores(p => ({ ...p, [s]: { ...p[s], [f]: v } }))
    const handleAYT = (s: keyof AYTScores, f: 'dogru' | 'yanlis', v: number) =>
        setAytScores(p => ({ ...p, [s]: { ...p[s], [f]: v } }))
    const handleYDT = (s: keyof YDTScores, f: 'dogru' | 'yanlis', v: number) =>
        setYdtScores(p => ({ ...p, [s]: { ...p[s], [f]: v } }))

    const hasInput = Object.values(tytScores).some(s => s.dogru > 0 || s.yanlis > 0)
        || Object.values(aytScores).some(s => s.dogru > 0 || s.yanlis > 0)
        || ydtScores.ydt.dogru > 0 || ydtScores.ydt.yanlis > 0
        || obp > 0

    const results = hasInput ? calculateYKSScores(tytScores, aytScores, ydtScores, obp, obpHalved, obpMesleki) : null

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8" id="hesaplama">
                <TYTSection scores={tytScores} onScoreChange={handleTYT} />
                <AYTSection scores={aytScores} onScoreChange={handleAYT} />
                <YDTSection scores={ydtScores} onScoreChange={handleYDT} />
                <OBPInput
                    obp={obp} onObpChange={setObp}
                    obpHalved={obpHalved} onObpHalvedChange={setObpHalved}
                    obpMesleki={obpMesleki} onObpMeslekiChange={setObpMesleki}
                    previouslyPlaced={previouslyPlaced} onPreviouslyPlacedChange={setPreviouslyPlaced}
                    previousYearScore={previousYearScore} onPreviousYearScoreChange={setPreviousYearScore}
                />
            </div>

            {/* Sonuçlar */}
            <div id="sonuclar">
                {results ? (
                    <ResultsPanel results={results} previouslyPlaced={previouslyPlaced} previousYearScore={previousYearScore} />
                ) : (
                    <div className="card">
                        <h2 className="section-title">Sonuçlar</h2>
                        <div className="text-center py-12">
                            <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500">Hesaplama yapmak için doğru ve yanlış sayılarını girin.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
