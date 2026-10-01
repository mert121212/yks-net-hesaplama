import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'TYT\'de En Çok Çıkan Konular 2027 | Soru Dağılımı ve Öncelikler',
    description: 'TYT Matematik, Türkçe, Fizik, Kimya, Biyoloji ve Sosyal derslerinde her yıl düzenli sorulan konular ve soru dağılımı analizi.',
    keywords: 'tyt kesin çıkan konular, tyt en çok çıkan konular, tyt matematik çıkan konular, tyt türkçe banko konular, tyt 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-kesin-cikan-konular' },
    openGraph: {
        title: 'TYT\'de En Çok Çıkan Konular ve Soru Dağılımı',
        description: 'ÖSYM geçmiş sınav verilerine göre TYT testlerinde her yıl düzenli yer alan temel konu başlıkları.',
        type: 'article',
        publishedTime: '2026-02-11',
        modifiedTime: '2026-02-14',
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
                    dateModified="2026-02-14"
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
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Konu Analizi</span>
                            <time className="text-gray-600" dateTime="2026-02-11">11 Şubat 2026</time>
                            <span className="text-gray-600">• 6 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT&apos;de Her Yıl En Çok Soru Gelen Konular
                        </h1>
                        <p className="text-xl text-gray-600">
                            ÖSYM&apos;nin son yıllardaki soru dağılımları incelendiğinde belirli temel konuların her sınavda istisnasız yer aldığı görülür. Hazırlıkta öncelik verilmesi gereken konu başlıkları.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/tyt-kesin-cikan-konular.jpg"
                        alt="TYT&apos;de Her Yıl En Çok Soru Gelen Konular"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            TYT müfredatı geniş bir kazanım listesine sahip olsa da sınav sorularının büyük kısmı belirli çekirdek konular etrafında toplanır. Bu konuları sağlamlaştırmak temel net seviyesini güvenceye alır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Türkçe: Soruların %75&apos;ini Oluşturan Bölüm
                        </h2>
                        <div className="space-y-3 my-4">
                            <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                                <h4 className="font-bold text-blue-950 text-sm">Paragrafta Anlam ve Ana Düşünce (22-26 Soru)</h4>
                                <p className="text-xs text-blue-900 mt-1">
                                    Ana fikir, yardımcı düşünceler, paragraf tamamlama ve akışı bozan cümle soruları. Süre tutarak düzenli paragraf çözmek bu bölümdeki başarıyı doğrudan etkiler.
                                </p>
                            </div>
                            <div className="bg-emerald-50 p-4 rounded-xl border-l-4 border-emerald-500">
                                <h4 className="font-bold text-emerald-950 text-sm">Sözcük ve Cümlede Anlam (6-8 Soru)</h4>
                                <p className="text-xs text-emerald-900 mt-1">
                                    Altı çizili ifade, boşluk tamamlama ve cümle yorumlama.
                                </p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500">
                                <h4 className="font-bold text-purple-950 text-sm">Yazım Kuralları ve Noktalama (3-4 Soru)</h4>
                                <p className="text-xs text-purple-900 mt-1">
                                    Büyük harflerin kullanımı, birleşik sözcükler ve virgül-noktalı virgül kuralları her yıl mutlaka sorulur.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Temel Matematik: Ağırlıklı Konular
                        </h2>
                        <div className="space-y-3 my-4">
                            <div className="bg-amber-50 p-4 rounded-xl border-l-4 border-amber-500">
                                <h4 className="font-bold text-amber-950 text-sm">Problemler (11-13 Soru)</h4>
                                <p className="text-xs text-amber-900 mt-1">
                                    Sayı, kesir, yaş, yüzde, kar-zarar ve grafik problemleri. Matematik testinin üçte birini oluşturur.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-600">
                                <h4 className="font-bold text-slate-900 text-sm">Temel Kavramlar ve Sayı Basamakları (3-5 Soru)</h4>
                                <p className="text-xs text-slate-700 mt-1">
                                    Tek-çift sayılar, asal sayılar, ardışık sayılar ve basamak çözümleme.
                                </p>
                            </div>
                            <div className="bg-teal-50 p-4 rounded-xl border-l-4 border-teal-500">
                                <h4 className="font-bold text-teal-950 text-sm">Üslü ve Köklü Sayılar (2-4 Soru)</h4>
                                <p className="text-xs text-teal-900 mt-1">
                                    Temel kurallar ve sayı doğrusu üzerinde yaklaşık değer tahmin soruları.
                                </p>
                            </div>
                            <div className="bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-500">
                                <h4 className="font-bold text-indigo-950 text-sm">Fonksiyonlar (1-2 Soru)</h4>
                                <p className="text-xs text-indigo-900 mt-1">
                                    Değer bulma, bileşke ve grafik yorumlama. Aynı zamanda AYT için temel teşkil eder.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Fen ve Sosyalde Düzenli Sorulan Başlıklar
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-sm">
                            <li><strong>Fizik:</strong> Isı ve sıcaklık, hareket ve kuvvet, optik (özellikle kırılma ve aydınlanma), elektrostatik.</li>
                            <li><strong>Kimya:</strong> Kimyasal türler arası etkileşimler, periyodik sistem, karışımlar, asit-baz-tuz.</li>
                            <li><strong>Biyoloji:</strong> Canlıların ortak özellikleri, hücre ve organeller, kalıtım, ekoloji.</li>
                            <li><strong>Coğrafya:</strong> Harita bilgisi, iklim bilgisi, Türkiye&apos;nin yer şekilleri, nüfus ve yerleşme.</li>
                            <li><strong>Tarih:</strong> İlk ve Orta Çağda Türk Dünyası, Osmanlı Devleti kuruluş ve yükselme, Kurtuluş Savaşı ve Atatürk ilkeleri.</li>
                        </ul>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Netlerinizi Test Edin</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Temel konulardan hedeflediğiniz doğru sayılarını girerek TYT puanınızı hesaplayın.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Net Hesaplama Aracına Git →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
