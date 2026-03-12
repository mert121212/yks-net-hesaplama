'use client'

import { useState } from 'react'
import { Share2, Twitter, MessageCircle, Instagram, Download, Check } from 'lucide-react'

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

    const shareUrl = 'https://yksnethesapla.com'

    const handleWhatsAppShare = () => {
        const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`
        window.open(url, '_blank')
    }

    const handleTwitterShare = () => {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`
        window.open(url, '_blank')
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

    const handleDownloadImage = () => {
        // Canvas ile görsel oluştur
        const canvas = document.createElement('canvas')
        canvas.width = 1080
        canvas.height = 1080
        const ctx = canvas.getContext('2d')

        if (!ctx) return

        // Gradient arka plan
        const gradient = ctx.createLinearGradient(0, 0, 1080, 1080)
        gradient.addColorStop(0, '#3b82f6')
        gradient.addColorStop(1, '#8b5cf6')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 1080, 1080)

        // Beyaz kart
        ctx.fillStyle = 'white'
        ctx.roundRect(80, 200, 920, 680, 30)
        ctx.fill()

        // Başlık
        ctx.fillStyle = '#1e293b'
        ctx.font = 'bold 60px Inter, sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText('YKS 2026 Netlerim', 540, 320)

        // Netler
        ctx.font = '48px Inter, sans-serif'
        ctx.fillStyle = '#475569'
        ctx.fillText(`📚 TYT: ${tytNet.toFixed(2)} net`, 540, 420)
        ctx.fillText(`📊 AYT: ${aytNet.toFixed(2)} net`, 540, 500)
        if (ydtNet > 0) {
            ctx.fillText(`🌍 YDT: ${ydtNet.toFixed(2)} net`, 540, 580)
        }

        // Puan
        ctx.font = 'bold 56px Inter, sans-serif'
        ctx.fillStyle = '#3b82f6'
        ctx.fillText(`🎯 ${scoreType}: ${totalScore.toFixed(2)}`, 540, ydtNet > 0 ? 700 : 640)

        // Alt bilgi
        ctx.font = '40px Inter, sans-serif'
        ctx.fillStyle = '#64748b'
        ctx.fillText('Sen de hesapla 👉', 540, 820)

        ctx.font = 'bold 44px Inter, sans-serif'
        ctx.fillStyle = '#3b82f6'
        ctx.fillText('yksnethesapla.com', 540, 880)

        // İndir
        canvas.toBlob((blob) => {
            if (!blob) return
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = 'yks-netlerim.png'
            a.click()
            URL.revokeObjectURL(url)
        })
    }

    return (
        <div className="mt-6 relative">
            <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
                <Share2 className="w-5 h-5" />
                Sonuçlarımı Paylaş
            </button>

            {showShareMenu && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 z-10 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={handleWhatsAppShare}
                            className="flex items-center gap-2 p-3 rounded-lg hover:bg-green-50 transition-colors border border-gray-200"
                        >
                            <MessageCircle className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-medium text-gray-700">WhatsApp</span>
                        </button>

                        <button
                            onClick={handleTwitterShare}
                            className="flex items-center gap-2 p-3 rounded-lg hover:bg-blue-50 transition-colors border border-gray-200"
                        >
                            <Twitter className="w-5 h-5 text-blue-500" />
                            <span className="text-sm font-medium text-gray-700">Twitter</span>
                        </button>

                        <button
                            onClick={handleDownloadImage}
                            className="flex items-center gap-2 p-3 rounded-lg hover:bg-purple-50 transition-colors border border-gray-200"
                        >
                            <Download className="w-5 h-5 text-purple-600" />
                            <span className="text-sm font-medium text-gray-700">Görsel İndir</span>
                        </button>

                        <button
                            onClick={handleCopyText}
                            className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-5 h-5 text-green-600" />
                                    <span className="text-sm font-medium text-green-600">Kopyalandı!</span>
                                </>
                            ) : (
                                <>
                                    <Instagram className="w-5 h-5 text-pink-600" />
                                    <span className="text-sm font-medium text-gray-700">Metni Kopyala</span>
                                </>
                            )}
                        </button>
                    </div>

                    <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">
                            {shareText}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
