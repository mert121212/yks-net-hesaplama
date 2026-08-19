import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'TYT Net Hesaplama Rehberi 2027 | Derslerin Katsayıları ve Puan Getirisi',
    description: 'TYT net hesaplama nasıl yapılır? TYT Türkçe, Matematik, Fen ve Sosyal testlerinin puan katsayıları ve YKS yerleştirme puanına etkisi.',
    keywords: 'tyt net hesaplama, tyt katsayıları, tyt puan hesaplama 2027, tyt matematik katsayısı, yks net hesaplama',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-net-hesaplama-rehberi' },
    openGraph: {
        title: 'TYT Net Hesaplama: Sınavın Puan Mantığını Çözüyoruz',
        description: 'TYT testlerinin ağırlıkları, katsayıları ve barajsız sistemin getirdikleri.',
        type: 'article',
        publishedTime: '2026-02-12',
        modifiedTime: '2026-08-19',
        url: 'https://yksnethesapla.com/blog/tyt-net-hesaplama-rehberi',
    },
}

export default function TYTNetHesaplamaRehberi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Net Hesaplama</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600">19 Ağustos 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TYT Net Hesaplamanın Mantığı: Hangi Derse Ne Kadar Asılmalısın?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Puanın nasıl hesaplandığını bilirsen, denemede zamanını da ona göre yönetirsin. TYT&apos;de Türkçe çözmeyip Sosyal çözen sayısallar, Matematik çözmeyip Fen çözen eşit ağırlıkçılar... Kim haklı?
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her yıl sene başında dershanede ilk deneme yapılır. Sonuçlar asılır (şimdi WhatsApp&apos;tan atılıyor ama mantık aynı). Sonra öğrenciler gelip sormaya başlar: &quot;Hocam ben 60 net yaptım o 55 net yaptı, benim puanım nasıl ondan düşük çıkıyor?&quot; 
                        </p>
                        
                        <p>
                            Çok basit bir sebebi var: TYT&apos;de net sayısı her şey değildir, o netleri HANGİ testlerden yaptığın da puanını etkiler. (Tabii ki <Link href="/blog/yks-net-hesaplama-nasil-yapilir" className="text-blue-600 hover:underline">standart sapma</Link> olayını da unutmamak lazım ama o işin teknik kısmı, şu an katsayılara odaklanalım).
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            TYT Testlerinin Ağırlıkları (Katsayılar)
                        </h2>
                        <p>
                            TYT&apos;de toplam 120 soru var. ÖSYM sana taban puan olarak kafadan 100 puan veriyor. (Gidip sadece adını kodlasan 100 puan alıyorsun yani). Kalan puanı, yaptığın netleri katsayılarla çarparak bu 100&apos;ün üstüne ekliyor. Testlerin ağırlıkları şöyle:
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6 not-prose">
                            <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-center">
                                <h4 className="font-bold text-red-900">Türkçe</h4>
                                <p className="text-2xl font-black text-red-700 mt-2">%33</p>
                                <p className="text-xs text-red-600 mt-1">40 Soru</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
                                <h4 className="font-bold text-blue-900">Matematik</h4>
                                <p className="text-2xl font-black text-blue-700 mt-2">%33</p>
                                <p className="text-xs text-blue-600 mt-1">40 Soru</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl border border-green-100 text-center">
                                <h4 className="font-bold text-green-900">Fen Bilimleri</h4>
                                <p className="text-2xl font-black text-green-700 mt-2">%17</p>
                                <p className="text-xs text-green-600 mt-1">20 Soru</p>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 text-center">
                                <h4 className="font-bold text-amber-900">Sosyal Bilimler</h4>
                                <p className="text-2xl font-black text-amber-700 mt-2">%17</p>
                                <p className="text-xs text-amber-600 mt-1">20 Soru</p>
                            </div>
                        </div>

                        <p>
                            Dikkat ettiysen Türkçe ve Matematiğin toplam ağırlığı %66. Yani TYT aslında bir okuduğunu anlama (Türkçe) ve analitik düşünme (Matematik) sınavı. Fen ve Sosyal ise destek kuvvetler.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Stratejik Hata: Eşit Ağırlıkçının Fen Çözmemesi
                        </h2>
                        <p>
                            İşte en büyük şehir efsanelerinden biri: &quot;Ben Eşit Ağırlıkçıyım, TYT&apos;de Fen çözmeme gerek yok.&quot; Bu lafı kim çıkardıysa binlerce öğrencinin hayalleriyle oynadı. 
                        </p>
                        
                        <p>
                            Bak arkadaşım, TYT dediğimiz sınav Ortak Sınavdır. Senin alanın (SAY/EA/SÖZ) sadece AYT&apos;de önemlidir. TYT&apos;de puanın hesaplanırken, Fizik sorusundan aldığın puanla Tarih sorusundan aldığın puan neredeyse aynıdır (1 net = ~1.36 puan).
                        </p>

                        <div className="bg-slate-50 border-l-4 border-slate-500 p-5 rounded-r-lg my-6">
                            <p className="text-slate-800 font-medium">
                                Sen Eşit Ağırlıkçı olarak zor bir Matematik sorusuyla 5 dakika boğuşup 1 net çıkaracağına, o 5 dakikada Kimya&apos;daki &quot;Periyodik Tablo&quot; sorusu ile Biyoloji&apos;deki &quot;Hücre&quot; sorusunu (ikisi de ezberdir, kolaydır) tık tık çözüp 2 net cebine koysaydın, sıralamada fırlamıştın.
                            </p>
                        </div>

                        <p>
                            Sayısalcılar için de aynısı geçerli. Sayısalcı olup Felsefe/Din grubundaki o kolay yorum sorularına bakmayan adam, rakibine bedavadan avantaj veriyordur. TYT&apos;de &quot;benim alanım değil&quot; lüksün yok. TYT&apos;de kolay soru neredeyse gidip onu avlayacaksın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Sınavda Süre Yönetimi: Turlama Tekniği
                        </h2>
                        <p>
                            TYT bir zeka testi değildir. TYT bir HIZ ve PSİKOLOJİ testidir. 165 dakikada 120 soru (soru başına 1.3 dakika). Sana her soruyu çözecek süreyi bilerek vermiyorlar, &quot;bakalım bu baskı altında panik yapmadan seçici davranabilecek mi?&quot; diye ölçüyorlar.
                        </p>

                        <p>
                            O yüzden benim Turlama Tekniği dediğim şu sistemi mutlaka uygulamalısın:
                        </p>
                        <ol className="list-decimal pl-6 space-y-3 mb-6">
                            <li><strong>İlk Tur (Avlanma):</strong> Sınava başladın. Soruyu okudun, kalemi oynatmadan 10 saniyede &quot;ben bunu çözerim&quot; dedin mi? Çöz. Okudun ama &quot;biraz uğraştırır&quot; dedin mi? Yanına yuvarlak koy ve GEÇ. Asla inatlaşma. İlk tur bittiğinde (yaklaşık 80-90 dk) aslında sınavdaki kolay ve orta soruların tamamını (belki 60-70 neti) cebine koymuş oluyorsun.</li>
                            <li><strong>İkinci Tur (Boğuşma):</strong> Artık kafan rahat. Cebinde sağlam bir net var. Geri dön ve o yanına yuvarlak koyduğun, uğraştıran sorularla boğuş. Çünkü artık o sorunun 3 dakikanı alması seni strese sokmayacak.</li>
                        </ol>
                        
                        <p>
                            Denemelerde 1. sorudan başlayıp 40. soruya kadar sırayla inatlaşarak giden adam 25. soruda süreyi bitirir, arkadaki 15 tane kek soruyu göremeden sınavı kapatır. Bu tuzağa düşme.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Taktik Çalışıyor Mu? Hemen Test Et</h3>
                            <p className="text-blue-100 mb-6">
                                TYT netlerini gir, katsayılara göre puanının nasıl hesaplandığını detaylıca gör. Fen/Sosyal netlerinin etkisine kendin şahit ol.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                TYT Puanını Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
