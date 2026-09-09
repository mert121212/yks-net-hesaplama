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
                            <span className="text-gray-600">• 11 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Aylardır 60-70 Net Bandında Sıkışıp Kaldınız Mı? Kabahat Sizde Değil, Yönteminizde
                        </h1>
                        <p className="text-xl text-gray-600">
                            Masadan kalkmıyorsunuz, günde yüzlerce test çözüyorsunuz ama pazar günkü denemede sonuç yine 63 net çıkıyor. Çaresizlik hissinin nedenini ve bu kısırdöngüyü kıracak adımları konuşalım.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Gece saat 23.30. Çalışma masanızın üstü açılmış soru bankaları, renkli fosforlu kalemler ve yarısı soğumuş bir kahve kupasıyla dolu. O gün tam 7 saat ders çalıştınız. Beliniz ağrıyor, gözleriniz yanıyor. Ama içinizde garip bir huzursuzluk var; çünkü geçen haftaki Türkiye geneli denemede 64 net yapmıştınız, iki gün önceki kurum denemesinde ise 62,5 net çıktı.
                        </p>

                        <p>
                            &quot;Ben aptal mıyım? Neden artmıyor bu lanet netler?&quot; diye kendi kendinize sormaya başladığınız o anı çok iyi biliyorum. Yalnız değilsiniz. Sınava hazırlanan her on öğrenciden yedisi ekim ile şubat ayları arasında bu duvara toslar.
                        </p>

                        <p>
                            Eğitim psikologları bu duruma &apos;öğrenme platosu&apos; der. Sınav hazırlığının başında 35 netten 55 nete fırlamak çok kolaydır; çünkü ortalıkta toplanmayı bekleyen bir sürü kolay konu ve temel kural vardır. Fakat iş 65-70 barajını aşıp 85&apos;lerin havasını solumaya geldiğinde, eski çalışma alışkanlıklarınız artık iflas eder. Çünkü daha fazla çalışarak değil, tamamen farklı ve acımasız bir disiplinle çalışarak bu duvar yıkılır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            İlk Teşhis: Pasif Öğrenme İllüzyonundan Kurtulun
                        </h2>
                        <p>
                            Çoğu öğrencinin yaptığı en büyük hata, YouTube&apos;u açıp saatlerce konu anlatım videosu izlemek ya da altı çizili ders notlarını baştan sona okumaktır. Zihin o sırada ekrana bakarken &quot;Aa evet, hoca çok güzel anlattı, ben bunu anladım&quot; diyerek kendini kandırır. Biz buna sahte yeterlilik hissi diyoruz.
                        </p>
                        <p>
                            Deneme sınavına girdiğinizde karşınızda videoyu durdurup düşüneceğiniz bir buton yok. Karşınızda beyaz kağıt, siyah kurşun kalem ve tıkır tıkır işleyen acımasız bir duvar saati var. Beyninizi pasif seyirci koltuğundan kaldırıp gladyatör gibi sahaya sürmek zorundasınız.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Çözüm 1: Çöpe Atılan Denemelerden &apos;Kırmızı Defter&apos;e Geçiş
                        </h2>
                        <p>
                            Pazar günü denemeden çıkıyorsunuz, doğru ve yanlışları sayıp netinizi hesaplıyorsunuz. Moraliniz bozuluyor ya da seviniyorsunuz, sonra o kitapçığı masanın altına veya dolabın köşesine fırlatıyorsunuz. Eğer bunu yapıyorsanız, o 165 dakikalık emeği çöpe attınız demektir.
                        </p>
                        <p>
                            Denemenin asıl değeri, doğru çözdüğünüz sorularda değil; yapamadığınız, boş bıraktığınız veya şans eseri sallayıp tutturduğunuz o 25-30 soruda gizlidir. Hemen yarın kırtasiyeden telli, kalın bir defter edinin. Yapamadığınız o soruları makasla kesin ve o deftere yapıştırın. Altına video çözümünden öğrendiğiniz can alıcı formülü veya mantığı kırmızı tükenmez kalemle, kendi kelimelerinizle yazın.
                        </p>
                        <p>
                            Her cuma akşamı ya da yeni bir denemeye girmeden bir saat önce bu defteri baştan sona okuyun. ÖSYM sizi aynı zayıf yerinizden beşinci kez vurmaya kalktığında, o kırmızı notlar gözünüzün önüne gelecek ve soruyu affetmeyeceksiniz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Çözüm 2: Sabahın Körü Paragraf-Problem Kondisyonu
                        </h2>
                        <p>
                            TYT dediğimiz devasa canavarın gövdesini iki şey oluşturur: 30 tane uzun paragraf sorusu ve 12-14 tane yeni nesil hikayeli problem sorusu. Yani sınavın neredeyse 45 sorusu tamamen okuduğunu süzme, odaklanma ve değişken kurma hızınızdan ibarettir.
                        </p>
                        <p>
                            Bunu akşam saat 21.00&apos;de, beyniniz yorgunken test kitabından 10 soru çözerek geliştiremezsiniz. Tıpkı maratona hazırlanan bir koşucu gibi ciğerlerinizi açacaksınız:
                        </p>

                        <div className="bg-slate-900 text-white p-6 rounded-xl my-6 not-prose border border-slate-800 shadow-md">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Pazarlıksız Sabah Rutini (21 Gün Kuralı)</h3>
                            <p className="text-sm text-slate-300 leading-relaxed">
                                Sabah uyanır uyanmaz, elinize telefonu alıp Instagram ya da TikTok bildirimlerine bakmadan önce masanın başına geçin. Masada tek bir şey olacak: Kronometre, 20 paragraf sorusu ve 20 problem sorusu. Toplam hedef süre: En fazla 45 dakika.
                            </p>
                        </div>

                        <p>
                            İlk 4-5 gün kafanız çatlayacak gibi ağrıyabilir, odaklanmakta zorlanabilirsiniz. Fakat üçüncü haftanın sonunda zihniniz sabahın ilk ışıklarında karmaşık metinleri tarayıp anında denkleme dönüştüren bir işlemciye dönüşecek. 70 barajını yerle bir eden asıl kaldıraç işte bu zihinsel dayanıklılıktır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Çözüm 3: Branş Denemesi ve Süre Kısıtlaması Terapisi
                        </h2>
                        <p>
                            Haftada 3 gün genel TYT denemesine girmek öğrenciyi tüketir, konu eksiklerini kapatacak zaman bırakmaz. Ancak branş denemeleri tam bir cerrah neşteridir.
                        </p>
                        <p>
                            Diyelim ki Sosyal Bilimler testinde sürekli 11-12 nette tıkanıyorsunuz. Kalın bir tarih konu anlatım kitabını açıp baştan sona okumayın. Alın bir 20&apos;li Sosyal branş denemesi. Her gün arka arkaya iki deneme çözün. Ancak can alıcı nokta süredir: ÖSYM size soru başına yaklaşık 1,3 dakika veriyorsa, siz evdeki branş denemesinde kendinize soru başına 1 dakika verin.
                        </p>
                        <p>
                            Matematik denemesine normalde 60 dakika mı ayırıyorsunuz? Kronometreyi 50 dakikaya kurun ve alarm çaldığı saniye kalemi bırakın. Antrenmanda kurşun yelekle koşan asker, müsabaka günü sahaya çıktığında adeta uçar. Sınav gününün o boğucu gerginliğini ancak evde kendi üzerinize bilinçli baskı kurarak yenebilirsiniz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Son ve En Ağır İlaç: Sorularla Egonuzu Yarıştırmayın
                        </h2>
                        <p>
                            65 nette takılı kalan öğrencilerin neredeyse tamamı, denemede 3. veya 4. dakikaya girdiği halde çözemediği bir geometri veya problem sorusuna takılıp kalır. &quot;Nasıl yapamam, ben bu konuyu üç gün çalıştım!&quot; diyerek soruyla inatlaşır.
                        </p>
                        <p>
                            Sınavda ego olmaz. Bir soruya 2 dakikadan fazla vakit harcadıysanız ve sonuca bir adım bile yaklaşamadıysanız, o soru artık sizin puanınızı değil, geleceğinizi çalmaya başlamıştır. Yanına kocaman bir işaret koyup hemen bir sonraki soruya atlayın. Sınavın arkasında bekleyen kolay ve bedava netleri heba etmeye hakkınız yok.
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
