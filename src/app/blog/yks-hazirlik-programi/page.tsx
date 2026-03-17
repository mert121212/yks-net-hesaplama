import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'YKS\'ye Nasıl Hazırlanılır? Çalışma Programı 2026 | YKS Net Hesaplama',
    description: 'Etkili bir YKS hazırlık programı nasıl yapılır? Günlük, haftalık ve aylık çalışma planları, ipuçları ve stratejiler.',
    keywords: 'yks hazırlık, yks çalışma programı, yks nasıl çalışılır, yks ders programı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-hazirlik-programi' },
    openGraph: {
        title: 'YKS\'ye Nasıl Hazırlanılır? Çalışma Programı 2026',
        description: 'Etkili bir YKS hazırlık programı nasıl yapılır? Günlük, haftalık çalışma planları ve stratejiler.',
        type: 'article',
        publishedTime: '2026-02-20',
        url: 'https://yksnethesapla.com/blog/yks-hazirlik-programi',
    },
}

export default function YKSHazirlikProgrami() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Hazırlık Programı</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Hazırlık</span>
                            <time className="text-gray-600">20 Şubat 2026</time>
                            <span className="text-gray-600">• 10 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS'ye Nasıl Hazırlanılır?
                        </h1>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            YKS'ye hazırlanmak uzun bir maraton. Doğru strateji ve düzenli çalışma ile başarıya ulaşabilirsiniz.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-8 text-white">
                            <h2 className="text-3xl font-bold mb-4">📚 Günlük Çalışma Programı</h2>
                            <div className="space-y-3 text-blue-100">
                                <p>• <strong>Sabah (07:00-12:00):</strong> En verimli saatler - Zor konular</p>
                                <p>• <strong>Öğle (13:00-17:00):</strong> Orta zorluk - Tekrar ve pekiştirme</p>
                                <p>• <strong>Akşam (19:00-22:00):</strong> Kolay konular - Test çözme</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Haftalık Program Örneği</h2>

                        <div className="overflow-x-auto my-8">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left font-semibold border-b">Gün</th>
                                        <th className="px-6 py-3 text-left font-semibold border-b">Sabah</th>
                                        <th className="px-6 py-3 text-left font-semibold border-b">Öğleden Sonra</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 font-semibold">Pazartesi</td>
                                        <td className="px-6 py-4">Matematik</td>
                                        <td className="px-6 py-4">Fizik</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="px-6 py-4 font-semibold">Salı</td>
                                        <td className="px-6 py-4">Türkçe</td>
                                        <td className="px-6 py-4">Edebiyat</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 font-semibold">Çarşamba</td>
                                        <td className="px-6 py-4">Matematik</td>
                                        <td className="px-6 py-4">Kimya</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="px-6 py-4 font-semibold">Perşembe</td>
                                        <td className="px-6 py-4">Tarih</td>
                                        <td className="px-6 py-4">Coğrafya</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 font-semibold">Cuma</td>
                                        <td className="px-6 py-4">Biyoloji</td>
                                        <td className="px-6 py-4">Deneme Sınavı</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="px-6 py-4 font-semibold">Cumartesi</td>
                                        <td className="px-6 py-4" colSpan={2}>Tam Deneme Sınavı</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-semibold">Pazar</td>
                                        <td className="px-6 py-4" colSpan={2}>Dinlenme / Hafif Tekrar</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Başarı İçin 10 Altın Kural</h2>

                        <div className="grid md:grid-cols-2 gap-4 my-8">
                            {[
                                { num: 1, title: "Düzenli Çalış", desc: "Her gün aynı saatte çalışmaya başla" },
                                { num: 2, title: "Hedef Belirle", desc: "Günlük, haftalık ve aylık hedefler koy" },
                                { num: 3, title: "Deneme Çöz", desc: "Haftada en az 2 deneme sınavı çöz" },
                                { num: 4, title: "Mola Ver", desc: "Her 50 dakikada 10 dakika mola ver" },
                                { num: 5, title: "Sağlıklı Yaşa", desc: "Düzenli uyku, sağlıklı beslenme" },
                                { num: 6, title: "Tekrar Yap", desc: "Öğrendiklerini düzenli tekrar et" },
                                { num: 7, title: "Soru Çöz", desc: "Bol bol soru çöz, pratik yap" },
                                { num: 8, title: "Analiz Et", desc: "Yanlışlarını analiz et, not al" },
                                { num: 9, title: "Motivasyon", desc: "Kendini motive et, pes etme" },
                                { num: 10, title: "Sosyalleş", desc: "Hafta sonu arkadaşlarınla vakit geçir" },
                            ].map((rule) => (
                                <div key={rule.num} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                                    <div className="flex items-start">
                                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                                            {rule.num}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1">{rule.title}</h3>
                                            <p className="text-sm text-gray-700">{rule.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Geri Sayımı Takip Et!</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                YKS'ye kalan süreyi görün, motivasyonunu koru
                            </p>
                            <Link href="/geri-sayim" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Geri Sayım →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-kac-net-kac-puan" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">Kaç Net Kaç Puan →</p>
                                </Link>
                                <Link href="/blog/tyt-net-hesaplama-rehberi" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    <p className="font-semibold text-green-900">TYT Net Hesaplama →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
