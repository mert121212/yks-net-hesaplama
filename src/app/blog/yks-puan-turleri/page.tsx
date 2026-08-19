import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS Puan Türleri (SAY, EA, SÖZ, DİL) ve Bölümleri 2027',
    description: 'YKS puan türleri nelerdir? Hangi bölüm hangi puan türüyle (SAY, EA, SÖZ) alıyor? Puan türlerinin katsayıları ve test ağırlıkları hakkında bilmen gerekenler.',
    keywords: 'yks puan türleri, say bölümleri, ea bölümleri, söz bölümleri, tyt ile alan bölümler, ayt puan türleri',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-puan-turleri' },
    openGraph: {
        title: 'YKS Puan Türleri: Hangi Bölüm İçin Hangi Testi Çözmelisin?',
        description: 'SAY, EA, SÖZ ve DİL puan türlerinin şifreleri ve popüler bölümlerin listesi.',
        type: 'article',
        publishedTime: '2026-02-06',
        modifiedTime: '2026-08-19',
        url: 'https://yksnethesapla.com/blog/yks-puan-turleri',
    },
}

export default function YKSPuanTurleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Puan Türleri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Temel Bilgi</span>
                            <time className="text-gray-600">19 Ağustos 2026</time>
                            <span className="text-gray-600">• 10 dk okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TYT, SAY, EA, SÖZ: Hangi Sınav Hangi Kapıyı Açıyor?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Psikoloji okumak istiyorsan Fen çözmene gerek var mı? Bilgisayar Mühendisliği için Edebiyat netinin bir önemi var mı? Gel şu karmaşık puan türü işini temelli çözelim.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Ağustos ayında tercih haftası geldiğinde, eline o kalın ÖSYM tercih kılavuzunu aldığında bölümlerin yanında &quot;SAY&quot;, &quot;EA&quot;, &quot;TYT&quot; gibi kısaltmalar göreceksin. Sınava hazırlanırken hangi hedefe doğru koştuğunu bilmezsen, sınavda boşuna vakit kaybedersin. 
                        </p>
                        
                        <p>
                            Geçen sene bir öğrencim vardı, çocuk Hukuk istiyordu (Yani EA Puanı lazım). Denemelerde AYT Matematikte takılınca &quot;bari puanım artsın&quot; deyip Fizik-Kimya çözmeye başlamış. Sınav sonucunda çok yüksek bir SAY (Sayısal) puanı geldi ama EA puanı düşük kaldığı için Hukuk fakültesine giremedi. O fizik netlerinin hukuka zerre kadar faydası olmadı.
                        </p>

                        <p>
                            Bu hataya düşmemek için hangi puan türünün hangi bölüme götürdüğünü çok iyi bilmen lazım.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. TYT Puanı (Ön Lisans ve Temel Puan)
                        </h2>
                        <p>
                            TYT puanı, cumartesi günü girdiğin ilk sınavın puanıdır. Sadece TYT netlerinle hesaplanır. 
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Sınav:</strong> Sadece Cumartesi günkü 120 soruluk TYT testi.</li>
                            <li><strong>Kullanım Yeri:</strong> 2 yıllık meslek yüksekokulu bölümleri (Ön Lisans), Polis Meslek Yüksekokulları (PMYO), Özel Yetenek sınavıyla alan bölümlerin ön elemesi (Besyo, Konservatuvar).</li>
                            <li><strong>Popüler Bölümler:</strong> Bilgisayar Programcılığı, İlk ve Acil Yardım (Paramedik), Aşçılık, Adalet, Anestezi.</li>
                        </ul>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
                            <p className="text-sm text-blue-800">
                                <strong>Dikkat:</strong> TYT puanıyla 4 yıllık (Lisans) hiçbir bölüme GİREMEZSİN. 4 yıllık istiyorsan pazar günü AYT&apos;ye girmek zorundasın. (Pazar günkü AYT puanının içine, cumartesi günkü TYT başarın %40 oranında katılır.)
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. SAY Puan Türü (Sayısal)
                        </h2>
                        <p>
                            Türkiye&apos;nin en çok tercih edilen ve rekabetin en acımasız olduğu puan türüdür. Sayısalcıların pazar günü Edebiyat veya Tarih çözmesine gerek yoktur.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Çözülmesi Gereken Testler:</strong> AYT Matematik (40 soru) ve AYT Fen Bilimleri (40 soru).</li>
                            <li><strong>Popüler Bölümler:</strong> Tıp, Diş Hekimliği, Eczacılık, Tüm Mühendislikler (Bilgisayar, Yazılım, Endüstri, Makine vs.), Mimarlık, Hemşirelik, Veterinerlik, Matematik.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. EA Puan Türü (Eşit Ağırlık)
                        </h2>
                        <p>
                            &quot;Matematiğim var ama fizikle kimyayla uğraşamam, ezberim de fena değil&quot; diyenlerin limanıdır. Stratejik çalışanlar için en çabuk yükselinecek puan türüdür.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Çözülmesi Gereken Testler:</strong> AYT Matematik (40 soru) ve AYT Türk Dili Edebiyatı - Sosyal Bilimler 1 (40 soru).</li>
                            <li><strong>Popüler Bölümler:</strong> Hukuk, Psikoloji, Psikolojik Danışmanlık ve Rehberlik (PDR), İşletme, İktisat, Sınıf Öğretmenliği, Yönetim Bilişim Sistemleri (YBS).</li>
                        </ul>
                        <p className="text-sm text-gray-500 italic">
                            * Yönetim Bilişim Sistemleri son yılların en parlayan EA bölümüdür, puanları hızla yükselmektedir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. SÖZ Puan Türü (Sözel)
                        </h2>
                        <p>
                            Matematikten tamamen kaçış bölgesidir. (TYT&apos;de yapacağınız birkaç matematik neti sizi Sözel sıralamasında binlerce kişi öne atar, o ayrı).
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Çözülmesi Gereken Testler:</strong> AYT Türk Dili Edebiyatı - Sosyal Bilimler 1 (40 soru) ve AYT Sosyal Bilimler 2 (40 soru).</li>
                            <li><strong>Popüler Bölümler:</strong> Özel Eğitim Öğretmenliği, Türkçe Öğretmenliği, Tarih, Coğrafya, İlahiyat, Radyo Televizyon ve Sinema, Gastronomi, Halkla İlişkiler.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            5. DİL Puan Türü (Yabancı Dil)
                        </h2>
                        <p>
                            Pazar günü öğleden sonra yapılan ayrı bir sınavdır (YDT). 
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Çözülmesi Gereken Testler:</strong> Yabancı Dil Testi (80 Soru - İngilizce, Almanca, Fransızca, Arapça veya Rusça).</li>
                            <li><strong>Popüler Bölümler:</strong> İngilizce Öğretmenliği, Mütercim Tercümanlık, Turizm Rehberliği, İngiliz Dili ve Edebiyatı.</li>
                        </ul>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
                            <h3 className="font-bold text-amber-900 mb-2">Joker Taktik: Sınavda Alan Değiştirme</h3>
                            <p className="text-sm text-amber-800">
                                Diyelim ki Eşit Ağırlık öğrencisisin ve sınavda süreni çok iyi kullandın, Edebiyat ve Matematik testlerini 130 dakikada bitirdin. Geriye 50 dakikan var. Gidip AYT Fen çözebilirsin! Sistem senin Matematik ve Fen netlerini birleştirir, sana bir de <strong>SAY (Sayısal) Puanı</strong> çıkarır. Veya Sosyal-2 testini çözersin, sana bir de <strong>SÖZ (Sözel) Puanı</strong> çıkarır. Hangi puanla nereyi kazanabiliyorsan orayı tercih edersin. Sınavda şansını denemekten korkma.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Tüm Puan Türlerini Aynı Anda Hesapla</h3>
                            <p className="text-blue-100 mb-6">
                                Aracımıza TYT ve AYT netlerini girdiğinde, arka planda karmaşık katsayı hesaplamalarını yapar ve SAY, EA, SÖZ puanlarını anında gösterir.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Hemen Puanını Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
