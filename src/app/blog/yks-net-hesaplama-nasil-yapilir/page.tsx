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
                                <span className="text-slate-500 text-sm font-medium">Okuma Süresi: 9 dk</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                                YKS Net Hesaplama Mantığı: Katsayılar ve Standart Sapma
                            </h1>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                YKS puan hesaplaması sadece "4 yanlış 1 doğruyu götürür" kuralından ibaret değil. ÖSYM'nin puan hesaplarken neleri dikkate aldığını, o meşhur standart sapmanın nasıl işlediğini gelin beraber inceleyelim.
                            </p>
                        </header>

                        <AuthorProfile />

                        <div className="prose prose-lg prose-indigo max-w-none text-slate-700 mt-8">
                            <p className="lead">
                                Sınav bittikten sonra kitapçıkları açıp net hesaplarken genelde hepimiz o klasik hataya düşüyoruz: "Şu dersten bu kadar netim var, çarpı şu puan..." Ama kazın ayağı öyle değil arkadaşlar. ÖSYM'nin sistemi bu kadar basit ve düz mantık çalışmıyor. O yılki sınavın ne kadar zor olduğu ve standart sapma, alacağınız yerleştirme puanını fena halde değiştiriyor.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                                1. Ham Net Olayı Nedir?
                            </h2>
                            <p>
                                İşin en başında hepimizin bildiği <strong>Ham Net</strong> hesabı var. Puanlar ortaya çıkmadan önce ÖSYM'nin ilk baktığı şey bu ham sayılardır.
                            </p>
                            
                            <div className="bg-slate-900 rounded-xl p-6 my-8 text-center shadow-lg transform hover:scale-[1.02] transition-transform">
                                <p className="text-sm text-slate-400 mb-2 uppercase tracking-wider font-semibold">Bildiğimiz Net Formülü</p>
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
                                *Tabii boş bıraktığınız soruların size ne faydası var ne de zararı (Değeri tam 0'dır).
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                                2. En Çok Can Yakan Kural: 0.5 Net Kuralı
                            </h2>
                            <p>
                                Sınavda belinizi bükebilecek en gıcık kural tam olarak bu. Diyelim ki Sayısal (SAY) puanınızın hesaplanmasını istiyorsunuz; o zaman Sayısal puanı oluşturan ana testlerin (Matematik veya Fen) <strong>en az birinden</strong> yarım net (0.5) çıkarmak zorundasınız. Yapamazsanız ne mi olur? Puanınız hiç hesaplanmaz. Çizgi çekilir.
                            </p>
                            
                            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl my-6 not-prose">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 text-red-500 mt-1">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-bold text-red-800 uppercase tracking-wider mb-1">Büyük Tehlike</h3>
                                        <p className="text-sm text-red-700">
                                            Örnek vereyim: TYT'de Türkçeden 0.25 net yaptınız ve Matematik netiniz de eksiye düştü. Sonra gittiniz Fen ve Sosyal testlerini full çektiniz. Üzgünüm ama o TYT puanı <strong>hesaplanmıyor.</strong> Bir yılı resmen çöpe atmamak için bu tuzağa çok dikkat edin.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                                3. Hangi Ders Daha Fazla Puan Verir?
                            </h2>
                            <p>
                                <em>"Kanka Türkçe ve Matematik daha çok puan getiriyor, Sosyali salla gitsin"</em> geyiğini lise koridorlarında mutlaka duymuşsunuzdur. Bu bir bakıma doğru ama işin arka planı aslında şu şekilde:
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
                                            <td className="px-6 py-4 text-center text-indigo-600 font-bold">~1.32</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-slate-900">Temel Matematik</td>
                                            <td className="px-6 py-4 text-center">40</td>
                                            <td className="px-6 py-4 text-center">33%</td>
                                            <td className="px-6 py-4 text-center text-indigo-600 font-bold">~1.32</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-slate-900">Fen Bilimleri</td>
                                            <td className="px-6 py-4 text-center">20</td>
                                            <td className="px-6 py-4 text-center">17%</td>
                                            <td className="px-6 py-4 text-center text-emerald-600 font-bold">~1.36</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-slate-900">Sosyal Bilimler</td>
                                            <td className="px-6 py-4 text-center">20</td>
                                            <td className="px-6 py-4 text-center">17%</td>
                                            <td className="px-6 py-4 text-center text-emerald-600 font-bold">~1.36</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">
                                * Not: Sınavın çok zor olduğu senelerde (mesela herkesin döküldüğü 2021 YKS gibi) standart sapma devreye girip belli derslerin puan getirisini fırlatabiliyor.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                                4. Ham Puan ve Yerleştirme Puanı (Y-Puan) Farkı
                            </h2>
                            <p>
                                Sonuç belgenize baktığınızda iki ayrı puan görürsünüz ve kafalar genelde burada karışır. Şunu unutmayın; üniversite tercihleri, firesiz olarak <strong>Y-Puan (Yerleştirme Puanı)</strong> ile yapılıyor.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-slate-400 mr-2"></span> Ham Puan
                                    </h3>
                                    <p className="text-sm text-slate-600">Sınavdaki doğrularınızın yanlışlarınızı götürmesiyle kalan en yalın, okul puanı eklenmemiş saf puandır. (Bunun tavanı 500'dür)</p>
                                </div>
                                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                                    <h3 className="font-bold text-indigo-900 mb-2 flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span> Y-Puan (Yerleştirme)
                                    </h3>
                                    <p className="text-sm text-indigo-800">İşte tercihi bununla yapıyoruz. Ham puanınızın üstüne lise diplomanızdan (OBP) gelen puanın eklenmiş halidir. (Maksimum 560 Puan olur)</p>
                                </div>
                            </div>

                            <div className="relative overflow-hidden bg-slate-900 rounded-2xl p-8 my-12 text-center border border-slate-800 shadow-2xl">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Hesaplamalar Kafanı Mı Karıştırdı?</h3>
                                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                                    Katsayıydı, okul puanıydı, yığılmalardı derken kafanın karışması çok normal. Senin yerine tüm bunları ÖSYM güncel verileriyle hesaplayan robotumuzu deneyebilirsin.
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


