import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'Üniversite Tercih Stratejileri 2027: 24 Tercih Listesi Nasıl Yapılır?',
    description: 'YKS tercih listesi hazırlama rehberi: Puana değil sıralamaya bakma kuralı, uydurma ölü tercih efsanesi ve 24 tercihi dengeli dağıtma sanatı.',
    keywords: 'üniversite tercihleri, yks tercih nasıl yapılır, ölü tercih nedir, tercih listesi hazırlama, yök atlas tercih',
    alternates: { canonical: 'https://yksnethesapla.com/blog/universite-tercih-stratejileri' },
    openGraph: {
        title: 'Üniversite Tercih Stratejileri: 24 Tercih Listesi Rehberi',
        description: 'Derece yapıp açıkta kalmamak için: Tercih dönemi taktikleri, YÖK Atlas okuma ve sıralama aralıkları.',
        type: 'article',
        publishedTime: '2026-02-08',
        modifiedTime: '2026-03-01',
        url: 'https://yksnethesapla.com/blog/universite-tercih-stratejileri',
        images: [
            {
                url: '/images/blog/universite-tercih-stratejileri.jpg',
                width: 1200,
                height: 630,
                alt: 'Üniversite Tercih Stratejileri'
            }
        ],
    },
}

export default function UniversiteTercihStratejileri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="Üniversite Tercih Stratejileri 2027 | Tercih Listesi Hazırlama Rehberi" 
                    description="YKS tercih listesi nasıl hazırlanır? Sıralama aralıkları, ölü tercih kavramı, 24 tercih hakkının dağılımı ve kırık OBP uyarısı."
                    datePublished="2026-02-08"
                    dateModified="2026-03-01"
                    url="https://yksnethesapla.com/blog/universite-tercih-stratejileri"
                    keywords={['üniversite tercihleri', 'yks tercih nasıl yapılır', 'ölü tercih nedir', 'tercih listesi hazırlama', 'yök atlas tercih']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Tercih Stratejileri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Tercih Masası</span>
                            <time className="text-gray-600" dateTime="2026-02-08">8 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Üniversite Tercih Stratejileri: 24 Tercihi Heba Etmeme Rehberi
                        </h1>
                        <p className="text-xl text-gray-600">
                            Sınavda 30 bin yapıp hatalı tercih yüzünden açıkta kalanları da gördük, 80 bin yapıp akıllı tercihle hayalindeki bölüme girenleri de. Savaş sınav salonunda bitmez.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/universite-tercih-stratejileri.jpg"
                        alt="Üniversite Tercih Rehberi: 24 Tercih Listesi Nasıl Yapılır?"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS puanın açıklandığında derin bir nefes alırsın ama asıl satranç maçı o gün başlar: <strong>Tercih Dönemi.</strong>
                        </p>

                        <p>
                            Önünde 24 tane boş kutucuk var. Yanlış kurulan bir tercih listesi, bir yıllık emeğini tek bir tıkla çöpe atabilir. Ya açıkta kalır ağlarsın, ya da &ldquo;kazandım ama asla gitmem&rdquo; dediğin bir şehirde kendini bulup seneye kırık OBP felaketiyle baş başa kalırsın. Gel, şu listeyi bir profesyonel gibi kuralım.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Kural: Puana Bakmayı Derhal Bırak, Tek Gerçek Sıralamadır!
                        </h2>
                        <p>
                            Her sene rehberlik servislerinde aynı hata tekrarlanır: <em>&ldquo;Hocam benim puanım 420, geçen sene bu bölüm 410&apos;la kapatmış, kesin girerim!&rdquo;</em>
                        </p>
                        <p>
                            Giremezsin. Çünkü sınav zor geçerse 420 puanla ilk 20 bine girersin; sınav kolay geçerse 420 puanla 80 bininci olursun! Puan dediğin şey bir yıldan diğerine 30-40 puan havada uçuşur.
                        </p>
                        <p>
                            YÖK Atlas&apos;ı açtığında bakacağın tek sütun vardır: <strong>&ldquo;Geçen yıl en son yerleşen adayın başarı sırası&rdquo;.</strong> Kararlarını sadece ve sadece bu sıralamaya göre vereceksin.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. &ldquo;Ölü Tercih&rdquo; Şehir Efsanesini Çöpe At
                        </h2>
                        <p>
                            Dershane koridorlarında dolaşan meşhur bir yalan vardır: <em>&ldquo;Düşük sıralamalı yeri üste yazarsan tercihin ölür, puanın yanar.&rdquo;</em>
                        </p>
                        <p>
                            ÖSYM&apos;nin yerleştirme algoritması böyle çalışmaz. Sistem senin 1. tercihinden başlar: Sıralaman o bölümün kapattığı yere yetiyor mu? Yetiyorsa seni yerleştirir ve bilgisayar işlemi bitirir. Yetmiyorsa 2. sıraya geçer.
                        </p>
                        <p>
                            Buradaki tek tehlike şudur: <strong>Gitmeyi daha çok istediğin bir yeri, sırf sıralaması biraz daha düşük diye istemediğin bir yerin altına yazarsan yanarsın.</strong> Çünkü sistem üstteki istemediğin bölüme seni yerleştirdiği an alt sıradaki rüya bölümüne dönüp bakmaz bile! Liste sırası senin &ldquo;gerçek istek sıran&rdquo; olmalıdır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. 24 Tercihi İdeal Dağıtma Formülü
                        </h2>
                        <p>
                            Diyelim ki Sayısalda <strong>50.000</strong> sıralama yaptın. Listenin 24 kutucuğunu şöyle paylaştır:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-purple-50 border border-purple-200 rounded-xl">
                                <h3 className="font-bold text-purple-950 text-lg mb-1">Hayal Bölgesi: 1 - 5. Tercihler (35.000 - 45.000)</h3>
                                <p className="text-sm text-purple-900 leading-relaxed">
                                    Gelmesi zor ama imkansız değil. Kontenjan artabilir, o yıl o bölüme talep düşebilir. İçinde kalmasın, en çok istediğin o 5 yeri en başa yaz.
                                </p>
                            </div>

                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">Gerçekçi Merkez: 6 - 18. Tercihler (45.000 - 65.000)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Listenin omurgası burasıdır. Sıralamanın hemen üstü, tam hizası ve biraz altı. %80 ihtimalle bu 12 tercihten birine yerleşeceksin. Gitmekten mutlu olacağın üniversiteleri buraya diz.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">Cankurtaran Sigortası: 19 - 24. Tercihler (65.000 - 80.000)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    &ldquo;Ben mezuna kalamam, bu sene ne olursa olsun gideceğim&rdquo; diyorsan kendi sıranın %30-40 altına inen yerleri yazmak zorundasın. Ama dikkat: Kazanırsan bavulunu toplayıp gideceğin yerler olsun.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            En Büyük Hata: &ldquo;Açıkta Kalmayayım Diye Yazmak&rdquo;
                        </h2>
                        <p>
                            Listenin 24. sırasına sırf boş kalmasın diye hiç gitmeyeceğin bir şehri veya bölümü yazıp gönderirsen ve orası çıkarsa; gitmesen dahi bir sonraki yıl OBP puanın yarı yarıya kırılır. 30 puanın buharlaşır. 
                        </p>
                        <p>
                            <strong>İçine sinmeyen, kapısından içeri girmeyeceğin hiçbir bölümü listene yazma.</strong> 18 tercih yap ama arkasında dur.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Sıralamanı Şimdiden Gör</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Deneme netlerini simülatörümüze gir; hangi başarı diliminde olduğunu ve geçen seneki taban sıralamalara göre nereye yerleşebileceğini hesapla.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Net ve Sıralama Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
