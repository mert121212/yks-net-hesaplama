'use client'

import { useState, useEffect } from 'react'

export default function CountdownTimer() {
    const [t, setT] = useState<{ d: number, h: number, m: number, s: number } | null>(null)

    useEffect(() => {
        const target = 1750413600000 // 2026-06-20T10:00:00 UTC+3 timestamp

        const calc = () => {
            const diff = target - Date.now()
            if (diff <= 0) { setT({ d: 0, h: 0, m: 0, s: 0 }); return }
            setT({
                d: Math.floor(diff / 86400000),
                h: Math.floor((diff % 86400000) / 3600000),
                m: Math.floor((diff % 3600000) / 60000),
                s: Math.floor((diff % 60000) / 1000),
            })
        }

        calc()
        const id = setInterval(calc, 1000)
        return () => clearInterval(id)
    }, [])

    const items = t
        ? [
            { v: t.d, label: 'GÜN', c: 'border-blue-500 text-blue-600' },
            { v: String(t.h).padStart(2, '0'), label: 'SAAT', c: 'border-indigo-500 text-indigo-600' },
            { v: String(t.m).padStart(2, '0'), label: 'DAKİKA', c: 'border-purple-500 text-purple-600' },
            { v: String(t.s).padStart(2, '0'), label: 'SANİYE', c: 'border-green-500 text-green-600' },
        ]
        : [
            { v: '--', label: 'GÜN', c: 'border-gray-200 text-gray-300' },
            { v: '--', label: 'SAAT', c: 'border-gray-200 text-gray-300' },
            { v: '--', label: 'DAKİKA', c: 'border-gray-200 text-gray-300' },
            { v: '--', label: 'SANİYE', c: 'border-gray-200 text-gray-300' },
        ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {items.map(({ v, label, c }) => (
                <div key={label} className={`bg-white rounded-xl shadow-md p-4 text-center border-l-4 ${c}`}>
                    <div className={`text-3xl md:text-4xl font-bold mb-1 ${c.split(' ')[1]}`}>{v}</div>
                    <div className="text-gray-500 font-medium text-xs tracking-widest">{label}</div>
                </div>
            ))}
        </div>
    )
}
