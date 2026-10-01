import Link from 'next/link'

function Icon({ d, className = 'h-6 w-6' }: { d: string; className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d={d} />
        </svg>
    )
}

const ICONS = {
    calc: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
    target: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    trend: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    award: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    help: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    book: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
}

const featuredGuides = [
    {
        id: 'tyt-turkce-paragraf-teknikleri',
        title: 'TYT Türkçe Paragraf Çözme Teknikleri',
        category: 'TYT Türkçe',
        readTime: '12 dk',
        image: '/images/blog/tyt-turkce-paragraf-teknikleri.jpg',
        excerpt: 'Paragrafta süre yönetimi ve soru kökü analizi ile 24+ soruda net kazanma taktikleri.',
    },
    {
        id: 'yks-son-3-ay-calisma-plani',
        title: 'YKS Son 3 Ay Çalışma Programı',
        category: 'Strateji',
        readTime: '11 dk',
        image: '/images/blog/yks-son-3-ay-calisma-plani.jpg',
        excerpt: 'Sınava 90 gün kala haftalık deneme döngüsü ve çıkmış soru çözüm planı.',
    },
    {
        id: 'sifirdan-tyt-matematik-calisma-rehberi',
        title: 'Sıfırdan TYT Matematik Rehberi',
        category: 'TYT Matematik',
        readTime: '12 dk',
        image: '/images/blog/sifirdan-tyt-matematik-calisma-rehberi.jpg',
        excerpt: 'Temel işlemlerden problem çözmeye adım adım çalışma sırası ve soru hedefleri.',
    },
    {
        id: 'obp-hesaplama',
        title: 'OBP Hesaplama ve Kırık OBP Şartları',
        category: 'Kılavuz',
        readTime: '9 dk',
        image: '/images/blog/obp-hesaplama.jpg',
        excerpt: 'Lise diploma notunun YKS yerleştirme puanına etkisi ve 0,12 vs 0,06 farkı.',
    },
    {
        id: 'tyt-kesin-cikan-konular',
        title: 'TYT Kesin Çıkan Konular Analizi',
        category: 'ÖSYM Analizi',
        readTime: '10 dk',
        image: '/images/blog/tyt-kesin-cikan-konular.jpg',
        excerpt: 'Son 7 yılın ÖSYM soru dağılımına göre her yıl garanti çıkan konu başlıkları.',
    },
    {
        id: 'universite-tercih-stratejileri',
        title: 'Üniversite Tercih Stratejileri',
        category: 'YÖK Atlas',
        readTime: '11 dk',
        image: '/images/blog/universite-tercih-stratejileri.jpg',
        excerpt: '%20 güvenli aralık kuralı, TBS takibi ve 24 tercih listesi oluşturma metodolojisi.',
    },
]

