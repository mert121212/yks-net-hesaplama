'use client'

import { useEffect, useRef, useState } from 'react'

interface AdBannerProps {
    adSlot: string
    adFormat?: string
    fullWidthResponsive?: boolean
    style?: React.CSSProperties
    className?: string
}

declare global {
    interface Window {
        adsbygoogle: any[]
    }
}

export default function AdBanner({
    adSlot,
    adFormat = 'auto',
    fullWidthResponsive = true,
    style = { display: 'block' },
    className = ''
}: AdBannerProps) {
    const adRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        if (adRef.current) {
            observer.observe(adRef.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (isVisible) {
            try {
                if (typeof window !== 'undefined' && window.adsbygoogle) {
                    (window.adsbygoogle = window.adsbygoogle || []).push({})
                }
            } catch (error) {
                console.error('AdSense error:', error)
            }
        }
    }, [isVisible])

    return (
        <div ref={adRef} className={`adsense-container ${className}`}>
            {isVisible && (
                <ins
                    className="adsbygoogle"
                    style={style}
                    data-ad-client="ca-pub-5194383766905175"
                    data-ad-slot={adSlot}
                    data-ad-format={adFormat}
                    data-full-width-responsive={fullWidthResponsive.toString()}
                />
            )}
        </div>
    )
}