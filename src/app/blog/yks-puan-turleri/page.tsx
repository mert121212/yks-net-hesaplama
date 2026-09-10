import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Puan Türleri (SAY, EA, SÖZ, DİL) ve Bölümleri 2027',
    description: 'YKS puan türleri rehberi: SAY, EA, SÖZ ve DİL alanlarının test ağırlıkları, TYT\'nin %40 etkisi ve hangi bölümün hangi puanla aldığına dair kapsamlı analiz.',
    keywords: 'yks puan türleri, say bölümleri, ea bölümleri, söz bölümleri, tyt ile alan bölümler, ayt puan türleri',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-puan-turleri' },
    openGraph: {
        title: 'YKS Puan Türleri: Hangi Sınav Hangi Kapıyı Açar?',
        description: 'SAY, EA, SÖZ ve DİL puan türlerinin şifreleri ve test ağırlık dağılımları.',
        type: 'article',
        publishedTime: '2026-02-06',
        modifiedTime: '2026-02-09',
        url: 'https://yksnethesapla.com/blog/yks-puan-turleri',
        images: [
            {
                url: '/og-image.jpg',
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
                    description="YKS puan türleri rehberi: SAY, EA, SÖZ ve DİL alanlarının test ağırlıkları, TYT'nin %40 etkisi ve hangi bölümün hangi puanla aldığına dair kapsamlı analiz."
                    datePublished="2026-02-06"
                    dateModified="2026-02-09"
                    url="https://yksnethesapla.com/blog/yks-puan-turleri"
                    keywords={['yks puan türleri', 'say bölümleri', 'ea bölümleri', 'söz bölümleri', 'tyt ile alan bölümler', 'ayt puan türleri']}
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
                            <span className="text-gray-600">• 9 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS Puan Türleri: Hangi Test Hangi Bölümün Kapısını Açar?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Hukuk hedeflerken sınav salonunda boş vakitte Fizik çözmeye kalkanların düştüğü yanılgı nedir? Testlerin puan türlerine gerçek katkısı ve baraj sıralamaları.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Sınava hazırlık sürecinde öğrencilerin en sık yaptığı stratejik hatalardan biri, hangi testin hangi puan türünü beslediğini tam olarak bilmemektir.
                        </p>

                        <p>
                            Örneğin hedefi Hukuk veya Psikoloji olan bir öğrenci, AYT&apos;de vaktim arttı diyerek Fizik veya Kimya çözmeye kalkışırsa; o çözdüğü fen sorularının hedeflediği Eşit Ağırlık (EA) puanına katkısı <strong>tam olarak sıfırdır</strong>.
                        </p>

                        <p>
                            Bu yüzden hangi puan türünün hangi testlerden beslendiğini bilmek, çalışma masasında boşuna enerji harcamanızı engeller.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Temel Kural: %40 TYT + %60 AYT
                        </h2>
                        <p>
                            4 yıllık fakülteler için hesaplanan yerleştirme puanlarının genel formülü basittir:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Cumartesi TYT Oturumu:</strong> Tüm puan türlerine (SAY, EA, SÖZ) tam %40 oranında temel oluşturur. TYT&apos;deki her test (Türkçe, Sosyal, Matematik, Fen) kendi ağırlığı oranında bu %40&apos;lık tabanı besler.</li>
                            <li><strong>Pazar AYT Oturumu:</strong> Kalan %60&apos;lık aslan payını belirler ve sadece girdiğiniz alanın testlerini kapsar.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Sadece TYT Puanı İle Nereler Tercih Edilir?
                        </h2>
                        <p>
                            Cumartesi günü girdiğiniz 120 soruluk sınavdan aldığınız TYT puanı şunlara yarar:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>2 yıllık meslek yüksekokulu (ön lisans) programları (Bilgisayar Programcılığı, İlk ve Acil Yardım, Anestezi, Grafik Tasarımı vb.).</li>
                            <li>Polis Meslek Yüksekokulları (PMYO) başvuruları.</li>
                            <li>Beden Eğitimi ve Spor Yüksekokulu (BESYO), Konservatuvar ve Güzel Sanatlar özel yetenek sınavları için ön eleme barajı.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. SAY (Sayısal) Puan Türü
                        </h2>
                        <p>
                            Sayısal puanının hesaplanması için TYT&apos;ye ek olarak pazar günü AYT&apos;de <strong>Matematik (40 soru)</strong> ve <strong>Fen Bilimleri (40 soru: 14 Fizik, 13 Kimya, 13 Biyoloji)</strong> testlerinin çözülmesi şarttır.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg my-4 text-blue-950 text-sm">
                            <strong>Öne Çıkan Bölümler:</strong> Tıp, Diş Hekimliği, Eczacılık, Bilgisayar / Yazılım Mühendisliği, Elektrik-Elektronik Mühendisliği, Makine Mühendisliği, Mimarlık, Hemşirelik, Moleküler Biyoloji ve Genetik.
                        </div>
                        <p>
                            Sayısal öğrencisinin pazar günü Edebiyat veya Tarih testine dokunmasına kesinlikle gerek yoktur; bu testlerin Sayısal puanına en ufak bir faydası bulunmaz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. EA (Eşit Ağırlık) Puan Türü
                        </h2>
                        <p>
                            Eşit Ağırlık puanı; TYT&apos;ye ek olarak AYT&apos;de <strong>Matematik (40 soru)</strong> ile <strong>Türk Dili ve Edebiyatı - Sosyal Bilimler-1 (40 soru)</strong> testlerinin çözülmesiyle oluşur.
                        </p>
                        <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg my-4 text-amber-950 text-sm">
                            <strong>Öne Çıkan Bölümler:</strong> Hukuk, Psikoloji, Yönetim Bilişim Sistemleri (YBS), Rehberlik ve Psikolojik Danışmanlık (PDR), İktisat, İşletme, Uluslararası İlişkiler, Sınıf Öğretmenliği.
                        </div>
                        <p>
                            EA alanında dereceye giden yol, Edebiyatı 20 net civarında tutarken AYT Matematikte 25 net barajını aşmaktan geçer.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. SÖZ (Sözel) ve DİL (Yabancı Dil)
                        </h2>
                        <p>
                            <strong>Sözel Puanı:</strong> AYT&apos;de Türk Dili ve Edebiyatı - Sosyal Bilimler-1 ile Sosyal Bilimler-2 testleri çözülerek hesaplanır. Özel Eğitim Öğretmenliği, Türkçe Öğretmenliği, İlahiyat, Gastronomi, Radyo ve Televizyon bu kulvardadır.
                        </p>
                        <p>
                            <strong>DİL Puanı:</strong> Pazar günü öğleden sonra yapılan 80 soruluk Yabancı Dil Testi (YDT) ile hesaplanır. İngilizce Öğretmenliği, Mütercim-Tercümanlık, Turizm Rehberliği ve yabancı dil edebiyatları bu puanla öğrenci alır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            YKS&apos;deki Resmi Başarı Sırası Barajları (Dikkat!)
                        </h2>
                        <p>
                            Bazı bölümlerde puanınız ne kadar yüksek olursa olsun, ÖSYM&apos;nin koyduğu başarı sırası barajının gerisinde kalırsanız o bölümü tercih listenize dahi yazamazsınız:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead className="bg-gray-100 text-gray-800 text-sm">
                                    <tr>
                                        <th className="p-3 border">Bölüm</th>
                                        <th className="p-3 border">Puan Türü</th>
                                        <th className="p-3 border">Zorunlu Başarı Sırası Barajı</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Tıp Fakültesi</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border text-red-600 font-bold">İlk 50.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Diş Hekimliği</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border text-red-600 font-bold">İlk 80.000</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Eczacılık</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border text-red-600 font-bold">İlk 100.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Hukuk</td>
                                        <td className="p-3 border">EA</td>
                                        <td className="p-3 border text-red-600 font-bold">İlk 125.000</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Mimarlık</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border text-red-600 font-bold">İlk 250.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Mühendislik Programları</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border text-red-600 font-bold">İlk 300.000</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Öğretmenlik Programları</td>
                                        <td className="p-3 border">İlgili Puan Türü</td>
                                        <td className="p-3 border text-red-600 font-bold">İlk 300.000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 my-10 text-center text-white shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">Tüm Puan Türlerinizi Yan Yana Karşılaştırın</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm">
                                Netlerinizi hesaplama aracımıza girin; SAY, EA ve SÖZ puanlarınızı ve barajları aşıp aşmadığınızı tek ekranda inceleyin.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-700 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow">
                                Net ve Puan Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sıradaki Okuma Önerileri</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/ayt-puan-hesaplama" className="p-4 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors border border-indigo-100">
                                    <p className="font-semibold text-indigo-900">AYT Puan Hesaplama Rehberi →</p>
                                    <p className="text-xs text-gray-600 mt-1">AYT testlerinin ders bazlı katsayıları ve puan getiri oranları.</p>
                                </Link>
                                <Link href="/blog/universite-tercih-stratejileri" className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors border border-purple-100">
                                    <p className="font-semibold text-purple-900">Üniversite Tercih Stratejileri →</p>
                                    <p className="text-xs text-gray-600 mt-1">24 tercih listesi hazırlarken ölü tercih tuzağına düşmeme taktikleri.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
