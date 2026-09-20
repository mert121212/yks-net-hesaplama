import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'

export const metadata: Metadata = {
    title: 'YKS\'de Kaç Net Kaç Puan Eder? Net-Puan Tablosu ve Bölüm Hedefleri 2027',
    description: 'TYT ve AYT netleri kaç puana denk gelir? Ham puan ile yerleştirme farkı, Tıp, Hukuk ve Mühendislik için gereken netler ve net-puan analiz rehberi.',
    keywords: 'kaç net kaç puan, yks net puan tablosu, tyt kaç net kaç puan, ayt kaç net kaç puan, tıp kaç net, hukuk kaç net',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-kac-net-kac-puan' },
    openGraph: {
        title: 'YKS\'de Kaç Net Kaç Puan Eder? Gerçekçi Net-Puan Rehberi',
        description: 'Deneme netleriniz kaç puana karşılık geliyor? Standart sapma, zorluk dereceleri ve bölüm kazanma eşikleri.',
        type: 'article',
        publishedTime: '2026-02-22',
        modifiedTime: '2026-02-25',
        url: 'https://yksnethesapla.com/blog/yks-kac-net-kac-puan',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Kaç Net Kaç Puan Analizi'
            }
        ],
    },
}

export default function YKSKacNetKacPuan() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS'de Kaç Net Kaç Puan Eder? Net-Puan Tablosu ve Bölüm Hedefleri 2027" 
                    description="TYT ve AYT netleri kaç puana denk gelir? Ham puan ile yerleştirme farkı, Tıp, Hukuk ve Mühendislik için gereken netler ve net-puan analiz rehberi."
                    datePublished="2026-02-22"
                    dateModified="2026-02-25"
                    url="https://yksnethesapla.com/blog/yks-kac-net-kac-puan"
                    keywords={['kaç net kaç puan', 'yks net puan tablosu', 'tyt kaç net kaç puan', 'ayt kaç net kaç puan', 'tıp kaç net', 'hukuk kaç net']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Kaç Net Kaç Puan</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-22">22 Şubat 2026</time>
                            <span className="text-gray-600">• 12 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            &quot;80 Net Yaptım, 400 Gelir mi?&quot; — Gerçekçi Net-Puan Tablosu ve Yanılgılar
                        </h1>
                        <p className="text-xl text-gray-600">
                            Deneme sınavından sonra herkesin birbirine fısıldadığı o sorunun cevabı tek bir sayıdan ibaret değil. ÖSYM katsayıları neden her yıl savrulur ve elinizdeki net gerçekte ne anlama gelir?
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Pazar akşamı deneme biter, cevap anahtarı Telegram gruplarına düşer. Herkes çılgınlar gibi optikleri kontrol eder. 15 dakika sonra odalardan aynı ses yükselir:
                        </p>
                        <p className="border-l-4 border-amber-500 pl-4 italic text-gray-800 font-medium bg-amber-50/70 py-2 rounded-r">
                            — &quot;Kanka TYT&apos;de 78 net çıkardım, 400 puanı devirir miyim? Hukuk ya da mühendislik gelir mi?&quot;
                        </p>
                        <p>
                            Biri sana &quot;Evet kardeşim, 78 net tam 398 puan getirir&quot; diyorsa, o kişiden yavaşça uzaklaş. Çünkü YKS&apos;de sabit bir &quot;1 net = X puan&quot; kuru yoktur. Dolar kuru gibi her sene sınavın zorluğuna, Türkiye ortalamasına ve standart sapmaya göre yeniden belirlenir.
                        </p>
                        <p>
                            Gözünün önüne getir: 2021&apos;deki o kabus gibi matematik sınavında 75 net yapan çocuk Türkiye&apos;de ilk 18 bine girip tıp kazandı. Ertesi sene 2022&apos;de sorular rahat geldi, herkes yüksek net yaptı; aynı 75 neti yapan çocuk 70 bininci oldu, şok geçirdi. Net aynı net ama sıralama 4 kat geriye düştü. İşte bu yüzden puana değil, netlerin ağırlığına ve sıralamaya bakmayı öğrenmek zorundasın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Önce Şu Ham Puan ile Yerleştirme Puanı Tuzağını Çözelim
                        </h2>
                        <p>
                            Sınav sonuçları açıklandığında ekranında iki ayrı tablo göreceksin. Biri &quot;Ham Puan&quot;, diğeri &quot;Yerleştirme Puanı&quot;. Aradaki farkı bilmeyen çok fena toslar:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-900 text-lg mb-2">Ham Puan (Sadece Bilek Gücün)</h3>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    ÖSYM&apos;nin verdiği 100 taban puan + sınavda işaretlediğin doğruların puanı. Lise diploma notun buraya asla karışmaz. Tavan puanı 500&apos;dür. Derece sıralamalarında ilk baktığımız şey budur.
                                </p>
                            </div>
                            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl">
                                <h3 className="font-bold text-indigo-900 text-lg mb-2">Yerleştirme Puanı (Acı OBP Gerçeği)</h3>
                                <p className="text-sm text-indigo-900 leading-relaxed">
                                    Ham puanının üstüne lise mezuniyet notunun (OBP) eklenmiş hali. Maksimum +60 puan gelir. Üniversiteye kayıt yaptırırken ve tercih ekranında ÖSYM sadece bu puana ve buna bağlı sıralamaya bakar.
                                </p>
                            </div>
                        </div>

                        <p>
                            Burada çok can yakan bir senaryo var: Denemede arkadaşınla yan yana oturdunuz, ikiniz de tastamam 82 net yaptınız. Ama senin lise ortalaman 96, arkadaşınınki 72. Sen sınavdan sonra arkadaşına tam 14.4 puan fark atıyorsun! Orta sıralarda 14 puan ne demek biliyor musun? Resmen 25 bin kişinin önüne fırlamak demek. Lisedeki o &quot;aman sözlüden 70 versen yeter hocam&quot; dediğin günler sınav sabahı kapına böyle dayanır.
                        </p>

                        <QuickNetSimulator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Hangi TYT Neti Seni Hangi Lige Sokar?
                        </h2>
                        <p>
                            Sınavın ortalama bir zorlukta geldiğini varsayarsak, sahada gördüğümüz gerçek net bantları kabaca şöyledir:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">100 - 115 Net Aralığı (Süper Lig / İlk 10.000)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    Burada yarışan adaylar artık konu bilmeyen değil; sınavda kalemi hiç durmayan, paragrafı tek okumada anlayan ve geometride soru kaçırmayan gruptur. Ham puan 440-485 bandında gezer. Boğaziçi, ODTÜ, Cerrahpaşa Tıp ve Koç burslu gibi yerlerin anahtarı buradadır.
                                </p>
                            </div>

                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">85 - 100 Net Aralığı (10.000 - 45.000 Bandı)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Puan karşılığı kabaca 385 ile 435 arasındadır. Çok sağlam bir temel vardır. Eğer bu netin arkasına 60+ AYT koyarsan devlet tıp fakülteleri ve en prestijli diş hekimliği ya da İTÜ/Yıldız mühendislik kapıları ardına kadar açılır.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-950 text-lg mb-1">70 - 85 Net Aralığı (Kritik Dönemeç / 45.000 - 120.000)</h3>
                                <p className="text-sm text-amber-900 leading-relaxed">
                                    Puan 335-385 bandı. En tehlikeli ama sıçramaya en açık yer! AYT&apos;si güçlü olan bir aday bu TYT ile kendini rahatça 35 bine çekebilir. Ama AYT&apos;yi boşlayan biri 120 binlere kadar yuvarlanabilir. İyi hukuklar, mimarlıklar ve popüler öğretmenlikler bu havuzda kapışır.
                                </p>
                            </div>

                            <div className="p-5 bg-rose-50 border border-rose-200 rounded-xl">
                                <h3 className="font-bold text-rose-950 text-lg mb-1">50 - 70 Net Aralığı (Büyük İnsan Yığılması)</h3>
                                <p className="text-sm text-rose-900 leading-relaxed">
                                    Puan 270 ile 335 arası. Türkiye&apos;de sınava hazırlanan mezunların ve 12. sınıfların en yoğun toplandığı alan. Burada yapacağın fazladan 2 tane Türkçe doğrusu bile seni bir anda 15 bin kişinin üstüne zıplatır.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Popüler Bölümler İçin Masada Ne Olmalı?
                        </h2>
                        <p>
                            Öğrenciler genelde &quot;Hocam kaç net yapayım?&quot; diye sorar. Geçen yıl yerleşen son adayların gerçek verilerine bakalım:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Devlet Tıp:</strong> TYT&apos;de 100 netin altına inmemeye çalış. AYT&apos;de ise Matematik en az 34 net, Fen 33-35 net civarında olmalı.</li>
                            <li><strong>İyi Bir Bilgisayar / Yazılım Mühendisliği:</strong> TYT 90-95 bandı; AYT Matematik 32+, Fen 30+ net.</li>
                            <li><strong>Devlet Hukuk (Eşit Ağırlık):</strong> TYT&apos;de 80-85 net seni çok rahatlatır; AYT Matematikte 26-30 net, Edebiyat-Tarih-Coğrafya&apos;da ise 32+ net şart.</li>
                        </ul>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Kendi Netlerinizin Puanını Canlı Görün</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                TYT ve AYT doğru-yanlış sayılarınızı hesaplayıcımıza girin; ÖSYM katsayılarına göre güncel puanınızı ve Türkiye geneli tahmini derecenizi tek tıkla öğrenin.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Hemen Net Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Bu Yazıları da Mutlaka Okuyun</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-yigilma-tehlikesi" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">YKS Yığılma Tehlikesi ve Kurtulma Yolları →</p>
                                    <p className="text-xs text-gray-600 mt-1">Aynı neti yapan binlerce adayın arasından nasıl sıyrılırsınız?</p>
                                </Link>
                                <Link href="/blog/tyt-net-artirma-taktikleri" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">TYT Net Artırma Taktikleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">Platoya takılan netleri yukarı taşıyacak somut çalışma stratejileri.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
