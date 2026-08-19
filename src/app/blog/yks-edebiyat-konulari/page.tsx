import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS Edebiyat Konuları ve Soru Dağılımı 2027 | AYT Edebiyat Rehberi',
    description: 'AYT Edebiyat konuları, dönem dönem soru dağılımı, Divan edebiyatı ve Cumhuriyet dönemi yazarları. Ezberleme teknikleri ve 20+ net yapma rehberi.',
    keywords: 'yks edebiyat konuları, ayt edebiyat soru dağılımı, edebiyat nasıl çalışılır, divan edebiyatı, cumhuriyet edebiyatı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari' },
    openGraph: {
        title: 'YKS Edebiyat Konuları 2027: Dönem Dönem Rehber',
        description: 'AYT Edebiyat konuları, dönemler ve yazar-eser eşleştirmeleri.',
        type: 'article',
        publishedTime: '2026-02-17',
        modifiedTime: '2026-08-19',
        url: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari',
    },
}

export default function YKSEdebiyatKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Edebiyat Konuları</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Edebiyat</span>
                            <time className="text-gray-600">19 Ağustos 2026</time>
                            <span className="text-gray-600">• 14 dk okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            AYT Edebiyat: Yüzlerce Yazar Var Ama ÖSYM Hep Aynı 30 Tanesini Soruyor
                        </h1>
                        <p className="text-xl text-gray-600">
                            Edebiyat dersini &quot;çok ezbere dayalı, yapamam&quot; deyip geçenlere kötü haberim var: 24 sorudan 20 tanesini doğru yapmanın yolu ezber değil, dönem mantığını kavramak. Gelin anlatayım.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Eşit Ağırlık veya Sözel hazırlanan öğrencilerin çoğu edebiyattan korkar. Yüzlerce yazar var, her yazarın onlarca eseri var, her dönemin kendine ait özellikleri var. Kalın konu anlatım kitaplarına baktığında insan &quot;ben bunları nasıl ezberleyeceğim?&quot; diye panik yapıyor.
                        </p>

                        <p>
                            Panik yapma. Çünkü bir sır vereyim sana: ÖSYM edebiyat testinde &quot;Şinasi&apos;nin üçüncü makalesinin yayınlandığı gazetenin adını&quot; sormuyor. ÖSYM dönemlerin genel özelliklerini ve mihenk taşı yazarların ayırt edici yönlerini soruyor. Bunu bir kez kavradığında, edebiyat senin en rahat netini çıkaracağın ders haline geliyor.
                        </p>

                        <p>
                            Ben öğrencilerime şunu söylüyorum: Edebiyat testinde asıl mesele bilgi değil, dönem mantığını &quot;hissetmektir&quot;. Tanzimat dönemi yazarları toplumu eğitmek istiyordu — onların her eseri bir ders kitabı gibidir. Servet-i Fünuncular ise bireysel duygulara döndü, ağır bir dil kullandılar, sanat için sanat dediler. Milli Edebiyat dönemi ise &quot;yeter artık bu ağdalı dil, halk gibi yazalım&quot; dedi. Bu akışı bir kez kafana oturtunca soruları çözmek çok kolaylaşıyor.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            AYT Edebiyat Soru Dağılımı
                        </h2>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-purple-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Dönem / Konu</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Ortalama Soru</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Benim Yorumum</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Anlam Bilgisi (Paragraf, Cümle Yorumu)</td><td className="px-5 py-3 text-center font-bold">4 - 6</td><td className="px-5 py-3 text-blue-700">Temel netler. Bunları kaçırma, kolay olur genelde.</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Şiir Bilgisi (Kafiye, Redif, Ölçü, Söz Sanatları)</td><td className="px-5 py-3 text-center font-bold">3 - 4</td><td className="px-5 py-3 text-green-700 font-bold">Teknik bilgi. Bir kez öğrenince unutmazsın.</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">İslamiyet Öncesi ve Halk Edebiyatı</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3">Koşma, mani, destan — bunları bil yeter.</td></tr>
                                    <tr className="border-b bg-red-50"><td className="px-5 py-3 font-bold text-red-900">Divan Edebiyatı</td><td className="px-5 py-3 text-center font-bold text-red-700 text-lg">4 - 5</td><td className="px-5 py-3 text-red-700 font-bold">En çok soru gelen bölüm. 5 büyük şairi bil: Fuzuli, Baki, Nedim, Nabi, Şeyh Galip.</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Tanzimat (1. ve 2. Dönem)</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3">Namık Kemal vs Recaizade karşılaştırması sıkça çıkıyor.</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Servet-i Fünun ve Fecr-i Ati</td><td className="px-5 py-3 text-center font-bold">1 - 2</td><td className="px-5 py-3">Tevfik Fikret ve Halit Ziya yeterli.</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Milli Edebiyat</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3">Ömer Seyfettin, Ziya Gökalp ve Beş Hececiler.</td></tr>
                                    <tr className="border-b bg-blue-50"><td className="px-5 py-3 font-bold text-blue-900">Cumhuriyet Dönemi (Şiir, Roman, Tiyatro, Hikaye)</td><td className="px-5 py-3 text-center font-bold text-blue-800 text-lg">4 - 6</td><td className="px-5 py-3 text-blue-800 font-bold">En geniş bölüm. Nazım Hikmet, Necip Fazıl, Yaşar Kemal, Orhan Kemal hep çıkıyor.</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Edebi Akımlar (Realizm, Romantizm vb.)</td><td className="px-5 py-3 text-center font-bold">1</td><td className="px-5 py-3 text-green-700">1 soru garanti. 10 dakikada öğrenilir.</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Edebiyatı Ezberleme, Kodla
                        </h2>
                        <p>
                            Benim yıllardır uyguladığım ve işe yarayan bir yöntemim var: Her yazarı tek bir kelime veya cümleyle kodluyorum. Bu kodlar beyinde çengel gibi takılıyor ve sınav anında &quot;aa bu Baki sorusu&quot; diye hemen tanıyorsun. Birkaç örnek vereyim:
                        </p>

                        <ul className="list-disc pl-6 space-y-3 mb-6">
                            <li><strong>Fuzuli = Acı ve İlahi Aşk.</strong> Her şiirinde ızdırap var. &quot;Aşk derdiyle hoşem&quot; diyen adam bu. Su Kasidesi onun en ünlü eseri.</li>
                            <li><strong>Baki = Sultanü&apos;ş Şuara (Şairler Sultanı).</strong> Kanuni&apos;nin ölümüne mersiye yazdı. Dünyevi zevklerden bahseder, rindane tarz. Divan şiirinin en &quot;cool&quot; adamı diye düşün.</li>
                            <li><strong>Nedim = Lale Devri Partici.</strong> İstanbul&apos;u, eğlenceyi, güzel kadınları anlatır. Şarkı türünü en iyi kullanan şairdir. &quot;İstanbul&apos;u dinliyorum gözlerim kapalı&quot; Orhan Veli&apos;nin ama Nedim 300 yıl önce benzer işi yapıyordu.</li>
                            <li><strong>Nabi = Öğüt veren abi.</strong> Didaktik şiir yazar. &quot;Oğlum şunu yap, bunu yapma&quot; tarzında. Hayriye ve Hayrabad adlı eserleri var.</li>
                            <li><strong>Ahmet Haşim = Akşam Şairi.</strong> Her şiirinde akşam, gün batımı, karanlık var. &quot;Şiir dili musiki gibi anlaşılmaz&quot; demiş — yani saf şiir peşinde.</li>
                            <li><strong>Sait Faik = İstanbul Hikayecisi.</strong> Balıkçılar, küçük insanlar, ada hayatı. Hikayelerinde özellikle son cümle bomba gibi patlar.</li>
                        </ul>

                        <p>
                            Bu tarz kodlamaları bütün yazarlar için yap. Küçük kartlara yaz (ön yüz yazar adı ve dönem, arka yüz kod ve 2-3 eser) ve günde 10 dakika çevir. Otobüste, kuyrukta, yatmadan önce. 2 haftada bütün yazarları kodlamış olursun.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Haftalık Edebiyat Programı
                        </h2>
                        <p>
                            Edebiyatı haftada 2-3 gün çalışman yeterli. Her çalışma seansında bir dönem bitir. Mesela Pazartesi Divan Edebiyatı, Çarşamba Tanzimat + Servet-i Fünun, Cuma Cumhuriyet Dönemi. Her çalışma seansının sonunda o dönemden 10 soru çöz. Cumartesi günü de 24 soruluk bir AYT Edebiyat branş denemesi çöz ve hangi dönemden hata yaptığını not et. Ertesi hafta o dönemlere ağırlık ver.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Edebiyat Netlerini EA ve SÖZ Puanına Çevir</h3>
                            <p className="text-blue-100 mb-6">
                                Edebiyat netlerinin Hukuk ve PDR sıralamalarına etkisini hesapla.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Hemen Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
