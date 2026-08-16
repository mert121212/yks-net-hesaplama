import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '2027 YKS Sayaç | YKS\'ye Kaç Gün Kaldı? | YKS Ne Zaman',
    description: 'YKS 2027 sınavına kaç gün kaldığını öğren. TYT 20 Haziran 2027, AYT 21 Haziran 2027. Canlı geri sayım sayacı, motivasyon ipuçları ve çalışma tavsiyeleri.',
    keywords: 'YKS geri sayım, YKS 2027 ne zaman, YKS kaç gün kaldı, TYT geri sayım, AYT geri sayım, YKS tarihi 2027, YKS sayaç',
    alternates: {
        canonical: '/geri-sayim',
    },
    openGraph: {
        title: '2027 YKS Sayaç | YKS\'ye Kaç Gün Kaldı? | YKS Ne Zaman',
        description: 'YKS 2027 sınavına kalan süreyi canlı olarak takip et. TYT 20 Haziran, AYT 21 Haziran 2027.',
        url: 'https://yksnethesapla.com/geri-sayim',
        type: 'website',
    },
}

export default function GeriSayimLayout({ children }: { children: React.ReactNode }) {
    return children
}
