'use client'

import { useState } from 'react'
import Link from 'next/link'

// Lucide ikonları yerine inline SVG — bundle boyutunu azaltır
function CalcIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="8" y1="10" x2="10" y2="10" />
            <line x1="14" y1="10" x2="16" y2="10" />
            <line x1="8" y1="14" x2="10" y2="14" />
            <line x1="14" y1="14" x2="16" y2="14" />
            <line x1="8" y1="18" x2="16" y2="18" />
        </svg>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
                            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                                <CalcIcon />
                            </div>
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">YKS</span>
                            <span className="text-xs text-gray-600 font-medium -mt-1">Net Hesaplama</span>
                        </div>
                    </Link>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        {[
                            { href: '/', label: 'Ana Sayfa' },
                            { href: '/blog', label: 'Blog' },
                            { href: '/yks-rehberi', label: 'YKS Rehberi' },
                            { href: '/sss', label: 'SSS' },
                        ].map(({ href, label }) => (
                            <Link key={href} href={href} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                                {label}
                            </Link>
                        ))}
                        <Link href="/geri-sayim" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-md">
                            ⏰ Geri Sayım
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                        aria-label="Menü"
                    >
                        {open ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-3">
                            {[
                                { href: '/', label: 'Ana Sayfa' },
                                { href: '/blog', label: 'Blog' },
                                { href: '/yks-rehberi', label: 'YKS Rehberi' },
                                { href: '/sss', label: 'SSS' },
                            ].map(({ href, label }) => (
                                <Link key={href} href={href}
                                    className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                                    onClick={() => setOpen(false)}
                                >
                                    {label}
                                </Link>
                            ))}
                            <Link href="/geri-sayim"
                                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium"
                                onClick={() => setOpen(false)}
                            >
                                ⏰ Geri Sayım
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
