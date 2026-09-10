import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Hazırlık Programı 2027: Gerçekçi Günlük ve Haftalık Çalışma Planı',
    description: 'YKS hazırlığında sahte verimlilik tuzağı, unutma eğrisini yenme yöntemleri, 50 dakikalık odak blokları ve kişiye özel çalışma mimarisi.',
    keywords: 'yks hazırlık programı, yks ders çalışma programı, verimli ders çalışma, pomodoro yks, feynman tekniği',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-hazirlik-programi' },
    openGraph: {
        title: 'YKS Hazırlık Programı 2027: Gerçekçi Çalışma Planı',
        description: 'Bilimsel çalışma teknikleriyle YKS hazırlığı. Masada saatlerce oturup sıfır çekenler için çıkış rehberi.',
        type: 'article',
        publishedTime: '2026-02-20',
        modifiedTime: '2026-02-23',
        url: 'https://yksnethesapla.com/blog/yks-hazirlik-programi',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Hazırlık Programı'
            }
        ],
    },
}

export default function YKSHazirlikProgrami() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS Hazırlık Programı 2027: Gerçekçi Günlük ve Haftalık Çalışma Planı" 
                    description="YKS hazırlığında sahte verimlilik tuzağı, unutma eğrisini yenme yöntemleri, 50 dakikalık odak blokları ve kişiye özel çalışma mimarisi."
                    datePublished="2026-02-20"
                    dateModified="2026-02-23"
                    url="https://yksnethesapla.com/blog/yks-hazirlik-programi"
                    keywords={['yks hazırlık programı', 'yks ders çalışma programı', 'verimli ders çalışma', 'pomodoro yks', 'feynman tekniği']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Hazırlık Programı</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Hazırlık</span>
                            <time className="text-gray-600" dateTime="2026-02-20">20 Şubat 2026</time>
                            <span className="text-gray-600">• 9 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            &quot;Günde 10 Saat Çalışıyorum Ama Netlerim Artmıyor&quot; Diyenler İçin Gerçekçi Program
                        </h1>
                        <p className="text-xl text-gray-600">
                            İnternetten indirilen şablon çizelgelerin neden 3. günde çöpe gittiğini ve saat doldurmak yerine net artıran gerçek çalışma mantığını konuşalım.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            İnternette gördüğünüz o &quot;Günde 14 saat ders çalışan derece öğrencisi&quot; videolarını ya da askeri nizam hazırlanmış saat saat PDF çizelgelerini şimdilik bir kenara bırakın.
                        </p>
                        <p>
                            Çünkü o şablon programlar genelde en fazla 3 gün sürer. 4. gün sabah alarm çaldığında yataktan kalkamazsınız ve içinizde derin bir yetersizlik hissi başlar: &quot;Ben disiplinsizim, yapamıyorum.&quot;
                        </p>
                        <p>
                            Sorun sizde falan değil. Sorun, insanın biyolojik ritmine ve gerçek hayata uymayan hayali planlar kurmakta.
                        </p>
                        <p>
                            Masa başında 10 saat oturup günün sonunda sadece 50 test sorusu çözebilen, her 10 dakikada bir elini telefona atan bir adayın yaptığı şey ders çalışmak değil; sadece sandalyede vakit öldürmektir.
                        </p>
                        <p>
                            Gerçekten net artıran sürdürülebilir bir düzen kurmak istiyorsanız, şu 4 temel kuralı masanıza yapıştırın:
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Saat Değil, Görev Odaklı Çalışın
                        </h2>
                        <p>
                            &quot;Bugün 8 saat çalışacağım&quot; demek zihne kaçamak alanı bırakır. Masada oturursunuz ama aklınız başka yerdedir.
                        </p>
                        <p>
                            Bunun yerine net hedefler koyun: &quot;Bugün Logaritmadan 50 soru bitireceğim, 20 paragraf çözeceğim ve 1 tane Türkçe branş denemesini analiz edeceğim.&quot;
                        </p>
                        <p>
                            Masadan ne zaman kalkacağınızı saate bakarak değil, önünüzdeki görevi tamamlayarak belirleyin. Bu yöntem zihninizi oyalanmaktan kurtarır ve bitirme disiplini kazandırır.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. 25 Dakikalık Pomodoro Tuzağı: 50+10 Kuralı
                        </h2>
                        <p>
                            İnternette çok popüler olan &quot;25 dakika ders, 5 dakika mola&quot; kuralı genel işler için faydalı olabilir; ancak YKS için son derece sakıncalıdır.
                        </p>
                        <p>
                            Unutmayın: TYT 165 dakika, AYT ise 180 dakikadır. Sınav salonunda her 25 dakikada bir kalemi bırakıp dinlenme şansınız yok. Beyninizi sürekli 25 dakikada bir ödüllendirilmeye alıştırırsanız, sınav sabahı 40. soruya geldiğinizde zihinsel olarak çökersiniz.
                        </p>
                        <p>
                            Masada en az 50 dakikalık kesintisiz odak blokları kurun: 50 dakika ders, 10 dakika mola. Ancak o 10 dakikada asla sosyal medya ekranına bakmayın. Balkona çıkın, su için, hava alın ama beyninizi yeni görsel uyarıcılarla yormayın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. Akşamları Yeni Konu Çalışmayın, Soru Çözün
                        </h2>
                        <p>
                            Günün en zorlu dersini (AYT Matematik, Fizik ya da karmaşık bir Edebiyat dönemini) zihninizin en berrak olduğu saat dilimine yerleştirin.
                        </p>
                        <p>
                            Akşama doğru zihinsel yorgunluk başladığında yeni bir konuyu kavramaya çalışmak akıntıya kürek çekmektir. Akşam saatlerini gün içinde çalıştığınız konulardan test çözmeye ya da branş denemesi atmaya ayırın.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. Gece Yatmadan Önce Yarının Masasını Hazırlayın
                        </h2>
                        <p>
                            Sabah masaya oturup &quot;Acaba bugün ne çalışsam?&quot; diye 20 dakika düşünmek, günün ilk enerjisini heba etmektir.
                        </p>
                        <p>
                            Gece masadan kalkmadan önce yarın sabah çözeceğiniz ilk kitabı ve testi masanın üstüne açık bırakın. Sabah masaya geçtiğiniz saniye ne yapacağınız belli olsun.
                        </p>

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 my-10 text-center text-white">
                            <h3 className="text-2xl font-bold mb-3">Çalışmanızın Meyvesini Görün</h3>
                            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                                Verimli programınızla yükselen haftalık netlerinizi hesaplayıcımıza girin; sıralamanızın her denemede nasıl basamak atladığını adım adım takip edin.
                            </p>
                            <Link href="/" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                                Sıralama Hesapla →
                            </Link>
                        </div>

                        <div className="border-t pt-8 mt-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Göz Atmanız Gereken Rehberler</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/tyt-net-artirma-taktikleri" className="p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                                    <p className="font-semibold text-emerald-900">TYT Net Artırma Taktikleri →</p>
                                    <p className="text-xs text-gray-600 mt-1">Platoya takılan netleri kırmak için yanlış defteri ve PP rutini.</p>
                                </Link>
                                <Link href="/blog/yks-1-net-kac-kisi-atar" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                    <p className="font-semibold text-blue-900">1 Net Kaç Kişi Öne Atar? →</p>
                                    <p className="text-xs text-gray-600 mt-1">Yığılma bölgelerinde tek bir fazladan netin devasa gücü.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
