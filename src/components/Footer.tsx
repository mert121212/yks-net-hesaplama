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
                            YKS 2027 için en doğru net ve puan hesaplama aracı. Ücretsiz, hızlı ve güvenilir.
                        </p>
                        <Link href="/iletisim" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                            İletişim & Destek →
                        </Link>
                    </div>

                    {/* Hesaplama */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <Icon d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            Hesaplama Araçları
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {[
                                { href: '/', label: 'YKS Net & Puan Hesaplama' },
                                { href: '/tyt-net-hesaplama', label: 'TYT Net Hesaplama' },
                                { href: '/ayt-net-hesaplama', label: 'AYT Net Hesaplama' },
                                { href: '/yks-puan-hesaplama', label: 'YKS Puan & Sıralama' },
                                { href: '/universiteler', label: 'Üniversite Taban Puanları' },
                            ].map(({ href, label }) => (
                                <li key={label}><Link href={href} className="text-gray-400 hover:text-white transition-colors">{label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* YKS 2027 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <Icon d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            YKS 2027 Rehberi
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {[
                                { href: '/geri-sayim', label: 'YKS 2027 Geri Sayım' },
                                { href: '/blog/tyt-kesin-cikan-konular', label: 'TYT Banko Konular' },
                                { href: '/blog/ayt-matematik-konulari', label: 'AYT Matematik Konuları' },
                                { href: '/blog/yks-1-net-kac-kisi-atar', label: '1 Net Kaç Kişi Atar?' },
                                { href: '/blog/obp-hesaplama', label: 'OBP Hesaplama' },
                            ].map(({ href, label }) => (
                                <li key={label}><Link href={href} className="text-gray-400 hover:text-white transition-colors">{label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Kurumsal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <Icon d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            Kurumsal
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {[
                                { href: '/hakkimizda', label: 'Hakkımızda' },
                                { href: '/iletisim', label: 'İletişim' },
                                { href: '/privacy', label: 'Gizlilik Politikası' },
                                { href: '/kullanim-kosullari', label: 'Kullanım Koşulları' },
                                { href: '/sss', label: 'Sıkça Sorulan Sorular' },
                            ].map(({ href, label }) => (
                                <li key={label}><Link href={href} className="text-gray-400 hover:text-white transition-colors">{label}</Link></li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; 2027 YKS Net Hesaplama. Tüm hakları saklıdır. Bu site ÖSYM ile resmi bir bağlantıya sahip değildir.</p>
                </div>
            </div>
        </footer>
    )
}
