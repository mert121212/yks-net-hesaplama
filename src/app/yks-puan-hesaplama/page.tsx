import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, ArrowRight, BookOpen, Award, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
    title: 'YKS Puan Hesaplama 2027 | TYT AYT Yerleştirme Puanı ve Formülleri',
    description: 'YKS yerleştirme puanı nasıl hesaplanır? ÖSYM standart sapma formülü, TYT %40 ve AYT %60 etki oranları, OBP katsayısı ve örnek puan hesaplama senaryoları.',
    keywords: 'YKS puan hesaplama, yerleştirme puanı nasıl hesaplanır, ösym puan formülü, tyt ayt puan hesaplama, obp yerleştirme puanı, kırık obp hesaplama',
    alternates: { canonical: 'https://yksnethesapla.com/yks-puan-hesaplama' },
}

export default function YKSPuanHesaplamaPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-10">
                
                {/* Header */}
                <div className="text-center mb-8">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full mb-3">
                        ÖSYM Resmi Metodolojisi
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                        YKS Puan Hesaplama Rehberi
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Ham puan, yerleştirme puanı, standart sapma ve diploma notu (OBP) nasıl bir araya gelir? Örnek sınav senaryolarıyla adım adım formüller.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-md text-sm"
                        >
                            <Calculator className="h-5 w-5" />
                            Otomatik Puan Hesapla
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/universiteler"
                            className="inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-300 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-all shadow-sm text-sm"
                        >
                            🎓 Taban Puanları Atlası
                        </Link>
                    </div>
                </div>

                {/* Ham Puan vs Yerleştirme Puanı */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Ham Puan ile Yerleştirme Puanı Arasındaki Fark Nedir?
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        ÖSYM sonuç belgenizi aldığınızda iki farklı puan tablosu görürsünüz: <strong>Sınav Puanları (Ham)</strong> ve <strong>Yerleştirme Puanları (Y-TYT, Y-SAY, Y-EA, Y-SÖZ, Y-DİL)</strong>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-gray-900 text-base mb-2">1. Ham Puan (100 - 500 Puan)</h3>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                Sadece sınavda yaptığınız netlerin ÖSYM standart sapma ve test katsayılarıyla çarpılması sonucu elde edilir. Lise diploma notunuz bu puana henüz eklenmemiştir.
                            </p>
                        </div>
                        <div className="p-5 bg-blue-50/70 rounded-xl border border-blue-200">
                            <h3 className="font-bold text-blue-900 text-base mb-2">2. Yerleştirme Puanı (130 - 560 Puan)</h3>
                            <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
                                Ham puanınıza diploma notunuzdan gelen OBP katkısı eklendikten sonraki nihai puandır. <strong>Üniversite tercihlerinde geçerli olan yegane puan ve sıralama budur.</strong>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Formül ve Katsayılar */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                        YKS Yerleştirme Puanı Hesaplama Formülü
                    </h2>
                    
                    <div className="bg-slate-900 text-white p-6 rounded-2xl text-center space-y-2 font-mono">
                        <p className="text-xs uppercase tracking-wider text-slate-400">Genel Yerleştirme Puanı Formülü</p>
                        <p className="text-lg sm:text-xl font-bold text-emerald-400">
                            Y-Puan = Ham Puan + (OBP × 0,12)
                        </p>
                        <p className="text-xs text-slate-400 pt-2 border-t border-slate-800 font-sans">
                            Geçen yıl bir üniversiteye yerleşip tekrar sınava girenlerde katsayı <strong>0,06</strong> olarak uygulanır.
                        </p>
                    </div>

                    <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                        <h3 className="font-bold text-gray-900 text-base">Testlerin Nihai Puana Ağırlıkları:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                                <p className="font-bold text-emerald-900 text-sm">TYT Sınavı (%40)</p>
                                <p className="text-xs text-emerald-800 mt-1">
                                    Türkçe (~%13), Matematik (~%13), Fen (~%7), Sosyal (~%7)
                                </p>
                            </div>
                            <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                                <p className="font-bold text-indigo-900 text-sm">AYT Sınavı (%60)</p>
                                <p className="text-xs text-indigo-800 mt-1">
                                    Alanınıza ait 80 soru (SAY için Mat+Fen, EA için Mat+Edebiyat/Sos1)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Örnek Senaryo */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Örnek Hesaplama Senaryosu (Sayısal Adayı)
                    </h2>
                    <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 text-sm space-y-3">
                        <div className="flex justify-between border-b pb-2">
                            <span>TYT Neti (120 Soru):</span>
                            <strong>72.50 Net</strong>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span>AYT Neti (80 Soru):</span>
                            <strong>54.00 Net</strong>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span>Lise Diploma Notu:</span>
                            <strong>88.00 (OBP = 440)</strong>
                        </div>
                        <div className="flex justify-between border-b pb-2 text-blue-700 font-bold">
                            <span>OBP Yerleştirme Katkısı (440 × 0,12):</span>
                            <span>+52.80 Puan</span>
                        </div>
                        <div className="flex justify-between pt-1 text-base font-extrabold text-indigo-900">
                            <span>Tahmini Y-SAY Puanı:</span>
                            <span>~432.50 Puan (İlk 38.000)</span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500">
                        * Bu değerler ÖSYM son 3 yılın standart sapma ve yığınsal dağılım verileri baz alınarak modellenmiştir. Sınavın genel zorluk seviyesine göre sıralamalarda değişiklik olabilir.
                    </p>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl shadow-lg p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-3">Kendi Netlerinizi Hesaplayın</h2>
                    <p className="text-blue-100 text-sm max-w-xl mx-auto mb-6">
                        TYT, AYT ve diploma notunuzu girerek yerleştirme puanınızı ve tahmini Türkiye sıralamanızı tek tıkla görün.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-md text-sm"
                    >
                        <BookOpen className="h-5 w-5" />
                        Ücretsiz YKS Puan Hesaplama Aracına Git →
                    </Link>
                </div>

            </div>
        </div>
    )
}
