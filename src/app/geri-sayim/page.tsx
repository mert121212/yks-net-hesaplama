import type { Metadata } from 'next'
import Link from 'next/link'
import CountdownTimer from '@/components/CountdownTimer'

export const metadata: Metadata = {
    title: 'YKS 2027 Geri Sayım | Sınava Kaç Gün Kaldı?',
    description: '2027 YKS sınavına kalan gün, saat ve dakikayı canlı takip edin. TYT 19 Haziran 2027, AYT ve YDT 20 Haziran 2027.',
    alternates: { canonical: 'https://yksnethesapla.com/geri-sayim' },
}

export const revalidate = 86400

function getDaysLeft() {
    const yksDate = new Date('2027-06-19T10:15:00')
    const now = new Date()
    return Math.max(0, Math.floor((yksDate.getTime() - now.getTime()) / 86400000))
}

const DAYS_LEFT = getDaysLeft()

export default function GeriSayimPage() {
    const days = DAYS_LEFT

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "YKS 2027 ne zaman yapılacak?",
                "acceptedAnswer": { "@type": "Answer", "text": "TYT oturumu 19 Haziran 2027 Cumartesi günü saat 10:15'te; AYT ve YDT oturumları ise 20 Haziran 2027 Pazar günü yapılacaktır." }
            },
            {
                "@type": "Question",
                "name": "YKS 2027'ye kaç gün kaldı?",
                "acceptedAnswer": { "@type": "Answer", "text": `YKS 2027 sınavına yaklaşık ${days} gün bulunmaktadır.` }
            }
        ]
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="max-w-4xl mx-auto">

                {/* H1 */}
                <header className="text-center mb-10">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3">
                        Canlı Sınav Sayacı
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3">
                        YKS 2027 Geri Sayım: Sınava Kaç Gün Kaldı?
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
                        TYT: 19 Haziran 2027 Cumartesi (10:15) · AYT: 20 Haziran 2027 Pazar (10:15)
                    </p>
                </header>

                {/* Sayaç */}
                <div className="mb-10">
                    <CountdownTimer />
                </div>

                {/* Süre Özeti */}
                <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-5 text-center">
                        <div className="text-2xl sm:text-3xl font-black text-blue-600 mb-1">{Math.floor(days / 30)}</div>
                        <div className="text-gray-500 text-xs sm:text-sm font-medium">Kalan Ay</div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-5 text-center">
                        <div className="text-2xl sm:text-3xl font-black text-purple-600 mb-1">{Math.floor(days / 7)}</div>
                        <div className="text-gray-500 text-xs sm:text-sm font-medium">Kalan Hafta</div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-5 text-center">
                        <div className="text-2xl sm:text-3xl font-black text-emerald-600 mb-1">{days}</div>
                        <div className="text-gray-500 text-xs sm:text-sm font-medium">Kalan Gün</div>
                    </div>
                </div>

                {/* Bu Dönemde Ne Yapılmalı? */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 sm:p-8 mb-10">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                        Kalan Zamanı Verimli Yönetmek İçin 4 Kural
                    </h2>
                    <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                        <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                            <strong className="text-blue-950 block mb-1">1. Gün Saymayı Bırakıp Görev Saymaya Başlayın:</strong>
                            Takvimdeki güne odaklanıp panik yapmak yerine masadaki somut hedefe odaklanın. &quot;Bugün 15 problem + 1 Fen branş denemesi&quot; gibi ölçülebilir görevler stresinizi azaltır.
                        </div>
                        <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100">
                            <strong className="text-purple-950 block mb-1">2. 10:15 Rutinini Biyolojik Saatinize İşleyin:</strong>
                            Hafta sonu denemelerinizi mutlaka gerçek sınav saati olan 10:15&apos;te başlatın. Beyninizin odaklanma eğrisi bu saat aralığına önceden şartlanmalıdır.
                        </div>
                        <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                            <strong className="text-emerald-950 block mb-1">3. Deneme Analizini Asla Atlamayın:</strong>
                            Denemeyi çözdükten sonra yanlış soruların çözümünü öğrenmeden masadan kalkmayın. Gerçek sınavda karşınıza çıkacak olanlar, daha önce yanlış yaptığınız soru kalıplarıdır.
                        </div>
                        <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-100">
                            <strong className="text-amber-950 block mb-1">4. Net Artışı İçin AYT Omurgasını Kurun:</strong>
                            TYT kondisyonunuzu korurken kalan enerjinizin en az %65&apos;ini doğrudan puan getiren AYT Matematik ve Fen/Edebiyat konularına yönlendirin.
                        </div>
                    </div>
                </div>

                {/* Hızlı Linkler */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                    <Link href="/" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group">
                        <span className="text-2xl mb-2 block">🧮</span>
                        <h3 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 mb-1">Net Hesaplama</h3>
                        <p className="text-gray-500 text-xs">Güncel deneme netlerini gir ve sıralamanı gör</p>
                    </Link>
                    <Link href="/blog/yks-son-3-ay-calisma-plani" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-purple-400 hover:shadow-md transition-all group">
                        <span className="text-2xl mb-2 block">📅</span>
                        <h3 className="font-bold text-gray-900 text-sm group-hover:text-purple-600 mb-1">Son 3 Ay Planı</h3>
                        <p className="text-gray-500 text-xs">Sınava yaklaşırken netleri zirveye çıkarma stratejisi</p>
                    </Link>
                    <Link href="/blog/tyt-turkce-paragraf-teknikleri" className="bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all group">
                        <span className="text-2xl mb-2 block">⚡</span>
                        <h3 className="font-bold text-gray-900 text-sm group-hover:text-emerald-600 mb-1">Paragraf Taktikleri</h3>
                        <p className="text-gray-500 text-xs">24 paragraf sorusunda süreyi yarıya indirme</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}
