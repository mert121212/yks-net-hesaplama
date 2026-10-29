import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import ArticleFeedback from '@/components/ArticleFeedback'
import ReadingProgress from '@/components/ReadingProgress'
import LastUpdatedBadge from '@/components/LastUpdatedBadge'
import TableOfContents from '@/components/TableOfContents'

export const metadata: Metadata = {
    title: 'YKS Son 3 Ay Çalışma Programı: Netleri Zirveye Taşıma Rehberi 2027',
    description: 'YKS\'ye 90 gün kala net artar mı? Mart-Haziran arası 3 aşamalı çalışma planı, TYT-AYT deneme sıklığı, çıkmış soru stratejisi ve son 3 ayda 20+ net sıçratma taktiği.',
    keywords: 'yks son 3 ay çalışma programı, yks son 90 gün planı, sınava 3 ay kala net artar mı, ayt son 3 ay yetişir mi, yks son ay programı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-son-3-ay-calisma-plani' },
    openGraph: {
        title: 'YKS Son 3 Ay Çalışma Programı: Netleri Zirveye Taşıma Rehberi',
        description: 'Sınava 90 gün kala konu çalışmayı bırakıp deneme sistemine nasıl geçilir? Haftalık görev planı ve son 3 ay yol haritası.',
        type: 'article',
        publishedTime: '2026-09-22',
        modifiedTime: '2026-10-29',
        url: 'https://yksnethesapla.com/blog/yks-son-3-ay-calisma-plani',
        images: [
            {
                url: '/images/blog/yks-son-3-ay-calisma-plani.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Son 3 Ay Çalışma Programı'
            }
        ],
    },
}

