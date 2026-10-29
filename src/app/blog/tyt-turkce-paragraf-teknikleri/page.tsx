import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import ArticleFeedback from '@/components/ArticleFeedback'
import ReadingProgress from '@/components/ReadingProgress'
import LastUpdatedBadge from '@/components/LastUpdatedBadge'
import TableOfContents from '@/components/TableOfContents'

export const metadata: Metadata = {
    title: 'TYT Türkçe Paragraf Çözme Teknikleri: Hız ve 35+ Net Rehberi 2027',
    description: 'Paragraf sorularında aynı metni 3 kere okumaktan ve iki şık arasında kalmaktan kurtulun. Hızlanma taktikleri, soru kökü analizi ve günlük 20 paragraf rutini.',
    keywords: 'tyt türkçe paragraf çözme teknikleri, paragraf soruları nasıl çözülür, tyt türkçe hızlanma, paragraf ana fikir bulma, iki şık arasında kalmak',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-turkce-paragraf-teknikleri' },
    openGraph: {
        title: 'TYT Türkçe Paragraf Çözme Teknikleri: Hız ve 35+ Net Rehberi',
        description: 'Paragraf sorularında süre yönetimi, çeldirici eleme taktiği ve odaklanma stratejileri.',
        type: 'article',
        publishedTime: '2026-10-05',
        modifiedTime: '2026-10-29',
        url: 'https://yksnethesapla.com/blog/tyt-turkce-paragraf-teknikleri',
        images: [
            {
                url: '/images/blog/tyt-turkce-paragraf-teknikleri.jpg',
                width: 1200,
                height: 630,
                alt: 'TYT Türkçe Paragraf Çözme Teknikleri'
            }
        ],
    },
}

