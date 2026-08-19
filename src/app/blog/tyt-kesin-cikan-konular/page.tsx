import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

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
        modifiedTime: '2026-08-19',
        url: 'https://yksnethesapla.com/blog/tyt-kesin-cikan-konular',
    },
}

export default function TYTKesinCikanKonular() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
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
                            <time className="text-gray-600">19 Ağustos 2026</time>
                            <span className="text-gray-600">• 12 dk okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Vakti Olmayana Reçete: TYT&apos;de Her Sene Çıkan Banko Konular
                        </h1>
                        <p className="text-xl text-gray-600">
                            9. ve 10. sınıf müfredatındaki 80 ayrı konuya çalışacak vaktin yok mu? Haklısın. ÖSYM de zaten o 80 konunun yarısından hiç soru sormuyor. Gel sana sadece sınavda çıkanları listeleyelim.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Yıllarını sınava hazırlık sektörüne vermiş biri olarak çok net bir şey söyleyeyim: Öğrencilerin %80&apos;i enerjisinin yarısını asla soru çıkmayacak konulara harcayarak heba ediyor. Neden? Çünkü kalın bir kitap alıyorlar ve içini rahatlatmak için 1. sayfadan başlayıp son sayfaya kadar gidiyorlar. Kitapta &quot;Mantık&quot; konusu 40 sayfa anlatıldı diye günlerce Mantık çalışıyor. Halbuki son 10 yılda Mantık&apos;tan 1 veya 2 soru ya çıkmış ya çıkmamış.
                        </p>
                        
                        <p>
                            Eğer sınava 3-4 ay kalmışsa ve senin netlerin hâlâ 40-50 bandında sürünüyorsa, kitabı baştan sona okumayı bırakıp &quot;Avcı Modu&quot;na geçmen lazım. Yani sadece puan getiren avların peşine düşmelisin. İşte sana son 7 yılın ÖSYM analizlerine göre hazırlanmış, her sene <strong>istisnasız</strong> sorulan o banko konular listesi:
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            📘 TYT Türkçe (28+ Net Garanti Listesi)
                        </h2>
                        <p>
                            Türkçe 40 soru. Bunun 25-28 tanesi paragraf ve anlam bilgisinden geliyor. Dil bilgisine aylarını harcamadan önce şu 3 banko konuyu full&apos;lemen lazım:
                        </p>
                        <ul className="list-none pl-0 space-y-4">
                            <li className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <strong className="text-slate-900 block mb-1">1. Paragrafta Ana Düşünce ve Yardımcı Düşünce (12-14 Soru)</strong>
                                <span className="text-sm">En çok soru çıkan yer. Her gün uyumadan önce 20 tane yeni nesil ALES tarzı paragraf çöz. Paragrafı okurken kalemi bırak, sadece önemli sandığın cümlenin altını çiz, her kelimeyi çizme.</span>
                            </li>
                            <li className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <strong className="text-slate-900 block mb-1">2. Sözcükte ve Cümlede Anlam (6-8 Soru)</strong>
                                <span className="text-sm">Altı çizili sözün cümleye kattığı anlam sorusu her sene banko. Boşluk doldurma soruları banko. Bunlar mantıkla çözülür.</span>
                            </li>
                            <li className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <strong className="text-slate-900 block mb-1">3. Noktalama İşaretleri ve Yazım Kuralları (4 Soru)</strong>
                                <span className="text-sm">Dil bilgisinde en kârlı yer burasıdır. Virgülün nerelerde kullanılamayacağını öğren, Ki / De yazımını öğren, Büyük harfleri öğren = cebinde 4 net.</span>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            📗 TYT Matematik (15+ Net Garanti Listesi)
                        </h2>
                        <p>
                            Matematik görünce midesine ağrı giren tayfa, toplanın. Biliyorum, fonksiyonlar, permütasyonlar falan seni yoruyor. Onları bir kenara bırak. Şu 3 konu başlığını adam gibi çalışırsan 15 neti çok rahat geçersin:
                        </p>
                        <ul className="list-none pl-0 space-y-4">
                            <li className="bg-slate-50 p-4 rounded-lg border-l-4 border-green-500">
                                <strong className="text-slate-900 block mb-1">1. Temel Kavramlar ve Sayı Basamakları (4-5 Soru)</strong>
                                <span className="text-sm">Tek-çift sayı mantığı (her sene banko sorusu var, mutlaka harfli ifade verirler), ardışık sayılar, EBOB-EKOK pratikleri. Bu konu matematiğin alfabesidir.</span>
                            </li>
                            <li className="bg-slate-50 p-4 rounded-lg border-l-4 border-green-500">
                                <strong className="text-slate-900 block mb-1">2. Problemler (10-13 Soru)</strong>
                                <span className="text-sm">Matematiğin %30&apos;u tek bir konu altında! Sayı, Kesir, Yüzde, Hız ve Yaş. Özellikle sayı problemleri (yeni nesil hikayeli sorular) sınavın kaderini belirler. Günde 20 problem çözmeyen TYT Matematikte başarılı olamaz. Nokta.</span>
                            </li>
                            <li className="bg-slate-50 p-4 rounded-lg border-l-4 border-green-500">
                                <strong className="text-slate-900 block mb-1">3. Üslü ve Köklü İfadeler (2-3 Soru)</strong>
                                <span className="text-sm">Çok klasiktir. Kuralları bellidir. Genelde bir kutu verirler içine sayı yerleştirmeni isterler. Biraz pratikle kaçırılmaz.</span>
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            📙 TYT Fen (9+ Net Garanti Listesi)
                        </h2>
                        <p>
                            Eşit ağırlıkçı ve Sözelci kardeşlerim. Bu kısım size altın tepside sunulan netler. Sayısalcılar, siz zaten bunları yiyip yutmalısınız.
                        </p>
                        <ul className="list-none pl-0 space-y-4">
                            <li className="bg-slate-50 p-4 rounded-lg border-l-4 border-amber-500">
                                <strong className="text-slate-900 block mb-1">Biyoloji: Canlıların Ortak Özellikleri ve Hücre (2 Soru)</strong>
                                <span className="text-sm">TYT Biyoloji tamamen ezberdir, sayısal mantık arama. Mitoz-mayoz tablosunu ve hücre organellerini duvara as, her sabah bak, 2 net senin.</span>
                            </li>
                            <li className="bg-slate-50 p-4 rounded-lg border-l-4 border-amber-500">
                                <strong className="text-slate-900 block mb-1">Kimya: Madde ve Özellikleri, Periyodik Tablo (2-3 Soru)</strong>
                                <span className="text-sm">Fiziksel/kimyasal değişimler, atom modelleri ve periyodik özelliklerin değişimi (elektronegatiflik vs). Sadece 1 hafta akşamları okuma yaparak bu netleri alırsın.</span>
                            </li>
                            <li className="bg-slate-50 p-4 rounded-lg border-l-4 border-amber-500">
                                <strong className="text-slate-900 block mb-1">Fizik: Optik ve Isı-Sıcaklık (2-3 Soru)</strong>
                                <span className="text-sm">Formül sormazlar! Kavram yanılgılarını sorarlar. Isı ile sıcaklık arasındaki farkı, yansıma kurallarını ve günlük hayattaki optik örneklerini (gökkuşağı vs) mutlaka bil.</span>
                            </li>
                        </ul>

                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
                            <h3 className="font-bold text-red-900 mb-2">Hocam Geri Kalan Konulara Hiç Mi Bakmayalım?</h3>
                            <p className="text-sm text-red-800">
                                Amacın ilk 10.000 ise tabii ki her şeye bakacaksın. Ama hedefin 200 bin, 150 bin veya 100 bin bandıysa ve vaktin daralıyorsa, denizde boğulmana gerek yok. Önce yukarıdaki banko listesini bir &quot;tamamla&quot;. Bu konulardan soru kaçırmayacak seviyeye gel, ondan sonra lüks sayılan ince detay konulara geçersin. Strateji budur.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Şu Anki Konuların Sana Kaç Puan Getiriyor?</h3>
                            <p className="text-blue-100 mb-6">
                                Bu &quot;banko&quot; listesini hallettiğinde elde edeceğin netleri (ortalama 50-60 net yapar) hesaplama aracımıza girip hangi sıralamaya geldiğini gör.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Tahmini Sıralamanı Gör →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
