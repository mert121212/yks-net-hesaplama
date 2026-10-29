import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import InteractiveOBPCalculator from '@/components/InteractiveOBPCalculator'
import ArticleFeedback from '@/components/ArticleFeedback'
import ReadingProgress from '@/components/ReadingProgress'
import LastUpdatedBadge from '@/components/LastUpdatedBadge'

export const metadata: Metadata = {
    title: 'OBP Nedir ve Nasıl Hesaplanır? Kırık OBP Felaketi ve Korunma Yolları 2027',
    description: 'Diploma notu sıralamayı nasıl etkiler? OBP hesaplama formülü, kayıt yaptırmasan bile puanı yarıya bölen Kırık OBP tuzağı.',
    keywords: 'obp nedir, obp nasıl hesaplanır, obp hesaplama, kırık obp, diploma notu yks, okul birinciliği kontenjanı, yks yerleştirme puanı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/obp-hesaplama' },
    openGraph: {
        title: 'OBP Nedir ve Nasıl Hesaplanır? Kırık OBP Tuzağı',
        description: 'Lise diploma notunun YKS yerleştirmesine acımasız etkisi. Kırık OBP ile kaç bin kişi geriye düşersin?',
        type: 'article',
        publishedTime: '2026-08-25',
        modifiedTime: '2026-10-29',
        url: 'https://yksnethesapla.com/blog/obp-hesaplama',
        images: [
            {
                url: '/images/blog/obp-hesaplama.jpg',
                width: 1200,
                height: 630,
                alt: 'OBP Nedir ve Nasıl Hesaplanır? Kırık OBP Rehberi'
            }
        ],
    },
}

