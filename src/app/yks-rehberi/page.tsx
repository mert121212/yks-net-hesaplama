'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Calculator, BookOpen, Target, TrendingUp, CheckCircle } from 'lucide-react'
import { trackGuideView } from '@/lib/gtag'
import AdBanner from '@/components/AdBanner'

export default function YKSRehberiPage() {
    useEffect(() => {
        // Analytics tracking
        trackGuideView('yks_rehberi_main')
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                            <Calculator className="h-8 w-8 text-primary-600" />
                            <h1 className="text-xl font-bold text-gray-900">YKS Net Hesaplama</h1>
                        </Link>
                        <nav className="flex space-x-6">
                            <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                                Ana Sayfa
                            </Link>
                            <Link href="/geri-sayim" className="text-gray-600 hover:text-primary-600 transition-colors">
                                Geri Sayım
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        YKS 2026 Rehberi
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        YKS sınavı hakkında bilmeniz gereken her şey. Net hesaplama, puan türleri ve başarı stratejileri.
                    </p>
                </div>

                {/* İçindekiler */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <BookOpen className="h-6 w-6 mr-2 text-primary-600" />
                        İçindekiler
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <a href="#yks-nedir" className="block text-primary-600 hover:text-primary-700 transition-colors">
                                1. YKS Nedir?
                            </a>
                            <a href="#tyt-rehberi" className="block text-primary-600 hover:text-primary-700 transition-colors">
                                2. TYT Rehberi
                            </a>
                            <a href="#ayt-rehberi" className="block text-primary-600 hover:text-primary-700 transition-colors">
                                3. AYT Rehberi
                            </a>
                            <a href="#ydt-rehberi" className="block text-primary-600 hover:text-primary-700 transition-colors">
                                4. YDT Rehberi
                            </a>
                        </div>
                        <div className="space-y-2">
                            <a href="#net-hesaplama" className="block text-primary-600 hover:text-primary-700 transition-colors">
                                5. Net Hesaplama
                            </a>
                            <a href="#puan-turleri" className="block text-primary-600 hover:text-primary-700 transition-colors">
                                6. Puan Türleri
                            </a>
                            <a href="#basari-stratejileri" className="block text-primary-600 hover:text-primary-700 transition-colors">
                                7. Başarı Stratejileri
                            </a>
                            <a href="#sik-sorulan-sorular" className="block text-primary-600 hover:text-primary-700 transition-colors">
                                8. Sık Sorulan Sorular
                            </a>
                        </div>
                    </div>
                </div>

                {/* YKS Nedir */}
                <section id="yks-nedir" className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Target className="h-6 w-6 mr-2 text-primary-600" />
                        YKS Nedir?
                    </h2>
                    <div className="prose max-w-none">
                        <p className="text-gray-700 mb-4">
                            <strong>Yükseköğretim Kurumları Sınavı (YKS)</strong>, Türkiye'de üniversitelere öğrenci seçmek ve yerleştirmek amacıyla ÖSYM tarafından düzenlenen merkezi sınavdır.
                        </p>
                        <p className="text-gray-700 mb-4">
                            YKS üç aşamadan oluşur:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                            <li><strong>TYT (Temel Yeterlilik Testi):</strong> Tüm adayların girdiği temel seviye sınav</li>
                            <li><strong>AYT (Alan Yeterlilik Testi):</strong> Lisans programlarına başvuracak adaylar için</li>
                            <li><strong>YDT (Yabancı Dil Testi):</strong> Yabancı dil puanı gereken programlar için</li>
                        </ul>
                    </div>
                </section>

                {/* TYT Rehberi */}
                <section id="tyt-rehberi" className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <BookOpen className="h-6 w-6 mr-2 text-green-600" />
                        TYT (Temel Yeterlilik Testi) Rehberi
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Soru Dağılımı</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex justify-between">
                                    <span>Türkçe:</span>
                                    <span className="font-semibold">40 soru</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Matematik:</span>
                                    <span className="font-semibold">40 soru</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sosyal Bilimler:</span>
                                    <span className="font-semibold">20 soru</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Fen Bilimleri:</span>
                                    <span className="font-semibold">20 soru</span>
                                </li>
                                <li className="flex justify-between border-t pt-2 mt-2">
                                    <span><strong>Toplam:</strong></span>
                                    <span className="font-bold">120 soru</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Önemli Bilgiler</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Sınav süresi: 135 dakika</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Tüm adaylar girmek zorunda</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Minimum 150 TYT puanı gerekli</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Yanlış cevap -0.25 puan</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Net Hesaplama */}
                <section id="net-hesaplama" className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Calculator className="h-6 w-6 mr-2 text-blue-600" />
                        Net Hesaplama Nasıl Yapılır?
                    </h2>
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                        <h3 className="text-lg font-semibold text-blue-900 mb-3">Net Hesaplama Formülü</h3>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-700 mb-2">
                                Net = Doğru Sayısı - (Yanlış Sayısı ÷ 4)
                            </div>
                            <p className="text-blue-600">Her 4 yanlış cevap 1 doğru cevabı götürür</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-green-50 rounded-lg p-4">
                            <h4 className="font-semibold text-green-900 mb-2">Örnek Hesaplama 1</h4>
                            <p className="text-green-700">
                                <strong>Türkçe:</strong> 25 doğru, 8 yanlış<br />
                                <strong>Net:</strong> 25 - (8÷4) = 25 - 2 = <strong>23 net</strong>
                            </p>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-4">
                            <h4 className="font-semibold text-orange-900 mb-2">Örnek Hesaplama 2</h4>
                            <p className="text-orange-700">
                                <strong>Matematik:</strong> 30 doğru, 6 yanlış<br />
                                <strong>Net:</strong> 30 - (6÷4) = 30 - 1.5 = <strong>28.5 net</strong>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Ad Banner */}
                <div className="flex justify-center mb-8">
                    <AdBanner
                        adSlot="3344556677"
                        adFormat="horizontal"
                        className="max-w-3xl w-full"
                        style={{ display: 'block', textAlign: 'center', minHeight: '90px' }}
                    />
                </div>

                {/* Puan Türleri */}
                <section id="puan-turleri" className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <TrendingUp className="h-6 w-6 mr-2 text-purple-600" />
                        Puan Türleri
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="border-l-4 border-green-500 pl-4">
                                <h3 className="font-semibold text-green-700">SAY (Sayısal)</h3>
                                <p className="text-gray-600 text-sm">Mühendislik, Tıp, Fen Bilimleri programları</p>
                                <p className="text-xs text-gray-500">TYT + AYT Matematik, Fizik, Kimya, Biyoloji</p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h3 className="font-semibold text-blue-700">EA (Eşit Ağırlık)</h3>
                                <p className="text-gray-600 text-sm">İktisat, İşletme, Hukuk programları</p>
                                <p className="text-xs text-gray-500">TYT + AYT Matematik, Edebiyat, Tarih, Coğrafya</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="border-l-4 border-purple-500 pl-4">
                                <h3 className="font-semibold text-purple-700">SÖZ (Sözel)</h3>
                                <p className="text-gray-600 text-sm">Edebiyat, Tarih, Felsefe programları</p>
                                <p className="text-xs text-gray-500">TYT + AYT Edebiyat, Tarih, Coğrafya, Felsefe</p>
                            </div>
                            <div className="border-l-4 border-orange-500 pl-4">
                                <h3 className="font-semibold text-orange-700">DİL (Dil)</h3>
                                <p className="text-gray-600 text-sm">Yabancı Dil programları</p>
                                <p className="text-xs text-gray-500">TYT + YDT</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">Hemen Net Hesaplama Yapmaya Başla!</h2>
                    <p className="text-primary-100 mb-6">
                        YKS 2026 için netlerinizi hesaplayın ve üniversite puanlarınızı öğrenin.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <Calculator className="h-5 w-5 mr-2" />
                        Net Hesaplama Aracı
                    </Link>
                </div>
            </main>
        </div>
    )
}