'use client'

import { AYTScores } from '@/types/yks'
import ScoreInput from './ScoreInput'

interface AYTSectionProps {
    scores: AYTScores
    onScoreChange: (subject: keyof AYTScores, field: 'dogru' | 'yanlis', value: number) => void
    onReset: () => void
}

const AYT_SUBJECTS = {
    matematik: { label: 'Matematik', questions: 40, category: 'Sayısal' },
    fizik: { label: 'Fizik', questions: 14, category: 'Sayısal' },
    kimya: { label: 'Kimya', questions: 13, category: 'Sayısal' },
    biyoloji: { label: 'Biyoloji', questions: 13, category: 'Sayısal' },
    edebiyat: { label: 'Türk Dili ve Edebiyatı', questions: 24, category: 'Sözel' },
    tarih1: { label: 'Tarih-1', questions: 10, category: 'Sözel' },
    cografya1: { label: 'Coğrafya-1', questions: 6, category: 'Sözel' },
    tarih2: { label: 'Tarih-2', questions: 11, category: 'Sözel' },
    cografya2: { label: 'Coğrafya-2', questions: 11, category: 'Sözel' },
    felsefe: { label: 'Felsefe', questions: 12, category: 'Sözel' },
    din: { label: 'Din Kültürü ve Ahlak Bilgisi', questions: 6, category: 'Sözel' }
}

export default function AYTSection({ scores, onScoreChange, onReset }: AYTSectionProps) {
    const sayisalSubjects = Object.entries(AYT_SUBJECTS).filter(([_, subject]) => subject.category === 'Sayısal')
    const sozelSubjects = Object.entries(AYT_SUBJECTS).filter(([_, subject]) => subject.category === 'Sözel')

    const calculateCategoryNet = (subjects: [string, any][]) => {
        return subjects.reduce((total, [key]) => {
            const score = scores[key as keyof AYTScores]
            const net = Math.max(0, score.dogru - (score.yanlis / 4))
            return total + net
        }, 0)
    }

    const sayisalNet = calculateCategoryNet(sayisalSubjects)
    const sozelNet = calculateCategoryNet(sozelSubjects)
    const toplamNet = sayisalNet + sozelNet

    return (
        <div className="card">
            <div className="flex items-center justify-between mb-6">
                <h2 className="section-title mb-0">AYT (Alan Yeterlilik Testi)</h2>
                <button onClick={onReset} title="Sıfırla" className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" aria-label="Sıfırla">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>

            {/* Sayısal Bölüm */}
            <div className="mb-8">
                <h3 className="subsection-title text-green-700">Sayısal Bölüm</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sayisalSubjects.map(([key, subject]) => (
                        <ScoreInput
                            key={key}
                            label={subject.label}
                            maxQuestions={subject.questions}
                            dogru={scores[key as keyof AYTScores].dogru}
                            yanlis={scores[key as keyof AYTScores].yanlis}
                            onDogruChange={(value) => onScoreChange(key as keyof AYTScores, 'dogru', value)}
                            onYanlisChange={(value) => onScoreChange(key as keyof AYTScores, 'yanlis', value)}
                        />
                    ))}
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <div className="text-center">
                        <span className="text-sm font-medium text-green-800">Sayısal Net Toplam: </span>
                        <span className="text-lg font-bold text-green-600">{sayisalNet.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            {/* Sözel Bölüm */}
            <div className="mb-8">
                <h3 className="subsection-title text-purple-700">Sözel Bölüm</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sozelSubjects.map(([key, subject]) => (
                        <ScoreInput
                            key={key}
                            label={subject.label}
                            maxQuestions={subject.questions}
                            dogru={scores[key as keyof AYTScores].dogru}
                            yanlis={scores[key as keyof AYTScores].yanlis}
                            onDogruChange={(value) => onScoreChange(key as keyof AYTScores, 'dogru', value)}
                            onYanlisChange={(value) => onScoreChange(key as keyof AYTScores, 'yanlis', value)}
                        />
                    ))}
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                    <div className="text-center">
                        <span className="text-sm font-medium text-purple-800">Sözel Net Toplam: </span>
                        <span className="text-lg font-bold text-purple-600">{sozelNet.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            {/* AYT Özet */}
            <div className="p-4 bg-primary-50 rounded-lg">
                <h3 className="font-semibold text-primary-900 mb-3">AYT Özet</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                        <div className="text-sm font-medium text-green-800">Sayısal</div>
                        <div className="text-xl font-bold text-green-600">{sayisalNet.toFixed(2)}</div>
                    </div>
                    <div>
                        <div className="text-sm font-medium text-purple-800">Sözel</div>
                        <div className="text-xl font-bold text-purple-600">{sozelNet.toFixed(2)}</div>
                    </div>
                    <div>
                        <div className="text-sm font-medium text-primary-800">Toplam</div>
                        <div className="text-xl font-bold text-primary-600">{toplamNet.toFixed(2)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}