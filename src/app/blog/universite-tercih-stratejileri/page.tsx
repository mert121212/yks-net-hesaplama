import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'Üniversite Tercih Stratejileri 2027 | 24 Tercih Listesi Nasıl Yapılır?',
    description: 'YKS tercih dönemi rehberi: Ölü tercih tuzağı nedir, başarı sıralamasına göre 24 tercih listesi nasıl kurulur ve kırık OBP riski.',
    keywords: 'üniversite tercihleri, yks tercih nasıl yapılır, ölü tercih nedir, tercih listesi hazırlama, yök atlas tercih',
    alternates: { canonical: 'https://yksnethesapla.com/blog/universite-tercih-stratejileri' },
    openGraph: {
        title: 'Tercih Listesi Hazırlama Rehberi: Sınavı Kazanıp Tercihte Kaybetmeyin',
        description: 'Sıralamaya göre tercih listesi oluşturma mantığı, ölü tercihler ve YÖK Atlas analizleri.',
        type: 'article',
        publishedTime: '2026-02-08',
        modifiedTime: '2026-02-11',
        url: 'https://yksnethesapla.com/blog/universite-tercih-stratejileri',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Üniversite Tercih Stratejileri'
            }
        ],
    },
}

export default function UniversiteTercihStratejileri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="Üniversite Tercih Stratejileri 2027 | 24 Tercih Listesi Nasıl Yapılır?" 
                    description="YKS tercih dönemi rehberi: Ölü tercih tuzağı nedir, başarı sıralamasına göre 24 tercih listesi nasıl kurulur ve kırık OBP riski."
                    datePublished="2026-02-08"
                    dateModified="2026-02-11"
                    url="https://yksnethesapla.com/blog/universite-tercih-stratejileri"
                    keywords={['üniversite tercihleri', 'yks tercih nasıl yapılır', 'ölü tercih nedir', 'tercih listesi hazırlama', 'yök atlas tercih']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Tercih Stratejileri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Strateji</span>
                            <time className="text-gray-600" dateTime="2026-02-08">8 Şubat 2026</time>
                            <span className="text-gray-600">• 10 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Sınavı Kazanıp Tercihte Kaybetmek: 24 Satırlık Listenin Acımasız Matematiği
                        </h1>
                        <p className="text-xl text-gray-600">
                            Bir tam yıl boyunca dirsek çürüterek kazandığınız başarı sırası, ekrandaki 24 satıra rastgele dizildiğinde nasıl buharlaşıp gider? Ölü tercih gerçeği ve güvenli liste mimarisi.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Ağustos ayının o boğucu sıcağında rehberlik odasının kapısı hiç kapanmaz. Karşımda oturan baba endişeli, anne yorgun, 18 yaşındaki delikanlı ise elindeki buruşmuş A4 kağıdına bakarken titriyor: &quot;Hocam Sayısalda 42 bininci oldum. Hayalim bilgisayar mühendisliği ama açıkta kalmaktan ölesiye korkuyorum. Listeyi nasıl dolduracağız?&quot;
                        </p>

                        <p>
                            Öğrencinin karaladığı listeyi elime alıyorum. 1. sırada 12 binle kapatan bir bölüm, 2. sırada 48 binlik bir üniversite, 3. sırada ise 36 binlik başka bir fakülte... 
                        </p>

                        <p>
                            Gözlerimi kaldırıp doğrudan yüzüne bakıyorum: &quot;Farkında mısın bilmiyorum ama senin o 3. sıraya yazdığın rüya bölümün daha sisteme girmeden öldü.&quot;
                        </p>

                        <p>
                            Şaşkınlıkla gözlerini açıyor. Çünkü çoğu aday ÖSYM tercih motorunu insani duyguları olan bir kurul sanıyor. Oysa karşınızda ne sempati besleyen ne de niyetinizi okuyan bir algoritma var; sadece yukarıdan aşağıya doğru tıkır tıkır çalışan soğuk bir kod yığını.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Puanla Değil, Yalnızca Sıralamayla Hareket Edin
                        </h2>
                        <p>
                            Tercih dönemlerinde şahit olduğumuz en büyük felaket, adayların elindeki puana bakarak eski kılavuzlardaki &quot;taban puanlarla&quot; aşk yaşamasıdır.
                        </p>
                        <p>
                            Şunu zihninize kazıyın: Sınavın taban puanı her yıl fırtınaya tutulmuş yaprak gibi savrulur. Sınav çok zorsa 420 puanla ilk 10 bine girersiniz; soruların görece kolay olduğu bir yıl ise aynı 420 puanla kendinizi 60 bininci sırada bulabilirsiniz. Puanlar yalancıdır ama başarı sırası asla yalan söylemez. Bir üniversitenin kontenjanı dramatik şekilde değişmediyse, o bölüm geçen yıl 25 binle kapattıysa bu yıl da kabaca 23 bin ile 27 bin bandında bir adayı ağırlayacaktır. Tercih ekranında taban puan sütununun üzerini elinizle kapatın; tek rehberiniz Türkiye geneli başarı sıranız olsun.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            &apos;Ölü Tercih&apos; Tuzağı: Boşa Harcanan Satırlar
                        </h2>
                        <p>
                            ÖSYM yerleştirme robotu liste mantığıyla hareket eder. Robot sizin listenizin 1. sırasına bakar. Puanınız o bölümü kazanmaya yetiyor mu? Yetiyorsa sizi anında oraya kilitler ve altınızda kalan 23 tercihin kapağını bile açmaz.
                        </p>
                        <p>
                            Peki ya 1. tercihiniz olan 50 binlik bölüme puanınız yetmediyse ne olur? Robot hemen 2. satıra geçer. Siz kalkıp o 2. satıra 35 binlik bir yer yazdıysanız ne olacak dersiniz? 50 bine yetmeyen puanınız, 35 binlik yere hiç yetmeyecektir. Dolayısıyla o 2. tercih kağıt üzerinde var olan ama pratikte hiçbir zaman çalışamayacak olan ölü bir tercihtir.
                        </p>
                        <p>
                            Listenizi kurarken genel kural; sıralamaları yukarıdan aşağıya doğru, en yüksekten en mütevazıya doğru mantıklı ve kademeli bir inişle dizmektir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            24 Tercihi Üç Ayrı Kalkanla Yönetmek
                        </h2>
                        <p>
                            Elinizde tam 24 tane hak var. Bu hakları rastgele savurmak yerine bir piramit gibi kurgulamanız gerekir. Diyelim ki bu yılki başarı sıranız 60.000:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">Hayal Kalkanı (İlk 5-6 Tercih)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    Kendi derecenizin yüzde 25-30 üstünden cesurca başlayın. Sıralamanız 60 bin mi? Açılışı 40-45 binlik gözde bölümlerle yapın. &quot;Bana çıkmaz&quot; demeyin. Kontenjan genişler, o şehir o yıl daha az tercih alır ya da yeni bir fakülte açılır. Hayal kurma hakkınızı ilk sıralarda sonuna kadar kullanın.
                                </p>
                            </div>

                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">Gerçekleşme Omurgası (Ortadaki 10-12 Tercih)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Sizin asıl yuvanız burasıdır. 55 bin ile 75 bin aralığındaki bölümleri bu bölgeye yerleştirin. Ancak dikkat: Bu banttaki bölümleri dizerken &quot;hangisinin sıralaması daha yüksek&quot; diye değil, &quot;ben yarın sabah uyandığımda hangi kampüste okumaktan daha çok mutlu olurum&quot; sorusuna göre dizin.
                                </p>
                            </div>

                            <div className="p-5 bg-slate-100 border border-slate-300 rounded-xl">
                                <h3 className="font-bold text-slate-900 text-lg mb-1">Can Simidi Bölgesi (Son 5-6 Tercih)</h3>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    Eğer bu yıl kesinlikle bir üniversiteye gitmek zorundaysanız, sıralamanızın yüzde 30-40 gerisine inin. 85-95 binlik bölümleri listenin sonuna emniyet kemeri olarak bağlayın. Bu bölge, olası bir yığılma dalgasında sizi açıkta kalmaktan korur.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            En Tehlikeli Cümle: &quot;Nasıl Olsa Gelmez Diye Yazdım&quot;
                        </h2>
                        <p>
                            Tercih bildirim formunun son satırına istemediğiniz, sırf boş kalmasın diye yazdığınız bir il ya da bölüm, eylül sabahında kabusunuz olabilir.
                        </p>
                        <p>
                            Çünkü o bölüm geldiği an iki seçenekle baş başa kalırsınız: Ya hiç sevmediğiniz o şehirde 4 yıl mutsuz bir öğrencilik geçireceksiniz ya da &quot;Ben seneye tekrar hazırlanırım&quot; diyerek kayıt yaptırmayacaksınız. Fakat kayıt yaptırmasanız dahi ertesi yıl OBP&apos;niz tam yarı yarıya kırılır. Hanenizden 25-30 puan silinir ve sınava 40 bin kişilik bir ceza yüküyle başlamak zorunda kalırsınız. Gitmeyeceğiniz tek bir üniversiteyi bile o listeye sokmayın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            YÖK Atlas Olmadan Tercih Yapmak Karanlıkta Koşmaya Benzer
                        </h2>
                        <p>
                            Kulaktan dolma tavsiyelerle, &quot;amcamın oğlu orayı çok övdü&quot; laflarıyla geleceğinizi belirleyemezsiniz. YÖK Atlas sistemini açın; hedeflediğiniz fakülteye son giren öğrencinin kaç netle yerleştiğine, fakültedeki profesör sayısına, mezunların ne kadar sürede istihdam edildiğine tek tek bakın. Bilgiye dayalı tercih yapan öğrenci, sınavı masada kaybetmez.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Tercih Öncesi Sıralamanızı Netleştirin</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                Deneme netlerinizle hangi sıralama aralığında durduğunuzu görün, tercih simülasyonlarınızı gerçek verilere dayandırarak inşa edin.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Sıralama Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Tercih Öncesi İncelenmesi Gerekenler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/obp-hesaplama" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">Kırık OBP ve Katsayı Analizi →</p>
                                    <p className="text-xs text-gray-600 mt-1">İstemediğiniz yeri kazanırsanız seneye ne kadar puan kaybedersiniz?</p>
                                </Link>
                                <Link href="/blog/yks-puan-turleri" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">YKS Puan Türleri Rehberi →</p>
                                    <p className="text-xs text-gray-600 mt-1">SAY, EA, SÖZ ve DİL alanlarının ders ağırlıkları ve bölüm eşleşmeleri.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
