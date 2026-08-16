import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, ArrowRight, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
    title: 'TYT Net Hesaplama 2027 | Türkçe Matematik Sosyal Fen Netleri',
    description: 'TYT net hesaplama aracı ile Türkçe, Matematik, Sosyal Bilimler ve Fen Bilimleri netlerinizi hesaplayın. YKS 2027 için güncel TYT puan hesaplama.',
    keywords: 'TYT net hesaplama, TYT matematik net, TYT türkçe net, TYT sosyal net, TYT fen net, YKS 2027 TYT',
}

export default function TYTNetHesaplamaPage(): React.JSX.Element {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                            <Calculator className="h-8 w-8 text-primary-600" />
                            <h1 className="text-xl font-bold text-gray-900">YKS Net Hesaplama</h1>
                        </Link>
                        
                        <nav className="hidden md:flex space-x-6">
                            <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                                Ana Sayfa
                            </Link>
                            <Link href="/geri-sayim" className="text-gray-600 hover:text-primary-600 transition-colors">
                                Geri Sayım
                            </Link>
                            <Link href="/yks-rehberi" className="text-gray-600 hover:text-primary-600 transition-colors">
                                YKS Rehberi
                            </Link>
                        </nav>

                        <div className="md:hidden">
                            <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium">
                                Ana Sayfa
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        TYT Net Hesaplama 2027
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Temel Yeterlilik Testi (TYT) netlerinizi hesaplayın ve YKS puanınızı öğrenin
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        <Calculator className="h-5 w-5 mr-2" />
                        Net Hesaplama Aracına Git
                        <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">TYT Nedir?</h2>
                    <p className="text-gray-600 mb-4">
                        Temel Yeterlilik Testi (TYT), YKS sınavının ilk oturumudur ve tüm adaylar tarafından girilir. 
                        TYT, öğrencilerin temel bilgi ve becerilerini ölçer.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">TYT Sınav İçeriği:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-900 mb-2">Türkçe (40 Soru)</h4>
                            <ul className="text-sm text-blue-800 space-y-1">
                                <li>• Okuma anlama</li>
                                <li>• Dil bilgisi</li>
                                <li>• Paragraf</li>
                                <li>• Sözcük bilgisi</li>
                            </ul>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-900 mb-2">Matematik (40 Soru)</h4>
                            <ul className="text-sm text-green-800 space-y-1">
                                <li>• Sayılar ve işlemler</li>
                                <li>• Cebir</li>
                                <li>• Geometri</li>
                                <li>• Veri analizi</li>
                            </ul>
                        </div>
                        
                        <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-purple-900 mb-2">Sosyal Bilimler (20 Soru)</h4>
                            <ul className="text-sm text-purple-800 space-y-1">
                                <li>• Tarih</li>
                                <li>• Coğrafya</li>
                                <li>• Felsefe</li>
                                <li>• Din kültürü</li>
                            </ul>
                        </div>
                        
                        <div className="bg-orange-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-orange-900 mb-2">Fen Bilimleri (20 Soru)</h4>
                            <ul className="text-sm text-orange-800 space-y-1">
                                <li>• Fizik</li>
                                <li>• Kimya</li>
                                <li>• Biyoloji</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">TYT Net Hesaplama Formülü</h2>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <p className="font-mono text-center text-lg">
                            Net = Doğru Sayısı - (Yanlış Sayısı ÷ 4)
                        </p>
                    </div>
                    <p className="text-gray-600 mb-4">
                        TYT&apos;de her yanlış cevap, doğru cevaplarınızdan 0.25 puan düşer. 
                        Boş bıraktığınız sorular puanınızı etkilemez.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">TYT Puan Hesaplama:</h3>
                    <ul className="text-gray-600 space-y-2">
                        <li>• TYT puanı 100-500 arasında değişir</li>
                        <li>• Minimum 150 TYT puanı gerekir (AYT&apos;ye girebilmek için)</li>
                        <li>• TYT puanı tüm puan türlerinde kullanılır</li>
                        <li>• Yerleştirmede %40 ağırlığa sahiptir</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">Hemen TYT Netinizi Hesaplayın!</h2>
                    <p className="text-primary-100 mb-6">
                        Ücretsiz TYT net hesaplama aracımızla netlerinizi hesaplayın ve hedef puanınıza ulaşın.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <BookOpen className="h-5 w-5 mr-2" />
                        Net Hesaplama Aracını Kullan
                    </Link>
                </div>
            </div>
        </div>
    )
}