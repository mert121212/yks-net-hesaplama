import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS\'de Kaç Net Kaç Puan Eder? Net-Puan Tablosu ve Bölüm Hedefleri 2027',
    description: 'TYT ve AYT\'de kaç net kaç puan? Ham puan ve yerleştirme puanı farkı, Tıp, Hukuk, Mühendislik için gereken netler. 2027 güncel analiz.',
    keywords: 'kaç net kaç puan, yks net puan tablosu, tyt kaç net kaç puan, ayt kaç net kaç puan, tıp kaç net, hukuk kaç net',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-kac-net-kac-puan' },
    openGraph: {
        title: 'YKS\'de Kaç Net Kaç Puan Eder? 2027 Güncel Tablo',
        description: 'TYT ve AYT\'de kaç net yaparsanız kaç puan alırsınız? Net-puan dönüşüm tablosu.',
        type: 'article',
        publishedTime: '2026-02-22',
        modifiedTime: '2026-08-19',
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
                            <time className="text-gray-600">19 Ağustos 2026</time>
                            <span className="text-gray-600">• 12 dk okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            &quot;80 Net Yaptım, 400 Gelir mi?&quot; — Gerçekçi Net-Puan Tablosu
                        </h1>
                        <p className="text-xl text-gray-600">
                            Deneme sınavından sonra herkesin sorduğu sorunun cevabı basit değil çünkü ÖSYM her sene farklı katsayı kullanıyor. Ama elimizdeki verilerle çok yakın tahmin yapabiliriz.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Deneme sınavı bitti, netleri saydın, WhatsApp grubuna yazdın: &quot;Ben 75 net yaptım, 380 gelir mi?&quot;. Karşıdan biri cevap verdi: &quot;Geçen sene arkadaşım 78 netle 395 almıştı.&quot; Ve sen buna göre plan yapıyorsun.
                        </p>

                        <p>
                            Dur. Bu çok tehlikeli. Çünkü geçen sene sınavın zorluk seviyesi farklıydı, Türkiye geneli ortalaması farklıydı, standart sapma farklıydı. Aynı 78 netle bir sene 395 alırsın, ertesi sene 360 alırsın. Yani &quot;kaç net kaç puan eder?&quot; sorusunun tek bir cevabı yok, ama geçmiş 5 yılın ortalamalarına bakarak oldukça güvenilir bir tahmin yapabiliriz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Önce Şunu Anla: Ham Puan ile Yerleştirme Puanı Farklı
                        </h2>
                        <p>
                            İnsanlar &quot;puanım 400 geldi&quot; derken genelde yerleştirme puanından bahseder. Ama ÖSYM aslında iki ayrı puan hesaplıyor:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-900 text-lg mb-2">Ham Puan (Sınav Puanı)</h3>
                                <p className="text-sm text-slate-600">ÖSYM 100 taban puan verir, üstüne TYT ve AYT netlerini katsayılarla çarpıp ekler. Diploma notu dahil değildir. Tavanı 500.</p>
                            </div>
                            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl">
                                <h3 className="font-bold text-indigo-900 text-lg mb-2">Yerleştirme Puanı (Y-Puan)</h3>
                                <p className="text-sm text-indigo-800">Ham puanın üstüne OBP eklenir (diploma notu × 0.6, en fazla +60 puan). Tercihler bununla yapılır. Tavanı 560.</p>
                            </div>
                        </div>

                        <p>
                            Yani diploma notu 90 olan biri, aynı netleri yapan diploma notu 70 olan birinden 12 puan daha fazla yerleştirme puanı alır. Bu 12 puan yığılma bölgesinde 20.000-30.000 kişilik sıralama farkı demek. Detayını <Link href="/blog/obp-hesaplama" className="text-blue-600 hover:underline">OBP yazımızda</Link> anlattık.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            TYT Net - Puan Tablosu (Yaklaşık Değerler)
                        </h2>
                        <div className="bg-slate-50 rounded-xl p-6 my-6 border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-4 text-lg">Hangi TYT Neti Nereye Götürür?</h3>
                            <div className="space-y-4">
                                <p className="text-slate-700"><strong>100 - 115 Net (İlk 10K):</strong> Tahmini 430-480 puan aralığı. İstanbul Tıp, Boğaziçi Mühendislik gibi devler için TYT ayağında olman gereken yer burasıdır.</p>
                                <p className="text-slate-700"><strong>85 - 100 Net (10K - 50K):</strong> Tahmini 380-430 puan aralığı. İyi devlet üniversitelerinde mühendislik, tıp alt sınırı veya çok iyi hukuk fakültelerine kapı açan bant burası.</p>
                                <p className="text-slate-700"><strong>70 - 85 Net (50K - 150K):</strong> Tahmini 330-380 puan aralığı. Ortalama mühendislikler, Anadolu'daki hukuk fakülteleri ve iyi sağlık bilimleri bölümleri genelde bu neti ister.</p>
                                <p className="text-slate-700"><strong>50 - 70 Net (150K - 500K):</strong> Tahmini 270-330 puan aralığı. Burası ana yığılma bölgesi. Taşradaki 4 yıllık bölümler ile iyi 2 yıllık meslek yüksekokullarına giden netler burada döner.</p>
                                <p className="text-slate-700"><strong>30 - 50 Net (500K+):</strong> Tahmini 200-270 puan aralığı. Genelde açıköğretim ve barajı geçen ön lisans programları için yeterli olan alt limittir.</p>
                            </div>
                        </div>

                        <p>
                            Bu değerler sadece TYT puanıdır ve AYT&apos;ye girmeden sadece TYT ile yapabileceğin yerleştirmeler için geçerlidir. Lisans programlarına (4 yıllık) yerleşmek için AYT&apos;den de net yapman ve o puan türünde puanının hesaplanması gerekir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Popüler Bölümler İçin Gereken Ortalama Netler
                        </h2>
                        <p>
                            Bu kısımda &quot;şu kadar net yap, şu bölüme gir&quot; gibi kesin bir şey söyleyemem çünkü sınavın zorluğu her sene değişiyor. Ama geçmiş 3 yılın ortalamasına bakarak kabaca bir fikir verebilirim:
                        </p>

                        <div className="space-y-4 my-6 not-prose">
                            <div className="p-5 bg-green-50 border-l-4 border-green-600 rounded-lg">
                                <h4 className="font-bold text-green-900 mb-1">İstanbul veya Ankara Tıp Fakültesi (İlk 5.000):</h4>
                                <p className="text-sm text-gray-700">TYT: 100+ | AYT Mat: 35+ | AYT Fen: 34+ | Toplam yerleştirme ~480+</p>
                            </div>
                            <div className="p-5 bg-blue-50 border-l-4 border-blue-600 rounded-lg">
                                <h4 className="font-bold text-blue-900 mb-1">İyi Bilgisayar Mühendisliği (İlk 20.000):</h4>
                                <p className="text-sm text-gray-700">TYT: 90+ | AYT Mat: 30+ | AYT Fen: 28+ | Toplam yerleştirme ~440+</p>
                            </div>
                            <div className="p-5 bg-purple-50 border-l-4 border-purple-600 rounded-lg">
                                <h4 className="font-bold text-purple-900 mb-1">İstanbul Hukuk (İlk 3.000 EA):</h4>
                                <p className="text-sm text-gray-700">TYT: 85+ | AYT Mat: 28+ | AYT Edebiyat: 20+ | Toplam yerleştirme ~430+</p>
                            </div>
                            <div className="p-5 bg-amber-50 border-l-4 border-amber-600 rounded-lg">
                                <h4 className="font-bold text-amber-900 mb-1">PDR veya Sınıf Öğretmenliği (İlk 50.000 EA):</h4>
                                <p className="text-sm text-gray-700">TYT: 70+ | AYT Mat: 18+ | AYT Edebiyat: 14+ | Toplam yerleştirme ~370+</p>
                            </div>
                        </div>

                        <p>
                            Bu rakamlar tahminidir ve her sene oynayabilir. Ama en azından nereye doğru çalışman gerektiği konusunda sana bir pusula verir.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Kendi Netlerin Kaç Puan Getiriyor?</h3>
                            <p className="text-blue-100 mb-6">
                                TYT ve AYT deneme netlerini gir, tüm puan türlerini ve tahmini sıralamayı anında gör.
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
