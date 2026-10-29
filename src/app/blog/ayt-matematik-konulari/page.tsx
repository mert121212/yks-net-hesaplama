import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import ArticleFeedback from '@/components/ArticleFeedback'
import ReadingProgress from '@/components/ReadingProgress'
import LastUpdatedBadge from '@/components/LastUpdatedBadge'

export const metadata: Metadata = {
    title: 'AYT Matematik Konuları ve Soru Dağılımı 2027: LTİ ve Trigonometriyi Fethetme Rehberi',
    description: 'AYT Matematik 40 sorunun dağılımı, korkulan Limit-Türev-İntegral bloğu, Trigonometri taktikleri ve derece getiren çalışma zinciri.',
    keywords: 'ayt matematik konuları, ayt matematik soru dağılımı, lti nasıl çalışılır, trigonometri, ayt matematik 2027, türev integral taktikleri',
    alternates: { canonical: 'https://yksnethesapla.com/blog/ayt-matematik-konulari' },
    openGraph: {
        title: 'AYT Matematik Konuları ve Soru Dağılımı 2027',
        description: 'AYT Matematik şakaya gelmez; sıralamanın kralını belirler. Konu zinciri ve net kurtarma rehberi.',
        type: 'article',
        publishedTime: '2026-06-30',
        modifiedTime: '2026-10-29',
        url: 'https://yksnethesapla.com/blog/ayt-matematik-konulari',
        images: [
            {
                url: '/images/blog/ayt-matematik-konulari.jpg',
                width: 1200,
                height: 630,
                alt: 'AYT Matematik Konuları ve Stratejisi'
            }
        ],
    },
}

