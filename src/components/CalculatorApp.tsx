'use client'

import { useState, useEffect, memo } from 'react'
import { Calculator } from 'lucide-react'
import dynamic from 'next/dynamic'
import { TYTScores, AYTScores, YDTScores } from '@/types/yks'
import { calculateYKSScores } from '@/utils/yksCalculator'
import ShareResults from '@/components/ShareResults'

const PDFDownload = dynamic(() => import('@/components/PDFDownload'), { ssr: false })
const TYTSection = dynamic(() => import('@/components/TYTSection'), { loading: () => <div className="card animate-pulse h-64 bg-gray-200 rounded-xl" />, ssr: false })
const AYTSection = dynamic(() => import('@/components/AYTSection'), { loading: () => <div className="card animate-pulse h-64 bg-gray-200 rounded-xl" />, ssr: false })
const YDTSection = dynamic(() => import('@/components/YDTSection'), { loading: () => <div className="card animate-pulse h-64 bg-gray-200 rounded-xl" />, ssr: false })
const OBPInput = dynamic(() => import('@/components/OBPInput'), { loading: () => <div className="card animate-pulse h-32 bg-gray-200 rounded-xl" />, ssr: false })

// localStorage
const STORAGE_KEY = 'yks_scores_v1'
function loadSaved() {
    if (typeof window === 'undefined') return null
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') } catch { return null }
}
// Sadece bir kez okur — tüm state'ler bu değeri paylaşır
let _cachedSave: ReturnType<typeof loadSaved> = undefined as unknown as ReturnType<typeof loadSaved>
function getCachedSave() {
    if (_cachedSave === undefined) _cachedSave = loadSaved()
    return _cachedSave
}
function persist(data: object) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)) } catch { }
}

const DEFAULT_TYT: TYTScores = {
    turkce: { dogru: 0, yanlis: 0 }, matematik: { dogru: 0, yanlis: 0 },
    sosyal: { dogru: 0, yanlis: 0 }, fen: { dogru: 0, yanlis: 0 },
}
const DEFAULT_AYT: AYTScores = {
    matematik: { dogru: 0, yanlis: 0 }, fizik: { dogru: 0, yanlis: 0 },
    kimya: { dogru: 0, yanlis: 0 }, biyoloji: { dogru: 0, yanlis: 0 },
    edebiyat: { dogru: 0, yanlis: 0 }, tarih1: { dogru: 0, yanlis: 0 },
    cografya1: { dogru: 0, yanlis: 0 }, tarih2: { dogru: 0, yanlis: 0 },
    cografya2: { dogru: 0, yanlis: 0 }, felsefe: { dogru: 0, yanlis: 0 },
    din: { dogru: 0, yanlis: 0 },
}

const ResultsPanel = memo(function ResultsPanel({
    results, previouslyPlaced = false, previousYearScore = 0,
}: {
    results: ReturnType<typeof calculateYKSScores>
    previouslyPlaced?: boolean
    previousYearScore?: number
}) {
    const sayNet = results.nets.ayt.matematik + results.nets.ayt.fizik + results.nets.ayt.kimya + results.nets.ayt.biyoloji
    const eaNet = results.nets.ayt.matematik + results.nets.ayt.edebiyat + results.nets.ayt.tarih1 + results.nets.ayt.cografya1
    const sozNet = results.nets.ayt.edebiyat + results.nets.ayt.tarih1 + results.nets.ayt.cografya1 + results.nets.ayt.tarih2 + results.nets.ayt.cografya2 + results.nets.ayt.felsefe + results.nets.ayt.din
    const maxScore = Math.max(results.points.say, results.points.ea, results.points.soz, results.points.dil)
    const scoreType = results.points.say === maxScore ? 'SAY' : results.points.ea === maxScore ? 'EA' : results.points.soz === maxScore ? 'SÖZ' : 'DİL'
    const activeNet = scoreType === 'SAY' ? sayNet : scoreType === 'EA' ? eaNet : scoreType === 'SÖZ' ? sozNet : results.nets.ydt.ydt

    return (
        <div className="card sticky-results">
            <h2 className="section-title">Sonuçlar</h2>

            <div className="mb-6">
                <h3 className="subsection-title">TYT Netleri</h3>
                <div className="space-y-2 text-sm">
                    {(['turkce', 'matematik', 'sosyal', 'fen'] as const).map(k => (
                        <div key={k} className="flex justify-between">
                            <span>{k === 'turkce' ? 'Türkçe' : k === 'matematik' ? 'Matematik' : k === 'sosyal' ? 'Sosyal' : 'Fen'}:</span>
                            <span className="font-semibold">{results.nets.tyt[k].toFixed(2)}</span>
                        </div>
                    ))}
                    <hr className="my-2" />
                    <div className="flex justify-between text-base font-bold text-blue-600">
                        <span>TYT Toplam:</span><span>{results.nets.tyt.toplam.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="subsection-title">AYT Netleri</h3>
                <div className="space-y-2 text-sm">
                    {(['matematik', 'fizik', 'kimya', 'biyoloji', 'edebiyat'] as const).map(k => (
                        <div key={k} className="flex justify-between">
                            <span>{k.charAt(0).toUpperCase() + k.slice(1)}:</span>
                            <span className="font-semibold">{results.nets.ayt[k].toFixed(2)}</span>
                        </div>
                    ))}
                    <hr className="my-2" />
                    <div className="flex justify-between text-sm font-bold text-green-600"><span>SAY Neti (Mat+Fen):</span><span>{sayNet.toFixed(2)}</span></div>
                    <div className="flex justify-between text-sm font-bold text-blue-600"><span>EA Neti (Mat+Ede+Sos1):</span><span>{eaNet.toFixed(2)}</span></div>
                    <div className="flex justify-between text-sm font-bold text-purple-600"><span>SÖZ Neti (Ede+Sos):</span><span>{sozNet.toFixed(2)}</span></div>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="subsection-title">YDT Neti</h3>
                <div className="flex justify-between font-bold text-orange-600">
                    <span>YDT:</span><span>{results.nets.ydt.ydt.toFixed(2)}</span>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="subsection-title">Üniversite Puanları</h3>
                <div className="mb-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-xs text-yellow-800">⚠️ Tahmini puanlardır. Kesin sonuç sınav sonrasında ÖSYM tarafından açıklanır.</p>
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
                        <span className="font-semibold text-orange-600">{results.ydtHesaplandi ? results.points.dil.toFixed(2) : 'Hesaplanmadı'}</span>
                    </div>
                </div>
            </div>

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
                            <span className="font-semibold text-orange-600">{results.ydtHesaplandi ? results.estimatedRanks.dil?.toLocaleString('tr-TR') : 'Hesaplanmadı'}</span>
                        </div>
                    </div>
                </div>
            )}

            <ShareResults tytNet={results.nets.tyt.toplam} aytNet={activeNet} ydtNet={results.nets.ydt.ydt} scoreType={scoreType} totalScore={maxScore} />
            <PDFDownload results={results} />
        </div>
    )
})

