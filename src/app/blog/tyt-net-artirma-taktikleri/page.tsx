import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'TYT Net Artırma Taktikleri: 60-70 Bandından Çıkış',
    description: 'TYT denemelerinde 60-70 bandında takılanlar için pratik analiz yöntemleri, branş denemesi kullanımı ve tur tekniği.',
    keywords: 'tyt net artırma, tyt deneme analizi, tyt 70 net, tyt hızlanma, tyt tur tekniği',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-net-artirma-taktikleri' },
    openGraph: {
        title: 'TYT Net Artırma Taktikleri: 60-70 Bandından Çıkış',
        description: 'Deneme netleri neden belirli bir puanda takılır, analiz nasıl yapılır ve branş denemeleri nasıl kullanılır?',
        type: 'article',
        publishedTime: '2026-02-10',
        modifiedTime: '2026-02-13',
        url: 'https://yksnethesapla.com/blog/tyt-net-artirma-taktikleri',
        images: [
            {
                url: '/images/blog/tyt-net-artirma-taktikleri.svg',
                width: 1200,
                height: 630,
                alt: 'TYT Net Artırma Taktikleri'
            }
        ],
    },
}

export default function TYTNetArtirma() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="TYT Net Artırma Taktikleri: 60-70 Bandından Çıkış" 
                    description="TYT denemelerinde 60-70 bandında takılanlar için pratik analiz yöntemleri, branş denemesi kullanımı ve tur tekniği."
                    datePublished="2026-02-10"
                    dateModified="2026-02-13"
                    url="https://yksnethesapla.com/blog/tyt-net-artirma-taktikleri"
                    keywords={['tyt net artırma', 'tyt deneme analizi', 'tyt 70 net', 'tyt hızlanma', 'tyt tur tekniği']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Net Artırma</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Strateji</span>
                            <time className="text-gray-600" dateTime="2026-02-10">10 Şubat 2026</time>
                            <span className="text-gray-600">• 7 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            TYT Net Artırma Yolları: 60-70 Bandını Aşmak
                        </h1>
                        <p className="text-xl text-gray-600">
                            Aylarca haftalık denemelere girip hep 62-65 civarında kalmak sık rastlanan bir durum. 60 nete kadar sadece konu çalışarak gelinir, sonrası sınav yönetimiyle ilgilidir.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/tyt-net-artirma-taktikleri.svg"
                        alt="TYT Net Artırma Yolları: 60-70 Bandını Aşmak"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            TYT hazırlığında en sık görülen plato 60-70 net aralığıdır. Temel konuların çoğu bitmiştir, formüller bilinir ama sınav süresi yetmez veya dikkatsizlikten 8-10 yanlış çıkar.
                        </p>

                        <p>
                            30 netten 60 nete çıkmakla 65 netten 80 nete çıkmak aynı şey değil. İlk aşamada konu eksiği kapatılır. İkinci aşamada ise hız, süre dağılımı ve soru eleme becerisi devreye girer.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Deneme Analizini Doğru Yapmak
                        </h2>
                        <p>
                            Çoğu aday deneme bittikten sonra sadece toplam nete bakar ve kitapçığı kenara koyar. Asıl gelişim yanlış yapılan veya boş bırakılan sorularda gizlidir.
                        </p>
                        <p>
                            Her denemeden sonra şu üç soruyu sormak gerekir:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Bu soruyu konu eksiğinden mi kaçırdım?</li>
                            <li>İşlem hatası veya soru kökünü yanlış okuma mı var?</li>
                            <li>Soruyla inatlaşıp 4-5 dakika harcadım mı?</li>
                        </ul>
                        <p>
                            Yapılamayan soruları bir dosyada toplayıp haftada bir tekrar çözmek, aynı tip soruda tekrar hata yapmayı engeller.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. Günlük Paragraf ve Problem Rutini
                        </h2>
                        <p>
                            TYT&apos;de Türkçe ve Matematik testlerinin yaklaşık 40 sorusu doğrudan okuduğunu anlama ve denklem kurma becerisini ölçer.
                        </p>
                        <p>
                            Bu iki alanı haftalık birkaç saatlik çalışmayla geliştirmek zordur. Günün ilk saatlerinde süre tutarak 20 paragraf ve 10-15 problem çözmek refleks kazandırır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. Genel Deneme Yerine Branş Denemesi
                        </h2>
                        <p>
                            Haftada 3-4 genel TYT denemesine girmek hem fiziksel olarak yorar hem de eksik kapatmaya zaman bırakmaz.
                        </p>
                        <p>
                            Genel denemeyi haftada 1 veya 2 ile sınırlayıp aradaki günlerde branş denemesi çözmek daha verimlidir:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Sosyal branş denemesi:</strong> 20 soruyu 12-15 dakikada çözüp kavram eksiklerini tek tek not alın. Kısa sürede 10 netten 15 nete çıkabilir.</li>
                            <li><strong>Fen branş denemesi:</strong> TYT Fen&apos;de bilgi soruları hızlı çözülür. Eksik konu hemen belli olur.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. Turlama Tekniği
                        </h2>
                        <p>
                            Bir soruya takılıp 3-4 dakika harcamak sınavın sonundaki kolay soruları görmeyi engeller.
                        </p>
                        <p>
                            İlk 40 saniyede çözüm yolu netleşmeyen sorunun yanına bir işaret koyup hemen sonrakine geçmek gerekir. Tüm testi bir tur gezdikten sonra kalan sürede işaretli sorulara dönülmelidir.
                        </p>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Netlerinizi Simüle Edin</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Farklı derslerdeki 2-3 netlik artışların toplam puanınıza ve sıralamanıza etkisini hesaplama aracımızda görebilirsiniz.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Net ve Sıralama Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Yazılar</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-net-hesaplama-rehberi" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">TYT Net Hesaplama Rehberi →</p>
                                    <p className="text-xs text-gray-600 mt-1">Derslerin katsayıları ve net hesaplama formülü.</p>
                                </Link>
                                <Link href="/blog/yks-yigilma-tehlikesi" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">YKS Yığılma Bölgeleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">Hangi puan aralıklarında yığılma olur, 1 netin etkisi nedir?</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
