'use client'

import { useState, useEffect } from 'react'

// Sadece sayaç rakamları client-side — geri kalan içerik static
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
            }
        }

        update()
        const timer = setInterval(update, 1000)
        return () => clearInterval(timer)
    }, [])

    if (!mounted) {
        return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {['GÜN', 'SAAT', 'DAKİKA', 'SANİYE'].map(label => (
                    <div key={label} className="bg-white rounded-xl shadow-md p-4 text-center border-l-4 border-gray-200">
                        <div className="text-3xl md:text-4xl font-bold mb-1 text-gray-300">--</div>
                        <div className="text-gray-400 font-medium text-xs tracking-widest">{label}</div>
                    </div>
                ))}
            </div>
        )
    }

    const { days, hours, minutes, seconds } = timeLeft
    const colors = [
        'border-blue-500 text-blue-600',
        'border-indigo-500 text-indigo-600',
        'border-purple-500 text-purple-600',
        'border-green-500 text-green-600',
    ]
    const values = [
        { v: days, label: 'GÜN' },
        { v: String(hours).padStart(2, '0'), label: 'SAAT' },
        { v: String(minutes).padStart(2, '0'), label: 'DAKİKA' },
        { v: String(seconds).padStart(2, '0'), label: 'SANİYE' },
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {values.map(({ v, label }, i) => (
                <div key={label} className={`bg-white rounded-xl shadow-md p-4 text-center border-l-4 ${colors[i]}`}>
                    <div className={`text-3xl md:text-4xl font-bold mb-1 ${colors[i].split(' ')[1]}`}>{v}</div>
                    <div className="text-gray-500 font-medium text-xs tracking-widest">{label}</div>
                </div>
            ))}
        </div>
    )
}
