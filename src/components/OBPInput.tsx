'use client'

interface OBPInputProps {
    obp: number
    onObpChange: (value: number) => void
}

export default function OBPInput({ obp, onObpChange }: OBPInputProps) {
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
                            OBP Katkısı: <span className="font-bold">+{(obp * 0.12).toFixed(2)}</span> puan
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
