import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import QuickNetSimulator from '@/components/QuickNetSimulator'

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
        modifiedTime: '2026-02-16',
        url: 'https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Net Hesaplama Blog'
            }
        ],
    },
}

export default function YKSBirNetKacKisiAtar() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS'de 1 Net Kaç Bin Kişi Atar? (Yığılma ve Standart Sapma Etkisi)"
                    description="YKS (TYT-AYT) sınavında 1 netin sıralamaya etkisi. Yığılma noktalarında 1 net kaç kişiyi geride bırakır? SAY, EA, SÖZ 2027 analiz."
                    datePublished="2026-02-13"
                    dateModified="2026-02-16"
                    url="https://yksnethesapla.com/blog/yks-1-net-kac-kisi-atar"
                    keywords={['1 net kaç kişi atar', 'yks 1 netin etkisi', 'tyt 1 net kaç kişi atar', 'ayt 1 net kaç kişi atar', 'yks yığılma', 'standart sapma yks']}
                />
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
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">İstatistik & Gerçekler</span>
                            <time className="text-gray-600" dateTime="2026-02-13">13 Şubat 2026</time>
                            <span className="text-gray-600">• 10 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                            &quot;Aman Bir Sorudan Ne Çıkar?&quot; Deyip Hayatını Yakanların Hikayesi
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Sınav anında o son paragrafı okumaya üşenip boş geçtiğinde aslında arkana kaç bin kişinin doluştuğunu bilsen, o kağıdı gözünü kırpmadan çözmeye devam ederdin. Rakamlar yalan söylemez.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-800 space-y-6 mt-8 leading-relaxed">
                        <p className="text-lg">
                            Dershanede deneme biter bitmez koridorda hep aynı muhabbet döner: <em>&quot;Kanka fizikte o iki soruyu yapamadım boş verdim ama neyse fenden bir şekilde toparlarız.&quot;</em> Ya da çocuğun biri çıkar, <em>&quot;Tarihte o padişahı hatırlayamadım salladım tutmadı, alt tarafı 1.25 net gitti ne büyütüyorsunuz&quot;</em> der.
                        </p>
                        
                        <p>
                            Alt tarafı 1.25 net mi?
                        </p>

                        <p>
                            Ciddi misin sen? Bak sana çok net bir şey anlatacağım. Temmuzda o sonuç belgesi ekranına baktığında, virgüllerle birbirinden ayrılan, aynı puanı almış ama aralarında koca bir stadyum dolusu insan olan binlerce adayı görünce ne demek istediğimi çok acı bir şekilde anlıyorsun. Tıp fakültesini bir soruyla kaçırıp diş hekimliğine gidenlerin ya da hayalindeki hukuk fakültesini kıl payı kaybedenlerin tamamı, işte sınav salonunda o &quot;Aman boşver be&quot; deyip geçtikleri tek bir soru yüzünden bu kaderi yaşıyor.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
                            Peki Sahiden 1 Net Kaç Kişi Atar?
                        </h2>

                        <p>
                            Bunun tek bir cevabı yok. İnternette sağda solda dolaşan &quot;Bir net adamı beş bin kişi fırlatır&quot; lafları ezbercilikten başka bir şey değil. Çünkü nerede durduğuna göre o tek bir netin gücü yerle bir de edebilir, seni göklere de çıkarabilir.
                        </p>

                        <p>
                            Şöyle düşün: Türkiye birincisi ile ikincisi arasında bazen dört-beş puan oynuyor. Yani sen ilk beş yüzün içindeysen, yaptığın bir tane ekstra net seni taş çatlasın yirmi otuz kişi öne atar. Zaten oradaki herkes canavar gibi, farklar milimetrik.
                        </p>

                        <p>
                            Ama gel gelelim o meşhur yetmiş bin, seksen bin bandına...
                        </p>

                        <p>
                            Orası tam bir mahşer meydanı. İğne atsan yere düşmüyor. Milyonluk aday havuzunun en sıkışık, nefes alınmayan boğazı orası. İşte tam orada yapacağın tek bir AYT neti, inan bana seni bir anda sekiz bin, bazen on bin kişinin önüne mancınık gibi fırlatır. Bir net diyorum bak. Oturup çözmeye üşendiğin o tek bir trigonometri sorusu, seni bir şehirden başka bir şehre, istemediğin bir taşra fakültesinden büyükşehirdeki köklü bir üniversiteye taşımaya yeter de artar bile.
                        </p>

                        <QuickNetSimulator />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
                            Sıralama Dilimlerine Göre Tablo Ne Diyor?
                        </h2>

                        <p>
                            Son üç senenin ÖSYM yığınsal dağılımlarını tek tek inceledik. Çıkan tablo o kadar net ki: İlk on bindeysen, TYT&apos;deki fazladan bir net seni üç yüz ila beş yüz kişi taşırken, AYT&apos;deki netin gücü bin kişiyi buluyor. On bin ile elli bin arasına indiğinde rekabet daha da hırçınlaşıyor; orada tek bir net üç bin kişiyi bir anda ezip geçiyor. 
                        </p>

                        <p>
                            Ellibin ile yüz elli bin bandına geldiğimizde ise az önce bahsettiğim o devasa yığılma patlıyor. Burada bırak tam bir neti, yapacağın 0.75 netlik bir artış bile listeyi darmadağın ediyor. Yüz elli binden gerideysen zaten kalabalık öyle bir dağılıyor ki, ekstra netler adeta turbo motor etkisi yaratıyor.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
                            Neden AYT Neti TYT&apos;yi Üçe Katlar?
                        </h2>

                        <p>
                            Bunu hala bilmeyen lise son öğrencileri var maalesef. Diyor ki: <em>&quot;Hocam TYT&apos;den üç net artırdım.&quot;</em> Güzel, eline sağlık. Ama AYT&apos;den artıracağın o tek bir net var ya... TYT&apos;deki üç nete bedel neredeyse.
                        </p>

                        <p>
                            Sebebi çok açık: Lisans yerleştirme puanının yüzde altmışı doğrudan AYT&apos;den geliyor. Üstüne üstlük TYT&apos;de 120 soru varken, AYT&apos;de alanına göre sadece 80 soru çözüyorsun. Soru sayısı yarı yarıya az ama puan ağırlığı yüzde elli daha fazla! Yani AYT&apos;deki her bir soru, ham puan cetvelinde tam bir altın külçesi değerinde. İki öğrenci düşünelim; biri TYT feninden fazladan bir net çıkarmış olsun, diğeri ise AYT biyolojisinden bir net alsın. Sonuç belgesi geldiğinde AYT&apos;ci olan arkadaş diğeriyle arasına en az dört bin kişilik bir set çeker. AYT affetmez ama çalışan adamı da asla yarı yolda bırakmaz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
                            Zor Soru Efsanesini Kafandan Çıkar
                        </h2>

                        <p>
                            En çok duyduğum diğer bir safsata: <em>&quot;Hocam şu olimpiyat tarzı aşırı zor türev sorusunu yaparsam kimse çözemediği için bana deli gibi puan gelir değil mi?&quot;</em>
                        </p>

                        <p>
                            Gelmez güzel kardeşim, gelmez. ÖSYM&apos;nin standart sapma sistemi soru bazında işlemez, test bazında işler. Yani o sayfayı kaplayan, beynini yakan en zor matematik sorusunun ham puan değeri neyse; testin ilk sayfasındaki o iki satırlık üslü sayı sorusunun puan değeri de tıpatıp aynıdır. Zor soruyu çözdün diye arkana bando takımı takıp sana fazladan beş bin kişi vermiyorlar.
                        </p>

                        <p>
                            Bu ne demek biliyor musun? Sınavda bir soruyla inatlaşıp beş dakikanı heba etmek düpedüz intihardır. Bırak o soru orada kalsın. Git arkadaki iki tane kolay soruyu işaretle; hem iki katı puanı cebe indir hem de o inat edenlerin binlerce sıra önüne geç.
                        </p>

                        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-3xl p-8 my-10 text-center text-white shadow-xl">
                            <h3 className="text-2xl font-extrabold mb-2">Senin 1 Netin Kaç Kişiyi Ezip Geçiyor?</h3>
                            <p className="text-blue-100 mb-6 text-sm max-w-xl mx-auto">
                                Hemen hesaplayıcımıza gir. Mevcut netlerine sadece +1 AYT neti ekle ve sıralamanın kaç bin basamak yukarı fırladığını canlı canlı gör.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-900 px-8 py-3.5 rounded-xl font-black hover:bg-blue-50 transition-all shadow-md hover:scale-105">
                                1 Netin Gücünü Test Et →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
