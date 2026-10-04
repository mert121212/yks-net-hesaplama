import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import InteractiveOBPCalculator from '@/components/InteractiveOBPCalculator'

export const metadata: Metadata = {
    title: 'OBP Nedir ve Nasıl Hesaplanır? Kırık OBP Felaketi ve Korunma Yolları 2027',
    description: 'Diploma notu sıralamayı nasıl etkiler? OBP hesaplama formülü, kayıt yaptırmasan bile puanı yarıya bölen Kırık OBP tuzağı.',
    keywords: 'obp nedir, obp nasıl hesaplanır, obp hesaplama, kırık obp, diploma notu yks, okul birinciliği kontenjanı, yks yerleştirme puanı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/obp-hesaplama' },
    openGraph: {
        title: 'OBP Nedir ve Nasıl Hesaplanır? Kırık OBP Tuzağı',
        description: 'Lise diploma notunun YKS yerleştirmesine acımasız etkisi. Kırık OBP ile kaç bin kişi geriye düşersin?',
        type: 'article',
        publishedTime: '2026-02-24',
        modifiedTime: '2026-03-01',
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
                <BlogArticleSchema 
                    title="OBP Nedir ve Nasıl Hesaplanır? Kırık OBP Rehberi 2027" 
                    description="Lise diploma notunun YKS yerleştirme puanına etkisi, OBP hesaplama formülü, kırık OBP şartları ve okul birinciliği kontenjanı."
                    datePublished="2026-02-24"
                    dateModified="2026-03-01"
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
                            <time className="text-gray-600" dateTime="2026-02-24">24 Şubat 2026</time>
                            <span className="text-gray-600">• 7 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            OBP (Diploma Notu) Nedir, Nasıl Hesaplanır? Kırık OBP Kabusu
                        </h1>
                        <p className="text-xl text-gray-600">
                            Sınavda 20 bininci olursun, bir bakarsın OBP seni 35 bine fırlatmış. Lisenin 4 yıllık mirası YKS puanını nasıl şekillendirir?
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/obp-hesaplama.jpg"
                        alt="OBP (Ortaöğretim Başarı Puanı) Nedir, Nasıl Hesaplanır?"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS sonuç ekranı açıldığında iki farklı sıralama görürsün: Biri <strong>Ham Puan Sıralaması</strong>, diğeri ise <strong>Yerleştirme Sıralaması</strong>. Tercih yaparken geçerli olan tek şey yerleştirme puanındır ve bu puanın üstüne lise diploma notun (OBP) balyoz gibi iner.
                        </p>

                        <p>
                            Kimini 5 bin kişi öne iter, kimini 25 bin kişi arkaya savurur. Göz göre göre bu puanı kaybetmemek için sistemin nasıl çalıştığını bilmek zorundasın.
                        </p>

                        <InteractiveOBPCalculator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            En Pratik Formül: Diploma Notunu 0,6 ile Çarp
                        </h2>
                        <p>
                            ÖSYM kılavuzundaki karmaşık formüllere takılma. 9, 10, 11 ve 12. sınıfın genel ortalaması olan diploma notunu al, <strong>doğrudan 0,6 ile çarp.</strong> Sınav ham puanına eklenecek olan puan tam olarak budur.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-4">
                            <h3 className="font-bold text-blue-950 text-base mb-1">Hızlı Sağlama</h3>
                            <ul className="text-sm text-blue-900 space-y-1 font-mono mt-2">
                                <li>Diploma notun 100 ise: 100 × 0,6 = <strong>+60 Puan</strong> (Maksimum destek)</li>
                                <li>Diploma notun 90 ise: 90 × 0,6 = <strong>+54 Puan</strong></li>
                                <li>Diploma notun 75 ise: 75 × 0,6 = <strong>+45 Puan</strong></li>
                                <li>Diploma notun 60 ise: 60 × 0,6 = <strong>+36 Puan</strong></li>
                            </ul>
                            <p className="text-xs text-blue-800 mt-2">
                                Gördüğün gibi 95 diploma notu olan biriyle 70 olan biri arasında sınava girmeden önce tam <strong>15 puan</strong> fark vardır. 15 puan ise YKS&apos;de ortalama 4-5 tane AYT neti demektir!
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Diploma Notuna Göre Masadaki Puanlar
                        </h2>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full border border-gray-200 text-sm">
                                <thead className="bg-gray-100 text-gray-800">
                                    <tr>
                                        <th className="py-2.5 px-4 text-left border">Diploma Notu</th>
                                        <th className="py-2.5 px-4 text-center border">Normal Ek Puan (×0,6)</th>
                                        <th className="py-2.5 px-4 text-center border text-red-700">Kırık OBP Ek Puanı (×0,3)</th>
                                        <th className="py-2.5 px-4 text-left border">Sahadaki Yansıması</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="py-2.5 px-4 border font-medium">70</td>
                                        <td className="py-2.5 px-4 border text-center font-bold">42,0</td>
                                        <td className="py-2.5 px-4 border text-center text-red-600 font-bold">21,0</td>
                                        <td className="py-2.5 px-4 border text-gray-600">Geriye atma riski yüksek.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-2.5 px-4 border font-medium">80</td>
                                        <td className="py-2.5 px-4 border text-center font-bold">48,0</td>
                                        <td className="py-2.5 px-4 border text-center text-red-600 font-bold">24,0</td>
                                        <td className="py-2.5 px-4 border text-gray-600">Sıralamayı dengede tutar.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 px-4 border font-medium">90</td>
                                        <td className="py-2.5 px-4 border text-center font-bold text-blue-700">54,0</td>
                                        <td className="py-2.5 px-4 border text-center text-red-600 font-bold">27,0</td>
                                        <td className="py-2.5 px-4 border text-gray-600">Ciddi sıçrama yaptırır.</td>
                                    </tr>
                                    <tr className="bg-blue-50 font-semibold">
                                        <td className="py-2.5 px-4 border">100</td>
                                        <td className="py-2.5 px-4 border text-center text-blue-800 font-bold">60,0</td>
                                        <td className="py-2.5 px-4 border text-center text-red-600 font-bold">30,0</td>
                                        <td className="py-2.5 px-4 border text-gray-600">İlk 1.000 için can suyu.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Kırık OBP Tuzağı: Kayıt Yaptırmasan Bile Yanarsın!
                        </h2>
                        <p>
                            İşte her yıl ağlatan en büyük hata: Tercih döneminde sırf &ldquo;açıkta kalmayayım&rdquo; diye gitmeyeceğin bir 2 yıllık veya 4 yıllık bölümü listene yazarsın. Sonra kazandığını görünce &ldquo;Ben buraya gitmem, seneye tekrar hazırlanırım, zaten kayıt da yaptırmadım&rdquo; dersin.
                        </p>
                        <p>
                            <strong>Geçmiş olsun. ÖSYM için kayıt yaptırıp yaptırmaman zerre kadar önemli değildir.</strong> Sistemde adının karşısında bir üniversite kazandı ibaresi çıktığı an, bir sonraki sene OBP katsayın 0,12&apos;den 0,06&apos;ya (yani yarı yarıya) iner. 
                        </p>
                        <p>
                            54 puan alacakken eline sadece 27 puan geçer. Kaybettiğin o 27 puan seni ilk 50 binden 120 bine fırlatır. Bu ceza sadece takip eden ilk yıl için geçerlidir; 2 yıl sonra sınava girersen puanın normale döner.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Okul Birinciliği Kontenjanı Efsanesi
                        </h2>
                        <p>
                            Okul birincisiysen devlet üniversitelerinde senin için ayrılmış özel kontenjanlar vardır. Normalde 40 binle kapatan bir mühendisliğe 60 binle girebilirsin. Ama dikkat: <strong>Bu hak sadece mezun olduğun yıl geçerlidir.</strong> Bir sene mezuna kaldığın anda okul birinciliği kontenjanı tamamen buharlaşır, sıradan bir aday olarak yarışırsın.
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
                    </div>
                </div>
            </article>
        </div>
    )
}
