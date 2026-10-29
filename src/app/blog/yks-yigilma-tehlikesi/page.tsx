import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import YigilmaChart from '@/components/YigilmaChart'
import ArticleFeedback from '@/components/ArticleFeedback'
import ReadingProgress from '@/components/ReadingProgress'
import LastUpdatedBadge from '@/components/LastUpdatedBadge'
import TableOfContents from '@/components/TableOfContents'

export const metadata: Metadata = {
    title: 'YKS\'de Yığılma Nedir ve Nasıl Oluşur? 2027 Sıralama Tuzağı Rehberi',
    description: 'YKS yığılması nedir? Kolay sınavların sıralamaları çökertme mekanizması, 60k-150k kritik yığılma bölgesi ve yığılmayı delip geçme taktikleri.',
    keywords: 'yks yığılma nedir, yks sıralama yığılması, tyt yığılma, ayt yığılma, yks puan dağılımı 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-yigilma-tehlikesi' },
    openGraph: {
        title: 'YKS\'de Yığılma Nedir ve Nasıl Oluşur? 2027 Sıralama Tuzağı',
        description: 'Sınav kolay olduğunda neden sevinmemelisin? Puanların şişip sıralamaların çöktüğü o meşhur yığılma gerçeği.',
        type: 'article',
        publishedTime: '2026-01-30',
        modifiedTime: '2026-10-29',
        url: 'https://yksnethesapla.com/blog/yks-yigilma-tehlikesi',
        images: [
            {
                url: '/images/blog/yks-yigilma-tehlikesi.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Yığılma Rehberi'
            }
        ],
    },
}

