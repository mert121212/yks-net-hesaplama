import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'TYT Türkçe ve AYT Edebiyat Konuları 2027: Nokta Atışı Rehber',
    description: 'TYT\'de sadece Anlam ve Dil Bilgisi çıkar. AYT Edebiyat\'ta Cumhuriyet Dönemi, edebi sanatlar ve yazar-eser kartları. 0,5 net şartı ve 2027 ÖSYM güncel rehber.',
    keywords: 'yks edebiyat konuları, tyt türkçe, ayt edebiyat 2027, cumhuriyet dönemi edebiyatı, edebi sanatlar, yazar eser',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari' },
    openGraph: {
        title: 'TYT Türkçe ve AYT Edebiyat Konuları 2027: Nokta Atışı Rehber',
        description: 'TYT Türkçe ve AYT Edebiyat konuları, Cumhuriyet Dönemi şifresi ve edebi sanatlar rehberi.',
        type: 'article',
        publishedTime: '2026-02-17',
        url: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari',
    },
}

export default function YKSEdebiyatKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Edebiyat Konuları</span>
                    </nav>
                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Dersler</span>
                            <time className="text-gray-600">17 Şubat 2026</time>
                            <span className="text-gray-600">• 10 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TYT Türkçe ve AYT Edebiyat Konuları 2027: Nokta Atışı Rehber
                        </h1>
                        <p className="text-xl text-gray-700">
                            &quot;YKS Edebiyat&quot; diye tek bir ders yoktur. TYT&apos;de Türkçe, AYT&apos;de Edebiyat ayrı sınavlardır
                            ve tamamen farklı konular içerir. YKS Edebiyat ve Türkçe testlerinin tüm detaylarını,
                            konu dağılımlarını ve sınavda başarı getirecek altın kuralları bu rehberde bulacaksınız.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700">

                        {/* Giriş */}
                        <p className="text-lg leading-relaxed mt-6">
                            Üniversite sınavına hazırlanan öğrencilerin en çok karıştırdığı konulardan biri TYT ve AYT&apos;deki
                            &quot;Türkçe&quot; ve &quot;Edebiyat&quot; ayrımıdır. Özellikle eşit ağırlık ve sözel öğrencileri, TYT Türkçe ile AYT
                            Edebiyat derslerine aynı yöntemlerle çalışmaya kalkarak büyük bir hataya düşerler. TYT Türkçe
                            okuduğunu anlama, hızlı düşünme ve dil bilgisi kurallarını uygulama üzerine kurulu bir sınavken;
                            AYT Edebiyat tamamen bilgiye, edebi dönemlerin özelliklerine ve yazar-eser ezberine dayalı bir
                            sınavdır.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Bu rehberde, her iki sınavın da konu dağılımlarını, soru tarzlarını ve sınava hazırlık stratejilerini
                            ayrıntılı olarak inceleyeceğiz. ÖSYM&apos;nin son 5 yılındaki sınav mantığını temel alan bu analiz, sizi
                            gereksiz bilgi yığınından kurtararak doğrudan net getiren noktalara yönlendirecek.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">TYT Türkçe: Sadece Anlam ve Dil Bilgisi</h2>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
                            <p className="text-gray-700">
                                TYT&apos;de <strong>ayrı bir Edebiyat dersi yoktur.</strong> 40 Türkçe sorusunun tamamı
                                Anlam Bilgisi (paragraf, sözcük, cümle) ve Dil Bilgisi (yapı, yazım, noktalama) konularından gelir.
                                Tanzimat Dönemi özellikleri, divan şiiri nazım biçimleri veya yazar-eser eşleştirmeleri gibi
                                konular TYT&apos;de <strong>kesinlikle çıkmaz.</strong>
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">TYT Türkçe Konu Dağılımı ve Tahmini Soru Sayıları</h3>
                        <p>
                            TYT Türkçe testinde başarılı olmanın sırrı, hangi konudan ortalama kaç soru geldiğini bilmek
                            ve çalışmaları buna göre yoğunlaştırmaktır. İşte 2027 TYT için beklenen tablo:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">TYT Türkçe Konusu</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Tahmini Soru</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Stratejik Önem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-green-50"><td className="px-5 py-3 font-medium">Paragraf (Ana Düşünce, Yapı, Yardımcı Düşünce vb.)</td><td className="px-5 py-3 text-center font-bold text-lg">20-22</td><td className="px-5 py-3 text-green-700">Belirleyici - Her Gün Çözülmeli</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Cümlede Anlam</td><td className="px-5 py-3 text-center font-bold">4-5</td><td className="px-5 py-3 text-gray-600">Yüksek Önem</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Sözcükte ve Söz Öbeklerinde Anlam</td><td className="px-5 py-3 text-center font-bold">3-4</td><td className="px-5 py-3 text-gray-600">Yüksek Önem</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Yazım Kuralları</td><td className="px-5 py-3 text-center font-bold">2</td><td className="px-5 py-3 text-red-600">Garanti Net Getiren</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Noktalama İşaretleri</td><td className="px-5 py-3 text-center font-bold">2</td><td className="px-5 py-3 text-red-600">Garanti Net Getiren</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Ses Bilgisi</td><td className="px-5 py-3 text-center font-bold">1</td><td className="px-5 py-3 text-gray-600">Temel Dil Bilgisi</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Sözcük Türleri (İsim, Sıfat, Zamir, Zarf, Edat vb.)</td><td className="px-5 py-3 text-center font-bold">2-3</td><td className="px-5 py-3 text-purple-600">Temel Dil Bilgisi</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Cümlenin Ögeleri ve Cümle Türleri</td><td className="px-5 py-3 text-center font-bold">1-2</td><td className="px-5 py-3 text-gray-600">Orta Önem</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">TYT Türkçe İçin Başarı Stratejileri</h3>
                        <p>
                            TYT Türkçe&apos;de sadece konuları bilmek yetmez, zamanı çok iyi yönetmek gerekir. TYT&apos;de bir Türkçe
                            sorusu için ortalama süreniz 1-1.5 dakika arasında olmalıdır. Süreyi aşarsanız Matematik testine
                            zaman kalmaz.
                        </p>
                        <ul className="list-disc list-inside space-y-3 mb-6">
                            <li><strong>Paragraf Rutini Oluşturun:</strong> Sınava kadar her sabah kalktığınızda 20-30 paragraf sorusu çözmeyi alışkanlık haline getirin. Beyniniz sabahları okuduğunu anlamaya daha açıktır.</li>
                            <li><strong>Dil Bilgisini Ertelemeyin:</strong> Dil bilgisi konuları birbiriyle bağlantılıdır. İsimleri bilmeden tamlamaları, sözcük türlerini bilmeden cümlenin ögelerini tam anlayamazsınız. Bir zincir şeklinde çalışın.</li>
                            <li><strong>Ales Sorularından Faydalanın:</strong> ÖSYM son yıllarda TYT Türkçe paragraflarını daha uzun ve felsefi yapmaya başladı. Bu yüzden ALES çıkmış soruları sizin için harika bir antrenmandır.</li>
                        </ul>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg mb-8">
                            <h3 className="font-bold text-amber-900 mb-2">⚠️ 0,5 Net Şartı Hatırlatması</h3>
                            <p className="text-gray-700 text-sm">
                                Tüm adayların puanının hesaplanabilmesi için TYT Türkçe veya TYT Matematik testlerinden
                                en az <strong>0,5 ham net</strong> yapmaları gerekir. Aksi takdirde SAY, EA, SÖZ veya DİL
                                puanınız hesaplanmaz. Sadece TYT Türkçe çözüp Matematik&apos;e hiç dokunmasanız bile
                                puanınız hesaplanır ancak sıralamanız düşer.
                            </p>
                        </div>

                        {/* AYT KISMI */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-4">AYT Edebiyat: Konu Dağılımı ve Sınav Mantığı</h2>
                        <p>
                            AYT Türk Dili ve Edebiyatı testi, Eşit Ağırlık (EA) ve Sözel (SÖZ) adayları için can damarıdır.
                            Toplam 24 sorudan oluşan bu testin ilk 4-5 sorusu okuduğunu anlama (paragraf ve kelimede anlam)
                            şeklinde gelir. Geriye kalan yaklaşık 19-20 soru ise saf bilgi ağırlıklıdır.
                        </p>
                        
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-purple-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">AYT Edebiyat Konusu</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Tahmini Soru</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Öncelik</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Anlam Bilgisi (Paragraf ve Sözcükte Anlam)</td><td className="px-5 py-3 text-center font-bold">4-5</td><td className="px-5 py-3 text-gray-600">TYT Temeli</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Şiir Bilgisi (Ahenk, Nazım Biçimleri, Türleri)</td><td className="px-5 py-3 text-center font-bold">2-3</td><td className="px-5 py-3 text-orange-700 font-bold">🟠 Yüksek</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Edebi Sanatlar (Söz Sanatları)</td><td className="px-5 py-3 text-center font-bold">1-2</td><td className="px-5 py-3 text-orange-700 font-bold">🟠 Yüksek</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">İslamiyet Öncesi ve Geçiş Dönemi Türk Ed.</td><td className="px-5 py-3 text-center font-bold">1</td><td className="px-5 py-3 text-blue-700">Temel Bilgi</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Halk Edebiyatı</td><td className="px-5 py-3 text-center font-bold">2</td><td className="px-5 py-3 text-yellow-700 font-bold">🟡 Orta</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Divan Edebiyatı</td><td className="px-5 py-3 text-center font-bold">3-4</td><td className="px-5 py-3 text-orange-700 font-bold">🟠 Yüksek</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Tanzimat Edebiyatı</td><td className="px-5 py-3 text-center font-bold">1-2</td><td className="px-5 py-3 text-yellow-700 font-bold">🟡 Orta</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Servet-i Fünun ve Fecr-i Ati</td><td className="px-5 py-3 text-center font-bold">1</td><td className="px-5 py-3 text-blue-700">Normal</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Milli Edebiyat</td><td className="px-5 py-3 text-center font-bold">1-2</td><td className="px-5 py-3 text-yellow-700 font-bold">🟡 Orta</td></tr>
                                    <tr className="border-b bg-red-50"><td className="px-5 py-3 font-medium">Cumhuriyet Dönemi Türk Edebiyatı</td><td className="px-5 py-3 text-center font-bold">3-5</td><td className="px-5 py-3 text-red-700 font-bold">🔴 En Yüksek</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Cumhuriyet Dönemi Edebiyatının Şifresi</h3>
                        <p className="text-gray-700 mb-4">
                            Öğrencilerin en çok korktuğu bölüm Cumhuriyet Dönemidir çünkü yüzlerce yazar ve binlerce eser
                            vardır. Ancak ÖSYM her yıl kıyıda köşede kalmış eserleri değil, Türk edebiyatında iz bırakmış,
                            belirli bir akımın temsilcisi olan temel yazarları sorar.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                                <h4 className="font-bold text-purple-900 mb-2">1. Yazar-Eser Kartları Oluşturun</h4>
                                <p className="text-sm text-gray-700">
                                    Flashcard yöntemi edebiyatta hayat kurtarır. Ön yüze eserin adını (örneğin "Yaban"), 
                                    arka yüze yazarın adını (Yakup Kadri Karaosmanoğlu) ve dönemi yazın. Bu kartları 
                                    her akşam yatmadan 15 dakika tekrar edin.
                                </p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                                <h4 className="font-bold text-blue-900 mb-2">2. Akımlara Göre Gruplandırın</h4>
                                <p className="text-sm text-gray-700">
                                    Yazarları tek tek ezberlemek zordur. Onları "Yedi Meşaleciler", "İkinci Yeniciler", 
                                    "Milli Edebiyat Zevk ve Anlayışını Sürdürenler" gibi gruplar halinde öğrenin. 
                                    Bir grubun genel özelliğini bilirseniz, o gruptaki tüm yazarların stilini çözersiniz.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Şiir Bilgisi ve Edebi Sanatlar: Sadece Liste Değil, Uygulama</h3>
                        <p className="text-gray-700 mb-4">
                            AYT Edebiyat&apos;ta <strong>kesinlikle</strong> 3-4 soru doğrudan bir şiir verilerek sorulur. Size
                            bir dörtlük veya beyit verilir ve bu şiirin ölçüsü, kafiye türü, nazım biçimi (koşma, gazel vb.)
                            ve içindeki edebi sanatlar sorulur.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Edebi sanatları ezberlemek yetmez; metinde tanıyabilmek gerekir. Bunu yapabilmek için sanatların
                            tanımını değil, mantığını kavramalısınız. Örneğin:
                        </p>
                        
                        <div className="bg-gray-50 p-6 rounded-xl mb-6 border border-gray-200">
                            <p className="text-gray-800 italic mb-3 text-lg text-center font-serif">&quot;Gözlerin iki derin göl gibi duruyordu.&quot;</p>
                            <div className="bg-white p-4 rounded border">
                                <p className="text-gray-700 text-sm">
                                    → <strong>Teşbih-i Beliğ (Güzel Benzetme):</strong> Sadece benzeyen ve kendisine benzetilenin kullanıldığı 
                                    benzetmelerdir. Burada "gözler" (benzeyen) "göl"e (kendisine benzetilen) benzetilmiştir. (Bu örnekte 'gibi'
                                    ve 'derin' olduğu için tam teşbih vardır, ancak edat ve yön düşerse beliğ olur: "Gözlerin göldür").
                                    <br/><br/>
                                    <strong>İstiare (Eğretileme):</strong> Eğer cümlede sadece benzetilen olsaydı, örneğin 
                                    <em>"İki derin göle daldım baktıkça yüzüne"</em> deseydi, benzeyen (göz) olmadığı için bu istiare olurdu.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Özet: YKS Edebiyat Nasıl Çalışılmalı?</h2>
                        <p>
                            TYT Türkçe ve AYT Edebiyat birbirinden ayrılmaz ama tamamen farklı stratejiler gerektiren iki derstir:
                        </p>
                        <ul className="list-decimal list-inside space-y-3 mb-8">
                            <li><strong>TYT Türkçe için her gün okuyun ve pratik yapın.</strong> Gireceğiniz gerçek sınavda okuma hızınız sizin en büyük silahınız olacak.</li>
                            <li><strong>Dil bilgisini formülize edin.</strong> Ekleri ve kökleri çok iyi ayırabilmek size yazım kurallarında da, sözcük türlerinde de net kazandırır.</li>
                            <li><strong>AYT Edebiyat için özet defteri tutun.</strong> Konu anlatımlı koca kitaplar yerine, kendi cümlelerinizle çıkardığınız kısa özetler sınav gecesi bile işinize yarar.</li>
                            <li><strong>Çıkmış soruları ezberleyin.</strong> ÖSYM, özellikle Divan Edebiyatı ve Halk Edebiyatında geçmiş yıllarda sorduğu şairleri ve eserleri farklı şıklarda veya farklı soru kökleriyle tekrar tekrar sorar.</li>
                        </ul>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">SÖZ ve EA Puanınızı Hesaplayın</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                TYT ve AYT Edebiyat netlerinizi girerek anında Türkiye geneli tahmini sıralamanızı ve
                                puanınızı öğrenin. Üstelik YÖK Atlas güncel katsayılarıyla!
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Ücretsiz Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Edebiyat ve Türkçe Çalışanlara Önerilen Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-puan-turleri" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">YKS Puan Türleri (SAY, EA, SÖZ) →</p>
                                    <p className="text-sm text-gray-600 mt-1">Edebiyat netleri hangi puan türünü ne kadar etkiler?</p>
                                </Link>
                                <Link href="/blog/yks-kac-net-kac-puan" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">Kaç Net Kaç Puan? →</p>
                                    <p className="text-sm text-gray-600 mt-1">Edebiyattan 20 net yaparsam kaç bin sıralama gelir?</p>
                                </Link>
                                <Link href="/blog/yks-yigilma-tehlikesi" className="p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                                    <p className="font-semibold text-red-900">Sıralama Yığılmaları Nasıl Aşılır? →</p>
                                    <p className="text-sm text-gray-600 mt-1">Standart sapma ve Edebiyatın sıralamaya etkisi</p>
                                </Link>
                                <Link href="/blog/yks-hazirlik-programi" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    <p className="font-semibold text-green-900">Aylık Edebiyat Çalışma Programı →</p>
                                    <p className="text-sm text-gray-600 mt-1">Edebiyatı son aya bırakmadan nasıl bitirirsiniz?</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}


