import type { Metadata } from 'next'
import Link from 'next/link'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Net Hesaplama Nasıl Yapılır? 2026 ÖSYM Güncel Rehber',
    description: '2026 YKS net hesaplama formülü, 0,5 net şartı, katsayılar, ham puan ve yerleştirme puanı farkı. TYT, AYT ve YDT netlerinizi doğru hesaplayın.',
    keywords: 'yks net hesaplama, yks net hesaplama nasıl yapılır, tyt net hesaplama, ayt net hesaplama, 0.5 net şartı, yks puan hesaplama 2026',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir' },
    openGraph: {
        title: 'YKS Net Hesaplama Nasıl Yapılır? 2026 ÖSYM Güncel Rehber',
        description: '2026 YKS net hesaplama formülü, 0,5 net şartı, katsayılar ve ham/yerleştirme puanı farkı.',
        type: 'article',
        publishedTime: '2026-02-28',
        url: 'https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir',
    },
}

export default function YKSNetHesaplamaRehberi() {
    return (
        <>
            <BlogArticleSchema
                title="YKS Net Hesaplama Nasıl Yapılır? 2026 ÖSYM Güncel Rehber"
                description="2026 YKS net hesaplama formülü, 0,5 net şartı, katsayılar ve ham/yerleştirme puanı farkı."
                datePublished="2026-02-28"
                url="https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir"
                keywords={['yks net hesaplama', 'tyt net hesaplama', 'ayt net hesaplama', '0.5 net şartı', 'yks puan hesaplama 2026']}
            />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
                <article className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <nav className="mb-8 text-sm text-gray-600">
                            <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                            {' > '}
                            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                            {' > '}
                            <span className="text-gray-900">YKS Net Hesaplama Nasıl Yapılır?</span>
                        </nav>

                        <header className="mb-8">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                                <time className="text-gray-600">28 Şubat 2026</time>
                                <span className="text-gray-600">• 9 dakika okuma</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                YKS Net Hesaplama Nasıl Yapılır? 2026 Güncel Rehber
                            </h1>
                            <p className="text-xl text-gray-600">
                                2026 YKS sürecinde netlerinizi doğru hesaplamak, sadece kaç puan aldığınızı değil,
                                Türkiye genelindeki yerinizi de anlamanızı sağlar. Bu rehberde ÖSYM&apos;nin güncel
                                verilerine göre net hesaplama mantığını ve katsayı etkilerini inceleyeceğiz.
                            </p>
                        </header>

                        <div className="prose prose-lg max-w-none">

                            {/* 1. Formül */}
                            <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">1. Net Hesaplama Formülü</h2>
                            <p className="text-gray-700 mb-4">
                                YKS sisteminde temel kural <strong>&quot;4 Yanlış 1 Doğruyu Götürür&quot;</strong> prensibidir.
                                Matematiksel formülü şöyledir:
                            </p>
                            <div className="bg-gray-100 p-6 rounded-lg my-6 text-center">
                                <p className="text-2xl font-bold text-gray-900 font-mono">
                                    Net = Doğru Sayısı − (Yanlış Sayısı ÷ 4)
                                </p>
                            </div>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg mb-6">
                                <p className="text-blue-900 text-sm">
                                    <strong>İpucu:</strong> Boş bırakılan soruların puan değeri 0&apos;dır.
                                    Ne artı ne de eksi yönde bir etkisi olmaz; sadece yanlış cevaplar 0,25 net eksiltir.
                                </p>
                            </div>

                            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Örnek Hesaplamalar</h3>
                            <div className="overflow-x-auto my-6">
                                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                    <thead className="bg-blue-50">
                                        <tr>
                                            <th className="px-5 py-3 text-left font-semibold border-b">Ders</th>
                                            <th className="px-5 py-3 text-center font-semibold border-b">Doğru</th>
                                            <th className="px-5 py-3 text-center font-semibold border-b">Yanlış</th>
                                            <th className="px-5 py-3 text-center font-semibold border-b">Boş</th>
                                            <th className="px-5 py-3 text-center font-semibold border-b">Net</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b"><td className="px-5 py-3">TYT Matematik</td><td className="px-5 py-3 text-center">30</td><td className="px-5 py-3 text-center">10</td><td className="px-5 py-3 text-center">0</td><td className="px-5 py-3 text-center font-bold text-green-700">27,5</td></tr>
                                        <tr className="border-b bg-gray-50"><td className="px-5 py-3">TYT Türkçe</td><td className="px-5 py-3 text-center">32</td><td className="px-5 py-3 text-center">6</td><td className="px-5 py-3 text-center">2</td><td className="px-5 py-3 text-center font-bold text-green-700">30,5</td></tr>
                                        <tr className="border-b"><td className="px-5 py-3">AYT Matematik</td><td className="px-5 py-3 text-center">20</td><td className="px-5 py-3 text-center">16</td><td className="px-5 py-3 text-center">4</td><td className="px-5 py-3 text-center font-bold text-green-700">16,0</td></tr>
                                        <tr><td className="px-5 py-3">Eksi Net Örneği</td><td className="px-5 py-3 text-center">2</td><td className="px-5 py-3 text-center">12</td><td className="px-5 py-3 text-center">6</td><td className="px-5 py-3 text-center font-bold text-red-600">−1,0</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* 2. 0.5 Net Kuralı */}
                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">2. Kritik Uyarı: 0,5 Net Şartı</h2>
                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
                                <h3 className="font-bold text-red-900 mb-2">⚠️ Dikkat! Puanınız Hesaplanmayabilir</h3>
                                <p className="text-gray-700">
                                    2026 kurallarına göre bir puan türünde yerleştirme puanınızın hesaplanabilmesi için
                                    ilgili testlerden en az <strong>0,5 net</strong> yapmış olmanız gerekir.
                                    TYT&apos;de Türkçe veya Matematik&apos;ten 1 net bile yapamazsanız, puanınız hesaplanmaz
                                    ve tercih yapamazsınız.
                                </p>
                            </div>
                            <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-lg mb-8">
                                <p className="text-green-900 text-sm">
                                    <strong>✅ Baraj Bilgisi:</strong> 2022 yılından itibaren TYT&apos;de 150 puan barajı
                                    uygulaması tamamen kaldırılmıştır. Sadece 0,5 net şartı geçerlidir.
                                </p>
                            </div>

                            {/* 3. Soru Dağılımı */}
                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">3. TYT Soru Dağılımı 2026</h2>
                            <div className="overflow-x-auto my-6">
                                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                    <thead className="bg-green-50">
                                        <tr>
                                            <th className="px-5 py-3 text-left font-semibold border-b">Ders</th>
                                            <th className="px-5 py-3 text-center font-semibold border-b">Soru Sayısı</th>
                                            <th className="px-5 py-3 text-center font-semibold border-b">Tahmini Katsayı</th>
                                            <th className="px-5 py-3 text-center font-semibold border-b">Tam Net Katkısı</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b"><td className="px-5 py-3 font-medium">Türkçe</td><td className="px-5 py-3 text-center">40</td><td className="px-5 py-3 text-center">~1,33</td><td className="px-5 py-3 text-center font-bold text-blue-700">~53 puan</td></tr>
                                        <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Matematik</td><td className="px-5 py-3 text-center">40</td><td className="px-5 py-3 text-center">~1,33</td><td className="px-5 py-3 text-center font-bold text-blue-700">~53 puan</td></tr>
                                        <tr className="border-b"><td className="px-5 py-3 font-medium">Sosyal Bilimler</td><td className="px-5 py-3 text-center">20</td><td className="px-5 py-3 text-center">~1,00</td><td className="px-5 py-3 text-center font-bold text-blue-700">~20 puan</td></tr>
                                        <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Fen Bilimleri</td><td className="px-5 py-3 text-center">20</td><td className="px-5 py-3 text-center">~1,00</td><td className="px-5 py-3 text-center font-bold text-blue-700">~20 puan</td></tr>
                                        <tr><td className="px-5 py-3 font-bold">TOPLAM</td><td className="px-5 py-3 text-center font-bold">120</td><td className="px-5 py-3 text-center">—</td><td className="px-5 py-3 text-center font-bold text-green-700">~146 puan</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-gray-500 mb-8">* Katsayılar tahminidir. ÖSYM standart sapma normalizasyonu kullandığından kesin katsayılar her yıl değişir.</p>

                            {/* CTA */}
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                                <h2 className="text-3xl font-bold mb-4">Hemen Net Hesaplamanızı Yapın</h2>
                                <p className="text-xl mb-6 text-blue-100">
                                    TYT, AYT ve YDT netlerinizi girerek SAY, EA, SÖZ puanlarınızı ve tahmini sıralamanızı öğrenin
                                </p>
                                <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                    Ücretsiz Hesapla →
                                </Link>
                            </div>

                            {/* 4. Katsayılar */}
                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">4. Katsayılar ve Standart Sapma</h2>
                            <p className="text-gray-700 mb-4">
                                Netlerin puana dönüşümünde her dersin ağırlığı farklıdır. Tahmini katsayılar:
                            </p>
                            <ul className="space-y-2 text-gray-700 mb-4 list-disc list-inside">
                                <li>TYT Türkçe / Matematik: <strong>~1,33 puan/net</strong></li>
                                <li>TYT Sosyal / Fen: <strong>~1,00 puan/net</strong></li>
                                <li>AYT Dersleri: <strong>~3,00 puan/net</strong> (alanınıza göre değişir)</li>
                            </ul>
                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg mb-8">
                                <p className="text-yellow-900 text-sm">
                                    <strong>Standart Sapma:</strong> Zor soruları çözen adaylara ekstra puan gelmez;
                                    ancak tüm Türkiye&apos;nin zorlandığı bir testte yapılan her netin değeri artar.
                                    Bu nedenle sınavın zorluğu puanları doğrudan etkiler.
                                </p>
                            </div>

                            {/* 5. Ham Puan vs Yerleştirme */}
                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">5. Ham Puan ve Yerleştirme Puanı Farkı</h2>
                            <div className="grid md:grid-cols-2 gap-6 my-6">
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg">
                                    <h3 className="font-bold text-blue-900 mb-2">Ham Puan</h3>
                                    <p className="text-gray-700 text-sm">
                                        Sadece netlerinizin katsayılarla çarpılmasıyla elde edilen puandır.
                                        Taban 100 puan + netlerin getirisi. <strong>Maksimum 500 puan.</strong>
                                    </p>
                                </div>
                                <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-lg">
                                    <h3 className="font-bold text-green-900 mb-2">Yerleştirme Puanı</h3>
                                    <p className="text-gray-700 text-sm">
                                        Ham puana OBP katkısının eklenmiş halidir.
                                        Üniversite tercihleri <strong>yerleştirme puanı</strong> ve başarı sırasına göre yapılır.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-lg mb-6 border-l-4 border-gray-400">
                                <p className="text-gray-700 text-sm">
                                    <strong>OBP Formülü:</strong> Diploma Notu × 0,6 = Puan Katkısı
                                    (Diploma notu 85 → +51 puan katkı).
                                    Geçen yıl yerleşenler için katsayı yarıya düşer: Diploma Notu × 0,3.
                                    Detaylar için{' '}
                                    <Link href="/blog/obp-hesaplama" className="text-blue-600 hover:underline font-medium">
                                        OBP Hesaplama
                                    </Link>{' '}
                                    sayfamıza bakın.
                                </p>
                            </div>

                            {/* 6. AYT Dağılımı */}
                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">6. AYT Soru Dağılımı 2026</h2>
                            <div className="overflow-x-auto my-6">
                                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                    <thead className="bg-purple-50">
                                        <tr>
                                            <th className="px-5 py-3 text-left font-semibold border-b">Puan Türü</th>
                                            <th className="px-5 py-3 text-left font-semibold border-b">Dersler</th>
                                            <th className="px-5 py-3 text-center font-semibold border-b">Soru</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b"><td className="px-5 py-3 font-medium text-green-700">SAY</td><td className="px-5 py-3 text-sm">Matematik (40) + Fizik (14) + Kimya (13) + Biyoloji (13)</td><td className="px-5 py-3 text-center font-bold">80</td></tr>
                                        <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium text-blue-700">EA</td><td className="px-5 py-3 text-sm">Matematik (40) + Edebiyat (24) + Tarih-1 (10) + Coğrafya-1 (6)</td><td className="px-5 py-3 text-center font-bold">80</td></tr>
                                        <tr className="border-b"><td className="px-5 py-3 font-medium text-purple-700">SÖZ</td><td className="px-5 py-3 text-sm">Edebiyat (24) + Tarih-1&2 (21) + Coğrafya-1&2 (17) + Felsefe (12) + Din (6)</td><td className="px-5 py-3 text-center font-bold">80</td></tr>
                                        <tr><td className="px-5 py-3 font-medium text-orange-700">DİL</td><td className="px-5 py-3 text-sm">YDT — Yabancı Dil (İngilizce, Almanca, Fransızca, Arapça)</td><td className="px-5 py-3 text-center font-bold">80</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-gray-700 mb-6 text-sm">
                                Hedeflediğiniz bölümün puan türünü öğrenmek için{' '}
                                <Link href="/blog/yks-puan-turleri" className="text-blue-600 hover:underline font-medium">
                                    YKS Puan Türleri
                                </Link>{' '}
                                rehberimize göz atın.
                            </p>

                            {/* SSS */}
                            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sıkça Sorulan Sorular</h2>
                            <div className="space-y-4 my-6">
                                <div className="border-b pb-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Eksi nete düşer miyim?</h3>
                                    <p className="text-gray-700 text-sm">
                                        Evet. Yanlışlarınız doğrularınızın 4 katından fazlaysa netiniz negatif olabilir.
                                        Örneğin 2 doğru, 12 yanlış: 2 − (12÷4) = −1 net. Hesaplama motorumuz negatif netleri 0 olarak işler.
                                    </p>
                                </div>
                                <div className="border-b pb-4">
                                    <h3 className="font-bold text-gray-900 mb-2">Boş bıraktığım sorular net hesabımı etkiler mi?</h3>
                                    <p className="text-gray-700 text-sm">
                                        Hayır. Boş bırakılan sorular net hesabınızı etkilemez; sadece yanlış cevaplar 0,25 net düşürür.
                                    </p>
                                </div>
                                <div className="border-b pb-4">
                                    <h3 className="font-bold text-gray-900 mb-2">TYT&apos;de baraj puanı var mı?</h3>
                                    <p className="text-gray-700 text-sm">
                                        2022&apos;den itibaren 150 puan barajı kaldırılmıştır. Türkçe veya Matematik&apos;ten 0,5 net yapmanız yeterlidir.
                                    </p>
                                </div>
                                <div className="border-b pb-4">
                                    <h3 className="font-bold text-gray-900 mb-2">OBP nedir ve nasıl hesaplanır?</h3>
                                    <p className="text-gray-700 text-sm">
                                        OBP, lise diploma notunuzun YKS puanına katkısıdır. Formül: Diploma Notu × 0,6 = Puan Katkısı.
                                        Detaylar için{' '}
                                        <Link href="/blog/obp-hesaplama" className="text-blue-600 hover:underline">OBP Hesaplama</Link>
                                        {' '}sayfamıza bakın.
                                    </p>
                                </div>
                                <div className="pb-4">
                                    <h3 className="font-bold text-gray-900 mb-2">En gerçekçi sıralama tahmini nasıl yapılır?</h3>
                                    <p className="text-gray-700 text-sm">
                                        2025 YKS yığılma verilerine dayalı algoritmamız için{' '}
                                        <Link href="/" className="text-blue-600 hover:underline font-medium">Net Hesaplama Aracımızı</Link>
                                        {' '}kullanabilirsiniz.
                                    </p>
                                </div>
                            </div>

                            <div className="border-t pt-8 mt-12">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <Link href="/blog/tyt-net-hesaplama-rehberi" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                        <p className="font-semibold text-blue-900">TYT Net Hesaplama Rehberi →</p>
                                        <p className="text-sm text-gray-700">0,5 net şartı ve strateji</p>
                                    </Link>
                                    <Link href="/blog/ayt-puan-hesaplama" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                        <p className="font-semibold text-green-900">AYT Puan Hesaplama →</p>
                                        <p className="text-sm text-gray-700">SAY, EA, SÖZ, DİL puanları</p>
                                    </Link>
                                    <Link href="/blog/obp-hesaplama" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                        <p className="font-semibold text-purple-900">OBP Hesaplama →</p>
                                        <p className="text-sm text-gray-700">Diploma notunuzun etkisi</p>
                                    </Link>
                                    <Link href="/blog/yks-puan-turleri" className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                                        <p className="font-semibold text-orange-900">YKS Puan Türleri →</p>
                                        <p className="text-sm text-gray-700">Başarı sırası barajları</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}
