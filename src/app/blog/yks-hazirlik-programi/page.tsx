import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'

export const metadata: Metadata = {
    title: 'YKS Hazırlık Programı 2027: Pomodoro, Feynman ve Ebbinghaus Teknikleri',
    description: 'Bilimsel öğrenme yöntemleriyle YKS hazırlığı. Pomodoro 2.0, Feynman tekniği, Ebbinghaus unutma eğrisi ve MEB kaynakları. 2027 YKS için güncel rehber.',
    keywords: 'yks hazırlık programı, pomodoro tekniği, feynman tekniği, ebbinghaus, yks çalışma 2027, meb kaynakları',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-hazirlik-programi' },
    openGraph: {
        title: 'YKS Hazırlık Programı 2027: Bilimsel Öğrenme Teknikleri',
        description: 'Pomodoro 2.0, Feynman tekniği ve Ebbinghaus unutma eğrisiyle YKS hazırlığı.',
        type: 'article',
        publishedTime: '2026-02-20',
        url: 'https://yksnethesapla.com/blog/yks-hazirlik-programi',
    },
}

export default function YKSHazirlikProgrami() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Hazırlık Programı</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Hazırlık</span>
                            <time className="text-gray-600">20 Şubat 2026</time>
                            <span className="text-gray-600">• 10 dakika okuma</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            YKS Hazırlık Programı 2027: Bilimsel Öğrenme Teknikleri
                        </h1>
                        <p className="text-xl text-gray-700">
                            "Çok çalış" demek yetmez. Nasıl öğrenildiği, ne kadar çalışıldığından daha önemlidir.
                            İşte milyonlarca adayın önünüze geçmesini sağlayacak bilim destekli 2027 YKS hazırlık rehberi.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 mt-8">
                        <p className="text-lg leading-relaxed mb-6">
                            Rehberlik hocalarınızın "Günde 10 saat masadan kalkmayacaksın!" veya "Günde 500 soru çözmeyen 
                            üniversiteyi rüyasında görür" şeklindeki o korkunç tavsiyelerini bir kenara bırakın. 2027 YKS maratonunu, 
                            masada en çok dirsek çürütenler değil, beyninin nasıl öğrendiğini keşfederek <strong>verimli çalışanlar</strong> kazanacak.
                        </p>
                        
                        <p className="mb-6">
                            Saatlerce kitaba bakıp hiçbir şey anlamadığınız, ertesi gün çözdüğünüz testte sanki o konuyu 
                            hayatınızda ilk defa görüyormuş gibi hissettiğiniz o anları düşünün. İşte bu, yanlış çalışma yönteminin 
                            beyninize kestiği cezadır. Dünya çapında kanıtlanmış bilimsel öğrenme tekniklerini (Pomodoro 2.0, Feynman 
                            ve Ebbinghaus) YKS sistemine nasıl entegre edeceğinizi adım adım inceleyelim.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b pb-2">
                            1. Pomodoro 2.0: TYT - AYT İçin İleri Seviye Odaklanma
                        </h2>
                        
                        <p className="mb-4">
                            Klasik Pomodoro tekniğini mutlaka duymuşsunuzdur: 25 dakika çalış, 5 dakika mola ver. Bu teknik, 
                            ders çalışmaya yeni başlayan veya dikkat süresi çok kısa olan bir öğrenci için harika bir "ısınma" turudur. 
                            Ancak gerçekçi olalım; YKS'de sizi 165 dakikalık (TYT) ve 180 dakikalık (AYT) devasa seanslar bekliyor.
                        </p>
                        
                        <p className="mb-6">
                            25 dakikada bir mola veren beyin, sınav anında 40. dakikadan sonra isyan etmeye, odaklanamamaya başlar. 
                            İşte bu yüzden YKS öğrencileri için <strong>Pomodoro 2.0 (50/10 Kuralı)</strong> hayat kurtarır.
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-6 shadow-sm">
                            <h3 className="font-bold mb-4 text-xl text-gray-900">Nasıl Uygulanır?</h3>
                            <ul className="space-y-4">
                                <li>
                                    <strong>Aşama 1:</strong> Tam 50 dakika boyunca telefon odanın dışında olacak şekilde konuya 
                                    veya teste odaklanın. Bu süre zarfında su içmek dışında masadan kalkmak kesinlikle yasak. Sınav
                                    kondisyonunuz böyle artar.
                                </li>
                                <li>
                                    <strong>Aşama 2:</strong> Telefonun alarmı çaldığında, sorunun tam ortasında bile olsanız kalemi 
                                    bırakıp 10 dakikalık mola verin. Bu mola, sosyal medyaya girmek için değildir; beynin bilgiyi 
                                    işlemesi için gözlerinizi dinlendirme ve esneme vakti.
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b pb-2">
                            2. Feynman Tekniği: O Konuyu Gerçekten Anladın mı?
                        </h2>
                        
                        <p className="mb-4">
                            Nobel ödüllü efsanevi fizikçi Richard Feynman'ın geliştirdiği bu yöntem, öğrencilerin en çok düştüğü 
                            "okudum, altını çizdim, anladım" illüzyonunu paramparça eder. Pasif okuma beyni kandırır. Feynman 
                            tekniği ise sizi aktif öğrenmeye mecbur bırakır.
                        </p>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8 shadow-sm">
                            <h3 className="font-bold text-amber-900 mb-2">Feynman'ı YKS'ye Uyarlamak</h3>
                            <p className="text-amber-800 leading-relaxed mb-3">
                                Diyelim ki Fizik'ten "Newton'un Hareket Yasaları" konusunu çalıştınız. Kitabı kapatın. Odanızda 
                                konuyu hiç bilmeyen birisi varmış gibi bu konuyu en basit kelimelerle, günlük hayattan örnekler 
                                vererek <strong>sesli olarak</strong> ona anlatın.
                            </p>
                            <p className="text-amber-800 leading-relaxed font-bold">
                                Eğer bir yerde takılır, teknik terimlerin arkasına saklanır veya cümleyi bağlayamazsanız; işte 
                                orası sizin o konudaki kör noktanızdır ve sınavda soru büyük ihtimalle oradan gelir!
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b pb-2">
                            3. Ebbinghaus Unutma Eğrisi: Acımasız Gerçek
                        </h2>
                        
                        <p className="mb-4">
                            Bir konuyu harika çalıştınız, bütün testleri full çektiniz. İki hafta sonraki kurumsal denemede 
                            aynı konudan çıkan soruda kalem oynatamadınız. Neden? Alman psikolog Hermann Ebbinghaus'a göre, insan 
                            beyni çok iyi öğrendiği bir bilginin bile <strong>%70'ini ilk 24 saat içinde, %90'ını ise 1 hafta 
                            içinde silip atar.</strong>
                        </p>

                        <p className="mb-6">
                            ÖSYM'nin o sevdiği bilgi yüklü AYT konularını Haziran ayına kadar aklınızda tutmanın tek bir sırrı 
                            vardır: Zeka değil, <strong>sistemli aralıklı tekrardır (Spaced Repetition).</strong> 
                            Öğrendiğiniz bir konuyu aynı günün akşamı 10 dakika gözden geçirmeli, 1 hafta sonra o konudan 1 test 
                            çözmeli, 1 ay sonra ise sarmal branş denemeleriyle o konuyu tazelemelisiniz.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">Gelişiminizi Takip Edin</h2>
                            <p className="text-xl mb-6 text-blue-100">
                                Çalışmalarınızın meyvesini verip vermediğini görmek için güncel netlerinizle sıralamanızı hesaplayın.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                Hemen YKS Sıralamanı Hesapla →
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b pb-2">
                            Örnek Çalışma Programı İskeleti
                        </h2>
                        
                        <p className="mb-4">
                            Hazır çalışma programları genelde işe yaramaz çünkü herkesin biyolojik saati, okul/dershane 
                            durumu ve bilgi seviyesi farklıdır. Kendi programınızı yaparken şu iskeleti temel almalısınız:
                        </p>

                        <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
                            <li><strong>Pazartesi - Çarşamba - Cuma:</strong> Ağır konuların ve zor derslerin (AYT Matematik, AYT Fizik vb.) çalışıldığı ve konu özetlerinin çıkarıldığı "Yükleme Günleri".</li>
                            <li><strong>Salı - Perşembe:</strong> Bol soru çözümü yapılan, TYT branş denemelerinin ve "Ebbinghaus (Geçmiş konu tekrarı)" çalışmalarının yapıldığı günler.</li>
                            <li><strong>Cumartesi:</strong> Sabah 10.15'te gerçek sınav saatinde bir genel deneme çözümü ve öğleden sonra bu denemenin kapsamlı hata analizi. "Hangi soruları dikkatsizlikten, hangilerini bilgi eksikliğinden kaçırdım?"</li>
                            <li><strong>Pazar:</strong> Eksik tamamlama ve öğleden sonra zihni boşaltmak için tam dinlenme. Zihin dinlenmeden yeni haftaya hazırlanamaz.</li>
                        </ul>

                        <div className="border-t pt-8 mt-12">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Sınav Taktikleri İçin Önerilenler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-net-artirma-taktikleri" className="p-5 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-blue-200">
                                    <p className="font-bold text-blue-900 mb-1">TYT Net Artırma Taktikleri →</p>
                                    <p className="text-sm text-gray-600">Netleriniz 50-60 bandında takılıp kaldıysa yapmanız gerekenler.</p>
                                </Link>
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="p-5 bg-green-50 rounded-xl hover:bg-green-100 transition-colors border border-green-200">
                                    <p className="font-bold text-green-900 mb-1">1 Netin Gerçek Gücü →</p>
                                    <p className="text-sm text-gray-600">Standart sapma ve 1 netin YKS sıralamasındaki şok edici etkisi.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}


