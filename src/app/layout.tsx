import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
    variable: '--font-inter',
    fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
    title: {
        default: 'YKS Net Hesaplama 2026 | TYT AYT YDT Puan Hesaplama Aracı',
        template: '%s | YKS Net Hesaplama'
    },
    description: 'YKS 2026 net ve puan hesaplama aracı. TYT, AYT, YDT netlerinizi hesaplayın, SAY EA SÖZ DİL puanlarınızı öğrenin. Ücretsiz, hızlı ve doğru hesaplama.',
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
    metadataBase: new URL('https://yksnethesapla.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'YKS Net Hesaplama 2026 | TYT AYT YDT Puan Hesaplama Aracı',
        description: 'YKS 2026 net hesaplama aracı ile TYT, AYT ve YDT netlerinizi hesaplayın. Üniversite puanlarınızı öğrenin. Ücretsiz ve hızlı hesaplama sistemi.',
        url: 'https://yksnethesapla.com',
        siteName: 'YKS Net Hesaplama',
        locale: 'tr_TR',
        type: 'website',
        images: [
            {
                url: '/og-image.svg',
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
        images: ['/og-image.svg'],
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
                <meta name="theme-color" content="#3b82f6" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="google-adsense-account" content="ca-pub-5194383766905175" />
            </head>
            <body className={`${inter.className} antialiased`}>
                <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </div>

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