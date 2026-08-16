import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'TYT Matematik Konuları 2027: Problemler, Geometri ve Yol Haritası',
    description: 'TYT Matematik\'te hangi konular çıkıyor? Problemler krallığı, yeni nesil geometri ve konu öncelik yol haritası. 2027 ÖSYM güncel rehber.',
    keywords: 'tyt matematik konuları, tyt matematik 2027, tyt problemler, tyt geometri, ebob ekok, yks matematik',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-matematik-konulari' },
    openGraph: {
        title: 'TYT Matematik Konuları 2027: Problemler, Geometri ve Yol Haritası',
        description: 'TYT Matematik\'te hangi konular çıkıyor? Problemler, geometri ve konu öncelik yol haritası.',
        type: 'article',
        publishedTime: '2027-02-19',
        url: 'https://yksnethesapla.com/blog/tyt-matematik-konulari',
    },
}

export default function TYTMatematikKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Matematik Konuları</span>
                    </nav>
                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">TYT</span>
                            <time className="text-gray-600">19 Şubat 2027</time>
                            <span className="text-gray-600">• 8 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TYT Matematik Konuları 2027: Problemler, Geometri ve Yol Haritası
                        </h1>

export const metadata: Metadata = {
    title: 'TYT Matematik Konuları 2027: Problemler, Geometri ve Yol Haritası',
    description: 'TYT Matematik\'te hangi konular çıkıyor? Problemler krallığı, yeni nesil geometri ve konu öncelik yol haritası. 2027 ÖSYM güncel rehber.',
    keywords: 'tyt matematik konuları, tyt matematik 2027, tyt problemler, tyt geometri, ebob ekok, yks matematik',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-matematik-konulari' },
    openGraph: {
        title: 'TYT Matematik Konuları 2027: Problemler, Geometri ve Yol Haritası',
        description: 'TYT Matematik\'te hangi konular çıkıyor? Problemler, geometri ve konu öncelik yol haritası.',
        type: 'article',
        publishedTime: '2027-02-19',
        url: 'https://yksnethesapla.com/blog/tyt-matematik-konulari',
    },
}

export default function TYTMatematikKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Matematik Konuları</span>
                    </nav>
                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">TYT</span>
                            <time className="text-gray-600">19 Şubat 2027</time>
                            <span className="text-gray-600">• 8 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TYT Matematik Konuları 2027: Problemler, Geometri ve Yol Haritası
                        </h1>
                        <p className="text-xl text-gray-700">
                            TYT Matematik = Problemler. 40 sorunun 12-14&apos;ü doğrudan problem sorusudur.
                            Bu gerçeği bilerek hazırlanmak, rakiplerinizden bir adım önde olmanızı sağlar.
                        </p>
                    </header>

                    <AuthorProfile />
        </div>
    )
}
