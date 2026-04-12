'use client'

import { useState } from 'react'

interface PDFDownloadProps {
    results: {
        nets: {
            tyt: { turkce: number; matematik: number; sosyal: number; fen: number; toplam: number }
            ayt: { matematik: number; fizik: number; kimya: number; biyoloji: number; edebiyat: number; tarih1: number; cografya1: number; tarih2: number; cografya2: number; felsefe: number; din: number; toplam: number }
            ydt: { ydt: number }
        }
        points: { say: number; ea: number; soz: number; dil: number; sayHam?: number; eaHam?: number; sozHam?: number; dilHam?: number }
        estimatedRanks?: { say?: number; ea?: number; soz?: number; dil?: number }
        ydtHesaplandi: boolean
        obp?: number
    }
}

export default function PDFDownload({ results }: PDFDownloadProps) {
    const [loading, setLoading] = useState(false)

    const handleDownload = async () => {
        setLoading(true)
        try {
            const html2pdf = (await import('html2pdf.js')).default
            const element = document.getElementById('pdf-content')
            if (!element) return

            // Geçici olarak görünür yap
            element.style.display = 'block'
            element.style.position = 'fixed'
            element.style.left = '-9999px'
            element.style.top = '0'
            element.style.width = '794px' // A4 genişliği px

            await html2pdf().set({
                margin: [15, 15, 15, 15],
                filename: 'YKS-2026-Tahmin-Sonucum.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, logging: false },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            }).from(element).save()

            // Geri gizle
            element.style.display = 'none'
            element.style.position = ''
            element.style.left = ''
            element.style.top = ''
            element.style.width = ''
        } finally {
            setLoading(false)
        }
    }

    const now = new Date()
    const tarih = now.toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' })
    const saat = now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })

    const fmt = (n: number) => n.toFixed(2)
    const fmtRank = (n?: number) => n ? n.toLocaleString('tr-TR') : '—'

    return (
        <div className="mt-4">
            {/* Gizli PDF içeriği */}
            <div id="pdf-content" style={{ display: 'none', fontFamily: 'Arial, sans-serif', padding: '20px', background: '#fff', color: '#000' }}>
                {/* Başlık */}
                <div style={{ borderBottom: '3px solid #003087', paddingBottom: '12px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#003087' }}>ÖSYM</div>
                            <div style={{ fontSize: '11px', color: '#555' }}>Ölçme, Seçme ve Yerleştirme Merkezi</div>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '10px', color: '#555' }}>
                            <div>YKS 2026 Tahmini Sonuç Belgesi</div>
                            <div>{tarih} — {saat}</div>
                        </div>
                    </div>
                    <div style={{ marginTop: '10px', fontSize: '14px', fontWeight: 'bold', color: '#003087', textAlign: 'center' }}>
                        YKS 2026 — TAHMİNİ PUAN VE SIRALAMA RAPORU
                    </div>
                    <div style={{ fontSize: '9px', color: '#e53e3e', textAlign: 'center', marginTop: '4px' }}>
                        ⚠ Bu belge yksnethesapla.com tarafından üretilmiş TAHMİNİ bir sonuçtur. Resmi ÖSYM belgesi değildir.
                    </div>
                </div>

                {/* TYT Netleri */}
                <div style={{ marginBottom: '14px' }}>
                    <div style={{ background: '#003087', color: '#fff', padding: '5px 10px', fontSize: '11px', fontWeight: 'bold', marginBottom: '6px' }}>
                        TYT (Temel Yeterlilik Testi) — Net Sonuçları
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10px' }}>
                        <thead>
                            <tr style={{ background: '#e8edf5' }}>
                                <th style={{ border: '1px solid #ccc', padding: '5px 8px', textAlign: 'left' }}>Ders</th>
                                <th style={{ border: '1px solid #ccc', padding: '5px 8px', textAlign: 'center' }}>Net</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Türkçe', results.nets.tyt.turkce],
                                ['Matematik', results.nets.tyt.matematik],
                                ['Sosyal Bilimler', results.nets.tyt.sosyal],
                                ['Fen Bilimleri', results.nets.tyt.fen],
                            ].map(([ders, net], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f7f9fc' }}>
                                    <td style={{ border: '1px solid #ccc', padding: '4px 8px' }}>{ders}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '4px 8px', textAlign: 'center', fontWeight: 'bold' }}>{fmt(net as number)}</td>
                                </tr>
                            ))}
                            <tr style={{ background: '#dbeafe', fontWeight: 'bold' }}>
                                <td style={{ border: '1px solid #ccc', padding: '4px 8px' }}>TYT TOPLAM NET</td>
                                <td style={{ border: '1px solid #ccc', padding: '4px 8px', textAlign: 'center' }}>{fmt(results.nets.tyt.toplam)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* AYT Netleri */}
                <div style={{ marginBottom: '14px' }}>
                    <div style={{ background: '#003087', color: '#fff', padding: '5px 10px', fontSize: '11px', fontWeight: 'bold', marginBottom: '6px' }}>
                        AYT (Alan Yeterlilik Testi) — Net Sonuçları
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10px' }}>
                        <thead>
                            <tr style={{ background: '#e8edf5' }}>
                                <th style={{ border: '1px solid #ccc', padding: '5px 8px', textAlign: 'left' }}>Ders</th>
                                <th style={{ border: '1px solid #ccc', padding: '5px 8px', textAlign: 'center' }}>Net</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Matematik', results.nets.ayt.matematik],
                                ['Fizik', results.nets.ayt.fizik],
                                ['Kimya', results.nets.ayt.kimya],
                                ['Biyoloji', results.nets.ayt.biyoloji],
                                ['Edebiyat', results.nets.ayt.edebiyat],
                                ['Tarih-1', results.nets.ayt.tarih1],
                                ['Coğrafya-1', results.nets.ayt.cografya1],
                                ['Tarih-2', results.nets.ayt.tarih2],
                                ['Coğrafya-2', results.nets.ayt.cografya2],
                                ['Felsefe', results.nets.ayt.felsefe],
                                ['Din Kültürü', results.nets.ayt.din],
                            ].map(([ders, net], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f7f9fc' }}>
                                    <td style={{ border: '1px solid #ccc', padding: '4px 8px' }}>{ders}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '4px 8px', textAlign: 'center', fontWeight: 'bold' }}>{fmt(net as number)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Puanlar ve Sıralamalar */}
                <div style={{ marginBottom: '14px' }}>
                    <div style={{ background: '#003087', color: '#fff', padding: '5px 10px', fontSize: '11px', fontWeight: 'bold', marginBottom: '6px' }}>
                        Tahmini Yerleştirme Puanları ve Sıralamalar
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10px' }}>
                        <thead>
                            <tr style={{ background: '#e8edf5' }}>
                                <th style={{ border: '1px solid #ccc', padding: '5px 8px', textAlign: 'left' }}>Puan Türü</th>
                                <th style={{ border: '1px solid #ccc', padding: '5px 8px', textAlign: 'center' }}>Ham Puan</th>
                                <th style={{ border: '1px solid #ccc', padding: '5px 8px', textAlign: 'center' }}>Yerleştirme Puanı</th>
                                <th style={{ border: '1px solid #ccc', padding: '5px 8px', textAlign: 'center' }}>Tahmini Sıralama</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { label: 'SAY (Sayısal)', ham: results.points.sayHam ?? results.points.say, puan: results.points.say, rank: results.estimatedRanks?.say },
                                { label: 'EA (Eşit Ağırlık)', ham: results.points.eaHam ?? results.points.ea, puan: results.points.ea, rank: results.estimatedRanks?.ea },
                                { label: 'SÖZ (Sözel)', ham: results.points.sozHam ?? results.points.soz, puan: results.points.soz, rank: results.estimatedRanks?.soz },
                                { label: 'DİL (Yabancı Dil)', ham: results.points.dilHam ?? results.points.dil, puan: results.points.dil, rank: results.ydtHesaplandi ? results.estimatedRanks?.dil : undefined },
                            ].map(({ label, ham, puan, rank }, i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f7f9fc' }}>
                                    <td style={{ border: '1px solid #ccc', padding: '4px 8px', fontWeight: 'bold' }}>{label}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '4px 8px', textAlign: 'center' }}>{fmt(ham)}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '4px 8px', textAlign: 'center', fontWeight: 'bold', color: '#003087' }}>{fmt(puan)}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '4px 8px', textAlign: 'center', color: '#c53030' }}>
                                        {results.ydtHesaplandi || label !== 'DİL (Yabancı Dil)' ? fmtRank(rank) : 'Hesaplanmadı'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* OBP */}
                {(results.obp ?? 0) > 0 && (
                    <div style={{ marginBottom: '14px', fontSize: '10px', background: '#f0f4ff', border: '1px solid #c3d0f0', padding: '8px 12px', borderRadius: '4px' }}>
                        <strong>OBP Bilgisi:</strong> Diploma Notu: {results.obp} → OBP: {((results.obp ?? 0) * 5).toFixed(0)} → Puan Katkısı: +{((results.obp ?? 0) * 5 * 0.12).toFixed(2)}
                    </div>
                )}

                {/* Alt bilgi */}
                <div style={{ borderTop: '2px solid #003087', paddingTop: '10px', fontSize: '8px', color: '#777', textAlign: 'center' }}>
                    <div>Bu belge yksnethesapla.com tarafından üretilmiştir. ÖSYM ile resmi bir bağı bulunmamaktadır.</div>
                    <div>Tahmini sonuçlar 2025 YKS verilerine dayalı logaritmik interpolasyon ile hesaplanmıştır.</div>
                    <div style={{ marginTop: '4px' }}>Resmi sonuçlar için: osym.gov.tr</div>
                </div>
            </div>

            {/* İndirme butonu */}
            <button
                onClick={handleDownload}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors text-sm"
            >
                {loading ? (
                    <>
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        PDF Hazırlanıyor...
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        PDF İndir (ÖSYM Formatı)
                    </>
                )}
            </button>
        </div>
    )
}
