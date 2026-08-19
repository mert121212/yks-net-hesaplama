import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS\'de 1 Net Bile Neden Binlerce Kişi Attırır? (OBP ve Sıralama Analizi)',
    description: 'YKS 2027 sınavında 1 netin sıralamaya etkisi. Yığılma bölgelerinde tek bir sorunun binlerce adayı nasıl ekarte ettiği ve katsayı analizi.',
    keywords: 'yks 1 net kaç kişi atar, tyt 1 net sıralama etkisi, ayt 1 net kaç kişi oynatır, yks yığılma, yks sıralama hesaplama',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar' },
    openGraph: {
        title: 'YKS\'de 1 Net Bile Neden Binlerce Kişi Attırır?',
        description: 'OBP sıralamayı nasıl etkiler, standart sapma nedir? YKS\'de 1 netin gerçek değerini öğren.',
        type: 'article',
        publishedTime: '2026-05-02',
        url: 'https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar',
    },
}

export default function YKS1NetKacKisiAtar() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                    <nav className="mb-8 text-sm text-slate-500 font-medium flex items-center space-x-2">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
                        <span>›</span>
                        <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                        <span>›</span>
                        <span className="text-slate-900">Strateji</span>
                    </nav>

                    <header className="mb-10">
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold tracking-wide uppercase">İstatistik</span>
                            <time className="text-slate-500 text-sm font-medium">Son Güncelleme: 16 Ağustos 2026</time>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500 text-sm font-medium">Okuma Süresi: 11 dk</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                            YKS&apos;de 1 Net Bile Neden 15.000 Kişi Attırır? (Rakamlarla Kanıt)
                        </h1>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed">
                            &quot;Aman bir sorudan ne olacak&quot; dediğin o tek bir soru, seni hayalindeki üniversitenin kapısından içeri de sokabilir, bir yıl daha mezuna da bırakabilir.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg prose-blue max-w-none text-slate-700 mt-8">
                        <p className="lead">
                            Deneme çözerken ya da sınav anında yorulup &quot;Aman bu soru da kalsın, 1 sorudan ne çıkar&quot; dediğin oldu mu hiç? Eğer olduysa çok tehlikeli bir sularda yüzüyorsun demektir. Çünkü 3 milyondan fazla adayın girdiği YKS&apos;de 1 net, düşündüğünden çok daha büyük bir deprem yaratır.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Puan Aralıklarına Göre 1 Netin Sıralamaya Etkisi
                        </h2>
                        <p>
                            1 netin sizi kaç kişi öne atacağı, hangi puan bandında olduğunuza göre radikal şekilde değişir:
                        </p>

                        <div className="overflow-x-auto my-6 not-prose">
                            <table className="min-w-full bg-white border border-slate-200 rounded-xl">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold text-slate-900 border-b">Bulunduğun Sıralama Bandı</th>
                                        <th className="px-5 py-3 text-center font-semibold text-slate-900 border-b">1 Ekstra TYT Netinin Etkisi</th>
                                        <th className="px-5 py-3 text-center font-semibold text-slate-900 border-b">1 Ekstra AYT Netinin Etkisi</th>
                                        <th className="px-5 py-3 text-left font-semibold text-slate-900 border-b">Yorum</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-sm">
                                    <tr>
                                        <td className="px-5 py-4 font-bold text-slate-900">İlk 10.000 (Zirve)</td>
                                        <td className="px-5 py-4 text-center font-semibold text-blue-600">~ 200 – 400 Kişi</td>
                                        <td className="px-5 py-4 text-center font-bold text-emerald-600">~ 500 – 1.000 Kişi</td>
                                        <td className="px-5 py-4 text-slate-500">Tıp ve Boğaziçi farkı</td>
                                    </tr>
                                    <tr className="bg-slate-50">
                                        <td className="px-5 py-4 font-bold text-slate-900">50.000 – 150.000 (Yığılma Başlangıcı)</td>
                                        <td className="px-5 py-4 text-center font-semibold text-blue-600">~ 2.500 – 5.000 Kişi</td>
                                        <td className="px-5 py-4 text-center font-bold text-emerald-600">~ 6.000 – 12.000 Kişi</td>
                                        <td className="px-5 py-4 text-slate-500">Hukuk ve İyi Mühendislikler</td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-4 font-bold text-red-600">150.000 – 350.000 (Ana Yığılma Bölgesi)</td>
                                        <td className="px-5 py-4 text-center font-semibold text-blue-600 text-base font-bold">~ 5.000 – 8.000 Kişi</td>
                                        <td className="px-5 py-4 text-center font-bold text-emerald-600 text-base font-bold">~ 12.000 – 18.000 Kişi</td>
                                        <td className="px-5 py-4 text-red-600 font-bold">🔴 1 Soru = 1 Şehir Değişimi</td>
                                    </tr>
                                    <tr className="bg-slate-50">
                                        <td className="px-5 py-4 font-bold text-slate-900">500.000 – 1.000.000 (Taban Bölge)</td>
                                        <td className="px-5 py-4 text-center font-semibold text-blue-600">~ 8.000 – 15.000 Kişi</td>
                                        <td className="px-5 py-4 text-center font-bold text-emerald-600">~ 20.000+ Kişi</td>
                                        <td className="px-5 py-4 text-slate-500">Ön lisans ve Baraj Geçişi</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            AYT Neti Neden TYT&apos;nin İki Katı Değerindedir?
                        </h2>
                        <p>
                            Formüle baktığınızda 1 TYT sorusunun ham puana katkısı yaklaşık <strong>1.33 puan</strong> iken, 1 AYT sorusunun katkısı <strong>yaklaşık 3.00 puandır</strong>. Yani AYT&apos;de yapacağınız tek bir doğru matematik veya fen sorusu, TYT&apos;deki 2.5 soruya denktir.
                        </p>
                        <p>
                            Bu yüzden hazırlık sürecinin son 3-4 ayında zamanınızın en az %65-70&apos;ini AYT konularına ayırmak en mantıklı stratejidir.
                        </p>

                        <div className="relative overflow-hidden bg-slate-900 rounded-2xl p-8 my-12 text-center border border-slate-800 shadow-2xl not-prose">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                            <h3 className="text-2xl font-bold mb-4 text-white">1 Net Ekleyince Sıralaman Nasıl Oynuyor?</h3>
                            <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-sm">
                                Mevcut netlerine sadece 2 ekstra AYT neti ekleyip hesaplama motorumuzda test et. Sıralamanın ne kadar sıçradığını gözlerinle gör.
                            </p>
                            <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl focus:ring-4 focus:ring-slate-500 focus:outline-none">
                                Simülasyonu Başlat →
                            </Link>
                        </div>

                        <div className="mt-16 pt-8 border-t border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">İlgili Başlıklar</h3>
                            <div className="grid md:grid-cols-2 gap-4 not-prose">
                                <Link href="/blog/yks-yigilma-tehlikesi" className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">YKS Yığılma Analizi →</h4>
                                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">Orta segmentteki adayların yığılmayı kırma taktikleri.</p>
                                </Link>
                                <Link href="/blog/obp-hesaplama" className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">OBP Hesaplama Rehberi →</h4>
                                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">Lise diploma notunun sıralamaya etkisi.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
