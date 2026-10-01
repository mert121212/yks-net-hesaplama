import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'AYT Puan Hesaplama 2027 | SAY, EA, SÖZ Katsayıları ve Ağırlıklar',
    description: 'AYT puan hesaplama yöntemi: SAY, EA ve SÖZ puan türlerinde test ağırlıkları, 1 AYT netinin puan değeri ve yerleştirmeye etkisi.',
    keywords: 'ayt puan hesaplama, ayt katsayıları, say katsayıları, ea katsayıları, söz katsayıları, yks yerleştirme puanı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/ayt-puan-hesaplama' },
    openGraph: {
        title: 'AYT Puan Hesaplama 2027 | SAY, EA, SÖZ Katsayıları ve Ağırlıklar',
        description: 'AYT netlerinin Sayısal, Eşit Ağırlık ve Sözel puanlarına etkisi ve test katsayıları.',
        type: 'article',
        publishedTime: '2026-02-09',
        modifiedTime: '2026-02-12',
        url: 'https://yksnethesapla.com/blog/ayt-puan-hesaplama',
        images: [
            {
                url: '/images/blog/ayt-puan-hesaplama.jpg',
                width: 1200,
                height: 630,
                alt: 'AYT Puan Hesaplama ve Katsayılar'
            }
        ],
    },
}

export default function AYTPuanHesaplama() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="AYT Puan Hesaplama 2027 | SAY, EA, SÖZ Katsayıları ve Ağırlıklar" 
                    description="AYT puan hesaplama yöntemi: SAY, EA ve SÖZ puan türlerinde test ağırlıkları, 1 AYT netinin puan değeri ve yerleştirmeye etkisi."
                    datePublished="2026-02-09"
                    dateModified="2026-02-12"
                    url="https://yksnethesapla.com/blog/ayt-puan-hesaplama"
                    keywords={['ayt puan hesaplama', 'ayt katsayıları', 'say katsayıları', 'ea katsayıları', 'söz katsayıları', 'yks yerleştirme puanı']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">AYT Puan Hesaplama</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Katsayılar</span>
                            <time className="text-gray-600" dateTime="2026-02-09">9 Şubat 2026</time>
                            <span className="text-gray-600">• 6 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            AYT Puan Hesaplama: Test Katsayıları ve Ağırlıklar
                        </h1>
                        <p className="text-xl text-gray-600">
                            4 yıllık lisans programlarına girişte genel yerleştirme puanının %60&apos;ı AYT netlerinden gelir. Farklı puan türlerinde testlerin ağırlıkları şunlardır.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/ayt-puan-hesaplama.jpg"
                        alt="AYT Puan Hesaplama: Test Katsayıları ve Ağırlıklar"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Lisans yerleştirmesinde kullanılan SAY, EA ve SÖZ puan türlerinin her birinde TYT&apos;nin katkısı %40, AYT&apos;nin katkısı ise %60&apos;tır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT ve AYT Netlerinin Puan Değeri Karşılaştırması
                        </h2>
                        <p>
                            Soru sayıları ve test ağırlıkları dikkate alındığında 1 AYT netinin getirdiği puan katkısı yaklaşık 3,00 puan civarındadır. TYT&apos;deki 1 net ise ortalama 1,32 - 1,35 puan kazandırır.
                        </p>
                        <p>
                            Bu nedenle AYT&apos;de yapılan her bir net artışı, yerleştirme puanını ve sıralamayı TYT&apos;ye oranla iki katından daha fazla etkiler.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Puan Türlerine Göre AYT Test Dağılımları
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">1. Sayısal (SAY) Puan Türü</h3>
                        <p>
                            Sayısal adayı toplam 80 soru çözer:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>AYT Matematik (40 Soru):</strong> Sayısal puanının %30&apos;unu oluşturur. (~3,00 puan/net)</li>
                            <li><strong>AYT Fizik (14 Soru):</strong> Sayısal puanının %10&apos;unu oluşturur. (~2,85 puan/net)</li>
                            <li><strong>AYT Kimya (13 Soru):</strong> Sayısal puanının %10&apos;unu oluşturur. (~3,05 puan/net)</li>
                            <li><strong>AYT Biyoloji (13 Soru):</strong> Sayısal puanının %10&apos;unu oluşturur. (~3,00 puan/net)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2. Eşit Ağırlık (EA) Puan Türü</h3>
                        <p>
                            Eşit Ağırlık adayı 40 Matematik ve 40 Edebiyat-Sosyal-1 sorusu yanıtlar:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>AYT Matematik (40 Soru):</strong> EA puanının %30&apos;unu oluşturur. (~3,00 puan/net)</li>
                            <li><strong>Türk Dili ve Edebiyatı (24 Soru):</strong> EA puanının %18&apos;ini oluşturur. (~3,00 puan/net)</li>
                            <li><strong>Tarih-1 (10 Soru):</strong> EA puanının %7&apos;sini oluşturur. (~2,80 puan/net)</li>
                            <li><strong>Coğrafya-1 (6 Soru):</strong> EA puanının %5&apos;ini oluşturur. (~3,30 puan/net)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3. Sözel (SÖZ) Puan Türü</h3>
                        <p>
                            Sözel adayı Edebiyat-Sosyal-1 (40 soru) ve Sosyal-2 (40 soru) testlerini çözer:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Edebiyat-Sosyal-1 (40 Soru):</strong> Sözel puanının %30&apos;u.</li>
                            <li><strong>Sosyal-2 (40 Soru - Tarih-2, Coğrafya-2, Felsefe Grubu, Din):</strong> Sözel puanının %30&apos;u.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Birden Fazla Puan Türü Hesaplatma
                        </h2>
                        <p>
                            AYT tek bir kitapçık olarak verilir ve toplam 180 dakika sürer. Adaylar istedikleri takdirde kendi alanlarının dışındaki testleri de çözebilirler.
                        </p>
                        <p>
                            Örneğin bir Eşit Ağırlık öğrencisi süresi kalırsa Sosyal-2 testini de çözerek Sözel puanının da hesaplanmasını sağlayabilir. Çözülen ekstra testler adayın asıl alan puanını hiçbir şekilde düşürmez.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">AYT Netlerinizle Puanınızı Hesaplayın</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                TYT ve AYT netlerinizi girerek SAY, EA ve SÖZ puanlarınızı ve tahmini sıralamalarınızı tek ekranda görün.
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
