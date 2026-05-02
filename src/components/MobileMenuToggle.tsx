'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/blog', label: 'Blog' },
    { href: '/yks-rehberi', label: 'YKS Rehberi' },
    { href: '/sss', label: 'SSS' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/iletisim', label: 'İletişim' },
]

export default function MobileMenuToggle() {
    const [open, setOpen] = useState(false)

    return (
        <>
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

            {open && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 py-4 px-4">
                    <div className="flex flex-col space-y-3">
                        {links.map(({ href, label }) => (
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
        </>
    )
}
