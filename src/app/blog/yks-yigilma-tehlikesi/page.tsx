import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS\'de Yığılma Tehlikesi (2027): Standart Sapma ve Sıralama Analizi',
    description: '2027 YKS yığılma riskleri, standart sapmanın sıralamalara etkisi ve 3 milyon aday arasından sıyrılmak için uygulamanız gereken katsayı stratejileri.',
    keywords: 'yks yığılma nedir, 2027 yks zor mu, ayt netlerinin önemi, yks sıralama hesaplama, standart sapma yks, yks yığılma analizi',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-yigilma-tehlikesi' },
    openGraph: {
        title: 'YKS\'de Yığılma Tehlikesi (2027): Standart Sapma ve Sıralama Analizi',
        description: 'Yığılma bölgelerinden kurtulmanın veriye dayalı yolları. AYT stratejisi ve katsayı kullanımı.',
        type: 'article',
        publishedTime: '2026-05-02',
        modifiedTime: '2026-08-16',
        url: 'https://yksnethesapla.com/blog/yks-yigilma-tehlikesi',
    },
}

export default function YKSYigilmaTehlikesi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                    <nav className="mb-8 text-sm text-slate-500 font-medium flex items-center space-x-2">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
                        <span>›</span>
                        <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                        <span>›</span>
                        <span className="text-slate-900">Strateji</span>
                    </nav>

                    <header className="mb-10">
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold tracking-wide uppercase">Kritik</span>
                            <time className="text-slate-500 text-sm font-medium">Son Güncelleme: 16 Ağustos 2026</time>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500 text-sm font-medium">Okuma Süresi: 12 dk</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                            Yığılma Denen Kabus: Puanın Yüksek Ama Sıralaman Neden Düşük?
                        </h1>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed">
                            400 puan yaptın ama sıralaman beklediğinin 3 katı geriden geldi. Tanıdık geldi mi? İşte bu yığılma denen şey yüzünden oluyor.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg prose-blue max-w-none text-slate-700 mt-8">
                        <p className="lead">
                            Türkiye&apos;de her sene 3 milyondan fazla kişi YKS&apos;ye giriyor. Ve bu kadar kalabalık bir sınavda başarının ölçütü aldığın puan değil, o puanın seni kaçıncı sıraya yerleştirdiği. Bunu kafana kazıman lazım çünkü sıralamayı mahveden en büyük düşman var: <strong>Yığılma</strong>. Bi otur anlatayım bu ne iş.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Yığılma Ne Demek? Basitçe Anlatayım
                        </h2>
                        <p>
                            Sınav kolay olduğu yıllarda herkes yüksek net yapıyor. E herkes yüksek yapınca ne oluyor? Belirli bir puan aralığına binlerce, on binlerce kişi tıkılıyor. Normalde 380-390 puan arasına 20.000 kişi yerleşirken, kolay bir sınavda aynı aralığa 60-70.000 kişi doluşabiliyor. İşte bu kalabalığa yığılma deniyor.
                        </p>
                        <p>
                            Somut örnek vereyim. 2021&apos;de sınav zordu, 400 puan alan Sayısalcı ilk 25.000&apos;e giriyordu. 2022-2023&apos;te sınav daha kolaydı, aynı 400 puan 65.000-80.000 bandına geriledi. Puan aynı, sıralama 3 kat düştü. Neden? Çünkü bu sefer herkes 400 yaptı.
                        </p>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8 not-prose">
                            <h3 className="text-base font-bold text-red-900 uppercase tracking-wider mb-2">Yığılma Bölgesinde 1 Netin Değeri</h3>
                            <p className="text-sm text-red-800 leading-relaxed">
                                Eğer netlerin herkesin toplandığı o orta-üst segmente (TYT&apos;de 60-75, AYT&apos;de 35-55 net arası) denk geliyorsa dikkatli ol. Yapacağın <strong>1 ekstra AYT Matematik neti</strong> seni 12.000-18.000 kişi öne atabiliyor. Ama kaybedeceğin 1 net de aynı kadar geri düşürüyor. Yığılma bölgesinde her soru hayati.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Hangi Puan Türünde Nereler Riskli?
                        </h2>
                        <p>
                            Her puan türünün kendine has yığılma bölgesi var. Aşağıda geçmiş yıl verilerine göre en riskli aralıkları derledim. Kendin bu aralıkta mısın bir bak:
                        </p>
                        <div className="overflow-x-auto my-6 not-prose">
                            <table className="min-w-full bg-white border border-slate-200 rounded-xl">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold text-slate-900 border-b">Puan Türü</th>
                                        <th className="px-5 py-3 text-left font-semibold text-slate-900 border-b">Tehlikeli Puan Bandı</th>
                                        <th className="px-5 py-3 text-left font-semibold text-slate-900 border-b">Sıralama Aralığı</th>
                                        <th className="px-5 py-3 text-left font-semibold text-slate-900 border-b">Çıkış Anahtarı</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 text-sm">
                                    <tr><td className="px-5 py-4 font-bold text-blue-600">SAY</td><td className="px-5 py-4">320 – 390</td><td className="px-5 py-4">60K – 180K</td><td className="px-5 py-4 text-emerald-600 font-semibold">AYT Fizik + AYT Mat</td></tr>
                                    <tr className="bg-slate-50"><td className="px-5 py-4 font-bold text-emerald-600">EA</td><td className="px-5 py-4">290 – 360</td><td className="px-5 py-4">80K – 250K</td><td className="px-5 py-4 text-emerald-600 font-semibold">AYT Matematik</td></tr>
                                    <tr><td className="px-5 py-4 font-bold text-purple-600">SÖZ</td><td className="px-5 py-4">300 – 370</td><td className="px-5 py-4">30K – 120K</td><td className="px-5 py-4 text-emerald-600 font-semibold">Tarih-2 + Coğrafya-2</td></tr>
                                    <tr className="bg-slate-50"><td className="px-5 py-4 font-bold text-amber-600">TYT</td><td className="px-5 py-4">260 – 340</td><td className="px-5 py-4">400K – 1.2M</td><td className="px-5 py-4 text-emerald-600 font-semibold">TYT Fen + Geometri</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Standart Sapma İşi Biraz Karmaşık Ama Önemli
                        </h2>
                        <p>
                            ÖSYM puanını hesaplarken ham netini direkt kullanmıyor. Her testin Türkiye ortalaması ve standart sapması hesaplanıyor, sonra senin netin bu ortalamanın ne kadar üstünde diye bakılıyor.
                        </p>
                        <p>
                            İşin püf noktası şu: Bir testin ortalaması ne kadar düşükse — yani test ne kadar zorsa — o testten yaptığın her 1 netin puan değeri o kadar artıyor. Mesela herkesin ortalama 35 net yaptığı bir Türkçe testinde senin 36 netin pek bir şey değiştirmiyor. Ama herkesin ortalama 4 net yaptığı AYT Fizik&apos;te senin 15 netin seni roket gibi fırlatıyor.
                        </p>
                        <p>
                            Kısacası: Herkesin yaptığı dersten çok net yapmak seni kalabalığın içinde bırakır. Kimsenin yapamadığı dersten iyi net yapmak seni kalabalığın dışına çıkarır. Bu kadar basit aslında.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Yığılmadan Kurtulmanın 4 Yolu
                        </h2>

                        <p><strong>1. AYT&apos;ye ağırlık ver, TYT&apos;de takılma.</strong> TYT&apos;de 5 net artırmak için haftalarca uğraşacağına, AYT&apos;de 3 net artır. AYT&apos;nin yerleştirmedeki etkisi %60 — TYT&apos;nin neredeyse 2 katı. Yatırımını doğru yere yap.</p>

                        <p><strong>2. Herkesin çalışmadığı konulara yönel.</strong> EA&apos;cıysan herkes Edebiyat çalışıyor, Edebiyat ortalaması yüksek, standart sapması düşük. Seni yığılmadan çıkaracak olan AYT Matematik — özellikle Limit, Türev, İntegral. Sayısalcıysan AYT Fizik&apos;teki manyetizma, modern fizik gibi seçici konular aynı işi görüyor.</p>

                        <p><strong>3. OBP&apos;ni koru.</strong> Yığılma bölgesinde aynı puana sahip binlerce kişi virgülden sonraki küsüratlarla ayrılıyor. Diploma notunun katkısı bu noktada belirleyici oluyor. Okul sınavlarını küçümseme.</p>

                        <p><strong>4. Tercih döneminde geniş tut.</strong> Yığılma yılına denk geldiysen tercih listeni çok dar bir banda sıkıştırma. Sıralamanın %30 yukarısından başlayıp %40-50 aşağısına kadar in. 24 tercihi doldur, açıkta kalma riskini sıfırla.</p>

                        <div className="relative overflow-hidden bg-slate-900 rounded-2xl p-8 my-12 text-center border border-slate-800 shadow-2xl not-prose">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Yığılmada Neredesin?</h3>
                            <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-sm">
                                Deneme netlerini gir, 2027 tahmini sıralamana bak. Yığılma bölgesinde misin değil misin hemen gör.
                            </p>
                            <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl focus:ring-4 focus:ring-slate-500 focus:outline-none">
                                Sıralama Hesapla →
                            </Link>
                        </div>

                        <div className="mt-16 pt-8 border-t border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Bunları da Oku</h3>
                            <div className="grid md:grid-cols-2 gap-4 not-prose">
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">1 Net Kaç Kişi Attırır?</h4>
                                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">Yığılma bandında tek bir netin kaç bin kişiyi ekarte ettiği.</p>
                                </Link>
                                <Link href="/blog/universite-tercih-stratejileri" className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Tercih Stratejileri</h4>
                                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">24 tercihi çöpe atmadan kullanma rehberi.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