export default function YKSYigilmaTehlikesi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <ReadingProgress />
                <BlogArticleSchema 
                    title="YKS'de Yığılma Nedir ve Nasıl Oluşur? 2027 Sıralama Tuzağı Rehberi"
                    description="YKS yığılması nedir? Kolay sınavların sıralamaları çökertme mekanizması, 60k-150k kritik yığılma bölgesi ve yığılmayı delip geçme taktikleri."
                    datePublished="2026-01-30"
                    dateModified="2026-10-29"
                    url="https://yksnethesapla.com/blog/yks-yigilma-tehlikesi"
                    keywords={['yks yığılma nedir', 'yks sıralama yığılması', 'tyt yığılma', 'ayt yığılma', 'yks puan dağılımı 2027']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Yığılma Rehberi</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium">Saha Analizi</span>
                            <time className="text-gray-600" dateTime="2026-01-30">30 Ocak 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS&apos;de Yığılma Nedir? Neden Kolay Sınavdan Korkmalısın?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Sınav salonundan çıkıp <em>&ldquo;Sorular su gibi kolaydı, 430 puan garanti!&rdquo;</em> diye sevinen adayların sonuç günü 85 bininci olup ağladığı o kabusa YKS terminolojisinde <strong>yığılma</strong> denir.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-yigilma-tehlikesi.jpg"
                        alt="YKS&apos;de Yığılma Nedir, Sıralamayı Nasıl Etkiler?"
                    />

                    <TableOfContents items={[
                        { id: 'yigilma-nedir', title: 'YKS\'de Yığılma Nasıl Meydana Gelir?' },
                        { id: 'zor-sinav-neden-dosttur', title: 'Zor Sınav Neden Öğrencinin En Büyük Dostudur?' },
                        { id: 'yigilma-grafigi', title: 'YKS Yığılma Dağılım Grafiği' },
                        { id: 'risk-haritasi', title: 'Hangi Başarı Sıralamasında Kaç Bin Aday Sıkışır?' },
                        { id: 'yigilmadan-kurtulma', title: 'Yığılma Tuzağını Yarıp Geçmenin 3 Somut Yolu' },
                        { id: 'sikca-sorulanlar', title: 'Sıkça Sorulan Sorular' },
                    ]} />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her yıl temmuz ayı ortasında ÖSYM sonuç ekranı açıldığında aynı yakınmayı duyarız: <em>&ldquo;Hocam geçen sene 410 puan alan arkadaşım 45 bininci oldu. Ben bu sene 428 puan aldım ama 74 bininciyim, sınav sistemi çöktü mü?!&rdquo;</em>
                        </p>

                        <p>
                            Sistem çökmedi; tam aksine matematiksel olarak kusursuz çalıştı. Üniversite kapıları puanla değil, <strong>kontenjan koltuklarıyla</strong> dolar. Herkesin yüksek net yaptığı kolay bir sınavda puanların hiçbir değeri kalmaz; çünkü binlerce kişi aynı virgüllü puan aralığına sıkışır.
                        </p>

                        <h2 id="yigilma-nedir" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            YKS&apos;de Yığılma Nasıl Meydana Gelir?
                        </h2>

                        <p>
                            ÖSYM sınavı hazırlarken çan eğrisi modelini hedefler. Ancak sorular olması gerekenden kolay sorulduğunda; 4-5 ay çalışan ortalama bir adayla 11 ay boyunca günde 7 saat çalışan derece adayı benzer netleri yapar. Sonuç olarak:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                            <li>360 ile 420 puan arasına yüz binlerce aday üst üste yığılır.</li>
                            <li>0,25 netlik tek bir yanlış işaretleme, adayı bir anda 4.000 kişinin arkasına fırlatır.</li>
                            <li>Puanlar yükselirken sıralamalar dibe doğru çöker.</li>
                        </ul>

                        <h2 id="zor-sinav-neden-dosttur" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Zor Sınav Neden Öğrencinin En Büyük Dostudur?
                        </h2>

                        <p>
                            Öğrenciler genellikle zor sınavlardan nefret eder ama gerçek şudur: <strong>Gerçekten emek veren öğrenciyi sadece zor ve seçici sınav kurtarır.</strong>
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200">
                                <h3 className="font-bold text-emerald-950 text-base mb-1">Zor Sınav Yılı (Örn. 2021 YKS):</h3>
                                <p className="text-sm text-emerald-900">
                                    Matematik soruları çok zordu. Çalışmayanlar 3-5 nette kaldı; çalışanlar ise 22-25 netle bile zirveye yerleşti. Puanlar 50 puan birden düştü ama sıralamalar uçtu! 62 TYT netiyle Tıp Fakültesi kazanılan efsanevi yıl tam olarak böyle gerçekleşti.
                                </p>
                            </div>

                            <div className="bg-red-50 p-5 rounded-xl border border-red-200">
                                <h3 className="font-bold text-red-950 text-base mb-1">Kolay Sınav Yılı (Örn. 2020 ve 2022 YKS):</h3>
                                <p className="text-sm text-red-900">
                                    Sorular herkesin yapabileceği kıvamda gelince çalışanla çalışmayan birbirine karıştı. 420 puan alan bir sayısalcı hayalindeki mühendisliğe giremedi; çünkü o puan aralığında 150 bin kişi balık istifi dizildi.
                                </p>
                            </div>
                        </div>

                        <div id="yigilma-grafigi">
                            <YigilmaChart />
                        </div>

                        <h2 id="risk-haritasi" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Hangi Başarı Sıralamasında Kaç Bin Aday Sıkışır?
                        </h2>

                        <p>
                            İlk 10 binde yığılma pek hissedilmez; çünkü fulle yakın yapan aday sayısı sınırlıdır. Asıl yıkım <strong>60.000 ile 160.000 diliminde</strong> gerçekleşir:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-rose-50 text-rose-950 font-semibold">
                                    <tr>
                                        <th className="p-3 border">Sıralama Aralığı</th>
                                        <th className="p-3 border">Ortalama Puan</th>
                                        <th className="p-3 border">1 Puan Başına Düşen Aday</th>
                                        <th className="p-3 border">Risk Derecesi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">İlk 20.000</td>
                                        <td className="p-3 border">475 - 530 Puan</td>
                                        <td className="p-3 border font-bold text-blue-700">250 - 450 Kişi</td>
                                        <td className="p-3 border text-emerald-600">Düşük Risk</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">20.000 - 60.000</td>
                                        <td className="p-3 border">425 - 475 Puan</td>
                                        <td className="p-3 border font-bold text-amber-700">800 - 1.400 Kişi</td>
                                        <td className="p-3 border text-amber-600">Orta Risk</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">60.000 - 150.000</td>
                                        <td className="p-3 border">340 - 425 Puan</td>
                                        <td className="p-3 border font-bold text-red-600">2.200 - 3.800 Kişi</td>
                                        <td className="p-3 border font-bold text-red-600">Aşırı Yüksek Risk</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">150.000 - 300.000</td>
                                        <td className="p-3 border">260 - 340 Puan</td>
                                        <td className="p-3 border font-bold text-red-700">2.500 - 4.200 Kişi</td>
                                        <td className="p-3 border font-bold text-red-700">Maksimum Yığılma</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="yigilmadan-kurtulma" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Yığılma Tuzağını Yarıp Geçmenin 3 Somut Yolu
                        </h2>

                        <p>
                            Sınavın zorluk derecesini değiştiremezsin; ancak yığılmanın içinden sıyrılacak stratejileri uygulayabilirsin:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                                <h4 className="font-bold text-blue-950 mb-1">1. AYT Farkı Yarat (Tek Kurtarıcı)</h4>
                                <p className="text-xs text-blue-900">
                                    TYT&apos;de herkes 60-70 net aralığına sıkışır; asıl ayrışma AYT&apos;de gerçekleşir. AYT Matematikte yapacağın fazladan 4 net, seni 15 bin kişilik yığılma kütlesinin doğrudan üzerine fırlatır.
                                </p>
                            </div>

                            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                                <h4 className="font-bold text-purple-950 mb-1">2. OBP Güvencesi (Lise Diploma Notu)</h4>
                                <p className="text-xs text-purple-900">
                                    Yığılma bölgesinde 200 bin kişinin ham puanı birbirine eşittir. Burada devreye OBP girer. 95 OBP seni bir hamlede 10 bin kişinin önüne taşırken, 70 OBP seni geriye çeker. Detaylar için <Link href="/blog/obp-hesaplama" className="text-purple-950 font-bold underline">OBP Hesaplama Rehberimize</Link> bakabilirsin.
                                </p>
                            </div>

                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                                <h4 className="font-bold text-amber-950 mb-1">3. Rakiplerin İhmal Ettiği Yan Testler</h4>
                                <p className="text-xs text-amber-900">
                                    Sayısal öğrencisiysen TYT Sosyalden yapacağın 16 net, eşit ağırlık öğrencisiysen TYT Fenden yapacağın 8 net yığılma dalgasını delip geçmenin en ucuz yoludur.
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Netlerin Yığılmayı Yarıyor mu?</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Netlerini simülatörümüze gir; güncel ÖSYM standart katsayılarıyla puanını hesapla ve yığılmanın hangi güvenli diliminde kaldığını gör.
                            </p>
                            <Link href="/tyt-net-hesaplama" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Net Hesaplayıcıya Git →
                            </Link>
                        </div>

                        <p>
                            Yığılma bölgesinde 1 netin kaç bin adayı geride bıraktığını somut verilerle görmek için <Link href="/blog/yks-1-net-kac-kisi-atar" className="text-blue-600 font-semibold hover:underline">1 Net Kaç Kişi Atar?</Link> analizimize mutlaka göz at. Tercih döneminde açıkta kalmamak için <Link href="/blog/universite-tercih-stratejileri" className="text-blue-600 font-semibold hover:underline">Üniversite Tercih Stratejileri</Link> yazımızı inceleyebilirsin.
                        </p>

                        <h2 id="sikca-sorulanlar" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Yığılma sınavdan sınava değişir mi?</h3>
                                <p className="text-sm text-gray-600">
                                    Evet. ÖSYM sorularının zorluk derecesine göre yığılma bölgesi kayar. Sınav zorsa yığılma 280-340 puan arasına iner; sınav kolaysa 380-440 puan aralığına tırmanır.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Sıralama tahmini yaparken hangi yılın verilerini baz almalıyım?</h3>
                                <p className="text-sm text-gray-600">
                                    Tek bir yılı baz almak yanıltıcıdır. Sınavın zorluk düzeyini değerlendirip; zor sınavlar için 2021 ve 2024 verilerini, orta-kolay sınavlar için 2022 ve 2023 verilerini karşılaştırarak bir sıralama koridoru oluşturmalısın.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Yığılmanın olduğu aralıkta tercih nasıl yapılmalı?</h3>
                                <p className="text-sm text-gray-600">
                                    60 bin ile 150 bin bandında olan adaylar tercih koridorunu çok geniş tutmalıdır. Kendi sırasının %25 üstünden başlayıp en az %40 altına kadar inen 24 tercihi dengeli dağıtmalıdır.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#yksYigilma</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#siralamalar</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#yks2027</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <Link href="/blog" className="text-blue-600 hover:underline font-medium">← Blog Listesine Dön</Link>
                            <Link href="/blog/yks-1-net-kac-kisi-atar" className="text-blue-600 hover:underline font-medium">1 Net Kaç Kişi Atar? →</Link>
                        </div>
                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