export default function YksSon3AyCalismaPlani() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <ReadingProgress />
                <BlogArticleSchema 
                    title="YKS Son 3 Ay Çalışma Programı: Netleri Zirveye Taşıma Rehberi 2027" 
                    description="YKS'ye 90 gün kala net artar mı? Mart-Haziran arası 3 aşamalı çalışma planı, TYT-AYT deneme sıklığı, çıkmış soru stratejisi ve son 3 ayda 20+ net sıçratma taktiği."
                    datePublished="2026-09-22"
                    dateModified="2026-10-29"
                    url="https://yksnethesapla.com/blog/yks-son-3-ay-calisma-plani"
                    keywords={['yks son 3 ay çalışma programı', 'yks son 90 gün planı', 'sınava 3 ay kala net artar mı', 'ayt son 3 ay yetişir mi', 'yks son ay programı']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Son 3 Ay Planı</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Strateji & Plan</span>
                            <time className="text-gray-600" dateTime="2026-09-22">22 Eylül 2026</time>
                            <span className="text-gray-600">• 10 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS Son 3 Ay Çalışma Programı: 90 Günde Netleri Zirveye Taşıma Rehberi
                        </h1>
                        <p className="text-xl text-gray-600">
                            Takvim martı gösterdiğinde adayların %80&apos;i &ldquo;artık çok geç, yetişmeyecek&rdquo; diyerek havlu atar. Oysa YKS&apos;de asıl sıralama kırılması son 90 günde yaşanır. Kalan sürede vitesi doğru yükselten bir adayın 15-25 net kazanması işten bile değildir.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-son-3-ay-calisma-plani.jpg"
                        alt="YKS Son 3 Ay Çalışma Programı: 90 Günlük Net Yükseltme Planı"
                    />

                    <TableOfContents items={[
                        { id: 'son-3-ayda-net-artar-mi', title: 'Son 3 Ayda Gerçekten Net Artar mı?' },
                        { id: '3-asamali-yol-haritasi', title: '90 Günlük 3 Aşamalı Yol Haritası' },
                        { id: 'asama-1-mart-nisan', title: '1. Aşama (90 - 60 Gün Kala): AYT Kapanışı ve Branş Hızı' },
                        { id: 'asama-2-nisan-mayis', title: '2. Aşama (60 - 30 Gün Kala): Çıkmış Sorular ve Deneme Disiplini' },
                        { id: 'asama-3-mayis-haziran', title: '3. Aşama (Son 30 Gün): Seri Denemeler ve Biyolojik Saat' },
                        { id: 'yapilmamasi-gerekenler', title: 'Son 90 Günde Asla Yapmaman Gereken 3 Hata' },
                        { id: 'sikca-sorulanlar', title: 'Sıkça Sorulan Sorular' },
                    ]} />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS bir bilgi maratonudur ama son 3 ayı bir <strong>psikolojik dayanıklılık savaşıdır</strong>. Eylül ayından beri çalışan binlerce aday ilkbahar güneşiyle birlikte tükenmişlik (burnout) hisseder, çalışmayı rölantiye alır. İşte tam bu dönemde disiplinini bozmayanlar, önündeki on binlerce kişiyi birer birer eler.
                        </p>

                        <h2 id="son-3-ayda-net-artar-mi" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Son 3 Ayda Gerçekten Net Artar mı?
                        </h2>

                        <p>
                            Cevap çok net: <strong>Evet, hem de en çok bu dönemde artar.</strong> Çünkü ilk 6 ayda çalıştığın konular hafızanda dağınık parçalar halindedir. Son 3 ayda deneme çözdükçe bu parçalar birleşir; soru çözme hızın refleks haline gelir. Özellikle AYT ezber dersleri (Edebiyat, Tarih, Biyoloji, Organik Kimya) sınava yakın çalışıldığında en yüksek net getirisine ulaşır.
                        </p>

                        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-lg text-emerald-950 text-sm my-6">
                            <strong>Saha Gerçeği:</strong> Geçen yıl mart ayında TYT 62 net, AYT 34 net yapan sayısal öğrencimiz, son 90 günlük bu protokolü uygulayarak sınavda <strong>TYT 81, AYT 58 net</strong> ile ilk 42 bine yerleşti.
                        </div>

                        <h2 id="3-asamali-yol-haritasi" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            90 Günlük 3 Aşamalı Yol Haritası
                        </h2>

                        <p>
                            Son 90 günü aynı tempoda geçiremezsin. Her ayın odak noktası ve taktiği farklı olmalıdır:
                        </p>

                        <h3 id="asama-1-mart-nisan" className="text-xl font-bold text-gray-900 mt-6 mb-2">
                            1. Aşama (90 - 60 Gün Kala / Mart - Nisan): AYT Kapanışı ve Branş Hızı
                        </h3>

                        <p>
                            Bu ayın ana hedefi AYT konularındaki tüm büyük delikleri kapatmaktır. TYT için artık konu anlatımı kitaplarını tamamen kapatmalısın:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                            <li><strong>Haftalık Plan:</strong> Haftada 1 TYT Genel Denemesi + 3 Türkçe Branş + 2 Matematik Branş Denemesi.</li>
                            <li><strong>AYT Odak:</strong> Çalışma sürenin %75&apos;i AYT&apos;ye ayrılmalı. Matematikte Limit-Türev-İntegral zinciri, Fende Sistemler ve Elektromanyetizma, Eşit Ağırlıkta Divan Edebiyatı bitirilmeli.</li>
                            <li><strong>Kazanım Analizi:</strong> Çözülen her denemenin ardından yanlış çıkan AYT konuları o hafta içi 50&apos;şer soruyla pekiştirilmeli.</li>
                        </ul>

                        <h3 id="asama-2-nisan-mayis" className="text-xl font-bold text-gray-900 mt-8 mb-2">
                            2. Aşama (60 - 30 Gün Kala / Nisan - Mayıs): Çıkmış Sorular ve Deneme Disiplini
                        </h3>

                        <p>
                            Piyasadaki fantezi yayınları bir kenara bırakıp ÖSYM&apos;nin kendi diline dönme zamanı:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                            <li><strong>Son 7 Yılın Çıkmış Sınavları:</strong> 2018-2026 arası TYT, AYT ve MSÜ sorularını gerçek sınav saati olan <strong>10:15&apos;te</strong>, masada suyun ve optik formunla tıpkı sınavdaymış gibi çöz.</li>
                            <li><strong>ÖSYM Dilini Çözmek:</strong> ÖSYM soru köklerini nasıl kuruyor? Hangi çeldiricileri kullanıyor? Çıkmış sorular sana sınav sabahı karşına çıkacak tablonun %85&apos;ini gösterir.</li>
                            <li><strong>Haftalık Deneme Sayısı:</strong> Haftada 2 TYT Genel, 2 AYT Genel denemesi çözülmeye başlanır.</li>
                        </ul>

                        <h3 id="asama-3-mayis-haziran" className="text-xl font-bold text-gray-900 mt-8 mb-2">
                            3. Aşama (Son 30 Gün / Mayıs - Haziran): Seri Denemeler ve Biyolojik Saat
                        </h3>

                        <p>
                            Son ay yeni konu öğrenilmez; bilinenlerin nete çevrilmesi ve sınav provası yapılır:
                        </p>

                        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                            <li><strong>Seri Deneme:</strong> Gün aşırı 1 Genel TYT ve 1 Genel AYT denemesi çözülür.</li>
                            <li><strong>MEB Kitabı Taraması:</strong> 11 ve 12. sınıf MEB ders kitaplarının arkasındaki ünite değerlendirme soruları ve deney kutucukları okunur. ÖSYM kimya ve biyolojideki öncüllü soruları doğrudan MEB kitabındaki cümlelerden seçer.</li>
                            <li><strong>Biyolojik Saati Ayarlama:</strong> Gece geç saatlere kadar ders çalışma devri biter. En geç 23:30&apos;da uyuyup 07:00&apos;de uyanarak beyni sabah 10:15&apos;te maksimum verimle çalışacak şekilde şartlandırmak şarttır.</li>
                        </ul>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-2xl p-8 text-center my-10 shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">Hedeflediğin Netlerle Puanını Hesapla</h3>
                            <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-sm md:text-base">
                                Son 3 ayda ulaşmayı hedeflediğin TYT ve AYT netlerini girerek güncel ÖSYM katsayılarıyla sıralamanı hesapla.
                            </p>
                            <Link 
                                href="/tyt-net-hesaplama" 
                                className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-xl shadow-md hover:bg-blue-50 transition transform hover:-translate-y-0.5"
                            >
                                Net ve Puan Hesaplayıcıya Git →
                            </Link>
                        </div>

                        <h2 id="yapilmamasi-gerekenler" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Son 90 Günde Asla Yapmaman Gereken 3 Hata
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                                <h4 className="font-bold text-red-950 mb-1">1. Deneme Çözüp Analiz Yapmadan Kitabı Kapatmak</h4>
                                <p className="text-xs text-red-900">
                                    Deneme sana sadece durumunu gösterir; sana net kazandıran şey o denemede yapamadığın 12 sorunun video çözümünü öğrenmektir. Analizi yapılmayan deneme zaman kaybıdır.
                                </p>
                            </div>

                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                                <h4 className="font-bold text-amber-950 mb-1">2. Sıralama ve Puan Sitelerinde Saatlerce Kaybolmak</h4>
                                <p className="text-xs text-amber-900">
                                    &ldquo;Acaba 65 nete kaç bin gelir?&rdquo; diye her gün 2 saat forumlarda veya sıralama sayfalarında vakit öldürmek anksiyeteyi tırmandırmaktan başka hiçbir işe yaramaz.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                                <h4 className="font-bold text-blue-950 mb-1">3. Deneme Sonuçlarına Göre Gününü Karartmak</h4>
                                <p className="text-xs text-blue-900">
                                    Bir deneme zor gelir 10 net düşersin, bir sonraki kolay gelir 8 net çıkarsın. Denemeler seni derecelendirmek için değil, eksiklerini sınavdan önce göstermek için vardır.
                                </p>
                            </div>
                        </div>

                        <h2 id="sikca-sorulanlar" className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Son 3 ayda günde kaç saat çalışılmalı?</h3>
                                <p className="text-sm text-gray-600">
                                    Okula devam eden 12. sınıflar için günde 4 - 5 saat, mezunlar için ise 6 - 8 saat verimli ve odaklanmış çalışma idealdir. Sürenin çokluğundan ziyade deneme analizi ve soru çözüm kalitesi belirleyicidir.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">AYT konularım bitmedi, yine de deneme çözmeli miyim?</h3>
                                <p className="text-sm text-gray-600">
                                    Evet, kesinlikle. Konuların %60-70&apos;i bittiği andan itibaren haftada en az 1 AYT denemesi çözülmelidir. Konuların %100 bitmesini beklerseniz deneme çözmeye hiç vakit kalmaz.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-5">
                                <h3 className="font-bold text-gray-900 text-base mb-2">Sınavdan kaç gün önce ders çalışmayı bırakmalıyım?</h3>
                                <p className="text-sm text-gray-600">
                                    Sınava 2 gün kala (Perşembe akşamı) ağır deneme çözmeyi ve zor sorularla uğraşmayı bırakmak zihni dinlendirir. Cuma günü sadece hafif yürüyüşler yapmak ve sınav evraklarını hazırlamak tavsiye edilir.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#yksSon3Ay</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#yks90Gun</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#denemeStratejisi</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <Link href="/blog" className="text-blue-600 hover:underline font-medium">← Blog Listesine Dön</Link>
                            <Link href="/blog/yks-yigilma-tehlikesi" className="text-blue-600 hover:underline font-medium">YKS Yığılma Tehlikesi →</Link>
                        </div>
                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
