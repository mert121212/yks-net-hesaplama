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
        id: 'deneme-netleri-nasil-degerlendirilir',
        title: 'Deneme Netleri Nasıl Yorumlanır? Gerçek Sınavda Kaç Net Gelir?',
        excerpt: 'Yayın denemeleri ile ÖSYM arasındaki farklar, net dalgalanmalarının sebepleri ve profesyonel deneme analiz defteri tutma yöntemi.',
        date: '2026-10-29',
        category: 'Taktik',
        readTime: '11 dakika',
    },
    {
        id: 'hangi-puan-turu-hangi-bolum',
        title: 'Hangi Puan Türü Hangi Bölüme Götürür? 2027 Tercih Pusulası',
        excerpt: 'SAY, EA, SÖZ ve DİL ile alan popüler bölümler, mesleklerin kariyer potansiyeli ve YÖK başarı sırası barajları.',
        date: '2026-10-29',
        category: 'Tercih',
        readTime: '12 dakika',
    },
    {
        id: 'tyt-sure-yetistirme-turlama-taktigi',
        title: 'TYT Süre Yetiştirme ve Turlama Taktiği: 165 Dakika Yönetimi',
        excerpt: 'Sınavda süre yetmiyor mu? Türkçe ve Matematikte takılmadan 120 sorunun tamamını görmenizi sağlayan 2 turlu sınav stratejisi.',
        date: '2026-10-29',
        category: 'Strateji',
        readTime: '10 dakika',
    },
    {
        id: 'tyt-turkce-paragraf-teknikleri',
        title: 'TYT Türkçe Paragraf Çözme Teknikleri: Hız ve 35+ Net Rehberi',
        excerpt: 'Paragraf sorularında aynı metni 3 kere okumaktan kurtulun. Hızlanma taktikleri, soru kökü analizi ve günlük 20 paragraf rutini.',
        date: '2026-10-29',
        category: 'TYT',
        readTime: '10 dakika',
    },
    {
        id: 'yks-son-3-ay-calisma-plani',
        title: 'YKS Son 3 Ay Çalışma Programı: 90 Günde Netleri Zirveye Taşıma',
        excerpt: 'Sınava 90 gün kala konu çalışmayı bırakıp deneme sistemine geçiş. Mart-Haziran 3 aşamalı yol haritası ve çıkmış soru maratonu.',
        date: '2026-10-29',
        category: 'Strateji',
        readTime: '10 dakika',
    },
    {
        id: 'sifirdan-tyt-matematik-calisma-rehberi',
        title: 'Sıfırdan TYT Matematik: 0 Netten 20 Nete Gerçekçi Yol Haritası',
        excerpt: 'Matematik temeli zayıf olanlar için 4 aşamalı plan. Seviyeye göre kitap seçimi, 3 dakika kuralı ve günlük problem rutini.',
        date: '2026-10-29',
        category: 'TYT',
        readTime: '10 dakika',
    },
    {
        id: 'obp-hesaplama',
        title: 'OBP Hesaplama: Diploma Notunun Yerleştirme Puanına Etkisi',
        excerpt: 'Lise diploma notunun YKS puanına katkısı, 0,12 ve 0,06 katsayı farkı, kırık OBP koşulları ve puan dönüşüm formülü.',
        date: '2026-10-29',
        category: 'Rehber',
        readTime: '9 dakika',
    },
    {
        id: 'yks-kac-net-kac-puan',
        title: 'YKS Net-Puan Tablosu: Kaç Net Kaç Puan Getirir?',
        excerpt: 'Geçmiş yılların ÖSYM katsayılarıyla TYT ve AYT net-puan dönüşümleri. Bölüm bazlı ortalama net değerleri ve hedef cetveli.',
        date: '2026-10-29',
        category: 'Rehber',
        readTime: '12 dakika',
    },
    {
        id: 'yks-hazirlik-programi',
        title: 'YKS Hazırlık Programı: 3 Günde Çöpe Gitmeyen Görev Odaklı Düzen',
        excerpt: 'Saatli çizelgeler neden patlar? 12. sınıf ve mezunlar için görev odaklı çalışma şablonu, TYT-AYT dengelemesi ve telafi kuralı.',
        date: '2026-10-29',
        category: 'Hazırlık',
        readTime: '10 dakika',
    },
    {
        id: 'tyt-matematik-konulari',
        title: 'TYT Matematik Konu Dağılımı ve Çalışma Sırası',
        excerpt: 'Son 7 yılın ÖSYM soru dağılımı. Hangi konular garanti net getiriyor, hangi sırayla çalışılmalı, geometri tüyoları.',
        date: '2026-10-29',
        category: 'TYT',
        readTime: '14 dakika',
    },
    {
        id: 'ayt-matematik-konulari',
        title: 'AYT Matematik Konu Dağılımı ve Çalışma Planı',
        excerpt: 'Limit, Türev, İntegral ve Trigonometri ağırlıkları. AYT Matematik 40 soru anatomisi ve LTİ çalışma zinciri.',
        date: '2026-10-29',
        category: 'AYT',
        readTime: '14 dakika',
    },
    {
        id: 'yks-edebiyat-konulari',
        title: 'AYT Edebiyat Konu Dağılımı ve 24 Soru Anatomisi',
        excerpt: 'Divan, Tanzimat, Servet-i Fünun ve Cumhuriyet dönemi eser-yazar kartları. ÖSYM\'nin en sık sorduğu şairler.',
        date: '2026-10-29',
        category: 'Edebiyat',
        readTime: '12 dakika',
    },
    {
        id: 'yks-net-hesaplama-nasil-yapilir',
        title: 'YKS Net Hesaplama Nasıl Yapılır? 4 Yanlış 1 Doğru Kuralı',
        excerpt: 'Net hesaplama formülü, 0,25 ceza puanının perde arkası, sallama ikilemi ve ham puandan sıralamaya geçiş.',
        date: '2026-10-29',
        category: 'Rehber',
        readTime: '9 dakika',
    },
    {
        id: 'yks-2027-basvuru-tarihleri',
        title: 'YKS 2027 Başvuru Tarihleri, Sınav Takvimi ve Ücretler',
        excerpt: 'ÖSYM AİS başvuru adımları, sınav takvimi, geç başvuru %50 zam uyarısı ve sınav günü kuralları.',
        date: '2026-10-29',
        category: 'Takvim',
        readTime: '8 dakika',
    },
    {
        id: 'yks-1-net-kac-kisi-atar',
        title: 'YKS\'de 1 Net Kaç Kişi Öne Atar? Sıralama ve Yığılma Analizi',
        excerpt: 'Sıralama bandına göre 1 netin değeri: İlk 10 bin, 50-150 bin yığılma bölgesi ve AYT-TYT katsayı farkı.',
        date: '2026-10-29',
        category: 'İstatistik',
        readTime: '9 dakika',
    },
    {
        id: 'tyt-net-hesaplama-rehberi',
        title: 'TYT Net Hesaplama Rehberi: Test Ağırlıkları ve Katsayılar',
        excerpt: 'TYT testlerinin ağırlıkları (%33 Türkçe, %33 Matematik, %17 Fen, %17 Sosyal), 0,5 net baraj şartı ve puan simülatörü.',
        date: '2026-10-29',
        category: 'TYT',
        readTime: '8 dakika',
    },
    {
        id: 'tyt-kesin-cikan-konular',
        title: 'TYT\'de Her Yıl İstisnasız Çıkan Banko Konular (120 Soru Analizi)',
        excerpt: 'ÖSYM\'nin son 7 yıllık verilerine göre Türkçe, Matematik, Fen ve Sosyal testlerinde en az 70 net getiren banko başlıklar.',
        date: '2026-10-29',
        category: 'Analiz',
        readTime: '9 dakika',
    },
    {
        id: 'tyt-net-artirma-taktikleri',
        title: 'TYT Net Artırma: 60-70 Platosundan 85+ Nete Çıkış',
        excerpt: 'Aylardır aynı netlerde sayıklayanlara 4 adımlı analiz cetveli, branş denemesi devrimi ve turlama disiplini.',
        date: '2026-10-29',
        category: 'Taktik',
        readTime: '9 dakika',
    },
    {
        id: 'ayt-puan-hesaplama',
        title: 'AYT Puan Hesaplama: Test Ağırlıkları ve Katsayılar',
        excerpt: 'SAY, EA ve SÖZ puan türlerinde test ağırlıkları, alan dışı çözme kuralı ve AYT\'nin yerleştirmedeki %60 ağırlığı.',
        date: '2026-10-29',
        category: 'Rehber',
        readTime: '9 dakika',
    },
    {
        id: 'universite-tercih-stratejileri',
        title: 'Üniversite Tercih Rehberi: 24 Tercihi Heba Etmeme Sanatı',
        excerpt: 'Puanla değil sıralamayla tercih yapma, ölü tercih efsanesinin gerçeği, 4-12-8 tercih dağılım formülü ve kırık OBP tuzağı.',
        date: '2026-10-29',
        category: 'Tercih',
        readTime: '9 dakika',
    },
    {
        id: 'yks-yigilma-tehlikesi',
        title: 'YKS\'de Yığılma Nedir? Neden Kolay Sınavdan Korkmalısın?',
        excerpt: '60.000-150.000 sıralama aralığındaki yığılma riski, kolay ve zor sınav farkları ve yığılmayı delip geçme taktikleri.',
        date: '2026-10-29',
        category: 'Analiz',
        readTime: '9 dakika',
    },
    {
        id: 'yks-puan-turleri',
        title: 'YKS Puan Türleri: TYT, SAY, EA, SÖZ ve DİL Rehberi',
        excerpt: 'Her puan türü hangi bölümlerde geçerli, hangi testlerden hesaplanıyor. Bölüm bazlı puan türü tablosu ve YÖK barajları.',
        date: '2026-10-29',
        category: 'Temel Bilgi',
        readTime: '10 dakika',
    },
]

