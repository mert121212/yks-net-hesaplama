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
                            YKS sürecinde en çok üzüldüğümüz şey; sınavda çok iyi netler yapıp tercih döneminde yapılan basit kural hataları yüzünden istemediği bir yere yerleşen veya tamamen açıkta kalan öğrencilerdir.
                        </p>

                        <p>
                            ÖSYM yerleştirme sistemi duygulardan tamamen arınmış bir algoritmayla çalışır. Tercih formuna yazdığınız 24 satır, yukarıdan aşağıya tek tek taranır. Sistem, puanınızın yettiği ilk satıra sizi yerleştirir ve alttaki tercihlerinize asla dönüp bakmaz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Altın Kural: Puanla Değil, Sıralamayla Tercih Yapılır
                        </h2>
                        <p>
                            Tercih döneminin en büyük hatası, eldeki puana bakarak geçmiş yılların puan tabanlarıyla eşleştirme yapmaktır.
                        </p>
                        <p>
                            Sınavın zor olduğu bir yılda 430 puanla Türkiye 8 bincisi olabilirsiniz. Sınavın kolay olduğu bir yılda ise aynı 430 puan sizi 50 bininci sıraya atabilir. Puanlar sınavın zorluğuna göre 20-40 puan dalgalanır; ancak bölümlerin <strong>başarı sıralamaları</strong> çok daha dengeli ve öngörülebilirdir. Kontenjanlarda olağanüstü bir artış ya da azalma yoksa, geçen yıl 35 binle kapatan bir bölüm bu yıl da yaklaşık 32 bin ile 38 bin bandında kapatacaktır. Tercih listenizi kurarken elinizdeki tek pusula başarı sıranız olmalıdır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. &apos;Ölü Tercih&apos; Nedir, Ne Değildir?
                        </h2>
                        <p>
                            Adaylar arasında kulaktan kulağa yayılan bir yanlış inanış vardır: &quot;Daha düşük sıralamalı yeri üst sıraya yazarsan ölü tercih olur.&quot;
                        </p>
                        <p>
                            İşin gerçeği şudur: Siz 45 binlik bir bölümü 35 binlik bir bölümden daha çok seviyor ve okumak istiyorsanız, onu üst sıraya yazmanız en doğal hakkınızdır. 
                        </p>
                        <p>
                            Asıl tehlikeli ölü tercih iki şekilde oluşur:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Gelmeyecek yeri araya sıkıştırmak:</strong> Kendi sıranız 70 bin iken; 2. sıraya 75 binlik yeri yazıp, 3. sıraya 30 binlik bölümü yazarsanız o 3. sıradaki tercih fiilen ölüdür. Çünkü sistem 75 binlik yere sizi zaten yerleştirir ve 3. sırayı asla kontrol etmez.
                            </li>
                            <li>
                                <strong>Pişmanlık doğuracak sıralama:</strong> Daha az istediğiniz bir bölümü, sadece puanı daha yüksek diye üst sıraya yazarsanız ve orası gelirse; alttaki asıl hayaliniz olan bölüme puanınız yetse dahi giremezsiniz.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. 24 Tercihi 3 Kademeli Güvenlik Katmanına Bölün
                        </h2>
                        <p>
                            Tercih listeniz bir piramit gibi dengeli kurulmalıdır. Örneğin Sayısalda <strong>50.000</strong> sıralama elde eden bir aday için örnek şablon:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">1. Katman: Cesur Tercihler (1 - 5. Tercihler)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    Sıralamanızın %20 - %30 yukarısından başlayın (35.000 - 45.000 aralığı). &quot;Nasıl olsa gelmez&quot; demeyin. Kontenjan genişlemesi veya talep düşüşü olursa ilk tercihlerinizde bu sürpriz şansı yakalayabilirsiniz.
                                </p>
                            </div>

                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">2. Katman: Asıl Omurga (6 - 18. Tercihler)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Sıralamanızın çevresindeki ana hedef bölgenizdir (45.000 - 65.000 aralığı). Buradaki bölümleri dizerken taban puanlarına değil, kendi istek önceliğinize göre sıralayın.
                                </p>
                            </div>

                            <div className="p-5 bg-slate-100 border border-slate-300 rounded-xl">
                                <h3 className="font-bold text-slate-900 text-lg mb-1">3. Katman: Emniyet Kemeri (19 - 24. Tercihler)</h3>
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    Eğer bu yıl mezuna kalmak istemiyor ve mutlaka üniversiteye gitmek istiyorsanız, sıralamanızın %30 - %40 gerisine inin (65.000 - 80.000 aralığı). Bu katman sizi olası bir yığılma ya da bölüm patlamasında açıkta kalmaktan korur.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. Kırık OBP Riski: &quot;Nasıl Olsa Gelmez&quot; Demeyin
                        </h2>
                        <p>
                            Listenizin son sıralarına sırf boş kalmasın diye &quot;gelirse de gitmem&quot; dediğiniz tek bir üniversiteyi bile yazmayın.
                        </p>
                        <p>
                            Çünkü o bölüm geldiği an, kayıt yaptırsanız da yaptırmasanız da bir sonraki yıl sınava girdiğinizde <strong>OBP&apos;niz tam yarı yarıya kesilir</strong>. Bu da yaklaşık 25-30 ham puan, yani sıralamada 30-40 bin kişilik devasa bir geriye düşüş anlamına gelir. Gitmeyeceğiniz yeri listeye sokmamak en temel kuraldır.
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
