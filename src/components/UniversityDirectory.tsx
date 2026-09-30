'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import { universityPrograms } from '@/data/universities'
import { UniversityProgram, FieldType } from '@/types/yks'

const CITIES = [
    'Tümü', 'İstanbul', 'Ankara', 'İzmir', 'Antalya', 'Bursa', 'Eskişehir', 
    'Adana', 'Konya', 'Trabzon', 'Kocaeli', 'Gaziantep', 'Samsun', 'Kayseri', 'Denizli'
]

const FIELDS: { label: string; value: 'ALL' | FieldType }[] = [
    { label: 'Tüm Alanlar', value: 'ALL' },
    { label: 'Sayısal (SAY)', value: 'SAY' },
    { label: 'Eşit Ağırlık (EA)', value: 'EA' },
    { label: 'Sözel (SÖZ)', value: 'SOZ' },
    { label: 'Yabancı Dil (DİL)', value: 'DIL' },
]

const POPULAR_PROGRAMS = [
    'Tıp', 'Bilgisayar Mühendisliği', 'Hukuk', 'Diş Hekimliği', 
    'Yazılım Mühendisliği', 'Psikoloji', 'Hemşirelik', 'Mimarlık', 'Elektrik-Elektronik'
]

export default function UniversityDirectory() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedField, setSelectedField] = useState<'ALL' | FieldType>('ALL')
    const [selectedCity, setSelectedCity] = useState('Tümü')
    const [maxRank, setMaxRank] = useState<number | ''>('')
    const [page, setPage] = useState(1)
    const itemsPerPage = 25

    // Arama ve filtreleme mantığı
    const filtered = useMemo(() => {
        const query = searchQuery.trim().toLowerCase()
        return universityPrograms.filter(prog => {
            if (selectedField !== 'ALL' && prog.field !== selectedField) return false
            if (selectedCity !== 'Tümü' && prog.city !== selectedCity) return false
            if (maxRank !== '' && prog.minRank > maxRank) return false
            if (query) {
                const matchUni = prog.university.toLowerCase().includes(query)
                const matchProg = prog.program.toLowerCase().includes(query)
                const matchCity = prog.city.toLowerCase().includes(query)
                if (!matchUni && !matchProg && !matchCity) return false
            }
            return true
        })
    }, [searchQuery, selectedField, selectedCity, maxRank])

    // Filtre değiştiğinde 1. sayfaya dön
    useEffect(() => {
        setPage(1)
    }, [searchQuery, selectedField, selectedCity, maxRank])

    const totalPages = Math.ceil(filtered.length / itemsPerPage)
    const paginated = useMemo(() => {
        const start = (page - 1) * itemsPerPage
        return filtered.slice(start, start + itemsPerPage)
    }, [filtered, page, itemsPerPage])

    const fieldBadgeColor = (field: FieldType) => {
        switch (field) {
            case 'SAY': return 'bg-blue-100 text-blue-800 border-blue-200'
            case 'EA': return 'bg-amber-100 text-amber-800 border-amber-200'
            case 'SOZ': return 'bg-purple-100 text-purple-800 border-purple-200'
            case 'DIL': return 'bg-emerald-100 text-emerald-800 border-emerald-200'
        }
    }

    return (
        <div className="space-y-8">
            {/* Hızlı İstatistik Kartları */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm text-center">
                    <span className="text-2xl md:text-3xl font-extrabold text-blue-600 block mb-1">
                        {universityPrograms.length}+
                    </span>
                    <span className="text-xs md:text-sm text-gray-600 font-medium">Bölüm & Program</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm text-center">
                    <span className="text-2xl md:text-3xl font-extrabold text-emerald-600 block mb-1">
                        2025/2026
                    </span>
                    <span className="text-xs md:text-sm text-gray-600 font-medium">YÖK Atlas Güncel</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm text-center">
                    <span className="text-2xl md:text-3xl font-extrabold text-purple-600 block mb-1">
                        4 Alan
                    </span>
                    <span className="text-xs md:text-sm text-gray-600 font-medium">SAY • EA • SÖZ • DİL</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm text-center">
                    <span className="text-2xl md:text-3xl font-extrabold text-amber-600 block mb-1">
                        Ücretsiz
                    </span>
                    <span className="text-xs md:text-sm text-gray-600 font-medium">Tercih Sıralama Atlası</span>
                </div>
            </div>

            {/* Arama & Filtreleme Paneli */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div>
                    <label htmlFor="uni-search" className="block text-sm font-bold text-gray-900 mb-2">
                        🔍 Üniversite, Bölüm veya Şehir Ara
                    </label>
                    <div className="relative">
                        <input
                            id="uni-search"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Örn: Boğaziçi Üniversitesi, Tıp Fakültesi, Bilgisayar, Ankara..."
                            className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base text-gray-900 shadow-inner"
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3.5 top-3 text-xs text-gray-400 hover:text-gray-600 px-2 py-1 bg-gray-100 rounded-md"
                            >
                                Temizle
                            </button>
                        )}
                    </div>
                </div>

                {/* Hızlı Arama Butonları */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-gray-500 font-medium mr-1">Popüler Bölümler:</span>
                    {POPULAR_PROGRAMS.map(prog => (
                        <button
                            key={prog}
                            onClick={() => setSearchQuery(prog)}
                            className="px-2.5 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
                        >
                            {prog}
                        </button>
                    ))}
                </div>

                {/* Filtreleme Satırı */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Puan Türü / Alan</label>
                        <select
                            value={selectedField}
                            onChange={(e) => setSelectedField(e.target.value as any)}
                            className="w-full px-3 py-2 rounded-xl border border-gray-300 text-sm font-medium focus:ring-2 focus:ring-blue-500 text-gray-800"
                        >
                            {FIELDS.map(f => (
                                <option key={f.value} value={f.value}>{f.label}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Şehir</label>
                        <select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl border border-gray-300 text-sm font-medium focus:ring-2 focus:ring-blue-500 text-gray-800"
                        >
                            {CITIES.map(c => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Maksimum Başarı Sırası (TBS)</label>
                        <input
                            type="number"
                            value={maxRank}
                            onChange={(e) => setMaxRank(e.target.value ? parseInt(e.target.value) : '')}
                            placeholder="Örn: 50000"
                            className="w-full px-3 py-2 rounded-xl border border-gray-300 text-sm font-medium focus:ring-2 focus:ring-blue-500 text-gray-800"
                        />
                    </div>
                </div>

                {/* Sonuç Sayısı ve Sıfırla */}
                <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600 pt-2 border-t border-gray-100">
                    <span>
                        Bulunan Program: <strong className="text-gray-900">{filtered.length}</strong>
                    </span>
                    {(searchQuery || selectedField !== 'ALL' || selectedCity !== 'Tümü' || maxRank !== '') && (
                        <button
                            onClick={() => {
                                setSearchQuery('')
                                setSelectedField('ALL')
                                setSelectedCity('Tümü')
                                setMaxRank('')
                            }}
                            className="text-blue-600 hover:text-blue-800 font-semibold"
                        >
                            Filtreleri Sıfırla
                        </button>
                    )}
                </div>
            </div>

            {/* Program Tablosu */}
            {filtered.length === 0 ? (
                <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-sm">
                    <p className="text-lg font-bold text-gray-800 mb-2">Kriterlere uygun program bulunamadı.</p>
                    <p className="text-sm text-gray-500 mb-4">Arama kelimesini değiştirmeyi veya filtreleri temizlemeyi deneyin.</p>
                    <button
                        onClick={() => {
                            setSearchQuery('')
                            setSelectedField('ALL')
                            setSelectedCity('Tümü')
                            setMaxRank('')
                        }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700"
                    >
                        Tüm Programları Göster
                    </button>
                </div>
            ) : (
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50/80 border-b border-gray-200 text-xs font-bold text-gray-700 uppercase tracking-wider">
                                    <th className="py-4 px-4 sm:px-6">Üniversite</th>
                                    <th className="py-4 px-4">Program / Bölüm</th>
                                    <th className="py-4 px-3 text-center">Alan</th>
                                    <th className="py-4 px-3 text-center">Şehir</th>
                                    <th className="py-4 px-3 text-right">Kontenjan</th>
                                    <th className="py-4 px-4 text-right">Taban Puan</th>
                                    <th className="py-4 px-4 sm:px-6 text-right">Başarı Sırası (TBS)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-sm">
                                {paginated.map((prog, idx) => (
                                    <tr key={`${prog.university}-${prog.program}-${idx}`} className="hover:bg-blue-50/40 transition-colors">
                                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-gray-900">
                                            {prog.university}
                                        </td>
                                        <td className="py-3.5 px-4 text-gray-800 font-medium">
                                            {prog.program}
                                        </td>
                                        <td className="py-3.5 px-3 text-center">
                                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${fieldBadgeColor(prog.field)}`}>
                                                {prog.field}
                                            </span>
                                        </td>
                                        <td className="py-3.5 px-3 text-center text-gray-600">
                                            {prog.city}
                                        </td>
                                        <td className="py-3.5 px-3 text-right text-gray-600 font-mono">
                                            {prog.quota}
                                        </td>
                                        <td className="py-3.5 px-4 text-right font-bold text-gray-900 font-mono">
                                            {prog.minScore ? prog.minScore.toFixed(2) : '-'}
                                        </td>
                                        <td className="py-3.5 px-4 sm:px-6 text-right font-extrabold text-blue-700 font-mono">
                                            {prog.minRank ? prog.minRank.toLocaleString('tr-TR') : 'Dolmadı'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Sayfalama */}
                    {totalPages > 1 && (
                        <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-3">
                            <span className="text-xs text-gray-600">
                                Sayfa <strong>{page}</strong> / <strong>{totalPages}</strong> (Toplam {filtered.length} sonuç)
                            </span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setPage(p => Math.max(1, p - 1))}
                                    disabled={page === 1}
                                    className="px-3 py-1.5 rounded-lg border border-gray-300 text-xs font-semibold bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    ← Önceki
                                </button>
                                <button
                                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                    disabled={page === totalPages}
                                    className="px-3 py-1.5 rounded-lg border border-gray-300 text-xs font-semibold bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    Sonraki →
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Net Hesaplama CTA Banner */}
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-2xl font-bold">Kendi Netlerinle Bu Bölümlere Yerleşebilir misin?</h3>
                    <p className="text-blue-100 text-sm max-w-xl">
                        TYT ve AYT deneme netlerini girerek 2027 tahmini YKS puanını ve başarı sıranı anında hesapla, hedeflediğin üniversitelerle karşılaştır.
                    </p>
                </div>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-md text-sm whitespace-nowrap"
                >
                    🧮 Netlerimi Hesapla →
                </Link>
            </div>
        </div>
    )
}
