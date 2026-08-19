import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS Puan Türleri: SAY, EA, SÖZ, DİL ve Başarı Sırası Barajları 2027',
    description: 'YKS\'de 4 farklı puan türü ve başarı sırası barajları. SAY, EA, SÖZ ve DİL puan türlerini, hangi bölümlerin hangi sıralama şartı aradığını öğrenin.',
    keywords: 'yks puan türleri, say puanı, ea puanı, söz puanı, dil puanı, başarı sırası barajı, tıp sıralaması',
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
                            <span className="text-gray-600">• 8 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS Puan Türleri: SAY, EA, SÖZ, DİL ve Başarı Sırası Barajları
                        </h1>
                        <p className="text-xl text-gray-700">
                            YKS&apos;de sadece puan almak yetmez. Hedeflediğiniz bölümün hangi puan türüyle
                            ve hangi başarı sırası barajıyla öğrenci aldığını bilmeniz gerekir. Bu rehberde
                            dört puan türünün formüllerini, ağırlıklarını ve 2027 barajlarını tek tek inceliyoruz.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700">

                        {/* Giriş */}
                        <p className="text-lg leading-relaxed">
                            YKS (Yükseköğretim Kurumları Sınavı) sonuçları açıklandığında e-Devlet&apos;te veya ÖSYM
                            sonuç sayfasında birden fazla puan görürsünüz: TYT puanı, SAY puanı, EA puanı, SÖZ puanı
                            ve DİL puanı. İlk kez sınava giren adayların çoğu &quot;Bu kadar puan türü ne işe yarıyor,
                            hangisi benim?&quot; sorusuyla karşılaşır. Yanıt basittir: <strong>hedeflediğiniz bölüm
                            hangi puan türüyle öğrenci alıyorsa, sizin için geçerli olan puan odur.</strong>
                        </p>
                        <p className="text-lg leading-relaxed">
                            Bu noktada dikkat etmeniz gereken ikinci kritik husus <strong>başarı sırası barajıdır.</strong>
                            Bazı bölümlere girmek için yalnızca yeterli puanı almak yetmez; Türkiye genelinde belli
                            bir sıralama diliminde olmanız da şarttır. Örneğin Tıp Fakültesine girebilmek için
                            ilk 50.000&apos;de olmanız gerekir ve bu baraj, puanınız ne olursa olsun geçerlidir.
                        </p>

                        {/* 1. SAY */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">1. SAY (Sayısal) Puanı</h2>
                        <p>
                            SAY puanı; Tıp, Mühendislik, Diş Hekimliği, Eczacılık, Mimarlık, Bilgisayar Mühendisliği
                            ve Fen Fakültesi bölümleri gibi sayısal ağırlıklı programlara başvurmak isteyen adaylar
                            için hesaplanır. SAY puanı oluşturulurken hem TYT hem de AYT&apos;deki Matematik, Fizik,
                            Kimya ve Biyoloji testleri kullanılır.
                        </p>
                        <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-lg my-6">
                            <h3 className="font-bold text-green-900 mb-2">SAY Puanı Hangi Testlerden Oluşur?</h3>
                            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                                <li><strong>TYT Katkısı (%40):</strong> Türkçe, Matematik, Sosyal, Fen — dört testin tamamı</li>
                                <li><strong>AYT Katkısı (%60):</strong> AYT Matematik (40 soru), Fizik (14), Kimya (13), Biyoloji (13)</li>
                            </ul>
                            <p className="text-sm text-gray-700 mt-2">
                                AYT Matematik SAY puanında en ağır katsayıya sahip derstir. Fizik ve Kimya de önemli
                                katkı sağlar; Biyoloji katsayısı diğerlerine kıyasla daha düşüktür.
                            </p>
                        </div>
                        <p>
                            SAY puanıyla öğrenci alan bölümler genellikle Türkiye&apos;nin en rekabetçi programlarıdır.
                            2025 verilerine göre İstanbul Tıp Fakültesi taban sıralaması yaklaşık 1.500, Boğaziçi
                            Bilgisayar Mühendisliği ise yaklaşık 2.300 civarındadır. Bu nedenle SAY adayları için
                            her bir AYT neti altın değerindedir.
                        </p>

                        {/* 2. EA */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">2. EA (Eşit Ağırlık) Puanı</h2>
                        <p>
                            EA puanı; Hukuk, İktisat, İşletme, Psikoloji, Uluslararası İlişkiler, Siyaset Bilimi ve
                            Kamu Yönetimi gibi hem sayısal hem sözel yetkinlik gerektiren bölümler için hesaplanır.
                            &quot;Eşit ağırlık&quot; adı, Matematik ile Edebiyat/Sosyal Bilimler testlerinin yaklaşık
                            eşit katsayıyla değerlendirilmesinden gelir.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg my-6">
                            <h3 className="font-bold text-blue-900 mb-2">EA Puanı Hangi Testlerden Oluşur?</h3>
                            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                                <li><strong>TYT Katkısı (%40):</strong> Türkçe, Matematik, Sosyal, Fen</li>
                                <li><strong>AYT Katkısı (%60):</strong> AYT Matematik (40 soru), Türk Dili ve Edebiyatı (24 soru), Tarih-1 (10 soru), Coğrafya-1 (6 soru)</li>
                            </ul>
                            <p className="text-sm text-gray-700 mt-2">
                                EA adayları için <strong>AYT Matematik</strong> yine en belirleyici testtir. Edebiyat
                                herkesin belli ölçüde yaptığı bir test olduğundan, yığılmayı kıran
                                faktör neredeyse her zaman Matematik netleridir.
                            </p>
                        </div>
                        <p>
                            Hukuk Fakültesi 2025 yılında ilk 125.000 başarı sırası barajı uygulamıştır. Bu, EA
                            puanıyla Hukuk okumak isteyen bir adayın Türkiye genelinde en az ilk 125.000 sırasına
                            girmesi gerektiği anlamına gelir. Psikoloji bölümü için de benzer bir baraj söz konusudur.
                        </p>

                        {/* 3. SÖZ */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">3. SÖZ (Sözel) Puanı</h2>
                        <p>
                            SÖZ puanı; Türk Dili ve Edebiyatı, Tarih, Coğrafya, Sosyoloji, Felsefe, İlahiyat ve
                            Arkeoloji gibi sözel ağırlıklı bölümler için hesaplanır. SÖZ puanında AYT&apos;nin sözel
                            testleri (Edebiyat, Tarih-1, Tarih-2, Coğrafya-1, Coğrafya-2, Felsefe Grubu, Din Kültürü)
                            ağırlıklı olarak değerlendirilir.
                        </p>
                        <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-lg my-6">
                            <h3 className="font-bold text-purple-900 mb-2">SÖZ Puanı Hangi Testlerden Oluşur?</h3>
                            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                                <li><strong>TYT Katkısı (%40):</strong> Türkçe, Matematik, Sosyal, Fen</li>
                                <li><strong>AYT Katkısı (%60):</strong> Edebiyat (24), Tarih-1 (10), Coğrafya-1 (6), Tarih-2 (11), Coğrafya-2 (11), Felsefe Grubu (12), Din Kültürü (6)</li>
                            </ul>
                            <p className="text-sm text-gray-700 mt-2">
                                SÖZ adaylarının en sık düştüğü tuzak, TYT Matematik&apos;i tamamen ihmal etmektir. Oysa TYT
                                katkısı %40 olduğundan, Matematik&apos;ten alacağınız 10-15 ekstra net bile sıralamanızı
                                binlerce kişi öne taşıyabilir.
                            </p>
                        </div>

                        {/* 4. DİL */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">4. DİL Puanı</h2>
                        <p>
                            DİL puanı; İngilizce Öğretmenliği, Mütercim-Tercümanlık, İngiliz Dili ve Edebiyatı,
                            Amerikan Kültürü ve Edebiyatı gibi yabancı dil ağırlıklı programlar için hesaplanır.
                            DİL puanı oluşturulurken TYT ve AYT yerine <strong>YDT (Yabancı Dil Testi)</strong> kullanılır.
                        </p>
                        <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-lg my-6">
                            <h3 className="font-bold text-orange-900 mb-2">DİL Puanı Hangi Testlerden Oluşur?</h3>
                            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                                <li><strong>TYT Katkısı (%40):</strong> Türkçe, Matematik, Sosyal, Fen</li>
                                <li><strong>YDT Katkısı (%60):</strong> 80 soruluk yabancı dil testi (İngilizce, Almanca, Fransızca veya Arapça)</li>
                            </ul>
                            <p className="text-sm text-gray-700 mt-2">
                                YDT&apos;de İngilizce seçen adaylar çoğunluktadır. Almanca ve Fransızca tercih eden aday
                                sayısı düşük olduğundan, bu dillerde sıralama daha farklı şekillenebilir. Dil
                                yeterliliğinizi ölçmek ve hedef belirleme konusunda YDT deneme sınavları büyük önem taşır.
                            </p>
                        </div>

                        {/* 0,5 Net Kuralı */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">0,5 Net Kuralı Nedir?</h2>
                        <p>
                            Her puan türünün hesaplanabilmesi için belirli testlerden en az <strong>0,5 net</strong> yapmanız
                            gerekir. Bu şart sağlanmazsa ilgili puan türü hiç hesaplanmaz ve o puan türüyle tercih
                            yapamazsınız. Kuralın detayları şöyledir:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Puan Türü</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">0,5 Net Şartı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">TYT</td><td className="px-5 py-3">Türkçe veya Matematik&apos;ten en az 0,5 net</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">SAY</td><td className="px-5 py-3">AYT Matematik veya Fen testlerinden (Fizik/Kimya/Biyoloji) en az 0,5 net</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">EA</td><td className="px-5 py-3">AYT Matematik veya Edebiyat/Sosyal testlerinden en az 0,5 net</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">SÖZ</td><td className="px-5 py-3">AYT Edebiyat/Sosyal testlerinden en az 0,5 net</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">DİL</td><td className="px-5 py-3">YDT&apos;den en az 0,5 net</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg my-6">
                            <h3 className="font-bold text-red-900 mb-2">⚠️ Sık Yapılan Hata</h3>
                            <p className="text-gray-700 text-sm">
                                Bazı adaylar AYT&apos;de yalnızca kendi alanındaki testleri çözer ve TYT&apos;yi tamamen ihmal eder.
                                Ancak TYT puanı <strong>tüm puan türlerinin %40&apos;ını</strong> oluşturduğundan, TYT&apos;de
                                düşük net yapmak sıralamanızı ciddi ölçüde düşürür. TYT&apos;yi asla hafife almayın.
                            </p>
                        </div>

                        {/* Başarı Sırası Barajları */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">2027 Başarı Sırası Barajları</h2>
                        <p>
                            Başarı sırası barajı, belirli bölümlere yerleşebilmek için aranılan minimum sıralama
                            şartıdır. YÖK tarafından belirlenir ve her yıl güncellenebilir. 2025 yılında uygulanan
                            barajlar şöyledir (2027 için de benzer değerlerin geçerli olması bekleniyor):
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-amber-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Bölüm Grubu</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Puan Türü</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Başarı Sırası Barajı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-red-50"><td className="px-5 py-3 font-medium">Tıp Fakültesi</td><td className="px-5 py-3 text-center">SAY</td><td className="px-5 py-3 text-center font-bold text-red-700">İlk 50.000</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Diş Hekimliği</td><td className="px-5 py-3 text-center">SAY</td><td className="px-5 py-3 text-center font-bold">İlk 80.000</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Eczacılık</td><td className="px-5 py-3 text-center">SAY</td><td className="px-5 py-3 text-center font-bold">İlk 100.000</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Hukuk Fakültesi</td><td className="px-5 py-3 text-center">EA</td><td className="px-5 py-3 text-center font-bold">İlk 125.000</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Mimarlık</td><td className="px-5 py-3 text-center">SAY</td><td className="px-5 py-3 text-center font-bold">İlk 250.000</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Mühendislik</td><td className="px-5 py-3 text-center">SAY</td><td className="px-5 py-3 text-center font-bold">İlk 300.000</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Öğretmenlik</td><td className="px-5 py-3 text-center">Çeşitli</td><td className="px-5 py-3 text-center font-bold">İlk 500.000</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">4 Yıllık Lisans (Genel)</td><td className="px-5 py-3 text-center">Çeşitli</td><td className="px-5 py-3 text-center font-bold">İlk 600.000</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg my-6">
                            <h3 className="font-bold text-amber-900 mb-2">⚠️ Baraj Demek, Garantili Yerleşme Demek Değildir</h3>
                            <p className="text-gray-700 text-sm">
                                Başarı sırası barajı, o bölüme tercih <strong>yapabilmeniz</strong> için gereken minimum şarttır.
                                Barajı geçmeniz, yerleşeceğiniz anlamına gelmez. Yerleşme, taban puanınızın o yıl o bölüme
                                yerleşen son kişinin puanından yüksek olmasına bağlıdır. Örneğin Tıp barajı 50.000 olsa da
                                İstanbul Tıp&apos;a girmek için ilk 1.500 civarında olmanız gerekir.
                            </p>
                        </div>

                        {/* Hangi Puan Türünü Seçmeliyim? */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Hangi Puan Türünü Seçmeliyim?</h2>
                        <p>
                            Bu sorunun yanıtı tamamen hedef bölümünüze bağlıdır. Aşağıdaki adımları takip ederek
                            kendinize en uygun puan türünü belirleyebilirsiniz:
                        </p>
                        <div className="space-y-4 my-6">
                            <div className="flex items-start gap-4 bg-blue-50 p-5 rounded-lg">
                                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                                <div>
                                    <h4 className="font-bold text-gray-900">Hedef Bölümünüzü Belirleyin</h4>
                                    <p className="text-sm text-gray-700 mt-1">YÖK Atlas veya ÖSYM tercih kılavuzundan bölümünüzün hangi puan türüyle öğrenci aldığını kontrol edin.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-green-50 p-5 rounded-lg">
                                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                                <div>
                                    <h4 className="font-bold text-gray-900">Güçlü Olduğunuz Alanı Değerlendirin</h4>
                                    <p className="text-sm text-gray-700 mt-1">Hem Matematik hem Edebiyat&apos;ta iyiyseniz EA, sadece sayısalda güçlüyseniz SAY daha mantıklıdır.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-purple-50 p-5 rounded-lg">
                                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                                <div>
                                    <h4 className="font-bold text-gray-900">Sıralama Hedefi Koyun</h4>
                                    <p className="text-sm text-gray-700 mt-1">Baraj sıralamasını ve hedef üniversitenizin geçmiş yıl taban sıralamalarını araştırın. Gerçekçi bir hedef belirleyin.</p>
                                </div>
                            </div>
                        </div>

                        {/* Puan Türleri Karşılaştırma Tablosu */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Puan Türleri Karşılaştırma Tablosu</h2>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg text-sm">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold border-b">Özellik</th>
                                        <th className="px-4 py-3 text-center font-semibold border-b text-green-700">SAY</th>
                                        <th className="px-4 py-3 text-center font-semibold border-b text-blue-700">EA</th>
                                        <th className="px-4 py-3 text-center font-semibold border-b text-purple-700">SÖZ</th>
                                        <th className="px-4 py-3 text-center font-semibold border-b text-orange-700">DİL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">TYT Ağırlığı</td><td className="px-4 py-3 text-center">%40</td><td className="px-4 py-3 text-center">%40</td><td className="px-4 py-3 text-center">%40</td><td className="px-4 py-3 text-center">%40</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">AYT/YDT Ağırlığı</td><td className="px-4 py-3 text-center">%60</td><td className="px-4 py-3 text-center">%60</td><td className="px-4 py-3 text-center">%60</td><td className="px-4 py-3 text-center">%60</td></tr>
                                    <tr className="border-b"><td className="px-4 py-3 font-medium">Belirleyici Ders</td><td className="px-4 py-3 text-center">AYT Mat + Fen</td><td className="px-4 py-3 text-center">AYT Mat</td><td className="px-4 py-3 text-center">Edebiyat + Tarih</td><td className="px-4 py-3 text-center">YDT</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-medium">Rekabet Seviyesi</td><td className="px-4 py-3 text-center text-red-600 font-bold">Çok Yüksek</td><td className="px-4 py-3 text-center text-orange-600 font-bold">Yüksek</td><td className="px-4 py-3 text-center text-yellow-600 font-bold">Orta</td><td className="px-4 py-3 text-center text-blue-600 font-bold">Orta</td></tr>
                                    <tr><td className="px-4 py-3 font-medium">Örnek Bölümler</td><td className="px-4 py-3 text-center">Tıp, Müh.</td><td className="px-4 py-3 text-center">Hukuk, İktisat</td><td className="px-4 py-3 text-center">Edebiyat, Tarih</td><td className="px-4 py-3 text-center">İngilizce Öğrt.</td></tr>
                                </tbody>
                            </table>
                        </div>

                        {/* OBP Etkisi */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">OBP&apos;nin Puan Türlerine Etkisi</h2>
                        <p>
                            OBP (Ortaöğretim Başarı Puanı) tüm puan türlerine aynı şekilde eklenir. Diploma
                            notunuzun 5 ile çarpılması sonucu bulunan OBP değeri, 0,12 katsayısı ile çarpılarak
                            yerleştirme puanınıza eklenir. Diploma notu 85 olan bir aday: 85 × 5 = 425 OBP →
                            425 × 0,12 = <strong>51 puan katkı</strong> alır.
                        </p>
                        <p>
                            Eğer bir önceki yıl YKS ile bir programa yerleşmişseniz bu katsayı yarıya düşer
                            (0,06 olur) ve yaklaşık 25 puan kaybedersiniz. Buna &quot;puan kırılması&quot; veya
                            &quot;kırık OBP&quot; denir.
                        </p>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Kendi Puanınızı Hesaplayın</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                TYT ve AYT netlerinizi girerek SAY, EA, SÖZ ve DİL puanlarınızı öğrenin
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Ücretsiz Hesapla →
                            </Link>
                        </div>

                        {/* Sonuç */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Özet ve Sonuç</h2>
                        <p>
                            YKS&apos;de doğru puan türünü hedeflemek, tüm hazırlık sürecinizin temelini oluşturur. Yanlış
                            puan türüne çalışmak aylarınızı boşa harcamanıza neden olabilir. Bu nedenle önce hedef
                            bölümünüzü netleştirin, ardından o bölümün gerektirdiği puan türünün ağırlıklı derslerine
                            odaklanın. Başarı sırası barajlarını mutlaka kontrol edin ve gerçekçi bir sıralama hedefi
                            belirleyin.
                        </p>
                        <p>
                            Unutmayın: YKS&apos;de başarı, çok çalışmaktan önce <strong>doğru çalışmaya</strong> bağlıdır.
                            Hangi puan türünde yarışacağınızı bilmek, çalışma planınızın ilk ve en önemli adımıdır.
                        </p>

                        {/* İlgili Makaleler */}
                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/obp-hesaplama" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">OBP Hesaplama Rehberi →</p>
                                    <p className="text-sm text-gray-600 mt-1">Diploma notunuzun puanınıza etkisini öğrenin</p>
                                </Link>
                                <Link href="/blog/yks-kac-net-kac-puan" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    <p className="font-semibold text-green-900">Kaç Net Kaç Puan? →</p>
                                    <p className="text-sm text-gray-600 mt-1">Net-puan dönüşüm tabloları</p>
                                </Link>
                                <Link href="/blog/universite-tercih-stratejileri" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">Tercih Stratejileri →</p>
                                    <p className="text-sm text-gray-600 mt-1">24 tercih hakkını en verimli nasıl kullanırsınız?</p>
                                </Link>
                                <Link href="/blog/yks-yigilma-tehlikesi" className="p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                                    <p className="font-semibold text-red-900">Yığılma Analizi →</p>
                                    <p className="text-sm text-gray-600 mt-1">Standart sapma ve sıralama tuzakları</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}


