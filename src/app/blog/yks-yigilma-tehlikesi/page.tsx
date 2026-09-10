import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import YigilmaChart from '@/components/YigilmaChart'

export const metadata: Metadata = {
    title: 'YKS\'de Yığılma Nedir? Orta Sıralamalarda Yığılma Tehlikesi 2027',
    description: 'YKS yığılma nedir, neden olur? 50.000 ile 150.000 sıralama bandındaki yığılma tehlikesi ve bu yığılmadan kurtulma taktikleri.',
    keywords: 'yks yığılma nedir, yığılma bandı, tyt yığılma, ayt yığılma, yks sıralama yığılması 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-yigilma-tehlikesi' },
    openGraph: {
        title: 'YKS Yığılma Tehlikesi: Neden Puanın İyi Ama Sıralaman Kötü Geliyor?',
        description: 'Sınavın kolay olduğu yıllarda ortaya çıkan yığılma kabusu ve bundan kurtulmanın yolları.',
        type: 'article',
        publishedTime: '2026-02-07',
        modifiedTime: '2026-02-10',
        url: 'https://yksnethesapla.com/blog/yks-yigilma-tehlikesi',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Yığılma Rehberi'
            }
        ],
    },
}

export default function YKSYigilmaTehlikesi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS'de Yığılma Nedir? Orta Sıralamalarda Yığılma Tehlikesi"
                    description="YKS yığılma nedir, neden olur? 50.000 ile 150.000 sıralama bandındaki yığılma tehlikesi ve bu yığılmadan kurtulma taktikleri."
                    datePublished="2026-02-07"
                    dateModified="2026-02-10"
                    url="https://yksnethesapla.com/blog/yks-yigilma-tehlikesi"
                    keywords={['yks yığılma nedir', 'yığılma bandı', 'tyt yığılma', 'ayt yığılma', 'yks sıralama yığılması 2027']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Yığılma Tehlikesi</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Sıralama Analizi</span>
                            <time className="text-gray-600" dateTime="2026-02-07">7 Şubat 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                            Sınav Kolay Geçince Neden Sevinmemelisin? (YKS Yığılma Gerçeği)
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Sınavdan çıkışta herkesin yüzü gülüyorsa ortada büyük bir tehlike var demektir. Aynı puana on binlerce adayın sıkıştığı o kritik kuşağı anlamak zorundasınız.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-800 space-y-6 mt-8 leading-relaxed">
                        <p className="text-lg">
                            YKS sonuçları açıklandığı gün rehberlik masasında en sık duyduğumuz cümle şudur:
                        </p>

                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg text-red-950 font-medium text-base my-4">
                            &quot;Hocam geçen sene bu puanı alan çocuk 45 bine girmiş, ben aynı puanla 92 bininci oldum. Sistemde bir hata mı var?&quot;
                        </div>

                        <p>
                            Sistemde hiçbir hata yok. Yaşadığınız durumun adı tam olarak <strong>yığılma</strong>. 
                        </p>

                        <p>
                            Öğrencilerin çoğu üniversiteye puanla girildiğini sanır. Oysa üniversite kontenjanları puanla değil, <strong>başarı sırasıyla</strong> dolar. Sınavın kolay ya da zor olması puanları havada uçurabilir veya yerin dibine çekebilir; fakat üniversite kapısındaki sandalye sayısı 1 kişi bile artmaz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3 border-b pb-2">
                            Yığılma Neden Olur? (Zor Sınav vs Kolay Sınav)
                        </h2>

                        <p>
                            Mantık çok temel bir dağılım kuralına dayanır:
                        </p>

                        <ul className="list-disc pl-6 space-y-3">
                            <li>
                                <strong>Sınav çok zor olduğunda (örneğin 2021 YKS):</strong> Sorular adeta filtre görevi görür. Konuyu tam anlamış olanla yüzeysel çalışan birbirinden bıçak gibi ayrılır. Netler geniş bir alana yayılır. Puanlar düşüktür ama aynı puana denk gelen insan sayısı az olduğu için tek bir netle binlerce kişiyi sollayabilirsiniz.
                            </li>
                            <li>
                                <strong>Sınav kolay veya orta-kolay olduğunda (örneğin 2020 veya 2022 YKS):</strong> Sorular seçiciliğini kaybeder. Düzenli çalışan hemen hemen her aday Matematikten 28-32 net aralığına kolayca ulaşır. 
                            </li>
                        </ul>

                        <p>
                            İşte facia tam burada patlar: Yüz binlerce adayın netleri 5-6 netlik daracık bir koridora sıkışır. Virgülden sonraki 0,1 puanlık farklarla 15 bin kişi alt alta dizilir. Bir net eksik yapan kendini uçurumdan yuvarlanmış bulur.
                        </p>

                        <YigilmaChart />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3 border-b pb-2">
                            En Çok Can Nerede Yanıyor? (50k - 150k Kuşağı)
                        </h2>

                        <p>
                            YKS&apos;de yığılma ilk 5 binde pek hissedilmez. Oradaki öğrenciler zaten tüm testleri fullemeye yakın çözer; aralarındaki makas bellidir. En dipte de (800 bin sonrasında) sıralamanın pratik bir önemi kalmaz.
                        </p>

                        <p>
                            Bütün kıran kırana mücadele <strong>50.000 ile 150.000 bandında</strong> yaşanır. 
                        </p>

                        <p>
                            Burası dershaneye gitmiş, konu anlatımlarını bitirmiş, denemelere girmiş ama AYT&apos;de tam kopuşu yapamamış yüz binlerce çalışkan adayın toplandığı devasa bir havuzdur. Bu gruptaysanız, sınav anındaki tek bir dikkatsizlik hatası sizi 60 binden 110 bine fırlatabilir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3 border-b pb-2">
                            Bu Yığılmadan Sağ Çıkmanın 3 Somut Yolu
                        </h2>

                        <p>
                            Sınavın o gün nasıl geleceğini kontrol edemezsiniz. Ama girdiğinizde yığılmanın altında ezilmemek için elinizde üç tane güçlü koz var:
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">
                            1. OBP (Diploma Notu) Kalkanı
                        </h3>
                        <p>
                            Sınav kolay geçip herkes aynı neti yaptığında ÖSYM neye bakacak? Adayların lise diploma notuna. 
                            Aynı ham puana sahip iki öğrenciden biri 95 OBP&apos;ye, diğeri 75 OBP&apos;ye sahipse; 95 OBP&apos;li öğrenci yerleştirmede diğerine 12-15 puan fark atar. Yığılma kuşağında 12 puan demek, tek hamlede 25 bin kişiyi arkanıza almak demektir. Lise notlarınızı asla hafife almayın.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">
                            2. Kalabalığın Kaçtığı Branşlara Yüklenmek
                        </h3>
                        <p>
                            Rakipleriniz genellikle kendi alanlarının zor derslerinden kaçar:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Eşit Ağırlıkta:</strong> Adayların çoğu Edebiyat ezberlemeyi sever ama AYT Matematikten çekinir. Herkesin kaçtığı Türev, İntegral ve Trigonometriden çıkaracağınız +3 net, yığılma dinlemez; sizi doğrudan üst lige taşır.</li>
                            <li><strong>Sayısalda:</strong> Adaylar günlerce Fizik ve Matematik çözerken TYT Türkçe dil bilgisini ve TYT Sosyal testini &quot;son bir ay bakarım&quot; diyerek erteler. Oysa TYT Sosyaldeki 5 soru ile TYT Fizikteki 5 sorunun getirdiği TYT puanı neredeyse aynıdır. Herkesin boş bıraktığı veya yanlış yaptığı o Sosyal netleri sizi yığılmanın üzerine çıkarır.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">
                            3. Denemelerde Puana Değil, Sıralama Yüzdesine Bakmak
                        </h3>
                        <p>
                            Kurum denemelerinde 85 net yapıp 400 puan alabilirsiniz. Sevinmeden önce şu soruya bakın: O denemeye giren 10 bin kişi arasında kaçıncısınız? 
                        </p>
                        <p>
                            Eğer 10 bin kişi içinde ilk 500&apos;deyseniz sınav zordur ve netiniz çok değerlidir. Ama 10 bin kişi içinde 3 bininci olduysanız, sınav kolay geçmiş demektir ve 85 net o sınav için yetersiz kalmıştır. Ölçünüz asla puan olmasın; girdiğiniz denemedeki yüzdelik diliminiz olsun.
                        </p>

                        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 rounded-3xl p-8 my-10 text-center text-white shadow-xl">
                            <h3 className="text-2xl font-extrabold mb-3">Netleriniz Yığılmayı Aşmaya Yetiyor mu?</h3>
                            <p className="text-slate-300 mb-6 text-sm max-w-xl mx-auto">
                                Deneme sonuçlarınızı sistemimize girin; geçmiş yılların yığılma eğrilerine göre gerçek sınavda hangi başarı sırası aralığına düşeceğinizi görün.
                            </p>
                            <Link href="/" className="inline-block bg-white text-slate-900 px-8 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-transform shadow hover:scale-105">
                                Sıralama Simülasyonunu Başlat →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili İçerikler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors border border-red-100">
                                    <p className="font-semibold text-red-900">1 Net Kaç Kişi Öne Atar? →</p>
                                    <p className="text-xs text-gray-600 mt-1">Yığılma bandında 1 netin yarattığı 7.000 kişilik sıçrama.</p>
                                </Link>
                                <Link href="/blog/obp-hesaplama" className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-blue-100">
                                    <p className="font-semibold text-blue-900">OBP Hesaplama ve Sıralamaya Etkisi →</p>
                                    <p className="text-xs text-gray-600 mt-1">Yığılmanın en büyük panzehiri olan diploma notunun hesaplanması.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
