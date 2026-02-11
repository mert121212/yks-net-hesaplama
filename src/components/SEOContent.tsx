'use client'

import { BookOpen, Calculator, TrendingUp, Target, Award, Users } from 'lucide-react'
import Link from 'next/link'

export default function SEOContent() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            {/* YKS Net Hesaplama Nedir */}
            <section className="card">
                <div className="flex items-center gap-3 mb-6">
                    <Calculator className="h-8 w-8 text-primary-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        YKS Net Hesaplama Nasıl Yapılır?
                    </h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                    <p>
                        YKS net hesaplama, Yükseköğretim Kurumları Sınavı'nda (YKS) başarılı olmanın ilk adımıdır.
                        Net hesaplama formülü oldukça basittir: Doğru cevap sayısından, yanlış cevap sayısının dörtte biri çıkarılır.
                        Örneğin, 30 doğru ve 8 yanlış cevabınız varsa, netiniz 30 - (8÷4) = 28 olur.
                    </p>
                    <p>
                        2026 YKS sınavında başarılı olmak için TYT (Temel Yeterlilik Testi), AYT (Alan Yeterlilik Testi)
                        ve YDT (Yabancı Dil Testi) netlerinizi doğru hesaplamanız çok önemlidir. Sitemiz, bu hesaplamaları
                        otomatik olarak yaparak size zaman kazandırır ve hata riskini ortadan kaldırır.
                    </p>
                    <p>
                        YKS net hesaplama aracımız ile TYT'de Türkçe, Matematik, Sosyal Bilimler ve Fen Bilimleri;
                        AYT'de ise alanınıza göre Matematik, Fizik, Kimya, Biyoloji, Edebiyat, Tarih, Coğrafya, Felsefe
                        ve Din Kültürü derslerinden netlerinizi hesaplayabilirsiniz.
                    </p>
                </div>
            </section>

            {/* Özellikler */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-primary-100 rounded-lg">
                            <BookOpen className="h-6 w-6 text-primary-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">TYT Net Hesaplama</h3>
                    </div>
                    <p className="text-gray-600">
                        120 soruluk TYT sınavında Türkçe, Matematik, Sosyal ve Fen Bilimleri netlerinizi
                        anında hesaplayın. Doğru ve yanlış sayılarınızı girin, netinizi öğrenin.
                    </p>
                </div>

                <div className="card hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-green-100 rounded-lg">
                            <Target className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">AYT Puan Hesaplama</h3>
                    </div>
                    <p className="text-gray-600">
                        Sayısal, Eşit Ağırlık veya Sözel alanınıza göre AYT netlerinizi hesaplayın.
                        SAY, EA, SÖZ ve DİL puanlarınızı öğrenin, hedef üniversitenizi belirleyin.
                    </p>
                </div>

                <div className="card hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                            <TrendingUp className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Üniversite Puanı</h3>
                    </div>
                    <p className="text-gray-600">
                        TYT ve AYT netlerinize göre üniversite yerleştirme puanınızı hesaplayın.
                        OBP (Ortaöğretim Başarı Puanı) ile birlikte tam puanınızı öğrenin.
                    </p>
                </div>
            </section>

            {/* YKS 2026 Bilgileri */}
            <section className="card bg-gradient-to-r from-primary-50 to-blue-50">
                <div className="flex items-center gap-3 mb-6">
                    <Award className="h-8 w-8 text-primary-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        YKS 2026 Hakkında Bilmeniz Gerekenler
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                    <div>
                        <h3 className="font-semibold text-lg mb-3 text-gray-900">TYT (Temel Yeterlilik Testi)</h3>
                        <ul className="space-y-2 text-sm">
                            <li>• Toplam 120 soru (135 dakika)</li>
                            <li>• Türkçe: 40 soru</li>
                            <li>• Matematik: 40 soru</li>
                            <li>• Sosyal Bilimler: 20 soru</li>
                            <li>• Fen Bilimleri: 20 soru</li>
                            <li>• Minimum 150 puan gerekli</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-3 text-gray-900">AYT (Alan Yeterlilik Testi)</h3>
                        <ul className="space-y-2 text-sm">
                            <li>• Sayısal: Matematik, Fizik, Kimya, Biyoloji</li>
                            <li>• Eşit Ağırlık: Matematik, Edebiyat, Tarih, Coğrafya</li>
                            <li>• Sözel: Edebiyat, Tarih, Coğrafya, Felsefe, Din</li>
                            <li>• Dil: YDT (80 soru yabancı dil)</li>
                            <li>• Alan seçimine göre farklı testler</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Neden Bizi Seçmelisiniz */}
            <section className="card">
                <div className="flex items-center gap-3 mb-6">
                    <Users className="h-8 w-8 text-primary-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        Neden YKS Net Hesaplama Aracımızı Kullanmalısınız?
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                <span className="text-green-600 text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Hızlı ve Kolay</h4>
                                <p className="text-sm text-gray-600">
                                    Doğru ve yanlış sayılarınızı girin, netleriniz anında hesaplansın.
                                    Karmaşık formüllerle uğraşmayın.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                <span className="text-green-600 text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Tamamen Ücretsiz</h4>
                                <p className="text-sm text-gray-600">
                                    Hiçbir ücret ödemeden, sınırsız sayıda net hesaplama yapabilirsiniz.
                                    Kayıt gerektirmez.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                <span className="text-green-600 text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Güncel ve Doğru</h4>
                                <p className="text-sm text-gray-600">
                                    2026 YKS için güncellenmiş formüller ve katsayılar.
                                    ÖSYM standartlarına uygun hesaplama.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                <span className="text-green-600 text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Üniversite Önerileri</h4>
                                <p className="text-sm text-gray-600">
                                    Puanınıza göre kazanabileceğiniz 314+ üniversite programını görün.
                                    Filtreleme ve arama özellikleri.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                <span className="text-green-600 text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Mobil Uyumlu</h4>
                                <p className="text-sm text-gray-600">
                                    Telefon, tablet veya bilgisayardan kolayca erişin.
                                    Her cihazda mükemmel çalışır.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                <span className="text-green-600 text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Gizlilik Güvencesi</h4>
                                <p className="text-sm text-gray-600">
                                    Verileriniz sunucularımızda saklanmaz. Tüm hesaplamalar
                                    tarayıcınızda yapılır.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="card bg-gradient-to-r from-primary-600 to-blue-600 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">
                    YKS 2026'ya Hazır mısınız?
                </h2>
                <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
                    Hemen yukarıdaki hesaplama aracını kullanarak TYT ve AYT netlerinizi hesaplayın,
                    üniversite puanınızı öğrenin ve hedef bölümünüzü belirleyin!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/#hesaplama" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Net Hesaplamaya Başla
                    </Link>
                    <Link href="/sss" className="bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors border-2 border-white">
                        Sıkça Sorulan Sorular
                    </Link>
                </div>
            </section>
        </div>
    )
}
