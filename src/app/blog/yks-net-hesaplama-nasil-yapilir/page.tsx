import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS Net Hesaplama Nasıl Yapılır? (4 Yanlış 1 Doğruyu Götürüyor Mu?)',
    description: 'YKS net hesaplama mantığı, standart sapma etkisi ve katsayılar. 4 yanlış 1 doğruyu nasıl götürür? TYT ve AYT net hesaplama rehberi 2027.',
    keywords: 'yks net hesaplama, tyt net hesaplama, 4 yanlış 1 doğruyu götürür mü, standart sapma yks, yks katsayılar 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir' },
    openGraph: {
        title: 'YKS Net Hesaplama: Denemelerdeki Puanın Neden Gerçeği Yansıtmıyor?',
        description: '4 yanlışın 1 doğruyu götürmesi ve standart sapma üzerine bilmen gereken her şey.',
        type: 'article',
        publishedTime: '2026-02-15',
        modifiedTime: '2026-08-19',
        url: 'https://yksnethesapla.com/blog/yks-net-hesaplama-nasil-yapilir',
    },
}

export default function YKSNetHesaplama() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Net Hesaplama</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Rehber</span>
                            <time className="text-gray-600">19 Ağustos 2026</time>
                            <span className="text-gray-600">• 10 dk okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Denemelerde 300 Alan Çocuk Sınavda Nasıl 340 Aldı?
                        </h1>
                        <p className="text-xl text-gray-600">
                            Net hesaplamak kolay: Doğrulardan yanlışların çeyreğini çıkar. Ama o netin puana dönüşmesi... İşte orada dershanelerin hesaplama motorlarının sana söylemediği çok büyük bir sır var.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Geçen yıl dershanede bir öğrencim yanıma geldi, deneme sonucunu gösterdi. Gözleri dolmuş, &quot;Hocam yine 300 puan, 6 aydır çalışıyorum milim ilerlemedi&quot; dedi. Aldım kağıdı baktım, netleri aslında fena değildi. TYT Matematikte 22 neti vardı, AYT Edebiyatta 18 net yapmıştı. 
                        </p>
                        
                        <p>
                            &quot;Oğlum&quot; dedim, &quot;bu dershanenin kullandığı yazılım 2021 YKS verilerini baz alıyor. O yıl sınav zordu, bu netlere düşük puan verdi. Senin gerçek puanın şu an en az 340.&quot; Nitekim YKS sonuçları açıklandığında 348 yerleştirme puanı aldı ve istediği yere girdi.
                        </p>

                        <p>
                            Bu yüzden şu net-puan meselesini bir kez baştan konuşalım. Herkesin bildiği kısımdan başlayıp kimsenin anlamadığı &quot;standart sapma&quot; olayına doğru gidelim.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            4 Yanlış 1 Doğruyu Götürüyor... Ama Hangi Doğruyu?
                        </h2>
                        <p>
                            Bu kuralı artık sağır sultan duydu: YKS&apos;de 4 yanlış 1 doğruyu götürür. Hesap çok basit. Matematikten 20 doğru, 4 yanlış yaptın diyelim. 4 yanlış senin 1 doğrunu siliyor. Geriye 19 netin kalıyor.
                        </p>
                        
                        <p>
                            Formül şöyle: <strong>Net = Doğru Sayısı - (Yanlış Sayısı / 4)</strong>
                        </p>

                        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg my-6">
                            <h3 className="font-bold text-red-900 mb-2">Dikkat Edilmesi Gereken Hata</h3>
                            <p className="text-sm text-red-800">
                                Öğrencilerin çoğu sanıyor ki Matematikteki 4 yanlış, Tarihteki 1 doğruyu götürebilir. Hayır! Her testin yanlışı kendi doğrusunu götürür. Matematik yanlışı, Matematik netini düşürür. Türkçe yanlışı, Türkçe netini düşürür. &quot;Tarihten sallasam da tutmazsa, Fenden gider&quot; gibi bir mantık yok. O yüzden bilmediğin soruyu boş bırakmak her zaman en iyisidir. Boş soru sana zarar vermez.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Hangi Test Daha Çok Puan Getirir? (Sabit Katsayılar)
                        </h2>
                        <p>
                            Bu çok sorulur: &quot;Hocam Matematik sorusu ile Türkçe sorusu aynı puan mı?&quot; Cevap: Evet, teorik olarak neredeyse aynı. TYT&apos;de Türkçe ve Matematik testlerinin soru başına getirdiği puan kabaca eşittir. Fen ve Sosyal biraz daha düşüktür ama sanıldığı kadar uçurum yoktur.
                        </p>

                        <p>
                            TYT için katsayılar şöyle:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Türkçe:</strong> 1 net = ~1.33 puan</li>
                            <li><strong>Matematik:</strong> 1 net = ~1.33 puan</li>
                            <li><strong>Sosyal Bilimler:</strong> 1 net = ~1.36 puan</li>
                            <li><strong>Fen Bilimleri:</strong> 1 net = ~1.36 puan</li>
                        </ul>

                        <p>
                            Yani aslında Sosyal ve Fen netleri, ham puana çevrilirken Türkçe ve Matematik&apos;ten (küsurat farkıyla) biraz daha fazla puan getiriyor! İnanamadın değil mi? Çoğu öğrenci bunu bilmediği için sırf &quot;Matematik daha değerlidir&quot; diye 5 dakika uğraşıp 1 zor matematik sorusunu çözerken, o sürede yapabileceği 3 kolay Sosyal sorusunu es geçiyor.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Peki Standart Sapma Ne İş?
                        </h2>
                        <p>
                            Geldik işin renginin değiştiği yere. Yukarıda verdiğim katsayılar &quot;sabit&quot; katsayılar. Ama ÖSYM her sene sonuçları açıklarken bir de &quot;standart sapma&quot; ekler işin içine.
                        </p>

                        <p>
                            Standart sapma özetle şu demek: Bir soruyu veya bir testi <strong>Türkiye genelinde</strong> ne kadar az kişi yapabildiyse, o testin değeri o kadar artar. 
                        </p>

                        <p>
                            2021 YKS&apos;yi hatırlayanlar vardır. Matematik o kadar zordu ki Türkiye ortalaması yerlerde sürünüyordu. O sene 15 Matematik neti yapan bir öğrenci, standart sapma sayesinde uçuşa geçti ve inanılmaz sıralamalar elde etti. Aynı sene Türkçe nispeten kolaydı, 35 Türkçe neti yapan pek çok kişi standart sapmadan faydalanamadığı için sıralamada geride kaldı.
                        </p>

                        <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl my-6">
                            <h3 className="font-bold text-indigo-900 mb-3">Kritik Soru: Zor Soru Daha mı Çok Puan Getirir?</h3>
                            <p className="text-slate-700">
                                Bu bir şehir efsanesidir. <strong>Aynı test içindeki</strong> soruların puanı eşittir. Matematik testindeki 1. soru (çok kolay) ile 40. soru (çok zor) sana <strong>aynı puanı</strong> getirir. Standart sapma, <em>soru bazında değil, test bazında</em> hesaplanır. Yani zor soruyu çözdün diye sana madalya veya ekstra puan vermezler.
                            </p>
                            <p className="text-slate-700 mt-3 font-semibold">
                                Strateji: Denemede veya sınavda bir soruda takıldın ve 3 dakikan gitti mi? Bırak onu. Git arkadaki kolay 3 soruyu çöz. Aynı puanı alacaksın.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Deneme Sınavlarındaki Puanlar Neden Yanıltır?
                        </h2>
                        <p>
                            Çoğu yayın evi, puan hesaplama motorunda bir önceki yılın katsayılarını kullanır. 2026&apos;da çözdüğün bir deneme, sana 2025&apos;in zorluk derecesine göre bir puan verir. Eğer 2025 sınavı kolaysa, senin deneme puanın yüksek çıkar ama gerçek sınavda sıralaman düşer.
                        </p>

                        <p>
                            Bu yüzden sana tavsiyem: <strong>Puana değil, sıralamaya (yüzdelik dilime) ve netlerine bak.</strong> Puan, sınavın zorluğuna göre 30-40 puan esneyebilir ama 80 net yapan birinin gireceği sıralama bandı üç aşağı beş yukarı aynı kalır.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">En Güncel Katsayılarla Netlerini Hesapla</h3>
                            <p className="text-blue-100 mb-6">
                                Bizim hesaplama motorumuz, son yılların istatistiklerini harmanlayarak en gerçekçi sonucu verir. 
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Hemen YKS Net Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
