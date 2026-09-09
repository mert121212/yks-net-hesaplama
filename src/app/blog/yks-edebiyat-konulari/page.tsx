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
                            <span className="text-gray-600">• 14 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            AYT Edebiyat: Yüzlerce Yazar Var Ama ÖSYM Hep Aynı Çekirdeği Soruyor
                        </h1>
                        <p className="text-xl text-gray-600">
                            Edebiyat dersini &quot;ezber deryası, aklımda tutamam&quot; diyerek bir kenara itenlere açık bir gerçeği hatırlatalım: 24 soruda 20&apos;nin üstüne çıkmanın yolu binlerce eseri papağan gibi ezberlemek değil, dönemlerin ruhunu çözmektir.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Eşit Ağırlık ve Sözel sınıflarının çalışma masalarına baktığınızda genellikle aynı hüzünlü manzarayla karşılaşırsınız: Masanın her yanına yapıştırılmış rengarenk post-itler, kalınlığı ansiklopediyi aratmayan yazar-eser sözlükleri ve &quot;Ben bu yüzlerce adamın hangi kitabını aklımda tutacağım?&quot; diyen çaresiz bakışlar.
                        </p>

                        <p>
                            İçiniz hemen rahatlasın. Çünkü ÖSYM soru hazırlama komisyonu sizden Şinasi&apos;nin tefrika edilen dördüncü makalesinin yayın gününü ya da Baki&apos;nin üçüncü dereceden akrabasını sormuyor. ÖSYM her sene edebiyatın ana omurgasını oluşturan yaklaşık 30-35 büyük sanatçının karakteristik özelliklerini ve edebi akımların felsefesini yokluyor. 
                        </p>

                        <p>
                            Bunu kavradığınız an, edebiyat sizin için bir kabus olmaktan çıkıp AYT salonunda en hızlı net toplayacağınız güvenli bir limana dönüşür.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            24 Sorunun Haritası: Hangi Bölge Kaç Soru Getiriyor?
                        </h2>
                        <p>
                            Soru kitapçığını önünüze aldığınızda rastgele sorularla değil, yıllardır milimetrik olarak belirlenmiş şu şablonla karşılaşırsınız:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
                                <h3 className="font-bold text-purple-900 text-lg mb-1">Paragraf ve Anlam Bilgisi (İlk 6 - 8 Soru)</h3>
                                <p className="text-sm text-purple-800 leading-relaxed">
                                    Sınavın bu ilk üçte birlik kısmı edebiyat bilgisi değil, saf anlama kabiliyetidir. TYT Türkçedeki paragraf ve sözcükte anlam sorularının neredeyse aynısıdır. Burada fire vermemek için TYT okuma kondisyonunuzu sağlam tutmanız yeterlidir.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-900 text-lg mb-1">Şiir Bilgisi ve Edebi Sanatlar (3 - 4 Soru)</h3>
                                <p className="text-sm text-amber-800 leading-relaxed">
                                    Kafiye, redif, teşbih, istiare, hüsn-i talil ve tecahül-i arif gibi başlıklar. Formülü basittir, kuralları matematiktir. Sanatları ezberlemek yerine verilen dörtlükteki teşhis veya telmihi bulabilen bir aday bu gruptan tam puanla çıkar.
                                </p>
                            </div>

                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-900 text-lg mb-1">İslamiyet Öncesi, Halk ve Divan Edebiyatı (5 - 6 Soru)</h3>
                                <p className="text-sm text-blue-800 leading-relaxed">
                                    Adayların en çok korktuğu ama aslında en istikrarlı bölümdür. Fuzuli, Baki, Nedim, Nabi ve Şeyh Galip... Bu beş büyük ustayı ve gazel, kaside, mesnevi nazım şekillerini derinlemesine kavrayan birinin bu alanda soru kaçırması neredeyse imkansızdır.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-900 text-lg mb-1">Tanzimat&apos;tan Cumhuriyet&apos;e Roman ve Akımlar (6 - 8 Soru)</h3>
                                <p className="text-sm text-emerald-800 leading-relaxed">
                                    Batılılaşma sancıları, Namık Kemal&apos;in vatan sevdası, Servet-i Fünun&apos;un kırılgan melankolisi, Milli Edebiyat&apos;ın Anadolu uyanışı ve nihayet Cumhuriyet dönemi toplumcu gerçekçi yazarları (Yaşar Kemal, Kemal Tahir, Orhan Kemal üçlüsü).
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Yazarları Ezberlemeyin, Zihninize Çapa Atın
                        </h2>
                        <p>
                            Bir yazarı yüzlerce eserlik bir listeyle ezberlemeye kalkarsanız iki gün sonra unutursunuz. Yapmanız gereken şey, yazarı tek bir anahtar kavramla zihninize mühürlemektir:
                        </p>
                        <p>
                            Örneğin <strong>Fuzuli</strong> dendiğinde aklınıza tek bir şey gelmelidir: Izdırap ve ilahi aşk. O, acı çekmekten zevk alan, kavuşmayı değil yanmayı dileyen bir aşıktır; Su Kasidesi ve Leyla ile Mecnun onun ruhunun aynasıdır.
                        </p>
                        <p>
                            Buna karşılık <strong>Nedim</strong> tam tersidir: Lale Devri&apos;nin neşesi, Boğaziçi eğlenceleri, helva sohbetleri ve İstanbul Türkçesi. Şarkı nazım biçiminin zirvesidir. Biri size ızdırap şiiri gösterip Nedim diyorsa hemen şüphelenirsiniz.
                        </p>
                        <p>
                            Ya da <strong>Nabi</strong>... Şiirini zevk için değil, öğüt vermek için yazar; oğluna nasihat ettiği Hayriye&apos;sinden didaktik ekolün bayraktarı olduğunu hemen anlarsınız. <strong>Ahmet Haşim</strong> ise gün batımını, kızıl akşamları ve akşamın melankolisini sever; saf şiirin peşinde kelimeleri nota gibi dizer.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Nasıl Bir Çalışma Rutini Kurmalısınız?
                        </h2>
                        <p>
                            Edebiyatı her gün saatlerce çalışmak zihni yorar ve bilgileri çorba yapar. Haftada 3 seans yeterlidir. 
                        </p>
                        <p>
                            Pazartesi günü Divan edebiyatını ele aldıysanız, konuyu çalıştıktan hemen sonra en az 40 soru çözerek bilgiyi tazeleyin. Çarşamba günü Tanzimat ve Servet-i Fünun&apos;u bitirin. Cuma günü Cumhuriyet romanına bakın. Pazar günleri ise mutlaka 24 soruluk karma bir AYT Edebiyat branş denemesi çözün. 
                        </p>
                        <p>
                            Denemede hangi dönemden yanlış yaptıysanız, hatanızı hemen o gün kapatın. Bir ay içinde netlerinizin 12-14 bandından 20&apos;nin üstüne nasıl tırmandığını hayretle izleyeceksiniz.
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
