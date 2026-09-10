import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'YKS Sık Sorulan Sorular | Sınav, Net ve Tercih Rehberi 2027',
    description: 'YKS 2027 net hesabı, 0,5 net şartı, kırık OBP, yığılma ve sıralamalar hakkında kafanıza takılan tüm soruların net cevapları.',
    keywords: 'yks sık sorulan sorular, yks sss, tyt sss, ayt sss, yks baraj puanı, obp hesaplama, yks 2027',
    alternates: { canonical: 'https://yksnethesapla.com/sss' },
}

const sssFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "TYT'de baraj puanı kalktı mı?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Evet. 150 veya 180 puanlık baraj artık yok. Ancak puanınızın hesaplanması için Türkçe veya Temel Matematik testinden en az 0,5 net çıkarmanız şart."
            }
        },
        {
            "@type": "Question",
            "name": "0,5 net kuralını sağlayamazsam ne olur?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Türkçe ve Matematik testlerinin ikisinde de 0 veya eksi net yaparsanız, Fen veya Sosyal'de ne yapmış olursanız olun TYT puanınız hiç hesaplanmaz."
            }
        },
        {
            "@type": "Question",
            "name": "OBP kırılması kimleri kapsar?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Geçen yıl merkezi yerleştirmeyle bir üniversite programına yerleştiyseniz katsayınız 0,12'den 0,06'ya düşer. Tercih yapıp kazanamayanların puanı kırılmaz."
            }
        },
        {
            "@type": "Question",
            "name": "Zor soru çözmek daha çok puan getirir mi?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hayır. ÖSYM test bazlı standart sapma uygular. Matematik testindeki en zor soru ile en kolay soru aynı ham puana sahiptir."
            }
        }
    ]
}

