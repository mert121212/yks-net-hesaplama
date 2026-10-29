import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'
import ArticleFeedback from '@/components/ArticleFeedback'
import ReadingProgress from '@/components/ReadingProgress'
import LastUpdatedBadge from '@/components/LastUpdatedBadge'

export const metadata: Metadata = {
    title: 'YKS\'de 1 Net Kaç Kişi Öne Atar? Yığılma Haritası ve Sıralama Gerçeği',
    description: '1 net kaç bin kişiyi geride bırakır? İlk 5 bin ile 80 bin yığılması arasındaki devasa fark. TYT vs AYT netinin sıralama faturası.',
    keywords: '1 net kaç kişi atar, yks 1 netin etkisi, tyt 1 net kaç kişi atar, ayt 1 net kaç kişi atar, yks yığılma',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar' },
    openGraph: {
        title: 'YKS\'de 1 Net Kaç Kişi Öne Atar? Yığılma Haritası',
        description: 'Orta başarı dilimlerinde tek bir netin kaderini nasıl değiştirdiği: Gerçek ÖSYM yığılma verileri.',
        type: 'article',
        publishedTime: '2026-04-25',
        modifiedTime: '2026-10-29',
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
                <ReadingProgress />
                <BlogArticleSchema 
                    title="YKS'de 1 Net Kaç Kişi Öne Atar? (Yığılma ve Puan Analizi)"
                    description="YKS sınavında 1 netin sıralamaya etkisi nedir? Farklı başarı aralıklarında TYT ve AYT netlerinin sıralama değişimi."
                    datePublished="2026-04-25"
                    dateModified="2026-10-29"
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
                            <time className="text-gray-600" dateTime="2026-04-25">25 Nisan 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS&apos;de 1 Net Kaç Kişi Öne Fırlatır? Yığılma Gerçeği
                        </h1>
                        <p className="text-xl text-gray-600">
                            Masada çalışırken &ldquo;Aman 1 netten ne çıkar&rdquo; deyip boş bıraktığın o tek bir soru, sınav sonuç gününde seni 6 bin kişinin arkasına düşürebilir.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-1-net-kac-kisi-atar.jpg"
                        alt="YKS'de 1 Net Sıralamayı Ne Kadar Değiştirir?"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her yıl sınav bittiğinde duyulan klasik bir laf vardır: <em>&ldquo;1 net en fazla ne kadar fark edebilir ki?&rdquo;</em>
                        </p>

                        <p>
                            Eğer Türkiye ilk 200&apos;ündeysen haklısın; orada puanlar çok ayrıktır ve 1 net seni 15-20 kişi oynatır. Ama eğer 3 milyon adayın kalabalık sürüsüyle birlikte <strong>60.000 - 150.000 bandında</strong> nefes alıp veriyorsan, o tek bir net resmen koca bir stadyum dolusu insanı geride bırakmak demektir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sıralama Dilimlerine Göre 1 Netin Gerçek Faturası
                        </h2>

                        <p>
                            ÖSYM&apos;nin yığınsal frekans dağılımı verilerine baktığımızda ortaya çıkan net tablo şudur:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-sm text-left border border-gray-200">
                                <thead className="bg-slate-100 text-gray-800 font-semibold border-b">
                                    <tr>
                                        <th className="p-3 border">Bulunduğun Sıralama Bandı</th>
                                        <th className="p-3 border text-center text-blue-700">+1 TYT Netinin Etkisi</th>
                                        <th className="p-3 border text-center text-purple-700 font-bold">+1 AYT Netinin Etkisi</th>
                                        <th className="p-3 border">Aday Yoğunluğu & Yorum</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="p-3 border font-semibold">İlk 5.000 (Zirve)</td>
                                        <td className="p-3 border text-center">50 - 100 kişi</td>
                                        <td className="p-3 border text-center font-bold">150 - 350 kişi</td>
                                        <td className="p-3 border text-gray-600">Adaylar seyrektir, her puanın değeri büyüktür.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border font-semibold">20.000 - 50.000</td>
                                        <td className="p-3 border text-center">500 - 1.000 kişi</td>
                                        <td className="p-3 border text-center font-bold">1.500 - 3.000 kişi</td>
                                        <td className="p-3 border text-gray-600">Tıp, Diş ve popüler mühendislikler için kıran kırana mücadele.</td>
                                    </tr>
                                    <tr className="bg-amber-50">
                                        <td className="p-3 border font-semibold text-amber-950">60.000 - 150.000 (Büyük Yığılma)</td>
                                        <td className="p-3 border text-center font-bold text-amber-900">2.000 - 4.500 kişi</td>
                                        <td className="p-3 border text-center font-black text-red-600">5.000 - 9.500 kişi</td>
                                        <td className="p-3 border text-amber-950 font-medium">Tam bir can pazarı! 0,5 puanlık daracık aralıkta binlerce kişi birikir.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border font-semibold">150.000 - 300.000</td>
                                        <td className="p-3 border text-center">3.000 - 6.000 kişi</td>
                                        <td className="p-3 border text-center font-bold">7.000 - 12.000 kişi</td>
                                        <td className="p-3 border text-gray-600">En yoğun aday kümesi; tek bir doğru yanıt binlerce adayı eler.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <QuickNetSimulator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Neden AYT Neti TYT&apos;yi Neredeyse İkiye Katlar?
                        </h2>

                        <p>
                            Mesele çok basit bir sınav matematiğine dayanır: TYT&apos;de 120 soru varken, AYT&apos;de yalnızca 80 soru çözersin. Üstelik lisans yerleştirme puanının %60&apos;ı AYT&apos;den, yalnızca %40&apos;ı TYT&apos;den gelir.
                        </p>

                        <p>
                            Daha az soru + daha yüksek ağırlık = <strong>Devasa net katsayısı.</strong> Yani 90 bininci sırada sıkışıp kalmış bir adayın pazar günkü AYT&apos;de çıkaracağı fazladan 2 adet Matematik veya Fen neti, onu tek hamlede 10-12 bin kişinin önüne fırlatır! Bu fark bir devlet üniversitesine yerleşmek ile mezuna kalmak arasındaki ince çizgidir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            &ldquo;Zor Soru Daha Çok Puan Getirir&rdquo; Şehir Efsanesi
                        </h2>

                        <p>
                            ÖSYM soru bazlı değil, test bazlı standart sapma uygular. Sınavdaki en zor geometri sorusu ile ilk sayfadaki en basit temel kavram sorusu, ham net hanene tam olarak aynı değeri (+1,00 net) katar.
                        </p>

                        <p>
                            Bu yüzden sınav tecrübesi olan başarılı adaylar zor tekil sorularla dakikalarca inatlaşmaz. Kolay ve orta soruları firesiz toplayıp toplam netini maksimize eder. Sıralama yığılmasında farkı yaratan şey tek bir sorunun zorluğu değil, testteki <strong>toplam netindir.</strong>
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Netlerinle Kaç Kişiyi Geçeceğini Simüle Et</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Doğru ve yanlışlarını hesaplama motorumuza gir; hedefindeki 2-3 netlik artışın sıralamanı nasıl yukarı taşıyacağını canlı simülasyonda incele.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Canlı Net Simülatörüne Git →
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            YKS Yığılması Hakkında Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">Kolay sınavda mı yığılma çok olur, zor sınavda mı?</h3>
                                <p className="text-sm text-gray-700">
                                    Kesinlikle kolay sınavda! Sınav kolay olduğunda adayların netleri birbirine yaklaşır ve belirli puan aralıklarında yüz binlerce öğrenci üst üste biner. Zor sınavlarda ise bilenle bilmeyen net şekilde ayrışır ve puanlar dağılır.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">OBP yığılmada nasıl bir rol oynar?</h3>
                                <p className="text-sm text-gray-700">
                                    Orta sıralarda (özellikle 50k - 150k aralığında) diploma notu yüksek olan adaylar tek bir hamlede 4-5 bin kişiyi geride bırakırken, OBP&apos;si düşük olan adaylar sınavda iyi net yapsalar dahi geriye düşebilir.
                                </p>
                            </div>
                        </div>

                        <p className="mt-8">
                            Yığılma tehlikesini aşmak ve tercih listeni sağlama almak için <Link href="/blog/yks-yigilma-tehlikesi" className="text-blue-600 font-semibold hover:underline">YKS Yığılma Tehlikesi ve Çözüm Yolları</Link> rehberimizi inceleyebilir, diploma notunun gücünü görmek için <Link href="/blog/obp-hesaplama" className="text-blue-600 font-semibold hover:underline">OBP Hesaplama</Link> aracımızı kullanabilirsin.
                        </p>

                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
