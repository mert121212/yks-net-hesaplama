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
                            Yıllardır YKS&apos;ye hazırlanan tayfada gördüğüm en büyük saçmalık şu duvara asılan saatli programlar.
                        </p>

                        <p>
                            Sabah 07:00 kalkış, 07:30 paragraf, 08:30 problem, 10:00 geometri... Kardeşim sen kışladaki asker misin? Değilsin. İkinci gün alarmı erteleyip 9&apos;da uyanıyorsun. Ne oluyor peki? <em>&ldquo;Hah, bugünkü program da çöp oldu&rdquo;</em> deyip bütün gün vicdan azabıyla telefona sarılıyorsun. Akşam olunca da o meşhur yalan: <em>&ldquo;Aman pazartesi baştan başlarım.&rdquo;</em>
                        </p>

                        <p>
                            Masanın başında akşama kadar oturup duvara bakınca kimse sana madalya takmıyor. Gün bittiğinde cebinde ne kaldı? 20 paragraf çözüp 2 test bitirdin mi, yoksa 4 saat hayal kurup bir şey yapmadan mı kalktın? Bütün olay bu.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Günde 10 Tane Hedef Koyma, Sadece 3 Tane Koy
                        </h2>
                        <p>
                            Sabah oturup bir deftere 12 maddelik destan yazınca insan baştan pes ediyor. Fizik biter, kimyaya geçerim, oradan da 50 paragraf patlatırım... Akşam bir bakıyorsun sadece 2 tanesi yapılmış. Sonuç? Koca bir yetersizlik hissi.
                        </p>
                        <p>
                            Hem kendi sınav sürecimden hem de sitemizde netlerini takip ettiğimiz binlerce adayın çalışma düzenlerinden çok net gördüğüm bir şey var: Güne başlarken önüne sadece 3 tane somut iş koymak çok daha sürdürülebilir. Mesela ne?
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-800">
                            <li><strong>1. Görev:</strong> Sabah aç kronometreni, 20 paragraf ile 12 problemi mola vermeden çöz.</li>
                            <li><strong>2. Görev:</strong> AYT matematikten belirlediğin konunun videosunu izleyip arkasından 40 soru çöz.</li>
                            <li><strong>3. Görev:</strong> Hafta sonu girdiğin denemede boş bıraktığın ya da yanlış yaptığın soruların video çözümüne bak, sonra aynı soruları kapatıp sıfırdan kendin çöz.</li>
                        </ul>
                        <p>
                            Bitti mi? İster öğlen 2&apos;de bitir, ister akşam 8&apos;de. Bu üçü bittiği an çiz üstünü, vicdanın rahat bir şekilde kalk o masadan. Kafanı dinle.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Pomodoro YKS&apos;ye Hazırlanırken Neden Tek Başına Yetmeyebilir?
                        </h2>
                        <p>
                            Şu meşhur 25 dakika ders, 5 dakika mola taktiği... Yazılımcıysan veya bilgisayar başında proje yapıyorsan harika yöntem. Ama YKS gibi uzun soluklu bir maratonda tek başına yeterli bir kondisyon sağlamayabilir.
                        </p>
                        <p>
                            Neden mi? TYT sınavı tam 165 dakika sürüyor, AYT ise 180 dakika. ÖSYM&apos;nin yayınladığı sınav raporlarını incelediğimizde, adayların en büyük kaybı bilgi eksikliğinden ziyade süreyi yetiştirememekten ve son 40 dakikada zihinsel yorgunluktan kaynaklanan dikkat hatalarından yaşadığını görüyoruz. Sen evde her 25 dakikada bir çay almaya, telefona bakmaya alışırsan; gerçek sınavın 60. dakikasında zihnin dağılmaya başlar. Türkçe bittiğinde kafan kazan gibi olur, matematikte basit işlem hatası yaparsın.
                        </p>
                        <p>
                            O yüzden o süreyi yavaş yavaş 50 dakikaya çıkarman lazım. Telefonu diğer odaya koyacaksın. Masaya oturup kronometreyi 50 dakikaya kuracaksın; su içmek için bile kalkmayacaksın. 50 dakika soruyla baş başa kal, sonra ver 10 dakika molanı. Sınav kondisyonu böyle kazanılır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            &ldquo;Günde 12 Saat Çalıştım&rdquo; Diyenlere Prim Verme
                        </h2>
                        <p>
                            YouTube&apos;da, Instagram&apos;da görüyorsun: <em>&ldquo;Günde 14 saat çalışarak derece yaptım!&rdquo;</em> İnanmayın şunlara gözünüzü seveyim. O 14 saatin en az 5 saati masada Reels kaydırmakla, 3 saati de hayal kurmakla geçiyor. 
                        </p>
                        <p>
                            Telefonu eline almadan, masada gerçekten odaklanarak geçirilen 5 saat; dikkati sürekli dağılan 12 saatlik bir çalışma gününden çok daha verimli olabilir. Oturduğun saatin çokluğu değil, o sürede kafanın ne kadar masada kaldığı işi çözüyor.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Haftada 1 Gün Kendine İzin Vermezsen Patlarsın
                        </h2>
                        <p>
                            Haftanın yedi günü soluksuz ders çalışmaya çalışanların önemli bir kısmı bir süre sonra duvara tosluyor. Sabah kalkacak mecalin kalmıyor, kitap kapağı görmek istemiyorsun.
                        </p>
                        <p>
                            Pazar sabahı genel denemeni çöz, oturup yanlışlarına bak; öğleden sonrayı ise tamamen kendine ayır. Git arkadaşlarınla buluş, dizi izle, uyu. Uykusuz ve mola vermeden çalıştığında ertesi günkü denemede dikkatinin dağıldığını, bildiğin sorularda bile hata yaptığını fark edebilirsin.
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
