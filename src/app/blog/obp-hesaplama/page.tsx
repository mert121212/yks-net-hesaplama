import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import InteractiveOBPCalculator from '@/components/InteractiveOBPCalculator'

export const metadata: Metadata = {
    title: 'OBP Nedir ve Nasıl Hesaplanır? Kırık OBP Rehberi 2027',
    description: 'Lise diploma notunun YKS yerleştirme puanına etkisi, OBP hesaplama formülü, kırık OBP şartları ve okul birinciliği kontenjanı.',
    keywords: 'obp nedir, obp nasıl hesaplanır, obp hesaplama, kırık obp, diploma notu yks, okul birinciliği kontenjanı, yks yerleştirme puanı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/obp-hesaplama' },
    openGraph: {
        title: 'OBP Nedir ve Nasıl Hesaplanır? Lise Diploma Notunun YKS\'ye Etkisi',
        description: 'Diploma notu yerleştirme puanını nasıl etkiler? Kırık OBP ve katsayı hesabı.',
        type: 'article',
        publishedTime: '2026-02-24',
        modifiedTime: '2026-02-27',
        url: 'https://yksnethesapla.com/blog/obp-hesaplama',
        images: [
            {
                url: '/og-image.jpg',
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
                    dateModified="2026-02-27"
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
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-24">24 Şubat 2026</time>
                            <span className="text-gray-600">• 7 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            OBP (Ortaöğretim Başarı Puanı) Nedir, Nasıl Hesaplanır?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Lise mezuniyet notunun YKS yerleştirme puanına eklenme yöntemi, kırık OBP uygulaması ve okul birinciliği kontenjanı kuralları.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS sonucunda elde edilen ham puana, adayın lisedeki 4 yıllık akademik başarısını temsil eden Ortaöğretim Başarı Puanı (OBP) eklenir. Tercihler yerleştirme puanı üzerinden yapılır.
                        </p>

                        <InteractiveOBPCalculator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            OBP Hesaplama Formülü
                        </h2>
                        <p>
                            Milli Eğitim Bakanlığı sistemindeki 9, 10, 11 ve 12. sınıf yıl sonu başarı puanlarının aritmetik ortalaması alınarak 100 üzerinden diploma notu belirlenir.
                        </p>
                        <p>
                            ÖSYM bu notu şu formülle yerleştirme puanına dönüştürür:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>100 üzerinden diploma notu 5 ile çarpılarak 500 üzerinden OBP bulunur.</li>
                            <li>OBP değeri 0,12 katsayısıyla çarpılarak adayın ham puanına eklenir.</li>
                        </ol>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-xl my-4">
                            <h3 className="font-bold text-blue-950 text-base mb-1">Pratik Hesaplama Yolu</h3>
                            <p className="text-sm text-blue-900">
                                Diploma notunuzu doğrudan <strong>0,6</strong> ile çarparsanız sınav puanınıza eklenecek net ek puanı bulursunuz.
                            </p>
                            <p className="text-sm font-mono text-blue-950 bg-white p-3 rounded-lg border border-blue-200 mt-2">
                                Diploma Notu 90 ise: 90 × 0,6 = <strong>54 Puan</strong><br />
                                Diploma Notu 70 ise: 70 × 0,6 = <strong>42 Puan</strong>
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Diploma Notuna Göre Eklenecek Puanlar
                        </h2>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full border border-gray-200 text-sm">
                                <thead className="bg-gray-100 text-gray-800">
                                    <tr>
                                        <th className="py-2.5 px-4 text-left border">Diploma Notu (100&apos;lük)</th>
                                        <th className="py-2.5 px-4 text-center border">OBP (500&apos;lük)</th>
                                        <th className="py-2.5 px-4 text-center border">Yerleştirme Ek Puanı (×0,6)</th>
                                        <th className="py-2.5 px-4 text-center border">Kırık OBP Ek Puanı (×0,3)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="py-2.5 px-4 border font-medium">60</td>
                                        <td className="py-2.5 px-4 border text-center">300</td>
                                        <td className="py-2.5 px-4 border text-center">36,0 Puan</td>
                                        <td className="py-2.5 px-4 border text-center text-red-600">18,0 Puan</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-2.5 px-4 border font-medium">70</td>
                                        <td className="py-2.5 px-4 border text-center">350</td>
                                        <td className="py-2.5 px-4 border text-center">42,0 Puan</td>
                                        <td className="py-2.5 px-4 border text-center text-red-600">21,0 Puan</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2.5 px-4 border font-medium">80</td>
                                        <td className="py-2.5 px-4 border text-center">400</td>
                                        <td className="py-2.5 px-4 border text-center">48,0 Puan</td>
                                        <td className="py-2.5 px-4 border text-center text-red-600">24,0 Puan</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-2.5 px-4 border font-medium">90</td>
                                        <td className="py-2.5 px-4 border text-center">450</td>
                                        <td className="py-2.5 px-4 border text-center">54,0 Puan</td>
                                        <td className="py-2.5 px-4 border text-center text-red-600">27,0 Puan</td>
                                    </tr>
                                    <tr className="bg-blue-50 font-semibold">
                                        <td className="py-2.5 px-4 border">100</td>
                                        <td className="py-2.5 px-4 border text-center">500</td>
                                        <td className="py-2.5 px-4 border text-center text-blue-800">60,0 Puan</td>
                                        <td className="py-2.5 px-4 border text-center text-red-600">30,0 Puan</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Kırık OBP Nedir ve Hangi Durumlarda Uygulanır?
                        </h2>
                        <p>
                            Bir önceki yıl YKS ile bir yükseköğretim programına (örgün veya açıköğretim, ön lisans veya lisans) merkezi olarak yerleşen adayların OBP katsayısı yarıya iner:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Normal katsayı: <strong>0,12</strong> (diploma notu × 0,6)</li>
                            <li>Kırık OBP katsayısı: <strong>0,06</strong> (diploma notu × 0,3)</li>
                        </ul>
                        <p>
                            Örneğin 90 diploma notuna sahip adayın ek puanı 54 puandan 27 puana düşer. Kayıt yaptırılmasa bile merkezi yerleştirmede kazanmış olmak katsayı düşüşü için yeterlidir.
                        </p>
                        <p>
                            Bu kesinti sadece yerleşilen yılı takip eden ilk sınav dönemi için geçerlidir. İki yıl sonra sınava girildiğinde katsayı tekrar normale döner.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Okul Birinciliği Kontenjanı
                        </h2>
                        <p>
                            Liseden okul birincisi olarak mezun olan adaylar için devlet üniversitelerinde özel kontenjanlar ayrılır. Bu kontenjanlar sadece adayın mezun olduğu yıl geçerlidir; mezuna kalındığı takdirde okul birinciliği hakkı devam etmez.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">OBP ile Yerleştirme Puanınızı Hesaplayın</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Diploma notunuzu ve tahmini netlerinizi girerek yerleştirme puanınızı hesaplayıcı aracımızda test edin.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Hesaplama Aracına Git →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
