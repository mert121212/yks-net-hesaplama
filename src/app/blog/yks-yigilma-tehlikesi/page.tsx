import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

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
        modifiedTime: '2026-08-19',
        url: 'https://yksnethesapla.com/blog/yks-yigilma-tehlikesi',
    },
}

export default function YKSYigilmaTehlikesi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
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
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Kritik Analiz</span>
                            <time className="text-gray-600">19 Ağustos 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS&apos;nin Kara Deliği: Yığılma Nedir ve Seni Nasıl Yutar?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Sınavdan çıkarsın, sorular kolay gelmiştir, &quot;Bu iş tamam&quot; dersin. 1 ay sonra sonuçlar açıklanır; beklediğin puan gelmiştir ama sıralaman şok edicidir. Hoş geldin &quot;Yığılma&quot; dünyasına.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Bunu 2020 ve 2022 YKS&apos;de çok acı bir şekilde yaşadık. O yıllarda pandemi vs. derken ÖSYM sınavı normalden çok daha &quot;kolay&quot; sordu. Çıkan herkes mutluydu. Sonuçlar bir açıklandı, ortalık cenaze evine döndü. Öğrenci 400 puan almış, bir önceki yıl o puanla 60 bininci olunurken o sene 110 bininci olmuştu.
                        </p>
                        
                        <p>
                            İşte biz rehber öğretmenlerin &quot;sınav keşke zor olsa&quot; diye dua etmemizin tek sebebi budur: Yığılma. Peki bu yığılma tam olarak nedir ve sen bu kara deliğe düşmemek için ne yapmalısın?
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Yığılma Neden Olur?
                        </h2>
                        <p>
                            Sınava giren yaklaşık 3 milyon aday var. Eğer ÖSYM, soruları herkesin veya çoğunluğun yapabileceği seviyede (kolay) sorarsa, çok sayıda öğrenci benzer netleri yapar.
                        </p>
                        <p>
                            Düşün ki Matematikte ayırt edici, çok zor sadece 1-2 soru var. Geri kalan 38 soruyu ortalama üstü çalışan herkes yapıyor. Ne oluyor bu sefer? 38 net yapan 50.000 kişi birikiyor tek bir puanda. Sınavın eleyiciliği kayboluyor. Virgülden sonraki küsuratlarla binlerce insan birbirinin önüne geçmeye çalışıyor. 
                        </p>

                        <div className="bg-slate-50 border-l-4 border-slate-500 p-6 rounded-r-xl my-6">
                            <h3 className="font-bold text-slate-900 mb-2">En Büyük Yığılma Nerede Olur?</h3>
                            <p className="text-sm text-slate-800">
                                Yığılma genellikle en tepe noktada (ilk 10.000) olmaz. En dipte de (1 milyon) olmaz. Yığılmanın ana merkezi, ortalama çalışan öğrencilerin kümelendiği <strong>50.000 ile 150.000 sıralama bandıdır.</strong> (Sayısal ve Eşit Ağırlık için). Bu bantta, sadece <Link href="/blog/yks-1-net-kac-kisi-atar" className="text-blue-600 hover:underline">1 netlik bir fark</Link> seni 5.000 kişi aşağıya veya yukarıya atabilir.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Yığılmaya Yakalanmamak İçin Ne Yapmalı?
                        </h2>
                        <p>
                            Sınavın zor veya kolay olacağını önceden bilemezsin. Ama yığılma riskine karşı alınacak iki büyük önlem var. Eğer o 50-150 bin bandından kurtulup kendini &quot;güvenli bölgeye&quot; atmak istiyorsan şunları yapmalısın:
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">1. OBP (Diploma Notu) Kalkanı</h3>
                        <p>
                            Yığılma yıllarında (kolay sınavlarda) herkes benzer netleri yaptığı için, öğrencileri birbirinden ayıran en büyük faktör Lise Diploma Notu (OBP) olur. 
                        </p>
                        <p>
                            Sınav kolaysa, seninle aynı neti yapan 10.000 kişi var demektir. O 10.000 kişinin içinde diploma notu 95 olan öğrenci, ham puanda seninle aynı bile olsa, yerleştirme puanında senin (diyelim notun 75) üzerinden silindir gibi geçer. (Hesabını görmek için <Link href="/blog/obp-hesaplama" className="text-blue-600 hover:underline">OBP yazımıza</Link> bakabilirsin). Eğer hâlâ lisedeysen, okul yazılılarını asla boşlama.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">2. Çoğunluğun Sevmediği Derslere Yönel</h3>
                        <p>
                            Yığılmadan kurtulmanın en pratik yolu, kalabalığın kaçtığı yöne gitmektir. 
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Eşit Ağırlıkçısın:</strong> Rakiplerinin %80&apos;i Matematikten nefret ediyor ve Edebiyata abanıyor. Sen Edebiyatı yapacaksın ama seni yığılmadan kurtaracak asıl şey AYT Matematiktir.</li>
                            <li><strong>Sayısalcısın:</strong> Rakiplerin Sabahtan akşama kadar Matematik ve Fen çözüyor. Türkçe dil bilgisi veya Sosyal Bilimler görünce mideleri bulanıyor. İşte sen o dil bilgisini yutacaksın. TYT Sosyalde 15 neti cebe indireceksin. </li>
                        </ul>
                        <p>
                            Sınavda herkesin çözdüğü o kolay sorular seni kurtarmaz. Onları zaten herkes çözüyor. Seni yığılmadan kurtaracak olan şey, rakiplerinin &quot;bu benim alanım değil&quot; veya &quot;buna çalışmaya üşendim&quot; deyip bıraktığı o 4-5 tane fazladan nettir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Denemelerde Yığılmayı Nasıl Fark Edersin?
                        </h2>
                        <p>
                            Eğer girdiğin bir Türkiye geneli denemede, 85 net yapıp 40.000&apos;inci oluyorsan, ama bir sonraki ay başka bir yayının denemesinde yine 85 net yapıp 80.000&apos;inci oluyorsan... Geçmiş olsun, o ikinci deneme kolay bir denemeydi ve yığılmaya düştün demektir.
                        </p>
                        <p>
                            Böyle bir durumda &quot;netim düşmedi ki&quot; diye kendini kandırma. Sıralaman yarı yarıya çakıldı. Demek ki o kolay denemede senin 85 değil, 95 net yapman gerekiyordu.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Güncel Yığılma Analizini Gör</h3>
                            <p className="text-blue-100 mb-6">
                                Hesaplama motorumuz, geçmiş yıllardaki yığılma senaryolarını da hesaba katarak en gerçekçi sıralamayı sana sunar.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Gerçekçi Sıralamanı Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
