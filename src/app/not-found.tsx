import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '404 - Sayfa Bulunamadı | YKS Net Hesaplama',
    description: 'Aradığınız sayfa bulunamadı. YKS Net Hesaplama ana sayfasına veya diğer rehber içeriklerimize göz atabilirsiniz.',
}

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
            <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl font-extrabold mx-auto mb-6 shadow-inner">
                    404
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                    Sayfa Bulunamadı
                </h1>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                    Aradığınız sayfa taşınmış, adı değiştirilmiş veya geçici olarak erişilemiyor olabilir. Aşağıdaki bağlantıları kullanarak hedefinize ulaşabilirsiniz.
                </p>

                <div className="space-y-3">
                    <Link
                        href="/"
                        className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-sm text-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Ana Sayfaya Dön
                    </Link>

                    <Link
                        href="/tyt-net-hesaplama"
                        className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-colors text-sm"
                    >
                        TYT Net Hesaplama
                    </Link>

                    <Link
                        href="/blog"
                        className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-xl transition-colors text-sm"
                    >
                        YKS Rehberleri & Blog
                    </Link>
                </div>
            </div>
        </div>
    )
}
