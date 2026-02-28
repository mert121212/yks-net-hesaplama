import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'YKS Blog | YKS Hazırlık Rehberleri ve İpuçları',
    description: 'YKS 2026 hazırlık rehberleri, üniversite tercih ipuçları, sınav stratejileri ve daha fazlası. TYT, AYT, YDT konularında detaylı makaleler.',
    keywords: 'yks blog, yks hazırlık, tyt hazırlık, ayt hazırlık, üniversite tercih, yks ipuçları',
}

const blogPosts = [
    {
        id: 'yks-net-hesaplama-nasil-yapilir',
        title: 'YKS Net Hesaplama Nasıl Yapılır? 2026 Güncel Rehber',
        excerpt: 'YKS net hesaplama işlemini adım adım öğrenin. TYT, AYT ve YDT netlerinizi doğru hesaplayarak üniversite puanınızı öğrenin.',
        date: '2026-02-28',
        category: 'Rehber',
        readTime: '8 dakika',
    },
]

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        YKS Blog
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        YKS hazırlık sürecinizde size yardımcı olacak rehberler, ipuçları ve stratejiler
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.id}`}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                        {post.category}
                                    </span>
                                    <span className="text-sm text-gray-500">{post.readTime}</span>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">
                                        {new Date(post.date).toLocaleDateString('tr-TR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </span>
                                    <span className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                                        Devamını Oku →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
                    <h2 className="text-2xl font-bold mb-4">
                        YKS Net Hesaplama Aracımızı Denediniz mi?
                    </h2>
                    <p className="mb-6 text-blue-100">
                        TYT, AYT ve YDT netlerinizi girerek üniversite puanınızı hemen hesaplayın
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                        Hemen Hesapla
                    </Link>
                </div>
            </div>
        </div>
    )
}
