import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'Üniversite Tercih Stratejileri 2027 | 24 Tercih Listesi Nasıl Yapılır?',
    description: 'YKS tercih dönemi rehberi: Ölü tercih tuzağı nedir, başarı sıralamasına göre 24 tercih listesi nasıl kurulur ve kırık OBP riski.',
    keywords: 'üniversite tercihleri, yks tercih nasıl yapılır, ölü tercih nedir, tercih listesi hazırlama, yök atlas tercih',
    alternates: { canonical: 'https://yksnethesapla.com/blog/universite-tercih-stratejileri' },
    openGraph: {
        title: 'Tercih Listesi Hazırlama Rehberi: Sınavı Kazanıp Tercihte Kaybetmeyin',
        description: 'Sıralamaya göre tercih listesi oluşturma mantığı, ölü tercihler ve YÖK Atlas analizleri.',
        type: 'article',
        publishedTime: '2026-02-08',
        modifiedTime: '2026-02-11',
        url: 'https://yksnethesapla.com/blog/universite-tercih-stratejileri',
        images: [
            {
                url: '/og-image.jpg',
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
                    title="Üniversite Tercih Stratejileri 2027 | 24 Tercih Listesi Nasıl Yapılır?" 
                    description="YKS tercih dönemi rehberi: Ölü tercih tuzağı nedir, başarı sıralamasına göre 24 tercih listesi nasıl kurulur ve kırık OBP riski."
                    datePublished="2026-02-08"
                    dateModified="2026-02-11"
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
                            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Strateji</span>
                            <time className="text-gray-600" dateTime="2026-02-08">8 Şubat 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Üniversite Tercih Rehberi: 24 Satırlık Listenin Doğru Matematiği
                        </h1>
                        <p className="text-xl text-gray-600">
                            Bir yıl boyunca emek vererek kazandığınız dereceyi tercih ekranında heba etmeyin. Ölü tercih mantığı, başarı sırası aralıkları ve kırık OBP tuzağı.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Ağustos ayında tercih danışmanlığı yaparken en çok içimi yakan şey ne biliyor musun? Çocuk 12 ay boyunca gecesini gündüzüne katmış, Türkiye&apos;de ilk 40 bine girmiş. Sonra tercih ekranında komşusunun veya akrabasının &quot;abi puanlar düşecekmiş&quot; lafına kanıp öyle bir hata yapıyor ki; ya hiç istemediği bir şehrin istemediği bir bölümüne yerleşiyor ya da açıkta kalıyor.
                        </p>

                        <p>
                            ÖSYM yerleştirme robotunda vicdan, acıma duygusu ya da esneklik yoktur. Kodları girersin, &quot;Kaydet&quot; butonuna basarsın. Sistem 1. sıradan başlar, puanının yettiği ilk yere seni şak diye yerleştirir. Altında ne varmış, senin asıl hayalin neymiş dönüp bakmaz bile.
                        </p>

                        <p>
                            Eline o 24 satırlık tercih hakkını aldığında hayatının kumarını oynamak istemiyorsan şu 4 gerçeği aklına kazı:
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Puanla Tercih Yapan Yanar: Pusulan Sadece Sıralama Olacak
                        </h2>
                        <p>
                            Her yıl aynı terane: &quot;Hocam geçen sene burası 420 ile almış, benim puanım 425 kesin girerim.&quot;
                        </p>
                        <p>
                            Giremezsin kardeşim, öyle bir garanti yok! 
                        </p>
                        <p>
                            Sınav o sene kolay geldiyse ve herkes yüksek puan aldıysa, geçen senenin 420 puanı bu senenin 390 puanına denk gelebilir. Puan sınavın zorluğuna göre 30-40 puan aşağı yukarı oynar. Ama <strong>başarı sıralaması</strong> öyle değildir. Kontenjanlarda dev bir deprem olmadıysa, geçen sene 45 binle kapatan bir bölüm bu sene de en fazla 42 bin - 48 bin bandında oynar. Tercih listesi hazırlarken puan sütununu elinle kapat, sadece başarı sırasına bak.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. &apos;Ölü Tercih&apos; Efsanesi: Kimse Sana Puan Sırası Dayatamaz
                        </h2>
                        <p>
                            Adayların kafasını en çok bulandıran şehir efsanesi şudur: <em>&quot;40 binlik yeri 35 binliğin üstüne yazarsan tercihin ölür.&quot;</em>
                        </p>
                        <p>
                            Külliyen yalan.
                        </p>
                        <p>
                            Sen İzmir&apos;deki 50 binlik bir bölümü, İstanbul&apos;daki 40 binlik bölümden daha çok seviyorsan; canın orada okumak istiyorsa 50 binliği 1. sıraya yazarsın. ÖSYM sana &quot;Niye yüksek puanlı yeri alta yazdın?&quot; demez.
                        </p>
                        <p>
                            Asıl ölü tercih nedir biliyor musun? Sıralaman 80 bindir. Sen 2. sıraya 85 binlik garanti bir yeri yazarsın, 3. sıraya ise hayalin olan 40 binlik yeri sıkıştırırsın. İşte o 3. tercih resmen çöptür! Çünkü sistem 2. tercihteki 85 binlik yere seni zaten yerleştirir; 3. sıradaki 40 binlik hayaline bakmaya tenezzül bile etmez. Sıralamanı her zaman <strong>en çok istediğinden en az istediğine doğru</strong> yapacaksın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. 24 Tercihi 3 Emniyet Katmanına Böl
                        </h2>
                        <p>
                            Tüm tercihleri kendi sıralamana yığarsan ya da sadece çok yüksek yerleri yazarsan açıkta kalırsın. Diyelim ki Sayısalda <strong>60.000</strong> oldun. Listen şöyle nefes almalı:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">1. Katman: Rüya & Hayal Bölgesi (1 - 5. Tercihler)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    Sıralamanın %20-30 üstünden başla (40.000 - 52.000 aralığı). &quot;Bana gelmez&quot; deme, yaz gitsin. Kontenjan artar, talep azalır, piyango sana vurabilir. Burası bedava hayal kurma hakkındır.
                                </p>
                            </div>

                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">2. Katman: Asıl Meydan Savaşı (6 - 18. Tercihler)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Senin gerçek ligin burası (52.000 - 75.000 aralığı). Muhtemelen bu aralıktaki yerlerden birine yerleşeceksin. Buraya yazacağın her bölümü tek tek araştırmış olmalısın; kampüsü nerededir, yurt imkanı var mıdır, akademisyenleri kimdir?
                                </p>
                            </div>

                            <div className="p-5 bg-slate-100 border border-slate-300 rounded-xl">
                                <h3 className="font-bold text-slate-900 text-lg mb-1">3. Katman: Can Simidi (19 - 24. Tercihler)</h3>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    &quot;Ben mezuna kalamam, bir yıl daha bu stresi çekemem, mutlaka üniversiteli olmam lazım&quot; diyorsan 80.000 - 95.000 bandına kadar ineceksin. Bu katman seni Türkiye genelindeki beklenmedik yığılmalardan koruyan çelik zırhındır.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. Kırık OBP Felaketi: Gitmeyeceğin Yeri Listeye Sokma!
                        </h2>
                        <p>
                            Tercih listesinin en altına &quot;Aman 24 satır dolsun, zaten gelmez&quot; diyerek istemediğin bir taşra üniversitesini yazarsan ne olur biliyor musun?
                        </p>
                        <p>
                            Sistem oraya seni yerleştirir. Sen &quot;Ben gitmeyeceğim, seneye tekrar hazırlanırım&quot; dersin. Ama ÖSYM der ki: <em>&quot;Sen bir kontenjanı yaktın, cezalısın.&quot;</em>
                        </p>
                        <p>
                            Ertesi sene sınava girdiğinde <strong>OBP puanın tam yarı yarıya kesilir</strong>. Yani elinden 25-30 ham puan çekip alınır. 30 puan ne demek? Sınavda tam 40 bin kişi geriye düşmek demek. Gitmeyeceğin hiçbir bölümü, ailen ne kadar baskı yaparsa yapsın o listeye asla yazma.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 my-10 text-center text-white shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">Sıralamanızı Doğru Hesaplayın</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm">
                                Tercih listenizi şekillendirmeden önce, deneme netlerinizin gerçek ÖSYM algoritmalarında hangi sıralama bandına denk geldiğini görün.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-700 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow">
                                Sıralama Simülatörünü Aç →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Tercih Öncesi İncelenmesi Gerekenler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/obp-hesaplama" className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-blue-100">
                                    <p className="font-semibold text-blue-900">OBP ve Kırık OBP Rehberi →</p>
                                    <p className="text-xs text-gray-600 mt-1">İstemediğiniz yeri kazanırsanız seneye ne kadar puan kaybedersiniz?</p>
                                </Link>
                                <Link href="/blog/yks-puan-turleri" className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors border border-purple-100">
                                    <p className="font-semibold text-purple-900">YKS Puan Türleri ve Bölümleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">SAY, EA, SÖZ ve DİL bölümleri ve zorunlu başarı sırası barajları.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
