'use client'

import Script from 'next/script'

interface GoogleAdsenseProps {
    ADSENSE_CLIENT_ID: string
}

export default function GoogleAdsense({ ADSENSE_CLIENT_ID }: GoogleAdsenseProps) {
    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    )
}