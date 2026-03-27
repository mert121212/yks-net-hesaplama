import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'YKS Hazırlık Programı 2026: Pomodoro, Feynman ve Ebbinghaus Teknikleri',
    description: 'Bilimsel öğrenme yöntemleriyle YKS hazırlığı. Pomodoro 2.0, Feynman tekniği, Ebbinghaus unutma eğrisi ve MEB kaynakları. 2026 YKS için güncel rehber.',
    keywords: 'yks hazırlık programı, pomodoro tekniği, feynman tekniği, ebbinghaus, yks çalışma 2026, meb kaynakları',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-hazirlik-programi' },
    openGraph: {
        title: 'YKS Hazırlık Programı 2026: Bilimsel Öğrenme Teknikleri',
        description: 'Pomodoro 2.0, Feynman tekniği ve Ebbinghaus unutma eğrisiyle YKS hazırlığı.',
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
                            YKS Hazırlık Programı 2026: Bilimsel Öğrenme Teknikleri
                        </h1>
                        <p className="text-xl text-gray-700">
                            &quot;Çok çalış&quot; demek yetmez. Nasıl öğrenildiği, ne kadar çalışıldığından daha önemlidir.
                            İşte bilim destekli 2026 YKS hazırlık rehberi.
                        </p>
                    </header>

                    <div className="prose prose-lg max-w-none">

                        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">1. Pomodoro 2.0: İleri Seviye Odak Tekniği</h2>
                        <p className="text-gray-700 mb-4">
                            Klasik Pomodoro (25 dakika çalış / 5 dakika mola) başlangıç için iyidir.
                            Ancak YKS gibi uzun soluklu bir sınavda <strong>50/10 tekniği</strong> daha verimlidir:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-green-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Teknik</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Çalışma</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Mola</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Uygun Durum</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="px-5 py-3 font-medium">Klasik Pomodoro</td>
                                        <td className="px-5 py-3 text-center">25 dk</td>
                                        <td className="px-5 py-3 text-center">5 dk</td>
                                        <td className="px-5 py-3 text-sm">Yeni konu öğrenme</td>
                                    </tr>
                                    <tr className="bg-green-50">
                                        <td className="px-5 py-3 font-bold text-green-700">Pomodoro 2.0</td>
                                        <td className="px-5 py-3 text-center font-bold">50 dk</td>
                                        <td className="px-5 py-3 text-center font-bold">10 dk</td>
                                        <td className="px-5 py-3 text-sm">Soru çözme, deneme</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">2. Feynman Tekniği: Kalıcı Öğrenmenin Sırrı</h2>
                        <p className="text-gray-700 mb-4">
                            Nobel ödüllü fizikçi Richard Feynman&apos;ın geliştirdiği bu yöntem,
                            <strong> Active Recall</strong> (aktif hatırlama) prensibine dayanır:
                        </p>
                        <div className="space-y-3 my-6">
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <p className="font-bold text-blue-900 mb-1">Adım 1 — Konuyu Öğren</p>
                                <p className="text-gray-700 text-sm">Herhangi bir kaynaktan konuyu çalışın.</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <p className="font-bold text-blue-900 mb-1">Adım 2 — Hiç Bilmeyene Anlat</p>
                                <p className="text-gray-700 text-sm">Kitabı kapatın. Konuyu 10 yaşında birine anlatır gibi kağıda yazın veya sesli anlatın.</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <p className="font-bold text-blue-900 mb-1">Adım 3 — Boşlukları Bul</p>
                                <p className="text-gray-700 text-sm">Takıldığınız yerler gerçek eksiklerinizdir. O kısımlara geri dönün.</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <p className="font-bold text-blue-900 mb-1">Adım 4 — Sadeleştir</p>
                                <p className="text-gray-700 text-sm">Anlatımınızı daha da basitleştirin. Gerçekten anladığınızda her şeyi sade anlatabilirsiniz.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">3. Ebbinghaus Unutma Eğrisi: Neden Tekrar Şart?</h2>
                        <p className="text-gray-700 mb-4">
                            Alman psikolog Hermann Ebbinghaus&apos;un araştırmasına göre, öğrenilen bilginin
                            <strong> %70&apos;i 24 saat içinde unutulur</strong>. Bunu önlemenin tek yolu düzenli tekrardır:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-purple-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Tekrar Zamanı</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Hatırlama Oranı</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Ne Yapmalı?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-5 py-3">Öğrenme günü</td><td className="px-5 py-3 text-center font-bold text-green-700">%100</td><td className="px-5 py-3 text-sm">Konuyu öğren</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3">1 gün sonra</td><td className="px-5 py-3 text-center font-bold text-yellow-700">%30</td><td className="px-5 py-3 text-sm">Kısa tekrar (10 dk)</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3">1 hafta sonra</td><td className="px-5 py-3 text-center font-bold text-orange-700">%20</td><td className="px-5 py-3 text-sm">Soru çözerek tekrar</td></tr>
                                    <tr><td className="px-5 py-3">1 ay sonra</td><td className="px-5 py-3 text-center font-bold text-red-700">%10</td><td className="px-5 py-3 text-sm">Deneme sınavıyla pekiştir</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">4. Sorular Nereden Gelir? MEB Kaynakları</h2>
                        <p className="text-gray-700 mb-4">
                            ÖSYM soruları MEB müfredatına dayanır. Bu nedenle en güvenilir kaynaklar resmi platformlardır:
                        </p>
                        <div className="space-y-3 my-6">
                            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                                <h3 className="font-bold text-amber-900 mb-1">OGM Materyal (ogmmateryal.meb.gov.tr)</h3>
                                <p className="text-gray-700 text-sm">MEB&apos;in resmi ders kitapları ve çalışma materyalleri. Konu sınırlarını buradan öğrenin.</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                                <h3 className="font-bold text-amber-900 mb-1">EBA Akademik Destek (eba.gov.tr)</h3>
                                <p className="text-gray-700 text-sm">Video anlatımlar, soru bankaları ve konu özetleri. Ücretsiz ve resmi kaynak.</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Geri Sayımı Takip Et</h2>
                            <p className="text-xl mb-6 text-blue-100">YKS 2026&apos;ya kalan süreyi görün, motivasyonunu koru</p>
                            <Link href="/geri-sayim" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Geri Sayım →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Haftalık Program Örneği</h2>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Gün</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Sabah</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Öğleden Sonra</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Pazartesi</td><td className="px-5 py-3">Matematik (yeni konu)</td><td className="px-5 py-3">Fizik</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Salı</td><td className="px-5 py-3">Türkçe</td><td className="px-5 py-3">Edebiyat</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Çarşamba</td><td className="px-5 py-3">Matematik (tekrar)</td><td className="px-5 py-3">Kimya</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Perşembe</td><td className="px-5 py-3">Tarih</td><td className="px-5 py-3">Coğrafya</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Cuma</td><td className="px-5 py-3">Biyoloji</td><td className="px-5 py-3">Deneme analizi</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Cumartesi</td><td className="px-5 py-3" colSpan={2}>Tam TYT veya AYT Denemesi</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Pazar</td><td className="px-5 py-3" colSpan={2}>Dinlenme + Hafif Ebbinghaus Tekrarı</td></tr>
                                </tbody>
                            </table>
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
