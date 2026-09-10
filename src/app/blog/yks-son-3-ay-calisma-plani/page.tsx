import type { Metadata } from 'next'
import Link from 'next/link'
import AuthorProfile from '@/components/AuthorProfile'
import BlogArticleSchema from '@/components/BlogArticleSchema'

export const metadata: Metadata = {
    title: 'YKS Son 3 Ay Çalışma Programı: Netleri Zirveye Taşıma Rehberi 2027',
    description: 'YKS\'ye 3 ay kala net artar mı? Mart-Haziran arası haftalık çalışma programı, TYT-AYT deneme sıklığı, branş tekrarları ve çıkmış soru stratejisi.',
    keywords: 'yks son 3 ay çalışma programı, yks son 100 gün, sınava 3 ay kala program, yks son 3 ay net artar mı, ayt son 3 ay yetişir mi',
    alternates: { canonical: 'https://yksnethesapla.com/blog/yks-son-3-ay-calisma-plani' },
    openGraph: {
        title: 'YKS Son 3 Ay Çalışma Programı: Netleri Zirveye Taşıma Stratejisi',
        description: 'Sınava 3 ay kala konu çalışma bırakılıp deneme sistemine nasıl geçilir? Haftalık görev planı ve son 90 gün yol haritası.',
        type: 'article',
        publishedTime: '2026-09-10',
        modifiedTime: '2026-09-10',
        url: 'https://yksnethesapla.com/blog/yks-son-3-ay-calisma-plani',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'YKS Son 3 Ay Çalışma Programı'
            }
        ],
    },
}

