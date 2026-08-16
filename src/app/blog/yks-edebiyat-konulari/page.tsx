import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'TYT Türkçe ve AYT Edebiyat Konuları 2027: Nokta Atışı Rehber',
    description: 'TYT\'de sadece Anlam ve Dil Bilgisi çıkar. AYT Edebiyat\'ta Cumhuriyet Dönemi, edebi sanatlar ve yazar-eser kartları. 0,5 net şartı ve 2027 ÖSYM güncel rehber.',
    keywords: 'yks edebiyat konuları, tyt türkçe, ayt edebiyat 2027, cumhuriyet dönemi edebiyatı, edebi sanatlar, yazar eser',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari' },
    openGraph: {
        title: 'TYT Türkçe ve AYT Edebiyat Konuları 2027: Nokta Atışı Rehber',
        description: 'TYT Türkçe ve AYT Edebiyat konuları, Cumhuriyet Dönemi şifresi ve edebi sanatlar rehberi.',
        type: 'article',
        publishedTime: '2027-02-17',
        url: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari',
    },
}

export default function YKSEdebiyatKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Edebiyat Konuları</span>
                    </nav>
                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Dersler</span>
                            <time className="text-gray-600">17 Şubat 2027</time>
                            <span className="text-gray-600">• 8 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">

export const metadata: Metadata = {
    title: 'TYT Türkçe ve AYT Edebiyat Konuları 2027: Nokta Atışı Rehber',
    description: 'TYT\'de sadece Anlam ve Dil Bilgisi çıkar. AYT Edebiyat\'ta Cumhuriyet Dönemi, edebi sanatlar ve yazar-eser kartları. 0,5 net şartı ve 2027 ÖSYM güncel rehber.',
    keywords: 'yks edebiyat konuları, tyt türkçe, ayt edebiyat 2027, cumhuriyet dönemi edebiyatı, edebi sanatlar, yazar eser',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari' },
    openGraph: {
        title: 'TYT Türkçe ve AYT Edebiyat Konuları 2027: Nokta Atışı Rehber',
        description: 'TYT Türkçe ve AYT Edebiyat konuları, Cumhuriyet Dönemi şifresi ve edebi sanatlar rehberi.',
        type: 'article',
        publishedTime: '2027-02-17',
        url: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari',
    },
}

export default function YKSEdebiyatKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Edebiyat Konuları</span>
                    </nav>
                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Dersler</span>
                            <time className="text-gray-600">17 Şubat 2027</time>
                            <span className="text-gray-600">• 8 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TYT Türkçe ve AYT Edebiyat Konuları 2027: Nokta Atışı Rehber
                        </h1>
                        <p className="text-xl text-gray-700">
                            &quot;YKS Edebiyat&quot; diye tek bir ders yoktur. TYT&apos;de Türkçe, AYT&apos;de Edebiyat ayrı sınavlardır
                            ve tamamen farklı konular içerir. Bu ayrımı bilmeden çalışmak zaman kaybıdır.
                        </p>
                    </header>

                    <AuthorProfile />
        </div>
    )
}
