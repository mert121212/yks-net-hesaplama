import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'YKS Geri Sayım 2026 | YKS\'ye Ne Kadar Kaldı?',
    description: '2026 YKS sınavına ne kadar kaldı? Geri sayım, motivasyon ve çalışma önerileri - YKS Net Hesaplama',
    keywords: 'YKS geri sayım, YKS 2026, sınava kaç gün kaldı, YKS tarihi, sınav geri sayımı, yks ye ne kadar kaldı',
    openGraph: {
        title: 'YKS Geri Sayım 2026 | YKS\'ye Ne Kadar Kaldı?',
        description: '2026 YKS sınavına ne kadar kaldı? Geri sayım, motivasyon ve çalışma önerileri.',
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