export default function OBPHesaplamaRehberi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <ReadingProgress />
                <BlogArticleSchema 
                    title="OBP Nedir ve Nasıl Hesaplanır? Kırık OBP Rehberi 2027" 
                    description="Lise diploma notunun YKS yerleştirme puanına etkisi, OBP hesaplama formülü, kırık OBP şartları ve okul birinciliği kontenjanı."
                    datePublished="2026-08-25"
                    dateModified="2026-10-29"
                    url="https://yksnethesapla.com/blog/obp-hesaplama"
                    keywords={['obp nedir', 'obp nasıl hesaplanır', 'obp hesaplama', 'kırık obp', 'diploma notu yks', 'okul birinciliği kontenjanı']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">OBP Rehberi</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Kritik Kural</span>
                            <time className="text-gray-600" dateTime="2026-08-25">25 Ağustos 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            OBP (Diploma Notu) Nedir, Nasıl Hesaplanır? Kırık OBP Kabusu
                        </h1>
                        <p className="text-xl text-gray-600">
                            Sınavda 20 bininci olursun, bir bakarsın diploma notun seni 35 bine geriletmiş. 4 yıllık lise karnesi YKS yerleştirme puanını nasıl şekillendirir?
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/obp-hesaplama.jpg"
                        alt="OBP (Ortaöğretim Başarı Puanı) Nedir, Nasıl Hesaplanır?"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS sonuç belgesi eline geçtiğinde iki farklı başarı sırası görürsün: İlki <strong>Ham Puan Sıralaması</strong> (yalnızca sınavda yaptığın netlerin karşılığı), ikincisi ise <strong>Yerleştirme Sıralaması</strong>. Üniversite tercihlerinde geçerli olan yegâne puan yerleştirme puanındır ve bu puanın üzerine lise diploma notun (OBP) doğrudan etki eder.
                        </p>

                        <p>
                            Kimini 5 bin kişi öne iter, kimini 25 bin kişi geriye fırlatır. Bu puanı doğru anlamak ve gereksiz sıralama kaybı yaşamamak için sistemin mantığını kavramak zorundasın.
                        </p>

                        <InteractiveOBPCalculator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            En Pratik Formül: Diploma Notunu 0,6 ile Çarp
                        </h2>
                        <p>
                            ÖSYM kılavuzundaki karmaşık aşamalara takılma. 9, 10, 11 ve 12. sınıfların ağırlıklı yıl sonu ortalaması olan diploma notunu al, <strong>doğrudan 0,6 ile çarp.</strong> Sınav ham puanına eklenecek net OBP katkısı tam olarak budur.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-4">
                            <h3 className="font-bold text-blue-950 text-base mb-1">Hızlı Sağlama Örnekleri:</h3>
                            <ul className="text-sm text-blue-900 space-y-1 font-mono mt-2">
                                <li>Diploma notun 100 ise: 100 × 0,6 = <strong>+60,0 Puan</strong> (Sistemin verdiği tavan ek puan)</li>
                                <li>Diploma notun 90 ise: 90 × 0,6 = <strong>+54,0 Puan</strong></li>
                                <li>Diploma notun 80 ise: 80 × 0,6 = <strong>+48,0 Puan</strong></li>
                                <li>Diploma notun 70 ise: 70 × 0,6 = <strong>+42,0 Puan</strong></li>
                                <li>Diploma notun 60 ise: 60 × 0,6 = <strong>+36,0 Puan</strong></li>
                            </ul>
                            <p className="text-xs text-blue-800 mt-2">
                                Gördüğün gibi 95 diploma notu olan bir adayla 70 diploma notu olan bir aday arasında sınava adım atmadan önce tam <strong>15 puanlık</strong> bir uçurum vardır. 15 puan ise YKS&apos;de ortalama 4-5 adet zor AYT netine eşdeğerdir.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Normal OBP ile Kırık OBP Karşılaştırma Tablosu
                        </h2>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-indigo-50 text-indigo-950 font-semibold">
                                    <tr>
                                        <th className="p-3 border">Lise Diploma Notu</th>
                                        <th className="p-3 border">OBP Değeri (× 5)</th>
                                        <th className="p-3 border text-emerald-800 font-bold">Normal Katkı (× 0,6)</th>
                                        <th className="p-3 border text-amber-800 font-bold">Kırık OBP Katkısı (× 0,3)</th>
                                        <th className="p-3 border text-red-600 font-bold">Net Puan Kaybı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">100 (Tam Puan)</td>
                                        <td className="p-3 border">500</td>
                                        <td className="p-3 border font-bold text-emerald-600">+60,0 Puan</td>
                                        <td className="p-3 border font-semibold text-amber-700">+30,0 Puan</td>
                                        <td className="p-3 border font-bold text-red-600">-30,0 Puan</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">90</td>
                                        <td className="p-3 border">450</td>
                                        <td className="p-3 border font-bold text-emerald-600">+54,0 Puan</td>
                                        <td className="p-3 border font-semibold text-amber-700">+27,0 Puan</td>
                                        <td className="p-3 border font-bold text-red-600">-27,0 Puan</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">80</td>
                                        <td className="p-3 border">400</td>
                                        <td className="p-3 border font-bold text-emerald-600">+48,0 Puan</td>
                                        <td className="p-3 border font-semibold text-amber-700">+24,0 Puan</td>
                                        <td className="p-3 border font-bold text-red-600">-24,0 Puan</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">70</td>
                                        <td className="p-3 border">350</td>
                                        <td className="p-3 border font-bold text-emerald-600">+42,0 Puan</td>
                                        <td className="p-3 border font-semibold text-amber-700">+21,0 Puan</td>
                                        <td className="p-3 border font-bold text-red-600">-21,0 Puan</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">60</td>
                                        <td className="p-3 border">300</td>
                                        <td className="p-3 border font-bold text-emerald-600">+36,0 Puan</td>
                                        <td className="p-3 border font-semibold text-amber-700">+18,0 Puan</td>
                                        <td className="p-3 border font-bold text-red-600">-18,0 Puan</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Kırık OBP Tuzağı: Kayıt Yaptırmasan Bile Yanarsın!
                        </h2>
                        <p>
                            İşte her yıl binlerce adayın canını yakan en büyük hata: Tercih döneminde sırf &ldquo;açıkta kalmayayım&rdquo; psikolojisiyle gitmeyeceğin bir 2 yıllık veya 4 yıllık bölümü listene yazarsın. Sonuçlar açıklandığında kazandığını görünce &ldquo;Ben buraya gitmeyeceğim, üniversiteye kayıt da yaptırmam, seneye bir daha denerim&rdquo; dersin.
                        </p>
                        <p>
                            <strong>Geçmiş olsun. ÖSYM için kayıt yaptırıp yaptırmamanın hiçbir önemi yoktur.</strong> ÖSYM yerleştirme sonuç belgesinde adının karşısına bir üniversite programı yazıldığı an, takip eden ilk yıldaki OBP katsayın 0,12&apos;den 0,06&apos;ya (yani yarı yarıya) düşer.
                        </p>
                        <p>
                            54 puan alacakken eline yalnızca 27 puan geçer. Kaybettiğin o 27 puan seni ilk 40 binden 110 bine fırlatabilir. Bu kural yalnızca takip eden ilk yıl geçerlidir; 2 yıl sonra sınava girersen katsayı tekrar normale (0,12) döner.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Okul Birinciliği Kontenjanı Hakkında Bilinmesi Gerekenler
                        </h2>
                        <p>
                            Lise okul birincilerine devlet üniversitelerinde özel ek kontenjanlar ayrılır. Örneğin genel sıralamada 45 binle kapatan bir tıp veya mühendislik programına bir okul birincisi 60 binle yerleşebilir. Ancak dikkat edilmesi gereken hayati bir kural vardır: <strong>Bu hak yalnızca mezun olduğun yıl geçerlidir.</strong> Bir sene mezuna kaldığın anda okul birinciliği hakkın tamamen sona erer.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">OBP ile Yerleştirme Puanını Hesapla</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Diploma notunu ve tahmini netlerini girerek OBP&apos;nin seni kaç bin kişi öne çekeceğini veya geriye atacağını hemen gör.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Yerleştirme Puanı Hesaplayıcıyı Aç →
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            OBP Hakkında Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">Açık öğretim fakültesi kazanırsam OBP kırılır mı?</h3>
                                <p className="text-sm text-gray-700">
                                    Kontenjan sınırlaması olan açık öğretim programlarını (örneğin AÖF İlahiyat, Adalet vb.) kazanırsanız OBP kırılır. Ancak sınavsız ikinci üniversite kapsamında kayıt olunan programlar bu cezayı tetiklemez.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">Özel yetenek sınavıyla bir bölüme yerleşirsem OBP düşer mi?</h3>
                                <p className="text-sm text-gray-700">
                                    Evet. Özel yetenek sınavı ile de olsa bir yükseköğretim programına yerleştirilen adayların bir sonraki yıl OBP katsayıları yarıya düşer.
                                </p>
                            </div>
                        </div>

                        <p className="mt-8">
                            Diploma notunun yığılmadaki etkisini görmek için <Link href="/blog/yks-1-net-kac-kisi-atar" className="text-blue-600 font-semibold hover:underline">YKS&apos;de 1 Net Kaç Kişi Atar?</Link> yazımıza göz atabilir, tercih listeni güvene almak için <Link href="/blog/universite-tercih-stratejileri" className="text-blue-600 font-semibold hover:underline">Üniversite Tercih Stratejileri</Link> rehberimizi inceleyebilirsin.
                        </p>

                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
