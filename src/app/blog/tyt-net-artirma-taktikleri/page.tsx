import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'TYT Net Artırma Taktikleri 2027 | 60-70 Bandında Sıkışanlar İçin',
    description: 'TYT denemelerinde netler neden takılır kalır? 60-70 net platosundan kurtulma yolları, yanlış analizi defteri, paragraf-problem rutini ve hızlanma teknikleri.',
    keywords: 'tyt net artırma, tyt netleri nasıl artar, tyt 70 net, tyt matematik hızlanma, yks deneme analizi',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-net-artirma-taktikleri' },
    openGraph: {
        title: 'TYT Net Artırma: 60-70 Cehenneminden Çıkış Yolu',
        description: 'Aylardır aynı netlerde takılı kalanlar için radikal değişiklikler ve deneme analizi yöntemleri.',
        type: 'article',
        publishedTime: '2026-02-10',
        modifiedTime: '2026-02-13',
        url: 'https://yksnethesapla.com/blog/tyt-net-artirma-taktikleri',
        images: [
            {
                url: '/og-image.jpg',
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
                    title="TYT Net Artırma Taktikleri 2027 | 60-70 Bandında Sıkışanlar İçin" 
                    description="TYT denemelerinde netler neden takılır kalır? 60-70 net platosundan kurtulma yolları, yanlış analizi defteri, paragraf-problem rutini ve hızlanma teknikleri."
                    datePublished="2026-02-10"
                    dateModified="2026-02-13"
                    url="https://yksnethesapla.com/blog/tyt-net-artirma-taktikleri"
                    keywords={['tyt net artırma', 'tyt netleri nasıl artar', 'tyt 70 net', 'tyt matematik hızlanma', 'yks deneme analizi']}
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
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Taktik</span>
                            <time className="text-gray-600" dateTime="2026-02-10">10 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            60-70 Net Bandında Sıkışanlar İçin TYT Net Artırma Reçetesi
                        </h1>
                        <p className="text-xl text-gray-600">
                            Aylardır her pazar denemeye girip yine 63-64 net görmek moralinizi bozabilir. Kabahat zekanızda değil; eski çalışma yönteminizin artık sınırına dayanmış olmasında.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Buna camiada <strong>&quot;62 Net Laneti&quot;</strong> derler. Kasım&apos;da girersin 63 gelir. Ocak&apos;ta girersin 61 gelir. Mart&apos;ta girersin 64 gelir. Masanın başında günde 7 saat ders çalışıyorsundur, soru bankalarını bitirmişsindir ama o ibre bir türlü 75&apos;e vurmaz. İnsanın içini kemiren o hissi çok iyi bilirim: <em>&quot;Acaba bende mi bir gerizekalılık var?&quot;</em>
                        </p>

                        <p>
                            Yok kardeşim, sende hiçbir sorun yok.
                        </p>

                        <p>
                            Sorun şurada: 30 netten 60 nete çıkarken kullandığın alet çantasıyla, 65&apos;ten 85&apos;e çıkamazsın. 60 nete kadar konu anlatımı dinleyip soru çözmek işe yarar çünkü bilgi eksiktir. Ama 65&apos;in üzerine çıktığın an oyunun adı değişir: Artık bilgi değil; hız, sınav psikolojisi ve turlama disiplini yarışır.
                        </p>

                        <p>
                            Haftalardır aynı yerde patinaj çekmekten delirmek üzereysen şu 4 taktiği hemen yarın sabah hayatına sok:
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. O Deneme Kitapçığını Masanın Altına Fırlatmayı Kes!
                        </h2>
                        <p>
                            Denemeden çıkıp optiği okutuyorsun. Sonuç: 64.25. Surat asılıyor, kitapçığı çantanın en dibine tıkıyorsun ve bir daha yüzüne bakmıyorsun.
                        </p>
                        <p>
                            En büyük hatan bu işte.
                        </p>
                        <p>
                            O denemede doğru yaptığın 65 soru seni üniversiteye sokmayacak; onlar zaten bildiğin şeyler. Seni dereceye sokacak olan şey, <strong>yapamadığın o 22 soru ile sallayıp tutturduğun o 6 soru</strong>.
                        </p>
                        <p>
                            Hemen yarın kırtasiyeden telli kalın bir defter al. Yapamadığın soruları makasla kes, o deftere yapıştır. Altına video çözümünden hocanın kullandığı kilit cümleyi kendi el yazınla yaz. Her yeni denemeden önceki 30 dakikanı bu defteri karıştırarak geçir. İnan bana, soru tipleri uzaydan gelmiyor; ÖSYM dönüp dolaşıp aynı mantığı soruyor. Kendi hatalarınla yüzleştiğin an netlerin kendiliğinden 75&apos;e tırmanır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. Sabah Rutini: 20 Paragraf + 15 Problem (Pazarlıksız)
                        </h2>
                        <p>
                            TYT kitapçığında tam 120 soru var. Bunun neredeyse 45 tanesi ne biliyor musun? Uzun paragraflar ve hikayeli problemler. Yani sınavın neredeyse %40&apos;ı sadece okuduğunu hızlı anlama ve denklem kurma kondisyonudur.
                        </p>
                        <p>
                            Bunu gece kafan kazan gibiyken yatakta çözdüğün 10 soruyla geliştiremezsin.
                        </p>

                        <div className="bg-slate-900 text-white p-6 rounded-xl my-6 not-prose border border-slate-800 shadow-md">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Her Sabah İstisnasız Uygula:</h3>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                Sabah gözünü açtın, kahveni aldın, masaya oturdun. Başka hiçbir derse bakmadan kronometreyi bas: <strong>20 paragraf + 15 problem</strong>. Süre sınırı: En geç 42 dakika. Bunu 21 gün aralıksız yap; denemede Türkçe ve Matematik sürenin nasıl 20 dakika kısaldığına inanamayacaksın.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. Genel Deneme Yorgunluğu Yerine &quot;Nokta Atışı&quot; Branş Denemesi
                        </h2>
                        <p>
                            Haftada 4 tane genel TYT denemesine giren öğrenciler görüyorum. Çocuk perişan, ruhunu teslim etmiş. Genel deneme çözmekten konu tekrarı yapmaya dermanı kalmamış.
                        </p>
                        <p>
                            Genel denemeyi haftada 2 ile sınırla. Kalan günlerde branş denemesi çöz:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Sosyalde 9-10 nette misin? Aç bir Sosyal branş denemesi, 12 dakikada çöz, yanlışlarına bak. Günde 2 adet çözsen haftada 140 sosyal sorusu tararsın; netin anında 16&apos;ya fırlar.</li>
                            <li>Fende fizik formüllerini mi karıştırıyorsun? Sadece Fen branş denemesiyle eksik konuları teşhis et.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. Sorularla İnatlaşma Egosunu Çöpe At
                        </h2>
                        <p>
                            &quot;Ben fonksiyonları 3 hafta boyunca çalıştım, bu soruyu çözmeden bu sayfayı çevirmem!&quot;
                        </p>
                        <p>
                            İşte sınavı kaybettiren kafa yapısı bu. Bir soruyla 5 dakika inatlaştın mı bittin. Soru zor olabilir, tuzak olabilir veya o an senin kafan basmamış olabilir. Sınav masasında ego yapan adamı ÖSYM fena hırpalar.
                        </p>
                        <p>
                            Kural çok net: Soruyu okudun, 35-40 saniye geçti ve hala kafanda bir ışık yanmadı mı? Yanına bir yuvarlak koy ve hemen sonraki soruya uç. Arkada seni bekleyen 15 saniyelik kek sorular var. Önce onları topla, puanları çantaya at; o uğraştırıcı soruya sınavın sonunda dönersin.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Yeni Netlerinizi Simüle Edin</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                Taktikleri uygulayıp netlerinizi 5-10 net yukarı taşıdığınızda sıralamanızın Türkiye genelinde kaç bin kişi ileri fırlayacağını hesaplama motorumuzda anında görün.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Net ve Sıralama Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlginizi Çekebilecek Diğer Rehberler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-net-hesaplama-rehberi" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">TYT Net Hesaplama ve Katsayılar →</p>
                                    <p className="text-xs text-gray-600 mt-1">Derslerin ağırlık oranları ve test bazında puan getirileri.</p>
                                </Link>
                                <Link href="/blog/yks-yigilma-tehlikesi" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">YKS Yığılma Tehlikesi →</p>
                                    <p className="text-xs text-gray-600 mt-1">Orta puan bantlarında on binlerce rakibin arasından sıyrılma sanatı.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
