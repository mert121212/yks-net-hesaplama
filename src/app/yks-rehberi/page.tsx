import { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, BookOpen, Target, TrendingUp, CheckCircle, Clock, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
    title: 'YKS 2026 Rehberi | Net Hesaplama ve Başarı Stratejileri',
    description: 'YKS 2026 sınavı için kapsamlı rehber. TYT AYT YDT net hesaplama, puan türleri, çalışma stratejileri ve başarı ipuçları. YKS net hesaplama formülleri ve örnek sorular.',
    keywords: 'YKS 2026 rehberi, YKS net hesaplama, TYT net hesaplama, AYT net hesaplama, YDT net hesaplama, YKS puan hesaplama, YKS başarı stratejileri, YKS çalışma rehberi',
}

export default function YKSRehberiPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        YKS 2026 Kapsamlı Rehberi
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        YKS net hesaplama, puan türleri, çalışma stratejileri ve başarı için bilmeniz gereken her şey.
                        2026 YKS sınavına hazırlanırken ihtiyacınız olan tüm bilgiler burada.
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
                            <a href="#yks-nedir" className="block text-primary-600 hover:text-primary-700">1. YKS Nedir?</a>
                            <a href="#tyt-rehberi" className="block text-primary-600 hover:text-primary-700">2. TYT Rehberi</a>
                            <a href="#ayt-rehberi" className="block text-primary-600 hover:text-primary-700">3. AYT Rehberi</a>
                            <a href="#ydt-rehberi" className="block text-primary-600 hover:text-primary-700">4. YDT Rehberi</a>
                        </div>
                        <div className="space-y-2">
                            <a href="#net-hesaplama" className="block text-primary-600 hover:text-primary-700">5. Net Hesaplama</a>
                            <a href="#puan-turleri" className="block text-primary-600 hover:text-primary-700">6. Puan Türleri</a>
                            <a href="#calisma-stratejileri" className="block text-primary-600 hover:text-primary-700">7. Çalışma Stratejileri</a>
                            <a href="#basari-ipuclari" className="block text-primary-600 hover:text-primary-700">8. Başarı İpuçları</a>
                        </div>
                    </div>
                </div>

                {/* YKS Nedir */}
                <section id="yks-nedir" className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <BookOpen className="h-8 w-8 text-primary-600 mr-3" />
                        YKS Nedir?
                    </h2>
                    <div className="prose max-w-none">
                        <p className="text-gray-600 mb-4 text-lg">
                            Yükseköğretim Kurumları Sınavı (YKS), Türkiye&apos;de üniversiteye giriş için yapılan merkezi sınavdır.
                            ÖSYM tarafından düzenlenen bu sınav, öğrencilerin yükseköğretim kurumlarına yerleştirilmesinde kullanılır.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-4">YKS 2026 Önemli Tarihler</h3>
                        <div className="bg-blue-50 p-6 rounded-lg mb-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-semibold text-blue-900 mb-2">TYT Sınavı</h4>
                                    <p className="text-blue-800">20 Haziran 2026 (Cumartesi)</p>
                                    <p className="text-sm text-blue-700">Saat: 10:15 - 13:00 (165 dakika)</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-900 mb-2">AYT Sınavı</h4>
                                    <p className="text-blue-800">21 Haziran 2026 (Pazar)</p>
                                    <p className="text-sm text-blue-700">Saat: 10:15 - 13:15 (180 dakika)</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-4">YKS Sınav Yapısı</h3>
                        <p className="text-gray-600 mb-4">
                            YKS üç aşamadan oluşur: TYT (Temel Yeterlilik Testi), AYT (Alan Yeterlilik Testi) ve YDT (Yabancı Dil Testi).
                            Her aşama farklı amaçlara hizmet eder ve farklı puan türlerinde kullanılır.
                        </p>
                    </div>
                </section>

                {/* TYT Rehberi */}
                <section id="tyt-rehberi" className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <Target className="h-8 w-8 text-green-600 mr-3" />
                        TYT (Temel Yeterlilik Testi) Rehberi
                    </h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">TYT Soru Dağılımı</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-blue-900 mb-3">Türkçe (40 Soru)</h4>
                                <ul className="text-blue-800 space-y-1">
                                    <li>• Okuma Anlama: 15-20 soru</li>
                                    <li>• Dil Bilgisi: 8-12 soru</li>
                                    <li>• Paragraf: 6-8 soru</li>
                                    <li>• Sözcük Bilgisi: 4-6 soru</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-green-900 mb-3">Matematik (40 Soru)</h4>
                                <ul className="text-green-800 space-y-1">
                                    <li>• Sayılar ve İşlemler: 8-10 soru</li>
                                    <li>• Cebir: 12-15 soru</li>
                                    <li>• Geometri: 10-12 soru</li>
                                    <li>• Veri Analizi: 5-8 soru</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-purple-900 mb-3">Sosyal Bilimler (20 Soru)</h4>
                                <ul className="text-purple-800 space-y-1">
                                    <li>• Tarih: 5-7 soru</li>
                                    <li>• Coğrafya: 5-7 soru</li>
                                    <li>• Felsefe: 4-5 soru</li>
                                    <li>• Din Kültürü: 4-5 soru</li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-orange-900 mb-3">Fen Bilimleri (20 Soru)</h4>
                                <ul className="text-orange-800 space-y-1">
                                    <li>• Fizik: 7-8 soru</li>
                                    <li>• Kimya: 6-7 soru</li>
                                    <li>• Biyoloji: 6-7 soru</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">TYT Net Hesaplama Formülü</h3>
                        <div className="bg-gray-50 p-6 rounded-lg mb-4">
                            <p className="font-mono text-center text-xl font-bold text-gray-800">
                                Net = Doğru Sayısı - (Yanlış Sayısı ÷ 4)
                            </p>
                        </div>
                        <div className="bg-yellow-50 p-6 rounded-lg">
                            <h4 className="font-semibold text-yellow-900 mb-3">Örnek Hesaplama:</h4>
                            <p className="text-yellow-800 mb-2">Matematik: 25 doğru, 8 yanlış, 7 boş</p>
                            <p className="text-yellow-800 mb-2">Net = 25 - (8 ÷ 4) = 25 - 2 = <strong>23 net</strong></p>
                            <p className="text-sm text-yellow-700">Boş sorular net hesaplamasını etkilemez.</p>
                        </div>
                    </div>
                </section>

                {/* AYT Rehberi */}
                <section id="ayt-rehberi" className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
                        AYT (Alan Yeterlilik Testi) Rehberi
                    </h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">AYT Soru Dağılımı</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-blue-900 mb-2">Sayısal Bölüm</h4>
                                <ul className="text-sm text-blue-800 space-y-1">
                                    <li>• Matematik: 40 soru</li>
                                    <li>• Fizik: 14 soru</li>
                                    <li>• Kimya: 13 soru</li>
                                    <li>• Biyoloji: 13 soru</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-900 mb-2">Sözel Bölüm</h4>
                                <ul className="text-sm text-green-800 space-y-1">
                                    <li>• Edebiyat: 24 soru</li>
                                    <li>• Tarih-1: 10 soru</li>
                                    <li>• Coğrafya-1: 6 soru</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-purple-900 mb-2">Sosyal Bölüm</h4>
                                <ul className="text-sm text-purple-800 space-y-1">
                                    <li>• Tarih-2: 11 soru</li>
                                    <li>• Coğrafya-2: 11 soru</li>
                                    <li>• Felsefe: 12 soru</li>
                                    <li>• Din: 6 soru</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg mb-8">
                        <h3 className="text-xl font-semibold text-red-900 mb-4">⚠️ Önemli: AYT&apos;ye Giriş Şartı</h3>
                        <p className="text-red-800">
                            AYT&apos;ye girebilmek için TYT&apos;den minimum <strong>150 puan</strong> almanız gerekir.
                            TYT puanınız 150&apos;nin altındaysa AYT sınavına giremezsiniz.
                        </p>
                    </div>
                </section>

                {/* Net Hesaplama */}
                <section id="net-hesaplama" className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <Calculator className="h-8 w-8 text-primary-600 mr-3" />
                        YKS Net Hesaplama Detayları
                    </h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Net Hesaplama Kuralları</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-green-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-green-900 mb-3">✅ Doğru Cevaplar</h4>
                                <p className="text-green-800">Her doğru cevap 1 puan değerindedir.</p>
                            </div>

                            <div className="bg-red-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-red-900 mb-3">❌ Yanlış Cevaplar</h4>
                                <p className="text-red-800">Her 4 yanlış cevap 1 doğruyu götürür.</p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-gray-900 mb-3">⚪ Boş Cevaplar</h4>
                                <p className="text-gray-800">Boş sorular puanınızı etkilemez.</p>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-blue-900 mb-3">📊 Net Hesaplama</h4>
                                <p className="text-blue-800">Net = Doğru - (Yanlış ÷ 4)</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Örnek Net Hesaplamaları</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-50">
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
                    </div>
                </section>

                {/* Puan Türleri */}
                <section id="puan-turleri" className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <Award className="h-8 w-8 text-yellow-600 mr-3" />
                        YKS Puan Türleri
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-blue-900 mb-4">SAY Puanı</h3>
                            <p className="text-blue-800 mb-4">Sayısal bölümler için kullanılır.</p>
                            <h4 className="font-semibold text-blue-900 mb-2">Kullanılan Testler:</h4>
                            <ul className="text-blue-800 space-y-1">
                                <li>• TYT (tüm dersler)</li>
                                <li>• AYT Matematik</li>
                                <li>• AYT Fizik, Kimya, Biyoloji</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-green-900 mb-4">EA Puanı</h3>
                            <p className="text-green-800 mb-4">Eşit ağırlık bölümleri için kullanılır.</p>
                            <h4 className="font-semibold text-green-900 mb-2">Kullanılan Testler:</h4>
                            <ul className="text-green-800 space-y-1">
                                <li>• TYT (tüm dersler)</li>
                                <li>• AYT Matematik</li>
                                <li>• AYT Edebiyat, Tarih-1, Coğrafya-1</li>
                            </ul>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-purple-900 mb-4">SÖZ Puanı</h3>
                            <p className="text-purple-800 mb-4">Sözel bölümler için kullanılır.</p>
                            <h4 className="font-semibold text-purple-900 mb-2">Kullanılan Testler:</h4>
                            <ul className="text-purple-800 space-y-1">
                                <li>• TYT (tüm dersler)</li>
                                <li>• AYT Edebiyat, Tarih, Coğrafya</li>
                                <li>• AYT Felsefe, Din Kültürü</li>
                            </ul>
                        </div>

                        <div className="bg-orange-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-orange-900 mb-4">DİL Puanı</h3>
                            <p className="text-orange-800 mb-4">Yabancı dil bölümleri için kullanılır.</p>
                            <h4 className="font-semibold text-orange-900 mb-2">Kullanılan Testler:</h4>
                            <ul className="text-orange-800 space-y-1">
                                <li>• TYT (tüm dersler)</li>
                                <li>• YDT (Yabancı Dil Testi)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Çalışma Stratejileri */}
                <section id="calisma-stratejileri" className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <Clock className="h-8 w-8 text-indigo-600 mr-3" />
                        YKS Çalışma Stratejileri
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">TYT İçin Strateji</h3>
                            <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-blue-900 mb-2">Matematik</h4>
                                    <ul className="text-blue-800 text-sm space-y-1">
                                        <li>• Temel konuları sağlamlaştır</li>
                                        <li>• Günde 20-30 soru çöz</li>
                                        <li>• Hızlı işlem teknikleri öğren</li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-green-900 mb-2">Türkçe</h4>
                                    <ul className="text-green-800 text-sm space-y-1">
                                        <li>• Günlük okuma alışkanlığı edin</li>
                                        <li>• Paragraf tekniklerini öğren</li>
                                        <li>• Dil bilgisi kurallarını ezberle</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">AYT İçin Strateji</h3>
                            <div className="space-y-4">
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-purple-900 mb-2">Sayısal</h4>
                                    <ul className="text-purple-800 text-sm space-y-1">
                                        <li>• Matematik&apos;e öncelik ver</li>
                                        <li>• Fen derslerini dengele</li>
                                        <li>• Zor soruları atlama stratejisi</li>
                                    </ul>
                                </div>

                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-orange-900 mb-2">Sözel</h4>
                                    <ul className="text-orange-800 text-sm space-y-1">
                                        <li>• Edebiyat&apos;a ağırlık ver</li>
                                        <li>• Tarih kronolojisini öğren</li>
                                        <li>• Coğrafya haritalarını çalış</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Başarı İpuçları */}
                <section id="basari-ipuclari" className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                        YKS Başarı İpuçları
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-green-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-green-900 mb-3">Sınav Öncesi</h3>
                            <ul className="text-green-800 space-y-2">
                                <li>✓ Düzenli uyku</li>
                                <li>✓ Sağlıklı beslenme</li>
                                <li>✓ Deneme sınavları</li>
                                <li>✓ Zaman yönetimi</li>
                                <li>✓ Stres kontrolü</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-blue-900 mb-3">Sınav Günü</h3>
                            <ul className="text-blue-800 space-y-2">
                                <li>✓ Erken kalk</li>
                                <li>✓ Hafif kahvaltı</li>
                                <li>✓ Gerekli malzemeler</li>
                                <li>✓ Sakin ol</li>
                                <li>✓ Pozitif düşün</li>
                            </ul>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-purple-900 mb-3">Sınav Sırası</h3>
                            <ul className="text-purple-800 space-y-2">
                                <li>✓ Kolay sorulardan başla</li>
                                <li>✓ Zamanı kontrol et</li>
                                <li>✓ Emin olmadığın soruları atla</li>
                                <li>✓ Optik formu dikkatli doldur</li>
                                <li>✓ Son 10 dakikayı kontrol için ayır</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">YKS Net Hesaplama Aracını Kullan!</h2>
                    <p className="text-primary-100 mb-6">
                        Bu rehberdeki bilgileri kullanarak netlerinizi hesaplayın ve hedef puanınızı belirleyin.
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