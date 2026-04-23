import Link from 'next/link'

// Inline SVG — lucide-react bundle'ı kaldırıldı
function Icon({ d }: { d: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d={d} />
        </svg>
    )
}

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                    {/* Marka */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <rect x="4" y="2" width="16" height="20" rx="2" />
                                <line x1="8" y1="6" x2="16" y2="6" />
                                <line x1="8" y1="10" x2="10" y2="10" />
                                <line x1="14" y1="10" x2="16" y2="10" />
                                <line x1="8" y1="14" x2="16" y2="14" />
                            </svg>
                            <span className="text-xl font-bold">YKS Net Hesaplama</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                            YKS 2026 için en doğru net ve puan hesaplama aracı. Ücretsiz, hızlı ve güvenilir.
                        </p>
                        <a href="mailto:mertcaliskan36065d@gmail.com" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                            İletişim
                        </a>
                    </div>

                    {/* Hesaplama */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <Icon d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            Hesaplama
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {[
                                { href: '/#hesaplama', label: 'TYT Net Hesaplama' },
                                { href: '/#hesaplama', label: 'AYT Net Hesaplama' },
                                { href: '/#hesaplama', label: 'YDT Net Hesaplama' },
                                { href: '/#sonuclar', label: 'Puan Hesaplama' },
                            ].map(({ href, label }) => (
                                <li key={label}><Link href={href} className="text-gray-400 hover:text-white transition-colors">{label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* YKS 2026 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <Icon d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            YKS 2026
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {[
                                { href: '/blog', label: 'Blog & Rehberler' },
                                { href: '/geri-sayim', label: 'YKS Geri Sayım' },
                                { href: '/yks-rehberi', label: 'YKS Rehberi' },
                                { href: '/sss', label: 'Sık Sorulan Sorular' },
                            ].map(({ href, label }) => (
                                <li key={label}><Link href={href} className="text-gray-400 hover:text-white transition-colors">{label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Kurumsal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <Icon d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            Kurumsal
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {[
                                { href: '/hakkimizda', label: 'Hakkımızda' },
                                { href: '/iletisim', label: 'İletişim' },
                                { href: '/kullanim-kosullari', label: 'Kullanım Koşulları' },
                                { href: '/privacy', label: 'Gizlilik Politikası' },
                            ].map(({ href, label }) => (
                                <li key={label}><Link href={href} className="text-gray-400 hover:text-white transition-colors">{label}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-gray-400">© {new Date().getFullYear()} YKS Net Hesaplama. Tüm hakları saklıdır.</p>
                        <p className="text-xs text-gray-500 mt-1">Geliştirici: <a href="https://github.com/mert121212" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Mert Çalışkan</a></p>
                        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
                            <span>YKS Net Hesaplama</span><span>•</span><span>TYT AYT YDT</span><span>•</span><span>Puan Hesaplama</span>
                        </div>
                    </div>
                    <p className="text-xs text-gray-600 text-center mt-4">
                        Bu site ÖSYM&apos;nin resmi sitesi değildir. Hesaplamalar tahmini olup, resmi sonuçlar için ÖSYM&apos;nin sitesini ziyaret edin.
                    </p>
                </div>
            </div>
        </footer>
    )
}
