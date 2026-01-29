'use client'

import { useState, useEffect } from 'react'
import { Clock, Calendar, BookOpen, Target, TrendingUp, Coffee, Brain, Heart } from 'lucide-react'
import Link from 'next/link'
import { trackCountdownView } from '@/lib/gtag'
import AdBanner from '@/components/AdBanner'

export default function GeriSayimPage() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Analytics tracking
        trackCountdownView()

        // 2026 YKS tarihi (yaklaşık) - Haziran ayının ikinci haftası
        const yksDate = new Date('2026-06-13T10:00:00')

        const updateTimer = () => {
            const now = new Date().getTime()
            const distance = yksDate.getTime() - now

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                })
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }

        // İlk çalıştırma
        updateTimer()

        const timer = setInterval(updateTimer, 1000)
        return () => clearInterval(timer)
    }, [])

    if (!mounted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                <header className="bg-white shadow-sm border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                                <Clock className="h-8 w-8 text-primary-600" />
                                <h1 className="text-xl font-bold text-gray-900">YKS Geri Sayım</h1>
                            </Link>
                            <nav className="flex space-x-6">
                                <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                                    Ana Sayfa
                                </Link>
                                <Link href="/#hesaplama" className="text-gray-600 hover:text-primary-600 transition-colors">
                                    Net Hesaplama
                                </Link>
                            </nav>
                        </div>
                    </div>
                </header>
                <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center mb-8">
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-64 mx-auto mb-8"></div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="bg-white rounded-xl shadow-md p-4">
                                        <div className="h-8 bg-gray-300 rounded mb-2"></div>
                                        <div className="h-4 bg-gray-200 rounded w-12 mx-auto"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }

    const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0
    const totalDays = timeLeft.days
    const weeksLeft = Math.floor(totalDays / 7)
    const monthsLeft = Math.floor(totalDays / 30)

    const getMotivationMessage = () => {
        if (totalDays > 365) {
            return "Çok zamanın var! Planlı çalışarak hedeflerine ulaşabilirsin. 🎯"
        } else if (totalDays > 180) {
            return "Harika! Yeterli zamanın var. Düzenli çalışmaya devam et! 📚"
        } else if (totalDays > 90) {
            return "Son dönemece giriyorsun! Tempo artırma zamanı! 🚀"
        } else if (totalDays > 30) {
            return "Son ay! Tüm gücünle çalış, başarı çok yakın! 💪"
        } else if (totalDays > 7) {
            return "Son hafta! Sakin kal ve kendine güven! 🌟"
        } else {
            return "Sınav çok yakın! Dinlen ve kendine güven! ✨"
        }
    }

    const getStudyTips = () => {
        if (totalDays > 180) {
            return [
                "Günlük çalışma programı oluştur",
                "Temel konuları pekiştir",
                "Düzenli deneme sınavları çöz",
                "Eksik konuları belirle ve çalış"
            ]
        } else if (totalDays > 90) {
            return [
                "Deneme sınavlarını artır",
                "Zayıf konulara odaklan",
                "Zaman yönetimini geliştir",
                "Stres yönetimi teknikleri öğren"
            ]
        } else if (totalDays > 30) {
            return [
                "Son tekrarları yap",
                "Sınav stratejini belirle",
                "Sağlıklı beslen ve düzenli uyu",
                "Pozitif düşünmeye odaklan"
            ]
        } else {
            return [
                "Sakin kal ve paniğe kapılma",
                "Bildiğin konuları tekrarla",
                "Erken yat, erken kalk",
                "Kendine güven!"
            ]
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                            <Clock className="h-8 w-8 text-primary-600" />
                            <h1 className="text-xl font-bold text-gray-900">YKS Geri Sayım</h1>
                        </Link>
                        <nav className="flex space-x-6">
                            <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
                                Ana Sayfa
                            </Link>
                            <Link href="/#hesaplama" className="text-gray-600 hover:text-primary-600 transition-colors">
                                Net Hesaplama
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        2026 YKS'ye
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Hedeflerine ulaşmak için kalan süre
                    </p>
                </div>

                {isExpired ? (
                    <div className="text-center">
                        <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-8">
                            <Calendar className="h-12 w-12 mx-auto mb-4" />
                            <h2 className="text-2xl font-bold mb-2">YKS 2026 Tamamlandı!</h2>
                            <p>Sınav bitti. Sonuçlar için beklemede kalın!</p>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Countdown Display */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-white rounded-xl shadow-md p-4 text-center border-l-4 border-primary-500">
                                <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">
                                    {timeLeft.days}
                                </div>
                                <div className="text-gray-600 font-medium text-sm">GÜN</div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-4 text-center border-l-4 border-blue-500">
                                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                                    {timeLeft.hours.toString().padStart(2, '0')}
                                </div>
                                <div className="text-gray-600 font-medium text-sm">SAAT</div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-4 text-center border-l-4 border-indigo-500">
                                <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1">
                                    {timeLeft.minutes.toString().padStart(2, '0')}
                                </div>
                                <div className="text-gray-600 font-medium text-sm">DAKİKA</div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-4 text-center border-l-4 border-green-500">
                                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">
                                    {timeLeft.seconds.toString().padStart(2, '0')}
                                </div>
                                <div className="text-gray-600 font-medium text-sm">SANİYE</div>
                            </div>
                        </div>

                        {/* Time Statistics */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                                <div className="text-xl font-bold text-blue-600 mb-1">{monthsLeft}</div>
                                <div className="text-gray-600 text-sm">Ay</div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                                <div className="text-xl font-bold text-purple-600 mb-1">{weeksLeft}</div>
                                <div className="text-gray-600 text-sm">Hafta</div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-4 text-center">
                                <Target className="h-6 w-6 text-green-600 mx-auto mb-2" />
                                <div className="text-xl font-bold text-green-600 mb-1">{Math.floor(totalDays * 24)}</div>
                                <div className="text-gray-600 text-sm">Saat</div>
                            </div>
                        </div>

                        {/* Motivation Section */}
                        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-lg p-6 text-white text-center mb-8">
                            <Heart className="h-8 w-8 mx-auto mb-3" />
                            <h2 className="text-lg font-bold mb-3">Motivasyon</h2>
                            <p className="text-base text-primary-100">
                                {getMotivationMessage()}
                            </p>
                        </div>

                        {/* Study Tips */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                            <div className="flex items-center mb-6">
                                <Brain className="h-8 w-8 text-indigo-600 mr-3" />
                                <h2 className="text-2xl font-bold text-gray-900">Bu Dönemde Yapılacaklar</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {getStudyTips().map((tip, index) => (
                                    <div key={index} className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-lg">
                                        <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                            {index + 1}
                                        </div>
                                        <span className="text-gray-800">{tip}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ad Banner */}
                        <div className="flex justify-center mb-8">
                            <AdBanner
                                adSlot="2233445566"
                                adFormat="horizontal"
                                className="max-w-2xl w-full"
                                style={{ display: 'block', textAlign: 'center', minHeight: '90px' }}
                            />
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Link href="/" className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow group">
                                <BookOpen className="h-8 w-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                                <h3 className="text-base font-bold text-gray-900 mb-2">Net Hesaplama</h3>
                                <p className="text-gray-600 text-sm">TYT, AYT ve YDT netlerini hesapla</p>
                            </Link>

                            <div className="bg-white rounded-lg shadow-md p-4">
                                <Coffee className="h-8 w-8 text-orange-600 mb-3" />
                                <h3 className="text-base font-bold text-gray-900 mb-2">Mola Zamanı</h3>
                                <p className="text-gray-600 text-sm">Düzenli molalar veriyor musun?</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-4">
                                <TrendingUp className="h-8 w-8 text-green-600 mb-3" />
                                <h3 className="text-base font-bold text-gray-900 mb-2">İlerleme</h3>
                                <p className="text-gray-600 text-sm">Hedeflerine ne kadar yakınsın?</p>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </div>
    )
}