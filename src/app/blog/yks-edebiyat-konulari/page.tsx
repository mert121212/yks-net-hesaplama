import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'AYT Edebiyat Konuları ve Soru Dağılımı 2027: 24 Soruda 20+ Net Stratejisi',
    description: 'AYT Edebiyat ezber batağına batmadan nasıl çalışılır? 24 sorunun dağılımı: 6 bedava paragraf, şiir bilgisi şifreleri, Divan ve Cumhuriyet taktikleri.',
    keywords: 'yks edebiyat konuları, ayt edebiyat soru dağılımı, edebiyat nasıl çalışılır, divan edebiyatı, cumhuriyet edebiyatı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari' },
    openGraph: {
        title: 'AYT Edebiyat Konuları ve Soru Dağılımı 2027',
        description: 'Edebiyatı 500 yazar ezberlemeden 20+ nete taşıma rehberi. Kodlamalar, dönem mantığı ve banko yazarlar.',
        type: 'article',
        publishedTime: '2026-02-17',
        modifiedTime: '2026-03-01',
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
                <BlogArticleSchema 
                    title="AYT Edebiyat Konuları ve Soru Dağılımı 2027 | Çalışma Rehberi" 
                    description="AYT Edebiyat sınavında 24 sorunun konu dağılımı: Şiir bilgisi, edebi sanatlar, Divan edebiyatı, Tanzimat ve Cumhuriyet dönemi analizi."
                    datePublished="2026-02-17"
                    dateModified="2026-03-01"
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
                            <time className="text-gray-600" dateTime="2026-02-17">17 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            AYT Edebiyat Konuları ve Soru Dağılımı: Ezber Batağından Kurtulma Yolu
                        </h1>
                        <p className="text-xl text-gray-600">
                            Binlerce yazar ve eseri körü körüne ezberlemeye kalkarsan 2 hafta sonra kafan çorbaya döner. Oysa 24 soruluk sınavın arkasında inanılmaz kurallı bir sistem var.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-edebiyat-konulari.jpg"
                        alt="AYT Edebiyat Konuları ve Soru Dağılımı (2027)"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Eşit Ağırlık ve Sözel öğrencilerini masanın başında en çok ağlatan derslerden biri Edebiyattır. <em>&ldquo;Hocam hangi birini aklımda tutayım? Recaizade&apos;nin araba sevdasından girdim, Yakup Kadri&apos;nin Yaban&apos;ından çıktım, birbirine girdi her şey!&rdquo;</em>
                        </p>

                        <p>
                            Sakin ol. ÖSYM soru yazarları senin ansiklopedi yutmanı beklemiyor. Önce 24 sorunun röntgenini çekelim; göreceksin ki aslında korktuğun kadar çok ezber yok.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            24 Sorunun Röntgeni: Nereden Ne Geliyor?
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">1. Bedava Paragraf & Anlam: İlk 5 - 6 Soru</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Evet, yanlış duymadın! Edebiyat testini açtığında karşına çıkan ilk 5-6 soru sıradan TYT Türkçe paragraf ve sözcükte anlam sorusudur. Edebiyat bilgisi gerektirmez. TYT Türkçesi iyi olan bir öğrenci teste zaten 6 netle başlar.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">2. Şiir Bilgisi & Edebi Sanatlar: 3 - 4 Soru (Matematik Gibidir)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    Kafiye, redif, aruz/hece ölçüsü, teşbih, istiare, tenasüp, tezat. Burası edebiyatın en kurallı, en formüle dayalı kısmıdır. 3 gününü ayırıp kuralları öğrenen biri bu 4 soruyu 3 dakikada sıfır hatayla çözer.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-950 text-lg mb-1">3. Divan ve Halk Edebiyatı: 5 - 6 Soru (Korkulan Kale)</h3>
                                <p className="text-sm text-amber-900 leading-relaxed">
                                    Öğrencilerin en çok ürktüğü Divan edebiyatında ÖSYM her sene aynı 5-6 ismi döndürüp durur: Fuzuli, Baki, Nedim, Şeyh Galip, Nabi. Gazelin ilk beytine matla, son beytine makta dendiğini bilmek bile her yıl 1 net kazandırır.
                                </p>
                            </div>

                            <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
                                <h3 className="font-bold text-purple-950 text-lg mb-1">4. Tanzimat&apos;tan Cumhuriyet&apos;e Roman & Akımlar: 8 - 9 Soru</h3>
                                <p className="text-sm text-purple-900 leading-relaxed">
                                    Asıl ezber yükü buradadır ama burada da kilit nokta roman özetleri ve ana karakterlerdir (Bihruz Bey, Ahmet Celal, Ali Rıza Bey). Dönemlerin genel havasını bilmek seçenekleri yarı yarıya eletir.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Unutmamak İçin 3 Altın Taktik
                        </h2>
                        <ul className="list-disc pl-6 space-y-3 text-sm text-gray-800">
                            <li><strong>Post-it ve Yazar-Eser Kartları:</strong> Masana, dolabına 100 tane kart hazırla. Ön yüzüne yazar, arka yüzüne en meşhur 3 eseri ve karakterleri. Günde 10 dakika bakmak, ezber baskısını tamamen yok eder.</li>
                            <li><strong>Şifreleme (Akrostiş) Kullan:</strong> Örneğin Garipçileri O-M-H (Orhan Veli, Melih Cevdet, Oktay Rifat) diye kodlamak gibi klasik ama etkili yöntemleri kullan.</li>
                            <li><strong>Haftalık Edebiyat Branş Denemesi:</strong> Edebiyat bilgi dersidir; soru çözmezsen 3 haftada unutursun. Her pazar 1 branş denemesi çözüp yanlış yaptığın yazara 5 dakika göz atmak bilgiyi taze tutar.</li>
                        </ul>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Edebiyat Netinle EA/SÖZ Sıralamanı Gör</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Edebiyat ve Matematik netlerini hesaplama motorumuza gir; AYT Eşit Ağırlık puanını ve hedeflediğin Hukuk/İktisat fakültelerine yetip yetmediğini hemen öğren.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Eşit Ağırlık Puanı Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
