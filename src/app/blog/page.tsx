'use client'

import Link from 'next/link'
import { Calculator, Calendar, BookOpen, TrendingUp } from 'lucide-react'

const blogPosts = [
    {
        id: 'yks-2026-degisiklikler',
        title: 'YKS 2026 Değişiklikleri ve Yenilikler',
        excerpt: 'YKS 2026 sınavında yapılan değişiklikler, yeni soru türleri ve önemli tarihler.',
        date: '2024-01-15',
        readTime: '5 dk',
        category: 'YKS Haberleri'
    },
    {
        id: 'tyt-matematik-calisma-rehberi',
        title: 'TYT Matematik Çalışma Rehberi',
        excerpt: 'TYT matematik konuları, çalışma stratejileri ve net artırma teknikleri.',
        date: '2024-01-10',
        readTime: '8 dk',
        category: 'Çalışma Rehberi'
    },
    {
        id: 'ayt-fen-bilimleri-taktikleri',
        title: 'AYT Fen Bilimleri Taktikleri',
        excerpt: 'Fizik, kimya ve biyoloji sorularında başarı için pratik ipuçları.',
        date: '2024-01-05',
        readTime: '6 dk',
        category: 'Sınav Taktikleri'
    },
    {
        id: 'universite-tercih-rehberi',
        title: 'Üniversite Tercih Rehberi 2026',
        excerpt: 'Doğru üniversite ve bölüm seçimi için kapsamlı rehber.',
        date: '2024-01-01',
        readTime: '10 dk',
        category: 'Tercih Rehberi'
    }
]

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                            <Calculator className="h-8 w-8 text-primary-600" />
                            <h1 className="text-xl font-bold text-gray-900">YKS Net Hesaplama</h1>
                        </Link>
                        <nav className="flex space-x-6">
                            <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                                Ana Sayfa
                            </Link>
                            <Link href="/geri-sayim" className="text-gray-600 hover:text-primary-600 transition-colors">
                                Geri Sayım
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        YKS Blog
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        YKS sınavı, net hesaplama ve üniversite tercih süreçleri hakkında güncel bilgiler.
                    </p>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <Calendar className="h-4 w-4 mr-1" />
                                        {new Date(post.date).toLocaleDateString('tr-TR')}
                                    </div>
                                </div>

                                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                                    <Link href={`/blog/${post.id}`}>
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <BookOpen className="h-4 w-4 mr-1" />
                                        {post.readTime} okuma
                                    </div>
                                    <Link
                                        href={`/blog/${post.id}`}
                                        className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                                    >
                                        Devamını Oku →
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">Net Hesaplama Yapmaya Başla!</h2>
                    <p className="text-primary-100 mb-6">
                        YKS 2026 için netlerinizi hesaplayın ve üniversite puanlarınızı öğrenin.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <Calculator className="h-5 w-5 mr-2" />
                        Net Hesaplama Aracı
                    </Link>
                </div>
            </main>
        </div>
    )
}