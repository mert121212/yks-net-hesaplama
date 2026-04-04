import Link from 'next/link'
import CountdownTimer from '@/components/CountdownTimer'

export default function GeriSayimPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* H1 — anahtar kelimeler */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        2026 YKS Sayaç | YKS&apos;ye Kaç Gün Kaldı? | YKS Ne Zaman
                    </h1>
                    <p className="text-lg text-gray-600 mb-2">
                        YKS 2026 sınavına kalan süreyi canlı olarak takip edin.
                    </p>
                    <p className="text-sm text-gray-500">
                        TYT: 20 Haziran 2026 (Cumartesi) · AYT &amp; YDT: 21 Haziran 2026 (Pazar)
                    </p>
                </div>

                {/* Client-side sayaç — sadece bu kısım JS yükler */}
                <CountdownTimer />

                {/* Static SEO içeriği — JS gerektirmez */}
                <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">YKS 2026 Tarihleri ve Hazırlık Rehberi</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                        <p>
                            <strong>YKS 2026 sınavı</strong> iki gün olarak uygulanacaktır.
                            <strong> TYT (Temel Yeterlilik Testi) 20 Haziran 2026</strong> Cumartesi günü,
                            <strong> AYT (Alan Yeterlilik Testi) ve YDT (Yabancı Dil Testi) ise 21 Haziran 2026</strong> Pazar günü yapılacaktır.
                            Yukarıdaki geri sayım sayacı, sınava kalan gün, saat, dakika ve saniyeyi canlı olarak göstermektedir.
                        </p>
                        <p>
                            YKS&apos;ye hazırlanırken zamanı doğru planlamak kritik önem taşır. TYT için Türkçe, Matematik,
                            Sosyal Bilimler ve Fen Bilimleri; AYT için ise hedef bölümünüze göre Sayısal, Eşit Ağırlık
                            veya Sözel derslerine odaklanın.
                        </p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-blue-50 rounded-xl">
                            <div className="text-lg font-bold text-blue-700">TYT</div>
                            <div className="text-sm text-blue-600 font-medium">20 Haziran 2026</div>
                            <div className="text-xs text-gray-500 mt-1">120 soru · 165 dakika</div>
                        </div>
                        <div className="p-4 bg-green-50 rounded-xl">
                            <div className="text-lg font-bold text-green-700">AYT</div>
                            <div className="text-sm text-green-600 font-medium">21 Haziran 2026</div>
                            <div className="text-xs text-gray-500 mt-1">SAY / EA / SÖZ · 80 soru</div>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-xl">
                            <div className="text-lg font-bold text-orange-700">YDT</div>
                            <div className="text-sm text-orange-600 font-medium">21 Haziran 2026</div>
                            <div className="text-xs text-gray-500 mt-1">80 soru · 120 dakika</div>
                        </div>
                    </div>

                    <div className="mt-8 space-y-4">
                        <h3 className="text-xl font-bold text-gray-900">YKS Hazırlık Süreci Nasıl Olmalı?</h3>
                        <p className="text-gray-700">
                            Düzenli çalışma programı oluşturun, her gün belirli saatlerde ders çalışın ve kendinize mola verin.
                            TYT ve AYT konularını dengeli bir şekilde çalışın. Zayıf olduğunuz konulara daha fazla zaman ayırın
                            ama güçlü olduğunuz konuları da ihmal etmeyin.
                        </p>
                        <p className="text-gray-700">
                            Düzenli deneme sınavları çözerek kendinizi test edin ve eksiklerinizi belirleyin.
                            Sağlıklı beslenme, düzenli uyku ve stres yönetimi de başarınızı doğrudan etkiler.
                        </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                            Net Hesapla
                        </Link>
                        <Link href="/blog/yks-net-hesaplama-nasil-yapilir" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                            Net Hesaplama Rehberi
                        </Link>
                        <Link href="/sss" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                            Sık Sorulan Sorular
                        </Link>
                    </div>
                </div>

            </main>
        </div>
    )
}
