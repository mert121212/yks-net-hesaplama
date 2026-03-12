'use client'

import { useState } from 'react'
import { Share2, Twitter, MessageCircle, Copy, Check } from 'lucide-react'

interface ShareResultsProps {
    tytNet: number
    aytNet: number
    ydtNet: number
    scoreType: string
    totalScore: number
}

export default function ShareResults({ tytNet, aytNet, ydtNet, scoreType, totalScore }: ShareResultsProps) {
    const [copied, setCopied] = useState(false)
    const [showShareMenu, setShowShareMenu] = useState(false)

    const shareText = `🎓 YKS 2026 Netlerim:
📚 TYT: ${tytNet.toFixed(2)} net
📊 AYT: ${aytNet.toFixed(2)} net
${ydtNet > 0 ? `🌍 YDT: ${ydtNet.toFixed(2)} net\n` : ''}🎯 ${scoreType} Puanım: ${totalScore.toFixed(2)}

Sen de hesapla 👉 yksnethesapla.com
#YKS2026 #NetHesaplama #YKSHazırlık`

    const handleWhatsAppShare = () => {
        const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    const handleTwitterShare = () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    const handleCopyText = async () => {
        try {
            await navigator.clipboard.writeText(shareText)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Kopyalama başarısız:', err)
        }
    }

    const handleNativeShare = async () => {
        // Mobilde native share API kullan
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'YKS 2026 Netlerim',
                    text: shareText,
                    url: 'https://yksnethesapla.com'
                })
            } catch (err) {
                if ((err as Error).name !== 'AbortError') {
                    console.error('Paylaşım başarısız:', err)
                }
            }
        } else {
            // PC'de menüyü göster
            setShowShareMenu(!showShareMenu)
        }
    }

    return (
        <div className="mt-6 relative">
            <button
                onClick={handleNativeShare}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
                <Share2 className="w-5 h-5" />
                Sonuçlarımı Paylaş
            </button>

            {showShareMenu && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-50">
                    <div className="space-y-2">
                        <button
                            onClick={handleWhatsAppShare}
                            className="w-full flex items-center gap-3 p-4 rounded-lg hover:bg-green-50 transition-colors border border-gray-200"
                        >
                            <MessageCircle className="w-6 h-6 text-green-600" />
                            <span className="font-medium text-gray-700">WhatsApp'ta Paylaş</span>
                        </button>

                        <button
                            onClick={handleTwitterShare}
                            className="w-full flex items-center gap-3 p-4 rounded-lg hover:bg-blue-50 transition-colors border border-gray-200"
                        >
                            <Twitter className="w-6 h-6 text-blue-500" />
                            <span className="font-medium text-gray-700">Twitter'da Paylaş</span>
                        </button>

                        <button
                            onClick={handleCopyText}
                            className="w-full flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-6 h-6 text-green-600" />
                                    <span className="font-medium text-green-600">Kopyalandı!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-6 h-6 text-gray-600" />
                                    <span className="font-medium text-gray-700">Metni Kopyala</span>
                                </>
                            )}
                        </button>
                    </div>

                    <div className="mt-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line font-medium">
                            {shareText}
                        </p>
                    </div>

                    <button
                        onClick={() => setShowShareMenu(false)}
                        className="mt-3 w-full text-sm text-gray-500 hover:text-gray-700 py-2"
                    >
                        Kapat
                    </button>
                </div>
            )}
        </div>
    )
}
