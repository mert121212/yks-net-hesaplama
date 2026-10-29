import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogHeroBanner from '@/components/BlogHeroBanner'
import BlogArticleSchema from '@/components/BlogArticleSchema'
import ArticleFeedback from '@/components/ArticleFeedback'
import ReadingProgress from '@/components/ReadingProgress'
import LastUpdatedBadge from '@/components/LastUpdatedBadge'

export const metadata: Metadata = {
    title: 'Hangi Puan Türü Hangi Bölüme Götürür? Üniversite Bölüm Seçim Rehberi 2027',
    description: 'SAY, EA, SÖZ ve DİL ile alan popüler bölümler, mesleklerin kariyer potansiyeli, 2 yıllık önlisans fırsatları ve bilinçli tercih stratejisi.',
    keywords: 'hangi puan türü hangi bölüm, say bölümleri 2027, ea bölümleri, söz bölümleri, yks bölüm seçimi, tyt ile alan popüler bölümler',
    alternates: { canonical: 'https://yksnethesapla.com/blog/hangi-puan-turu-hangi-bolum' },
    openGraph: {
        title: 'Hangi Puan Türü Hangi Bölüme Götürür? Üniversite Bölüm Seçim Rehberi',
        description: 'SAY, EA, SÖZ ve DİL bölümleri tam liste, meslek tercihinde yapılan kritik hatalar ve doğru alan seçimi.',
        type: 'article',
        publishedTime: '2026-10-29',
        modifiedTime: '2026-10-29',
        url: 'https://yksnethesapla.com/blog/hangi-puan-turu-hangi-bolum',
        images: [
            {
                url: '/images/blog/yks-puan-turleri.jpg',
                width: 1200,
                height: 630,
                alt: 'Üniversite Bölüm Seçimi ve Puan Türleri Rehberi'
            }
        ],
    },
}

