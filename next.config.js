/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compress: true,
    poweredByHeader: false,
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['lucide-react'],
    },
    images: {
        domains: [],
        formats: ['image/webp', 'image/avif'],
    },
    // Performance optimizasyonu
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Bundle analyzer için
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
            }
        }
        return config
    },
    // SEO ve performans optimizasyonu için
    async headers() {
        return [
            {
                source: '/_next/static/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig