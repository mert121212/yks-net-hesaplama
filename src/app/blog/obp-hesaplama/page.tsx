import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'OBP Nedir? Kırık OBP ve Diploma Notu Muhabbeti',
    description: 'YKS OBP hesaplama. Lise diploma notunun yerleştirme puanına etkisi ve kırık OBP cezası hakkında harbici gerçekler.',
    keywords: 'obp nedir, obp nasıl hesaplanır, obp hesaplama, kırık obp, diploma notu yks, okul birinciliği kontenjanı',
    alternates: { canonical: 'https://yksnethesapla.com/blog/obp-hesaplama' },
    openGraph: {
        title: 'OBP Nedir? Lise Notları YKS\'yi Nasıl Etkiliyor',
        description: 'Diploma notu yüzünden binlerce kişi geriye düşüyor. OBP hesaplama mantığı.',
        type: 'article',
        publishedTime: '2026-02-24',
        modifiedTime: '2026-08-19',
        url: 'https://yksnethesapla.com/blog/obp-hesaplama',
    },
}

export default function OBPHesaplamaRehberi() {
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <article className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-sm">
                <nav className="mb-6 text-sm text-gray-500">
                    <Link href="/" className="hover:text-blue-500">Ana Sayfa</Link> / <Link href="/blog" className="hover:text-blue-500">Blog</Link> / <span className="text-gray-800">OBP Muhabbeti</span>
                </nav>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    OBP (Diploma Notu) Yüzünden Sınavda Çuvallamak...
                </h1>

                <AuthorProfile />

                <div className="text-gray-800 space-y-5 mt-8 text-lg leading-relaxed">
                    <p>
                        Abi lisedeyken hepimiz aynı kafadaydık yalan yok. "Okul sınavları ne ya, ben asıl YKS'de şov yapıcam" falan diyorduk. Sonra sonuçlar bir açıklandı... Baya bildiğin duvara tosladık.
                    </p>
                    <p>
                        Geçen sene bi çocuk geldi yanıma. Denemeleri falan fişek gibi, ilk 30 bin garanti gözüyle bakıyoruz. Sonuçlar geldi çocuk 38 bininci olmuş. Niye? Çünkü lisedeki diploma notu 62. Yani lisede yatmış. Aynı neti yapan ama lise ortalaması 88 olan başka bi eleman tam 15 puan daha fazla alıp çocuğun içinden geçmiş. 15 puan diyorum bak... AYT'de 5 tane ekstra matematik sorusu demek bu. Sınav sabahı daha optiği doldurmadan 5 soru geridesin.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mt-10">OBP Nasıl Hesaplanıyor Mantığı Ne?</h2>
                    <p>
                        Olay aslında baya basit. Lise boyunca aldığın notların bi ortalaması var ya, diploma notu diyoruz hani. ÖSYM bunu alıyor, 5'le çarpıyor, sonra da 0.12 ile çarpıp senin o canım YKS puanına ekliyor. 
                    </p>
                    <p>
                        "Hocam bu ne ya uzun iş" diyorsan kestirmesi şu: <strong>Diploma notunu 0.6 ile çarp.</strong> Çıkan sayı senin YKS'ye eklenecek puanın. Bitti gitti.
                    </p>

                    <p>
                        Yani 90 ortalaman varsa 90 x 0.6 = 54 puan cebe atıyorsun sınava girmeden. Ama ortalaman 60 ise sadece 36 puan alıyorsun. Aradaki 18 puanlık farkı kapatmak için sınavda baya bi ter dökmen lazım haberin olsun. Yığılma olan yerlerde o 18 puan seni 30-40 bin kişi geriye atar. Bir şehir, bir üniversite komple değişir.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10">Gelelim Kırık OBP Mevzusuna (Asıl Kabus)</h2>
                    <p>
                        Bak bura çok fena. Eğer sen geçen sene sınava girip bir yere <strong>yerleştiysen</strong>... Bak altını çiziyorum, kayıt yaptırman şart değil. Tercih listene yazdın ve ÖSYM seni oraya yerleştirdi diyelim. Gitmesen bile, açıköğretim bile olsa bittin.
                    </p>
                    <p>
                        Ertesi sene tekrar sınava girdiğinde o senin 0.12 olan katsayın anında yarıya düşüyor, 0.06 oluyor. 
                    </p>
                    <p>
                        Yani normalde 90 ortalamayla 54 puan alacakken, sırf geçen sene bi yeri kazandın diye bu sene 27 puan alıyorsun. Tam 27 puanın havaya uçuyor. AYT'de 9 tane zor matematik sorusu demek bu. Seneye tekrar hazırlanacaksan ve o 27 puanı telafi edeceksen cidden çok sağlam psikoloji lazım.
                    </p>

                    <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-700">
                        <li>Sınava girdin ama hiç tercih yapmadın diyelim: OBP kırılmaz.</li>
                        <li>Tercih yaptın ama puanın yetmedi açıkta kaldın: Yine kırılmaz yırttın.</li>
                        <li>Yerleştin, gittin ama 2 yıl geçti üzerinden: Kırılmaz normale döner.</li>
                        <li>Geçen sene yerleştin bu sene tekrar giriyorsun: Geçmiş olsun yarı yarıya kırılır.</li>
                    </ul>

                    <p className="mt-6">
                        O yüzden hani "ya öylesine yazayım belki giderim" deyip de istemediğiniz bölümleri yazmayın abi. Sonra seneye bir başlıyorsun çalışmaya, üstünde 30 puanlık bi yük.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-10">Lisedeysen Ne Yapacaksın?</h2>
                    <p>
                        Eğer şu an lise 2'de lise 3'te falan okuyorsan valla çok şanslısın. Bırak test çözmeyi git yazılılara çalış. Notunu 75'ten 85'e çeksen bile sınavda sana bedavadan puan olarak dönecek. Müzikmiş bedenmiş resimmiş deme, onlardan 100 al ortalamayı yukarı çeksin.
                    </p>
                    <p>
                        Bir de okul birinciliği olayı var. Mezun olduğun sene okul birincisiysen ÖSYM sana özel kontenjan açıyor. Normalde puanının yetmediği o fiyakalı üniversitelere sırf birinci olduğun için girebiliyorsun. Ama bu hak sadece mezun olduğun o ilk sene geçerli, seneye mezuna kalırsan puf diye uçuyor.
                    </p>

                    <p>
                        Kısacası OBP işi şakaya gelmez. Diplomam düşük diye ağlamanın da alemi yok, mecburen oturup rakiplerinden daha fazla test çözeceksin ki aradaki fark kapansın. Yapacak bir şey yok.
                    </p>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <Link href="/" className="text-blue-600 font-bold hover:underline">Şuradan kendi netlerini ve diploma notunu girip sıralamana ne kadar etki ettiğini hesaplayabilirsin.</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}
