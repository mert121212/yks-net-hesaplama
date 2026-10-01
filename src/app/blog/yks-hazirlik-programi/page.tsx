import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Hazırlık Programı 2027: Günlük ve Haftalık Çalışma Planı',
    description: 'YKS hazırlığında görev odaklı çalışma, blok süre yönetimi, TYT-AYT dengesi ve haftalık ders programı oluşturma rehberi.',
    keywords: 'yks hazırlık programı, yks ders çalışma programı, verimli ders çalışma, yks çalışma planı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-hazirlik-programi' },
    openGraph: {
        title: 'YKS Hazırlık Programı 2027: Günlük ve Haftalık Çalışma Planı',
        description: 'Sürdürülebilir YKS hazırlık programı oluşturma adımları ve çalışma blokları.',
        type: 'article',
        publishedTime: '2026-02-20',
        modifiedTime: '2026-02-23',
        url: 'https://yksnethesapla.com/blog/yks-hazirlik-programi',
        images: [
            {
                url: '/images/blog/yks-hazirlik-programi.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Hazırlık Programı'
            }
        ],
    },
}

export default function YKSHazirlikProgrami() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS Hazırlık Programı 2027: Günlük ve Haftalık Çalışma Planı" 
                    description="YKS hazırlığında görev odaklı çalışma, blok süre yönetimi, TYT-AYT dengesi ve haftalık ders programı oluşturma rehberi."
                    datePublished="2026-02-20"
                    dateModified="2026-02-23"
                    url="https://yksnethesapla.com/blog/yks-hazirlik-programi"
                    keywords={['yks hazırlık programı', 'yks ders çalışma programı', 'verimli ders çalışma', 'yks çalışma planı']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Hazırlık Programı</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-20">20 Şubat 2026</time>
                            <span className="text-gray-600">• 7 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS Hazırlık Programı: Günlük ve Haftalık Çalışma Düzeni
                        </h1>
                        <p className="text-xl text-gray-600">
                            Saat doldurmak yerine net kazandıran görev odaklı çalışma mantığı, odak blokları ve sürdürülebilir bir haftalık planın temel ilkeleri.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-hazirlik-programi.jpg"
                        alt="YKS Hazırlık Programı: Günlük ve Haftalık Çalışma Düzeni"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS sürecinde öğrencilerin yaptığı en yaygın hata, duvara sabah 08:00 - akşam 22:00 arası robotik saat çizelgeleri asmak. İkinci gün ilk aksilikte o çizelge bozulur, üçüncü gün suçluluk başlar ve dördüncü gün plan tamamen çöpe gider. Masada saat doldurmak yerine &quot;görev kapatma&quot; mantığına geçtiğin an çalışma disiplinin kalıcı hale gelir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Saat Odaklı Değil, Görev Odaklı Planlama
                        </h2>
                        <p>
                            Günde 8 saat sandalyede oturup hayal kurmak kimseye derece kazandırmaz. Önemli olan masadan kalktığında hangi somut eksikleri kapattığındır. Sabah otururken önüne şu tarz net hedefler koymalısın:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                            <li>20 paragraf ve 15 problem sorusunu süre tutarak çözüp bitirmek.</li>
                            <li>AYT Matematikte hedeflenen bir alt konuyu tarayıp 40 soruyla pekiştirmek.</li>
                            <li>Haftalık branş denemesini çözüp yanlış soruların çözüm videolarını izlemek.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. 50+10 Odak Blokları
                        </h2>
                        <p>
                            TYT 165 dakika, AYT 180 dakika sürüyor. Sınavda aralıksız zihin kondisyonu gerektiği için 25 dakikalık kısa pomodorolar YKS pratiğine bazen hafif kalır. 50 dakika telefon ve bildirimlerden tamamen izole odaklanma, ardından 10 dakika ekrandan uzak temiz bir dinlenme beynini sınava hazırlar.
                        </p>

                        <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 my-6">
                            <h3 className="text-base font-bold text-gray-900 mb-3">
                                Örnek Günlük Çalışma Blokları
                            </h3>
                            <div className="space-y-2 text-xs font-mono text-gray-700">
                                <div className="bg-white p-3 rounded-lg border flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                                    <span className="font-bold text-blue-700">Blok 1 (Sabah)</span>
                                    <span>20 Paragraf + 15 Problem + Kısa Deneme</span>
                                    <span className="text-gray-500 font-sans">Kondisyon</span>
                                </div>
                                <div className="bg-white p-3 rounded-lg border flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                                    <span className="font-bold text-purple-700">Blok 2 (Öğle)</span>
                                    <span>AYT Ana Konu Çalışması</span>
                                    <span className="text-gray-500 font-sans">Ağırlıklı Ders</span>
                                </div>
                                <div className="bg-white p-3 rounded-lg border flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                                    <span className="font-bold text-emerald-700">Blok 3 (İkindi)</span>
                                    <span>Konu Pekiştirme ve Soru Bankası Çözümleri</span>
                                    <span className="text-gray-500 font-sans">Pratik</span>
                                </div>
                                <div className="bg-white p-3 rounded-lg border flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                                    <span className="font-bold text-amber-700">Blok 4 (Akşam)</span>
                                    <span>Hatalı Soruların Tekrarı ve Eksik Kapatma</span>
                                    <span className="text-gray-500 font-sans">Analiz</span>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. Deneme Analizini Asla Atlama
                        </h2>
                        <p>
                            Denemeyi çözüp kenara fırlatan bir adayın netleri yerinde saymaya mahkumdur. Asıl gelişim deneme bittiğinde başlar. Boş bıraktığın ve yanlış işaretlediğin her soruyu tek tek inceleyip: &quot;Ben bu soruyu formülü unuttuğum için mi kaçırdım, yoksa işlem hatası mı yaptım?&quot; ayrımını yapmalısın. Yanlış soruları kestiğin veya telefonla fotoğrafladığın bir soru havuzu oluşturmak sana haftalar kazandırır.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Netlerinizi ve Puanınızı Hesaplayın</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Haftalık deneme netlerinizle tahmini YKS puanınızı ve başarı sıranızı aracımızda takip edin.
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
