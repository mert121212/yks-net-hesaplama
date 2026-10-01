import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Puan Türleri (SAY, EA, SÖZ, DİL) ve Bölümleri 2027',
    description: 'SAY, EA, SÖZ ve DİL puan türlerinde testlerin ağırlıkları, TYT\'nin %40 katkısı, puan türlerine göre bölümler ve başarı sırası barajları.',
    keywords: 'yks puan türleri, say bölümleri, ea bölümleri, söz bölümleri, tyt ile alan bölümler, ayt puan türleri, yks barajları',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-puan-turleri' },
    openGraph: {
        title: 'YKS Puan Türleri: Hangi Test Hangi Bölümü Etkiler?',
        description: 'SAY, EA, SÖZ ve DİL puan türleri, test ağırlıkları ve sıralama barajları.',
        type: 'article',
        publishedTime: '2026-02-06',
        modifiedTime: '2026-02-09',
        url: 'https://yksnethesapla.com/blog/yks-puan-turleri',
        images: [
            {
                url: '/images/blog/yks-puan-turleri.svg',
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
                    dateModified="2026-02-09"
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
                            <span className="text-gray-600">• 7 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS Puan Türleri: Hangi Test Hangi Bölüm İçin Çözülür?
                        </h1>
                        <p className="text-xl text-gray-600">
                            YKS&apos;de lisans programları SAY, EA, SÖZ ve DİL olmak üzere 4 temel puan türüyle öğrenci alır. Her puan türünde hangi testlerin geçerli olduğu ve resmi sıralama barajları.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-puan-turleri.svg"
                        alt="YKS Puan Türleri: Hangi Test Hangi Bölüm İçin Çözülür?"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Üniversite tercihlerinde 4 yıllık lisans programları için hesaplanan puanlarda TYT genel ağırlığı %40, ilgili alanın AYT ağırlığı ise %60&apos;tır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Puan Türlerinin Kapsamı ve İlgili Bölümler
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">1. Sayısal (SAY)</h3>
                        <p>
                            TYT&apos;ye ek olarak AYT Matematik (40 soru) ve AYT Fen Bilimleri (40 soru: Fizik, Kimya, Biyoloji) testleri dikkate alınır.
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Öne çıkan bölümler:</strong> Tıp, Diş Hekimliği, Eczacılık, Bilgisayar Mühendisliği, Elektrik-Elektronik Mühendisliği, Mimarlık, Hemşirelik.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2. Eşit Ağırlık (EA)</h3>
                        <p>
                            TYT&apos;ye ek olarak AYT Matematik (40 soru) ve AYT Türk Dili ve Edebiyatı - Sosyal-1 (40 soru: 24 Edebiyat, 10 Tarih-1, 6 Coğrafya-1) testleri dikkate alınır.
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Öne çıkan bölümler:</strong> Hukuk, Psikoloji, Yönetim Bilişim Sistemleri (YBS), Rehberlik ve Psikolojik Danışmanlık (PDR), İktisat, İşletme, Sınıf Öğretmenliği.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3. Sözel (SÖZ)</h3>
                        <p>
                            TYT&apos;ye ek olarak Edebiyat-Sosyal-1 (40 soru) ve Sosyal-2 (40 soru: Tarih-2, Coğrafya-2, Felsefe Grubu, Din Kültürü) testleri değerlendirilir.
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Öne çıkan bölümler:</strong> Özel Eğitim Öğretmenliği, Türkçe Öğretmenliği, Tarih, Coğrafya, İletişim, Gastronomi, Radyo-Televizyon ve Sinema.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">4. Dil (DİL)</h3>
                        <p>
                            TYT&apos;ye ek olarak Pazar öğleden sonra düzenlenen 80 soruluk YDT (Yabancı Dil Testi) ile hesaplanır.
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Öne çıkan bölümler:</strong> İngilizce Öğretmenliği, Mütercim-Tercümanlık, İngiliz Dili ve Edebiyatı.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Zorunlu Başarı Sırası Barajları
                        </h2>
                        <p>
                            YÖK tarafından belirlenen kurallara göre bazı programları tercih edebilmek için asgari başarı sırasına sahip olmak zorunludur:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-gray-100 text-gray-800">
                                    <tr>
                                        <th className="p-3 border">Program</th>
                                        <th className="p-3 border">Puan Türü</th>
                                        <th className="p-3 border">Gereken En Düşük Sıralama</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Tıp Fakültesi</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-semibold text-red-600">İlk 50.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Diş Hekimliği</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-semibold text-red-600">İlk 80.000</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Eczacılık</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-semibold text-red-600">İlk 100.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Hukuk</td>
                                        <td className="p-3 border">EA</td>
                                        <td className="p-3 border font-semibold text-red-600">İlk 125.000</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Mimarlık</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-semibold text-red-600">İlk 250.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Mühendislik Programları</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-semibold text-red-600">İlk 300.000</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Öğretmenlik Programları</td>
                                        <td className="p-3 border">İlgili Puan Türü</td>
                                        <td className="p-3 border font-semibold text-red-600">İlk 300.000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Puanınızı ve Sıralamanızı Hesaplayın</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Netlerinizi girerek SAY, EA ve SÖZ puanlarınızı ve baraj sıralaması durumunuzu anında görüntüleyin.
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
