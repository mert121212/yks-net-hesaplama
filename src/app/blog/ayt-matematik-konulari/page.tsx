import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'AYT Matematik Konuları 2027: LTİ, Fonksiyonlar ve Eleme Sınavı Rehberi',
    description: 'AYT Matematik\'te Limit, Türev, İntegral (LTİ) ve Fonksiyonlar nasıl çalışılır? SAY öğrencileri için 2027 ÖSYM güncel konu rehberi ve strateji.',
    keywords: 'ayt matematik konuları, ayt matematik 2027, limit türev integral, fonksiyonlar, say matematik, yks matematik',
    alternates: { canonical: 'https://yksnethesapla.com/blog/ayt-matematik-konulari' },
    openGraph: {
        title: 'AYT Matematik Konuları 2027: LTİ, Fonksiyonlar ve Eleme Sınavı Rehberi',
        description: 'AYT Matematik\'te LTİ ve Fonksiyonlar nasıl çalışılır? SAY öğrencileri için güncel rehber.',
        type: 'article',
        publishedTime: '2027-02-18',
        url: 'https://yksnethesapla.com/blog/ayt-matematik-konulari',
    },
}

export default function AYTMatematikKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">AYT Matematik Konuları</span>
                    </nav>
                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AYT</span>
                            <time className="text-gray-600">18 Şubat 2027</time>
                            <span className="text-gray-600">• 9 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">

export const metadata: Metadata = {
    title: 'AYT Matematik Konuları 2027: LTİ, Fonksiyonlar ve Eleme Sınavı Rehberi',
    description: 'AYT Matematik\'te Limit, Türev, İntegral (LTİ) ve Fonksiyonlar nasıl çalışılır? SAY öğrencileri için 2027 ÖSYM güncel konu rehberi ve strateji.',
    keywords: 'ayt matematik konuları, ayt matematik 2027, limit türev integral, fonksiyonlar, say matematik, yks matematik',
    alternates: { canonical: 'https://yksnethesapla.com/blog/ayt-matematik-konulari' },
    openGraph: {
        title: 'AYT Matematik Konuları 2027: LTİ, Fonksiyonlar ve Eleme Sınavı Rehberi',
        description: 'AYT Matematik\'te LTİ ve Fonksiyonlar nasıl çalışılır? SAY öğrencileri için güncel rehber.',
        type: 'article',
        publishedTime: '2027-02-18',
        url: 'https://yksnethesapla.com/blog/ayt-matematik-konulari',
    },
}

export default function AYTMatematikKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">AYT Matematik Konuları</span>
                    </nav>
                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AYT</span>
                            <time className="text-gray-600">18 Şubat 2027</time>
                            <span className="text-gray-600">• 9 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            AYT Matematik Konuları 2027: LTİ, Fonksiyonlar ve Eleme Sınavı Rehberi
                        </h1>
                        <p className="text-xl text-gray-700">
                            AYT Matematik bir &quot;bilgi sınavı&quot;dır, TYT ise &quot;hız sınavı&quot;. Bu farkı kavramadan
                            hazırlanan adaylar, bildikleri soruları bile çözemeden çıkar.
                        </p>
                    </header>

                    <AuthorProfile />
        </div>
    )
}
