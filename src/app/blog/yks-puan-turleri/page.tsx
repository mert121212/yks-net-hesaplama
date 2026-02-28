import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'YKS Puan Türleri: SAY, EA, SÖZ, DİL Nedir? 2026 | YKS Net Hesaplama',
    description: 'YKS\'de 4 farklı puan türü var. SAY, EA, SÖZ ve DİL puan türlerini detaylı inceleyin ve size uygun olanı seçin.',
    keywords: 'yks puan türleri, say puanı, ea puanı, söz puanı, dil puanı, puan türü seçimi',
}

export default function YKSPuanTurleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Puan Türleri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600">25 Şubat 2026</time>
                            <span className="text-gray-600">• 5 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS Puan Türleri: SAY, EA, SÖZ, DİL Nedir?
                        </h1>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            YKS'de başarılı olmanın ilk adımı doğru puan türünü seçmektir. Her puan türü farklı derslere
                            ağırlık verir ve farklı bölümlere yerleşmenizi sağlar.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-12">
                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border-2 border-green-200">
                                <div className="text-4xl mb-4">🔬</div>
                                <h2 className="text-2xl font-bold text-green-900 mb-4">SAY (Sayısal)</h2>
                                <p className="text-gray-700 mb-4">
                                    Matematik ve fen bilimlerine ağırlık veren puan türü.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <p className="font-semibold text-green-800">Öne Çıkan Bölümler:</p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Tıp, Diş Hekimliği</li>
                                        <li>Mühendislik (tüm dallar)</li>
                                        <li>Mimarlık, Şehir Planlama</li>
                                        <li>Eczacılık, Veterinerlik</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200">
                                <div className="text-4xl mb-4">⚖️</div>
                                <h2 className="text-2xl font-bold text-blue-900 mb-4">EA (Eşit Ağırlık)</h2>
                                <p className="text-gray-700 mb-4">
                                    Sayısal ve sözel derslere dengeli ağırlık veren puan türü.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <p className="font-semibold text-blue-800">Öne Çıkan Bölümler:</p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Hukuk</li>
                                        <li>İktisat, İşletme</li>
                                        <li>Siyaset Bilimi</li>
                                        <li>Uluslararası İlişkiler</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-2 border-purple-200">
                                <div className="text-4xl mb-4">📚</div>
                                <h2 className="text-2xl font-bold text-purple-900 mb-4">SÖZ (Sözel)</h2>
                                <p className="text-gray-700 mb-4">
                                    Edebiyat ve sosyal bilimlere ağırlık veren puan türü.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <p className="font-semibold text-purple-800">Öne Çıkan Bölümler:</p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>Türk Dili ve Edebiyatı</li>
                                        <li>Tarih, Arkeoloji</li>
                                        <li>Psikoloji, Sosyoloji</li>
                                        <li>Gazetecilik, İletişim</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border-2 border-orange-200">
                                <div className="text-4xl mb-4">🌍</div>
                                <h2 className="text-2xl font-bold text-orange-900 mb-4">DİL (Yabancı Dil)</h2>
                                <p className="text-gray-700 mb-4">
                                    Yabancı dil yeteneğine odaklanan puan türü.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <p className="font-semibold text-orange-800">Öne Çıkan Bölümler:</p>
                                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                                        <li>İngilizce Öğretmenliği</li>
                                        <li>Mütercim-Tercümanlık</li>
                                        <li>Amerikan Kültürü</li>
                                        <li>Uluslararası İlişkiler (DİL)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Puanınızı Hesaplayın!</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                Tüm puan türlerini anında hesaplayın
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Hangi Puan Türünü Seçmeliyim?</h2>

                        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
                            <h3 className="font-bold text-yellow-900 mb-3">💡 Karar Verme Kriterleri</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>✓ Hangi derslerde daha başarılısınız?</li>
                                <li>✓ Hangi bölümleri hedefliyorsunuz?</li>
                                <li>✓ Deneme sınavlarında hangi puan türünde daha yüksek puan alıyorsunuz?</li>
                                <li>✓ Gelecekte hangi mesleği yapmak istiyorsunuz?</li>
                            </ul>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/ayt-puan-hesaplama" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">AYT Puan Hesaplama →</p>
                                </Link>
                                <Link href="/blog/universite-tercih-stratejileri" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">Tercih Stratejileri →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
