import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Hazırlık Programı 2027: Patlamayan Günlük ve Haftalık Çalışma Düzeni',
    description: 'Duvara saat çizelgesi asıp 3. gün pes edenlere gerçekçi YKS çalışma planı: Görev odaklı sistem, 50+10 odak blokları ve vicdan azabından kurtuluş.',
    keywords: 'yks hazırlık programı, yks ders çalışma programı, verimli ders çalışma, yks çalışma planı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-hazirlik-programi' },
    openGraph: {
        title: 'YKS Hazırlık Programı 2027: Günlük ve Haftalık Çalışma Planı',
        description: 'Robotik saat çizelgelerine son: Gerçekten net kazandıran görev odaklı YKS hazırlık rehberi.',
        type: 'article',
        publishedTime: '2026-02-20',
        modifiedTime: '2026-03-01',
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
                    dateModified="2026-03-01"
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
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Koçluk Masası</span>
                            <time className="text-gray-600" dateTime="2026-02-20">20 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS Ders Çalışma Programı: 3. Gün Çöpe Gitmeyen Düzen
                        </h1>
                        <p className="text-xl text-gray-600">
                            Duvara renkli kalemlerle <em>&ldquo;07:00 Uyanış - 07:30 Matematik - 23:00 Uykusu&rdquo;</em> yazıp ertesi gün 09:30&apos;da uyanınca bütün morali çöken o öğrenciyi çok iyi tanıyoruz. Çünkü o sensin.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-hazirlik-programi.jpg"
                        alt="YKS Hazırlık Programı: Günlük ve Haftalık Çalışma Düzeni"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Gel seninle açık konuşalım: <strong>İnsan bir robot değildir.</strong> Her sabah aynı saatte aynı motivasyonla uyanamazsın. Canının ders istemediği, kafanın almadığı, kendini bomboş hissettiğin günler olacak.
                        </p>

                        <p>
                            Eğer programını saate bağlarsan; sabah programından sapan 40 dakikalık bir gecikme tüm gününü vicdan azabıyla zehirler, &ldquo;Bugün zaten battı, pazartesi başlarım&rdquo; der ve o haftayı çöpe atarsın. Bu kısırdöngüyü kırmanın tek yolu var: <strong>Saat odaklı değil, görev odaklı çalışmak.</strong>
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Sandalyede Saat Doldurmayı Bırak, Görev Kapat!
                        </h2>
                        <p>
                            Günde 9 saat masada oturup 3 saati Instagram&apos;da, 2 saati duvara boş boş bakarak geçiren biri çalışmış sayılmaz; sadece kendini yorar. Sabah masanın başına geçtiğinde bir kağıda tam 3 veya 4 tane somut görev yazacaksın:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-800">
                            <li><strong>Görev 1:</strong> 20 Paragraf + 12 Problem (Süre tutarak, mola vermeden).</li>
                            <li><strong>Görev 2:</strong> AYT Matematikte Parabol konusunun konu videosu + 35 pekiştirme sorusu.</li>
                            <li><strong>Görev 3:</strong> Kimyada Gazlar ünitesinden çözemediğim 15 sorunun video analizini izleyip kendim tekrar çözmek.</li>
                        </ul>
                        <p>
                            Bu 3 görevi ister sabah 11&apos;de bitir ister akşam 8&apos;de bitir. Görevler bitti mi? Bitti. Kağıda kocaman bir çizik at ve gönül rahatlığıyla kafanı dinle. Vicdan azabını öldüren tek şey tamamlanmış görevdir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. 50 + 10 Blok Düzeni: Beyin Kasını Eğit
                        </h2>
                        <p>
                            İnternetteki 25 dakikalık popüler pomodorolar YKS için çok hafiftir. Çünkü TYT 165 dakika, AYT tam 180 dakikadır. Sınav salonunda 25 dakika sonra &ldquo;hocam bana bir 5 dakika mola verin&rdquo; diyemezsin.
                        </p>
                        <p>
                            Masaya oturduğunda telefonu diğer odaya bırak. Kronometreyi <strong>50 dakikaya</strong> kur. Masadan su içmek için bile kalkma. 50 dakika boyunca sadece soru ve sen. Süre dolunca kalk, 10 dakika balkona çık, nefes al, ekrana bakma. Günde böyle 5-6 blok tamamladığında zaten 5 saat safi odaklanmış çalışma elde edersin ki bu da Türkiye derecesi için fazlasıyla yeterlidir.
                        </p>

                        <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 my-6">
                            <h3 className="text-base font-bold text-gray-900 mb-3">
                                İdeal Günün 4 Odak Bloku
                            </h3>
                            <div className="space-y-2 text-xs font-mono text-gray-700">
                                <div className="bg-white p-3 rounded-lg border flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                                    <span className="font-bold text-blue-700">Blok 1 (Kondisyon)</span>
                                    <span>20 Paragraf + 12 Problem + Süreli Çözüm</span>
                                    <span className="text-gray-500 font-sans">Beyin uyanışı</span>
                                </div>
                                <div className="bg-white p-3 rounded-lg border flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                                    <span className="font-bold text-purple-700">Blok 2 (Ağır Toplar)</span>
                                    <span>AYT Matematik / Fen / Edebiyat Ana Konusu</span>
                                    <span className="text-gray-500 font-sans">En verimli saat</span>
                                </div>
                                <div className="bg-white p-3 rounded-lg border flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                                    <span className="font-bold text-emerald-700">Blok 3 (Soru Taraması)</span>
                                    <span>Konu Kavrama ve Soru Bankası Testleri</span>
                                    <span className="text-gray-500 font-sans">Pratik</span>
                                </div>
                                <div className="bg-white p-3 rounded-lg border flex flex-col sm:flex-row justify-between sm:items-center gap-1">
                                    <span className="font-bold text-amber-700">Blok 4 (Kapatma)</span>
                                    <span>Gün boyu yapamadığın soruların analizi</span>
                                    <span className="text-gray-500 font-sans">Eksik kapatma</span>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Pazar Günlerini &ldquo;Yenilenme&rdquo; Günü İlan Et
                        </h2>
                        <p>
                            Haftanın 7 günü aralıksız eşek gibi çalışan bir insan 2 ay sonra tükenmişlik sendromuna (burnout) yakalanır. Kitap açacak mecali kalmaz.
                        </p>
                        <p>
                            Pazar sabahı sadece 1 genel denemeni çöz, analizini yap; öğleden sonrayı ise kendine, ailene, arkadaşlarına ayır. Beyin ancak dinlendiğinde öğrendiği bilgileri hafıza çekmecelerine yerleştirir. Dinlenmekten korkma, plansızlıktan kork.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Çalışmaların Netlerine Yansıdı mı?</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Haftalık deneme sonuçlarını girerek netlerindeki artışın sıralamana etkisini canlı takip et.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Net ve Puan Hesaplayıcıyı Aç →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
