'use client'

import { useState } from 'react'

interface ScoreInputProps {
    label: string
    maxQuestions: number
    dogru: number
    yanlis: number
    onDogruChange: (value: number) => void
    onYanlisChange: (value: number) => void
    disabled?: boolean
}

export default function ScoreInput({
    label,
    maxQuestions,
    dogru,
    yanlis,
    onDogruChange,
    onYanlisChange,
    disabled = false
}: ScoreInputProps) {
    const [errors, setErrors] = useState<{ dogru?: string; yanlis?: string }>({})

    const validateInput = (type: 'dogru' | 'yanlis', value: number, otherVal?: number) => {
        const otherValue = otherVal !== undefined ? otherVal : (type === 'dogru' ? yanlis : dogru)
        const newErrors: { dogru?: string; yanlis?: string } = {}

        // Doğru için kontrol
        const d = type === 'dogru' ? value : dogru
        const y = type === 'yanlis' ? value : yanlis

        if (d < 0) newErrors.dogru = 'Negatif olamaz'
        if (y < 0) newErrors.yanlis = 'Negatif olamaz'
        if (d + y > maxQuestions) {
            newErrors[type] = `Toplam ${maxQuestions}'ı geçemez`
        }

        setErrors(newErrors)
    }

    const handleDogruChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = parseInt(e.target.value) || 0
        const value = Math.min(Math.max(0, raw), maxQuestions - yanlis)
        validateInput('dogru', value)
        onDogruChange(value)
    }

    const handleYanlisChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = parseInt(e.target.value) || 0
        const value = Math.min(Math.max(0, raw), maxQuestions - dogru)
        validateInput('yanlis', value)
        onYanlisChange(value)
    }

    const net = dogru - (yanlis / 4)
    const totalAnswered = dogru + yanlis
    const remaining = maxQuestions - totalAnswered

    return (
        <div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-300 transition-colors">
            <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900">{label}</h3>
                <span className="text-sm text-gray-500">
                    {maxQuestions} soru
                </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Doğru
                    </label>
                    <input
                        type="number"
                        min="0"
                        max={maxQuestions - yanlis}
                        value={dogru || ''}
                        onChange={handleDogruChange}
                        onWheel={(e) => e.currentTarget.blur()}
                        disabled={disabled}
                        className={`input-field ${errors.dogru ? 'border-red-500' : ''} ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''
                            }`}
                        placeholder="0"
                    />
                    {errors.dogru && (
                        <p className="text-xs text-red-600 mt-1">{errors.dogru}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Yanlış
                    </label>
                    <input
                        type="number"
                        min="0"
                        max={maxQuestions - dogru}
                        value={yanlis || ''}
                        onChange={handleYanlisChange}
                        onWheel={(e) => e.currentTarget.blur()}
                        disabled={disabled}
                        className={`input-field ${errors.yanlis ? 'border-red-500' : ''} ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''
                            }`}
                        placeholder="0"
                    />
                    {errors.yanlis && (
                        <p className="text-xs text-red-600 mt-1">{errors.yanlis}</p>
                    )}
                </div>
            </div>

            <div className="flex justify-between items-center text-sm">
                <div className="flex space-x-4">
                    <span className="text-gray-600">
                        Net: <span className={`font-semibold ${net < 0 ? 'text-red-600' : 'text-primary-600'}`}>
                            {net.toFixed(2)}
                        </span>
                    </span>
                    <span className="text-gray-600">
                        Boş: <span className="font-medium">{remaining}</span>
                    </span>
                </div>
                <div className="text-xs text-gray-500">
                    {totalAnswered}/{maxQuestions}
                </div>
            </div>
        </div>
    )
}