export default function SSS() {
    const faqCategories = [
        {
            category: 'Net Hesabı ve Katsayılar',
            icon: '🧮',
            questions: [
                {
                    q: '4 yanlış 1 doğruyu nasıl götürüyor?',
                    a: 'Her yanlış cevabınız doğru sayınızdan tam 0,25 net düşürür. Diyelim 30 doğru yaptınız ama 8 soruyu da yanlış işaretlediniz. 8\'i 4\'e bölüyoruz: 2 netiniz buharlaşıyor ve hanenize 28 net yazılıyor. Boş bıraktığınız sorular ise netinizi eksiltmez. Emin olmadığınız sorularda rastgele sallamamak bu yüzden hayati önem taşır.'
                },
                {
                    q: 'Net eksiye düşer mi, eksi net ne anlama gelir?',
                    a: 'Evet, bal gibi düşer. Eğer 2 doğru yapıp 16 soruyu yanlış işaretlediyseniz: 2 − (16 ÷ 4) = −2 net olur. Ancak ÖSYM puan hesaplarken testteki negatif netleri sıfır (0) kabul eder; eksi puanla diğer derslerinizin doğrusunu eksiltmez.'
                },
                {
                    q: 'Zor soruları çözen daha yüksek puan alır mı?',
                    a: 'Bu YKS hazırlığındaki en büyük şehir efsanesidir. ÖSYM soru bazlı değil, test bazlı standart sapma hesaplar. AYT Matematik testindeki en zor türev sorusuyla ilk sayfadaki temel işlem sorusu aynı puandır. Önemli olan sorunun zorluğu değil, o dersin Türkiye ortalamasının düşük olmasıdır.'
                },
                {
                    q: 'Diploma notu (OBP) sıralamayı ne kadar oynatır?',
                    a: 'Okul notunuz 5 ile çarpılarak 250-500 aralığında OBP\'ye çevrilir ve 0,12 katsayısıyla çarpılır. Diploma notu 100 olan biri +60 puan alırken, 70 olan biri +42 puan alır. Aradaki 18 puanlık fark, yığılma bölgesinde 15 bin ila 30 bin adayın gerisine düşmenize yol açabilir.'
                }
            ]
        },
        {
            category: 'Baraj ve 0,5 Net Gerçeği',
            icon: '⚠️',
            questions: [
                {
                    q: 'TYT\'de baraj kalktıysa herkes tercih yapabiliyor mu?',
                    a: 'Evet, eski 150 ve 180 puan barajları tamamen kalktı. Puanı hesaplanan her aday üniversite tercihi yapabilir. Ancak Tıp (ilk 50 bin), Hukuk (ilk 125 bin), Mühendislik (ilk 300 bin) gibi bölümlerdeki "Başarı Sırası Barajı" aynen devam ediyor.'
                },
                {
                    q: '0,5 net kuralı tam olarak nedir?',
                    a: 'TYT puanınızın hesaplanabilmesi için Türkçe veya Temel Matematik testlerinin en az birinden minimum 0,5 ham netinizin bulunması şarttır. Sayısalcı bir öğrenci "ben sadece Fen çözerim" diyemez. Türkçe veya Matematikten yarım net yoksa puan hesaplanmaz.'
                },
                {
                    q: 'Kırık OBP tam olarak kimleri vurur?',
                    a: 'Bir önceki yıl YKS ile herhangi bir 2 yıllık veya 4 yıllık örgün/açıköğretim (kontenjanlı) programına yerleştirildiyseniz okul puanınız yarı yarıya (0,06) kesilir. Tercih listesi gönderip hiçbir yere yerleşemediyseniz veya mezuna kalıp hiç tercih vermediyseniz puanınız kesinlikle kırılmaz.'
                }
            ]
        },
        {
            category: 'Deneme ve Sıralama Tahmini',
            icon: '🎯',
            questions: [
                {
                    q: 'Burada hesaplanan sıralamama ne kadar güvenebilirim?',
                    a: 'Hiçbir site sınav sonucunu nokta atışı tahmin edemez. Çünkü o yılın sınavının ne kadar zor olacağını ve kaç kişinin gireceğini sınavdan önce kimse bilemez. Bizim yaptığımız şey; ÖSYM\'nin son 3 yıldaki resmi yığınsal verilerini baz alarak gerçeğe en yakın simülasyonu sunmaktır.'
                },
                {
                    q: 'AYT\'de hangi testleri çözmek zorundayım?',
                    a: 'AYT kitapçığında 160 soru vardır ama herkes kendi alanındaki 80 soruyu çözer. Sayısalcı Matematik (40) ve Fen (40); Eşit Ağırlıkçı Matematik (40) ve Edebiyat-Sosyal-1 (40); Sözelci ise Edebiyat-Sosyal-1 (40) ve Sosyal-2 (40) testlerini çözer. Fazladan çözdüğünüz test kendi alan puanınızı düşürmez ama sürenizi yer.'
                },
                {
                    q: 'YKS\'ye kaç ay kala konu çalışmayı bırakmalıyım?',
                    a: 'Son 2-3 ay kala konu anlatımı kitaplarını tamamen rafa kaldırıp branş denemelerine ve çıkmış sorulara geçmek gerekir. Eksikler artık konu çalışarak değil, deneme analizinde yanlış çıkan soruların üzerine gidilerek kapatılır.'
                }
            ]
        },
        {
            category: 'Sitemiz ve Gizlilik',
            icon: '💻',
            questions: [
                {
                    q: 'Girdiğim netler ve okul notum bir yerde saklanıyor mu?',
                    a: 'Kesinlikle hayır. Bu sitede tüm matematiksel işlemler doğrudan kendi tarayıcınızda çalışır. Veritabanımız yok, sunucuya aktarılan tek bir girdi bile bulunmuyor. Sayfayı yenilediğiniz an yazdığınız her şey silinir.'
                },
                {
                    q: 'Site gerçekten tamamen ücretsiz mi, üyelik isteyecek misiniz?',
                    a: 'Evet, tamamen ücretsizdir. Ne şimdi ne de gelecekte kayıt olma, e-posta verme veya şifre oluşturma gibi zorunluluklar olmayacak. Sayfayı açıp istediğiniz kadar net hesabı yapabilirsiniz.'
                }
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sssFaqSchema) }} />
            
            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                    >
                        ← Hesaplama Motoruna Dön
                    </Link>
                </div>

                <header className="text-center mb-12">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3">
                        Rehberlik &amp; Soru-Cevap
                    </span>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                        Adayların En Çok Yanıldığı Konular
                    </h1>
                    <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">
                        ÖSYM kılavuzlarındaki karışık maddeleri, katsayıları ve yığılma kurallarını anlaşılır bir dille toparladık.
                    </p>
                </header>

                <div className="space-y-8">
                    {faqCategories.map((cat, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                                <span className="text-2xl">{cat.icon}</span>
                                <h2 className="text-xl font-bold text-slate-900">
                                    {cat.category}
                                </h2>
                            </div>

                            <div className="space-y-3">
                                {cat.questions.map((item, qIdx) => (
                                    <details key={qIdx} className="group border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
                                        <summary className="p-4 font-semibold text-slate-900 cursor-pointer hover:bg-slate-100/60 transition-colors flex justify-between items-center text-sm md:text-base">
                                            <span>{item.q}</span>
                                            <span className="text-slate-400 group-open:rotate-180 transition-transform text-lg ml-2">▾</span>
                                        </summary>
                                        <div className="px-4 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-200/50 pt-3">
                                            {item.a}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Yardım & İletişim */}
                <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-sm">
                    <h2 className="text-xl font-bold text-slate-900 mb-2">
                        Aklına takılan başka bir detay mı var?
                    </h2>
                    <p className="text-slate-600 text-sm mb-6 max-w-lg mx-auto">
                        Blogumuzdaki güncel taktikleri inceleyebilir ya da doğrudan ekibimize soru gönderebilirsin.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link href="/blog" className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
                            YKS Rehber Yazılarını Oku
                        </Link>
                        <Link href="/iletisim" className="px-5 py-2.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-xl hover:bg-slate-200 transition-colors">
                            Bize Ulaşın
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
