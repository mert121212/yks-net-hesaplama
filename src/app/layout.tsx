import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import GoogleAdsense from '@/components/GoogleAdsense'
import { GA_MEASUREMENT_ID } from '@/lib/gtag'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// AdSense Client ID
const ADSENSE_CLIENT_ID = 'ca-pub-5194383766905175'

export const metadata: Metadata = {
    title: {
        default: 'YKS Net Hesaplama 2026 | TYT AYT YDT Puan Hesaplama Aracı',
        template: '%s | YKS Net Hesaplama'
    },
    description: 'YKS 2026 net hesaplama aracı ile TYT, AYT ve YDT netlerinizi hesaplayın. Üniversite puanlarınızı öğrenin. SAY, EA, SÖZ, DİL puan hesaplama. Ücretsiz ve hızlı YKS hesaplama sistemi.',
    keywords: [
        'YKS net hesaplama',
        'YKS 2026',
        'TYT net hesaplama',
        'AYT net hesaplama',
        'YDT net hesaplama',
        'üniversite puan hesaplama',
        'YKS puan hesaplama',
        'SAY puanı hesaplama',
        'EA puanı hesaplama',
        'SÖZ puanı hesaplama',
        'DİL puanı hesaplama',
        'YKS hesaplama aracı',
        'net hesaplama sistemi',
        'üniversite sınavı',
        'YKS geri sayım',
        'sınav hesaplama',
        'ÖSYM YKS',
        'yükseköğretim sınavı',
        'üniversite yerleştirme puanı'
    ].join(', '),
    authors: [{ name: 'Mert Çalışkan', url: 'https://github.com/mert121212' }],
    creator: 'Mert Çalışkan',
    publisher: 'YKS Net Hesaplama',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://yks-net-hesaplama.vercel.app'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'YKS Net Hesaplama 2026 | TYT AYT YDT Puan Hesaplama Aracı',
        description: 'YKS 2026 net hesaplama aracı ile TYT, AYT ve YDT netlerinizi hesaplayın. Üniversite puanlarınızı öğrenin. Ücretsiz ve hızlı hesaplama sistemi.',
        url: 'https://yks-net-hesaplama.vercel.app',
        siteName: 'YKS Net Hesaplama',
        locale: 'tr_TR',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'YKS Net Hesaplama - TYT AYT YDT Puan Hesaplama Aracı'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'YKS Net Hesaplama 2026 | TYT AYT YDT Puan Hesaplama',
        description: 'YKS net hesaplama aracı ile TYT, AYT ve YDT netlerinizi hesaplayın. Üniversite puanlarınızı öğrenin.',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'google-site-verification-code', // Google Search Console'dan alınacak
        other: {
            'google-adsense-account': 'ca-pub-5194383766905175',
        },
    },
    category: 'education',
    classification: 'YKS Net Hesaplama Aracı',
    referrer: 'origin-when-cross-origin',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="tr">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#3b82f6" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="google-adsense-account" content="ca-pub-5194383766905175" />
            </head>
            <body className={inter.className}>
                <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
                <GoogleAdsense ADSENSE_CLIENT_ID={ADSENSE_CLIENT_ID} />
                <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                    {children}
                </div>
            </body>
        </html>
    )
}