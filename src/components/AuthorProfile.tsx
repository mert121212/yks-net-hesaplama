import Link from 'next/link'

export default function AuthorProfile() {
    return (
        <div className="bg-gradient-to-br from-white to-blue-50/50 border border-blue-100 rounded-3xl p-6 sm:p-7 shadow-sm mb-10 mt-8 flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Profesyonel Avatar & Rozet */}
            <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 ring-4 ring-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                        <path d="M6 6h10" />
                        <path d="M6 10h10" />
                        <path d="M9 18l3-3 3 3" />
                    </svg>
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-white shadow" title="Doğrulanmış Yazar">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            {/* Bilgiler ve E-E-A-T Detayları */}
            <div className="text-center md:text-left flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 inline-block mr-2">
                            Mert Çalışkan
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                            Eğitim Veri Analisti
                        </span>
                    </div>

                    <div className="flex items-center justify-center sm:justify-end gap-3 text-xs text-gray-500">
                        <a
                            href="https://github.com/mert121212"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 flex items-center gap-1 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            <span>GitHub</span>
                        </a>
                        <span>•</span>
                        <Link href="/iletisim" className="hover:text-blue-600 transition-colors">
                            Doğrudan İletişim
                        </Link>
                    </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    ÖSYM resmi yerleştirme verileri, standart sapma katsayıları ve sınav yığınsal dağılımları üzerine çalışan eğitim veri analistidir. YKS hazırlık sürecindeki adayların en doğru matematiksel modeller ve gerçekçi sıralama tahminleriyle hedeflerine ulaşmaları için bağımsız içerikler ve algoritmalar geliştirir.
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs">
                    <span className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-lg shadow-2xs font-medium">
                        📊 YKS Veri Analitiği
                    </span>
                    <span className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-lg shadow-2xs font-medium">
                        📐 Standart Sapma Modellemesi
                    </span>
                    <span className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 rounded-lg shadow-2xs font-medium">
                        🎓 Tercih & Sıralama Simülasyonu
                    </span>
                </div>
            </div>
        </div>
    )
}
