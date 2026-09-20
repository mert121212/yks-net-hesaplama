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
                            Odasının duvarlarını renkli post-it&apos;lerle kaplayan, binlerce yazar-eser ezberlemeye çalışıp iki hafta sonra <em>&quot;Mai ve Siyah kimindi ya, Nabizade Nazım mıydı?&quot;</em> diye saçını başını yolan öğrenci gördün mü? Muhtemelen kendinden bahsediyorum.
                        </p>
                        <p>
                            Sakin ol. Kalemi usulca masaya bırak.
                        </p>
                        <p>
                            Sana çok net bir sır vereyim: ÖSYM Türk edebiyatı kütüphanesini önüne koyup rastgele soru sormaz. Soru komisyonunun her yıl dönüp dolaşıp yokladığı yaklaşık 30-35 tane &quot;vazgeçilmez&quot; isim vardır. Geriye kalan yüzlerce yazar ise sadece şıklarda kafa karıştırmak için meze olarak kullanılır.
                        </p>
                        <p>
                            24 soruluk AYT Edebiyat testinde 20+ nete ulaşmak istiyorsan her şeyi ezberlemeyi bırakacaksın; sınavın oyun planını deşifre edeceksin:
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            24 Sorunun Röntgeni: Puanlar Nereye Saklanmış?
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
                                <h3 className="font-bold text-purple-950 text-lg mb-1">1. TYT İkramı: Paragraf ve Anlam (İlk 6 Soru)</h3>
                                <p className="text-sm text-purple-900 leading-relaxed">
                                    Sınav kağıdını açtığında karşına çıkan ilk 6 soruda tek bir yazar adı bile geçmez. Bildiğin TYT paragraf ve sözcükte anlam sorusudur. Edebiyat testi diye kasmana gerek yok. Eğer TYT&apos;de düzenli paragraf çözüyorsan bu 6 neti 7 dakikada cebe atar, arkana bile bakmazsın.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-950 text-lg mb-1">2. Şiir Matematiği ve Edebi Sanatlar (3-4 Soru)</h3>
                                <p className="text-sm text-amber-900 leading-relaxed">
                                    Kafiye örgüsü, redif bulma, teşbih, istiare, hüsn-i talil... Bak, bu kısım bildiğin matematik gibidir. Yorum yoktur; kuralı bilirsen 20 saniyede çözersin. Kelime kökünü ayır, ek aynı görevde mi bak; aynıysa redif, kökteki ses benzerliği kafiye. Formülü kaptığında buradan soru kaçırman imkansız.
                                </p>
                            </div>

                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">3. Korkulu Rüya Ama En Garanti Bölge: Divan ve Halk Şiiri (5-6 Soru)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Öğrenciler Arapça-Farsça tamlamaları görünce hemen paniğe kapılır. Gerek yok! ÖSYM sana gazelin 15 beytini ezbere soramaz. Baki&apos;nin dünya zevkini, Fuzuli&apos;nin aşk acısını, Nedim&apos;in Lale Devri şenliğini, Nabi&apos;nin dede gibi nasihat vermesini bil; soru kökündeki iki kelimeden şairi anında yakalarsın.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">4. Roman, Akımlar ve Cumhuriyet Dönemi (7-8 Soru)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    Tanzimat&apos;taki yanlış Batılılaşma karikatürleri (Felatun Bey, Bihruz Bey), Servet-i Fünun&apos;un bunalımlı aydınları ve Cumhuriyet&apos;in Anadolu köylüsünü anlatan toplumcu gerçekçileri (Yaşar Kemal, Kemal Tahir, Orhan Kemal). Ana karakterleri ve eserin ana çatışmasını bilen öğrenci burada şov yapar.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Edebiyat Ezberlenmez, &quot;Dedikodusu&quot; Yapılır: Kodlama Taktikleri
                        </h2>
                        <p>
                            Yazarın hayatını ansiklopedi gibi okumayı bırak. Her yazarı hafızana tek bir ayırt edici &quot;lakap&quot; ya da sahneyle kazı:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Fuzuli:</strong> Istırap adamı. Adam sevgilisine kavuşmak istemiyor, &quot;Aman kavuşursam aşkın büyüsü bozulur, ben acımdan razıyım&quot; diyor. Su Kasidesi ve Leyla vü Mecnun deyince akla başka isim gelemez.</li>
                            <li><strong>Nedim:</strong> Zevk-ü sefa adamı. &quot;Gülelim, oynayalım, kam alalım dünyadan&quot; diyen, Lale Devri&apos;nin Sadabad eğlencelerini şarkı formunda şakıyan adam.</li>
                            <li><strong>Nabi:</strong> Akıl hocası. Didaktik, hikemi şiirin babası. Oğluna öğüt vermek için yazdığı Hayriye&apos;yi ÖSYM çok sever.</li>
                            <li><strong>Ahmet Haşim:</strong> Akşamcı, göl kenarında hüzünlenen sembolist. &quot;Şiirde anlam aramak bülbülü eti için öldürmeye benzer&quot; aforizmasının sahibi. Saf şiir deyince ilk akla gelen.</li>
                            <li><strong>Halit Ziya:</strong> Türk romanının mimarı. Cümleleri uzundur, Fransızca cümle yapısını Türkçeye sokmuştur. Mai ve Siyah ile Aşk-ı Memnu&apos;nun babası.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Edebiyatta Neti Uçuran Haftalık Ritim
                        </h2>
                        <p>
                            Hergün 4 saat edebiyat çalışıp beynini çorba yapma. Edebiyat aralıklarla tekrar edildiğinde kalıcı hafızaya geçer:
                        </p>
                        <p>
                            Pazartesi Divan ve Halk edebiyatını tara, 30 soru çöz. Çarşamba Tanzimat ve Servet-i Fünun romanlarına bak. Cuma günü Cumhuriyet dönemi şiir ve roman topluluklarını gözden geçir. Pazar günü ise kronometreyi aç, 24 soruluk bir branş denemesi çöz.
                        </p>
                        <p>
                            Bunu 4 hafta üst üste disiplinle yap; o çok korktuğun edebiyat netlerinin 12&apos;den 21-22 bandına nasıl fırladığını gözlerinle göreceksin.
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
