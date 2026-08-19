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
                            <span className="text-slate-500 text-sm font-medium">Okuma Süresi: 12 dk</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                            24 Tercih Hakkını Çöpe Atma: Yerleştirme Sisteminin Gerçek Yüzü
                        </h1>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed">
                            Puanın bölüme yetiyor olabilir ama tercih sırandaki bir hata yüzünden istemediğin yere düşebilirsin. Gelin bu sistemi birlikte çözelim.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg prose-blue max-w-none text-slate-700 mt-8">
                        <p className="lead">
                            Biliyorsunuz ki ÖSYM &quot;bu çocuk bu bölümü çok istiyordu, bari buraya yerleştirelim&quot; diye duygusal bir mantıkla çalışmıyor. Arkada taş gibi soğuk bir eşleştirme algoritması var. Her sene adayların %30 kadarı — şaka değil, neredeyse her üç kişiden biri — sırf tercih listesini yanlış kurguladığı için ya açıkta kalıyor ya da hiç istemediği bir bölüme gitmek zorunda kalıyor. E biz de dedik ki bu konuyu bi adam akıllı anlatalım.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Birinci Kural: Taban Puanlara Bakarak Tercih Yapılmaz
                        </h2>
                        <p>
                            Bu herhalde yapılabilecek en ölümcül hata. Üniversitelerin o yılki taban puanları, sınavın zorluğuna göre bi bakmışsınız 40-50 puan birden oynamış. 2021&apos;deki düşüşleri hatırlayın — sınav zordu, puanlar çakıldı. 2022&apos;de kolay geldi, puanlar fırladı. Ama <strong>taban sıralamaları</strong> (eğer yeni açılan bir program ya da kontenjan değişikliği yoksa) öyle kolay kolay değişmez.
                        </p>
                        <p>
                            Yani şöyle düşünün: &quot;Geçen sene şu bölüm 380 puanla almış, benim puanım 390, girerim&quot; demek çok tehlikeli. Ama &quot;geçen sene 45.000. sıralama ile almış, benim sıralamam 42.000, şansım var&quot; demek çok daha mantıklı.
                        </p>

                        <div className="bg-slate-900 rounded-xl p-6 my-8 text-center shadow-lg not-prose">
                            <p className="text-sm text-slate-400 mb-2 uppercase tracking-wider font-semibold">24 Tercih İçin Altın Oran</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-left">
                                <div className="bg-slate-800 p-5 rounded-lg border border-slate-700">
                                    <div className="text-xl font-bold text-emerald-400">İlk 5 Tercih</div>
                                    <div className="text-xs text-slate-300 font-semibold mt-1">Hayaller (%20)</div>
                                    <p className="text-xs text-slate-400 mt-2">Sıralamandan %20-35 yukarıdaki bölümler. Tutma ihtimali düşük ama &quot;ya tutarsa&quot; dediğin yerler.</p>
                                </div>
                                <div className="bg-slate-800 p-5 rounded-lg border border-slate-700">
                                    <div className="text-xl font-bold text-blue-400">6. - 17. Tercihler</div>
                                    <div className="text-xs text-slate-300 font-semibold mt-1">Gerçekçi Alan (%50)</div>
                                    <p className="text-xs text-slate-400 mt-2">Kendi sıralamanın civarındaki yerler. Yerleşme şansının en yüksek olduğu çekirdek grup burası.</p>
                                </div>
                                <div className="bg-slate-800 p-5 rounded-lg border border-slate-700">
                                    <div className="text-xl font-bold text-amber-400">18. - 24. Tercihler</div>
                                    <div className="text-xs text-slate-300 font-semibold mt-1">Paraşüt (%30)</div>
                                    <p className="text-xs text-slate-400 mt-2">Sıralamanın %40-50 altındaki yerler. &quot;Kesin girerim&quot; dediğin, açıkta kalmamak için yazdığın güvenlik ağı.</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Ölü Tercih Olayı Ne?
                        </h2>
                        <p>
                            Listenizde 3. sıraya yazdığınız bölümün geçen yılki sıralaması 100.000, hemen altına 4. sıraya yazdığınız yerin sıralaması 80.000 diyelim. E kardeşim, senin sıralaman 80.000&apos;lik yere yetiyorsa, 100.000&apos;lik yere zaten havada karada yetiyor. Sistem de listeyi yukarıdan aşağı taradığı için seni hop diye 3. sıradaki bölüme yerleştirir. O güvendiğin 4. tercihe dönüp bakmaz bile.
                        </p>
                        
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-6 not-prose">
                            <h3 className="text-base font-bold text-amber-900 uppercase tracking-wider mb-2">Ama Bi Dakika, İstisnası Var</h3>
                            <p className="text-sm text-amber-800">
                                Eğer o 100.000&apos;lik bölümü gerçekten 80.000&apos;lik bölümden <strong>çok daha fazla istiyorsan</strong>, bu bir ölü tercih değil, bilinçli bir karardır. Çok gitmek istediğin yeri puanı düşük bile olsa listenin üstüne yaz. Sistem senin istek sıranı ciddiye alır, başkasının kaç puanla girdiğini değil.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Kontenjan Değişiklikleri Sıralamaları Nasıl Etkiliyor?
                        </h2>
                        <p>
                            Her sene YÖK bazı bölümlerin kontenjanlarını artırıyor, bazılarınkini kısıyor. Kontenjan %20 azaldığında o bölüme girmek zorlaşır, taban sıralama yukarı çekilir. Kontenjan arttığında ise sıralama gevşer. Bunu takip etmek lazım.
                        </p>
                        <p>
                            Özellikle son yıllarda bilgisayar mühendisliği, yazılım, yapay zeka gibi bölümlere talep öyle arttı ki bu alanlarda sıralamalar her sene daha da öne çekiliyor. Mesela 3 yıl önce 80.000 ile girebilecekken şimdi 50.000 istiyor. Bu trendi görmezden gelen arkadaşlar tercih döneminde hayal kırıklığına uğruyor.
                        </p>
                        <p>
                            Yeni açılan bölümler için de dikkatli olun — bunların geçmiş verisi yok. Tahmini sıralama için aynı üniversitenin benzer bölümlerinin sıralamalarına bakabilirsiniz.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Başarı Sırası Barajlarını Sakın Unutma
                        </h2>
                        <p>
                            Bazı bölümlere girmek için belirli bir sıralama şartı var. Sıralamanın 1 kişi bile gerisindeysen sistem sana &quot;tercih yapamazsın&quot; diyor. Bunları kafana kazı:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Tıp:</strong> İlk 50.000</li>
                            <li><strong>Diş Hekimliği:</strong> İlk 80.000</li>
                            <li><strong>Eczacılık:</strong> İlk 100.000</li>
                            <li><strong>Hukuk:</strong> İlk 125.000</li>
                            <li><strong>Mimarlık:</strong> İlk 250.000</li>
                            <li><strong>Mühendislik ve Öğretmenlik:</strong> İlk 300.000</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Vakıf Üniversitelerinde Burs İşleri
                        </h2>
                        <p>
                            Vakıf üni tercihi yapacaksanız ÖSYM kılavuzundaki özel koşullar sütununu kesinlikle okuyun. Bazı üniversiteler burs kesilme şartlarını çok sıkı tutarken, bazıları 4 yıl boyunca kesintisiz veriyor. Hazırlık sınıfının ücretli olup olmadığını, yurt imkanlarını, staj ortaklıklarını araştırmadan tercih yapmayın.
                        </p>
                        <p>
                            Bir arkadaşım %50 burslu kazandı, sonra bir dersten kaldı, burs full ücrete döndü. Yılda 200 bin TL fark. Bunları önceden bilmek lazım.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Akreditasyon Kontrolü Yap
                        </h2>
                        <p>
                            Özellikle mühendislik okuyacaksan MÜDEK akreditasyonu olan programlara bak. EUR-ACE etiketi varsa diploman Avrupa&apos;da doğrudan tanınıyor. Tıp için TEPDAD onayını kontrol et. Bu detaylar mezun olduktan sonra başına iş açabilir.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Tercih Listesi Kontrol Listesi
                        </h2>
                        <ol className="list-decimal pl-6 space-y-2 mb-8">
                            <li>Tercih ettiğin bölümün son 3 yıllık sıralama trendine bak.</li>
                            <li>Kılavuzdaki özel koşul kodlarını tek tek oku.</li>
                            <li>Üniversitenin bulunduğu şehrin kira ve ulaşım durumunu araştır.</li>
                            <li>Akademik kadrodaki hoca sayısını kontrol et.</li>
                            <li>Erasmus ve staj olanaklarını karşılaştır.</li>
                            <li>Gitmeyeceğin bir yeri &quot;açıkta kalmayayım&quot; diye yazma — seneye Kırık OBP cezası yersin.</li>
                            <li>Listeyi teslim etmeden önce bir rehber öğretmenle birlikte son kez gözden geçir.</li>
                        </ol>

                        <div className="relative overflow-hidden bg-slate-900 rounded-2xl p-8 my-12 text-center border border-slate-800 shadow-2xl not-prose">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Sıralaman Hangi Bölümlere Yetiyor?</h3>
                            <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-sm">
                                Deneme netlerini gir, 2027 tahmini sıralamana bak, sonra tercih listeni buna göre kur.
                            </p>
                            <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl focus:ring-4 focus:ring-slate-500 focus:outline-none">
                                Sıralama Hesapla →
                            </Link>
                        </div>

                        <div className="mt-16 pt-8 border-t border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">İlgili Yazılar</h3>
                            <div className="grid md:grid-cols-2 gap-4 not-prose">
                                <Link href="/blog/obp-hesaplama" className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">OBP Hesaplama</h4>
                                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">Diploma notunun sıralamana etkisi ve kırık OBP meselesi.</p>
                                </Link>
                                <Link href="/blog/yks-puan-turleri" className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">YKS Puan Türleri</h4>
                                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">SAY, EA, SÖZ ve DİL barajları ve bölüm listeleri.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
