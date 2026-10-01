import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'AYT Edebiyat Konuları ve Soru Dağılımı 2027 | Çalışma Rehberi',
    description: 'AYT Edebiyat sınavında 24 sorunun konu dağılımı: Şiir bilgisi, edebi sanatlar, Divan edebiyatı, Tanzimat ve Cumhuriyet dönemi analizi.',
    keywords: 'yks edebiyat konuları, ayt edebiyat soru dağılımı, edebiyat nasıl çalışılır, divan edebiyatı, cumhuriyet edebiyatı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari' },
    openGraph: {
        title: 'AYT Edebiyat Konuları ve Soru Dağılımı 2027',
        description: 'AYT Edebiyat testinde soru dağılımı, dönemlerin ağırlığı ve çalışma yöntemleri.',
        type: 'article',
        publishedTime: '2026-02-17',
        modifiedTime: '2026-02-20',
        url: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari',
        images: [
            {
                url: '/images/blog/yks-edebiyat-konulari.svg',
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
                    title="AYT Edebiyat Konuları ve Soru Dağılımı 2027 | Çalışma Rehberi" 
                    description="AYT Edebiyat sınavında 24 sorunun konu dağılımı: Şiir bilgisi, edebi sanatlar, Divan edebiyatı, Tanzimat ve Cumhuriyet dönemi analizi."
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
                        <span className="text-gray-900">AYT Edebiyat Konuları</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AYT</span>
                            <time className="text-gray-600" dateTime="2026-02-17">17 Şubat 2026</time>
                            <span className="text-gray-600">• 7 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            AYT Edebiyat Konuları ve Soru Dağılımı (2027)
                        </h1>
                        <p className="text-xl text-gray-600">
                            Eşit Ağırlık ve Sözel adayları için AYT Türk Dili ve Edebiyatı testindeki 24 sorunun dağılımı, dönemlerin ağırlığı ve çalışma stratejisi.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-edebiyat-konulari.svg"
                        alt="AYT Edebiyat Konuları ve Soru Dağılımı (2027)"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            AYT Türk Dili ve Edebiyatı - Sosyal-1 testi içindeki 24 edebiyat sorusu, yalnızca yazar-eser ezberini değil; metin tahlili, şiir bilgisi ve edebi akımları da kapsar.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            24 Sorunun Konu Bazında Dağılımı
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
                                <h3 className="font-bold text-purple-950 text-lg mb-1">1. Paragraf ve Anlam Soruları (5 - 6 Soru)</h3>
                                <p className="text-sm text-purple-900 leading-relaxed">
                                    Testin başındaki ilk 5-6 soru doğrudan okuduğunu anlama, sözcükte ve cümlede anlam sorularından oluşur. Bu sorular TYT Türkçe paragraf becerisiyle çözülür.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-950 text-lg mb-1">2. Şiir Bilgisi ve Edebi Sanatlar (3 - 4 Soru)</h3>
                                <p className="text-sm text-amber-900 leading-relaxed">
                                    Nazım birimi, kafiye ve redif, ölçü, teşbih, istiare, tenasüp, tezat gibi söz sanatları. Kuralları düzenli öğrenildiğinde fire vermeden çözülebilen bir alandır.
                                </p>
                            </div>

                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">3. İslamiyet Öncesi, Halk ve Divan Edebiyatı (5 - 6 Soru)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Koşuk, sagu, destanlar; Halk edebiyatında aşık ve tekke geleneği; Divan edebiyatında gazel, kaside, mesnevi ve Fuzuli, Baki, Nedim, Şeyh Galip gibi ana şairler.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">4. Tanzimat, Servet-i Fünun, Milli Edebiyat ve Cumhuriyet (7 - 9 Soru)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    Dönemlerin temel anlayışları, roman karakterleri, edebi topluluklar (Beş Hececiler, Yedi Meşaleciler, Garip, İkinci Yeni, Toplumcu Gerçekçiler) ve önemli eserler.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Verimli Çalışma Yöntemleri
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-sm">
                            <li><strong>Eser-özet kartları:</strong> Önemli romanların ana karakterlerini ve temel çatışmalarını not etmek sınavdaki olay örgüsü sorularını kolaylaştırır.</li>
                            <li><strong>Dönem mantığını kavramak:</strong> Bir yazarın hangi dönemde ve hangi toplulukta olduğunu bilmek, soru kökündeki ipuçlarından doğru şıkkı bulmayı sağlar.</li>
                            <li><strong>Düzenli branş denemesi:</strong> Bilgilerin unutulmasını engellemek için haftada 1-2 edebiyat branş denemesi çözülmelidir.</li>
                        </ul>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Eşit Ağırlık ve Sözel Puanınızı Hesaplayın</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Edebiyat doğru ve yanlış sayılarınızı girerek AYT EA ve SÖZ puanlarınızı anında hesaplayın.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Puan Hesaplama Aracına Git →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
