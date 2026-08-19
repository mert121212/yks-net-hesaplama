import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS 2027 Başvuru Tarihleri, Takvimi ve Başvuru Adımları',
    description: 'YKS 2027 başvuru tarihleri, sınav tarihleri, sonuç açıklama ve tercih takvimi. AİS üzerinden nasıl başvurulur? Sınav günü hazırlık listesi.',
    keywords: 'yks 2027 tarihleri, yks başvuru tarihleri, yks sınav tarihi, yks sonuç tarihi, ais başvuru',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri' },
    openGraph: {
        title: 'YKS 2027 Başvuru Tarihleri, Takvimi ve Başvuru Adımları',
        description: 'YKS 2027 başvuru tarihleri ve sınav takvimi. AİS üzerinden nasıl başvurulur?',
        type: 'article',
        publishedTime: '2026-02-23',
        url: 'https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri',
    },
}

export default function YKS2027BasvuruTarihleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS 2027 Başvuru Tarihleri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Takvim</span>
                            <time className="text-gray-600">23 Şubat 2026</time>
                            <span className="text-gray-600">• 7 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS 2027 Başvuru Tarihleri, Takvimi ve Başvuru Adımları
                        </h1>
                        <p className="text-xl text-gray-700">
                            Tarihleri kaçırmak, bir yılınızın kaybına neden olabilir. ÖSYM tarafından
                            açıklanan 2027 YKS takvimi, AİS başvuru adımları ve sınav günü kontrol
                            listeniz bu rehberde.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700">

                        {/* Giriş */}
                        <p className="text-lg leading-relaxed">
                            Her yıl yaklaşık 3 milyondan fazla adayın girdiği YKS (Yükseköğretim Kurumları Sınavı),
                            Türkiye&apos;deki en büyük ulusal sınavdır. Hazırlık sürecinde ders çalışmak kadar
                            önemli olan bir diğer konu da <strong>kritik tarihleri takip etmektir.</strong> Başvuru
                            süresini kaçıran, geç başvuru ücretini ödemeyen ya da sınav günü yanında olması gereken
                            belgeleri unutan binlerce aday her yıl mağdur oluyor. Bu rehber, tam da bu tür
                            sürprizlerin önüne geçmeniz için hazırlandı.
                        </p>

                        {/* Önemli Uyarı */}
                        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 my-6">
                            <h3 className="font-bold text-amber-900 mb-2">⚠️ Önemli Uyarı</h3>
                            <p className="text-amber-800 text-sm">
                                Aşağıdaki tarihler ÖSYM&apos;nin geçmiş yıllardan edinilen pratiğine dayanarak tahmini
                                olarak verilmektedir. Kesin tarihler ÖSYM tarafından resmi sitesinden
                                (<a href="https://www.osym.gov.tr" target="_blank" rel="noopener noreferrer" className="text-amber-700 hover:underline font-medium">osym.gov.tr</a>)
                                açıklanacaktır. Tarih değişikliği olması durumunda bu sayfayı güncelleyeceğiz.
                            </p>
                        </div>

                        {/* Takvim Tablosu */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">2027 YKS Takvimi</h2>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Etkinlik</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Tahmini Tarih</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Durum</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-green-50">
                                        <td className="px-5 py-3 font-medium">Başvuru Başlangıcı</td>
                                        <td className="px-5 py-3">Şubat 2027 (1. hafta)</td>
                                        <td className="px-5 py-3 text-green-700 font-bold">✅ Tamamlandı</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-5 py-3 font-medium">Başvuru Bitiş Tarihi</td>
                                        <td className="px-5 py-3">Mart 2027 (1. hafta)</td>
                                        <td className="px-5 py-3 text-green-700 font-bold">✅ Tamamlandı</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="px-5 py-3 font-medium">Geç Başvuru Süresi</td>
                                        <td className="px-5 py-3">Mart 2027 (2. hafta)</td>
                                        <td className="px-5 py-3 text-green-700 font-bold">✅ Tamamlandı</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-5 py-3 font-medium">Sınav Giriş Belgesi</td>
                                        <td className="px-5 py-3">Haziran 2027 (1. hafta)</td>
                                        <td className="px-5 py-3 text-yellow-700 font-bold">⏳ Yaklaşıyor</td>
                                    </tr>
                                    <tr className="border-b bg-red-50">
                                        <td className="px-5 py-3 font-medium">TYT Sınav Tarihi</td>
                                        <td className="px-5 py-3 font-bold">20 Haziran 2027 (Cumartesi)</td>
                                        <td className="px-5 py-3 text-red-700 font-bold">🎯 Kritik</td>
                                    </tr>
                                    <tr className="border-b bg-red-50">
                                        <td className="px-5 py-3 font-medium">AYT ve YDT Sınav Tarihi</td>
                                        <td className="px-5 py-3 font-bold">21 Haziran 2027 (Pazar)</td>
                                        <td className="px-5 py-3 text-red-700 font-bold">🎯 Kritik</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-5 py-3 font-medium">Sonuç Açıklaması</td>
                                        <td className="px-5 py-3">Temmuz 2027 (3. hafta)</td>
                                        <td className="px-5 py-3 text-blue-700 font-bold">📋 Beklemede</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="px-5 py-3 font-medium">Tercih Dönemi</td>
                                        <td className="px-5 py-3">Temmuz – Ağustos 2027</td>
                                        <td className="px-5 py-3 text-blue-700 font-bold">📋 Beklemede</td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-3 font-medium">Yerleştirme Sonuçları</td>
                                        <td className="px-5 py-3">Ağustos 2027 (son hafta)</td>
                                        <td className="px-5 py-3 text-blue-700 font-bold">📋 Beklemede</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* AİS Başvuru Adımları */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">AİS Üzerinden Başvuru Nasıl Yapılır?</h2>
                        <p>
                            YKS başvurusu, ÖSYM&apos;nin Aday İşlemleri Sistemi (AİS) üzerinden yapılır. Başvuru
                            sürecinde izlemeniz gereken adımlar şunlardır:
                        </p>
                        <div className="space-y-4 my-6">
                            <div className="flex items-start gap-4 bg-blue-50 p-5 rounded-lg">
                                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                                <div>
                                    <h4 className="font-bold text-gray-900">AİS Hesabı Oluşturun</h4>
                                    <p className="text-sm text-gray-700 mt-1">
                                        <a href="https://ais.osym.gov.tr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ais.osym.gov.tr</a> adresine
                                        gidin. İlk kez başvuruyorsanız T.C. kimlik numaranız ve şifrenizle hesap oluşturun. Daha önce
                                        başvuru yaptıysanız mevcut hesabınızla giriş yapın.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-green-50 p-5 rounded-lg">
                                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                                <div>
                                    <h4 className="font-bold text-gray-900">Fotoğraf Yükleyin</h4>
                                    <p className="text-sm text-gray-700 mt-1">
                                        Son 6 ay içinde çekilmiş, ön cepheden, düz beyaz veya açık renkli fon üzerinde, yüzünüzün net
                                        göründüğü bir vesikalık fotoğraf yükleyin. JPEG formatında, en az 200×250 piksel olmalıdır.
                                        Fotoğraf reddedilirse başvurunuz tamamlanmaz.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-purple-50 p-5 rounded-lg">
                                <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                                <div>
                                    <h4 className="font-bold text-gray-900">Başvuru Formunu Doldurun</h4>
                                    <p className="text-sm text-gray-700 mt-1">
                                        Hangi oturumlara gireceğinizi seçin (TYT zorunlu, AYT ve YDT isteğe bağlı). İletişim
                                        bilgilerinizi, okul bilgilerinizi ve engel durumunuz varsa özel düzenleme talebinizi girin.
                                        Sınav merkezi tercihinizi yapın (3 il tercih hakkı vardır).
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-orange-50 p-5 rounded-lg">
                                <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                                <div>
                                    <h4 className="font-bold text-gray-900">Sınav Ücretini Ödeyin</h4>
                                    <p className="text-sm text-gray-700 mt-1">
                                        2026 YKS sınav ücreti 350 TL civarındaydı (2027 için ÖSYM tarafından ayrıca açıklanacaktır).
                                        Ödeme banka, PTT veya kredi kartı ile yapılabilir. <strong>Ödeme yapılmazsa başvuru
                                        tamamlanmaz.</strong> Geç başvuru döneminde ücret %50 artabilir.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 bg-red-50 p-5 rounded-lg">
                                <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                                <div>
                                    <h4 className="font-bold text-gray-900">Başvuru Onayını Kontrol Edin</h4>
                                    <p className="text-sm text-gray-700 mt-1">
                                        Ödeme sonrası AİS&apos;e tekrar giriş yaparak başvurunuzun &quot;onaylandı&quot; durumunda olduğundan
                                        emin olun. Başvuru durumu &quot;beklemede&quot; kalıyorsa ödemenizde sorun olmuş olabilir.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Gerekli Belgeler */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sınav Günü Yanınızda Bulunması Gereken Belgeler</h2>
                        <p>
                            Sınav günü aşağıdaki belgeleri yanınızda bulundurmak <strong>zorunludur.</strong> Eksik belge ile sınava
                            alınmazsınız ve herhangi bir mazeret kabul edilmez.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 my-6">
                            <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-900 mb-2">📋 Sınav Giriş Belgesi</h3>
                                <p className="text-sm text-gray-700">
                                    AİS üzerinden sınav tarihinden yaklaşık 2 hafta önce yayınlanır. A4 kağıda
                                    renkli veya siyah-beyaz çıktı alabilirsiniz. Belge üzerinde sınav yeri, salon
                                    numarası ve oturma düzeniniz yer alır.
                                </p>
                            </div>
                            <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
                                <h3 className="font-bold text-green-900 mb-2">🪪 Nüfus Cüzdanı / TC Kimlik Kartı</h3>
                                <p className="text-sm text-gray-700">
                                    Fotoğraflı ve T.C. kimlik numaralı olmalıdır. Süresi geçmiş kimlikler kabul
                                    edilmez. Yeni nesil kimlik kartı veya pasaport da geçerlidir. Ehliyet kabul
                                    edilmez.
                                </p>
                            </div>
                        </div>

                        {/* Sınav Günü Kontrol Listesi */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sınav Günü Kontrol Listesi</h2>
                        <p>
                            Sınav sabahı panik yaşamamak için aşağıdaki listeyi önceden hazırlayın ve bir gece
                            öncesinden çantanızı düzenleyin:
                        </p>
                        <div className="bg-gray-50 p-6 rounded-xl my-6">
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                                <div className="flex items-center gap-2"><span className="text-green-600 font-bold">✅</span> Sınav Giriş Belgesi (çıktı)</div>
                                <div className="flex items-center gap-2"><span className="text-green-600 font-bold">✅</span> Nüfus cüzdanı / TC kimlik kartı</div>
                                <div className="flex items-center gap-2"><span className="text-green-600 font-bold">✅</span> Birden fazla kurşun kalem (2B)</div>
                                <div className="flex items-center gap-2"><span className="text-green-600 font-bold">✅</span> Silgi (plastik, beyaz)</div>
                                <div className="flex items-center gap-2"><span className="text-green-600 font-bold">✅</span> Kalemtıraş (bıçaksız)</div>
                                <div className="flex items-center gap-2"><span className="text-green-600 font-bold">✅</span> Şeffaf su şişesi (etiketsiz)</div>
                                <div className="flex items-center gap-2"><span className="text-green-600 font-bold">✅</span> Şeffaf poşet (eşyalar için)</div>
                                <div className="flex items-center gap-2"><span className="text-green-600 font-bold">✅</span> Saat (analog, fonksiyonsuz)</div>
                                <div className="flex items-center gap-2"><span className="text-red-600 font-bold">❌</span> Cep telefonu (salon dışında bırakın)</div>
                                <div className="flex items-center gap-2"><span className="text-red-600 font-bold">❌</span> Akıllı saat, kulaklık</div>
                                <div className="flex items-center gap-2"><span className="text-red-600 font-bold">❌</span> Hesap makinesi</div>
                                <div className="flex items-center gap-2"><span className="text-red-600 font-bold">❌</span> Yiyecek (salona alınmaz)</div>
                            </div>
                        </div>

                        {/* Sınav Saatleri */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sınav Oturumları ve Süreleri</h2>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-purple-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Oturum</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Tarih</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Başlangıç</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Süre</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Soru Sayısı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-blue-50">
                                        <td className="px-5 py-3 font-medium">TYT</td>
                                        <td className="px-5 py-3 text-center">20 Haziran 2027</td>
                                        <td className="px-5 py-3 text-center font-bold">10:15</td>
                                        <td className="px-5 py-3 text-center">165 dakika</td>
                                        <td className="px-5 py-3 text-center font-bold">120 soru</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-5 py-3 font-medium">AYT</td>
                                        <td className="px-5 py-3 text-center">21 Haziran 2027</td>
                                        <td className="px-5 py-3 text-center font-bold">10:15</td>
                                        <td className="px-5 py-3 text-center">180 dakika</td>
                                        <td className="px-5 py-3 text-center font-bold">80 soru</td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-3 font-medium">YDT</td>
                                        <td className="px-5 py-3 text-center">21 Haziran 2027</td>
                                        <td className="px-5 py-3 text-center font-bold">15:45</td>
                                        <td className="px-5 py-3 text-center">120 dakika</td>
                                        <td className="px-5 py-3 text-center font-bold">80 soru</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg my-6">
                            <h3 className="font-bold text-red-900 mb-2">⚠️ Geç Kalma Riski</h3>
                            <p className="text-gray-700 text-sm">
                                ÖSYM kurallarına göre sınav başladıktan sonra salona giriş yapılamaz. Sınav yerinize
                                en az <strong>1 saat önceden</strong> ulaşmanız şiddetle tavsiye edilir. Trafik yoğunluğu,
                                toplu taşıma aksaklıkları veya yanlış salon gibi sürprizlere karşı hazırlıklı olun.
                                Bir gün öncesinden sınav yerinizi keşfetmeniz büyük avantaj sağlar.
                            </p>
                        </div>

                        {/* Sonuç Sonrası Süreç */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sonuç Açıklaması ve Tercih Süreci</h2>
                        <p>
                            Sınav sonuçları genellikle sınavdan yaklaşık 3-4 hafta sonra ÖSYM tarafından açıklanır.
                            Sonuçlar e-Devlet ve AİS üzerinden görüntülenebilir. Sonuç belgenizde ham puanınız,
                            yerleştirme puanınız ve Türkiye sıralamanız yer alır.
                        </p>
                        <p>
                            Tercih dönemi sonuç açıklamasından hemen sonra başlar ve genellikle 7-10 gün sürer.
                            Bu sürede <strong>en fazla 24 tercih</strong> yapabilirsiniz. Tercihleri dikkatli yapmanız
                            ve &quot;ölü tercih&quot; (asla yerleşemeyeceğiniz bir bölüm) yapmaktan kaçınmanız gerekir.
                            Tercih stratejileri hakkında detaylı bilgi için{' '}
                            <Link href="/blog/universite-tercih-stratejileri" className="text-blue-600 hover:underline">
                                Üniversite Tercih Stratejileri
                            </Link>{' '}
                            makalemizi okuyabilirsiniz.
                        </p>

                        {/* Geç Başvuru */}
                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Geç Başvuru Hakkında Bilinmesi Gerekenler</h2>
                        <p>
                            Normal başvuru süresini kaçırdıysanız, ÖSYM genellikle 3-5 günlük ek bir &quot;geç
                            başvuru&quot; süresi tanır. Ancak bunun bazı dezavantajları vardır:
                        </p>
                        <ul className="list-disc list-inside space-y-2 my-4 text-sm">
                            <li>Sınav ücreti normal ücretin yaklaşık <strong>1,5 katı</strong> olur</li>
                            <li>Sınav merkezi seçenekleriniz kısıtlanabilir (tercih ettiğiniz ilde yer kalmamış olabilir)</li>
                            <li>Geç başvuru süresi kesin değildir; ÖSYM her yıl ayrıca duyurur</li>
                        </ul>
                        <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-lg my-6">
                            <h3 className="font-bold text-green-900 mb-2">💡 Tavsiye</h3>
                            <p className="text-gray-700 text-sm">
                                Geç başvuruya kalmamanız için başvuru döneminin ilk haftasında işleminizi tamamlayın.
                                Fotoğraf reddedilmesi veya ödeme sorunları gibi aksaklıklara karşı kendinize zaman
                                tanıyın. Son gün yapılan başvurularda sistem yoğunluğu nedeniyle çökmeler yaşanabilir.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">YKS Geri Sayım Aracımızı Kullanın</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                Sınava kaç gün kaldığını anlık takip edin, hazırlık planınızı ona göre ayarlayın
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/geri-sayim" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                    ⏰ Geri Sayıma Git →
                                </Link>
                                <Link href="/" className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors shadow-lg border-2 border-white/30">
                                    Net Hesapla →
                                </Link>
                            </div>
                        </div>

                        {/* İlgili Makaleler */}
                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/universite-tercih-stratejileri" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">Tercih Stratejileri →</p>
                                    <p className="text-sm text-gray-600 mt-1">24 tercih hakkını en verimli nasıl kullanırsınız?</p>
                                </Link>
                                <Link href="/blog/yks-hazirlik-programi" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    <p className="font-semibold text-green-900">YKS Hazırlık Programı →</p>
                                    <p className="text-sm text-gray-600 mt-1">Günlük, haftalık ve aylık çalışma planları</p>
                                </Link>
                                <Link href="/blog/yks-puan-turleri" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">YKS Puan Türleri →</p>
                                    <p className="text-sm text-gray-600 mt-1">SAY, EA, SÖZ, DİL puanları ve barajlar</p>
                                </Link>
                                <Link href="/blog/yks-net-hesaplama-nasil-yapilir" className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                                    <p className="font-semibold text-orange-900">Net Hesaplama Rehberi →</p>
                                    <p className="text-sm text-gray-600 mt-1">ÖSYM katsayılarıyla net hesaplama formülleri</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}