export default function CalculatorApp() {
    // lazy initializer — sadece ilk render'da localStorage okur, TBT'yi etkilemez
    const [tytScores, setTytScores] = useState<TYTScores>(() => getCachedSave()?.tyt ?? DEFAULT_TYT)
    const [aytScores, setAytScores] = useState<AYTScores>(() => getCachedSave()?.ayt ?? DEFAULT_AYT)
    const [ydtScores, setYdtScores] = useState<YDTScores>(() => getCachedSave()?.ydt ?? { ydt: { dogru: 0, yanlis: 0 } })
    const [obp, setObp] = useState<number>(() => getCachedSave()?.obp ?? 0)
    const [obpHalved, setObpHalved] = useState<boolean>(() => getCachedSave()?.obpHalved ?? false)
    const [obpMesleki, setObpMesleki] = useState<boolean>(() => getCachedSave()?.obpMesleki ?? false)
    const [previouslyPlaced, setPreviouslyPlaced] = useState<boolean>(() => getCachedSave()?.previouslyPlaced ?? false)
    const [previousYearScore, setPreviousYearScore] = useState<number>(() => getCachedSave()?.previousYearScore ?? 0)

    // Debounced persist — her tuş vuruşunda değil, 500ms sonra kaydeder
    useEffect(() => {
        const id = setTimeout(() => {
            persist({ tyt: tytScores, ayt: aytScores, ydt: ydtScores, obp, obpHalved, obpMesleki, previouslyPlaced, previousYearScore })
        }, 500)
        return () => clearTimeout(id)
    }, [tytScores, aytScores, ydtScores, obp, obpHalved, obpMesleki, previouslyPlaced, previousYearScore])

    const handleTYT = (s: keyof TYTScores, f: 'dogru' | 'yanlis', v: number) =>
        setTytScores(p => ({ ...p, [s]: { ...p[s], [f]: v } }))
    const handleAYT = (s: keyof AYTScores, f: 'dogru' | 'yanlis', v: number) =>
        setAytScores(p => ({ ...p, [s]: { ...p[s], [f]: v } }))
    const handleYDT = (s: keyof YDTScores, f: 'dogru' | 'yanlis', v: number) =>
        setYdtScores(p => ({ ...p, [s]: { ...p[s], [f]: v } }))

    const resetTYT = () => setTytScores(DEFAULT_TYT)
    const resetAYT = () => setAytScores(DEFAULT_AYT)
    const resetYDT = () => setYdtScores({ ydt: { dogru: 0, yanlis: 0 } })
    const resetAll = () => {
        setTytScores(DEFAULT_TYT)
        setAytScores(DEFAULT_AYT)
        setYdtScores({ ydt: { dogru: 0, yanlis: 0 } })
        setObp(0)
        setObpHalved(false)
        setObpMesleki(false)
        setPreviouslyPlaced(false)
        setPreviousYearScore(0)
        try { localStorage.removeItem(STORAGE_KEY) } catch { }
    }

    const hasInput = Object.values(tytScores).some(s => s.dogru > 0 || s.yanlis > 0)
        || Object.values(aytScores).some(s => s.dogru > 0 || s.yanlis > 0)
        || ydtScores.ydt.dogru > 0 || ydtScores.ydt.yanlis > 0 || obp > 0

    const results = hasInput ? calculateYKSScores(tytScores, aytScores, ydtScores, obp, obpHalved, obpMesleki) : null

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8" id="hesaplama">
                <TYTSection scores={tytScores} onScoreChange={handleTYT} onReset={resetTYT} />
                <AYTSection scores={aytScores} onScoreChange={handleAYT} onReset={resetAYT} />
                <YDTSection scores={ydtScores} onScoreChange={handleYDT} onReset={resetYDT} />
                <OBPInput
                    obp={obp} onObpChange={setObp}
                    obpHalved={obpHalved} onObpHalvedChange={setObpHalved}
                    obpMesleki={obpMesleki} onObpMeslekiChange={setObpMesleki}
                    previouslyPlaced={previouslyPlaced} onPreviouslyPlacedChange={setPreviouslyPlaced}
                    previousYearScore={previousYearScore} onPreviousYearScoreChange={setPreviousYearScore}
                />
                <div className="flex justify-end">
                    <button
                        onClick={resetAll}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 hover:border-red-300 rounded-lg transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Tüm Netleri Sıfırla
                    </button>
                </div>
            </div>
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
