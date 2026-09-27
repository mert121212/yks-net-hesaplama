import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Son 3 Ay Çalışma Programı: Netleri Zirveye Taşıma Rehberi 2027',
    description: 'YKS\'ye 3 ay kala net artar mı? Mart-Haziran arası haftalık çalışma programı, TYT-AYT deneme sıklığı, branş tekrarları ve çıkmış soru stratejisi.',
    keywords: 'yks son 3 ay çalışma programı, yks son 100 gün, sınava 3 ay kala program, yks son 3 ay net artar mı, ayt son 3 ay yetişir mi',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-son-3-ay-calisma-plani' },
    openGraph: {
        title: 'YKS Son 3 Ay Çalışma Programı: Netleri Zirveye Taşıma Stratejisi',
        description: 'Sınava 3 ay kala konu çalışma bırakılıp deneme sistemine nasıl geçilir? Haftalık görev planı ve son 90 gün yol haritası.',
        type: 'article',
        publishedTime: '2026-09-10',
        modifiedTime: '2026-09-10',
        url: 'https://yksnethesapla.com/blog/yks-son-3-ay-calisma-plani',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Son 3 Ay Çalışma Programı'
            }
        ],
    },
}

export default function YksSon3AyCalismaPlani() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS Son 3 Ay Çalışma Programı: Netleri Zirveye Taşıma Rehberi 2027" 
                    description="YKS'ye 3 ay kala net artar mı? Mart-Haziran arası haftalık çalışma programı, TYT-AYT deneme sıklığı, branş tekrarları ve çıkmış soru stratejisi."
                    datePublished="2026-09-10"
                    dateModified="2026-09-10"
                    url="https://yksnethesapla.com/blog/yks-son-3-ay-calisma-plani"
                    keywords={['yks son 3 ay çalışma programı', 'yks son 100 gün', 'sınava 3 ay kala program', 'yks son 3 ay net artar mı', 'ayt son 3 ay yetişir mi']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Son 3 Ay Çalışma Planı</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Strateji & Plan</span>
                            <time className="text-gray-600" dateTime="2026-09-10">10 Eylül 2026</time>
                            <span className="text-gray-600">• 11 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS Son 3 Ay Çalışma Programı
                        </h1>
                        <p className="text-xl text-gray-600">
                            Mart-Haziran arası dönemde haftalık planı nasıl kurarsın, TYT-AYT dengesi ne olmalı, çıkmış sorular ne zaman devreye girer — bu yazıda bunları anlattım.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Son 3 aya girince çoğu kişi panikler. &quot;Yetişmez artık&quot; denir, bazıları direkt mezuna kalmaya karar verir. Ben bunu her sene görüyorum.
                        </p>

                        <p>
                            Ama şöyle bir gerçek var: sıralama farkları asıl bu 90 günde açılıyor. Çünkü başvuran 3 milyonun büyük kısmı Nisan gibi temponu düşürüyor, hatta bırakıyor. Masada kalan kazanıyor. Basit.
                        </p>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg text-amber-950 text-sm my-6">
                            <strong>Dikkat:</strong> Son 3 ayda 500 sayfalık konu kitabı açıp baştan okumaya çalışmayın. O dönem geçti. Şimdi denemede patladığın konuyu tespit edip ona odaklanma dönemi.
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Son 3 Ayda Neden Net Artışı Hızlanır?
                        </h2>

                        <p>
                            Üç tane somut sebebi var:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>AYT bilgi bazlı:</strong> TYT&apos;de refleks lazım, 2 ayda 3 net zor oynar. AYT farklı — Logaritmayı bugün öğrenirsen yarınki denemede doğrudan +1 net. Bilgi = net.</li>
                            <li><strong>Rakip azalıyor:</strong> 3 milyon adaydan tahminen 1 milyonu Nisan&apos;da çalışmayı bırakıyor. Sen devam edersen otomatik olarak yüz binlerce kişinin önüne geçersin.</li>
                            <li><strong>Mayıs&apos;ta okuduğun kalıcı:</strong> Eylül&apos;de ezberlediğin Divan şairlerini muhtemelen unutmuşsundur. Ama sınava 3 hafta kala tekrar ettiğin bilgi sınav sabahı hâlâ taze.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            90 Günlük Plan
                        </h2>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead className="bg-gray-100 text-gray-800 text-sm">
                                    <tr>
                                        <th className="p-3 border">Dönem</th>
                                        <th className="p-3 border">Odak</th>
                                        <th className="p-3 border">TYT / AYT Dengesi</th>
                                        <th className="p-3 border">Haftalık Deneme</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">1. Ay (90-60 gün)</td>
                                        <td className="p-3 border">AYT&apos;deki zayıf konuları bitir, branş denemeleri</td>
                                        <td className="p-3 border">%35 TYT — %65 AYT</td>
                                        <td className="p-3 border">2 TYT + 2 AYT + branş</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">2. Ay (60-30 gün)</td>
                                        <td className="p-3 border">MEB kitapları, son 6 yılın çıkmışları</td>
                                        <td className="p-3 border">%30 TYT — %70 AYT</td>
                                        <td className="p-3 border">3 TYT + 3 AYT</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">3. Ay (son 30 gün)</td>
                                        <td className="p-3 border">Saat 10:15 provası, hata defteri, uyku düzeni</td>
                                        <td className="p-3 border">%20 TYT — %80 AYT tekrar</td>
                                        <td className="p-3 border">Her sabah sınav provası</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Ay: AYT&apos;deki Zayıf Konular (90-60 Gün Kala)
                        </h2>

                        <p>
                            Çoğu kişi bildiği konuları tekrar tekrar çözer, zayıf olduğu konudan kaçar. TYT Türkçe&apos;den 120 soru çözmek kolay geliyor çünkü zaten yapabiliyorsun. Ama AYT&apos;deki türev-integral veya organik kimya açık kalıyor.
                        </p>

                        <p>
                            Bir kağıt al. Her dersten ÖSYM&apos;nin sık sorduğu ama senin elini süremediğin 2-3 konuyu yaz:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Matematik:</strong> Türevin geometrik yorumu, logaritma, trigonometride yarım açı. Konu dağılımı için <Link href="/blog/ayt-matematik-konulari" className="text-blue-600 font-semibold hover:underline">AYT Matematik konuları</Link> tablosuna bak.</li>
                            <li><strong>Fizik:</strong> İndüksiyon ve transformatörler — her sene gelir.</li>
                            <li><strong>Biyoloji:</strong> Hücresel solunum basamakları, bitki biyolojisi.</li>
                            <li><strong>Edebiyat:</strong> Milli Edebiyat ve Cumhuriyet dönemi romancıları.</li>
                        </ul>

                        <p>
                            İlk 4 haftanı bu konulara ayır. Her biri için video izle, 150-200 soru çöz, kapat geç.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. Ay: MEB Kitapları ve Çıkmış Sorular (60-30 Gün Kala)
                        </h2>

                        <p>
                            Mayıs&apos;ta piyasadaki &quot;süper zor&quot; denemelerle uğraşmayı bırak. Sınavı o yayınevi değil ÖSYM hazırlıyor.
                        </p>

                        <p>
                            ÖSYM soru hazırlayan hocalar MEB ders kitaplarından yararlanır. Kimya, Biyoloji, Tarih, Felsefe&apos;de 11-12. sınıf MEB kitaplarının kenarındaki kutucuklar, deney görselleri soru kaynağı. O kitapları roman gibi oku, altını çiz.
                        </p>

                        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-5 rounded-r-lg text-emerald-950 text-sm my-6">
                            <strong>Çıkmış sorular için:</strong> 2019-2026 arası tüm YKS sorularını kitapçık formatında çöz. Gerçek süre tut. Yanlış yaptığın sorunun yanına &quot;formülü mü unuttum, soruyu mu yanlış okudum, şıkka mı atladım&quot; diye not düş.
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. Ay: Ritim ve Psikoloji (Son 30 Gün)
                        </h2>

                        <p>
                            Son ayda yeni konu öğrenmek mantıksız. Beyin yeni bilgiyi sindirmeye çalışırken eskileri karıştırır. Bu dönem tamamen tekrar, ritim ve uyku düzeni meselesi.
                        </p>

                        <p>
                            <strong>Sabah 10:15 kuralı:</strong> Sınav 10:15&apos;te başlıyor. Gece 3&apos;e kadar çalışıp 11&apos;de kalkarsan sınav sabahı beynin uykuda olur. Son bir ay her gün 07:30&apos;da kalk, 10:15&apos;te masaya otur, deneme başlat.
                        </p>

                        <p>
                            <strong>Hata defteri:</strong> Bugüne kadar girdiğin denemelerin yanlışlarını kes-yapıştır yap. Akşam yatmadan yarım saat sadece o defteri karıştır. Neti artıran şey bildiğin soruyu çözmek değil, yapamadığın sorunun mantığını kavramak.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Deneme Sonrası Analiz
                        </h2>

                        <p>
                            165 dakika masada ter döküyorsun, bitiyor. Doğru yanlışını sayıyorsun, &quot;yine aynı net&quot; deyip kitapçığı kenara atıyorsun. Ama asıl iş o kitapçıktaki yanlışları analiz etmek.
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Yanlış yaptığın sorunun video çözümünü izle, sonra videoyu kapat ve aynı soruyu sıfırdan tek başına çöz.</li>
                            <li>Hangi soruda gereksiz inatlaştın? O yüzden arkadaki kolay soruları kaçırdın mı? <Link href="/blog/tyt-net-artirma-taktikleri" className="text-blue-600 hover:underline">TYT net artırma taktikleri</Link> yazısına da göz at.</li>
                            <li>Sallayıp tutturduğun soruları da yanlış say. Sınav günü o şansı garanti edemezsin.</li>
                        </ul>

                        {/* CTA Kutusu */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 text-center my-10 shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">Mevcut Netlerini Hesapla</h3>
                            <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-sm md:text-base">
                                Son deneme netlerini ve diploma notunu gir, güncel ÖSYM katsayılarına göre tahmini sıralamanı gör.
                            </p>
                            <Link 
                                href="/" 
                                className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl shadow-md hover:bg-blue-50 transition transform hover:-translate-y-0.5"
                            >
                                YKS Net Hesaplayıcıya Git →
                            </Link>
                        </div>

                        <p>
                            Son 3 ay ağır bir dönem. Ama günde 7-8 saat uyumayı ihmal etme. Uykusuz beyin denemede dikkat hatası yapar, bildiğin soruyu yanlış okur. Düzenli uyku, düzenli çalışma — bu kadar.
                        </p>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#yksSon3Ay</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#calismaProgrami</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#tytNetArtırma</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#aytHazirlik</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <Link href="/blog" className="text-blue-600 hover:underline font-medium">← Blog Listesine Dön</Link>
                            <Link href="/blog/tyt-turkce-paragraf-teknikleri" className="text-blue-600 hover:underline font-medium">TYT Türkçe Paragraf Teknikleri →</Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
