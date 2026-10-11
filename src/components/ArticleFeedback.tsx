'use client'

import { useState } from 'react'

export default function ArticleFeedback() {
    const [feedback, setFeedback] = useState<'helpful' | 'not-helpful' | null>(null)
    const [showThankYou, setShowThankYou] = useState(false)

    const handleFeedback = (type: 'helpful' | 'not-helpful') => {
        setFeedback(type)
        setShowThankYou(true)
    }

    if (showThankYou) {
        return (
            <div className="my-10 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl text-center animate-fade-in">
                <div className="text-3xl mb-2">
                    {feedback === 'helpful' ? '🎉' : '📝'}
                </div>
                <p className="text-emerald-900 font-bold text-lg">
                    {feedback === 'helpful' ? 'Teşekkürler! Geri bildirimin değerli.' : 'Geri bildirim için teşekkürler!'}
                </p>
                <p className="text-emerald-700 text-sm mt-1">
                    {feedback === 'helpful'
                        ? 'Bu rehberi arkadaşlarınla paylaşarak daha fazla adaya ulaşmasını sağlayabilirsin.'
                        : 'İçeriklerimizi sürekli geliştiriyoruz. Önerilerini iletişim sayfasından bize yazabilirsin.'}
                </p>
            </div>
        )
    }

    return (
        <div className="my-10 p-6 bg-gradient-to-br from-gray-50 to-blue-50/30 border border-gray-200 rounded-2xl">
            <div className="text-center">
                <p className="text-gray-900 font-bold text-lg mb-1">
                    Bu rehber işine yaradı mı?
                </p>
                <p className="text-gray-500 text-sm mb-5">
                    Geri bildirimin içeriklerimizi geliştirmemize yardımcı oluyor.
                </p>
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={() => handleFeedback('helpful')}
                        className="group flex items-center gap-2.5 px-6 py-3 bg-white border-2 border-emerald-200 text-emerald-700 rounded-xl font-semibold hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        <span className="text-xl group-hover:scale-110 transition-transform">👍</span>
                        <span>Evet, faydalı oldu</span>
                    </button>
                    <button
                        onClick={() => handleFeedback('not-helpful')}
                        className="group flex items-center gap-2.5 px-6 py-3 bg-white border-2 border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        <span className="text-xl group-hover:scale-110 transition-transform">👎</span>
                        <span>Geliştirilebilir</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
