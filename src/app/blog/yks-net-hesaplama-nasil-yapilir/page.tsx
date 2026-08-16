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
        publishedTime: '2027-02-28',
        modifiedTime: '2027-08-16',
        url: 'https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir',
    },
}

export default function YKSNetHesaplamaRehberi() {
    return (
        <>
            <BlogArticleSchema
                title="YKS Net Hesaplama Nasıl Yapılır? (ÖSYM Katsayı Verileriyle)"
                description="YKS 2027 net hesaplama formülleri, 0.5 net kuralının akademik analizi ve ham/yerleştirme puanı hesaplama standartları."
                datePublished="2027-02-28"
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
                                <time className="text-slate-500 text-sm font-medium">Son Güncelleme: 16 Ağustos 2027</time>
                                <span className="text-slate-400">•</span>
                                <span className="text-slate-500 text-sm font-medium">Okuma Süresi: 9 dk</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                                YKS Net Hesaplama Parametreleri: Katsayılar ve Standart Sapma Etkisi
                            </h1>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                Sadece "4 yanlış 1 doğruyu götürür" kuralından ibaret olmayan YKS puan hesaplama sisteminin, ÖSYM değerlendirme yönergelerine dayalı detaylı teknik analizi.
                            </p>
                        </header>

                        <AuthorProfile />

                        <div className="prose prose-lg prose-indigo max-w-none text-slate-700 mt-8">
                            <p className="lead">
                                Adayların büyük bir kısmı YKS sonrasında puanlarını manuel olarak hesaplarken temel bir yanılgıya düşer: Her testin getirisini sabit bir katsayı üzerinden değerlendirmek. Oysa ÖSYM'nin yerleştirme algoritması, standart sapma ve testlerin oransal zorluk dereceleri üzerine kuruludur.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                                1. Temel Net Hesaplama Algoritması
                            </h2>
                            <p>
                                Hesaplamanın çekirdeğinde <strong>Ham Net</strong> denklemi bulunur. Bu denklem tüm Türkiye için standarttır ve standart sapma hesaplanmadan önce ham veriyi oluşturur.
                            </p>
                            
                            <div className="bg-slate-900 rounded-xl p-6 my-8 text-center shadow-lg transform hover:scale-[1.02] transition-transform">
                                <p className="text-sm text-slate-400 mb-2 uppercase tracking-wider font-semibold">Ham Net Formülü</p>
                                <p className="text-2xl font-bold text-white font-mono">
                                    N = D − (Y / 4)
                                </p>
                                <div className="mt-4 flex justify-center gap-4 text-xs text-slate-400">
                                    <span><strong className="text-indigo-400">N:</strong> Ham Net</span>
                                    <span><strong className="text-green-400">D:</strong> Doğru Sayısı</span>
                                    <span><strong className="text-red-400">Y:</strong> Yanlış Sayısı</span>
                                </div>
                            </div>
                            
                            <p className="text-sm text-slate-600 italic">
                                *Boş bırakılan sorular hesaplama dizisine dahil edilmez (Değeri tam 0'dır).
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                                2. "0.5 Net Kuralı"nın Teknik Detayları
                            </h2>
                            <p>
                                2027 ÖSYM Kılavuzu uyarınca uygulanan en kritik baraj kuralıdır. İlgili puan türünün hesaplanabilmesi için ana testlerin <strong>en az birinden</strong> ham netinizin ≥ 0.5 olması zorunludur.
                            </p>
                            
                            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl my-6 not-prose">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 text-red-500 mt-1">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-bold text-red-800 uppercase tracking-wider mb-1">Hesaplanmama Riski</h3>
                                        <p className="text-sm text-red-700">
                                            Örneğin TYT'de Türkçe netiniz 0.25 ve Matematik netiniz -1.5 ise; Fen ve Sosyal testlerini fullemiş olsanız dahi TYT puanınız <strong>hesaplanmaz.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                                3. Katsayı Normalizasyonu ve Puan Ağırlıkları
                            </h2>
                            <p>
                                Puan hesaplamasındaki <em>"Türkçe ve Matematik daha çok puan getirir"</em> genellemesi doğru olmakla birlikte eksiktir. Ağırlıklar yüzdelik dilimler üzerinden çalışır:
                            </p>
                            
                            <div className="overflow-x-auto my-8 not-prose rounded-xl shadow-sm border border-slate-200">
                                <table className="w-full text-left text-sm text-slate-600">
                                    <thead className="bg-slate-50 text-slate-900 font-semibold uppercase text-xs">
                                        <tr>
                                            <th className="px-6 py-4 border-b">TYT Testi</th>
                                            <th className="px-6 py-4 border-b text-center">Soru Adedi</th>
                                            <th className="px-6 py-4 border-b text-center">Ağırlık Oranı</th>
                                            <th className="px-6 py-4 border-b text-center">Tahmini Çarpan (Net Başı)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-slate-100">
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-slate-900">Türkçe</td>
                                            <td className="px-6 py-4 text-center">40</td>
                                            <td className="px-6 py-4 text-center">33%</td>
                                            <td className="px-6 py-4 text-center text-indigo-600 font-bold">~1.33 - 1.36</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-slate-900">Temel Matematik</td>
                                            <td className="px-6 py-4 text-center">40</td>
                                            <td className="px-6 py-4 text-center">33%</td>
                                            <td className="px-6 py-4 text-center text-indigo-600 font-bold">~1.33 - 1.35</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-slate-900">Fen Bilimleri</td>
                                            <td className="px-6 py-4 text-center">20</td>
                                            <td className="px-6 py-4 text-center">17%</td>
                                            <td className="px-6 py-4 text-center text-emerald-600 font-bold">~1.35 - 1.40*</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-slate-900">Sosyal Bilimler</td>
                                            <td className="px-6 py-4 text-center">20</td>
                                            <td className="px-6 py-4 text-center">17%</td>
                                            <td className="px-6 py-4 text-center text-emerald-600 font-bold">~1.35 - 1.38*</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">
                                * Standart sapma etkisiyle spesifik yıllarda (örn. zor fen soruları geldiğinde) 20 soruluk testlerin net başı puan getirisi orantısal olarak artabilmektedir.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                                4. Ham Puan vs. Yerleştirme Puanı (Y-Puan)
                            </h2>
                            <p>
                                Puan kartınızda göreceğiniz iki farklı puan türü vardır. Tercihler, istisnasız olarak <strong>Y-Puan (Yerleştirme Puanı)</strong> üzerinden yapılır.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-slate-400 mr-2"></span> Ham Puan
                                    </h3>
                                    <p className="text-sm text-slate-600">Sadece sınavdaki doğru ve yanlışlarınızın getirisidir. OBP eklenmemiş en saf halidir. (Maksimum 500 Puan)</p>
                                </div>
                                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                                    <h3 className="font-bold text-indigo-900 mb-2 flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span> Y-Puan (Yerleştirme)
                                    </h3>
                                    <p className="text-sm text-indigo-800">Ham puana lise diploma notunuzdan (OBP) gelen katkının eklenmiş halidir. (Maksimum 560 Puan)</p>
                                </div>
                            </div>

                            <div className="relative overflow-hidden bg-slate-900 rounded-2xl p-8 my-12 text-center border border-slate-800 shadow-2xl">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Karmaşık Hesaplamaları Bize Bırakın</h3>
                                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                                    OBP katsayıları, standart sapma tahminleri ve 2025'in yığılma verilerini kullanan simülatörümüz ile gerçekçi yerleştirme sıranızı öğrenin.
                                </p>
                                <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl focus:ring-4 focus:ring-slate-500 focus:outline-none">
                                    YKS Puan Simülatörüne Git →
                                </Link>
                            </div>

                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}
