import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'TYT\'de Kesin Çıkan Konular 2027 | Nokta Atışı Çalışma Programı',
    description: 'TYT Matematik, Türkçe, Fizik, Kimya, Biyoloji ve Tarihte her sene istisnasız sorulan, en çok net getiren kesin çıkan konular listesi 2027.',
    keywords: 'tyt kesin çıkan konular, tyt en çok çıkan konular, tyt matematik çıkan konular, tyt türkçe banko konular, tyt 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-kesin-cikan-konular' },
    openGraph: {
        title: 'TYT\'de Her Sene Banko Çıkan Konular',
        description: 'Vakti az olanlar ve netini hızlıca artırmak isteyenler için nokta atışı TYT konuları.',
        type: 'article',
        publishedTime: '2026-02-11',
        modifiedTime: '2026-02-14',
        url: 'https://yksnethesapla.com/blog/tyt-kesin-cikan-konular',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'TYT Kesin Çıkan Konular 2027'
            }
        ],
    },
}

export default function TYTKesinCikanKonular() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="TYT'de Zaman Kazanmanın Sırrı: Kesin Çıkacak Altın Konular"
                    description="TYT Matematik, Türkçe, Fizik, Kimya, Biyoloji ve Tarihte her sene istisnasız sorulan, en çok net getiren kesin çıkan konular listesi 2027."
                    datePublished="2026-02-11"
                    dateModified="2026-02-14"
                    url="https://yksnethesapla.com/blog/tyt-kesin-cikan-konular"
                    keywords={['tyt kesin çıkan konular', 'tyt en çok çıkan konular', 'tyt matematik çıkan konular', 'tyt türkçe banko konular', 'tyt 2027']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Kesin Çıkan Konular</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Özel Analiz</span>
                            <time className="text-gray-600" dateTime="2026-02-11">11 Şubat 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Vakti Dar Olanlara: TYT&apos;de Her Sene Banko Çıkan Konular
                        </h1>
                        <p className="text-xl text-gray-600">
                            Müfredatta onlarca konu başlığı var ama ÖSYM soru kitapçığında her sene aynı garanti başlıklar yer alıyor. Masada puan bırakmak istemeyenler için net odaklı konu haritası.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Sınava hazırlanırken yapılan en klasik hata, 500 sayfalık konu anlatım kitabını 1. sayfadan açıp sırayla okumaya çalışmaktır.
                        </p>
                        <p>
                            Vicdan rahatlatır, evet. &quot;Ben her konuya baktım&quot; dersiniz. Ama verim açısından tam bir zaman kaybıdır.
                        </p>
                        <p>
                            Çünkü ÖSYM&apos;nin 120 soruluk sınavında bazı konular vardır ki son 7-8 yıldır istisnasız her Haziran ayında masaya konur. Bazı konular da vardır ki 3-4 yılda bir belki tek bir soru gelir.
                        </p>
                        <p>
                            Zamanınız kısıtlıysa veya netlerinizi hızlıca 60-70 bandına çekmek istiyorsanız, enerjinizi dağıtmayacaksınız. Önce ÖSYM&apos;nin asla vazgeçmediği bu kemik konuları cebe indireceksiniz:
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Türkçe: 40 Sorunun 30&apos;unu Sırtlayan 3 Başlık
                        </h2>
                        <p>
                            Türkçe testinde başarının sırrı dil bilgisi kurallarını ezberlemekten değil, okuduğunu seri şekilde süzmekten geçer.
                        </p>
                        <p>
                            <strong>Paragrafta Ana Düşünce ve Yardımcı Düşünceler (12-14 Soru):</strong> Sınavın en büyük soru bloğudur. Her gün aksatmadan 20 paragraf sorusu çözmek, bu soruları sınav anında rahatça yakalamanızı sağlar.
                        </p>
                        <p>
                            <strong>Sözcükte ve Cümlede Anlam (6-8 Soru):</strong> Boşluk doldurma, altı çizili ifadenin anlamı ve cümle tamamlama. Ezber değil, tamamen mantık yürütme sorularıdır.
                        </p>
                        <p>
                            <strong>Yazım Kuralları ve Noktalama İşaretleri (4 Soru):</strong> Dil bilgisinin en karlı bölümüdür. Virgülün kullanılmadığı yerler, &quot;de/da&quot; ve &quot;ki&quot; yazımı, büyük harf kuralları... Çalışması 1-2 akşam sürer ama sınavda 4 garanti net getirir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Matematik: 20 Netin Kapısını Açan Çekirdek Konular
                        </h2>
                        <p>
                            Matematikte gözünüz korkmasın. 40 sorunun neredeyse yarısı şu 3 ana başlıktan toplanır:
                        </p>
                        <p>
                            <strong>Problemler (11-13 Soru):</strong> Sayı, kesir, yüzde, hız ve yaş problemleri. Matematiğin omurgasıdır. Günde en az 15 problem çözmeden TYT Matematikte 20 netin üzerine çıkamazsınız.
                        </p>
                        <p>
                            <strong>Temel Kavramlar ve Sayı Basamakları (4-5 Soru):</strong> Tek-çift sayı yorumları, basamak kavramı ve temel bölünebilme kuralları. Soru tiplerini kavradığınızda kaçırılmayacak sorulardır.
                        </p>
                        <p>
                            <strong>Üslü ve Köklü Sayılar (2-3 Soru):</strong> Kuralları standarttır; genelde günlük hayattan bir tartı veya cetvel görseli üzerinden yaklaşık değer bulmanız istenir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Fen: Sayısalcı Olmasanız Bile Cepte 6-8 Net
                        </h2>
                        <p>
                            Eşit Ağırlık ve Sözel öğrencileri için fen testindeki 9. sınıf soruları bulunmaz nimettir. Formül gerekmez, temel kavramı bilmek yeterlidir:
                        </p>
                        <p>
                            <strong>Biyoloji - Hücre ve Canlıların Ortak Özellikleri (2 Soru):</strong> Organellerin görevleri, hücre zarı geçişleri ve temel sınıflandırma. 2-3 sayfalık bir özetle bu 2 net cebe konur.
                        </p>
                        <p>
                            <strong>Kimya - Periyodik Tablo ve Maddenin Halleri (2 Soru):</strong> Fiziksel ve kimyasal değişimler, periyodik sistem özellikleri. Çok rahat toplanan netlerdir.
                        </p>
                        <p>
                            <strong>Fizik - Isı, Sıcaklık ve Madde-Özkütle (2 Soru):</strong> Günlük hayat mantığıyla sorulur; ısı ile sıcaklık kavram farkı ve kaldırma kuvveti mantığı.
                        </p>

                        <div className="bg-slate-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-8">
                            <h3 className="font-bold text-slate-900 mb-2">Peki Diğer Konulara Hiç mi Bakılmayacak?</h3>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                Hedefiniz ilk 10.000 ise elbette tüm müfredatı taramanız gerekir. Ancak amacınız önce 60-70 net barajına sağlam basmaksa, önceliğiniz kesinlikle bu kemik liste olmalıdır. Buradaki sorularda fire vermemeye başladıktan sonra kalan zamanınızı detay konulara ayırabilirsiniz.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Bu Konuları Bitirdiğinizde Kaç Net Gelir?</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                Garanti konuları tamamlayıp alacağınız tahmini 55-65 neti hesaplama motorumuza girin ve güncel katsayılarla sıralamanızı canlı görün.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Tahmini Sıralamanızı Görün →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Rehberler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-net-artirma-taktikleri" className="p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                                    <p className="font-semibold text-emerald-900">TYT Net Artırma Taktikleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">60-70 bandında sıkışanlar için plato kırma yöntemleri.</p>
                                </Link>
                                <Link href="/blog/tyt-matematik-konulari" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">TYT Matematik Konuları Rehberi →</p>
                                    <p className="text-xs text-gray-600 mt-1">40 sorunun konu konu dağılımı ve çalışma öncelikleri.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
