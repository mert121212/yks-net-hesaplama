import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'TYT Net Artırma Taktikleri 2027 | 60-70 Bandında Sıkışanlar İçin',
    description: 'TYT denemelerinde netler neden artmaz? 50-70 net bandından çıkış taktikleri. Paragraf ve problem rutini, branş denemesi analizi ve zaman yönetimi.',
    keywords: 'tyt net artırma, tyt netleri nasıl artar, tyt 70 net, tyt matematik hızlanma, yks deneme analizi',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-net-artirma-taktikleri' },
    openGraph: {
        title: 'TYT Net Artırma: 60-70 Cehenneminden Çıkış Yolu',
        description: 'Aylardır aynı netlerde takılı kalanlar için radikal değişiklikler ve deneme analizi yöntemleri.',
        type: 'article',
        publishedTime: '2026-02-10',
        modifiedTime: '2026-08-19',
        url: 'https://yksnethesapla.com/blog/tyt-net-artirma-taktikleri',
    },
}

export default function TYTNetArtirma() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
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
                            <time className="text-gray-600">19 Ağustos 2026</time>
                            <span className="text-gray-600">• 11 dk okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Aylardır 60-70 Net Bandında Sıkışıp Kaldın Mı? (Sebebi Sen Değilsin, Yöntemin)
                        </h1>
                        <p className="text-xl text-gray-600">
                            Masadan kalkmıyorsun, günde yüzlerce soru çözüyorsun ama pazar günü denemeye bir giriyorsun sonuç yine 63 net. Çıldırmak üzeresin biliyorum. Gel bu döngüyü kıralım.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Buna eğitim psikolojisinde &quot;plato evresi&quot; denir. Her öğrenci yaşar bunu. Önce 30 netten 50&apos;ye hızlıca çıkarsın, çünkü öğreneceğin &quot;kolay&quot; çok bilgi vardır. Ama 60-70 bandına geldiğinde duvarlarsın. 1 ay geçer 62 olur, 2 ay geçer 64 olur. Bazen 58&apos;e bile düşer moralin bozulur.
                        </p>

                        <p>
                            O platodan çıkmanın yolu <strong>daha fazla</strong> çalışmak değildir, <strong>farklı</strong> çalışmaktır. Sürekli konu anlatımı dinleyip &quot;kavrama&quot; testleri çözerek o duvarı aşamazsın. Beynini konfor alanından çıkaracak, terletecek üç tane radikal taktiğe ihtiyacın var.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Taktik: Yanlış Defteri (Acı Ama İşe Yarıyor)
                        </h2>
                        <p>
                            Öğrencilerin çoğu denemeyi çözer, puanına bakar, sevinir veya üzülür ve denemeyi çöpe atar. O deneme artık çöp. Hiçbir faydası olmadı.
                        </p>
                        
                        <p>
                            Gerçek gelişme nerede başlar biliyor musun? Denemede boş bıraktığın veya yanlış yaptığın o 30 soruyla yüzleştiğinde. Hemen kırtasiyeden kalın bir defter al. Adı &quot;Yanlış Defteri&quot; olacak. 
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Denemede yapamadığın (veya sallayıp tutturduğun) her soruyu kes ve bu deftere yapıştır.</li>
                            <li>Altına o sorunun doğru çözüm yolunu (videodan izleyip) kendi cümlelerinle, kırmızı kalemle yaz.</li>
                            <li>Her pazar sabahı, yeni bir denemeye girmeden önce, kahveni alıp bu defterdeki soruları baştan sona oku.</li>
                        </ul>
                        <p>
                            O sorular senin zayıf karnın. Sen o sorularla yüzleşmedikçe, ÖSYM o zayıf yerinden vurmaya devam edecek. Yanlış defterini düzenli tutan öğrencinin netleri 3 hafta içinde garanti 10-15 net fırlar.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. Taktik: PP Rutini (Paragraf - Problem)
                        </h2>
                        <p>
                            Sana TYT&apos;nin en büyük sırrını vereyim mi? TYT dediğimiz sınav, 40 Türkçe ve 40 Matematik sorusundan ibaret değil. TYT aslında <strong>30 Paragraf + 15 Problem</strong> sorusunun etrafında dönen bir dayanıklılık testidir. Bu 45 soru, sınavın belkemiğidir, iskeletidir.
                        </p>
                        <p>
                            Bunu halletmek için &quot;zamanı gelince çalışırım&quot; lüksün yok. Her sabah, uyanır uyanmaz, kahvaltıdan bile önce masaya oturacaksın. Kronometreyi açacaksın:
                        </p>
                        <div className="bg-slate-900 text-white p-6 rounded-xl my-6 text-center shadow-lg not-prose">
                            <h3 className="text-xl font-bold text-emerald-400 mb-2">Sabah PP Rutini</h3>
                            <p className="text-lg">20 Paragraf + 20 Problem Sorusu</p>
                            <p className="text-sm text-slate-400 mt-2">Hedef Süre: Toplam 45 Dakika</p>
                        </div>
                        <p>
                            Bunu 21 gün boyunca aksatmadan (Pazar dahil) yap. Beynin o okuma ve denklem kurma hızına o kadar alışacak ki, sınavda paragraf soruları sana çocuk masalı, problem soruları ise bulmaca gibi gelmeye başlayacak. 70 barajını yıkan balyoz budur.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. Taktik: Branş Denemesi Kondisyonu
                        </h2>
                        <p>
                            TYT Genel denemesine haftada 1 veya 2 kez girmek yeterlidir. Daha fazlası seni yorar, konuya vakit kalmaz. Ama <strong>branş denemesi</strong> hayat kurtarır.
                        </p>
                        <p>
                            Diyelim ki Sosyalde hep 12 nette kalıyorsun. Gidip Tarih kitabını baştan okuma. Git bir Sosyal Bilimler Branş Denemesi kitabı al. Her biri 20 soruluk. Her gün arka arkaya 2 tane (toplam 40 soru) Sosyal denemesi çöz. 40 soru için kendine 35 dakika ver.
                        </p>
                        
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-6">
                            <h3 className="font-bold text-amber-900 mb-2">Zaman Baskısı Yaratın</h3>
                            <p className="text-sm text-amber-800">
                                Evde deneme çözerken &quot;nasıl olsa evdeyim&quot; rahatlığıyla yayılırsan, sınavda 30 soruyu görünce paniklersin. Branş denemelerini her zaman ÖSYM&apos;nin sana verdiği süreden <strong>%10 daha az</strong> süreyle çöz. Matematik branş denemesine 60 dakika mı ayırıyorsun? Onu 50 dakikaya kur. Evde terleyen, sınavda rahat eder.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Son Söz: Mükemmeliyetçiliği Bırak
                        </h2>
                        <p>
                            60-70 bandında kalan öğrencilerin en büyük hatası, bir soruyu çözemediklerinde ona takıntılı hale gelmeleridir. O soru 3 dakikanı almışsa ve hâlâ çözemediysen o soru senin için ölmüştür, bırak. Üstüne sifonu çek ve diğer soruya geç. Sınavda &quot;ego&quot; yaparsan kaybedersin. Gidip o sürede 3 tane kolay soru çözmek varken bir inat uğruna koca sınavı yakma.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Taktikleri Uygula, Farkı Gör</h3>
                            <p className="text-blue-100 mb-6">
                                Bu taktikleri 1 ay uyguladıktan sonra artan netlerini hesaplama aracımıza girip hayalindeki bölümle arandaki mesafenin nasıl kapandığını izle.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Yeni Netlerini Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
