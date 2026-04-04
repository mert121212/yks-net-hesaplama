import Link from 'next/link'
import CountdownTimer from '@/components/CountdownTimer'

// Günde bir kez yeniden hesapla
export const revalidate = 86400

// Motivasyon ve ipuçları — static, JS yok
function getMotivation(days: number) {
    if (days > 180) return 'Harika! Yeterli zamanın var. Düzenli çalışmaya devam et! 📚'
    if (days > 90) return 'Son dönemece giriyorsun! Tempo artırma zamanı! 🚀'
    if (days > 30) return 'Son ay! Tüm gücünle çalış, başarı çok yakın! 💪'
    if (days > 7) return 'Son hafta! Sakin kal ve kendine güven! 🌟'
    return 'Sınav çok yakın! Dinlen ve kendine güven! ✨'
}

function getStudyTips(days: number) {
    if (days > 90) return ['Günlük çalışma programı oluştur', 'Temel konuları pekiştir', 'Düzenli deneme sınavları çöz', 'Eksik konuları belirle']
    if (days > 30) return ['Deneme sınavlarını artır', 'Zayıf konulara odaklan', 'Zaman yönetimini geliştir', 'Stres yönetimi öğren']
    return ['Son tekrarları yap', 'Sınav stratejini belirle', 'Sağlıklı beslen ve düzenli uyu', 'Kendine güven!']
}

// Server-side hesaplama — build anında statik
function getDaysLeft() {
    const yksDate = new Date('2026-06-20T10:00:00')
    const now = new Date()
    return Math.max(0, Math.floor((yksDate.getTime() - now.getTime()) / 86400000))
}

// Sabit değerler — her deploy'da güncellenir, runtime'da değişmez
const DAYS_LEFT = getDaysLeft()

export default function GeriSayimPage() {
    const days = DAYS_LEFT
    const motivation = getMotivation(days)
    const tips = getStudyTips(days)

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* H1 */}
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

                {/* Sadece sayaç client-side */}
                <CountdownTimer />

                {/* Özet — static */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-4 text-center">
                        <div className="text-xl font-bold text-blue-600">{Math.floor(days / 30)}</div>
                        <div className="text-gray-500 text-xs">Ay</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 text-center">
                        <div className="text-xl font-bold text-purple-600">{Math.floor(days / 7)}</div>
                        <div className="text-gray-500 text-xs">Hafta</div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 text-center">
                        <div className="text-xl font-bold text-green-600">{days * 24}</div>
                        <div className="text-gray-500 text-xs">Saat</div>
                    </div>
                </div>

                {/* Motivasyon — static */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center mb-8">
                    <p className="text-lg font-medium text-blue-100">{motivation}</p>
                </div>

                {/* Yapılacaklar — static */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Bu Dönemde Yapılacaklar</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {tips.map((tip, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                                <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</div>
                                <span className="text-gray-800 text-sm">{tip}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hızlı linkler — static */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    <Link href="/" className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                        <span className="text-2xl mb-2 block">🧮</span>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">Net Hesaplama</h3>
                        <p className="text-gray-500 text-xs">TYT, AYT ve YDT netlerini hesapla</p>
                    </Link>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <span className="text-2xl mb-2 block">☕</span>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">Mola Zamanı</h3>
                        <p className="text-gray-500 text-xs">Düzenli molalar veriyor musun?</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <span className="text-2xl mb-2 block">📈</span>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">İlerleme</h3>
                        <p className="text-gray-500 text-xs">Hedeflerine ne kadar yakınsın?</p>
                    </div>
                </div>

                {/* SEO içeriği — static */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">YKS 2026 Tarihleri ve Hazırlık Rehberi</h2>
                    <p className="text-gray-700 mb-4">
                        <strong>TYT (Temel Yeterlilik Testi) 20 Haziran 2026</strong> Cumartesi,
                        <strong> AYT ve YDT 21 Haziran 2026</strong> Pazar günü yapılacaktır.
                    </p>
                    <p className="text-gray-700 mb-6">
                        TYT için Türkçe, Matematik, Sosyal Bilimler ve Fen Bilimleri; AYT için hedef bölümünüze göre
                        Sayısal, Eşit Ağırlık veya Sözel derslerine odaklanın.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-6">
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
                    <div className="flex flex-wrap gap-3">
                        <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Net Hesapla</Link>
                        <Link href="/blog/yks-net-hesaplama-nasil-yapilir" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">Net Hesaplama Rehberi</Link>
                        <Link href="/sss" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">Sık Sorulan Sorular</Link>
                    </div>
                </div>

            </main>
        </div>
    )
}
