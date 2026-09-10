import { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, BookOpen, Target, TrendingUp, CheckCircle, Clock, Award } from 'lucide-react'

export const metadata: Metadata = {
    title: '2027 YKS Rehberi: Puan Hesaplama, Soru Dağılımı ve Sınav Stratejileri',
    description: 'YKS 2027 için kılavuz niteliğinde bağımsız rehber. TYT-AYT katsayıları, 0,5 net kuralı, kırık OBP hesabı, başarı sırası barajları ve turlama taktiği.',
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
                        2027 YKS Hazırlık &amp; Strateji Rehberi
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                        YKS 2027 Yol Haritası: Puanlar, Katsayılar ve Sınav Masası Gerçekleri
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                        ÖSYM kılavuzundaki bürokratik maddeleri bir kenara bırakın. Masada netlerinizi puana, puanınızı da hedeflediğiniz üniversite sıralamasına dönüştürecek tüm kuralları tek sayfada topladık.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                    >
                        <Calculator className="h-5 w-5" />
                        Net Hesaplama Motorunu Aç →
                    </Link>
                </header>

                {/* Hızlı İçindekiler */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 mb-10">
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span>📑</span> Bu Rehberde Neler Var?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <a href="#puan-hesaplama" className="p-2.5 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 font-medium transition-colors">
                            1. Netler Puana Nasıl Dönüşür? (Formül &amp; 4 Yanlış Kuralı)
                        </a>
                        <a href="#soru-dagilimi" className="p-2.5 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 font-medium transition-colors">
                            2. TYT ve AYT Soru Dağılımları (Oturumlar)
                        </a>
                        <a href="#obp" className="p-2.5 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 font-medium transition-colors">
                            3. OBP Çarpanı ve Kırık OBP Felaketi
                        </a>
                        <a href="#baraj" className="p-2.5 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 font-medium transition-colors">
                            4. Baraj Puanı Kalktı mı? (0,5 Net Kuralı)
                        </a>
                        <a href="#baraj-siralama" className="p-2.5 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 font-medium transition-colors">
                            5. Tıp, Hukuk ve Mühendislik Başarı Sırası Şartı
                        </a>
                        <a href="#stratejiler" className="p-2.5 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 font-medium transition-colors">
                            6. Masada Kazandıran 4 Taktik
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
                        Sınavdan çıktığınızda yaptığınız ilk hata doğru ve yanlışları alt alta toplayıp ortalama bir sayı uydurmaktır. ÖSYM sisteminde işlem iki basamakta yürür: Önce ham netiniz bulunur, ardından her testin o yılki standart sapma katsayısıyla çarpılıp 100 taban puanının üzerine eklenir.
                    </p>

                    <div className="bg-slate-900 text-white rounded-xl p-5 my-6 text-center">
                        <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">ÖSYM Net Formülü</span>
                        <p className="font-mono text-xl sm:text-2xl font-bold text-emerald-400">
                            Ham Net = Doğru Sayısı − (Yanlış Sayısı ÷ 4)
                        </p>
                        <p className="text-xs text-slate-400 mt-2">
                            Her yanlış tam olarak 0,25 doğruyu siler. 4 yanlış yaparsanız 1 tam doğrunuz yok sayılır.
                        </p>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg text-amber-950 text-sm mb-6">
                        <strong>Boş Bırakmanın Önemi:</strong> Cevabından emin olmadığınız bir soruda rastgele 5 şıktan birini sallamak yerine boş bırakırsanız hanenizden 0,25 net eksilmez. Yığılma bölgesinde tek bir 0,25 net bazen 1.500 kişinin önünüze geçmesini engeller.
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3">Gerçekçi Net Tablosu Örneği</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse border border-gray-200 rounded-lg">
                            <thead className="bg-gray-50 text-gray-800">
                                <tr>
                                    <th className="border p-3 text-left">Test</th>
                                    <th className="border p-3 text-center">Doğru</th>
                                    <th className="border p-3 text-center">Yanlış</th>
                                    <th className="border p-3 text-center">Boş</th>
                                    <th className="border p-3 text-center">Giden Doğru</th>
                                    <th className="border p-3 text-center font-bold text-blue-600">Ham Net</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="border p-3 font-semibold">TYT Türkçe (40)</td>
                                    <td className="border p-3 text-center">31</td>
                                    <td className="border p-3 text-center">8</td>
                                    <td className="border p-3 text-center">1</td>
                                    <td className="border p-3 text-center text-red-500">-2,00</td>
                                    <td className="border p-3 text-center font-bold text-emerald-600">29,00</td>
                                </tr>
                                <tr className="border-b bg-gray-50">
                                    <td className="border p-3 font-semibold">TYT Matematik (40)</td>
                                    <td className="border p-3 text-center">22</td>
                                    <td className="border p-3 text-center">6</td>
                                    <td className="border p-3 text-center">12</td>
                                    <td className="border p-3 text-center text-red-500">-1,50</td>
                                    <td className="border p-3 text-center font-bold text-emerald-600">20,50</td>
                                </tr>
                                <tr>
                                    <td className="border p-3 font-semibold">AYT Matematik (40)</td>
                                    <td className="border p-3 text-center">26</td>
                                    <td className="border p-3 text-center">4</td>
                                    <td className="border p-3 text-center">10</td>
                                    <td className="border p-3 text-center text-red-500">-1,00</td>
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
                        YKS tek bir sınav değil; 2 güne yayılmış 3 farklı oturumdan oluşur. Hangi oturumun katsayısının nereye etki ettiğini bilmeden ders çalışmak gözü kapalı ok atmaya benzer.
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
                                Alanınız ne olursa olsun (Sayısal, Sözel, EA veya Dil) herkes bu sınava girmek zorundadır. Yerleştirme puanına etkisi %40&apos;tır.
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
                                Yerleştirme puanına %60 etki eden asıl belirleyici sınavdır. Kitapçıkta 4 test bulunur fakat her aday kendi alanındaki 80 soruyu çözer:
                            </p>
                            <ul className="text-xs sm:text-sm text-gray-800 space-y-2">
                                <li>• <strong>Sayısal (SAY):</strong> Matematik (40) + Fen Bilimleri (Fizik 14, Kimya 13, Biyoloji 13 = 40 Soru)</li>
                                <li>• <strong>Eşit Ağırlık (EA):</strong> Matematik (40) + Edebiyat-Sosyal-1 (Edebiyat 24, Tarih-1 10, Coğrafya-1 6 = 40 Soru)</li>
                                <li>• <strong>Sözel (SÖZ):</strong> Edebiyat-Sosyal-1 (40) + Sosyal Bilimler-2 (Tarih-2 11, Coğ-2 11, Felsefe 12, Din 6 = 40 Soru)</li>
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
                                İngilizce, Almanca, Fransızca, Rusça veya Arapça dillerinden birinden girilir. Dil puanıyla öğrenci alan bölümler için TYT (%40) + YDT (%60) formülüyle puan üretilir.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3. OBP */}
                <section id="obp" className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <TrendingUp className="h-7 w-7 text-emerald-600" />
                        3. OBP (Diploma Notu) ve Kırık OBP Gerçeği
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Lisede aldığınız 4 yıllık diploma notu çöpe gitmez; doğrudan ÖSYM yerleştirme puanınıza eklenir. Hesaplama basittir:
                    </p>
                    <div className="bg-gray-50 border rounded-xl p-4 text-sm text-gray-800 space-y-2 mb-4 font-mono">
                        <p>1. Adım: Diploma Notu × 5 = OBP (Örn: 84 × 5 = 420)</p>
                        <p>2. Adım: OBP × 0,12 = Yerleştirme Puanına Ek (Örn: 420 × 0,12 = <strong>+50,4 Puan</strong>)</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg text-red-950 text-sm my-4">
                        <strong>⚠️ Kırık OBP Tuzağı:</strong> Bir önceki yıl YKS ile bir üniversite programına (merkezi yerleştirmeyle 2 veya 4 yıllık örgün ya da açıköğretim kontenjanlı) yerleştiyseniz, bu yıl sınava girdiğinizde katsayınız 0,12 yerine <strong>0,06</strong> ile çarpılır.
                        <br />
                        Örneğin yukarıdaki 50,4 puanınız 25,2 puana iner. Kaybettiğiniz 25 puan, yoğun yığılma bölgesinde sizi <strong>35 bin ila 50 bin kişi</strong> geriye fırlatır!
                    </div>
                </section>

                {/* 4. Baraj ve 0,5 Net */}
                <section id="baraj" className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <Target className="h-7 w-7 text-red-600" />
                        4. Baraj Puanı Kalktı mı? 0,5 Net Kuralı Nedir?
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Eski yıllardaki &quot;TYT&apos;de 150 barajı, AYT&apos;de 180 barajı&quot; kuralı 2022&apos;de tamamen yürürlükten kalktı. Yani artık puanı hesaplanan her aday tercih yapma hakkına sahip.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Ancak sistemde hâlâ <strong>0,5 Net Şartı</strong> geçerlidir. TYT puanınızın hesaplanabilmesi için:
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-blue-950 text-sm font-medium mb-4">
                        ✓ Türkçe testinden en az 0,5 net VEYA Temel Matematik testinden en az 0,5 net çıkarmalısınız. İkisinden de sıfır çekerseniz sistem puanınızı üretmez.
                    </div>
                </section>

                {/* 5. Başarı Sırası Barajı */}
                <section id="baraj-siralama" className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <Award className="h-7 w-7 text-yellow-600" />
                        5. Bölüm Bazlı Başarı Sırası Barajları
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Genel puan barajı kalkmış olsa da YÖK belirli kritik meslek gruplarına sıralama barajı koymuştur. İstediğiniz kadar yüksek puan alın; bu sıralamanın 1 kişi gerisinde kalsanız dahi o bölümü tercih listenize yazamazsınız:
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse border border-gray-200">
                            <thead className="bg-gray-100 text-gray-800">
                                <tr>
                                    <th className="border p-3 text-left">Bölüm</th>
                                    <th className="border p-3 text-center">Puan Türü</th>
                                    <th className="border p-3 text-center">Gereken Minimum Sıralama</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="border p-3 font-semibold">Tıp Fakültesi</td>
                                    <td className="border p-3 text-center">SAY</td>
                                    <td className="border p-3 text-center font-bold text-red-600">İlk 50.000</td>
                                </tr>
                                <tr className="border-b bg-gray-50">
                                    <td className="border p-3 font-semibold">Diş Hekimliği</td>
                                    <td className="border p-3 text-center">SAY</td>
                                    <td className="border p-3 text-center font-bold text-red-600">İlk 80.000</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="border p-3 font-semibold">Eczacılık</td>
                                    <td className="border p-3 text-center">SAY</td>
                                    <td className="border p-3 text-center font-bold text-red-600">İlk 100.000</td>
                                </tr>
                                <tr className="border-b bg-gray-50">
                                    <td className="border p-3 font-semibold">Hukuk Fakültesi</td>
                                    <td className="border p-3 text-center">EA</td>
                                    <td className="border p-3 text-center font-bold text-red-600">İlk 125.000</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="border p-3 font-semibold">Mimarlık</td>
                                    <td className="border p-3 text-center">SAY</td>
                                    <td className="border p-3 text-center font-bold text-red-600">İlk 250.000</td>
                                </tr>
                                <tr className="border-b bg-gray-50">
                                    <td className="border p-3 font-semibold">Mühendislik Programları (Orman, Ziraat vb. hariç)</td>
                                    <td className="border p-3 text-center">SAY</td>
                                    <td className="border p-3 text-center font-bold text-red-600">İlk 300.000</td>
                                </tr>
                                <tr>
                                    <td className="border p-3 font-semibold">Öğretmenlik Programları (PDR dahil)</td>
                                    <td className="border p-3 text-center">İlgili Puan</td>
                                    <td className="border p-3 text-center font-bold text-red-600">İlk 300.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 6. Masada Kazandıran Stratejiler */}
                <section id="stratejiler" className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        <Clock className="h-7 w-7 text-emerald-600" />
                        6. Masada Kazandıran 4 Strateji
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                        <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-200">
                            <h3 className="font-bold text-blue-900 mb-1">1. Turlama Taktiği (Süre Kontrolü)</h3>
                            <p>
                                TYT&apos;de 120 soruya 165 dakika verilir (soru başına 82 saniye). 1 dakikada çözemediğiniz soruyla inatlaşmayın. Soru numarasına bir nokta koyup hemen diğerine geçin; ilk turda tüm kolay soruları cebe atın.
                            </p>
                        </div>
                        <div className="bg-purple-50/60 p-4 rounded-xl border border-purple-200">
                            <h3 className="font-bold text-purple-900 mb-1">2. AYT Ağırlığı Faktörü</h3>
                            <p>
                                TYT&apos;de 5 net artırmak için haftalarca uğraşmanız gerekirken, AYT&apos;de formül ve mekanizma öğrenerek 2 haftada 5-8 net artırabilirsiniz. Son aylarda çalışma saatinizin en az %65&apos;ini AYT&apos;ye ayırın.
                            </p>
                        </div>
                        <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200">
                            <h3 className="font-bold text-emerald-900 mb-1">3. Hata Defteri Tutun</h3>
                            <p>
                                Doğru çözdüğünüz sorular size yeni bir şey öğretmez. Netleri sıçratan tek şey denemede yanlış yaptığınız sorulardır. O soruları kesip bir deftere yapıştırın ve haftada bir baştan çözün.
                            </p>
                        </div>
                        <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200">
                            <h3 className="font-bold text-amber-900 mb-1">4. Günlük Paragraf ve Problem Rutini</h3>
                            <p>
                                TYT Türkçe&apos;de 24 soru paragraftan, TYT Matematik&apos;te 12 soru problemlerden gelir. Yani sınavın neredeyse 36 sorusu (üçte biri) okuduğunu anlama hızınıza bakar. Her sabah ilk iş bu iki dersten 15&apos;er soru çözün.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl shadow-lg p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-3">Deneme Sonucunuzu Hemen Test Edin</h2>
                    <p className="text-blue-100 text-sm max-w-xl mx-auto mb-6">
                        Doğru ve yanlışlarınızı girin; güncel ÖSYM katsayılarıyla ham puanınızı, OBP katkınızı ve tahmini başarı sıranızı saniyeler içinde görün.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-md text-sm"
                    >
                        <Calculator className="h-5 w-5" />
                        Ücretsiz Net Hesaplayıcıya Git →
                    </Link>
                </div>

            </div>
        </div>
    )
}
