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
                    a: 'Her yanlış 0,25 net düşürür. 30 doğru, 8 yanlış yaptıysan: 8 ÷ 4 = 2, yani 2 netin gider, 28 net kalır. Boş bıraktığın sorular neti etkilemez. Emin değilsen boş bırakmak daha mantıklı.'
                },
                {
                    q: 'Net eksiye düşer mi?',
                    a: 'Düşebilir. 2 doğru 16 yanlışta: 2 - 4 = -2 net olur. Ama ÖSYM puanlama yaparken negatif olan dersleri sıfır kabul eder, diğer derslerini etkilemez.'
                },
                {
                    q: 'Zor soru daha çok puan kazandırır mı?',
                    a: 'Hayır. ÖSYM soruyu tek tek puanlamaz. Aynı testteki ilk soru ile son soru eşit puan getirir. Puanı etkileyen şey o testin Türkiye geneli net ortalaması ve standart sapması.'
                },
                {
                    q: 'Diploma notu (OBP) sıralamayı çok etkiler mi?',
                    a: 'Ciddi etkiler. Okul notu × 5 = OBP. 0,12 katsayısıyla puanına eklenir. Notu 100 olan +60 puan alırken 70 olan +42 puan alır. 18 puanlık fark yığılma bölgesinde 15-30 bin sıra demek olabilir.'
                }
            ]
        },
        {
            category: 'Baraj ve 0,5 Net Kuralı',
            icon: '⚠️',
            questions: [
                {
                    q: 'Baraj kalktıysa herkes tercih yapabiliyor mu?',
                    a: 'Puanı hesaplanan herkes tercih yapabilir evet. Ama Tıp için SAY ilk 50 bin, Hukuk için EA ilk 125 bin, Mühendislik için SAY ilk 300 bin gibi başarı sırası barajları var. Puanın yetse bile sıralaman yetmezse o bölümü yazamazsın.'
                },
                {
                    q: '0,5 net kuralı ne?',
                    a: 'TYT puanı çıkması için Türkçe ya da Matematik testinin en az birinden 0,5 ham net gerekiyor. İkisi de 0 veya eksi ise Fen ve Sosyal\'den full yapsan da puan hesaplanmaz.'
                },
                {
                    q: 'Kırık OBP kimleri etkiler?',
                    a: 'Geçen yıl bir programa yerleştiysen (açıköğretim dahil) — ister git ister gitme — OBP katsayın 0,12 yerine 0,06 olur. Tercih yapıp hiçbir yere yerleşemediysen veya hiç tercih yapmadıysan kırılma olmaz.'
                }
            ]
        },
        {
            category: 'Deneme ve Sıralama',
            icon: '🎯',
            questions: [
                {
                    q: 'Sıralama tahminine ne kadar güvenebilirim?',
                    a: 'Birebir tutturan bir algoritma yok çünkü o yılın sınav katılımı, soru zorluğu ve genel ortalama ancak sonradan belli oluyor. Biz son yılların ÖSYM verilerinden yola çıkarak tahmin bandı sunuyoruz. Kesin sonuç için ÖSYM sonuç belgesini bekle.'
                },
                {
                    q: 'AYT\'de hangi testleri çözmeliyim?',
                    a: 'Kitapçıkta 160 soru var ama senin hedefin kendi alanındaki 80 soru. Sayısalcıysan Mat (40) + Fen (40), EA\'cıysan Mat (40) + Edebiyat-Sos-1 (40), Sözelciysen Edebiyat-Sos-1 (40) + Sosyal-2 (40).'
                },
                {
                    q: 'Son 2-3 ayda konu çalışmayı bırakmalı mıyım?',
                    a: 'Sıfırdan kalın kitaplarla konu çalışmak yerine branş denemelerine ve çıkmış sorulara ağırlık ver. Denemede yanlış yaptığın soruların analiziyle eksik kapatmak daha hızlı net artırır.'
                }
            ]
        },
        {
            category: 'Site ve Gizlilik',
            icon: '💻',
            questions: [
                {
                    q: 'Girdiğim bilgiler kaydediliyor mu?',
                    a: 'Hayır. Hesaplama tamamen tarayıcında çalışır, sunucuya veri gönderilmez. Sayfayı yenilediğinde veya kapattığında girdiğin her şey silinir.'
                },
                {
                    q: 'Site ücretli mi olacak?',
                    a: 'Hayır. Üyelik, e-posta kaydı veya ücret yok. Aç, netlerini gir, sonucunu gör. Böyle kalacak.'
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
                        ← Hesaplama Aracına Dön
                    </Link>
                </div>

                <header className="text-center mb-12">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3">
                        Soru-Cevap
                    </span>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                        Sık Sorulan Sorular
                    </h1>
                    <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">
                        ÖSYM kılavuzundaki kuralları, katsayıları ve net hesabını anlaşılır şekilde topladık.
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

                <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-sm">
                    <h2 className="text-xl font-bold text-slate-900 mb-2">
                        Başka sorun mu var?
                    </h2>
                    <p className="text-slate-600 text-sm mb-6 max-w-lg mx-auto">
                        Blog yazılarına göz at veya bize doğrudan yaz.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link href="/blog" className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm">
                            Blog Yazıları
                        </Link>
                        <Link href="/iletisim" className="px-5 py-2.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-xl hover:bg-slate-200 transition-colors">
                            İletişim
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
