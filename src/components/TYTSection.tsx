'use client'

import { TYTScores } from '@/types/yks'
import ScoreInput from './ScoreInput'

interface TYTSectionProps {
    scores: TYTScores
    onScoreChange: (subject: keyof TYTScores, field: 'dogru' | 'yanlis', value: number) => void
}

const TYT_SUBJECTS = {
    turkce: { label: 'Türkçe', questions: 40 },
    matematik: { label: 'Matematik', questions: 40 },
    sosyal: { label: 'Sosyal Bilimler', questions: 20 },
    fen: { label: 'Fen Bilimleri', questions: 20 }
}

export default function TYTSection({ scores, onScoreChange }: TYTSectionProps) {
    return (
        <div className="card">
            <h2 className="section-title">TYT (Temel Yeterlilik Testi)</h2>

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
                        const net = Math.max(0, score.dogru - (score.yanlis / 4))
                        return (
                            <div key={key} className="text-center">
                                <div className="font-medium text-primary-800">{subject.label}</div>
                                <div className="text-lg font-bold text-primary-600">{net.toFixed(2)}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}