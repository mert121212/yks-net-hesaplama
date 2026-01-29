'use client'

import { Share2, Facebook, Twitter, MessageCircle } from 'lucide-react'
import { useState } from 'react'

interface SocialShareProps {
    title?: string
    url?: string
    description?: string
}

export default function SocialShare({
    title = "YKS Net Hesaplama 2026 - Ücretsiz TYT AYT YDT Hesaplama Aracı",
    url = typeof window !== 'undefined' ? window.location.href : '',
    description = "YKS netlerini hesapla, üniversite puanlarını öğren! Ücretsiz ve hızlı."
}: SocialShareProps) {
    const [showShare, setShowShare] = useState(false)

    const shareData = {
        title,
        text: description,
        url,
    }

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share(shareData)
            } catch (error) {
                console.log('Paylaşım iptal edildi')
            }
        } else {
            setShowShare(!showShare)
        }
    }

    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    }

    return (
        <div className="relative">
            <button
                onClick={handleNativeShare}
                className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
                <Share2 className="h-4 w-4" />
                <span>Paylaş</span>
            </button>

            {showShare && (
                <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border p-4 z-10 min-w-48">
                    <div className="space-y-2">
                        <a
                            href={shareUrls.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            <Facebook className="h-4 w-4" />
                            <span>Facebook</span>
                        </a>
                        <a
                            href={shareUrls.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-blue-400 hover:text-blue-500 transition-colors"
                        >
                            <Twitter className="h-4 w-4" />
                            <span>Twitter</span>
                        </a>
                        <a
                            href={shareUrls.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
                        >
                            <MessageCircle className="h-4 w-4" />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}