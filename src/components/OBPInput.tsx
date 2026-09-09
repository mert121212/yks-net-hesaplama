'use client'

interface OBPInputProps {
    obp: number
    onObpChange: (value: number) => void
    obpHalved?: boolean
    onObpHalvedChange?: (value: boolean) => void
    obpMesleki?: boolean
    onObpMeslekiChange?: (value: boolean) => void
}

export default function OBPInput({
    obp,
    onObpChange,
    obpHalved = false,
    onObpHalvedChange,
    obpMesleki = false,
    onObpMeslekiChange,
}: OBPInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value) || 0
        if (value >= 0 && value <= 100) {
            onObpChange(value)
        }
    }

    const multiplier = obpHalved ? 0.06 : 0.12
    const baseContribution = obp * 5 * multiplier
    const extraContribution = obpMesleki ? obp * 5 * 0.06 : 0

    return (
        <div className="card">
            <h2 className="section-title">OBP (Ortaöğretim Başarı Puanı)</h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-blue-900 leading-relaxed">
                    <strong>OBP Nedir?</strong> Lise diploma notunuzun 5 ile çarpılıp ilgili katsayı (standart 0,12 / kırık OBP 0,06) ile çarpılarak ham YKS puanınıza eklenmesidir.
                </p>
            </div>

            <div className="max-w-md">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lise Diploma Notunuz (50 - 100)
                </label>
                <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.01"
                    value={obp || ''}
                    onChange={handleChange}
                    onWheel={(e) => e.currentTarget.blur()}
                    className="input-field text-lg"
                    placeholder="Örn: 84.50"
                />

                {obp > 0 && (
                    <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200">
                        <p className="text-sm text-green-900">
                            Yerleştirme Katkısı:{' '}
                            <span className="font-bold text-green-700">
                                +{(baseContribution + extraContribution).toFixed(2)}
                            </span>{' '}
                            puan
                        </p>
                        <p className="text-xs text-green-700 mt-1">
                            Diploma Notu: {obp} → OBP: {(obp * 5).toFixed(0)} × {multiplier}{' '}
                            = +{baseContribution.toFixed(2)} puan
                            {obpMesleki && (
                                <span className="block mt-0.5 text-blue-700">
                                    + {extraContribution.toFixed(2)} mesleki ek puan (0,06)
                                </span>
                            )}
                        </p>
                    </div>
                )}
            </div>

            {/* OBP Katsayı Seçenekleri */}
            <div className="mt-6 space-y-3">
                <h3 className="text-sm font-semibold text-gray-700">Özel Durumlar</h3>

                {/* Kırık OBP */}
                <label className="flex items-start space-x-3 p-4 bg-amber-50 border border-amber-200 rounded-lg cursor-pointer hover:bg-amber-100/70 transition-colors">
                    <input
                        type="checkbox"
                        checked={obpHalved}
                        onChange={(e) => onObpHalvedChange?.(e.target.checked)}
                        className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                    />
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-amber-950">
                            Önceki yıl YKS ile bir programa yerleştim (Kırık OBP — Katsayı 0,06)
                        </p>
                        <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                            Geçtiğimiz yıl merkezi yerleştirme ile bir lisans veya ön lisans programına yerleştiyseniz (kayıt yaptırmamış olsanız dahi), ÖSYM kuralı gereğince OBP katsayınız yarıya düşer (0,12 yerine 0,06).
                        </p>
                    </div>
                </label>

                {/* Mesleki Ek Puan */}
                <label className="flex items-start space-x-3 p-4 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                    <input
                        type="checkbox"
                        checked={obpMesleki}
                        onChange={(e) => onObpMeslekiChange?.(e.target.checked)}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">
                            Meslek lisesi mezunuyum (Alanımdaki programa 0,06 ek puan)
                        </p>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                            Bir mesleğe yönelik program uygulayan ortaöğretim kurumlarından mezun olup alanınızın devamı niteliğindeki ön lisans programlarına yerleşirken OBP × 0,06 ek puan eklenir.
                        </p>
                    </div>
                </label>
            </div>
        </div>
    )
}
