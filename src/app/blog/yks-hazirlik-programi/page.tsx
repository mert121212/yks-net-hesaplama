import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Hazırlık Programı 2027: Gerçekçi Günlük ve Haftalık Çalışma Planı',
    description: 'YKS hazırlığında sahte verimlilik tuzağı, unutma eğrisini yenme yöntemleri, 50 dakikalık odak blokları ve kişiye özel çalışma mimarisi.',
    keywords: 'yks hazırlık programı, yks ders çalışma programı, verimli ders çalışma, pomodoro yks, feynman tekniği',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-hazirlik-programi' },
    openGraph: {
        title: 'YKS Hazırlık Programı 2027: Gerçekçi Çalışma Planı',
        description: 'Bilimsel çalışma teknikleriyle YKS hazırlığı. Masada saatlerce oturup sıfır çekenler için çıkış rehberi.',
        type: 'article',
        publishedTime: '2026-02-20',
        modifiedTime: '2026-02-23',
        url: 'https://yksnethesapla.com/blog/yks-hazirlik-programi',
        images: [
            {
                url: '/og-image.jpg',
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
                    title="YKS Hazırlık Programı 2027: Gerçekçi Günlük ve Haftalık Çalışma Planı" 
                    description="YKS hazırlığında sahte verimlilik tuzağı, unutma eğrisini yenme yöntemleri, 50 dakikalık odak blokları ve kişiye özel çalışma mimarisi."
                    datePublished="2026-02-20"
                    dateModified="2026-02-23"
                    url="https://yksnethesapla.com/blog/yks-hazirlik-programi"
                    keywords={['yks hazırlık programı', 'yks ders çalışma programı', 'verimli ders çalışma', 'pomodoro yks', 'feynman tekniği']}
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
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Hazırlık</span>
                            <time className="text-gray-600" dateTime="2026-02-20">20 Şubat 2026</time>
                            <span className="text-gray-600">• 14 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            &quot;Günde 11 Saat Masadayım Ama Netlerim Kıpırdamıyor&quot; Diyenlere Gerçekler
                        </h1>
                        <p className="text-xl text-gray-600">
                            İnternetten indirdiğiniz o şık çizelgeli askeri çalışma programlarının neden üçüncü günde çöpe gittiğini hiç düşündünüz mü? Sahte yorgunluk tuzağı ve zihinsel dayanıklılık planı.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her yıl sonbaharda aynı trajikomik tiyatroyu izlerim. Öğrenci kırtasiyeden fosforlu kalemleri dizer, internetten &quot;Derece Yapan Öğrencinin Günlük Rutini&quot; başlıklı bir PDF indirir ve odasının duvarına yapıştırır. Programda ne ararsınız vardır: 05.45 uyanış, 06.15-08.00 Türev, 08.15-10.00 Organik Kimya... Akşam 23.30&apos;a kadar nefes alacak tek bir saniye bırakılmamıştır.
                        </p>

                        <p>
                            İlk gün muazzam bir heyecanla başlar. İkinci gün omuzlara kurşun gibi bir yorgunluk çöker. Üçüncü gün sabah alarm çaldığında telefon duvara fırlatılır ve o mükemmel plan tarihin tozlu çöplüğüne karışır.
                        </p>

                        <p>
                            Kabahat sizde değil. Çünkü bir başkasının biyolojik saatine, zihinsel kapasitesine ve uyku düzenine göre kurgulanmış şablonlar insan doğasına aykırıdır. Geçtiğimiz yıl Sayısalda Türkiye ilk 2 binine giren bir öğrencim sabah saat 10.00&apos;dan önce dersin kapağını bile açamazdı; &quot;Hocam sabahları beynim çalışmıyor, zorlarsam sadece duvara bakıyorum&quot; derdi. Ama saat 11.00 ile gece 01.30 arasında öyle bir odakla çalışırdı ki, masada 13 saat pinekleyen birinin haftalık verimini tek bir günde cebine koyardı.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Mesele Masada Oturmak Değil, Beyni Terletmektir
                        </h2>
                        <p>
                            Kendinize karşı dürüst olun: Masada geçirdiğiniz o 10 saatin kaç dakikasında eliniz telefona uzanmadı? Kaç sayfa sonra gözleriniz satırlarda kayarken aklınız bambaşka yerlere uçup gitti?
                        </p>
                        <p>
                            Buna sahte çalışma yanılgısı diyoruz. Vücudunuz sandalyede oturduğu ve elinizde kalem olduğu için vicdanınız rahatlıyor; ancak beyniniz arka planda hiçbir bilgiyi uzun süreli belleğe mühürlemiyor. Bu yüzden deneme sınavına girdiğinizde &quot;Yahu ben bu konuyu üç gün önce saatlerce çalıştım ama hiçbir şey hatırlamıyorum&quot; diyerek saçınızı başınızı yoluyorsunuz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Unutma Canavarını Nasıl Dize Getirirsiniz?
                        </h2>
                        <p>
                            Alman psikolog Hermann Ebbinghaus&apos;un unutma eğrisi araştırması acı bir biyolojik gerçeği ortaya koyar: Öğrendiğiniz yeni bir bilginin yaklaşık yüzde 70&apos;ini ilk 24 saat içinde buharlaştırıp atarsınız. Eğer doğru aralıklarla geri çağırma yapmazsanız, bir ay sonra elinizde sadece koca bir sıfır kalır.
                        </p>
                        <p>
                            Bunu kırmanın yolu gün boyu aynı dersi çalışmak değildir; kademeli hatırlatma halkaları kurmaktır:
                        </p>
                        <p>
                            Gündüz yeni öğrendiğiniz bir formülü veya konuyu, gece uyumadan hemen önce sadece 10 dakika gözlerinizle tarayın. Aradan 3 gün geçtikten sonra, konu özetine hiç bakmadan o konudan doğrudan 20 soru çözün. Takıldığınız yerleri hemen kırmızı kalemle işaretleyin. 
                        </p>
                        <p>
                            İki hafta sonra o dersin branş denemesine girdiğinizde o konunun sorularını mikroskop altına alın. Bir bilginin kalıcı belleğe geçmesi için beynin o bilgiyi en az 3-4 kez &quot;zorlanarak&quot; geri çağırması şarttır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Feynman Testi: Bilgi mi, Boş Ezber mi?
                        </h2>
                        <p>
                            Fizikçi Richard Feynman&apos;ın meşhur bir kuralı vardır: Eğer bir konuyu 12 yaşındaki bir çocuğa süslü akademik terimler kullanmadan, gündelik hayatın basit örnekleriyle anlatamıyorsanız; siz o konuyu öğrenmemişsinizdir, sadece ezberlemişsinizdir.
                        </p>
                        <p>
                            Logaritmayı, fotosentezi ya da Divan edebiyatındaki teşbih sanatını çalıştınız mı? Kitabı hemen kapatın. Odanızda ayağa kalkın ve karşınızda hayali bir öğrenci varmış gibi o konuyu sesli olarak anlatmaya başlayın. Cümlenin ortasında &quot;eee, şey, kural öyleydi işte&quot; dediğiniz an durun. Çünkü tam orada bilgi açığınız var demektir. Kitabı açın, yalnızca o tıkandığınız düğüm noktasını çözün ve tekrar anlatın. Bu yöntemle 1 saatte alacağınız verim, saatlerce video izlemekten katbekat üstündür.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Klasik 25 Dakikalık Pomodoro Neden YKS&apos;ye Yetmez?
                        </h2>
                        <p>
                            İnternette herkesin dilinde olan &quot;25 dakika ders, 5 dakika mola&quot; kuralı genel iş verimliliği için harika olabilir; fakat YKS öğrencisi için ölümcül bir tuzaktır.
                        </p>
                        <p>
                            Unutmayın: TYT 165 dakika, AYT ise tam 180 dakikadır. Sınav salonunda her 25 dakikada bir çay kahve molası verme şansınız yok. Beyninizi 25 dakikada bir ödüllendirilmeye alıştırırsanız, sınav sabahı 50. soruya geldiğinizde zihinsel enerjiniz tükenir, odaklanmanız paramparça olur.
                        </p>
                        <p>
                            Masada en az 50 dakikalık kesintisiz odak blokları kurmak zorundasınız. 50 dakika ders, 10 dakika tam mola. Ancak o 10 dakikalık molada asla Instagram&apos;a, TikTok&apos;a ya da YouTube Shorts&apos;a bakamazsınız. Ekrana baktığınız an beyniniz dinlenmez; aksine saniyeler içinde binlerce yeni görsel uyarıcıya maruz kalarak daha da yorulur. Balkona çıkın, derin nefes alın, su için, esneyin ama o ekrana dokunmayın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Kişisel Gün Mimarisi: Saate Değil, Enerjinize Odaklanın
                        </h2>
                        <p>
                            Gününüzü askeri bir saat çizelgesi yerine zihinsel enerji dilimlerine ayırın:
                        </p>
                        <p>
                            <strong>Açılış Fazı:</strong> Güne asla en zor konuyla başlamayın. Zihni ısıtmak için 20 paragraf ve 15 problem çözerek motoru çalıştırın.
                        </p>
                        <p>
                            <strong>Ağır Siklet Fazı:</strong> Zihninizin en berrak olduğu saat dilimini (kiminde sabah 09.30, kiminde öğlen 13.00) günün en çetin dersine ayırın. AYT Matematik, Fizik ya da karmaşık bir Edebiyat konusu burada eritilmelidir.
                        </p>
                        <p>
                            <strong>Soru ve Analiz Fazı:</strong> Akşama doğru zihinsel yorgunluk başladığında yeni konu öğrenmeye çalışmak yerine branş denemesi çözün veya soru bankalarında pratik yapın.
                        </p>
                        <p>
                            <strong>Kapanış Muhasebesi:</strong> Gece yatmadan önce masanızda yarın sabah kalktığınızda ilk çözeceğiniz kitabı açık bırakın. Sabah masaya oturduğunuzda &quot;Acaba bugün ne çalışsam?&quot; kararsızlığı yaşamamak, günün ilk zaferidir.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Çalışmanızın Meyvesini Görün</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                Verimli programınızla yükselen haftalık netlerinizi hesaplayıcımıza girin; sıralamanızın her denemede nasıl basamak atladığını adım adım takip edin.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Sıralama Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Göz Atmanız Gereken Rehberler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-net-artirma-taktikleri" className="p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                                    <p className="font-semibold text-emerald-900">TYT Net Artırma Taktikleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">Platoya takılan netleri kırmak için yanlış defteri ve PP rutini.</p>
                                </Link>
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">1 Net Kaç Kişi Öne Atar? →</p>
                                    <p className="text-xs text-gray-600 mt-1">Yığılma bölgelerinde tek bir fazladan netin devasa gücü.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