export default function HangiPuanTuruHangiBolum() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <ReadingProgress />
                <BlogArticleSchema 
                    title="Hangi Puan Türü Hangi Bölüme Götürür? Üniversite Bölüm Seçim Rehberi 2027" 
                    description="SAY, EA, SÖZ ve DİL ile alan popüler lisans ve önlisans bölümleri, mesleklerin kariyer fırsatları ve alan seçimi kılavuzu."
                    datePublished="2026-10-29"
                    dateModified="2026-10-29"
                    url="https://yksnethesapla.com/blog/hangi-puan-turu-hangi-bolum"
                    keywords={['hangi puan türü hangi bölüm', 'say bölümleri 2027', 'ea bölümleri', 'söz bölümleri', 'yks bölüm seçimi']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">Bölüm Seçim Rehberi</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Kariyer Masası</span>
                            <time className="text-gray-600" dateTime="2026-10-29">29 Ekim 2026</time>
                            <span className="text-gray-600">• 12 dk okuma</span>
                            <LastUpdatedBadge date="2026-10-29" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Hangi Puan Türü Hangi Bölüme Götürür? 2027 Üniversite Tercih Pusulası
                        </h1>
                        <p className="text-xl text-gray-600">
                            Aylarca soru çözüp hedefine ulaştığında elindeki puanla hangi kapıların açılacağını bilmek en doğal hakkın. Sayısal, Eşit Ağırlık, Sözel ve Dil ile alan tüm bölümleri, iş olanaklarını ve tercih tüyolarını derledik.
                        </p>
                    </header>

                    <AuthorProfile />

                    <BlogHeroBanner
                        src="/images/blog/yks-puan-turleri.jpg"
                        alt="Üniversite Bölüm Seçimi ve Puan Türleri"
                    />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            YKS hazırlık maratonunun en kritik kararı lisede alan seçerken veya mezun senesinde hangi derslere odaklanacağını belirlerken verilir. Birçok aday, hayalindeki mesleğin hangi puan türüyle öğrenci aldığını son sınıfta öğrenip şok yaşıyor.
                        </p>

                        <p>
                            Geleceğini şansa bırakmamak için hangi puan türünün hangi meslek grubuna hitap ettiğini ayrıntılarıyla inceleyelim.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Sayısal (SAY) Puanı ile Alan Bölümler
                        </h2>
                        <p>
                            Sayısal alan; matematik, fizik, kimya ve biyolojiye yatkın öğrencilerin tercih ettiği, teknoloji ve sağlık sektörünün merkezinde yer alan bölümleri kapsar. YÖK başarı sırası barajlarının en sık uygulandığı alandır.
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border border-gray-200 text-sm">
                                <thead className="bg-blue-50 text-blue-950 font-semibold">
                                    <tr>
                                        <th className="p-3 border">Bölüm Grubu</th>
                                        <th className="p-3 border">Öne Çıkan Programlar</th>
                                        <th className="p-3 border">YÖK Barajı</th>
                                        <th className="p-3 border">Kariyer Alanları</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Sağlık Bilimleri</td>
                                        <td className="p-3 border">Tıp, Diş Hekimliği, Eczacılık, Veterinerlik</td>
                                        <td className="p-3 border font-bold text-red-600">Tıp: 50k, Diş: 80k, Ecz: 100k</td>
                                        <td className="p-3 border">Hastaneler, klinikler, ilaç sektörü, akademik kariyer.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Bilişim & Yazılım</td>
                                        <td className="p-3 border">Bilgisayar Müh., Yazılım Müh., Yapay Zeka Müh.</td>
                                        <td className="p-3 border font-bold text-red-600">Mühendislik: 300k</td>
                                        <td className="p-3 border">Teknoloji şirketleri, uzaktan küresel çalışma, start-up&apos;lar.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Temel Mühendislikler</td>
                                        <td className="p-3 border">Elektrik-Elektronik, Makine, Endüstri, İnşaat Müh.</td>
                                        <td className="p-3 border font-bold text-red-600">Mühendislik: 300k</td>
                                        <td className="p-3 border">Sanayi tesisleri, savunma sanayii, lojistik, üretim.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Tasarım & Doğa</td>
                                        <td className="p-3 border">Mimarlık, İç Mimarlık, Moleküler Biyoloji, Beslenme ve Diyetetik</td>
                                        <td className="p-3 border font-bold text-red-600">Mimarlık: 250k</td>
                                        <td className="p-3 border">Mimarlık ofisleri, laboratuvarlar, gıda ve sağlık merkezleri.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. Eşit Ağırlık (EA) Puanı ile Alan Bölümler
                        </h2>
                        <p>
                            Eşit Ağırlık; analitik düşünce ile sosyal kavrayışı birleştiren adayların alanıdır. Matematikte fark yaratan bir adayın çok hızlı yükseldiği bu alanda hukuktan yönetime geniş bir yelpaze yer alır.
                        </p>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border border-gray-200 text-sm">
                                <thead className="bg-emerald-50 text-emerald-950 font-semibold">
                                    <tr>
                                        <th className="p-3 border">Bölüm Grubu</th>
                                        <th className="p-3 border">Öne Çıkan Programlar</th>
                                        <th className="p-3 border">YÖK Barajı</th>
                                        <th className="p-3 border">Kariyer Alanları</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">Hukuk ve Adalet</td>
                                        <td className="p-3 border">Hukuk Fakültesi</td>
                                        <td className="p-3 border font-bold text-red-600">İlk 125.000</td>
                                        <td className="p-3 border">Avukatlık, hakimlik, savcılık, şirket hukuk müşavirliği.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Yönetim ve Bilişim</td>
                                        <td className="p-3 border">Yönetim Bilişim Sistemleri (YBS), İşletme, İktisat</td>
                                        <td className="p-3 border text-gray-500">Baraj Yok</td>
                                        <td className="p-3 border">Veri analizi, dijital pazarlama, finans, bankacılık, yöneticilik.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">İnsan ve Davranış</td>
                                        <td className="p-3 border">Psikoloji, Rehberlik ve Psikolojik Danışmanlık (PDR), Sosyoloji</td>
                                        <td className="p-3 border font-bold text-red-600">PDR (Öğretmenlik): 300k</td>
                                        <td className="p-3 border">Klinikler, okullar, insan kaynakları departmanları.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">Eğitim</td>
                                        <td className="p-3 border">Sınıf Öğretmenliği, Sosyal Bilgiler Öğretmenliği</td>
                                        <td className="p-3 border font-bold text-red-600">İlk 300.000</td>
                                        <td className="p-3 border">Devlet ve özel ilkokullar, eğitim kurumları.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. Sözel (SÖZ) Puanı ile Alan Bölümler
                        </h2>
                        <p>
                            Medya, iletişim, sanat, tarih ve sözel eğitim alanlarını kapsar. Okuma, analiz ve hitabet yeteneği güçlü adaylar için idealdir.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-800">
                            <li><strong>Özel Eğitim Öğretmenliği:</strong> Atama oranları ve istihdam garantisiyle sözelin en yüksek puanlı bölümüdür (300k barajı geçerlidir).</li>
                            <li><strong>Gastronomi ve Mutfak Sanatları:</strong> Son yılların yükselen yıldızı; otelcilik, restoran işletmeciliği ve şeflik.</li>
                            <li><strong>Türkçe ve Okul Öncesi Öğretmenliği:</strong> Eğitim fakültelerinin en popüler sözel programları.</li>
                            <li><strong>Radyo, Televizyon ve Sinema / İletişim:</strong> Medya kuruluşları, reklam ajansları, içerik üreticiliği.</li>
                            <li><strong>Tarih, Coğrafya ve Türk Dili Edebiyatı:</strong> Akademik çalışmalar, müzeler, arşivler ve öğretmenlik.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4. Yabancı Dil (DİL) ile Alan Bölümler
                        </h2>
                        <p>
                            YDT sınavına giren adayların tercih ettiği filoloji ve çeviri programlarıdır:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-800">
                            <li><strong>İngilizce Öğretmenliği:</strong> En popüler dil bölümü; yüksek atama ve özel sektör imkânı.</li>
                            <li><strong>Mütercim ve Tercümanlık (İngilizce/Almanca/Fransızca):</strong> Uluslararası kuruluşlar, dış ticaret şirketleri, çeviri büroları.</li>
                            <li><strong>İngiliz Dili ve Edebiyatı:</strong> Akademik kariyer, editörlük, kurumsal iletişim.</li>
                            <li><strong>Turizm Rehberliği:</strong> Yabancı dilde kokartlı profesyonel turist rehberliği.</li>
                        </ul>

                        <div className="bg-slate-900 text-white rounded-2xl p-6 my-8 not-prose">
                            <h3 className="text-lg font-bold text-emerald-400 mb-2">Hedeflediğin Bölüm İçin Kaç Net Lazım?</h3>
                            <p className="text-sm text-slate-300 mb-4">
                                İstediğin bölümün güncel taban puan ve net analizini hesaplama motorumuzla test et; tahmini sıralamanın yetip yetmediğini anında gör.
                            </p>
                            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors">
                                Puan ve Sıralama Motorunu Çalıştır →
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Bölüm Seçerken Yapılan 3 Kritik Hata
                        </h2>
                        <div className="space-y-4 my-6">
                            <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                                <h3 className="font-bold text-red-950 mb-1">1. &ldquo;Puanım Boşa Gitmesin&rdquo; Psikolojisi</h3>
                                <p className="text-sm text-red-900">
                                    Sırf sıralaman ilk 15 bine yetti diye hiç ilgi duymadığın bir mühendisliği veya tıp fakültesini yazmak ömür boyu mutsuzluğa davetiye çıkarır. Puan araçtır, hedef senin hayatındır.
                                </p>
                            </div>
                            <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                                <h3 className="font-bold text-red-950 mb-1">2. Puan Türü Uyuşmazlığı</h3>
                                <p className="text-sm text-red-900">
                                    YBS&apos;nin Sayısal olduğunu sanıp fen çalışanlar, Gastronomi&apos;nin Eşit Ağırlık olduğunu sanıp edebiyatı ihmal edenler... Başlamadan önce kılavuzdaki puan türünü mutlaka teyit et.
                                </p>
                            </div>
                            <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                                <h3 className="font-bold text-red-950 mb-1">3. YÖK Baraj Sıralamasını Göz Ardı Etmek</h3>
                                <p className="text-sm text-red-900">
                                    Vakıf üniversitelerinde dahi baraj sıralamasının bir kişi gerisindeysen tercih hakkın yoktur. Tıp 50k, Hukuk 125k barajlarını kafana kazı.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Sıkça Sorulan Sorular
                        </h2>

                        <div className="space-y-4 my-6">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">Hem Sayısal hem Eşit Ağırlık tercihi aynı listede yapılabilir mi?</h3>
                                <p className="text-sm text-gray-700">
                                    Evet. ÖSYM tercih listesinde 24 tercih hakkın vardır. Listene 1. sıraya Sayısal bir mühendislik, 2. sıraya Eşit Ağırlık bir Hukuk veya YBS yazabilirsin. Sistem her tercihinde ilgili puan türünün sıralamasını dikkate alır.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-base mb-1">TYT ile 4 yıllık lisans bölümü yazılır mı?</h3>
                                <p className="text-sm text-gray-700">
                                    Hayır, TYT puanı yalnızca 2 yıllık ön lisans programları için geçerlidir. 4 yıllık lisans bölümleri için mutlaka AYT (SAY, EA, SÖZ) veya YDT (DİL) puanı şarttır.
                                </p>
                            </div>
                        </div>

                        <p className="mt-8">
                            Ders testlerinin puan türlerine ağırlıklarını öğrenmek için <Link href="/blog/yks-puan-turleri" className="text-blue-600 font-semibold hover:underline">YKS Puan Türleri Rehberi</Link>&apos;ne dönebilir, tercih listesi hazırlama taktikleri için <Link href="/blog/universite-tercih-stratejileri" className="text-blue-600 font-semibold hover:underline">Üniversite Tercih Stratejileri</Link> yazımıza göz atabilirsin.
                        </p>

                        <ArticleFeedback />
                    </div>
                </div>
            </article>
        </div>
    )
}
