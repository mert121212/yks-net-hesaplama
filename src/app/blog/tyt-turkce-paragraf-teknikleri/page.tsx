import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'TYT Türkçe Paragraf Çözme Teknikleri 2027 | 20+ Paragraf Sorusunda Full Yapma Rehberi',
    description: 'TYT Türkçe paragraf soruları nasıl çözülür? Ana fikir, yardımcı düşünce, başlık ve paragraf tamamlama sorularında 5 somut teknik ve süre yönetimi.',
    keywords: 'tyt türkçe paragraf çözme teknikleri, paragraf soruları nasıl çözülür, tyt türkçe 35 net, ana fikir soruları, paragraf tamamlama',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-turkce-paragraf-teknikleri' },
    openGraph: {
        title: 'TYT Türkçe Paragraf Çözme Teknikleri: 20+ Soruyu Doğru Yapmanın Yolu',
        description: 'Paragraf sorularında süre yönetimi, eleme tekniği ve seçenek odaklı okuma stratejisi.',
        type: 'article',
        publishedTime: '2026-09-10',
        modifiedTime: '2026-09-10',
        url: 'https://yksnethesapla.com/blog/tyt-turkce-paragraf-teknikleri',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'TYT Türkçe Paragraf Çözme Teknikleri'
            }
        ],
    },
}

