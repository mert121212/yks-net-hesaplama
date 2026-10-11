const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');

const enrichments = {
    'ayt-puan-hesaplama': {
        check: 'AYT Katsayı ve Test Ağırlıkları Matrisi',
        target: '<ArticleFeedback />',
        addition: `
                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            AYT Katsayı ve Test Ağırlıkları Matrisi
                        </h2>
                        <p>
                            AYT puanı hesaplanırken sadece sınav anında yaptığınız netler değil, TYT'nin %40'lık temel katkısı da hesaplamaya doğrudan dahil edilir. Alanınıza göre testlerin net katkı katsayıları aşağıda özetlenmiştir:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-blue-50 text-blue-900 font-semibold">
                                    <tr>
                                        <th className="p-3 border">Test Adı</th>
                                        <th className="p-3 border">Soru Sayısı</th>
                                        <th className="p-3 border">SAY Ağırlığı</th>
                                        <th className="p-3 border">EA Ağırlığı</th>
                                        <th className="p-3 border">SÖZ Ağırlığı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">TYT Toplamı</td>
                                        <td className="p-3 border">120</td>
                                        <td className="p-3 border">%40</td>
                                        <td className="p-3 border">%40</td>
                                        <td className="p-3 border">%40</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">AYT Matematik</td>
                                        <td className="p-3 border">40</td>
                                        <td className="p-3 border">%30</td>
                                        <td className="p-3 border">%30</td>
                                        <td className="p-3 border">-</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">AYT Fizik - Kimya - Biyo</td>
                                        <td className="p-3 border">40</td>
                                        <td className="p-3 border">%30</td>
                                        <td className="p-3 border">-</td>
                                        <td className="p-3 border">-</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">AYT Edebiyat - Tarih-1 - Coğ-1</td>
                                        <td className="p-3 border">40</td>
                                        <td className="p-3 border">-</td>
                                        <td className="p-3 border">%30</td>
                                        <td className="p-3 border">%30</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">AYT Sosyal-2 Testi</td>
                                        <td className="p-3 border">40</td>
                                        <td className="p-3 border">-</td>
                                        <td className="p-3 border">-</td>
                                        <td className="p-3 border">%30</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Alan seçiminize göre puan türleri detayları için <Link href="/blog/yks-puan-turleri" className="text-blue-600 font-semibold hover:underline">YKS Puan Türleri Rehberi</Link> sayfamızı, lise notunuzun puana etkisini öğrenmek için ise <Link href="/blog/obp-hesaplama" className="text-blue-600 font-semibold hover:underline">OBP Hesaplama Rehberi</Link> içeriğimizi inceleyebilirsiniz. Matematik netlerinizi artırmak için <Link href="/blog/ayt-matematik-konulari" className="text-blue-600 font-semibold hover:underline">AYT Matematik Konuları</Link> planını takip edebilirsiniz.
                        </p>
`
    },
    'obp-hesaplama': {
        check: 'OBP Puan Katkısı ve Sıralama Etki Tablosu',
        target: '<ArticleFeedback />',
        addition: `
                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            OBP Puan Katkısı ve Sıralama Etki Tablosu
                        </h2>
                        <p>
                            Adayların en çok merak ettiği konulardan biri de farklı diploma notlarının YKS yerleştirme puanına net olarak kaç puan eklediğidir. Aşağıdaki tabloda diploma notunun hem normal (0,12) hem de kırık OBP (0,06) durumundaki getirileri karşılaştırılmıştır:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-indigo-50 text-indigo-950 font-semibold">
                                    <tr>
                                        <th className="p-3 border">Lise Diploma Notu</th>
                                        <th className="p-3 border">OBP Değeri (× 5)</th>
                                        <th className="p-3 border">Normal Katkı (0,12)</th>
                                        <th className="p-3 border text-amber-700">Kırık OBP Katkısı (0,06)</th>
                                        <th className="p-3 border text-red-600">Kayıp Puan Farkı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">100 (Tam Puan)</td>
                                        <td className="p-3 border">500</td>
                                        <td className="p-3 border font-bold text-emerald-600">+60,0 Puan</td>
                                        <td className="p-3 border">+30,0 Puan</td>
                                        <td className="p-3 border text-red-600">-30,0 Puan</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">90</td>
                                        <td className="p-3 border">450</td>
                                        <td className="p-3 border font-bold text-emerald-600">+54,0 Puan</td>
                                        <td className="p-3 border">+27,0 Puan</td>
                                        <td className="p-3 border text-red-600">-27,0 Puan</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">80</td>
                                        <td className="p-3 border">400</td>
                                        <td className="p-3 border font-bold text-emerald-600">+48,0 Puan</td>
                                        <td className="p-3 border">+24,0 Puan</td>
                                        <td className="p-3 border text-red-600">-24,0 Puan</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">70</td>
                                        <td className="p-3 border">350</td>
                                        <td className="p-3 border font-bold text-emerald-600">+42,0 Puan</td>
                                        <td className="p-3 border">+21,0 Puan</td>
                                        <td className="p-3 border text-red-600">-21,0 Puan</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">60</td>
                                        <td className="p-3 border">300</td>
                                        <td className="p-3 border font-bold text-emerald-600">+36,0 Puan</td>
                                        <td className="p-3 border">+18,0 Puan</td>
                                        <td className="p-3 border text-red-600">-18,0 Puan</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Yığılma bölgesinde 10 puanlık bir OBP farkının sıralamayı nasıl 20-30 bin kişi ileri veya geri attığını görmek için <Link href="/blog/yks-yigilma-tehlikesi" className="text-blue-600 font-semibold hover:underline">YKS Yığılma Analizi</Link> makalemize göz atabilir, 1 netin değerini <Link href="/blog/yks-1-net-kac-kisi-atar" className="text-blue-600 font-semibold hover:underline">YKS'de 1 Net Kaç Kişi Atar?</Link> yazımızdan öğrenebilirsiniz.
                        </p>
`
    },
    'tyt-kesin-cikan-konular': {
        check: 'TYT Garanti Soru Çıkan Konular Özeti',
        target: '<ArticleFeedback />',
        addition: `
                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            TYT Garanti Soru Çıkan Konular Özeti
                        </h2>
                        <p>
                            Sınava hazırlanırken her konunun ağırlığı aynı değildir. ÖSYM'nin son 6 yıllık sınav karnesi incelendiğinde bazı konuların istisnasız her yıl soru getirdiği görülür:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-emerald-50 text-emerald-950 font-semibold">
                                    <tr>
                                        <th className="p-3 border">Ders</th>
                                        <th className="p-3 border">Garanti Konu</th>
                                        <th className="p-3 border">Ort. Soru Sayısı</th>
                                        <th className="p-3 border">Zorluk Seviyesi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Türkçe</td>
                                        <td className="p-3 border">Paragrafta Anlam & Ana Düşünce</td>
                                        <td className="p-3 border font-bold text-emerald-600">22-26 Soru</td>
                                        <td className="p-3 border">Orta (Hız Gerekir)</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Matematik</td>
                                        <td className="p-3 border">Temel Kavramlar & Sayı Kümeleri</td>
                                        <td className="p-3 border font-bold text-emerald-600">3-4 Soru</td>
                                        <td className="p-3 border">Kolay-Orta</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Matematik</td>
                                        <td className="p-3 border">Problemler (Sayı, Kesir, Yüzde)</td>
                                        <td className="p-3 border font-bold text-emerald-600">10-12 Soru</td>
                                        <td className="p-3 border">Orta-Zor</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Fizik</td>
                                        <td className="p-3 border">Isı ve Sıcaklık & Optik</td>
                                        <td className="p-3 border font-bold text-emerald-600">2-3 Soru</td>
                                        <td className="p-3 border">Orta</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Biyoloji</td>
                                        <td className="p-3 border">Hücre ve Organeller & Kalıtım</td>
                                        <td className="p-3 border font-bold text-emerald-600">2-3 Soru</td>
                                        <td className="p-3 border">Kolay-Orta</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Paragraf sorularında hızlanmak için <Link href="/blog/tyt-turkce-paragraf-teknikleri" className="text-blue-600 font-semibold hover:underline">TYT Paragraf Çözme Teknikleri</Link> yazımıza göz atabilir, matematik temelinizi güçlendirmek için <Link href="/blog/sifirdan-tyt-matematik-calisma-rehberi" className="text-blue-600 font-semibold hover:underline">Sıfırdan TYT Matematik Rehberi</Link> adımlarını uygulayabilirsiniz. Genel net artışı için <Link href="/blog/tyt-net-artirma-taktikleri" className="text-blue-600 font-semibold hover:underline">TYT Net Artırma Taktikleri</Link> rehberimizi inceleyin.
                        </p>
`
    },
    'tyt-net-hesaplama-rehberi': {
        check: '4 Yanlış 1 Doğruyu Nasıl Götürür? Örnek Net Tablosu',
        target: '<ArticleFeedback />',
        addition: `
                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            4 Yanlış 1 Doğruyu Nasıl Götürür? Örnek Net Tablosu
                        </h2>
                        <p>
                            ÖSYM sınavlarında yapılan her yanlış cevap, doğru sayınızdan tam 0,25 net düşürür. Boş bırakılan sorular ise net sayınızı etkilemez. Aşağıdaki senaryo tablosunda rastgele işaretlemenin ve net kaybının sonuçları net şekilde gösterilmiştir:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-slate-100 text-slate-900 font-semibold">
                                    <tr>
                                        <th className="p-3 border">Toplam Soru</th>
                                        <th className="p-3 border">Doğru</th>
                                        <th className="p-3 border">Yanlış</th>
                                        <th className="p-3 border">Boş</th>
                                        <th className="p-3 border">Kaybedilen Net</th>
                                        <th className="p-3 border font-bold text-blue-700">Kalan Net</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 border">40 Türkçe</td>
                                        <td className="p-3 border">34</td>
                                        <td className="p-3 border">6</td>
                                        <td className="p-3 border">0</td>
                                        <td className="p-3 border text-red-600">-1,50 Net</td>
                                        <td className="p-3 border font-bold text-emerald-600">32,50 Net</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 border">40 Matematik</td>
                                        <td className="p-3 border">28</td>
                                        <td className="p-3 border">4</td>
                                        <td className="p-3 border">8</td>
                                        <td className="p-3 border text-red-600">-1,00 Net</td>
                                        <td className="p-3 border font-bold text-emerald-600">27,00 Net</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 border">20 Sosyal</td>
                                        <td className="p-3 border">15</td>
                                        <td className="p-3 border">5</td>
                                        <td className="p-3 border">0</td>
                                        <td className="p-3 border text-red-600">-1,25 Net</td>
                                        <td className="p-3 border font-bold text-emerald-600">13,75 Net</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 border">20 Fen</td>
                                        <td className="p-3 border">12</td>
                                        <td className="p-3 border">8</td>
                                        <td className="p-3 border">0</td>
                                        <td className="p-3 border text-red-600">-2,00 Net</td>
                                        <td className="p-3 border font-bold text-emerald-600">10,00 Net</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Emin olmadığınız sorularda rastgele sallamak yerine boş bırakmanın stratejik önemini <Link href="/blog/tyt-net-artirma-taktikleri" className="text-blue-600 font-semibold hover:underline">TYT Net Artırma Taktikleri</Link> içeriğimizden öğrenebilir, genel puan mekanizmasını <Link href="/blog/yks-net-hesaplama-nasil-yapilir" className="text-blue-600 font-semibold hover:underline">YKS Net Hesaplama Nasıl Yapılır?</Link> kılavuzumuzdan detaylıca okuyabilirsiniz.
                        </p>
`
    },
    'yks-1-net-kac-kisi-atar': {
        check: 'Başarı Sıralamasına Göre 1 Netin Attığı Kişi Sayısı',
        target: '<ArticleFeedback />',
        addition: `
                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Başarı Sıralamasına Göre 1 Netin Attığı Kişi Sayısı
                        </h2>
                        <p>
                            1 netin sınav sıralamasına etkisi her puan aralığında eşit değildir. Aday sayısının yoğunlaştığı bölgelerde (yığılma alanları) tek bir soru binlerce adayın önüne geçmenizi sağlar:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-purple-50 text-purple-950 font-semibold">
                                    <tr>
                                        <th className="p-3 border">Sıralama Bandı</th>
                                        <th className="p-3 border">TYT 1 Netin Katkısı</th>
                                        <th className="p-3 border">AYT 1 Netin Katkısı</th>
                                        <th className="p-3 border">Yığılma Derecesi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">İlk 10.000 (Zirve)</td>
                                        <td className="p-3 border">150 - 350 Kişi</td>
                                        <td className="p-3 border font-bold text-purple-700">400 - 800 Kişi</td>
                                        <td className="p-3 border">Düşük (Puanlar Ayrışık)</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">10.000 - 50.000</td>
                                        <td className="p-3 border">600 - 1.200 Kişi</td>
                                        <td className="p-3 border font-bold text-purple-700">1.500 - 3.000 Kişi</td>
                                        <td className="p-3 border">Orta</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">50.000 - 150.000 (Kritik Bölge)</td>
                                        <td className="p-3 border font-bold text-red-600">2.500 - 5.000 Kişi</td>
                                        <td className="p-3 border font-bold text-red-600">6.000 - 12.000 Kişi</td>
                                        <td className="p-3 border font-bold text-red-600">Aşırı Yüksek Yığılma</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">150.000 - 300.000</td>
                                        <td className="p-3 border">3.000 - 6.000 Kişi</td>
                                        <td className="p-3 border font-bold text-purple-700">7.000 - 14.000 Kişi</td>
                                        <td className="p-3 border">Yüksek</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Bu yığılmanın tercih döneminde nasıl riskler oluşturduğunu <Link href="/blog/yks-yigilma-tehlikesi" className="text-blue-600 font-semibold hover:underline">YKS Yığılma Tehlikesi</Link> yazımızda inceledik. Hangi bölüm için toplam kaç nete ihtiyacınız olduğunu öğrenmek için <Link href="/blog/yks-kac-net-kac-puan" className="text-blue-600 font-semibold hover:underline">YKS Net-Puan Tablosu</Link> rehberimizi kullanabilirsiniz.
                        </p>
`
    },
    'yks-2027-basvuru-tarihleri': {
        check: 'YKS 2027 Sınav ve Tercih Takvimi Süreç Tablosu',
        target: '<ArticleFeedback />',
        addition: `
                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            YKS 2027 Sınav ve Tercih Takvimi Süreç Tablosu
                        </h2>
                        <p>
                            Sınava hazırlık kadar başvuru ve tercih takvimini kaçırmamak da hayati önemdedir. Geç başvuru ücretleri iki katına çıktığından tarihleri önceden ajandanıza not edin:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-amber-50 text-amber-950 font-semibold">
                                    <tr>
                                        <th className="p-3 border">Aşama</th>
                                        <th className="p-3 border">Tahmini Tarih Aralığı</th>
                                        <th className="p-3 border">Önem Derecesi</th>
                                        <th className="p-3 border">Açıklama</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Normal Başvuru</td>
                                        <td className="p-3 border font-bold text-blue-700">Şubat - Mart 2027</td>
                                        <td className="p-3 border text-emerald-600">Kritik</td>
                                        <td className="p-3 border">ÖSYM AİS üzerinden standart oturum ücretiyle kayıt.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Geç Başvuru Günü</td>
                                        <td className="p-3 border font-bold text-amber-700">Mart 2027 Sonu</td>
                                        <td className="p-3 border text-amber-600">Son Fırsat</td>
                                        <td className="p-3 border">%50 artırımlı oturum ücreti uygulanır.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Sınav Giriş Belgeleri</td>
                                        <td className="p-3 border">Haziran 2027 Başı</td>
                                        <td className="p-3 border">Zorunlu</td>
                                        <td className="p-3 border">Sınava gireceğiniz okul ve salon bilgisi ilan edilir.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">YKS Oturumları (TYT-AYT)</td>
                                        <td className="p-3 border font-bold text-red-600">Haziran 2027 Ortası</td>
                                        <td className="p-3 border text-red-600">Sınav Günü</td>
                                        <td className="p-3 border">Cumartesi TYT (10:15), Pazar AYT ve YDT oturumları.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Sonuç ve Tercihler</td>
                                        <td className="p-3 border">Temmuz - Ağustos 2027</td>
                                        <td className="p-3 border text-emerald-600">Yerleştirme</td>
                                        <td className="p-3 border">YÖK Atlas üzerinden tercih listesi teslimi.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Kalan günleri en yüksek verimle değerlendirmek için <Link href="/blog/yks-son-3-ay-calisma-plani" className="text-blue-600 font-semibold hover:underline">YKS Son 3 Ay Çalışma Programı</Link> rehberimizi inceleyebilir, sınav hazırlık sürecinizi baştan sona planlamak için <Link href="/yks-rehberi" className="text-blue-600 font-semibold hover:underline">Kapsamlı YKS Rehberi</Link> sayfamızdan destek alabilirsiniz.
                        </p>
`
    },
    'yks-edebiyat-konulari': {
        check: 'Son 5 Yılın AYT Edebiyat Soru Dağılım Tablosu',
        target: '<ArticleFeedback />',
        addition: `
                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Son 5 Yılın AYT Edebiyat Soru Dağılım Tablosu
                        </h2>
                        <p>
                            AYT Edebiyat testinde 24 soru sorulur ve bunların yaklaşık 4-6 tanesi anlam/paragraf, geri kalan 18-20 tanesi ise doğrudan dönemler ve eser-yazar bilgisinden gelir:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-pink-50 text-pink-950 font-semibold">
                                    <tr>
                                        <th className="p-3 border">Konu / Edebi Dönem</th>
                                        <th className="p-3 border">Ortalama Soru</th>
                                        <th className="p-3 border">Önem Derecesi</th>
                                        <th className="p-3 border">Kritik İpucu</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Divan Edebiyatı</td>
                                        <td className="p-3 border font-bold text-pink-700">4 - 6 Soru</td>
                                        <td className="p-3 border text-red-600">En Çok Çıkan</td>
                                        <td className="p-3 border">Nazım biçimleri (Gazel, Kaside, Mesnevi) ve şairler.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Cumhuriyet Dönemi</td>
                                        <td className="p-3 border font-bold text-pink-700">4 - 5 Soru</td>
                                        <td className="p-3 border text-red-600">Çok Yüksek</td>
                                        <td className="p-3 border">Romancı toplulukları, saf şiir ve garip akımı.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Şiir Bilgisi & Edebi Sanatlar</td>
                                        <td className="p-3 border font-bold text-pink-700">2 - 3 Soru</td>
                                        <td className="p-3 border text-emerald-600">Garanti Net</td>
                                        <td className="p-3 border">Kafiye, redif ve teşhis, tezat, hüsnütalil sanatları.</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Tanzimat Edebiyatı</td>
                                        <td className="p-3 border">1 - 2 Soru</td>
                                        <td className="p-3 border">Orta</td>
                                        <td className="p-3 border">1. ve 2. dönem sanatçıları ve ilk romanlar.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Milli Edebiyat</td>
                                        <td className="p-3 border">1 - 2 Soru</td>
                                        <td className="p-3 border">Orta</td>
                                        <td className="p-3 border">Genç Kalemler, Ömer Seyfettin, Ziya Gökalp.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Eşit Ağırlık ve Sözel alanında doğru bölüm seçimi yapmak için <Link href="/blog/yks-puan-turleri" className="text-blue-600 font-semibold hover:underline">YKS Puan Türleri</Link> içeriğimizi ve tercih yaparken sıralama analizini incelemek için <Link href="/blog/universite-tercih-stratejileri" className="text-blue-600 font-semibold hover:underline">Üniversite Tercih Stratejileri</Link> rehberimizi okuyabilirsiniz.
                        </p>
`
    },
    'yks-kac-net-kac-puan': {
        check: 'Hedef Bölümlere Göre Ortalama Net İhtiyacı',
        target: '<ArticleFeedback />',
        addition: `
                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Hedef Bölümlere Göre Ortalama Net İhtiyacı
                        </h2>
                        <p>
                            Adayların en sık sorduğu soru <em>"İstediğim bölüme girmek için TYT ve AYT'de kaçar net yapmalıyım?"</em> sorusudur. Geçmiş yılların ÖSYM yerleştirme verilerine göre popüler bölümlerin ortalama net barajları aşağıda listelenmiştir:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-teal-50 text-teal-950 font-semibold">
                                    <tr>
                                        <th className="p-3 border">Hedef Bölüm</th>
                                        <th className="p-3 border">Puan Türü</th>
                                        <th className="p-3 border">Gereken TYT Neti</th>
                                        <th className="p-3 border">Gereken AYT Neti</th>
                                        <th className="p-3 border">Ortalama Sıralama</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Tıp Fakültesi (Devlet)</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-bold text-teal-700">95 - 105 Net</td>
                                        <td className="p-3 border font-bold text-teal-700">68 - 74 Net</td>
                                        <td className="p-3 border">İlk 25.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Diş Hekimliği</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-bold text-teal-700">85 - 95 Net</td>
                                        <td className="p-3 border font-bold text-teal-700">58 - 65 Net</td>
                                        <td className="p-3 border">İlk 45.000</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Hukuk Fakültesi</td>
                                        <td className="p-3 border">EA</td>
                                        <td className="p-3 border font-bold text-teal-700">75 - 85 Net</td>
                                        <td className="p-3 border font-bold text-teal-700">50 - 58 Net</td>
                                        <td className="p-3 border">İlk 70.000</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Bilgisayar Mühendisliği</td>
                                        <td className="p-3 border">SAY</td>
                                        <td className="p-3 border font-bold text-teal-700">80 - 100 Net</td>
                                        <td className="p-3 border font-bold text-teal-700">55 - 72 Net</td>
                                        <td className="p-3 border">5.000 - 90.000 (Geniş)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Yönetim Bilişim (YBS)</td>
                                        <td className="p-3 border">EA</td>
                                        <td className="p-3 border font-bold text-teal-700">65 - 80 Net</td>
                                        <td className="p-3 border font-bold text-teal-700">42 - 52 Net</td>
                                        <td className="p-3 border">İlk 120.000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Bu netlerin sıralamanıza yansımasını görmek için <Link href="/blog/yks-1-net-kac-kisi-atar" className="text-blue-600 font-semibold hover:underline">1 Net Kaç Kişi Atar?</Link> analizimizi okuyabilir, diploma notunuzun oluşturacağı katkıyı <Link href="/blog/obp-hesaplama" className="text-blue-600 font-semibold hover:underline">OBP Hesaplama Rehberi</Link> üzerinden hesaplayabilirsiniz. Tercih stratejileri için <Link href="/blog/universite-tercih-stratejileri" className="text-blue-600 font-semibold hover:underline">Üniversite Tercih Rehberi</Link> yazımıza göz atın.
                        </p>
`
    },
    'yks-puan-turleri': {
        check: 'Puan Türlerine Göre Testlerin Yüzdelik Ağırlıkları',
        target: '<ArticleFeedback />',
        addition: `
                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            Puan Türlerine Göre Testlerin Yüzdelik Ağırlıkları
                        </h2>
                        <p>
                            Her puan türünde hangi dersin puanınızı ne kadar artırdığını bilmek, ders çalışma planınızı doğrudan optimize etmenizi sağlar:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-emerald-50 text-emerald-950 font-semibold">
                                    <tr>
                                        <th className="p-3 border">Puan Türü</th>
                                        <th className="p-3 border">TYT Toplamı</th>
                                        <th className="p-3 border">AYT 1. Test Katkısı</th>
                                        <th className="p-3 border">AYT 2. Test Katkısı</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Sayısal (SAY)</td>
                                        <td className="p-3 border">%40 TYT</td>
                                        <td className="p-3 border">%30 Matematik (40 soru)</td>
                                        <td className="p-3 border">%30 Fen Bilimleri (Fiz-Kim-Biyo)</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Eşit Ağırlık (EA)</td>
                                        <td className="p-3 border">%40 TYT</td>
                                        <td className="p-3 border">%30 Matematik (40 soru)</td>
                                        <td className="p-3 border">%30 Edebiyat-Sosyal-1 (40 soru)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">Sözel (SÖZ)</td>
                                        <td className="p-3 border">%40 TYT</td>
                                        <td className="p-3 border">%30 Edebiyat-Sosyal-1 (40 soru)</td>
                                        <td className="p-3 border">%30 Sosyal-2 (40 soru)</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">Dil (DİL)</td>
                                        <td className="p-3 border">%40 TYT</td>
                                        <td className="p-3 border">%60 YDT Yabancı Dil Testi (80 soru)</td>
                                        <td className="p-3 border">-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            AYT net hesaplama prensipleri için <Link href="/blog/ayt-puan-hesaplama" className="text-blue-600 font-semibold hover:underline">AYT Puan Hesaplama Rehberi</Link> içeriğimizi, Sayısal ve EA alanında kritik rol oynayan matematik konuları için <Link href="/blog/ayt-matematik-konulari" className="text-blue-600 font-semibold hover:underline">AYT Matematik Konuları</Link> çalışma planını inceleyebilirsiniz. Lise okul notu hesabı için <Link href="/blog/obp-hesaplama" className="text-blue-600 font-semibold hover:underline">OBP Hesaplama</Link> yazımıza göz atın.
                        </p>
`
    },
    'yks-yigilma-tehlikesi': {
        check: 'YKS Yığılma Yoğunluk ve Sıralama Risk Haritası',
        target: '<ArticleFeedback />',
        addition: `
                        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 border-b pb-2">
                            YKS Yığılma Yoğunluk ve Sıralama Risk Haritası
                        </h2>
                        <p>
                            Sınav kolay olduğunda adayların netleri yükselir ama sıralamalar geriye düşer. Zor sınavlarda ise düşük netlerle çok daha yüksek başarı sıraları elde edilir. İşte tipik bir sınavda yığılma dağılımı:
                        </p>
                        <div className="overflow-x-auto my-6">
                            <table className="w-full text-left border-collapse border border-gray-200 text-sm">
                                <thead className="bg-red-50 text-red-950 font-semibold">
                                    <tr>
                                        <th className="p-3 border">Sıralama Aralığı</th>
                                        <th className="p-3 border">Puan Aralığı</th>
                                        <th className="p-3 border">1 Puan Başına Düşen Aday</th>
                                        <th className="p-3 border">Risk Derecesi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">İlk 20.000</td>
                                        <td className="p-3 border">470 - 520 Puan</td>
                                        <td className="p-3 border font-bold text-blue-700">300 - 500 Kişi</td>
                                        <td className="p-3 border text-emerald-600">Düşük Risk</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">20.000 - 60.000</td>
                                        <td className="p-3 border">420 - 470 Puan</td>
                                        <td className="p-3 border font-bold text-amber-700">700 - 1.200 Kişi</td>
                                        <td className="p-3 border text-amber-600">Orta Risk</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium border">60.000 - 150.000</td>
                                        <td className="p-3 border">340 - 420 Puan</td>
                                        <td className="p-3 border font-bold text-red-600">1.800 - 3.500 Kişi</td>
                                        <td className="p-3 border font-bold text-red-600">Aşırı Yüksek Risk</td>
                                    </tr>
                                    <tr className="border-b bg-gray-50">
                                        <td className="p-3 font-medium border">150.000 - 300.000</td>
                                        <td className="p-3 border">260 - 340 Puan</td>
                                        <td className="p-3 border font-bold text-red-600">2.000 - 4.000 Kişi</td>
                                        <td className="p-3 border font-bold text-red-600">Maksimum Yığılma</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            Yığılma bölgesinde 1 netin ne kadar büyük fark yarattığını anlamak için <Link href="/blog/yks-1-net-kac-kisi-atar" className="text-blue-600 font-semibold hover:underline">1 Net Kaç Kişi Atar?</Link> yazımızı inceleyebilir, lise notunuzun yığılmadaki koruyucu etkisini <Link href="/blog/obp-hesaplama" className="text-blue-600 font-semibold hover:underline">OBP Hesaplama Rehberi</Link> üzerinden görebilirsiniz. Tercih döneminde boşta kalmamak için <Link href="/blog/universite-tercih-stratejileri" className="text-blue-600 font-semibold hover:underline">Üniversite Tercih Stratejileri</Link> kılavuzuna mutlaka göz atın.
                        </p>
`
    }
};

let updatedCount = 0;

for (const [slug, data] of Object.entries(enrichments)) {
    const filePath = path.join(blogDir, slug, 'page.tsx');
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️ Bulunamadı: ${slug}`);
        continue;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(data.check)) {
        console.log(`⏭️ Zaten zenginleştirilmiş: ${slug}`);
        continue;
    }

    if (content.includes(data.target)) {
        content = content.replace(data.target, `${data.addition}\n                        ${data.target}`);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Zenginleştirildi: ${slug}`);
        updatedCount++;
    } else {
        console.log(`⚠️ Hedef tag bulunamadı (${data.target}): ${slug}`);
    }
}

console.log(`\n🎉 Toplam ${updatedCount} makale yeni veri tabloları ve çapraz iç linklerle zenginleştirildi!`);
