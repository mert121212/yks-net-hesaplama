import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'YKS Edebiyat Konuları ve Çalışma Taktikleri 2026',
    description: 'TYT ve AYT Edebiyat konuları nelerdir? Etkili çalışma yöntemleri ve ipuçları. 2026 YKS için güncel rehber.',
    keywords: 'yks edebiyat konuları, tyt edebiyat, ayt edebiyat, edebiyat çalışma',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari' },
    openGraph: {
        title: 'YKS Edebiyat Konuları ve Çalışma Taktikleri 2026',
        description: 'TYT ve AYT Edebiyat konuları nelerdir? Etkili çalışma yöntemleri ve ipuçları.',
        type: 'article',
        publishedTime: '2026-02-17',
        url: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari',
    },
}

export default function YKSEdebiyatKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Edebiyat Konuları</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Dersler</span>
                            <time className="text-gray-600">17 Şubat 2026</time>
                            <span className="text-gray-600">• 7 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS Edebiyat Konuları ve Çalışma Taktikleri
                        </h1>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            Edebiyat, hem TYT'de hem AYT'de çıkan önemli bir derstir. Doğru çalışma yöntemiyle
                            yüksek net yapabilirsiniz.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">TYT Edebiyat (Türkçe İçinde)</h2>

                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                            <p className="text-gray-700">
                                TYT'de ayrı bir Edebiyat dersi yoktur. Edebiyat soruları Türkçe dersi içinde sorulur.
                                40 Türkçe sorusunun yaklaşık 5-8'i edebiyat konularındandır.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">AYT Edebiyat Konuları</h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-purple-900 mb-3">1. Eski Türk Edebiyatı (4-5 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• İslamiyet Öncesi Türk Edebiyatı</li>
                                    <li>• İslamiyet Sonrası Türk Edebiyatı</li>
                                    <li>• Divan Edebiyatı</li>
                                    <li>• Halk Edebiyatı</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">2. Yeni Türk Edebiyatı (8-10 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Tanzimat Edebiyatı</li>
                                    <li>• Servet-i Fünun Edebiyatı</li>
                                    <li>• Fecr-i Ati Edebiyatı</li>
                                    <li>• Milli Edebiyat</li>
                                    <li>• Cumhuriyet Dönemi Edebiyatı</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-green-900 mb-3">3. Edebi Türler (5-6 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Şiir (Nazım Biçimleri, Ölçü)</li>
                                    <li>• Roman ve Hikaye</li>
                                    <li>• Tiyatro</li>
                                    <li>• Deneme ve Makale</li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-orange-900 mb-3">4. Metin İnceleme (5-7 soru)</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Şiir Tahlili</li>
                                    <li>• Nesir Tahlili</li>
                                    <li>• Tema ve Ana Fikir</li>
                                    <li>• Edebi Sanatlar</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Puanınızı Hesaplayın!</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                SÖZ ve EA puanlarınızı öğrenin
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Etkili Çalışma Yöntemleri</h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                                <h3 className="font-bold text-blue-900 mb-2">1. Dönemleri İyi Öğrenin</h3>
                                <p className="text-gray-700">
                                    Her edebiyat döneminin özelliklerini, önemli şairlerini ve eserlerini öğrenin.
                                    Dönemler arası farkları not alın.
                                </p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                                <h3 className="font-bold text-green-900 mb-2">2. Bol Metin Okuyun</h3>
                                <p className="text-gray-700">
                                    Farklı dönemlerden şiir ve nesir örnekleri okuyun. Metin analizi yapma
                                    becerinizi geliştirin.
                                </p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                                <h3 className="font-bold text-purple-900 mb-2">3. Edebi Sanatları Ezberleyin</h3>
                                <p className="text-gray-700">
                                    Teşbih, mecaz, kinaye gibi edebi sanatları örnekleriyle birlikte öğrenin.
                                    Metinlerde tanıyabilmelisiniz.
                                </p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                                <h3 className="font-bold text-orange-900 mb-2">4. Şair ve Yazarları Tanıyın</h3>
                                <p className="text-gray-700">
                                    Önemli şair ve yazarların hayatlarını, eserlerini ve üsluplarını öğrenin.
                                    Hangi döneme ait olduklarını bilin.
                                </p>
                            </div>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
                            <h3 className="font-bold text-yellow-900 mb-3">💡 Başarı İpuçları</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>✓ Her gün en az 30 dakika edebiyat çalışın</li>
                                <li>✓ Dönem özelliklerini tablo halinde çıkarın</li>
                                <li>✓ Önemli eserlerin özetlerini okuyun</li>
                                <li>✓ Şiirleri sesli okuyun, ritmi yakalayın</li>
                                <li>✓ Edebi sanatları günlük hayatta fark edin</li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sık Yapılan Hatalar</h2>

                        <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
                            <h3 className="font-bold text-red-900 mb-3">⚠️ Dikkat!</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>❌ Sadece ezber yapmak, anlamadan öğrenmek</li>
                                <li>❌ Metin okumadan konu çalışmak</li>
                                <li>❌ Dönemleri karıştırmak</li>
                                <li>❌ Edebi sanatları tanıyamamak</li>
                                <li>❌ Şair ve yazarları dönemleriyle eşleştirememek</li>
                            </ul>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-puan-turleri" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">YKS Puan Türleri →</p>
                                </Link>
                                <Link href="/blog/ayt-puan-hesaplama" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">AYT Puan Hesaplama →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
