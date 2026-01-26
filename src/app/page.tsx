'use client'

import { useState } from 'react'
import { Calculator, BookOpen, Target, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { TYTScores, AYTScores, YDTScores } from '@/types/yks'
import { calculateYKSScores } from '@/utils/yksCalculator'
import TYTSection from '@/components/TYTSection'
import AYTSection from '@/components/AYTSection'
import YDTSection from '@/components/YDTSection'
import CountdownTimer from '@/components/CountdownTimer'

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

    return (
        <div className="min-h-screen">
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
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        YKS Net ve Puan Hesaplama Aracı
                    </h2>
                    <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                        TYT, AYT ve YDT netlerinizi hesaplayın, üniversite puanlarınızı öğrenin.
                        Hızlı, doğru ve güncel hesaplama sistemi.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <div className="flex items-center space-x-2">
                            <BookOpen className="h-5 w-5" />
                            <span>TYT Hesaplama</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Target className="h-5 w-5" />
                            <span>AYT Hesaplama</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <TrendingUp className="h-5 w-5" />
                            <span>Puan Hesaplama</span>
                        </div>
                    </div>
                </div>
            </section>

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
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <Calculator className="h-8 w-8 text-primary-400" />
                            <h3 className="text-xl font-bold">YKS Net Hesaplama</h3>
                        </div>
                        <p className="text-gray-400 mb-4">
                            YKS sınavına hazırlanan öğrenciler için geliştirilmiş net hesaplama aracı
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-4">
                            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
                            <Link href="/geri-sayim" className="hover:text-white transition-colors">Geri Sayım</Link>
                            <Link href="/#hesaplama" className="hover:text-white transition-colors">Net Hesaplama</Link>
                        </div>
                        <p className="text-sm text-gray-500">
                            © 2026 YKS Net Hesaplama. Tüm hakları saklıdır. • Geliştirici: Mert Çalışkan
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}