'use client'

import { YDTScores } from '@/types/yks'
import ScoreInput from './ScoreInput'

interface YDTSectionProps {
    scores: YDTScores
    onScoreChange: (subject: keyof YDTScores, field: 'dogru' | 'yanlis', value: number) => void
    onReset: () => void
}

export default function YDTSection({ scores, onScoreChange, onReset }: YDTSectionProps) {
    const ydtNet = Math.max(0, scores.ydt.dogru - (scores.ydt.yanlis / 4))

    return (
        <div className="card">
            <div className="flex items-center justify-between mb-6">
                <h2 className="section-title mb-0">YDT (Yabancı Dil Testi)</h2>
                <button onClick={onReset} title="Sıfırla" className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" aria-label="Sıfırla">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>

            <div className="mb-6">
                <ScoreInput
                    label="Yabancı Dil"
                    maxQuestions={80}
                    dogru={scores.ydt.dogru}
                    yanlis={scores.ydt.yanlis}
                    onDogruChange={(value) => onScoreChange('ydt', 'dogru', value)}
                    onYanlisChange={(value) => onScoreChange('ydt', 'yanlis', value)}
                />
            </div>

            <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">YDT Özet</h3>
                <div className="text-center">
                    <div className="text-sm font-medium text-orange-800">YDT Net</div>
                    <div className="text-2xl font-bold text-orange-600">{ydtNet.toFixed(2)}</div>
                </div>

                <div className="mt-4 text-xs text-orange-700 bg-orange-100 p-3 rounded">
                    <p className="font-medium mb-1">💡 YDT Hakkında:</p>
                    <ul className="space-y-1 text-orange-600">
                        <li>• YDT sadece Dil puanı hesaplamasında kullanılır</li>
                        <li>• İngilizce, Almanca, Fransızca, Arapça dillerinden birini seçebilirsiniz</li>
                        <li>• YDT'ye girmek zorunlu değildir</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}