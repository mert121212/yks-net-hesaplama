import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Net Hesaplama Nasıl Yapılır? (ÖSYM Katsayı Verileriyle)',
    description: 'YKS 2027 net hesaplama formülleri, 0.5 net kuralının akademik analizi ve ham/yerleştirme puanı hesaplama standartları.',
    keywords: 'yks net hesaplama, yks net hesaplama nasıl yapılır, tyt net hesaplama, ayt net hesaplama, 0.5 net şartı, yks puan hesaplama 2027, ösym katsayıları',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir' },
    openGraph: {
        title: 'YKS Net Hesaplama Nasıl Yapılır? (ÖSYM Katsayı Verileriyle)',
        description: 'ÖSYM katsayıları ve standart sapma mantığıyla YKS net hesaplama analizi.',
        type: 'article',
        publishedTime: '2026-02-28',
        modifiedTime: '2026-08-16',
        url: 'https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir',
    },
}

export default function YKSNetHesaplamaRehberi() {
    return (
        <>
            <BlogArticleSchema
                title="YKS Net Hesaplama Nasıl Yapılır? (ÖSYM Katsayı Verileriyle)"
                description="YKS 2027 net hesaplama formülleri, 0.5 net kuralının akademik analizi ve ham/yerleştirme puanı hesaplama standartları."
                datePublished="2026-02-28"
                url="https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir"
                keywords={['yks net hesaplama', 'tyt net hesaplama', 'ayt net hesaplama', '0.5 net şartı', 'yks puan hesaplama 2027']}
            />
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-12 px-4">
                <article className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                        <nav className="mb-8 text-sm text-slate-500 font-medium flex items-center space-x-2">
                            <Link href="/" className="hover:text-indigo-600 transition-colors">Ana Sayfa</Link>
                            <span>›</span>
                            <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
                            <span>›</span>
                            <span className="text-slate-900">Rehber</span>
                        </nav>

                        <header className="mb-10">
                            <div className="flex flex-wrap items-center gap-3 mb-5">
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold tracking-wide uppercase">Teknik Kılavuz</span>
                                <time className="text-slate-500 text-sm font-medium">Son Güncelleme: 16 Ağustos 2026</time>
                                <span className="text-slate-400">•</span>
                                <span className="text-slate-500 text-sm font-medium">Okuma Süresi: 11 dk</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                                YKS Net Hesaplama Mantığı: Katsayılar ve Standart Sapma
                            </h1>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                Sınav bittiğinde doğru ve yanlışları saymak işin sadece ilk adımı. ÖSYM&apos;nin puanları nasıl ağırlıklandırdığını ve standart sapmanın puanını nasıl zıplattığını öğren.
                            </p>
                        </header>

                        <AuthorProfile />

                        <div className="prose prose-lg prose-indigo max-w-none text-slate-700 mt-8">
                            <p className="lead">
                                Sınavdan çıkınca herkes eline hesap makinesini alıp kafasına göre bir katsayıyla çarpıyor: &quot;30 netim var, 3&apos;le çarpsam 90 puan...&quot; falan. Ama ÖSYM&apos;nin sistemi böyle bakkal hesabı çalışmıyor. Sınavdaki testlerin Türkiye geneli başarı ortalaması, standart sapması ve ham netlerin ağırlıklandırılması gibi bir dizi istatistiksel adım devreye giriyor.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                                1. Temel Net Formülü (4 Yanlış 1 Doğruyu Götürür)
                            </h2>
                            <p>
                                İşin başlangıç noktası her test için ayrı ayrı ham neti bulmaktır. Boş bırakılan sorular 0 değerindedir, ne kazandırır ne kaybettirir.
                            </p>
                            
                            <div className="bg-slate-900 rounded-xl p-6 my-8 text-center shadow-lg">
                                <p className="text-sm text-slate-400 mb-2 uppercase tracking-wider font-semibold">Ham Net Formülü</p>
                                <p className="text-2xl font-bold text-white font-mono">
                                    Ham Net = Doğru Sayısı − (Yanlış Sayısı ÷ 4)
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                                2. ÖSYM Test Ağırlıkları (Hangi Test Yüzde Kaç?)
                            </h2>
                            <div className="overflow-x-auto my-6 not-prose rounded-xl shadow-sm border border-slate-200">
                                <table className="w-full text-left text-sm text-slate-600">
                                    <thead className="bg-slate-50 text-slate-900 font-semibold uppercase text-xs">
                                        <tr>
                                            <th className="px-6 py-4 border-b">Puan Türü</th>
                                            <th className="px-6 py-4 border-b">TYT Katkı Oranı</th>
                                            <th className="px-6 py-4 border-b">AYT Katkı Oranı</th>
                                            <th className="px-6 py-4 border-b">En Ağır Test</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-slate-100">
                                        <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-blue-600">SAY (Sayısal)</td><td className="px-6 py-4">%40</td><td className="px-6 py-4 font-bold text-emerald-600">%60</td><td>AYT Matematik (%30) + AYT Fizik (%10)</td></tr>
                                        <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-emerald-600">EA (Eşit Ağırlık)</td><td className="px-6 py-4">%40</td><td className="px-6 py-4 font-bold text-emerald-600">%60</td><td>AYT Matematik (%30) + AYT Edebiyat (%18)</td></tr>
                                        <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-purple-600">SÖZ (Sözel)</td><td className="px-6 py-4">%40</td><td className="px-6 py-4 font-bold text-emerald-600">%60</td><td>AYT Edebiyat (%18) + AYT Sos-2 (%30)</td></tr>
                                        <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-amber-600">DİL</td><td className="px-6 py-4">%40</td><td className="px-6 py-4 font-bold text-emerald-600">%60</td><td>YDT Yabancı Dil (%60)</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                                3. Ham Puanın Üstüne OBP Nasıl Eklenir?
                            </h2>
                            <p>
                                Ham puanınız en fazla 500 olabilir (ÖSYM taban 100 puan verir, testlerden en fazla 400 puan gelir). Bu puanın üstüne lise diploma notunuzun <strong>0.6 ile çarpımı</strong> sonucu elde edilen OBP (en fazla 60 puan) eklenir ve nihai <strong>Yerleştirme Puanınız (Maksimum 560 Puan)</strong> ortaya çıkar.
                            </p>

                            <div className="relative overflow-hidden bg-slate-900 rounded-2xl p-8 my-12 text-center border border-slate-800 shadow-2xl">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Karmaşık Formüllerle Uğraşma</h3>
                                <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-sm">
                                    Doğru ve yanlış sayılarını gir, sistemimiz tüm ÖSYM katsayılarını ve OBP eklemesini anında yapsın.
                                </p>
                                <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl focus:ring-4 focus:ring-slate-500 focus:outline-none">
                                    Hemen Netini ve Sıralamanı Hesapla →
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}
