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
    title: 'YKS Hazırlık Programı 2027: Patlamayan Haftalık Çalışma Düzeni',
    description: 'YKS ders çalışma programı nasıl yapılır? Duvara saatli çizelge asıp 3. gün pes edenler için görev odaklı çalışma, 12. sınıf ve mezun haftalık şablonları.',
    keywords: 'yks hazırlık programı, yks ders çalışma programı, yks haftalık plan, yks mezun programı, yks 12. sınıf çalışma düzeni',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-hazirlik-programi' },
    openGraph: {
        title: 'YKS Hazırlık Programı 2027: Patlamayan Haftalık Çalışma Düzeni',
        description: 'Saatli çizelgeler neden çöp olur? Masada saat doldurmak yerine net kazandıran görev odaklı sistem.',
        type: 'article',
        publishedTime: '2026-07-28',
        modifiedTime: '2026-10-29',
        url: 'https://yksnethesapla.com/blog/yks-hazirlik-programi',
        images: [
            {
                url: '/images/blog/yks-hazirlik-programi.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Hazırlık Programı'
            }
        ],
    },
}

export default function YKSHazirlikProgrami() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <ReadingProgress />
                <BlogArticleSchema 
                    title="YKS Hazırlık Programı 2027: Patlamayan Haftalık Çalışma Düzeni" 
                    description="YKS ders çalışma programı nasıl yapılır? Duvara saatli çizelge asıp 3. gün pes edenler için görev odaklı çalışma, 12. sınıf ve mezun haftalık şablonları."
                    datePublished="2026-07-28"
                    dateModified="2026-10-29"
                    url="https://yksnethesapla.com/blog/yks-hazirlik-programi"
                    keywords={['yks hazırlık programı', 'yks ders çalışma programı', 'yks haftalık plan', 'yks mezun programı', 'yks 12. sınıf çalışma düzeni']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Hazırlık Programı</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Rehber & Şablon</span>
                            <time className="text-gray-600" dateTime="2026-07-28">28 Temmuz 2026</time>
                            <span className="text-gray-600">• 10 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS Hazırlık Programı: 3 Günde Çöpe Gitmeyen Görev Odaklı Sistem
                        </h1>
                        <p className="text-xl text-gray-600">
                            Renkli kalemlerle &ldquo;08:00 Uyanış, 08:30-10:00 Matematik&rdquo; yazıp duvara astığın o meşhur çizelgeler neden her defasında 3. gün patlıyor? Masada saat doldurmayı bırakıp net kazandıran gerçekçi çalışma düzenini kuruyoruz.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-hazirlik-programi.jpg"
                        alt="YKS Hazırlık Programı: Sürdürülebilir Ders Çalışma Düzeni"
                    />

                    <TableOfContents items={[
                        { id: 'saatli-cizelge-hatasi', title: 'Saatli Çizelgeler Neden İflas Eder?' },
                        { id: 'gorev-odakli-sistem', title: 'Görev Odaklı (To-Do) Çalışma Sistemi' },
                        { id: 'tyt-ayt-dengesi', title: 'Aylara Göre TYT ve AYT Dengeleme Oranları' },
                        { id: '12-sinif-sablonu', title: '12. Sınıflar İçin Haftalık Şablon (Okul + YKS)' },
                        { id: 'mezun-sablonu', title: 'Mezunlar İçin Haftalık Şablon (Tam Gün)' },
                        { id: 'telafi-kurali', title: 'Pazar Gününün Telafi Kuralı' },
                        { id: 'sikca-sorulanlar', title: 'Sıkça Sorulan Sorular' },
                    ]} />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS sürecinde öğrencilerin en çok vakit kaybettiği şey ders çalışmak değil; <strong>ders çalışma programı hazırlamaktır</strong>. Kırtasiyeden alınan renkli post-itler, cetvelle çizilmiş saat sütunları ve robotik bir disiplin hayali... Ancak pazartesi sabahı alarm çalmadığında veya okulda beklenmedik bir yazılı çıktığında o program paramparça olur; öğrenci suçluluk hissine kapılır ve tüm haftayı boş geçirir.
                        </p>

                        <h2 id="saatli-cizelge-hatasi" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Saatli Çizelgeler Neden İflas Eder?
                        </h2>

                        <p>
                            İnsan hayatı bir fabrika montaj hattı değildir. Saat 14:00&apos;te trigonometri çözmeye başladığında bir soruda 10 dakika takılabilirsin, karnın acıkabilir ya da çat kapı bir misafir gelebilir. Saat odaklı sistemlerde yaşanan en ufak 20 dakikalık gecikme, günün geri kalanındaki bütün dersleri domino taşı gibi yıkar.
                        </p>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg text-amber-950 text-sm my-6">
                            <strong>Çözüm:</strong> Masaya &ldquo;2 saat oturacağım&rdquo; diye değil, &ldquo;Bugün şu 3 görevi tamamlayacağım&rdquo; diye oturacaksın. Önemli olan masada oturulan saat değil; bitirilen kazanım ve analiz edilen sorulardır.
                        </div>

                        <h2 id="gorev-odakli-sistem" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Görev Odaklı (To-Do) Çalışma Sistemi
                        </h2>

                        <p>
                            Görev odaklı sistemde her akşam uyumadan önce ertesi günün ajandasına sadece <strong>3 ana blok görev</strong> yazarsın:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                            <li><strong>Görev 1 (Sabit Rutin):</strong> 20 Paragraf + 15 TYT Problem sorusu (Süre: ~45-50 dk).</li>
                            <li><strong>Görev 2 (Ağır Siklet - AYT):</strong> AYT Fizik Bağıl Hareket konu anlatım videosu izleme + 30 soru çözümü.</li>
                            <li><strong>Görev 3 (Tekrar / Pekiştirme):</strong> TYT Kimya Periyodik Cetvel testlerinden 2 test çözüp yanlışları analiz etme.</li>
                        </ul>

                        <p>
                            Bu 3 görevi ister sabah 09:00&apos;da bitir, ister akşam 21:00&apos;de. Günün başarısı saatin kaç olduğuna göre değil, görevlerin yanına atılan onay işaretlerine göre ölçülür.
                        </p>

                        <h2 id="tyt-ayt-dengesi" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Aylara Göre TYT ve AYT Dengeleme Oranları
                        </h2>

                        <p>
                            En tehlikeli YKS hatası, sınava kadar sadece TYT çözüp &ldquo;TYT&apos;de 80 neti göreyim de sonra AYT&apos;ye başlarım&rdquo; demektir. AYT yerleştirme puanının %60&apos;ını belirler. Çalışma enerjinizi aylara göre şöyle dengelemelisiniz:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-gray-100 text-gray-800">
                                    <tr>
                                        <th className="p-3 border">Dönem</th>
                                        <th className="p-3 border">TYT Payı</th>
                                        <th className="p-3 border">AYT Payı</th>
                                        <th className="p-3 border">Haftalık Strateji</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Eylül - Aralık (İlk Dönem)</td>
                                        <td className="p-3 text-blue-600 font-bold border">%65</td>
                                        <td className="p-3 text-purple-600 font-bold border">%35</td>
                                        <td className="p-3 border">TYT temel konuları bitirilir, 11. sınıf AYT temelleri atılır.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Ocak - Mart (Kritik Dönem)</td>
                                        <td className="p-3 text-blue-600 font-bold border">%35</td>
                                        <td className="p-3 text-purple-600 font-bold border">%65</td>
                                        <td className="p-3 border">TYT sadece branş denemelerine devredilir; AYT konularına ağırlık verilir.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Nisan - Haziran (Son Düzlük)</td>
                                        <td className="p-3 text-blue-600 font-bold border">%20</td>
                                        <td className="p-3 text-purple-600 font-bold border">%80</td>
                                        <td className="p-3 border">Genel denemeler, çıkmış sorular ve AYT ezber tekrarları yapılır.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id="12-sinif-sablonu" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            12. Sınıflar İçin Haftalık Şablon (Okul + YKS)
                        </h2>

                        <p>
                            12. sınıfların en büyük handikabı okul yorgunluğudur. Okuldan saat 16:30&apos;da gelip günde 8 saat çalışmaya kalkmak sürdürülemez. Gerçekçi plan şöyledir:
                        </p>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-6 text-sm text-blue-950 space-y-2">
                            <p><strong>17:00 - 18:00:</strong> Dinlenme, yemek ve okul derslerinin 20 dakikalık tekrarı.</p>
                            <p><strong>18:00 - 19:30 (Blok 1):</strong> Günün ana dersi (AYT Matematik veya AYT Fen/Edebiyat konu + soru).</p>
                            <p><strong>19:45 - 21:15 (Blok 2):</strong> İkinci ders (TYT Fen veya Sosyal konu çalışması).</p>
                            <p><strong>21:30 - 22:30 (Blok 3):</strong> Günlük sabit rutin: 20 Paragraf + 15 Problem + günün hatalarını inceleme.</p>
                            <p className="text-xs text-blue-800 pt-2 font-medium">Toplam Net Çalışma: 4 Saat (Hafta içi 4 saat okul öğrencisi için zirve verimdir).</p>
                        </div>

                        <h2 id="mezun-sablonu" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Mezunlar İçin Haftalık Şablon (Tam Gün)
                        </h2>

                        <p>
                            Mezun senesindeki öğrencilerin en büyük tuzağı ise <em>&ldquo;vaktim çok&rdquo;</em> rehavetidir. Gün 3 büyük çalışma bloğuna bölünmelidir:
                        </p>

                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-6 text-sm text-emerald-950 space-y-2">
                            <p><strong>Sabah Bloğu (09:00 - 12:30):</strong> Zihnin en diri olduğu saatte Paragraf rutini + Ağır AYT Matematik konuları.</p>
                            <p><strong>Öğle Bloğu (14:00 - 17:30):</strong> Fen Bilimleri veya Edebiyat-Tarih soru çözümleri ve branş denemesi.</p>
                            <p><strong>Akşam Bloğu (19:00 - 21:30):</strong> Gün boyunca çözülemeyen soruların video çözümleri ve hata defterini tamamlama.</p>
                            <p className="text-xs text-emerald-800 pt-2 font-medium">Toplam Net Çalışma: 6,5 - 7 Saat (Daha fazlası zihinsel verimi düşürür).</p>
                        </div>

                        <h2 id="telafi-kurali" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Pazar Gününün Telafi Kuralı
                        </h2>

                        <p>
                            Pazar gününü asla yeni konularla doldurma! Pazar gününü şu iki amaca ayıracaksın:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                            <li><strong>Öğleden Önce:</strong> 1 adet tam süreli TYT veya AYT genel denemesi çöz ve analizini yap.</li>
                            <li><strong>Öğleden Sonra:</strong> Hafta içinde aksayan, yarım kalan derslerin telafisini yap ve akşam saat 18:00&apos;den sonra dersi tamamen kapatıp zihnini dinlendir. Dinlenmeyen beyin pazartesi günü odaklanamaz.</li>
                        </ul>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-2xl p-8 text-center my-10 shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">Çalışmalarının Sonucunu Puan Olarak Gör</h3>
                            <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-sm md:text-base">
                                Güncel netlerini hesaplayıcımıza gir; hedefine ulaşmak için hangi dersten kaç nete daha ihtiyacın olduğunu tespit et.
                            </p>
                            <Link 
                                href="/tyt-net-hesaplama" 
                                className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-xl shadow-md hover:bg-blue-50 transition transform hover:-translate-y-0.5"
                            >
                                Netlerini Hesapla →
                            </Link>
                        </div>

                        <h2 id="sikca-sorulanlar" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Günde kaç saat ders çalışmak gerekir?</h3>
                                <p className="text-sm text-gray-600">
                                    12. sınıflar için hafta içi 3,5 - 4,5 saat, mezunlar için ise 6 - 7 saat odaklanmış net çalışma fazlasıyla yeterlidir. Önemli olan süre değil, masada geçirilen vaktin ne kadarında soruyla aktif boğuştuğunuzdur.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Program aksayınca motivasyon kaybını nasıl önlerim?</h3>
                                <p className="text-sm text-gray-600">
                                    Aksayan günleri dünyanın sonu gibi görmek yerine &ldquo;pazar telafi günüm var&rdquo; rahatlığıyla karşılayın. YKS bir 100 metre koşusu değil, 10 aylık bir maratondur; arada bir nefes nefese kalmak sürecin doğasında vardır.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Aynı gün kaç farklı ders çalışılmalı?</h3>
                                <p className="text-sm text-gray-600">
                                    Bir güne 5-6 farklı ders koymak zihinsel odağı dağıtır. İdeal düzen; paragraf/problem gibi sabit rutinlerin yanına en fazla 2 ana ders (örn. Matematik ve Biyoloji) koymaktır.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#yksProgrami</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#calismaPlani</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#yks2027</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <Link href="/blog" className="text-blue-600 hover:underline font-medium">← Blog Listesine Dön</Link>
                            <Link href="/blog/yks-son-3-ay-calisma-plani" className="text-blue-600 hover:underline font-medium">Son 3 Ay Çalışma Planı →</Link>
                        </div>
                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
