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

const PRESETS = [
    {
        id: 'tip',
        title: '🩺 Tıp Fakültesi',
        badge: 'SAY ~15.000',
        tyt: {
            turkce: { dogru: 35, yanlis: 4 },
            matematik: { dogru: 34, yanlis: 3 },
            sosyal: { dogru: 16, yanlis: 3 },
            fen: { dogru: 17, yanlis: 2 },
        },
        ayt: {
            ...DEFAULT_AYT,
            matematik: { dogru: 36, yanlis: 2 },
            fizik: { dogru: 12, yanlis: 2 },
            kimya: { dogru: 12, yanlis: 1 },
            biyoloji: { dogru: 11, yanlis: 2 },
        },
        obp: 95,
    },
    {
        id: 'hukuk',
        title: '⚖️ Hukuk Fakültesi',
        badge: 'EA ~25.000',
        tyt: {
            turkce: { dogru: 33, yanlis: 5 },
            matematik: { dogru: 27, yanlis: 4 },
            sosyal: { dogru: 17, yanlis: 2 },
            fen: { dogru: 8, yanlis: 4 },
        },
        ayt: {
            ...DEFAULT_AYT,
            matematik: { dogru: 31, yanlis: 3 },
            edebiyat: { dogru: 21, yanlis: 2 },
            tarih1: { dogru: 8, yanlis: 2 },
            cografya1: { dogru: 5, yanlis: 1 },
        },
        obp: 88,
    },
    {
        id: 'muhendislik',
        title: '💻 Bilgisayar Müh.',
        badge: 'SAY ~45.000',
        tyt: {
            turkce: { dogru: 32, yanlis: 5 },
            matematik: { dogru: 30, yanlis: 4 },
            sosyal: { dogru: 15, yanlis: 3 },
            fen: { dogru: 14, yanlis: 4 },
        },
        ayt: {
            ...DEFAULT_AYT,
            matematik: { dogru: 32, yanlis: 3 },
            fizik: { dogru: 10, yanlis: 3 },
            kimya: { dogru: 10, yanlis: 2 },
            biyoloji: { dogru: 9, yanlis: 3 },
        },
        obp: 90,
    },
    {
        id: 'sozel-pdr',
        title: '📚 Sözel / İletişim',
        badge: 'SÖZ ~20.000',
        tyt: {
            turkce: { dogru: 34, yanlis: 4 },
            matematik: { dogru: 14, yanlis: 4 },
            sosyal: { dogru: 18, yanlis: 2 },
            fen: { dogru: 4, yanlis: 2 },
        },
        ayt: {
            ...DEFAULT_AYT,
            edebiyat: { dogru: 22, yanlis: 2 },
            tarih1: { dogru: 8, yanlis: 2 },
            cografya1: { dogru: 5, yanlis: 1 },
            tarih2: { dogru: 9, yanlis: 2 },
            cografya2: { dogru: 9, yanlis: 2 },
            felsefe: { dogru: 10, yanlis: 2 },
            din: { dogru: 5, yanlis: 1 },
        },
        obp: 86,
    },
]

