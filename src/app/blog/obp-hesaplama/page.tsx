import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'OBP Nedir ve Nasıl Hesaplanır? Kırık OBP ve Katsayı Analizi 2027',
    description: 'YKS 2027 OBP hesaplama sistemi. Lise diploma notunun YKS yerleştirme puanına etkisi, kırık OBP cezası ve okul birinciliği avantajları.',
    keywords: 'obp nedir, obp nasıl hesaplanır, obp hesaplama 2027, kırık obp nedir, diploma notu yks etkisi, okul birinciliği kontenjanı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/obp-hesaplama' },
    openGraph: {
        title: 'OBP Nedir ve Nasıl Hesaplanır? Kırık OBP ve Katsayı Analizi 2027',
        description: 'Lise diploma notunun YKS yerleştirme puanına etkisinin teknik analizi.',
        type: 'article',
        publishedTime: '2026-02-24',
        modifiedTime: '2026-08-16',
        url: 'https://yksnethesapla.com/blog/obp-hesaplama',
    },
}

export default function OBPHesaplamaRehberi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                    <nav className="mb-8 text-sm text-slate-500 font-medium flex items-center space-x-2">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
                        <span>›</span>
                        <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                        <span>›</span>
                        <span className="text-slate-900">Teknik Rehber</span>
                    </nav>

                    <header className="mb-10">
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold tracking-wide uppercase">YKS Puanlama</span>
                            <time className="text-slate-500 text-sm font-medium">Son Güncelleme: 16 Ağustos 2026</time>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500 text-sm font-medium">Okuma Süresi: 11 dk</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                            OBP Nedir? Lise Diploma Notu Seni Vezir de Eder Rezil de
                        </h1>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed">
                            Sınav salonundan çıktıktan sonra sıralamanı altüst edebilecek o gizli silah: Diploma notun. Gel, OBP denen şeyin gerçekte nasıl çalıştığını bi konuşalım.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg prose-blue max-w-none text-slate-700 mt-8">
                        <p className="lead">
                            Bakın arkadaşlar, YKS&apos;ye sadece test çözerek hazırlanıyorsanız büyük resmi fena halde kaçırıyorsunuz. Ben bunu ne kadar anlatsam az. Sınavda ham puanınız istediğiniz kadar yüksek gelsin — o üniversitenin kapısından içeri girmenizi sağlayacak asıl şey <strong>Y-Puan yani Yerleştirme Puanı</strong>. Ve tahmin edin bu puanın ne kadarı lise notunuzdan geliyor? Tam <strong>yüzde 12&apos;si</strong>. Evet, lisede hocalara şirin gözükerek (ya da gerçekten ter dökerek) aldığınız diploma notu, sınavda bile sormadan puanınıza ekleniyor.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Tamam da Bu OBP Nasıl Hesaplanıyor?
                        </h2>
                        <p>
                            Şimdi ÖSYM diploma notunu alıp direkt puanına eklemiyor, araya ufak bir matematik sokuyor. Hani şöyle düşünün: 100 üzerinden diploma notunuz var ya, onu önce 5 ile çarpıyorlar. Niye? 500&apos;lük sisteme çevirmek için. Sonra da yerleştirme katsayısı denen <strong>0.12</strong> ile çarpıyorlar.
                        </p>
                        <p>
                            &quot;Hocam çok uzun, kısa yolunu söyle&quot; diyorsanız buyurun:
                        </p>

                        <div className="bg-slate-900 rounded-xl p-6 my-8 text-center shadow-lg not-prose">
                            <p className="text-sm text-slate-400 mb-2 uppercase tracking-wider font-semibold">Kestirme Formül</p>
                            <p className="text-2xl font-bold text-white font-mono">
                                Diploma Notu × 0.6 = Puanına Eklenen Miktar
                            </p>
                        </div>

                        <p>
                            Mesela diploma notun 85. Hesabı yapalım: 85 × 0.6 = 51 puan. Yani sen daha sınava girmeden 51 puan cukka yapıyorsun. Diploma notu 65 olan arkadaşın ise 39 puan alıyor. Aradaki 12 puanlık fark ne demek biliyor musun? O 12 puan, AYT&apos;de ter dökerek çözeceğin yaklaşık 4 tane zor matematik sorusuna denk geliyor. Yani lise notunu düşük tutanlar, sınav sabahı rakiplerinin birkaç soru gerisinden başlıyor.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Diploma Notuna Göre Ne Kadar Puan Geliyor?
                        </h2>
                        <div className="overflow-x-auto my-6 not-prose rounded-xl shadow-sm border border-slate-200">
                            <table className="w-full text-left text-sm text-slate-600">
                                <thead className="bg-slate-50 text-slate-900 font-semibold uppercase text-xs">
                                    <tr>
                                        <th className="px-6 py-4 border-b">Diploma Notu</th>
                                        <th className="px-6 py-4 border-b text-center">OBP (500 Üzerinden)</th>
                                        <th className="px-6 py-4 border-b text-center">Puanına Eklenen</th>
                                        <th className="px-6 py-4 border-b text-center">Ne Anlama Geliyor?</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-slate-900">100</td><td className="px-6 py-4 text-center">500</td><td className="px-6 py-4 text-center text-emerald-600 font-bold">+60 Puan</td><td className="px-6 py-4 text-center text-slate-500">Kralsın</td></tr>
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-slate-900">90</td><td className="px-6 py-4 text-center">450</td><td className="px-6 py-4 text-center text-emerald-600 font-bold">+54 Puan</td><td className="px-6 py-4 text-center text-slate-500">Gayet iyi</td></tr>
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-slate-900">80</td><td className="px-6 py-4 text-center">400</td><td className="px-6 py-4 text-center text-blue-600 font-bold">+48 Puan</td><td className="px-6 py-4 text-center text-slate-500">Fena değil</td></tr>
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-slate-900">70</td><td className="px-6 py-4 text-center">350</td><td className="px-6 py-4 text-center text-amber-600 font-bold">+42 Puan</td><td className="px-6 py-4 text-center text-slate-500">İdare eder</td></tr>
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-slate-900">60</td><td className="px-6 py-4 text-center">300</td><td className="px-6 py-4 text-center text-red-600 font-bold">+36 Puan</td><td className="px-6 py-4 text-center text-slate-500">Sıkıntı var</td></tr>
                                    <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-slate-900">50</td><td className="px-6 py-4 text-center">250</td><td className="px-6 py-4 text-center text-red-600 font-bold">+30 Puan</td><td className="px-6 py-4 text-center text-slate-500">Zor durumdasın</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Tabloya bi bakın. Diploma notu 90 olan çocuk ile 70 olan çocuk arasında <strong>12 puanlık</strong> bir uçurum var. &quot;Ya ne olacak 12 puandan?&quot; demeyin. O 12 puan, TYT&apos;de paragrafta boğulacağınız 9 Türkçe sorusuna veya AYT&apos;de kafayı yiyeceğiniz 4 Matematik sorusuna eşit. Yani lisede yatan arkadaş, sınav günü o açığı kapatmak için fazladan mesai yapmak zorunda kalacak.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Kırık OBP: Mezunların Korkulu Rüyası
                        </h2>
                        <p>
                            Geldik işin en acı kısmına. Geçen sene YKS&apos;ye girip bir yere <strong>yerleştiysen</strong> — dikkat et, yerleştiysen diyorum. Gidip kayıt yaptırmasan bile, hatta açıköğretim bile olsa fark etmez — ÖSYM sana bu sene çok ağır bir fatura keser. OBP katsayın 0.12&apos;den bir anda <strong>0.06&apos;ya</strong> düşer. Yani yarı yarıya.
                        </p>
                        
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-6 not-prose">
                            <h3 className="text-base font-bold text-red-900 uppercase tracking-wider mb-2 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                Bu Ne Kadar Acıtır Biliyor Musun?
                            </h3>
                            <p className="text-sm text-red-800 leading-relaxed">
                                Normal formülümüz neydi? <code>Diploma × 0.6</code>. Kırık OBP yediysen bu <code>Diploma × 0.3</code> oluyor. Diploma notun 90 diyelim. Normalde 54 puan alacaktın, şimdi <strong>sadece 27 puan</strong> alıyorsun. Uçup giden 27 puan var ortada. Rakiplerine durduk yere 9 tane AYT Matematik neti hediye etmiş oldun.
                            </p>
                        </div>

                        <p>
                            Peki hangi durumlarda bu ceza uygulanmıyor? Şunlara dikkat et:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Sınava girdin ama tercih listesi vermedin → <strong>Kurtuldun</strong>.</li>
                            <li>Tercih verdin ama sıralaman yetmedi, hiçbir yere yerleşemedin → <strong>Yine kurtuldun</strong>.</li>
                            <li>Yerleştiğin yılın üstünden <strong>2 tam yıl geçti</strong> → Katsayın tekrar 0.12&apos;ye dönüyor.</li>
                            <li>Özel yetenek sınavıyla girdiysen bazı istisnalar var ama bu karmaşık, kılavuza bakman lazım.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Okul Birinciliği Kontenjanı Diye Bir Şey Var
                        </h2>
                        <p>
                            Bu çok az bilinen ama altın değerinde bir hak. Liseden mezun olduğun yıl <strong>okul birincisiysen</strong>, üniversitelerde sana özel kontenjan ayrılıyor. Normal sıralamanla giremeyeceğin bölümlere bu kontenjan sayesinde yerleşebiliyorsun.
                        </p>
                        <p>
                            Ama dikkat: Bu hak sadece <strong>mezun olduğun yıl</strong> geçerli. Seneye mezuna kalırsan bu avantajı kaybediyorsun.
                        </p>
                        <p>
                            Bir de şunu söyleyeyim — okul birinciliği kontenjanından yararlanan öğrenciler genelde Tıp, Hukuk gibi çok popüler bölümlere giriyorlar. Yani lisede boşa kürek çekmemişler, karşılığını alıyorlar.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Peki Lisede Notunu Düşük Tuttuysan Ne Yapacaksın?
                        </h2>
                        <p>
                            Geçmişi değiştiremezsin. Ama şunu bil: OBP dezavantajını sınavda kapatmak <strong>imkansız değil</strong>, sadece daha çok çalışman lazım. Diploma notu 70 olan biri, diploma notu 90 olan birine göre 12 puan geride başlıyor demiştik. Bu 12 puanı kapatmak için TYT&apos;de yaklaşık 9, AYT&apos;de yaklaşık 4 ekstra net yapman gerekiyor. Zor mu? Evet. İmkansız mı? Kesinlikle hayır.
                        </p>
                        <p>
                            Ha bi de şunu ekleyeyim — eğer hâlâ liseye devam ediyorsan ve bu satırları okuyorsan, yazılılara daha ciddi bak. Gerçekten söylüyorum, her 5 puanlık diploma notu artışı sana sınavda 3 puan hediye ediyor. O 3 puan da binlerce kişilik sıralama değişikliği demek.
                        </p>

                        <div className="relative overflow-hidden bg-slate-900 rounded-2xl p-8 my-12 text-center border border-slate-800 shadow-2xl not-prose">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Diploma Notun Sıralamana Ne Yapıyor?</h3>
                            <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-sm">
                                Kafanda kurup durma. Deneme netlerini ve diploma notunu gir, sıralamanın nasıl değiştiğini gör.
                            </p>
                            <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl focus:ring-4 focus:ring-slate-500 focus:outline-none">
                                Hemen Hesapla →
                            </Link>
                        </div>

                        <div className="mt-16 pt-8 border-t border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Bunları da Oku</h3>
                            <div className="grid md:grid-cols-2 gap-4 not-prose">
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">1 Net Kaç Bin Kişi Attırır?</h4>
                                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">OBP ve standart sapmanın sıralamalara gerçek etkisi.</p>
                                </Link>
                                <Link href="/blog/universite-tercih-stratejileri" className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Tercih Stratejileri</h4>
                                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">24 tercihi boşa harcamamanın yolları.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
