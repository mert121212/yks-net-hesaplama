import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'

export const metadata: Metadata = {
    title: 'YKS\'de 1 Net Kaç Bin Kişi Atar? (Yığılma ve Standart Sapma Etkisi)',
    description: 'YKS (TYT-AYT) sınavında 1 netin sıralamaya etkisi. Yığılma noktalarında 1 net kaç kişiyi geride bırakır? SAY, EA, SÖZ 2027 analiz.',
    keywords: '1 net kaç kişi atar, yks 1 netin etkisi, tyt 1 net kaç kişi atar, ayt 1 net kaç kişi atar, yks yığılma, standart sapma yks',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar' },
    openGraph: {
        title: 'YKS\'de 1 Netin Gücü: Sınavı Kazandıran O Tek Soru',
        description: 'Özellikle 50.000-150.000 bandında 1 tek netin sıralamayı nasıl değiştirdiğini örneklerle anlattık.',
        type: 'article',
        publishedTime: '2026-02-13',
        modifiedTime: '2026-02-16',
        url: 'https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar',
        images: [
            {
                url: '/og-image.jpg',
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
                    title="YKS'de 1 Net Kaç Bin Kişi Atar? (Yığılma ve Standart Sapma Etkisi)"
                    description="YKS (TYT-AYT) sınavında 1 netin sıralamaya etkisi. Yığılma noktalarında 1 net kaç kişiyi geride bırakır? SAY, EA, SÖZ 2027 analiz."
                    datePublished="2026-02-13"
                    dateModified="2026-02-16"
                    url="https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar"
                    keywords={['1 net kaç kişi atar', 'yks 1 netin etkisi', 'tyt 1 net kaç kişi atar', 'ayt 1 net kaç kişi atar', 'yks yığılma', 'standart sapma yks']}
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
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">İstatistik & Analiz</span>
                            <time className="text-gray-600" dateTime="2026-02-13">13 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                            YKS&apos;de 1 Net Kaç Kişi Atar? Yığılma Gerçeği ve Katsayılar
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Sınav anında &quot;Aman bir sorudan ne çıkar&quot; deyip boş bıraktığın o tek kutucuk, Temmuz ayında binlerce kişilik sıralama farkına dönüşebiliyor. İşte ÖSYM yığınsal verilerinin söylediği çıplak gerçek.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-800 space-y-6 mt-8 leading-relaxed">
                        <p className="text-lg">
                            Sınav salonunda son 15 dakika uyarısı yapıldığında masalardan gelen o derin nefes sesini sınava giren herkes bilir. Önündeki soruya bakarsın; biraz uğraştırıcıdır. &quot;Neyse ya, alt tarafı 1 soru&quot; deyip kalemi bırakmak o an dünyanın en masum hareketi gibi gelir.
                        </p>
                        
                        <p>
                            Oysa o tek soru, ÖSYM sonuç ekranında tek bir soru olarak kalmıyor. Bazen koca bir amfiyi, bazen de istediğin üniversitenin kontenjanını tamamen dolduracak kadar adayı temsil ediyor.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
                            Her Yerde Aynı Değil: Hangi Sıralama Bandındasın?
                        </h2>

                        <p>
                            İnternette sağda solda dönen &quot;1 net seni garanti 5 bin kişi fırlatır&quot; ezberine hemen inanmayın. Çünkü durduğun yere göre o tek bir netin ağırlığı baştan aşağı değişir:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>İlk 5.000 bandı:</strong> Puan makasının en açık olduğu yerdir. Buradaki adaylar zaten testleri silip süpürmüştür. Ekstra 1 net seni en fazla 80-150 kişi ileri taşır; çünkü önünde geçebileceğin fazla aday kalmamıştır.</li>
                            <li><strong>40.000 ile 100.000 bandı:</strong> Asıl fırtına burada kopar. YKS&apos;nin en yoğun yığılma bölgesi burasıdır. Adayların puanları virgüllerle birbirine yapışır. İşte bu aralıkta yapacağın tek bir net, seni bir anda 3.000 ila 6.000 kişinin önüne geçirebilir.</li>
                            <li><strong>120.000 ve sonrası:</strong> Kalabalık iyice sıklaşır. Burada sadece doğru bir soru değil, yanlış işaretlediğin için hanenden silinen o 0,25 net bile arkana yüzlerce adayın doluşmasına yeter.</li>
                        </ul>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8">
                            <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                                ÖSYM Yığınsal Analizi
                            </span>
                            <h3 className="text-xl font-bold text-white mb-2">
                                Hangi Sıralama Diliminde +1 Netin Gerçek Karşılığı Nedir?
                            </h3>
                            <p className="text-xs text-slate-300 mb-4">
                                Türkiye genelinde 3 milyon adayın yarıştığı bir sınavda 1 netin etkisi doğrusal değildir; adeta çan eğrisinin ortasında patlama yapar:
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full text-xs text-left text-slate-200 border border-slate-700">
                                    <thead className="bg-slate-800 text-slate-100 uppercase">
                                        <tr>
                                            <th className="p-3 border-b border-slate-700">Mevcut Sıralaman</th>
                                            <th className="p-3 border-b border-slate-700 text-center">+1 TYT Netinin Etkisi</th>
                                            <th className="p-3 border-b border-slate-700 text-center text-emerald-400 font-bold">+1 AYT Netinin Etkisi</th>
                                            <th className="p-3 border-b border-slate-700">Saha Notu</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800 font-mono">
                                        <tr>
                                            <td className="p-3 font-bold text-white">İlk 5.000 (Tavan)</td>
                                            <td className="p-3 text-center">40 - 80 kişi</td>
                                            <td className="p-3 text-center text-emerald-400 font-bold">120 - 250 kişi</td>
                                            <td className="p-3 text-slate-400 font-sans">Aday kalabalığı az, puan farkı açık.</td>
                                        </tr>
                                        <tr className="bg-slate-800/50">
                                            <td className="p-3 font-bold text-white">20.000 - 50.000 (Hassas)</td>
                                            <td className="p-3 text-center">400 - 800 kişi</td>
                                            <td className="p-3 text-center text-emerald-400 font-bold">1.200 - 2.500 kişi</td>
                                            <td className="p-3 text-slate-400 font-sans">Tıp ve popüler mühendislik sınırı.</td>
                                        </tr>
                                        <tr className="bg-amber-950/40 text-amber-200">
                                            <td className="p-3 font-bold text-white">60.000 - 120.000 (Ana Yığılma)</td>
                                            <td className="p-3 text-center font-bold text-amber-400">1.500 - 2.800 kişi</td>
                                            <td className="p-3 text-center font-bold text-emerald-300">3.500 - 6.200 kişi</td>
                                            <td className="p-3 text-amber-300 font-sans">1 tek soruyla fakülte kazanılır veya kaybedilir!</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 font-bold text-white">150.000 - 300.000 (Geniş Taban)</td>
                                            <td className="p-3 text-center">2.000 - 4.000 kişi</td>
                                            <td className="p-3 text-center text-emerald-400 font-bold">5.000 - 8.500 kişi</td>
                                            <td className="p-3 text-slate-400 font-sans">0,25 yanlış net bile binlerce sıra geriletir.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <QuickNetSimulator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
                            AYT Neti Neden TYT&apos;yi Katlar?
                        </h2>

                        <p>
                            Adayların deneme kulüplerinde en sık düştüğü yanılgı şudur: <em>&quot;Hocam TYT&apos;de 4 net artırdım ama deneme sıralamam neredeyse hiç oynamadı, moralim çok bozuk.&quot;</em>
                        </p>

                        <p>
                            Oynamaz tabii. Çünkü 4 yıllık bir lisans programına yerleşmek istiyorsan, genel yerleştirme puanının <strong>%60&apos;ı doğrudan AYT&apos;den</strong> gelir. TYT&apos;nin payı ise sadece %40&apos;tır.
                        </p>

                        <p>
                            Üstelik soru sayılarına dikkat et: TYT&apos;de 120 soru varken, AYT&apos;de alanına göre yalnızca 80 soru çözersin. Soru sayısı üçte bir oranında daha az ama sınav puanına etkisi %50 daha fazla!
                        </p>

                        <p>
                            Basit bir hesap yapalım: AYT&apos;deki 1 matematik sorusunun getirdiği ham puan katkısı, TYT&apos;deki bir matematik sorusunun yaklaşık <strong>2,2 katıdır</strong>. Yani AYT&apos;de işaretleyeceğin tek bir doğru integral veya edebiyat sorusunun ağırlığını yakalamak için TYT&apos;de 2&apos;den fazla net çıkarmak zorundasın. Son aylarda panikle sadece TYT denemesi çözüp AYT konu tekrarlarını erteleyen öğrencilerin Temmuz ayında sıralama şoku yaşamasının bir numaralı sebebi tam olarak budur.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
                            Şehir Efsanesi: &quot;Zor Soruyu Çözen Çok Fazla Puan Alır mı?&quot;
                        </h2>

                        <p>
                            Bu, YKS hazırlığındaki en yaygın ve en tehlikeli şehir efsanesidir: <em>&quot;Bu geometri sorusunu kimse yapamaz, ben çözersem standart sapmadan uçarım.&quot;</em>
                        </p>

                        <p>
                            Maalesef öyle bir sistem yok. ÖSYM standart sapmayı tek tek soruların zorluğuna göre değil, <strong>testin genel ortalamasına göre</strong> hesaplar.
                        </p>

                        <p>
                            Yani TYT Matematik testindeki o olimpiyat seviyesi yeni nesil mantık sorusuyla, ilk sayfadaki &quot;a + b = ?&quot; şeklindeki iki satırlık basit işlem sorusunun getirdiği ham puan tamamen aynıdır!
                        </p>

                        <p className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-500 text-amber-950 text-sm">
                            <strong>Sınav Salonu Taktığı:</strong> Bir soruyla 5 dakika inatlaşıp arkada duran 3 tane çerez soruyu göremeden süre uyarısı almak, kendi ayağına kurşun sıkmaktır. Derece yapan öğrencilerin sırrı en zor soruları çözebilmeleri değil; kolay soruları sıfır fireyle ve seri biçimde cebe indirmeleridir.
                        </p>

                        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-3xl p-8 my-10 text-center text-white shadow-xl">
                            <h3 className="text-2xl font-extrabold mb-2">Senin 1 Netin Kaç Kişiyi Öne Atıyor?</h3>
                            <p className="text-blue-100 mb-6 text-sm max-w-xl mx-auto">
                                Hesaplayıcımıza girin. Mevcut netlerinize sadece +1 AYT neti ekleyin ve sıralamanızın kaç basamak değiştiğini canlı görün.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-900 px-8 py-3.5 rounded-xl font-black hover:bg-blue-50 transition-all shadow-md hover:scale-105">
                                1 Netin Gücünü Test Et →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
