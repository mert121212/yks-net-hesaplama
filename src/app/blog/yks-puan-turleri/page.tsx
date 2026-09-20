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
                            Geçen sene sınavdan sonra heyecanla arayan bir öğrencim vardı: <em>&quot;Hocam AYT&apos;de vaktim arttı, canım sıkıldı, arkadaki 15 tane Fizik-Kimya sorusunu da işaretledim. Hukuk puanıma biraz puan eklenir değil mi?&quot;</em>
                        </p>

                        <p>
                            İşte o an telefonda birkaç saniye sessizlik oldu. Çocuk aylarca çalışmış ama çözdüğü testin hedeflediği puana zerre kadar katkısı olmadığını bilmiyor. Katkısı tam olarak sıfır. Kocaman bir sıfır.
                        </p>

                        <p>
                            ÖSYM sistemi bakkal dükkanı gibi çalışmaz; &quot;ne bulursan sepete at, kasada toplarız&quot; demez. Her puan türünün beslendiği musluk ayrıdır. Yanlış musluğu açarsan saatlerce boşuna ter dökersin. Gel şu kuralı bir kez ve sonsuza kadar netleştirelim.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Bütün Sistemin Omurgası: %40 TYT + %60 AYT
                        </h2>
                        <p>
                            Kafan hiç karışmasın. İster Cerrahpaşa Tıp iste, ister Boğaziçi İktisat, ister ODTÜ Tarih:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Cumartesi günkü TYT:</strong> Türkiye&apos;deki tüm 4 yıllık bölümler için puanının tam <strong>%40&apos;ını</strong> oluşturur. Burada Türkçe de çözsen, Din de çözsen hepsi ortak havuza akar.</li>
                            <li><strong>Pazar günkü AYT:</strong> Kalan <strong>%60&apos;lık devasa payı</strong> belirler. Ama burada sadece ve sadece kendi alanının soruları geçerlidir.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Sadece TYT Puanıyla Nerelere Gidilir?
                        </h2>
                        <p>
                            Pazar günkü sınava hiç girmesen bile cumartesi günkü 120 soruluk sınavla hayatına harika bir rota çizebilirsin:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>2 Yıllık Ön Lisanslar:</strong> Bilgisayar Programcılığı, Anestezi, İlk ve Acil Yardım (Paramedik), Ağız ve Diş Sağlığı gibi iş imkanı yüksek bölümler.</li>
                            <li><strong>Polislik (PMYO):</strong> Polis Akademisi her yıl doğrudan TYT ham puan barajıyla alım yapar.</li>
                            <li><strong>Yetenek Sınavları:</strong> BESYO, Konservatuvar ve Güzel Sanatlar için TYT bir giriş vizesidir; barajı geçen yetenek sınavına koşar.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. SAY (Sayısal): Tıp ve Mühendisliğin İki Direği
                        </h2>
                        <p>
                            Sayısalcı pazar günü masaya oturduğunda iki şeye bakar: <strong>40 Matematik + 40 Fen (Fizik, Kimya, Biyoloji)</strong>.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg my-4 text-blue-950 text-sm">
                            <strong>Hedef Bölümler:</strong> Tıp, Diş Hekimliği, Eczacılık, Bilgisayar / Yazılım / Yapay Zeka Mühendislikleri, Mimarlık, Havacılık ve Uzay.
                        </div>
                        <p>
                            Sayısalcıysan pazar günü Edebiyat ya da Tarih testine elini bile sürme. Boşa vakit ve enerji harcamış olursun.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. EA (Eşit Ağırlık): Hukuk ve Yönetim İçin Matematik Şartı
                        </h2>
                        <p>
                            Eşit Ağırlık puanının reçetesi: <strong>40 Matematik + 40 Edebiyat-Sosyal-1</strong> (24 Edebiyat, 10 Tarih-1, 6 Coğrafya-1).
                        </p>
                        <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg my-4 text-amber-950 text-sm">
                            <strong>Hedef Bölümler:</strong> Hukuk, Psikoloji, Yönetim Bilişim Sistemleri (YBS), PDR, Siyaset Bilimi, İktisat ve Sınıf Öğretmenliği.
                        </div>
                        <p>
                            Burada dikkat: Edebiyatı herkes yapıyor. EA&apos;da seni diğer 300 bin kişinin önüne geçirecek tek güç AYT Matematiktir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. SÖZ (Sözel) ve DİL Kulvarı
                        </h2>
                        <p>
                            <strong>Sözelciler:</strong> Edebiyat-Sosyal-1 ile Sosyal-2 (Tarih-2, Coğrafya-2, Felsefe Grubu, Din) çözer. Özel Eğitim Öğretmenliği, İlahiyat, Radyo-Sinema-TV bu alandadır.
                        </p>
                        <p>
                            <strong>Dilciler:</strong> Pazar öğleden sonra yapılan 80 soruluk YDT&apos;ye girer. Mütercim Tercümanlık ve İngilizce Öğretmenliği hayali kuranlar burada yarışır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Gözünün Yaşına Bakmayan Resmi Sıralama Barajları
                        </h2>
                        <p>
                            Puanın yetse bile, sıralaman bu sınırların 1 kişi gerisinde kalsa sistem tercih yapmana izin vermez:
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