export default function SEOContent() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
            
            {/* 1. Sistem ve Metodoloji Kartı */}
            <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
                        <Icon d={ICONS.calc} className="h-7 w-7" />
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                            YKS Net ve Yerleştirme Puanı Nasıl Hesaplanır?
                        </h2>
                        <p className="text-sm text-gray-500">
                            ÖSYM Resmi Kılavuzu ve Standart Sapma Formülleri
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-gray-700 leading-relaxed text-sm sm:text-base">
                    <div className="space-y-4">
                        <p>
                            Deneme sınavından sonra optik formdaki doğru ve yanlışlar sayılarak <strong>ham net</strong> bulunur. ÖSYM kuralları gereğince her testte 4 yanlış cevap 1 doğru cevabı götürür (her yanlış −0,25 net düşürür).
                        </p>
                        <p>
                            Ancak sınav sonuç belgesindeki yerleştirme puanı salt netlere dayanmaz. ÖSYM, sınava katılan tüm adayların o yılki test ortalamaları ve standart sapma değerlerine göre test katsayılarını dinamik olarak belirler.
                        </p>
                        <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl text-emerald-950 text-xs sm:text-sm">
                            🔒 <strong>Gizlilik Garantisi:</strong> Hesaplama motorumuz tamamen tarayıcınızda (client-side) çalışır. Girdiğiniz doğru, yanlış ve diploma notu bilgileri hiçbir sunucuya iletilmez.
                        </div>
                    </div>

                    <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
                        <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold">
                            Temel Formül Özeti
                        </div>
                        <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 font-mono text-center space-y-1">
                            <div className="text-xs text-slate-400">Ham Net Formülü:</div>
                            <div className="text-lg sm:text-xl font-bold text-emerald-300">
                                Net = Doğru − (Yanlış ÷ 4)
                            </div>
                        </div>
                        <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 font-mono text-center space-y-1">
                            <div className="text-xs text-slate-400">Yerleştirme Puanı Formülü:</div>
                            <div className="text-lg sm:text-xl font-bold text-blue-300">
                                Y-Puan = Ham Puan + (OBP × 0,12)
                            </div>
                        </div>
                        <p className="text-xs text-slate-400 text-center">
                            *Önceki yıl bir üniversiteye yerleşen adaylarda OBP çarpanı 0,06 olarak uygulanır.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Sınav Oturumları ve Puan Ağırlıkları */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 border-t-4 border-t-blue-500 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg">1. Oturum</span>
                        <span className="text-xs font-semibold text-gray-500">165 Dakika</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">TYT (Temel Yeterlilik)</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        120 soru. Türkçe (40), Matematik (40), Fen (20), Sosyal (20). Lisans yerleştirmesinde %40 ağırlığa sahiptir.
                    </p>
                    <div className="text-xs text-blue-700 font-semibold bg-blue-50/50 p-2.5 rounded-lg border border-blue-100">
                        ⚡ 0,5 Net Şartı: Türkçe veya Matematikten en az 0,5 net zorunludur.
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 border-t-4 border-t-purple-500 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold px-2.5 py-1 bg-purple-50 text-purple-700 rounded-lg">2. Oturum</span>
                        <span className="text-xs font-semibold text-gray-500">180 Dakika</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AYT (Alan Yeterlilik)</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        160 sorudan alanına göre 80 soruyu çözersin (SAY, EA veya SÖZ). Lisans puanının %60&apos;ını oluşturur.
                    </p>
                    <div className="text-xs text-purple-700 font-semibold bg-purple-50/50 p-2.5 rounded-lg border border-purple-100">
                        🎯 Katsayı Ağırlığı: Lisans yerleştirmesinde en belirleyici oturumdur.
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 border-t-4 border-t-amber-500 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold px-2.5 py-1 bg-amber-50 text-amber-700 rounded-lg">Diploma Notu</span>
                        <span className="text-xs font-semibold text-gray-500">250 - 500 Puan</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">OBP Katkısı</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        Lise diploma notu × 5 = OBP. Standart 0,12 katsayısı ile ham puana 30 ila 60 puan arasında katkı eklenir.
                    </p>
                    <div className="text-xs text-amber-800 font-semibold bg-amber-50/50 p-2.5 rounded-lg border border-amber-100">
                        ⚠️ Kırık OBP: Geçen yıl yerleşen adaylarda katsayı 0,06&apos;ya iner.
                    </div>
                </div>
            </section>

            {/* 3. ÖSYM Resmi Test Ortalamaları */}
            <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-indigo-100 text-indigo-600 rounded-2xl">
                            <Icon d={ICONS.trend} className="h-7 w-7" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                ÖSYM Resmi YKS Test Ortalamaları ve Standart Sapma
                            </h2>
                            <p className="text-xs text-gray-500">
                                Kaynak: ÖSYM YKS Sayısal Bilgiler Raporu (~3.1 Milyon Adayın Verileri)
                            </p>
                        </div>
                    </div>
                    <Link
                        href="/universiteler"
                        className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 bg-blue-50 px-4 py-2.5 rounded-xl border border-blue-200 transition-colors whitespace-nowrap self-start sm:self-auto shadow-sm"
                    >
                        🎓 Taban Puanları Atlası →
                    </Link>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                    Sınavda yapacağınız her 1 netin standart sapma puan çarpanı, o testin Türkiye genelindeki doğru yanıtlanma ortalamasına bağlıdır. Ortalama ne kadar düşük olursa, o testte elde edilen net adayı sıralamada o kadar yukarı taşır.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* TYT Ortalamaları */}
                    <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-xs">
                        <div className="bg-slate-50 px-5 py-3.5 border-b border-gray-200 font-bold text-gray-800 text-sm flex justify-between items-center">
                            <span>TYT Testleri (120 Soru)</span>
                            <span className="text-xs text-blue-600 font-semibold">Türkiye Net Ort.</span>
                        </div>
                        <div className="divide-y divide-gray-100 text-sm">
                            <div className="px-5 py-3 flex justify-between items-center">
                                <span className="text-gray-700 font-medium">Türkçe (40 Soru)</span>
                                <span className="font-mono font-bold text-gray-900">~21,4 Net</span>
                            </div>
                            <div className="px-5 py-3 flex justify-between items-center">
                                <span className="text-gray-700 font-medium">Temel Matematik (40 Soru)</span>
                                <span className="font-mono font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-md">~7,9 Net</span>
                            </div>
                            <div className="px-5 py-3 flex justify-between items-center">
                                <span className="text-gray-700 font-medium">Sosyal Bilimler (20 Soru)</span>
                                <span className="font-mono font-bold text-gray-900">~8,5 Net</span>
                            </div>
                            <div className="px-5 py-3 flex justify-between items-center">
                                <span className="text-gray-700 font-medium">Fen Bilimleri (20 Soru)</span>
                                <span className="font-mono font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-md">~3,8 Net</span>
                            </div>
                        </div>
                    </div>

                    {/* AYT Ortalamaları */}
                    <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-xs">
                        <div className="bg-slate-50 px-5 py-3.5 border-b border-gray-200 font-bold text-gray-800 text-sm flex justify-between items-center">
                            <span>AYT Testleri (80 Soru)</span>
                            <span className="text-xs text-purple-600 font-semibold">Türkiye Net Ort.</span>
                        </div>
                        <div className="divide-y divide-gray-100 text-sm">
                            <div className="px-5 py-3 flex justify-between items-center">
                                <span className="text-gray-700 font-medium">AYT Matematik (40 Soru)</span>
                                <span className="font-mono font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-md">~7,2 Net</span>
                            </div>
                            <div className="px-5 py-3 flex justify-between items-center">
                                <span className="text-gray-700 font-medium">Fizik (14 Soru)</span>
                                <span className="font-mono font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-md">~2,4 Net</span>
                            </div>
                            <div className="px-5 py-3 flex justify-between items-center">
                                <span className="text-gray-700 font-medium">Kimya (13 Soru)</span>
                                <span className="font-mono font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-md">~1,9 Net</span>
                            </div>
                            <div className="px-5 py-3 flex justify-between items-center">
                                <span className="text-gray-700 font-medium">T. Dili ve Edebiyatı (24 Soru)</span>
                                <span className="font-mono font-bold text-gray-900">~6,8 Net</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-indigo-50/80 border-l-4 border-indigo-500 rounded-r-xl text-xs sm:text-sm text-indigo-950">
                    💡 <strong>Stratejik Not:</strong> Matematik ve Fen testlerinin Türkiye ortalaması çok düşük olduğundan, bu testlerde yapılacak her 1 ek net adayı yığılma bölgelerinde binlerce rakibinin önüne geçirmektedir.
                </div>
            </section>

            {/* 4. Üniversite Atlası Köprüsü */}
            <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold uppercase tracking-wider">
                        YÖK Atlas Taban Başarı Sıraları (TBS)
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                        Hedefindeki Bölüm İçin Kaç Sıralama Gerekiyor?
                    </h2>
                    <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                        Tıp, Diş Hekimliği, Hukuk, Mühendislik ve 570&apos;den fazla lisans programının güncel taban puanlarını, kontenjanlarını ve başarı sıralarını tek ekranda incele.
                    </p>
                </div>
                <Link
                    href="/universiteler"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-6 py-3.5 rounded-2xl font-bold transition-all shadow-lg whitespace-nowrap text-sm sm:text-base"
                >
                    🎓 Üniversite Atlasını Aç →
                </Link>
            </section>

            {/* 5. Öne Çıkan Görselli Blog Rehberleri */}
            <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl">
                            <Icon d={ICONS.book} className="h-7 w-7" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                YKS Hazırlık & Başarı Rehberleri
                            </h2>
                            <p className="text-xs text-gray-500">
                                Masada işe yarayan net artırma yöntemleri ve sınav analizleri
                            </p>
                        </div>
                    </div>
                    <Link
                        href="/blog"
                        className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1 self-start sm:self-auto"
                    >
                        Tüm Makaleleri Gör ({19}) →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredGuides.map((guide) => (
                        <Link
                            key={guide.id}
                            href={`/blog/${guide.id}`}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group flex flex-col"
                        >
                            <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                                <img
                                    src={guide.image}
                                    alt={guide.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute top-3 left-3">
                                    <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-gray-900 rounded-full text-xs font-bold shadow-sm">
                                        {guide.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="text-xs text-gray-400 mb-1.5 font-medium">
                                        {guide.readTime} okuma süresi
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 text-base">
                                        {guide.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                                        {guide.excerpt}
                                    </p>
                                </div>
                                <div className="text-blue-600 font-semibold text-xs mt-4 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                                    Rehberi Oku <span>→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 6. Sık Sorulan Sorular */}
            <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 space-y-6">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
                        <Icon d={ICONS.help} className="h-7 w-7" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Sıkça Sorulan Sorular
                        </h2>
                        <p className="text-xs text-gray-500">
                            Net hesabı, katsayılar ve sıralama simülasyonu hakkında merak edilenler
                        </p>
                    </div>
                </div>

                <div className="space-y-3 pt-2">
                    {[
                        {
                            q: 'Aynı testteki zor soru ile kolay soru farklı puan mı getirir?',
                            a: 'Hayır. ÖSYM test bazlı standart sapma uygular; soru bazlı zorluk puanı vermez. Temel Matematik testindeki 1. soru ile 40. sorunun adaya getirdiği ham puan tamamen eşittir.'
                        },
                        {
                            q: '0,5 net kuralı nasıl uygulanır?',
                            a: 'TYT puanınızın hesaplanabilmesi için Türkçe veya Temel Matematik testlerinin en az birinden 0,5 ham net çıkarmanız zorunludur. İkisi de 0 veya eksi ise Fen ve Sosyal testlerinde netiniz olsa dahi TYT puanınız hesaplanmaz.'
                        },
                        {
                            q: 'Hesaplama motorundaki tahmini sıralama kesin midir?',
                            a: 'Buradaki sıralama aralıkları, ÖSYM\'nin son yıllarda yayımladığı resmi yığınsal dağılım tabloları referans alınarak oluşturulan istatistiksel tahminlerdir. Sınavın o yılki genel zorluğuna göre küçük sapmalar olabilir.'
                        },
                        {
                            q: 'Kırık OBP kesintisi kimleri kapsar?',
                            a: 'Bir önceki yıl merkezi yerleştirme ile bir lisans veya ön lisans programına yerleşen adayların (kayıt yaptırmamış olsalar dahi) OBP katsayısı 0,12 yerine 0,06 olarak yarı yarıya düşürülür.'
                        },
                        {
                            q: 'Tıp, Hukuk veya Mühendislik için sıralama barajı var mı?',
                            a: 'Evet. YÖK kararı gereğince Tıp için SAY ilk 50 bin, Diş Hekimliği ilk 80 bin, Eczacılık ilk 100 bin, Hukuk için EA ilk 125 bin ve Mühendislik programları için SAY ilk 300 bin başarı sırası barajı uygulanır.'
                        },
                    ].map((item, i) => (
                        <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                            <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 font-semibold text-gray-900 text-sm sm:text-base">
                                {item.q}
                                <span className="text-gray-400 group-open:rotate-180 transition-transform text-xl">▾</span>
                            </summary>
                            <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                                {item.a}
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* 7. Alt Bilgilendirme ve Güvence */}
            <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center text-xs text-slate-500 space-y-2">
                <p className="font-semibold text-slate-700 text-sm">
                    YKS Net Hesaplama Platformu • Bağımsız Eğitim ve Sınav Portalı
                </p>
                <p>
                    yksnethesapla.com bağımsız bir platform olup ÖSYM (Öğrenci Seçme ve Yerleştirme Merkezi) veya YÖK ile doğrudan kurumsal bağı bulunmamaktadır. Tüm sınav kuralları ve katsayılar ilgili kurumların resmi kılavuzları doğrultusunda periyodik olarak güncellenir.
                </p>
            </section>

        </div>
    )
}
