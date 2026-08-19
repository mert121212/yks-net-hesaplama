import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'OBP Nedir, Nasıl Hesaplanır? Kırık OBP Cezası ve Diploma Notu Etkisi',
    description: 'YKS OBP hesaplama rehberi. Lise diploma notunun yerleştirme puanına etkisi, kırık OBP cezası, okul birinciliği kontenjanı hakkında detaylı bilgi.',
    keywords: 'obp nedir, obp nasıl hesaplanır, obp hesaplama, kırık obp, diploma notu yks, okul birinciliği kontenjanı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/obp-hesaplama' },
    openGraph: {
        title: 'OBP Nedir, Nasıl Hesaplanır? Kırık OBP ve Diploma Notu Etkisi',
        description: 'Lise diploma notunun YKS yerleştirme puanına etkisinin detaylı analizi.',
        type: 'article',
        publishedTime: '2026-02-24',
        modifiedTime: '2026-08-19',
        url: 'https://yksnethesapla.com/blog/obp-hesaplama',
    },
}

export default function OBPHesaplamaRehberi() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                    <nav className="mb-8 text-sm text-slate-500 font-medium flex items-center space-x-2">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Ana Sayfa</Link>
                        <span>›</span>
                        <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                        <span>›</span>
                        <span className="text-slate-900">OBP Hesaplama</span>
                    </nav>

                    <header className="mb-10">
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold tracking-wide uppercase">YKS Puanlama</span>
                            <time className="text-slate-500 text-sm font-medium">19 Ağustos 2026</time>
                            <span className="text-slate-400">•</span>
                            <span className="text-slate-500 text-sm font-medium">14 dk okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                            OBP Nedir? Diploma Notunun Sınavdaki Gizli Etkisi
                        </h1>
                        <p className="text-xl text-slate-600 font-medium leading-relaxed">
                            Lisedeyken &quot;ya ne olacak okul sınavlarından, nasıl olsa YKS&apos;de asıl puanı ben yapacağım&quot; diye düşünmüş olabilirsin. Ben de düşünmüştüm. Ama sonra hesabı görünce yüzüm düştü.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg prose-blue max-w-none text-slate-700 mt-8">
                        <p>
                            Geçen sene bir öğrencim vardı, adını söylemeyeyim ama kendisi çok iyi sınava hazırlanmıştı. Dershaneye düzenli gidiyordu, denemelerde SAY ilk 30 bine giriyordu, motivasyonu da tamdı. Sonuçlar açıklandığında baktık ki sıralama beklediğimizin 8 bin altında kalmış. Niye? Diploma notu 62. Aynı netleri yapan ve diploma notu 88 olan başka bir öğrenci ise tam 15 puan daha fazla almıştı yerleştirmede. 15 puan. Yani arkadaş lisede &quot;geçeyim yeter&quot; mantığıyla gittiği için, sınav günü o farkı kapatmak için 5-6 tane ekstra AYT neti yapması gerekiyordu. Yapamadı tabii.
                        </p>

                        <p>
                            Ben bunu anlatınca lise 1 ve lise 2&apos;deki öğrenciler genelde kulak asmıyor. &quot;Hocam abartıyorsun&quot; diyorlar. Abartmıyorum, gelin beraber hesap yapalım ve görün.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            OBP Tam Olarak Ne?
                        </h2>
                        <p>
                            OBP, &quot;Ortaöğretim Başarı Puanı&quot;nın kısaltması. Lise boyunca aldığın tüm derslerin ortalamasından oluşan diploma notunun ÖSYM tarafından işlenmiş hali. Mantık şu: ÖSYM senin 100 üzerinden diploma notunu alıyor, 5 ile çarpıyor (böylece 500 üzerinden bir puana dönüştürüyor), sonra bunu 0.12 katsayısıyla çarparak yerleştirme puanına ekliyor.
                        </p>

                        <p>
                            Karmaşık geldi mi? Aslında kestirme yol çok basit. Diploma notunu 0.6 ile çarp, çıkan sayı senin puanına eklenen miktar.
                        </p>

                        <div className="bg-slate-900 rounded-xl p-6 my-8 text-center shadow-lg not-prose">
                            <p className="text-sm text-slate-400 mb-2 uppercase tracking-wider font-semibold">Pratik Formül</p>
                            <p className="text-2xl font-bold text-white font-mono">
                                Diploma Notu × 0.6 = Puanına Eklenen Miktar
                            </p>
                            <p className="text-sm text-slate-400 mt-3">Diploma notun 85 ise: 85 × 0.6 = 51 puan ekstra alırsın</p>
                        </div>

                        <p>
                            Şimdi bi düşün. Diploma notu 90 olan çocuk sınava girmeden 54 puan cebe koyuyor. Diploma notu 65 olan çocuk ise 39 puan alıyor. Aradaki 15 puanlık fark ne demek biliyor musun? O 15 puan, sınavda ter dökerek çözeceğin yaklaşık 5 tane AYT Matematik sorusuna denk. Yani diploma notu düşük olan öğrenci, sınav sabahı rakibinin birkaç soru gerisinden koşmaya başlıyor. Daha zil çalmadan maç 1-0 geride.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Diploma Notuna Göre Ne Kadar Puan Ekleniyor?
                        </h2>
                        <p>
                            Aşağıdaki tabloyu duvara as. Ciddiyim, yazdır ve masanın üstüne koy. Çünkü bu tablo sana lisedeki her yazılının aslında kaç puan değerinde olduğunu gösteriyor.
                        </p>
                        <div className="bg-slate-50 rounded-xl p-6 my-6 border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-4 text-lg">Hangi Not Kaç Puan Getirir?</h3>
                            <div className="space-y-4">
                                <p className="text-slate-700"><strong>Diploma Notu 100:</strong> Mükemmel senaryo. ÖSYM sana en üst sınır olan 60 tam puanı veriyor.</p>
                                <p className="text-slate-700"><strong>Diploma Notu 90:</strong> Gayet iyi bir ortalama. Puanına tam 54 puan eklenir.</p>
                                <p className="text-slate-700"><strong>Diploma Notu 80:</strong> Fena sayılmaz. Bu ortalama sana 48 puan kazandırır.</p>
                                <p className="text-slate-700"><strong>Diploma Notu 70:</strong> Biraz risk bölgesi diyebiliriz. Sana getirisi 42 puandır.</p>
                                <p className="text-slate-700"><strong>Diploma Notu 60:</strong> İşlerin zorlaştığı yer. Yalnızca 36 puan alabiliyorsun ve rakiplerin seni burada geçmeye başlıyor.</p>
                            </div>
                        </div>

                        <p>
                            Tabloya dikkatli bak. 90 ile 70 arasındaki fark tam 12 puan. 12 puan ne demek? Yığılma bölgesinde bu 12 puan, 20.000 ile 40.000 kişilik sıralama farkı yaratıyor. Bir şehir değişiyor, bir üniversite değişiyor, belki bir hayat değişiyor. Ve sen bu farkı lisede Beden Eğitimi veya Görsel Sanatlar derslerinde bile açabilirdin.
                        </p>

                        <p>
                            Bir anımı paylaşayım. Ben lisedeyken müzik dersine hiç önem vermezdim (hâlâ notam kırmızıydı sanırım). Mezun olunca diploma ortalamam 79 kaldı. O 1 puanlık fark, yani 79 yerine 80 olsaydı, yerleştirme puanımda 0.6 puan daha fazla olacaktı. 0.6 puan az gibi görünür ama benim dönemde bu 0.6 puan tam 800 kişilik sıralama demekti. Retrospektifle bakınca insan üzülüyor tabii.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Kırık OBP Meselesi (Mezunların Kabusu)
                        </h2>
                        <p>
                            Bu kısım çok can yakıyor, hazır ol. Eğer geçen sene YKS&apos;ye girip herhangi bir programa <strong>yerleştiysen</strong> — dur, dikkat et, yerleştiysen diyorum. Tercih verip yerleşmen yeterli, kayıt yaptırmasan da, o programa hiç gitmesen de, hatta açıköğretim bile olsa fark etmez — ÖSYM sana bu sene çok acı bir fatura keser.
                        </p>

                        <p>
                            Ne olur? OBP katsayın 0.12&apos;den <strong>0.06&apos;ya düşer</strong>. Yarıya iniyor. Pratik formülümüz ne oluyordu? Diploma notu × 0.6 yerine diploma notu × 0.3 oluyor.
                        </p>
                        
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-6 not-prose">
                            <h3 className="text-base font-bold text-red-900 uppercase tracking-wider mb-3">
                                Somut Örnek: Bu Ceza Ne Kadar Acıtıyor?
                            </h3>
                            <p className="text-sm text-red-800 leading-relaxed mb-3">
                                Diyelim diploma notun 90. Normal koşullarda 90 × 0.6 = <strong>54 puan</strong> alacaktın.
                            </p>
                            <p className="text-sm text-red-800 leading-relaxed mb-3">
                                Kırık OBP yediysen: 90 × 0.3 = <strong>27 puan</strong> alıyorsun. Aradaki fark <strong>27 puan</strong>.
                            </p>
                            <p className="text-sm text-red-800 leading-relaxed">
                                27 puanın karşılığı? AYT&apos;de yaklaşık <strong>9 tane zor Matematik sorusu</strong>. Yani sen geçen sene bir yere yerleştiğin için, bu sene 9 soru dezavantajla başlıyorsun. Rakiplerin aynı netleri yapsa bile senden 27 puan önde. Bu gerçekten yıkıcı.
                            </p>
                        </div>

                        <p>
                            &quot;Hocam peki ne yaparsam bu cezayı yemem?&quot; diye soranlar için hemen açıklayayım:
                        </p>

                        <ul className="list-disc pl-6 space-y-3 mb-6">
                            <li>Sınava girdin ama <strong>hiç tercih yapmadın</strong> — katsayın kırılmaz, 0.12 kalır.</li>
                            <li>Tercih yaptın ama <strong>hiçbir yere yerleşemedin</strong> (puanın yetmedi) — yine kırılmaz.</li>
                            <li>Yerleştin ama üstünden <strong>2 tam yıl geçti</strong> (2025&apos;te yerleştiysen 2027&apos;de katsayın normale döner) — kırılmaz.</li>
                            <li>Geçen sene yerleştiysen ve bu sene tekrar giriyorsan — <strong>kırılır</strong>, katsayın 0.06 olur.</li>
                        </ul>

                        <p>
                            Bu yüzden her sene şunu söylüyorum: Eğer bu sene sınava girdiysen ve yerleşebileceğin bir yer varsa ama o yere gitmek istemiyorsan, <strong>tercih verme</strong>. &quot;Ya belki giderim&quot; deyip tercih listesine yazıp yerleşirsen, gelecek sene kırık OBP yersin. Ve 27 puan kaybedersin. O 27 puan o kadar ağır ki anlatamam.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Peki Hâlâ Lisedeysen Ne Yapmalısın?
                        </h2>
                        <p>
                            Eğer bu yazıyı lise 1, lise 2 veya lise 3&apos;teyken okuyorsan şanslısın çünkü hâlâ bir şeyleri değiştirebilirsin. Şu an diploma notun 75 ise ve onu 85&apos;e çıkarabilirsen, yerleştirme puanında 6 puan daha fazla alacaksın. 6 puan sıralamada ortalama 8.000-12.000 kişi demek.
                        </p>

                        <p>
                            Diploma notunu yükseltmenin en kolay yolları neler? Ben kendi tecrübemden biliyorum, yazılıya çalışmak sınava çalışmaktan farklıdır. Yazılılarda hocaların beklediği cevap kalıplarını bilmek, ders kitabındaki tanımları ezbere yazmak ve sınıfta aktif olmak notu çok etkiler. Bence en mantıklısı YKS çalışmasının yanında günde 30-40 dakikayı okul derslerine ayırmak. O 30 dakika sana diploma notunda 5-8 puan kazandırabilir, ki bu da sınavda 3-5 puan demek. Bedavadan 3-5 puan. Kim istemez?
                        </p>

                        <p>
                            Ha bir de şunu söyleyeyim: Beden Eğitimi, Görsel Sanatlar, Müzik gibi derslerde 100 almak çok kolay ve bu dersler de diploma ortalamasını etkiliyor. Bunları hafife almayın.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Okul Birinciliği Kontenjanı
                        </h2>
                        <p>
                            Bu çok az kişinin bildiği ama altın değerinde bir hak. Eğer liseden mezun olduğun yıl <strong>okul birincisiysen</strong>, üniversitelerde sana ayrılmış özel bir kontenjan var. Normal sıralamanla giremeyeceğin bölümlere bu kontenjan sayesinde yerleşebilirsin. Mesela okulunun birincisisin, sıralamanla normalde İstanbul Tıp&apos;a giremiyor olabilirsin ama okul birinciliği kontenjanıyla girebilirsin.
                        </p>

                        <p>
                            Ama dikkat: Bu hak <strong>sadece mezun olduğun yıl</strong> geçerli. Seneye mezuna kalırsan bu avantajı kaybediyorsun. Bu yüzden okul birincisiysen ve o yıl sınavın iyi geçtiyse, bu hakkı kullanmayı düşün.
                        </p>

                        <p>
                            Çevremde okul birinciliği kontenjanıyla Cerrahpaşa Tıp&apos;a ve Galatasaray Hukuk&apos;a yerleşen arkadaşlar var. Normal sıralamalarıyla asla giremezlerdi bu bölümlere. Yani lisede çalışmanın karşılığı sadece OBP puanı değil, aynı zamanda bu tür altın fırsatlar.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 border-b pb-2">
                            Diploma Notun Düşükse Panik Yapma Ama Gerçekçi Ol
                        </h2>
                        <p>
                            Geçmişe dönüp yazılıları değiştiremezsin. Ama şunu bilmen lazım: OBP dezavantajını sınavda kapatmak <strong>imkansız değil</strong>. Zor mu? Evet. İmkansız mı? Hayır.
                        </p>

                        <p>
                            Şöyle düşün: Diploma notu 70 olan biri, diploma notu 90 olan birine göre 12 puan geride başlıyor. Bu 12 puanı kapatmak için TYT&apos;de yaklaşık 9 ekstra net veya AYT&apos;de 4 ekstra net yapman gerekiyor. Zor ama yapılabilir. Haftada bir deneme fazla çözersen, konulara biraz daha fazla zaman ayırırsan bu fark kapanır.
                        </p>

                        <p>
                            Ama şunu da söyleyeyim: Diploma notu 90 olan çocuk da boş durmuyor. O da çalışıyor. Yani aslında yarışta geride başlıyorsun ve önündekilerin de koştuğu bir yarış bu. O yüzden daha fazla emek lazım. Bunu kabullen ve ona göre planla.
                        </p>

                        <div className="relative overflow-hidden bg-slate-900 rounded-2xl p-8 my-12 text-center border border-slate-800 shadow-2xl not-prose">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                            <h3 className="text-2xl font-bold mb-4 text-white">OBP&apos;nin Sıralamana Etkisini Gör</h3>
                            <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-sm">
                                Deneme netlerini ve diploma notunu gir, sıralamanın nasıl değiştiğini kendin gör. Diploma notunun her 5 puanlık artışı sıralamanda binlerce kişilik fark yaratıyor.
                            </p>
                            <Link href="/" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl">
                                Hemen Hesapla →
                            </Link>
                        </div>

                        <div className="mt-16 pt-8 border-t border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Bunları da oku, pişman olmazsın</h3>
                            <div className="grid md:grid-cols-2 gap-4 not-prose">
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">1 Net Kaç Bin Kişi Attırır?</h4>
                                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">Yığılma bandında tek bir netin sıralamalara etkisi.</p>
                                </Link>
                                <Link href="/blog/universite-tercih-stratejileri" className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all">
                                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Tercih Listesi Nasıl Kurulur?</h4>
                                    <p className="text-sm text-slate-500 mt-2 line-clamp-2">24 tercihi boşa harcamamanın yolları.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
