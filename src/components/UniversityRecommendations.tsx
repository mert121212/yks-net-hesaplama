'use client'

import { useState, useMemo } from 'react'
import { GraduationCap, MapPin, Users, TrendingUp, Search, Filter } from 'lucide-react'
import { getMatchingPrograms } from '@/data/universities'

interface UniversityRecommendationsProps {
    estimatedRanks?: {
        say?: number
        ea?: number
        soz?: number
        dil?: number
    }
    points: {
        say: number
        ea: number
        soz: number
        dil: number
    }
}

export default function UniversityRecommendations({ estimatedRanks, points }: UniversityRecommendationsProps) {
    const [selectedField, setSelectedField] = useState<'say' | 'ea' | 'soz' | 'dil'>('say')
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCity, setSelectedCity] = useState<string>('all')
    const [universityType, setUniversityType] = useState<'all' | 'devlet' | 'vakif'>('all')

    if (!estimatedRanks) {
        return null
    }

    const currentRank = estimatedRanks[selectedField]
    const currentScore = points[selectedField]
    const allPrograms = currentRank ? getMatchingPrograms(currentRank, selectedField, 500) : []

    // Filtreleme
    const filteredPrograms = useMemo(() => {
        return allPrograms.filter(program => {
            // Arama filtresi
            if (searchQuery) {
                const query = searchQuery.toLowerCase()
                const matchesSearch =
                    program.program.toLowerCase().includes(query) ||
                    program.university.toLowerCase().includes(query) ||
                    program.city.toLowerCase().includes(query)
                if (!matchesSearch) return false
            }

            // Şehir filtresi
            if (selectedCity !== 'all' && program.city !== selectedCity) {
                return false
            }

            // Üniversite tipi filtresi
            if (universityType !== 'all') {
                const isVakif = program.university.includes('(Vakıf)') ||
                    program.university.includes('(Özel)') ||
                    program.university.includes('Vakıf')
                if (universityType === 'vakif' && !isVakif) return false
                if (universityType === 'devlet' && isVakif) return false
            }

            return true
        })
    }, [allPrograms, searchQuery, selectedCity, universityType])

    // Benzersiz şehirler
    const cities = useMemo(() => {
        const citySet = new Set(allPrograms.map(p => p.city))
        return Array.from(citySet).sort()
    }, [allPrograms])

    const fieldNames = {
        say: 'SAY (Sayısal)',
        ea: 'EA (Eşit Ağırlık)',
        soz: 'SÖZ (Sözel)',
        dil: 'DİL (Dil)'
    }

    return (
        <div className="card">
            <div className="flex items-center justify-between mb-6">
                <h2 className="section-title mb-0">Kazanabileceğiniz Bölümler</h2>
                <TrendingUp className="h-6 w-6 text-green-600" />
            </div>

            {/* Alan Seçimi */}
            <div className="flex flex-wrap gap-2 mb-6">
                {(Object.keys(fieldNames) as Array<keyof typeof fieldNames>).map((field) => (
                    <button
                        key={field}
                        onClick={() => setSelectedField(field)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedField === field
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {fieldNames[field]}
                    </button>
                ))}
            </div>

            {/* Sıralama ve Puan Bilgisi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
                    <p className="text-sm text-blue-700 mb-1">Tahmini Sıralamanız</p>
                    <p className="text-2xl font-bold text-blue-900">
                        {currentRank?.toLocaleString('tr-TR')}
                    </p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
                    <p className="text-sm text-green-700 mb-1">Puanınız</p>
                    <p className="text-2xl font-bold text-green-900">
                        {currentScore.toFixed(2)}
                    </p>
                </div>
            </div>

            {/* Filtreler */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-4">
                <div className="flex items-center gap-2 mb-3">
                    <Filter className="h-5 w-5 text-gray-600" />
                    <h3 className="font-semibold text-gray-900">Filtreler</h3>
                </div>

                {/* Arama */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Bölüm veya üniversite ara..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Şehir Filtresi */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Şehir
                        </label>
                        <select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                            <option value="all">Tüm Şehirler</option>
                            {cities.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>

                    {/* Üniversite Tipi */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Üniversite Tipi
                        </label>
                        <select
                            value={universityType}
                            onChange={(e) => setUniversityType(e.target.value as 'all' | 'devlet' | 'vakif')}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                            <option value="all">Tümü</option>
                            <option value="devlet">Devlet</option>
                            <option value="vakif">Vakıf</option>
                        </select>
                    </div>
                </div>

                {/* Sonuç Sayısı */}
                <div className="text-sm text-gray-600">
                    <strong>{filteredPrograms.length}</strong> bölüm bulundu
                </div>
            </div>

            {/* Üniversite Listesi */}
            {filteredPrograms.length > 0 ? (
                <div className="space-y-3 max-h-[800px] overflow-y-auto">
                    {filteredPrograms.slice(0, 50).map((program, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:shadow-md transition-all"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <GraduationCap className="h-5 w-5 text-primary-600" />
                                        <h3 className="font-semibold text-gray-900">
                                            {program.program}
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 font-medium mb-2">
                                        {program.university}
                                    </p>
                                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            <span>{program.city}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users className="h-4 w-4" />
                                            <span>{program.quota} kontenjan</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right ml-4">
                                    <div className="text-xs text-gray-500 mb-1">Taban Puan</div>
                                    <div className="text-lg font-bold text-primary-600">
                                        {program.minScore}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">
                                        Sıralama: {program.minRank.toLocaleString('tr-TR')}
                                    </div>
                                </div>
                            </div>

                            {currentScore >= program.minScore && (
                                <div className="mt-3 pt-3 border-t border-gray-200">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        ✓ Puanınız yeterli
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                    {filteredPrograms.length > 50 && (
                        <div className="text-center py-4 text-sm text-gray-600">
                            İlk 50 sonuç gösteriliyor. Daha spesifik aramak için filtreleri kullanın.
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">
                        Filtrelere uygun bölüm bulunamadı.
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Filtreleri değiştirerek tekrar deneyin.
                    </p>
                </div>
            )}

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs text-yellow-800">
                    <strong>Not:</strong> Gösterilen sıralama ve bölümler 2025 YKS verilerine dayalı tahminidir.
                    Gerçek yerleştirme sonuçları değişiklik gösterebilir. ÖSYM'nin resmi verilerini takip ediniz.
                </p>
            </div>
        </div>
    )
}
