import Image from 'next/image'

export default function AuthorProfile() {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-10 mt-6 flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl shadow-inner">
                    MC
                </div>
            </div>
            <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 flex items-center justify-center md:justify-start gap-2">
                    Mert Can
                    <span className="text-blue-500" title="Doğrulanmış Uzman">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                    </span>
                </h3>
                <p className="text-blue-600 font-medium text-sm mb-2">Eğitim Koordinatörü & Veri Analisti</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                    YKS hazırlık sürecinde öğrencilerin deneme verilerini analiz ederek kişiselleştirilmiş stratejiler geliştirir. ÖSYM veritabanları, yerleştirme istatistikleri ve sınav analizleri konusunda 5+ yıl deneyime sahiptir.
                </p>
            </div>
        </div>
    )
}
