import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS Edebiyat Konuları ve Soru Dağılımı 2027 | Çalışma Taktikleri',
    description: '2027 AYT Edebiyat konuları, soru dağılımı, Divan ve Cumhuriyet edebiyatı ezberleme taktikleri ve 24 soruda 20+ net yapma rehberi.',
    keywords: 'yks edebiyat konuları, ayt edebiyat soru dağılımı, edebiyat nasıl çalışılır, divan edebiyatı taktikleri, cumhuriyet edebiyatı yazarlar',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari' },
    openGraph: {
        title: 'YKS Edebiyat Konuları ve Çalışma Taktikleri',
        description: 'AYT Edebiyat konuları, dönemler ve etkili hafıza teknikleri.',
        type: 'article',
        publishedTime: '2026-02-17',
        url: 'https://yksnethesapla.com/blog/yks-edebiyat-konulari',
    },
}

export default function YKSEdebiyatKonulari() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Edebiyat Konuları</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Edebiyat</span>
                            <time className="text-gray-600">17 Şubat 2026</time>
                            <span className="text-gray-600">• 12 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            AYT Edebiyat Konuları ve Soru Dağılımı: 24&apos;te 20+ Netin Formülü
                        </h1>
                        <p className="text-xl text-gray-600">
                            Yüzlerce yazar, binlerce eser... Gözün korkmasın. ÖSYM&apos;nin her yıl sorduğu anahtar yazarları ve hafıza teknikleriyle edebiyatı cebe koymanın yolları.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Eşit Ağırlık (EA) ve Sözel (SÖZ) öğrencilerinin en çok vakit harcadığı ama doğru yöntem uygulanmadığında en çabuk unutulan ders <strong>AYT Edebiyat</strong>&apos;tır. 24 soruluk bu testte öğrencilerin yaptığı en büyük hata, kalın konu anlatım kitaplarını roman gibi baştan sona okuyup her yazarı ezberlemeye çalışmaktır.
                        </p>

                        <p>
                            ÖSYM edebiyat testinde her şeyi sormaz; <strong>dönemlerin karakteristik özelliklerini ve mihenk taşı yazarların başyapıtlarını</strong> sorar. Stratejik çalışan bir öğrenci, 2-3 aylık disiplinli bir programla 24 soruda 20 netin üstüne çok rahat çıkabilir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            AYT Edebiyat Soru Dağılımı Tablosu
                        </h2>
                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-purple-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Dönem / Konu</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Tahmini Soru</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Önem Derecesi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Anlam Bilgisi (Paragraf & Cümle)</td><td className="px-5 py-3 text-center font-bold">4 - 6</td><td className="px-5 py-3 text-blue-700">Temel Netler (Kaçırma)</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Şiir Bilgisi (Nazım Biçimi, Kafiye, Redif, Söz Sanatları)</td><td className="px-5 py-3 text-center font-bold">3 - 4</td><td className="px-5 py-3 text-emerald-700 font-bold">Teknik Bilgi (Banko)</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">İslamiyet Öncesi & Halk Edebiyatı (Aşık, Tekke, Anonim)</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3 text-gray-700">Orta</td></tr>
                                    <tr className="border-b bg-red-50"><td className="px-5 py-3 font-medium font-bold text-red-900">DİVAN EDEBİYATI (Nazım Şekilleri, Şairler, Nesir)</td><td className="px-5 py-3 text-center font-bold text-red-700 text-lg">4 - 5</td><td className="px-5 py-3 text-red-700 font-bold">🔴 Sınavın Kalbi</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Tanzimat Edebiyatı (1. ve 2. Dönem)</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3 text-purple-700">Yüksek</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">Servet-i Fünun & Fecr-i Ati</td><td className="px-5 py-3 text-center font-bold">1 - 2</td><td className="px-5 py-3 text-gray-600">Orta</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">Milli Edebiyat Dönemi</td><td className="px-5 py-3 text-center font-bold">2 - 3</td><td className="px-5 py-3 text-purple-700">Yüksek</td></tr>
                                    <tr className="border-b bg-blue-50"><td className="px-5 py-3 font-medium font-bold text-blue-900">CUMHURİYET DÖNEMİ TÜRK EDEBİYATI (Şiir, Roman, Tiyatro)</td><td className="px-5 py-3 text-center font-bold text-blue-800 text-lg">4 - 6</td><td className="px-5 py-3 text-blue-800 font-bold">En Geniş Bölüm</td></tr>
                                    <tr><td className="px-5 py-3 font-medium">Edebi Akımlar</td><td className="px-5 py-3 text-center font-bold">1</td><td className="px-5 py-3 text-green-700 font-bold">Kolay 1 Net</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Unutmayı Engelleyen 3 Edebiyat Taktiği
                        </h2>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">1. Yazar - Eser Kartları (Flashcards)</h3>
                        <p>
                            Küçük not kartlarının ön yüzüne yazarın adını ve dönemini, arka yüzüne ise en önemli 3-4 eserini ve ayırt edici lakabını (örneğin: &quot;Akşam Şairi = Ahmet Haşim&quot;, &quot;İstanbul Hikayecisi = Sait Faik&quot;) yaz. Günde 15 dakika otobüste, yatakta bu kartları çevir.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">2. Divan Edebiyatını Kodlayarak Öğren</h3>
                        <p>
                            Fuzuli, Baki, Nedim, Şeyh Galip, Nabi... Bu 5 büyük şair her sene dönüşümlü olarak sorulur. Fuzuli&apos;nin ızdırap ve ilahi aşk şairi olduğunu, Baki&apos;nin rindane gazelleri ve Sultanü&apos;ş Şuara unvanını, Nedim&apos;in Lale Devri ve şarkı türünü bildiğinde Divan sorularının %80&apos;ini çözmüş olursun.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">3. Haftalık Karma Edebiyat Denemeleri</h3>
                        <p>
                            Konular bitmese bile haftada 2 adet 24 soruluk AYT Edebiyat branş denemesi çöz. Edebiyat sorularında soru kalıpları birbirine çok benzer; bol soru çözdükçe şıkların seni doğrudan doğru cevaba götürdüğünü göreceksin.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Edebiyat Netlerini EA ve SÖZ Puanına Çevir</h3>
                            <p className="text-blue-100 mb-6">
                                Güncel ÖSYM katsayılarıyla hedeflediğin Hukuk ve PDR sıralamalarını hemen simüle et.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Hemen Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
