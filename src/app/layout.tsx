import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import GoogleAdsense from '@/components/GoogleAdsense'

const CookieConsent = dynamic(() => import('@/components/CookieConsent'), {
    ssr: false,
})

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
    variable: '--font-inter',
    fallback: ['system-ui', 'arial']
})

export const viewport: Viewport = {
    themeColor: '#3b82f6',
    width: 'device-width',
    initialScale: 1,
}

export const metadata: Metadata = {
    title: {
        default: 'YKS Net Hesaplama 2027 [ÖSYM & YÖK Uyumlu] ⚡ Puan ve Sıralama Hesapla',
        template: '%s | YKS Net Hesaplama'
    },
    description: '🎯 2027 ÖSYM katsayılarıyla TYT, AYT ve YDT netlerini 1 saniyede hesapla! 4 yanlış 1 doğru kuralı, OBP katkısı ve tahmini Türkiye sıralamanı hemen öğren.',
    keywords: [
        'YKS net hesaplama',
        'YKS 2027',
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
    metadataBase: new URL('https://yksnethesapla.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'YKS Net Hesaplama 2027 [ÖSYM & YÖK Uyumlu] ⚡ Puan ve Sıralama Hesapla',
        description: '2027 ÖSYM katsayılarıyla TYT, AYT ve YDT netlerini 1 saniyede hesapla! 4 yanlış 1 doğru kuralı, OBP katkısı ve tahmini sıralamanı hemen öğren.',
        url: 'https://yksnethesapla.com',
        siteName: 'YKS Net Hesaplama',
        locale: 'tr_TR',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Net Hesaplama - TYT AYT YDT Puan Hesaplama Aracı'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'YKS Net Hesaplama 2027 [ÖSYM & YÖK Uyumlu] ⚡ Puan ve Sıralama Hesapla',
        description: '2027 ÖSYM katsayılarıyla TYT, AYT ve YDT netlerini 1 saniyede hesapla! 4 yanlış 1 doğru kuralı, OBP katkısı ve tahmini sıralamanı hemen öğren.',
        images: ['/og-image.jpg'],
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
        google: 'AMBa6fK9f0j8LXvHIrvyt4qSLQfiT1jNtRSWsusMI6s',
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
        <html lang="tr" className={inter.variable}>
            <head>
                {/* DNS prefetch — render blocking değil */}
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className={`${inter.className} antialiased`}>
                <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </div>
                <CookieConsent />
                <GoogleAdsense ADSENSE_CLIENT_ID="ca-pub-5194383766905175" />

                {/* Google Analytics — afterInteractive: ilk paint'i bloklamaz */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-XXL7KKBSB0"
                    strategy="afterInteractive"
                />
                <Script id="ga-init" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-XXL7KKBSB0');
                    `}
                </Script>
            </body>
        </html>
    )
}