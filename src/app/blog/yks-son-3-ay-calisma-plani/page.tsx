import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Son 3 Ay Çalışma Programı: Netleri Zirveye Taşıma Rehberi 2027',
    description: 'YKS\'ye 3 ay kala net artar mı? Mart-Haziran arası haftalık çalışma programı, TYT-AYT deneme sıklığı, branş tekrarları ve çıkmış soru stratejisi.',
    keywords: 'yks son 3 ay çalışma programı, yks son 100 gün, sınava 3 ay kala program, yks son 3 ay net artar mı, ayt son 3 ay yetişir mi',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-son-3-ay-calisma-plani' },
    openGraph: {
        title: 'YKS Son 3 Ay Çalışma Programı: Netleri Zirveye Taşıma Stratejisi',
        description: 'Sınava 3 ay kala konu çalışma bırakılıp deneme sistemine nasıl geçilir? Haftalık görev planı ve son 90 gün yol haritası.',
        type: 'article',
        publishedTime: '2026-09-10',
        modifiedTime: '2026-09-10',
        url: 'https://yksnethesapla.com/blog/yks-son-3-ay-calisma-plani',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Son 3 Ay Çalışma Programı'
            }
        ],
    },
}

export default function YksSon3AyCalismaPlani() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS Son 3 Ay Çalışma Programı: Netleri Zirveye Taşıma Rehberi 2027" 
                    description="YKS'ye 3 ay kala net artar mı? Mart-Haziran arası haftalık çalışma programı, TYT-AYT deneme sıklığı, branş tekrarları ve çıkmış soru stratejisi."
                    datePublished="2026-09-10"
                    dateModified="2026-09-10"
                    url="https://yksnethesapla.com/blog/yks-son-3-ay-calisma-plani"
                    keywords={['yks son 3 ay çalışma programı', 'yks son 100 gün', 'sınava 3 ay kala program', 'yks son 3 ay net artar mı', 'ayt son 3 ay yetişir mi']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Son 3 Ay Çalışma Planı</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Strateji & Plan</span>
                            <time className="text-gray-600" dateTime="2026-09-10">10 Eylül 2026</time>
                            <span className="text-gray-600">• 11 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS Son 3 Ay Çalışma Programı: Netleri Zirveye Taşıma Stratejisi
                        </h1>
                        <p className="text-xl text-gray-600">
                            Takvim Mart veya Nisan&apos;ı gösterdiğinde panik başlar: &quot;Yetişmeyecek, mezuna mı kalsam?&quot; Gerçek şu: YKS&apos;de sıralamaların asıl belirlendiği dönem tam olarak bu son 90 gündür.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Mart ortası geldi mi kütüphanelerin havası resmen değişir. Koridorlarda derin iç çekişler, masalarda yarım bırakılmış kahve bardakları, gözlerin altında mor halkalar... Herkes birbirine çaktırmadan yan masadakinin ne çözdüğüne bakar. En çok duyulan fısıltı da bellidir: <em>&quot;Kanka yetişmeyecek galiba ya, mezuna mı bıraksam?&quot;</em>
                        </p>

                        <p>
                            Dur hemen havlu atma. Dinle beni.
                        </p>

                        <p>
                            9 yıldır YKS rehberliği yapıyorum; inan bana, dereceye giren öğrencilerin en az yarısı Mart ayında aynı bunalımı yaşadı. Neden biliyor musun? Çünkü son 90 gün, sınavın &quot;bilgi depolama&quot; evresinden &quot;psikolojik savaş&quot; evresine geçtiği yerdir. Şu an TYT&apos;de 60-65 net bandına çakılıp kalmış, AYT&apos;de 30&apos;u zor gören biriysen bile önünde dağ gibi 3 ay var. Ama bir şartla: Bugüne kadar çalıştığın o yavaş, dağınık tempoyu derhal çöpe atacaksın.
                        </p>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg text-amber-950 text-sm my-6">
                            <strong>Acı gerçek ama bilmen şart:</strong> Son 3 ayda 500 sayfalık kalın konu anlatımı kitaplarını baştan sona okumaya çalışan öğrenci kaybeder. Konu çalışma dönemi bitti; artık nokta atışı hasar tespiti ve acil tamir dönemi. Denemede patladığın konuyu cımbızla çekeceksin, 2 gün üstüne basacaksın, kapatıp geçeceksin.
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Millet &quot;Artık Çok Geç&quot; Derken Sen Nasıl Fark Atacaksın?
                        </h2>

                        <p>
                            Çevrende &quot;bu saatten sonra çalışanla çalışmayan belli oldu zaten&quot; diyen akrabalar veya rehavete kapılan arkadaşlar olacaktır. Onları duyma bile. Son 3 ayda netlerin asıl roket gibi fırlamasının çok somut sebepleri var:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>AYT nankör değildir:</strong> TYT hız ister, refleks ister, bazen 2 ay uğraşırsın 3 net anca oynar. Ama AYT öyle mi? Hayır. AYT doğrudan bilgidir. Bugün oturup Logaritma veya Biyolojideki Fotosentez mekanizmasını kafana kazı, sınavda karşına çıktığı an banko +1.25 net cepte. 1 net için aylarca beklemene gerek yok.</li>
                            <li><strong>Rakipler kendi kendini eliyor:</strong> İnanılmaz ama gerçek: YKS&apos;ye başvuran 3 milyon adayın en az 1 milyonu Nisan başında havlu atıp ders çalışmayı bırakıyor. &quot;Seneye daha iyi hazırlanırım&quot; yalanına sığınıyorlar. Sadece masada kalıp her gün düzenli 6 saat çalışan biriysen, hiçbir şey yapmasan bile yüz binlerce kişinin önüne geçiyorsun.</li>
                            <li><strong>Taze bilgi etkisi:</strong> Eylül ayında ezberlediğin Divan Edebiyatı şairlerini şu an hatırlamıyorsun değil mi? Normal. Ama Mayıs&apos;ta tekrar edeceğin bilgiler Haziran sabahı zihninde ışıl ışıl parlayacak.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            90 Günlük Acil Durum Yol Haritası
                        </h2>

                        <p>
                            Gözünü seveyim &quot;her gün her dersten 50 soru&quot; gibi saçma sapan programlar yapma. Haftanı, ayını böl. Neyi ne zaman yapacağını bilmeyen adam kütüphanede boş boş kitaba bakar.
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead className="bg-gray-100 text-gray-800 text-sm">
                                    <tr>
                                        <th className="p-3 border">Dönem</th>
                                        <th className="p-3 border">Odak Noktası</th>
                                        <th className="p-3 border">TYT / AYT Dengesi</th>
                                        <th className="p-3 border">Haftalık Deneme Ritmi</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">1. Ay (Son 90 - 60 Gün)</td>
                                        <td className="p-3 border">AYT Ağır Konuları Bitir + Branş Denemeleri</td>
                                        <td className="p-3 border">%35 TYT — %65 AYT</td>
                                        <td className="p-3 border">2 TYT Genel + 2 AYT Genel + Seri Branş</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">2. Ay (Son 60 - 30 Gün)</td>
                                        <td className="p-3 border">MEB Kitapları Satır Araları + Son 6 Yılın Çıkmışları</td>
                                        <td className="p-3 border">%30 TYT — %70 AYT</td>
                                        <td className="p-3 border">3 TYT Genel + 3 AYT Genel</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">3. Ay (Son 30 Gün)</td>
                                        <td className="p-3 border">Saat 10:15 Kondisyonu + Hata Defteri + Uyku Ayarı</td>
                                        <td className="p-3 border">%20 TYT — %80 AYT Tekrar</td>
                                        <td className="p-3 border">Neredeyse her sabah gerçek sınav provası</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Ay: AYT&apos;nin Belini Kırma Dönemi (Son 90-60 Gün)
                        </h2>

                        <p>
                            Şimdi dürüst olalım: AYT&apos;de en çok hangi konulardan korkuyorsun?
                        </p>

                        <p>
                            Birçok öğrenci türev-integral veya organik kimyadan korktuğu için sürekli bildiği TYT Türkçe testlerini çözüp kendi vicdanını rahatlatır. &quot;Bugün 120 soru çözdüm&quot; der ama çözdüğü sorular zaten yapabildikleridir. Kendini kandırma.
                        </p>

                        <p>
                            Hemen boş bir kağıt çıkar. Her dersten <strong>&quot;ÖSYM&apos;nin her sene sorduğu ama benim elimi süremediğim&quot;</strong> 2 ya da 3 konu seç. Mesela:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Matematik:</strong> Türevin geometrik yorumu, logaritma özellikleri veya trigonometride yarım açı formülleri. Hangi konunun kaç soru getirdiğini görmek için <Link href="/blog/ayt-matematik-konulari" className="text-blue-600 font-semibold hover:underline">AYT Matematik konu dağılımı</Link> tablomuza bir göz at.</li>
                            <li><strong>Fizik:</strong> İndüksiyon akımı ve transformatörler (her sene banko gelir).</li>
                            <li><strong>Biyoloji:</strong> Hücresel solunum basamakları veya bitki biyolojisi.</li>
                            <li><strong>Edebiyat:</strong> Milli Edebiyat ve Cumhuriyet dönemi romancıları.</li>
                        </ul>

                        <p>
                            Önündeki 4 haftayı sadece bu kritik omurga konuları yok etmeye ada. Her biri için bir hocadan video izle, arkasından 150-200 soru çöz, olayı kapat.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. Ay: MEB Kitapları ve Çıkmış Sorular (Son 60-30 Gün)
                        </h2>

                        <p>
                            Mayıs ayında piyasadaki &quot;aşırı zor, fantastik&quot; denemelerle moralini sıfırlamayı bırak. Sınavı o yayınevi hazırlamıyor; ÖSYM hazırlıyor.
                        </p>

                        <p>
                            ÖSYM soru havuzundaki hocaların elinde ne var biliyor musun? MEB ders kitapları. Özellikle Kimya, Biyoloji, Tarih ve Felsefe&apos;de MEB 11 ve 12. sınıf kitaplarının kenarındaki &quot;Biliyor musunuz?&quot; kutularından, deney görsellerinden soru devşirirler. MEB kitaplarını roman gibi baştan sona oku, altını çiz. Sınavda birebir aynı cümleyi görünce &quot;iyi ki okumuşum&quot; diyeceksin.
                        </p>

                        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-5 rounded-r-lg text-emerald-950 text-sm my-6">
                            <strong>Çıkmış soru taktiği:</strong> 2019-2026 arası tüm YKS sorularını PDF&apos;ten değil, kitapçık şeklinde önune al. Gerçek saat tut, masada çay kahve olmadan çöz. Yanlış yaptığın sorunun yanına &quot;Formülü mü unuttum, soruyu mu yanlış okudum, şıkka mı atladım?&quot; diye not al.
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. Ay: 10:15 Rutini ve Hata Defteri (Son 30 Gün)
                        </h2>

                        <p>
                            Son aya girdiğinde artık yeni konu öğrenilmez. Beyin yeni konuyu sindiremez, eskileri de karıştırır. Son 30 günün olayı tamamen ritim ve psikolojidir:
                        </p>

                        <p>
                            <strong>1. Sabah 10:15 kuralı:</strong> Sınav 10:15&apos;te başlıyor. Sen gece 3&apos;e kadar çalışıp sabah 11&apos;de uyanmaya devam edersen, sınav sabahı 10:15&apos;te beynin uykuda olur; paragrafı 3 kere okursun bir şey anlamazsın. Son bir ay her gün istisnasız saat 07:30&apos;da ayakta ol, 10:15&apos;te masaya oturup denemeni başlat.
                        </p>

                        <p>
                            <strong>2. Hata defteri mucizesi:</strong> Bugüne kadar girdiğin tüm denemelerin yanlışlarını kestin mi? Kesmediysen hemen başla. Bir defter al, yapamadığın soruları yapıştır. Akşam yatmadan önce yarım saat sadece o defteri karıştır. İnan, neti artıran şey bildiğin soruları çözmek değil; yapamadığın o tek sorunun mantığını çözmektir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Denemeyi Çözüp Kenara Fırlatanlar Neden Kazanamaz?
                        </h2>

                        <p>
                            165 dakika masada ter döküyorsun, deneme bitiyor. Doğru yanlışını sayıyorsun: <em>&quot;Aman be, yine 68 geldi&quot;</em> deyip kitapçığı masanın altına atıyorsun.
                        </p>

                        <p>
                            Tebrikler, az önce 3 saatini tamamen çöpe attın.
                        </p>

                        <p>
                            Denemenin amacı puan görmek değildir; deneme senin röntgenindir. Neren kırık, neren ağrıyor onu gösterir. Deneme biter bitmez 1 saat mola ver, sonra o kitapçığı eline al:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Yanlış yaptığın her sorunun video çözümünü izle, çözümü kapatıp aynı soruyu beyaz bir kağıda tek başına sıfırdan çöz.</li>
                            <li>Turlama taktiğinde nerede takıldın? Hangi soruda 4 dakika inatlaştın? O inatlaştığın soru yüzünden arkadaki 3 tane kek soruyu kaçırdın mı? Kaçırdın. İşte bunu bir daha yapmayacaksın. Detaylar için <Link href="/blog/tyt-net-artirma-taktikleri" className="text-blue-600 hover:underline">TYT net artırma taktikleri</Link> yazımıza mutlaka bak.</li>
                            <li>Sallayıp tutturduğun soruları da yanlış say. Sınavda şans her zaman yanında olmaz.</li>
                        </ul>

                        {/* CTA Kutusu */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 text-center my-10 shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">Şu Anki Durumunu Net Olarak Gör</h3>
                            <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-sm md:text-base">
                                Hayal kurmayı bırak, gerçek rakamlarla konuşalım. Son deneme netlerini ve diploma notunu gir; güncel ÖSYM katsayılarıyla tahmini sıralamanı anında gör.
                            </p>
                            <Link 
                                href="/" 
                                className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl shadow-md hover:bg-blue-50 transition transform hover:-translate-y-0.5"
                            >
                                YKS Net Hesaplayıcıya Git →
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Son Söz: Kafayı Rahat Tut, Masadan Kalkma
                        </h2>

                        <p>
                            Günde 4 saat uyuyup gözleri kan çanağı gezen arkadaşlarına özenme. Uykusuz beyin denemede dikkat hatası yaptırır, işlem hatası yaptırır, bildiğin soruyu yanlış okutur. Günde 7-8 saat tertemiz uyu.
                        </p>

                        <p>
                            Ve unutma: Sınavı kazananlar en zekiler değil; Mart, Nisan ve Mayıs aylarının o ağır psikolojik baskısına dayanıp her sabah o masaya oturmaya devam edenlerdir. Hadi şimdi kalk, o yapamadığın konunun başına geç. Daha hiçbir şey bitmedi.
                        </p>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#yksSon3Ay</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#calismaProgrami</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#tytNetArtırma</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#aytHazirlik</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#yksRehberlik</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <Link href="/blog" className="text-blue-600 hover:underline font-medium">← Blog Listesine Dön</Link>
                            <Link href="/blog/tyt-turkce-paragraf-teknikleri" className="text-blue-600 hover:underline font-medium">TYT Türkçe Paragraf Teknikleri →</Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
