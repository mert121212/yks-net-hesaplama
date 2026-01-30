'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
    GA_MEASUREMENT_ID: string
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: GoogleAnalyticsProps) {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
                }}
            />
        </>
    )
}