export default function TYTParagrafTeknikleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="TYT Türkçe Paragraf Çözme Teknikleri 2027" 
                    description="TYT Türkçe paragraf soruları nasıl çözülür? Ana fikir, yardımcı düşünce, başlık ve paragraf tamamlama sorularında 5 somut teknik ve süre yönetimi."
                    datePublished="2026-09-10"
                    dateModified="2026-09-10"
                    url="https://yksnethesapla.com/blog/tyt-turkce-paragraf-teknikleri"
                    keywords={['tyt türkçe paragraf çözme teknikleri', 'paragraf soruları nasıl çözülür', 'tyt türkçe 35 net', 'ana fikir soruları', 'paragraf tamamlama']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Türkçe Paragraf Teknikleri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">TYT Türkçe</span>
                            <time className="text-gray-600" dateTime="2026-09-10">10 Eylül 2026</time>
                            <span className="text-gray-600">• 12 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT Türkçe Paragraf Çözme Teknikleri
                        </h1>
                        <p className="text-xl text-gray-600">
                            40 sorunun en az 24&apos;ü paragraftan geliyor. Dil bilgisinden 10&apos;da 10 yapsan bile paragrafta hız kazanamadıysan süren yetmez. 5 tekniği burada anlattım.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">

                        <p className="text-lg leading-relaxed">
                            TYT Türkçe&apos;de en büyük sorun soruların zor olması değil. Asıl sorun aynı paragrafı 2-3 kere okumak zorunda kalmak. Her tekrar okuyuş süreyi eritiyor, arkadaki 40 matematik sorusu da bekliyor.
                        </p>

                        <p>
                            Bu yazıda &quot;bol kitap oku&quot; gibi genel tavsiyeler yok. Sınav masasında tek okuyuşta doğru şıkka giden 5 teknik var.
                        </p>

                        <div className="bg-gradient-to-r from-emerald-900 to-slate-900 text-white p-6 rounded-2xl my-6">
                            <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                                Temel Kural
                            </span>
                            <h3 className="text-lg font-bold text-white mb-2">
                                Önce Soru Kökünü Oku, Sonra Paragrafı
                            </h3>
                            <p className="text-xs text-slate-300 leading-relaxed">
                                Beyin ne aradığını bilmeden metni okursa her cümleyi eşit önemde algılar, yorulur. Soru kökünde &quot;değinilmemiştir&quot; mi yazıyor, &quot;vurgulanmak istenen&quot; mi? Hedefini bilerek okuyan göz, cevabı 30-40 saniyede bulur.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Paragraf Soru Dağılımı (Son 5 Yıl)
                        </h2>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead className="bg-gray-100 text-gray-800 text-sm">
                                    <tr>
                                        <th className="p-3 border">Soru Tipi</th>
                                        <th className="p-3 border">Ort. Sayı</th>
                                        <th className="p-3 border">Zorluk</th>
                                        <th className="p-3 border">Süre</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Ana Fikir / Konu</td>
                                        <td className="p-3 border">5-7</td>
                                        <td className="p-3 border">Orta</td>
                                        <td className="p-3 border">1,5 dk</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Yardımcı Düşünce</td>
                                        <td className="p-3 border">3-4</td>
                                        <td className="p-3 border">Orta-Zor</td>
                                        <td className="p-3 border">2 dk</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Başlık Bulma</td>
                                        <td className="p-3 border">2-3</td>
                                        <td className="p-3 border">Kolay-Orta</td>
                                        <td className="p-3 border">1 dk</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Paragraf Tamamlama</td>
                                        <td className="p-3 border">3-5</td>
                                        <td className="p-3 border">Orta-Zor</td>
                                        <td className="p-3 border">2 dk</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Çıkarım</td>
                                        <td className="p-3 border">4-5</td>
                                        <td className="p-3 border">Zor</td>
                                        <td className="p-3 border">2-2,5 dk</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Anlatım Bozukluğu</td>
                                        <td className="p-3 border">2-3</td>
                                        <td className="p-3 border">Kolay</td>
                                        <td className="p-3 border">45 sn</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Teknik 1: İlk Cümle - Son Cümle Okuması
                        </h2>
                        <p>
                            ÖSYM paragraflarında yazarın tezi genelde ya ilk ya da son cümlede olur. Ortadaki cümleler çoğunlukla örnek ve açıklama.
                        </p>
                        <p>
                            Paragrafı okumaya başlamadan ilk ve son cümleyi dikkatli oku, ikisi arasındaki mantık bağını kur. &quot;Ana fikir&quot; ve &quot;başlık bulma&quot; sorularının cevabı çoğu zaman bu iki cümlenin kesişiminde. Ortadaki kısım sadece doğrulama aracı olarak devreye girer. Bu teknik soru başına 30-40 saniye kazandırır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Teknik 2: Seçenek Odaklı Okuma
                        </h2>
                        <p>
                            Çoğu öğrenci paragrafı okur, kafasında bir yorum oluşturur, seçeneklere bakar. Mantıklı görünüyor ama ÖSYM seçeneklerde çok benzer ifadeler kullanıyor, &quot;neredeyse doğru ama tam değil&quot; şıklar koyuyor.
                        </p>
                        <p>
                            Paragrafı bir kez oku, sonra <strong>seçenekleri tek tek paragrafla karşılaştır</strong>. &quot;Bu paragrafta gerçekten söyleniyor mu?&quot; diye kontrol et. &quot;Hangisi çıkarılamaz?&quot; tipi sorularda çok işe yarar.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Teknik 3: Hızlı Eleme
                        </h2>
                        <p>
                            5 şıklı soruda genelde 2 şık açıkça yanlıştır. Bunları tespit etmek 15 saniye sürer:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Aşırı genelleme:</strong> &quot;Tüm insanlar...&quot;, &quot;Hiçbir zaman...&quot; gibi kesinlik ifadeleri. ÖSYM genelde &quot;bazı&quot;, &quot;çoğu&quot; gibi yumuşak ifadeler tercih eder.</li>
                            <li><strong>Paragrafta olmayan kavram:</strong> Paragraf eğitim teknolojisinden bahsediyorsa ve şıkta &quot;ekonomik kalkınma&quot; geçiyorsa direkt ele.</li>
                        </ul>
                        <p>
                            Kalan 3 şıktan 1&apos;i detay, 1&apos;i ana fikir, 1&apos;i de yakın ama farklı. İlk-son cümle kontrolüyle doğru cevabı bulursun.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Teknik 4: Paragraf Tamamlamada Akış Yönü
                        </h2>
                        <p>
                            Boşluktan önceki ve sonraki cümlelerin yönüne bak. &quot;Ancak&quot;, &quot;Oysa&quot; gibi bağlaç varsa boşluğa zıt yönde bir cümle gelecek. &quot;Ayrıca&quot;, &quot;Üstelik&quot; gibi bağlaçlarda ise aynı yönde devam edecek.
                        </p>
                        <p>
                            Bağlacı bul → yönü belirle → yönü ters olan 2-3 şıkkı ele.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Teknik 5: Süre Yönetimi
                        </h2>
                        <p>
                            TYT Türkçe&apos;ye ideal süre 40-45 dakika. Her soruya eşit süre ayırmak yaygın hata. Soruları 3 katmana ayır:
                        </p>

                        <div className="space-y-3 my-6">
                            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-900 text-base mb-1">Hızlı Katman (12-15 soru, 10-12 dk)</h3>
                                <p className="text-sm text-emerald-800">Sözcük anlamı, deyim-atasözü, yazım-noktalama, anlatım bozukluğu. 30-45 sn/soru.</p>
                            </div>
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-900 text-base mb-1">Orta Katman (15-18 soru, 22-25 dk)</h3>
                                <p className="text-sm text-blue-800">Ana fikir, başlık bulma, yardımcı düşünce. İlk-son cümle tekniğiyle 1,5 dk/soru.</p>
                            </div>
                            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                                <h3 className="font-bold text-red-900 text-base mb-1">Ağır Katman (5-7 soru, 10-12 dk)</h3>
                                <p className="text-sm text-red-800">Çıkarım, paragraf tamamlama, paragraf sıralama. 2+ dk/soru. İlk turda yapamadıysan işaretle, geç.</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Yanlış Yapıyorsan Kontrol Listesi
                        </h2>
                        <p>
                            Denemelerde paragrafta sürekli 5-8 yanlış yapan öğrencilerin neredeyse hepsi şu hatalardan en az birini yapıyor:
                        </p>
                        <ol className="list-decimal pl-6 space-y-3">
                            <li>
                                <strong>Paragrafı okumadan şıklara atlıyor.</strong> Soru kökünü bile okumadan A şıkkını &quot;mantıklı&quot; deyip işaretliyor. ÖSYM A şıkkını genelde tuzak olarak kurgular.
                            </li>
                            <li>
                                <strong>Kendi yorumunu paragrafın yerine koyuyor.</strong> Paragraf &quot;kolaylaştırabilir&quot; diyorsa şıktaki &quot;kesinlikle geliştirir&quot; ifadesiyle arasındaki farkı görmezden geliyor.
                            </li>
                            <li>
                                <strong>Detayı ana fikir sanıyor.</strong> Paragrafın ortasındaki örneği ana fikir olarak seçiyor.
                            </li>
                            <li>
                                <strong>Aynı paragrafı 3 kere okuyor.</strong> 1 kez dikkatli okuma + şık karşılaştırması yeter.
                            </li>
                        </ol>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Günlük Paragraf Antrenmanı
                        </h2>
                        <p>
                            Paragraf çözmek kondisyon işi. Bir gün 50 soru çözüp 1 hafta bakmamak işe yaramaz. Her gün 12-15 soru çöz, haftanın 6 günü. Ayda 300-350 soru eder. 3 ayda 1000 soru gören bir beyin, sınav günü soru tipini otomatik tanır.
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead className="bg-emerald-100 text-emerald-800 text-sm">
                                    <tr>
                                        <th className="p-3 border">Gün</th>
                                        <th className="p-3 border">Soru Sayısı</th>
                                        <th className="p-3 border">Odak</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b"><td className="p-3 border">Pzt</td><td className="p-3 border">15</td><td className="p-3 border">Ana fikir + başlık</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="p-3 border">Salı</td><td className="p-3 border">12</td><td className="p-3 border">Paragraf tamamlama</td></tr>
                                    <tr className="border-b"><td className="p-3 border">Çrş</td><td className="p-3 border">15</td><td className="p-3 border">Çıkarım + yardımcı düşünce</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="p-3 border">Prş</td><td className="p-3 border">12</td><td className="p-3 border">Karışık (zamanlı)</td></tr>
                                    <tr className="border-b"><td className="p-3 border">Cuma</td><td className="p-3 border">15</td><td className="p-3 border">Yanlış analizi + tekrar</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="p-3 border">Cts</td><td className="p-3 border">12</td><td className="p-3 border">Deneme formatında zamanlı</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            35+ Net İçin Gereken Denge
                        </h2>
                        <p>
                            TYT Türkçe&apos;de 35 net hedefleyen birinin net dağılımı kabaca:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Dil bilgisi + sözcük soruları: 14-16 doğru (16-18 sorudan)</li>
                            <li>Paragraf soruları: <strong>en az 20-21 doğru</strong> (22-24 sorudan)</li>
                            <li>Toplam yanlış: en fazla 4-5 (net kaybı: 1-1,25)</li>
                        </ul>
                        <p>
                            Paragrafta 20 doğruya ulaşmak bu 5 tekniği düzenli uygulayınca 8-10 haftada gerçekleşebilir bir hedef.
                        </p>

                        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-8 my-10 text-center text-white shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">Türkçe Netinle TYT Puanını Hesapla</h3>
                            <p className="text-emerald-100 mb-6 max-w-xl mx-auto text-sm">
                                Türkçe, Matematik, Fen ve Sosyal netlerini girerek tahmini TYT puanını ve sıralamanı gör.
                            </p>
                            <Link href="/" className="inline-block bg-white text-emerald-700 px-8 py-3.5 rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow">
                                TYT Puanını Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Yazılar</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-kesin-cikan-konular" className="p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors border border-emerald-100">
                                    <p className="font-semibold text-emerald-900">TYT Kesin Çıkan Konular →</p>
                                    <p className="text-xs text-gray-600 mt-1">ÖSYM&apos;nin her sene sorduğu garanti Türkçe konuları.</p>
                                </Link>
                                <Link href="/blog/tyt-net-artirma-taktikleri" className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-blue-100">
                                    <p className="font-semibold text-blue-900">TYT Net Artırma Taktikleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">60-70 bandında sıkışanlar için stratejiler.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
