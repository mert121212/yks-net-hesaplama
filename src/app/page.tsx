'use client'

import { useState, useEffect } from 'react'
import { Calculator, BookOpen, Target, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { TYTScores, AYTScores, YDTScores } from '@/types/yks'
import { calculateYKSScores } from '@/utils/yksCalculator'
import { trackNetCalculation, trackScoreCalculation } from '@/lib/gtag'
import TYTSection from '@/components/TYTSection'
import AYTSection from '@/components/AYTSection'
import YDTSection from '@/components/YDTSection'
import CountdownTimer from '@/components/CountdownTimer'
import StructuredData from '@/components/StructuredData'
import AdBanner from '@/components/AdBanner'

export default function HomePage() {
    const [tytScores, setTytScores] = useState<TYTScores>({
        turkce: { dogru: 0, yanlis: 0 },
        matematik: { dogru: 0, yanlis: 0 },
        sosyal: { dogru: 0, yanlis: 0 },
        fen: { dogru: 0, yanlis: 0 }
    })

    const [aytScores, setAytScores] = useState<AYTScores>({
        matematik: { dogru: 0, yanlis: 0 },
        fizik: { dogru: 0, yanlis: 0 },
        kimya: { dogru: 0, yanlis: 0 },
        biyoloji: { dogru: 0, yanlis: 0 },
        edebiyat: { dogru: 0, yanlis: 0 },
        tarih1: { dogru: 0, yanlis: 0 },
        cografya1: { dogru: 0, yanlis: 0 },
        tarih2: { dogru: 0, yanlis: 0 },
        cografya2: { dogru: 0, yanlis: 0 },
        felsefe: { dogru: 0, yanlis: 0 },
        din: { dogru: 0, yanlis: 0 }
    })

    const [ydtScores, setYdtScores] = useState<YDTScores>({
        ydt: { dogru: 0, yanlis: 0 }
    })

    const handleTYTScoreChange = (subject: keyof TYTScores, field: 'dogru' | 'yanlis', value: number) => {
        setTytScores(prev => ({
            ...prev,
            [subject]: {
                ...prev[subject],
                [field]: value
            }
        }))
    }

    const handleAYTScoreChange = (subject: keyof AYTScores, field: 'dogru' | 'yanlis', value: number) => {
        setAytScores(prev => ({
            ...prev,
            [subject]: {
                ...prev[subject],
                [field]: value
            }
        }))
    }

    const handleYDTScoreChange = (subject: keyof YDTScores, field: 'dogru' | 'yanlis', value: number) => {
        setYdtScores(prev => ({
            ...prev,
            [subject]: {
                ...prev[subject],
                [field]: value
            }
        }))
    }

    const results = calculateYKSScores(tytScores, aytScores, ydtScores)

    // Analytics tracking için useEffect
    useEffect(() => {
        // TYT net hesaplama tracking
        if (results.nets.tyt.toplam > 0) {
            trackNetCalculation('TYT', results.nets.tyt.toplam)
        }
    }, [results.nets.tyt.toplam])

    useEffect(() => {
        // AYT net hesaplama tracking
        if (results.nets.ayt.toplam > 0) {
            trackNetCalculation('AYT', results.nets.ayt.toplam)
        }
    }, [results.nets.ayt.toplam])

    useEffect(() => {
        // YDT net hesaplama tracking
        if (results.nets.ydt.ydt > 0) {
            trackNetCalculation('YDT', results.nets.ydt.ydt)
        }
    }, [results.nets.ydt.ydt])

    useEffect(() => {
        // Puan hesaplama tracking
        if (results.points.say > 0) {
            trackScoreCalculation('SAY', results.points.say)
        }
        if (results.points.ea > 0) {
            trackScoreCalculation('EA', results.points.ea)
        }
        if (results.points.soz > 0) {
            trackScoreCalculation('SOZ', results.points.soz)
        }
        if (results.points.dil > 0) {
            trackScoreCalculation('DIL', results.points.dil)
        }
    }, [results.points])

    return (
        <div className="min-h-screen">
            <StructuredData />
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-3">
                            <Calculator className="h-8 w-8 text-primary-600" />
                            <h1 className="text-xl font-bold text-gray-900">YKS Net Hesaplama</h1>
                        </div>

                        <div className="flex items-center space-x-6">
                            <CountdownTimer />
                            <nav className="hidden md:flex space-x-6">
                                <a href="#hesaplama" className="text-gray-600 hover:text-primary-600 transition-colors">
                                    Hesaplama
                                </a>
                                <a href="#sonuclar" className="text-gray-600 hover:text-primary-600 transition-colors">
                                    Sonuçlar
                                </a>
                                <Link href="/geri-sayim" className="text-gray-600 hover:text-primary-600 transition-colors">
                                    Geri Sayım
                                </Link>
                                <Link href="/yks-rehberi" className="text-gray-600 hover:text-primary-600 transition-colors">
                                    Rehber
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        YKS Net ve Puan Hesaplama Aracı 2026
                    </h1>
                    <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                        TYT, AYT ve YDT netlerinizi hesaplayın, üniversite puanlarınızı öğrenin.
                        Hızlı, doğru ve güncel hesaplama sistemi ile YKS 2026'ya hazırlanın.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
                        <div className="flex items-center space-x-2">
                            <BookOpen className="h-5 w-5" />
                            <span>TYT Net Hesaplama</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Target className="h-5 w-5" />
                            <span>AYT Net Hesaplama</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <TrendingUp className="h-5 w-5" />
                            <span>Üniversite Puan Hesaplama</span>
                        </div>
                    </div>
                    <div className="text-sm text-primary-200">
                        <p>✓ Ücretsiz YKS hesaplama aracı ✓ SAY, EA, SÖZ, DİL puanları ✓ 2026 YKS için güncel</p>
                    </div>
                </div>
            </section>

            {/* Top Banner Ad */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-center">
                    <AdBanner
                        adSlot="1234567890"
                        adFormat="horizontal"
                        className="max-w-4xl w-full"
                        style={{ display: 'block', textAlign: 'center', minHeight: '90px' }}
                    />
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sol Kolon - Hesaplama Formu */}
                    <div className="lg:col-span-2 space-y-8" id="hesaplama">
                        <TYTSection
                            scores={tytScores}
                            onScoreChange={handleTYTScoreChange}
                        />

                        <AYTSection
                            scores={aytScores}
                            onScoreChange={handleAYTScoreChange}
                        />

                        <YDTSection
                            scores={ydtScores}
                            onScoreChange={handleYDTScoreChange}
                        />
                    </div>

                    {/* Sağ Kolon - Sonuçlar */}
                    <div className="space-y-6" id="sonuclar">
                        <div className="card sticky top-4">
                            <h2 className="section-title">Sonuçlar</h2>

                            {/* TYT Sonuçları */}
                            <div className="mb-6">
                                <h3 className="subsection-title">TYT Netleri</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Türkçe:</span>
                                        <span className="font-semibold">{results.nets.tyt.turkce.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Matematik:</span>
                                        <span className="font-semibold">{results.nets.tyt.matematik.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sosyal:</span>
                                        <span className="font-semibold">{results.nets.tyt.sosyal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Fen:</span>
                                        <span className="font-semibold">{results.nets.tyt.fen.toFixed(2)}</span>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="flex justify-between text-lg font-bold text-primary-600">
                                        <span>TYT Toplam:</span>
                                        <span>{results.nets.tyt.toplam.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* AYT Sonuçları */}
                            <div className="mb-6">
                                <h3 className="subsection-title">AYT Netleri</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Matematik:</span>
                                        <span className="font-semibold">{results.nets.ayt.matematik.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Fizik:</span>
                                        <span className="font-semibold">{results.nets.ayt.fizik.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Kimya:</span>
                                        <span className="font-semibold">{results.nets.ayt.kimya.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Biyoloji:</span>
                                        <span className="font-semibold">{results.nets.ayt.biyoloji.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Edebiyat:</span>
                                        <span className="font-semibold">{results.nets.ayt.edebiyat.toFixed(2)}</span>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="flex justify-between text-base font-bold text-green-600">
                                        <span>AYT Toplam:</span>
                                        <span>{results.nets.ayt.toplam.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* YDT Sonuçları */}
                            <div className="mb-6">
                                <h3 className="subsection-title">YDT Netleri</h3>
                                <div className="flex justify-between text-lg font-bold text-orange-600">
                                    <span>YDT:</span>
                                    <span>{results.nets.ydt.ydt.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Üniversite Puanları */}
                            <div>
                                <h3 className="subsection-title">Üniversite Puanları</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>SAY:</span>
                                        <span className="font-semibold text-green-600">{results.points.say.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>EA:</span>
                                        <span className="font-semibold text-blue-600">{results.points.ea.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>SÖZ:</span>
                                        <span className="font-semibold text-purple-600">{results.points.soz.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>DİL:</span>
                                        <span className="font-semibold text-orange-600">{results.points.dil.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Ad */}
                        <div className="card">
                            <AdBanner
                                adSlot="0987654321"
                                adFormat="rectangle"
                                style={{ display: 'block', textAlign: 'center', minHeight: '250px' }}
                            />
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Banner Ad */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-center">
                    <AdBanner
                        adSlot="1122334455"
                        adFormat="horizontal"
                        className="max-w-4xl w-full"
                        style={{ display: 'block', textAlign: 'center', minHeight: '90px' }}
                    />
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-3 mb-4">
                                <Calculator className="h-8 w-8 text-primary-400" />
                                <h3 className="text-xl font-bold">YKS Net Hesaplama</h3>
                            </div>
                            <p className="text-gray-400 mb-4">
                                YKS 2026 sınavına hazırlanan öğrenciler için geliştirilmiş ücretsiz net hesaplama aracı.
                                TYT, AYT ve YDT netlerinizi hesaplayın, üniversite puanlarınızı öğrenin.
                            </p>
                            <div className="text-sm text-gray-500">
                                <p>🎯 SAY, EA, SÖZ, DİL puan hesaplama</p>
                                <p>📊 Gerçek zamanlı net hesaplama</p>
                                <p>⏰ YKS 2026 geri sayım</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Hesaplama Araçları</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><Link href="/#hesaplama" className="hover:text-white transition-colors">TYT Net Hesaplama</Link></li>
                                <li><Link href="/#hesaplama" className="hover:text-white transition-colors">AYT Net Hesaplama</Link></li>
                                <li><Link href="/#hesaplama" className="hover:text-white transition-colors">YDT Net Hesaplama</Link></li>
                                <li><Link href="/#sonuclar" className="hover:text-white transition-colors">Puan Hesaplama</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">YKS 2026</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><Link href="/geri-sayim" className="hover:text-white transition-colors">YKS Geri Sayım</Link></li>
                                <li><Link href="/" className="hover:text-white transition-colors">Sınav Tarihleri</Link></li>
                                <li><Link href="/" className="hover:text-white transition-colors">Başvuru Rehberi</Link></li>
                                <li><Link href="/" className="hover:text-white transition-colors">Puan Türleri</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 text-center">
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-4">
                            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
                            <Link href="/geri-sayim" className="hover:text-white transition-colors">Geri Sayım</Link>
                            <Link href="/yks-rehberi" className="hover:text-white transition-colors">YKS Rehberi</Link>
                            <Link href="/privacy" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
                            <Link href="/#hesaplama" className="hover:text-white transition-colors">Net Hesaplama</Link>
                        </div>
                        <p className="text-sm text-gray-500">
                            © 2026 YKS Net Hesaplama. Tüm hakları saklıdır. • Geliştirici: Mert Çalışkan
                        </p>
                        <p className="text-xs text-gray-600 mt-2">
                            YKS, TYT, AYT, YDT net hesaplama ve üniversite puan hesaplama aracı. ÖSYM resmi sitesi değildir.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}