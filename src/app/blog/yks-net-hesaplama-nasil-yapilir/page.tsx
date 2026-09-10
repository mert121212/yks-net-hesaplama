import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Net Hesaplama Nasıl Yapılır? 4 Yanlış 1 Doğruyu Nasıl Götürür?',
    description: 'YKS net hesaplama formülü, 4 yanlış kuralının test bazlı işleyişi, standart sapmanın getirdiği puanlar ve zor soruların puan efsanesi.',
    keywords: 'yks net hesaplama, tyt net hesaplama, 4 yanlış 1 doğruyu götürür mü, standart sapma yks, yks katsayılar 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir' },
    openGraph: {
        title: 'YKS Net Hesaplama: Denemelerdeki Puan Yanılgıları ve Gerçekler',
        description: 'Netlerin puana dönüşüm formülleri, standart sapma ve sınav anı stratejileri.',
        type: 'article',
        publishedTime: '2026-02-15',
        modifiedTime: '2026-02-18',
        url: 'https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir',
        images: [
            {
                url: '/og-image.jpg',
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
                    title="YKS Net Hesaplama Nasıl Yapılır? 4 Yanlış 1 Doğruyu Nasıl Götürür?" 
                    description="YKS net hesaplama formülü, 4 yanlış kuralının test bazlı işleyişi, standart sapmanın getirdiği puanlar ve zor soruların puan efsanesi."
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
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Katsayı ve Formüller</span>
                            <time className="text-gray-600" dateTime="2026-02-15">15 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS Net Hesaplama Nasıl Yapılır? (4 Yanlış Kuralı ve Puan Efsaneleri)
                        </h1>
                        <p className="text-xl text-gray-600">
                            Doğrulardan yanlışların dörtte birini çıkarmak işin en basit kısmı. Asıl karmaşa o netlerin ÖSYM sisteminde nasıl puana dönüştüğünde başlıyor.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her deneme sınavı sonrasında rehberlik odasında dönen değişmez bir diyalog vardır:
                        </p>

                        <div className="bg-slate-100 border-l-4 border-slate-500 p-4 rounded-r-lg text-slate-800 italic text-base my-4">
                            &quot;Hocam geçen hafta 70 nete 340 puan vermişti dershanenin sistemi. Bu hafta 73 net yaptım, 332 puan geldi. Netim arttı ama puanım düştü, böyle saçmalık olur mu?&quot;
                        </div>

                        <p>
                            Olur. Çünkü piyasadaki deneme kulüplerinin ve yayınevlerinin kullandığı yazılımlar genellikle sabit bir katsayı şablonuyla çalışır. Kimi yayınevi 2021&apos;in aşırı zor katsayılarını baz alır, puanı uçurur. Kimi de 2022&apos;nin kolay sınav verilerini koyar, puanı yerin dibine çeker. 
                        </p>

                        <p>
                            Gerçekte ise sistem çok net kurallara dayanır. Gelin 4 yanlış kuralından standart sapmanın iç yüzüne kadar her ayrıntıyı basamak basamak konuşalım.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Formülün Temeli: 4 Yanlış 1 Doğruyu Nasıl Götürür?
                        </h2>
                        <p>
                            ÖSYM kılavuzundaki kural gayet açıktır: Her testte adayın doğru cevap sayısından, yanlış cevap sayısının dörtte biri çıkarılır ve o testin ham neti elde edilir.
                        </p>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-6">
                            <h3 className="font-bold text-blue-950 text-lg mb-2">Resmi Net Formülü</h3>
                            <p className="text-lg text-blue-900 font-mono font-semibold">
                                Net = Doğru Sayısı - (Yanlış Sayısı ÷ 4)
                            </p>
                            <p className="text-sm text-blue-800 mt-2">
                                Her 1 yanlış cevap = <strong>-0,25 net</strong> demektir. 
                                Yani 1 yanlış yaptığınızda aslında sadece o soruyu kaybetmezsiniz; hanenizdeki doğrunun çeyreğini de feda edersiniz.
                            </p>
                        </div>

                        <p>
                            Somut bir örnek üzerinden gidelim:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>TYT Türkçe: 32 Doğru, 8 Yanlış işaretlediniz.</li>
                            <li>8 ÷ 4 = 2 doğru silinir.</li>
                            <li>Kalan netiniz: 32 - 2 = <strong>30,00 Net</strong>.</li>
                        </ul>

                        <p>
                            Peki 5 yanlış yaparsanız ne olur? 5 ÷ 4 = 1,25 doğru silinir. Küsurlu netler buradan doğar (örneğin 28,75 net).
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. &quot;Matematik Yanlışım Türkçedeki Doğrumu Siler mi?&quot;
                        </h2>
                        <p>
                            Cevap çok net: <strong>Hayır, kesinlikle silemez.</strong>
                        </p>
                        <p>
                            ÖSYM sisteminde her test kendi kapalı havuzudur. 
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Türkçe testindeki yanlışlar yalnızca Türkçedeki doğruları götürür.</li>
                            <li>Matematikteki yanlışlar yalnızca Temel Matematik testini bağlar.</li>
                            <li>Sosyal Bilimler testinde 0 doğru 5 yanlış yapsanız dahi netiniz en fazla <strong>0,00</strong> olarak kalır, eksiye düşmez ve diğer derslerin doğrularına asla dokunmaz.</li>
                        </ul>
                        <p>
                            Dolayısıyla &quot;aman matematikte çok yanlış yaparsam Türkçe netlerim erir&quot; korkusu tamamen asılsızdır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. En Büyük Yanılgı: &quot;Zor Soru Daha Çok Puan Getirir mi?&quot;
                        </h2>
                        <p>
                            Bu, sınava hazırlanan öğrencilerin en az %80&apos;inin inandığı devasa bir şehir efsanesidir. Birçok öğrenci TYT Matematik&apos;teki o yarım sayfalık yeni nesil olasılık sorusunu çözerse 5 puan, baştaki basit işlem sorusunu çözerse 1 puan alacağını zanneder.
                        </p>
                        <p>
                            Gerçek durum şudur: <strong>ÖSYM soru bazlı puanlama yapmaz.</strong>
                        </p>
                        <p>
                            Aynı testin içindeki 1. soru ile 40. sorunun puan değeri kuruşu kuruşuna aynıdır. Türkiye genelinde sadece 500 kişinin doğru yaptığı geometri sorusu ile herkesin 10 saniyede çözdüğü toplama çıkarma sorusu, TYT ham puanınıza birebir aynı katkıyı verir.
                        </p>
                        <p>
                            Standart sapma <strong>soru bazında değil, test bazında</strong> hesaplanır. Yani o yıl Matematik testi Türkiye genelinde çok zor geçmişse ve Türkiye ortalaması 5 nete düşmüşse, Matematik testinin genel katsayısı yükselir. Ama o testin içindeki soruların kendi aralarında puan hiyerarşisi yoktur.
                        </p>
                        <p>
                            Bu gerçeği bilmek sınav stratejinizi doğrudan değiştirir: 1 zor soruyla 5 dakika inatlaşmak yerine, o sürede 3 tane kolay soru çözmek size 3 kat fazla puan kazandırır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. TYT ve AYT&apos;de Yaklaşık Net Katsayıları Ne Durumda?
                        </h2>
                        <p>
                            ÖSYM her yıl sınav tamamlandıktan sonra adayların ortalama netlerine göre standart sapma hesaplar. Bu nedenle virgülden sonraki küsuratlar yıldan yıla ufak dalgalanmalar gösterir. Ancak genel ortalamalar bize çok net bir çerçeve sunar:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead className="bg-gray-100 text-gray-800 text-sm">
                                    <tr>
                                        <th className="p-3 border">Test</th>
                                        <th className="p-3 border">Soru Sayısı</th>
                                        <th className="p-3 border">1 Netin Yaklaşık TYT Puan Değeri</th>
                                        <th className="p-3 border">Yerleştirmeye Katkısı</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">TYT Türkçe</td>
                                        <td className="p-3 border">40</td>
                                        <td className="p-3 border">~1,32 - 1,34 Puan</td>
                                        <td className="p-3 border">Tüm puan türlerini etkiler</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">TYT Temel Matematik</td>
                                        <td className="p-3 border">40</td>
                                        <td className="p-3 border">~1,33 - 1,35 Puan</td>
                                        <td className="p-3 border">Tüm puan türlerini etkiler</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">TYT Sosyal Bilimler</td>
                                        <td className="p-3 border">20</td>
                                        <td className="p-3 border">~1,35 - 1,37 Puan</td>
                                        <td className="p-3 border">Tüm puan türlerini etkiler</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">TYT Fen Bilimleri</td>
                                        <td className="p-3 border">20</td>
                                        <td className="p-3 border">~1,36 - 1,38 Puan</td>
                                        <td className="p-3 border">Tüm puan türlerini etkiler</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Fark ettiyseniz TYT Fen ve Sosyal netlerinin getirisi en az Türkçe ve Matematik kadardır, hatta Türkiye ortalaması daha düşük kaldığı yıllarda milimetrik olarak daha fazla puan getirir. Bu yüzden &quot;Ben Eşit Ağırlıkçıyım, Fen&apos;e bakmam&quot; ya da &quot;Sayısalcıyım, Tarih ve Coğrafya ile uğraşmam&quot; tavrı, bedava puanları çöpe atmaktan farksızdır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            5. Bilmediğin Soruyu Sallamalı mısın? (Rasyonel Hesap)
                        </h2>
                        <p>
                            İki şıkka indiremediğiniz hiçbir soruyu rastgele işaretlemeyin. 
                        </p>
                        <p>
                            5 seçenekli bir sınavda körlemesine salladığınızda tutturma ihtimaliniz %20&apos;dir. Kaybetme ihtimaliniz ise %80. Dört defa böyle kumar oynadığınızda istatistiki olarak 1 doğru 3 yanlış yaparsınız ve elinizde kalan net <strong>0,25 net</strong> gibi komik bir rakam olur. Çoğu zaman da 4 yanlış yapıp cepteki 1 tam doğrunuzu kaybedersiniz.
                        </p>
                        <p>
                            Fakat iki şık arasında kaldıysanız, yani ihtimal %50&apos;ye yükselmişse, o zaman mantığınıza en yakın gelen şıkkı işaretlemek uzun vadede beklenen değeri pozitif bir hamledir.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 my-10 text-center text-white shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">Doğru ve Yanlışlarınızı Girin, Net Puanınızı Görün</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm">
                                Gelişmiş hesaplama aracımız, ÖSYM&apos;nin güncel standart sapma algoritmalarını simüle ederek gerçek sınav puanınızı ve tahmini sıralama bandınızı hesaplar.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-700 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow">
                                YKS Net ve Puanını Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sıradaki Okuma Önerileri</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-blue-100">
                                    <p className="font-semibold text-blue-900">1 Net Kaç Kişi Öne Atar? →</p>
                                    <p className="text-xs text-gray-600 mt-1">Yığılma bölgelerinde tek bir doğru cevabın getirdiği sıra sıçraması.</p>
                                </Link>
                                <Link href="/blog/yks-kac-net-kac-puan" className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors border border-purple-100">
                                    <p className="font-semibold text-purple-900">YKS Kaç Net Kaç Puan Getirir? →</p>
                                    <p className="text-xs text-gray-600 mt-1">300, 400 ve 450 puan hedefleri için gereken gerçek net tabloları.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
