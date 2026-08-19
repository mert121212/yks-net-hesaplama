import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS\'de 1 Net Neden Binlerce Kişi Attırır? OBP ve Standart Sapma 2027',
    description: 'YKS\'de 1 net gerçekten önemli mi? OBP sıralamayı nasıl etkiler, standart sapma nedir, okul puanı YKS\'yi nasıl etkiler? Tüm gerçekler bu yazıda.',
    keywords: 'yks 1 net kaç kişi atar, obp sıralamayı nasıl etkiler, okul puanı yks, yks sıralama hesaplama, standart sapma yks',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar' },
    openGraph: {
        title: 'YKS\'de 1 Net Neden Binlerce Kişi Attırır? OBP ve Standart Sapma 2027',
        description: 'OBP sıralamayı nasıl etkiler, standart sapma nedir? YKS\'de 1 netin gerçek değeri.',
        type: 'article',
        publishedTime: '2026-05-02',
        url: 'https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar',
    },
}

export default function YKS1NetKacKisiAtar() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS&apos;de 1 Net Kaç Kişi Attırır?</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Strateji</span>
                            <time className="text-gray-600">2 Mayıs 2026</time>
                            <span className="text-gray-600">• 9 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS&apos;de 1 Net Bile Neden Binlerce Kişi Attırır? (OBP ve Standart Sapma Gerçeği)
                        </h1>
                        <p className="text-xl text-gray-600">
                            "Aman bir net bile çok önemli!" — Bu öğretmen kopyası gerçekten doğru mu, yoksa
                            sadece sizi motive etmek için uydurulmuş bir abartı mı? YKS sisteminde 1 netin
                            ne kadar değerli olduğunu rakamlarla inceleyelim.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 mt-8">
                        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Yığılma Bölgesi Nedir ve Neden Tehlikelidir?</h2>
                        <p className="text-lg leading-relaxed mb-4">
                            Her yıl yaklaşık 3 milyondan fazla adayın girdiği YKS'de, puanlar tüm yelpazeye eşit olarak dağılmaz.
                            Özellikle orta seviyedeki adayların oluşturduğu büyük bir "yığılma bölgesi" vardır. Bu bölge, SAY
                            puan türünde 250.000 ile 50.000 arası, EA puan türünde 300.000 ile 100.000 arası, TYT'de ise
                            1.5 milyon ile 500.000 arasıdır.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Yığılma bölgelerinde aynı puana sahip veya virgülden sonraki küsüratlarla birbirinden ayrılan
                            on binlerce aday bulunur. İşte "1 net binlerce kişi attırır" efsanesi (ki efsane değil gerçektir)
                            tam olarak bu bölgelerde çalışır.
                        </p>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
                            <h3 className="font-bold text-red-900 mb-2">📊 Yığılma Bölgesinde 1 Netin Etkisi</h3>
                            <p className="text-gray-800">
                                Diyelim ki EA puan türünde 315 puan aldınız ve sıralamanız 120.000. Eğer sadece <strong>1 adet AYT Matematik neti</strong> daha
                                fazla yapsaydınız, puanınız yaklaşık 318'e çıkacaktı. 315 ile 318 puan aralığında yığılma o kadar yoğundur ki, bu
                                3 puanlık fark sizi 120.000 sıralamadan anında <strong>105.000 sıralamaya</strong> fırlatabilir. Sadece tek bir
                                soruyu doğru yapmak 15.000 kişiyi elemek demektir!
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Hangi Testteki 1 Net Daha Değerli? (Standart Sapma Gerçeği)</h2>
                        <p className="mb-4">
                            "Her 1 net eşit derecede mi kişi atlatır?" Hayır. ÖSYM'nin puan hesaplama sisteminde testlerin ağırlıkları farklıdır.
                            Ayrıca Türkiye genelinde yapılma ortalaması düşük olan testlerin (standart sapma etkisi) getirisi biraz daha yüksek olabilir.
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Test (1 Net)</th>
                                        <th className="px-5 py-3 text-center font-semibold border-b">Tahmini Puan Getirisi</th>
                                        <th className="px-5 py-3 text-left font-semibold border-b">Sıralamaya Etkisi (Yığılma Bölgesinde)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">TYT (Herhangi Bir Ders)</td><td className="px-5 py-3 text-center font-bold">~ 1.33 Puan</td><td className="px-5 py-3">3.000 - 5.000 Kişi</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">AYT Matematik</td><td className="px-5 py-3 text-center font-bold text-red-600">~ 3.00 Puan</td><td className="px-5 py-3 font-bold text-red-600">10.000 - 15.000 Kişi</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">AYT Fen (Fiz, Kim, Biy)</td><td className="px-5 py-3 text-center font-bold text-orange-600">~ 2.85 Puan</td><td className="px-5 py-3 text-orange-600">8.000 - 12.000 Kişi</td></tr>
                                    <tr className="border-b"><td className="px-5 py-3 font-medium">AYT Edebiyat</td><td className="px-5 py-3 text-center font-bold text-purple-600">~ 3.00 Puan</td><td className="px-5 py-3 text-purple-600">10.000 - 15.000 Kişi</td></tr>
                                    <tr className="border-b bg-gray-50"><td className="px-5 py-3 font-medium">AYT Sosyal</td><td className="px-5 py-3 text-center font-bold text-blue-600">~ 2.80 Puan</td><td className="px-5 py-3 text-blue-600">8.000 - 12.000 Kişi</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-500 mb-8">* Yukarıdaki veriler yığılmanın yoğun olduğu 100 bin - 300 bin bandı için verilmiş yaklaşık değerlerdir. İlk 10.000'de veya 1 Milyon'dan sonra 1 netin atlatacağı kişi sayısı farklıdır.</p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Derece Yapanlar İçin 1 Netin Önemi</h2>
                        <p className="mb-4">
                            "Yığılma bölgesi"nden çıkıp tepelere (İlk 20.000) geldiğimizde, aday sayısı azaldığı için 1 netin atlatacağı kişi
                            sayısı düşer. İlk 5.000 içerisindeyseniz 1 AYT neti sizi 15.000 kişi ileri atamaz (çünkü önünüzde o kadar insan yoktur).
                            Ancak ilk 5.000'de 1 net sizi <strong>1.500 kişi</strong> ileri atar. Bu 1.500 kişi küçük görünse de, tıp fakültesinde
                            Çapa ile Cerrahpaşa arasındaki, mühendislikte Boğaziçi ile İTÜ arasındaki uçurumu belirler!
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">OBP (Okul Puanı) Sıralamayı Nasıl Etkiler?</h2>
                        <p className="mb-4">
                            Okul Başarı Puanı (OBP), YKS sonuçları açıklandığında birçok öğrencinin hayallerini yıkan, bazılarını ise
                            göklerde uçuran en büyük faktördür. OBP, diploma notunuzun 0.6 ile çarpılması (veya 5'e çarpılıp 0.12 ile
                            çarpılması) ile bulunur.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                                <h4 className="font-bold text-blue-900 mb-2">Maksimum ve Minimum OBP Getirisi</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>Diploma notu <strong>100</strong> olan öğrenciye: 60 puan gelir.</li>
                                    <li>Diploma notu <strong>85</strong> olan öğrenciye: 51 puan gelir.</li>
                                    <li>Diploma notu <strong>60</strong> olan öğrenciye: 36 puan gelir.</li>
                                </ul>
                            </div>
                            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                                <h4 className="font-bold text-purple-900 mb-2">Diploma Notları Arasındaki Farkın Puan Karşılığı</h4>
                                <p className="text-sm text-gray-700">
                                    Ahmet'in ortalaması 95 (Getirisi 57 puan). Mehmet'in ortalaması 80 (Getirisi 48 puan). 
                                    Ahmet sınava girmeden Mehmet'e <strong>9 puan fark</strong> atmıştır. Mehmet'in bu farkı kapatması
                                    için fazladan <strong>3 adet AYT Matematik</strong> sorusu veya <strong>7 adet TYT</strong> sorusu 
                                    çözmesi gerekir!
                                </p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Kırık OBP Felaketi</h3>
                        <p className="mb-4">
                            Eğer bir önceki yıl YKS'ye girip tercih yaptıysanız ve bir bölüme <strong>yerleştiyseniz</strong> (kayıt olmasanız bile),
                            bu yılki sınavda OBP katsayınız yarı yarıya (0.06) düşer. Yani 90 diploma notu olan biri normalde 54 puan alacakken,
                            kırık OBP yüzünden 27 puan alır.
                        </p>
                        <p className="mb-4">
                            <strong>27 puan kayıp ne demek?</strong> Yaklaşık 9 AYT netini veya 20 TYT netini çöpe atmak demektir. Kırık OBP ile sınava
                            giren adayların derece yapması matematiksel olarak mucizelere bağlıdır. Bu yüzden tercih yaparken sadece emin olduğunuz
                            yerleri yazın.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Sıralamanızı Simüle Edin</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                1 net fazlasının veya eksiğinin sizi kaç bin geriye attığını canlı olarak test edin!
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Hemen Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Sonuç: "Aman Boşver" Demeyin</h2>
                        <p className="mb-4">
                            "Bu konudan 1 soru çıkıyor çalışmaya değmez" veya "Sınavda 1 soru salladım tutarsa" gibi düşünceler, 
                            Ağustos ayında sonuç belgeleri açıklandığında büyük pişmanlıklara dönüşür. Sınavda boş bıraktığınız 
                            veya dikkat hatasıyla kaçırdığınız o tek bir AYT sorusu, 15.000 adayın gerisinde kalmanıza, dolayısıyla
                            hedeflediğiniz üniversiteye değil, hiç istemediğiniz bir şehre gitmenize neden olabilir.
                        </p>
                        <p className="mb-4">
                            Her denemede, her deneme analizinde, çözemediğiniz o 1 sorunun peşine düşün. O 1 soru, hayatınızı
                            değiştirecek olan sorudur.
                        </p>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Makaleler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/yks-kac-net-kac-puan" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                    <p className="font-semibold text-green-900">Kaç Net Kaç Puan Getirir? →</p>
                                    <p className="text-sm text-gray-600 mt-1">TYT ve AYT Net-Puan dönüşüm tabloları</p>
                                </Link>
                                <Link href="/blog/obp-hesaplama" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">OBP (Okul Puanı) Hesaplama →</p>
                                    <p className="text-sm text-gray-600 mt-1">Diploma notunuzun sıralamaya etkisi</p>
                                </Link>
                                <Link href="/blog/yks-yigilma-tehlikesi" className="p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                                    <p className="font-semibold text-red-900">Yığılma Bölgeleri ve Tehlikeleri →</p>
                                    <p className="text-sm text-gray-600 mt-1">Hangi sıralama aralıklarında yığılma olur?</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}


