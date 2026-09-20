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
                        <p className="text-lg leading-relaxed font-medium text-gray-800">
                            Temmuz sabahı saat 07:00. ÖSYM sonuç ekranına T.C. kimlik numaranı ve şifreni giriyorsun. Kalbin ağzında atıyor. Sayfa açılıyor: Sayısal ham sıralaman <strong>31.420</strong>. İçinden derin bir &quot;oh&quot; çekip seviniyorsun; çünkü hedeflediğin o diş hekimliği ya da iyi bir mühendislik için bu derece fazlasıyla yeterli.
                        </p>
                        
                        <p>
                            Sonra gözün bir alt satıra kayıyor: <em>&quot;Yerleştirme Sıralaması: 48.910&quot;</em>.
                        </p>

                        <p>
                            Bir anda boğazın düğümleniyor. Tek bir yanlış soru çözmeden, sınav sabahı kimseye tek puan kaptırmadan, sadece lisedeki 4 yıllık yazılı notların yüzünden tam <strong>17 bin 500 kişi</strong> bir saniyede önünden geçip gidiyor.
                        </p>

                        <p>
                            İşte Ortaöğretim Başarı Puanı (OBP), YKS hazırlığının en çok hafife alınan ama Temmuz günü faturası en acımasız kesilen gizli aktörüdür. Bu rehberde kuru formül ezberletmeyeceğim; lisedeysen bu puanı nasıl kurtaracağını, mezunsan açılan bu makası sınav masasında kaç netle kapatabileceğini en açık haliyle konuşacağız.
                        </p>

                        <InteractiveOBPCalculator />

                        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 my-8 shadow-md">
                            <span className="text-xs uppercase tracking-wider text-blue-400 font-bold block mb-1">
                                Gerçek Sınav Vakası: 2024 Eşit Ağırlıkta Yaşanan OBP Kırılması
                            </span>
                            <h3 className="text-xl font-bold text-white mb-3">
                                Kerem ve Melis&apos;in Hikayesi: Aynı Netler, 22 Bin Kişilik Uçurum
                            </h3>
                            <p className="text-sm text-slate-300 leading-relaxed mb-3">
                                2024 YKS&apos;de kütüphanede yan yana masalarda çalışan iki arkadaş: Kerem ve Melis. İkisi de TYT&apos;de 78 net, AYT Eşit Ağırlıkta 54 net yaptı. Ham puanları neredeyse birbirinin kopyasıydı.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono pt-2 border-t border-slate-800">
                                <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                                    <p className="text-emerald-400 font-bold mb-1">Melis (Diploma Notu: 96)</p>
                                    <p>OBP Katkısı: +57,60 Puan</p>
                                    <p className="text-white font-bold text-sm mt-1">Yerleştirme Sırası: 14.800</p>
                                    <p className="text-slate-400 mt-1">Sonuç: Ankara Hukuk Fakültesi</p>
                                </div>
                                <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                                    <p className="text-rose-400 font-bold mb-1">Kerem (Diploma Notu: 71)</p>
                                    <p>OBP Katkısı: +42,60 Puan</p>
                                    <p className="text-white font-bold text-sm mt-1">Yerleştirme Sırası: 36.400</p>
                                    <p className="text-slate-400 mt-1">Sonuç: Devlet Hukuk Baraj Dışı</p>
                                </div>
                            </div>
                            <p className="text-xs text-amber-300 mt-3">
                                💡 Aradaki 15 puanlık OBP farkı, sınav masasında Kerem&apos;in Melis&apos;ten tam 5 tane fazla AYT Matematik sorusu çözmesini gerektiriyordu.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            OBP Hesabının Mantığı: Aslında Formül Çok Basit
                        </h2>
                        <p>
                            Milli Eğitim Bakanlığı e-Okul sistemindeki 9, 10, 11 ve 12. sınıf yıl sonu başarı puanlarının aritmetik ortalaması alınır. Yani 4 yılın yazılıları, sözlüleri ve performans ödevleri tek bir diploma notuna dönüşür (0-100 arası).
                        </p>
                        <p>
                            ÖSYM bu notu alır ve şu iki adımı uygular:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Diploma notunu 5 ile çarparak 500 üzerinden OBP&apos;ye çevirir (Diploma notun 80 ise OBP&apos;n 400 olur).</li>
                            <li>Bu 400 puanı 0,12 yerleştirme katsayısıyla çarpar ve ham puanının üzerine ekler: <strong>400 × 0,12 = 48 puan.</strong></li>
                        </ol>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl my-6">
                            <h3 className="font-bold text-blue-950 text-base mb-2">Kestirme Formül: Diploma Notunu Doğrudan 0,6 ile Çarp</h3>
                            <p className="text-sm text-slate-700 mb-2">
                                5 ile çarpıp sonra 0,12 ile çarpmakla uğraşma. Diploma notunu al, doğrudan <strong>0,6</strong> ile çarp. Çıkan sayı sınav puanına eklenecek net puandır.
                            </p>
                            <p className="text-sm font-mono text-blue-900 bg-white p-3 rounded-lg border border-blue-200">
                                Diploma Notu 92 ise: 92 × 0,6 = <strong>55,20 Puan</strong><br />
                                Diploma Notu 74 ise: 74 × 0,6 = <strong>44,40 Puan</strong>
                            </p>
                            <p className="text-xs text-slate-600 mt-2">
                                Aradaki 10,8 puanlık fark, AYT&apos;de yaklaşık 3,5 tane fazladan matematik neti demektir.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Diploma Notuna Göre Masa Başında Başlama Çizelgesi
                        </h2>
                        <p>
                            Aşağıdaki tabloyu iyi incele. Sınav sabahı kalem açtığın anda rakiplerine göre ne kadar önde veya geride başladığını gösteriyor:
                        </p>
                        
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full border border-gray-200 rounded-xl text-sm overflow-hidden shadow-xs">
                                <thead className="bg-gray-100 text-gray-800">
                                    <tr>
                                        <th className="py-3 px-4 text-left font-semibold border-b">Diploma Notu</th>
                                        <th className="py-3 px-4 text-center font-semibold border-b">OBP Değeri (×5)</th>
                                        <th className="py-3 px-4 text-center font-semibold border-b">YKS Ek Puanı (×0,6)</th>
                                        <th className="py-3 px-4 text-left font-semibold border-b">Masadaki Psikolojik Durum</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-gray-700">
                                    <tr className="bg-rose-50/60">
                                        <td className="py-3 px-4 font-bold text-red-600">60 - 69 (Kritik Düşük)</td>
                                        <td className="py-3 px-4 text-center">300 - 345</td>
                                        <td className="py-3 px-4 text-center font-bold text-red-700">36,0 - 41,4 Puan</td>
                                        <td className="py-3 px-4 text-xs">Sınava rakiplerinden en az 6-7 AYT neti geride başlama baskısı.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-bold text-amber-600">70 - 79 (Orta Dilim)</td>
                                        <td className="py-3 px-4 text-center">350 - 395</td>
                                        <td className="py-3 px-4 text-center font-bold">42,0 - 47,4 Puan</td>
                                        <td className="py-3 px-4 text-xs">Yığılma bölgesinde 8-12 bin adayın gerisine düşme riski.</td>
                                    </tr>
                                    <tr className="bg-blue-50/50">
                                        <td className="py-3 px-4 font-bold text-blue-600">80 - 89 (Güvenli Alan)</td>
                                        <td className="py-3 px-4 text-center">400 - 445</td>
                                        <td className="py-3 px-4 text-center font-bold text-blue-700">48,0 - 53,4 Puan</td>
                                        <td className="py-3 px-4 text-xs">Ham sıralamayı neredeyse birebir koruyan dengeli eşik.</td>
                                    </tr>
                                    <tr className="bg-emerald-50/70">
                                        <td className="py-3 px-4 font-bold text-emerald-700">90 - 99 (Kaldıraç)</td>
                                        <td className="py-3 px-4 text-center">450 - 495</td>
                                        <td className="py-3 px-4 text-center font-bold text-emerald-800">54,0 - 59,4 Puan</td>
                                        <td className="py-3 px-4 text-xs">Ham sıralamayı 5 bin ila 15 bin kişi ileriye fırlatan dev avantaj.</td>
                                    </tr>
                                    <tr className="bg-indigo-100 font-bold text-indigo-950">
                                        <td className="py-3 px-4">100 (Kusursuz Tavan)</td>
                                        <td className="py-3 px-4 text-center">500</td>
                                        <td className="py-3 px-4 text-center text-indigo-700">60,00 Puan</td>
                                        <td className="py-3 px-4 text-xs">YKS yerleştirme sisteminin verebileceği en yüksek yasal tavan.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Kırık OBP Felaketi: Hangi Durumda Puanın Yarı Yarıya Silinir?
                        </h2>
                        <p>
                            Tercih döneminde rehberlik servislerinde en çok duyduğumuz o tehlikeli cümle: <em>&quot;Aman hocam boş kalmayayım, şurayı 24. sıraya yazayım, gelirse de gitmem seneye tekrar hazırlanırım.&quot;</em>
                        </p>
                        <p>
                            İşte o tek bir satır, ertesi yılki sınav hayatını karartmaya yeter. ÖSYM kuralı nettir:
                        </p>
                        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl my-4 text-sm text-red-950">
                            <strong>ÖSYM Kuralı:</strong> Merkezi yerleştirmede örgün veya açıköğretim bir ön lisans ya da lisans programına yerleştirildiğiniz an (ister üniversiteye gidip kayıt yaptırın, ister kapısından bile geçmeyin), ertesi yılki OBP katsayınız 0,12&apos;den <strong>0,06&apos;ya düşürülür</strong>.
                        </div>
                        <p>
                            Bunun rakamsal karşılığı şudur: Diploma notun 90 ise, normalde gelecek 54 puan yerine sana sadece <strong>27 puan</strong> verilir. Buharlaşan o 27 puan, seni 50 bininci olduğun bir sınavda bir anda 90 bine fırlatır! Sınav masasında 27 puanı telafi etmek için rakiplerinden en az 9-10 tane fazladan AYT sorusu çözmen gerekir.
                        </p>

                        <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">
                            Hangi Durumlarda OBP Kesinlikle Kırılmaz?
                        </h3>
                        <ul className="list-disc pl-6 space-y-2 text-sm">
                            <li><strong>Tercih yaptın ama kazanamadın:</strong> Puanın zerre kırılmaz.</li>
                            <li><strong>Sınava girdin ama hiç tercih göndermedin (mezuna kaldın):</strong> Puanın orijinal katsayıyla korunur.</li>
                            <li><strong>Yetenek sınavıyla yerleştin:</strong> Özel yetenekle öğrenci alan programlar merkezi yerleştirme cezasını tetiklemez (kılavuzdaki istisnalar hariç).</li>
                            <li><strong>Aradan 2 sınav dönemi geçti:</strong> Ceza süresi sadece 1 yıldır. 2025&apos;te yerleşen adayın puanı 2026&apos;da kırılır; 2027 YKS&apos;de katsayı tekrar orijinal 0,12&apos;ye geri döner.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Okul Birinciliği: Sadece Mezun Olduğun Yıl Geçerli Olan Süper Güç
                        </h2>
                        <p>
                            Liseyi okul birincisi olarak bitirdiysen, üniversitelerin kontenjan tablolarında sadece birincilere ayrılmış kontenjanlar bulunur. Normalde 40 binle kapatan bir tıp fakültesine 55 bindeki okul birincisi girebilir.
                        </p>
                        <p className="text-amber-900 bg-amber-50 p-4 rounded-xl border border-amber-200 text-sm">
                            <strong>⚠️ Kritik Hatırlatma:</strong> Okul birinciliği kontenjanı <em>yalnızca mezun olduğun yıl</em> için geçerlidir. Mezuna kaldığın an bu hak tamamen yanar; ertesi yıl normal bir aday gibi genel sıralamadan yarışırsın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Şu Anki Durumuna Göre Ne Yapmalısın?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4 my-6">
                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 text-sm mb-2">📌 9, 10, 11 veya 12. Sınıftaysan:</h3>
                                <p className="text-xs text-slate-700 leading-relaxed">
                                    Yazılı sınavları ve sözlüleri sakın boşlama. &quot;Nasıl olsa TYT çalışıyorum&quot; diyerek okul sınavını 60&apos;ta bırakmak, gelecekteki kendine borç takmaktır. Okul ortalamana katacağın her 5 puan, sınav sabahı cebine 2 bedava AYT neti koymakla eşdeğerdir.
                                </p>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                                <h3 className="font-bold text-slate-900 text-sm mb-2">📌 Mezundaysan ve Diploma Notun Düşükse:</h3>
                                <p className="text-xs text-slate-700 leading-relaxed">
                                    Geçmişi değiştiremezsin, o yüzden canını sıkma. Yapacağın tek şey gerçekçi olmak: Hedefin 30 binse, sanki 20 bine oynuyormuş gibi haftada fazladan 3-4 AYT neti çıkaracak bir branş denemesi disiplini kurmaktır. Sınav masasında doğru stratejiyle her OBP makası kapatılabilir.
                                </p>
                            </div>
                        </div>

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
