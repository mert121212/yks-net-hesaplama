import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'

export const metadata: Metadata = {
    title: 'YKS\'de 1 Net Kaç Kişi Öne Atar? (Yığılma ve Puan Analizi)',
    description: 'YKS sınavında 1 netin sıralamaya etkisi nedir? Farklı başarı aralıklarında TYT ve AYT netlerinin sıralama değişimi.',
    keywords: '1 net kaç kişi atar, yks 1 netin etkisi, tyt 1 net kaç kişi atar, ayt 1 net kaç kişi atar, yks yığılma',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar' },
    openGraph: {
        title: 'YKS\'de 1 Net Kaç Kişi Öne Atar? (Yığılma ve Puan Analizi)',
        description: 'Özellikle orta başarı dilimlerinde tek bir netin sıralamayı nasıl etkilediği üzerine veriler.',
        type: 'article',
        publishedTime: '2026-02-13',
        modifiedTime: '2026-02-16',
        url: 'https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar',
        images: [
            {
                url: '/images/blog/yks-1-net-kac-kisi-atar.svg',
                width: 1200,
                height: 630,
                alt: 'YKS Net Hesaplama Blog'
            }
        ],
    },
}

export default function YKSBirNetKacKisiAtar() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS'de 1 Net Kaç Kişi Öne Atar? (Yığılma ve Puan Analizi)"
                    description="YKS sınavında 1 netin sıralamaya etkisi nedir? Farklı başarı aralıklarında TYT ve AYT netlerinin sıralama değişimi."
                    datePublished="2026-02-13"
                    dateModified="2026-02-16"
                    url="https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar"
                    keywords={['1 net kaç kişi atar', 'yks 1 netin etkisi', 'tyt 1 net kaç kişi atar', 'ayt 1 net kaç kişi atar', 'yks yığılma']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">1 Net Kaç Kişi Atar?</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Analiz</span>
                            <time className="text-gray-600" dateTime="2026-02-13">13 Şubat 2026</time>
                            <span className="text-gray-600">• 6 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS&apos;de 1 Net Sıralamayı Ne Kadar Değiştirir?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Sınavda yapılan tek bir netin sıralamaya etkisi her aday için aynı değildir. Bulunulan puan aralığına ve test türüne göre bu sayı onlarca kişiden binlerce kişiye kadar değişir.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-1-net-kac-kisi-atar.svg"
                        alt="YKS&apos;de 1 Net Sıralamayı Ne Kadar Değiştirir?"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Adaylar arasında sıkça konuşulan &quot;1 net 5 bin kişi oynatır&quot; ifadesi sadece belirli puan bantları için geçerlidir. İlk 5 binde olan bir adayla 100 binde olan bir adayın 1 netten elde edeceği sıralama kazancı çok farklıdır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Farklı Başarı Dilimlerinde 1 Netin Yaklaşık Karşılığı
                        </h2>

                        <p>
                            ÖSYM&apos;nin geçmiş yıllara ait yığınsal dağılım tabloları incelendiğinde tablonun özeti şöyledir:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-sm text-left border border-gray-200">
                                <thead className="bg-gray-100 text-gray-800">
                                    <tr>
                                        <th className="p-3 border">Sıralama Bandı</th>
                                        <th className="p-3 border text-center">+1 TYT Neti</th>
                                        <th className="p-3 border text-center">+1 AYT Neti</th>
                                        <th className="p-3 border">Açıklama</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="p-3 border font-semibold">İlk 5.000</td>
                                        <td className="p-3 border text-center">40 - 80 kişi</td>
                                        <td className="p-3 border text-center">120 - 250 kişi</td>
                                        <td className="p-3 border text-gray-600">Puan aralığı geniştir, aday sayısı seyrektir.</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="p-3 border font-semibold">20.000 - 50.000</td>
                                        <td className="p-3 border text-center">400 - 800 kişi</td>
                                        <td className="p-3 border text-center">1.200 - 2.500 kişi</td>
                                        <td className="p-3 border text-gray-600">Popüler lisans programlarının yoğun olduğu bölge.</td>
                                    </tr>
                                    <tr className="bg-amber-50">
                                        <td className="p-3 border font-semibold">60.000 - 120.000</td>
                                        <td className="p-3 border text-center font-bold">1.500 - 2.800 kişi</td>
                                        <td className="p-3 border text-center font-bold">3.500 - 6.200 kişi</td>
                                        <td className="p-3 border text-amber-900">En yoğun yığılma bölgesi. Puanlar birbirine çok yakındır.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border font-semibold">150.000 - 300.000</td>
                                        <td className="p-3 border text-center">2.000 - 4.000 kişi</td>
                                        <td className="p-3 border text-center">5.000 - 8.500 kişi</td>
                                        <td className="p-3 border text-gray-600">Aday sayısı çok fazladır.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <QuickNetSimulator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            AYT Neti Neden TYT&apos;den Daha Çok Etki Eder?
                        </h2>

                        <p>
                            Lisans programlarına yerleştirme yapılırken hesaplanan YKS puanında AYT&apos;nin ağırlığı %60, TYT&apos;nin ağırlığı ise %40&apos;tır.
                        </p>

                        <p>
                            Soru sayıları karşılaştırıldığında fark daha da belirginleşir: TYT&apos;de 120 soru varken AYT&apos;de toplam 80 soru çözülür. Az soru sayısı ve yüksek katsayı birleştiğinde, 1 AYT netinin puan etkisi 1 TYT netine göre yaklaşık 2 kat daha yüksektir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Zor Soru Daha Çok Puan Getirir mi?
                        </h2>

                        <p>
                            ÖSYM sisteminde soru bazlı standart sapma uygulanmaz. Aynı test içindeki tüm soruların katsayısı ve ham puan değeri eşittir.
                        </p>

                        <p>
                            Örneğin TYT Matematik testindeki en zor soru ile ilk sayfadaki basit işlem sorusu adaya aynı net katkısını sağlar. Standart sapma soru bazında değil, testin Türkiye genelindeki ortalaması üzerinden hesaplanır.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Kendi Netlerinizi Hesaplayın</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Hesaplama aracımızda farklı TYT ve AYT net kombinasyonlarını deneyerek tahmini yerleştirme puanınızı görebilirsiniz.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Net ve Puan Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
