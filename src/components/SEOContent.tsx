// Server component — 'use client' yok, lucide yok (hızlı ve hafif inline SVG)
import Link from 'next/link'

function Icon({ d, className = 'h-7 w-7' }: { d: string; className?: string }) {
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
}

export default function SEOContent() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            
            {/* Net Hesabı Açıklaması */}
            <section className="card">
                <div className="flex items-center gap-3 mb-4">
                    <Icon d={ICONS.calc} className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        YKS Net Hesabı Nasıl Yapılır?
                    </h2>
                </div>
                <div className="text-gray-700 space-y-4 leading-relaxed text-base">
                    <p>
                        Deneme bittikten sonra ilk iş testlerdeki doğru ve yanlışları sayıp ham net bulmak. Ama sonuç belgesindeki yerleştirme puanı sadece netlere bakmıyor. ÖSYM her testin o yılki Türkiye ortalamasını, standart sapmasını ve diploma notundan gelen OBP&apos;yi birlikte hesaba katıyor. Aynı net farklı yıllarda farklı puan verebilir.
                    </p>
                    <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg text-emerald-950 text-sm">
                        🔒 <strong>Gizlilik:</strong> Bu sayfadaki hesaplama tamamen tarayıcınızda çalışır. Girdiğiniz veriler sunucuya gönderilmez.
                    </div>
                </div>
            </section>

            {/* Sınav Oturumları */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card hover:shadow-lg transition-shadow border-t-4 border-blue-500">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">TYT</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        120 soru, 165 dakika. Türkçe (40), Matematik (40), Sosyal (20), Fen (20). Lisans yerleştirmede %40 ağırlık.
                    </p>
                    <Link href="/blog/tyt-net-hesaplama-rehberi" className="text-blue-600 text-xs font-semibold hover:underline">
                        TYT detayları →
                    </Link>
                </div>

                <div className="card hover:shadow-lg transition-shadow border-t-4 border-purple-500">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">AYT</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        160 soru, 180 dakika. SAY, EA veya SÖZ alanına göre 80 soruyu çözersin. Yerleştirmenin %60&apos;ı AYT&apos;den geliyor.
                    </p>
                    <Link href="/blog/ayt-puan-hesaplama" className="text-purple-600 text-xs font-semibold hover:underline">
                        AYT katsayıları →
                    </Link>
                </div>

                <div className="card hover:shadow-lg transition-shadow border-t-4 border-amber-500">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">OBP</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        Lise mezuniyet notu × 5 = OBP (250-500 arası). 0,12 katsayısıyla puanına eklenir. Geçen yıl yerleşen adaylarda bu katsayı 0,06.
                    </p>
                    <Link href="/blog/obp-hesaplama" className="text-amber-700 text-xs font-semibold hover:underline">
                        OBP hesaplama →
                    </Link>
                </div>
            </section>

            {/* Baraj ve 0,5 Kuralı */}
            <section className="card bg-gradient-to-r from-blue-50/70 to-indigo-50/70 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                    <Icon d={ICONS.award} className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        Baraj ve 0,5 Net Kuralı
                    </h2>
                </div>
                <div className="text-gray-700 space-y-3 text-sm md:text-base leading-relaxed">
                    <p>
                        2022&apos;den beri TYT&apos;de 150 ve AYT&apos;de 180 puanlık baraj yok. Puanı hesaplanan herkes tercih yapabiliyor.
                    </p>
                    <div className="bg-amber-100/70 border-l-4 border-amber-500 p-4 rounded-r-lg text-amber-950 font-medium text-sm my-3">
                        ⚠️ <strong>0,5 Net Şartı:</strong> TYT puanı hesaplansın diye <strong>Türkçe veya Matematik</strong> testlerinden birinde en az 0,5 ham net gerekiyor. İkisi de 0 veya eksi ise Fen ve Sosyal&apos;de ne yaparsan yap, TYT puanın çıkmaz.
                    </div>
                    <p>
                        Aynı kural AYT&apos;de de geçerli. SAY, EA veya SÖZ puanı çıkması için ilgili testlerin en az birinden 0,5 net lazım.
                    </p>
                </div>
            </section>

            {/* 4 Yanlış 1 Doğru */}
            <section className="card">
                <div className="flex items-center gap-3 mb-4">
                    <Icon d={ICONS.calc} className="h-8 w-8 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        4 Yanlış 1 Doğru Kuralı
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-gray-700 text-sm md:text-base">
                    <div>
                        <p className="mb-3 leading-relaxed">
                            Her yanlış cevap doğru sayından <strong>0,25 net</strong> düşürür. 4 yanlış = 1 doğru kaybı.
                        </p>
                        <div className="bg-gray-100 rounded-xl p-4 font-mono text-center font-bold text-gray-800 text-lg my-4">
                            Ham Net = Doğru − (Yanlış ÷ 4)
                        </div>
                        <p className="text-xs text-gray-500">
                            Boş bırakılan sorular neti etkilemez. Emin olmadığın soruda boş bırakmak yanlış riskini ortadan kaldırır.
                        </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                        <h3 className="font-bold text-slate-900 text-sm">Örnekler:</h3>
                        <div className="flex justify-between items-center border-b pb-2 text-sm">
                            <span>32 D, 8 Y:</span>
                            <span className="font-mono font-bold text-blue-600">32 − 2 = 30,00 Net</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2 text-sm">
                            <span>27 D, 13 Y:</span>
                            <span className="font-mono font-bold text-blue-600">27 − 3,25 = 23,75 Net</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span>40 D, 0 Y:</span>
                            <span className="font-mono font-bold text-emerald-600">40,00 Net (Full)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Puan Türleri */}
            <section className="card">
                <div className="flex items-center gap-3 mb-6">
                    <Icon d={ICONS.target} className="h-8 w-8 text-purple-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        Puan Türleri
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="border border-emerald-200 rounded-2xl p-5 bg-emerald-50/50">
                        <div className="text-2xl font-black text-emerald-700 mb-1">SAY</div>
                        <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide mb-3">Sayısal</div>
                        <p className="text-xs text-gray-600 mb-3">Tıp, Diş, Mühendislik, Eczacılık, Mimarlık.</p>
                        <span className="inline-block text-xs font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md">
                            AYT Mat + AYT Fen
                        </span>
                    </div>

                    <div className="border border-blue-200 rounded-2xl p-5 bg-blue-50/50">
                        <div className="text-2xl font-black text-blue-700 mb-1">EA</div>
                        <div className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-3">Eşit Ağırlık</div>
                        <p className="text-xs text-gray-600 mb-3">Hukuk, Psikoloji, İşletme, İktisat, Siyaset.</p>
                        <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md">
                            AYT Mat + Edebiyat-Sos-1
                        </span>
                    </div>

                    <div className="border border-purple-200 rounded-2xl p-5 bg-purple-50/50">
                        <div className="text-2xl font-black text-purple-700 mb-1">SÖZ</div>
                        <div className="text-xs font-bold text-purple-900 uppercase tracking-wide mb-3">Sözel</div>
                        <p className="text-xs text-gray-600 mb-3">İletişim, Tarih, Coğrafya, Türkçe Öğretmenliği.</p>
                        <span className="inline-block text-xs font-semibold bg-purple-100 text-purple-800 px-2.5 py-1 rounded-md">
                            Edebiyat-Sos-1 + Sosyal-2
                        </span>
                    </div>

                    <div className="border border-amber-200 rounded-2xl p-5 bg-amber-50/50">
                        <div className="text-2xl font-black text-amber-700 mb-1">DİL</div>
                        <div className="text-xs font-bold text-amber-900 uppercase tracking-wide mb-3">Yabancı Dil</div>
                        <p className="text-xs text-gray-600 mb-3">İngilizce Öğretmenliği, Mütercim Tercümanlık.</p>
                        <span className="inline-block text-xs font-semibold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-md">
                            TYT + 80 Soru YDT
                        </span>
                    </div>
                </div>
            </section>

            {/* SSS */}
            <section className="card">
                <div className="flex items-center gap-3 mb-6">
                    <Icon d={ICONS.help} className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        Sık Sorulan Sorular
                    </h2>
                </div>
                <div className="space-y-4">
                    {[
                        {
                            q: 'Aynı testteki zor ve kolay sorular farklı puan mı getirir?',
                            a: 'Hayır. Aynı testteki tüm sorular eşit ham puan değerinde. Matematik\'teki ilk soruyla son soru aynı neti getirir. Soru bazında zorluk katsayısı uygulanmaz.'
                        },
                        {
                            q: 'Buradaki sıralama tahmini gerçek sonuçla aynı olur mu?',
                            a: 'Birebir aynı olmaz. Her yıl sınava katılan sayısı, soruların zorluğu ve genel ortalama değişir. Biz geçmiş yılların ÖSYM verilerinden yola çıkarak tahmin bandı sunuyoruz. Kesin sonuç için ÖSYM sonuç belgesini bekle.'
                        },
                        {
                            q: 'Kırık OBP kimlere uygulanır?',
                            a: 'Geçen yıl bir yükseköğretim programına yerleşen adayların OBP katsayısı 0,12 yerine 0,06 olur. Tercih yapıp yerleşemeyen veya hiç tercih yapmayanlara kesinti uygulanmaz.'
                        },
                        {
                            q: 'Bazı bölümlerde sıralama barajı var mı?',
                            a: 'Var. YÖK kararıyla Tıp için SAY ilk 50 bin, Diş Hekimliği ilk 80 bin, Hukuk için EA ilk 125 bin, Mühendislik için SAY ilk 300 bin gibi başarı sırası şartları uygulanıyor.'
                        },
                        {
                            q: 'Girdiğim veriler kaydediliyor mu?',
                            a: 'Hayır. Hesaplama tamamen tarayıcıda çalışır. Sunucuya veri gönderilmez. Sayfa kapatılınca girdiğin her şey silinir.'
                        },
                    ].map((item, i) => (
                        <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                            <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 font-semibold text-gray-900 text-sm md:text-base">
                                {item.q}
                                <span className="text-gray-400 group-open:rotate-180 transition-transform text-xl">▾</span>
                            </summary>
                            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                                {item.a}
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* Rehberler */}
            <section className="card">
                <div className="flex items-center gap-3 mb-6">
                    <Icon d={ICONS.trend} className="h-8 w-8 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        Rehberler
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { href: '/blog/tyt-turkce-paragraf-teknikleri', title: 'TYT Türkçe Paragraf Teknikleri', desc: 'Paragraf sorularında süre yönetimi ve soru kökü analizi.' },
                        { href: '/blog/yks-son-3-ay-calisma-plani', title: 'Son 3 Ay Çalışma Programı', desc: 'Sınava son 90 gün kala deneme ve tekrar planı.' },
                        { href: '/blog/sifirdan-tyt-matematik-calisma-rehberi', title: 'Sıfırdan TYT Matematik', desc: 'Temel işlemlerden problem çözmeye konu sırası.' },
                        { href: '/blog/tyt-kesin-cikan-konular', title: 'TYT Soru Dağılımı', desc: 'Geçmiş yılların verilerine göre öne çıkan konular.' },
                        { href: '/blog/tyt-net-artirma-taktikleri', title: 'Net Artırma Yöntemleri', desc: 'Deneme analiziyle eksik tespiti ve net gelişimi.' },
                        { href: '/blog/obp-hesaplama', title: 'OBP ve Katsayılar', desc: 'Diploma notunun puanına etkisi ve kırık OBP.' },
                    ].map((item, i) => (
                        <Link key={i} href={item.href} className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all group">
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1 text-sm">{item.title}</h3>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="card bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center py-10 px-6">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
                    Netlerini Hesapla
                </h2>
                <p className="text-blue-100 text-sm md:text-base mb-6 max-w-xl mx-auto">
                    Sayfanın üstündeki hesaplama aracına doğru ve yanlış sayılarını gir, tahmini puanını ve sıralamanı gör.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="#hesaplama" className="bg-white text-blue-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-md text-sm">
                        Hesaplama Aracına Git ↑
                    </a>
                    <Link href="/sss" className="bg-blue-900/60 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition-colors border border-blue-400/40 text-sm">
                        Sık Sorulan Sorular →
                    </Link>
                </div>
            </section>

        </div>
    )
}
