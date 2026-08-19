import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'OBP Nedir ve Nasıl Hesaplanır? Kırık OBP ve Katsayı Analizi 2027',
    description: 'YKS 2027 OBP hesaplama sistemi. Lise diploma notunun YKS yerleştirme puanına etkisi, kırık OBP cezası ve okul birinciliği avantajları.',
    keywords: 'obp nedir, obp nasıl hesaplanır, obp hesaplama 2027, kırık obp nedir, diploma notu yks etkisi, okul birinciliği kontenjanı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/obp-hesaplama' },
    openGraph: {
        title: 'OBP Nedir ve Nasıl Hesaplanır? Kırık OBP ve Katsayı Analizi 2027',
        description: 'Lise diploma notunun YKS yerleştirme puanına etkisinin teknik analizi.',
        type: 'article',
        publishedTime: '2026-02-24',
        modifiedTime: '2026-08-16',
        url: 'https://yksnethesapla.com/blog/obp-hesaplama',
    },
}

export default function OBPHesaplamaRehberi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                    <nav className="mb-8 text-sm text-slate-500 font-medium flex items-center space-x-2">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
                        <span>›</span>
                        <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                        <span>›</span>
                        <span className="text-slate-900">Teknik Rehber</span>
                    </nav>

                    <header className="mb-10">
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold tracking-wide uppercase">YKS Puanlama</span>
                            <time className="text-slate-500 text-sm font-medium">Son Güncelleme: 16 Ağustos 2026</time>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500 text-sm font-medium">Okuma Süresi: 6 dk</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                            OBP (Ortaöğretim Başarı Puanı) Nedir? 2027 Yerleştirme Sisteminde OBP Analizi
                        </h1>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed">
                            Birçok adayın sınav salonundan çıktıktan sonra fark ettiği, yerleştirme sıralamasını en az AYT kadar etkileyen faktör: Lise Diploma Notu. OBP'nin matematiksel gücünü keşfedin.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg prose-blue max-w-none text-slate-700 mt-8">
                        <p className="lead">
                            YKS'ye sadece harıl harıl test çözmek olarak bakıyorsanız, maalesef büyük resmi fena halde kaçırıyorsunuz demektir. Sınavda ham puanınız ne kadar yüksek gelirse gelsin, o üniversitenin kapısından içeri girmenizi sağlayacak asıl şey <strong>Y-Puan (Yerleştirme Puanı)</strong>dır. Ve tahmin edin bu puanın yaklaşık %12'sini ne oluşturuyor? Evet, lisede hocalara şirin gözükerek (veya gerçekten çok çalışarak) aldığınız Diploma Notunuz. Gelin şu OBP'nin matematiksel gücüne daha yakından bakalım.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Kafaları Karıştırmayan OBP Hesaplama Formülü
                        </h2>
                        <p>
                            ÖSYM sistemi aslında diploma notunuzu doğrudan puana eklemiyor, araya ufak bir matematiksel işlem sokuyor. Lise mezuniyet notunuz (yani o 100 üzerinden olan karnenizdeki sayı) önce 5 ile çarpılıp 500'lük sisteme çevriliyor. Sonra da yerleştirme katsayısı olan <strong>0.12</strong> ile çarpılıyor. "Hocam bu çok uzun, bana kısa yolunu söyle" diyenler için şöyle bir formülümüz var:
                        </p>
                        
                        <div className="bg-slate-900 rounded-xl p-6 my-8 text-center shadow-lg not-prose">
                            <p className="text-sm text-slate-400 mb-2 uppercase tracking-wider font-semibold">Kestirme Formül</p>
                            <p className="text-2xl font-bold text-white font-mono">
                                Diploma Notu × 0.6 = OBP Katkısı
                            </p>
                        </div>

                        <div className="overflow-x-auto my-8 not-prose rounded-xl shadow-sm border border-slate-200">
                            <table className="w-full text-left text-sm text-slate-600">
                                <thead className="bg-slate-50 text-slate-900 font-semibold uppercase text-xs">
                                    <tr>
                                        <th className="px-6 py-4 border-b">Diploma Notu</th>
                                        <th className="px-6 py-4 border-b text-center">Çarpan</th>
                                        <th className="px-6 py-4 border-b text-center">Eklenen Toplam Puan</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900">100</td>
                                        <td className="px-6 py-4 text-center">x 0.6</td>
                                        <td className="px-6 py-4 text-center text-emerald-600 font-bold">+ 60 Puan (Kral)</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900">90</td>
                                        <td className="px-6 py-4 text-center">x 0.6</td>
                                        <td className="px-6 py-4 text-center text-emerald-600 font-bold">+ 54 Puan</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900">80</td>
                                        <td className="px-6 py-4 text-center">x 0.6</td>
                                        <td className="px-6 py-4 text-center text-emerald-600 font-bold">+ 48 Puan</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900">60</td>
                                        <td className="px-6 py-4 text-center">x 0.6</td>
                                        <td className="px-6 py-4 text-center text-amber-600 font-bold">+ 36 Puan</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>
                            Yukarıdaki tabloya bakınca işin rengi belli oluyor. Diploma notu 90 olan bir arkadaş, diploma notu 70 olan bir rakibine sınava girmeden tam <strong>12 puan</strong> fark atıyor. "Ne olacak 12 puandan?" demeyin. O 12 puan, AYT sınavında ter dökerek çözeceğiniz neredeyse 4 tane çok zor matematik sorusuna veya TYT'de paragrafta boğulacağınız 9 Türkçe sorusuna denk geliyor. Yani lisede yatanlar, üniversite sınavında o farkı kapatmak için fazlasıyla mesai yapmak zorunda.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Mezunların Korkulu Rüyası: Kırık OBP Meselesi
                        </h2>
                        <p>
                            Eğer geçen yıl YKS sınavına girip puanınızla bir üniversite programına <strong>yerleştiyseniz</strong> (bu açıköğretim bile olabilir, hatta gidip kayıt yaptırmamış bile olabilirsiniz hiç fark etmez), bu yıl tekrar şansınızı denediğinizde ÖSYM size çok ciddi bir fatura keser. OBP katsayınız anında yarı yarıya tırpanlanır.
                        </p>
                        
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-6 not-prose">
                            <h3 className="text-base font-bold text-red-900 uppercase tracking-wider mb-2 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                Kırık OBP Ne Kadar Acıtır?
                            </h3>
                            <p className="text-sm text-red-800">
                                Normal şartlarda formülümüz neydi? <code>Diploma Notu × 0.6</code>. Eğer Kırık OBP yemişseniz bu formül acımasızca <code>Diploma Notu × 0.3</code> oluyor.
                                Şöyle anlatalım: Diploma notunuz 90. Normalde 54 puan cukka yapacakken <strong>sadece 27 puan</strong> alıyorsunuz. Uçup giden tam 27 puan var. Yani rakiplerinize durduk yere 9 tane AYT Matematik neti hediye ettiniz bile.
                            </p>
                        </div>

                        <p className="font-semibold text-slate-900 mb-2">Hangi durumlarda Kırık OBP uygulanmaz?</p>
                        <ul className="list-disc pl-6 space-y-2 mb-8">
                            <li>Sınava girdiniz ama tercih listesi vermediniz (Kurtuldunuz).</li>
                            <li>Tercih listesi verdiniz ama sıralamanız yetmediği için hiçbir yere yerleşemediniz (Yine kurtuldunuz).</li>
                            <li>Sadece özel yetenek sınavıyla bir yere girdiyseniz (Bazı istisnalar var ama genelde kurtuluyorsunuz).</li>
                        </ul>

                        <div className="relative overflow-hidden bg-slate-900 rounded-2xl p-8 my-12 text-center border border-slate-800 shadow-2xl not-prose">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Diploma Notun Seni Vezir Mi Edecek Rezil Mi?</h3>
                            <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-sm">
                                Kafanda kurup durduğuna değmez. Simülatörümüze deneme netlerini ve o çok güvendiğin (ya da korktuğun) diploma notunu gir. Y-Puan sıralamanda OBP'nin seni kaç bin kişi öne zıplatacağını veya kaç bin kişi geriye atacağını hemen gör.
                            </p>
                            <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl focus:ring-4 focus:ring-slate-500 focus:outline-none">
                                OBP ve Sıralamanı Hemen Test Et →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}


