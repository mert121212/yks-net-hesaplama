export default function YigilmaChart() {
    const zones = [
        {
            band: '0 - 50.000 Sıralama',
            name: 'Elit Dilim / Güvenli Bölge',
            risk: 'Düşük Risk',
            riskColor: 'bg-emerald-500 text-white',
            barWidth: '20%',
            barColor: 'bg-emerald-500',
            oneNetEffect: '300 - 800 kişi',
            desc: 'Adaylar arası puan farkı geniştir. Küçük net dalgalanmaları büyük sıralama şokları yaratmaz.',
        },
        {
            band: '50.000 - 150.000 Sıralama',
            name: 'Kritik Yığılma Kuşağı',
            risk: 'ÇOK YÜKSEK RİSK ⚠️',
            riskColor: 'bg-red-600 text-white font-bold animate-pulse',
            barWidth: '95%',
            barColor: 'bg-red-500',
            oneNetEffect: '4.500 - 7.500 kişi',
            desc: 'Sınavın en tehlikeli kara deliğidir. 1 net eksik yapan aday 7 bin kişi geriye fırlayabilir.',
        },
        {
            band: '150.000 - 300.000 Sıralama',
            name: 'Orta Yoğunluk Kuşağı',
            risk: 'Yüksek Risk',
            riskColor: 'bg-amber-500 text-slate-900 font-semibold',
            barWidth: '75%',
            barColor: 'bg-amber-500',
            oneNetEffect: '3.000 - 5.000 kişi',
            desc: 'Önlisans ve orta sıralı lisans programlarının yoğunlaştığı bölge. OBP etkisi çok belirgindir.',
        },
        {
            band: '300.000+ Sıralama',
            name: 'Geniş Taban Dilimi',
            risk: 'Orta Risk',
            riskColor: 'bg-blue-500 text-white',
            barWidth: '50%',
            barColor: 'bg-blue-500',
            oneNetEffect: '1.500 - 3.000 kişi',
            desc: 'Taban puana yakın adaylar. Küçük doğru artışları yüzdelik dilimde hissedilir toparlanma sağlar.',
        },
    ]

    return (
        <div className="my-10 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-slate-800 pb-4">
                <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                        📊 İnfografik Veri Analizi
                    </span>
                    <h3 className="text-2xl font-extrabold text-white">
                        YKS Yığılma Yoğunluk Haritası
                    </h3>
                </div>
                <span className="text-xs bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1.5 rounded-xl self-start sm:self-auto">
                    ÖSYM Dağılım Modeli
                </span>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Aşağıdaki grafik, sınavın kolay veya orta geldiği senelerde adayların hangi sıralama bantlarında kümelendiğini ve o bantta <strong>tek bir netin</strong> kaç bin adayı geride bıraktığını göstermektedir:
            </p>

            <div className="space-y-4">
                {zones.map((zone, idx) => (
                    <div key={idx} className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-4 sm:p-5 hover:border-slate-600 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                            <div>
                                <span className="text-xs text-slate-400 font-semibold">{zone.band}</span>
                                <h4 className="text-base font-bold text-white">{zone.name}</h4>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-700">
                                    1 Net Etkisi: <strong className="text-white">{zone.oneNetEffect}</strong>
                                </span>
                                <span className={`text-xs px-2.5 py-1 rounded-lg ${zone.riskColor}`}>
                                    {zone.risk}
                                </span>
                            </div>
                        </div>

                        {/* Yoğunluk Çubuğu */}
                        <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden my-2.5">
                            <div className={`h-full rounded-full ${zone.barColor}`} style={{ width: zone.barWidth }} />
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed">
                            {zone.desc}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-6 bg-amber-950/40 border border-amber-500/30 rounded-2xl p-4 text-xs text-amber-200 flex items-start gap-3">
                <span className="text-xl flex-shrink-0">💡</span>
                <p className="leading-relaxed">
                    <strong>Stratejik Çıkarım:</strong> 50k – 150k bandındaki adaylar için TYT&apos;de Türkçe dil bilgisi veya Sosyalden kazanılacak +2 net, adayı doğrudan 50k içine (Güvenli Bölgeye) taşıyan en ucuz bilettir.
                </p>
            </div>
        </div>
    )
}
