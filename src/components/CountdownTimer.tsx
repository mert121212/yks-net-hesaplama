'use client'

import { useState, useEffect, lazy, Suspense } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// İkonları lazy load — ilk paint'i bloklamaz
const Clock = dynamic(() => import('lucide-react').then(m => ({ default: m.Clock })), { ssr: false })
const Calendar = dynamic(() => import('lucide-react').then(m => ({ default: m.Calendar })), { ssr: false })
const Target = dynamic(() => import('lucide-react').then(m => ({ default: m.Target })), { ssr: false })
const Heart = dynamic(() => import('lucide-react').then(m => ({ default: m.Heart })), { ssr: false })
const Brain = dynamic(() => import('lucide-react').then(m => ({ default: m.Brain })), { ssr: false })
const Coffee = dynamic(() => import('lucide-react').then(m => ({ default: m.Coffee })), { ssr: false })
const TrendingUp = dynamic(() => import('lucide-react').then(m => ({ default: m.TrendingUp })), { ssr: false })
const BookOpen = dynamic(() => import('lucide-react').then(m => ({ default: m.BookOpen })), { ssr: false })

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const yksDate = new Date('2026-06-20T10:00:00')

        const update = () => {
            const distance = yksDate.getTime() - Date.now()
            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / 86400000),
                    hours: Math.floor((distance % 86400000) / 3600000),
                    minutes: Math.floor((distance % 3600000) / 60000),
                    seconds: Math.floor((distance % 60000) / 1000),
                })
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }

        update()
        const timer = setInterval(update, 1000)
        return () => clearInterval(timer)
    }, [])

    if (!mounted) {
        return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-pulse">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="bg-white rounded-xl shadow-md p-4 text-center">
                        <div className="h-10 bg-gray-200 rounded mb-2" />
                        <div className="h-4 bg-gray-100 rounded w-12 mx-auto" />
                    </div>
                ))}
            </div>
        )
    }

    const { days, hours, minutes, seconds } = timeLeft
    const isExpired = days === 0 && hours === 0 && minutes === 0 && seconds === 0
    const weeksLeft = Math.floor(days / 7)
    const monthsLeft = Math.floor(days / 30)

    const getMotivation = () => {
        if (days > 180) return 'Harika! Yeterli zamanın var. Düzenli çalışmaya devam et! 📚'
        if (days > 90) return 'Son dönemece giriyorsun! Tempo artırma zamanı! 🚀'
        if (days > 30) return 'Son ay! Tüm gücünle çalış, başarı çok yakın! 💪'
        if (days > 7) return 'Son hafta! Sakin kal ve kendine güven! 🌟'
        return 'Sınav çok yakın! Dinlen ve kendine güven! ✨'
    }

    const getStudyTips = () => {
        if (days > 90) return ['Günlük çalışma programı oluştur', 'Temel konuları pekiştir', 'Düzenli deneme sınavları çöz', 'Eksik konuları belirle']
        if (days > 30) return ['Deneme sınavlarını artır', 'Zayıf konulara odaklan', 'Zaman yönetimini geliştir', 'Stres yönetimi öğren']
        return ['Son tekrarları yap', 'Sınav stratejini belirle', 'Sağlıklı beslen ve düzenli uyu', 'Kendine güven!']
    }

    if (isExpired) {
        return (
            <div className="text-center bg-green-100 border border-green-400 text-green-700 px-6 py-8 rounded-xl mb-8">
                <Calendar className="h-12 w-12 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">YKS 2026 Tamamlandı!</h2>
                <p>Sınav bitti. Sonuçlar için beklemede kalın!</p>
            </div>
        )
    }

    return (
        <>
            {/* Sayaç */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                    { value: days, label: 'GÜN', color: 'border-blue-500 text-blue-600' },
                    { value: String(hours).padStart(2, '0'), label: 'SAAT', color: 'border-indigo-500 text-indigo-600' },
                    { value: String(minutes).padStart(2, '0'), label: 'DAKİKA', color: 'border-purple-500 text-purple-600' },
                    { value: String(seconds).padStart(2, '0'), label: 'SANİYE', color: 'border-green-500 text-green-600' },
                ].map(({ value, label, color }) => (
                    <div key={label} className={`bg-white rounded-xl shadow-md p-4 text-center border-l-4 ${color}`}>
                        <div className={`text-3xl md:text-4xl font-bold mb-1 ${color.split(' ')[1]}`}>{value}</div>
                        <div className="text-gray-500 font-medium text-xs tracking-widest">{label}</div>
                    </div>
                ))}
            </div>

            {/* Özet istatistikler */}
            <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                    <Calendar className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-xl font-bold text-blue-600">{monthsLeft}</div>
                    <div className="text-gray-500 text-xs">Ay</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                    <Clock className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                    <div className="text-xl font-bold text-purple-600">{weeksLeft}</div>
                    <div className="text-gray-500 text-xs">Hafta</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                    <Target className="h-5 w-5 text-green-600 mx-auto mb-1" />
                    <div className="text-xl font-bold text-green-600">{days * 24}</div>
                    <div className="text-gray-500 text-xs">Saat</div>
                </div>
            </div>

            {/* Motivasyon */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center mb-8">
                <Heart className="h-7 w-7 mx-auto mb-2" />
                <p className="text-lg font-medium text-blue-100">{getMotivation()}</p>
            </div>

            {/* Yapılacaklar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <div className="flex items-center mb-4">
                    <Brain className="h-6 w-6 text-indigo-600 mr-2" />
                    <h2 className="text-xl font-bold text-gray-900">Bu Dönemde Yapılacaklar</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {getStudyTips().map((tip, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                            <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</div>
                            <span className="text-gray-800 text-sm">{tip}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hızlı linkler */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/" className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow group">
                    <BookOpen className="h-7 w-7 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Net Hesaplama</h3>
                    <p className="text-gray-500 text-xs">TYT, AYT ve YDT netlerini hesapla</p>
                </Link>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <Coffee className="h-7 w-7 text-orange-600 mb-2" />
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Mola Zamanı</h3>
                    <p className="text-gray-500 text-xs">Düzenli molalar veriyor musun?</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <TrendingUp className="h-7 w-7 text-green-600 mb-2" />
                    <h3 className="font-bold text-gray-900 text-sm mb-1">İlerleme</h3>
                    <p className="text-gray-500 text-xs">Hedeflerine ne kadar yakınsın?</p>
                </div>
            </div>
        </>
    )
}
