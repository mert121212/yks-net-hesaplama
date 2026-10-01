import React from 'react'

interface BlogHeroBannerProps {
    src: string
    alt: string
    caption?: string
}

export default function BlogHeroBanner({ src, alt, caption }: BlogHeroBannerProps) {
    return (
        <figure className="my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-slate-900">
            <img
                src={src}
                alt={alt}
                className="w-full h-auto object-cover aspect-video"
                loading="eager"
            />
            {caption && (
                <figcaption className="text-xs text-center text-gray-500 py-2.5 px-4 bg-gray-50 border-t border-gray-100 font-medium">
                    {caption}
                </figcaption>
            )}
        </figure>
    )
}
