import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'TYT Net Artırma Taktikleri: 60-70 Bandından Çıkış Rehberi',
    description: 'Denemelerde 60-70 net aralığında sıkışıp kaldın mı? Netlerini 80 üzerine taşıyacak analiz yöntemleri, branş denemesi stratejileri ve turlama taktiği.',
    keywords: 'tyt net artırma, tyt deneme analizi, tyt 70 net, tyt hızlanma, tyt tur tekniği, tyt netleri nasıl artar',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-net-artirma-taktikleri' },
    openGraph: {
        title: 'TYT Net Artırma Taktikleri: 60-70 Bandından Çıkış Rehberi',
        description: 'Haftalardır aynı netlerde sayıklayanlara gerçekçi çıkış planı. Analiz, branş denemesi ve süre yönetimi tüyoları.',
        type: 'article',
        publishedTime: '2026-02-10',
        modifiedTime: '2026-03-01',
        url: 'https://yksnethesapla.com/blog/tyt-net-artirma-taktikleri',
        images: [
            {
                url: '/images/blog/tyt-net-artirma-taktikleri.jpg',
                width: 1200,
                height: 630,
                alt: 'TYT Net Artırma Taktikleri'
            }
        ],
    },
}

export default function TYTNetArtirma() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="TYT Net Artırma Taktikleri: 60-70 Bandından Çıkış Rehberi" 
                    description="Denemelerde 60-70 net aralığında sıkışıp kaldın mı? Netlerini 80 üzerine taşıyacak analiz yöntemleri, branş denemesi stratejileri ve turlama taktiği."
                    datePublished="2026-02-10"
                    dateModified="2026-03-01"
                    url="https://yksnethesapla.com/blog/tyt-net-artirma-taktikleri"
                    keywords={['tyt net artırma', 'tyt deneme analizi', 'tyt 70 net', 'tyt hızlanma', 'tyt tur tekniği']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Net Artırma</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Saha Taktikleri</span>
                            <time className="text-gray-600" dateTime="2026-02-10">10 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT Net Artırma Yolları: 60-70 Bandındaki O Kör Düğümü Çözmek
                        </h1>
                        <p className="text-xl text-gray-600">
                            Haftalardır her denemeden sonra sonuç kağıdında 63, 65, bazen 61 görüp delirme noktasına mı geldin? Sakin ol; bu bir zeka sorunu değil, tipik bir taktik tıkanması.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/tyt-net-artirma-taktikleri.jpg"
                        alt="TYT Net Artırma Yolları: 60-70 Bandındaki O Kör Düğümü Çözmek"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS hazırlığında koçluk masalarında en çok duyduğumuz yakınma şudur: <em>&ldquo;Hocam deli gibi konu çalışıyorum, formülleri ezberledim, soru bankası bitirdim ama denemeye girince netim milim oynamıyor!&rdquo;</em>
                        </p>

                        <p>
                            Şimdi dürüstçe yüzleşelim: <strong>30 netten 60 nete çıkmakla, 65 netten 80&apos;e fırlamak bambaşka iki evrendir.</strong>
                        </p>

                        <p>
                            İlk aşamada mesele basittir: Konuyu bilmezsin, açıp videosunu izlersin, testini çözersin ve netin kendiliğinden artar. Ama iş 65&apos;e dayandığında artık konu eksiğinden değil; süre paniğinden, soruyla inatlaşmaktan ve kitapçık yönetimini bilmemekten çakılı kalırsın. Bu bataklıktan çıkmak istiyorsan masa başındaki alışkanlıklarını baştan yaratmak zorundasın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Deneme Analizini &ldquo;Sözde&rdquo; Yapmayı Bırak
                        </h2>
                        <p>
                            Birçok öğrencinin deneme analizi dediği şey şu: Deneme biter, cevap anahtarı açılır, doğru-yanlışlar sayılır, toplam net hesaplanır, can sıkılır ve kitapçık çekmecenin dibine fırlatılır. 
                        </p>
                        <p>
                            Buna analiz denmez; buna kendini kandırmak denir. Denemeye girmendeki tek amaç eksiklerini açık etmek. Kitapçığı kapatıp gidersen o 165 dakikayı çöpe attın demektir. Masaya otur ve her bir yanlış/boş soruya şu acımasız soruları sor:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Bilgi eksikliği mi?:</strong> &ldquo;Ben bu formülü veya kuralı gerçekten bilmiyor muydum?&rdquo; (Cevap evetse hemen not defterine yaz, o akşam hallet.)</li>
                            <li><strong>Soru kökü körlüğü mü?:</strong> &ldquo;Hangisi olamaz&rdquo;ı &ldquo;olabilir&rdquo; mi okudun? İşlemde 2+3&apos;ü 6 mı buldun? İşte seni 65&apos;te tutan o sinsi 5-6 net tam burada yatıyor.</li>
                            <li><strong>Ego tuzağı mı?:</strong> Çözemeyeceğini anladığın halde bir geometri veya problem sorusuna 4,5 dakika gömdün mü? O soru sana 1 net kaybettirmedi; arkadaki 3 tane kek soruyu görmeni engelleyip 4 netini çaldı.</li>
                        </ul>
                        <p>
                            Yapamadığın her soruyu kesip bir deftere yapıştırmak eski usul gibi gelebilir ama mucizedir. Haftada bir pazar akşamı o defteri açıp çözemediğin sorulara 20 dakika bakmak, sana 5 tane yeni soru bankası bitirmekten daha çok net kazandırır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. Genel Deneme Çılgınlığını Kes, Branş Denemesine Yüklen
                        </h2>
                        <p>
                            &ldquo;Hocam her gün genel TYT denemesi çözüyorum.&rdquo; Yapma. Kendine eziyet ediyorsun. 
                        </p>
                        <p>
                            Haftada 4-5 genel denemeye girmek beyni sünger gibi tüketir. 165 dakika sınav çözüp, sonra kafan kazan gibi kalkıp hiçbir analizi adamakıllı yapamazsın. Doğru strateji şudur:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Haftada en fazla 1-2 genel TYT:</strong> Kondisyonunu ve genel durumunu görmek için yeterli.</li>
                            <li><strong>Hafta içi seri Branş Denemeleri:</strong> TYT Sosyal branş denemesini al, kronometreyi 15 dakikaya kur. Çöz, bitir, kontrol et. Bilmediğin Coğrafya terimini, Tarih kavramını 10 dakikada özet defterine geçir. Sadece bu taktikle Sosyal netini 10 günden kısa sürede 10&apos;dan 16-17&apos;ye fırlatırsın.</li>
                            <li><strong>TYT Fen branş denemesi:</strong> Fizik-Kimya-Biyoloji&apos;de bilgi soruları çok nettir. 20 soruyu 18 dakikada tararsın; optik mi kaçmış, kalıtım mı unutulmuş şak diye önüne düşer.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. Soruyla Evlenme: &ldquo;Turlama Tekniği&rdquo; Hayat Kurtarır
                        </h2>
                        <p>
                            Şunu aklına kazı: <strong>TYT bir bilgi sınavı değildir, bir kriz yönetimi ve eleme sınavıdır.</strong>
                        </p>
                        <p>
                            Soruların hepsi eşit puan getirir. Türkçe&apos;deki o 12 satırlık felsefe paragrafı ile arkadaki tek satırlık noktalama işareti sorusu aynı değerde. Ama sen felsefe sorusuyla inatlaşıp 3,5 dakika debelenirsen sınavın sonundaki 3 tane bedava soruyu okuyamadan gözetmenin &ldquo;kalemleri bırakın&rdquo; sesini duyarsın.
                        </p>
                        <p>
                            Çözüm net: Soruyu okudun, ilk 35-40 saniyede kafanda net bir çözüm rotası belirmedi mi? Hemen yanına büyük bir daire çiz ve acımadan sıradakine geç. Tüm kitapçığı bu kafayla tarayıp kolay ve orta soruları cebe at. Sınavın bitmesine 30 dakika kaldığında o işaretlediğin sorulara dön. Kafan rahatlamış, netleri çantaya atmış olacağın için o zor soruların ikinci turda nasıl kolay çözüldüğüne kendin bile şaşıracaksın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. Sabahın Köründe Paragraf ve Problem Rutini
                        </h2>
                        <p>
                            TYT&apos;nin omurgası yaklaşık 40 soruluk paragraf ve problem ikilisidir. Bu iki alan &ldquo;konuyu çalıştım bitti&rdquo; diyebileceğin şeyler değil; tıpkı bir sporcunun kondisyonu gibi her gün diri tutulmak ister.
                        </p>
                        <p>
                            Güne başlarken, beynin henüz günün yorgunluğunu tatmamışken kronometreyi aç: <strong>20 Paragraf + 12 Problem.</strong> Süreli çöz. Başlarda süre yetmeyebilir, yanlışlar gelebilir; pes etme. Bu rutini 3 hafta aralıksız sürdürdüğünde okuma hızındaki ve soruya bakışındaki seriliğe inanamayacaksın.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Netlerindeki Ufak Bir Oynama Kaç Bin Kişi Attırır?</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Matematikte veya Sosyalde yapacağın fazladan 3 netin sıralamanı yığılmadan nasıl fırlatacağını kendi gözlerinle gör.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Net ve Sıralama Simülatörünü Aç →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Göz Atman Gereken Diğer Rehberler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-net-hesaplama-rehberi" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">TYT Net Hesaplama Rehberi →</p>
                                    <p className="text-xs text-gray-600 mt-1">Derslerin katsayıları ve netlerin puana dönüşüm formülü.</p>
                                </Link>
                                <Link href="/blog/yks-yigilma-tehlikesi" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">YKS Yığılma Tehlikesi ve Çözümü →</p>
                                    <p className="text-xs text-gray-600 mt-1">Hangi net aralıklarında tıkanma olur, 1 net neden 15 bin kişi attırır?</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
