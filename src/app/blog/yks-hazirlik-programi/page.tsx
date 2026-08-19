import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS Hazırlık Programı 2027: Gerçekçi Günlük ve Haftalık Çalışma Planı',
    description: 'YKS hazırlık programı ve bilimsel çalışma teknikleri. Pomodoro, Feynman metodu, Ebbinghaus unutma eğrisi ile verimli ders çalışma rehberi.',
    keywords: 'yks hazırlık programı, yks ders çalışma programı, verimli ders çalışma, pomodoro yks, feynman tekniği',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-hazirlik-programi' },
    openGraph: {
        title: 'YKS Hazırlık Programı 2027: Gerçekçi Çalışma Planı',
        description: 'Bilimsel çalışma teknikleriyle YKS hazırlığı. Günlük ve haftalık program şablonları.',
        type: 'article',
        publishedTime: '2026-02-20',
        modifiedTime: '2026-08-19',
        url: 'https://yksnethesapla.com/blog/yks-hazirlik-programi',
    },
}

export default function YKSHazirlikProgrami() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Hazırlık Programı</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Hazırlık</span>
                            <time className="text-gray-600">19 Ağustos 2026</time>
                            <span className="text-gray-600">• 14 dk okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            &quot;Günde 12 Saat Çalışıyorum Ama Netlerim Artmıyor&quot; Diyen Herkese
                        </h1>
                        <p className="text-xl text-gray-600">
                            İnternetten indirdiğin o parlak çalışma programı muhtemelen 3 gün sonra çöpe gitti. Normal. Çünkü o program sana göre değildi. Gel gerçekçi bir plan kuralım.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her sene eylül ayında aynı manzarayı görüyorum. Öğrenciler kırtasiyeden rengarenk kalemler almış, internetten &quot;Tıp kazanan öğrencinin programı&quot; indirmiş, duvara asmış. Programda yazıyor: &quot;06:00 kalk, 06:30-08:00 Matematik, 08:15-09:45 Fizik...&quot; diye akşam 23:00&apos;a kadar. İlk gün coşkuyla başlıyorlar. İkinci gün biraz zorluyorlar. Üçüncü gün alarm çalınca telefonu fırlatıp yatıyorlar. Program çöpe gidiyor.
                        </p>

                        <p>
                            Neden mi? Çünkü o program başka birinin biyolojik ritmine, motivasyon yapısına ve bilgi seviyesine göre hazırlanmış. Senin için işe yaramaz. Benim en iyi öğrencilerimden biri (geçen sene SAY ilk 3 bine girdi) sabah 10&apos;dan önce ders çalışmıyordu mesela. &quot;Hocam beyin sabah çalışmıyor&quot; diyordu. Ama saat 10&apos;dan gece 1&apos;e kadar düzenli çalışıyordu ve 8-9 saat net verimli ders çıkarıyordu.
                        </p>

                        <p>
                            Mesele masada kaç saat oturduğun değil. Mesele o saatlerin kaçında gerçekten beyninle çalıştığın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Unutma Eğrisini Yenmenin Tek Yolu: Aralıklı Tekrar
                        </h2>
                        <p>
                            1880&apos;lerde Alman psikolog Hermann Ebbinghaus bir deney yaptı ve şunu buldu: İnsan yeni öğrendiği bilginin %70&apos;ini ilk 24 saat içinde unutuyor. 1 hafta sonra %80&apos;i gitti. 1 ay sonra geriye %10-15 kalıyor. Bu yüzden &quot;ben konuyu çalıştım ama sınavda aklıma gelmedi&quot; diyorsun. Çünkü çalıştıktan sonra tekrar yapmadın ve beynin o bilgiyi çöpe attı.
                        </p>

                        <p>
                            Bunun çaresi var ve çok basit: Aralıklı tekrar. Konu bittikten sonra 4 farklı zamanda tekrar yapacaksın:
                        </p>

                        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl my-6">
                            <h4 className="font-bold text-slate-900 mb-3">Tekrar Takvimi:</h4>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li>• <strong>Aynı gün (gece yatmadan):</strong> 10-15 dakika konu özeti okuyarak. Kitabı aç, sadece başlıkları ve formülleri tara.</li>
                                <li>• <strong>3 gün sonra:</strong> O konudan 15-20 soru çöz. Kitap açmadan, sadece soru çözerek.</li>
                                <li>• <strong>2 hafta sonra:</strong> Branş denemesinde o konuyu hedefle. &quot;Bu denemede şu konudan kaç soru yaptım?&quot; diye kontrol et.</li>
                                <li>• <strong>1 ay sonra:</strong> Genel denemede o konuyu izle. Hâlâ yapamıyorsan başa dön.</li>
                            </ul>
                        </div>

                        <p>
                            Bu sistemi uygulayan öğrencilerimin netleri ortalama 2-3 ay içinde 15-20 net artıyor. Uygulamayan öğrenciler ise 6 ay çalışıp aynı yerde kalıyor. Aralıklı tekrar yapmak zor değil, sadece disiplin istiyor.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Feynman Tekniği: Anlamadığın Yeri Hemen Bul
                        </h2>
                        <p>
                            Nobel ödüllü fizikçi Richard Feynman&apos;ın öğrenme tekniğini YKS&apos;ye uyarlıyorum. Çok basit: Bir konuyu çalıştın (diyelim Mitoz Bölünme veya Logaritma). Kitabı kapat. Karşında 12 yaşında bir çocuk varmış gibi düşün ve o konuyu sıfırdan, en basit kelimelerle sesli olarak anlat. Evet, sesli. Odanda tek başına konuş.
                        </p>

                        <p>
                            Anlatırken bir yerde tıkanırsan — &quot;şey, burada eee...&quot; diyorsan — o noktayı bilmiyorsun demektir. Ezberlemişsin ama anlamamışsın. Kitabı aç, sadece o tıkandığın yeri tekrar oku ve tekrar anlat. Bu teknikle konuyu 3-4 kat daha hızlı öğreniyorsun çünkü beynin &quot;anlama&quot; modunda çalışıyor, &quot;ezberleme&quot; modunda değil.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            50+10 Pomodoro: Sınav Sürelerine Hazırlık
                        </h2>
                        <p>
                            Klasik Pomodoro 25 dakika çalış 5 dakika mola der. Bu YKS için yetersiz. TYT 165 dakika, AYT 180 dakika. Yani sınavda 3 saat kesintisiz odaklanman lazım. 25 dakikada mola veren beyin, sınav günü 90. dakikadan sonra dağılır.
                        </p>

                        <p>
                            Benim önerim: 50 dakika ders + 10 dakika mola. Günde 6-8 blok yapabilirsin. Ama molada telefon yok. Ciddiyim, telefon yok. Instagram, TikTok, YouTube açtığın an beynin mola yapmıyor, tam tersi daha fazla uyaran alıyor ve masaya döndüğünde odaklanmak 5 kat zorlaşıyor. Molada su iç, yüzünü yıka, balkona çık, müzik dinle ama ekrana bakma.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Örnek Günlük Program (Mezun veya Evden Hazırlananlar)
                        </h2>
                        <p>
                            Bunu direkt kopyalamak zorunda değilsin. Kendi biyolojik saatine göre uyarla. Ama genel yapı olarak şuna benzemeli:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg text-sm">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold border-b">Saat</th>
                                        <th className="px-4 py-3 text-left font-semibold border-b">Ne Yapılacak</th>
                                        <th className="px-4 py-3 text-left font-semibold border-b">Neden</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-4 py-3 font-bold">08:30 - 09:20</td><td>Paragraf + Problem (karışık 30 soru)</td><td>Beyni ısıtma turu. Her gün aynı şeyle başla.</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-bold">09:30 - 12:00</td><td>AYT Ana Ders (Matematik veya Fen)</td><td>Beyin sabah en keskindir. En zor dersi buraya koy.</td></tr>
                                    <tr className="border-b"><td className="px-4 py-3 font-bold">12:00 - 13:30</td><td>Öğle Molası</td><td>Yemek ye, 20 dakika yürü. Ders düşünme.</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-bold">13:30 - 16:00</td><td>İkinci Ders Bloğu (Fen-2 veya Edebiyat)</td><td>Öğleden sonra orta zorlukta ders.</td></tr>
                                    <tr className="border-b"><td className="px-4 py-3 font-bold">16:15 - 18:00</td><td>TYT Branş Denemesi veya Soru Çözümü</td><td>Günün üçüncü bloğu. Pratik ağırlıklı.</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-bold">19:30 - 21:30</td><td>Günün Tekrarı + Hata Defteri</td><td>Sabah çalıştığın konunun gece tekrarı. Ebbinghaus.</td></tr>
                                    <tr><td className="px-4 py-3 font-bold">21:30 - 22:00</td><td>Yarınki planı yaz</td><td>Sabah kalktığında ne yapacağını bileceksin.</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Toplam masada geçen süre: yaklaşık 9 saat. Ama verimli 9 saat. Telefonsuz, odaklanmış, planlı 9 saat. Bu, dağınık 14 saatten çok daha iyi.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Çalışmalarının Karşılığını Gör</h3>
                            <p className="text-blue-100 mb-6">
                                Bu programı uyguladıktan sonra deneme netlerini gir, sıralamanın nasıl değiştiğini izle.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Sıralama Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
