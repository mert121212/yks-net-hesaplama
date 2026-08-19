import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS\'de 1 Net Kaç Bin Kişi Atar? (Yığılma ve Standart Sapma Etkisi)',
    description: 'YKS (TYT-AYT) sınavında 1 netin sıralamaya etkisi. Yığılma noktalarında 1 net kaç kişiyi geride bırakır? SAY, EA, SÖZ 2027 analiz.',
    keywords: '1 net kaç kişi atar, yks 1 netin etkisi, tyt 1 net kaç kişi atar, ayt 1 net kaç kişi atar, yks yığılma, standart sapma yks',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar' },
    openGraph: {
        title: 'YKS\'de 1 Netin Gücü: Sınavı Kazandıran O Tek Soru',
        description: 'Özellikle 50.000-150.000 bandında 1 tek netin sıralamayı nasıl değiştirdiğini örneklerle anlattık.',
        type: 'article',
        publishedTime: '2026-02-13',
        modifiedTime: '2026-08-19',
        url: 'https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar',
    },
}

export default function YKSBirNetKacKisiAtar() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">1 Net Kaç Kişi Atar?</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">İstatistik</span>
                            <time className="text-gray-600">19 Ağustos 2026</time>
                            <span className="text-gray-600">• 10 dk okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            &quot;Aman Bir Sorudan Ne Olacak&quot; Diyenlerin Kaybettiği Binlerce Kişi
                        </h1>
                        <p className="text-xl text-gray-600">
                            Sınav esnasında o paragraf sorusunu okumaya üşenip geçtiğinde aslında kaç kişinin arkasına düştüğünü bilsen, o soruyu okumak için uykun falan kalmazdı. Gel gerçek rakamlara bakalım.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Öğrencilerle konuşurken sık sık şu cümleyi duyuyorum: &quot;Hocam matematikte 2 soruyu yapamadım, boş bıraktım, ama fenden kapattım.&quot; Ya da &quot;Tarihte o tarihi hatırlayamadım, attım yanlış çıktı. Neyse 1.25 net gitti sadece.&quot;
                        </p>
                        
                        <p>
                            Sadece 1.25 net mi? Sınav sonuçları açıklandığında, birbirinin tıpatıp aynısı puanı alan, virgüllerle birbirinden ayrılan o kadar çok kişi oluyor ki inanamazsın. Özellikle &quot;yığılma&quot; dediğimiz orta-üst başarı diliminde, o 1 net senin hayatını değiştirir. Tıp isteyip diş hekimliğine, hukuk isteyip PDR&apos;ye gidenlerin çoğu işte o &quot;aman boşver&quot; dedikleri 1 soru yüzünden bu durumu yaşar.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            1 Net Seni Kaç Bin Kişi Öne Atar? (Sıralama Bandına Göre)
                        </h2>
                        <p>
                            Bu sorunun tek bir matematiksel cevabı yok. &quot;1 net 5 bin kişi atar&quot; demek yalandır. Çünkü bulunduğun sıralama bandına göre 1 netin değeri değişir. Şöyle anlatayım: Türkiye 1.si ile 2.si arasında bazen 5 puan (yaklaşık 2-3 net) fark olur. Yani ilk 100&apos;ün içindeyken 1 net seni taş çatlasın 15-20 kişi öne atar.
                        </p>

                        <p>
                            Ama 100 bininci sıradaysan? Orası mahşer yeri gibi kalabalıktır. Orada 1 net seni binlerce kişinin önüne fırlatır. İşte bant bant tahmini rakamlar (Son 3 yılın YKS istatistiklerinden süzülmüştür):
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg text-sm">
                                <thead className="bg-green-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Bulunduğun Sıralama (Yaklaşık)</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">TYT&apos;de 1 Net Kaç Kişi Atar?</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">AYT&apos;de 1 Net Kaç Kişi Atar?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b"><td className="px-5 py-3 font-bold">İlk 10.000</td><td className="px-5 py-3 text-center text-gray-600">300 - 500 kişi</td><td className="px-5 py-3 text-center font-bold text-green-700">800 - 1.200 kişi</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-bold">10.000 - 50.000</td><td className="px-5 py-3 text-center text-gray-600">800 - 1.500 kişi</td><td className="px-5 py-3 text-center font-bold text-green-700">2.000 - 3.500 kişi</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-bold text-red-700">50.000 - 150.000 (Yığılma)</td><td className="px-5 py-3 text-center font-bold text-red-600">2.500 - 4.000 kişi</td><td className="px-5 py-3 text-center font-bold text-red-700">6.000 - 9.000 kişi</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-bold">150.000 - 300.000</td><td className="px-5 py-3 text-center text-gray-600">3.000 - 5.000 kişi</td><td className="px-5 py-3 text-center font-bold text-green-700">7.000 - 10.000 kişi</td></tr>
                                    <tr><td className="px-5 py-3 font-bold">300.000 ve üstü</td><td className="px-5 py-3 text-center text-gray-600">5.000+ kişi</td><td className="px-5 py-3 text-center font-bold text-green-700">12.000+ kişi</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Neden AYT&apos;deki 1 Net, TYT&apos;den Daha Güçlü?
                        </h2>
                        <p>
                            Yukarıdaki tabloya dikkat ettin mi? Aynı sıralama bandında AYT&apos;de yapacağın 1 net, TYT&apos;de yapacağın 1 netin neredeyse 2.5 - 3 katı daha fazla insanı geride bırakmanı sağlıyor. Bunun nedeni ÖSYM&apos;nin katsayı sistemidir.
                        </p>
                        
                        <p>
                            Lisans (4 yıllık) yerleştirme puanın hesaplanırken TYT&apos;nin ağırlığı %40, AYT&apos;nin ağırlığı %60&apos;tır. Ayrıca TYT&apos;de 120 soru varken, AYT (alanına göre) 80 sorudan oluşur. Soru sayısı daha az, ama genel puana etkisi daha fazla. Yani AYT&apos;deki her bir sorunun ham puan değeri TYT&apos;dekinden çok daha yüksektir.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-6">
                            <h3 className="font-bold text-blue-900 mb-2">Somut Örnek:</h3>
                            <p className="text-sm text-blue-800">
                                SAY 80.000 bandında olan iki öğrenci düşün. A öğrencisi TYT&apos;de fazladan 1 Biyoloji neti yapıyor. B öğrencisi ise AYT&apos;de fazladan 1 Biyoloji neti yapıyor. Sınav açıklandığında B öğrencisi, A öğrencisinin kabaca 4-5 bin kişi önüne geçer. AYT affetmez, AYT kurtarır.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Zor Soru Daha Mı Çok Kişi Atar? (Standart Sapma Efsanesi)
                        </h2>
                        <p>
                            Bunu önceki <Link href="/blog/yks-net-hesaplama-nasil-yapilir" className="text-blue-600 hover:underline">net hesaplama yazımızda</Link> da uzun uzun anlattım ama yineleyeyim: &quot;Çok zor bir soruyu yaparsam, onu kimse yapamadığı için beni 10 bin kişi atar&quot; düşüncesi yanlıştır.
                        </p>
                        <p>
                            Standart sapma soru bazında değil, test bazındadır. Yani AYT Matematik testindeki o aşırı zor türev sorusunu çözmenle, çok kolay olan karmaşık sayı sorusunu çözmen sana <strong>aynı puanı</strong> verir. Puanın aynı olduğu için seni atacağı kişi sayısı da aynıdır. 
                        </p>
                        <p>
                            Bu yüzden sınav esnasında ego yapıp zor soruyla 5 dakika inatlaşma. Onun yerine arkadaki 3 tane kolay-orta soruyu çözersen, 1 net yerine 3 net yapmış olursun ki bu da seni o zor soruyu çözen inatçı öğrencinin fersah fersah önüne atar.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Peki Bu Bilgiyle Ne Yapacağız?
                        </h2>
                        <p>
                            &quot;Tamam anladım, 1 net önemliymiş&quot; deyip geçme. Bunu pratiğe dök. Eğer 50-150 bin bandındaysan, senin kurtarıcın &quot;çantada keklik&quot; dediğimiz, çalışıldığında kesin yapılan konulardır.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>TYT Felsefe/Din: Formül yok, ezber az. Sadece kavramları (determinizm, teoteizm vs.) öğrenip 2 net cebine koyabilirsin.</li>
                            <li>TYT Kimya (Doğa ve Kimya, Madde): Çok temel düzey sorulur, 2 gün çalışıp 2 net artırırsın. Bu sana 7-8 bin kişi kazandırır.</li>
                        </ul>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">1 Netin Etkisini Gözünle Gör</h3>
                            <p className="text-blue-100 mb-6">
                                Hesaplama aracımıza gir. Önce şu anki netlerini yazıp sıralamanı gör. Sonra sadece AYT Matematik netini 1 tane artır ve sıralamanın ne kadar sıçradığını kendi gözlerinle test et.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Etkiyi Test Et →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
