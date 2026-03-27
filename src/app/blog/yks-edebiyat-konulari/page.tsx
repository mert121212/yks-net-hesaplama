import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'TYT Türkçe ve AYT Edebiyat Konuları 2026: Nokta Atışı Rehber',
    description: 'TYT\'de sadece Anlam ve Dil Bilgisi çıkar. AYT Edebiyat\'ta Cumhuriyet Dönemi, edebi sanatlar ve yazar-eser kartları. 0,5 net şartı ve 2026 ÖSYM güncel rehber.',
    keywords: 'yks edebiyat konuları, tyt türkçe, ayt edebiyat 2026, cumhuriyet dönemi edebiyatı, edebi sanatlar, yazar eser',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari' },
    openGraph: {
        title: 'TYT Türkçe ve AYT Edebiyat Konuları 2026: Nokta Atışı Rehber',
        description: 'TYT Türkçe ve AYT Edebiyat konuları, Cumhuriyet Dönemi şifresi ve edebi sanatlar rehberi.',
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
                            <span className="text-gray-600">• 8 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TYT Türkçe ve AYT Edebiyat Konuları 2026: Nokta Atışı Rehber
                        </h1>
                        <p className="text-xl text-gray-700">
                            &quot;YKS Edebiyat&quot; diye tek bir ders yoktur. TYT&apos;de Türkçe, AYT&apos;de Edebiyat ayrı sınavlardır
                            ve tamamen farklı konular içerir. Bu ayrımı bilmeden çalışmak zaman kaybıdır.
                        </p>
                    </header>
                    <div className="prose prose-lg max-w-none">

                        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">TYT Türkçe: Sadece Anlam ve Dil Bilgisi</h2>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
                            <p className="text-gray-700">
                                TYT&apos;de <strong>ayrı bir Edebiyat dersi yoktur.</strong> 40 Türkçe sorusunun tamamı
                                Anlam Bilgisi (paragraf, sözcük) ve Dil Bilgisi (cümle, yazım) konularından gelir.
                                Edebiyat dönemi veya yazar-eser sorusu TYT&apos;de çıkmaz.
                            </p>
                        </div>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">TYT Türkçe Konusu</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Tahmini Soru</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-5 py-3">Paragraf (Ana Fikir, Başlık, Boşluk Doldurma)</td><td className="px-5 py-3 text-center font-bold">15-18</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3">Sözcük Bilgisi (Anlam, Deyim, Atasözü)</td><td className="px-5 py-3 text-center font-bold">8-10</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3">Cümle Bilgisi (Yapı, Anlam, Tür)</td><td className="px-5 py-3 text-center font-bold">8-10</td></tr>
                                    <tr><td className="px-5 py-3">Yazım ve Noktalama</td><td className="px-5 py-3 text-center font-bold">4-6</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg mb-8">
                            <h3 className="font-bold text-amber-900 mb-2">⚠️ 0,5 Net Şartı Hatırlatması</h3>
                            <p className="text-gray-700 text-sm">
                                Sözelcilerin puanının hesaplanabilmesi için TYT Türkçe veya Sosyal Bilimler testlerinden
                                en az <strong>0,5 net</strong> yapmaları gerekir. Bu iki testten de sıfır net yapılırsa
                                puan hesaplanmaz.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">AYT Edebiyat: Konu Dağılımı 2026</h2>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-purple-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Konu</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Tahmini Soru</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Öncelik</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-red-50"><td className="px-5 py-3 font-medium">Cumhuriyet Dönemi Edebiyatı</td><td className="px-5 py-3 text-center font-bold">6-8</td><td className="px-5 py-3 text-red-700 font-bold">🔴 En Yüksek</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Metin İnceleme ve Edebi Sanatlar</td><td className="px-5 py-3 text-center font-bold">5-7</td><td className="px-5 py-3 text-orange-700 font-bold">🟠 Yüksek</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Yeni Türk Edebiyatı (Tanzimat–Milli Ed.)</td><td className="px-5 py-3 text-center font-bold">5-6</td><td className="px-5 py-3 text-yellow-700 font-bold">🟡 Orta</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Edebi Türler (Şiir, Roman, Tiyatro)</td><td className="px-5 py-3 text-center font-bold">4-5</td><td className="px-5 py-3 text-yellow-700 font-bold">🟡 Orta</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Eski Türk Edebiyatı (Divan, Halk)</td><td className="px-5 py-3 text-center font-bold">3-4</td><td className="px-5 py-3 text-blue-700 font-bold">🔵 Normal</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Cumhuriyet Dönemi Edebiyatının Şifresi</h2>
                        <p className="text-gray-700 mb-4">
                            En çok soru getiren ama en çok kafa karıştıran alan Cumhuriyet Dönemi&apos;dir.
                            Bunun için <strong>Yazar-Eser Kartları</strong> metodunu kullanın:
                        </p>
                        <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-lg mb-6">
                            <p className="text-purple-900 font-medium mb-2">Yazar-Eser Kartı Nasıl Yapılır?</p>
                            <p className="text-gray-700 text-sm">
                                Her yazar için küçük bir kart hazırlayın: Adı, dönemi, akımı, en önemli 2-3 eseri
                                ve üslup özelliği. Bu kartları haftada bir gözden geçirin (Ebbinghaus tekrarlama).
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Edebi Sanatlar: Sadece Liste Değil, Örnek Üzerinde Gör</h2>
                        <p className="text-gray-700 mb-4">
                            Edebi sanatları ezberlemek yetmez; metinde tanıyabilmek gerekir. Örnek:
                        </p>
                        <div className="bg-gray-50 p-5 rounded-lg mb-4 border-l-4 border-gray-400">
                            <p className="text-gray-800 italic mb-2">&quot;Gözlerin iki derin göl gibi duruyordu.&quot;</p>
                            <p className="text-gray-700 text-sm">
                                → <strong>Teşbih-i Beliğ</strong> (Benzetme edatı ve yüzü olmayan benzetme):
                                &quot;gibi&quot; edatı var, yüz yok. Gözler = göl (benzeyen = benzetilen).
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">SÖZ ve EA Puanınızı Hesaplayın</h2>
                            <p className="text-xl mb-6 text-blue-100">Edebiyat netlerinizi girerek puanınızı ve sıralamanızı öğrenin</p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Hesapla →
                            </Link>
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
