import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'TYT\'de En Çok Çıkan Konular 2027: Banko Net Getiren Konu Rehberi',
    description: 'ÖSYM\'nin her sene istisnasız sorduğu garantili konular: Paragraf, problemler, optik, kalıtım ve harita bilgisi ile net kurtarma stratejisi.',
    keywords: 'tyt kesin çıkan konular, tyt en çok çıkan konular, tyt matematik çıkan konular, tyt türkçe banko konular, tyt 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-kesin-cikan-konular' },
    openGraph: {
        title: 'TYT\'de En Çok Çıkan Konular ve Soru Dağılımı',
        description: 'ÖSYM geçmiş sınav analizleri: Macera aramadan ilk 60-70 neti cebe koyabileceğin banko soru kalıpları.',
        type: 'article',
        publishedTime: '2026-02-11',
        modifiedTime: '2026-03-01',
        url: 'https://yksnethesapla.com/blog/tyt-kesin-cikan-konular',
        images: [
            {
                url: '/images/blog/tyt-kesin-cikan-konular.jpg',
                width: 1200,
                height: 630,
                alt: 'TYT Kesin Çıkan Konular 2027'
            }
        ],
    },
}

export default function TYTKesinCikanKonular() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="TYT'de En Çok Çıkan Konular 2027 | Soru Dağılımı ve Öncelikler" 
                    description="TYT Matematik, Türkçe, Fizik, Kimya, Biyoloji ve Sosyal derslerinde her yıl düzenli sorulan konular ve soru dağılımı analizi."
                    datePublished="2026-02-11"
                    dateModified="2026-03-01"
                    url="https://yksnethesapla.com/blog/tyt-kesin-cikan-konular"
                    keywords={['tyt kesin çıkan konular', 'tyt en çok çıkan konular', 'tyt matematik çıkan konular', 'tyt türkçe banko konular', 'tyt 2027']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Kesin Çıkan Konular</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Nokta Atışı</span>
                            <time className="text-gray-600" dateTime="2026-02-11">11 Şubat 2026</time>
                            <span className="text-gray-600">• 7 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT&apos;de Her Yıl İstisnasız Çıkan Banko Konular
                        </h1>
                        <p className="text-xl text-gray-600">
                            Sınava hazırlanırken en büyük yanılgı bütün müfredatı aynı iştahla ezberlemeye çalışmaktır. Oysa ÖSYM&apos;nin 120 sorusunun en az 70&apos;i her sene aynı kapıdan çıkar.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/tyt-kesin-cikan-konular.jpg"
                        alt="TYT&apos;de Her Yıl En Çok Soru Gelen Konular"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Masanın üstünde 15 farklı kalın konu anlatım kitabı, binlerce sayfa formül... İnsanın baktıkça içi daralıyor, değil mi? Ama sana harika bir haberim var: <strong>ÖSYM soru komisyonu her sene uzaydan soru üretmiyor.</strong>
                        </p>

                        <p>
                            Son 10 yılın çıkmış sorularını masaya yatırdığında görüyorsun ki adamların vazgeçemediği saplantılı konuları var. Zamanın darsa veya netlerini hızlıca 60-70 bandına taşımak istiyorsan, macera aramayı bırakıp bu garanti kalelere odaklanacaksın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. TYT Türkçe: Tek Başına 30+ Netin Formülü
                        </h2>
                        <div className="space-y-3 my-4">
                            <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-950 text-base">Paragrafta Anlam ve Ana Düşünce (24-26 Soru)</h3>
                                <p className="text-sm text-blue-900 mt-1">
                                    Sınavın neredeyse dörtte biri! &ldquo;Hangi cümle akışı bozmaktadır?&rdquo;, &ldquo;Bu parçadan hangisine ulaşılamaz?&rdquo;. Her sabah 20 paragraf çözmeyen bir adayın sınav sabahı Türkçede 30 net görmesi mucizedir.
                                </p>
                            </div>
                            <div className="bg-emerald-50 p-5 rounded-xl border-l-4 border-emerald-500">
                                <h3 className="font-bold text-emerald-950 text-base">Yazım Kuralları ve Noktalama (4 Soru)</h3>
                                <p className="text-sm text-emerald-900 mt-1">
                                    Büyük harflerin yazımı, de/da ve ki&apos;nin yazımı, virgülün kullanım yerleri. 2 günlük odaklanmış çalışmayla cebine 4 net koyabileceğin en ucuz net kaynağıdır.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. TYT Matematik: &ldquo;Ben Bu 20 Neti Alırım&rdquo; Diyenlere
                        </h2>
                        <div className="space-y-3 my-4">
                            <div className="bg-amber-50 p-5 rounded-xl border-l-4 border-amber-500">
                                <h3 className="font-bold text-amber-950 text-base">Problemler (11 - 13 Soru)</h3>
                                <p className="text-sm text-amber-900 mt-1">
                                    Sayı, kesir, yüzde ve grafik problemleri. Formül ezberi değil; Türkçeyi cebir diline çevirme becerisidir. Günde 12 problem çözmeyi alışkanlık haline getiren öğrenci TYT matematiğin yarısını halleder.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-xl border-l-4 border-slate-600">
                                <h3 className="font-bold text-slate-900 text-base">Temel Kavramlar & Sayı Basamakları (4 - 5 Soru)</h3>
                                <p className="text-sm text-slate-800 mt-1">
                                    Tek-çift sayılar, ardışık sayılar, kutucuklara 1&apos;den 9&apos;a kadar sayı yerleştirme bulmacaları. Her sınavın ilk 5 sorusu kesinlikle buradan gelir.
                                </p>
                            </div>
                            <div className="bg-teal-50 p-5 rounded-xl border-l-4 border-teal-500">
                                <h3 className="font-bold text-teal-950 text-base">Üslü-Köklü & Mutlak Değer (3 - 4 Soru)</h3>
                                <p className="text-sm text-teal-900 mt-1">
                                    Genellikle cetvel veya termometre üzerinde sayı doğrusu aralığı kestirme soruları şeklinde gelir. Kaçırılmayacak kadar kurallıdır.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. Fen ve Sosyalde &ldquo;Bedava Net&rdquo; Depoları
                        </h2>
                        <p>
                            Eşit Ağırlıkçıların ve Sayısalcıların denemelerde fark attığı asıl yer burasıdır. Şu 5 konuyu bilen biri minimum 12-14 neti 15 dakikada cebine atar:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-800">
                            <li><strong>Fizik (Optik & Isı-Sıcaklık):</strong> Kırılma ve gölge ile hal değişimi her yıl bankodur. 2 net garanti.</li>
                            <li><strong>Kimya (Periyodik Tablo & Kimyasal Türler):</strong> İyonik-kovalent bağlar, elektronegatiflik. 2 soru mutlaka gelir.</li>
                            <li><strong>Biyoloji (Hücre & Kalıtım):</strong> Mendel genetiği, soyağacı analizi ve mitokondri/kloroplast farkları. Her sınavda vardır.</li>
                            <li><strong>Coğrafya (Harita Bilgisi & İklim):</strong> Türkiye haritasında dağlar, boğazlar, rüzgarlar ve dünya iklim tipleri.</li>
                            <li><strong>Felsefe & Din (Kavramlar):</strong> Epistemoloji, ontoloji akımları ve temel İslami kavramlar. Paragraf mantığıyla rahatça çözülür.</li>
                        </ul>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Bu Konuları Halletsen Kaç Puan Alırsın?</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Yukarıdaki banko konulardan çıkaracağın 65-70 netin seni Türkiye genelinde kaç bininci yapacağını hemen hesapla.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Puan ve Sıralama Hesaplayıcıyı Aç →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