export default function YksSon3AyCalismaPlani() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
            <article className="max-w-4xl mx-auto">
                <BlogArticleSchema 
                    title="YKS Son 3 Ay Çalışma Programı: Netleri Zirveye Taşıma Rehberi 2027" 
                    description="YKS'ye 3 ay kala net artar mı? Mart-Haziran arası haftalık çalışma programı, TYT-AYT deneme sıklığı, branş tekrarları ve çıkmış soru stratejisi."
                    datePublished="2026-09-10"
                    dateModified="2026-09-10"
                    url="https://yksnethesapla.com/blog/yks-son-3-ay-calisma-plani"
                    keywords={['yks son 3 ay çalışma programı', 'yks son 100 gün', 'sınava 3 ay kala program', 'yks son 3 ay net artar mı', 'ayt son 3 ay yetişir mi']}
                />
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600">Ana Sayfa</Link>
                        {' > '}
                        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                        {' > '}
                        <span className="text-gray-900">YKS Son 3 Ay Çalışma Planı</span>
                    </nav>

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">Strateji & Plan</span>
                            <time className="text-gray-600" dateTime="2026-09-10">10 Eylül 2026</time>
                            <span className="text-gray-600">• 11 dk okuma</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            YKS Son 3 Ay Çalışma Programı: Netleri Zirveye Taşıma Stratejisi
                        </h1>
                        <p className="text-xl text-gray-600">
                            Takvim Mart veya Nisan&apos;ı gösterdiğinde panik başlar: &quot;Yetişmeyecek, mezuna mı kalsam?&quot; Gerçek şu: YKS&apos;de sıralamaların asıl belirlendiği dönem tam olarak bu son 90 gündür.
                        </p>
                    </header>

                    <AuthorProfile />

                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-8">
                        <p className="text-lg leading-relaxed">
                            Her yıl Mart ayının ortasından itibaren rehberlik servislerine gelen öğrencilerin neredeyse tamamı aynı soruyu sorar: <em>&quot;Hocam şu an TYT&apos;de 65, AYT&apos;de 30 net yapıyorum. Kalan zamanda 80 TYT, 55 AYT&apos;ye çıkabilir miyim?&quot;</em>
                        </p>

                        <p>
                            Cevap çok açık: <strong>Evet, çıkabilirsiniz. Ancak bugüne kadar çalıştığınız gibi çalışmaya devam ederek değil.</strong> İlk 6 ayda uyguladığınız &quot;konu videosu izle, kitaptan 3 test çöz&quot; mantığı son 3 ayda iflas eder. Artık konu çalışma devri kapandı; teşhis ve nokta atışı tamir devri başladı.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg text-blue-950 text-sm my-6">
                            <strong>İstatistiksel Gerçek:</strong> AYT doğrudan bilgiye dayalı bir sınav olduğu için son 90 günde net sıçramasının en sert yaşandığı yerdir. TYT hız ve kondisyon ister, yavaş artar. Ama AYT&apos;de öğrenilen tek bir formül veya biyoloji mekanizması, sınavda hanenize doğrudan +1,25 net yazar.
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Son 3 Ayda Net Artışı Neden Mümkündür?
                        </h2>

                        <p>
                            Öğrencilerin çoğu son düzlükte iki büyük yanılgıya düşer. Birincisi &quot;bu saatten sonra bir şey değişmez&quot; diyerek pes etmek, ikincisi ise hala sıfırdan 500 sayfalık konu anlatımı kitaplarını bitirmeye çalışmak.
                        </p>

                        <p>
                            Son 90 günde netlerin patlama yapmasının 3 somut sebebi vardır:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Unutma eğrisinin tersine dönmesi:</strong> Son 3 ayda öğrendiğiniz veya tekrar ettiğiniz bilgiler sınav gününe kadar taze kalır. Eylül ayında gördüğünüz trigonometriyi unutmuş olabilirsiniz ama Nisan&apos;da taradığınız trigonometri sınav günü zihninizde canlıdır.</li>
                            <li><strong>Soru tipi aşinalığı:</strong> Son aylarda artırılan branş denemeleri sayesinde ÖSYM soru kalıpları refleks haline gelir. Soruyu gördüğünüz an ne istediğini ilk 10 saniyede kavrarsınız.</li>
                            <li><strong>Rakiplerin elenmesi:</strong> Son 3 ayda adayların en az üçte biri psikolojik olarak havlu atar, rehavete kapılır veya mezun planları kurmaya başlar. Sadece masada kalmaya devam etmek bile sıralamanızı on binlerce kişi ileri iter.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Son 3 Ayın Evreleri: 90 Günlük Yol Haritası
                        </h2>

                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200">
                                <thead className="bg-gray-100 text-gray-800 text-sm">
                                    <tr>
                                        <th className="p-3 border">Dönem</th>
                                        <th className="p-3 border">Odak Noktası</th>
                                        <th className="p-3 border">TYT / AYT Oranı</th>
                                        <th className="p-3 border">Haftalık Deneme Sayısı</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">1. Ay (Son 90 - 60 Gün)</td>
                                        <td className="p-3 border">AYT Ağır Konular + Branş Denemeleri</td>
                                        <td className="p-3 border">%35 TYT - %65 AYT</td>
                                        <td className="p-3 border">2 TYT + 2 AYT Genel / Günlük Branş</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-semibold border">2. Ay (Son 60 - 30 Gün)</td>
                                        <td className="p-3 border">MEB Kitapları + Çıkmış Sorular + Seri Deneme</td>
                                        <td className="p-3 border">%30 TYT - %70 AYT</td>
                                        <td className="p-3 border">3 TYT + 3 AYT Genel</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-semibold border">3. Ay (Son 30 Gün)</td>
                                        <td className="p-3 border">Kondisyon + Hata Defteri + Biyolojik Saat</td>
                                        <td className="p-3 border">%25 TYT - %75 AYT</td>
                                        <td className="p-3 border">Hemen her gün deneme (10:15 rutini)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            1. Aşama (Son 90 - 60 Gün): Büyük Delikleri Kapatma
                        </h2>

                        <p>
                            Bu aşamada yapılacak en büyük stratejik hata konu çalışmayı tamamen kesmek veya tam tersi deneme çözmeyi ertelemektir. İkisinin dengesi kurulmalıdır.
                        </p>

                        <p>
                            Elinize bir kağıt alın ve AYT derslerini yazın: Matematik, Fizik, Kimya, Biyoloji (veya Edebiyat, Tarih, Coğrafya). Her derste <strong>&quot;kesinlikle soru çıkan ama yapamadığınız&quot;</strong> 3&apos;er konuyu işaretleyin. Örneğin:
                        </p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Matematikte: Türevin geometrik yorumu ve belirli integral</li>
                            <li>Fizikte: Elektrik ve Manyetizma (özellikle indüksiyon)</li>
                            <li>Biyolojide: Fotosentez-Solunum veya Hücresel Solunum</li>
                            <li>Edebiyatta: Cumhuriyet Dönemi Şiir Toplulukları</li>
                        </ul>

                        <p>
                            Bu 3&apos;er konuyu 4 hafta içinde bitirin. Tüm müfredatı değil; sadece her yıl banko soru getiren bu omurga konuları hedefleyin. <Link href="/blog/ayt-matematik-konulari" className="text-blue-600 font-semibold hover:underline">AYT Matematik konu dağılımı</Link> yazımızdaki istatistiklere bakarak en çok kazandıran konuları seçebilirsiniz.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            2. Aşama (Son 60 - 30 Gün): Çıkmış Sorular ve MEB Taraması
                        </h2>

                        <p>
                            Mayıs ayına girdiğinizde piyasa denemelerinden çok ÖSYM&apos;nin kendi diline odaklanmanız şarttır. Son 6 yılın YKS (TYT ve AYT) sorularını, hatta 2018 öncesi LYS sorularını branş bazında masaya yatırın.
                        </p>

                        <p>
                            ÖSYM soru yazarları uzaydan soru üretmez. Kullandıkları tek resmi kaynak MEB ders kitaplarıdır. Özellikle Kimya, Biyoloji, Tarih ve Edebiyat branşlarında MEB 11 ve 12. sınıf ders kitaplarındaki okuma parçalarını, ünite sonu değerlendirme sorularını ve deney kutularını mutlaka tarayın. Sınavda birebir MEB kitabındaki paragraftan soru geldiğini gördüğünüzde bu emeğin karşılığını alacaksınız.
                        </p>

                        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-5 rounded-r-lg text-emerald-950 text-sm my-6">
                            <strong>Çıkmış Soru Çözme Kuralı:</strong> Çıkmış soruları fotokopi kağıdından rastgele çözmeyin. Gerçek sınav kitapçığı formatında, kronometre tutarak ve optik form kodlayarak çözün. Ardından her yanlış soruyu &quot;Ben bu soruyu neden kaçırdım? Bilgi eksikliği mi, dikkat hatası mı, soru kökünü yanlış okuma mı?&quot; diye sınıflandırın.
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            3. Aşama (Son 30 Gün): Biyolojik Kondisyon ve Hata Defteri
                        </h2>

                        <p>
                            Sınava son 1 ay kala yeni büyük konulara başlanmaz. Bu dönemin iki temel görevi vardır:
                        </p>

                        <p>
                            <strong>1. 10:15 Rutini:</strong> Her sabah saat 10:15&apos;te masaya oturup gerçek sınav koşullarında (masada su dışında hiçbir şey olmadan, telefon kapalı, kalkmadan) deneme çözün. Vücudunuz ve beyniniz saat 10:15 ile 13:00 arasında maksimum odak seviyesinde çalışmaya biyolojik olarak koşullanmalıdır.
                        </p>

                        <p>
                            <strong>2. Hata Defteri Analizi:</strong> Bugüne kadar girdiğiniz tüm denemelerde yanlış yaptığınız veya boş bıraktığınız soruları kestiğiniz bir dosya/defter olmalı. Son 30 günde her akşam 45 dakikanızı yalnızca bu hatalı soruları baştan çözmeye ayırın. Netleri asıl yükselten şey doğru yaptıklarınız değil, yanlışlarınızdan aldığınız derslerdir.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Haftalık Görev Bazlı Çalışma Şablonu
                        </h2>

                        <p>
                            Saat bazlı programlar (&quot;09:00-10:30 Matematik, 10:45-12:00 Fizik&quot;) son 3 ayda sürdürülemez. Bir gün geç kalktığınızda tüm program çöker ve suçluluk hissedersiniz. Bunun yerine <strong>haftalık görev listesi</strong> mantığına geçin.
                        </p>

                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Örnek Haftalık Görev Tablosu (Son 3 Ay)</h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li><strong>Genel Denemeler:</strong> Haftada 2 adet TYT, 2 adet AYT genel denemesi ve detaylı analizleri.</li>
                                <li><strong>Türkçe & Paragraf:</strong> Haftada 3 branş denemesi. Teknik eksikler için <Link href="/blog/tyt-turkce-paragraf-teknikleri" className="text-blue-600 hover:underline">TYT paragraf teknikleri</Link> rehberindeki süre kuralları.</li>
                                <li><strong>Matematik:</strong> 1 haftada 1 AYT konusu (örneğin Diziler + Logaritma) 150 soru taranarak kapatılacak.</li>
                                <li><strong>Fen / Sosyal:</strong> Gün aşırı 1&apos;er adet Fen ve Sosyal branş denemesi (40 dakika çözüm + 20 dakika eksik konu okuması).</li>
                                <li><strong>Pazar Akşamı:</strong> Haftanın hata defteri tekrarı ve gelecek haftanın net hedeflerinin belirlenmesi.</li>
                            </ul>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Deneme Analizi Yapmadan Net Artıramazsınız
                        </h2>

                        <p>
                            Denemeyi çözüp sadece &quot;kaç doğru kaç yanlış yaptım&quot; diye bakıp bir kenara fırlatıyorsanız, o denemeye harcadığınız 165 dakika büyük oranda boşa gitmiştir. Deneme, bilginizi ölçmekten ziyade eksiklerinizi ifşa etmek için vardır.
                        </p>

                        <p>
                            Doğru bir deneme analizi 4 adımdan oluşur:
                        </p>

                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>Yanlışların Sebebi:</strong> Hata bilgi eksikliğinden mi kaynaklandı, işlem hatasından mı, yoksa soruyu yanlış okumaktan mı? Bilgi eksikliği ise konu başlığını hemen o günün tekrar listesine yazın.</li>
                            <li><strong>Şans Eseri Tutmuş Doğrular:</strong> İki şık arasında kalıp salladığınız ve tutan soruları da yanlış muamelesi yaparak analiz edin. Sınavda şansınız yaver gitmeyebilir.</li>
                            <li><strong>Boş Bırakılan Sorular:</strong> Süre yetmediği için mi boş kaldı, yoksa konuya dair hiçbir fikriniz olmadığı için mi? Süre problemiyse turlama taktiğini geliştirin.</li>
                            <li><strong>Net Takip Çizelgesi:</strong> Her denemenin ders bazlı netlerini kaydedin ve dalgalanmalara göre strateji belirleyin. Net artırma adımları için <Link href="/blog/tyt-net-artirma-taktikleri" className="text-blue-600 hover:underline">TYT net artırma taktikleri</Link> rehberimizi inceleyebilirsiniz.</li>
                        </ol>

                        {/* CTA Kutusu */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 text-center my-10 shadow-lg">
                            <h3 className="text-2xl font-bold mb-3">Güncel Netlerinizi ve Sıralamanızı Hesaplayın</h3>
                            <p className="text-blue-100 max-w-2xl mx-auto mb-6 text-sm md:text-base">
                                Son denemenizdeki doğru-yanlış sayılarınızı girin; güncel katsayılar ve OBP puanınızla 2026/2027 tahmini YKS sıralamanızı anında görün.
                            </p>
                            <Link 
                                href="/" 
                                className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl shadow-md hover:bg-blue-50 transition transform hover:-translate-y-0.5"
                            >
                                YKS Net Hesaplayıcıya Git →
                            </Link>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Son 3 Ayda Psikoloji ve Uyku Yönetimi
                        </h2>

                        <p>
                            Son aylarda derece yapan öğrencilerle potansiyelinin altında kalan öğrencileri ayıran en kritik fark zeka veya soru sayısı değildir. Masada kalma iradesi ve zihinsel dayanıklılıktır.
                        </p>

                        <p>
                            Günde 4 saat uyuyup günde 14 saat masa başında verimsizce gözleri kanlanmış şekilde oturmak başarı getirmez. Beyin, denemelerde çözdüğünüz bilgileri ve problem çözme örüntülerini derin uyku sırasında sinaptik bağlantılara dönüştürür. Günde en az 7 saat düzenli uyku, sınav kondisyonunun olmazsa olmaz parçasıdır.
                        </p>

                        <p>
                            Şunu asla unutmayın: Şu an yaptığınız netler sizin son netleriniz değil. Son 3 ayda doğru strateji, disiplinli deneme analizi ve soğukkanlılıkla 15-25 netlik bir artış yakalamak kesinlikle gerçekçi ve mümkündür. Masadan kalkmayın, süreci yönetin.
                        </p>
                    </div>

                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#yksSon3Ay</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#calismaProgrami</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#tytNetArtırma</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#aytHazirlik</span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">#yksRehberlik</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <Link href="/blog" className="text-blue-600 hover:underline font-medium">← Blog Listesine Dön</Link>
                            <Link href="/blog/tyt-turkce-paragraf-teknikleri" className="text-blue-600 hover:underline font-medium">TYT Türkçe Paragraf Teknikleri →</Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}
