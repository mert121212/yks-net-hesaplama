import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import ArticleFeedback from '@/components/ArticleFeedback'
import ReadingProgress from '@/components/ReadingProgress'
import LastUpdatedBadge from '@/components/LastUpdatedBadge'

export const metadata: Metadata = {
    title: 'AYT Edebiyat Konuları ve Soru Dağılımı 2027: 24 Soruda 20+ Net Stratejisi',
    description: 'AYT Edebiyat ezber batağına batmadan nasıl çalışılır? 24 sorunun dağılımı: 6 bedava paragraf, şiir bilgisi şifreleri, Divan ve Cumhuriyet taktikleri.',
    keywords: 'yks edebiyat konuları, ayt edebiyat soru dağılımı, edebiyat nasıl çalışılır, divan edebiyatı, cumhuriyet edebiyatı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari' },
    openGraph: {
        title: 'AYT Edebiyat Konuları ve Soru Dağılımı 2027',
        description: 'Edebiyatı 500 yazar ezberlemeden 20+ nete taşıma rehberi. Kodlamalar, dönem mantığı ve banko yazarlar.',
        type: 'article',
        publishedTime: '2026-06-15',
        modifiedTime: '2026-10-29',
        url: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari',
        images: [
            {
                url: '/images/blog/yks-edebiyat-konulari.jpg',
                width: 1200,
                height: 630,
                alt: 'AYT Edebiyat Konuları ve Taktikleri'
            }
        ],
    },
}

