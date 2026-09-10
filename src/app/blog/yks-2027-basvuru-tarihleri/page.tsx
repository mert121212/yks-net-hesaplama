import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS 2027 Başvuru Tarihleri ve Ücreti: Kimse Bu Tarihleri Kaçırmasın',
    description: '2027 YKS (TYT-AYT) başvuru takvimi, ÖSYM AİS üzerinden e-Devlet ile kayıt adımları, geç başvuru günü riskleri ve ücret detayları.',
    keywords: 'yks 2027 başvuru tarihleri, yks başvuru nasıl yapılır, yks ücreti 2027, geç başvuru yks, yks ne zaman',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri' },
    openGraph: {
        title: 'YKS 2027 Başvuru Takvimi: Son Günü Bekleyenlerin Dramı',
        description: 'YKS başvuru süreci, ücretler ve AİS fotoğraf güncelleme hakkında bilmeniz gereken her şey.',
        type: 'article',
        publishedTime: '2026-02-14',
        modifiedTime: '2026-02-17',
        url: 'https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS 2027 Başvuru Rehberi'
            }
        ],
    },
}

export default function YKSBasvuruTarihleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS 2027 Başvuru Tarihleri ve Ücreti: Kimse Bu Tarihleri Kaçırmasın" 
                    description="2027 YKS (TYT-AYT) başvuru takvimi, ÖSYM AİS üzerinden e-Devlet ile kayıt adımları, geç başvuru günü riskleri ve ücret detayları."
                    datePublished="2026-02-14"
                    dateModified="2026-02-17"
                    url="https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri"
                    keywords={['yks 2027 başvuru tarihleri', 'yks başvuru nasıl yapılır', 'yks ücreti 2027', 'geç başvuru yks', 'yks ne zaman']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS 2027 Başvuru</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Önemli Tarihler</span>
                            <time className="text-gray-600" dateTime="2026-02-14">14 Şubat 2026</time>
                            <span className="text-gray-600">• 7 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS 2027 Başvuru Tarihleri, Ücretler ve AİS Başvuru Adımları
                        </h1>
                        <p className="text-xl text-gray-600">
                            Aylarca soru bankası bitirip son güne bırakılan bir ödeme yüzünden sınav hakkını kaybetmeyin. ÖSYM başvuru takvimi, e-Devlet ile kayıt ve geç başvuru riskleri.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her yıl binlerce öğrencinin yaptığı en tehlikeli hata, sınav başvurusunu son güne, hatta son saatlere bırakmaktır. Son saatlerde banka sunucularında yaşanan yoğunluklar veya sistem kesintileri, bir yıllık emeğin tehlikeye girmesine yol açabilir.
                        </p>

                        <p>
                            ÖSYM süre konusunda tamamen katıdır. Belirlenen tarih ve saat dolduğu anda sistem kapanır. Bu yüzden başvuru takvimini şimdiden bilmek ve ilk günlerde işlemi tamamlamak en sağlıklı yoldur.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            ÖSYM YKS Takvim Çerçevesi
                        </h2>
                        <p>
                            ÖSYM resmi takvimi her yıl kış döneminde ilan eder. Yıllara göre değişmeyen temel süreç dağılımı şöyledir:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-900 text-lg mb-1">Şubat Başı - Mart Başı: Standart Başvuru Dönemi</h3>
                                <p className="text-sm text-blue-800 leading-relaxed">
                                    Yaklaşık 3-4 haftalık bu ana süreçte adaylar ÖSYM AİS üzerinden oturumlarını seçer ve sınav ücretini yatırır. Başvurunuzu ilk hafta içinde tamamlamak en stressiz yöntemdir.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-900 text-lg mb-1">Mart Ortası: Geç Başvuru Günleri</h3>
                                <p className="text-sm text-amber-800 leading-relaxed">
                                    Normal süreyi kaçıran adaylar için açılan 2-3 günlük telafi penceresidir. Ancak sınav ücreti %50 zamlı ödenir ve sınav yeri açısından uzak merkezlere atanma riski doğar.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-900 text-lg mb-1">Haziran Ortası: Büyük Sınav Hafta Sonu</h3>
                                <p className="text-sm text-emerald-800 leading-relaxed">
                                    Cumartesi sabahı 10.15&apos;te TYT, Pazar sabahı 10.15&apos;te AYT ve Pazar öğleden sonra 15.45&apos;te YDT uygulanır. Kapıların 10.00&apos;da kapandığını ve 10.01&apos;de gelen hiçbir adayın içeri alınmadığını unutmayın.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            e-Devlet ile AİS Üzerinden 4 Adımda Başvuru
                        </h2>
                        <p>
                            Yeni nesil çipli kimlik kartınız ve e-Devlet şifreniz varsa okulunuza ya da sınav merkezine gitmeden evinizden başvurabilirsiniz:
                        </p>

                        <ol className="list-decimal pl-6 space-y-3">
                            <li>
                                <strong>AİS Sistemine Giriş:</strong> ais.osym.gov.tr adresine girip &quot;e-Devlet ile Kayıt Ol / Giriş Yap&quot; butonunu kullanın.
                            </li>
                            <li>
                                <strong>Bilgilerin Kontrolü:</strong> Kimlik ve eğitim bilgilerinizin doğruluğunu teyit edin. Fotoğrafınızın güncel olması zorunludur; eski fotoğraflı kimlikler sınav sabahı sorun yaratabilir.
                            </li>
                            <li>
                                <strong>Oturum Seçimi:</strong> TYT oturumu tüm adaylar için zorunludur. 4 yıllık lisans fakültesi hedefliyorsanız AYT oturumunu, dil bölümleri istiyorsanız YDT oturumunu mutlaka işaretleyin.
                            </li>
                            <li>
                                <strong>Ödeme ve Onay:</strong> Başvuru formunu kaydettikten sonra ÖSYM Ödemeler Sistemi üzerinden banka kartı veya kredi kartıyla ödemenizi yapın.
                            </li>
                        </ol>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            En Sık Yapılan Hata: &quot;Kaydettim, Bitti Sandım&quot;
                        </h2>
                        <p>
                            Her yıl yüzlerce aday formu sisteme kaydedip &quot;başvurum tamamlandı&quot; zannederek ödemeyi unutur. 
                        </p>
                        <p>
                            ÖSYM kurallarına göre sınav ücreti yatırılmayan hiçbir başvuru geçerli sayılmaz. Ödeme yaptıktan sonra mutlaka AİS ekranına tekrar girip <strong>&quot;Başvuru Durumu: Ödendi ve Onaylandı&quot;</strong> yeşil ibaresini gözünüzle görün ve başvuru kayıt belgenizi PDF olarak saklayın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Geç Başvuru Gününün Gizli Tehlikesi
                        </h2>
                        <p>
                            &quot;Kaçırırsam nasıl olsa geç başvuru var&quot; rahatlığı ciddi sorunlara yol açabilir:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Sınav ücreti <strong>%50 artırımlı</strong> tahsil edilir.</li>
                            <li>Normal başvuru döneminde kendi ilçenizdeki tüm sınav binalarının kontenjanları dolmuş olabilir. Bu durumda ÖSYM sizi ikamet ettiğiniz yerden çok daha uzak bir ilçeye ya da komşu ile sınav merkezi olarak atayabilir.</li>
                        </ul>

                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 my-10 text-center text-white shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">Sınava Kalan Sürede Hedefinizi Belirleyin</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm">
                                Başvurunuzu tamamladıktan sonra hedefinize kaç net kaldığını hesaplama motorumuzla test edin, çalışmalarınızı somut rakamlarla yönlendirin.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-700 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow">
                                Net ve Puan Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Hazırlık Sürecinde İlgili Rehberler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-hazirlik-programi" className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-blue-100">
                                    <p className="font-semibold text-blue-900">YKS Çalışma Programı Nasıl Hazırlanır? →</p>
                                    <p className="text-xs text-gray-600 mt-1">Haftalık çalışma disiplini ve blok çalışma stratejileri.</p>
                                </Link>
                                <Link href="/blog/tyt-kesin-cikan-konular" className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors border border-purple-100">
                                    <p className="font-semibold text-purple-900">TYT Kesin Çıkan Konular →</p>
                                    <p className="text-xs text-gray-600 mt-1">Her yıl sınavda mutlaka gelen garanti soru başlıkları.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
