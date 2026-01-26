'use client'

import { useState, useEffect } from 'react'
import { Clock, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
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
            <div className="bg-gray-200 animate-pulse px-3 py-2 rounded-lg">
                <div className="h-4 bg-gray-300 rounded w-20"></div>
            </div>
        )
    }

    const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0

    return (
        <Link href="/geri-sayim" className="block">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-2 rounded-lg shadow-md hover:from-primary-600 hover:to-primary-700 transition-all duration-200 cursor-pointer">
                <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />

                    {isExpired ? (
                        <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-bold">Sınav Bitti!</span>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-1 text-sm font-medium">
                            <span>YKS'ye</span>
                            <span className="font-bold">{timeLeft.days}</span>
                            <span>gün</span>
                            <span className="font-bold">{timeLeft.hours.toString().padStart(2, '0')}:{timeLeft.minutes.toString().padStart(2, '0')}</span>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    )
}