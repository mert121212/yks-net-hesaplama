import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS Puan Türleri: SAY, EA, SÖZ, DİL ve Başarı Sırası Barajları 2027',
    description: 'YKS\'de 4 farklı puan türü ve başarı sırası barajları. SAY, EA, SÖZ ve DİL puan türlerini, hangi bölümlerin hangi sıralama şartı aradığını öğrenin.',
    keywords: 'yks puan türleri, say puanı, ea puanı, söz puanı, dil puanı, başarı sırası barajı, tıp sıralaması',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-puan-turleri' },
    openGraph: {
        title: 'YKS Puan Türleri: SAY, EA, SÖZ, DİL ve Başarı Sırası Barajları 2027',
        description: 'YKS\'de 4 farklı puan türü ve başarı sırası barajları. Hangi bölüm hangi sıralama şartı arıyor?',
        type: 'article',
        publishedTime: '2027-02-25',
        url: 'https://yksnethesapla.com/blog/yks-puan-turleri',
    },
}

export default function YKSPuanTurleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Puan Türleri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600">25 Şubat 2027</time>
                            <span className="text-gray-600">• 6 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS Puan Türleri: SAY, EA, SÖZ, DİL ve Başarı Sırası Barajları
                        </h1>

export const metadata: Metadata = {
    title: 'YKS Puan Türleri: SAY, EA, SÖZ, DİL ve Başarı Sırası Barajları 2027',
    description: 'YKS\'de 4 farklı puan türü ve başarı sırası barajları. SAY, EA, SÖZ ve DİL puan türlerini, hangi bölümlerin hangi sıralama şartı aradığını öğrenin.',
    keywords: 'yks puan türleri, say puanı, ea puanı, söz puanı, dil puanı, başarı sırası barajı, tıp sıralaması',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-puan-turleri' },
    openGraph: {
        title: 'YKS Puan Türleri: SAY, EA, SÖZ, DİL ve Başarı Sırası Barajları 2027',
        description: 'YKS\'de 4 farklı puan türü ve başarı sırası barajları. Hangi bölüm hangi sıralama şartı arıyor?',
        type: 'article',
        publishedTime: '2027-02-25',
        url: 'https://yksnethesapla.com/blog/yks-puan-turleri',
    },
}

export default function YKSPuanTurleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Puan Türleri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600">25 Şubat 2027</time>
                            <span className="text-gray-600">• 6 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS Puan Türleri: SAY, EA, SÖZ, DİL ve Başarı Sırası Barajları
                        </h1>
                        <p className="text-xl text-gray-700">
                            YKS&apos;de sadece puan almak yetmez. Hedeflediğiniz bölümün hangi puan türüyle
                            ve hangi başarı sırası barajıyla öğrenci aldığını bilmeniz gerekir.
                        </p>
                    </header>

                    <AuthorProfile />
            </article>
        </div>
    )
}
