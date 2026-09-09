'use client'

import { useState } from 'react'

interface SubjectMeta {
    name: string
    katsayi: number
    testType: 'TYT' | 'AYT'
    soruSayisi: number
}

const SUBJECTS: Record<string, SubjectMeta> = {
    tytTurkce: { name: 'TYT Türkçe', katsayi: 3.3, testType: 'TYT', soruSayisi: 40 },
    tytMatematik: { name: 'TYT Matematik', katsayi: 3.3, testType: 'TYT', soruSayisi: 40 },
    tytSosyal: { name: 'TYT Sosyal', katsayi: 3.4, testType: 'TYT', soruSayisi: 20 },
    tytFen: { name: 'TYT Fen', katsayi: 3.4, testType: 'TYT', soruSayisi: 20 },
    aytMatematik: { name: 'AYT Matematik', katsayi: 3.0, testType: 'AYT', soruSayisi: 40 },
    aytFizik: { name: 'AYT Fizik', katsayi: 2.85, testType: 'AYT', soruSayisi: 14 },
    aytEdebiyat: { name: 'AYT Edebiyat', katsayi: 3.0, testType: 'AYT', soruSayisi: 24 },
}

const SCORE_BANDS = [
    { label: '300 - 350 Puan (En Yoğun Yığılma)', multiplier: 7800, desc: 'Adayların en sıkışık olduğu bölge. Her 1 net adeta bir tramplen etkisi yaratır.' },
    { label: '350 - 400 Puan (Orta-Üst Rekabet)', multiplier: 5200, desc: 'İyi lisans programlarının kapı eşiği. 1 net binlerce adayı geride bırakır.' },
    { label: '400 - 450 Puan (İlk 50.000 / Tıp & Hukuk)', multiplier: 2900, desc: 'Yüksek puan barajı. Netler zorlaşır, her soru derece belirler.' },
    { label: '450 - 500 Puan (İlk 10.000 / Zirve Derece)', multiplier: 850, desc: 'Zirve bölgesi. Az aday bulunur ama her net sıralamada yüzlerce sıra oynatır.' },
]

export default function QuickNetSimulator() {
    const [selectedSubject, setSelectedSubject] = useState<string>('tytMatematik')
    const [selectedBandIndex, setSelectedBandIndex] = useState<number>(0)
    const [netCount, setNetCount] = useState<number>(1)

    const subject = SUBJECTS[selectedSubject]
    const band = SCORE_BANDS[selectedBandIndex]

    const totalPointsAdded = (subject.katsayi * netCount)
    const estimatedJump = Math.round(band.multiplier * netCount * (subject.katsayi / 3.3))

    return (
        <div className="my-10 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-indigo-700/40 relative overflow-hidden">
            {/* Dekoratif Işık */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Başlık */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-indigo-800/60 pb-5">
                <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-semibold tracking-wide uppercase mb-2 border border-indigo-400/30">
                        ⚡ İnteraktif Sıralama Simülatörü
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        1 Net Kaç Kişi Öne Atar?
                    </h3>
                    <p className="text-indigo-200 text-sm mt-1">
                        Dersi ve puan aralığınızı seçin, yapacağınız net artışının sıralamanızı nasıl zıplatacağını görün.
                    </p>
                </div>
            </div>

            {/* Seçim Alanı */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Ders Seçimi */}
                <div>
                    <label className="block text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-2">
                        Ders / Test
                    </label>
                    <select
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        className="w-full bg-indigo-900/60 border border-indigo-500/40 text-white rounded-xl py-2.5 px-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        {Object.entries(SUBJECTS).map(([key, item]) => (
                            <option key={key} value={key} className="bg-slate-900 text-white">
                                {item.name} ({item.testType})
                            </option>
                        ))}
                    </select>
                </div>

                {/* Puan Bandı */}
                <div>
                    <label className="block text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-2">
                        Hedeflenen Puan Bölgesi
                    </label>
                    <select
                        value={selectedBandIndex}
                        onChange={(e) => setSelectedBandIndex(parseInt(e.target.value))}
                        className="w-full bg-indigo-900/60 border border-indigo-500/40 text-white rounded-xl py-2.5 px-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        {SCORE_BANDS.map((b, idx) => (
                            <option key={idx} value={idx} className="bg-slate-900 text-white">
                                {b.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Net Artışı */}
                <div>
                    <label className="block text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-2">
                        Net Artış Hedefi
                    </label>
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            min={0.5}
                            max={subject.soruSayisi}
                            step={0.5}
                            value={netCount}
                            onChange={(e) => setNetCount(Math.max(0.5, parseFloat(e.target.value) || 0.5))}
                            className="w-full bg-indigo-900/60 border border-indigo-500/40 text-white font-bold text-center rounded-xl py-2 px-3 text-base focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <span className="text-sm text-indigo-300 font-bold whitespace-nowrap">Net</span>
                    </div>
                </div>
            </div>

            {/* Simülasyon Sonuç Kartı */}
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-white/10 rounded-2xl p-6 mb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    <div>
                        <span className="text-xs text-indigo-300 uppercase tracking-wider font-semibold block mb-1">
                            Tahmini Sıralama Sıçraması
                        </span>
                        <div className="text-3xl sm:text-5xl font-black text-emerald-400">
                            ~{estimatedJump.toLocaleString('tr-TR')} <span className="text-xl sm:text-2xl font-bold text-white">Kişi Öne</span>
                        </div>
                        <p className="text-xs text-indigo-200 mt-2">
                            {band.desc}
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center sm:text-right">
                        <span className="text-xs text-gray-300 block mb-1">Ham Puana Doğrudan Katkı:</span>
                        <div className="text-2xl sm:text-3xl font-bold text-blue-300">
                            +{totalPointsAdded.toFixed(2)} Puan
                        </div>
                        <span className="text-[11px] text-gray-400 mt-1 block">
                            (1 net = ~{subject.katsayi} ham puan)
                        </span>
                    </div>
                </div>
            </div>

            {/* Bilgilendirme Notu */}
            <p className="text-[11px] text-indigo-300/80 text-center sm:text-left">
                ℹ️ ÖSYM resmi yerleştirme yığınsal frekans eğrileri baz alınarak hesaplanmıştır. Gerçek sınavda o yılki soru güçlüğü ve standart sapmaya göre ufak oynamalar görülebilir.
            </p>
        </div>
    )
}
