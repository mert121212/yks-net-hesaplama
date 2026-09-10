import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'

export const metadata: Metadata = {
    title: 'TYT Net Hesaplama Rehberi 2027 | Testlerin Ağırlıkları ve Puan Matematiği',
    description: 'TYT net hesaplama mantığı, test katsayıları, eşit ağırlıkçının fen çözme taktiği ve turlama yöntemiyle net artırma stratejileri.',
    keywords: 'tyt net hesaplama, tyt katsayıları, tyt puan hesaplama 2027, tyt matematik katsayısı, yks net hesaplama',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-net-hesaplama-rehberi' },
    openGraph: {
        title: 'TYT Net Hesaplama: Sınavın Puan Mantığını Çözüyoruz',
        description: 'TYT testlerinin ağırlıkları, katsayıları ve sınav anı stratejileri.',
        type: 'article',
        publishedTime: '2026-02-12',
        modifiedTime: '2026-02-15',
        url: 'https://yksnethesapla.com/blog/tyt-net-hesaplama-rehberi',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'TYT Net Hesaplama Rehberi 2027'
            }
        ],
    },
}

export default function TYTNetHesaplamaRehberi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="TYT Net Hesaplama Rehberi 2027 | Testlerin Ağırlıkları ve Puan Matematiği" 
                    description="TYT net hesaplama mantığı, test katsayıları, eşit ağırlıkçının fen çözme taktiği ve turlama yöntemiyle net artırma stratejileri."
                    datePublished="2026-02-12"
                    dateModified="2026-02-15"
                    url="https://yksnethesapla.com/blog/tyt-net-hesaplama-rehberi"
                    keywords={['tyt net hesaplama', 'tyt katsayıları', 'tyt puan hesaplama 2027', 'tyt matematik katsayısı', 'yks net hesaplama']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Net Hesaplama</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-12">12 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT Net Hesaplama Mantığı: Hangi Derse Ne Kadar Asılmalısın?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Puanın arka planda nasıl işlendiğini bilmeden sınava giren öğrenci, en kazık soruyla dakikalarını yakar. Test ağırlıkları, standart puan katsayıları ve sınav anı stratejisi.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Deneme sınavı bittiğinde koridorda dönen ilk muhabbet hep aynıdır. Herkes eline kırmızı kalemi alır, doğruları yanlışları sayar ve yanındakine döner:
                        </p>
                        <p className="border-l-4 border-blue-500 pl-4 italic text-gray-800 font-medium">
                            — &quot;Ben 74 net yaptım 348 geldi, sen nasıl 71 netle 353 aldın? Bu optik yanlış okunmuş olmasın?&quot;
                        </p>
                        <p>
                            Optikte hata falan yok. Sistem gayet tıkır tıkır çalışıyor. Çünkü ÖSYM toplam nete bakıp sıraya dizmiyor adamı. Hangi dersten kaç net kopardığına, o testin o yılki Türkiye ortalamasına ve soru başına harcadığın dakikanın karşılığına bakar.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            100 Taban Puan: Optiği Boş Veren Bile Alıyor mu?
                        </h2>
                        <p>
                            Sınav sabahı sıraya oturdun. Optik forma adını, soyadını, T.C. kimlik numaranı kodladın. Kitapçığın kapağını bile açmadan sürenin sonunda kağıdı gözetmene teslim ettin.
                        </p>
                        <p>
                            Sonuç belgende ne yazar biliyor musun? Tam 100 puan.
                        </p>
                        <p>
                            ÖSYM sınava giren her adaya bu 100 puanlık avansı peşin verir. Yarış sıfırdan değil, 100 barajından başlar. Senin asıl kavgan, o 100 puanın üstüne 120 sorudan ne kadar ekleyebileceğinle ilgilidir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            120 Sorunun Arka Planındaki Yüzdeler
                        </h2>
                        <p>
                            Herkesin kafasını karıştıran katsayı meselesi aslında sanıldığı kadar karmaşık değil. Testlerin TYT puanına katkı payları bellidir:
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 not-prose">
                            <div className="bg-red-50 p-4 rounded-xl border border-red-200 text-center">
                                <span className="text-xs font-bold uppercase tracking-wider text-red-700">Temel Taşı</span>
                                <h3 className="font-bold text-red-900 text-lg mt-1">Türkçe</h3>
                                <p className="text-3xl font-black text-red-600 my-1">%33</p>
                                <p className="text-xs text-red-700 font-medium">40 Soru (~1,32 Puan/Net)</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 text-center">
                                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Bel Kemiği</span>
                                <h3 className="font-bold text-blue-900 text-lg mt-1">Matematik</h3>
                                <p className="text-3xl font-black text-blue-600 my-1">%33</p>
                                <p className="text-xs text-blue-700 font-medium">40 Soru (~1,32 Puan/Net)</p>
                            </div>
                            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-center">
                                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Gizli Hazine</span>
                                <h3 className="font-bold text-emerald-900 text-lg mt-1">Fen Bilimleri</h3>
                                <p className="text-3xl font-black text-emerald-600 my-1">%17</p>
                                <p className="text-xs text-emerald-700 font-medium">20 Soru (~1,36 Puan/Net)</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-center">
                                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Seri Kazanç</span>
                                <h3 className="font-bold text-amber-900 text-lg mt-1">Sosyal Bilimler</h3>
                                <p className="text-3xl font-black text-amber-600 my-1">%17</p>
                                <p className="text-xs text-amber-700 font-medium">20 Soru (~1,36 Puan/Net)</p>
                            </div>
                        </div>

                        <p>
                            Bakın burada çok net bir matematik var: Türkçe ve Matematik tek başlarına sınavın tam üçte ikisini oluşturur. Ama işin püf noktası şu: Fen ve Sosyal testlerinde Türkiye genel ortalaması daha düşük çıktığı için, bir Fen veya Sosyal neti bazen Matematik netinden milimetrik olarak daha fazla puan getirebilir.
                        </p>

                        <QuickNetSimulator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Pahalı Hata: &quot;Ben Eşit Ağırlığım / Sözelim, Fene Dokunmam&quot;
                        </h2>
                        <p>
                            Bu ön yargı yüzünden her sene binlerce derece adayı elindeki avantajı çöpe atıyor.
                        </p>
                        <p>
                            Bir eşit ağırlık öğrencisini düşünelim. Aylarca çalışmış, geometride o karmaşık üçgen sorusuna takılmış. 4 dakika harcıyor, 5 dakika harcıyor, çıkmıyor. Sinirden eli ayağına dolaşıyor. Belki de sonunda yanlış işaretleyip bir de 0,25 net kaybediyor.
                        </p>
                        <p>
                            Aynı çocuğun önündeki kitapçıkta 9. sınıf fen bilgisi soruları duruyor.
                        </p>
                        <p>
                            Örneğin: &quot;Aşağıdakilerden hangisi saf maddedir?&quot; veya temel bir hücre zarı sorusu.
                        </p>
                        <p>
                            Okuyup işaretleme süresi 25 saniye. Getirdiği puan ise o 5 dakika harcanan geometri sorusuyla tamamen aynı!
                        </p>
                        <p>
                            TYT&apos;de alan ayrımı falan yoktur. Sayısalcının çözdüğü felsefe sorusu ile sözelcinin çözdüğü fizik sorusu puan havuzunda eşit değere sahiptir. Soru ayrımı yapan öğrenci, sınav masasında bedava puan bırakır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            165 Dakikayı Yönetmek: İnatlaşan Kaybeder
                        </h2>
                        <p>
                            TYT bir zeka yarışması değildir. TYT, kısıtlı sürede soğukkanlı kalıp en karlı soruları seçebilme sınavıdır.
                        </p>
                        <p>
                            Diyelim ki 22. sorudasın. Uzun bir Türkçe paragrafı. Okudun, son cümleye geldin ama zihnin dağıldı, hiçbir şey anlamadın.
                        </p>
                        <p>
                            Burada yapılan klasik hata: Hemen başa dönüp hırsla aynı metni bir daha okumak. İkinci dakikaya girdin, üçüncü dakikaya girdin... O soruyu doğru çözsen bile kaybettin. Çünkü arkadaki iki tane basit matematik sorusunun süresini o paragrafa kurban ettin.
                        </p>
                        <p>
                            Kural çok net: Bir soru 40-45 saniye içinde sana kendini açmıyorsa, soru numarasının yanına küçük bir yuvarlak koy ve hemen sonraki soruya atla.
                        </p>
                        <p>
                            İlk 80-90 dakikayı sadece ilk bakışta &quot;ben bunu tek hamlede çözerim&quot; dediğin basit ve orta sorulara ayır. Heybene 55-60 neti koyduktan sonra arkana yaslan, bir yudum su iç ve işaretlediğin o uğraştırıcı sorulara dön. Zihnin sakinleştiğinde, o takıldığın soruların yarısının aslında ne kadar kolay olduğunu göreceksin.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Netlerinizin TYT Puanını Canlı Görün</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                Deneme netlerinizi katsayı motorumuza girin; hangi testten kaç puan aldığınızı ve Türkiye geneli tahmini yerinizi anında öğrenin.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                TYT Puanını Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Göz Atmanız Gereken Diğer Stratejiler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-kesin-cikan-konular" className="p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                                    <p className="font-semibold text-emerald-900">TYT&apos;de Her Yıl Kesin Çıkan Konular →</p>
                                    <p className="text-xs text-gray-600 mt-1">ÖSYM&apos;nin soru havuzunda asla vazgeçmediği garanti konu başlıkları.</p>
                                </Link>
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">1 Net Kaç Kişi Öne Atar? →</p>
                                    <p className="text-xs text-gray-600 mt-1">Yığılma bölgelerinde tek bir netin sıralama çarpanı analizi.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
