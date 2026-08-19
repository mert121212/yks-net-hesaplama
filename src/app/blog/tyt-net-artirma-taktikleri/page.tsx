import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'TYT\'de 60-70 Net Bandına Sıkışanlar İçin Veri Odaklı Çıkış Yolu',
    description: 'ÖSYM yerleştirme verilerine göre TYT net artırmanın kanıtlanmış yöntemleri. 60-70 net bandından kurtulmak için zaman yönetimi ve istatistiksel analiz teknikleri.',
    keywords: 'tyt net artırma, tyt netlerim artmıyor, 60 70 net bandı, tyt net artırma taktikleri, ösym istatistikleri, yks net hesapla',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-net-artirma-taktikleri' },
    openGraph: {
        title: 'TYT\'de 60-70 Net Bandına Sıkışanlar İçin Veri Odaklı Çıkış Yolu',
        description: 'ÖSYM istatistikleriyle 60-70 net bandından çıkış rehberi.',
        type: 'article',
        publishedTime: '2026-05-02',
        modifiedTime: '2026-08-16',
        url: 'https://yksnethesapla.com/blog/tyt-net-artirma-taktikleri',
    },
}

export default function TYTNetArtirmaTaktikleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                    <nav className="mb-8 text-sm text-slate-500 font-medium flex items-center space-x-2">
                        <Link href="/" className="hover:text-indigo-600 transition-colors">Ana Sayfa</Link>
                        <span>›</span>
                        <Link href="/blog" className="hover:text-indigo-600 transition-colors">Blog</Link>
                        <span>›</span>
                        <span className="text-slate-900">Strateji</span>
                    </nav>

                    <header className="mb-10">
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold tracking-wide uppercase">Rehber</span>
                            <time className="text-slate-500 text-sm font-medium">Son Güncelleme: 16 Ağustos 2026</time>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500 text-sm font-medium">Okuma Süresi: 11 dk</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                            TYT&apos;de 60-70 Nette Takılıp Kalanlar: Bu Bataklıktan Nasıl Çıkılır?
                        </h1>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed">
                            Aylardır haftada 3 deneme çözüyorsun ama netlerin 65&apos;te çakılı kaldı. Sorun sende değil, denemeyi bitirince kitabı kapatıp gitmende. Gel sana çıkış yolunu göstereyim.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg prose-indigo max-w-none text-slate-700 mt-8">
                        <p className="lead">
                            Şu senaryoyu muhtemelen sen de yaşıyorsun: Sabah erkenden kalktın, masaya oturdun, 165 dakikalık denemeyi çözdün. Optiği kontrol ettin; Türkçe 28, Matematik 18, Sosyal 12, Fen 7. Toplam 65 net. Sonra ne yapıyorsun? &quot;Of yine 65 geldi&quot; deyip denemeyi kenara fırlatıyorsun. Ertesi gün yine aynı, haftaya yine aynı. Kardeşim, kusura bakma ama aynı şeyleri yapıp farklı sonuç beklemek sadece zaman kaybı.
                        </p>

                        <p>
                            TYT&apos;de 60-70 net aralığı adeta bir bataklıktır. Adayların neredeyse yarısı kış aylarında buraya saplanır. Bu eşiği kırıp 85-90&apos;lara fırlayanların sırrı ise daha çok saat çalışmak falan değil; denemenin <strong>anatomisini çıkarmak</strong>.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            1. Adım: Hatalarını 3 Farklı Torbaya At
                        </h2>
                        <p>
                            Deneme bittiğinde asıl mesai o an başlar. Yanlış yaptığın veya boş bıraktığın her sorunun yanına şu üç harften birini yazacaksın:
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
                            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
                                <div className="text-red-500 font-bold mb-2 flex items-center gap-2">
                                    <span className="bg-red-100 p-1.5 rounded-md text-sm">B</span> Bilgi Eksikliği
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">Formülü hatırlamadın, kuralı bilmiyordun ya da kelimenin anlamını hiç duymamıştın. Çözüm basit: Aç defteri, o konunun 2 sayfalık özetine bak, 20 soru çöz, kapat.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
                                <div className="text-amber-500 font-bold mb-2 flex items-center gap-2">
                                    <span className="bg-amber-100 p-1.5 rounded-md text-sm">D</span> Dikkatsizlik & Acele
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">&quot;Hangisi olamaz&quot;ı &quot;olur&quot; diye okudun, 3 ile 4&apos;ü çarpıp 14 yazdın. Çözüm: Soru kökünü yuvarlak içine almadan şıklara geçmeyeceksin.</p>
                            </div>
                            <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
                                <div className="text-blue-500 font-bold mb-2 flex items-center gap-2">
                                    <span className="bg-blue-100 p-1.5 rounded-md text-sm">S</span> Süre Yetmedi
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">Soruyu çözebilirdin ama 165 dakika bitti, sıra gelmedi. Çözüm: Turlama taktiğini öğreneceksin.</p>
                            </div>
                        </div>

                        <p>
                            İddia ediyorum, yanlışlarının en az %40&apos;ı &quot;Dikkatsizlik&quot; ve &quot;Süre&quot; torbasından çıkacak. Yani senin aslında konu eksiğin sandığın kadar çok değil, sınav yönetimi eksiğin var.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            2. Adım: Turlama Taktiğini Kusursuz Uygula
                        </h2>
                        <p>
                            TYT&apos;de en büyük hata bir soruyla inatlaşmaktır. Matematikte 14. soruya takıldın, 4 dakika uğraştın, çıkmadı. Sinirlendin, 2 dakika daha uğraştın... Ne oldu? 6 dakikan çöpe gitti. O 6 dakikada arkadaki 4 tane çerez geometri veya fen sorusunu çözebilirdin.
                        </p>
                        <p>
                            Sınavda 3 tur kuralını uygulayacaksın:
                        </p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>1. Tur (İlk 100 Dakika):</strong> Sadece ve sadece okuduğunda kafanda çözümü hemen parlayan soruları çöz. 45 saniyeyi geçeceğini anladığın an yanına bir çizgi atıp hemen diğer soruya zıpla. Bu tur bittiğinde kitapçığın sonuna kadar gelmiş olmalı ve cebinde en az 60-70 garanti net görmelisin.</li>
                            <li><strong>2. Tur (100 - 145. Dakikalar):</strong> Şimdi o yanına tek çizgi attığın, &quot;bunu yaparım ama biraz işlem var&quot; dediğin sorulara dön. Kafan rahat çünkü kolayların hepsini topladın.</li>
                            <li><strong>3. Tur (Son 20 Dakika):</strong> Yanına iki çizgi attığın zor sorular ve optik kodlama kontrolü.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            3. Adım: Genel Denemeyi Azalt, Branş Denemesine Yüklen
                        </h2>
                        <p>
                            60 net yapan birinin haftada 4 genel deneme çözmesi vakit israfıdır. Genel deneme 3 saat sürer, analizle 4 saat. Haftanın 16 saatini denemeye harcarsan eksiklerini ne zaman kapatacaksın?
                        </p>
                        <p>
                            Bunun yerine reçete şu:
                        </p>
                        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl my-6">
                            <h4 className="font-bold text-slate-900 mb-3">Haftalık İdeal Branş Denemesi Programı:</h4>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li>• <strong>Pazartesi - Çarşamba - Cuma:</strong> Sabah kalkar kalkmaz 40 soruluk Türkçe Branş Denemesi (Hedef süre: 40-45 dk).</li>
                                <li>• <strong>Salı - Perşembe - Cumartesi:</strong> 40 soruluk Matematik Branş Denemesi (Hedef süre: 55-60 dk).</li>
                                <li>• <strong>Pazar:</strong> 1 Adet Tam Süreli Genel TYT Denemesi (Gerçek sınav saatinde: 10.15).</li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            4. Adım: Fen ve Sosyali Hafife Alma (Bedava Netler)
                        </h2>
                        <p>
                            Eşit Ağırlıkçılar genelde Fen&apos;e, Sayısalcılar da Sosyal&apos;e elini sürmüyor. Arkadaşlar, TYT&apos;de Türkçe&apos;deki paragraf sorusu ile Fen&apos;deki hücre sorusu <strong>aynı puanı</strong> getiriyor (İkisi de yaklaşık 1.33 puan).
                        </p>
                        <p>
                            Matematikte 1 net artırmak için 3 hafta türev integral benzeri problem çözmen gerekirken, Fen&apos;de Canlıların Temel Bileşenleri veya Asit-Baz konusunu 2 saat çalışarak garanti 2 net cebe koyabilirsin. Akıllı ol, en ucuz net neredeyse oraya koş.
                        </p>

                        <div className="relative overflow-hidden bg-slate-900 rounded-2xl p-8 my-12 text-center border border-slate-800 shadow-2xl not-prose">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Netlerin Artınca Sıralaman Ne Olacak?</h3>
                            <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-sm">
                                65 netten 85 nete çıktığında sıralamanın nasıl 200 bin kişi birden öne zıplayacağını hesaplama motorumuzda anında gör.
                            </p>
                            <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl focus:ring-4 focus:ring-slate-500 focus:outline-none">
                                Sıralama Değişimini Gör →
                            </Link>
                        </div>

                        <div className="mt-16 pt-8 border-t border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">İlgili Rehberler</h3>
                            <div className="grid md:grid-cols-2 gap-4 not-prose">
                                <Link href="/blog/tyt-kesin-cikan-konular" className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all">
                                    <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">TYT Kesin Çıkan Konular</h4>
                                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">Her sene ÖSYM&apos;nin istisnasız sorduğu altın konular listesi.</p>
                                </Link>
                                <Link href="/blog/tyt-matematik-konulari" className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-indigo-500 hover:shadow-md transition-all">
                                    <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">TYT Matematik Konuları</h4>
                                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">Soru dağılımı ve çalışma taktikleri.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
