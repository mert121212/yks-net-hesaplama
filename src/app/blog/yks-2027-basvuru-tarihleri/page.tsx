import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS 2027 Başvuru Tarihleri ve AİS Başvuru Adımları: 1 Yılını Yakma!',
    description: 'YKS 2027 başvuru takvimi, e-Devlet ile AİS kayıt adımları, ücret ödeme tuzağı, geç başvuru cezaları ve 10:00 kapı kapanma kuralı.',
    keywords: 'yks 2027 başvuru tarihleri, yks başvuru nasıl yapılır, yks ücreti 2027, geç başvuru yks, yks ne zaman',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri' },
    openGraph: {
        title: 'YKS 2027 Başvuru Tarihleri ve AİS Başvuru Adımları',
        description: 'Her yıl binlerce adayın başvuru yapıp parayı yatırmadığı için sınava giremediğini biliyor musun? Adım adım başvuru kılavuzu.',
        type: 'article',
        publishedTime: '2026-02-14',
        modifiedTime: '2026-03-01',
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
                <BlogArticleSchema 
                    title="YKS 2027 Başvuru Tarihleri ve AİS Başvuru Adımları" 
                    description="2027 YKS (TYT-AYT) başvuru takvimi, ÖSYM AİS üzerinden e-Devlet ile kayıt aşamaları, geç başvuru koşulları ve ödeme süreci."
                    datePublished="2026-02-14"
                    dateModified="2026-03-01"
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
                            <time className="text-gray-600" dateTime="2026-02-14">14 Şubat 2026</time>
                            <span className="text-gray-600">• 6 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS 2027 Başvuru Rehberi: Bir Hata Yüzünden 1 Yılın Çöpe Gitmesin
                        </h1>
                        <p className="text-xl text-gray-600">
                            Aylarca soru çözüp sabahlayan öğrencilerin &ldquo;Ben formu doldurmuştum ama param çekilmemiş&rdquo; diyerek sınava alınmadığı trajedileri her sene haberlerde izliyoruz.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-2027-basvuru-tarihleri.jpg"
                        alt="YKS 2027 Başvuru Tarihleri ve AİS Kayıt Adımları"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS süreci sadece masada soru çözmekten ibaret değil; bürokrasiyi de hatasız yönetmek zorundasın. ÖSYM&apos;nin şakası yoktur. Başvuru süresini 1 dakika kaçırsan kapılar yüzüne kapanır.
                        </p>

                        <p>
                            Gözünü seveyim şu adımları hafife alma. Telefonuna alarmları kur, takvimi işaretle ve başvurunu son güne bırakmadan aradan çıkar.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            YKS Başvuru Takviminin 3 Kritik Dönemi
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">1. Ana Başvuru Dönemi (Şubat - Mart)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    ais.osym.gov.tr üzerinden başvuruların açıldığı yaklaşık 3-4 haftalık ana dönemdir. Oturumlarını seçtiğin, sınav merkezini belirlediğin ve standart sınav ücretini yatırdığın asıl pencere burası.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-950 text-lg mb-1">2. Geç Başvuru Günü (Mart Sonu)</h3>
                                <p className="text-sm text-amber-900 leading-relaxed">
                                    Ana dönemi unutanlar için ÖSYM&apos;nin açtığı 2 günlük &ldquo;son şans&rdquo; kapısı. Ama burada sınav ücreti yaklaşık <strong>%50 zamlı</strong> ödenir. Cüzdanına yazık etme.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">3. Büyük Sınav Hafta Sonu (Haziran)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    Cumartesi 10:15 TYT, Pazar 10:15 AYT, Pazar 15:45 YDT. Unutma: <strong>Saat 10:00&apos;dan sonra sınav binasına tek bir kişi dahi alınmaz!</strong> 10:01&apos;de kapıda ağlayan öğrencilerden biri olmamak için sınav yerine en az 1 saat önce git.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            e-Devlet ile AİS Başvurusu Nasıl Yapılır? (5 Adım)
                        </h2>
                        <ol className="list-decimal pl-6 space-y-3 text-sm text-gray-800">
                            <li><strong>Giriş Yap:</strong> ais.osym.gov.tr adresine girip &ldquo;e-Devlet ile Kayıt Ol / Giriş Yap&rdquo; butonuna tıkla. Artık eskisi gibi ÖSYM merkezlerine gidip sıra bekleme derdi yok, kimlik kartın çipliyse her şey evden 3 dakikada halloluyor.</li>
                            <li><strong>Fotoğrafını Kontrol Et:</strong> Kimlik kartındaki fotoğrafın son 50 ay içinde güncellenmiş olması gerekir. Çok eskiyse sistem uyarı verir, o zaman nüfus müdürlüğünden kimliğini yenilemen gerekir.</li>
                            <li><strong>Oturumları Eksiksiz Seç:</strong> TYT herkes için zorunlu. 4 yıllık fakülte hedefleyen herkes mutlaka <strong>AYT</strong> kutucuğunu da işaretlemek zorundadır. &ldquo;Sonra eklerim&rdquo; deme, aynı anda seç.</li>
                            <li><strong>Sınav Merkezini Dikkatli Yaz:</strong> İkamet ettiğin yere en yakın ilçeyi 1. tercih yap. Sınav sabahı 2 saat trafik çekmek istemezsin.</li>
                            <li><strong>Ödemeyi Yap ve Onayı Gör:</strong> Başvuru formunu doldurup kaydetmek işin sadece yarısıdır!</li>
                        </ol>

                        <div className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-xl my-6">
                            <h3 className="font-bold text-red-950 text-base mb-1">ÖLÜMCÜL TUZAK: Ücret Ödenmeden Başvuru Geçersizdir!</h3>
                            <p className="text-sm text-red-900">
                                Formu onaylayıp çıktın mı? Hemen ÖSYM Ödemeler sayfasına (odeme.osym.gov.tr) gir ve banka/kredi kartınla ücreti yatır. Ardından AİS&apos;e tekrar girip durumun <strong>&ldquo;Başvuru İşlemi ÖSYM&apos;ye Bildirilmiştir ve Ücreti Ödenmiştir&rdquo;</strong> yazdığını yeşil tik ile gör. Bu yazıyı görmeden sakın rahat uyuma.
                            </p>
                        </div>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Başvurudan Sonra Netlerini Hesapla</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Sınav başvurunu tamamladıktan sonra hedefin için gereken TYT ve AYT netlerini hesaplama motorumuzda planla.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Puan ve Sıralama Hesaplayıcıyı Aç →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
