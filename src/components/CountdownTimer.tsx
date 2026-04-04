'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Inline SVG ikonlar — lucide-react bundle'ı yok
const icons = {
    clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    calendar: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    target: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    heart: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    brain: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    book: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
}

function Svg({ d, className = 'h-5 w-5' }: { d: string; className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d={d} />
        </svg>
    )
}

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
                <Svg d={icons.calendar} className="h-12 w-12 mx-auto mb-4" />
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
                    <Svg d={icons.calendar} className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-xl font-bold text-blue-600">{monthsLeft}</div>
                    <div className="text-gray-500 text-xs">Ay</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                    <Svg d={icons.clock} className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                    <div className="text-xl font-bold text-purple-600">{weeksLeft}</div>
                    <div className="text-gray-500 text-xs">Hafta</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 text-center">
                    <Svg d={icons.target} className="h-5 w-5 text-green-600 mx-auto mb-1" />
                    <div className="text-xl font-bold text-green-600">{days * 24}</div>
                    <div className="text-gray-500 text-xs">Saat</div>
                </div>
            </div>

            {/* Motivasyon */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center mb-8">
                <Svg d={icons.heart} className="h-7 w-7 mx-auto mb-2 text-white" />
                <p className="text-lg font-medium text-blue-100">{getMotivation()}</p>
            </div>

            {/* Yapılacaklar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <div className="flex items-center mb-4">
                    <Svg d={icons.brain} className="h-6 w-6 text-indigo-600 mr-2" />
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
                <Link href="/" className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                    <Svg d={icons.book} className="h-7 w-7 text-blue-600 mb-2" />
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Net Hesaplama</h3>
                    <p className="text-gray-500 text-xs">TYT, AYT ve YDT netlerini hesapla</p>
                </Link>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <span className="text-2xl mb-2 block">☕</span>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Mola Zamanı</h3>
                    <p className="text-gray-500 text-xs">Düzenli molalar veriyor musun?</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <span className="text-2xl mb-2 block">📈</span>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">İlerleme</h3>
                    <p className="text-gray-500 text-xs">Hedeflerine ne kadar yakınsın?</p>
                </div>
            </div>
        </>
    )
}
