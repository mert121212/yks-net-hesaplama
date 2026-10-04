import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Puan Türleri (SAY, EA, SÖZ, DİL) ve Bölümleri 2027: Baraj Tehlikesi',
    description: 'Hangi test hangi bölümü kazandırır? SAY, EA, SÖZ katsayıları, TYT\'nin %40 etkisi ve 50.001 olsan bile Tıp yazdırtmayan YÖK barajları.',
    keywords: 'yks puan türleri, say bölümleri, ea bölümleri, söz bölümleri, tyt ile alan bölümler, ayt puan türleri, yks barajları',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-puan-turleri' },
    openGraph: {
        title: 'YKS Puan Türleri: Hangi Test Hangi Bölümü Etkiler?',
        description: 'SAY, EA, SÖZ ve DİL puan türleri, test ağırlıkları ve resmi sıralama barajları.',
        type: 'article',
        publishedTime: '2026-02-06',
        modifiedTime: '2026-03-01',
        url: 'https://yksnethesapla.com/blog/yks-puan-turleri',
        images: [
            {
                url: '/images/blog/yks-puan-turleri.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Puan Türleri Rehberi'
            }
        ],
    },
}

export default function YKSPuanTurleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS Puan Türleri (SAY, EA, SÖZ, DİL) ve Bölümleri 2027" 
                    description="SAY, EA, SÖZ ve DİL puan türlerinde testlerin ağırlıkları, TYT'nin %40 katkısı, puan türlerine göre bölümler ve başarı sırası barajları."
                    datePublished="2026-02-06"
                    dateModified="2026-03-01"
                    url="https://yksnethesapla.com/blog/yks-puan-turleri"
                    keywords={['yks puan türleri', 'say bölümleri', 'ea bölümleri', 'söz bölümleri', 'tyt ile alan bölümler', 'ayt puan türleri', 'yks barajları']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Puan Türleri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-06">6 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS Puan Türleri: Hangi Test Seni Hangi Mesleğe Götürür?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Sınav sabahı hangi kitapçığı çözeceğini bilmeden masaya oturursan 1 yılın boşa gider. Hangi puan türü nereden puan toplar, acımasız YÖK barajları nerede başlar?
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-puan-turleri.jpg"
                        alt="YKS Puan Türleri: Hangi Test Hangi Bölüm İçin Çözülür?"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS sisteminde yapılan en büyük acemiliklerden biri şudur: Öğrenci Yönetim Bilişim Sistemleri (YBS) okumak ister ama aylarca Fizik, Kimya çözüp Sayısal kasar. Oysa YBS Eşit Ağırlıkla alır! 
                        </p>

                        <p>
                            Boş yere enerji tüketmemek için hedefin hangi puan türündeyse onun testine asılmak zorundasın. Genel kuralı unutma: 4 yıllık fakültelerde <strong>TYT %40, AYT %60 ağırlığa sahiptir.</strong>
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4 Büyük Puan Türü ve Sorumlu Olduğun Testler
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">1. Sayısal (SAY): Mühendislik & Sağlık Ordusu</h3>
                                <p className="text-sm text-blue-900 mb-2">
                                    TYT (120 soru) + AYT Matematik (40 soru) + AYT Fen (14 Fizik, 13 Kimya, 13 Biyoloji).
                                </p>
                                <p className="text-xs text-blue-800">
                                    <strong>Başlıca Bölümler:</strong> Tıp, Diş Hekimliği, Eczacılık, Bilgisayar / Yazılım / Elektrik Mühendisliği, Mimarlık, Hemşirelik, Moleküler Biyoloji.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">2. Eşit Ağırlık (EA): Adalet, Yönetim & İnsan</h3>
                                <p className="text-sm text-emerald-900 mb-2">
                                    TYT (120 soru) + AYT Matematik (40 soru) + Edebiyat-Sosyal-1 (24 Edebiyat, 10 Tarih-1, 6 Coğrafya-1).
                                </p>
                                <p className="text-xs text-emerald-800">
                                    <strong>Başlıca Bölümler:</strong> Hukuk, Psikoloji, Yönetim Bilişim Sistemleri (YBS), PDR, İktisat, İşletme, Uluslararası İlişkiler, Sınıf Öğretmenliği.
                                </p>
                            </div>

                            <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
                                <h3 className="font-bold text-purple-950 text-lg mb-1">3. Sözel (SÖZ): Medya, Sanat & Toplum</h3>
                                <p className="text-sm text-purple-900 mb-2">
                                    TYT (120 soru) + Edebiyat-Sosyal-1 (40 soru) + Sosyal-2 (40 soru: Tarih-2, Coğrafya-2, Felsefe, Din).
                                </p>
                                <p className="text-xs text-purple-800">
                                    <strong>Başlıca Bölümler:</strong> Özel Eğitim Öğretmenliği, Türkçe Öğretmenliği, Gastronomi, Radyo-Televizyon ve Sinema, İletişim Fakülteleri, Tarih, Coğrafya.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-950 text-lg mb-1">4. Dil (DİL): Dünya Kapısı</h3>
                                <p className="text-sm text-amber-900 mb-2">
                                    TYT (120 soru) + Pazar öğleden sonra yapılan 80 soruluk Yabancı Dil Testi (YDT).
                                </p>
                                <p className="text-xs text-amber-800">
                                    <strong>Başlıca Bölümler:</strong> İngilizce Öğretmenliği, Mütercim ve Tercümanlık, İngiliz/Alman Dili ve Edebiyatı.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Acımasız YÖK Sıralama Barajları (Paran Olsa Bile Yazamazsın!)
                        </h2>
                        <p>
                            İşte en kritik kural: Vakıf (özel) üniversitelerinde %100 ücretli okumak istesen dahi YÖK&apos;ün belirlediği resmi başarı sırası barajının gerisindeysen tercih ekranında sistem o bölümü yazmana izin vermez!
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-gray-100 text-gray-800">
                                    <tr>
                                        <th className="p-3 border">Bölüm</th>
                                        <th className="p-3 border">Puan Türü</th>
                                        <th className="p-3 border font-bold text-red-700">Aşılması Gereken Asgari Sıralama</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Tıp Fakültesi</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-bold text-red-600">İlk 50.000 (50.001 olursan tercih edemezsin!)</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Diş Hekimliği</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-bold text-red-600">İlk 80.000</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Eczacılık</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-bold text-red-600">İlk 100.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Hukuk</td>
                                        <td className="p-3 border">EA</td>
                                        <td className="p-3 border font-bold text-red-600">İlk 125.000</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Mimarlık</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-bold text-red-600">İlk 250.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Mühendislik Programları</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-bold text-red-600">İlk 300.000 (Ziraat ve Orman hariç)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Öğretmenlik Programları</td>
                                        <td className="p-3 border">İlgili Puan</td>
                                        <td className="p-3 border font-bold text-red-600">İlk 300.000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Barajı Aşıyor musun? Hemen Test Et</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Deneme netlerini gir; Tıp, Hukuk ve Mühendislik baraj sıralamalarını geçip geçemediğini ÖSYM motoruyla test et.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Puan ve Baraj Simülatörünü Aç →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