export default function YKSEdebiyatKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <ReadingProgress />
                <BlogArticleSchema 
                    title="AYT Edebiyat Konuları ve Soru Dağılımı 2027 | Çalışma Rehberi" 
                    description="AYT Edebiyat sınavında 24 sorunun konu dağılımı: Şiir bilgisi, edebi sanatlar, Divan edebiyatı, Tanzimat ve Cumhuriyet dönemi analizi."
                    datePublished="2026-06-15"
                    dateModified="2026-10-29"
                    url="https://yksnethesapla.com/blog/yks-edebiyat-konulari"
                    keywords={['yks edebiyat konuları', 'ayt edebiyat soru dağılımı', 'edebiyat nasıl çalışılır', 'divan edebiyatı', 'cumhuriyet edebiyatı']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">AYT Edebiyat Konuları</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">EA & SÖZ Rehberi</span>
                            <time className="text-gray-600" dateTime="2026-06-15">15 Haziran 2026</time>
                            <span className="text-gray-600">• 11 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            AYT Edebiyat Konuları ve Soru Dağılımı: Ezber Batağından Kurtulma Yolu
                        </h1>
                        <p className="text-xl text-gray-600">
                            Yüzlerce yazar ve eseri körü körüne ezberlemeye çalışırsan iki hafta sonra her şey birbirine karışır. Oysa AYT Edebiyat&apos;ın 24 sorusu son derece belirgin bir şablon ve mantık üzerine kuruludur.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-edebiyat-konulari.jpg"
                        alt="AYT Edebiyat Konuları ve Soru Dağılımı (2027)"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Eşit Ağırlık ve Sözel adaylarının hazırlık sürecinde en çok yakındığı ders genellikle Edebiyattır: <em>&ldquo;Hocam hangi birini aklımda tutayım? Recaizade&apos;nin Araba Sevdası&apos;ndan girdim, Yakup Kadri&apos;nin Yaban&apos;ından çıktım, tüm yazarlar kafamda birbirine karıştı!&rdquo;</em>
                        </p>

                        <p>
                            Derin bir nefes al. ÖSYM soru komisyonu senin bir ansiklopedi gibi 800 sayfalık yazar sözlüğü ezberlemeni beklemiyor. Edebiyat sınavındaki 24 sorunun belirli bir anatomisi var. Bu şablonu çözdüğünde göreceksin ki aslında soruların üçte biri edebiyat bile değil, safi okuma-anlama becerisidir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            24 Sorunun Anatomisi: Hangi Blok Kaç Net Getirir?
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">1. İlk 5 - 6 Soru: Hediye Paragraf ve Anlam Soruları</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Edebiyat kitapçığını açtığında karşına ilk çıkan 5 veya 6 soru doğrudan Türkçe paragraf, cümlede anlam ve sözcük yorumlama sorularıdır. Sıfır edebiyat bilgisiyle bile TYT Türkçesi iyi olan bir öğrenci bu soruları fire vermeden çözerek teste 5-6 netle başlar.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">2. Şiir Bilgisi & Edebi Sanatlar: 3 - 4 Soru (Matematik Kadar Kurallı)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    Kafiye, redif, hece ölçüsü, teşbih (benzetme), istiare, tezat, hüsnütalil ve tenasüp. Burası edebiyatın en kurallı bölümüdür. Sadece 2-3 gününü ayırıp kafiye şemasını ve temel sanatları öğrenen bir aday bu 4 soruyu 3 dakikada sıfır hatayla cebe koyar.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-950 text-lg mb-1">3. İslamiyet Öncesi, Halk ve Divan Edebiyatı: 5 - 6 Soru</h3>
                                <p className="text-sm text-amber-900 leading-relaxed">
                                    Öğrencilerin en çok çekindiği Divan edebiyatında ÖSYM her sene aynı temel şairleri ve türleri sorar: Fuzuli, Baki, Nedim, Şeyh Galip, Nabi, Nef&apos;i. Gazelin matla (ilk) ve makta (son) beyti mantığını bilmek, kasidenin bölümlerine hakim olmak bile en az 1-2 net demektir.
                                </p>
                            </div>

                            <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
                                <h3 className="font-bold text-purple-950 text-lg mb-1">4. Tanzimat, Servetifünun, Milli Edebiyat ve Cumhuriyet: 8 - 9 Soru</h3>
                                <p className="text-sm text-purple-900 leading-relaxed">
                                    Asıl dönem ve eser bilgisinin ölçüldüğü yer burasıdır. Ancak burada da ezber yükü roman kahramanları ve temel temalar üzerindedir: Bihruz Bey (Araba Sevdası), Ahmet Celal (Yaban), Ali Rıza Bey (Yaprak Dökümü), Zehra, Felatun Bey ile Rakım Efendi.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Son 5 Yılın AYT Edebiyat Soru Dağılım Tablosu
                        </h2>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-slate-100 text-gray-800 font-semibold border-b">
                                    <tr>
                                        <th className="p-3 border">Konu / Dönem</th>
                                        <th className="p-3 border text-center">Soru Sayısı</th>
                                        <th className="p-3 border">Önem Derecesi</th>
                                        <th className="p-3 border">Kritik Tavsiye</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Anlam Bilgisi & Paragraf</td>
                                        <td className="p-3 border text-center font-bold">5 - 6</td>
                                        <td className="p-3 border text-emerald-600 font-semibold">Garanti Puan</td>
                                        <td className="p-3 border">Hızlı ve dikkatli çözülmeli, süre kazandırır.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Şiir Bilgisi & Söz Sanatları</td>
                                        <td className="p-3 border text-center font-bold">3 - 4</td>
                                        <td className="p-3 border text-emerald-600 font-semibold">Garanti Puan</td>
                                        <td className="p-3 border">Redif-kafiye ayrımına dikkat et, hüsnütalil banko.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">İslamiyet Öncesi & Halk Edebiyatı</td>
                                        <td className="p-3 border text-center font-bold">2 - 3</td>
                                        <td className="p-3 border text-blue-600 font-medium">Orta</td>
                                        <td className="p-3 border">Koşma türleri (Güzelleme, Koçaklama vb.) ve ozanlar.</td>
                                    </tr>
                                    <tr className="border-b bg-purple-50">
                                        <td className="p-3 font-bold text-purple-950 border">Divan Edebiyatı</td>
                                        <td className="p-3 border text-center font-bold text-purple-900">4 - 5</td>
                                        <td className="p-3 border text-red-600 font-bold">En Seçici Kısım</td>
                                        <td className="p-3 border text-purple-950">Nazım biçimleri (Şarkı, Tuyuğ, Mesnevi) ve 5 büyük şair.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Tanzimat Edebiyatı</td>
                                        <td className="p-3 border text-center font-bold">1 - 2</td>
                                        <td className="p-3 border text-blue-600 font-medium">Orta</td>
                                        <td className="p-3 border">1. ve 2. Dönem farkları, ilk yerli ve çeviri eserler.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Servetifünun & Fecriati</td>
                                        <td className="p-3 border text-center font-bold">1 - 2</td>
                                        <td className="p-3 border text-blue-600 font-medium">Orta</td>
                                        <td className="p-3 border">Tevfik Fikret, Cenap Şahabettin, Halit Ziya romanları.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Milli Edebiyat</td>
                                        <td className="p-3 border text-center font-bold">1 - 2</td>
                                        <td className="p-3 border text-blue-600 font-medium">Orta</td>
                                        <td className="p-3 border">Genç Kalemler manifestosu, dilde sadeleşme.</td>
                                    </tr>
                                    <tr className="border-b bg-purple-50">
                                        <td className="p-3 font-bold text-purple-950 border">Cumhuriyet Dönemi Edebiyatı</td>
                                        <td className="p-3 border text-center font-bold text-purple-900">4 - 5</td>
                                        <td className="p-3 border text-red-600 font-bold">Geniş Kapsam</td>
                                        <td className="p-3 border text-purple-950">Topluluklar: Garipçiler, İkinci Yeni, Toplumcu Gerçekçiler.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Edebiyatı Unutmamak İçin 3 Etkili Taktik
                        </h2>
                        <ul className="list-disc pl-6 space-y-3 text-sm text-gray-800">
                            <li><strong>Eser-Yazar Bilgi Kartları:</strong> Küçük karton parçalarının ön yüzüne yazarın adını, arka yüzüne en önemli 3 eserini ve baş kahramanlarını yaz. Günde sadece 10 dakika bu kartları karıştırmak bile kalıcı hafızaya aktarır.</li>
                            <li><strong>Akrostiş ve Hikâyeleme Kodlamaları:</strong> Garipçileri O-M-H (Orhan Veli, Melih Cevdet, Oktay Rifat) ya da Yedi Meşalecileri SeCeVeZ MaKaSI gibi bilinen kodlamalarla kafana yerleştir.</li>
                            <li><strong>Haftalık Branş Denemesi ile Tekrar:</strong> Edebiyat çabuk unutulan nankör bir derstir. Konular bitmese bile haftada 1 branş denemesi çözüp yanlışlarını analiz etmek konuları diri tutar.</li>
                        </ul>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Edebiyat Netlerinin Sıralamana Katkısını Gör</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Edebiyat-Sosyal-1 testindeki 24 sorunun Eşit Ağırlık ve Sözel puanlarına etkisi çok yüksektir. Tahmini netlerini hesaplama motorumuza girerek puanını gör.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                EA ve SÖZ Puan Simülatörünü Aç →
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            AYT Edebiyat Hakkında Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">Aruz kalıplarını tek tek ezberlemek gerekir mi?</h3>
                                <p className="text-sm text-gray-700">
                                    Hayır, ÖSYM son yıllarda &ldquo;feilatün mefailün feilün&rdquo; gibi doğrudan kalıp bulma sorusu sormuyor. Şiirin aruzla mı yoksa heceyle mi yazıldığını anlamak (heceleri sayarak hece ölçüsünü elemek) genellikle yeterlidir.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">Cumhuriyet edebiyatında her yazarı bilmek şart mı?</h3>
                                <p className="text-sm text-gray-700">
                                    Kesinlikle hayır. Cumhuriyet çok geniş bir dönemdir ancak soru gelen isimler bellidir: Yaşar Kemal, Kemal Tahir, Orhan Kemal, Ahmet Hamdi Tanpınar, Tarık Buğra, Oğuz Atay ve ana şiir grupları. Kıyıda köşede kalmış isimlere haftalar harcamak gereksizdir.
                                </p>
                            </div>
                        </div>

                        <p className="mt-8">
                            Eşit Ağırlık sınavında edebiyatın yanında matematiği de güçlendirmek istersen <Link href="/blog/ayt-matematik-konulari" className="text-blue-600 font-semibold hover:underline">AYT Matematik Konuları ve Çalışma Planı</Link>&apos;nı inceleyebilir, puan türleri hakkında genel bilgi almak için <Link href="/blog/yks-puan-turleri" className="text-blue-600 font-semibold hover:underline">YKS Puan Türleri</Link> sayfamıza göz atabilirsin.
                        </p>

                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
