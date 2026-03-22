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
                            <li>• Toplam 120 soru (165 dakika)</li>
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
                                <h4 className="font-semibold text-gray-900 mb-1">Tahmini Sıralama</h4>
                                <p className="text-sm text-gray-600">
                                    Puanınıza göre tahmini YKS sıralamanızı görün.
                                    Gerçek sıralama verilerine dayalı interpolasyon.
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

            {/* Net Hesaplama Formülleri */}
            <section className="card">
                <div className="flex items-center gap-3 mb-6">
                    <Calculator className="h-8 w-8 text-green-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        YKS Net Hesaplama Formülleri
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-gray-900">Net Hesaplama Formülü</h3>
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                            <p className="text-blue-800 font-mono text-lg font-bold text-center">
                                Net = Doğru − (Yanlış ÷ 4)
                            </p>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700">
                            <p><span className="font-semibold">Örnek 1:</span> 35 doğru, 8 yanlış → 35 − (8÷4) = 35 − 2 = <span className="font-bold text-green-600">33 net</span></p>
                            <p><span className="font-semibold">Örnek 2:</span> 28 doğru, 12 yanlış → 28 − (12÷4) = 28 − 3 = <span className="font-bold text-green-600">25 net</span></p>
                            <p><span className="font-semibold">Örnek 3:</span> 40 doğru, 0 yanlış → 40 − 0 = <span className="font-bold text-green-600">40 net</span></p>
                        </div>
                        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                            <p className="text-sm text-amber-800">
                                💡 <span className="font-semibold">İpucu:</span> Boş bırakılan sorular net hesaplamasını etkilemez. Sadece yanlış cevaplar 0.25 net düşürür.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-gray-900">TYT Puan Hesaplama</h3>
                        <div className="space-y-3 text-sm text-gray-700">
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium">Türkçe (40 soru)</span>
                                <span className="text-blue-600 font-semibold">Katsayı: 1.333</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium">Matematik (40 soru)</span>
                                <span className="text-blue-600 font-semibold">Katsayı: 1.333</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium">Sosyal Bilimler (20 soru)</span>
                                <span className="text-blue-600 font-semibold">Katsayı: 1.000</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium">Fen Bilimleri (20 soru)</span>
                                <span className="text-blue-600 font-semibold">Katsayı: 1.000</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-3">* Katsayılar tahminidir. ÖSYM kesin katsayıları açıklamaz; gerçek puanlar her yıl değişir.</p>
                    </div>
                </div>
            </section>

            {/* Puan Türleri */}
            <section className="card">
                <div className="flex items-center gap-3 mb-6">
                    <Target className="h-8 w-8 text-purple-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        YKS Puan Türleri: SAY, EA, SÖZ, DİL
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="border-2 border-green-200 rounded-xl p-4 bg-green-50">
                        <div className="text-2xl font-bold text-green-600 mb-2">SAY</div>
                        <div className="text-sm font-semibold text-gray-800 mb-2">Sayısal Puan</div>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Tıp, Mühendislik</li>
                            <li>• Diş Hekimliği, Eczacılık</li>
                            <li>• Mimarlık, Bilgisayar</li>
                            <li>• TYT + AYT Matematik ağırlıklı</li>
                        </ul>
                    </div>
                    <div className="border-2 border-blue-200 rounded-xl p-4 bg-blue-50">
                        <div className="text-2xl font-bold text-blue-600 mb-2">EA</div>
                        <div className="text-sm font-semibold text-gray-800 mb-2">Eşit Ağırlık Puanı</div>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Hukuk, İktisat</li>
                            <li>• İşletme, Psikoloji</li>
                            <li>• Uluslararası İlişkiler</li>
                            <li>• TYT + AYT Eşit ağırlıklı</li>
                        </ul>
                    </div>
                    <div className="border-2 border-purple-200 rounded-xl p-4 bg-purple-50">
                        <div className="text-2xl font-bold text-purple-600 mb-2">SÖZ</div>
                        <div className="text-sm font-semibold text-gray-800 mb-2">Sözel Puan</div>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Türk Dili ve Edebiyatı</li>
                            <li>• Tarih, Coğrafya</li>
                            <li>• Sosyoloji, Felsefe</li>
                            <li>• TYT + AYT Sözel ağırlıklı</li>
                        </ul>
                    </div>
                    <div className="border-2 border-orange-200 rounded-xl p-4 bg-orange-50">
                        <div className="text-2xl font-bold text-orange-600 mb-2">DİL</div>
                        <div className="text-sm font-semibold text-gray-800 mb-2">Dil Puanı</div>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Yabancı Dil Bölümleri</li>
                            <li>• Mütercim Tercümanlık</li>
                            <li>• Amerikan Kültürü</li>
                            <li>• TYT + YDT ağırlıklı</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Sık Sorulan Sorular */}
            <section className="card">
                <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        YKS Net Hesaplama Hakkında Sık Sorulan Sorular
                    </h2>
                </div>
                <div className="space-y-4">
                    {[
                        {
                            q: 'YKS net hesaplama nasıl yapılır?',
                            a: 'Net hesaplama formülü: Net = Doğru − (Yanlış ÷ 4). Örneğin 30 doğru, 8 yanlış yaparsanız netiniz 30 − 2 = 28 olur. Boş bırakılan sorular hesaplamayı etkilemez.'
                        },
                        {
                            q: 'TYT\'de kaç net yapmalıyım?',
                            a: 'Devlet üniversitelerine yerleşmek için genellikle TYT\'de 70-80 net yapmanız önerilir. Prestijli bölümler için 90+ net gerekebilir. Minimum 150 TYT puanı şartı vardır.'
                        },
                        {
                            q: 'AYT\'de kaç net yapmalıyım?',
                            a: 'Hedef bölümünüze göre değişir. Tıp için SAY\'da 150+ net, mühendislik için 80-120 net, hukuk için EA\'da 100+ net yapmanız önerilir.'
                        },
                        {
                            q: 'OBP (Ortaöğretim Başarı Puanı) nedir?',
                            a: 'OBP, lise diploma notunuzun YKS puanına katkısıdır. Diploma notunuz 100 üzerinden hesaplanır ve YKS puanınıza %12 oranında eklenir. Yüksek OBP sıralamanızı olumlu etkiler.'
                        },
                        {
                            q: 'YKS 2026 ne zaman?',
                            a: 'YKS 2026 sınavı Haziran 2026\'da yapılacaktır. TYT birinci gün, AYT ve YDT ikinci gün uygulanır. Kesin tarihler için ÖSYM\'nin resmi sitesini takip edin.'
                        },
                        {
                            q: 'Puan türü nasıl seçilir?',
                            a: 'Hedef bölümünüze göre puan türü belirlenir. Mühendislik/Tıp için SAY, Hukuk/İktisat için EA, Edebiyat/Tarih için SÖZ, Yabancı Dil bölümleri için DİL puanı gerekir.'
                        },
                    ].map((item, i) => (
                        <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                            <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 font-medium text-gray-900">
                                {item.q}
                                <span className="text-gray-400 group-open:rotate-180 transition-transform text-xl">▾</span>
                            </summary>
                            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                                {item.a}
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* Blog Linkleri */}
            <section className="card">
                <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="h-8 w-8 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                        YKS Hazırlık Rehberleri
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { href: '/blog/tyt-net-hesaplama-rehberi', title: 'TYT Net Hesaplama Rehberi', desc: 'TYT\'de başarılı olmak için net hesaplama stratejileri' },
                        { href: '/blog/ayt-puan-hesaplama', title: 'AYT Puan Hesaplama', desc: 'SAY, EA, SÖZ puan hesaplama yöntemleri' },
                        { href: '/blog/yks-puan-turleri', title: 'YKS Puan Türleri', desc: 'Hangi puan türü hangi bölüm için geçerli?' },
                        { href: '/blog/obp-hesaplama', title: 'OBP Hesaplama', desc: 'Diploma notunuzun YKS\'ye etkisi nasıl hesaplanır?' },
                        { href: '/blog/universite-tercih-stratejileri', title: 'Tercih Stratejileri', desc: 'Üniversite tercihinde dikkat edilmesi gerekenler' },
                        { href: '/blog/yks-hazirlik-programi', title: 'YKS Hazırlık Programı', desc: 'Etkili çalışma programı nasıl oluşturulur?' },
                    ].map((item, i) => (
                        <Link key={i} href={item.href} className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all group">
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1 text-sm">{item.title}</h3>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                        </Link>
                    ))}
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
