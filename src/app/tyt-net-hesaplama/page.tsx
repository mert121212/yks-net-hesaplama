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
                        TYT Net Hesaplama
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
                        120 soru, 165 dakika. Hangi testten kaç net gerekir, 4 yanlış doğrularını nasıl eritir, 0,5 net şartı ne — bu sayfada topladım.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg text-sm"
                    >
                        <Calculator className="h-5 w-5" />
                        Net Hesaplayıcıyı Aç
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Testler */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        120 Sorunun Dağılımı
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Çoğu öğrenci &quot;Sosyal kolay, sona bırakırım&quot; ya da &quot;Fen zaten yapamam&quot; diyor. Ama ÖSYM katsayılarında 1 Sosyal veya 1 Fen netinin puan getirisi Türkçe ve Matematikle neredeyse aynı.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-blue-200 rounded-xl p-5 bg-blue-50/40">
                            <h3 className="font-bold text-blue-900 text-lg mb-1">Türkçe (40 Soru)</h3>
                            <p className="text-xs text-blue-700 font-semibold mb-2">24-26 paragraf + dil bilgisi</p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Sınavın en çok süre yiyen testi. Paragrafta iki şık arasında kalıp vakit kaybedersen arkadaki matematiğe süren kalmaz.
                            </p>
                        </div>

                        <div className="border border-emerald-200 rounded-xl p-5 bg-emerald-50/40">
                            <h3 className="font-bold text-emerald-900 text-lg mb-1">Matematik (40 Soru)</h3>
                            <p className="text-xs text-emerald-700 font-semibold mb-2">30 mat + 10 geometri</p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                İlk 12 soru temel cebir, sonrakiler yeni nesil problemler. 10 geometri sorusu çoğu adayın atladığı ama sıralamada fark yaratan kısım.
                            </p>
                        </div>

                        <div className="border border-purple-200 rounded-xl p-5 bg-purple-50/40">
                            <h3 className="font-bold text-purple-900 text-lg mb-1">Sosyal (20 Soru)</h3>
                            <p className="text-xs text-purple-700 font-semibold mb-2">5 Tarih + 5 Coğrafya + 5 Felsefe + 5 Din</p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                15-18 dakikada toplanabilecek en verimli 20 soru. Sayısalcıların genelde ihmal ettiği ama sıralamada ciddi fark açan test.
                            </p>
                        </div>

                        <div className="border border-amber-200 rounded-xl p-5 bg-amber-50/40">
                            <h3 className="font-bold text-amber-900 text-lg mb-1">Fen (20 Soru)</h3>
                            <p className="text-xs text-amber-700 font-semibold mb-2">7 Fizik + 7 Kimya + 6 Biyoloji</p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                9-10. sınıf müfredatı. Sayısalcının fire vermemesi gereken yer. EA ve Sözelciler bile 5-6 soru alırsa fark yaratır.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4 Yanlış 1 Doğru */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        4 Yanlış 1 Doğru Kuralı
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
                        Her yanlış cevap o testteki doğru sayından <strong>0,25 net</strong> düşürür.
                    </p>

                    <div className="bg-slate-900 text-white rounded-xl p-5 text-center my-4">
                        <p className="font-mono text-xl font-bold text-emerald-400">
                            TYT Neti = Doğru − (Yanlış ÷ 4)
                        </p>
                    </div>

                    <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                        <p>
                            • <strong>Örnek:</strong> 32 doğru, 8 yanlış → 8 ÷ 4 = 2 → Net: <strong>30,00</strong>
                        </p>
                        <p>
                            • <strong>Boş bırakma:</strong> Emin olmadığın soruyu boş bırakırsan netinden bir şey eksilmez. Kafadan sallamak yerine boş bırakmak çoğu zaman daha iyi.
                        </p>
                    </div>
                </div>

                {/* 0,5 Net */}
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 text-amber-950">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <span>⚠️</span> 0,5 Net Şartı
                    </h3>
                    <p className="text-sm leading-relaxed mb-3">
                        Baraj puanı kalktı ama 0,5 net şartı duruyor. <strong>Türkçe veya Matematik</strong> testinin birinden en az 0,5 ham net lazım. İkisi de 0 veya eksiyse Fen ve Sosyal&apos;den full yapsan da TYT puanın hesaplanmaz.
                    </p>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl shadow-lg p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-3">Deneme Sonucunu Hesapla</h2>
                    <p className="text-blue-100 text-sm max-w-xl mx-auto mb-6">
                        Son TYT denemendeki doğru ve yanlış sayılarını gir, tahmini puanını ve sıralamanı gör.
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