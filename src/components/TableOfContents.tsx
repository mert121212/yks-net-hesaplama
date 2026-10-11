'use client'

import { useState } from 'react'

interface TOCItem {
    id: string
    title: string
}

export default function TableOfContents({ items }: { items: TOCItem[] }) {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <nav className="my-8 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-100 transition-colors"
            >
                <div className="flex items-center gap-2">
                    <span className="text-lg">📑</span>
                    <span className="font-bold text-gray-900 text-sm">İçindekiler</span>
                    <span className="text-xs text-gray-500 font-medium">({items.length} bölüm)</span>
                </div>
                <span className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    ▾
                </span>
            </button>
            {isOpen && (
                <div className="px-6 pb-4 border-t border-slate-200 pt-3">
                    <ol className="space-y-1.5">
                        {items.map((item, index) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-600 transition-colors py-1 group"
                                >
                                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-md bg-white border border-gray-200 text-xs font-bold text-gray-500 group-hover:border-blue-300 group-hover:text-blue-600 transition-colors">
                                        {index + 1}
                                    </span>
                                    <span className="group-hover:translate-x-0.5 transition-transform">
                                        {item.title}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </nav>
    )
}
