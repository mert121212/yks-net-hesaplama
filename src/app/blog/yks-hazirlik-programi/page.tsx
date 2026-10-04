import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Hazırlık Programı 2027: Patlamayan Çalışma Düzeni',
    description: 'YKS ders çalışma programı nasıl yapılır? Duvara saat çizelgesi asıp 3. gün pes edenler için görev odaklı çalışma ve süre yönetimi rehberi.',
    keywords: 'yks hazırlık programı, yks ders çalışma programı, verimli ders çalışma, yks çalışma planı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-hazirlik-programi' },
    openGraph: {
        title: 'YKS Hazırlık Programı 2027: Patlamayan Çalışma Düzeni',
        description: 'Saatli çizelgeler neden çöp olur? Masada saat doldurmak yerine gerçek net kazandıran günlük düzen.',
        type: 'article',
        publishedTime: '2026-02-20',
        modifiedTime: '2026-03-01',
        url: 'https://yksnethesapla.com/blog/yks-hazirlik-programi',
        images: [
            {
                url: '/images/blog/yks-hazirlik-programi.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Hazırlık Programı'
            }
        ],
    },
}

export default function YKSHazirlikProgrami() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS Hazırlık Programı 2027: Patlamayan Çalışma Düzeni" 
                    description="YKS hazırlığında görev odaklı çalışma, blok süre yönetimi, TYT-AYT dengesi ve haftalık ders programı oluşturma rehberi."
                    datePublished="2026-02-20"
                    dateModified="2026-03-01"
                    url="https://yksnethesapla.com/blog/yks-hazirlik-programi"
                    keywords={['yks hazırlık programı', 'yks ders çalışma programı', 'verimli ders çalışma', 'yks çalışma planı']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Hazırlık Programı</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-20">20 Şubat 2026</time>
                            <span className="text-gray-600">• 6 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS Ders Çalışma Programı: O Duvara Asılan Saatli Çizelgeler Neden Hep Patlıyor?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Pazar akşamı hevesle oturup renkli kalemlerle saat saat program yapıyorsun, salı günü öğleden sonra o program çoktan çöpe gitmiş oluyor. Kaç kere yaşadın bunu?
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-hazirlik-programi.jpg"
                        alt="YKS Hazırlık Programı: Günlük ve Haftalık Çalışma Düzeni"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Pazar akşamı oturup renkli kalemlerle saat saat hazırlanan ders programlarının çoğu daha salı gününe kalmadan aksıyor. Sabah 07:00 kalkış, 07:30 paragraf, 08:30 problem gibi katı saat çizelgeleri gerçek hayata pek uymuyor.
                        </p>

                        <p>
                            Sabah yarım saat geç uyandığında ya da gün içinde beklenmedik küçük bir aksilik çıktığında bütün zincir kopuyor. Arkasından da <em>&ldquo;bugünkü program da yalan oldu&rdquo;</em> hissiyle gelen suçluluk duygusu ve telefona sarılma alışkanlığı başlıyor. Akşamına da genellikle &ldquo;haftaya pazartesi kesin baştan başlıyorum&rdquo; avuntusu kalıyor.
                        </p>

                        <p>
                            Mesele masanın başında kaç saat oturduğun değil, gün bittiğinde gerçekten neleri hallettiğin. Saat doldurmaya çalışmak yerine hedeflere odaklanmadıkça bu kısır döngüden çıkmak pek kolay olmuyor.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Günde 10 Farklı Ders Değil, 3 Somut Görev
                        </h2>
                        <p>
                            Sabah masaya oturup deftere 10-12 maddelik uzun hedefler yazınca insanın daha başlamadan enerjisi tükeniyor. Fizik çalışıp kimyaya geçmek, arkasından 50 paragraf çözüp geometriye bakmak kulağa iddialı gelse de günün sonunda sadece iki tanesi yetişince koca bir yetersizlik hissi kalıyor.
                        </p>
                        <p>
                            Bunun yerine güne başlarken öncelikli 3 somut görev belirlemek çok daha sürdürülebilir bir düzen kurmayı sağlıyor. Örneğin sabah saatlerinde bir paragraf ve problem fasikülünden günlük hedefini tamamlamak, öğleden sonra AYT&apos;de zorlandığın bir konuyu çalışıp üzerine test çözmek ve günün sonunda haftalık denemedeki boş veya yanlış soruların çözümlerine bakmak gibi.
                        </p>
                        <p>
                            Bu temel hedefleri tamamladığında günün ister erken saatlerinde ister akşamında masadan vicdanın rahat bir şekilde kalkabiliyorsun. Önemli olan listedeki her şeye yetişmeye çalışmak değil, en çok net getirecek adımları aksatmadan bitirmek.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Pomodoro YKS Hazırlığında Neden Tek Başına Yetmeyebilir?
                        </h2>
                        <p>
                            25 dakika ders, 5 dakika mola düzeni masa başına oturmakta zorlananlara ilk aşamada iyi bir başlangıç sağlayabiliyor. Fakat tüm YKS hazırlığını sadece 25 dakikalık kısa aralıklarla sürdürmek, uzun süreli deneme sınavlarında odaklanma sorununa yol açabiliyor.
                        </p>
                        <p>
                            TYT tek oturumda 165 dakika, AYT ise 180 dakika sürüyor. Evde çalışırken her 25 dakikada bir sandalyeden kalkmaya ya da dikkati dağıtmaya alışan bir bünye, gerçek deneme sınavında 60-70. dakikadan sonra zihinsel olarak çabuk yorulabiliyor. Türkçe testinden çıkıp matematiğe geçerken basit işlem hatalarının artması genellikle bu odaklanma dayanıklılığının yetersiz kalmasından kaynaklanıyor.
                        </p>
                        <p>
                            Bu yüzden çalışma sürelerini zamanla 45-50 dakikalık kesintisiz bloklara taşımak gerekiyor. Telefonu çalışma alanının dışına alıp süreyi kurarak masadan su içmek için bile kalkmadan odaklanmak, sınavın getirdiği zihinsel yüke alışmanın en pratik yolu.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            &ldquo;Günde 12-14 Saat Çalıştım&rdquo; Söylentilerine Takılma
                        </h2>
                        <p>
                            Sosyal medyada sıkça karşılaşılan &ldquo;günde 14 saat çalıştım&rdquo; anlatımları hazırlık sürecindeki adaylarda gereksiz bir baskı oluşturuyor. Masanın başında saatlerce oturup aynı soruya dakikalarca bakmanın ya da aralarda sosyal medyaya dalmanın kimseye bir faydası yok.
                        </p>
                        <p>
                            Telefonu tamamen kapatıp dikkati dağıtmadan geçirilen 5 saatlik saf odak, dikkat dağınıklığıyla geçirilen 12 saatlik bir çalışma gününden çok daha fazla verim sağlayabiliyor. Asıl farkı yaratan şey sandalyede geçen süre değil, o süre boyunca zihninin ne kadar gerçekten masada kaldığı.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Haftada Bir Gün Zihni Dinlendirmezsen Süreç Tıkanır
                        </h2>
                        <p>
                            Haftanın yedi gününü soluksuz ve aynı yoğunlukta geçirmeye çalışan adaylar genelde birkaç hafta içinde zihinsel olarak tükeniyor. Bir sabah uyandığında kitap kapağı bile açmak istemiyorsan, sebebi vücudun ve beynin dinlenme ihtiyacını görmezden gelmiş olmandır.
                        </p>
                        <p>
                            Haftada bir gün, özellikle hafta sonu genel denemesini çözüp yanlışlarını analiz ettikten sonra kalan zamanı kendine ayırmak lüks değil, bir gereklilik. Dışarı çıkıp hava almak, arkadaşlarınla görüşmek ya da sadece sevdiğin şeylerle ilgilenmek yeni haftaya çok daha diri ve istekli başlamanı sağlar.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Netlerin Ne Durumda? Hemen Test Et</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Deneme netlerini hesaplama motorumuza gir; TYT ve AYT puanını, Türkiye sıralamanı saniyeler içinde öğren.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Puan ve Sıralama Hesaplayıcıyı Aç →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
