import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS Puan Türleri: SAY, EA, SÖZ, DİL ve Başarı Sırası Barajları 2027',
    description: 'YKS\'de 4 farklı puan türü ve başarı sırası barajları. Hangi bölüm hangi sıralama şartı arıyor? SAY, EA, SÖZ ve DİL bölüm listeleri.',
    keywords: 'yks puan türleri, say puan türü, ea puan türü, söz puan türü, dil puan türü, başarı sırası barajları, yks barajlar',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-puan-turleri' },
    openGraph: {
        title: 'YKS Puan Türleri: SAY, EA, SÖZ, DİL ve Başarı Sırası Barajları 2027',
        description: 'YKS\'de 4 farklı puan türü ve başarı sırası barajları. Hangi bölüm hangi sıralama şartı arıyor?',
        type: 'article',
        publishedTime: '2026-02-25',
        url: 'https://yksnethesapla.com/blog/yks-puan-turleri',
    },
}

export default function YKSPuanTurleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
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
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600">25 Şubat 2026</time>
                            <span className="text-gray-600">• 12 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS Puan Türleri: SAY, EA, SÖZ, DİL ve Bölüm Seçimi Kılavuzu
                        </h1>
                        <p className="text-xl text-gray-600">
                            Hangi bölüm hangi puan türünden alıyor? Başarı sırası barajları kimleri kapsıyor? Hedeflediğin mesleğe giden yol haritası.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS&apos;de lise alanınız ne olursa olsun, sınavda çözdüğünüz testlere göre 4 farklı puan türünüz hesaplanır. Yani lisede Sayısal okumuş olsanız bile sınavda Edebiyat-Sosyal testini çözerek Eşit Ağırlık puanıyla Hukuk Fakültesi tercih edebilirsiniz; hiçbir puan kaybı veya katsayı cezası yaşamazsınız.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            4 Puan Türü ve Popüler Bölüm Listeleri
                        </h2>

                        <div className="space-y-6 my-6">
                            <div className="p-6 bg-green-50 border-l-4 border-green-600 rounded-xl">
                                <h3 className="text-xl font-bold text-green-900 mb-2">1. SAY (Sayısal Puan Türü)</h3>
                                <p className="text-sm text-gray-700 mb-3">TYT (%40) + AYT Matematik (%30) + AYT Fizik/Kimya/Biyoloji (%30)</p>
                                <p className="text-xs text-gray-600 font-semibold mb-2">Popüler Bölümler:</p>
                                <div className="flex flex-wrap gap-2 text-xs">
                                    <span className="bg-white px-3 py-1 rounded-full border border-green-200">Tıp</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-green-200">Bilgisayar Mühendisliği</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-green-200">Diş Hekimliği</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-green-200">Eczacılık</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-green-200">Yapay Zeka Müh.</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-green-200">Elektrik-Elektronik Müh.</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-green-200">Mimarlık</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-green-200">Hemşirelik</span>
                                </div>
                            </div>

                            <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-xl">
                                <h3 className="text-xl font-bold text-blue-900 mb-2">2. EA (Eşit Ağırlık Puan Türü)</h3>
                                <p className="text-sm text-gray-700 mb-3">TYT (%40) + AYT Matematik (%30) + AYT Edebiyat-Tarih1-Coğrafya1 (%30)</p>
                                <p className="text-xs text-gray-600 font-semibold mb-2">Popüler Bölümler:</p>
                                <div className="flex flex-wrap gap-2 text-xs">
                                    <span className="bg-white px-3 py-1 rounded-full border border-blue-200">Hukuk</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-blue-200">Yönetim Bilişim Sistemleri (YBS)</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-blue-200">Psikoloji</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-blue-200">PDR</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-blue-200">İşletme & İktisat</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-blue-200">Siyaset Bilimi</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-blue-200">Sınıf Öğretmenliği</span>
                                </div>
                            </div>

                            <div className="p-6 bg-purple-50 border-l-4 border-purple-600 rounded-xl">
                                <h3 className="text-xl font-bold text-purple-900 mb-2">3. SÖZ (Sözel Puan Türü)</h3>
                                <p className="text-sm text-gray-700 mb-3">TYT (%40) + AYT Edebiyat-Sos1 (%30) + AYT Sosyal2 (%30)</p>
                                <p className="text-xs text-gray-600 font-semibold mb-2">Popüler Bölümler:</p>
                                <div className="flex flex-wrap gap-2 text-xs">
                                    <span className="bg-white px-3 py-1 rounded-full border border-purple-200">Özel Eğitim Öğretmenliği</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-purple-200">Türkçe Öğretmenliği</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-purple-200">Okul Öncesi Öğretmenliği</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-purple-200">Halkla İlişkiler & Reklamcılık</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-purple-200">Gastronomi ve Mutfak Sanatları</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-purple-200">İlahiyat / İslami İlimler</span>
                                </div>
                            </div>

                            <div className="p-6 bg-orange-50 border-l-4 border-orange-600 rounded-xl">
                                <h3 className="text-xl font-bold text-orange-900 mb-2">4. DİL (Yabancı Dil Puan Türü)</h3>
                                <p className="text-sm text-gray-700 mb-3">TYT (%40) + YDT Yabancı Dil Sınavı (%60)</p>
                                <p className="text-xs text-gray-600 font-semibold mb-2">Popüler Bölümler:</p>
                                <div className="flex flex-wrap gap-2 text-xs">
                                    <span className="bg-white px-3 py-1 rounded-full border border-orange-200">İngilizce Öğretmenliği</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-orange-200">Mütercim ve Tercümanlık</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-orange-200">İngiliz Dili ve Edebiyatı</span>
                                    <span className="bg-white px-3 py-1 rounded-full border border-orange-200">Turizm Rehberliği</span>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Zorunlu Başarı Sırası Barajları (ÖSYM Güncel)
                        </h2>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg text-sm">
                                <thead className="bg-red-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Bölüm</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Puan Türü</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Gereken Minimum Başarı Sırası</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Tıp</td><td className="px-5 py-3 text-center">SAY</td><td className="px-5 py-3 text-center font-bold text-red-700">İlk 50.000</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Diş Hekimliği</td><td className="px-5 py-3 text-center">SAY</td><td className="px-5 py-3 text-center font-bold text-red-700">İlk 80.000</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Eczacılık</td><td className="px-5 py-3 text-center">SAY</td><td className="px-5 py-3 text-center font-bold text-red-700">İlk 100.000</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Hukuk</td><td className="px-5 py-3 text-center">EA</td><td className="px-5 py-3 text-center font-bold text-red-700">İlk 125.000</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Mimarlık</td><td className="px-5 py-3 text-center">SAY</td><td className="px-5 py-3 text-center font-bold text-orange-700">İlk 250.000</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Mühendislikler (Orman, Ziraat hariç)</td><td className="px-5 py-3 text-center">SAY</td><td className="px-5 py-3 text-center font-bold text-orange-700">İlk 300.000</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Tüm Öğretmenlikler (PDR dahil)</td><td className="px-5 py-3 text-center">İlgili Puan Türü</td><td className="px-5 py-3 text-center font-bold text-orange-700">İlk 300.000</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Tüm Puan Türlerini Anında Hesapla</h3>
                            <p className="text-blue-100 mb-6">
                                Deneme netlerini girerek SAY, EA, SÖZ ve DİL yerleştirme puanlarını tek ekranda gör.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Ücretsiz Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
