import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS 2027 Başvuru Tarihleri ve AİS Başvuru Adımları',
    description: '2027 YKS (TYT-AYT) başvuru takvimi, ÖSYM AİS üzerinden e-Devlet ile kayıt aşamaları, geç başvuru koşulları ve ödeme süreci.',
    keywords: 'yks 2027 başvuru tarihleri, yks başvuru nasıl yapılır, yks ücreti 2027, geç başvuru yks, yks ne zaman',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri' },
    openGraph: {
        title: 'YKS 2027 Başvuru Tarihleri ve AİS Başvuru Adımları',
        description: 'YKS başvuru süreci, oturum seçimi ve AİS kayıt kılavuzu.',
        type: 'article',
        publishedTime: '2026-02-14',
        modifiedTime: '2026-02-17',
        url: 'https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS 2027 Başvuru Rehberi'
            }
        ],
    },
}

export default function YKSBasvuruTarihleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS 2027 Başvuru Tarihleri ve AİS Başvuru Adımları" 
                    description="2027 YKS (TYT-AYT) başvuru takvimi, ÖSYM AİS üzerinden e-Devlet ile kayıt aşamaları, geç başvuru koşulları ve ödeme süreci."
                    datePublished="2026-02-14"
                    dateModified="2026-02-17"
                    url="https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri"
                    keywords={['yks 2027 başvuru tarihleri', 'yks başvuru nasıl yapılır', 'yks ücreti 2027', 'geç başvuru yks', 'yks ne zaman']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS 2027 Başvuru</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600" dateTime="2026-02-14">14 Şubat 2026</time>
                            <span className="text-gray-600">• 6 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS 2027 Başvuru Tarihleri ve AİS Kayıt Adımları
                        </h1>
                        <p className="text-xl text-gray-600">
                            ÖSYM takvimine göre YKS başvuru aşamaları, AİS sistemi üzerinden oturum seçimi ve ödeme onayı hakkında bilinmesi gerekenler.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Yükseköğretim Kurumları Sınavı (YKS) başvuruları her yıl ÖSYM tarafından yayımlanan sınav takvimine göre Aday İşlemleri Sistemi (AİS) üzerinden alınır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            ÖSYM Başvuru Sürecinin Aşamaları
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="p-5 bg-blue-50 border border-blue-200 rounded-xl">
                                <h3 className="font-bold text-blue-950 text-lg mb-1">1. Standart Başvuru Dönemi (Şubat - Mart)</h3>
                                <p className="text-sm text-blue-900 leading-relaxed">
                                    Başvuruların açıldığı ana dönemdir. Adaylar ais.osym.gov.tr üzerinden oturumlarını belirler ve sınav ücretini öderler.
                                </p>
                            </div>

                            <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl">
                                <h3 className="font-bold text-amber-950 text-lg mb-1">2. Geç Başvuru Günleri (Mart)</h3>
                                <p className="text-sm text-amber-900 leading-relaxed">
                                    Normal başvuru süresini kaçıran adaylar için tanınan 2-3 günlük ek süredir. Geç başvuru günlerinde sınav ücreti artırımlı olarak ödenir.
                                </p>
                            </div>

                            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-xl">
                                <h3 className="font-bold text-emerald-950 text-lg mb-1">3. Sınav Oturumları (Haziran)</h3>
                                <p className="text-sm text-emerald-900 leading-relaxed">
                                    Cumartesi sabahı TYT, Pazar sabahı AYT ve Pazar öğleden sonra YDT oturumları uygulanır. Sınav binalarına giriş saat 10:00&apos;da sona erer.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            e-Devlet ile AİS Başvuru Adımları
                        </h2>
                        <ol className="list-decimal pl-6 space-y-2 text-sm">
                            <li><strong>Giriş:</strong> ais.osym.gov.tr adresinden e-Devlet şifresi veya ÖSYM şifresi ile sisteme giriş yapın.</li>
                            <li><strong>Bilgi Kontrolü:</strong> Kimlik, iletişim ve eğitim bilgilerinizin doğruluğunu teyit edin.</li>
                            <li><strong>Oturum Seçimi:</strong> TYT oturumu zorunludur. Lisans programı hedefleyenler AYT oturumunu, dil programı hedefleyenler YDT oturumunu işaretlemelidir.</li>
                            <li><strong>Sınav Merkezi Tercihi:</strong> İkamet ettiğiniz yere en uygun sınav merkezlerini birinci ve ikinci tercih olarak kaydedin.</li>
                            <li><strong>Ödeme:</strong> Form kaydedildikten sonra ÖSYM Ödemeler sayfası veya anlaşmalı bankalar üzerinden sınav ücretini yatırın.</li>
                        </ol>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg text-amber-950 text-sm my-6">
                            <strong>Önemli Not:</strong> Başvuru formunu doldurmak tek başına yeterli değildir. Ücret ödenmediği sürece başvuru tamamlanmış sayılmaz. Ödeme sonrası sistemde durumun &quot;Başvuru Yapıldı ve Onaylandı&quot; olarak göründüğünü kontrol ediniz.
                        </div>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Puanınızı Simüle Edin</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Hedeflediğiniz bölümlere ulaşmak için gereken tahmini netleri hesaplama motorumuzda görün.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Net ve Puan Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
