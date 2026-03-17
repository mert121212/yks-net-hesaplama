import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'YKS 2026 Geri Sayım | YKS\'ye Kaç Gün Kaldı?',
    description: 'YKS 2026 sınavına kaç gün kaldığını öğren. TYT 20 Haziran 2026, AYT 21 Haziran 2026. Canlı geri sayım sayacı, motivasyon ipuçları ve çalışma tavsiyeleri.',
    keywords: 'YKS geri sayım, YKS 2026 ne zaman, YKS kaç gün kaldı, TYT geri sayım, AYT geri sayım, YKS tarihi 2026',
    alternates: {
        canonical: '/geri-sayim',
    },
    openGraph: {
        title: 'YKS 2026 Geri Sayım - YKS\'ye Kaç Gün Kaldı?',
        description: 'YKS 2026 sınavına kalan süreyi canlı olarak takip et. TYT 20 Haziran, AYT 21 Haziran 2026.',
        url: 'https://yksnethesapla.com/geri-sayim',
        type: 'website',
    },
}

export default function GeriSayimLayout({ children }: { children: React.ReactNode }) {
    return children
}
