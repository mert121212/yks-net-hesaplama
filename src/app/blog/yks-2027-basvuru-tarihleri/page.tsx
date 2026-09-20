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
                            Her yıl Mart ayında rehberlik odasına gözyaşları içinde gelen en az iki öğrenci olur: <em>&quot;Hocam gece 23:45&apos;te ödemeyi yapacaktım, banka kartı onay kodu göndermedi, sistem kapandı! Ne yapacağım ben şimdi?&quot;</em>
                        </p>

                        <p>
                            İşte o an insanın kalbi parçalanır. Çocuk 10 ay boyunca sabah 7&apos;de kütüphaneye gitmiş, binlerce soru çözmüş ama basit bir başvuru ihmali yüzünden 1 koca yılı heba olma noktasına gelmiş.
                        </p>

                        <p>
                            ÖSYM sistemiyle şaka olmaz; merhamet, rica ya da torpil işlemez. Saat 23:59 dediyse, 00:00&apos;da kepenk iner. Bir yıllık emeğini riske atmak istemiyorsan başvuru sürecinin adımlarını ve o görünmez tuzakları çok iyi bilmelisin:
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            ÖSYM YKS Takvimi: 3 Kritik Eşik
                        </h2>
                        <p>
                            ÖSYM takviminin değişmeyen ritmi şudur; bu tarihleri telefonunun alarmına kaydet:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">1. Şubat Başı - Mart Başı: Standart Başvuru</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Ana başvuru penceresidir (yaklaşık 3-4 hafta sürer). ÖSYM AİS üzerinden oturumlarını seçersin, ücretini yatırırsın. Kuralın şu olmalı: Başvuru açıldığı ilk 3 gün içinde işlemini bitir, kafanı rahatlatıp dersine dön.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-950 text-lg mb-1">2. Mart Ortası: Geç Başvuru Günleri (Acil Durum Kapısı)</h3>
                                <p className="text-sm text-amber-900 leading-relaxed">
                                    Normal tarihi kaçıranlar için açılan 2-3 günlük telafi kapısıdır. Ama öyle bedava değil: Sınav ücreti <strong>%50 zamlı</strong> ödenir ve sınav yeri olarak seni ikamet ettiğin yerin çok uzağındaki bir ilçeye atayabilirler.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">3. Haziran Ortası: Büyük Sınav Hafta Sonu</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    Cumartesi 10:15 TYT, Pazar 10:15 AYT ve Pazar 15:45 YDT. <strong>Saat 10:00&apos;da bina kapıları kapanır!</strong> 10:01&apos;de kapıda olsan bile içeri alınmazsın; kapıda ağlayan öğrencilerin videolarını her sene haberlerde görmüşsündür. Sınav yerine en geç 09:15&apos;te varacak şekilde yola çık.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            e-Devlet ile Evden 5 Dakikada Başvuru
                        </h2>
                        <p>
                            Eskisi gibi liselere veya ÖSYM merkezlerine gidip sıra bekleme devri bitti. Çipli kimliğin ve e-Devlet şifren varsa yatağından bile başvurabilirsin:
                        </p>

                        <ol className="list-decimal pl-6 space-y-3">
                            <li><strong>AİS&apos;e Giriş:</strong> ais.osym.gov.tr adresine git, &quot;e-Devlet ile Giriş Yap&quot; butonuna bas.</li>
                            <li><strong>Kimlik ve Fotoğraf Kontrolü:</strong> Fotoğrafının güncel olduğundan emin ol. Çok eski, tanınmayacak durumdaysa kimlik yenilemen gerekebilir.</li>
                            <li><strong>Oturumları Seç:</strong> TYT zaten herkes için zorunlu. 4 yıllık fakülte istiyorsan AYT&apos;yi mutlaka işaretle. Dilciysen YDT&apos;yi de seç.</li>
                            <li><strong>Ödeme:</strong> Formu kaydettikten sonra ÖSYM Ödemeler sayfasına geçip banka veya kredi kartıyla ödemeni yap.</li>
                        </ol>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            En Tehlikeli Tuzak: &quot;Kaydettim Bitti&quot; Zannetmek
                        </h2>
                        <p>
                            Adayların en çok yandığı nokta şurası: Çocuk formu dolduruyor, alttaki &quot;Kaydet&quot; butonuna basıyor. Ekranda &quot;Başvurunuz kaydedildi&quot; yazısını görünce &quot;Tamamdır, hallettim&quot; deyip sekmeyi kapatıyor.
                        </p>
                        <p>
                            Ödemeyi yapmayı unutuyor!
                        </p>
                        <p>
                            ÖSYM kılavuzu çok açık: <strong>Ücreti yatırılmayan hiçbir başvuru geçerli sayılmaz.</strong> Ödemeni yaptıktan sonra AİS sayfasına tekrar gir; o ekranda yeşil renkle <strong>&quot;Başvuru Durumu: Ödendi ve Onaylandı&quot;</strong> yazısını kendi gözlerinle görmeden rahat nefes alma. Başvuru kayıt belgenin de çıktısını veya PDF&apos;ini mutlaka sakla.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Geç Başvuru Rahatlığına Sakın Güvenme
                        </h2>
                        <p>
                            &quot;Aman nasıl olsa Mart&apos;ta geç başvuru var, sonra hallederim&quot; diyenler iki büyük tokat yer:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Cebinden %50 daha fazla para çıkar (örneğin oturum başı normalde 300 TL ise 450 TL ödersin).</li>
                            <li>Daha da kötüsü: Kendi ilçendeki tüm okulların kontenjanı dolduğu için, ÖSYM seni evinden 2 saat uzaklıktaki bir ilçeye hatta yan ile sınav yeri olarak verebilir. Sınav sabahı 06:00&apos;da yollara düşmek istemiyorsan işini vaktinde yap.</li>
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