const ResultsPanel = memo(function ResultsPanel({
    results, obpHalved = false,
}: {
    results: ReturnType<typeof calculateYKSScores>
    obpHalved?: boolean
}) {
    const sayNet = results.nets.ayt.matematik + results.nets.ayt.fizik + results.nets.ayt.kimya + results.nets.ayt.biyoloji
    const eaNet = results.nets.ayt.matematik + results.nets.ayt.edebiyat + results.nets.ayt.tarih1 + results.nets.ayt.cografya1
    const sozNet = results.nets.ayt.edebiyat + results.nets.ayt.tarih1 + results.nets.ayt.cografya1 + results.nets.ayt.tarih2 + results.nets.ayt.cografya2 + results.nets.ayt.felsefe + results.nets.ayt.din
    const isOnlyTYT = results.nets.ayt.toplam === 0 && results.nets.ydt.ydt === 0
    const maxScore = isOnlyTYT ? (results.points.tyt ?? 100) : Math.max(results.points.say, results.points.ea, results.points.soz, results.points.dil)
    const scoreType = isOnlyTYT ? 'TYT' : results.points.say === maxScore ? 'SAY' : results.points.ea === maxScore ? 'EA' : results.points.soz === maxScore ? 'SÖZ' : 'DİL'
    const activeNet = isOnlyTYT ? results.nets.tyt.toplam : scoreType === 'SAY' ? sayNet : scoreType === 'EA' ? eaNet : scoreType === 'SÖZ' ? sozNet : results.nets.ydt.ydt

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
                <h3 className="subsection-title">Puanlar ve Sıralamalar</h3>
                <div className="mb-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-xs text-yellow-800">⚠️ Sıralamalar ÖSYM resmi yerleştirme ve ham yığınsal dağılım raporlarına dayalı tahmindir.</p>
                </div>
                {obpHalved && (
                    <div className="mb-3 p-2.5 bg-amber-50 border border-amber-300 rounded-lg">
                        <p className="text-xs text-amber-900 font-semibold">⚠️ Kırık OBP uygulandı (Katsayı 0,06 olarak hesaplandı).</p>
                    </div>
                )}

                {/* YERLEŞTİRME PUANLARI VE SIRALAMALARI (TERCİHTE KULLANILAN) */}
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-700">🎯 Yerleştirme Sonuçları</span>
                        <span className="text-[11px] bg-blue-100 text-blue-800 font-medium px-2 py-0.5 rounded-full">Tercihte Geçerli (OBP Dahil)</span>
                    </div>
                    <div className="space-y-2 text-sm bg-gray-50/80 p-3 rounded-xl border border-gray-200/70">
                        {/* TYT */}
                        <div className="flex justify-between items-center border-b border-gray-200/60 pb-1.5">
                            <span className="font-semibold text-gray-800">TYT:</span>
                            <div className="text-right">
                                <span className="font-bold text-blue-700 block">
                                    {(results.nets.tyt.turkce >= 0.5 || results.nets.tyt.matematik >= 0.5) && results.points.tyt
                                        ? results.points.tyt.toFixed(2)
                                        : 'Baraj Altı'}
                                </span>
                                {results.estimatedRanks?.tyt && (
                                    <span className="text-xs text-gray-500 block">~{results.estimatedRanks.tyt.toLocaleString('tr-TR')}. sıra</span>
                                )}
                            </div>
                        </div>
                        {/* SAY */}
                        <div className="flex justify-between items-center border-b border-gray-200/60 pb-1.5">
                            <span className="font-semibold text-gray-800">SAY (Sayısal):</span>
                            <div className="text-right">
                                <span className="font-bold text-green-700 block">{results.points.say.toFixed(2)}</span>
                                {results.estimatedRanks?.say && (
                                    <span className="text-xs text-green-700/80 font-medium block">~{results.estimatedRanks.say.toLocaleString('tr-TR')}. sıra</span>
                                )}
                            </div>
                        </div>
                        {/* EA */}
                        <div className="flex justify-between items-center border-b border-gray-200/60 pb-1.5">
                            <span className="font-semibold text-gray-800">EA (Eşit Ağırlık):</span>
                            <div className="text-right">
                                <span className="font-bold text-blue-700 block">{results.points.ea.toFixed(2)}</span>
                                {results.estimatedRanks?.ea && (
                                    <span className="text-xs text-blue-700/80 font-medium block">~{results.estimatedRanks.ea.toLocaleString('tr-TR')}. sıra</span>
                                )}
                            </div>
                        </div>
                        {/* SÖZ */}
                        <div className="flex justify-between items-center border-b border-gray-200/60 pb-1.5">
                            <span className="font-semibold text-gray-800">SÖZ (Sözel):</span>
                            <div className="text-right">
                                <span className="font-bold text-purple-700 block">{results.points.soz.toFixed(2)}</span>
                                {results.estimatedRanks?.soz && (
                                    <span className="text-xs text-purple-700/80 font-medium block">~{results.estimatedRanks.soz.toLocaleString('tr-TR')}. sıra</span>
                                )}
                            </div>
                        </div>
                        {/* DİL */}
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-800">DİL (Yabancı Dil):</span>
                            <div className="text-right">
                                <span className="font-bold text-orange-700 block">{results.ydtHesaplandi ? results.points.dil.toFixed(2) : 'Hesaplanmadı'}</span>
                                {results.ydtHesaplandi && results.estimatedRanks?.dil && (
                                    <span className="text-xs text-orange-700/80 font-medium block">~{results.estimatedRanks.dil.toLocaleString('tr-TR')}. sıra</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* HAM PUANLAR VE HAM SIRALAMALAR (OBP'SİZ) */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-600">📝 Ham Sınav Başarısı</span>
                        <span className="text-[11px] bg-gray-200 text-gray-700 font-medium px-2 py-0.5 rounded-full">OBP Katkısız</span>
                    </div>
                    <div className="space-y-1.5 text-xs bg-gray-50/50 p-2.5 rounded-xl border border-gray-200/60 text-gray-600">
                        <div className="flex justify-between">
                            <span>TYT Ham:</span>
                            <span><strong>{results.points.tytHam?.toFixed(2) ?? '-'}</strong> {results.estimatedHamRanks?.tyt ? `(~${results.estimatedHamRanks.tyt.toLocaleString('tr-TR')}. sıra)` : ''}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>SAY Ham:</span>
                            <span><strong>{results.points.sayHam?.toFixed(2) ?? '-'}</strong> {results.estimatedHamRanks?.say ? `(~${results.estimatedHamRanks.say.toLocaleString('tr-TR')}. sıra)` : ''}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>EA Ham:</span>
                            <span><strong>{results.points.eaHam?.toFixed(2) ?? '-'}</strong> {results.estimatedHamRanks?.ea ? `(~${results.estimatedHamRanks.ea.toLocaleString('tr-TR')}. sıra)` : ''}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>SÖZ Ham:</span>
                            <span><strong>{results.points.sozHam?.toFixed(2) ?? '-'}</strong> {results.estimatedHamRanks?.soz ? `(~${results.estimatedHamRanks.soz.toLocaleString('tr-TR')}. sıra)` : ''}</span>
                        </div>
                        {results.ydtHesaplandi && (
                            <div className="flex justify-between">
                                <span>DİL Ham:</span>
                                <span><strong>{results.points.dilHam?.toFixed(2) ?? '-'}</strong> {results.estimatedHamRanks?.dil ? `(~${results.estimatedHamRanks.dil.toLocaleString('tr-TR')}. sıra)` : ''}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

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

    // Debounced persist — her tuş vuruşunda değil, 500ms sonra kaydeder
    useEffect(() => {
        const id = setTimeout(() => {
            persist({ tyt: tytScores, ayt: aytScores, ydt: ydtScores, obp, obpHalved, obpMesleki })
        }, 500)
        return () => clearTimeout(id)
    }, [tytScores, aytScores, ydtScores, obp, obpHalved, obpMesleki])

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
        try { localStorage.removeItem(STORAGE_KEY) } catch { }
    }

    const hasInput = Object.values(tytScores).some(s => s.dogru > 0 || s.yanlis > 0)
        || Object.values(aytScores).some(s => s.dogru > 0 || s.yanlis > 0)
        || ydtScores.ydt.dogru > 0 || ydtScores.ydt.yanlis > 0 || obp > 0

    const results = hasInput ? calculateYKSScores(tytScores, aytScores, ydtScores, obp, obpHalved, obpMesleki) : null

    const applyPreset = (preset: typeof PRESETS[0]) => {
        setTytScores(preset.tyt)
        setAytScores(preset.ayt)
        setYdtScores({ ydt: { dogru: 0, yanlis: 0 } })
        setObp(preset.obp)
        setObpHalved(false)
        setObpMesleki(false)
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8" id="hesaplama">
                {/* Hızlı Hedef Senaryoları */}
                <div className="card bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-200/70 p-5">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🎯</span>
                            <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                                Örnek Hedef Senaryoları
                            </h3>
                        </div>
                        <span className="text-xs text-blue-700 bg-blue-100 font-semibold px-2 py-0.5 rounded-full">
                            Tek Tıkla Doldur
                        </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">
                        Hangi bölüm için kaç net gerektiğini merak ediyor musun? Aşağıdaki hazır hedeflerden birini seçerek simülasyonu anında başlat:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {PRESETS.map((p) => (
                            <button
                                key={p.id}
                                onClick={() => applyPreset(p)}
                                className="flex flex-col items-center justify-center p-2.5 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-400 rounded-xl transition-all text-center shadow-xs hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] group"
                            >
                                <span className="text-xs font-bold text-gray-800 group-hover:text-blue-700 leading-tight">
                                    {p.title}
                                </span>
                                <span className="text-[10px] text-gray-500 mt-1 font-medium bg-gray-100 px-2 py-0.5 rounded-md">
                                    {p.badge}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <TYTSection scores={tytScores} onScoreChange={handleTYT} onReset={resetTYT} />
                <AYTSection scores={aytScores} onScoreChange={handleAYT} onReset={resetAYT} />
                <YDTSection scores={ydtScores} onScoreChange={handleYDT} onReset={resetYDT} />
                <OBPInput
                    obp={obp} onObpChange={setObp}
                    obpHalved={obpHalved} onObpHalvedChange={setObpHalved}
                    obpMesleki={obpMesleki} onObpMeslekiChange={setObpMesleki}
                />
                <div className="flex justify-end">
                    <button
                        onClick={resetAll}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 hover:border-red-300 rounded-lg transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Tümünü Sıfırla
                    </button>
                </div>
            </div>
            <div id="sonuclar">
                {results ? (
                    <ResultsPanel results={results} obpHalved={obpHalved} />
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
