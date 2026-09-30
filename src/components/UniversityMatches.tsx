'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { universityPrograms } from '@/data/universities'
import { UniversityProgram, FieldType, ScoreCalculationResult } from '@/types/yks'

interface UniversityMatchesProps {
    results: ScoreCalculationResult
}

// YÖK Resmi Baraj Kontrolleri
function checkYOKBaraj(programName: string, field: FieldType, userRank: number): boolean {
    const prog = programName.toLowerCase()
    if (prog.includes('tıp') && !prog.includes('tıbbi') && userRank > 50000) return false
    if (prog.includes('diş hekimliği') && userRank > 80000) return false
    if (prog.includes('eczacılık') && userRank > 100000) return false
    if (prog.includes('hukuk') && userRank > 125000) return false
    if (prog.includes('mimarlık') && !prog.includes('iç') && userRank > 250000) return false
    if (prog.includes('mühendisliği') && !prog.includes('ziraat') && !prog.includes('su ürünleri') && userRank > 300000) return false
    return true
}

export default function UniversityMatches({ results }: UniversityMatchesProps) {
    const ranks = results.estimatedRanks

    // Kullanıcının en iyi olduğu veya hesaplanan ilk alanını belirle
    const availableFields = useMemo(() => {
        const list: { key: FieldType; label: string; rank: number | undefined; score: number }[] = []
        if (ranks?.say && ranks.say > 0) list.push({ key: 'SAY', label: 'Sayısal (SAY)', rank: ranks.say, score: results.points.say })
        if (ranks?.ea && ranks.ea > 0) list.push({ key: 'EA', label: 'Eşit Ağırlık (EA)', rank: ranks.ea, score: results.points.ea })
        if (ranks?.soz && ranks.soz > 0) list.push({ key: 'SOZ', label: 'Sözel (SÖZ)', rank: ranks.soz, score: results.points.soz })
        if (results.ydtHesaplandi && ranks?.dil && ranks.dil > 0) list.push({ key: 'DIL', label: 'Yabancı Dil (DİL)', rank: ranks.dil, score: results.points.dil })
        return list
    }, [ranks, results])

    const [activeField, setActiveField] = useState<FieldType>(() => {
        if (availableFields.length === 0) return 'SAY'
        // En düşük sıralama sayısı = En başarılı alan
        const sorted = [...availableFields].sort((a, b) => (a.rank || 9999999) - (b.rank || 9999999))
        return sorted[0].key
    })

    const [selectedCity, setSelectedCity] = useState<string>('Tümü')
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [rangeType, setRangeType] = useState<'all' | 'ideal' | 'target' | 'safe'>('all')

    const currentRank = ranks ? (
        activeField === 'SAY' ? ranks.say :
        activeField === 'EA' ? ranks.ea :
        activeField === 'SOZ' ? ranks.soz : ranks.dil
    ) : undefined

    // Şehir listesi
    const cities = useMemo(() => {
        const set = new Set<string>()
        universityPrograms.forEach(p => {
            if (p.field === activeField) set.add(p.city)
        })
        return ['Tümü', ...Array.from(set).sort((a, b) => a.localeCompare(b, 'tr'))]
    }, [activeField])

    // Eşleşen programlar
    const matches = useMemo(() => {
        if (!currentRank || currentRank <= 0) return []

        // Tercih bandı: Sıralamanın %70'inden (yüksek hedef) %160'ına kadar (güvenli liman)
        const minTargetRank = currentRank * 0.70
        const maxSafeRank = currentRank * 1.60

        return universityPrograms.filter(prog => {
            if (prog.field !== activeField) return false
            if (typeof prog.minRank !== 'number') return false

            // YÖK Başarı Sırası Barajı Kontrolü
            if (!checkYOKBaraj(prog.program, activeField, currentRank)) return false

            // Sıralama aralığı kontrolü
            if (prog.minRank < minTargetRank || prog.minRank > maxSafeRank) return false

            // Şehir filtresi
            if (selectedCity !== 'Tümü' && prog.city !== selectedCity) return false

            // Arama filtresi
            if (searchQuery.trim()) {
                const q = searchQuery.toLowerCase()
                const matchUni = prog.university.toLowerCase().includes(q)
                const matchProg = prog.program.toLowerCase().includes(q)
                if (!matchUni && !matchProg) return false
            }

            // Kategori filtresi
            if (rangeType === 'target' && prog.minRank >= currentRank * 0.95) return false
            if (rangeType === 'ideal' && (prog.minRank < currentRank * 0.95 || prog.minRank > currentRank * 1.20)) return false
            if (rangeType === 'safe' && prog.minRank <= currentRank * 1.20) return false

            return true
        }).sort((a, b) => a.minRank - b.minRank)
    }, [currentRank, activeField, selectedCity, searchQuery, rangeType])

    if (!currentRank || currentRank <= 0) {
        return null
    }

    const getChanceBadge = (minRank: number) => {
        if (minRank < currentRank * 0.95) {
            return {
                label: '🌟 Yüksek Hedef',
                desc: 'Riskli / Yükseliş Gerektirebilir',
                color: 'bg-amber-100 text-amber-900 border-amber-300'
            }
        }
        if (minRank <= currentRank * 1.20) {
            return {
                label: '🎯 Tam Sıralamana Uygun',
                desc: 'Yerleşme İhtimali Çok Yüksek',
                color: 'bg-emerald-100 text-emerald-900 border-emerald-300'
            }
        }
        return {
            label: '🛡️ Güvenli Liman',
            desc: 'Garanti / Kesin Tercih',
            color: 'bg-blue-100 text-blue-900 border-blue-300'
        }
    }

    return (
        <div id="kazanabilecegin-universiteler" className="card border-2 border-blue-200 bg-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl scroll-mt-20">
            {/* Başlık ve Özet */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
                <div>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-extrabold rounded-full mb-2">
                        🎯 AKILLI TERCİH ROBOTU
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                        Sıralamana Göre Kazanabileceğin Üniversiteler
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Tahmini <strong className="text-blue-700">~{currentRank.toLocaleString('tr-TR')}.</strong> başarı sıranla YÖK Atlas taban puanlarına göre tercih edebileceğin bölümler.
                    </p>
                </div>
                <Link
                    href="/universiteler"
                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl border border-blue-200 transition-colors whitespace-nowrap self-start md:self-auto shadow-sm"
                >
                    Tüm Üniversiteler Atlası (400+) →
                </Link>
            </div>

            {/* Alan Seçim Sekmeleri (SAY / EA / SÖZ / DİL) */}
            {availableFields.length > 1 && (
                <div className="flex flex-wrap gap-2">
                    {availableFields.map(f => (
                        <button
                            key={f.key}
                            onClick={() => {
                                setActiveField(f.key)
                                setSelectedCity('Tümü')
                                setSearchQuery('')
                            }}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center gap-2 ${
                                activeField === f.key
                                    ? 'bg-blue-600 text-white shadow-blue-200'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            <span>{f.label}</span>
                            {f.rank && (
                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                    activeField === f.key ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-800'
                                }`}>
                                    ~{f.rank.toLocaleString('tr-TR')}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            )}

            {/* Hızlı Filtreleme ve Arama Çubuğu */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-gray-50/80 p-4 rounded-2xl border border-gray-200 text-xs sm:text-sm">
                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Bölüm veya Üniversite Ara</label>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Örn: Hacettepe, Bilgisayar, Hukuk..."
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-gray-800"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Şehir Filtresi</label>
                    <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-gray-800 font-medium"
                    >
                        {cities.map(c => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Kazanma İhtimali</label>
                    <select
                        value={rangeType}
                        onChange={(e) => setRangeType(e.target.value as any)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-gray-800 font-medium"
                    >
                        <option value="all">Tüm Uygun Bölümler</option>
                        <option value="ideal">🎯 Tam Sıralamana Uygunlar</option>
                        <option value="target">🌟 Yüksek Hedefler (Riskli)</option>
                        <option value="safe">🛡️ Güvenli Limanlar (Garanti)</option>
                    </select>
                </div>
            </div>

            {/* Eşleşen Sonuçlar Listesi */}
            {matches.length === 0 ? (
                <div className="p-8 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                    <p className="text-base font-bold text-gray-800 mb-1">Bu filtrelere uygun bölüm bulunamadı.</p>
                    <p className="text-xs text-gray-500 mb-4">Arama terimini temizlemeyi veya &quot;Tüm Uygun Bölümler&quot; seçeneğini deneyebilirsin.</p>
                    <button
                        onClick={() => {
                            setSelectedCity('Tümü')
                            setSearchQuery('')
                            setRangeType('all')
                        }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700"
                    >
                        Filtreleri Temizle
                    </button>
                </div>
            ) : (
                <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs text-gray-500 px-1">
                        <span>Bulunan Bölüm Sayısı: <strong>{matches.length}</strong></span>
                        <span>YÖK Atlas 2025/2026 Sıralamalarına Göre</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {matches.slice(0, 16).map((prog, idx) => {
                            const badge = getChanceBadge(prog.minRank)
                            return (
                                <div
                                    key={`${prog.university}-${prog.program}-${idx}`}
                                    className="p-4 bg-white border border-gray-200 hover:border-blue-400 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                                >
                                    <div>
                                        <div className="flex items-start justify-between gap-2 mb-1.5">
                                            <h3 className="font-extrabold text-gray-900 text-sm leading-tight">
                                                {prog.university}
                                            </h3>
                                            <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border whitespace-nowrap ${badge.color}`}>
                                                {badge.label}
                                            </span>
                                        </div>
                                        <p className="text-xs font-semibold text-blue-700">
                                            {prog.program}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs text-gray-600">
                                        <span>📍 {prog.city}</span>
                                        <span>👥 Kont: <strong>{prog.quota}</strong></span>
                                        <div className="text-right">
                                            <span className="block font-mono font-bold text-gray-900">
                                                TBS: {prog.minRank.toLocaleString('tr-TR')}
                                            </span>
                                            {prog.minScore > 0 && (
                                                <span className="text-[10px] text-gray-500 font-mono">
                                                    Puan: {prog.minScore.toFixed(1)}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {matches.length > 16 && (
                        <div className="text-center pt-3">
                            <Link
                                href="/universiteler"
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-bold transition-colors"
                            >
                                Geri Kalan {matches.length - 16} Bölümü Üniversite Atlasında Gör →
                            </Link>
                        </div>
                    )}
                </div>
            )}

            {/* Bilgilendirme Kutusu */}
            <div className="p-4 bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl text-xs text-blue-950 space-y-1">
                <p>
                    📌 <strong>Tercih Mantığı:</strong> Sıralamanızın %20 üstündeki yerleri &quot;Yüksek Hedef&quot;, %20 altındaki yerleri &quot;Güvenli Liman&quot; olarak yazmanız önerilir.
                </p>
                <p className="text-[11px] text-blue-800">
                    * YÖK tarafından belirlenen Tıp (ilk 50 bin), Diş (ilk 80 bin), Hukuk (ilk 125 bin) ve Mühendislik (ilk 300 bin) barajları sisteme otomatik olarak dahil edilmiştir.
                </p>
            </div>
        </div>
    )
}
