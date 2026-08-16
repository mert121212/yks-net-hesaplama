import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS\'de Yığılma Tehlikesi (2027): Standart Sapma ve Sıralama Analizi',
    description: '2027 YKS yığılma riskleri, standart sapmanın sıralamalara etkisi ve 3 milyon aday arasından sıyrılmak için uygulamanız gereken katsayı stratejileri.',
    keywords: 'yks yığılma nedir, 2027 yks zor mu, ayt netlerinin önemi, yks sıralama hesaplama, standart sapma yks, yks yığılma analizi',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-yigilma-tehlikesi' },
    openGraph: {
        title: 'YKS\'de Yığılma Tehlikesi (2027): Standart Sapma ve Sıralama Analizi',
        description: 'Yığılma bölgelerinden kurtulmanın veriye dayalı yolları. AYT stratejisi ve katsayı kullanımı.',
        type: 'article',
        publishedTime: '2027-05-02',
        modifiedTime: '2027-08-16',
        url: 'https://yksnethesapla.com/blog/yks-yigilma-tehlikesi',
    },
}

export default function YKSYigilmaTehlikesi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                    <nav className="mb-8 text-sm text-slate-500 font-medium flex items-center space-x-2">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
                        <span>›</span>
                        <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                        <span>›</span>
                        <span className="text-slate-900">Strateji & İstatistik</span>
                    </nav>

                    <header className="mb-10">
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold tracking-wide uppercase">Kritik Analiz</span>
                            <time className="text-slate-500 text-sm font-medium">Son Güncelleme: 16 Ağustos 2027</time>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500 text-sm font-medium">Okuma Süresi: 8 dk</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                            2027 YKS&apos;de &quot;Yığılma&quot; Tehlikesi: Yüz Binlerce Rakibi Nasıl Geçersiniz?
                        </h1>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed">
                            Yüksek puan almanıza rağmen beklediğinizden çok daha düşük bir sıralama gelmesinin teknik nedeni: Yığılma. ÖSYM yerleştirme verileri ışığında bu tehlikeyi önceden görmenin ve bertaraf etmenin yolları.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg prose-blue max-w-none text-slate-700 mt-8">
                        <p className="lead">
                            Türkiye'de her yıl yaklaşık 3 milyondan fazla adayın girdiği Yükseköğretim Kurumları Sınavı'nda (YKS), başarının ölçütü aldığınız "puan" değil, o puanın sizi yerleştirdiği "sıralamadır". Ve sıralamayı mahveden en büyük faktör <strong>Yığılma</strong> olgusudur.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Yığılma Tam Olarak Nedir? (İstatistiksel Perspektif)
                        </h2>
                        <p>
                            Sınavın görece kolay olduğu, belirleyici (zorluk derecesi yüksek) soruların sayısının az olduğu yıllarda, adayların net ortalamaları birbirine çok yaklaşır. Örneğin 380 ile 390 puan aralığına normalde 20.000 kişi yerleşirken, kolay bir sınavda bu aralığa 60.000 kişi girebilir. İşte bu duruma <strong>yığılma</strong> denir.
                        </p>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8 not-prose">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 text-red-500 mt-1">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-base font-bold text-red-900 uppercase tracking-wider mb-2">Yığılma Tuzağının Sonucu</h3>
                                    <p className="text-sm text-red-800 leading-relaxed">
                                        Eğer netleriniz Türkiye ortalamasının yığıldığı "orta-üst" segmente (genellikle TYT'de 50-70, AYT'de 35-50 bandı) denk geliyorsa, yapacağınız 1 ekstra net sizi <strong>10.000 kişi</strong> öne atabilirken, kaybedeceğiniz 1 net sizi <strong>15.000 kişi</strong> geriye düşürebilir.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Yığılmadan Kaçış Stratejisi: Test Ağırlıkları
                        </h2>
                        <p>
                            Yığılmanın olduğu orta segmentten sizi çekip çıkaracak şey, çoğunluğun <em>yapamadığı</em> testlere yönelmektir. Sistemdeki %40 TYT - %60 AYT dengesini kendi lehinize kullanmalısınız.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                                    Sayısal (SAY) Adayları İçin
                                </h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    Sayısalda yığılma genellikle 300-380 puan aralığındadır. Bu bandı kırmanın tek yolu <strong>AYT Matematik ve AYT Fizik</strong> netlerini Türkiye ortalamasının (+1.5 standart sapma) üzerine çıkarmaktır.
                                </p>
                            </div>
                            <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                                    <span className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></span>
                                    Eşit Ağırlık (EA) Adayları İçin
                                </h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    Eşit ağırlıkta "Edebiyat ve Tarih" herkes tarafından belirli bir oranda yapılır. Ancak EA yığılmasını (290-360 puan) delen anahtar kesinlikle <strong>AYT Matematik</strong> testidir.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Standart Sapmanın Gizli Gücü
                        </h2>
                        <p>
                            ÖSYM yerleştirme puanını hesaplarken ham netinizi doğrudan kullanmaz. Her testin Türkiye ortalaması ve standart sapması alınarak adayın standart puanı (T-Puanı) hesaplanır. 
                        </p>
                        <p>
                            <strong>Kural şudur:</strong> Bir testin Türkiye ortalaması ne kadar düşükse (yani test ne kadar zorsa), o testten yaptığınız her 1 netin size getireceği standart puan katkısı o kadar yüksek olur.
                        </p>

                        <div className="relative overflow-hidden bg-slate-900 rounded-2xl p-8 my-12 text-center border border-slate-800 shadow-2xl not-prose">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>
                            <h3 className="text-2xl font-bold mb-4 text-white">2027 Sıralamanızı Şimdiden Test Edin</h3>
                            <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-sm">
                                Son 3 yılın yığılma verilerini, OBP katsayılarını ve standart sapma tahminlerini harmanlayan özel simülatörümüz ile netlerinizin sizi yığılmanın neresinde bırakacağını görün.
                            </p>
                            <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl focus:ring-4 focus:ring-slate-500 focus:outline-none">
                                Gelişmiş Sıralama Simülatörü →
                            </Link>
                        </div>

                        <div className="mt-16 pt-8 border-t border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">İleri Düzey Stratejiler</h3>
                            <div className="grid md:grid-cols-2 gap-4 not-prose">
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">1 Netin Anatomisi</h4>
                                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">Tek bir matematik netinin yığılma bölgesinde kaç bin kişiyi ekarte ettiğine dair veri analizi.</p>
                                </Link>
                                <Link href="/blog/obp-hesaplama" className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">OBP Etkisi</h4>
                                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">Diploma notunuzun sizi yığılmanın dışına atma gücü ve hesaplama mantığı.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
