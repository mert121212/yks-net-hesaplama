import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: '2027 AYT Puan Hesaplama: SAY, EA, SÖZ ve DİL Rehberi | YKS Net Hesaplama',
    description: 'AYT sınavında SAY, EA, SÖZ ve DİL puanları nasıl hesaplanır? 0,5 net şartı, katsayı mantığı, başarı sırası barajları ve puan türü seçimi rehberi.',
    keywords: 'ayt puan hesaplama, say puanı, ea puanı, söz puanı, dil puanı, ayt net hesaplama, başarı sırası barajı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/ayt-puan-hesaplama' },
    openGraph: {
        title: '2027 AYT Puan Hesaplama: SAY, EA, SÖZ ve DİL Rehberi',
        description: 'AYT sınavında SAY, EA, SÖZ ve DİL puanları nasıl hesaplanır? Katsayı mantığı ve başarı sırası barajları.',
        type: 'article',
        publishedTime: '2026-02-26',
        url: 'https://yksnethesapla.com/blog/ayt-puan-hesaplama',
    },
}

export default function AYTPuanHesaplama() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">AYT Puan Hesaplama</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AYT</span>
                            <time className="text-gray-600">26 Şubat 2026</time>
                            <span className="text-gray-600">• 11 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            AYT Puanı Nasıl Hesaplanır? SAY, EA, SÖZ ve DİL Katsayıları
                        </h1>
                        <p className="text-xl text-gray-600">
                            Yerleştirme puanının %60&apos;ını belirleyen AYT&apos;de hangi ders kaç puan getiriyor? 0.5 net kuralının ince detayları ve başarı sırası barajları.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS&apos;ye hazırlanan birçok öğrencinin aklındaki en büyük soru şudur: <strong>&quot;TYT&apos;m kötü geçti, AYT ile toparlayabilir miyim?&quot;</strong> Cevap çok net: Evet, fazlasıyla toparlarsın. Çünkü üniversiteye yerleştirme puanının <strong>yaklaşık %60&apos;ı doğrudan AYT netlerinden</strong> gelir. TYT&apos;deki 10 netlik bir kaybı, AYT&apos;de yapacağın 4-5 net ile tamamen telafi edebilirsin.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            AYT Neti ve Puanı Nasıl Hesaplanır?
                        </h2>
                        <p>
                            AYT&apos;de de TYT&apos;de olduğu gibi <strong>4 yanlış 1 doğruyu götürür</strong>. Formül gayet basittir:
                        </p>
                        <div className="bg-slate-900 text-white p-5 rounded-xl text-center my-6">
                            <p className="text-xl font-bold font-mono">Net = Doğru Sayısı − (Yanlış Sayısı ÷ 4)</p>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg my-6">
                            <h3 className="font-bold text-amber-900 mb-2">⚠️ Hayati Kural: 0.5 Net Şartı</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                Hangi puan türünün hesaplanmasını istiyorsan, o puan türünü oluşturan <strong>en az iki testten birinde en az 0.5 net</strong> çıkarmak zorundasın. Örneğin SAY puanı için Matematik veya Fen testlerinden en az birinde yarım netin olmalı. Aksi takdirde SAY puanın hesaplanmaz.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            4 Farklı Puan Türü ve Ders Dağılımları
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 my-6">
                            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-green-900 mb-3">🔬 SAY (Sayısal)</h3>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                    <li>• Matematik: 40 soru</li>
                                    <li>• Fizik: 14 soru</li>
                                    <li>• Kimya: 13 soru</li>
                                    <li>• Biyoloji: 13 soru</li>
                                </ul>
                                <p className="text-xs text-gray-500 mt-3">Hedef Bölümler: Tıp, Mühendislikler, Diş Hekimliği, Eczacılık, Yazılım, Mimarlık</p>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-blue-900 mb-3">⚖️ EA (Eşit Ağırlık)</h3>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                    <li>• Matematik: 40 soru</li>
                                    <li>• Türk Dili ve Edebiyatı: 24 soru</li>
                                    <li>• Tarih-1: 10 soru</li>
                                    <li>• Coğrafya-1: 6 soru</li>
                                </ul>
                                <p className="text-xs text-gray-500 mt-3">Hedef Bölümler: Hukuk, İktisat, İşletme, PDR, Psikoloji, Yönetim Bilişim</p>
                            </div>

                            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-purple-900 mb-3">📚 SÖZ (Sözel)</h3>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                    <li>• Edebiyat - Sosyal-1: 40 soru (24 Edb + 10 Tar-1 + 6 Coğ-1)</li>
                                    <li>• Sosyal Bilimler-2: 40 soru (11 Tar-2 + 11 Coğ-2 + 12 Fel + 6 Din)</li>
                                </ul>
                                <p className="text-xs text-gray-500 mt-3">Hedef Bölümler: İletişim, Gazetecilik, Tarih, Coğrafya, Türkçe Öğretmenliği</p>
                            </div>

                            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-orange-900 mb-3">🌍 DİL (Yabancı Dil)</h3>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                    <li>• YDT: 80 soru (İngilizce, Almanca, Fransızca, Rusça veya Arapça)</li>
                                </ul>
                                <p className="text-xs text-gray-500 mt-3">Hedef Bölümler: İngilizce Öğretmenliği, Mütercim-Tercümanlık, Turizm Rehberliği</p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Hangi Bölüm Hangi Sıralama Barajını İstiyor?
                        </h2>
                        <p>
                            Puanın ne kadar yüksek olursa olsun, eğer ilgili bölümün <strong>başarı sırası barajının</strong> gerisinde kaldıysan ÖSYM tercih listende o bölümü yazmana izin vermez:
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-red-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Bölüm Adı</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Puan Türü</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Zorunlu Başarı Sırası Barajı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Tıp Fakültesi</td><td className="px-5 py-3 text-center">SAY</td><td className="px-5 py-3 text-center font-bold text-red-700">İlk 50.000</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Diş Hekimliği</td><td className="px-5 py-3 text-center">SAY</td><td className="px-5 py-3 text-center font-bold text-red-700">İlk 80.000</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Eczacılık</td><td className="px-5 py-3 text-center">SAY</td><td className="px-5 py-3 text-center font-bold text-red-700">İlk 100.000</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Hukuk Fakültesi</td><td className="px-5 py-3 text-center">EA</td><td className="px-5 py-3 text-center font-bold text-red-700">İlk 125.000</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Mimarlık</td><td className="px-5 py-3 text-center">SAY</td><td className="px-5 py-3 text-center font-bold text-orange-700">İlk 250.000</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Mühendislik Programları (Orman, Ziraat vb. hariç)</td><td className="px-5 py-3 text-center">SAY</td><td className="px-5 py-3 text-center font-bold text-orange-700">İlk 300.000</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Öğretmenlik Programları (PDR dahil)</td><td className="px-5 py-3 text-center">SAY/EA/SÖZ/DİL</td><td className="px-5 py-3 text-center font-bold text-orange-700">İlk 300.000</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">AYT Puanını ve Sıralamanı Hemen Hesapla</h3>
                            <p className="text-blue-100 mb-6">
                                TYT ve AYT netlerini girerek 2027 tahmini SAY, EA, SÖZ ve DİL puanlarını tek tıkla öğren.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Ücretsiz Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Rehberler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-puan-turleri" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">YKS Puan Türleri Rehberi →</p>
                                    <p className="text-xs text-gray-600 mt-1">Hangi bölüm hangi puan türünden alıyor?</p>
                                </Link>
                                <Link href="/blog/ayt-matematik-konulari" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                    <p className="font-semibold text-purple-900">AYT Matematik Yol Haritası →</p>
                                    <p className="text-xs text-gray-600 mt-1">LTİ ve Trigonometri çalışma planı.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
