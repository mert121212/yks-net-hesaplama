import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Net Hesaplama Nasıl Yapılır? 4 Yanlış 1 Doğru Kuralı',
    description: 'YKS net hesaplama formülü, 4 yanlışın bir doğruyu götürmesi mantığı, test bazlı net dağılımı ve standart sapmanın puana etkisi.',
    keywords: 'yks net hesaplama, tyt net hesaplama, 4 yanlış 1 doğruyu götürür mü, standart sapma yks, yks katsayılar 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir' },
    openGraph: {
        title: 'YKS Net Hesaplama Nasıl Yapılır? 4 Yanlış 1 Doğru Kuralı',
        description: 'Netlerin puana dönüşüm formülleri, standart sapma ve test ağırlıkları rehberi.',
        type: 'article',
        publishedTime: '2026-02-15',
        modifiedTime: '2026-02-18',
        url: 'https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir',
        images: [
            {
                url: '/images/blog/yks-net-hesaplama-nasil-yapilir.svg',
                width: 1200,
                height: 630,
                alt: 'YKS Net Hesaplama Rehberi'
            }
        ],
    },
}

export default function YKSNetHesaplama() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS Net Hesaplama Nasıl Yapılır? 4 Yanlış 1 Doğru Kuralı" 
                    description="YKS net hesaplama formülü, 4 yanlışın bir doğruyu götürmesi mantığı, test bazlı net dağılımı ve standart sapmanın puana etkisi."
                    datePublished="2026-02-15"
                    dateModified="2026-02-18"
                    url="https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir"
                    keywords={['yks net hesaplama', 'tyt net hesaplama', '4 yanlış 1 doğruyu götürür mü', 'standart sapma yks', 'yks katsayılar 2027']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Net Hesaplama</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Formüller</span>
                            <time className="text-gray-600" dateTime="2026-02-15">15 Şubat 2026</time>
                            <span className="text-gray-600">• 6 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS Net Hesaplama: 4 Yanlış Kuralı ve Puan Mantığı
                        </h1>
                        <p className="text-xl text-gray-600">
                            ÖSYM sınavlarında ham net hesabı basit bir çıkarma işlemine dayansa da, puan oluşumunda testlerin katsayıları ve standart sapması devreye girer.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-net-hesaplama-nasil-yapilir.svg"
                        alt="YKS Net Hesaplama: 4 Yanlış Kuralı ve Puan Mantığı"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Dört Yanlış Bir Doğruyu Nasıl Götürür?
                        </h2>
                        <p>
                            ÖSYM kılavuzuna göre her alt testte doğru cevap sayısından, yanlış cevap sayısının dörtte biri düşülür:
                        </p>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-4">
                            <p className="text-base text-blue-900 font-mono font-bold">
                                Ham Net = Doğru Sayısı - (Yanlış Sayısı ÷ 4)
                            </p>
                            <p className="text-sm text-blue-800 mt-2">
                                Her 1 yanlış cevap 0,25 net kaybı demektir. 4 yanlış cevap ise 1 tam doğruyu siler.
                            </p>
                        </div>

                        <p>
                            Örneğin TYT Türkçe&apos;de 32 doğru ve 6 yanlış yapan bir adayın hesabı:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>6 ÷ 4 = 1,50 doğru silinir.</li>
                            <li>Ham net: 32 - 1,50 = <strong>30,50 Net</strong> olur.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. Bir Testteki Yanlış Başka Testin Netini Etkiler mi?
                        </h2>
                        <p>
                            Hayır. Her test kendi içinde bağımsız değerlendirilir.
                        </p>
                        <p>
                            Örneğin Matematik testinde yapılan yanlışlar yalnızca Matematik doğru sayısından düşülür; Türkçe, Fen veya Sosyal netlerini etkilemez. Ayrıca bir testte yanlış sayısı doğruları aşsa bile o testin neti en düşük 0 olarak kabul edilir, eksi net diğer testlere yansımaz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. Soru Bazlı Standart Sapma Var mı?
                        </h2>
                        <p>
                            Adaylar arasında yaygın olan &quot;zor soruyu çözen daha fazla puan alır&quot; düşüncesi gerçeği yansıtmaz.
                        </p>
                        <p>
                            ÖSYM standart sapmayı tek tek sorular için değil, <strong>testin tamamı</strong> için hesaplar. Aynı test içindeki 1. soru ile 40. sorunun puan değeri tamamen eşittir. Önemli olan soru bazında zorluk değil, adayın o testten toplamda kaç net çıkardığıdır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. TYT Testlerinin Yaklaşık Katsayıları
                        </h2>
                        <p>
                            Yıllık ortalamalara göre testlerin TYT puanına katkısı şu aralıklardadır:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead className="bg-gray-100 text-gray-800 text-sm">
                                    <tr>
                                        <th className="p-3 border">Test</th>
                                        <th className="p-3 border">Soru Sayısı</th>
                                        <th className="p-3 border">1 Netin Puan Değeri</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">TYT Türkçe</td>
                                        <td className="p-3 border">40</td>
                                        <td className="p-3 border">~1,32 - 1,34 Puan</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">TYT Temel Matematik</td>
                                        <td className="p-3 border">40</td>
                                        <td className="p-3 border">~1,33 - 1,35 Puan</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">TYT Sosyal Bilimler</td>
                                        <td className="p-3 border">20</td>
                                        <td className="p-3 border">~1,35 - 1,37 Puan</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">TYT Fen Bilimleri</td>
                                        <td className="p-3 border">20</td>
                                        <td className="p-3 border">~1,36 - 1,38 Puan</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Netlerinizi Hesaplayın</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Doğru ve yanlış sayılarınızı girerek ham netlerinizi ve tahmini puanınızı anında öğrenin.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Hesaplama Aracına Git →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
