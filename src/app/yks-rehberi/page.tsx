import { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, BookOpen, Target, TrendingUp, CheckCircle, Clock, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
    title: '2026 YKS Rehberi: Puan Hesaplama, Soru Dağılımı ve Başarı Stratejileri',
    description: 'YKS 2026 sınavı için kapsamlı rehber. TYT AYT net hesaplama, puan türleri, OBP etkisi, baraj bilgisi ve başarı stratejileri. Güncel ve doğru bilgilerle hazırlanın.',
    keywords: 'YKS 2026 rehberi, YKS net hesaplama, TYT net hesaplama, AYT net hesaplama, YKS puan hesaplama, OBP hesaplama, YKS başarı stratejileri',
}

export default function YKSRehberiPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        2026 YKS Rehberi
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Puan hesaplama mantığı, güncel sınav yapısı ve başarıya giden stratejik adımlar.
                        2026 YKS sınavına hazırlanırken ihtiyacınız olan tüm doğru bilgiler burada.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        <Calculator className="h-5 w-5 mr-2" />
                        Net Hesaplama Aracını Kullan
                    </Link>
                </div>

                {/* İçindekiler */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">İçindekiler</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <a href="#puan-hesaplama" className="block text-primary-600 hover:text-primary-700">1. YKS Puanı Nasıl Hesaplanır?</a>
                            <a href="#soru-dagilimi" className="block text-primary-600 hover:text-primary-700">2. 2026 Soru Dağılımı ve Test Yapısı</a>
                            <a href="#obp" className="block text-primary-600 hover:text-primary-700">3. OBP Etkisi</a>
                            <a href="#baraj" className="block text-primary-600 hover:text-primary-700">4. Baraj Puanı Hakkında Doğru Bilgi</a>
                        </div>
                        <div className="space-y-2">
                            <a href="#puan-turleri" className="block text-primary-600 hover:text-primary-700">5. Puan Türleri</a>
                            <a href="#stratejiler" className="block text-primary-600 hover:text-primary-700">6. Başarı Stratejileri</a>
                            <a href="#sss" className="block text-primary-600 hover:text-primary-700">7. Sıkça Sorulan Sorular</a>
                        </div>
                    </div>
                </div>

                {/* 1. Puan Hesaplama */}
                <section id="puan-hesaplama" className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <Calculator className="h-8 w-8 text-primary-600 mr-3" />
                        1. YKS Puanı Nasıl Hesaplanır?
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg">
                        YKS puanı hesaplanırken temel kural, netlerinizin katsayılarla çarpılması ve üzerine
                        OBP (Ortaöğretim Başarı Puanı) eklenmesidir. Standart sapma her yıl değişse de
                        temel net hesaplama formülü sabittir.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Net Hesaplama Formülü</h3>
                    <div className="bg-gray-50 p-6 rounded-lg mb-6 text-center">
                        <p className="font-mono text-xl font-bold text-gray-800">
                            Net = Doğru Sayısı − (Yanlış Sayısı ÷ 4)
                        </p>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg mb-6">
                        <p className="text-yellow-900 font-medium">
                            Önemli Not: Puanınızın hesaplanabilmesi için ilgili testlerin en az birinden
                            0,5 net yapmış olmanız gerekmektedir.
                        </p>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Örnek Net Hesaplamaları</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300 rounded-lg">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="border border-gray-300 p-3 text-left">Ders</th>
                                    <th className="border border-gray-300 p-3 text-center">Doğru</th>
                                    <th className="border border-gray-300 p-3 text-center">Yanlış</th>
                                    <th className="border border-gray-300 p-3 text-center">Boş</th>
                                    <th className="border border-gray-300 p-3 text-center">Net</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 p-3 font-medium">TYT Matematik</td>
                                    <td className="border border-gray-300 p-3 text-center">30</td>
                                    <td className="border border-gray-300 p-3 text-center">8</td>
                                    <td className="border border-gray-300 p-3 text-center">2</td>
                                    <td className="border border-gray-300 p-3 text-center font-bold text-green-600">28</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-gray-300 p-3 font-medium">TYT Türkçe</td>
                                    <td className="border border-gray-300 p-3 text-center">25</td>
                                    <td className="border border-gray-300 p-3 text-center">12</td>
                                    <td className="border border-gray-300 p-3 text-center">3</td>
                                    <td className="border border-gray-300 p-3 text-center font-bold text-green-600">22</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-3 font-medium">AYT Matematik</td>
                                    <td className="border border-gray-300 p-3 text-center">20</td>
                                    <td className="border border-gray-300 p-3 text-center">16</td>
                                    <td className="border border-gray-300 p-3 text-center">4</td>
                                    <td className="border border-gray-300 p-3 text-center font-bold text-green-600">16</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 2. Soru Dağılımı */}
                <section id="soru-dagilimi" className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
                        2. 2026 YKS Soru Dağılımı ve Test Yapısı
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Sınav üç ana oturumdan oluşur. Her oturumun aday üzerindeki etkisi ve soru ağırlığı farklıdır.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">TYT (Temel Yeterlilik Testi)</h3>
                    <p className="text-gray-600 mb-4">Tüm adayların girmesi zorunlu olan ilk oturumdur. 165 dakika sürer.</p>
                    <div className="overflow-x-auto mb-8">
                        <table className="w-full border-collapse border border-gray-300 rounded-lg">
                            <thead className="bg-blue-50">
                                <tr>
                                    <th className="border border-gray-300 p-3 text-left">Ders</th>
                                    <th className="border border-gray-300 p-3 text-center">Soru Sayısı</th>
                                    <th className="border border-gray-300 p-3 text-left">Önemli Konular</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 p-3 font-medium">Türkçe</td>
                                    <td className="border border-gray-300 p-3 text-center font-bold">40</td>
                                    <td className="border border-gray-300 p-3">Paragraf Analizi, Dil Bilgisi</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-gray-300 p-3 font-medium">Matematik</td>
                                    <td className="border border-gray-300 p-3 text-center font-bold">40</td>
                                    <td className="border border-gray-300 p-3">Sayılar, Problemler, Geometri</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 p-3 font-medium">Sosyal Bilimler</td>
                                    <td className="border border-gray-300 p-3 text-center font-bold">20</td>
                                    <td className="border border-gray-300 p-3">Tarih, Coğrafya, Felsefe, Din</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-gray-300 p-3 font-medium">Fen Bilimleri</td>
                                    <td className="border border-gray-300 p-3 text-center font-bold">20</td>
                                    <td className="border border-gray-300 p-3">Fizik, Kimya, Biyoloji</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">AYT (Alan Yeterlilik Testi)</h3>
                    <p className="text-gray-600 mb-4">Kendi alanında uzmanlaşmak isteyen adayların girdiği ikinci oturumdur. 180 dakika sürer.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                            <h4 className="font-semibold text-blue-900 mb-3">Sayısal (SAY)</h4>
                            <ul className="text-sm text-blue-800 space-y-1">
                                <li>• Matematik: 40 soru</li>
                                <li>• Fizik: 14 soru</li>
                                <li>• Kimya: 13 soru</li>
                                <li>• Biyoloji: 13 soru</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                            <h4 className="font-semibold text-green-900 mb-3">Eşit Ağırlık (EA)</h4>
                            <ul className="text-sm text-green-800 space-y-1">
                                <li>• Matematik: 40 soru</li>
                                <li>• Türk Dili ve Ed.: 24 soru</li>
                                <li>• Tarih-1: 10 soru</li>
                                <li>• Coğrafya-1: 6 soru</li>
                            </ul>
                        </div>
                        <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                            <h4 className="font-semibold text-purple-900 mb-3">Sözel (SÖZ)</h4>
                            <ul className="text-sm text-purple-800 space-y-1">
                                <li>• Türk Dili ve Ed.: 24 soru</li>
                                <li>• Tarih-1: 10 soru</li>
                                <li>• Coğrafya-1: 6 soru</li>
                                <li>• Tarih-2, Coğ-2, Felsefe, Din: 40 soru</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 3. OBP */}
                <section id="obp" className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                        3. OBP (Ortaöğretim Başarı Puanı) Etkisi
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg">
                        Diploma notunuz, YKS yerleştirme puanınızı doğrudan etkiler. Diploma notunuz 5 ile
                        çarpılarak OBP&apos;ye dönüştürülür ve bu puanın 0,12 katsayısı yerleştirme puanınıza eklenir.
                    </p>
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-6">
                        <h3 className="font-semibold text-green-900 mb-3">Örnek Hesaplama</h3>
                        <p className="text-green-800 mb-2">Diploma notu: <strong>80</strong></p>
                        <p className="text-green-800 mb-2">OBP = 80 × 5 = <strong>400</strong></p>
                        <p className="text-green-800">Yerleştirme puanına katkı = 400 × 0,12 = <strong>+48 puan</strong></p>
                    </div>
                    <div className="bg-blue-50 p-5 rounded-lg">
                        <p className="text-blue-900 text-sm">
                            <strong>Not:</strong> Geçen yıl bir bölüme yerleşmiş adaylar için OBP katkısı yarıya düşürülür (katsayı 0,06).
                            Meslek lisesi mezunları kendi alanlarındaki programlara başvururken ek puan avantajından yararlanabilir.
                        </p>
                    </div>
                </section>

                {/* 4. Baraj */}
                <section id="baraj" className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <Target className="h-8 w-8 text-red-600 mr-3" />
                        4. Baraj Puanı Hakkında Doğru Bilgi
                    </h2>
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
                        <h3 className="font-semibold text-red-900 mb-3">⚠️ Yaygın Yanlış Bilgi</h3>
                        <p className="text-red-800">
                            Birçok kaynakta hâlâ yer alan <strong>&quot;150 veya 180 baraj puanı&quot;</strong> bilgisi artık geçerli değildir.
                            2022 yılında yapılan düzenleme ile TYT ve AYT&apos;de baraj puanı uygulaması <strong>tamamen kaldırılmıştır.</strong>
                        </p>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-6">
                        <h3 className="font-semibold text-green-900 mb-3">✅ Güncel Durum</h3>
                        <p className="text-green-800">
                            Puanınızın hesaplanması için sadece testlerin herhangi birinden <strong>0,5 net</strong> yapmanız yeterlidir.
                            Baraj puanı olmadan da AYT&apos;ye girebilir ve puan alabilirsiniz.
                        </p>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg">
                        <p className="text-yellow-900 text-sm">
                            <strong>Dikkat:</strong> Tıp, Hukuk, Mimarlık gibi bazı bölümler için hâlâ
                            &quot;Başarı Sırası Barajı&quot; uygulanmaktadır (örn. Hukuk için ilk 125.000 sırası şartı).
                            Bu bölümlere başvurmadan önce ÖSYM kılavuzunu kontrol edin.
                        </p>
                    </div>
                </section>

                {/* 5. Puan Türleri */}
                <section id="puan-turleri" className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <Award className="h-8 w-8 text-yellow-600 mr-3" />
                        5. YKS Puan Türleri
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <h3 className="text-xl font-semibold text-blue-900 mb-3">SAY Puanı</h3>
                            <p className="text-blue-800 mb-3 text-sm">Mühendislik, Tıp, Fen Fakülteleri için kullanılır.</p>
                            <ul className="text-blue-800 space-y-1 text-sm">
                                <li>• TYT (tüm dersler)</li>
                                <li>• AYT Matematik</li>
                                <li>• AYT Fizik, Kimya, Biyoloji</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                            <h3 className="text-xl font-semibold text-green-900 mb-3">EA Puanı</h3>
                            <p className="text-green-800 mb-3 text-sm">Hukuk, İktisat, İşletme gibi bölümler için kullanılır.</p>
                            <ul className="text-green-800 space-y-1 text-sm">
                                <li>• TYT (tüm dersler)</li>
                                <li>• AYT Matematik</li>
                                <li>• AYT Edebiyat, Tarih-1, Coğrafya-1</li>
                            </ul>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                            <h3 className="text-xl font-semibold text-purple-900 mb-3">SÖZ Puanı</h3>
                            <p className="text-purple-800 mb-3 text-sm">Edebiyat, Tarih, Sosyoloji gibi bölümler için kullanılır.</p>
                            <ul className="text-purple-800 space-y-1 text-sm">
                                <li>• TYT (tüm dersler)</li>
                                <li>• AYT Edebiyat, Tarih-1 &amp; 2, Coğrafya-1 &amp; 2</li>
                                <li>• AYT Felsefe, Din Kültürü</li>
                            </ul>
                        </div>
                        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                            <h3 className="text-xl font-semibold text-orange-900 mb-3">DİL Puanı</h3>
                            <p className="text-orange-800 mb-3 text-sm">Yabancı Dil bölümleri için kullanılır.</p>
                            <ul className="text-orange-800 space-y-1 text-sm">
                                <li>• TYT (tüm dersler)</li>
                                <li>• YDT (Yabancı Dil Testi — 80 soru)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 6. Stratejiler */}
                <section id="stratejiler" className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <Clock className="h-8 w-8 text-indigo-600 mr-3" />
                        6. 2026 YKS Başarı Stratejileri
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                            <h3 className="font-semibold text-blue-900 mb-2">Paragraf Rutini</h3>
                            <p className="text-blue-800 text-sm">
                                Her gün en az 20 paragraf sorusu çözmek, sadece Türkçe değil Matematik sorularını
                                anlama hızınızı da artırır.
                            </p>
                        </div>
                        <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                            <h3 className="font-semibold text-green-900 mb-2">AYT Matematik Farkı</h3>
                            <p className="text-green-800 text-sm">
                                Yerleştirme puanında en kritik testlerden biri AYT Matematiktir.
                                Konu eksiklerinizi erken bitirmeye odaklanın; son aylarda soru çözme hızına geçin.
                            </p>
                        </div>
                        <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
                            <h3 className="font-semibold text-purple-900 mb-2">Deneme Analizi</h3>
                            <p className="text-purple-800 text-sm">
                                Net hesaplamaktan daha önemlisi, denemede yaptığınız yanlışların nedenini bulmaktır.
                                Aynı hatayı iki kez yapmamak için hata defteri tutun.
                            </p>
                        </div>
                        <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
                            <h3 className="font-semibold text-orange-900 mb-2">Zaman Yönetimi</h3>
                            <p className="text-orange-800 text-sm">
                                TYT&apos;de soru başına ortalama 45 saniye, AYT&apos;de 90 saniye hedefleyin.
                                Emin olmadığınız soruları işaretleyip geçin, sona bırakın.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 7. SSS */}
                <section id="sss" className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                        7. Sıkça Sorulan Sorular
                    </h2>
                    <div className="space-y-6">
                        <div className="border-b pb-5">
                            <h3 className="font-semibold text-gray-900 mb-2">TYT puanı kaç yıl geçerli?</h3>
                            <p className="text-gray-600 text-sm">
                                TYT puanının bir sonraki yıl kullanılması uygulaması kaldırılmıştır.
                                Alınan puan sadece o yıl için geçerlidir.
                            </p>
                        </div>
                        <div className="border-b pb-5">
                            <h3 className="font-semibold text-gray-900 mb-2">Meslek lisesi ek puanı devam ediyor mu?</h3>
                            <p className="text-gray-600 text-sm">
                                Kendi alanındaki ilgili programlara yerleşen adaylar için ek puan uygulaması
                                belirli şartlar dahilinde devam etmektedir. Detaylar için ÖSYM kılavuzunu inceleyin.
                            </p>
                        </div>
                        <div className="border-b pb-5">
                            <h3 className="font-semibold text-gray-900 mb-2">AYT&apos;ye girmek için TYT&apos;den kaç puan almak gerekiyor?</h3>
                            <p className="text-gray-600 text-sm">
                                2022 yılından itibaren TYT baraj puanı uygulaması kaldırılmıştır.
                                Herhangi bir testten 0,5 net yapmanız puan hesaplanması için yeterlidir.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">En doğru sıralama tahmini nasıl yapılır?</h3>
                            <p className="text-gray-600 text-sm">
                                Sınavın zorluk derecesi her yıl değiştiği için netlerinizle en gerçekçi tahmini
                                yapmak için{' '}
                                <Link href="/" className="text-primary-600 hover:underline font-medium">
                                    Net Hesaplama Aracımızı
                                </Link>{' '}
                                kullanabilirsiniz.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">Puanınızı Hemen Hesaplayın</h2>
                    <p className="text-primary-100 mb-6">
                        Netlerinizi girerek SAY, EA, SÖZ ve DİL puanlarınızı ve tahmini sıralamanızı anında öğrenin.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <Calculator className="h-5 w-5 mr-2" />
                        Net Hesaplama Aracını Kullan
                    </Link>
                </div>
            </main>
        </div>
    )
}
