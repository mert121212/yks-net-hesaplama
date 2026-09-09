import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'TYT\'de Kesin Çıkan Konular 2027 | Nokta Atışı Çalışma Programı',
    description: 'TYT Matematik, Türkçe, Fizik, Kimya, Biyoloji ve Tarihte her sene istisnasız sorulan, en çok net getiren kesin çıkan konular listesi 2027.',
    keywords: 'tyt kesin çıkan konular, tyt en çok çıkan konular, tyt matematik çıkan konular, tyt türkçe banko konular, tyt 2027',
    alternates: { canonical: 'https://yksnethesapla.com/blog/tyt-kesin-cikan-konular' },
    openGraph: {
        title: 'TYT\'de Her Sene Banko Çıkan Konular',
        description: 'Vakti az olanlar ve netini hızlıca artırmak isteyenler için nokta atışı TYT konuları.',
        type: 'article',
        publishedTime: '2026-02-11',
        modifiedTime: '2026-02-14',
        url: 'https://yksnethesapla.com/blog/tyt-kesin-cikan-konular',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'TYT Kesin Çıkan Konular 2027'
            }
        ],
    },
}

export default function TYTKesinCikanKonular() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="TYT'de Zaman Kazanmanın Sırrı: Kesin Çıkacak Altın Konular"
                    description="TYT Matematik, Türkçe, Fizik, Kimya, Biyoloji ve Tarihte her sene istisnasız sorulan, en çok net getiren kesin çıkan konular listesi 2027."
                    datePublished="2026-02-11"
                    dateModified="2026-02-14"
                    url="https://yksnethesapla.com/blog/tyt-kesin-cikan-konular"
                    keywords={['tyt kesin çıkan konular', 'tyt en çok çıkan konular', 'tyt matematik çıkan konular', 'tyt türkçe banko konular', 'tyt 2027']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">TYT Kesin Çıkan Konular</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Özel Analiz</span>
                            <time className="text-gray-600" dateTime="2026-02-11">11 Şubat 2026</time>
                            <span className="text-gray-600">• 12 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Vakti Daralan Adaylara Hayat Kurtaran Reçete: ÖSYM&apos;nin Asla Vazgeçemediği TYT Konuları
                        </h1>
                        <p className="text-xl text-gray-600">
                            Müfredatta 80 küsur konu var ama ÖSYM soru havuzunun yarısından fazlasını her sene aynı 25-30 başlıktan doldurur. Sınava 3-4 ay kala netlerinizi roket gibi fırlatacak avcı stratejisi.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Yıllardır sınav sektöründe çalışan biri olarak size açık açık söyleyeyim: Sınava hazırlanan öğrencilerin en az yüzde 70&apos;i enerjisinin büyük kısmını ÖSYM&apos;nin son 10 yılda neredeyse hiç soru sormadığı konulara gömerek heba eder. Kalın konu anlatım kitabını açar, birinci sayfadan başlar, son sayfaya doğru koşar. Çünkü vicdan rahatlığı ister; &quot;Ben her şeyi gördüm&quot; demek ister.
                        </p>

                        <p>
                            Ama gerçek şudur: ÖSYM&apos;nin soru hazırlama komisyonu alışkanlık canavarıdır. TYT&apos;de yıldan yıla değişen soru tipleri olsa da omurga konuları taş gibi sabittir. Sınava kısa süre kaldıysa ve netleriniz hâlâ 45-55 bandında sürünüyorsa, yapmanız gereken şey kitabı kapatıp şu aşağıdaki altın konulara odaklanmaktır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Türkçe: 40 Sorunun 30&apos;unu Getiren Üç Sütun
                        </h2>
                        <p>
                            Türkçe testinde 40 soru vardır ve bunların ezici çoğunluğu dil bilgisi kurallarını ezberlemenizi değil, okuduğunuz metni süzme kapasitenizi yoklar.
                        </p>
                        <p>
                            <strong>Paragrafta Ana Düşünce ve Yardımcı Düşünceler:</strong> Son 7 yılda istisnasız her sınavda 12 ile 14 arası soru bu başlıktan geldi. Paragrafın ilk cümlesinde ya da son cümlesinde gizlenen ana fikri bulmak, destekleyici ifadeleri ayıklamak ve yazarın tavrını sezmek... Bunlar için soru bankası değil, her gece 20 tane ALES ya da KPSS tarzı paragraf sorusu çözmek gerekir. Çünkü bu soruların hızı ancak günlük pratikle kazanılır.
                        </p>
                        <p>
                            <strong>Sözcükte ve Cümlede Anlam:</strong> Her sınavda 6 ile 8 arasında soruyla karşılaşırsınız. Altı çizili sözün cümleye kattığı anlamı bulma, boşluk doldurma ve deyim-atasözü yorumlama soruları bu gruptan gelir. Mantık yürütmeye dayalı sorulardır; ezbere ihtiyaç duymadan çözülebilir.
                        </p>
                        <p>
                            <strong>Noktalama ve Yazım Kuralları:</strong> Dil bilgisi bölümünün en kârlı 4 sorusu burasıdır. Virgülün nerelerde kullanılamayacağını, &quot;ki&quot; ve &quot;de&quot; bağlacının bitişik mi ayrı mı yazılacağını ve büyük harf kurallarını öğrenmek tek bir akşam sürer; getirisi ise sınav boyunca 4 garantili doğrudur.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Matematik: 40 Sorudan 20&apos;sini Avlayacak Üç Konu Ailesi
                        </h2>
                        <p>
                            Matematik kelimesini duyunca midesi kramp atan öğrencilere müjde: TYT Matematikte 40 sorunun yaklaşık yarısı aslında sadece 3 ana konu şemsiyesinin altında toplanır.
                        </p>
                        <p>
                            <strong>Temel Kavramlar ve Sayı Basamakları:</strong> ÖSYM her sene tek-çift sayı mantığı, ardışık sayılar ve EBOB-EKOK&apos;tan en az 4-5 soru sorar. Bu soruların büyük kısmı işlem değil, mantık sorusudur; harfli ifade verilir ve siz özelliklerinden yola çıkarak çıkarırsınız. Kuralları bir kez çözen öğrenci bunları asla kaçırmaz.
                        </p>
                        <p>
                            <strong>Problemler (Sayı, Kesir, Yüzde, Hız, Yaş):</strong> Tam 10 ile 13 arası soru! Matematiğin neredeyse üçte biri tek bir başlık altında toplanır. Günde en az 20 yeni nesil problem çözmeyen bir adayın TYT Matematikten 20 netin üstüne çıkması fiziksel olarak mümkün değildir. Problem çözme hızınız ancak günlük tekrarla gelişir; hafta sonlarına bırakırsanız o kas asla güçlenmez.
                        </p>
                        <p>
                            <strong>Üslü ve Köklü İfadeler:</strong> Kuralları belldir, şıkları standarttır, genelde bir kutu veya tablo verip içine sayı yerleştirmenizi isterler. Biraz pratikle 2-3 soru kolaylıkla alınır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Fen Bilimleri: Sayısalcı Olmasanız Bile Altın Tepside 9 Net
                        </h2>
                        <p>
                            Eşit Ağırlık ve Sözel öğrencileri bu bölümü okurken lütfen dikkatinizi verin; çünkü burada anlatacağım konular 9. sınıf düzeyinde ve saf ezberdir. Fen formülü çözmeniz gerekmez; sadece kavramları bilmeniz yeterlidir.
                        </p>
                        <p>
                            <strong>Biyoloji - Hücre ve Canlıların Ortak Özellikleri:</strong> Her sene 2 tane banko soru gelir. Mitoz ile Mayozu karşılaştıran basit bir tablo hazırlayın, hücre organellerinin görevlerini bir post-it&apos;e yazıp masanıza yapıştırın. Sabah kahvaltısında her gün göz gezdirin; 2 net cebinizde.
                        </p>
                        <p>
                            <strong>Kimya - Madde Özellikleri ve Periyodik Tablo:</strong> Fiziksel ve kimyasal değişim ayrımı, atom modelleri, periyodik tablodaki eğilimler (elektronegatiflik, atom çapı). Bir hafta akşamları 30 dakikalık okumalarla bu netler garanti edilir.
                        </p>
                        <p>
                            <strong>Fizik - Optik ve Isı-Sıcaklık:</strong> TYT Fizikte formül sormazlar; kavram yanılgılarınızı yoklarlar. Isı ile sıcaklığın farkını, yansıma kanunlarını ve günlük hayattaki optik olayları (gökkuşağı oluşumu, aynalarda görüntü) kavrayan öğrenci bu 2-3 soruyu tertemiz alır.
                        </p>

                        <div className="bg-slate-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
                            <h3 className="font-bold text-slate-900 mb-2">Peki Diğer Konulara Hiç Mi Bakılmaz?</h3>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                Hedefiniz ilk 10.000 ise elbette müfredatın tamamına hakim olmanız gerekir. Ancak sıralamanız 80 bin ile 200 bin arasında geziniyorsa ve sınava birkaç ay kaldıysa, önceliğiniz yukarıdaki listeyi eksiksiz tamamlamak olmalıdır. Bu konulardan soru kaçırmayacak düzeye geldikten sonra, kalan vakitinizle ince detay konulara geçebilirsiniz.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Banko Listeyi Tamamladığınızda Kaç Net Yaparsınız?</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                Yukarıdaki konuları sağlam tuttuğunuzda elde edeceğiniz tahmini 55-65 neti hesaplama aracımıza girin ve Türkiye genelinde hangi sıralamaya tekabül ettiğini görün.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Tahmini Sıralamanızı Görün →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Rehberler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-net-artirma-taktikleri" className="p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                                    <p className="font-semibold text-emerald-900">TYT Net Artırma Taktikleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">60-70 bandında sıkışanlar için plato kırma yöntemleri.</p>
                                </Link>
                                <Link href="/blog/tyt-matematik-konulari" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">TYT Matematik Konuları Rehberi →</p>
                                    <p className="text-xs text-gray-600 mt-1">40 sorunun konu konu dağılımı ve çalışma öncelikleri.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
