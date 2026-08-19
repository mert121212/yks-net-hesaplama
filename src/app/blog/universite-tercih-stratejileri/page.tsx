import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'Üniversite Tercih Stratejileri 2027 | 24 Tercih Nasıl Yapılır?',
    description: 'YKS tercih yaparken dikkat edilmesi gerekenler. Ölü tercih nedir? Sıralamaya göre tercih listesi nasıl hazırlanır? 24 tercih hakkı stratejisi.',
    keywords: 'üniversite tercihleri, yks tercih nasıl yapılır, ölü tercih nedir, tercih listesi hazırlama, yök atlas tercih',
    alternates: { canonical: 'https://yksnethesapla.com/blog/universite-tercih-stratejileri' },
    openGraph: {
        title: 'Tercih Listesi Hazırlama Rehberi: Ölü Tercih Tuzağına Düşmeyin',
        description: 'Sınavı kazanıp tercihte kaybedenlerden olmamak için altın kurallar.',
        type: 'article',
        publishedTime: '2026-02-08',
        modifiedTime: '2026-08-19',
        url: 'https://yksnethesapla.com/blog/universite-tercih-stratejileri',
    },
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
                            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600">19 Ağustos 2026</time>
                            <span className="text-gray-600">• 10 dk okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Sınavı Kazanıp Tercihte Kaybedenlerden Olmamak İçin 5 Altın Kural
                        </h1>
                        <p className="text-xl text-gray-600">
                            1 yıl boyunca dirsek çürütüp elde ettiğin o sıralama, sadece 24 satırlık bir listeye yanlış yerleştirildiği için çöpe gidebilir. Ölü tercih nedir? Liste nasıl kurulur? Anlatıyorum.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Ağustos ayı gelir, sonuçlar açıklanır. Öğrenci gelir yanıma, sıralaması 40.000&apos;dir. Kendine bir liste yapmıştır, bakarım listeye. 1. sırada 10.000 ile kapatan yer, 2. sırada 45.000 ile kapatan yer, 3. sırada 35.000 ile kapatan yer yazılıdır.
                        </p>

                        <p>
                            &quot;Oğlum/Kızım&quot; derim, &quot;senin 3. tercihin ölmüş, o satırı boşa harcamışsın.&quot; Neden mi? Çünkü ÖSYM&apos;nin robotu duygusal değildir. Sırayla bakar. Gel mantığını çözelim de bu tuzağa düşme.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Kural 1: Puanla Değil, Sıralamayla Tercih Yapılır
                        </h2>
                        <p>
                            En yaygın ve en ölümcül hata budur. Sınav sonucunda puanın 400 gelmiştir. Geçen senenin kılavuzuna bakarsın, istediğin bölüm geçen yıl 400 puanla kapatmıştır. &quot;Tamam, kesin giriyorum&quot; dersin. <strong>HAYIR.</strong>
                        </p>
                        <p>
                            Sınavın zorluk derecesi her yıl değiştiği için puanlar devasa şekilde oynar. Ama sıralamalar çok az oynar. Kontenjanlar sabit kaldığı sürece, geçen yıl 30.000 ile alan yer bu yıl da 30.000 civarı bir yerle kapatacaktır (bölüm trendleri hariç). O yüzden kılavuza bakarken &quot;Taban Puan&quot; sütununa değil, her zaman &quot;Başarı Sırası&quot; sütununa bakacaksın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Kural 2: &quot;Ölü Tercih&quot; Nedir, Nasıl Yapılmaz?
                        </h2>
                        <p>
                            ÖSYM sistemi senin tercih listene yukarıdan aşağıya (1&apos;den 24&apos;e doğru) bakar. Eğer sen 1. sıraya 50.000 ile alan bir yeri, 2. sıraya 30.000 ile alan bir yeri yazarsan, 2. sıradaki tercihin <strong>ölü tercih</strong> olur.
                        </p>
                        
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-6">
                            <h3 className="font-bold text-red-900 mb-2">Neden Ölüyor?</h3>
                            <p className="text-sm text-red-800">
                                Sistem 1. tercihine baktığında eğer puanın yetiyorsa seni hemen oraya yerleştirir ve alttaki tercihlere hiç bakmaz bile. Puanın yetmiyorsa 2. sıraya geçer. E 1. sıradaki 50.000&apos;lik yere puanın yetmediyse, 2. sıradaki 30.000&apos;lik yere zaten yetmez. Yani 2. satırı boşuna listeye yazmış oldun.
                            </p>
                        </div>
                        <p>
                            Bu yüzden liste <strong>her zaman daralan sıralamaya göre</strong> (yüksekten düşüğe doğru) yapılmalıdır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Kural 3: Yüzde 30-30-40 Listesi (Güvenli Liste Taktikleri)
                        </h2>
                        <p>
                            Elinde 24 tane tercih hakkı var. Bu hakları üç bölgeye ayırmalısın. Diyelim ki sıralaman 50.000. Listen şöyle olmalı:
                        </p>

                        <ul className="list-none pl-0 space-y-4 my-6">
                            <li className="bg-emerald-50 p-5 rounded-lg border border-emerald-200">
                                <strong className="text-emerald-900 block text-lg mb-2">1. Bölge (Hayal Bölgesi) - İlk 5-6 Tercih</strong>
                                <span className="text-sm">Kendi sıralamanın %30-%40 üstünden başla. 50.000 isen, listeye 30.000&apos;lerden, 35.000&apos;lerden yerler yaz. Olmaz deme, bazen bölümlerin kontenjanı artar, bazen o yıl o bölüm popülerliğini kaybeder. Şansını dene.</span>
                            </li>
                            <li className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                                <strong className="text-blue-900 block text-lg mb-2">2. Bölge (Gerçekçi Bölge) - Ortadaki 10-12 Tercih</strong>
                                <span className="text-sm">Senin asıl yerleşeceğin yer burası. 50.000 isen, 45.000 ile 60.000 arasındaki bölümleri buraya yaz. Burayı çok sıkı tut, en çok istediğin şehirleri başa al.</span>
                            </li>
                            <li className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                                <strong className="text-slate-900 block text-lg mb-2">3. Bölge (Sigorta Bölgesi) - Son 5-6 Tercih</strong>
                                <span className="text-sm">&quot;Açıkta kalırsam ailem beni keser&quot; bölgesidir. Sıralamanın %30-%40 altına in. 50.000 isen, 65.000&apos;den başlayıp 80.000&apos;lere kadar düş. Burası senin güvenlik ağın.</span>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Kural 4: İstemediğin Yeri Asla Yazma!
                        </h2>
                        <p>
                            Öğrenci listeyi doldurmak için 24. sıraya öylesine, hiç gitmek istemediği bir doğu ilini veya hiç sevmediği bir bölümü yazar. Ağustos sonunda sonuçlar açıklanır, ekranda o bölüm yazar.
                        </p>
                        <p>
                            &quot;Hocam ben oraya gitmem, seneye tekrar hazırlanacağım&quot; der. İşte o an öğrencinin bittiği andır. Neden? Çünkü bir yere yerleştiğin an, ertesi yıl <strong>OBP&apos;n (Okul Başarı Puanın) YARIYA DÜŞER</strong>. (Bakınız: <Link href="/blog/obp-hesaplama" className="text-blue-600 hover:underline">Kırık OBP Cezası</Link>). Yani seneye sınava 25-30 puan eksiyle, yani 10 binlerce kişi geriden başlarsın. Gideceksen yaz, gitmeyeceksen bırak o satır boş kalsın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Kural 5: YÖK Atlas Senin En İyi Dostun
                        </h2>
                        <p>
                            Sağdan soldan &quot;şu bölüm iyiymiş&quot; diye duyduklarınla tercih yapma. İnternete gir, &quot;YÖK Atlas Lisans Tercih Sihirbazı&quot; yaz. Bu, devletin kendi resmi aracıdır.
                        </p>
                        <p>
                            Yazacağın üniversitenin hocalarına bak, geçen yıl o bölüme girenlerin netlerine bak. En önemlisi o bölüme 1. sıradan giren kişi kaç bininci, son sıradan giren kişi kaç bininci ona bak. YÖK Atlas kullanmadan tercih yapan öğrenci, gözü kapalı yolda yürüyordur.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Tercih Yapmadan Önce...</h3>
                            <p className="text-blue-100 mb-6">
                                Tercih dönemi gelmeden önce, deneme netlerine göre hangi sıralama bandında olduğunu tespit et. Hayallerini rakamlara dök.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Sıralamanı Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
