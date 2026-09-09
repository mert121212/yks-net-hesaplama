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
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-15">15 Şubat 2026</time>
                            <span className="text-gray-600">• 10 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Denemelerde 305 Alan Bir Öğrenci Gerçek Sınavda Nasıl 350 Puan Alır?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Doğrulardan yanlışların dörtte birini düşmek işin en kolay kısmı. Asıl muamma o netlerin ÖSYM algoritmasında nasıl puana dönüştüğü. Standart sapma gerçeği ve soru değeri efsaneleri.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Geçen yıl ocak ayının ortasında bir öğrencim elinde deneme karnesiyle odaya girdi. Yüzü kireç gibiydi: &quot;Hocam altı aydır nefes almadan soru çözüyorum, netlerim artıyor ama puanım 310&apos;un üstüne bir türlü çıkmıyor. Olmuyor işte, bırakacağım.&quot;
                        </p>

                        <p>
                            Karnesini önüme çektim. Netlerine baktım: Türkçeden 33 net, Temel Matematikten 24 net, AYT Edebiyattan 19 net çıkarmıştı. &quot;Bak&quot; dedim, &quot;çözdüğün bu kurum denemesinin puanlama yazılımı, soruların aşırı zor olduğu 2021 YKS parametreleriyle çalışıyor. Sen bu netleri şu an gerçek sınavda çıkarsan en az 350 puan alırsın, rahat bir nefes al.&quot;
                        </p>

                        <p>
                            Nitekim temmuz sabahı sınav sonuç belgesi geldiğinde yerleştirme puanı 354 çıktı ve öğrencim ilk tercihine yerleşti. 
                        </p>

                        <p>
                            Öğrencileri en çok yıpratan şey başarısızlık değil; başarılarını nasıl ölçeceklerini bilmemeleridir. Gelin şu net ve puan hesaplama mekanizmasının röntgenini birlikte çekelim.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4 Yanlış 1 Doğruyu Götürür Kuralı Tam Olarak Nasıl İşler?
                        </h2>
                        <p>
                            ÖSYM&apos;nin temel kuralı çok yalındır: Her yanlış cevabınız, o testteki doğru sayınızdan 0,25 puan siler. Yani 4 yanlış işaretleme yaptığınızda, alın teriyle çözdüğünüz 1 adet tam doğru cevabınız buharlaşıp uçar.
                        </p>
                        
                        <div className="bg-slate-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-6">
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Net Hesaplama Formülü</h3>
                            <p className="text-base text-slate-700 font-mono">
                                Net Sayısı = Doğru Sayısı - (Yanlış Sayısı ÷ 4)
                            </p>
                            <p className="text-sm text-slate-600 mt-2">
                                Örneğin Matematik testinde 26 doğru ve 6 yanlış yaptıysanız: 6 ÷ 4 = 1,5 doğru gider. Netiniz tam olarak <strong>24,50</strong> olur.
                            </p>
                        </div>

                        <p>
                            Burada adayların zihnini bulandıran devasa bir şehir efsanesi vardır: &quot;Matematikteki yanlışım Türkçedeki doğrumu siler mi?&quot; Kesinlikle hayır! Her test bağımsız bir adadır. Türkçenin yanlışı Türkçeyi, Kimyanın yanlışı Kimyayı götürür. Hiçbir dersin yanlışı komşu dersin doğrusuna dokunamaz.
                        </p>
                        <p>
                            Ve en önemlisi: Boş bırakılan bir soru size asla ceza puanı getirmez. Hakkında en ufak bir fikriniz olmayan bir soruyu şans eseri sallamak yerine boş bırakmak, her zaman netinizi koruyan en akıllıca hamledir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Büyük Efsane: &quot;Zor Soru Daha Çok Puan Getirir&quot; Yalanı
                        </h2>
                        <p>
                            Sınava hazırlanan gençlerin neredeyse tamamı şu yanılgıya inanır: &quot;TYT Matematik&apos;teki o 5 satırlık karmaşık olasılık sorusunu çözersem bana 5 puan gelir, baştaki basit rasyonel sayı sorusu ise 1 puan getirir.&quot;
                        </p>
                        <p>
                            Bu kocaman bir yalandır. ÖSYM&apos;nin hesaplama algoritmasında <strong>soru bazlı standart sapma yoktur</strong>. Matematik testindeki en kolay 1. soru ile Türkiye&apos;nin sadece yüzde 1&apos;inin çözebildiği o dehşet verici geometri sorusu size kuruşu kuruşuna <strong>aynı puanı</strong> kazandırır!
                        </p>
                        <p>
                            Standart sapma soru bazında değil, <strong>test bazında</strong> hesaplanır. Yani o yıl Matematik testi Türkiye genelinde felaket derecede zor geçmiş ve ortalama 5 nete düşmüşse; o testin genel standart sapma katsayısı yükselir ve o testten çözdüğünüz her bir net (kolay ya da zor fark etmeksizin) daha değerli hale gelir.
                        </p>
                        <p>
                            Bu yüzden sınav salonunda bir soruyla inatlaşıp 4 dakikanızı gömmeyin. O zor soru için harcayacağınız sürede arkadaki 2 tane basit soruyu çözün; hanenize iki kat daha fazla puan yazdırın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Derslerin Katsayı Karşılaştırması: Şaşırtıcı Sonuç
                        </h2>
                        <p>
                            TYT&apos;de Türkçe ve Matematik sorularının getirdiği ham puan yaklaşık 1,32 ile 1,34 puan bandındadır. Fen ve Sosyal testlerinin net başına getirisi ise yaklaşık 1,36 puandır.
                        </p>
                        <p>
                            Evet, doğru okudunuz. Türkiye genelinde Fen ve Sosyal ortalamaları daha düşük kaldığı için, o testlerdeki tek bir net puan olarak Türkçeden milimetrik olarak daha bile avantajlı olabilmektedir. &quot;Ben Sayısalcıyım Tarihe bakmam&quot; ya da &quot;Ben Eşit Ağırlıkçıyım Kimya çözmem&quot; diyen öğrenciler, bedava puanları masada bırakıp sonra sınav sonucunda hayal kırıklığına uğrarlar.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Netlerinizi Güncel Katsayılarla Hesaplayın</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                Deneme doğru ve yanlışlarınızı girin; ÖSYM&apos;nin güncel standart sapma ve katsayı modellerine göre gerçek sınav puanınızı anında görün.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                YKS Net ve Puan Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlginizi Çekebilecek İpuçları</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">1 Net Kaç Kişi Öne Atar? →</p>
                                    <p className="text-xs text-gray-600 mt-1">Yığılma bölgelerinde tek bir doğru cevabın inanılmaz etkisi.</p>
                                </Link>
                                <Link href="/blog/tyt-net-hesaplama-rehberi" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">TYT Net Hesaplama Rehberi →</p>
                                    <p className="text-xs text-gray-600 mt-1">TYT testlerinin ağırlıkları ve turlama stratejisi detayları.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
