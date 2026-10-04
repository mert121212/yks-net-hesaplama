import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'

export const metadata: Metadata = {
    title: 'YKS\'de 1 Net Kaç Kişi Öne Atar? Yığılma Haritası ve Sıralama Gerçeği',
    description: '1 net kaç bin kişiyi geride bırakır? İlk 5 bin ile 80 bin yığılması arasındaki devasa fark. TYT vs AYT netinin sıralama faturası.',
    keywords: '1 net kaç kişi atar, yks 1 netin etkisi, tyt 1 net kaç kişi atar, ayt 1 net kaç kişi atar, yks yığılma',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar' },
    openGraph: {
        title: 'YKS\'de 1 Net Kaç Kişi Öne Atar? Yığılma Haritası',
        description: 'Orta başarı dilimlerinde tek bir netin kaderini nasıl değiştirdiği: Gerçek ÖSYM yığılma verileri.',
        type: 'article',
        publishedTime: '2026-02-13',
        modifiedTime: '2026-03-01',
        url: 'https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar',
        images: [
            {
                url: '/images/blog/yks-1-net-kac-kisi-atar.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Net Hesaplama Blog'
            }
        ],
    },
}

export default function YKSBirNetKacKisiAtar() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS'de 1 Net Kaç Kişi Öne Atar? (Yığılma ve Puan Analizi)"
                    description="YKS sınavında 1 netin sıralamaya etkisi nedir? Farklı başarı aralıklarında TYT ve AYT netlerinin sıralama değişimi."
                    datePublished="2026-02-13"
                    dateModified="2026-03-01"
                    url="https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar"
                    keywords={['1 net kaç kişi atar', 'yks 1 netin etkisi', 'tyt 1 net kaç kişi atar', 'ayt 1 net kaç kişi atar', 'yks yığılma']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">1 Net Kaç Kişi Atar?</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Saha Analizi</span>
                            <time className="text-gray-600" dateTime="2026-02-13">13 Şubat 2026</time>
                            <span className="text-gray-600">• 7 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS&apos;de 1 Net Kaç Kişi Öne Fırlatır? Yığılma Cehennemi
                        </h1>
                        <p className="text-xl text-gray-600">
                            Masada çalışırken &ldquo;Aman 1 netten ne çıkar&rdquo; deyip boş bıraktığın o tek bir soru, sınav sonuç gününde seni 6 bin kişinin arkasına gömebilir.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-1-net-kac-kisi-atar.jpg"
                        alt="YKS&apos;de 1 Net Sıralamayı Ne Kadar Değiştirir?"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her yıl sınav bittiğinde duyulan klasik bir laf vardır: <em>&ldquo;1 net en fazla ne kadar fark edebilir ki?&rdquo;</em>
                        </p>

                        <p>
                            Eğer Türkiye ilk 200&apos;ündeysen haklısın; 1 net seni 15-20 kişi oynatır. Ama eğer 3 milyon adayın kalabalık sürüsüyle birlikte <strong>60.000 - 150.000 bandında</strong> nefes alıp veriyorsan, o tek bir net resmen bir stadyum dolusu insanı ezip geçmek ya da onların altında ezilmek demektir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sıralama Dilimlerine Göre 1 Netin Gerçek Faturası
                        </h2>

                        <p>
                            ÖSYM&apos;nin yığınsal grafiklerine baktığımızda ortaya çıkan acı gerçek şudur:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-sm text-left border border-gray-200">
                                <thead className="bg-gray-100 text-gray-800">
                                    <tr>
                                        <th className="p-3 border">Bulunduğun Sıralama Bandı</th>
                                        <th className="p-3 border text-center text-blue-700">+1 TYT Neti</th>
                                        <th className="p-3 border text-center text-purple-700 font-bold">+1 AYT Neti</th>
                                        <th className="p-3 border">Sahadaki Durum</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="p-3 border font-semibold">İlk 5.000 (Zirve)</td>
                                        <td className="p-3 border text-center">40 - 70 kişi</td>
                                        <td className="p-3 border text-center font-bold">150 - 300 kişi</td>
                                        <td className="p-3 border text-gray-600">Adaylar seyrek, puan farkları açıktır.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border font-semibold">20.000 - 50.000</td>
                                        <td className="p-3 border text-center">400 - 800 kişi</td>
                                        <td className="p-3 border text-center font-bold">1.200 - 2.500 kişi</td>
                                        <td className="p-3 border text-gray-600">Tıp ve popüler mühendislikler için kıran kırana mücadele.</td>
                                    </tr>
                                    <tr className="bg-amber-50">
                                        <td className="p-3 border font-semibold text-amber-900">70.000 - 130.000 (Büyük Yığılma)</td>
                                        <td className="p-3 border text-center font-bold text-amber-900">1.800 - 3.200 kişi</td>
                                        <td className="p-3 border text-center font-black text-red-600">4.500 - 7.000 kişi</td>
                                        <td className="p-3 border text-amber-900 font-medium">Tam bir can pazarı! 0,5 puan içinde 5 bin kişi üst üste biner.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border font-semibold">150.000 - 300.000</td>
                                        <td className="p-3 border text-center">2.200 - 4.500 kişi</td>
                                        <td className="p-3 border text-center font-bold">5.500 - 9.000 kişi</td>
                                        <td className="p-3 border text-gray-600">En yoğun aday kümesi; küçük bir net sıçraması binlerce adayı eler.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <QuickNetSimulator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Neden AYT Neti TYT&apos;yi İkiye Katlar?
                        </h2>

                        <p>
                            Çok basit bir matematik: TYT&apos;de 120 soru varken, AYT&apos;de sadece 80 soru çözersin. Üstelik genel yerleştirme puanına AYT %60, TYT ise sadece %40 etki eder.
                        </p>

                        <p>
                            Daha az soru + daha yüksek ağırlık = <strong>Devasa net değeri.</strong> Yani 80 bininci sırada sıkışıp kalmış bir adayın pazar günü AYT&apos;de fazladan çıkaracağı 2 tane Matematik veya Fen neti, onu tek hamlede 12 bin kişinin önüne fırlatır! Bu fark bir devlet üniversitesi kazanmakla mezuna kalmak arasındaki çizgidir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            &ldquo;Zor Soru Daha Çok Kişi Attırır&rdquo; Yanılgısı
                        </h2>

                        <p>
                            Bunu kafandan sil: ÖSYM soru bazlı katsayı vermez. O çözemediğin, tüm Türkiye&apos;nin ağladığı kabus geometri sorusu ile testin ilk sayfasındaki &ldquo;aşağıdakilerden hangisi asal sayıdır?&rdquo; sorusu puan olarak kuruşu kuruşuna aynı getiriyi sağlar.
                        </p>

                        <p>
                            Dolayısıyla derece yapan akıllı öğrencilerin yaptığı şey şudur: Zor soruyla inatlaşıp 4 dakikayı heba etmek yerine, diğer derslerdeki kolay ve orta soruları avlayıp toplam net sayısını şişirirler. Çünkü yığılmayı yaran tek şey sorunun havalı olması değil, <strong>toplam net hanendir.</strong>
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Netlerinle Kaç Kişiyi Geçeceğini Gör</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Doğru ve yanlışlarını hesaplama motorumuza gir; hedefindeki 2-3 netlik artışın sıralamanı nasıl yukarı taşıyacağını canlı simülasyonda incele.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Canlı Net Simülatörüne Git →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
