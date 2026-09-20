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
                            Her pazartesi sabahı dershanenin panosunun önünde aynı dram yaşanır:
                        </p>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg text-amber-950 italic text-base my-4">
                            &quot;Hocam geçen hafta 68 nete 335 puan vermişti deneme. Bu hafta 72 net yaptım, 328 puan geldi! Netim 4 tane arttı ama puanım düştü, bu sistem benimle kafa mı buluyor?&quot;
                        </div>

                        <p>
                            Kimse seninle kafa bulmuyor kardeşim.
                        </p>

                        <p>
                            Piyasadaki deneme kulüplerinin yarısı sınav puanını kafasına göre hesaplar. Kimi gider 2021&apos;in o kriz sınavının katsayılarını basar, puanı göklere çıkarır; kimi de 2022&apos;nin kolay sınavına göre hesaplar, moralini sıfıra indirir.
                        </p>

                        <p>
                            Asıl gerçeği bilmek istiyorsan, gel şu 4 yanlış kuralından &quot;zor soru daha çok puan getirir&quot; yalanına kadar her şeyi bir bir masaya yatıralım.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. 4 Yanlış 1 Doğruyu Nasıl Yer? (O Çeyrek Puan Can Yakar)
                        </h2>
                        <p>
                            ÖSYM&apos;nin kuralı nettir: Her derste doğru sayından, yaptığın yanlış sayısının dörtte biri çıkarılır. 
                        </p>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-6">
                            <h3 className="font-bold text-blue-950 text-lg mb-2">Resmi Net Formülü</h3>
                            <p className="text-lg text-blue-900 font-mono font-semibold">
                                Net = Doğru Sayısı - (Yanlış Sayısı ÷ 4)
                            </p>
                            <p className="text-sm text-blue-900 mt-2">
                                Her 1 yanlış cevap = <strong>-0.25 net</strong> demektir. Yani bilmeden salladığın her yanlış soru, sadece o soruyu yakmakla kalmaz; alnının teriyle çözdüğün başka bir sorunun da çeyreğini gasp eder.
                            </p>
                        </div>

                        <p>
                            Hemen somut bakalım:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>TYT Türkçe&apos;de 33 doğru, 7 yanlış yaptın diyelim.</li>
                            <li>7 ÷ 4 = 1.75 doğru silinir.</li>
                            <li>Kalan netin: 33 - 1.75 = <strong>31.25 Net</strong>. O küsurlar işte bu çeyrek kayıplardan gelir.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. &quot;Matematikte Çok Yanlış Yaparsam Türkçe Netim Gider mi?&quot;
                        </h2>
                        <p>
                            Korkma: <strong>Asla ve kat&apos;a gitmez!</strong>
                        </p>
                        <p>
                            ÖSYM her testi kendi içinde ayrı bir havuz olarak görür. Türkçedeki yanlış Türkçeyi yer, matematikteki yanlış matematiği yer. Matematikten 0 doğru 20 yanlış yapsan bile netin eksiye düşmez; en dip olarak <strong>0.00</strong> yazılır. Türkçedeki 35 netine kimse elini süremez.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. En Büyük Şehir Efsanesi: &quot;Zor Soru Daha Çok Puan Getirir&quot;
                        </h2>
                        <p>
                            Sınava hazırlananların en az %85&apos;inin inandığı devasa bir yalandır bu.
                        </p>
                        <p>
                            Öğrenci zanneder ki TYT Matematik&apos;teki o 1 sayfa süren yeni nesil problem 5 puan getirir; ilk sayfadaki &quot;a + b toplamı kaçtır&quot; sorusu 1 puan getirir.
                        </p>
                        <p>
                            <strong>Hayır, koca bir hayır!</strong>
                        </p>
                        <p>
                            Aynı testin içindeki 1. soru ile 40. sorunun puan değeri kuruşu kuruşuna aynıdır. Türkiye genelinde sadece 200 dahinin çözdüğü o kütük geometri sorusu ile ilkokul çocuğunun çözeceği rasyonel sayı sorusu, sınav puanına <strong>tıpatıp aynı puanı</strong> ekler.
                        </p>
                        <p>
                            Standart sapma soru bazında değil; <strong>test bazında</strong> hesaplanır. Yani Matematik genel olarak tüm Türkiye&apos;ye zor gelmişse, Matematik testinin genel çarpanı artar. Ama testin kendi içinde sorular arasında sınıf ayrımı yoktur.
                        </p>
                        <p>
                            Bu ne anlama geliyor biliyor musun? Bir zor soruyla 6 dakika inatlaşıp canını çıkaracağına, arkadaki 3 tane tek satırlık çerez soruyu çözmek sana tam 3 kat daha fazla puan kazandırır! Akıllı adam egosuyla değil, puan hesabıyla soru çözer.
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
                            Fark ettiysen Fen ve Sosyal netlerinin getirisi en az Türkçe ve Matematik kadardır; hatta bazen milimetrik olarak daha fazladır. &quot;Ben EA&apos;cıyım Fene bakmam&quot; demek, cebindeki parayı yere saçmakla aynı şeydir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            5. Bilmediğin Soruyu Sallamalı mısın? (Kumarbazın Matematiksel Sonu)
                        </h2>
                        <p>
                            İki şıkka indiremediğin hiçbir soruyu sakın işaretleme.
                        </p>
                        <p>
                            5 şıklı bir testte rastgele sallarsan tutturma şansın sadece %20&apos;dir. Kaybetme şansın ise %80! Bu şekilde 4 soru salladığında istatistik affetmez: 1 doğru 3 yanlış yaparsın, elinde kalan net <strong>0.25 net</strong> gibi komik bir kırıntı olur. Hatta çoğu zaman 4 yanlış yapıp cepteki 1 tam doğrundan olursun.
                        </p>
                        <p>
                            Ama iki şıkkı eledin, geriye sadece 2 seçenek kaldı; yani şansın %50-%50 mi oldu? İşte o zaman mantığına en çok yatanı işaretle. Çünkü orada olasılık matematiği senin lehine çalışır.
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
