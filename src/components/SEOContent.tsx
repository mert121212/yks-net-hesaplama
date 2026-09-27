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
            
            {/* Giriş & Puanlama Mantığı */}
            <section className="card">
                <div className="flex items-center gap-3 mb-4">
                    <Icon d={ICONS.calc} className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        YKS Net Hesabı ve Yerleştirme Puanı Nasıl Hesaplanır?
                    </h2>
                </div>
                <div className="text-gray-700 space-y-4 leading-relaxed text-base">
                    <p>
                        YKS hazırlığında deneme sınavı sonrasında yapılan ilk işlem, testlerdeki doğru ve yanlış sayıları üzerinden ham netleri hesaplamaktır. Ancak sınav sonuç belgesinde yer alan yerleştirme puanı, yalnızca testlerdeki net sayısıyla belirlenmez.
                    </p>
                    <p>
                        ÖSYM puan hesaplama sürecinde; her testin o yılki Türkiye ortalamasını, standart sapmasını ve adayın diploma notundan gelen Ortaöğretim Başarı Puanını (OBP) birlikte değerlendirir. Bu nedenle aynı net sayısı, sınavın genel zorluk derecesine ve derslerin ortalamasına bağlı olarak farklı yıllarda farklı puan ve sıralama sonuçları ortaya çıkarabilir.
                    </p>
                    <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg text-emerald-950 text-sm">
                        🔒 <strong>Veri Güvenliği:</strong> Bu sayfadaki hesaplama aracı tamamen tarayıcınızda çalışır. Girdiğiniz deneme netleri veya diploma notu sunucuya aktarılmaz ve kaydedilmez.
                    </div>
                </div>
            </section>

            {/* Sınav Oturumları ve Ağırlıklar */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card hover:shadow-lg transition-shadow border-t-4 border-blue-500">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">TYT (Temel Yeterlilik Testi)</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        120 sorudan oluşan TYT oturumunda adaylara 165 dakika süre tanınır. Testte Türkçe (40), Temel Matematik (40), Sosyal Bilimler (20) ve Fen Bilimleri (20) soruları yer alır. TYT puanı, lisans programlarına yerleştirmede %40 oranında ağırlığa sahiptir.
                    </p>
                    <Link href="/blog/tyt-net-hesaplama-rehberi" className="text-blue-600 text-xs font-semibold hover:underline">
                        TYT testleri ve puan ağırlıkları →
                    </Link>
                </div>

                <div className="card hover:shadow-lg transition-shadow border-t-4 border-purple-500">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">AYT (Alan Yeterlilik Testi)</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        AYT oturumu 160 sorudan oluşur ve adaylar hedefledikleri puan türüne (Sayısal, Eşit Ağırlık, Sözel) göre ilgili 80 soruyu çözer. Sınav süresi 180 dakikadır. Yerleştirme puanının %60&apos;ını oluşturması nedeniyle lisans tercihlerinde belirleyici rol oynar.
                    </p>
                    <Link href="/blog/ayt-puan-hesaplama" className="text-purple-600 text-xs font-semibold hover:underline">
                        AYT alanları ve katsayılar →
                    </Link>
                </div>

                <div className="card hover:shadow-lg transition-shadow border-t-4 border-amber-500">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">OBP (Ortaöğretim Başarı Puanı)</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        Lise mezuniyet notunun 5 ile çarpılmasıyla 250 ile 500 arasında bir OBP hesaplanır. Bu değer genel kural olarak 0,12 katsayısıyla çarpılarak yerleştirme puanına eklenir. Bir önceki yıl üniversite programına yerleşen adaylarda bu katsayı 0,06&apos;ya düşer.
                    </p>
                    <Link href="/blog/obp-hesaplama" className="text-amber-700 text-xs font-semibold hover:underline">
                        OBP hesaplama ve katsayı kuralları →
                    </Link>
                </div>
            </section>

            {/* Baraj Puanı ve 0,5 Net Kuralı */}
            <section className="card bg-gradient-to-r from-blue-50/70 to-indigo-50/70 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                    <Icon d={ICONS.award} className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        Baraj Puanı ve 0,5 Net Kuralı
                    </h2>
                </div>
                <div className="text-gray-700 space-y-3 text-sm md:text-base leading-relaxed">
                    <p>
                        2022 yılı itibarıyla TYT&apos;deki 150 ve AYT&apos;deki 180 puanlık genel baraj uygulaması sonlandırılmıştır. Puanı hesaplanan tüm adaylar tercih yapma hakkına sahiptir.
                    </p>
                    <div className="bg-amber-100/70 border-l-4 border-amber-500 p-4 rounded-r-lg text-amber-950 font-medium text-sm my-3">
                        ⚠️ <strong>0,5 Net Koşulu:</strong> TYT puanının hesaplanabilmesi için adayın <strong>Türkçe veya Temel Matematik</strong> testlerinin en az birinden minimum 0,5 ham net elde etmesi zorunludur. Türkçe ve Matematik testlerinin her ikisinde de ham net sıfır veya negatif olursa, Sosyal ve Fen testlerindeki sonuçlara bakılmaksızın TYT puanı hesaplanmaz.
                    </div>
                    <p>
                        Benzer kural AYT oturumunda da geçerlidir. Adayın SAY, EA veya SÖZ puanının üretilebilmesi için ilgili puan türünü oluşturan testlerin en az birinden 0,5 ham net çıkarması gerekmektedir.
                    </p>
                </div>
            </section>

            {/* 4 Yanlış 1 Doğru Kuralı ve Formül */}
            <section className="card">
                <div className="flex items-center gap-3 mb-4">
                    <Icon d={ICONS.calc} className="h-8 w-8 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        4 Yanlış 1 Doğru Kuralı ve Net Formülü
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-gray-700 text-sm md:text-base">
                    <div>
                        <p className="mb-3 leading-relaxed">
                            ÖSYM sınav sisteminde her yanlış cevap, ilgili testteki doğru sayısından <strong>0,25 net</strong> düşürür. Dört yanlış cevap, bir doğru cevabın getirdiği neti siler.
                        </p>
                        <div className="bg-gray-100 rounded-xl p-4 font-mono text-center font-bold text-gray-800 text-lg my-4">
                            Ham Net = Doğru Sayısı − (Yanlış Sayısı ÷ 4)
                        </div>
                        <p className="text-xs text-gray-500">
                            Boş bırakılan sorular net hesabına dahil edilmez; doğru sayısını etkilemez ve net kaybına yol açmaz. Cevabından emin olunmayan sorularda tahmini işaretleme yapmak yerine soruyu boş bırakmak, yanlış cevap riskini ortadan kaldırır.
                        </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                        <h3 className="font-bold text-slate-900 text-sm">Hesaplama Örnekleri:</h3>
                        <div className="flex justify-between items-center border-b pb-2 text-sm">
                            <span>32 Doğru, 8 Yanlış:</span>
                            <span className="font-mono font-bold text-blue-600">32 − (8 ÷ 4) = 30,00 Net</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2 text-sm">
                            <span>27 Doğru, 13 Yanlış:</span>
                            <span className="font-mono font-bold text-blue-600">27 − (13 ÷ 4) = 23,75 Net</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span>40 Doğru, 0 Yanlış:</span>
                            <span className="font-mono font-bold text-emerald-600">40,00 Net (Kayıpsız)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Puan Türleri Tablosu */}
            <section className="card">
                <div className="flex items-center gap-3 mb-6">
                    <Icon d={ICONS.target} className="h-8 w-8 text-purple-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        Puan Türleri ve Kapsadığı Alanlar
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="border border-emerald-200 rounded-2xl p-5 bg-emerald-50/50">
                        <div className="text-2xl font-black text-emerald-700 mb-1">SAY</div>
                        <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide mb-3">Sayısal Puan</div>
                        <p className="text-xs text-gray-600 mb-3">Tıp, Diş Hekimliği, Mühendislik, Eczacılık, Mimarlık ve temel fen bilimleri programları.</p>
                        <span className="inline-block text-xs font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md">
                            AYT Mat + AYT Fen
                        </span>
                    </div>

                    <div className="border border-blue-200 rounded-2xl p-5 bg-blue-50/50">
                        <div className="text-2xl font-black text-blue-700 mb-1">EA</div>
                        <div className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-3">Eşit Ağırlık Puanı</div>
                        <p className="text-xs text-gray-600 mb-3">Hukuk, Psikoloji, İşletme, İktisat, Siyaset Bilimi ve PDR programları.</p>
                        <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md">
                            AYT Mat + Edebiyat-Sos-1
                        </span>
                    </div>

                    <div className="border border-purple-200 rounded-2xl p-5 bg-purple-50/50">
                        <div className="text-2xl font-black text-purple-700 mb-1">SÖZ</div>
                        <div className="text-xs font-bold text-purple-900 uppercase tracking-wide mb-3">Sözel Puan</div>
                        <p className="text-xs text-gray-600 mb-3">Özel Eğitim, İletişim, Gastronomi, Tarih, Coğrafya ve Türkçe Öğretmenliği.</p>
                        <span className="inline-block text-xs font-semibold bg-purple-100 text-purple-800 px-2.5 py-1 rounded-md">
                            Edebiyat-Sos-1 + Sosyal-2
                        </span>
                    </div>

                    <div className="border border-amber-200 rounded-2xl p-5 bg-amber-50/50">
                        <div className="text-2xl font-black text-amber-700 mb-1">DİL</div>
                        <div className="text-xs font-bold text-amber-900 uppercase tracking-wide mb-3">Yabancı Dil Puanı</div>
                        <p className="text-xs text-gray-600 mb-3">İngilizce Öğretmenliği, Mütercim Tercümanlık ve Dilbilim programları.</p>
                        <span className="inline-block text-xs font-semibold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-md">
                            TYT + 80 Soru YDT
                        </span>
                    </div>
                </div>
            </section>

            {/* Sıkça Sorulan Sorular */}
            <section className="card">
                <div className="flex items-center gap-3 mb-6">
                    <Icon d={ICONS.help} className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        Sıkça Sorulan Sorular
                    </h2>
                </div>
                <div className="space-y-4">
                    {[
                        {
                            q: 'Aynı test içindeki zor ve kolay soruların puan değeri farklı mıdır?',
                            a: 'Hayır. Aynı test içinde yer alan tüm sorular eşit ham puan değerine sahiptir. Örneğin Temel Matematik testindeki ilk soru ile son sorunun getirdiği net katkısı ve standart puan değeri aynıdır. Soru bazında ayrı bir zorluk katsayısı uygulanmaz; testin genel standart sapması tüm test soruları için ortak olarak hesaplanır.'
                        },
                        {
                            q: 'Hesaplama sonucundaki sıralama resmi sonuçla birebir aynı olur mu?',
                            a: 'Burada sunulan sıralamalar, ÖSYM\'nin geçmiş yıllardaki resmi yığınsal dağılım verileri ve standart sapma eğrileri üzerinden yapılan istatistiksel tahminlerdir. Her yıl sınava katılan aday sayısı, testlerin genel başarı ortalaması ve soruların ayırt ediciliği değiştiğinden kesin sıralamalar yalnızca ÖSYM sonuç belgesinde kesinleşir.'
                        },
                        {
                            q: 'Kırık OBP kesintisi hangi durumlarda gerçekleşir?',
                            a: 'Bir önceki yıl merkezi yerleştirme veya ek yerleştirme sonucunda bir yükseköğretim programına (ön lisans, lisans veya açıköğretimin kontenjan sınırlı programları) yerleşen adayların OBP katsayısı bir sonraki sınavda 0,12 yerine 0,06 olarak uygulanır. Tercih yapıp herhangi bir programa yerleşemeyen veya mezuna kalarak tercih yapmayan adayların puanında herhangi bir kesinti olmaz.'
                        },
                        {
                            q: 'Belirli bölümlerde başarı sırası barajı var mıdır?',
                            a: 'Evet. Yükseköğretim Kurulu (YÖK) kararıyla bazı lisans programlarında taban başarı sırası şartı uygulanmaktadır. Örneğin Tıp Fakültesi için SAY alanında ilk 50 bin, Diş Hekimliği için ilk 80 bin, Eczacılık için ilk 100 bin, Hukuk için EA alanında ilk 125 bin ve Mühendislik bölümleri için SAY alanında ilk 300 bin içinde yer alma zorunluluğu bulunmaktadır.'
                        },
                        {
                            q: 'Hesaplama aracına girilen veriler sistemde saklanıyor mu?',
                            a: 'Hayır. Hesaplama aracı tamamen kullanıcının tarayıcısında (istemci tarafında) çalışır. Girilen doğru, yanlış veya diploma notu gibi veriler herhangi bir sunucuya iletilmez veya veritabanında depolanmaz. Sayfa yenilendiğinde ya da kapatıldığında tüm girdiler sıfırlanır.'
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

            {/* İlgili Rehberler */}
            <section className="card">
                <div className="flex items-center gap-3 mb-6">
                    <Icon d={ICONS.trend} className="h-8 w-8 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        YKS Hazırlık Rehberleri ve Konu İncelemeleri
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { href: '/blog/tyt-turkce-paragraf-teknikleri', title: 'TYT Türkçe Paragraf Teknikleri', desc: 'Paragraf sorularında süre yönetimi ve soru kökü analiz yöntemleri.' },
                        { href: '/blog/yks-son-3-ay-calisma-plani', title: 'YKS Son 3 Ay Çalışma Programı', desc: 'Sınava son 90 gün kala deneme sıklığı ve konu tekrar planlaması.' },
                        { href: '/blog/sifirdan-tyt-matematik-calisma-rehberi', title: 'Sıfırdan TYT Matematik Rehberi', desc: 'Temel işlem becerisinden problem çözme aşamasına çalışma adımları.' },
                        { href: '/blog/tyt-kesin-cikan-konular', title: 'TYT Soru Dağılımı ve Önemli Konular', desc: 'Geçmiş yılların sınav verilerine göre testlerde öne çıkan konu başlıkları.' },
                        { href: '/blog/tyt-net-artirma-taktikleri', title: 'TYT Net Artırma Yöntemleri', desc: 'Deneme analizleri üzerinden eksik tespiti ve net gelişimi.' },
                        { href: '/blog/obp-hesaplama', title: 'OBP ve Katsayı Analizi', desc: 'Diploma notunun yerleştirme puanına etkisi ve kırık OBP koşulları.' },
                    ].map((item, i) => (
                        <Link key={i} href={item.href} className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all group">
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1 text-sm">{item.title}</h3>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA Kutusu */}
            <section className="card bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center py-10 px-6">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
                    Netlerinizi ve Tahmini Puanınızı Hesaplayın
                </h2>
                <p className="text-blue-100 text-sm md:text-base mb-6 max-w-xl mx-auto">
                    Sayfanın üst kısmında yer alan hesaplama aracına doğru ve yanlış sayılarınızı girerek tahmini ham puanınızı ve OBP katkılı yerleştirme sonucunuzu inceleyebilirsiniz.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="#hesaplama" className="bg-white text-blue-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-md text-sm">
                        Hesaplama Aracına Git ↑
                    </a>
                    <Link href="/sss" className="bg-blue-900/60 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition-colors border border-blue-400/40 text-sm">
                        Sıkça Sorulan Sorular →
                    </Link>
                </div>
            </section>

        </div>
    )
}
