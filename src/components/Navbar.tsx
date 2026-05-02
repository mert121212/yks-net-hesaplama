// Server component — 'use client' yok
import Link from 'next/link'
import MobileMenuToggle from '@/components/MobileMenuToggle'

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo — static */}
                    <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg blur-sm opacity-50" />
                            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">YKS</span>
                            <span className="text-xs text-gray-600 font-medium -mt-1">Net Hesaplama</span>
                        </div>
                    </Link>

                    {/* Desktop links — static */}
                    <div className="hidden md:flex items-center space-x-8">
                        {[
                            { href: '/', label: 'Ana Sayfa' },
                            { href: '/blog', label: 'Blog' },
                            { href: '/yks-rehberi', label: 'YKS Rehberi' },
                            { href: '/sss', label: 'SSS' },
                            { href: '/hakkimizda', label: 'Hakkımızda' },
                            { href: '/iletisim', label: 'İletişim' },
                        ].map(({ href, label }) => (
                            <Link key={href} href={href} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                                {label}
                            </Link>
                        ))}
                        <Link href="/geri-sayim" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-md">
                            ⏰ Geri Sayım
                        </Link>
                    </div>

                    {/* Mobil toggle — tek client component */}
                    <MobileMenuToggle />
                </div>
            </div>
        </nav>
    )
}
