import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'TYT\'de Kesin Çıkacak "Altın" Konular 2027 | Zaman Kazanmanın Sırrı',
    description: 'TYT matematik en çok çıkan konular, TYT Türkçe kesin çıkan konular. YKS son aylar ne çalışmalı? Enerjini doğru yere harca, netlerini hızla artır.',
    keywords: 'tyt matematik en çok çıkan konular, tyt türkçe kesin çıkan konular, yks son aylar ne çalışmalı, tyt konuları 2027, yks net hesapla',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-kesin-cikan-konular' },
    openGraph: {
        title: 'TYT\'de Kesin Çıkacak "Altın" Konular 2027',
        description: 'TYT\'de en çok soru çıkan konular ve zaman kazanma stratejisi.',
        type: 'article',
        publishedTime: '2026-05-02',
        url: 'https://yksnethesapla.com/blog/tyt-kesin-cikan-konular',
    },
}

export default function TYTKesinCikanKonular() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
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
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">TYT</span>
                            <time className="text-gray-600">2 Mayıs 2026</time>
                            <span className="text-gray-600">• 12 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Her Şeyi Çalışma, Doğru Şeyi Çalış: TYT&apos;nin Altın Konuları
                        </h1>
                        <p className="text-xl text-gray-600">
                            Müfredat devasa ama süre kısıtlı. Sınavda derece yapanların sırrı her şeyi bilmek değil, neyin çok sorulduğunu bilmek.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Bak şimdi, önünde dağ gibi bir müfredat var ve zaman daralıyor. Her formülü, her kuralı ezberlemeye çalışarak kendini tüketiyorsun. Ama derece yapan çocuklara baktığında görüyorsun ki onlar her şeyi bilmiyor — onlar <strong>neyin daha çok sorulduğunu</strong> biliyor. ÖSYM&apos;nin soru hazırlayan ekibinin vazgeçemediği favori konuları var. Yıllardır hep aynı yerlerden soruyor. Sen de enerjini bu &quot;altın&quot; konulara harcayacaksın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Türkçe: Dil Bilgisine Gömülme, Paragrafı Çöz
                        </h2>
                        <p className="leading-relaxed">
                            40 soruluk Türkçe testinin yaklaşık <strong>26-28 sorusu</strong> paragraf ve anlam bilgisinden geliyor. Ama ne yapıyor öğrenciler? Aylarını isim tamlaması, zamir, zarflar ezberleyerek geçiriyorlar. Sınavda dil bilgisinden toplamda <strong>7-8 soru</strong> çıkıyor. 7-8 soru için aylarca uğraşmaya değer mi? Hayır.
                        </p>
                        <p>
                            Paragraf çözme hızını artırmak, ana düşünce-yardımcı düşünce konularında ustalaşmak — bunlar netlerini dil bilgisinden çok daha hızlı zıplatır. Tamamen bırak demiyorum ama önceliğin neresi olması gerektiği belli.
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Türkçe Konusu</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Her Sene Kaç Soru Geliyor?</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Öncelik</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-green-50"><td className="px-5 py-3 font-medium">Paragrafta Ana Düşünce ve Yapı</td><td className="px-5 py-3 text-center font-bold">14 - 16</td><td className="px-5 py-3 text-red-700 font-bold">En yüksek</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Paragrafta Akışı Bozan Cümle, İkiye Bölme</td><td className="px-5 py-3 text-center font-bold">5 - 7</td><td className="px-5 py-3 text-orange-700 font-semibold">Yüksek</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Sözcükte/Cümlede Anlam (Deyim, Atasözü)</td><td className="px-5 py-3 text-center font-bold">6 - 8</td><td className="px-5 py-3 text-orange-700 font-semibold">Yüksek</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Yazım ve Noktalama</td><td className="px-5 py-3 text-center font-bold">4 - 5</td><td className="px-5 py-3 text-blue-700 font-semibold">Garanti net</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Dil Bilgisi (Sözcük Türleri, Cümle Ögeleri vb.)</td><td className="px-5 py-3 text-center font-bold">4 - 6</td><td className="px-5 py-3 text-gray-600">Son sıraya at</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Matematik: Problemleri Çözen Sınavı Çözer
                        </h2>
                        <p className="leading-relaxed">
                            Sadece Problemler ve Geometri konusunu halleden bi öğrenci TYT Matematik&apos;te rahat <strong>20-25 net</strong> bandına oturur. Her sene minimum <strong>12-14 soru</strong> Problemlerden (sayı, kesir, yaş, hız, yüzde, karışım), <strong>10 soru</strong> Geometriden geliyor. Bu ikisi 40 sorunun 24&apos;ünü kaplıyor.
                        </p>
                        <p>
                            Mantık, Kümeler, Veri-İstatistik gibi konulardan da her sene garanti 3-4 soru var. Bunlar genelde kolay oluyor, 5 dakikada halledersin. Bu garanti netleri cebine koy, sonra zor geometri sorularıyla uğraş.
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-green-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Matematik Konusu</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Kaç Soru?</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Durumu</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-red-50"><td className="px-5 py-3 font-medium">Problemler (Sayı, Yaş, Hız, Yüzde, Karışım)</td><td className="px-5 py-3 text-center font-bold text-red-700 text-lg">12 - 14</td><td className="px-5 py-3 text-red-700 font-bold">Sınavın kalbi</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Geometri (Üçgen, Dörtgen, Çember, Alan)</td><td className="px-5 py-3 text-center font-bold">10</td><td className="px-5 py-3 text-orange-700 font-semibold">Çok önemli</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Temel Kavramlar, Sayı Basamakları, EBOB-EKOK</td><td className="px-5 py-3 text-center font-bold">4 - 5</td><td className="px-5 py-3 text-blue-700 font-semibold">Temel at</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Üslü-Köklü İfadeler</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3 text-green-700 font-semibold">Kolay net</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Kümeler, Mantık, Veri, İstatistik</td><td className="px-5 py-3 text-center font-bold">3 - 4</td><td className="px-5 py-3 text-green-700 font-semibold">Cebine koy</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Fen Bilimleri: EA ve Sözelciler Bunu Atlamayın
                        </h2>
                        <p className="leading-relaxed">
                            Eşit Ağırlık ve Sözel öğrencilerinin en büyük hatası TYT Fen testini &quot;bana ne, ben sözelciyim&quot; deyip geçmeleri. Ama bak — TYT Fen&apos;deki 1 netin puan katkısı Türkçe ve Matematik ile <strong>birebir aynı</strong>. 2-3 haftalık temel düzey çalışmayla bu testten 8-12 net çıkarabilirsin. Bu bedava puan demek.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4 my-6">
                            <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                                <h3 className="font-bold text-blue-900 mb-2">Fizik (7 soru)</h3>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Isı-Sıcaklık: Her sene 1 garanti soru</li>
                                    <li>• Optik (aynalar, kırılma): 1-2 soru</li>
                                    <li>• Madde ve Özellikleri: 1 soru</li>
                                    <li>• Hareket: Kolay olursa yap</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 p-5 rounded-xl border border-green-200">
                                <h3 className="font-bold text-green-900 mb-2">Kimya (7 soru)</h3>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Kimyasal Etkileşimler: 1-2 soru garanti</li>
                                    <li>• Periyodik Sistem: 1 soru</li>
                                    <li>• Asit-Baz: 1 soru</li>
                                    <li>• Maddenin Halleri: 1 soru</li>
                                </ul>
                            </div>
                            <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
                                <h3 className="font-bold text-purple-900 mb-2">Biyoloji (6 soru)</h3>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Hücre ve Organeller: 1 soru</li>
                                    <li>• Canlıların Bileşenleri: 1 soru</li>
                                    <li>• Kalıtım (soy ağacı): 1 soru</li>
                                    <li>• Ekoloji: 1 soru</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Sosyal Bilimler: 20 Sorudan 15&apos;ini Al
                        </h2>
                        <p className="leading-relaxed">
                            Sosyal&apos;de Tarih, Coğrafya, Felsefe ve Din Kültüründen 5&apos;er soru geliyor. Tarih&apos;te İlk Türk Devletleri ve Atatürk İlkeleri her sene çıkıyor, ezbere dayalı değil yorum gerektiriyor. Coğrafya&apos;da Harita Bilgisi ve İklim Tipleri banko. Felsefe&apos;de Bilgi ve Ahlak Felsefesi konuları hiç şaşmıyor. Din Kültürü&apos;nde ise Hz. Muhammed&apos;in hayatı ve Kur&apos;an-ı Kerim hakkında temel bilgiler garanti.
                        </p>
                        <p>
                            Bu konuları 1 haftalık yoğun bir çalışmayla bitirebilirsin. 20 sorudan en az 14-15 net çıkarmak hiç zor değil.
                        </p>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg my-6">
                            <h3 className="font-bold text-yellow-900 mb-2">Haftalık Çalışma Önerisi</h3>
                            <p className="text-gray-700 text-sm">
                                Haftanın 5 günü Paragraf + Problemler çalış. 2 günü diğer konulara ayır. Bu dengeyle 4 haftada TYT netini 10-15 puan artırabilirsin. Deneyenler biliyor, işe yarıyor.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Bu Netler Seni Nereye Taşıyor?</h3>
                            <p className="text-blue-100 mb-6">
                                Altın konulara odaklandıktan sonra netlerinin nasıl değiştiğini hemen gör.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Bunları da Oku</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-net-artirma-taktikleri" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    <p className="font-semibold text-green-900">TYT Net Artırma Taktikleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">60-70 net bandından nasıl çıkılır?</p>
                                </Link>
                                <Link href="/blog/tyt-matematik-konulari" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">TYT Matematik Yol Haritası →</p>
                                    <p className="text-xs text-gray-600 mt-1">Konu konu çalışma planı.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
