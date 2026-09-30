import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, ArrowRight, BookOpen, CheckCircle, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
    title: 'AYT Net Hesaplama 2027 | Sayısal, Eşit Ağırlık ve Sözel Katsayıları',
    description: 'AYT net hesabı nasıl yapılır? Matematik, Fizik, Kimya, Biyoloji, Edebiyat, Tarih, Coğrafya ve Felsefe testlerinin katsayıları, 4 yanlış 1 doğru kuralı ve 0,5 net şartı.',
    keywords: 'AYT net hesaplama, AYT matematik net, AYT fen net, AYT edebiyat net, AYT katsayıları, SAY puanı hesaplama, EA puanı hesaplama, SÖZ puanı hesaplama',
    alternates: { canonical: 'https://yksnethesapla.com/ayt-net-hesaplama' },
}

export default function AYTNetHesaplamaPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-10">
                
                {/* Header */}
                <div className="text-center mb-8">
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full mb-3">
                        AYT Sınav Analizi & Katsayılar
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                        AYT Net Hesaplama
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        160 soru, 180 dakika. Sayısal, Eşit Ağırlık ve Sözel puan türlerinde hangi testin ne kadar puan getirdiğini, 4 yanlışın sildiği netleri ve 0,5 şartını incele.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md text-sm"
                        >
                            <Calculator className="h-5 w-5" />
                            Net Hesaplayıcıyı Aç
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/universiteler"
                            className="inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-300 font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 transition-all shadow-sm text-sm"
                        >
                            🎓 Üniversite Taban Puanları
                        </Link>
                    </div>
                </div>

                {/* AYT Ağırlık ve Puan Dağılımı */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        AYT Puan Türlerine Göre Test Dağılımları
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        AYT&apos;de toplam 160 soru yer alır; ancak adayın alanına göre çözmesi gereken soru sayısı <strong>80&apos;dir</strong>. Fazladan çözülen diğer alan testleri kendi alan puanınızı etkilemez, yalnızca ikinci bir puan türünüzün hesaplanmasını sağlar.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Sayısal */}
                        <div className="border border-blue-200 rounded-2xl p-6 bg-blue-50/40 space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="font-extrabold text-blue-900 text-lg">Sayısal (SAY)</h3>
                                <span className="text-xs font-bold px-2 py-0.5 bg-blue-200 text-blue-800 rounded">80 Soru</span>
                            </div>
                            <ul className="text-xs sm:text-sm text-gray-700 space-y-2">
                                <li>• <strong>Matematik:</strong> 40 Soru (~%30 Etki)</li>
                                <li>• <strong>Fizik:</strong> 14 Soru (~%10 Etki)</li>
                                <li>• <strong>Kimya:</strong> 13 Soru (~%10 Etki)</li>
                                <li>• <strong>Biyoloji:</strong> 13 Soru (~%10 Etki)</li>
                            </ul>
                            <p className="text-xs text-blue-800 pt-2 border-t border-blue-200">
                                Tıp, Diş, Eczacılık, Tüm Mühendislikler ve Mimarlık bu puanla alır.
                            </p>
                        </div>

                        {/* Eşit Ağırlık */}
                        <div className="border border-amber-200 rounded-2xl p-6 bg-amber-50/40 space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="font-extrabold text-amber-900 text-lg">Eşit Ağırlık (EA)</h3>
                                <span className="text-xs font-bold px-2 py-0.5 bg-amber-200 text-amber-800 rounded">80 Soru</span>
                            </div>
                            <ul className="text-xs sm:text-sm text-gray-700 space-y-2">
                                <li>• <strong>Matematik:</strong> 40 Soru (~%30 Etki)</li>
                                <li>• <strong>T. Dili ve Edebiyatı:</strong> 24 Soru (~%18 Etki)</li>
                                <li>• <strong>Tarih-1:</strong> 10 Soru (~%7 Etki)</li>
                                <li>• <strong>Coğrafya-1:</strong> 6 Soru (~%5 Etki)</li>
                            </ul>
                            <p className="text-xs text-amber-900 pt-2 border-t border-amber-200">
                                Hukuk, Psikoloji, İşletme, İktisat ve PDR bu puanla alır.
                            </p>
                        </div>

                        {/* Sözel */}
                        <div className="border border-purple-200 rounded-2xl p-6 bg-purple-50/40 space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="font-extrabold text-purple-900 text-lg">Sözel (SÖZ)</h3>
                                <span className="text-xs font-bold px-2 py-0.5 bg-purple-200 text-purple-800 rounded">80 Soru</span>
                            </div>
                            <ul className="text-xs sm:text-sm text-gray-700 space-y-2">
                                <li>• <strong>Edebiyat-Sosyal-1:</strong> 40 Soru (~%30 Etki)</li>
                                <li>• <strong>Tarih-2:</strong> 11 Soru (~%8 Etki)</li>
                                <li>• <strong>Coğrafya-2:</strong> 11 Soru (~%8 Etki)</li>
                                <li>• <strong>Felsefe Grubu:</strong> 12 Soru (~%9 Etki)</li>
                                <li>• <strong>Din Kültürü:</strong> 6 Soru (~%5 Etki)</li>
                            </ul>
                            <p className="text-xs text-purple-900 pt-2 border-t border-purple-200">
                                Özel Eğitim, İletişim, Gastronomi, Tarih ve Türkçe Öğretmenliği bu puanla alır.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 1 AYT Neti = Kaç TYT Neti? */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        Altın Kural: 1 AYT Neti = Yaklaşık 2.3 TYT Neti
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                        YKS yerleştirme puanı hesaplanırken TYT sınavının toplam katkısı <strong>%40</strong> iken, AYT sınavının katkısı <strong>%60&apos;tır</strong>. Üstelik TYT&apos;de 120 soru varken, AYT&apos;de adayın çözdüğü soru sayısı 80&apos;dir.
                    </p>
                    <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-r-xl text-indigo-950 text-sm space-y-2">
                        <p>
                            📌 <strong>Matematiksel Gerçek:</strong> AYT&apos;de yapacağınız 1 net, yerleştirme puanınıza TYT&apos;de yapacağınız 1 nete kıyasla <strong>2.25 ila 2.35 kat</strong> daha fazla puan kazandırır.
                        </p>
                        <p>
                            Son aylarda TYT netlerini 3-4 net artırmak haftalar alabilirken, AYT konularına odaklanarak netlerinizi 10-15 net artırmak sınav sıralamanızı yüz binlerce kişi öne fırlatabilir.
                        </p>
                    </div>
                </div>

                {/* 0,5 Net Kuralı AYT'de Nasıl İşler? */}
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 text-amber-950">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                        AYT 0,5 Ham Net Barajı Detayları
                    </h3>
                    <p className="text-sm leading-relaxed mb-3">
                        Adayın AYT puanının (SAY, EA veya SÖZ) hesaplanabilmesi için, o puan türünü oluşturan <strong>en az iki testten birinden en az 0,5 ham net</strong> çıkarması zorunludur:
                    </p>
                    <ul className="text-xs sm:text-sm space-y-1.5 pl-4 list-disc">
                        <li><strong>SAY Puanı için:</strong> AYT Matematik veya AYT Fen Bilimleri testlerinin en az birinden ≥ 0,5 net.</li>
                        <li><strong>EA Puanı için:</strong> AYT Matematik veya AYT Türk Dili ve Edebiyatı-Sosyal-1 testlerinin en az birinden ≥ 0,5 net.</li>
                        <li><strong>SÖZ Puanı için:</strong> AYT Türk Dili ve Edebiyatı-Sosyal-1 veya Sosyal-2 testlerinin en az birinden ≥ 0,5 net.</li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-700 to-purple-800 rounded-2xl shadow-lg p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-3">AYT Netlerini Gir ve Sıralamanı Gör</h2>
                    <p className="text-blue-100 text-sm max-w-xl mx-auto mb-6">
                        Doğru ve yanlış sayılarını girerek 2027 katsayılarına göre Sayısal, Eşit Ağırlık ve Sözel yerleştirme puanlarını hemen hesapla.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-md text-sm"
                    >
                        <BookOpen className="h-5 w-5" />
                        Tam YKS Hesaplama Motoruna Git →
                    </Link>
                </div>

            </div>
        </div>
    )
}
