import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'Üniversite Tercih Stratejileri 2027 | Tercih Listesi Hazırlama Rehberi',
    description: 'YKS tercih listesi nasıl hazırlanır? Sıralama aralıkları, ölü tercih kavramı, 24 tercih hakkının dağılımı ve kırık OBP uyarısı.',
    keywords: 'üniversite tercihleri, yks tercih nasıl yapılır, ölü tercih nedir, tercih listesi hazırlama, yök atlas tercih',
    alternates: { canonical: 'https://yksnethesapla.com/blog/universite-tercih-stratejileri' },
    openGraph: {
        title: 'Üniversite Tercih Stratejileri: 24 Tercih Listesi Rehberi',
        description: 'Sıralamaya göre tercih listesi oluşturma mantığı, ölü tercihler ve YÖK Atlas analizleri.',
        type: 'article',
        publishedTime: '2026-02-08',
        modifiedTime: '2026-02-11',
        url: 'https://yksnethesapla.com/blog/universite-tercih-stratejileri',
        images: [
            {
                url: '/images/blog/universite-tercih-stratejileri.svg',
                width: 1200,
                height: 630,
                alt: 'Üniversite Tercih Stratejileri'
            }
        ],
    },
}

export default function UniversiteTercihStratejileri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="Üniversite Tercih Stratejileri 2027 | Tercih Listesi Hazırlama Rehberi" 
                    description="YKS tercih listesi nasıl hazırlanır? Sıralama aralıkları, ölü tercih kavramı, 24 tercih hakkının dağılımı ve kırık OBP uyarısı."
                    datePublished="2026-02-08"
                    dateModified="2026-02-11"
                    url="https://yksnethesapla.com/blog/universite-tercih-stratejileri"
                    keywords={['üniversite tercihleri', 'yks tercih nasıl yapılır', 'ölü tercih nedir', 'tercih listesi hazırlama', 'yök atlas tercih']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Tercih Stratejileri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-08">8 Şubat 2026</time>
                            <span className="text-gray-600">• 7 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Üniversite Tercih Rehberi: 24 Tercih Listesi Nasıl Yapılır?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Tercih listesi hazırlarken puana değil başarı sırasına bakmak, istek sırasını doğru kurmak ve liste dengesini sağlamak gerekir. Temel tercih stratejileri.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/universite-tercih-stratejileri.svg"
                        alt="Üniversite Tercih Rehberi: 24 Tercih Listesi Nasıl Yapılır?"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS sonuçları açıklandıktan sonra başlayan tercih dönemi, sınav süreci kadar stratejik bir adımdır. ÖSYM yerleştirme sistemi adayları başarı sırasına göre ve listedeki sırasıyla yerleştirir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Tercih Puanla Değil, Sıralamayla Yapılır
                        </h2>
                        <p>
                            Sınavın zorluk düzeyine göre taban puanlar her yıl onlarca puan değişebilir. Ancak bölümlerin başarı sıralamaları kontenjan değişiklikleri dışında çok daha kararlıdır.
                        </p>
                        <p>
                            Bu yüzden geçmiş yılların YÖK Atlas verilerini incelerken puanlara değil, son giren adayın genel başarı sırasına odaklanılmalıdır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. Ölü Tercih Kavramı ve İstek Sırası
                        </h2>
                        <p>
                            Sıkça dile getirilen &quot;daha düşük puanlı yeri üst sıraya yazarsan tercih ölür&quot; iddiası yanlıştır. Tercih listesi tamamen adayın okumak istediği önceliğe göre sıralanmalıdır.
                        </p>
                        <p>
                            Sistem adayın ilk tercihinden başlar; puanı yetiyorsa oraya yerleştirir, yetmiyorsa bir sonraki sıraya geçer. Gerçek anlamda hata, sıralaması yüksek ve çok istenen bir bölümü, daha az istenen ama garanti görülen bir bölümün altına yazmaktır; çünkü sistem üst sıradaki yere yerleşildiği anda alt sıraya bakmaz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. 24 Tercih Hakkının Dağılımı
                        </h2>
                        <p>
                            Örneğin Sayısalda 60.000 sıralamaya sahip bir aday için dengeli liste dağılımı şöyle kurulabilir:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">Üst Aralık (1 - 5. Tercihler)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Sıralamanın %20-30 üstündeki yerler (40.000 - 52.000 aralığı). Kontenjan artışları veya talep kaymalarından faydalanma ihtimali için yazılabilir.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">Kendi Başarı Dilimi (6 - 18. Tercihler)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    Adayın kendi sıralamasına en yakın yerler (52.000 - 75.000 aralığı). Yerleşme ihtimalinin en yüksek olduğu ana tercihler bu gruptadır.
                                </p>
                            </div>

                            <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                                <h3 className="font-bold text-gray-900 text-lg mb-1">Güvenlik Aralığı (19 - 24. Tercihler)</h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Mezuna kalmak istemeyen adaylar için kendi sıralamasının %30-40 gerisine inen bölümler (80.000 - 95.000 aralığı).
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. Kırık OBP Uyarısı
                        </h2>
                        <p>
                            Listenize gitmek istemediğiniz bir bölümü kesinlikle eklemeyin. Merkezi yerleştirmede bir programa yerleştiğiniz takdirde, kayıt yaptırmasanız dahi ertesi yıl OBP katsayınız yarı yarıya kesilir.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Netlerinizle Sıralamanızı Görün</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Tercih dönemi öncesinde deneme netlerinizin hangi başarı sırası aralığına karşılık geldiğini hesaplama aracımızda inceleyin.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Sıralama Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
