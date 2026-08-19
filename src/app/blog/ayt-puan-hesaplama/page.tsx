import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'AYT Puan Hesaplama 2027 | SAY, EA, SÖZ Katsayıları ve Ağırlıklar',
    description: 'AYT puan hesaplama nasıl yapılır? SAY (Sayısal), EA (Eşit Ağırlık) ve SÖZ (Sözel) puan türlerinde derslerin katsayıları ve YKS yerleştirme puanına etkisi.',
    keywords: 'ayt puan hesaplama, ayt katsayıları, say katsayıları, ea katsayıları, söz katsayıları, yks yerleştirme puanı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/ayt-puan-hesaplama' },
    openGraph: {
        title: 'AYT Puan Hesaplama: Üniversite Kapısını Açan Gerçek Puan',
        description: 'AYT netlerinin Sayısal, Eşit Ağırlık ve Sözel puanlarına etkisi.',
        type: 'article',
        publishedTime: '2026-02-09',
        modifiedTime: '2026-08-19',
        url: 'https://yksnethesapla.com/blog/ayt-puan-hesaplama',
    },
}

export default function AYTPuanHesaplama() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">AYT Puan Hesaplama</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600">19 Ağustos 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            AYT Puanın Nasıl Hesaplanıyor? (Kazandıran Katsayılar)
                        </h1>
                        <p className="text-xl text-gray-600">
                            TYT&apos;de herkes her testten sorumluyken, AYT&apos;de puanını sadece senin &quot;alanındaki&quot; testler belirler. Peki ama HANGİ test ne kadar etkili?
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Birçok öğrenci TYT netlerini yüksek tutmak için çırpınırken, AYT&apos;nin aslında yerleştirme puanının %60&apos;ını oluşturduğunu unutuyor. TYT&apos;deki o 1 net için kendini paralarken, AYT&apos;de tek bir soru senin puanına 3 puan birden ekleyebiliyor.
                        </p>

                        <p>
                            Üniversite tercihini yapacağın o gerçek puan (SAY, EA veya SÖZ puanın), TYT&apos;nin %40&apos;ı ile AYT&apos;deki alan testlerinin %60&apos;ının birleşimiyle oluşur. Peki bu %60&apos;lık devasa dilim kendi içinde nasıl dağılıyor? Gel tek tek bakalım.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            🔬 Sayısal (SAY) Puanı Nasıl Hesaplanır?
                        </h2>
                        <p>
                            Sayısalcıların kaderi AYT Matematik ve AYT Fen testlerinin elindedir. SAY puanı hesaplanırken sadece bu iki testin netleri dikkate alınır. (Edebiyat çözsen de SAY puanına zerre katkısı olmaz).
                        </p>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
                            <h4 className="font-bold text-blue-900 mb-4 text-center">Sayısalda (AYT&apos;nin %60&apos;ı İçindeki) Ağırlıklar</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div>
                                    <p className="font-bold text-slate-800">Matematik</p>
                                    <p className="text-2xl font-black text-blue-600">%50</p>
                                    <p className="text-xs text-slate-500">40 Soru (1 net ~3.0 p)</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">Fizik</p>
                                    <p className="text-2xl font-black text-blue-600">%17</p>
                                    <p className="text-xs text-slate-500">14 Soru (1 net ~2.8 p)</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">Kimya</p>
                                    <p className="text-2xl font-black text-blue-600">%16.5</p>
                                    <p className="text-xs text-slate-500">13 Soru (1 net ~3.0 p)</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">Biyoloji</p>
                                    <p className="text-2xl font-black text-blue-600">%16.5</p>
                                    <p className="text-xs text-slate-500">13 Soru (1 net ~3.0 p)</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            Gördün mü? SAY Puanının tam YARISI sadece Matematikten geliyor. AYT Matematikteki tek bir netin değeri, TYT&apos;deki bir netin yaklaşık 2.5 katı! Tıp, Diş Hekimliği, Bilgisayar Mühendisliği isteyen bir öğrencinin AYT Matematiği 30&apos;un altına düşürme lüksü yoktur.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            ⚖️ Eşit Ağırlık (EA) Puanı Nasıl Hesaplanır?
                        </h2>
                        <p>
                            Eşit ağırlıkçılar (nam-ı diğer TM&apos;ciler), AYT Matematik ve Türk Dili ve Edebiyatı-Sosyal Bilimler-1 testlerini çözerler.
                        </p>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
                            <h4 className="font-bold text-amber-900 mb-4 text-center">Eşit Ağırlıkta (AYT&apos;nin %60&apos;ı İçindeki) Ağırlıklar</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div>
                                    <p className="font-bold text-slate-800">Matematik</p>
                                    <p className="text-2xl font-black text-amber-600">%50</p>
                                    <p className="text-xs text-slate-500">40 Soru (1 net ~3.0 p)</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">Edebiyat</p>
                                    <p className="text-2xl font-black text-amber-600">%30</p>
                                    <p className="text-xs text-slate-500">24 Soru (1 net ~3.0 p)</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">Tarih-1</p>
                                    <p className="text-2xl font-black text-amber-600">%12.5</p>
                                    <p className="text-xs text-slate-500">10 Soru (1 net ~2.8 p)</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">Coğrafya-1</p>
                                    <p className="text-2xl font-black text-amber-600">%7.5</p>
                                    <p className="text-xs text-slate-500">6 Soru (1 net ~3.3 p)</p>
                                </div>
                            </div>
                        </div>

                        <p>
                            Eşit ağırlıkta Türkiye geneli Matematik ortalaması çok düşük olduğu için, AYT Matematikte yapılan her net, standart sapma ile beraber EA öğrencisini sıralamada adeta uçurur. Hukuk veya Psikoloji isteyen bir EA öğrencisi, Edebiyatı ezberlemeli ama farkı kesinlikle Matematikle atmalıdır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            📚 Sözel (SÖZ) Puanı Nasıl Hesaplanır?
                        </h2>
                        <p>
                            Sözelciler için Matematik korkusu AYT&apos;de tamamen biter. Onların sınavı Edebiyat-Sosyal-1 ve Sosyal-2 testleridir. Yani toplam 80 tane ezber ve yorum sorusu.
                        </p>

                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 my-6">
                            <h4 className="font-bold text-emerald-900 mb-4 text-center">Sözelde (AYT&apos;nin %60&apos;ı İçindeki) Ağırlıklar</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div>
                                    <p className="font-bold text-slate-800">Edebiyat + Sos-1</p>
                                    <p className="text-2xl font-black text-emerald-600">%50</p>
                                    <p className="text-xs text-slate-500">40 Soru</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">Tarih-2</p>
                                    <p className="text-2xl font-black text-emerald-600">%14</p>
                                    <p className="text-xs text-slate-500">11 Soru</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">Coğrafya-2</p>
                                    <p className="text-2xl font-black text-emerald-600">%14</p>
                                    <p className="text-xs text-slate-500">11 Soru</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">Fels. Grb. + Din</p>
                                    <p className="text-2xl font-black text-emerald-600">%22</p>
                                    <p className="text-xs text-slate-500">18 Soru</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
                            <h3 className="font-bold text-red-900 mb-2">Çok Önemli Taktik!</h3>
                            <p className="text-sm text-red-800">
                                Sınavda zamanın kalırsa ve SAY/EA/SÖZ puanlarından <strong>birden fazlasının</strong> hesaplanmasını istiyorsan, kendi testini bitirdikten sonra diğer alanın testini de çözebilirsin. Mesela bir Eşit Ağırlık öğrencisi, Matematik ve Edebiyat-Sos-1&apos;i bitirip üzerine Fen çözerse SAY puanı da hesaplanır. Veya Sos-2 çözerse SÖZ puanı hesaplanır. Sınavda önündeki kitapçıkta tüm testler olacak. Süren artarsa bunu mutlaka değerlendir!
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Hesabı Bize Bırak</h3>
                            <p className="text-blue-100 mb-6">
                                TYT ve AYT netlerini gir, SAY, EA ve SÖZ yerleştirme puanlarını ve tahmini sıralamalarını tek tıkla gör.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Hemen Puanını Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
