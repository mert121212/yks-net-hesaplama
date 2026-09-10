import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, ArrowRight, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
    title: 'TYT Net Hesaplama 2027 | Test Ağırlıkları, Katsayılar ve Süre Taktikleri',
    description: 'TYT net hesabı nasıl yapılır? 4 yanlış 1 doğru kuralı, 0,5 net şartı ve Türkçe, Matematik, Sosyal, Fen testlerinin yerleştirme puanına gerçek katkısı.',
    keywords: 'TYT net hesaplama, TYT matematik net, TYT türkçe net, TYT sosyal net, TYT fen net, YKS 2027 TYT',
    alternates: { canonical: 'https://yksnethesapla.com/tyt-net-hesaplama' },
}

export default function TYTNetHesaplamaPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4">
            <div className="max-w-4xl mx-auto">
                
                {/* Header */}
                <div className="text-center mb-10">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3">
                        TYT Sınav Analizi
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                        TYT Net Hesaplama ve Test Dinamikleri
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
                        120 soru, 165 dakika ve saniyelerin yarıştığı bir maraton. Hangi testten kaç net çıkarmanız gerektiğini ve 4 yanlışın netlerinizi nasıl erittiğini adım adım inceleyin.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg text-sm"
                    >
                        <Calculator className="h-5 w-5" />
                        Doğrudan Net Hesaplayıcıyı Aç
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* TYT Testleri: Masadaki Gerçekler */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        120 Sorunun Dağılımı: Nereye Ne Kadar Asılmalısınız?
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Öğrencilerin çoğu &quot;Sosyal kolaydır, sona bırakırım&quot; veya &quot;Matematikten 5 net yapsam yeter&quot; diyerek sınava girer. Oysa ÖSYM katsayılarında Sosyal ve Fen netinin puan getirisi, Türkçe ve Matematikle neredeyse kafa kafayadır.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-blue-200 rounded-xl p-5 bg-blue-50/40">
                            <h3 className="font-bold text-blue-900 text-lg mb-1">Türkçe (40 Soru)</h3>
                            <p className="text-xs text-blue-700 font-semibold mb-2">Testin Kalbi: 24 Paragraf + 16 Dil Bilgisi &amp; Anlam</p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Sınavın en çok zaman çalan testidir. Paragraf sorularında hız kazanamayan aday, matematik sorularına bakmaya vakit bulamaz. Hedef 30+ net için günlük 20 paragraf çözümü şarttır.
                            </p>
                        </div>

                        <div className="border border-emerald-200 rounded-xl p-5 bg-emerald-50/40">
                            <h3 className="font-bold text-emerald-900 text-lg mb-1">Temel Matematik (40 Soru)</h3>
                            <p className="text-xs text-emerald-700 font-semibold mb-2">30 Matematik + 10 Geometri</p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                İlk 12 soru temel kavramlar ve cebirden, sonraki 12-14 soru yeni nesil problemlerden oluşur. 10 geometri sorusu ise sıralamada doğrudan üst dilime geçiş biletidir.
                            </p>
                        </div>

                        <div className="border border-purple-200 rounded-xl p-5 bg-purple-50/40">
                            <h3 className="font-bold text-purple-900 text-lg mb-1">Sosyal Bilimler (20 Soru)</h3>
                            <p className="text-xs text-purple-700 font-semibold mb-2">5 Tarih + 5 Coğrafya + 5 Felsefe + 5 Din</p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                En hızlı çözülen ve en az zaman isteyen 20 net kaynağıdır. Sayısalcıların çoğu Sosyal&apos;e bakmayarak binlerce rakibine bedava avantaj hediye eder.
                            </p>
                        </div>

                        <div className="border border-amber-200 rounded-xl p-5 bg-amber-50/40">
                            <h3 className="font-bold text-amber-900 text-lg mb-1">Fen Bilimleri (20 Soru)</h3>
                            <p className="text-xs text-amber-700 font-semibold mb-2">7 Fizik + 7 Kimya + 6 Biyoloji</p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                9. ve 10. sınıf müfredatının temel kavramlarını yoklar. Sayısalcı için garanti net, Eşit Ağırlıkçı için ise rakiplerine fark atma jokeridir.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4 Yanlış 1 Doğruyu Nasıl Eritir? */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        TYT&apos;de 4 Yanlış 1 Doğruyu Nasıl Götürür?
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
                        ÖSYM optik formunda işaretlediğiniz her yanlış seçenek, o testteki doğru sayınızdan <strong>0,25 net</strong> siler.
                    </p>

                    <div className="bg-slate-900 text-white rounded-xl p-5 text-center my-4">
                        <p className="font-mono text-xl font-bold text-emerald-400">
                            TYT Neti = Doğru Sayısı − (Yanlış Sayısı ÷ 4)
                        </p>
                    </div>

                    <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                        <p>
                            • <strong>Örnek:</strong> Türkçede 32 doğru, 8 yanlış işaretlediniz. 8&apos;i 4&apos;e böldüğümüzde 2 doğru cevabınız silinir ve netiniz <strong>30,00</strong> olarak sisteme yansır.
                        </p>
                        <p>
                            • <strong>Boşlar:</strong> Cevabını bilmediğiniz soruyu boş bırakırsanız ne doğru ne de yanlış sayılır; netinizden hiçbir eksilme olmaz. Bu yüzden kafadan sallamak yerine boş bırakmak çoğu zaman sıralamanızı korur.
                        </p>
                    </div>
                </div>

                {/* 0,5 Net Kuralı */}
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 text-amber-950">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <span>⚠️</span> Hayati Kural: 0,5 Net Şartı
                    </h3>
                    <p className="text-sm leading-relaxed mb-3">
                        2022&apos;de baraj kalktı ancak 0,5 net şartı aynen duruyor. TYT puanınızın hesaplanabilmesi için <strong>Türkçe veya Temel Matematik</strong> testlerinin en az birinde minimum yarım (0,5) ham netinizin olması zorunludur.
                    </p>
                    <p className="text-xs text-amber-900">
                        İki derste de 0 net çekerseniz veya yanlışlarınız doğrularınızdan fazla olup eksiye düşerse, Sosyal ve Fenden ful çıkarsanız bile TYT puanınız hesaplanmaz.
                    </p>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl shadow-lg p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-3">Deneme Sonucunu Şimdi Hesapla</h2>
                    <p className="text-blue-100 text-sm max-w-xl mx-auto mb-6">
                        Son girdiğin TYT denemesindeki doğru ve yanlış sayılarını gir; güncel standart sapma ve OBP katkısıyla puanını hemen gör.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-md text-sm"
                    >
                        <BookOpen className="h-5 w-5" />
                        TYT Net Hesaplama Aracına Git →
                    </Link>
                </div>

            </div>
        </div>
    )
}