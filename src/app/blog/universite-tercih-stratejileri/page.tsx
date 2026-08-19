import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'Üniversite Tercih Stratejileri 2027: 24 Tercih Hakkı Nasıl Kullanılır?',
    description: 'YKS 2027 tercih dönemi için bilimsel tercih robotu mantığı. Ölü tercih yapmamak, yığılma analizi ve garanti-sürpriz tercih yüzdeleri.',
    keywords: 'üniversite tercih, tercih stratejileri, yks 2027 tercih, ölü tercih nedir, 24 tercih nasıl yapılır',
    alternates: { canonical: 'https://yksnethesapla.com/blog/universite-tercih-stratejileri' },
    openGraph: {
        title: 'Üniversite Tercih Stratejileri 2027: Bilimsel Yaklaşım',
        description: 'ÖSYM yerleştirme algoritmalarına göre hatasız tercih listesi oluşturma.',
        type: 'article',
        publishedTime: '2026-02-21',
        modifiedTime: '2026-08-16',
        url: 'https://yksnethesapla.com/blog/universite-tercih-stratejileri',
    },
}

export default function UniversiteTercihStratejileri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                    <nav className="mb-8 text-sm text-slate-500 font-medium flex items-center space-x-2">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
                        <span>›</span>
                        <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                        <span>›</span>
                        <span className="text-slate-900">Tercih Dönemi</span>
                    </nav>

                    <header className="mb-10">
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold tracking-wide uppercase">Sistem Analizi</span>
                            <time className="text-slate-500 text-sm font-medium">Son Güncelleme: 16 Ağustos 2026</time>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500 text-sm font-medium">Okuma Süresi: 9 dk</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                            Üniversite Tercihlerinde "Altın Oran": 2027 ÖSYM Yerleştirme Mantığını Hacklemek
                        </h1>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed">
                            Puanınız bir bölüme yetiyor olabilir, ancak tercih listenizdeki bir sıralama hatası yüzünden sistem sizi bir alt tercihe kaydırabilir. 24 tercih hakkını riske atmadan kullanmanın veri odaklı matematiği.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg prose-blue max-w-none text-slate-700 mt-8">
                        <p className="lead">
                            Biliyorsunuz ki ÖSYM yerleştirme sistemi "bu çocuk bu bölümü çok istiyordu, bari buraya yerleştirelim" diye duygusal bir mantıkla çalışmıyor. Arkada taş gibi soğuk bir eşleştirme algoritması var. Her yıl adayların abartısız %30'u, sırf tercih listesini kendi puanına göre yapmadığı (işte o meşhur ölü tercih muhabbeti) veya güvenli aralığı dar tuttuğu için ya açıkta kalıyor ya da hiç istemediği bir bölüme gitmek zorunda kalıyor.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            1. En Büyük Kural: Puana Bakarak Tercih Yapılmaz!
                        </h2>
                        <p>
                            Bu herhalde yapılabilecek en ölümcül hatadır. Üniversitelerin o yılki taban puanları, sınavın zorluğuna göre bir bakmışsınız 50-60 puan birden oynamış. Mesela 2021 yılındaki düşüşleri hatırlayın. Ama üniversitelerin <strong>taban sıralamaları</strong> (eğer yeni açılan tıp/hukuk fakülteleri gibi kontenjanı şişiren özel bir durum yoksa) öyle kolay kolay radikal şekilde değişmez.
                        </p>
                        
                        <div className="bg-slate-900 rounded-xl p-6 my-8 text-center shadow-lg not-prose">
                            <p className="text-sm text-slate-400 mb-2 uppercase tracking-wider font-semibold">2027 Tercih Havuzu Dağılımı (Bana Göre Altın Oran)</p>
                            <div className="grid grid-cols-3 gap-4 mt-4">
                                <div className="bg-slate-800 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-emerald-400">İlk %20</div>
                                    <div className="text-xs text-slate-400 mt-1">Uçuş Serbest (Kendi sıralamandan %30-40 yüksek yerler)</div>
                                </div>
                                <div className="bg-slate-800 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-400">Orta %50</div>
                                    <div className="text-xs text-slate-400 mt-1">Ayaklar Yere Basıyor (Kendi sıranın üç aşağı beş yukarı aynısı)</div>
                                </div>
                                <div className="bg-slate-800 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-amber-400">Son %30</div>
                                    <div className="text-xs text-slate-400 mt-1">Paraşüt (Kendi sırandan %40-50 düşük, kesin girerim dediğin yerler)</div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            2. Şu Meşhur "Ölü Tercih" Efsanesi
                        </h2>
                        <p>
                            Listenizde 3. sıraya yazdığınız bölümün geçen yılki sıralaması 100.000, hemen altına 4. sıraya yazdığınız yerin sıralaması 80.000 ise; kusura bakmayın ama o 4. sıradaki tercihiniz resmen <strong>Ölü Tercih</strong> oldu.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Peki Neden?</strong> Basit bir mantık kuralı: Eğer senin sıralaman 80.000'lik o yere girecek kadar iyiyse, zaten 100.000'lik yere havada karada yetiyordur. Sistem de listeni yukarıdan aşağı doğru taradığı için, seni hop diye 3. sıradaki (100.000) bölüme yerleştirir. O çok güvendiğin 4. sıraya dönüp bakmaz bile.</li>
                        </ul>
                        
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-6 not-prose">
                            <h3 className="text-base font-bold text-red-900 uppercase tracking-wider mb-2">Peki İstisnası Var Mı?</h3>
                            <p className="text-sm text-red-800">
                                Olmaz mı. Sadece ve sadece 4. sıradaki o 80.000'lik bölümü, 3. sıradakinden <strong>çok daha fazla istiyorsan</strong> bu anlattığım şey bir mantık hatasıdır, ölü tercih değildir. Çok gitmek istediğin bir yeri, puanı düşük bile olsa her zaman kendi listende daha üste yaz. Sistem her zaman senin "istek sıranı" ciddiye alır, başkasının kaç puanla girdiğini değil.
                            </p>
                        </div>

                        <div className="relative overflow-hidden bg-slate-900 rounded-2xl p-8 my-12 text-center border border-slate-800 shadow-2xl not-prose">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Kaç Net Bana Kaç Bin Sıralama Getirir?</h3>
                            <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-sm">
                                Tercih listesini kağıda karalamaya başlamadan önce, masadaki mevcut netlerinle 2027'de kaç bininci olacağını bir hesapla istersen.
                            </p>
                            <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl focus:ring-4 focus:ring-slate-500 focus:outline-none">
                                Gelişmiş Net Hesaplama Motoru →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}


