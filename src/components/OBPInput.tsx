'use client'

interface OBPInputProps {
    obp: number
    onObpChange: (value: number) => void
    obpHalved?: boolean
    onObpHalvedChange?: (value: boolean) => void
    obpMesleki?: boolean
    onObpMeslekiChange?: (value: boolean) => void
    previouslyPlaced?: boolean
    onPreviouslyPlacedChange?: (value: boolean) => void
    previousYearScore?: number
    onPreviousYearScoreChange?: (value: number) => void
}

export default function OBPInput({
    obp,
    onObpChange,
    obpHalved = false,
    onObpHalvedChange,
    obpMesleki = false,
    onObpMeslekiChange,
    previouslyPlaced = false,
    onPreviouslyPlacedChange,
    previousYearScore = 0,
    onPreviousYearScoreChange
}: OBPInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value) || 0
        // OBP 0-100 arası olmalı
        if (value >= 0 && value <= 100) {
            onObpChange(value)
        }
    }

    return (
        <div className="card">
            <h2 className="section-title">OBP (Ortaöğretim Başarı Puanı)</h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-blue-900">
                    <strong>OBP Nedir?</strong> Lise diploma notunuzun YKS puanınıza katkısıdır.
                    Diploma notunuz 100 üzerinden hesaplanır ve puanınıza %12 oranında etki eder.
                </p>
            </div>

            <div className="max-w-md">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Diploma Notunuz (0-100)
                </label>
                <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    value={obp || ''}
                    onChange={handleChange}
                    className="input-field text-lg"
                    placeholder="Örn: 85.50"
                />

                {obp > 0 && (
                    <div className="mt-3 p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-800">
                            OBP Katkısı: <span className="font-bold">+{(obp * (obpHalved ? 0.06 : 0.12)).toFixed(2)}</span> puan
                            {obpMesleki && <span className="ml-2">(+{(obp * 0.06).toFixed(2)} mesleki ek puan)</span>}
                        </p>
                    </div>
                )}
            </div>

            {/* OBP Katsayı Seçenekleri */}
            {obp > 0 && (
                <div className="mt-6 space-y-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3">OBP Katsayı Seçenekleri</h3>

                    {/* Geçen Yıl Yerleştim */}
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                        <label className="flex items-start space-x-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={previouslyPlaced}
                                onChange={(e) => onPreviouslyPlacedChange?.(e.target.checked)}
                                className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                            />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                    Geçen Yıl Bir Bölüme Yerleştim
                                </p>
                                <p className="text-xs text-gray-600 mt-1">
                                    Önceki yıl YKS ile bir programa yerleştiyseniz bu seçeneği işaretleyin.
                                    Geçen yılki puanınızı girmeniz gerekecek.
                                </p>
                            </div>
                        </label>

                        {previouslyPlaced && (
                            <div className="mt-4 pl-7">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Geçen Yılki Puanınız
                                </label>
                                <input
                                    type="number"
                                    min="100"
                                    max="600"
                                    step="0.01"
                                    value={previousYearScore || ''}
                                    onChange={(e) => onPreviousYearScoreChange?.(parseFloat(e.target.value) || 0)}
                                    className="input-field text-lg max-w-xs"
                                    placeholder="Örn: 450.50"
                                />
                                {previousYearScore > 0 && (
                                    <p className="text-xs text-amber-700 mt-2">
                                        ⚠️ Geçen yılki puanınızdan daha düşük puan alırsanız,
                                        geçen yılki puanınız baz alınacaktır.
                                    </p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Yarıya Düşürme */}
                    <label className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                        <input
                            type="checkbox"
                            checked={obpHalved}
                            onChange={(e) => onObpHalvedChange?.(e.target.checked)}
                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                                OBP Katsayısı Yarıya Düşsün (0.06)
                            </p>
                            <p className="text-xs text-gray-600 mt-1">
                                Daha önce yerleştiyseniz ve OBP katsayısının 0.12'den 0.06'ya düşürülmesini
                                istiyorsanız bu seçeneği işaretleyin.
                            </p>
                        </div>
                    </label>

                    {/* Mesleki Program */}
                    <label className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                        <input
                            type="checkbox"
                            checked={obpMesleki}
                            onChange={(e) => onObpMeslekiChange?.(e.target.checked)}
                            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">
                                Meslek Lisesi Mezunuyum (0.06 Ek Puan)
                            </p>
                            <p className="text-xs text-gray-600 mt-1">
                                Bir mesleğe yönelik program uygulayan ortaöğretim kurumundan (meslek lisesi) mezun olduysanız
                                ve OBP'nin 0.06 katsayısı ile çarpımından elde edilecek ek puanların yerleştirme puanlarına
                                eklenmesini istiyorsanız bu seçeneği işaretleyin.
                            </p>
                        </div>
                    </label>
                </div>
            )}
        </div>
    )
}
