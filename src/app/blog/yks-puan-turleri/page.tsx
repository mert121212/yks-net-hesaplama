import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS Puan Türleri: SAY, EA, SÖZ, DİL ve Başarı Sırası Barajları 2027',
    description: 'YKS\'de 4 farklı puan türü ve başarı sırası barajları. Hangi bölüm hangi sıralama şartı arıyor? SAY, EA, SÖZ ve DİL bölüm listeleri.',
    keywords: 'yks puan türleri, say puan türü, ea puan türü, söz puan türü, dil puan türü, başarı sırası barajları, yks barajlar',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-puan-turleri' },
    openGraph: {
        title: 'YKS Puan Türleri: SAY, EA, SÖZ, DİL ve Başarı Sırası Barajları 2027',
        description: 'YKS\'de 4 farklı puan türü ve başarı sırası barajları. Hangi bölüm hangi sıralama şartı arıyor?',
        type: 'article',
        publishedTime: '2026-02-25',
        url: 'https://yksnethesapla.com/blog/yks-puan-turleri',
    },
}

export default function YKSPuanTurleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Puan Türleri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600">25 Şubat 2026</time>
                            <span className="text-gray-600">• 12 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS Puan Türleri: SAY, EA, SÖZ ve DİL Hakkında Bilmen Gereken Her Şey
                        </h1>
                        <p className="text-xl text-gray-600">
                            Lisede sayısal okuyup hukuk kazanabilir misin? Puan türleri nasıl hesaplanıyor? Gelin işin perde arkasını tüm gerçekliğiyle konuşalım.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her tercih döneminde odama gelen öğrencilerden en az on tanesi bana aynı soruyu soruyor: <em>&quot;Hocam ben lisede fen okudum ama tıp istemiyorum, eşit ağırlıktan psikoloji yazarsam puanım kırılır mı?&quot;</em>.
                        </p>

                        <p>
                            Hemen peşin söyleyeyim: <strong>Kırılmaz. Sıfır kayıp.</strong>
                        </p>

                        <p>
                            Eski üniversite sınavı sistemlerinde olan o meşhur katsayı cezası tarihe karışalı yıllar oldu. Artık lisede hangi sınıfta okuduğunun hiçbir önemi yok. ÖSYM sınav salonundaki kitapçıkta hangi testleri işaretlediğine bakar. İster Sayısalcı ol ister İmam Hatipli, AYT&apos;de Matematik ve Edebiyat çözersen Eşit Ağırlık puanın tıkır tıkır hesaplanır ve Boğaziçi İşletme&apos;ye de gidersin, İstanbul Hukuk&apos;a da.
                        </p>

                        <p>
                            Peki bu 4 puan türünün katsayı matematiği nasıl işliyor? Hangisi hangi bölüme kapı açıyor? Tane tane anlatayım.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            1. SAY (Sayısal) Puanı: Rekabetin En Sert Olduğu Kulvar
                        </h2>
                        <p className="leading-relaxed">
                            Sayısal puanı; TYT&apos;nin tamamı (%40) ile AYT Matematik (%30) ve AYT Fen Bilimleri (%30) testlerinin birleşimiyle hesaplanır.
                        </p>
                        <p>
                            Burada dikkat etmen gereken nokta şudur: AYT Fen&apos;in içinde 14 Fizik, 13 Kimya, 13 Biyoloji sorusu vardır. Öğrenciler genelde Biyolojiyi sona bırakır ama SAY puanında 1 net Fizik ile 1 net Biyoloji sana neredeyse aynı puanı getirir. Bu yüzden tek bir derse takılıp diğerini sıfırlama.
                        </p>

                        <div className="p-6 bg-green-50 border-l-4 border-green-600 rounded-xl my-6 not-prose">
                            <h3 className="text-lg font-bold text-green-900 mb-2">SAY İle Girilen Popüler Bölümler:</h3>
                            <p className="text-sm text-gray-700 mb-3">Tıp Fakültesi, Bilgisayar Mühendisliği, Diş Hekimliği, Yazılım Müh., Yapay Zeka Müh., Eczacılık, Elektrik-Elektronik, Makine Müh., Mimarlık, Hemşirelik, Moleküler Biyoloji ve Genetik.</p>
                            <p className="text-xs text-green-800 font-semibold">Kritik Not: Tıp için ilk 50 bin, Diş için ilk 80 bin, Mühendislik için ilk 300 bin barajı var.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            2. EA (Eşit Ağırlık) Puanı: Matematiği Yapanın Krallığı
                        </h2>
                        <p className="leading-relaxed">
                            Eşit Ağırlık puanında formül şudur: TYT (%40) + AYT Matematik (%30) + AYT Türk Dili ve Edebiyatı - Sosyal-1 (%30).
                        </p>
                        <p>
                            Şimdi eğri oturup doğru konuşalım: EA alanında yarışan adayların büyük çoğunluğu Edebiyat ve Tarih&apos;i belirli bir seviyede yapar. Yani Edebiyat netleri genelde 16-22 bandında toplanır. Sizi 150 binlerden alıp ilk 10 bine sokacak olan asıl roket motoru <strong>AYT Matematik</strong>&apos;tir. AYT Matematikte 25 netin üzerine çıkan bir EA öğrencisinin Türkiye derecesi yapması neredeyse garantidir.
                        </p>

                        <div className="p-6 bg-blue-50 border-l-4 border-blue-600 rounded-xl my-6 not-prose">
                            <h3 className="text-lg font-bold text-blue-900 mb-2">EA İle Girilen Popüler Bölümler:</h3>
                            <p className="text-sm text-gray-700 mb-3">Hukuk Fakültesi, Yönetim Bilişim Sistemleri (YBS), Psikoloji, PDR, İktisat, İşletme, Uluslararası İlişkiler, Siyaset Bilimi ve Kamu Yönetimi, Sınıf Öğretmenliği.</p>
                            <p className="text-xs text-blue-800 font-semibold">Kritik Not: Hukuk için ilk 125 bin başarı sırası barajı uygulanır.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            3. SÖZ (Sözel) Puanı: Ezber Değil Metin Analizi
                        </h2>
                        <p className="leading-relaxed">
                            Sözel puanı; TYT (%40) + AYT Edebiyat-Sos1 (%30) + AYT Sosyal-2 (%30) testleriyle oluşur.
                        </p>
                        <p>
                            Sözelcilerin yaptığı en büyük hata TYT Matematiği tamamen sıfır bırakmaktır. Oysa TYT&apos;de yapacağın 5-10 tane temel matematik neti, sözel puanını tahmin bile edemeyeceğin kadar yukarı fırlatır. Çünkü sözel öğrencileri arasında matematik ortalaması 2-3 net civarındadır; burada yapacağın her net sana muazzam bir standart sapma avantajı kazandırır.
                        </p>

                        <div className="p-6 bg-purple-50 border-l-4 border-purple-600 rounded-xl my-6 not-prose">
                            <h3 className="text-lg font-bold text-purple-900 mb-2">SÖZ İle Girilen Popüler Bölümler:</h3>
                            <p className="text-sm text-gray-700 mb-3">Özel Eğitim Öğretmenliği (En popüler), Türkçe Öğretmenliği, Okul Öncesi Öğretmenliği, İletişim & Gazetecilik, Yeni Medya, Gastronomi ve Mutfak Sanatları, İlahiyat, Tarih, Coğrafya.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            4. DİL (Yabancı Dil) Puanı: 80 Soruluk Hız ve Kelime Sınavı
                        </h2>
                        <p className="leading-relaxed">
                            DİL puanı TYT (%40) ve Pazar öğleden sonra yapılan YDT (%60) oturumundan gelir.
                        </p>
                        <p>
                            YDT&apos;de 80 soru vardır ve sınavın belirleyicisi ileri düzey vocabulary (kelime bilgisi) ile reading (okuduğunu anlama) hızıdır. Gramer soruları genelde ilk 15-20 soruda biter, geriye kalan 60 soru tamamen okuma ve çeviri yeteneğinizi ölçer.
                        </p>

                        <div className="p-6 bg-orange-50 border-l-4 border-orange-600 rounded-xl my-6 not-prose">
                            <h3 className="text-lg font-bold text-orange-900 mb-2">DİL İle Girilen Popüler Bölümler:</h3>
                            <p className="text-sm text-gray-700 mb-3">İngilizce Öğretmenliği, Mütercim ve Tercümanlık, İngiliz Dili ve Edebiyatı, Turizm Rehberliği, Karşılaştırmalı Edebiyat, Dilbilimi.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            ÖSYM Zorunlu Başarı Sırası Barajları Tablosu
                        </h2>
                        <p>
                            Puanınız ne olursa olsun, bu sıralamalara giremediyseniz tercih ekranında bu bölümleri sistem otomatik olarak kilitler:
                        </p>

                        <div className="overflow-x-auto my-6 not-prose">
                            <table className="min-w-full bg-white border border-slate-200 rounded-xl text-sm">
                                <thead className="bg-red-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold text-red-950 border-b">Bölüm</th>
                                        <th className="px-5 py-3 text-center font-semibold text-red-950 border-b">Puan Türü</th>
                                        <th className="px-5 py-3 text-center font-semibold text-red-950 border-b">Zorunlu Başarı Sırası</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr><td className="px-5 py-3 font-medium">Tıp Fakültesi</td><td className="px-5 py-3 text-center font-bold">SAY</td><td className="px-5 py-3 text-center font-bold text-red-700">İlk 50.000</td></tr>
                                    <tr className="bg-slate-50"><td className="px-5 py-3 font-medium">Diş Hekimliği</td><td className="px-5 py-3 text-center font-bold">SAY</td><td className="px-5 py-3 text-center font-bold text-red-700">İlk 80.000</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Eczacılık</td><td className="px-5 py-3 text-center font-bold">SAY</td><td className="px-5 py-3 text-center font-bold text-red-700">İlk 100.000</td></tr>
                                    <tr className="bg-slate-50"><td className="px-5 py-3 font-medium">Hukuk Fakültesi</td><td className="px-5 py-3 text-center font-bold">EA</td><td className="px-5 py-3 text-center font-bold text-red-700">İlk 125.000</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Mimarlık</td><td className="px-5 py-3 text-center font-bold">SAY</td><td className="px-5 py-3 text-center font-bold text-orange-700">İlk 250.000</td></tr>
                                    <tr className="bg-slate-50"><td className="px-5 py-3 font-medium">Mühendislikler (Orman, Ziraat hariç)</td><td className="px-5 py-3 text-center font-bold">SAY</td><td className="px-5 py-3 text-center font-bold text-orange-700">İlk 300.000</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Tüm Öğretmenlik Programları (PDR dahil)</td><td className="px-5 py-3 text-center font-bold">İlgili Puan</td><td className="px-5 py-3 text-center font-bold text-orange-700">İlk 300.000</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white not-prose">
                            <h3 className="text-2xl font-bold mb-3">Tüm Puan Türlerini Canlı Hesapla</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm">
                                TYT ve AYT deneme netlerini gir; SAY, EA, SÖZ ve DİL yerleştirme puanlarını tek bir ekranda saniyeler içinde karşılaştır.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3.5 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Ücretsiz Hesaplama Motoru →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
