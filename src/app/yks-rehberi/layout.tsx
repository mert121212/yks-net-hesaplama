import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'YKS Rehberi 2026 | Net Hesaplama ve Puan Hesaplama Kılavuzu',
    description: 'YKS 2026 için kapsamlı rehber. Net hesaplama nasıl yapılır, puan türleri nelerdir, TYT AYT YDT hakkında bilmeniz gerekenler.',
    keywords: 'YKS rehberi, net hesaplama rehberi, YKS 2026 kılavuzu, TYT AYT YDT rehberi, üniversite sınavı rehberi',
    openGraph: {
        title: 'YKS Rehberi 2026 | Net Hesaplama ve Puan Hesaplama Kılavuzu',
        description: 'YKS 2026 için kapsamlı rehber. Net hesaplama nasıl yapılır, puan türleri nelerdir.',
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