import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'

export const metadata: Metadata = {
    title: 'TYT Matematik Konuları ve Soru Dağılımı 2027 | Kapsamlı Çalışma Rehberi',
    description: 'TYT Matematik sınavında hangi konudan kaç soru çıkıyor? 0-10, 10-20 ve 30+ net seviyelerine özel taktikler, süre yönetimi ve güncel soru dağılım analizi.',
    keywords: 'tyt matematik konuları, tyt matematik soru dağılımı 2027, tyt matematik nasıl çalışılır, yks matematik net artırma, tyt geometri',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-matematik-konulari' },
    openGraph: {
        title: 'TYT Matematik Konuları ve Soru Dağılımı 2027 | Kapsamlı Rehber',
        description: 'TYT Matematik testini 30+ nete taşıyacak konu analizleri, seviyelere göre çalışma planı ve sınav süresi yönetimi rehberi.',
        type: 'article',
        publishedTime: '2026-02-19',
        modifiedTime: '2026-02-22',
        url: 'https://yksnethesapla.com/blog/tyt-matematik-konulari',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'TYT Matematik Konuları ve Soru Dağılımı 2027 | Çalışma Rehberi'
            }
        ],
    },
}

export default function TYTMatematikKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="TYT Matematik Konuları ve Soru Dağılımı 2027 | Kapsamlı Çalışma Rehberi" 
                    description="TYT Matematik sınavında hangi konudan kaç soru çıkıyor? 0-10, 10-20 ve 30+ net seviyelerine özel taktikler, süre yönetimi ve güncel soru dağılım analizi."
                    datePublished="2026-02-19"
                    dateModified="2026-02-22"
                    url="https://yksnethesapla.com/blog/tyt-matematik-konulari"
                    keywords={['tyt matematik konuları', 'tyt matematik soru dağılımı 2027', 'tyt matematik nasıl çalışılır', 'yks matematik net artırma', 'tyt geometri']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Matematik Konuları ve Rehberi</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Temel Yeterlilik Testi</span>
                            <time className="text-gray-600" dateTime="2026-02-19">19 Şubat 2026</time>
                            <span className="text-gray-600">• 15 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT Matematik Konuları, Soru Dağılımı ve 30+ Net İçin Sahada Test Edilmiş Çalışma Rehberi
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Formül ezberleyerek TYT Matematik çözülmez. ÖSYM&apos;nin soru felsefesini kavramak, konu dağılımındaki ağırlık merkezlerini görmek ve kendi seviyenize uygun stratejiyi sahaya sürmek zorundasınız.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Sınavdan çıkan hemen her adayın ilk cümlesi neredeyse aynıdır:
                        </p>
                        <p className="border-l-4 border-blue-500 pl-4 italic text-gray-800 font-medium">
                            — &quot;Sorular aslında aşırı zor değildi ama süre yetmedi, arkadaki geometriye elimi bile süremedim.&quot;
                        </p>
                        <p>
                            Durum tam olarak bu. Çünkü TYT Matematik artık klasik formül ezberleyip x&apos;i bulma sınavı olmaktan çıkalı çok oldu. Karşımızdaki test, uzun metinleri hızlıca okuyup matematik diline çevirme ve dakikaları doğru yönetme mücadelesidir.
                        </p>
                        <p>
                            Soru bankalarını baştan sona rastgele çözerek 15 netin üzerine çıkamazsınız. Önce ÖSYM&apos;nin soru havuzunda ağırlığı nereye verdiğini görmek, ardından da kendi net seviyenize uygun reçeteyi uygulamak zorundasınız.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            ÖSYM TYT Matematik Testinde Ne Soruyor? Konu ve Soru Dağılım Haritası
                        </h2>
                        <p>
                            TYT Matematik testinde 40 soru bulunur. Bunun yaklaşık 30-31 tanesi temel matematik ve problemlerden, 9-10 tanesi ise geometriden gelir. Son yılların soru dökümü şöyle:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm text-left">
                                <thead className="bg-slate-100 text-gray-800 font-semibold border-b">
                                    <tr>
                                        <th className="py-3 px-4">Konu Başlığı</th>
                                        <th className="py-3 px-4">Ortalama Soru</th>
                                        <th className="py-3 px-4">Soru Tipi & Karakteri</th>
                                        <th className="py-3 px-4">Önem Derecesi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Temel Kavramlar & Sayı Basamakları</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">3 - 4 Soru</td>
                                        <td className="py-3 px-4">Tek-çift sayı yorumları, kutucuk içine sayı yerleştirme mantığı.</td>
                                        <td className="py-3 px-4 text-emerald-700 font-medium">Hayati (Hızlı Net)</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Rasyonel & Ondalık Sayılar</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">1 - 2 Soru</td>
                                        <td className="py-3 px-4">Pasta dilimi, cetvel veya ölçeklendirme üzerinden görsel modelleme.</td>
                                        <td className="py-3 px-4 text-emerald-700 font-medium">Garanti Puan</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Basit Eşitsizlikler & Mutlak Değer</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">2 - 3 Soru</td>
                                        <td className="py-3 px-4">Sayı doğrusu üzerinde uzaklık ve günlük hayat sıcaklık/mesafe aralıkları.</td>
                                        <td className="py-3 px-4 text-amber-700 font-medium">Eleyici Eşik</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Üslü ve Köklü İfadeler</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">2 - 3 Soru</td>
                                        <td className="py-3 px-4">Yaklaşık değer hesaplama, tartı ve boy ölçüm kurguları.</td>
                                        <td className="py-3 px-4 text-emerald-700 font-medium">Çok Yüksek</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Bölme - Bölünebilme & EBOB - EKOK</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">1 - 2 Soru</td>
                                        <td className="py-3 px-4">Kalan bulma kuralları ve periyodik tekrarlayan olay kurguları.</td>
                                        <td className="py-3 px-4 text-slate-700">Orta</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Problemler (Tüm Türler)</td>
                                        <td className="py-3 px-4 font-bold text-red-600">11 - 13 Soru</td>
                                        <td className="py-3 px-4">Sayı-kesir, yüzde, kâr-zarar, hız, yaş ve tablo-grafik okuma.</td>
                                        <td className="py-3 px-4 text-red-700 font-bold">Sınavın Omurgası</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Kümeler & Kartezyen Çarpım</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">1 Soru</td>
                                        <td className="py-3 px-4">Venn şeması ve boyalı bölgeyi harflerle ifade etme.</td>
                                        <td className="py-3 px-4 text-emerald-700 font-medium">Garanti Puan</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Fonksiyonlar</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">1 - 2 Soru</td>
                                        <td className="py-3 px-4">Grafik okuma, bileşke ve ters fonksiyon uygulaması (AYT köprüsü).</td>
                                        <td className="py-3 px-4 text-indigo-700 font-medium">Kritik Temel</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Mantık / Polinomlar</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">1 Soru</td>
                                        <td className="py-3 px-4">Önermelerin doğruluk değeri veya basit katsayı ilişkileri.</td>
                                        <td className="py-3 px-4 text-slate-700">Kolay Net</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Veri - İstatistik</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">1 Soru</td>
                                        <td className="py-3 px-4">Medyan (ortanca), mod (tepe değer) ve açıklık hesapları.</td>
                                        <td className="py-3 px-4 text-emerald-700 font-medium">Kaçırılmayacak 1 Net</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-medium text-gray-900">Permütasyon, Kombinasyon, Olasılık</td>
                                        <td className="py-3 px-4 font-semibold text-blue-600">2 Soru</td>
                                        <td className="py-3 px-4">Dizilim, seçim ve deneysel/teorik olasılık modelleri.</td>
                                        <td className="py-3 px-4 text-amber-700 font-medium">Seçici ve Zor</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="py-3 px-4 font-bold text-gray-900">Geometri (Üçgen, Dörtgen, Katı Cisim)</td>
                                        <td className="py-3 px-4 font-bold text-purple-700">9 - 10 Soru</td>
                                        <td className="py-3 px-4">Katlama, döndürme, benzerlik, çokgenler ve prizma/piramit hacimleri.</td>
                                        <td className="py-3 px-4 text-purple-700 font-bold">Derece Belirleyici</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Şu Anki Net Seviyenize Göre Ne Yapmalısınız?
                        </h2>
                        <p>
                            Matematikte herkes aynı kitaptan çalışırsa herkes aynı verimi alamaz. 8 net yapan bir öğrenci ile 24 net yapan bir adayın eksik duyduğu mekanizmalar taban tabana zıttır. Kendinizi dürüstçe değerlendirin ve ait olduğunuz basamağın reçetesini uygulayın:
                        </p>

                        <div className="space-y-6 my-6">
                            <div className="p-5 bg-slate-50 border-l-4 border-amber-500 rounded-r-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Basamak: 0 - 10 Net Arasında Olanlar</h3>
                                <p className="text-gray-700 mb-3">
                                    Eğer bu banttaysanız kesinlikle yeni nesil, yarım sayfa süren hikayeli problem kitaplarına saldırmayın. Çünkü sorununuz kavrama zayıflığı değil; işlem akışındaki tereddüttür. Eksi ile eksinin çarpımı, rasyonel sayılarda payda eşitleme veya parantez açarken işaret dağıtma gibi adımlarda beyniniz ekstra enerji tüketiyor demektir.
                                </p>
                                <p className="text-gray-700 text-sm font-semibold text-amber-900">
                                    Somut Görev: Temel 4 işlem hızlandırma föyleri bitirin. Ardından Temel Kavramlar, Rasyonel Sayılar, Basit Eşitsizlikler ve Mutlak Değer konularını tek bir kaynaktan klasik tarzda çözün. Hedefiniz 3 hafta içinde işlem refleksini refleksif hale getirip 15 nete zıplamaktır.
                                </p>
                            </div>

                            <div className="p-5 bg-slate-50 border-l-4 border-blue-500 rounded-r-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Basamak: 10 - 20 Net Bandında Sıkışanlar</h3>
                                <p className="text-gray-700 mb-3">
                                    Bu öğrenci grubu konuyu bilir, formülleri hatırlar ama problem sorusunu okuduğunda kafasında denklemi kuramaz. Soruyu baştan sona roman gibi okur, sonra tekrar başa döner. Oysa problem çözmek soru bittikten sonra değil, sorunun ilk cümlesi okunurken başlar.
                                </p>
                                <p className="text-gray-700 text-sm font-semibold text-blue-900">
                                    Somut Görev: Her gün aksatmadan 20 adet rutin olmayan problem sorusu çözün. Soruyu okurken cümle cümle verileri kağıda dökün: &quot;Ahmet&apos;in yaşı = x, Mehmet = x + 4&quot; gibi. Asla sorunun tamamını okuyup sonra karalamaya başlamayın. Ayrıca Veri-İstatistik ve Kümeler gibi garanti 2 net getiren konuları derhal cebe koyun.
                                </p>
                            </div>

                            <div className="p-5 bg-slate-50 border-l-4 border-emerald-500 rounded-r-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Basamak: 20 - 30 Net Aralığında Gezinenler</h3>
                                <p className="text-gray-700 mb-3">
                                    Bu aşamada matematik altyapınız sağlamdır ancak 25 netin üzerine çıkamamanızın iki sebebi vardır: Geometriye sırtınızı dönmeniz ve sınav süresini matematik testinde eritmeniz. 40 sorunun 10 tanesi geometridir. Geometriye bakmadan 30 net yapmak neredeyse imkansızdır.
                                </p>
                                <p className="text-gray-700 text-sm font-semibold text-emerald-900">
                                    Somut Görev: Doğruda açı, üçgende açı, özel üçgenler ve benzerlik konularını adeta su gibi öğrenin. Geometride soru görme yeteneği günlük 15 soru çizimiyle 1 ayda oturur. Matematik testine ayırdığınız süreyi 65 dakikayı geçmeyecek şekilde sınırlandırın.
                                </p>
                            </div>

                            <div className="p-5 bg-slate-50 border-l-4 border-purple-500 rounded-r-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">4. Basamak: 30+ Nete Ulaşmak ve Dereceyi Kovalamak</h3>
                                <p className="text-gray-700 mb-3">
                                    32-35 net aralığına gelmiş adayların tek derdi dikkat hataları ve sınav komisyonunun &quot;tuzak soru&quot; olarak hazırladığı 2-3 orijinal sorudur. Burada artık konu eksiği aranmaz; sınav psikolojisi ve soru seçme disiplini konuşur.
                                </p>
                                <p className="text-gray-700 text-sm font-semibold text-purple-900">
                                    Somut Görev: Haftada en az 3 adet kaliteli branş denemesi çözün. Deneme bittikten sonra boş bıraktığınız veya yanlış yaptığınız soruları kesip özel bir soru havuzuna atın. Permütasyon, kombinasyon ve katı cisimler gibi uç konuları şansa bırakmayın.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sınavda İnatlaşan Geometriyi Kaçırır: Turlama Mantığı
                        </h2>
                        <p>
                            Geometride bir üçgen sorusuna takılıp 5-6 dakika harcadığınız an, sınavın arkasında bekleyen iki tane çerez seviye temel kavram sorusunu göremeden süreniz biter.
                        </p>
                        <p>
                            Kuralınız çok basit olmalı: İlk 30-40 saniyede size bir kapı aralamayan sorunun yanına küçük bir yuvarlak koyun ve derhal sonrakine geçin. İlk turda heybeye 20-25 neti koyduktan sonra arkaya yaslanıp o işaretlenen sorulara dönün. Panik bittiği için o uğraştırıcı soruların ne kadar kolay çözüldüğüne şaşıracaksınız.
                        </p>

                        <div className="my-8">
                            <QuickNetSimulator />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Her Denemeden Sonra Cevaplamanız Gereken 3 Soru
                        </h2>
                        <p>
                            Deneme bittiğinde sadece toplam nete bakmak kimseye bir şey kazandırmaz. Asıl mesele o yanlışların kaynağını tespit etmektir:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong>Konu eksiği mi?</strong> Formülü veya kuralı mı unuttun? (Hemen konu özetine dönüp 10 dakika tekrar et).</li>
                            <li><strong>Süre baskısı mı?</strong> Evde tek başına çözsen yapabileceğin bir soru muydu? (Demek ki bir önceki soruda gereksiz inatlaşmışsın).</li>
                            <li><strong>Dikkatsizlik mi?</strong> Soru kökündeki &quot;olamaz&quot; ifadesini mi kaçırdın, basit bir toplama hatası mı yaptın? (Soru çözerken altını çizerek oku).</li>
                        </ul>

                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 my-10 text-center text-white shadow-xl">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3">Mevcut Matematik Netinle Hedefine Ne Kadar Yakınsın?</h3>
                            <p className="text-blue-100 max-w-xl mx-auto mb-6 text-base md:text-lg">
                                TYT ve AYT matematik netlerini sistemimize girerek güncel ÖSYM katsayılarıyla ham puanını ve tahmini sıralama bandını saniyeler içinde hesapla.
                            </p>
                            <Link 
                                href="/" 
                                className="inline-block bg-white text-blue-700 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-all shadow-md hover:shadow-lg text-lg"
                            >
                                YKS Puanını ve Sıralamanı Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Rehberler ve Kaynaklar</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/ayt-matematik-konulari" className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-blue-100">
                                    <p className="font-semibold text-blue-900">AYT Matematik Konuları ve Dağılımı →</p>
                                    <p className="text-xs text-gray-600 mt-1">Limit, Türev, İntegral ve Trigonometriye giden yol haritası.</p>
                                </Link>
                                <Link href="/blog/tyt-kesin-cikan-konular" className="p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors border border-emerald-100">
                                    <p className="font-semibold text-emerald-900">TYT&apos;de Kesin Çıkan Konular →</p>
                                    <p className="text-xs text-gray-600 mt-1">ÖSYM&apos;nin her yıl soru havuzunu doldurduğu garanti konular.</p>
                                </Link>
                                <Link href="/blog/tyt-net-artirma-taktikleri" className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors border border-purple-100">
                                    <p className="font-semibold text-purple-900">TYT Net Artırma Taktikleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">60-70 net barajında tıkananlar için pratik çıkış stratejileri.</p>
                                </Link>
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="p-4 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors border border-amber-100">
                                    <p className="font-semibold text-amber-900">1 Net Kaç Kişi Öne Geçirir? →</p>
                                    <p className="text-xs text-gray-600 mt-1">Yığılma bölgelerinde her bir doğru cevabın gerçek sıralama etkisi.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
