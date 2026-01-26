import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'YKS Net Hesaplama | Puan Hesaplama Aracı',
    description: 'YKS sınavı için net hesaplama ve puan hesaplama aracı. TYT, AYT ve YDT netlerinizi hesaplayın, üniversite puanınızı öğrenin.',
    keywords: 'YKS, net hesaplama, puan hesaplama, TYT, AYT, YDT, üniversite, sınav',
    authors: [{ name: 'YKS Net Hesaplama' }],
    creator: 'YKS Net Hesaplama',
    publisher: 'YKS Net Hesaplama',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://yks-net-hesaplama.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'YKS Net Hesaplama | Puan Hesaplama Aracı',
        description: 'YKS sınavı için net hesaplama ve puan hesaplama aracı. TYT, AYT ve YDT netlerinizi hesaplayın.',
        url: 'https://yks-net-hesaplama.com',
        siteName: 'YKS Net Hesaplama',
        locale: 'tr_TR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'YKS Net Hesaplama | Puan Hesaplama Aracı',
        description: 'YKS sınavı için net hesaplama ve puan hesaplama aracı.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="tr">
            <body className={inter.className}>
                <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                    {children}
                </div>
            </body>
        </html>
    )
}