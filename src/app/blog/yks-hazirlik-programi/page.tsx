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
                            Pazar akşamı masaya oturuyorsun. Renkli kalemler çıkıyor, defter açılıyor. &ldquo;Yarın kesin başlıyorum&rdquo; diyerek saat saat program hazırlanıyor:
                        </p>

                        <div className="bg-slate-50 border-l-4 border-blue-500 p-4 rounded-r-xl font-mono text-sm space-y-1 text-slate-800">
                            <p>07.00 kalkış.</p>
                            <p>07.30 paragraf.</p>
                            <p>08.30 problem.</p>
                            <p>10.00 matematik...</p>
                        </div>

                        <p>
                            Pazartesi güzel gidiyor. Salı sabahı alarmı biraz erteliyorsun. Bir bakmışsın saat 09.30 olmuş. Programın geri kalanı da domino taşı gibi devriliyor.
                        </p>

                        <p>
                            Sonra insanın aklına şu geliyor:
                        </p>

                        <blockquote className="border-l-4 border-amber-400 pl-4 italic text-gray-800 my-3">
                            &ldquo;Bugün zaten bozuldu. Haftaya pazartesi yeniden başlarım.&rdquo;
                        </blockquote>

                        <p>
                            Benim de yaptığım şey buydu. Saat saat hazırlanmış programlara uyamadığım dönemler oldu. Asıl sorun ders çalışmak istememem değildi. Sorun, günün her dakikasını önceden planlayıp en ufak sapmada bütün programı çöpe atmamdı.
                        </p>

                        <p>
                            Bu yüzden YKS çalışırken artık saate değil, yapılacak işe bakmanın daha mantıklı olduğunu düşünüyorum.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Masaya 10 Ders Değil, 3 İş Koy
                        </h2>
                        <p>
                            Sabah deftere 10 tane hedef yazınca insan kendini başarılı hissediyor. Daha ders başlamadan liste dolu.
                        </p>
                        <p className="italic text-gray-600">
                            &ldquo;Fonksiyonları bitireceğim, 80 geometri çözeceğim, 50 paragraf yapacağım, kimya çalışacağım...&rdquo;
                        </p>
                        <p>
                            Akşam olunca ise listenin yarısı duruyor.
                        </p>
                        <p>
                            Sonra insan yaptığı 4 işi değil, yapamadığı 6 işi düşünüyor. Bence burada sistem yanlış kuruluyor.
                        </p>
                        <p>
                            Ben olsam günü üç ana işe bölerdim.
                        </p>
                        <ul className="list-none space-y-2 pl-0 text-gray-800">
                            <li className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
                                <strong>1. Sabah:</strong> 20 paragraf ve 12 problem.
                            </li>
                            <li className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100">
                                <strong>2. Öğleden sonra:</strong> Çalışılacak bir AYT konusu + o konuyla ilgili testler.
                            </li>
                            <li className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
                                <strong>3. Akşam:</strong> Denemede boş veya yanlış yapılan sorulara tekrar bakmak.
                            </li>
                        </ul>
                        <p>
                            Hepsinin saatini baştan belirlemek zorunda değilsin.
                        </p>
                        <p>
                            Sabah 10&apos;da da bitebilir, öğlen 2&apos;de de.
                        </p>
                        <p>
                            Önemli olan günün sonunda &ldquo;Bugün ne yaptım?&rdquo; sorusuna cevap verebilmek.
                        </p>
                        <p>
                            Üç iş bittiyse, gerçekten bitmiştir. Daha fazla çalışabilecek durumdaysan devam edersin. Ama sırf hazırladığın listede 14 madde var diye gece 11&apos;e kadar kendini masaya zincirlemenin de çok anlamı yok.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Pomodoro Her Şeyin İlacı Değil
                        </h2>
                        <p>
                            25 dakika ders, 5 dakika mola.
                        </p>
                        <p>
                            Pomodoro&apos;yu kötü bulmuyorum. Özellikle ders çalışmaya başlamakta zorlanan biri için işe yarayabilir. &ldquo;Sadece 25 dakika oturacağım&rdquo; demek bazen gerçekten masaya oturmayı kolaylaştırıyor.
                        </p>
                        <p>
                            Ama bütün hazırlığı böyle götürmek bana pek mantıklı gelmiyor.
                        </p>
                        <p>
                            Sonuçta TYT&apos;de 165 dakika, AYT&apos;de 180 dakika boyunca sınavın başındasın. Gerçek sınavda 25 dakikada bir kalkıp mutfağa gitme şansın yok.
                        </p>
                        <p>
                            Bu yüzden çalışma süresini zamanla uzatmak daha mantıklı.
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-800">
                            <li>Önce 25 dakika.</li>
                            <li>Sonra 40 dakika.</li>
                            <li>Sonra 50 dakika.</li>
                        </ul>
                        <p>
                            Daha sonra bir deneme veya uzun bir soru çözümü sırasında daha uzun süre masada kalabilecek hale gelirsin.
                        </p>
                        <p>
                            Benim burada asıl dikkat edeceğim şey süreyi bir anda uzatmak değil. Her hafta biraz daha uzun süre dikkati dağıtmadan çalışabilmek.
                        </p>
                        <p>
                            Telefon da mümkünse başka odada olsun. Çünkü telefon masanın üzerindeyken &ldquo;Bir dakika bakayım&rdquo; diye başlayan şeyin nereye gittiğini hepimiz biliyoruz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            &ldquo;Günde 14 Saat Çalışıyorum&rdquo; Diyenlere Fazla Takılma
                        </h2>
                        <p>
                            YouTube veya Instagram&apos;da &ldquo;günde 12 saat çalışıyorum&rdquo;, &ldquo;14 saat çalışarak derece yaptım&rdquo; tarzı videolar görmek mümkün.
                        </p>
                        <p>
                            Bunları görünce insan ister istemez kendi çalışma süresini kıyaslıyor.
                        </p>
                        <p>
                            Ama masada 10 saat oturmakla 10 saat verimli çalışmak aynı şey değil.
                        </p>
                        <p>
                            Bir soruya bakıp 15 dakika düşünüyorsan, arada telefona giriyorsan, masayı düzenliyorsan veya ders videosunu açıp başka şeylerle uğraşıyorsan o sürenin tamamını çalışma olarak saymak pek doğru değil.
                        </p>
                        <p>
                            Beş saat gerçekten odaklanarak çalıştığın bir gün, sadece &ldquo;bugün 10 saat masadaydım&rdquo; diyebilmek için geçirilen daha uzun bir günden daha verimli olabilir.
                        </p>
                        <p>
                            O yüzden başkasının çalışma saatini kopyalamaya çalışmak yerine kendi yaptığın işe bak.
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-800">
                            <li>Bugün kaç soru çözdün?</li>
                            <li>Hangi konuyu gerçekten öğrendin?</li>
                            <li>Geçen denemede yaptığın hatalardan hangisini düzelttin?</li>
                        </ul>
                        <p>
                            Bence asıl bakılması gereken yer burası.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Kaynak Seçerken Kendini Kanıtlama Yarışına Girme
                        </h2>
                        <p>
                            Bir de kaynak meselesi var.
                        </p>
                        <p>
                            Temel matematikte zorlanırken gidip en zor kitaptan başlamanın pek anlamı yok. Soruya uzun süre bakıp çözemeyince insanın morali bozuluyor. Birkaç gün sonra kitap rafa kalkıyor.
                        </p>
                        <p>
                            Kaynak seçerken &ldquo;Bu kitap ne kadar zor?&rdquo; sorusundan önce &ldquo;Benim şu anki seviyeme uygun mu?&rdquo; diye bakmak daha mantıklı.
                        </p>
                        <p>
                            Temelin eksikse daha öğretici bir kaynakla başlarsın. Konular oturmaya başlayınca daha seçici ve zor sorulara geçersin.
                        </p>
                        <p>
                            Örneğin Orijinal veya Apotemi gibi kaynaklara sırf zor oldukları için başlamanın bir anlamı yok. Seviyene uygunsa kullanırsın, değilse daha sonra dönersin.
                        </p>
                        <p>
                            Kitabın zor olması seni otomatik olarak daha iyi öğrenci yapmıyor.
                        </p>
                        <p>
                            Ama doğru zamanda doğru soruları çözmek netlerini gerçekten geliştirebilir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Pazar Gününü Tamamen Dersle Doldurma
                        </h2>
                        <p>
                            YKS uzun bir süreç.
                        </p>
                        <p>
                            Bu yüzden haftanın yedi gününü aynı tempoda geçirmek bana çok mantıklı gelmiyor.
                        </p>
                        <p>
                            Mesela pazar sabahı denemeni çözersin. Sonra oturup yanlışlarını incelersin. Buraya kadar tamam.
                        </p>
                        <p>
                            Ama öğleden sonra hâlâ &ldquo;biraz daha çalışayım, bir test daha çözeyim&rdquo; diye kendini zorlamak yerine bırakabilirsin.
                        </p>
                        <div className="flex flex-wrap gap-2 py-2">
                            <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700">Dışarı çık.</span>
                            <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700">Arkadaşlarınla görüş.</span>
                            <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700">Oyun oyna.</span>
                            <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700">Film izle.</span>
                            <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700">Uyu.</span>
                        </div>
                        <p>
                            Kısacası biraz ders düşünme.
                        </p>
                        <p>
                            Ertesi gün masaya oturduğunda hâlâ ders görmek istemiyorsan zaten bir şeylerin ters gittiğini anlarsın.
                        </p>
                        <p>
                            YKS hazırlığı birkaç haftalık bir yarış değil. Aylarca devam eden bir süreç. Bu yüzden programın seni bir hafta çok çalıştırıp sonraki hafta tamamen bıraktırıyorsa, kusursuz bir program değildir.
                        </p>
                        <p className="text-lg">
                            Bence iyi program şu: <strong className="text-blue-700 font-bold">Uyabildiğin program.</strong>
                        </p>
                        <p>
                            Saat saat hazırlanmış mükemmel bir tabloya değil, ertesi gün tekrar oturabileceğin bir düzene ihtiyacın var.
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
