import Link from 'next/link'
import { Calculator, Mail, BookOpen, TrendingUp } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-4">
                            <Calculator className="h-8 w-8 text-blue-400" />
                            <span className="text-xl font-bold">YKS Net Hesaplama</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                            YKS 2026 için en doğru net ve puan hesaplama aracı. Ücretsiz, hızlı ve güvenilir.
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <Mail className="h-4 w-4" />
                            <a href="mailto:mertcaliskan36065d@gmail.com" className="hover:text-blue-400 transition-colors">
                                İletişim
                            </a>
                        </div>
                    </div>

                    {/* Hesaplama Araçları */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <Calculator className="h-5 w-5 mr-2 text-blue-400" />
                            Hesaplama
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/#hesaplama" className="text-gray-400 hover:text-white transition-colors">
                                    TYT Net Hesaplama
                                </Link>
                            </li>
                            <li>
                                <Link href="/#hesaplama" className="text-gray-400 hover:text-white transition-colors">
                                    AYT Net Hesaplama
                                </Link>
                            </li>
                            <li>
                                <Link href="/#hesaplama" className="text-gray-400 hover:text-white transition-colors">
                                    YDT Net Hesaplama
                                </Link>
                            </li>
                            <li>
                                <Link href="/#sonuclar" className="text-gray-400 hover:text-white transition-colors">
                                    Puan Hesaplama
                                </Link>
                            </li>
                            <li>
                                <Link href="/universiteler" className="text-gray-400 hover:text-white transition-colors">
                                    Üniversite Önerileri
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* YKS Rehberi */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <BookOpen className="h-5 w-5 mr-2 text-blue-400" />
                            YKS 2026
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                                    Blog & Rehberler
                                </Link>
                            </li>
                            <li>
                                <Link href="/geri-sayim" className="text-gray-400 hover:text-white transition-colors">
                                    YKS Geri Sayım
                                </Link>
                            </li>
                            <li>
                                <Link href="/yks-rehberi" className="text-gray-400 hover:text-white transition-colors">
                                    YKS Rehberi
                                </Link>
                            </li>
                            <li>
                                <Link href="/sss" className="text-gray-400 hover:text-white transition-colors">
                                    Sık Sorulan Sorular
                                </Link>
                            </li>
                            <li>
                                <Link href="/universiteler" className="text-gray-400 hover:text-white transition-colors">
                                    Üniversiteler
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kurumsal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <TrendingUp className="h-5 w-5 mr-2 text-blue-400" />
                            Kurumsal
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/hakkimizda" className="text-gray-400 hover:text-white transition-colors">
                                    Hakkımızda
                                </Link>
                            </li>
                            <li>
                                <Link href="/iletisim" className="text-gray-400 hover:text-white transition-colors">
                                    İletişim
                                </Link>
                            </li>
                            <li>
                                <Link href="/kullanim-kosullari" className="text-gray-400 hover:text-white transition-colors">
                                    Kullanım Koşulları
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                                    Gizlilik Politikası
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400 text-center md:text-left">
                            © {new Date().getFullYear()} YKS Net Hesaplama. Tüm hakları saklıdır.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
                            <span>YKS Net Hesaplama</span>
                            <span>•</span>
                            <span>TYT AYT YDT</span>
                            <span>•</span>
                            <span>Puan Hesaplama</span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-600 text-center mt-4">
                        Bu site ÖSYM'nin resmi sitesi değildir. Hesaplamalar tahmini olup, resmi sonuçlar için ÖSYM'nin sitesini ziyaret edin.
                    </p>
                </div>
            </div>
        </footer>
    )
}
