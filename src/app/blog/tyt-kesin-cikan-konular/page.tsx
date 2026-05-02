import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'TYT\'de Kesin Çıkacak "Altın" Konular 2026 | Zaman Kazanmanın Sırrı',
    description: 'TYT matematik en çok çıkan konular, TYT Türkçe kesin çıkan konular. YKS son aylar ne çalışmalı? Enerjini doğru yere harca, netlerini hızla artır.',
    keywords: 'tyt matematik en çok çıkan konular, tyt türkçe kesin çıkan konular, yks son aylar ne çalışmalı, tyt konuları 2026, yks net hesapla',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-kesin-cikan-konular' },
    openGraph: {
        title: 'TYT\'de Kesin Çıkacak "Altın" Konular 2026',
        description: 'TYT\'de en çok soru çıkan konular ve zaman kazanma stratejisi. Enerjini doğru yere harca.',
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
                            <span className="text-gray-600">• 7 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            TYT&apos;de Zaman Kazanmanın Sırrı: Sınavda Kesin Çıkacak &quot;Altın&quot; Konular
                        </h1>
                        <p className="text-xl text-gray-600">
                            Her şeyi bilmek değil, neyin daha çok sorulduğunu bilmek seni öne geçirir.
                        </p>
                    </header>

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">

                        <p className="text-lg leading-relaxed">
                            Önünde devasa bir müfredat var ve zaman daralıyor. Her detayı, her formülü ezberlemeye
                            çalışarak büyük resmi kaçırıyorsun. YKS&apos;de derece yapanların sırrı, her şeyi bilmek değil;
                            <strong> &quot;neyin daha çok sorulduğunu&quot; bilmektir</strong>. ÖSYM&apos;nin bir soru tarzı ve
                            vazgeçemediği favori konuları vardır. Eğer netlerini hızlıca yukarı çekmek istiyorsan,
                            enerjini bu &quot;altın&quot; konulara harcamalısın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            TYT Türkçe: Dil Bilgisi Bataklığında Boğulma
                        </h2>
                        <p className="leading-relaxed">
                            40 soruluk Türkçe testinin ortalama <strong>26-28 sorusu Paragraf ve Anlam bilgisinden</strong> gelir.
                            Öğrenciler aylarını isim tamlamaları, zarflar, cümlenin ögeleri ezberleyerek geçirir ama
                            sınavda dil bilgisinden topu topu <strong>7-8 soru</strong> çıkar.
                        </p>
                        <p className="leading-relaxed">
                            Paragraf çözme hızını artırmak ve paragrafta yapı/ana düşünce konularında ustalaşmak,
                            netlerini dil bilgisinden çok daha hızlı zıplatır. Dil bilgisini tamamen boş ver demiyoruz
                            ama önceliğinin neresi olduğu çok açık.
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">TYT Türkçe Konusu</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Tahmini Soru Sayısı</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Öncelik</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-green-50"><td className="px-5 py-3 font-medium">Paragraf (Ana Fikir, Yapı, Boşluk)</td><td className="px-5 py-3 text-center font-bold">15-18</td><td className="px-5 py-3 text-center text-red-700 font-bold">🔴 En Yüksek</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Sözcük Bilgisi (Anlam, Deyim)</td><td className="px-5 py-3 text-center font-bold">8-10</td><td className="px-5 py-3 text-center text-orange-700 font-bold">🟠 Yüksek</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Cümle Bilgisi</td><td className="px-5 py-3 text-center font-bold">6-8</td><td className="px-5 py-3 text-center text-yellow-700 font-bold">🟡 Orta</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Yazım ve Noktalama</td><td className="px-5 py-3 text-center font-bold">4-6</td><td className="px-5 py-3 text-center text-blue-700 font-bold">🔵 Normal</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            TYT Matematik: <strong>Problemler</strong> Sınavın Kalbidir
                        </h2>
                        <p className="leading-relaxed">
                            Sadece temel kavramlar ve <strong>problemler</strong> konusunu halleden bir öğrenci,
                            TYT Matematikte çok rahat <strong>15-20 net bandına</strong> oturur.
                            <strong> Problemler (sayı, kesir, yaş, hız, yüzde)</strong> her sene minimum
                            <strong> 10-12 soruyla</strong> karşımıza çıkar.
                        </p>
                        <p className="leading-relaxed">
                            Mantık, kümeler veya veri-istatistik gibi her sene garanti 1&apos;er soru gelen ufak ama
                            kaçırılmaması gereken konuları cebine koymadan, zor geometri sorularıyla saatlerini harcama.
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-green-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">TYT Matematik Konusu</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Tahmini Soru Sayısı</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Öncelik</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-red-50"><td className="px-5 py-3 font-medium">Problemler (Yaş, Hız, Karışım, Yüzde)</td><td className="px-5 py-3 text-center font-bold">10-12</td><td className="px-5 py-3 text-center text-red-700 font-bold">🔴 En Yüksek</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Geometri (Üçgen, Dörtgen, Çember)</td><td className="px-5 py-3 text-center font-bold">8-10</td><td className="px-5 py-3 text-center text-orange-700 font-bold">🟠 Yüksek</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Temel Kavramlar (EBOB, EKOK, Sayılar)</td><td className="px-5 py-3 text-center font-bold">4-5</td><td className="px-5 py-3 text-center text-yellow-700 font-bold">🟡 Orta</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Fonksiyonlar, Denklemler</td><td className="px-5 py-3 text-center font-bold">4-5</td><td className="px-5 py-3 text-center text-yellow-700 font-bold">🟡 Orta</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Mantık, Kümeler, Veri</td><td className="px-5 py-3 text-center font-bold">3-4</td><td className="px-5 py-3 text-center text-blue-700 font-bold">🔵 Cebe Koy</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg">
                            <h3 className="font-bold text-yellow-900 mb-2">💡 Akıllı Çalışma Formülü</h3>
                            <p className="text-gray-700 text-sm">
                                Haftanın 5 günü Problemler + Paragraf çalış, 2 günü diğer konulara ayır.
                                Bu dağılımla 4 haftada TYT netini 10-15 puan artırabilirsin.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Netlerinin Değerini Ölç
                        </h2>
                        <p className="leading-relaxed">
                            Çalışma programını bu altın konulara göre güncelledikten sonra deneme sonuçlarındaki
                            değişimi hissedeceksin. Bu yeni netlerin seni hedefine ne kadar yaklaştırdığını görmek için
                            haftalık gelişimini kayıt altına alabilirsin.
                        </p>
                        <p className="leading-relaxed font-medium">
                            <strong>Akıllı çalışmak, çok çalışmaktan her zaman daha fazla kazandırır!</strong>
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">2026 YKS Net ve Sıralama Hesaplama</h3>
                            <p className="text-blue-100 mb-6">
                                Yeni netlerinin seni kaçıncı sıraya taşıdığını hemen öğren.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                                Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-net-artirma-taktikleri" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    <p className="font-semibold text-green-900">TYT Net Artırma Taktikleri →</p>
                                </Link>
                                <Link href="/blog/tyt-matematik-konulari" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">TYT Matematik Konuları →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
