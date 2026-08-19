import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS\'de Kaç Net Kaç Puan Eder? Ham Puan ve Yerleştirme Puanı Farkı 2027',
    description: 'TYT ve AYT\'de kaç net yaparsanız kaç puan alırsınız? Ham puan ile yerleştirme puanı farkı, net getirisi ve SAY puan tablosu. YKS 2027 için güncel analiz.',
    keywords: 'kaç net kaç puan, yks net puan tablosu, tyt kaç net kaç puan, ayt kaç net kaç puan, ham puan, yerleştirme puanı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-kac-net-kac-puan' },
    openGraph: {
        title: 'YKS\'de Kaç Net Kaç Puan Eder? 2027 Tablosu',
        description: 'TYT ve AYT\'de kaç net yaparsanız kaç puan alırsınız? Net-puan dönüşüm tablosu.',
        type: 'article',
        publishedTime: '2026-02-22',
        url: 'https://yksnethesapla.com/blog/yks-kac-net-kac-puan',
    },
}

export default function YKSKacNetKacPuan() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
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
                            <time className="text-gray-600">22 Şubat 2026</time>
                            <span className="text-gray-600">• 10 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS&apos;de Kaç Net Kaç Puan Eder? Gerçekçi Net - Puan Tablosu
                        </h1>
                        <p className="text-xl text-gray-600">
                            &quot;Şu kadar net yapsam kaç puan alırım?&quot; sorusunun arkasındaki matematik. Ham puan ile OBP&apos;li yerleştirme puanının farkları ve bölüm hedefleri.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her deneme sınavından sonra arkadaşlar arasında dönen klasik sohbet: &quot;Ben 70 net yaptım, 350 gelir mi?&quot; ya da &quot;Tıp için kaç net lazım?&quot;. YKS&apos;de puan hesaplamak tek bir formülle olmuyor çünkü ÖSYM sınavın genel zorluğuna göre <strong>standart sapma</strong> uyguluyor. Yine de geçmiş yılların katsayı ortalamalarına bakarak çok net ve gerçekçi tahminler yapabiliriz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Ham Puan vs Yerleştirme Puanı: Aradaki Fark Ne?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 my-6">
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-900 text-lg mb-2">Ham Puan (Sınav Puanı)</h3>
                                <p className="text-sm text-slate-600">ÖSYM&apos;nin verdiği 100 taban puanın üstüne TYT ve AYT netlerinizin katsayılarla çarpılıp eklenmesiyle oluşur. <strong>Tavanı 500 puandır</strong>. OBP (okul puanı) bu puana dahil değildir.</p>
                            </div>
                            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl">
                                <h3 className="font-bold text-indigo-900 text-lg mb-2">Y-Puan (Yerleştirme Puanı)</h3>
                                <p className="text-sm text-indigo-800">Ham puanınızın üstüne lise diploma notunuzdan gelen OBP&apos;nin (maksimum 60 puan) eklenmiş halidir. <strong>Tavanı 560 puandır</strong>. Tercihler sadece bu puanla yapılır!</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            TYT Netlerine Göre Tahmini Puan Katkısı
                        </h2>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg text-sm">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">TYT Toplam Net</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Tahmini Ham TYT Puanı</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Seviye & Yorum</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-green-50"><td className="px-5 py-3 font-bold text-slate-900">100 – 115 Net</td><td className="px-5 py-3 text-center font-bold text-emerald-700">430 – 480 Puan</td><td>İlk 10.000 (Zirve Seviye)</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-bold text-slate-900">85 – 100 Net</td><td className="px-5 py-3 text-center font-bold text-blue-700">380 – 430 Puan</td><td>Çok İyi (Tıp, Hukuk, İyi Müh.)</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-bold text-slate-900">70 – 85 Net</td><td className="px-5 py-3 text-center font-bold text-indigo-700">330 – 380 Puan</td><td>İyi (Devlet Üniversiteleri)</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-bold text-slate-900">50 – 70 Net</td><td className="px-5 py-3 text-center font-bold text-amber-700">270 – 330 Puan</td><td>Orta Segment (Yığılma Bölgesi)</td></tr>
                                    <tr><td className="px-5 py-3 font-bold text-slate-900">30 – 50 Net</td><td className="px-5 py-3 text-center font-bold text-red-700">200 – 270 Puan</td><td>Geliştirilmeli (Temel Eksik)</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            SAY, EA ve SÖZ Puan Türlerinde Hedef Netler
                        </h2>
                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-green-50 border-l-4 border-green-600 rounded-lg">
                                <h4 className="font-bold text-green-900">Tıp Fakültesi İçin Ortalama Netler:</h4>
                                <p className="text-sm text-gray-700 mt-1">TYT: 95-105 Net | AYT Mat: 34-38 Net | AYT Fen: 32-37 Net (Toplam ~470+ Yerleştirme Puanı)</p>
                            </div>
                            <div className="p-5 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
                                <h4 className="font-bold text-blue-900">Hukuk Fakültesi İçin Ortalama Netler:</h4>
                                <p className="text-sm text-gray-700 mt-1">TYT: 75-88 Net | AYT Mat: 24-32 Net | AYT Edebiyat-Sos-1: 30-36 Net (Toplam ~410+ Yerleştirme Puanı)</p>
                            </div>
                            <div className="p-5 bg-purple-50 border-l-4 border-purple-600 rounded-lg">
                                <h4 className="font-bold text-purple-900">Mühendislikler (İyi Devlet Üni.) İçin Ortalama Netler:</h4>
                                <p className="text-sm text-gray-700 mt-1">TYT: 80-95 Net | AYT Mat: 28-35 Net | AYT Fen: 25-32 Net (Toplam ~420+ Yerleştirme Puanı)</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Kendi Netlerin Kaç Puan Getiriyor?</h3>
                            <p className="text-blue-100 mb-6">
                                Deneme sonuçlarını girerek tüm puan türlerini ve tahmini başarı sıranı hemen hesapla.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Hemen Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
