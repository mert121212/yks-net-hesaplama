import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import YigilmaChart from '@/components/YigilmaChart'

export const metadata: Metadata = {
    title: 'YKS\'de Yığılma Nedir ve Nasıl Oluşur? 2027 Yığılma Tuzağı Rehberi',
    description: 'YKS yığılması nedir? Aynı puanı alan binlerce adayın üst üste binmesi, kolay sınavın getirdiği felaket ve yığılmayı yarma taktikleri.',
    keywords: 'yks yığılma nedir, yks sıralama yığılması, tyt yığılma, ayt yığılma, yks puan dağılımı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-yigilma-tehlikesi' },
    openGraph: {
        title: 'YKS\'de Yığılma Nedir ve Nasıl Oluşur?',
        description: 'Sınav kolay olduğunda neden sevinmemelisin? Puanların şişip sıralamaların çöktüğü o meşhur yığılma gerçeği.',
        type: 'article',
        publishedTime: '2026-02-07',
        modifiedTime: '2026-03-01',
        url: 'https://yksnethesapla.com/blog/yks-yigilma-tehlikesi',
        images: [
            {
                url: '/images/blog/yks-yigilma-tehlikesi.jpg',
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
                    title="YKS'de Yığılma Nedir ve Nasıl Oluşur?"
                    description="YKS sınavında yığılma kavramı, sınav zorluğunun sıralamalara etkisi ve orta başarı dilimlerinde puan dağılımı."
                    datePublished="2026-02-07"
                    dateModified="2026-03-01"
                    url="https://yksnethesapla.com/blog/yks-yigilma-tehlikesi"
                    keywords={['yks yığılma nedir', 'yks sıralama yığılması', 'tyt yığılma', 'ayt yığılma', 'yks puan dağılımı']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Yığılma Rehberi</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Saha Analizi</span>
                            <time className="text-gray-600" dateTime="2026-02-07">7 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS&apos;de Yığılma Nedir? Neden Kolay Sınavdan Korkmalısın?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Sınavdan çıkıp <em>&ldquo;Oley be sorular çok kolaydı, 430 puan alıyorum!&rdquo;</em> diye sevinen öğrencilerin sonuç günü 80 bininci olup ağladığı o kabusa YKS&apos;de &ldquo;yığılma&rdquo; denir.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-yigilma-tehlikesi.jpg"
                        alt="YKS&apos;de Yığılma Nedir, Sıralamayı Nasıl Etkiler?"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her yıl temmuz ayında sonuç belgeleri açıklandığında aynı çığlığı duyarız: <em>&ldquo;Hocam geçen sene 410 puan alan arkadaşım 45 bininci olmuştu, ben bu sene 425 puan aldım ama 72 bininciyim, bu nasıl olur?!&rdquo;</em>
                        </p>

                        <p>
                            İşte buna <strong>Yığılma</strong> denir. Üniversite kapıları puanla değil, koltuk sayısı (kontenjan) ile dolar. Herkesin yüksek puan aldığı bir sınavda puanın hiçbir kıymeti harbiyesi kalmaz; sıralamalar yerle bir olur.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Zor Sınav Neden Öğrencinin Dostudur?
                        </h2>

                        <p>
                            Öğrenciler genellikle zor sınavdan nefret eder ama aslında çalışan öğrenciyi kurtaran tek şey sınavın seçici ve zor olmasıdır:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Zor Sınavda (Örn. 2021 YKS):</strong> Sorular ayırt edicidir. Çalışanla çalışmayan anında ayrışır. Netler geniş bir alana yayılır. Puanlar düşer ama sıralamalar şahlanır! 60 TYT netiyle tıp kazanılan efsanevi yıl tam olarak böyle gerçekleşti.</li>
                            <li><strong>Kolay Sınavda (Örn. 2020 & 2022 YKS):</strong> Sorular herkesin yapabileceği kıvamda gelince çalışanla çalışmayan birbirine karışır. 400 ile 430 puan arasına tam 300 bin aday sıkışır! Virgülden sonraki 0,1 puan farkla 4 bin kişi geriye düşersin.</li>
                        </ul>

                        <YigilmaChart />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Yığılma En Çok Hangi Aralıkta Can Yakar?
                        </h2>

                        <p>
                            İlk 10 binde yığılma pek olmaz; çünkü fulle yakın yapan aday sayısı zaten bir elin parmakları kadardır. Asıl cehennem <strong>60.000 ile 140.000 başarı diliminde</strong> yaşanır.
                        </p>

                        <p>
                            TYT&apos;de 65-75 net, AYT&apos;de 35-45 net yapan yüz binlerce öğrenci aynı daracık puan havuzuna balık istifi dizilir. Bu aralıkta masadaki her 1 net altın değerindedir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Yığılmayı Delip Geçmenin 3 Yolu
                        </h2>

                        <p>
                            Sınavın zorluğunu sen belirleyemezsin ama yığılma dalgasının üstünden atlayacak can simitlerini cebine koyabilirsin:
                        </p>

                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>OBP (Diploma Notun):</strong> Yığılma bölgesinde 200 bin adayın ham puanı birbirine çok yakındır. Burada devreye lise diploma notun girer. 95 OBP seni tek hamlede 15 bin kişinin üstüne zıplatırken, 70 OBP seni batırır.</li>
                            <li><strong>Rakiplerin Kaçtığı Dersler:</strong> Sayısalcı mısın? Herkes TYT Sosyali çöpe atarken senin yapacağın 16 Sosyal neti seni yığılmadan roket gibi fırlatır. Eşit Ağırlıkçı mısın? AYT Matematikte yapacağın her 1 net 2 bin kişiyi arkana alır.</li>
                            <li><strong>Denemelerde Puana Değil Yüzdelik Dilime Bak:</strong> Girdiğin Türkiye geneli denemelerde &ldquo;Kaç puan aldım?&rdquo; diye sorma. &ldquo;100 bin kişi içinde ilk yüzde kaça girdim?&rdquo; diye sor. Tek gerçek kılavuz yüzdelik dilimindir.</li>
                        </ul>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Netlerin Yığılmayı Yarıyor mu?</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Netlerini simülatörümüze gir; farklı sınav zorluklarına göre başarı sıranın nasıl değiştiğini ve yığılmanın neresinde kaldığını gör.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Yığılma Simülatörünü Aç →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
