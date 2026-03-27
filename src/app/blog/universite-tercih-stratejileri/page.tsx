import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Üniversite Tercih Stratejileri 2026: YÖK Atlas, 24 Tercih Matrisi ve OBP Uyarısı',
    description: 'Doğru tercih nasıl yapılır? YÖK Atlas kullanımı, 24 tercih matrisi, yerleştirme algoritması ve OBP kırılması uyarısı. 2026 YKS tercih rehberi.',
    keywords: 'üniversite tercih stratejisi, yök atlas, tercih matrisi, yks tercih 2026, obp kırılması, yerleştirme algoritması',
    alternates: { canonical: 'https://yksnethesapla.com/blog/universite-tercih-stratejileri' },
    openGraph: {
        title: 'Üniversite Tercih Stratejileri 2026: YÖK Atlas ve 24 Tercih Matrisi',
        description: 'Doğru tercih nasıl yapılır? YÖK Atlas, tercih matrisi ve OBP kırılması uyarısı.',
        type: 'article',
        publishedTime: '2026-02-21',
        url: 'https://yksnethesapla.com/blog/universite-tercih-stratejileri',
    },
}

export default function UniversiteTercihStratejileri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Tercih Stratejileri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Tercih</span>
                            <time className="text-gray-600">21 Şubat 2026</time>
                            <span className="text-gray-600">• 10 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Üniversite Tercih Stratejileri 2026
                        </h1>
                        <p className="text-xl text-gray-700">
                            Puanınız cebinizdeki paradır, tercih ise bu parayı en kârlı şekilde harcamaktır.
                            Doğru strateji olmadan en yüksek puan bile boşa gidebilir.
                        </p>
                    </header>

                    <div className="prose prose-lg max-w-none">

                        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Yerleştirme Algoritması Nasıl Çalışır?</h2>
                        <p className="text-gray-700 mb-4">
                            Önce yaygın bir yanlışı düzeltelim: <strong>&quot;Puanı düşük olanı üst sıraya yazınca puanı yüksek olanın önüne geçilir&quot;</strong> — bu tamamen yanlıştır.
                        </p>
                        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-6">
                            <h3 className="font-bold text-green-900 mb-2">✅ Gerçek Algoritma</h3>
                            <p className="text-gray-700 text-sm">
                                ÖSYM sistemi her adayı <strong>kendi listesindeki en üst tercihten başlayarak</strong> yerleştirmeye çalışır.
                                Bir programa yerleştiğinizde alt tercihleriniz otomatik iptal olur.
                                Listenizin sırası sadece <strong>sizin</strong> hangi programa önce yerleşeceğinizi belirler;
                                başka adayların sıralamasını etkilemez.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">YÖK Atlas ile Güncel 2026 Verileri</h2>
                        <p className="text-gray-700 mb-4">
                            Tercih yapmadan önce <strong>YÖK Atlas</strong> (yokatlas.yok.gov.tr) ve
                            <strong> Lisans Atlası</strong> araçlarını kullanın:
                        </p>
                        <div className="space-y-3 my-6">
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-900 mb-1">Adım 1 — Bölüm Ara</h3>
                                <p className="text-gray-700 text-sm">YÖK Atlas&apos;ta hedef bölümünüzü aratın. Son 3 yılın taban puanlarını ve sıralamalarını görün.</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-900 mb-1">Adım 2 — Kontenjan Kontrolü</h3>
                                <p className="text-gray-700 text-sm">Bölümün kontenjanı artmışsa taban puan düşer; azalmışsa yükselir. Bu trendi mutlaka inceleyin.</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <h3 className="font-bold text-blue-900 mb-1">Adım 3 — Mezun İstatistikleri</h3>
                                <p className="text-gray-700 text-sm">Lisans Atlası&apos;nda mezunların istihdam oranlarını ve ortalama maaşlarını karşılaştırın.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">24 Tercih Matrisi</h2>
                        <p className="text-gray-700 mb-4">
                            24 tercih hakkınızı üç gruba bölün:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-purple-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Tercih Sırası</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Strateji</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Açıklama</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="px-5 py-3 font-bold text-purple-700">1 – 6</td>
                                        <td className="px-5 py-3 font-medium">Hayal</td>
                                        <td className="px-5 py-3 text-sm text-gray-700">&quot;Gelmez ama olsa harika olur&quot; — puanınızın 10-20 puan üstündeki programlar</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="px-5 py-3 font-bold text-blue-700">7 – 18</td>
                                        <td className="px-5 py-3 font-medium">Gerçekçi</td>
                                        <td className="px-5 py-3 text-sm text-gray-700">&quot;Gelme ihtimali çok yüksek&quot; — puanınıza ±5 puan aralığındaki programlar</td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-3 font-bold text-green-700">19 – 24</td>
                                        <td className="px-5 py-3 font-medium">Sigorta</td>
                                        <td className="px-5 py-3 text-sm text-gray-700">&quot;Açıkta kalmamak için&quot; — puanınızın 15-30 puan altındaki, kesin tutacak programlar</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">⚠️ OBP Kırılması: Tercih Yapıp Gitmemenin Bedeli</h2>
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
                            <p className="text-gray-700">
                                Bir programa yerleşip <strong>kayıt yaptırırsanız</strong>, gelecek yıl tekrar sınava girerseniz
                                OBP katsayınız <strong>0,12&apos;den 0,06&apos;ya düşer.</strong> Bu, diploma notu 85 olan bir aday için
                                yaklaşık <strong>25 puan kayıp</strong> demektir. Tercih yaparken bu riski göz önünde bulundurun;
                                &quot;sırf yerleşeyim&quot; diye istemediğiniz bir programa kayıt yaptırmayın.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Puanınızı ve Sıralamanızı Hesaplayın</h2>
                            <p className="text-xl mb-6 text-blue-100">Hangi bölümlere yerleşebileceğinizi öğrenin</p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sıkça Sorulan Sorular</h2>
                        <div className="space-y-4 my-6">
                            <div className="border-b pb-4">
                                <h3 className="font-bold text-gray-900 mb-2">Kaç tercih yapmalıyım?</h3>
                                <p className="text-gray-700 text-sm">Tüm 24 hakkınızı kullanın. Boş bırakmak açıkta kalma riskini artırır.</p>
                            </div>
                            <div className="border-b pb-4">
                                <h3 className="font-bold text-gray-900 mb-2">Tercih sırasını değiştirebilir miyim?</h3>
                                <p className="text-gray-700 text-sm">Evet, tercih süresi bitene kadar istediğiniz kadar değişiklik yapabilirsiniz.</p>
                            </div>
                            <div className="pb-4">
                                <h3 className="font-bold text-gray-900 mb-2">Bölüm mü üniversite mi önemli?</h3>
                                <p className="text-gray-700 text-sm">Genellikle bölüm daha önemlidir. Sevmediğiniz bir bölümde başarılı olmak çok zordur.</p>
                            </div>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-puan-turleri" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">YKS Puan Türleri →</p>
                                </Link>
                                <Link href="/blog/obp-hesaplama" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    <p className="font-semibold text-green-900">OBP Hesaplama →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