export default function TYTParagrafTeknikleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <ReadingProgress />
                <BlogArticleSchema 
                    title="TYT Türkçe Paragraf Çözme Teknikleri: Hız ve 35+ Net Rehberi 2027" 
                    description="Paragraf sorularında aynı metni 3 kere okumaktan ve iki şık arasında kalmaktan kurtulun. Hızlanma taktikleri, soru kökü analizi ve günlük 20 paragraf rutini."
                    datePublished="2026-10-05"
                    dateModified="2026-10-29"
                    url="https://yksnethesapla.com/blog/tyt-turkce-paragraf-teknikleri"
                    keywords={['tyt türkçe paragraf çözme teknikleri', 'paragraf soruları nasıl çözülür', 'tyt türkçe hızlanma', 'paragraf ana fikir bulma', 'iki şık arasında kalmak']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Paragraf Teknikleri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">TYT Türkçe</span>
                            <time className="text-gray-600" dateTime="2026-10-05">5 Ekim 2026</time>
                            <span className="text-gray-600">• 10 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT Türkçe Paragraf Çözme Teknikleri: Aynı Metni 3 Kere Okumayı Bırakın
                        </h1>
                        <p className="text-xl text-gray-600">
                            40 soruluk Türkçe testinin en az 25&apos;i paragraftan gelir. Paragrafı hızlı ve hatasız çözemeyen bir adayın ne matematikte süresi yeter ne de fen testine eli değer. İşte sahada çalışan 5 somut teknik.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/tyt-turkce-paragraf-teknikleri.jpg"
                        alt="TYT Türkçe Paragraf Çözme Teknikleri"
                    />

                    <TableOfContents items={[
                        { id: 'temel-sorun', title: 'Paragrafta Neden Vakit Kaybediyoruz?' },
                        { id: '5-somut-teknik', title: 'Paragrafta Hız ve Net Kazandıran 5 Saha Tekniği' },
                        { id: 'iki-sik-arasinda-kalmak', title: 'İki Şık Arasında Kalınca Ne Yapmalı?' },
                        { id: 'gunluk-rutin', title: 'Her Sabah 20 Paragraf Rutini Nasıl Uygulanır?' },
                        { id: 'kaynak-onerisi', title: 'Seviyeye Göre Paragraf Soru Bankası Seçimi' },
                        { id: 'sikca-sorulanlar', title: 'Sıkça Sorulan Sorular' },
                    ]} />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Öğrencilerin TYT denemesi çıkışında söyledikleri cümle neredeyse kelimesi kelimesine aynıdır: <em>&ldquo;Hocam Türkçede bir paragrafa girdim, 3 kere baştan okudum, kafam allak bullak oldu, saate baktım 55 dakika geçmiş!&rdquo;</em>
                        </p>

                        <p>
                            Türkçe testi bir edebiyat ya da roman okuma keyfi değildir; <strong>süreli bir dikkat avıdır</strong>. Paragrafta başarılı olmak hızlı okumakla değil, <strong>doğru yere odaklanarak okumakla</strong> mümkündür.
                        </p>

                        <h2 id="temel-sorun" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Paragrafta Neden Vakit Kaybediyoruz?
                        </h2>

                        <p>
                            Öğrencilerin paragrafta dakikalarca kaybolmasının 3 temel sebebi vardır:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Gözle Okumak Yerine İçten Seslendirerek Okumak:</strong> Kelimeleri kafanın içinde tek tek seslendirdiğinde okuma hızın konuşma hızına (dakikada ~150 kelime) kilitlenir. Göz ise dakikada 400 kelime tarayabilir.</li>
                            <li><strong>Metnin Tamamının Altını Çizmek:</strong> Bütün satırları çizen bir öğrenci aslında hiçbir yerin altını çizmemiş gibidir; göz önemli kelimeyi ayırt edemez.</li>
                            <li><strong>Metne Kendi Fikrinden Yorum Katmak:</strong> &ldquo;Bence yazar burada bunu demek istemiş&rdquo; diyerek kendi felsefeni şıklara yansıtmak ÖSYM&apos;nin en sevdiği çeldirici tuzağıdır.</li>
                        </ul>

                        <h2 id="5-somut-teknik" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Paragrafta Hız ve Net Kazandıran 5 Saha Tekniği
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">1. Önce Soru Kökü, Sonra Metin</h3>
                                <p className="text-sm text-blue-900">
                                    Önce metni okuyup sonra &ldquo;Bu parçada ne anlatılıyor?&rdquo; sorusuna bakarsan, metni soruya göre aramak için mecburen ikinci kez okursun. Önce soru kökünü oku. Soru kökünde <em>&ldquo;değinilmemiştir&rdquo;</em>, <em>&ldquo;çıkarılamaz&rdquo;</em> gibi olumsuz ifadeler varsa, şıkları göz ucuyla 10 saniyede tara ve metne ne aradığını bilerek gir.
                                </p>
                            </div>

                            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">2. Giriş ve Sonuç Cümlelerine Çift Odaklanma</h3>
                                <p className="text-sm text-emerald-900">
                                    Türkçe paragraflarının %80&apos;i tümdengelim ya da tümevarım yöntemiyle yazılır. Yani yazar ana fikri ya ilk 2 cümlede vurur ya da son 2 cümlede &ldquo;kısacası, özetle, aslında&rdquo; diyerek bağlar. Ana fikir sorularında metnin ilk ve son cümlelerini dikkatle analiz etmek cevabı anında verir.
                                </p>
                            </div>

                            <div className="bg-amber-50 p-5 rounded-xl border border-amber-200">
                                <h3 className="font-bold text-amber-950 text-lg mb-1">3. Aşırı Genelleme Şıklarını Hemen Ele</h3>
                                <p className="text-sm text-amber-900">
                                    Şıklarda <em>&ldquo;her zaman, asla, yalnızca, kesinlikle, tüm insanlar&rdquo;</em> gibi keskin ve sınırlandırıcı kelimeler görüyorsan çok dikkatli ol. Eğer metinde yazar bu kadar radikal bir genelleme yapmamışsa, o şık %95 ihtimalle yanlış çeldiricidir.
                                </p>
                            </div>

                            <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
                                <h3 className="font-bold text-purple-950 text-lg mb-1">4. Sadece Anahtar Kelimelerin Altını Çiz</h3>
                                <p className="text-sm text-purple-900">
                                    Kalemini metnin her satırında gezdirmek yerine yalnızca <strong>isimleri, zıtlık bağlaçlarını (ama, fakat, oysa, aksine)</strong> ve tırnak içindeki kavramları yuvarlak içine al. Gözün şıklara indiğinde bu anahtarlar sayesinde metne dönüp doğrulama yapman sadece 3 saniye sürer.
                                </p>
                            </div>

                            <div className="bg-rose-50 p-5 rounded-xl border border-rose-200">
                                <h3 className="font-bold text-rose-950 text-lg mb-1">5. Turlama Disiplini: 70 Saniyede Çık</h3>
                                <p className="text-sm text-rose-900">
                                    Bir paragraf sorusunda 70 saniyeyi aştın ve hala net bir fikir edinemedin mi? Dur ve hemen o soruyu işaretleyip geç. O an o soruyla inatlaşmak zihnini bulandırır ve arkasından gelen 3 kolay soruyu da hatalı yapmana neden olur.
                                </p>
                            </div>
                        </div>

                        <h2 id="iki-sik-arasinda-kalmak" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            İki Şık Arasında Kalınca Ne Yapmalı?
                        </h2>

                        <p>
                            ÖSYM soru yazarları bilerek birbirine çok benzeyen iki şık hazırlar: Biri doğru cevap, diğeri ise metindeki bir kelimeyi alıp bağlamından koparan çeldiricidir. İki şık arasında kaldığında şu adımları izle:
                        </p>

                        <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
                            <li>İki şıkkı yan yana koy ve aralarındaki <strong>tek fark olan kelimeyi</strong> bul.</li>
                            <li>Metne dön ve sor: <em>&ldquo;Yazar bu kelimeyi gerçekten bu anlamda kullandı mı yoksa ben kafamdan mı üretiyorum?&rdquo;</em></li>
                            <li>Metinde birebir karşılığı olmayan, yorumlanmış şıkkı ele. Doğru cevap her zaman metne en sadık olan, kendi içinde mütevazı kalan şıktır.</li>
                        </ol>

                        <h2 id="gunluk-rutin" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Her Sabah 20 Paragraf Rutini Nasıl Uygulanır?
                        </h2>

                        <p>
                            Paragraf haftada bir gün oturup 100 soru çözülerek geliştirilemez; tıpkı spor salonundaki kas gelişimi gibi her gün düzenli antrenman ister:
                        </p>

                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6 text-sm text-gray-800 space-y-3">
                            <p><strong>Zamanlama:</strong> Sabah uyandıktan sonra, zihnin en berrak olduğu saatte ilk iş olarak çözülmeli.</p>
                            <p><strong>Soru Sayısı:</strong> Aksatmadan her gün 20 ila 25 soru.</p>
                            <p><strong>Süre Aşamaları:</strong></p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>1. Ay:</strong> Süre tutma, doğru anlama ve teknikleri uygulamaya odaklan.</li>
                                <li><strong>2. Ay:</strong> 20 soruya 25 dakika kronometre kur.</li>
                                <li><strong>Son 3 Ay:</strong> 20 soruya tam 18-20 dakika vererek sınav baskısına alış.</li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-2xl p-8 text-center my-10 shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">Türkçe Netinle Genel Puanını Hesapla</h3>
                            <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-sm md:text-base">
                                Paragrafta 35 nete ulaştığında genel TYT ve YKS yerleştirme puanının nereye tırmandığını hesaplayıcımızla gör.
                            </p>
                            <Link 
                                href="/tyt-net-hesaplama" 
                                className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-xl shadow-md hover:bg-blue-50 transition transform hover:-translate-y-0.5"
                            >
                                TYT Netini Hesapla →
                            </Link>
                        </div>

                        <h2 id="kaynak-onerisi" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Seviyeye Göre Paragraf Soru Bankası Seçimi
                        </h2>

                        <div className="grid md:grid-cols-3 gap-4 my-6">
                            <div className="border border-emerald-200 bg-emerald-50/50 p-4 rounded-xl">
                                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Başlangıç</span>
                                <h4 className="font-bold text-gray-900 mt-2 mb-1">0 - 20 Net</h4>
                                <p className="text-xs text-gray-700">Hız ve Renk Paragraf (Kademeli testler), Sıfır Risk Paragraf.</p>
                            </div>
                            <div className="border border-blue-200 bg-blue-50/50 p-4 rounded-xl">
                                <span className="text-xs font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">Orta Düzey</span>
                                <h4 className="font-bold text-gray-900 mt-2 mb-1">20 - 30 Net</h4>
                                <p className="text-xs text-gray-700">Paragrafın Ritmi, Bilgi Sarmal Paragraf, Çap Paragraf.</p>
                            </div>
                            <div className="border border-purple-200 bg-purple-50/50 p-4 rounded-xl">
                                <span className="text-xs font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded">İleri Düzey</span>
                                <h4 className="font-bold text-gray-900 mt-2 mb-1">30+ Net</h4>
                                <p className="text-xs text-gray-700">Limit Kronometre Paragraf, Apaydın Paragraf, Son 10 Yılın Çıkmış ALES ve TYT Paragrafları.</p>
                            </div>
                        </div>

                        <h2 id="sikca-sorulanlar" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">ALES soruları TYT paragrafı için çözülmeli mi?</h3>
                                <p className="text-sm text-gray-600">
                                    Kesinlikle evet. ALES Türkçe soruları da ÖSYM tarafından hazırlanır ve paragrafları TYT&apos;ye kıyasla daha yoğun ve felsefidir. ALES sorularında hızlanan bir öğrenci TYT Türkçe testinde çok rahat eder.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Kitap okumak paragraf netlerini artırır mı?</h3>
                                <p className="text-sm text-gray-600">
                                    Kitap okumak genel anlama kapasitesini besler ancak sınav yılına girmiş bir öğrenci için tek başına yeterli değildir. Sınavda zamanla yarışıldığı için doğrudan soru çözme pratiği ve seçenek eleme refleksi çok daha hızlı net kazandırır.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Paragraf çözerken müzik dinlemek faydalı mı?</h3>
                                <p className="text-sm text-gray-600">
                                    Hayır. Sınav salonunda tam bir sessizlik veya ufak tefek kağıt sesleri olacaktır. Kulaklıkla çalışmak dış dünyayı izole ettiği için gerçek sınav ortamında odaklanma güçlüğü yaratır.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#tytTurkce</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#paragrafTeknikleri</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#yks2027</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <Link href="/blog" className="text-blue-600 hover:underline font-medium">← Blog Listesine Dön</Link>
                            <Link href="/blog/tyt-sure-yetistirme-turlama-taktigi" className="text-blue-600 hover:underline font-medium">Süre Yetiştirme Taktikleri →</Link>
                        </div>
                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
