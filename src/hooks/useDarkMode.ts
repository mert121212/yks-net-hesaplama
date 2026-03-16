'use client'

import { useEffect, useState } from 'react'

export function useDarkMode() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        // Check saved preference or system preference
        const saved = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const shouldBeDark = saved === 'dark' || (!saved && prefersDark)
        setIsDark(shouldBeDark)
        document.documentElement.classList.toggle('dark', shouldBeDark)
    }, [])

    const toggle = () => {
        const next = !isDark
        setIsDark(next)
        document.documentElement.classList.toggle('dark', next)
        localStorage.setItem('theme', next ? 'dark' : 'light')
    }

    return { isDark, toggle }
}
