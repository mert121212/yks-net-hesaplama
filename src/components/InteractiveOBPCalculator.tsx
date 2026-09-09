'use client'

import { useState } from 'react'

export default function InteractiveOBPCalculator() {
    const [diplomaGrade, setDiplomaGrade] = useState<number>(82.5)
    const [isBroken, setIsBroken] = useState<boolean>(false)
    const [isMesleki, setIsMesleki] = useState<boolean>(false)

    // Matematiksel hesaplamalar (Resmi ÖSYM YKS Kılavuzu)
    const clampedGrade = Math.min(100, Math.max(50, Number(diplomaGrade) || 50))
    const obp = clampedGrade * 5 // 250 - 500 arası
    const standardContribution = obp * 0.12 // 30 - 60 puan arası
    const brokenContribution = obp * 0.06 // 15 - 30 puan arası
    const meslekiContribution = isMesleki ? obp * 0.06 : 0

    const currentContribution = (isBroken ? brokenContribution : standardContribution) + meslekiContribution
    const loss = isBroken ? (standardContribution - brokenContribution) : 0

    // YKS Yığılma simülasyonu (Tahmini sıra kaybı)
    // 350-450 puan bandında 1 puan ortalama 2.500 - 4.500 adaya tekabül eder
    const estimatedRankLossMin = Math.round(loss * 2400)
    const estimatedRankLossMax = Math.round(loss * 4200)

    return (
        <div className="my-10 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-blue-700/40 relative overflow-hidden">
            {/* Arka plan dekoratif desen */}
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Başlık */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-blue-800/60 pb-5">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold tracking-wide uppercase mb-2 border border-blue-400/30">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Canlı Simülatör
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        İnteraktif OBP & Sıralama Simülatörü
                    </h3>
                    <p className="text-blue-200 text-sm mt-1">
                        Diploma notunuzu girin, yerleştirme puanınıza ve sıralamanıza etkisini anında görün.
                    </p>
                </div>
                <div className="bg-blue-800/40 border border-blue-700/50 rounded-2xl px-4 py-2 text-right self-start sm:self-auto">
                    <span className="text-xs text-blue-300 block">ÖSYM Katsayısı</span>
                    <span className="text-sm font-bold text-emerald-400">0,12 / 0,06 Kuralı</span>
                </div>
            </div>

            {/* Girdi Alanı */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-center">
                {/* Diploma Notu Girişi */}
                <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-3">
                        <label htmlFor="diploma-input" className="text-sm font-semibold text-gray-200">
                            100&apos;lük Sistemde Diploma Notunuz:
                        </label>
                        <div className="flex items-center gap-1">
                            <input
                                id="diploma-input"
                                type="number"
                                min={50}
                                max={100}
                                step="0.1"
                                value={diplomaGrade}
                                onChange={(e) => setDiplomaGrade(parseFloat(e.target.value) || 50)}
                                className="w-20 bg-blue-950/80 border border-blue-500/50 text-white font-bold text-center rounded-xl py-1.5 px-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <span className="text-sm text-gray-400 font-bold">/ 100</span>
                        </div>
                    </div>

                    {/* Kaydırma Çubuğu (Slider) */}
                    <input
                        type="range"
                        min={50}
                        max={100}
                        step={0.5}
                        value={clampedGrade}
                        onChange={(e) => setDiplomaGrade(parseFloat(e.target.value))}
                        className="w-full h-2 bg-blue-950 rounded-lg appearance-none cursor-pointer accent-blue-400"
                    />

                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>Min: 50.0 (Taban)</span>
                        <span>Ort: 75.0</span>
                        <span>Maks: 100.0</span>
                    </div>

                    {/* Checkbox Seçenekleri */}
                    <div className="mt-5 space-y-3 pt-4 border-t border-white/10">
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={isBroken}
                                onChange={(e) => setIsBroken(e.target.checked)}
                                className="mt-1 h-4 w-4 text-amber-500 rounded border-gray-600 bg-gray-900 focus:ring-amber-400"
                            />
                            <div>
                                <span className="text-sm font-medium text-amber-300 group-hover:text-amber-200">
                                    Geçen sene üniversiteye yerleştim (Kırık OBP)
                                </span>
                                <p className="text-xs text-gray-400">
                                    Katsayınız 0,12 yerine 0,06 olarak yarı yarıya düşer.
                                </p>
                            </div>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={isMesleki}
                                onChange={(e) => setIsMesleki(e.target.checked)}
                                className="mt-1 h-4 w-4 text-emerald-400 rounded border-gray-600 bg-gray-900 focus:ring-emerald-400"
                            />
                            <div>
                                <span className="text-sm font-medium text-emerald-300 group-hover:text-emerald-200">
                                    Meslek Lisesi mezunuyum (+0,06 Ek Puan)
                                </span>
                                <p className="text-xs text-gray-400">
                                    Kendi alanınızdaki ön lisans programlarına ek puan sağlar.
                                </p>
                            </div>
                        </label>
                    </div>
                </div>

                {/* Sonuç Kartları */}
                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                    {/* OBP Puanı */}
                    <div className="bg-gradient-to-br from-blue-800/40 to-indigo-900/60 border border-blue-500/30 rounded-2xl p-4 text-center">
                        <span className="text-xs text-blue-300 font-medium uppercase tracking-wider block mb-1">
                            Ham OBP (×5)
                        </span>
                        <div className="text-3xl sm:text-4xl font-black text-white">
                            {obp.toFixed(1)}
                        </div>
                        <span className="text-[11px] text-gray-400 mt-1 block">
                            250 - 500 Puan Skalası
                        </span>
                    </div>

                    {/* Sınav Puanına Katkı */}
                    <div className={`border rounded-2xl p-4 text-center transition-colors ${isBroken ? 'bg-amber-950/40 border-amber-500/40' : 'bg-emerald-950/40 border-emerald-500/40'}`}>
                        <span className="text-xs font-medium uppercase tracking-wider block mb-1 text-gray-300">
                            Puana Eklenecek Katkı
                        </span>
                        <div className={`text-3xl sm:text-4xl font-black ${isBroken ? 'text-amber-400' : 'text-emerald-400'}`}>
                            +{currentContribution.toFixed(2)}
                        </div>
                        <span className="text-[11px] text-gray-300 mt-1 block">
                            {isBroken ? 'Kırık Katsayı (0,06)' : 'Normal Katsayı (0,12)'}
                        </span>
                    </div>

                    {/* Kırık OBP Kaybı Uyarısı */}
                    {isBroken ? (
                        <div className="col-span-2 bg-red-950/50 border border-red-500/50 rounded-2xl p-4 text-red-200">
                            <div className="flex items-center gap-2 mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <span className="font-bold text-sm text-red-300">Kırık OBP Ceza Faturası:</span>
                            </div>
                            <p className="text-xs leading-relaxed">
                                Bu yıl yerleştirme puanınızdan tam <strong>{loss.toFixed(2)} puan</strong> silinecek. Bu kayıp, sınavın yığılma bölgelerinde sizi yaklaşık <strong>{estimatedRankLossMin.toLocaleString('tr-TR')} ile {estimatedRankLossMax.toLocaleString('tr-TR')} aday geriye</strong> düşürür.
                            </p>
                        </div>
                    ) : (
                        <div className="col-span-2 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl p-4 text-emerald-200">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-emerald-400 font-bold text-sm">🛡️ Tam Koruma:</span>
                            </div>
                            <p className="text-xs leading-relaxed text-gray-300">
                                OBP&apos;niz tam katsayıyla (0,12) hesaplanıyor. Sınavdan alacağınız ham puana net <strong>{standardContribution.toFixed(2)} puan</strong> ilave edilecek.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Karşılaştırmalı İlerleme Çubuğu */}
            <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
                <div className="flex justify-between text-xs text-gray-300 font-medium mb-2">
                    <span>Katkı Seviyesi (Maksimum 60.0 Puan Üzerinden)</span>
                    <span className="font-bold text-white">%{((currentContribution / 60) * 100).toFixed(0)} Verim</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden flex">
                    <div
                        className={`h-full transition-all duration-300 ${isBroken ? 'bg-amber-500' : 'bg-gradient-to-r from-blue-500 to-emerald-400'}`}
                        style={{ width: `${Math.min(100, (currentContribution / 60) * 100)}%` }}
                    />
                </div>
            </div>
        </div>
    )
}
