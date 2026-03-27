import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'YKS Puan Türleri: SAY, EA, SÖZ, DİL ve Başarı Sırası Barajları 2026',
    description: 'YKS\'de 4 farklı puan türü ve başarı sırası barajları. SAY, EA, SÖZ ve DİL puan türlerini, hangi bölümlerin hangi sıralama şartı aradığını öğrenin.',
    keywords: 'yks puan türleri, say puanı, ea puanı, söz puanı, dil puanı, başarı sırası barajı, tıp sıralaması',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-puan-turleri' },
    openGraph: {
        title: 'YKS Puan Türleri: SAY, EA, SÖZ, DİL ve Başarı Sırası Barajları 2026',
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
                            <span className="text-gray-600">• 6 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS Puan Türleri: SAY, EA, SÖZ, DİL ve Başarı Sırası Barajları
                        </h1>
                        <p className="text-xl text-gray-700">
                            YKS&apos;de sadece puan almak yetmez. Hedeflediğiniz bölümün hangi puan türüyle
                            ve hangi başarı sırası barajıyla öğrenci aldığını bilmeniz gerekir.
                        </p>
                    </header>

                    <div className="prose prose-lg max-w-none">

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-7 rounded-xl border-2 border-green-200">
                                <div className="text-4xl mb-3">🔬</div>
                                <h2 className="text-2xl font-bold text-green-900 mb-3">SAY (Sayısal)</h2>
                                <p className="text-gray-700 mb-3 text-sm">Matematik ve fen bilimlerine ağırlık veren puan türü.</p>
                                <p className="font-semibold text-green-800 text-sm mb-2">Kullanılan Testler:</p>
                                <p className="text-gray-700 text-sm mb-3">TYT + AYT Mat + Fizik + Kimya + Biyo</p>
                                <p className="font-semibold text-green-800 text-sm mb-1">Öne Çıkan Bölümler:</p>
                                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                    <li>Tıp, Diş Hekimliği</li>
                                    <li>Mühendislik (tüm dallar)</li>
                                    <li>Mimarlık, Şehir Planlama</li>
                                    <li>Eczacılık, Veterinerlik</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-7 rounded-xl border-2 border-blue-200">
                                <div className="text-4xl mb-3">⚖️</div>
                                <h2 className="text-2xl font-bold text-blue-900 mb-3">EA (Eşit Ağırlık)</h2>
                                <p className="text-gray-700 mb-3 text-sm">Sayısal ve sözel derslere dengeli ağırlık veren puan türü.</p>
                                <p className="font-semibold text-blue-800 text-sm mb-2">Kullanılan Testler:</p>
                                <p className="text-gray-700 text-sm mb-3">TYT + AYT Mat + Edb + Tar-1 + Coğ-1</p>
                                <p className="font-semibold text-blue-800 text-sm mb-1">Öne Çıkan Bölümler:</p>
                                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                    <li>Hukuk</li>
                                    <li>İktisat, İşletme</li>
                                    <li>Siyaset Bilimi</li>
                                    <li>Uluslararası İlişkiler</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-7 rounded-xl border-2 border-purple-200">
                                <div className="text-4xl mb-3">📚</div>
                                <h2 className="text-2xl font-bold text-purple-900 mb-3">SÖZ (Sözel)</h2>
                                <p className="text-gray-700 mb-3 text-sm">Edebiyat ve sosyal bilimlere ağırlık veren puan türü.</p>
                                <p className="font-semibold text-purple-800 text-sm mb-2">Kullanılan Testler:</p>
                                <p className="text-gray-700 text-sm mb-3">TYT + AYT Edb + Sos-1 + Sos-2</p>
                                <p className="font-semibold text-purple-800 text-sm mb-1">Öne Çıkan Bölümler:</p>
                                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                    <li>Türk Dili ve Edebiyatı</li>
                                    <li>Tarih, Arkeoloji</li>
                                    <li>Psikoloji, Sosyoloji</li>
                                    <li>Gazetecilik, İletişim</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-7 rounded-xl border-2 border-orange-200">
                                <div className="text-4xl mb-3">🌍</div>
                                <h2 className="text-2xl font-bold text-orange-900 mb-3">DİL (Yabancı Dil)</h2>
                                <p className="text-gray-700 mb-3 text-sm">Yabancı dil yeteneğine odaklanan puan türü.</p>
                                <p className="font-semibold text-orange-800 text-sm mb-2">Kullanılan Testler:</p>
                                <p className="text-gray-700 text-sm mb-3">TYT + YDT (80 soru)</p>
                                <p className="font-semibold text-orange-800 text-sm mb-1">Öne Çıkan Bölümler:</p>
                                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                    <li>İngilizce Öğretmenliği</li>
                                    <li>Mütercim-Tercümanlık</li>
                                    <li>Amerikan Kültürü</li>
                                    <li>Uluslararası İlişkiler (DİL)</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Başarı Sırası Barajları</h2>
                        <p className="text-gray-700 mb-4">
                            Google botlarının &quot;yüksek değerli&quot; bulduğu en kritik bilgi budur: bazı bölümlere girmek için
                            sadece puan yetmez, belli bir sıralama içinde olmanız şarttır.
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-red-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Bölüm</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Puan Türü</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Başarı Sırası Şartı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Tıp</td><td className="px-5 py-3">SAY</td><td className="px-5 py-3 text-center font-bold text-red-700">İlk 50.000</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Hukuk</td><td className="px-5 py-3">EA</td><td className="px-5 py-3 text-center font-bold text-red-700">İlk 125.000</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Mimarlık</td><td className="px-5 py-3">SAY</td><td className="px-5 py-3 text-center font-bold text-orange-700">İlk 250.000</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Mühendislik</td><td className="px-5 py-3">SAY</td><td className="px-5 py-3 text-center font-bold text-orange-700">İlk 300.000</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Öğretmenlik</td><td className="px-5 py-3">SAY/EA/SÖZ</td><td className="px-5 py-3 text-center font-bold text-orange-700">İlk 300.000</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-500 mb-8">* Kesin baraj değerleri için ÖSYM kılavuzunu kontrol edin. Yukarıdaki değerler 2025 verilerine dayanmaktadır.</p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Puanınızı ve Sıralamanızı Hesaplayın</h2>
                            <p className="text-xl mb-6 text-blue-100">Tüm puan türlerini ve tahmini sıralamanızı anında öğrenin</p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Hangi Puan Türünü Seçmeliyim?</h2>
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
                            <h3 className="font-bold text-yellow-900 mb-3">💡 Karar Verme Kriterleri</h3>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li>✓ Hangi derslerde daha başarılısınız?</li>
                                <li>✓ Hedeflediğiniz bölüm hangi puan türünü kullanıyor?</li>
                                <li>✓ Deneme sınavlarında hangi puan türünde daha yüksek puan alıyorsunuz?</li>
                                <li>✓ Başarı sırası barajını aşabilecek misiniz?</li>
                            </ul>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/ayt-puan-hesaplama" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">AYT Puan Hesaplama →</p>
                                </Link>
                                <Link href="/blog/universite-tercih-stratejileri" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">Tercih Stratejileri →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
