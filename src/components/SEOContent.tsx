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
            
            {/* Giriş & Gerçeklik */}
            <section className="card">
                <div className="flex items-center gap-3 mb-4">
                    <Icon d={ICONS.calc} className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        Netleri Sayıya, Sayıları Gerçekçi Sıralamaya Dönüştürmek
                    </h2>
                </div>
                <div className="text-gray-700 space-y-4 leading-relaxed text-base">
                    <p>
                        Deneme biter, optik formu kontrol edersiniz: 28 Türkçe doğrusu, 9 yanlış. Matematikte 18 doğru, 4 yanlış. Masanın başında ilk yaptığınız şey hemen elinize telefonu alıp netleri toplamak olur.
                    </p>
                    <p>
                        Fakat asıl kafa karıştıran kısım tam burada başlar. Ham neti bilmek tek başına hiçbir işe yaramaz. Çünkü üniversite kapısını açan şey sadece soru sayısı değildir; o yılki test katsayıları, standart sapma dalgalanmaları ve lise diploma notunuzdan (OBP) gelen puandır. Sitemizdeki motoru tam olarak bu yüzden kurduk: Eski katsayılarla sizi yanıltmadan, ÖSYM&apos;nin son yayımladığı resmi veriler üzerinden tahmini yerinizi net biçimde göstermek.
                    </p>
                    <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg text-emerald-950 text-sm">
                        🔒 <strong>Gizlilik notu:</strong> Girdiğiniz deneme sonuçları veya okul notunuz hiçbir sunucuya iletilmez. Sayfayı yenilediğiniz an veriler cihazınızın belleğinden silinir.
                    </div>
                </div>
            </section>

            {/* Sınav Alanları: Ne Neyi Etkiliyor? */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card hover:shadow-lg transition-shadow border-t-4 border-blue-500">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">TYT: Hız ve Kondisyon</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        120 soruya karşılık 165 dakika. Türkçe ve Matematik testlerinin her biri toplam TYT puanının yaklaşık %33&apos;ünü oluşturur. AYT&apos;ye girecekseniz yerleştirme puanınıza %40 doğrudan etki eder.
                    </p>
                    <Link href="/blog/tyt-net-hesaplama-rehberi" className="text-blue-600 text-xs font-semibold hover:underline">
                        TYT katsayı mantığını oku →
                    </Link>
                </div>

                <div className="card hover:shadow-lg transition-shadow border-t-4 border-purple-500">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">AYT: Asıl Sıralama Motoru</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        Yerleştirme puanının %60&apos;ı buradan gelir. Süre baskısı düşüktür (180 dakika), soru başına bilgi ağırlığı çok yüksektir. Sayısal, Eşit Ağırlık ve Sözel öğrencileri kendi 80 sorusuna odaklanır.
                    </p>
                    <Link href="/blog/ayt-puan-hesaplama" className="text-purple-600 text-xs font-semibold hover:underline">
                        AYT test ağırlıklarını incele →
                    </Link>
                </div>

                <div className="card hover:shadow-lg transition-shadow border-t-4 border-amber-500">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">OBP: Sıralamayı Uçuran Güç</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        Diploma notunuz 5 ile çarpılarak 250-500 arası OBP&apos;ye çevrilir ve 0,12 ile çarpılıp hanenize 30 ila 60 puan eklenir. Geçen yıl yerleştiyseniz bu puan yarıya (0,06) iner.
                    </p>
                    <Link href="/blog/obp-hesaplama" className="text-amber-700 text-xs font-semibold hover:underline">
                        Kırık OBP hesabını gör →
                    </Link>
                </div>
            </section>

            {/* Baraj Var mı? 0,5 Net Gerçeği */}
            <section className="card bg-gradient-to-r from-blue-50/70 to-indigo-50/70 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                    <Icon d={ICONS.award} className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        YKS&apos;de Baraj Kalktı mı? 0,5 Net Kuralı Tuzağı Nedir?
                    </h2>
                </div>
                <div className="text-gray-700 space-y-3 text-sm md:text-base leading-relaxed">
                    <p>
                        Evet, eski yıllardaki 150 veya 180 puanlık genel baraj uygulaması bitti. Artık puanınız hesaplandığı anda tercih hakkı kazanıyorsunuz. Ancak bu durum &quot;istediğim gibi sıfır çekebilirim&quot; anlamına gelmiyor.
                    </p>
                    <div className="bg-amber-100/70 border-l-4 border-amber-500 p-4 rounded-r-lg text-amber-950 font-medium text-sm my-3">
                        ⚠️ <strong>ÖSYM&apos;nin 0,5 Net Şartı:</strong> TYT puanınızın hesaplanabilmesi için <strong>Türkçe veya Temel Matematik</strong> testlerinin en az birinden minimum 0,5 ham netinizin olması şarttır. İki derste de 0 net veya eksiye düşerseniz, Sosyal ve Fen testlerinde ful çekseniz dahi TYT puanınız hesaplanmaz.
                    </div>
                    <p>
                        Aynı kural AYT için de geçerli: Sayısal öğrencisi Matematik veya Fen&apos;den, Eşit Ağırlık öğrencisi Matematik veya Edebiyat-Sosyal-1&apos;den en az yarım net çıkarmak zorundadır.
                    </p>
                </div>
            </section>

            {/* 4 Yanlış 1 Doğruyu Nasıl Eritir? */}
            <section className="card">
                <div className="flex items-center gap-3 mb-4">
                    <Icon d={ICONS.calc} className="h-8 w-8 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        Formülün Mantığı: 4 Yanlış 1 Doğruyu Nasıl Götürür?
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-gray-700 text-sm md:text-base">
                    <div>
                        <p className="mb-3 leading-relaxed">
                            ÖSYM sınavlarında şans eseri işaretlemeleri engellemek için her yanlış cevap doğru hanenizden <strong>0,25 net</strong> siler. Yani 4 adet yanlış yaptığınızda, binbir emekle çözdüğünüz 1 tane doğru sorunuz tamamen yok sayılır.
                        </p>
                        <div className="bg-gray-100 rounded-xl p-4 font-mono text-center font-bold text-gray-800 text-lg my-4">
                            Net = Doğru Sayısı − (Yanlış Sayısı ÷ 4)
                        </div>
                        <p className="text-xs text-gray-500">
                            Boş bıraktığınız sorular puanınızı düşürmez. İki şık arasında kalıp emin olamadığınızda rastgele sallamak yerine boş bırakmanın taktiksel önemi buradan gelir.
                        </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                        <h3 className="font-bold text-slate-900 text-sm">Somut Örnekler:</h3>
                        <div className="flex justify-between items-center border-b pb-2 text-sm">
                            <span>32 Doğru, 8 Yanlış:</span>
                            <span className="font-mono font-bold text-blue-600">32 − 2 = 30,00 Net</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2 text-sm">
                            <span>27 Doğru, 13 Yanlış:</span>
                            <span className="font-mono font-bold text-blue-600">27 − 3,25 = 23,75 Net</span>
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
                        Hangi Puan Türü Hangi Kapıyı Açar?
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="border border-emerald-200 rounded-2xl p-5 bg-emerald-50/50">
                        <div className="text-2xl font-black text-emerald-700 mb-1">SAY</div>
                        <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide mb-3">Sayısal Puan</div>
                        <p className="text-xs text-gray-600 mb-3">Tıp, Diş Hekimliği, Mühendislik, Eczacılık, Yazılım, Mimarlık.</p>
                        <span className="inline-block text-xs font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md">
                            AYT Mat + Fen
                        </span>
                    </div>

                    <div className="border border-blue-200 rounded-2xl p-5 bg-blue-50/50">
                        <div className="text-2xl font-black text-blue-700 mb-1">EA</div>
                        <div className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-3">Eşit Ağırlık</div>
                        <p className="text-xs text-gray-600 mb-3">Hukuk, Psikoloji, İşletme, İktisat, Siyaset Bilimi, PDR.</p>
                        <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md">
                            AYT Mat + Edebiyat-Sos-1
                        </span>
                    </div>

                    <div className="border border-purple-200 rounded-2xl p-5 bg-purple-50/50">
                        <div className="text-2xl font-black text-purple-700 mb-1">SÖZ</div>
                        <div className="text-xs font-bold text-purple-900 uppercase tracking-wide mb-3">Sözel Puan</div>
                        <p className="text-xs text-gray-600 mb-3">Özel Eğitim, İletişim, Gastronomi, Tarih, Türkçe Öğretmenliği.</p>
                        <span className="inline-block text-xs font-semibold bg-purple-100 text-purple-800 px-2.5 py-1 rounded-md">
                            Edebiyat-Sos-1 + Sos-2
                        </span>
                    </div>

                    <div className="border border-amber-200 rounded-2xl p-5 bg-amber-50/50">
                        <div className="text-2xl font-black text-amber-700 mb-1">DİL</div>
                        <div className="text-xs font-bold text-amber-900 uppercase tracking-wide mb-3">Yabancı Dil</div>
                        <p className="text-xs text-gray-600 mb-3">İngilizce Öğretmenliği, Mütercim Tercümanlık, Dilbilim.</p>
                        <span className="inline-block text-xs font-semibold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-md">
                            TYT + 80 Soru YDT
                        </span>
                    </div>
                </div>
            </section>

            {/* Sıkça Sorulan Sorular (Detaylı & Doğal) */}
            <section className="card">
                <div className="flex items-center gap-3 mb-6">
                    <Icon d={ICONS.help} className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        Adayların En Çok Takıldığı Sorular
                    </h2>
                </div>
                <div className="space-y-4">
                    {[
                        {
                            q: 'Zor soruları çözünce daha çok puan gelir mi?',
                            a: 'Hayır, ÖSYM soru bazlı standart sapma uygulamaz; test bazlı sapma uygular. Yani aynı test içindeki (örneğin AYT Matematik) en zor integral sorusu ile en basit denklem sorusunun puan değeri birbirine eşittir. Puanı artıran şey sorunun zorluğu değil, o testin Türkiye ortalamasının düşük olmasıdır.'
                        },
                        {
                            q: 'Hesapladığım sıralama sınav sonucumla birebir aynı mı gelir?',
                            a: 'Hiçbir dijital araç sınav sonucunu virgülden sonra aynı çıkaramaz. Çünkü her yıl sınava giren öğrenci sayısı, soruların genel zorluk seviyesi ve Türkiye ortalaması değişir. Sitemizdeki sıralama motoru, ÖSYM\'nin son 3 yıldaki resmi yığınsal verilerini karşılaştırarak size en gerçekçi aralığı gösterir.'
                        },
                        {
                            q: 'OBP kırılması (kırık OBP) tam olarak ne zaman başıma gelir?',
                            a: 'Geçen yıl YKS ile bir üniversite programına (açıköğretim kontenjanlı bölümleri ve özel yetenek dahil) merkezi olarak yerleştiyseniz ve bu yıl tekrar sınava giriyorsanız OBP katsayınız 0,12 yerine 0,06 olarak uygulanır. Tercih yapıp yerleşemediyseniz veya hiç tercih vermediyseniz puanınız kırılmaz.'
                        },
                        {
                            q: 'Tıp veya Hukuk için sadece puan yetiyor mu?',
                            a: 'Yetmez. ÖSYM bazı kritik bölümlere başarı sırası barajı koymuştur. Örneğin Tıp Fakültesi için SAY alanında ilk 50.000, Hukuk için EA alanında ilk 125.000, Mühendislikler için SAY alanında ilk 300.000 sıralamasına girmeniz zorunludur. Puanınız yetse bile bu sıralamanın gerisinde kalırsanız tercih listesine yazamazsınız.'
                        },
                        {
                            q: 'Sitede yaptığım net hesaplamaları bir yere kaydediliyor mu?',
                            a: 'Asla. Kodlarımız doğrudan tarayıcınızın kendi JavaScript motoru üzerinde çalışır. Ne doğru-yanlış sayılarınız ne de OBP notunuz herhangi bir sunucuya veya veri tabanına gitmez. Ekranı kapattığınız an tüm bilgiler kaybolur.'
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

            {/* Öne Çıkan Rehberler */}
            <section className="card">
                <div className="flex items-center gap-3 mb-6">
                    <Icon d={ICONS.trend} className="h-8 w-8 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        Doğrudan Masada İşe Yarayan YKS Rehberleri
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { href: '/blog/tyt-turkce-paragraf-teknikleri', title: 'TYT Türkçe Paragraf Teknikleri', desc: '40 sorunun 24\'ünde süreyi yarıya indiren 5 somut taktik' },
                        { href: '/blog/yks-son-3-ay-calisma-plani', title: 'YKS Son 3 Ay Çalışma Programı', desc: 'Sınava son 90 gün kala netleri zirveye taşıma stratejisi' },
                        { href: '/blog/sifirdan-tyt-matematik-calisma-rehberi', title: 'Sıfırdan TYT Matematik Rehberi', desc: 'Temeli olmayanlar için 0 netten 20 nete adım adım plan' },
                        { href: '/blog/tyt-kesin-cikan-konular', title: 'TYT\'de Kesin Çıkan Konular', desc: 'Son 7 yılın ÖSYM analizlerine göre garanti soru listesi' },
                        { href: '/blog/tyt-net-artirma-taktikleri', title: 'TYT Net Artırma Taktikleri', desc: 'Plato evresini kırmak için 3 radikal rehberlik adımı' },
                        { href: '/blog/obp-hesaplama', title: 'OBP ve Katsayı Analizi', desc: 'Diploma notunuzun YKS sıralamasına etkisi ve kırık OBP' },
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
                    Bugünkü Netlerinle Türkiye Sıralaman Kaç?
                </h2>
                <p className="text-blue-100 text-sm md:text-base mb-6 max-w-xl mx-auto">
                    Yukarıdaki hesaplayıcıya doğru-yanlış sayılarını yaz; güncel standart sapma ve OBP katkısıyla sonucunu anında incele.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="#hesaplama" className="bg-white text-blue-900 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-md text-sm">
                        Netleri Gir ve Hesapla ↑
                    </a>
                    <Link href="/sss" className="bg-blue-900/60 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition-colors border border-blue-400/40 text-sm">
                        Merak Edilen Sorular →
                    </Link>
                </div>
            </section>

        </div>
    )
}
