import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS Hazırlık Programı 2027: Bilimsel Öğrenme Teknikleri',
    description: 'Pomodoro tekniği, Feynman metodu ve Ebbinghaus unutma eğrisiyle YKS hazırlığı. Haftalık ve günlük örnek çalışma şablonları.',
    keywords: 'yks hazırlık programı, yks ders çalışma programı, tyt ayt programı, pomodoro yks, verimli ders çalışma',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-hazirlik-programi' },
    openGraph: {
        title: 'YKS Hazırlık Programı 2027: Bilimsel Öğrenme Teknikleri',
        description: 'Pomodoro 2.0, Feynman tekniği ve Ebbinghaus unutma eğrisiyle YKS hazırlığı.',
        type: 'article',
        publishedTime: '2026-02-20',
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
                        <span className="text-gray-900">YKS Hazırlık Programı</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Hazırlık</span>
                            <time className="text-gray-600">20 Şubat 2026</time>
                            <span className="text-gray-600">• 12 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Günde 10 Saat Çalışıp Neti Artmayanlara: Bilimsel YKS Programı
                        </h1>
                        <p className="text-xl text-gray-600">
                            Masada saatlerce oturup telefona bakarak geçirilen 8 saat değil, odaklanmış 4 saat derece yaptırır. Feynman ve Ebbinghaus ile sürdürülebilir çalışma planı.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her sene binlerce öğrenci aynı hataya düşüyor: Kırtasiyeden rengarenk fosforlu kalemler alınıyor, internetten &quot;günde 14 saat çalışan tıpçının programı&quot; indirilip duvara asılıyor. İlk 3 gün gaza basılıyor, dördüncü gün tükenmişlik sendromu başlıyor ve program çöpe gidiyor.
                        </p>

                        <p>
                            Gerçekçi olalım: <strong>En iyi ders çalışma programı, senin gerçekten uygulayabildiğin programdır</strong>. Beynin çalışma fizyolojisine aykırı, robotsu planlar sadece vicdan azabı yaratır. Gel bilimsel olarak kanıtlanmış tekniklerle gerçek bir plan nasıl yapılır bakalım.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            1. Ebbinghaus Unutma Eğrisini Yenmek (Aralıklı Tekrar)
                        </h2>
                        <p>
                            Alman psikolog Hermann Ebbinghaus&apos;un araştırmalarına göre, yeni öğrendiğin bir bilginin <strong>%70&apos;ini ilk 24 saat içinde</strong> unutursun. 1 ay sonra ise geriye sadece %10-15 kalır. Yani sen bugün 6 saat Fizik çalışıp 1 ay boyunca o konuya hiç bakmazsan, o 6 saatin 5 saati çöp olmuştur.
                        </p>

                        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl my-6">
                            <h4 className="font-bold text-slate-900 mb-3">Altın Tekrar Takvimi:</h4>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li>• <strong>1. Tekrar (Aynı Gün):</strong> Konuyu çalıştıktan 8-10 saat sonra (gece yatmadan önce) 15 dakikalık hızlı özet okuması.</li>
                                <li>• <strong>2. Tekrar (3 Gün Sonra):</strong> Konuya dair 20 farklı soru çözümü.</li>
                                <li>• <strong>3. Tekrar (2 Hafta Sonra):</strong> Karışık branş denemesinde o konunun sorularına odaklanma.</li>
                                <li>• <strong>4. Tekrar (1 Ay Sonra):</strong> Genel deneme analizi.</li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            2. Feynman Tekniği: Anlamadığın Yeri Hemen Yakala
                        </h2>
                        <p>
                            Nobel ödüllü fizikçi Richard Feynman&apos;ın meşhur öğrenme metodunu YKS&apos;ye uyarlıyoruz: Bir konuyu (örneğin Hücre Bölünmeleri veya Logaritma) çalıştın. Kitabı kapat. Karşında 10 yaşında bir çocuk varmış gibi o konuyu sıfırdan, en basit cümlelerle sesli olarak anlatmaya çalış.
                        </p>
                        <p>
                            Eğer anlatırken bir noktada takılıp &quot;kem-küm&quot; ediyorsan, bil ki o kısmı anlamamışsın, sadece ezberlemişsin. Kitabı tekrar aç, sadece o tıkandığın 1-2 sayfayı oku ve tekrar anlat. Bu yöntemle konuyu 3 kat daha hızlı kavrarsın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            3. 50 + 10 Pomodoro Döngüsü (Odaklanma Kasını Büyüt)
                        </h2>
                        <p>
                            Klasik 25+5 dakikalık Pomodoro YKS için biraz kısadır çünkü YKS sınavları 165 ve 180 dakikadır. Beynini uzun süre odaklanmaya alıştırmak için <strong>50 Dakika Ders + 10 Dakika Mola</strong> döngüsünü uygula.
                        </p>
                        <p className="text-sm text-red-700 bg-red-50 p-4 rounded-lg">
                            <strong>Önemli Kural:</strong> 10 dakikalık molada telefona bakıp Instagram veya TikTok kaydırma! Ekran ışığı beynin dinlenmesini engeller. Balkona çık, su iç, gerinme hareketleri yap ve masaya dön.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Örnek Günlük YKS Çalışma Şablonu (Mezun / Evde Hazırlananlar)
                        </h2>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg text-sm">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold border-b">Zaman Dilimi</th>
                                        <th className="px-4 py-3 text-left font-semibold border-b">Etkinlik</th>
                                        <th className="px-4 py-3 text-left font-semibold border-b">Açıklama</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-4 py-3 font-bold">08:30 – 09:30</td><td>Sabah Rutini</td><td>20 Paragraf + 20 Problem çözümü (Zihin açma)</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-bold">09:45 – 12:30</td><td>1. Blok: Ağır Konu</td><td>AYT Matematik (LTİ / Trigonometri konu + soru)</td></tr>
                                    <tr className="border-b"><td className="px-4 py-3 font-bold">12:30 – 13:30</td><td>Öğle Molası</td><td>Yemek ve yürüyüş (Tamamen ders dışı)</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-bold">13:30 – 16:00</td><td>2. Blok: Fen / Edebiyat</td><td>AYT Fizik / Kimya veya AYT Edebiyat çalışması</td></tr>
                                    <tr className="border-b"><td className="px-4 py-3 font-bold">16:15 – 18:00</td><td>3. Blok: TYT Pratik</td><td>Branş Denemesi çözümü ve hata analizi</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-4 py-3 font-bold">19:30 – 21:30</td><td>4. Blok: Günün Tekrarı</td><td>Hata defterini çözme ve ertesi günün planını çıkarma</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Çalışmalarının Sonucunu Test Et</h3>
                            <p className="text-blue-100 mb-6">
                                Deneme netlerini sisteme gir, hedeflediğin üniversiteye kaç net kaldığını hemen gör.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Net Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
