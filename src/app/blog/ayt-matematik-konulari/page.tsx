import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'AYT Matematik Konuları ve Soru Dağılımı 2027 | Çalışma Planı',
    description: 'AYT Matematik konuları, LTİ (Limit, Türev, İntegral) ve Trigonometri soru dağılımı, SAY ve EA puanına etkisi ve çalışma sırası.',
    keywords: 'ayt matematik konuları, ayt matematik soru dağılımı, lti nasıl çalışılır, trigonometri, ayt matematik 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/ayt-matematik-konulari' },
    openGraph: {
        title: 'AYT Matematik Konuları ve Soru Dağılımı 2027',
        description: 'AYT Matematik konuları, soru sayıları ve çalışma sıralaması analizi.',
        type: 'article',
        publishedTime: '2026-02-18',
        modifiedTime: '2026-02-21',
        url: 'https://yksnethesapla.com/blog/ayt-matematik-konulari',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'AYT Matematik Konuları ve Stratejisi'
            }
        ],
    },
}

export default function AYTMatematikKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="AYT Matematik Konuları ve Soru Dağılımı 2027 | Çalışma Planı" 
                    description="AYT Matematik konuları, LTİ (Limit, Türev, İntegral) ve Trigonometri soru dağılımı, SAY ve EA puanına etkisi ve çalışma sırası."
                    datePublished="2026-02-18"
                    dateModified="2026-02-21"
                    url="https://yksnethesapla.com/blog/ayt-matematik-konulari"
                    keywords={['ayt matematik konuları', 'ayt matematik soru dağılımı', 'lti nasıl çalışılır', 'trigonometri', 'ayt matematik 2027']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">AYT Matematik</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AYT</span>
                            <time className="text-gray-600" dateTime="2026-02-18">18 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            AYT Matematik Konuları, Soru Dağılımı ve Çalışma Sırası
                        </h1>
                        <p className="text-xl text-gray-600">
                            SAY ve EA puan türlerinde belirleyici olan AYT Matematik testindeki 40 sorunun konu dağılımı, Trigonometri ve LTİ bloklarına yaklaşım.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            AYT Matematik testi toplam 40 sorudan oluşur. Yaklaşık 30-31 soru ileri matematik konularından, 9-10 soru ise analitik geometri ve katı cisimler dahil geometri alanından gelir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Konu Dağılımı ve Soru Sayıları
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">1. Fonksiyonlar ve Parabol (6 - 8 Soru)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Fonksiyon grafikleri, öteleme, bileşke ve ikinci dereceden denklemler/parabol. Bu bölüm sonraki ileri konuların tamamında altyapı görevi görür.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">2. Logaritma ve Diziler (4 - 5 Soru)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    Logaritma özellikleri, taban değiştirme, aritmetik ve geometrik dizilerin toplam formülleri. Kuralları net, soru tipleri genellikle kararlıdır.
                                </p>
                            </div>

                            <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
                                <h3 className="font-bold text-purple-950 text-lg mb-1">3. Trigonometri ve LTİ (13 - 16 Soru)</h3>
                                <p className="text-sm text-purple-900 leading-relaxed">
                                    Trigonometri (3-4 soru), Limit ve Süreklilik (2 soru), Türev (4 soru), İntegral (4 soru). Sınavın en yüksek ağırlıklı bölümüdür.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-950 text-lg mb-1">4. AYT Geometri ve Analitik (9 - 10 Soru)</h3>
                                <p className="text-sm text-amber-900 leading-relaxed">
                                    Noktanın ve doğrunun analitiği, çemberin analitiği, katı cisimler ve trigonometrik geometri uygulamaları.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            LTİ Bloğunda Doğru Çalışma Sırası
                        </h2>
                        <p>
                            Limit, Türev ve İntegral konuları birbirine zincirleme bağlıdır. Aşağıdaki sıra takip edildiğinde kavramlar daha sağlam oturur:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>Fonksiyon Grafikleri ve Trigonometri:</strong> Eğim, teğet ve açı dönüşümlerini anlamak için şarttır.</li>
                            <li><strong>Limit ve Süreklilik:</strong> Bir fonksiyonun bir noktaya yaklaşırken aldığı değer ve süreklilik koşulları.</li>
                            <li><strong>Türev ve Geometrik Yorum:</strong> Türev alma kuralları, teğetin eğimi ve artan-azalan aralıklar/ekstremum noktaları.</li>
                            <li><strong>İntegral ve Alan Hesabı:</strong> Belirsiz integral, değişken değiştirme ve eğri altında kalan alan.</li>
                        </ol>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Branş Denemelerine Geçiş
                        </h2>
                        <p>
                            Konuların yaklaşık %70-80&apos;i tamamlandığında haftada en az bir AYT Matematik branş denemesi çözülmeye başlanmalıdır. Deneme sonrası yapılamayan soruların ilgili kazanımları tespit edilip nokta atışı soru çözümüyle pekiştirilmelidir.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">AYT Netlerinizin Sıralama Etkisini Görün</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Matematik ve fen/edebiyat netlerinizi hesaplama aracına girerek tahmini sıralamanızı inceleyin.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Sıralama Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
