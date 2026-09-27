import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'YKS Blog | Net Artırma Taktikleri ve Sınav Rehberleri',
    description: '2027 YKS hazırlığında masada işe yarayan net taktikleri, güncel ÖSYM katsayıları, tercih rehberleri ve çalışma stratejileri.',
    keywords: 'yks blog, yks hazırlık, tyt hazırlık, ayt hazırlık, üniversite tercih, yks ipuçları',
    alternates: { canonical: 'https://yksnethesapla.com/blog' },
}

const blogPosts = [
    {
        id: 'tyt-turkce-paragraf-teknikleri',
        title: 'TYT Türkçe Paragraf Çözme Teknikleri',
        excerpt: 'Paragraf sorularında süre yönetimi, ilk ve son cümle okuma tekniği ve soru kökü analizi. 40 sorunun 24\'ü bu alandan geliyor.',
        date: '2026-09-10',
        category: 'TYT',
        readTime: '12 dakika',
    },
    {
        id: 'yks-son-3-ay-calisma-plani',
        title: 'YKS Son 3 Ay Çalışma Programı',
        excerpt: 'Sınava 90 gün kala haftalık plan nasıl kurulur, TYT-AYT dengesi nasıl sağlanır, çıkmış sorulara ne zaman geçilir.',
        date: '2026-09-10',
        category: 'Strateji',
        readTime: '11 dakika',
    },
    {
        id: 'sifirdan-tyt-matematik-calisma-rehberi',
        title: 'Sıfırdan TYT Matematik Çalışma Rehberi',
        excerpt: 'Matematik temeli zayıf olanlar için konu sırası, günlük soru sayısı ve problem çözme rutini.',
        date: '2026-09-10',
        category: 'TYT',
        readTime: '12 dakika',
    },
    {
        id: 'obp-hesaplama',
        title: 'OBP Hesaplama: Diploma Notunun Yerleştirme Puanına Etkisi',
        excerpt: 'Lise diploma notunun YKS puanına katkısı, 0,12 ve 0,06 katsayı farkı, kırık OBP koşulları.',
        date: '2026-02-24',
        category: 'Rehber',
        readTime: '9 dakika',
    },
    {
        id: 'yks-kac-net-kac-puan',
        title: 'YKS Net-Puan Tablosu: Kaç Net Kaç Puan Getirir?',
        excerpt: 'Geçmiş yılların ÖSYM katsayılarıyla TYT ve AYT net-puan dönüşümleri. Bölüm bazlı ortalama net değerleri.',
        date: '2026-02-22',
        category: 'Rehber',
        readTime: '12 dakika',
    },
    {
        id: 'yks-hazirlik-programi',
        title: 'YKS Çalışma Programı ve Verimli Ders Çalışma Yöntemleri',
        excerpt: 'Aralıklı tekrar, soru çözüm rutini ve Pomodoro yöntemiyle günlük çalışma planı oluşturma.',
        date: '2026-02-20',
        category: 'Hazırlık',
        readTime: '14 dakika',
    },
    {
        id: 'tyt-matematik-konulari',
        title: 'TYT Matematik Konu Dağılımı ve Çalışma Sırası',
        excerpt: 'Son 5 yılın ÖSYM soru dağılımı. Hangi konular sık çıkıyor, hangi sırayla çalışılmalı.',
        date: '2026-02-19',
        category: 'TYT',
        readTime: '14 dakika',
    },
    {
        id: 'ayt-matematik-konulari',
        title: 'AYT Matematik Konu Dağılımı ve Çalışma Planı',
        excerpt: 'Limit, Türev, İntegral ve Trigonometri ağırlıkları. AYT Matematik soru dağılımı ve çalışma sırası.',
        date: '2026-02-18',
        category: 'AYT',
        readTime: '14 dakika',
    },
    {
        id: 'yks-edebiyat-konulari',
        title: 'AYT Edebiyat Konu Dağılımı ve Dönem Çalışma Rehberi',
        excerpt: 'Divan, Tanzimat, Servet-i Fünun ve Cumhuriyet dönemi eser-yazar eşleştirmeleri. ÖSYM\'nin sık sorduğu konular.',
        date: '2026-02-17',
        category: 'Edebiyat',
        readTime: '14 dakika',
    },
    {
        id: 'yks-net-hesaplama-nasil-yapilir',
        title: 'YKS Net Hesaplama Nasıl Yapılır?',
        excerpt: '4 yanlış 1 doğru kuralı, test katsayıları, standart sapma ve puan dönüşüm formülü.',
        date: '2026-02-15',
        category: 'Rehber',
        readTime: '10 dakika',
    },
    {
        id: 'yks-2027-basvuru-tarihleri',
        title: 'YKS 2027 Başvuru Tarihleri, Sınav Takvimi ve Ücretler',
        excerpt: 'ÖSYM başvuru adımları, e-Devlet kayıt işlemi, geç başvuru günü ve sınav günü bilgileri.',
        date: '2026-02-14',
        category: 'Takvim',
        readTime: '8 dakika',
    },
    {
        id: 'yks-1-net-kac-kisi-atar',
        title: 'YKS\'de 1 Net Kaç Kişi Öne Atar?',
        excerpt: 'Sıralama bandına göre 1 netin değeri: İlk 10 bin, 50-150 bin yığılma bölgesi ve AYT-TYT farkı.',
        date: '2026-02-13',
        category: 'İstatistik',
        readTime: '10 dakika',
    },
    {
        id: 'tyt-net-hesaplama-rehberi',
        title: 'TYT Net Hesaplama Rehberi: Test Ağırlıkları ve Katsayılar',
        excerpt: 'TYT testlerinin ağırlıkları (Türkçe %33, Matematik %33, Fen %17, Sosyal %17) ve net hesaplama mantığı.',
        date: '2026-02-12',
        category: 'TYT',
        readTime: '9 dakika',
    },
    {
        id: 'tyt-kesin-cikan-konular',
        title: 'TYT\'de Her Yıl Çıkan Konular (Son 7 Yıl Analizi)',
        excerpt: 'ÖSYM\'nin 2018-2025 verilerine göre Türkçe, Matematik, Fen ve Sosyal\'de düzenli tekrarlayan konular.',
        date: '2026-02-11',
        category: 'Analiz',
        readTime: '12 dakika',
    },
    {
        id: 'tyt-net-artirma-taktikleri',
        title: 'TYT Net Artırma: 60-70 Bandından Nasıl Çıkılır?',
        excerpt: 'Deneme analiz yöntemi, günlük paragraf-problem rutini ve branş denemesi kullanımı.',
        date: '2026-02-10',
        category: 'Taktik',
        readTime: '11 dakika',
    },
    {
        id: 'ayt-puan-hesaplama',
        title: 'AYT Puan Hesaplama: Test Ağırlıkları ve Katsayılar',
        excerpt: 'SAY, EA ve SÖZ puan türlerinde hangi testler ne kadar ağırlık taşıyor. AYT\'nin %60 katkısı.',
        date: '2026-02-09',
        category: 'Rehber',
        readTime: '9 dakika',
    },
    {
        id: 'universite-tercih-stratejileri',
        title: 'Üniversite Tercih Rehberi: Sıralama Bazlı Tercih Nasıl Yapılır?',
        excerpt: 'Puanla değil sıralamayla tercih yapma, boş tercih riskini önleme ve YÖK Atlas kullanımı.',
        date: '2026-02-08',
        category: 'Tercih',
        readTime: '10 dakika',
    },
    {
        id: 'yks-yigilma-tehlikesi',
        title: 'YKS\'de Yığılma Nedir ve Sıralamayı Nasıl Etkiler?',
        excerpt: '50.000-150.000 sıralama aralığındaki yığılma, kolay ve zor sınav farkları ve OBP\'nin etkisi.',
        date: '2026-02-07',
        category: 'Analiz',
        readTime: '9 dakika',
    },
    {
        id: 'yks-puan-turleri',
        title: 'YKS Puan Türleri: TYT, SAY, EA, SÖZ ve DİL',
        excerpt: 'Her puan türü hangi bölümlerde geçerli, hangi testlerden hesaplanıyor. Bölüm bazlı puan türü tablosu.',
        date: '2026-02-06',
        category: 'Temel Bilgi',
        readTime: '10 dakika',
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
                        YKS hazırlığında işe yarayan çalışma yöntemleri, güncel ÖSYM katsayıları ve sınav rehberleri.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 text-sm">
                        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
                            📚 {blogPosts.length} Makale
                        </span>
                        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">
                            ✓ Ücretsiz İçerik
                        </span>
                        <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">
                            🎯 2027 Güncel
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
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Bu Blog Neden Var?</h2>
                        <p className="text-gray-700 mb-4">
                            Sınava hazırlanırken internette dolaşıyorsun, bir sürü site &quot;şunu yap, bunu yap&quot; diyor ama
                            hiçbiri somut konuşmuyor. &quot;Bol soru çözün&quot; demek kolay da, hangi konudan başlayacaksın?
                            Netin neden 3 haftadır kıpırdamıyor? AYT&apos;de 30 netten 45&apos;e nasıl çıkacaksın? İşte bu
                            yazıları tam olarak bu sorulara cevap vermek için yazıyoruz.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Buradaki her şey ücretsiz ve 2027 sınavına göre güncel. Yeni yazılar da eklemeye devam ediyoruz.
                            Bir konuda takıldıysan veya &quot;şunu da yazın&quot; demek istiyorsan iletişim sayfasından bize yaz, gerçekten okuyoruz.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6">
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">YKS Hazırlık</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">TYT Taktikleri</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">AYT Strateji</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Tercih Rehberi</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Net Hesaplama</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


