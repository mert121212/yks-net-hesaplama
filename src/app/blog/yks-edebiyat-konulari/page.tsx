import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Edebiyat Konuları ve Soru Dağılımı 2027 | AYT Edebiyat Rehberi',
    description: 'AYT Edebiyat soru dağılımı, Divan edebiyatından Cumhuriyete yazar-eser mantığı, şiir tahlili taktikleri ve 20+ net çıkarma rehberi.',
    keywords: 'yks edebiyat konuları, ayt edebiyat soru dağılımı, edebiyat nasıl çalışılır, divan edebiyatı, cumhuriyet edebiyatı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari' },
    openGraph: {
        title: 'YKS Edebiyat Konuları 2027: Dönem Mantığı ve Net Rehberi',
        description: 'AYT Edebiyat konuları, dönemler ve yazar-eser kodlama yöntemleri.',
        type: 'article',
        publishedTime: '2026-02-17',
        modifiedTime: '2026-02-20',
        url: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari',
        images: [
            {
                url: '/og-image.jpg',
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
                    title="YKS Edebiyat Konuları ve Soru Dağılımı 2027 | AYT Edebiyat Rehberi" 
                    description="AYT Edebiyat soru dağılımı, Divan edebiyatından Cumhuriyete yazar-eser mantığı, şiir tahlili taktikleri ve 20+ net çıkarma rehberi."
                    datePublished="2026-02-17"
                    dateModified="2026-02-20"
                    url="https://yksnethesapla.com/blog/yks-edebiyat-konulari"
                    keywords={['yks edebiyat konuları', 'ayt edebiyat soru dağılımı', 'edebiyat nasıl çalışılır', 'divan edebiyatı', 'cumhuriyet edebiyatı']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Edebiyat Konuları</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Edebiyat</span>
                            <time className="text-gray-600" dateTime="2026-02-17">17 Şubat 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            AYT Edebiyat: Yüzlerce Yazar Var Ama ÖSYM Hep Aynı 30 İsmi Soruyor
                        </h1>
                        <p className="text-xl text-gray-600">
                            Binlerce eseri ezberlemeye çalışmak yerine dönemlerin ana mantığını ve anahtar yazarları kavramak, 24 soruda 20+ netin tek kestirme yoludur.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Edebiyat çalışan öğrencilerin en sık yaptığı hata, yüzlerce yazar ve binlerce eseri alt alta yazıp ezberlemeye çalışmaktır.
                        </p>
                        <p>
                            Üç gün sonra hepsi birbirine karışır. Tanzimat yazarları Servet-i Fünun&apos;a kayar, divan şairlerinin kasideleri birbirine girer.
                        </p>
                        <p>
                            Oysa ÖSYM&apos;nin edebiyat soruları sanıldığı kadar dipsiz bir kuyu değildir. Sınav komisyonu her yıl Türk edebiyatının ana omurgasını oluşturan yaklaşık 30-35 büyük yazarın temel özelliklerini ve dönemlerin ruhunu sorar.
                        </p>
                        <p>
                            24 sorunun dağılımını doğru okuduğunuzda, sınavın aslında ne kadar dengeli kurulduğunu görürsünüz:
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            24 Sorunun Soru Dağılım Haritası
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
                                <h3 className="font-bold text-purple-900 text-lg mb-1">1. Paragraf ve Anlam Bilgisi (İlk 6 Soru)</h3>
                                <p className="text-sm text-purple-800 leading-relaxed">
                                    Sınavın bu ilk bölümü edebiyat bilgisi gerektirmez; tamamen okuduğunu anlama becerisidir. TYT Türkçe paragraf sorularının benzeridir. Düzenli paragraf çözen bir öğrenci bu 6 soruyu firesiz cebe koyar.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-900 text-lg mb-1">2. Şiir Bilgisi ve Edebi Sanatlar (3-4 Soru)</h3>
                                <p className="text-sm text-amber-800 leading-relaxed">
                                    Kafiye, redif, teşbih, istiare, tezat ve telmih. Kuralları neredeyse matematik gibidir. Ezberlemek yerine verilen beyit ya da dörtlük üzerinde sanatları bulma pratiği yapan öğrenci buradan tam puanla çıkar.
                                </p>
                            </div>

                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-900 text-lg mb-1">3. İslamiyet Öncesi, Halk ve Divan Edebiyatı (5-6 Soru)</h3>
                                <p className="text-sm text-blue-800 leading-relaxed">
                                    Adayların en çok çekindiği ama en garantili kısımdır. Fuzuli, Baki, Nedim, Nabi ve Şeyh Galip... Bu beş şairi ve gazel, kaside, mesnevi nazım şekillerini sindiren birinin buradan soru kaçırması zordur.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-900 text-lg mb-1">4. Tanzimat&apos;tan Cumhuriyet&apos;e Roman ve Akımlar (7-8 Soru)</h3>
                                <p className="text-sm text-emerald-800 leading-relaxed">
                                    Batılılaşma teması, Namık Kemal, Recaizade Mahmut Ekrem, Tevfik Fikret, Halit Ziya, Yakup Kadri ve Cumhuriyet dönemi toplumcu gerçekçi romanları.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Ezberlemek Yerine Anahtar Kelime Yöntemi
                        </h2>
                        <p>
                            Bir yazarı 20 maddelik bilgi yığınıyla ezberlemeye çalışmayın. Her büyük yazarı tek bir anahtar kavramla zihninize bağlayın:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Fuzuli:</strong> Istırap ve ilahi aşk. Kavuşmayı değil yanmayı dileyen şair. (Su Kasidesi, Leyla ile Mecnun).</li>
                            <li><strong>Nedim:</strong> Lale Devri, İstanbul Türkçesi ve yaşama sevinci. Şarkı türünün ustası.</li>
                            <li><strong>Nabi:</strong> Didaktik, öğretici şiir. Nasihat ve ahlaki öğüt ekolü.</li>
                            <li><strong>Ahmet Haşim:</strong> Akşam kızıllığı, melankoli ve saf şiir. Sembolizmin öncüsü.</li>
                            <li><strong>Halit Ziya Uşaklıgil:</strong> Batılı anlamda ilk modern Türk romanı, realist gözlem ve mensur şiirler.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Haftalık Çalışma Düzeni Nasıl Olmalı?
                        </h2>
                        <p>
                            Edebiyatı her gün saatlerce çalışmak kafa karışıklığı yaratır. Haftada 3 seans ayırmak fazlasıyla yeterlidir:
                        </p>
                        <p>
                            Pazartesi Divan edebiyatını çalışıp hemen ardından 30 soru çözün. Çarşamba Tanzimat ve Servet-i Fünun&apos;a bakın. Cuma günü Cumhuriyet dönemi yazarlarını gözden geçirin. Pazar günü ise mutlaka 24 soruluk bir AYT Edebiyat branş denemesi çözerek haftayı kapatın.
                        </p>
                        <p>
                            Bu tempoyu 1 ay sürdürdüğünüzde, netlerinizin 12-13 bandından 20&apos;nin üzerine çıktığını göreceksiniz.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Edebiyat Netlerinizin Eşit Ağırlık Puanına Etkisi</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                Hukuk, Psikoloji veya PDR hedefleriniz için Edebiyat netlerinizi hesaplama aracımıza girin, puanınızın ve sıralamanızın nasıl değiştiğini anında görün.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                AYT EA Sıralama Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Eşit Ağırlık ve Sözelciler İçin Önerilen Rehberler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-puan-turleri" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">YKS Puan Türleri ve Katsayılar →</p>
                                    <p className="text-xs text-gray-600 mt-1">Edebiyatın EA ve SÖZ puanına getirdiği katsayı katkısı.</p>
                                </Link>
                                <Link href="/blog/universite-tercih-stratejileri" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">Üniversite Tercih Stratejileri →</p>
                                    <p className="text-xs text-gray-600 mt-1">Hukuk ve İİBF bölümleri için 24 tercih hakkını yönetme kuralları.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