const blogImageMap: Record<string, string> = {
    'deneme-netleri-nasil-degerlendirilir': '/images/blog/tyt-net-artirma-taktikleri.jpg',
    'hangi-puan-turu-hangi-bolum': '/images/blog/yks-puan-turleri.jpg',
    'tyt-sure-yetistirme-turlama-taktigi': '/images/blog/tyt-net-hesaplama-rehberi.jpg',
    'tyt-turkce-paragraf-teknikleri': '/images/blog/tyt-turkce-paragraf-teknikleri.jpg',
    'yks-son-3-ay-calisma-plani': '/images/blog/yks-son-3-ay-calisma-plani.jpg',
    'sifirdan-tyt-matematik-calisma-rehberi': '/images/blog/sifirdan-tyt-matematik-calisma-rehberi.jpg',
    'obp-hesaplama': '/images/blog/obp-hesaplama.jpg',
    'yks-kac-net-kac-puan': '/images/blog/yks-kac-net-kac-puan.jpg',
    'yks-hazirlik-programi': '/images/blog/yks-hazirlik-programi.jpg',
    'tyt-matematik-konulari': '/images/blog/tyt-matematik-konulari.jpg',
    'ayt-matematik-konulari': '/images/blog/ayt-matematik-konulari.jpg',
    'yks-edebiyat-konulari': '/images/blog/yks-edebiyat-konulari.jpg',
    'yks-net-hesaplama-nasil-yapilir': '/images/blog/yks-net-hesaplama-nasil-yapilir.jpg',
    'yks-2027-basvuru-tarihleri': '/images/blog/yks-2027-basvuru-tarihleri.jpg',
    'yks-1-net-kac-kisi-atar': '/images/blog/yks-1-net-kac-kisi-atar.jpg',
    'tyt-net-hesaplama-rehberi': '/images/blog/tyt-net-hesaplama-rehberi.jpg',
    'tyt-kesin-cikan-konular': '/images/blog/tyt-kesin-cikan-konular.jpg',
    'ayt-puan-hesaplama': '/images/blog/ayt-puan-hesaplama.jpg',
    'universite-tercih-stratejileri': '/images/blog/universite-tercih-stratejileri.jpg',
    'tyt-net-artirma-taktikleri': '/images/blog/tyt-net-artirma-taktikleri.jpg',
    'yks-yigilma-tehlikesi': '/images/blog/yks-yigilma-tehlikesi.jpg',
    'yks-puan-turleri': '/images/blog/yks-puan-turleri.jpg',
}

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
                        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                            <div className="p-8 md:p-12 text-white lg:col-span-7">
                                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                                    ⭐ Öne Çıkan Rehber
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                    {blogPosts[0].title}
                                </h2>
                                <p className="text-blue-100 text-base md:text-lg mb-6 leading-relaxed">
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
                                    className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg text-sm md:text-base"
                                >
                                    Hemen Oku →
                                </Link>
                            </div>
                            <div className="p-6 lg:p-8 lg:col-span-5 flex justify-center">
                                <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 max-w-md w-full">
                                    <img
                                        src={blogImageMap[blogPosts[0].id] || '/og-image.jpg'}
                                        alt={blogPosts[0].title}
                                        className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-500"
                                        loading="eager"
                                    />
                                </div>
                            </div>
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
                                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col"
                            >
                                <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                                    <img
                                        src={blogImageMap[post.id] || '/og-image.jpg'}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-gray-900 rounded-full text-xs font-bold shadow-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                                            <span>
                                                {new Date(post.date).toLocaleDateString('tr-TR', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                })}
                                            </span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                    <div className="text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                        Rehberi İncele <span>→</span>
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
