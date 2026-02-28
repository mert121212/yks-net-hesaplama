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
    {
        id: 'tyt-net-hesaplama-rehberi',
        title: 'TYT Net Hesaplama: Adım Adım Kılavuz 2026',
        excerpt: 'TYT sınavında net hesaplama nasıl yapılır? Türkçe, Matematik, Fen ve Sosyal netlerinizi doğru hesaplayın.',
        date: '2026-02-27',
        category: 'TYT',
        readTime: '6 dakika',
    },
    {
        id: 'ayt-puan-hesaplama',
        title: 'AYT Puan Hesaplama: SAY, EA, SÖZ, DİL Puanları',
        excerpt: 'AYT sınavında SAY, EA, SÖZ ve DİL puanları nasıl hesaplanır? Detaylı formüller ve örneklerle öğrenin.',
        date: '2026-02-26',
        category: 'AYT',
        readTime: '7 dakika',
    },
    {
        id: 'yks-puan-turleri',
        title: 'YKS Puan Türleri: SAY, EA, SÖZ, DİL Nedir?',
        excerpt: 'YKS\'de 4 farklı puan türü var. SAY, EA, SÖZ ve DİL puan türlerini detaylı inceleyin ve size uygun olanı seçin.',
        date: '2026-02-25',
        category: 'Rehber',
        readTime: '5 dakika',
    },
    {
        id: 'obp-hesaplama',
        title: 'OBP (Ortaöğretim Başarı Puanı) Nedir? Nasıl Hesaplanır?',
        excerpt: 'Lise diploma notunuzun YKS puanınıza etkisi nedir? OBP hesaplama formülü ve örnekleri.',
        date: '2026-02-24',
        category: 'Rehber',
        readTime: '5 dakika',
    },
    {
        id: 'yks-2026-basvuru-tarihleri',
        title: 'YKS 2026 Başvuru Tarihleri ve Takvimi',
        excerpt: 'YKS 2026 başvuru tarihleri, sınav tarihleri ve sonuç açıklama tarihleri. Tüm önemli tarihler burada.',
        date: '2026-02-23',
        category: 'Takvim',
        readTime: '4 dakika',
    },
    {
        id: 'yks-kac-net-kac-puan',
        title: 'YKS\'de Kaç Net Kaç Puan Eder? 2026 Tablosu',
        excerpt: 'TYT ve AYT\'de kaç net yaparsanız kaç puan alırsınız? Net-puan dönüşüm tablosu ve hesaplama.',
        date: '2026-02-22',
        category: 'Rehber',
        readTime: '6 dakika',
    },
    {
        id: 'universite-tercih-stratejileri',
        title: 'Üniversite Tercih Stratejileri: Doğru Tercih Nasıl Yapılır?',
        excerpt: 'YKS sonrası üniversite tercihi yaparken nelere dikkat etmelisiniz? Tercih stratejileri ve ipuçları.',
        date: '2026-02-21',
        category: 'Tercih',
        readTime: '9 dakika',
    },
    {
        id: 'yks-hazirlik-programi',
        title: 'YKS\'ye Nasıl Hazırlanılır? Çalışma Programı',
        excerpt: 'Etkili bir YKS hazırlık programı nasıl yapılır? Günlük, haftalık ve aylık çalışma planları.',
        date: '2026-02-20',
        category: 'Hazırlık',
        readTime: '10 dakika',
    },
    {
        id: 'tyt-matematik-konulari',
        title: 'TYT Matematik Konuları ve Soru Dağılımı 2026',
        excerpt: 'TYT Matematik sınavında hangi konular çıkıyor? Konu dağılımı ve çalışma stratejileri.',
        date: '2026-02-19',
        category: 'TYT',
        readTime: '7 dakika',
    },
    {
        id: 'ayt-matematik-konulari',
        title: 'AYT Matematik Konuları: SAY Öğrencileri İçin Rehber',
        excerpt: 'AYT Matematik sınavına nasıl hazırlanılır? Tüm konular, formüller ve çözüm teknikleri.',
        date: '2026-02-18',
        category: 'AYT',
        readTime: '8 dakika',
    },
    {
        id: 'yks-edebiyat-konulari',
        title: 'YKS Edebiyat Konuları ve Çalışma Taktikleri',
        excerpt: 'TYT ve AYT Edebiyat konuları nelerdir? Etkili çalışma yöntemleri ve ipuçları.',
        date: '2026-02-17',
        category: 'Dersler',
        readTime: '7 dakika',
    },
]

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        YKS Blog & Rehberler
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                        YKS hazırlık sürecinizde size yardımcı olacak rehberler, ipuçları ve stratejiler
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 text-sm">
                        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
                            📚 {blogPosts.length} Makale
                        </span>
                        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">
                            ✓ Ücretsiz İçerik
                        </span>
                        <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">
                            🎯 2026 Güncel
                        </span>
                    </div>
                </div>

                {/* Featured Post */}
                <div className="mb-12">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="p-8 md:p-12 text-white">
                            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                                ⭐ Öne Çıkan
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                {blogPosts[0].title}
                            </h2>
                            <p className="text-blue-100 text-lg mb-6">
                                {blogPosts[0].excerpt}
                            </p>
                            <div className="flex items-center space-x-4 mb-6">
                                <span className="text-sm text-blue-200">
                                    {new Date(blogPosts[0].date).toLocaleDateString('tr-TR', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </span>
                                <span className="text-sm text-blue-200">•</span>
                                <span className="text-sm text-blue-200">{blogPosts[0].readTime}</span>
                            </div>
                            <Link
                                href={`/blog/${blogPosts[0].id}`}
                                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                            >
                                Hemen Oku →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Tüm Makaleler</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.slice(1).map((post) => (
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
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">
                                            {new Date(post.date).toLocaleDateString('tr-TR', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </span>
                                        <span className="text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                                            Devamını Oku →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Categories Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Kategoriler</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-blue-50 p-6 rounded-xl text-center hover:bg-blue-100 transition-colors cursor-pointer">
                            <div className="text-3xl mb-2">📖</div>
                            <h3 className="font-semibold text-gray-900">Rehberler</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                {blogPosts.filter(p => p.category === 'Rehber').length} makale
                            </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl text-center hover:bg-green-100 transition-colors cursor-pointer">
                            <div className="text-3xl mb-2">📝</div>
                            <h3 className="font-semibold text-gray-900">TYT</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                {blogPosts.filter(p => p.category === 'TYT').length} makale
                            </p>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-xl text-center hover:bg-purple-100 transition-colors cursor-pointer">
                            <div className="text-3xl mb-2">🎯</div>
                            <h3 className="font-semibold text-gray-900">AYT</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                {blogPosts.filter(p => p.category === 'AYT').length} makale
                            </p>
                        </div>
                        <div className="bg-orange-50 p-6 rounded-xl text-center hover:bg-orange-100 transition-colors cursor-pointer">
                            <div className="text-3xl mb-2">💡</div>
                            <h3 className="font-semibold text-gray-900">Diğer</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                {blogPosts.filter(p => !['Rehber', 'TYT', 'AYT'].includes(p.category)).length} makale
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        YKS Net Hesaplama Aracımızı Denediniz mi?
                    </h2>
                    <p className="text-xl mb-6 text-blue-100">
                        TYT, AYT ve YDT netlerinizi girerek üniversite puanınızı hemen hesaplayın
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                    >
                        Ücretsiz Hesapla →
                    </Link>
                </div>

                {/* SEO Content */}
                <div className="mt-12 prose prose-lg max-w-none">
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">YKS Blog Hakkında</h2>
                        <p className="text-gray-700 mb-4">
                            YKS Net Hesaplama blog sayfamızda, YKS 2026 sınavına hazırlanan öğrenciler için
                            hazırladığımız kapsamlı rehberler, ipuçları ve stratejileri bulabilirsiniz.
                            TYT net hesaplama, AYT puan hesaplama, üniversite tercih stratejileri ve daha
                            fazlası hakkında detaylı makaleler.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Tüm içeriklerimiz ücretsiz ve 2026 YKS sınavı için günceldir. Düzenli olarak
                            yeni makaleler ekliyoruz. YKS hazırlık sürecinizde başarılar dileriz!
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6">
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">YKS Blog</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">YKS Rehberi</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">TYT Hazırlık</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">AYT Hazırlık</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Üniversite Tercih</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
