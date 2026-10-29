import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import ArticleFeedback from '@/components/ArticleFeedback'
import ReadingProgress from '@/components/ReadingProgress'
import LastUpdatedBadge from '@/components/LastUpdatedBadge'

export const metadata: Metadata = {
    title: 'YKS 2027 Başvuru Tarihleri ve AİS Başvuru Adımları: 1 Yılını Yakma!',
    description: 'YKS 2027 başvuru takvimi, e-Devlet ile AİS kayıt adımları, ücret ödeme tuzağı, geç başvuru cezaları ve 10:00 kapı kapanma kuralı.',
    keywords: 'yks 2027 başvuru tarihleri, yks başvuru nasıl yapılır, yks ücreti 2027, geç başvuru yks, yks ne zaman',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri' },
    openGraph: {
        title: 'YKS 2027 Başvuru Tarihleri ve AİS Başvuru Adımları',
        description: 'Her yıl binlerce adayın başvuru yapıp parayı yatırmadığı için sınava giremediğini biliyor musun? Adım adım başvuru kılavuzu.',
        type: 'article',
        publishedTime: '2026-05-12',
        modifiedTime: '2026-10-29',
        url: 'https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri',
        images: [
            {
                url: '/images/blog/yks-2027-basvuru-tarihleri.jpg',
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
                <ReadingProgress />
                <BlogArticleSchema 
                    title="YKS 2027 Başvuru Tarihleri ve AİS Başvuru Adımları" 
                    description="2027 YKS (TYT-AYT) başvuru takvimi, ÖSYM AİS üzerinden e-Devlet ile kayıt aşamaları, geç başvuru koşulları ve ödeme süreci."
                    datePublished="2026-05-12"
                    dateModified="2026-10-29"
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
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Kritik Süreç</span>
                            <time className="text-gray-600" dateTime="2026-05-12">12 Mayıs 2026</time>
                            <span className="text-gray-600">• 10 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS 2027 Başvuru Rehberi: Bir Hata Yüzünden 1 Yılın Çöpe Gitmesin
                        </h1>
                        <p className="text-xl text-gray-600">
                            Aylarca sabahlayıp soru çözen adayların &ldquo;Ben formu kaydettim sanmıştım ama ücret ödenmemiş&rdquo; diyerek sınava alınmadığı acı hikâyeleri her sene görüyoruz. İşte başvuru adımları ve dikkat edilmesi gereken hayati detaylar.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-2027-basvuru-tarihleri.jpg"
                        alt="YKS 2027 Başvuru Tarihleri ve AİS Kayıt Adımları"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS hazırlığı sadece ders çalışmaktan ibaret değildir; bürokratik süreci de kusursuz tamamlamak zorundasın. ÖSYM sisteminde mazeret kabul edilmez. Başvuru süresini 1 dakika dahi geciktirsen sistem kapanır ve koskoca 1 yılın heba olur.
                        </p>

                        <p>
                            İşleri son güne bırakmadan, sistem yoğunluğundan sunucular çökmeden başvurunu tamamlaman için adımları tek tek derledik.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            YKS Başvuru Takviminin 3 Kritik Dönemi
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">1. Ana Başvuru Dönemi (Şubat Başı - Mart Başı)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    ÖSYM AİS (ais.osym.gov.tr) üzerinden başvuruların açıldığı yaklaşık 3-4 haftalık ana penceredir. Hangi oturumlara gireceğini seçtiğin, sınav merkezini belirlediğin ve standart oturum ücretini yatırdığın dönemdir.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-950 text-lg mb-1">2. Geç Başvuru Günleri (Mart Sonu)</h3>
                                <p className="text-sm text-amber-900 leading-relaxed">
                                    Ana dönemi herhangi bir sebeple kaçıran adaylar için ÖSYM&apos;nin açtığı 2-3 günlük son telafi şansıdır. Ancak burada sınav ücreti yaklaşık <strong>%50 artırımlı (zamlı)</strong> olarak ödenir. Cebine yazık etmemek için ana dönemi kaçırmamalısın.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">3. Büyük Sınav Hafta Sonu (Haziran)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    Cumartesi sabahı 10:15&apos;te TYT, Pazar sabahı 10:15&apos;te AYT ve Pazar öğleden sonra 15:45&apos;te YDT oturumları yapılır. <strong>Unutulmaması gereken en katı kural: Saat 10:00&apos;dan sonra bina kapıları kilitlenir ve tek bir aday bile içeri alınmaz!</strong>
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            e-Devlet ile AİS Başvurusu Nasıl Yapılır? (Adım Adım)
                        </h2>
                        <ol className="list-decimal pl-6 space-y-3 text-sm text-gray-800">
                            <li><strong>ÖSYM AİS Girişi:</strong> ais.osym.gov.tr adresine girerek &ldquo;e-Devlet ile Giriş Yap&rdquo; seçeneğini kullan. Eğer yeni çipli kimlik kartın varsa doğrudan sisteme bağlanabilirsin.</li>
                            <li><strong>Fotoğraf Geçerliliği Kontrolü:</strong> Kimlik kartındaki fotoğrafının son 50 ay içinde çekilmiş olması gerekir. Fotoğraf süresi dolmuşsa sistem uyarı verir; bu durumda en yakın Nüfus Müdürlüğü&apos;nden kimlik fotoğrafını güncellemen gerekir.</li>
                            <li><strong>Oturum Seçimi:</strong> TYT oturumu tüm adaylar için zorunludur. Eğer 4 yıllık lisans programı hedefliyorsan mutlaka <strong>AYT</strong> oturumunu da işaretlemelisin. Dil puanı isteyenler ise YDT kutucuğunu işaretlemelidir.</li>
                            <li><strong>Sınav Merkezi Tercihi:</strong> İkamet ettiğin adrese en yakın il/ilçe merkezini 1. tercih olarak belirle. Sınav günü sabah trafiğinde stres yaşamamak için mesafeyi iyi hesapla.</li>
                            <li><strong>Ödemeyi Yap ve Onayı Gör:</strong> Sadece formu onaylamak başvurunun bittiği anlamına gelmez! Mutlaka sınav ücretini yatırmalısın.</li>
                        </ol>

                        <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-xl my-6">
                            <h3 className="font-bold text-red-950 text-base mb-1">Hayati Uyarı: Ücreti Yatırmazsan Başvurun İptal Olur!</h3>
                            <p className="text-sm text-red-900">
                                Formu kaydettikten sonra ÖSYM Ödeme Sistemi (odeme.osym.gov.tr) üzerinden banka veya kredi kartıyla ödemeni tamamla. Ardından tekrar AİS ekranına dönerek durumun <strong>&ldquo;Başvuru İşlemi ÖSYM&apos;ye Bildirilmiştir ve Ücreti Ödenmiştir&rdquo;</strong> yeşil onayıyla tamamlandığını kendi gözlerinle gör.
                            </p>
                        </div>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Başvurunu Tamamladın mı? Hedef Netlerini Belirle</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                İstediğin üniversite ve bölüm için hangi testten kaç net yapman gerektiğini merak ediyorsan, güncel ÖSYM katsayılarıyla çalışan hesaplayıcımızı hemen dene.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Puan ve Sıralama Hesaplayıcıyı Aç →
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            YKS 2027 Başvuru Süreci Hakkında Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">Mezun adayların liseye veya ÖSYM merkezine gitmesi gerekir mi?</h3>
                                <p className="text-sm text-gray-700">
                                    Hayır. e-Devlet şifresi ve çipli kimlik kartı olan her aday (ister mezun ister 12. sınıf olsun) başvurularını internetten tek başına tamamlayabilir.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">Sınav giriş belgesi ne zaman yayımlanır?</h3>
                                <p className="text-sm text-gray-700">
                                    ÖSYM genellikle sınav tarihinden yaklaşık 10-12 gün önce sınav giriş belgelerini AİS üzerinden erişime açar. Renkli veya siyah-beyaz çıktı alıp üzerinde hiçbir karalama olmadan sınava götürmek zorunludur.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">TYT&apos;ye girip AYT&apos;ye girmesem olur mu?</h3>
                                <p className="text-sm text-gray-700">
                                    Sadece 2 yıllık ön lisans bölümlerini veya özel yetenek programlarını düşünüyorsan yalnızca TYT&apos;ye başvurabilirsin. Ancak 4 yıllık bir fakülte istiyorsan AYT&apos;ye girmek zorunludur.
                                </p>
                            </div>
                        </div>

                        <p className="mt-8">
                            Kalan çalışma süreni en iyi şekilde planlamak için <Link href="/blog/yks-son-3-ay-calisma-plani" className="text-blue-600 font-semibold hover:underline">YKS Son 3 Ay Çalışma Programı</Link>&apos;na göz atabilir, puan türleri hakkında ayrıntılı bilgi için <Link href="/blog/yks-puan-turleri" className="text-blue-600 font-semibold hover:underline">YKS Puan Türleri</Link> sayfamızı ziyaret edebilirsin.
                        </p>

                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
