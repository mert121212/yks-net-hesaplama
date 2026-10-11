'use client'

import { useState, useEffect } from 'react'

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            if (totalHeight > 0) {
                setProgress(Math.min((window.scrollY / totalHeight) * 100, 100))
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200/50">
            <div
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}