export default function AYTMatematikKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <ReadingProgress />
                <BlogArticleSchema 
                    title="AYT Matematik Konuları ve Soru Dağılımı 2027 | Çalışma Planı" 
                    description="AYT Matematik konuları, LTİ (Limit, Türev, İntegral) ve Trigonometri soru dağılımı, SAY ve EA puanına etkisi ve çalışma sırası."
                    datePublished="2026-06-30"
                    dateModified="2026-10-29"
                    url="https://yksnethesapla.com/blog/ayt-matematik-konulari"
                    keywords={['ayt matematik konuları', 'ayt matematik soru dağılımı', 'lti nasıl çalışılır', 'trigonometri', 'ayt matematik 2027']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">AYT Matematik</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AYT Masası</span>
                            <time className="text-gray-600" dateTime="2026-06-30">30 Haziran 2026</time>
                            <span className="text-gray-600">• 12 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            AYT Matematik Konuları ve Soru Dağılımı: Sıralamanın Kaderini Çizen 40 Soru
                        </h1>
                        <p className="text-xl text-gray-600">
                            TYT bir hız ve panik yönetimi sınavıysa, AYT safi bilgi ve sabır sınavıdır. Süre telaşı yok; 180 dakika boyunca konuyu derinlemesine bilip bilmediğin ölçülür. İşte 40 soruluk harita ve derece yaptıran çalışma stratejisi.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/ayt-matematik-konulari.jpg"
                        alt="AYT Matematik Konuları, Soru Dağılımı ve Çalışma Sırası"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS sonuç ekranında gördüğün yerleştirme sıralamasının en az %60&apos;ını AYT belirler. İster ilk 10 bini hedefleyen bir Sayısalcı ol, ister Hukuk veya YBS isteyen bir Eşit Ağırlıkçı: AYT Matematik&apos;te 28-30 net bandını aşan bir öğrencinin hedefinden sapması neredeyse imkânsızdır.
                        </p>

                        <p>
                            İşin en güzel tarafı şu: TYT&apos;deki gibi &ldquo;Acaba süre yetecek mi?&rdquo; stresi burada yaşanmaz. 40 soruya soru başına 4-5 dakika ayırma lüksün vardır. Ancak madalyonun diğer yüzü daha serttir: <strong>Bilmediğin bir soruda şansın sıfırdır.</strong> Paragraf taktiğiyle sıyrılamazsın, seçenek eleyerek tutturamazsın. Konuyu sağlam bir temel üzerine inşa etmek zorundasın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            AYT Matematik Konuları ve Ortalama Soru Dağılımı
                        </h2>
                        <p>
                            ÖSYM&apos;nin son 5 yıllık sınav karnesine baktığımızda 40 sorunun belirli bloklara çok dengeli dağıtıldığını görüyoruz:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full bg-white border border-gray-200 text-sm text-left">
                                <thead className="bg-slate-100 text-gray-800 font-semibold border-b">
                                    <tr>
                                        <th className="p-3 border">Konu Başlığı</th>
                                        <th className="p-3 border text-center">Soru Sayısı</th>
                                        <th className="p-3 border">Zorluk & Öncelik</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="p-3 font-medium border">Temel Kavramlar & Sayılar (TYT uzantısı)</td>
                                        <td className="p-3 border text-center font-bold">2 - 3</td>
                                        <td className="p-3 border text-green-700 font-medium">Orta (Kaçırılmaması gereken netler)</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 font-medium border">Polinomlar</td>
                                        <td className="p-3 border text-center font-bold">1 - 2</td>
                                        <td className="p-3 border text-amber-700 font-medium">Kritik (Katsayılar & Kök ilişkisi)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-medium border">2. Dereceden Denklemler & Karmaşık Sayılar</td>
                                        <td className="p-3 border text-center font-bold">1 - 2</td>
                                        <td className="p-3 border text-green-700 font-medium">Temel kurallar yeterli</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 font-medium border">Parabol</td>
                                        <td className="p-3 border text-center font-bold">1</td>
                                        <td className="p-3 border text-blue-700 font-medium">Tepe noktası ve simetri ekseni</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-medium border">Eşitsizlikler</td>
                                        <td className="p-3 border text-center font-bold">1 - 2</td>
                                        <td className="p-3 border text-amber-700 font-medium">Tablo yapma disiplini şart</td>
                                    </tr>
                                    <tr className="bg-emerald-50">
                                        <td className="p-3 font-bold text-emerald-950 border">Logaritma</td>
                                        <td className="p-3 border text-center font-bold text-emerald-900">2 - 3</td>
                                        <td className="p-3 border text-emerald-900 font-semibold">Cepte net (Sürpriz yapmaz)</td>
                                    </tr>
                                    <tr className="bg-emerald-50">
                                        <td className="p-3 font-bold text-emerald-950 border">Diziler (Aritmetik & Geometrik)</td>
                                        <td className="p-3 border text-center font-bold text-emerald-900">1 - 2</td>
                                        <td className="p-3 border text-emerald-900 font-semibold">Cepte net (Formülü uygula, çık)</td>
                                    </tr>
                                    <tr className="bg-purple-50">
                                        <td className="p-3 font-bold text-purple-950 border">Trigonometri</td>
                                        <td className="p-3 border text-center font-bold text-purple-900">4 - 5</td>
                                        <td className="p-3 border text-purple-900 font-semibold">Sınavın omurgası (Dönüşümler, yarım açı)</td>
                                    </tr>
                                    <tr className="bg-purple-50">
                                        <td className="p-3 font-bold text-purple-950 border">Limit ve Süreklilik</td>
                                        <td className="p-3 border text-center font-bold text-purple-900">2</td>
                                        <td className="p-3 border text-purple-900 font-semibold">LTİ&apos;nin en rahat halledilen kısmı</td>
                                    </tr>
                                    <tr className="bg-purple-50">
                                        <td className="p-3 font-bold text-purple-950 border">Türev (Kurallar, Teğet, Maks-Min)</td>
                                        <td className="p-3 border text-center font-bold text-purple-900">4</td>
                                        <td className="p-3 border text-red-700 font-bold">Sıralamayı belirleyen ana kale</td>
                                    </tr>
                                    <tr className="bg-purple-50">
                                        <td className="p-3 font-bold text-purple-950 border">İntegral (Belirli, Belirsiz, Alan)</td>
                                        <td className="p-3 border text-center font-bold text-purple-900">4</td>
                                        <td className="p-3 border text-red-700 font-bold">Zirve noktası (Grafik ve eğri alanı)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-medium border">Permütasyon, Kombinasyon, Olasılık (PKOB)</td>
                                        <td className="p-3 border text-center font-bold">2</td>
                                        <td className="p-3 border text-amber-800 font-medium">Seçici ve dikkat gerektiren sorular</td>
                                    </tr>
                                    <tr className="bg-blue-50">
                                        <td className="p-3 font-bold text-blue-950 border">AYT Geometri & Analitik</td>
                                        <td className="p-3 border text-center font-bold text-blue-900">9 - 10</td>
                                        <td className="p-3 border text-blue-900 font-semibold">Doğrunun analitiği, çember, katı cisim</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            En Hızlı Net Getiren İki Konu: Logaritma ve Diziler
                        </h2>
                        <p>
                            Eğer sınava kısıtlı zamanın kaldıysa veya netlerini hızla 10 bandından 15 üzerine fırlatmak istiyorsan, ilk sarılacağın yer Logaritma ve Diziler olmalı. Neden mi?
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>ÖSYM sürpriz yapmaz:</strong> Bu konularda hikâyeli yeni nesil fanteziler çok azdır. Kurallar berraktır.</li>
                            <li><strong>Taban değiştirme ve özellikler:</strong> Logaritmanın 7-8 temel kuralını ezberleyip iki test çözen bir aday, sınavdaki 2 soruyu 4 dakikada cebine koyar.</li>
                            <li><strong>Dizilerde aritmetik ve geometrik toplam:</strong> İlk n terim toplamı formülüyle geometrik dizi oranını bilmek soru kaçırtmaz. Toplamda bu iki üniteden 4 temiz net çıkarırsın.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Büyük Blok: LTİ (Limit-Türev-İntegral) Zinciri Nasıl Kurulur?
                        </h2>
                        <p>
                            Öğrencilerin yaptığı en vahim hata, Fonksiyon grafikleri tam oturmadan Türeve balıklama dalmaktır. Bu, temeli atılmamış inşaatın üçüncü katını çıkmaya benzer; ilk sert rüzgarda çöker. Doğru çalışma sırası milimetrik olarak şöyle olmalıdır:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="p-4 bg-slate-50 border-l-4 border-purple-500 rounded-r-xl">
                                <h3 className="font-bold text-gray-900 mb-1">1. Adım: Fonksiyon Grafikleri ve Eğim Mantığı</h3>
                                <p className="text-sm text-gray-700">
                                    f(x+a) grafiği nereye kayar? Doğrunun eğimi nedir? Teğet bir eğriye nasıl değer? Bunları gözün kapalı çizemiyorsan türevin geometrik yorumunda bocalamaya mahkûmsun.
                                </p>
                            </div>
                            <div className="p-4 bg-slate-50 border-l-4 border-purple-500 rounded-r-xl">
                                <h3 className="font-bold text-gray-900 mb-1">2. Adım: Trigonometrik Özdeşlikler</h3>
                                <p className="text-sm text-gray-700">
                                    Türev ve integral işlemlerinde sık sık yarım açı ve toplam-fark formüllerine başvuracaksın. Trigonometriyi halletmeden LTİ&apos;ye geçen öğrenci yarım yamalak ilerler.
                                </p>
                            </div>
                            <div className="p-4 bg-slate-50 border-l-4 border-purple-500 rounded-r-xl">
                                <h3 className="font-bold text-gray-900 mb-1">3. Adım: Limit ve Süreklilik (3 Günlük Odaklanma)</h3>
                                <p className="text-sm text-gray-700">
                                    Sağdan-soldan yaklaşım, çarpanlara ayırma ile 0/0 belirsizliğini giderme. Bu konunun mantığı çok hızlı oturur ve sınavda 2 banko net demektir.
                                </p>
                            </div>
                            <div className="p-4 bg-slate-50 border-l-4 border-purple-500 rounded-r-xl">
                                <h3 className="font-bold text-gray-900 mb-1">4. Adım: Türevin Geometrik Yorumu ve Maks-Min</h3>
                                <p className="text-sm text-gray-700">
                                    Türev alma kuralları basittir. Asıl marifet birinci türevin işaret tablosundan fonksiyonun artan-azalanlığını ve yerel ekstremum noktalarını okuyabilmektir.
                                </p>
                            </div>
                            <div className="p-4 bg-slate-50 border-l-4 border-purple-500 rounded-r-xl">
                                <h3 className="font-bold text-gray-900 mb-1">5. Adım: İntegral ve Alan Hesabı</h3>
                                <p className="text-sm text-gray-700">
                                    Değişken değiştirme metodunu (u - du) kavradıktan sonra iki eğri arasında kalan alanı integral yardımıyla hesaplamak bulmaca çözmeye benzer.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">AYT Matematik Netin Hedefine Yetiyor mu?</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                AYT Matematik&apos;te yapacağın her 1 net, TYT&apos;deki neredeyse 2,5 netlik puan katkısına denk gelir. Doğru ve yanlışlarını hesaplama motorumuza girerek sonucunu test et.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                AYT Puan Hesaplama Motoruna Git →
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            AYT Matematik Hakkında Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">TYT Matematik bitmeden AYT Matematiğe başlanır mı?</h3>
                                <p className="text-sm text-gray-700">
                                    Evet, başlanmalıdır. TYT&apos;deki tüm konuların bitmesini beklersen şubat-mart ayını bulursun ve AYT için zaman kalmaz. TYT&apos;de Temel Kavramlar, Rasyonel Sayılar, Basit Eşitsizlik ve Fonksiyonlar konularını bitirdiğin an doğrudan AYT Matematik derslerine başlamalısın.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">AYT Geometriyi boş bıraksam ilk 30 bine girebilir miyim?</h3>
                                <p className="text-sm text-gray-700">
                                    Sayısalda neredeyse imkânsızdır; çünkü 10 geometri sorusunu elediğinde tavan netin 30&apos;a düşer. Orada da 3-4 işlem hatası yapsan 26 nete inersin. Eşit Ağırlıkta ise Edebiyat ve Sosyal-1 netlerin çok yüksekse ilk 30 bin mümkün olabilir ancak analitik geometri gibi kolay net getiren konuları çöpe atmak büyük bir risktir.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">Branş denemelerine ne zaman başlanmalı?</h3>
                                <p className="text-sm text-gray-700">
                                    Tüm konuların bitmesini beklemek yapılan en büyük yanlıştır. LTİ konularına yeni başlamış olsan bile arkadaki konuların sıcak kalması için haftada 1 genel AYT Matematik branş denemesi çözülmelidir.
                                </p>
                            </div>
                        </div>

                        <p className="mt-8">
                            AYT&apos;deki hedeflerini pekiştirmek için <Link href="/blog/yks-puan-turleri" className="text-blue-600 font-semibold hover:underline">YKS Puan Türleri Rehberi</Link>&apos;ne göz atabilir, TYT temeli için ise <Link href="/blog/tyt-matematik-konulari" className="text-blue-600 font-semibold hover:underline">TYT Matematik Konuları ve Çalışma Planı</Link>&apos;nı inceleyebilirsin.
                        </p>

                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
