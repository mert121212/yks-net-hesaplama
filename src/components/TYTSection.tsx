'use client'

import { TYTScores } from '@/types/yks'
import ScoreInput from './ScoreInput'

interface TYTSectionProps {
    scores: TYTScores
    onScoreChange: (subject: keyof TYTScores, field: 'dogru' | 'yanlis', value: number) => void
    onReset: () => void
}

const TYT_SUBJECTS = {
    turkce: { label: 'Türkçe', questions: 40 },
    matematik: { label: 'Matematik', questions: 40 },
    sosyal: { label: 'Sosyal Bilimler', questions: 20 },
    fen: { label: 'Fen Bilimleri', questions: 20 }
}

export default function TYTSection({ scores, onScoreChange, onReset }: TYTSectionProps) {
    return (
        <div className="card">
            <div className="flex items-center justify-between mb-6">
                <h2 className="section-title mb-0">TYT (Temel Yeterlilik Testi)</h2>
                <button onClick={onReset} title="Sıfırla" className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" aria-label="Sıfırla">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(TYT_SUBJECTS).map(([key, subject]) => (
                    <ScoreInput
                        key={key}
                        label={subject.label}
                        maxQuestions={subject.questions}
                        dogru={scores[key as keyof TYTScores].dogru}
                        yanlis={scores[key as keyof TYTScores].yanlis}
                        onDogruChange={(value) => onScoreChange(key as keyof TYTScores, 'dogru', value)}
                        onYanlisChange={(value) => onScoreChange(key as keyof TYTScores, 'yanlis', value)}
                    />
                ))}
            </div>

            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <h3 className="font-semibold text-primary-900 mb-2">TYT Özet</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    {Object.entries(TYT_SUBJECTS).map(([key, subject]) => {
                        const score = scores[key as keyof TYTScores]
                        const net = score.dogru - (score.yanlis / 4)
                        return (
                            <div key={key} className="text-center">
                                <div className="font-medium text-primary-800">{subject.label}</div>
                                <div className={`text-lg font-bold ${net < 0 ? 'text-red-600' : 'text-primary-600'}`}>
                                    {net.toFixed(2)}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}