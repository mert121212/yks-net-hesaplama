'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent')
        if (!consent) {
            // Küçük gecikme ile göster — sayfa yüklenmesini bloklamasın
            const timer = setTimeout(() => setVisible(true), 1500)
            return () => clearTimeout(timer)
        }
    }, [])

    const accept = () => {
        localStorage.setItem('cookie-consent', 'accepted')
        setVisible(false)
    }

    const reject = () => {
        localStorage.setItem('cookie-consent', 'rejected')
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl px-4 py-5 sm:px-6 animate-slide-up"
            role="dialog"
            aria-label="Çerez onayı"
        >
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1 text-sm text-gray-700 leading-relaxed">
                    <p className="font-semibold text-gray-900 mb-1">🍪 Çerez Bildirimi</p>
                    <p>
                        Sitemiz, deneyiminizi iyileştirmek ve anonim ziyaret istatistikleri toplamak için
                        Google Analytics ve Google AdSense çerezlerini kullanmaktadır. Hesaplama verileriniz
                        sunucularımıza gönderilmez.{' '}
                        <Link href="/privacy" className="text-blue-600 hover:underline font-medium">
                            Gizlilik Politikası
                        </Link>
                    </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                    <button
                        onClick={reject}
                        className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                        Reddet
                    </button>
                    <button
                        onClick={accept}
                        className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
                    >
                        Kabul Et
                    </button>
                </div>
            </div>
        </div>
    )
}
