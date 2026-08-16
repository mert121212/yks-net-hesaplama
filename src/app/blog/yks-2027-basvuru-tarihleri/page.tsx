import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS 2027 Başvuru Tarihleri, Takvimi ve Başvuru Adımları',
    description: 'YKS 2027 başvuru tarihleri, sınav tarihleri, sonuç açıklama ve tercih takvimi. AİS üzerinden nasıl başvurulur? Sınav günü hazırlık listesi.',
    keywords: 'yks 2027 tarihleri, yks başvuru tarihleri, yks sınav tarihi, yks sonuç tarihi, ais başvuru',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri' },
    openGraph: {
        title: 'YKS 2027 Başvuru Tarihleri, Takvimi ve Başvuru Adımları',
        description: 'YKS 2027 başvuru tarihleri ve sınav takvimi. AİS üzerinden nasıl başvurulur?',
        type: 'article',
        publishedTime: '2027-02-23',
        url: 'https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri',
    },
}

export default function YKS2027BasvuruTarihleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS 2027 Başvuru Tarihleri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Takvim</span>
                            <time className="text-gray-600">23 Şubat 2027</time>
                            <span className="text-gray-600">• 4 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS 2027 Başvuru Tarihleri ve Takvimi
                        </h1>
                        <p className="text-xl text-gray-700">
                            Tarihleri kaçırmak, bir yılınızın kaybına neden olabilir. ÖSYM tarafından
                            açıklanan (tahmini) 2027 YKS takvimi aşağıdadır.

export const metadata: Metadata = {
    title: 'YKS 2027 Başvuru Tarihleri, Takvimi ve Başvuru Adımları',
    description: 'YKS 2027 başvuru tarihleri, sınav tarihleri, sonuç açıklama ve tercih takvimi. AİS üzerinden nasıl başvurulur? Sınav günü hazırlık listesi.',
    keywords: 'yks 2027 tarihleri, yks başvuru tarihleri, yks sınav tarihi, yks sonuç tarihi, ais başvuru',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri' },
    openGraph: {
        title: 'YKS 2027 Başvuru Tarihleri, Takvimi ve Başvuru Adımları',
        description: 'YKS 2027 başvuru tarihleri ve sınav takvimi. AİS üzerinden nasıl başvurulur?',
        type: 'article',
        publishedTime: '2027-02-23',
        url: 'https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri',
    },
}

export default function YKS2027BasvuruTarihleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS 2027 Başvuru Tarihleri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Takvim</span>
                            <time className="text-gray-600">23 Şubat 2027</time>
                            <span className="text-gray-600">• 4 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS 2027 Başvuru Tarihleri ve Takvimi
                        </h1>
                        <p className="text-xl text-gray-700">
                            Tarihleri kaçırmak, bir yılınızın kaybına neden olabilir. ÖSYM tarafından
                            açıklanan (tahmini) 2027 YKS takvimi aşağıdadır.
                        </p>
                    </header>

                    <AuthorProfile />
            </article>
        </div>
    )
}
