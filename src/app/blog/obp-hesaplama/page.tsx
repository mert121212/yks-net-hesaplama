import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import InteractiveOBPCalculator from '@/components/InteractiveOBPCalculator'

export const metadata: Metadata = {
    title: 'OBP Nedir ve Nasıl Hesaplanır? Kırık OBP ve Katsayı Analizi 2027',
    description: 'Lise diploma notunun YKS yerleştirme puanına etkisi, OBP hesaplama formülü, kırık OBP kesintisi ve okul birinciliği kontenjanı hakkında gerçek rehber.',
    keywords: 'obp nedir, obp nasıl hesaplanır, obp hesaplama, kırık obp, diploma notu yks, okul birinciliği kontenjanı, yks yerleştirme puanı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/obp-hesaplama' },
    openGraph: {
        title: 'OBP Nedir ve Nasıl Hesaplanır? Lise Diploma Notunun YKS\'ye Etkisi',
        description: 'Diploma notu sıralamanızı nasıl etkiler? Kırık OBP cezası, katsayı hesaplama ve gerçek sıralama simülasyonları.',
        type: 'article',
        publishedTime: '2026-02-24',
        modifiedTime: '2026-02-27',
        url: 'https://yksnethesapla.com/blog/obp-hesaplama',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'OBP Nedir ve Nasıl Hesaplanır? Kırık OBP Rehberi'
            }
        ],
    },
}

