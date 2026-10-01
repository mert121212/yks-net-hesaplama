import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import YigilmaChart from '@/components/YigilmaChart'

export const metadata: Metadata = {
    title: 'YKS\'de Yığılma Nedir ve Nasıl Oluşur? 2027 Rehberi',
    description: 'YKS sınavında yığılma kavramı, sınav zorluğunun sıralamalara etkisi ve orta başarı dilimlerinde puan dağılımı.',
    keywords: 'yks yığılma nedir, yks sıralama yığılması, tyt yığılma, ayt yığılma, yks puan dağılımı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-yigilma-tehlikesi' },
    openGraph: {
        title: 'YKS\'de Yığılma Nedir ve Nasıl Oluşur?',
        description: 'Sınavın zor veya kolay olmasına göre netlerin belirli puanlarda toplanması ve sıralamaya etkisi.',
        type: 'article',
        publishedTime: '2026-02-07',
        modifiedTime: '2026-02-10',
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
                    dateModified="2026-02-10"
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
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Analiz</span>
                            <time className="text-gray-600" dateTime="2026-02-07">7 Şubat 2026</time>
                            <span className="text-gray-600">• 7 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS&apos;de Yığılma Nedir, Sıralamayı Nasıl Etkiler?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Sonuç belgesinde aynı puanı alan adayların geçmiş yıllara göre çok farklı sıralamalara yerleşmesi yığılma ile açıklanır. Sınavın zorluk düzeyi bu dağılımı belirler.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-yigilma-tehlikesi.jpg"
                        alt="YKS&apos;de Yığılma Nedir, Sıralamayı Nasıl Etkiler?"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS sonuçları açıklandığında adayların en çok karşılaştığı durumlardan biri şudur: Önceki yıl 420 puanla 40 bine giren bir adayın yerine, cari yılda 420 puanla 75 bininci olmak.
                        </p>

                        <p>
                            Bu fark sınavın zorluk derecesinden ve netlerin toplandığı aralıklardan kaynaklanır. Üniversite kontenjanları puanla değil sıralamayla dolar.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Zor Sınav ve Kolay Sınav Arasındaki Fark
                        </h2>

                        <p>
                            ÖSYM&apos;nin soru zorluk seviyesi adayların net dağılımını doğrudan şekillendirir:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Seçici sınavlarda (örneğin 2021 YKS):</strong> Soruların ayırt ediciliği yüksektir. Netler geniş bir puan aralığına dağılır. Adaylar arasında puan farkları belirginleşir, bu yüzden tek bir net sıralamayı daha az adayın önüne geçirir ama genel başarı sırası daha dengelidir.</li>
                            <li><strong>Ortalama veya kolay sınavlarda (örneğin 2020 veya 2022 YKS):</strong> Birçok aday benzer netleri yapar. Özellikle orta düzey sorularda fire vermeyen yüz binlerce kişi dar bir puan aralığında toplanır.</li>
                        </ul>

                        <YigilmaChart />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Yığılma En Çok Hangi Aralıkta Görülür?
                        </h2>

                        <p>
                            Yığılma tablosu incelendiğinde en belirgin yoğunlaşmanın 50.000 ile 150.000 sıralama aralığında olduğu görülür.
                        </p>

                        <p>
                            İlk 10 binde puan aralıkları geniştir çünkü fulle yakın yapan aday sayısı sınırlıdır. Ancak 60-75 TYT neti ve 35-45 AYT neti aralığında yüz binlerce aday bulunur. Bu dilimde virgülden sonraki birkaç ondalık puan bile binlerce kişilik sıra farkı yaratabilir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Yığılmanın Etkisini Azaltan Unsurlar
                        </h2>

                        <p>
                            Sınavın zorluğunu adayın kendisi belirleyemez, fakat hazırlık sürecinde dikkat edilebilecek noktalar vardır:
                        </p>

                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Ortaöğretim Başarı Puanı (OBP):</strong> Netler birbirine çok yakın olduğunda diploma notu belirleyici olur. Yüksek bir OBP, benzer ham puandaki adayların önüne geçmeyi sağlar.</li>
                            <li><strong>Düşük ortalamalı testler:</strong> Kendi alanındaki adayların genelde ihmal ettiği derslerden (örneğin Sayısalda TYT Sosyal veya Eşit Ağırlıkta AYT Matematik) gelen netler adayı ortalamanın üstüne taşır.</li>
                            <li><strong>Denemelerde yüzdelik dilim takibi:</strong> Kurum denemelerinde puandan çok genel sıralamaya ve yüzdelik dilime bakmak gerçek sınav provası açısından daha doğru fikir verir.</li>
                        </ul>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Netlerinizi Test Edin</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Farklı yılların katsayıları ve yığılma verileri üzerinden tahmini sıralamanızı hesaplayın.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Hesaplama Aracına Git →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Rehberler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">1 Net Sıralamayı Ne Kadar Değiştirir? →</p>
                                    <p className="text-xs text-gray-600 mt-1">Başarı dilimlerine göre netlerin getirdiği kişi sayısı.</p>
                                </Link>
                                <Link href="/blog/obp-hesaplama" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">OBP Hesaplama Rehberi →</p>
                                    <p className="text-xs text-gray-600 mt-1">Diploma notunun yerleştirme puanına katkısı.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
