import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS 2027 Başvuru Tarihleri ve Ücreti: Kimse Bu Tarihleri Kaçırmasın',
    description: '2027 YKS (TYT-AYT) başvuru tarihleri, geç başvuru günü, sınav ücretleri ve ÖSYM AİS kayıt işlemleri. YKS ne zaman?',
    keywords: 'yks 2027 başvuru tarihleri, yks başvuru nasıl yapılır, yks ücreti 2027, geç başvuru yks, yks ne zaman',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri' },
    openGraph: {
        title: 'YKS 2027 Başvuru Tarihleri: Son Günü Bekleyenlerin Dramı',
        description: 'YKS başvuru süreci, ücretler ve AİS fotoğraf güncelleme hakkında pratik bilgiler.',
        type: 'article',
        publishedTime: '2026-02-14',
        modifiedTime: '2026-08-19',
        url: 'https://yksnethesapla.com/blog/yks-2027-basvuru-tarihleri',
    },
}

export default function YKSBasvuruTarihleri() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS 2027 Başvuru</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Önemli Tarihler</span>
                            <time className="text-gray-600">19 Ağustos 2026</time>
                            <span className="text-gray-600">• 8 dk okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Sınava Değil, Sisteme Yenilenler: YKS 2027 Başvuru Süreci
                        </h1>
                        <p className="text-xl text-gray-600">
                            Her yıl binlerce öğrencinin 1 yıllık emeği sadece 5 dakikalık bir kayıt işlemini erteledikleri için çöpe gidiyor. Evet, şaka değil. Geçen yıl tam 15 bin kişi başvuru yapmayı unuttu.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Yıllarca ders çalışıyorsun, test kitaplarına tomarla para harcıyorsun, özel ders alıyorsun... Sonra başvuru haftası geliyor, &quot;Yarın yaparım, haftaya yaparım, banka kapandı&quot; derken bir bakıyorsun sistem kapanmış. O an hissedeceğin çaresizliği tarif edemem. O yüzden bu yazıyı sadece okumakla kalma, tarihleri hemen telefonuna alarm olarak kur.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Öngörülen 2027 YKS Takvimi (Telefonuna Alarm Kur!)
                        </h2>
                        <p>
                            ÖSYM resmi takvimini genellikle Kasım-Aralık aylarında açıklar. Ancak ÖSYM bir devlet kurumu olarak gelenekleri çok sever ve tarihleri genelde her yıl aynı periyotta ayarlar. Son 5 yıla bakarak 2027 için öngördüğümüz takvim şöyle:
                        </p>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6 shadow-sm">
                            <ul className="space-y-4 text-slate-800">
                                <li className="flex items-start">
                                    <span className="text-xl mr-3">📅</span>
                                    <div>
                                        <strong className="block text-slate-900">Normal Başvuru Dönemi:</strong> 
                                        Şubat&apos;ın ilk haftası ile Mart&apos;ın ilk haftası arası. (Yaklaşık 1 aylık süre)
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-xl mr-3">🚨</span>
                                    <div>
                                        <strong className="block text-red-600">Geç Başvuru Günü:</strong> 
                                        Mart ayının ortasında tek bir gün. Ücret %50 zamlı olur. (Sakın buraya bırakma)
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-xl mr-3">🎓</span>
                                    <div>
                                        <strong className="block text-slate-900">Sınav Tarihleri:</strong> 
                                        Haziran ayının ikinci veya üçüncü hafta sonu (Cumartesi TYT, Pazar AYT/YDT).
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-xl mr-3">📈</span>
                                    <div>
                                        <strong className="block text-slate-900">Sonuçların Açıklanması:</strong> 
                                        Temmuz ayının ortası.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Başvuru Nasıl Yapılır? (Adım Adım)
                        </h2>
                        <p>
                            Eğer daha önce ÖSYM sınavına (MSÜ vb.) girdiysen işin çok kolay. Girmedim diyorsan, yine kolay merak etme. İki yöntemi var:
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">1. Yöntem: E-Devlet ile (En Kolay Yol)</h3>
                        <p>
                            Eğer yeni kimlik kartın (çipli kimlik) ve e-Devlet şifren varsa, ÖSYM başvuru merkezine gitmene gerek yok.
                        </p>
                        <ol className="list-decimal pl-6 space-y-2 mb-6">
                            <li>ÖSYM AİS (Aday İşlemleri Sistemi) sitesine gir.</li>
                            <li>&quot;e-Devlet ile Kayıt Ol&quot; butonuna bas.</li>
                            <li>İçeride e-Devlet kapısından fotoğrafın ve kimlik bilgilerin otomatik çekilir.</li>
                            <li>YKS başvuru ekranına gir, girmek istediğin testleri (TYT, AYT, YDT) seç.</li>
                            <li>Ödemeyi kredi/banka kartıyla yap. (İşlem tamam!)</li>
                        </ol>

                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">2. Yöntem: Başvuru Merkezi Aracılığıyla</h3>
                        <p>
                            Yeni kimliğin yoksa veya fotoğrafını değiştirmek istiyorsan, herhangi bir ÖSYM Sınav Koordinatörlüğüne (genelde üniversitelerde bulunur) veya bazı lise müdürlüklerine gitmen lazım. Giderken yanında güncel kimliğin olsun. Orada fotoğrafını çeker, kaydını açarlar. Sonra eve gelip internetten ücreti yatırırsın.
                        </p>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg my-6">
                            <h3 className="font-bold text-amber-900 mb-2">Çok Önemli İki Kural</h3>
                            <p className="text-sm text-amber-800 mb-2">
                                <strong>Kural 1:</strong> Başvuruyu sistemden yapmak yetmez. O parayı yatırmadığın sürece başvurun geçerli sayılmaz. Para yatınca ekranda &quot;Başvuru İşlemi Başarıyla Tamamlanmıştır&quot; yazısını gözünle gör.
                            </p>
                            <p className="text-sm text-amber-800">
                                <strong>Kural 2:</strong> Eğer lise son sınıftaysan, HES kodun veya diploma notun gibi bilgileri sistem e-Okul&apos;dan kendi çeker. Mezunsan, eğitim bilgilerini mutlaka kontrol et. E-Okul&apos;da hata varsa okuluna gidip düzelttir.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            2027 YKS Başvuru Ücreti Ne Kadar Olur?
                        </h2>
                        <p>
                            ÖSYM her yıl enflasyon oranında bir güncelleme yapıyor. Mesela 2024&apos;te her bir oturum için (TYT, AYT, YDT ayrı ayrı) ücret 295 TL idi. Yani TYT ve AYT&apos;ye girecek bir öğrenci toplam 590 TL ödüyordu. 
                        </p>
                        <p>
                            2027 için kesin rakam belli olmamakla birlikte, ekonomik gidişata göre bu rakamın oturum başı 500-600 TL bandında olması muhtemeldir. Kılavuz açıklandığında burayı güncelleyeceğiz. Ama tavsiyem; başvuru dönemi geldiğinde cebinde bir miktar hazır paran olsun.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                            Geç Başvuru Günü (Kurtarıcı Ama Pahalı)
                        </h2>
                        <p>
                            Diyelim ki hasta oldun, unuttun, internetin koptu ve normal başvuru süresini kaçırdın. ÖSYM normal süre bittikten yaklaşık 2 hafta sonra &quot;Geç Başvuru Günü&quot; diye tek bir gün açar. Ama bedeli vardır:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Başvuru ücreti <strong>%50 artırımlı</strong> ödenir.</li>
                            <li>Kendi şehrinde sınava girme garantisi vermez, kontenjan nerede boşsa oraya atabilir.</li>
                        </ul>
                        <p>
                            Yani maceraya gerek yok. Takvim açıklandığı an ilk hafta işini hallet. 
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Puanını Hesapla, Hedefini Koy</h3>
                            <p className="text-blue-100 mb-6">
                                Sınav başvurusunu yaptın, peki kaç nete ihtiyacın var?
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                YKS Net ve Puan Hesapla →
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
