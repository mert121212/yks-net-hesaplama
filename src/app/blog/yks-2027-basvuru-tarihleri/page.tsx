import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS 2027 Başvuru Tarihleri, Takvimi ve Başvuru Adımları',
    description: 'YKS 2027 başvuru tarihleri, sınav tarihleri, sonuç açıklama ve tercih takvimi. AİS üzerinden nasıl başvurulur? Sınav günü hazırlık listesi.',
    keywords: 'yks 2027 tarihleri, yks başvuru tarihleri, yks sınav tarihi, yks sonuç tarihi, ais başvuru',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri' },
    openGraph: {
        title: 'YKS 2027 Başvuru Tarihleri, Takvimi ve Başvuru Adımları',
        description: 'YKS 2027 başvuru tarihleri ve sınav takvimi. AİS üzerinden nasıl başvurulur?',
        type: 'article',
        publishedTime: '2026-02-23',
        url: 'https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri',
    },
}

export default function YKS2027BasvuruTarihleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS 2027 Başvuru Tarihleri</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Takvim</span>
                            <time className="text-gray-600">23 Şubat 2026</time>
                            <span className="text-gray-600">• 10 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS 2027 Başvuru Tarihleri ve Sınav Takvimi: Adım Adım Rehber
                        </h1>
                        <p className="text-xl text-gray-700">
                            Aylarca çalışıp son gün başvuruyu kaçırmak istemiyorsan bu tarihleri telefonunun takvimine şimdiden kaydet. AİS başvuru adımları ve sınav günü tüyoları.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her yıl 3 milyondan fazla öğrenci YKS&apos;ye giriyor ama her sene binlerce öğrenci de saçma sapan bürokratik hatalar yüzünden sınav kapısından geri dönüyor: Ya başvuru ücretini bankaya yatırmayı unutuyorlar, ya kimlik kartlarının süresi dolmuş oluyor, ya da sınav giriş belgesini renkli/siyah-beyaz çıkarmayı son geceye bırakıyorlar. Bu rehberde baştan sona tüm takvimi ve yapman gerekenleri özetledik.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            2027 YKS Tahmini Sınav ve Başvuru Takvimi
                        </h2>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Aşama</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Tahmini Tarih Aralığı</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Dikkat Edilmesi Gereken</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-green-50">
                                        <td className="px-5 py-3 font-medium">Ana Başvuru Dönemi</td>
                                        <td className="px-5 py-3 font-bold text-slate-900">Şubat 2027 (1. - 4. Hafta)</td>
                                        <td className="px-5 py-3 text-sm text-green-800">ÖSYM AİS üzerinden online yapılır. Ücret normal tarifedir.</td>
                                    </tr>
                                    <tr className="border-b bg-amber-50">
                                        <td className="px-5 py-3 font-medium">Geç Başvuru Günü</td>
                                        <td className="px-5 py-3 font-bold text-amber-900">Mart 2027 (İlk Hafta)</td>
                                        <td className="px-5 py-3 text-sm text-amber-800">Sadece 1-2 gündür. Başvuru ücreti %50 zamlı ödenir.</td>
                                    </tr>
                                    <tr className="border-b bg-blue-50">
                                        <td className="px-5 py-3 font-medium">Sınav Giriş Belgelerinin Erişime Açılması</td>
                                        <td className="px-5 py-3 font-bold text-blue-900">Haziran 2027 (İlk Hafta)</td>
                                        <td className="px-5 py-3 text-sm text-blue-800">Sınavdan yaklaşık 10 gün önce AİS&apos;te yayınlanır.</td>
                                    </tr>
                                    <tr className="border-b bg-purple-50">
                                        <td className="px-5 py-3 font-medium">TYT Oturumu (1. Oturum)</td>
                                        <td className="px-5 py-3 font-bold text-purple-900">19 Haziran 2027 (Cumartesi - 10:15)</td>
                                        <td className="px-5 py-3 text-sm text-purple-800">165 Dakika. Saat 10:00&apos;dan sonra binalara giriş yasaktır!</td>
                                    </tr>
                                    <tr className="border-b bg-purple-50">
                                        <td className="px-5 py-3 font-medium">AYT Oturumu (2. Oturum)</td>
                                        <td className="px-5 py-3 font-bold text-purple-900">20 Haziran 2027 (Pazar - 10:15)</td>
                                        <td className="px-5 py-3 text-sm text-purple-800">180 Dakika. SAY, EA ve SÖZ alan sınavı.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-5 py-3 font-medium">YDT Oturumu (3. Oturum)</td>
                                        <td className="px-5 py-3 font-bold text-slate-900">20 Haziran 2027 (Pazar - 15:45)</td>
                                        <td className="px-5 py-3 text-sm text-slate-600">120 Dakika. Yabancı Dil sınavı.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="px-5 py-3 font-medium">Sonuçların Açıklanması</td>
                                        <td className="px-5 py-3 font-bold text-slate-900">Temmuz 2027 (3. Hafta)</td>
                                        <td className="px-5 py-3 text-sm text-slate-600">ÖSYM sonuç sayfası üzerinden erişilir.</td>
                                    </tr>
                                    <tr>
                                        <td className="px-5 py-3 font-medium">Tercih Dönemi</td>
                                        <td className="px-5 py-3 font-bold text-slate-900">Ağustos 2027 (1. ve 2. Hafta)</td>
                                        <td className="px-5 py-3 text-sm text-slate-600">24 tercih hakkının sisteme girilmesi.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            ÖSYM AİS Üzerinden Başvuru Nasıl Yapılır? (5 Adım)
                        </h2>
                        <ol className="list-decimal pl-6 space-y-3">
                            <li><strong>AİS Sistemine Giriş:</strong> ais.osym.gov.tr adresine girip e-Devlet şifreniz veya ÖSYM şifrenizle oturum açın.</li>
                            <li><strong>Fotoğraf ve Kimlik Kontrolü:</strong> T.C. Kimlik Kartınızdaki fotoğrafınızın güncel olduğundan emin olun. Fotoğrafınız çok eskiyse bir ÖSYM başvuru merkezine (liselere) gitmeniz gerekebilir.</li>
                            <li><strong>Oturum Seçimi:</strong> TYT zorunludur. Üniversite lisans programları (4 yıllık) hedefliyorsanız mutlaka AYT oturumunu da işaretleyin. Dil okuyacaksanız YDT&apos;yi de seçin.</li>
                            <li><strong>Onay ve Kaydet:</strong> Bilgileri kontrol edip &quot;Başvuru Yap&quot; butonuna basın.</li>
                            <li><strong>Ödeme (En Kritik Aşama):</strong> Başvuruyu kaydettikten sonra ÖSYM Ödemeler sayfasından (odeme.osym.gov.tr) kredi kartınızla veya anlaşmalı bankaların ATM/mobil şubelerinden ücreti yatırın. Ücret yatmazsa başvuru geçersiz sayılır!</li>
                        </ol>

                        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg my-6">
                            <h3 className="font-bold text-red-900 mb-2">⚠️ Sınav Sabahı 10:00 Kuralı!</h3>
                            <p className="text-gray-700 text-sm">
                                ÖSYM sınavlarında saat <strong>10:00&apos;dan sonra okul kapıları kilitlenir</strong>. 10:01&apos;de gelseniz bile içeri alınmazsınız. Sınav yerine en geç saat 09:15&apos;te varacak şekilde evden çıkın.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Sınava Kalan Süreyi ve Netlerini Takip Et</h3>
                            <p className="text-blue-100 mb-6">
                                Geri sayım sayacımızla kalan günleri takip et, deneme netlerini hemen puanına çevir.
                            </p>
                            <Link href="/geri-sayim" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Geri Sayımı Gör →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
