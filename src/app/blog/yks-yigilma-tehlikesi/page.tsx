import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import YigilmaChart from '@/components/YigilmaChart'

export const metadata: Metadata = {
    title: 'YKS\'de Yığılma Nedir? Orta Sıralamalarda Yığılma Tehlikesi 2027',
    description: 'YKS yığılma nedir, neden olur? 50.000 ile 150.000 sıralama bandındaki yığılma tehlikesi ve bu yığılmadan kurtulma taktikleri.',
    keywords: 'yks yığılma nedir, yığılma bandı, tyt yığılma, ayt yığılma, yks sıralama yığılması 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-yigilma-tehlikesi' },
    openGraph: {
        title: 'YKS Yığılma Tehlikesi: Neden Puanın İyi Ama Sıralaman Kötü Geliyor?',
        description: 'Sınavın kolay olduğu yıllarda ortaya çıkan yığılma kabusu ve bundan kurtulmanın yolları.',
        type: 'article',
        publishedTime: '2026-02-07',
        modifiedTime: '2026-02-10',
        url: 'https://yksnethesapla.com/blog/yks-yigilma-tehlikesi',
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

export default function YKSYigilmaTehlikesi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS'de Yığılma Tehlikesi (2027): Standart Sapma ve Sıralama Analizi"
                    description="YKS yığılma nedir, neden olur? 50.000 ile 150.000 sıralama bandındaki yığılma tehlikesi ve bu yığılmadan kurtulma taktikleri."
                    datePublished="2026-02-07"
                    dateModified="2026-02-10"
                    url="https://yksnethesapla.com/blog/yks-yigilma-tehlikesi"
                    keywords={['yks yığılma nedir', 'yığılma bandı', 'tyt yığılma', 'ayt yığılma', 'yks sıralama yığılması 2027']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Yığılma Tehlikesi</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Kritik Analiz</span>
                            <time className="text-gray-600" dateTime="2026-02-07">7 Şubat 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                            Sınav Kolay Gelince Neden Sevinmemelisin? (O Meşhur Yığılma Tuzağı)
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Kapıdan çıkarken herkes gülüyordu, &quot;Bu sene sorular çerezdi&quot; havası vardı. Ta ki o temmuz sabahı ÖSYM sonuç ekranındaki sıralamayı görene kadar...
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-800 space-y-6 mt-8 leading-relaxed">
                        <p className="text-lg">
                            Şimdi gözlerini kapat ve şu sahneyi bir hayal et. Sınav salonundan çıkmışsın, bahçede bekleyen ailen heyecanla sana bakıyor. Telefonu eline alıp arkadaş grubuna yazıyorsun: <em>&quot;Beyler matematik su gibi aktı, Türkçe desen çocuk oyuncağı, en az 85 net cepte!&quot;</em> Masalar kuruluyor, kebaplar söyleniyor, herkes senin tıp veya iyi bir mühendislik kazanacağından emin.
                        </p>
                        
                        <p>
                            Sonra bir sabah saat 07:00&apos;de ÖSYM AİS ekranı açılıyor.
                        </p>

                        <p>
                            Gözlerini ovuşturup ekrana bakıyorsun. Puan kısmında tam beklediğin gibi 415 yazıyor. Yüzünde gururlu bir tebessüm beliriyor ama hemen alt satıra, başarı sırasına gözün kaydığı an kanın donuyor: <strong>118.420.</strong>
                        </p>

                        <p>
                            Nasıl yani? Bir önceki sene aynı 415 puanla 55 bininci olan çocukların gittiği üniversiteler nerede? Senin hayallerin nerede? İşte tam bu noktada, yıllardır rehberlik masasında ağlayan yüzlerce öğrencimin feryadıyla karşılaşıyorsun: <em>&quot;Hocam puanım yetiyor ama sıralamam yetmiyor, bu nasıl adalet?&quot;</em>
                        </p>

                        <p>
                            Hoş geldin YKS&apos;nin en acımasız kara deliğine: <strong>Yığılma.</strong>
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
                            İyi de Bu Yığılma Dedikleri Şey Neden Patlıyor?
                        </h2>

                        <p>
                            Mesele aslında çok basit bir havuz problemi gibi. Sınava giren üç milyon insan var. ÖSYM gidip soruları zor sorduğunda —hani şu herkesin arkasından beddua ettiği 2021 YKS gibi— ne oluyor biliyor musun? Çalışanla çalışmayan bıçak gibi ikiye ayrılıyor. 25 matematik yapan zirveye uçuyor, 10 yapan ortada kalıyor, yapamayan dibe çöküyor. Herkes kendi ligine oturuyor.
                        </p>

                        <p>
                            Ama ÖSYM kalkıp da 2020 ya da 2022&apos;deki gibi &quot;Aman bu sene çocuklar üzülmesin, soruları tatlı soralım&quot; dediği an kıyamet kopuyor işte. 
                        </p>

                        <p>
                            Neden mi? Çünkü birazcık ders çalışan ortalama bir öğrenci bile 30 matematik netine ulaşıyor. E ilk 10 bine oynayan çocuk da 35 yapıyor. Ne oldu şimdi? 500 bin adayın netleri birbirine yapıştı. Virgülden sonraki küsuratlarla, hani şu kimsenin umursamadığı 0.1 puanlarla kırk bin kişi aynı daracık koridora sıkışıyor. Bir net fazla yapan on bin kişiyi birden solluyor, yarım neti eksik kalan ise kendini uçurumdan yuvarlanırken buluyor.
                        </p>

                        <YigilmaChart />

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
                            En Çok Can Nerede Yanıyor? (Kritik 50k - 150k Çukuru)
                        </h2>

                        <p>
                            Şunu kafana kazı: Yığılma sınavın en tepesinde (ilk 5 binde) olmaz. Oradaki adam zaten fulle yakın çekmiş, onun yeri sağlam. En dipte de olmaz, orası da umursamıyor. Bütün kavga, bütün dram tam olarak <strong>50 bin ile 150 bin arasındaki o bataklıkta</strong> yaşanıyor.
                        </p>

                        <p>
                            Burası Türkiye&apos;nin en çok çalışan, dershaneye giden, özel ders alan ama sınavda tam kopuşu yaşayamayan devasa öğrenci ordusunun toplandığı yer. O yüzden sınav kolay gelmişse ve sen 80 netle çıkıp seviniyorsan, sevinme. Yanındaki çocuk da 81 yaptı çünkü.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
                            Peki Bu Çukurdan Nasıl Sağ Çıkacaksın?
                        </h2>

                        <p>
                            Sınavın kolay mı zor mu geleceğini kimse bilemez. Sabah kapı açılır, kitapçığı önünde görürsün. Ama o yığılmanın seni yutmasını engellemenin iki tane sağlam zırhı var elimizde.
                        </p>

                        <p>
                            Birincisi, şu an eğer lise sıralarındaysan hayatını kurtaracak olan şey: <strong>Diploma notun.</strong> Bak, sınav kolay geldiğinde herkes benzer netleri cebine koyuyor ya hani? ÖSYM ne yapacak o zaman bu elli bin adayı? Mecburen okul notlarına bakacak. Açıyor e-Okul&apos;u; senin o lise 1&apos;de, lise 2&apos;de &quot;Aman okul sınavından kime ne&quot; demeyip kaptığın 95 ortalamayı sisteme bir vuruyor... Ham puanda seninle kafa kafaya gelen ama lisede yatıp 70 ortalama getiren o çocuğun üzerinden dozer gibi geçiyorsun. Tek kuruş masrafsız, sıfır riskle yirmi bin kişiyi arkana alıyorsun.
                        </p>

                        <p>
                            İkincisi ise tamamen psikolojik bir hamle: <strong>Sürünün kaçtığı tarafa değil, tam tersine koşmak.</strong>
                        </p>

                        <p>
                            Nasıl yani? Şöyle anlatayım. Eşit ağırlıkçı mısın sen? Git bak sınıfa, rakiplerinin yüzde doksanı matematikten ölümüne tırsıyor. Sabahtan akşama kadar divan edebiyatı ezberliyorlar. Sen de ezberle edebiyatı, o cepte dursun. Ama senin asıl farkı açacağın yer AYT Matematik. O kalabalığın kaçtığı türev integral sorularından kapacağın ekstra dört net, yığılma falan dinlemez, seni doğrudan 20 binin içine fırlatır.
                        </p>

                        <p>
                            Sayısalcıysan da tam tersi geçerli işte. Sabahtan akşama kadar fizik kimya çözüp Türkçe dil bilgisini küçümseyen binlerce rakibin var etrafında. Git o dil bilgisini yut, TYT Sosyalden o felsefe ve din sorularını cebe indir. Herkesin yaptığı kolay soruyu sen de yapacaksın zaten; mesele milletin burun kıvırdığı o 4-5 tane &quot;sürpriz&quot; neti heybene atabilmekte.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-3">
                            Denemede Yığılmayı Yakalamanın Pratik Yolu
                        </h2>

                        <p>
                            Kendini kandırmayı bırakmanın zamanı geldi. Bir yayının denemesine giriyorsun, 85 net yapıp Türkiye genelinde 35 bininci çıkıyorsun. Havandan geçilmiyor. Bir ay sonra başka bir yayının denemesine giriyorsun, yine 85 net yapıyorsun ama bu sefer sonuç belgesinde 75 bininci yazıyor.
                        </p>

                        <p>
                            Hemen bahaneyi buluyorsun: <em>&quot;Aman canım netim düşmemiş ki, sınav zordu herhalde.&quot;</em>
                        </p>

                        <p>
                            Hayır güzel kardeşim, tam tersi! O ikinci sınav kolaydı ve sen farkında olmadan yığılmanın göbeğine çakıldın. Demek ki o ayarda bir sınavda senin 85 değil, en az 94 net çıkarman gerekiyordu. O yüzden deneme çözerken puana veya nete aşık olmayı bırak; yüzdelik dilimine ve arkanda kaç kişi bıraktığına bak.
                        </p>

                        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-3xl p-8 my-10 text-center text-white shadow-xl">
                            <h3 className="text-2xl font-extrabold mb-2">Netlerin Yığılmayı Delip Geçiyor Mu?</h3>
                            <p className="text-blue-100 mb-6 text-sm max-w-xl mx-auto">
                                Bizim hesaplama motorumuz, sadece ham puanı değil, geçmiş senelerin yığılma eğrilerini de hesaba katarak konuşur. Gel gör gerçek resmini.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-900 px-8 py-3.5 rounded-xl font-black hover:bg-blue-50 transition-all shadow-md hover:scale-105">
                                Gerçek Sıralamanı Simüle Et →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
