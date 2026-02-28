'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calculator, Menu, X } from 'lucide-react'

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                        <Calculator className="h-8 w-8 text-blue-600" />
                        <span className="text-xl font-bold text-gray-900">YKS Net Hesaplama</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                            Ana Sayfa
                        </Link>
                        <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                            Blog
                        </Link>
                        <Link href="/yks-rehberi" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                            YKS Rehberi
                        </Link>
                        <Link href="/sss" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                            SSS
                        </Link>
                        <Link href="/geri-sayim" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-md">
                            ⏰ Geri Sayım
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                        aria-label="Menü"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-3">
                            <Link
                                href="/"
                                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Ana Sayfa
                            </Link>
                            <Link
                                href="/blog"
                                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/yks-rehberi"
                                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                YKS Rehberi
                            </Link>
                            <Link
                                href="/sss"
                                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                SSS
                            </Link>
                            <Link
                                href="/geri-sayim"
                                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
                                onClick={() => setMobileMenuOpen(false)}
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
