import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'

export const metadata: Metadata = {
    title: 'YKS\'de Kaç Net Kaç Puan Eder? Net-Puan Tablosu ve Bölüm Hedefleri 2027',
    description: 'TYT ve AYT netleri kaç puana denk gelir? Ham puan ile yerleştirme farkı, Tıp, Hukuk ve Mühendislik için gereken netler ve net-puan analiz rehberi.',
    keywords: 'kaç net kaç puan, yks net puan tablosu, tyt kaç net kaç puan, ayt kaç net kaç puan, tıp kaç net, hukuk kaç net',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-kac-net-kac-puan' },
    openGraph: {
        title: 'YKS\'de Kaç Net Kaç Puan Eder? Gerçekçi Net-Puan Rehberi',
        description: 'Deneme netleriniz kaç puana karşılık geliyor? Standart sapma, zorluk dereceleri ve bölüm kazanma eşikleri.',
        type: 'article',
        publishedTime: '2026-02-22',
        modifiedTime: '2026-02-25',
        url: 'https://yksnethesapla.com/blog/yks-kac-net-kac-puan',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Kaç Net Kaç Puan Analizi'
            }
        ],
    },
}

export default function YKSKacNetKacPuan() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS'de Kaç Net Kaç Puan Eder? Net-Puan Tablosu ve Bölüm Hedefleri 2027" 
                    description="TYT ve AYT netleri kaç puana denk gelir? Ham puan ile yerleştirme farkı, Tıp, Hukuk ve Mühendislik için gereken netler ve net-puan analiz rehberi."
                    datePublished="2026-02-22"
                    dateModified="2026-02-25"
                    url="https://yksnethesapla.com/blog/yks-kac-net-kac-puan"
                    keywords={['kaç net kaç puan', 'yks net puan tablosu', 'tyt kaç net kaç puan', 'ayt kaç net kaç puan', 'tıp kaç net', 'hukuk kaç net']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Kaç Net Kaç Puan</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-22">22 Şubat 2026</time>
                            <span className="text-gray-600">• 12 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            &quot;80 Net Yaptım, 400 Gelir mi?&quot; — Gerçekçi Net-Puan Tablosu ve Yanılgılar
                        </h1>
                        <p className="text-xl text-gray-600">
                            Deneme sınavından sonra herkesin birbirine fısıldadığı o sorunun cevabı tek bir sayıdan ibaret değil. ÖSYM katsayıları neden her yıl savrulur ve elinizdeki net gerçekte ne anlama gelir?
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Deneme sınavından çıkan hemen her adayın aklındaki ilk soru aynıdır:
                        </p>
                        <p className="border-l-4 border-blue-500 pl-4 italic text-gray-800 font-medium">
                            — &quot;80 net yaptım, kaç puan gelir? 400&apos;ü görür müyüm?&quot;
                        </p>
                        <p>
                            Bu soruya tereddütsüz tek bir puan söyleyen biri varsa bilin ki sizi yanıltıyordur. Çünkü YKS&apos;de netlerin puana ve sıralamaya dönüşümü her sene sınavın zorluğuna göre baştan yazılır.
                        </p>
                        <p>
                            Örneğin 2021 gibi zor bir sınavda 75 netle ilk 20 binin kapısını açan bir aday, soruların daha rahat çözüldüğü 2022 sınavında aynı 75 netle 65-70 bininci sıraya gerileyebiliyordu. Yine de ÖSYM&apos;nin katsayı mantığını bildiğinizde, elinizdeki netin kabaca hangi başarı bandında durduğunu çok net görebilirsiniz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Önce Temel Ayrımı Yapalım: Ham Puan mı, Yerleştirme Puanı mı?
                        </h2>
                        <p>
                            &quot;Ben 420 puan aldım&quot; diyen birine sormanız gereken ilk şey şudur: Ham puanın mı, yoksa okul puanı eklenmiş yerleştirme puanın mı?
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-900 text-lg mb-2">Ham Puan (Sınavın Net Getirisi)</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    ÖSYM&apos;nin her adaya verdiği 100 taban puanın üzerine testlerden topladığınız netlerin katsayılarla çarpılıp eklenmesidir. Okul notu dahil edilmez. Tavan puan 500&apos;dür.
                                </p>
                            </div>
                            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl">
                                <h3 className="font-bold text-indigo-900 text-lg mb-2">Yerleştirme Puanı (Tercih Puanınız)</h3>
                                <p className="text-sm text-indigo-800 leading-relaxed">
                                    Ham puanınızın üzerine lise diploma notunuzdan türetilen OBP&apos;nin (en fazla +60 puan) eklenmiş halidir. Tercih listesi yaparken kullanacağınız nihai rakam budur. Tavan puan 560&apos;tır.
                                </p>
                            </div>
                        </div>

                        <p>
                            Aynı denemede tıpatıp aynı neti yapan iki arkadaştan lise ortalaması 95 olanı, lise ortalaması 70 olan arkadaşına tam 15 puan fark atar. Bu fark, orta sıralarda yarışırken binlerce adayın gerisine düşmek demektir.
                        </p>

                        <QuickNetSimulator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Hangi TYT Neti Sizi Nereye Taşır?
                        </h2>
                        <p>
                            Genel bir fikir vermesi açısından TYT net aralıklarının ortalama karşılığı şöyledir:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-900 text-lg mb-1">100 - 115 Net Aralığı (İlk 10.000 Hedefi)</h3>
                                <p className="text-sm text-emerald-800 leading-relaxed">
                                    Hata payının minimum olduğu elit banttır. Ham puan tahminen 435 ile 480 arasında seyreder. Tıp, köklü mühendislikler ve Boğaziçi/ODTÜ gibi hedefler için gereken zemin burasıdır.
                                </p>
                            </div>

                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-900 text-lg mb-1">85 - 100 Net Aralığı (10.000 - 50.000 Bandı)</h3>
                                <p className="text-sm text-blue-800 leading-relaxed">
                                    Puan karşılığı kabaca 380 ile 430 arasındadır. Anadolu&apos;daki tıp fakülteleri, saygın hukuk programları ve iyi mühendislikler için çok sağlam bir basamaktır.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-900 text-lg mb-1">70 - 85 Net Aralığı (50.000 - 140.000 Eşiği)</h3>
                                <p className="text-sm text-amber-800 leading-relaxed">
                                    Puan aralığı 330 ile 380 civarındadır. AYT netleriniz güçlüyse sizi çok rahat ilk 40 bine taşıyabilir; AYT zayıf kalırsa geriye düşebilirsiniz. Hemşirelik, mimarlık ve popüler öğretmenlikler bu havuzdadır.
                                </p>
                            </div>

                            <div className="p-5 bg-rose-50 border border-rose-200 rounded-xl">
                                <h3 className="font-bold text-rose-900 text-lg mb-1">50 - 70 Net Aralığı (Geniş Yığılma Bölgesi)</h3>
                                <p className="text-sm text-rose-800 leading-relaxed">
                                    Puan karşılığı 270 ile 330 arasındadır. Yüz binlerce adayın birbirine en yakın puanları aldığı alandır. Burada yapacağınız ekstra 2-3 net sizi bir anda binlerce sıra ileri taşır.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Hedef Bölümler İçin Masada Olması Gereken Netler
                        </h2>
                        <p>
                            Popüler hedeflere yerleşen adayların ortalama net profili şöyledir:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Devlet Tıp Fakültesi:</strong> TYT&apos;de en az 98-102 net; AYT Matematikte 34-36 net, AYT Fende 33-35 net.</li>
                            <li><strong>Bilgisayar / Yazılım Mühendisliği (İyi Üniversiteler):</strong> TYT&apos;de 90-95 net; AYT Matematikte 30-33 net, AYT Fende 28-32 net.</li>
                            <li><strong>Devlet Hukuk Fakültesi (Eşit Ağırlık):</strong> TYT&apos;de 80-85 net; AYT Matematikte 25-28 net, AYT Edebiyat-Sosyal-1 testinde 32-35 net.</li>
                        </ul>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Kendi Netlerinizin Puanını Canlı Görün</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                TYT ve AYT doğru-yanlış sayılarınızı hesaplayıcımıza girin; ÖSYM katsayılarına göre güncel puanınızı ve Türkiye geneli tahmini derecenizi tek tıkla öğrenin.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Hemen Net Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Bu Yazıları da Mutlaka Okuyun</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-yigilma-tehlikesi" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">YKS Yığılma Tehlikesi ve Kurtulma Yolları →</p>
                                    <p className="text-xs text-gray-600 mt-1">Aynı neti yapan binlerce adayın arasından nasıl sıyrılırsınız?</p>
                                </Link>
                                <Link href="/blog/tyt-net-artirma-taktikleri" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">TYT Net Artırma Taktikleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">Platoya takılan netleri yukarı taşıyacak somut çalışma stratejileri.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
