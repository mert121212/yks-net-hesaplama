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
                            Bu yazıyı pazar gecesi masanın başına geçip renkli post-it’lerle <em>&ldquo;07.00 kalkış, 07.30 paragraf, 08.30 problem&rdquo;</em> diye tablo çizen ama salı günü öğlen o kağıdı buruşturup atanlar için yazıyorum. Çünkü ben de o duvara asılan saatli çizelgeler yüzünden kaç haftamı çöpe attığımı çok iyi hatırlıyorum.
                        </p>

                        <p>
                            Mesele iradesiz olman falan değil. İnsan makine değil ki her gün aynı dakikada aynı hevesle masaya otursun. Sabah alarmı 15 dakika ertelediğin an bütün o saatli sistem çöküyor; arkasından gelen o meşhur &ldquo;bugün battı zaten, pazartesi baştan başlarım&rdquo; kafası da haftanın kalan günlerini yiyip bitiriyor.
                        </p>

                        <p>
                            Saatleri çöpe atıp işi görevlere bağlamadığın sürece bu kısır döngü hazirana kadar sürer.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Masaya 10 Kitap Değil, Sadece 3 Parça İş Koy
                        </h2>
                        <p>
                            Sabah masaya oturduğunda önünde 8 farklı ders ve 10 tane kalın test kitabı görünce beyin daha başlamadan kontak kapatıyor. &ldquo;Bugün fonksiyonlar bitecek, üstüne 80 geometri, araya 40 paragraf, akşam da kimya...&rdquo; Gerçekleşme ihtimali yok denecek kadar az. Akşama sadece paragrafı çözmüş oluyorsun, geri kalan maddeler de vicdan azabı olarak üstüne biniyor.
                        </p>
                        <p>
                            Bunun yerine güne başlarken önüne sadece üç parça net iş koymak lazım:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-800">
                            <li><strong>Sabah zihnin açıkken:</strong> Kronometreyi açıp 20 paragraf ile 12 problemi masadan kalkmadan bitirmek.</li>
                            <li><strong>Öğleden sonra ana ders:</strong> Eyüp B veya Mert Hoca&apos;dan konunun videosunu izleyip arkasından Bilgi Sarmal ya da 3D&apos;den 3 test taramak.</li>
                            <li><strong>Akşam analiz:</strong> Geçen pazar girdiğin denemede boş bıraktığın o 5-6 soruya video çözümünden bakıp sonra kapatıp sıfırdan kendin çözmek.</li>
                        </ul>
                        <p>
                            Bu kadar. İster öğlen 3&apos;te bitir, ister akşam 9&apos;da. Bu üçü bitti mi o gün senin için tamamdır. Çiz üstünü, vicdan azabı çekmeden kalk o masadan.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Pomodoro Tuzağı: TYT 165 Dakika Sürüyor
                        </h2>
                        <p>
                            25 dakika ders, 5 dakika mola düzeni masa başına hiç oturamayan biri için ilk birkaç gün kurtarıcı olabilir. Ama YKS hazırlığında bütün seneyi 25 dakikalık periyotlarla geçirmeye çalışırsan denemede fena çuvallarsın.
                        </p>
                        <p>
                            TYT tek oturumda tam 165 dakika. AYT ise 180 dakika. Evde her 25 dakikada bir su almaya, mutfağa gitmeye, telefona bakmaya alışmış bir kafa; gerçek denemenin 50. dakikasında &ldquo;ben yoruldum&rdquo; alarmı verir. Türkçe paragraflarını üçer kez okur, matematikte en basit dört işlemi toparlayamaz hale gelirsin.
                        </p>
                        <p>
                            O yüzden masa başındaki süreyi adım adım uzatmak şart. Önce 40 dakika, sonra 50, kasım-aralık gibi 70-80 dakikalık bloklar... Telefonu başka odaya bırakacaksın. Masadan su içmek için bile kalkmayacaksın. Sınav kondisyonu dediğin şey tam olarak bu dayanıklılıkla kazanılıyor.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sosyal Medyadaki &ldquo;Günde 14 Saat Bastım&rdquo; Masalları
                        </h2>
                        <p>
                            Her sene YouTube&apos;a düşen o meşhur &ldquo;Günde 14 saat çalışarak derece yaptım&rdquo; videoları yüzünden millet kendini yetersiz hissediyor. Açık konuşalım: O 14 saatin en az yarısı masada boş boş oturup hayal kurmakla, masayı düzenlemekle ya da videoyu dizi izler gibi izlemekle geçiyor.
                        </p>
                        <p>
                            Telefonu eline almadan, masada saf odakla geçirilen 5 saatlik soru çözümü; sandalyede pinekleyerek geçirilen 12 saatten çok daha fazla net getirir. Sıralamayı masada kaç saat oturduğun değil, o sürede kaç tane konu açığını kapattığın belirler.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Kendi Seviyene Göre Kaynak Seç, Fantezi Arama
                        </h2>
                        <p>
                            Sık yapılan hatalardan biri de şu: Temel matematikte henüz 15 nete ulaşamamışken gidip Orijinal ya da Apotemi fasikülleriyle boğuşmak. Soruya 15 dakika bakıp çözemeyince moral sıfıra iniyor, sonra da &ldquo;benden matematikçi olmaz&rdquo; deyip kitap kapatılıyor.
                        </p>
                        <p>
                            Önce temeli sağlam tutmak lazım. Aktif ya da Mikroorijinal gibi öğretici kaynaklarla netini belli bir seviyeye taşırsın; ardından Bilgi Sarmal ve 3D gibi sınav ayarı kitaplara geçersin. Egonu tatmin etmek için zor kaynak çözülmez, net artırmak için doğru kaynak çözülür.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Pazar Gününü Kendine Ayırmayan Ocak Ayında Patlar
                        </h2>
                        <p>
                            Haftanın yedi günü günde 10 saat aralıksız ders çalışmayı hiçbir insan bünyesi aylarca kaldıramaz. Aralıkta, ocakta &ldquo;artık kitap kapağı görmek istemiyorum&rdquo; deyip havlu atanların neredeyse hepsi eylülde soluksuz koşanlar.
                        </p>
                        <p>
                            Haftada bir gün, tercihen pazar öğleden sonrasını kendine ayır. Sabah denemeni çöz, otur analizini yap, yanlışlarına bak. Öğleden sonra oldu mu kapat o kitapları. Git hava al, arkadaşlarınla otur, uyu. O zihinsel dinlenme olmadan pazartesi sabahı aynı motivasyonla masaya oturamazsın.
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
