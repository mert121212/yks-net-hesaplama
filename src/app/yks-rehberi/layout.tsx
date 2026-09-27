import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'YKS Rehberi 2027 | Net ve Puan Hesaplama Yol Haritası',
    description: '2027 YKS yol haritası: 4 yanlış kuralından 0,5 net şartına, OBP katkısından turlama taktiğine kadar masada işe yarayan tüm gerçekler.',
    keywords: 'YKS rehberi, net hesaplama rehberi, YKS 2027 kılavuzu, TYT AYT YDT rehberi, üniversite sınavı rehberi',
    openGraph: {
        title: 'YKS Rehberi 2027 | Net ve Puan Hesaplama Yol Haritası',
        description: '2027 YKS yol haritası: 4 yanlış kuralından 0,5 net şartına, OBP katkısından turlama taktiğine kadar masada işe yarayan tüm gerçekler.',
        url: '/yks-rehberi',
    },
}

export default function YKSRehberiLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}