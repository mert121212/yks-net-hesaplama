import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'YKS Geri Sayım 2026 | YKS\'ye Ne Kadar Kaldı?',
    description: '2026 YKS sınavına ne kadar süre kaldığını öğrenin. Motivasyon mesajları, çalışma önerileri ve detaylı geri sayım.',
    keywords: 'YKS geri sayım, YKS 2026, sınava kaç gün kaldı, YKS tarihi, sınav geri sayımı',
    openGraph: {
        title: 'YKS Geri Sayım 2026 | YKS\'ye Ne Kadar Kaldı?',
        description: '2026 YKS sınavına ne kadar süre kaldığını öğrenin. Motivasyon mesajları ve çalışma önerileri.',
        url: '/geri-sayim',
    },
}

export default function GeriSayimLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}