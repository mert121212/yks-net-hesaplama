import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'

export const metadata: Metadata = {
    title: 'YKS\'de 1 Net Kaç Bin Kişi Atar? (Yığılma ve Standart Sapma Etkisi)',
    description: 'YKS (TYT-AYT) sınavında 1 netin sıralamaya etkisi. Yığılma noktalarında 1 net kaç kişiyi geride bırakır? SAY, EA, SÖZ 2027 analiz.',
    keywords: '1 net kaç kişi atar, yks 1 netin etkisi, tyt 1 net kaç kişi atar, ayt 1 net kaç kişi atar, yks yığılma, standart sapma yks',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar' },
    openGraph: {
        title: 'YKS\'de 1 Netin Gücü: Sınavı Kazandıran O Tek Soru',
        description: 'Özellikle 50.000-150.000 bandında 1 tek netin sıralamayı nasıl değiştirdiğini örneklerle anlattık.',
        type: 'article',
        publishedTime: '2026-02-13',
        modifiedTime: '2026-02-16',
        url: 'https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Net Hesaplama Blog'
            }
        ],
    },
}

export default function YKSBirNetKacKisiAtar() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS'de 1 Net Kaç Bin Kişi Atar? (Yığılma ve Standart Sapma Etkisi)"
                    description="YKS (TYT-AYT) sınavında 1 netin sıralamaya etkisi. Yığılma noktalarında 1 net kaç kişiyi geride bırakır? SAY, EA, SÖZ 2027 analiz."
                    datePublished="2026-02-13"
                    dateModified="2026-02-16"
                    url="https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar"
                    keywords={['1 net kaç kişi atar', 'yks 1 netin etkisi', 'tyt 1 net kaç kişi atar', 'ayt 1 net kaç kişi atar', 'yks yığılma', 'standart sapma yks']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">1 Net Kaç Kişi Atar?</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">İstatistik & Analiz</span>
                            <time className="text-gray-600" dateTime="2026-02-13">13 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                            YKS&apos;de 1 Net Kaç Kişi Atar? Yığılma Gerçeği ve Katsayılar
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Sınav anında &quot;Aman bir sorudan ne çıkar&quot; deyip boş bıraktığın o tek kutucuk, Temmuz ayında binlerce kişilik sıralama farkına dönüşebiliyor. İşte ÖSYM yığınsal verilerinin söylediği çıplak gerçek.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-800 space-y-6 mt-8 leading-relaxed">
                        <p className="text-lg">
                            Sınav salonunda son 15 dakika uyarısı yapıldığında masalardan gelen o derin nefes sesini sınava giren herkes bilir. Önündeki soruya bakarsın; biraz uğraştırıcıdır. &quot;Neyse ya, alt tarafı 1 soru&quot; deyip kalemi bırakmak o an dünyanın en masum hareketi gibi gelir.
                        </p>
                        
                        <p>
                            Oysa o tek soru, ÖSYM sonuç ekranında tek bir soru olarak kalmıyor. Bazen koca bir amfiyi, bazen de istediğin üniversitenin kontenjanını tamamen dolduracak kadar adayı temsil ediyor.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
                            Her Yerde Aynı Değil: Hangi Sıralama Bandındasın?
                        </h2>

                        <p>
                            İnternette sağda solda dönen &quot;1 net seni garanti 5 bin kişi fırlatır&quot; ezberine hemen inanmayın. Çünkü durduğun yere göre o tek bir netin ağırlığı baştan aşağı değişir:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>İlk 5.000 bandı:</strong> Puan makasının en açık olduğu yerdir. Buradaki adaylar zaten testleri silip süpürmüştür. Ekstra 1 net seni en fazla 80-150 kişi ileri taşır; çünkü önünde geçebileceğin fazla aday kalmamıştır.</li>
                            <li><strong>40.000 ile 100.000 bandı:</strong> Asıl fırtına burada kopar. YKS&apos;nin en yoğun yığılma bölgesi burasıdır. Adayların puanları virgüllerle birbirine yapışır. İşte bu aralıkta yapacağın tek bir net, seni bir anda 3.000 ila 6.000 kişinin önüne geçirebilir.</li>
                            <li><strong>120.000 ve sonrası:</strong> Kalabalık iyice sıklaşır. Burada sadece doğru bir soru değil, yanlış işaretlediğin için hanenden silinen o 0,25 net bile arkana yüzlerce adayın doluşmasına yeter.</li>
                        </ul>

                        <QuickNetSimulator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
                            AYT Neti Neden TYT&apos;yi Katlar?
                        </h2>

                        <p>
                            Adayların en sık düştüğü yanılgı şudur: <em>&quot;Hocam TYT&apos;de 3 net artırdım ama deneme sıralamam pek oynamadı.&quot;</em>
                        </p>

                        <p>
                            Oynamaz tabii. Çünkü 4 yıllık bir lisans bölümü hedefliyorsan yerleştirme puanının %60&apos;ı doğrudan AYT&apos;den gelir. TYT&apos;nin payı ise sadece %40&apos;tır.
                        </p>

                        <p>
                            Üstelik soru sayılarına bakın: TYT&apos;de 120 soru varken AYT&apos;de alanına göre yalnızca 80 soru çözersin. Soru sayısı üçte bir oranında az ama getirdiği puan %50 daha fazla!
                        </p>

                        <p>
                            Basit bir hesap: AYT&apos;deki 1 sorunun puan katkısı, TYT&apos;deki bir sorunun yaklaşık 2,2 katıdır. Yani AYT&apos;de işaretlediğin tek bir doğru matematik veya edebiyat sorusunun ağırlığını yakalamak için TYT&apos;de 2&apos;den fazla net çıkarmak zorundasın. Son aylarda panikle sadece TYT denemesi çözüp AYT&apos;yi erteleyen öğrencilerin sıralama şoku yaşamasının bir numaralı sebebi tam olarak budur.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
                            Zor Soruyu Çözen Fazla Puan Alır mı?
                        </h2>

                        <p>
                            Bu da sınavın en yaygın şehir efsanesidir: <em>&quot;Bu türev sorusunu kimse yapamaz, ben yaparsam standart sapmadan deli gibi puan gelir.&quot;</em>
                        </p>

                        <p>
                            Maalesef öyle bir şey yok. ÖSYM standart sapmayı tek tek soruların zorluğuna göre değil, testin geneline göre hesaplar.
                        </p>

                        <p>
                            Yani TYT Matematik testindeki en zor, en karmaşık mantık sorusuyla ilk sayfadaki o iki satırlık basit işlem sorusunun getirdiği ham puan tamamen aynıdır.
                        </p>

                        <p>
                            Sınavda bir soruyla 5 dakika inatlaşıp arkadaki iki tane basit soruyu görmeden süreyi bitirmek, kendi ayağına kurşun sıkmaktan farksızdır. Derece yapan öğrencilerin sırrı en zor soruları çözmeleri değil; kolay soruları fire vermeden ve hızlıca cebe indirmeleridir.
                        </p>

                        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-3xl p-8 my-10 text-center text-white shadow-xl">
                            <h3 className="text-2xl font-extrabold mb-2">Senin 1 Netin Kaç Kişiyi Öne Atıyor?</h3>
                            <p className="text-blue-100 mb-6 text-sm max-w-xl mx-auto">
                                Hesaplayıcımıza girin. Mevcut netlerinize sadece +1 AYT neti ekleyin ve sıralamanızın kaç basamak değiştiğini canlı görün.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-900 px-8 py-3.5 rounded-xl font-black hover:bg-blue-50 transition-all shadow-md hover:scale-105">
                                1 Netin Gücünü Test Et →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
