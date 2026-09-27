import { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, BookOpen, Target, TrendingUp, CheckCircle, Clock, Award } from 'lucide-react'

export const metadata: Metadata = {
    title: '2027 YKS Rehberi: Puan Hesaplama, Soru Dağılımı ve Sınav Kuralları',
    description: 'YKS 2027 rehberi: TYT-AYT katsayıları, 0,5 net şartı, OBP hesaplaması, başarı sırası barajları ve turlama yöntemi.',
    keywords: 'YKS 2027 rehberi, YKS net hesaplama, TYT net hesaplama, AYT net hesaplama, YKS puan hesaplama, OBP hesaplama, YKS başarı stratejileri',
    alternates: { canonical: 'https://yksnethesapla.com/yks-rehberi' },
}

export default function YKSRehberiPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* Hero */}
                <header className="text-center mb-12">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3">
                        2027 YKS Hazırlık Rehberi
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                        YKS 2027 Rehberi: Puanlar, Katsayılar ve Temel Kurallar
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                        YKS sınav sistemi, test katsayıları, OBP katkısı ve tercih barajları hakkında bilmeniz gereken tüm temel bilgiler.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                    >
                        <Calculator className="h-5 w-5" />
                        Net Hesaplama Aracına Git →
                    </Link>
                </header>

                {/* Hızlı İçindekiler */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 mb-10">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span>📑</span> İçindekiler
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <a href="#puan-hesaplama" className="p-2.5 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 font-medium transition-colors">
                            1. Net Hesaplama ve 4 Yanlış Kuralı
                        </a>
                        <a href="#soru-dagilimi" className="p-2.5 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 font-medium transition-colors">
                            2. TYT, AYT ve YDT Oturumları
                        </a>
                        <a href="#obp" className="p-2.5 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 font-medium transition-colors">
                            3. OBP ve Kırık OBP Uygulaması
                        </a>
                        <a href="#baraj" className="p-2.5 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 font-medium transition-colors">
                            4. 0,5 Net Kuralı ve Puan Şartı
                        </a>
                        <a href="#baraj-siralama" className="p-2.5 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 font-medium transition-colors">
                            5. Başarı Sırası Barajları (Tıp, Hukuk vb.)
                        </a>
                        <a href="#stratejiler" className="p-2.5 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 font-medium transition-colors">
                            6. Sınav Anı ve Süre Yönetimi
                        </a>
                    </div>
                </div>

                {/* 1. Puan Hesaplama */}
                <section id="puan-hesaplama" className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <Calculator className="h-7 w-7 text-blue-600" />
                        1. YKS Puanı Nasıl Hesaplanır?
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        ÖSYM sisteminde her test için ham net, doğru cevap sayısından yanlış cevap sayısının dörtte birinin çıkarılmasıyla bulunur.
                    </p>

                    <div className="bg-slate-900 text-white rounded-xl p-5 my-6 text-center">
                        <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Ham Net Formülü</span>
                        <p className="font-mono text-xl sm:text-2xl font-bold text-emerald-400">
                            Ham Net = Doğru Sayısı − (Yanlış Sayısı ÷ 4)
                        </p>
                        <p className="text-xs text-slate-400 mt-2">
                            Her 1 yanlış cevap 0,25 net düşürür. 4 yanlış cevap ise 1 doğru cevabı siler.
                        </p>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3">Örnek Ham Net Dağılımı</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
                            <thead className="bg-gray-50 text-gray-800">
                                <tr>
                                    <th className="border p-3 text-left">Test</th>
                                    <th className="border p-3 text-center">Doğru</th>
                                    <th className="border p-3 text-center">Yanlış</th>
                                    <th className="border p-3 text-center">Boş</th>
                                    <th className="border p-3 text-center">Kesilen Net</th>
                                    <th className="border p-3 text-center font-bold text-blue-600">Ham Net</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="border p-3 font-medium">TYT Türkçe (40)</td>
                                    <td className="border p-3 text-center">31</td>
                                    <td className="border p-3 text-center">8</td>
                                    <td className="border p-3 text-center">1</td>
                                    <td className="border p-3 text-center text-red-600">-2,00</td>
                                    <td className="border p-3 text-center font-bold text-emerald-600">29,00</td>
                                </tr>
                                <tr className="border-b bg-gray-50">
                                    <td className="border p-3 font-medium">TYT Matematik (40)</td>
                                    <td className="border p-3 text-center">22</td>
                                    <td className="border p-3 text-center">6</td>
                                    <td className="border p-3 text-center">12</td>
                                    <td className="border p-3 text-center text-red-600">-1,50</td>
                                    <td className="border p-3 text-center font-bold text-emerald-600">20,50</td>
                                </tr>
                                <tr>
                                    <td className="border p-3 font-medium">AYT Matematik (40)</td>
                                    <td className="border p-3 text-center">26</td>
                                    <td className="border p-3 text-center">4</td>
                                    <td className="border p-3 text-center">10</td>
                                    <td className="border p-3 text-center text-red-600">-1,00</td>
                                    <td className="border p-3 text-center font-bold text-emerald-600">25,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 2. Soru Dağılımı ve Oturumlar */}
                <section id="soru-dagilimi" className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <BookOpen className="h-7 w-7 text-indigo-600" />
                        2. 2027 Soru Dağılımı ve Oturum Yapısı
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        YKS üç ayrı oturumdan oluşur. Her oturumun süre ve soru yapısı farklıdır:
                    </p>

                    <div className="space-y-6">
                        <div className="border border-blue-200 rounded-xl p-5 bg-blue-50/40">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-3">
                                <h3 className="text-lg font-bold text-blue-950">1. Oturum: TYT (Temel Yeterlilik Testi)</h3>
                                <span className="text-xs bg-blue-200 text-blue-900 font-semibold px-2.5 py-1 rounded-md self-start sm:self-auto">
                                    120 Soru · 165 Dakika · Cumartesi 10:15
                                </span>
                            </div>
                            <p className="text-sm text-gray-700 mb-3">
                                Tüm adaylar için zorunludur. Lisans puanlarının %40&apos;ını oluşturur.
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-medium text-gray-800">
                                <div className="bg-white p-2.5 rounded-lg border text-center">Türkçe: <strong>40 Soru</strong></div>
                                <div className="bg-white p-2.5 rounded-lg border text-center">Matematik: <strong>40 Soru</strong></div>
                                <div className="bg-white p-2.5 rounded-lg border text-center">Sosyal: <strong>20 Soru</strong></div>
                                <div className="bg-white p-2.5 rounded-lg border text-center">Fen: <strong>20 Soru</strong></div>
                            </div>
                        </div>

                        <div className="border border-purple-200 rounded-xl p-5 bg-purple-50/40">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-3">
                                <h3 className="text-lg font-bold text-purple-950">2. Oturum: AYT (Alan Yeterlilik Testi)</h3>
                                <span className="text-xs bg-purple-200 text-purple-900 font-semibold px-2.5 py-1 rounded-md self-start sm:self-auto">
                                    160 Soru (80 Çözülür) · 180 Dakika · Pazar 10:15
                                </span>
                            </div>
                            <p className="text-sm text-gray-700 mb-3">
                                Lisans puanlarının %60&apos;ını belirler. Adaylar kendi alanlarına ait 80 soruyu çözer:
                            </p>
                            <ul className="text-xs sm:text-sm text-gray-800 space-y-1">
                                <li>• <strong>Sayısal (SAY):</strong> Matematik (40) + Fen Bilimleri (40)</li>
                                <li>• <strong>Eşit Ağırlık (EA):</strong> Matematik (40) + Edebiyat-Sosyal-1 (40)</li>
                                <li>• <strong>Sözel (SÖZ):</strong> Edebiyat-Sosyal-1 (40) + Sosyal Bilimler-2 (40)</li>
                            </ul>
                        </div>

                        <div className="border border-amber-200 rounded-xl p-5 bg-amber-50/40">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-2">
                                <h3 className="text-lg font-bold text-amber-950">3. Oturum: YDT (Yabancı Dil Testi)</h3>
                                <span className="text-xs bg-amber-200 text-amber-900 font-semibold px-2.5 py-1 rounded-md self-start sm:self-auto">
                                    80 Soru · 120 Dakika · Pazar 15:45
                                </span>
                            </div>
                            <p className="text-sm text-gray-700">
                                Yabancı dil bölümleri için TYT (%40) ve YDT (%60) ağırlıklarıyla puan hesaplanır.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. OBP */}
                <section id="obp" className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <TrendingUp className="h-7 w-7 text-emerald-600" />
                        3. OBP (Ortaöğretim Başarı Puanı)
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Lise diploma notu 5 ile çarpılarak 500 üzerinden OBP bulunur. Ardından bu değer 0,12 katsayısıyla çarpılarak ham puana eklenir (pratik olarak diploma notu × 0,6).
                    </p>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg text-amber-950 text-sm my-4">
                        <strong>Kırık OBP Durumu:</strong> Bir önceki yıl merkezi yerleştirmeyle bir üniversite programına yerleşen adayların OBP katsayısı ertesi yıl 0,12 yerine <strong>0,06</strong> olarak uygulanır.
                    </div>
                </section>

                {/* 4. Baraj ve 0,5 Net */}
                <section id="baraj" className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <Target className="h-7 w-7 text-red-600" />
                        4. 0,5 Net Kuralı
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        TYT puanının hesaplanabilmesi için adayın Türkçe veya Temel Matematik testlerinin en az birinden en az 0,5 ham net çıkarmış olması gerekir. Her iki dersten de sıfır veya eksi net alan adayın puanı hesaplanmaz.
                    </p>
                </section>

                {/* 5. Başarı Sırası Barajı */}
                <section id="baraj-siralama" className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <Award className="h-7 w-7 text-yellow-600" />
                        5. Başarı Sırası Barajları
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        YÖK tarafından belirlenen program bazlı minimum başarı sıralamaları şunlardır:
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse border border-gray-200">
                            <thead className="bg-gray-100 text-gray-800">
                                <tr>
                                    <th className="border p-3 text-left">Bölüm</th>
                                    <th className="border p-3 text-center">Puan Türü</th>
                                    <th className="border p-3 text-center">Gereken En Düşük Sıralama</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="border p-3 font-medium">Tıp Fakültesi</td>
                                    <td className="border p-3 text-center">SAY</td>
                                    <td className="border p-3 text-center font-bold text-red-600">İlk 50.000</td>
                                </tr>
                                <tr className="border-b bg-gray-50">
                                    <td className="border p-3 font-medium">Diş Hekimliği</td>
                                    <td className="border p-3 text-center">SAY</td>
                                    <td className="border p-3 text-center font-bold text-red-600">İlk 80.000</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="border p-3 font-medium">Eczacılık</td>
                                    <td className="border p-3 text-center">SAY</td>
                                    <td className="border p-3 text-center font-bold text-red-600">İlk 100.000</td>
                                </tr>
                                <tr className="border-b bg-gray-50">
                                    <td className="border p-3 font-medium">Hukuk Fakültesi</td>
                                    <td className="border p-3 text-center">EA</td>
                                    <td className="border p-3 text-center font-bold text-red-600">İlk 125.000</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="border p-3 font-medium">Mimarlık</td>
                                    <td className="border p-3 text-center">SAY</td>
                                    <td className="border p-3 text-center font-bold text-red-600">İlk 250.000</td>
                                </tr>
                                <tr className="border-b bg-gray-50">
                                    <td className="border p-3 font-medium">Mühendislik Programları</td>
                                    <td className="border p-3 text-center">SAY</td>
                                    <td className="border p-3 text-center font-bold text-red-600">İlk 300.000</td>
                                </tr>
                                <tr>
                                    <td className="border p-3 font-medium">Öğretmenlik Programları</td>
                                    <td className="border p-3 text-center">İlgili Puan</td>
                                    <td className="border p-3 text-center font-bold text-red-600">İlk 300.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 6. Stratejiler */}
                <section id="stratejiler" className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <Clock className="h-7 w-7 text-emerald-600" />
                        6. Sınav Masası ve Süre Yönetimi
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                        <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-200">
                            <h3 className="font-bold text-blue-900 mb-1">1. Turlama Yöntemi</h3>
                            <p>
                                Çözüm yolu 40 saniye içinde netleşmeyen soruların yanına işaret koyup sonraki soruya geçmek sınav süresini verimli kullanmayı sağlar.
                            </p>
                        </div>
                        <div className="bg-purple-50/60 p-4 rounded-xl border border-purple-200">
                            <h3 className="font-bold text-purple-900 mb-1">2. AYT Ağırlığı</h3>
                            <p>
                                Lisans puanında AYT&apos;nin payı %60 olduğundan hazırlık sürecinde alan derslerine yeterli zaman ayrılmalıdır.
                            </p>
                        </div>
                        <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200">
                            <h3 className="font-bold text-emerald-900 mb-1">3. Yanlış Analizi</h3>
                            <p>
                                Deneme sonrasında yanlış yapılan konuları tespit edip eksik kazanımlara yönelik soru çözmek net artışını hızlandırır.
                            </p>
                        </div>
                        <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200">
                            <h3 className="font-bold text-amber-900 mb-1">4. Günlük Paragraf ve Problem Pratiği</h3>
                            <p>
                                TYT&apos;de Türkçe ve Matematik testlerinde metin anlama ve problem kurma becerisi süre kazanımında temel rol oynar.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl shadow-lg p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-3">Deneme Sonucunuzu Hesaplayın</h2>
                    <p className="text-blue-100 text-sm max-w-xl mx-auto mb-6">
                        Doğru ve yanlış sayılarınızı girerek ham puanınızı, OBP katkınızı ve tahmini başarı sıranızı hemen görün.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-md text-sm"
                    >
                        <Calculator className="h-5 w-5" />
                        Hesaplama Aracına Git →
                    </Link>
                </div>

            </div>
        </div>
    )
}
