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
                            <span className="text-gray-600">• 9 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT Net Hesaplamanın Mantığı: Hangi Derse Ne Kadar Asılmalısınız?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Puanın arka planda nasıl hesaplandığını bilmeyen öğrenci, sınavda en zor soruyla inatlaşıp dakikalarını yakar. Test ağırlıkları, standart puan katsayıları ve süre yönetimi sanatı.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her yıl kasım veya aralık ayı geldiğinde rehberlik odasının kapısı çalınır ve içeri aynı kafa karışıklığıyla bir öğrenci girer: &quot;Hocam, sınıftaki arkadaşım benden 3 net daha az yaptı ama deneme sonuç belgesinde benden 8 puan yukarıda görünüyor. Bu işte bir yanlışlık yok mu?&quot; 
                        </p>
                        
                        <p>
                            Hayır, sistemde hiçbir hata yok. Çünkü TYT sadece &quot;toplam kaç net yaptım&quot; oyunu değildir; o netleri hangi testlerden ve hangi maliyetle topladığınızın stratejik bir muhasebesidir.
                        </p>

                        <p>
                            ÖSYM sınav sabahı her adaya 100 puanlık bir taban avans verir. Yani optik formunuza sadece T.C. kimlik numaranızı kodlayıp tek bir soruya dokunmadan çıksanız dahi hanenize 100 taban puan yazılır. İşte asıl yarış, bu 100 puanın üstüne koyacağınız 120 soruluk dağılımda başlar.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            120 Sorunun Arka Planındaki Yüzdeler
                        </h2>
                        <p>
                            Sınav kağıdındaki testlerin puana dönüşüm oranları aslında son derece berraktır:
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
                            Gördüğünüz gibi Türkçe ve Temel Matematik, sınavın yüzde 66&apos;sını, yani tam üçte ikisini sırtlar. Fakat burada gözden kaçan muazzam bir detay vardır: Fen ve Sosyal testlerindeki soru başına düşen puan değeri, Türkiye geneli ortalamalar daha düşük olduğu için Matematik veya Türkçeden milimetrik olarak daha bile değerli çıkabilmektedir.
                        </p>

                        <QuickNetSimulator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            En Pahalı Şehir Efsanesi: &quot;Ben Eşit Ağırlıkçıyım, Fene Bakmam&quot;
                        </h2>
                        <p>
                            Yıllardır öğrencilerimin zihninden silmeye çalıştığım en zararlı ön yargı tam olarak budur. Bir eşit ağırlık öğrencisi düşünün; aylardır geometri çalışıyor, sınav anında o karmaşık üçgen sorusunu çözmek için tam 6 dakikasını gömüyor. Belki buluyor, belki işlem hatası yapıp yanlış işaretliyor. 
                        </p>
                        <p>
                            Halbuki optik formun Fen kısmında, lise 9. sınıf düzeyinde &quot;hangisi saf maddedir?&quot; veya &quot;hücre zarından hangisi geçer?&quot; tarzında, sadece 35 saniyede okunup işaretlenebilecek en az 5-6 tane tertemiz bilgi sorusu bekliyor. O 6 dakikada 3 fen sorusunu cebine koysa, getireceği puan o zor matematik sorusunun tam üç katı olacak!
                        </p>
                        <p>
                            TYT&apos;de alan ayrımı diye bir kural yoktur. TYT ortak barajdır. Sayısalcının çözdüğü Din Kültürü sorusuyla Eşit Ağırlıkçının çözdüğü Fizik sorusu aynı havuzda erir. Sahada kolay soru neredeyse, puan avcısı gibi oraya koşmak zorundasınız.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sınav Masasında Hayat Kurtaran Turlama Sanatı
                        </h2>
                        <p>
                            TYT asla bir IQ testi değildir; 165 dakikalık bir stres ve kaynak yönetimi müsabakasıdır. ÖSYM size 120 soruyu sakin sakin düşünerek çözün diye değil, baskı altındayken soğukkanlılıkla seçim yapabilme becerinizi tartmak için o süreyi verir.
                        </p>
                        <p>
                            Bir soruyu açtınız; paragrafı okudunuz ama zihniniz dağıldı, anlamadınız mı? Asla ikinci kez inatlaşıp aynı cümleyi baştan okumayın. Soru numarasının yanına küçük bir daire koyun ve hemen bir sonrakine geçin. İlk 85-90 dakikayı sadece gördüğünüz an &quot;ben bunu tek hamlede çözerim&quot; dediğiniz kolay ve orta soruları avlamaya ayırın.
                        </p>
                        <p>
                            Böylece sınavın ilk yarısı bittiğinde heybenizde 65-70 tane tertemiz doğru net birikmiş olur. O andan sonra zihninizdeki o boğucu panik duygusu dağılır; geri kalan 75 dakikayı işaretlediğiniz o uğraştırıcı sorulara rahat bir nefesle ayırabilirsiniz. 1. sorudan başlayıp 40. soruya kadar inatlaşarak giden ve 28. soruda süresi bittiği için arkadaki 12 tane basit problemi hiç göremeyen öğrencilerden olmayın.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Netlerinizin TYT Puanını Canlı Görün</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                Deneme sonuçlarınızı katsayı motorumuza girin; hangi testten kaç puan aldığınızı ve Türkiye geneli tahmini yerinizi anında öğrenin.
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
