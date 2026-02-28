import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Üniversite Tercih Stratejileri: Doğru Tercih Nasıl Yapılır? 2026',
    description: 'YKS sonrası üniversite tercihi yaparken nelere dikkat etmelisiniz? Tercih stratejileri, ipuçları ve öneriler.',
    keywords: 'üniversite tercih, tercih stratejisi, yks tercih, doğru tercih, üniversite seçimi',
}

export default function UniversiteTercihStratejileri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Tercih Stratejileri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Tercih</span>
                            <time className="text-gray-600">21 Şubat 2026</time>
                            <span className="text-gray-600">• 9 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Üniversite Tercih Stratejileri
                        </h1>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            YKS'de başarılı olmak yeterli değil, doğru tercihi yapmak da çok önemli.
                            İşte size yardımcı olacak stratejiler.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tercih Yapmadan Önce</h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-3">1. Kendinizi Tanıyın</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✓ Hangi dersleri seviyorsunuz?</li>
                                    <li>✓ Hangi konularda yeteneklisiniz?</li>
                                    <li>✓ Gelecekte ne yapmak istiyorsunuz?</li>
                                    <li>✓ Hangi çalışma ortamını tercih edersiniz?</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                                <h3 className="font-bold text-green-900 mb-3">2. Bölümleri Araştırın</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✓ Bölümde neler öğrenilir?</li>
                                    <li>✓ İş imkanları nelerdir?</li>
                                    <li>✓ Mezuniyet sonrası maaş beklentisi?</li>
                                    <li>✓ Hangi sektörlerde çalışılır?</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                                <h3 className="font-bold text-purple-900 mb-3">3. Üniversiteleri Karşılaştırın</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✓ Üniversitenin akademik başarısı</li>
                                    <li>✓ Kampüs imkanları</li>
                                    <li>✓ Şehir yaşam kalitesi</li>
                                    <li>✓ Barınma olanakları</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tercih Stratejileri</h2>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">🎯 Altın Kural</h3>
                            <p className="text-xl text-blue-100">
                                "Önce bölüm, sonra üniversite" yaklaşımını benimseyin.
                                Sevmediğiniz bir bölümde iyi bir üniversitede okumaktansa,
                                sevdiğiniz bölümde orta bir üniversitede okumak daha iyidir.
                            </p>
                        </div>

                        <div className="space-y-6 my-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-3">📊 Tercih Listesi Nasıl Olmalı?</h3>
                                <div className="space-y-3 text-gray-700">
                                    <p><strong>İlk 5-10 Tercih:</strong> Hayalinizdeki bölümler (biraz riskli)</p>
                                    <p><strong>Orta 10-15 Tercih:</strong> Gerçekçi tercihler (puanınıza uygun)</p>
                                    <p><strong>Son 5-10 Tercih:</strong> Güvenli tercihler (kesin tutacak)</p>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
                                <h3 className="font-bold text-yellow-900 mb-3">⚠️ Yapılmaması Gerekenler</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>❌ Sadece üniversite adına bakarak tercih yapmak</li>
                                    <li>❌ Ailenin baskısıyla istemediğiniz bölümü seçmek</li>
                                    <li>❌ İş imkanlarını araştırmadan tercih yapmak</li>
                                    <li>❌ Taban puanına çok yakın tercih yapmak</li>
                                    <li>❌ Çok az tercih yapmak (en az 20-24 tercih yapın)</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Bölüm Seçim Kriterleri</h2>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-3">💼 İş İmkanları</h3>
                                <p className="text-gray-700 text-sm">
                                    Mezuniyet sonrası iş bulma oranı yüksek mi?
                                    Hangi sektörlerde çalışma imkanı var?
                                </p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg">
                                <h3 className="font-bold text-green-900 mb-3">💰 Maaş Beklentisi</h3>
                                <p className="text-gray-700 text-sm">
                                    Ortalama başlangıç maaşı ne kadar?
                                    Kariyer ilerledikçe maaş artışı nasıl?
                                </p>
                            </div>

                            <div className="bg-purple-50 p-6 rounded-lg">
                                <h3 className="font-bold text-purple-900 mb-3">📚 Eğitim Kalitesi</h3>
                                <p className="text-gray-700 text-sm">
                                    Üniversitenin akademik kadrosu güçlü mü?
                                    Laboratuvar ve teknik donanım yeterli mi?
                                </p>
                            </div>

                            <div className="bg-orange-50 p-6 rounded-lg">
                                <h3 className="font-bold text-orange-900 mb-3">🌍 Yurtdışı İmkanları</h3>
                                <p className="text-gray-700 text-sm">
                                    Erasmus ve değişim programları var mı?
                                    Yurtdışında çalışma imkanı nasıl?
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Puanınızı Hesaplayın!</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                Hangi bölümlere yerleşebileceğinizi öğrenin
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sık Sorulan Sorular</h2>

                        <div className="space-y-6 my-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">❓ Kaç tercih yapmalıyım?</h3>
                                <p className="text-gray-700">
                                    En az 20-24 tercih yapmanızı öneririz. Daha fazla tercih, daha fazla şans demektir.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">❓ Tercih sırasını değiştirebilir miyim?</h3>
                                <p className="text-gray-700">
                                    Evet, tercih süresi bitene kadar istediğiniz kadar değişiklik yapabilirsiniz.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg">
                                <h3 className="font-bold text-gray-900 mb-2">❓ Bölüm mü üniversite mi önemli?</h3>
                                <p className="text-gray-700">
                                    Genellikle bölüm daha önemlidir. Sevmediğiniz bir bölümde başarılı olamazsınız.
                                </p>
                            </div>
                        </div>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-puan-turleri" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">YKS Puan Türleri →</p>
                                </Link>
                                <Link href="/universiteler" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">Üniversiteler →</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
