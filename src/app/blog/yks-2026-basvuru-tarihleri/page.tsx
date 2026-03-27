import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'YKS 2026 Başvuru Tarihleri, Takvimi ve Başvuru Adımları',
    description: 'YKS 2026 başvuru tarihleri, sınav tarihleri, sonuç açıklama ve tercih takvimi. AİS üzerinden nasıl başvurulur? Sınav günü hazırlık listesi.',
    keywords: 'yks 2026 tarihleri, yks başvuru tarihleri, yks sınav tarihi, yks sonuç tarihi, ais başvuru',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-2026-basvuru-tarihleri' },
    openGraph: {
        title: 'YKS 2026 Başvuru Tarihleri, Takvimi ve Başvuru Adımları',
        description: 'YKS 2026 başvuru tarihleri ve sınav takvimi. AİS üzerinden nasıl başvurulur?',
        type: 'article',
        publishedTime: '2026-02-23',
        url: 'https://yksnethesapla.com/blog/yks-2026-basvuru-tarihleri',
    },
}

export default function YKS2026BasvuruTarihleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS 2026 Başvuru Tarihleri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Takvim</span>
                            <time className="text-gray-600">23 Şubat 2026</time>
                            <span className="text-gray-600">• 4 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS 2026 Başvuru Tarihleri ve Takvimi
                        </h1>
                        <p className="text-xl text-gray-700">
                            Tarihleri kaçırmak, bir yılınızın kaybına neden olabilir. ÖSYM tarafından
                            açıklanan (tahmini) 2026 YKS takvimi aşağıdadır.
                        </p>
                    </header>

                    <div className="prose prose-lg max-w-none">

                        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Önemli Günler Tablosu</h2>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Olay</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Tarih</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Başvuru Süreci</td><td className="px-5 py-3">15 Mart – 5 Nisan 2026</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Geç Başvuru Günü</td><td className="px-5 py-3">15–16 Nisan 2026</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Sınav Giriş Belgesi</td><td className="px-5 py-3">10 Haziran 2026</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium text-blue-700">TYT Sınavı</td><td className="px-5 py-3 font-bold">20 Haziran 2026 (Cumartesi) – 10:15</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium text-purple-700">AYT / YDT Sınavı</td><td className="px-5 py-3 font-bold">21 Haziran 2026 (Pazar) – 10:15</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Sonuç Açıklama</td><td className="px-5 py-3">15 Temmuz 2026 (tahmini)</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Tercih Dönemi</td><td className="px-5 py-3">20 Temmuz – 5 Ağustos 2026 (tahmini)</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Yerleştirme Sonuçları</td><td className="px-5 py-3">25 Ağustos 2026 (tahmini)</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-500 mb-8">* Tahmini tarihler ÖSYM tarafından değiştirilebilir. Kesin tarihler için osym.gov.tr adresini takip edin.</p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Nasıl Başvurulur?</h2>
                        <div className="space-y-4 my-6">
                            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-900 mb-2">1. AİS&apos;e Giriş Yapın</h3>
                                <p className="text-gray-700 text-sm">
                                    Aday İşlemleri Sistemi (AİS) üzerinden e-Devlet şifrenizle giriş yaparak
                                    başvurunuzu tamamlayabilirsiniz.
                                </p>
                            </div>
                            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                                <h3 className="font-bold text-green-900 mb-2">2. Ödemeyi Yapın</h3>
                                <p className="text-gray-700 text-sm">
                                    Başvuru ücretini anlaşmalı bankalar veya ÖSYM Ödeme Sistemi üzerinden yapabilirsiniz.
                                    Ödeme yapılmadan başvuru tamamlanmaz.
                                </p>
                            </div>
                            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                                <h3 className="font-bold text-purple-900 mb-2">3. Giriş Belgesini İndirin</h3>
                                <p className="text-gray-700 text-sm">
                                    Sınav tarihinden yaklaşık 10 gün önce AİS üzerinden sınav giriş belgenizi
                                    indirip çıktı alın. Sınava bu belge olmadan giremezsiniz.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Geri Sayımı Takip Edin</h2>
                            <p className="text-xl mb-6 text-blue-100">YKS 2026&apos;ya kalan süreyi canlı takip edin</p>
                            <Link href="/geri-sayim" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Geri Sayım →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sınav Günü Hazırlık</h2>
                        <div className="grid md:grid-cols-2 gap-6 my-6">
                            <div className="bg-green-50 p-5 rounded-lg">
                                <h3 className="font-bold text-green-900 mb-3">✅ Yanınıza Almanız Gerekenler</h3>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Sınav giriş belgesi (çıktı)</li>
                                    <li>• Kimlik belgesi (nüfus cüzdanı / pasaport)</li>
                                    <li>• Kurşun kalem (2B veya HB)</li>
                                    <li>• Silgi ve kalemtıraş</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 p-5 rounded-lg">
                                <h3 className="font-bold text-red-900 mb-3">❌ Sınava Götüremeyecekleriniz</h3>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Cep telefonu</li>
                                    <li>• Akıllı saat</li>
                                    <li>• Hesap makinesi</li>
                                    <li>• Müzik çalar</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg mb-8">
                            <h3 className="font-bold text-yellow-900 mb-2">⚠️ Önemli Uyarılar</h3>
                            <ul className="text-gray-700 text-sm space-y-1">
                                <li>✓ Başvuru ücretini zamanında yatırın — geç başvuru hakkı sınırlıdır</li>
                                <li>✓ Sınav salonuna en az 30 dakika önce gelin</li>
                                <li>✓ Tercih yaparken acele etmeyin, değişiklik hakkınızı kullanın</li>
                            </ul>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-hazirlik-programi" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">YKS Hazırlık Programı →</p>
                                </Link>
                                <Link href="/geri-sayim" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">YKS Geri Sayım →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