export default function OBPHesaplamaRehberi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="OBP Nedir ve Nasıl Hesaplanır? Kırık OBP ve Katsayı Analizi 2027" 
                    description="Lise diploma notunun YKS yerleştirme puanına etkisi, OBP hesaplama formülü, kırık OBP kesintisi ve okul birinciliği kontenjanı hakkında gerçek rehber."
                    datePublished="2026-02-24"
                    dateModified="2026-02-27"
                    url="https://yksnethesapla.com/blog/obp-hesaplama"
                    keywords={['obp nedir', 'obp nasıl hesaplanır', 'obp hesaplama', 'kırık obp', 'diploma notu yks', 'okul birinciliği kontenjanı']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">OBP Hesaplama Rehberi</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-24">24 Şubat 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            OBP (Diploma Notu) Sıralamanızı Nasıl Değiştirir? Kırık OBP ve Katsayı Gerçeği
                        </h1>
                        <p className="text-xl text-gray-600">
                            Aynı netleri yapan iki adaydan biri hayalindeki fakülteye girerken diğeri neden 20 bin kişi geriye düşer? Ortaöğretim Başarı Puanının matematiksel anatomisi ve kırık OBP kuralı.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS sonuçları açıklandığında adayların yaşadığı en büyük şok genellikle ham puan sıralaması ile yerleştirme sıralaması arasındaki o can yakıcı makastır.
                        </p>
                        
                        <p>
                            Öğrenci sınavda elinden geleni yapmış; ham sıralamada örneğin Sayısalda 28 bininci olmuş. Ayların emeği karşılık buldu diye sevinirken gözünü bir alt satırdaki &quot;Yerleştirme Sıralamaları&quot;na çeviriyor: 41 bin.
                        </p>

                        <p>
                            Tek bir sınav sorusu bile çözmeden, sadece lise yıllarındaki yazılı notları yüzünden 13 bin kişi birden geriye düşmek gerçekten ağır bir darbe. İşte Ortaöğretim Başarı Puanı (OBP), YKS hazırlığının en çok ihmal edilen ama sonuç ekranında faturası en ağır çıkan başlığıdır.
                        </p>

                        <InteractiveOBPCalculator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            OBP Nasıl Hesaplanır? Formülü Çok Basit
                        </h2>
                        <p>
                            Milli Eğitim Bakanlığı sistemindeki 9, 10, 11 ve 12. sınıf yıl sonu ağırlıklı not ortalamanız toplanır ve dörde bölünür. Çıkan sonuç sizin 100 üzerinden lise mezuniyet notunuzdur.
                        </p>
                        <p>
                            ÖSYM bu notu alır ve iki aşamalı bir işlem uygular:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Notunuzu önce 5 ile çarparak 500&apos;lük sisteme çevirir. (Diploma notunuz 80 ise OBP&apos;niz 400 olur.)</li>
                            <li>Bu puanı genel yerleştirme katsayısı olan 0,12 ile çarparak ham puanınıza ekler.</li>
                        </ol>
                        
                        <div className="bg-slate-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-6">
                            <h3 className="font-bold text-slate-900 text-lg mb-2">İşin Pratik Hesabı: Doğrudan 0,6 ile Çarpın</h3>
                            <p className="text-base text-slate-700 mb-2">
                                Önce 5 ile çarpıp sonra 0,12 ile çarpmak matematikte doğrudan <strong>0,6</strong> ile çarpmak demektir.
                            </p>
                            <p className="text-sm font-mono text-blue-900 bg-blue-50 p-3 rounded border border-blue-200">
                                YKS Ek Puanınız = Lise Diploma Notunuz × 0,6
                            </p>
                            <p className="text-sm text-slate-600 mt-2">
                                Diploma notunuz 90 ise: 90 × 0,6 = <strong>54 tam puan</strong> gelir. Diploma notunuz 70 ise: 70 × 0,6 = <strong>42 puan</strong> gelir. Aradaki 12 puanlık fark, sınava başlamadan önce cebinizden eksilen puandır.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Masa Başında Eksilen Netler
                        </h2>
                        <p>
                            Sınavda 12 puanın ne manaya geldiğini hesaplayalım: Sayısal veya Eşit Ağırlıkta 1 AYT Matematik neti yaklaşık 2,8 ile 3,1 puan kazandırır.
                        </p>
                        <p>
                            Bu da şu demek: 12 puanlık OBP farkı, sınav sabahı rakibinizin sizden yaklaşık 4 tane AYT Matematik sorusu önde başlaması demektir. Lise ortalaması 95 olan bir aday, sizden 4 AYT sorusu daha az yapsa bile yerleştirme listesinde sizinle aynı sıraya gelebilir.
                        </p>
                        
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                                <thead className="bg-gray-100 text-gray-800">
                                    <tr>
                                        <th className="py-3 px-4 text-left font-semibold border-b">Diploma Notu</th>
                                        <th className="py-3 px-4 text-center font-semibold border-b">OBP (×5)</th>
                                        <th className="py-3 px-4 text-center font-semibold border-b">YKS&apos;ye Katkısı (×0,6)</th>
                                        <th className="py-3 px-4 text-left font-semibold border-b">Sınavdaki Karşılığı</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-gray-700">
                                    <tr>
                                        <td className="py-3 px-4 font-bold text-red-600">65 (Düşük)</td>
                                        <td className="py-3 px-4 text-center">325</td>
                                        <td className="py-3 px-4 text-center font-bold">39,00 puan</td>
                                        <td className="py-3 px-4">Dezavantajlı başlangıç çizgisi</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-3 px-4 font-bold text-amber-600">75 (Orta)</td>
                                        <td className="py-3 px-4 text-center">375</td>
                                        <td className="py-3 px-4 text-center font-bold">45,00 puan</td>
                                        <td className="py-3 px-4 text-green-700 font-semibold">+2 AYT neti avantajı (+6 puan)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-bold text-blue-600">85 (İyi)</td>
                                        <td className="py-3 px-4 text-center">425</td>
                                        <td className="py-3 px-4 text-center font-bold">51,00 puan</td>
                                        <td className="py-3 px-4 text-green-700 font-semibold">+4 AYT neti avantajı (+12 puan)</td>
                                    </tr>
                                    <tr className="bg-green-50">
                                        <td className="py-3 px-4 font-bold text-green-700">95 (Çok İyi)</td>
                                        <td className="py-3 px-4 text-center">475</td>
                                        <td className="py-3 px-4 text-center font-bold">57,00 puan</td>
                                        <td className="py-3 px-4 text-green-700 font-semibold">+6 AYT neti avantajı (+18 puan)</td>
                                    </tr>
                                    <tr className="bg-emerald-100">
                                        <td className="py-3 px-4 font-bold text-emerald-800">100 (Kusursuz)</td>
                                        <td className="py-3 px-4 text-center">500</td>
                                        <td className="py-3 px-4 text-center font-bold">60,00 puan</td>
                                        <td className="py-3 px-4 text-emerald-800 font-bold">+7 AYT neti değerinde tavan sermaye (+21 puan)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Kırık OBP Cezası: Hangi Durumda Puan Yarı Yarıya Düşer?
                        </h2>
                        <p>
                            Tercih döneminde yapılan en pahalı hata: &quot;Nasıl olsa gitmem, açıkta kalmayayım diye listeme yazayım&quot; düşüncesidir.
                        </p>
                        <p>
                            ÖSYM kılavuzu son derece açıktır: Merkezi yerleştirmede örgün veya açıköğretim herhangi bir ön lisans ya da lisans programına yerleştirildiğiniz anda (kayıt yaptırsanız da yaptırmasanız da), ertesi yıl sınava girdiğinizde OBP çarpım katsayınız 0,12&apos;den <strong>0,06&apos;ya indirilir</strong>.
                        </p>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-6">
                            <h3 className="font-bold text-red-900 mb-2">Puan Kırılmasının Ağır Faturası</h3>
                            <p className="text-sm text-red-800 mb-3">
                                Diyelim ki diploma notunuz 90. Normalde 54 puan eklenmesi gerekirken, puan kırıldığında hanenize sadece <strong>27 puan</strong> eklenir.
                            </p>
                            <p className="text-sm text-red-950 font-bold">
                                Buharlaşan o 27 puan, 40 bin ile 90 bin bandında yarışan bir adayı bir anda 35-45 bin kişi geriye fırlatır. Bunu sınav masasında telafi etmek için rakiplerinizden fazladan en az 8-9 tane AYT neti çıkarmanız gerekir.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Peki Hangi Durumlarda Puan Kırılmaz?
                        </h2>
                        <p>
                            Gereksiz panik yapmamak için kuralı iyi bilmek gerekir:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Tercih yaptınız ama hiçbir programa yerleşemediniz: Puanınız kesinlikle kırılmaz.</li>
                            <li>Sınava girdiniz ama hiç tercih bildiriminde bulunmadınız: Puan kırılmaz.</li>
                            <li>Özel yetenek sınavıyla öğrenci alan bir programa yerleştiniz: Merkezi yerleştirme puanınız kırılmaz (istisnai durumlar kılavuzda belirtilir).</li>
                            <li>Bir bölüme yerleşmenizin üzerinden tam 2 sınav dönemi geçti: Ceza süresi 1 yıldır. 2025&apos;te yerleşen adayın puanı 2026&apos;da kırılır, 2027 YKS&apos;de ise katsayı tekrar orijinal haline (0,12) döner.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Okul Birinciliği Kontenjanı: Sadece Mezun Olduğunuz Yıl Geçerli
                        </h2>
                        <p>
                            Lise birincileri için üniversitelerin ayırdığı kontenjan, sıralamanızın çok ötesindeki bölümlere yerleşmenizi sağlayabilecek güçlü bir avantajdır.
                        </p>
                        <p>
                            Ancak dikkat: Bu hak yalnızca mezun olduğunuz yıl geçerlidir. &quot;Nasıl olsa birinciliğim var, bu sene mezuna kalıp seneye ilk 5 bine oynayayım&quot; derseniz, ertesi yıl o birincilik kontenjanı hakkınız tamamen kaybolur ve genel sıralama havuzundan değerlendirilirsiniz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Şu Andan İtibaren Ne Yapmalısınız?
                        </h2>
                        <p>
                            Lisedeyseniz: Yazılı sınavları ve performans notlarını hafife almayın. Oradan toplayacağınız her 5 puan, seneye sınav salonunda ter dökeceğiniz 2 AYT sorusuna bedeldir.
                        </p>
                        <p>
                            Mezundaysanız ve diploma notunuz düşükse: Moralinizi bozmayın, geçmişi değiştiremezsiniz. Yapılacak tek şey, rakiplerinizden 3-4 net daha fazla yapacak bir çalışma disiplini kurmaktır. Doğru çalışmayla aradaki puan farkı pekala kapatılır.
                        </p>
                        <p>
                            Ve en önemlisi: Tercih yaparken asla ve asla gitmeyeceğiniz bir bölümü listenize yazmayın. Bir anlık acele yüzünden geleceğinizi kırık OBP faturasıyla riske atmayın.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Kendi Diploma Notunuzun Net Karşılığını Öğrenin</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                Hesaplama motorumuza diploma notunuzu ve kırık OBP bilginizi girerek yerleştirme puanınızın ve tahmini sıralamanızın nasıl değiştiğini hemen test edin.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                OBP ile Sıralama Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Rehberler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">1 Net Kaç Kişi Öne Atar? →</p>
                                    <p className="text-xs text-gray-600 mt-1">Yığılma bölgelerinde tek bir netin sıralama çarpanı analizi.</p>
                                </Link>
                                <Link href="/blog/universite-tercih-stratejileri" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">Üniversite Tercih Stratejileri →</p>
                                    <p className="text-xs text-gray-600 mt-1">Ölü tercih yapmadan 24 tercih hakkını dengeli kullanma rehberi.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
