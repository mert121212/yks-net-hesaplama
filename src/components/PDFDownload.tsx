'use client'

import { useState } from 'react'

interface Props {
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

const fmt = (n: number) => n.toFixed(2)
const fmtRank = (n?: number) => n ? n.toLocaleString('tr-TR') : '—'

export default function PDFDownload({ results }: Props) {
    const [loading, setLoading] = useState(false)

    const handleDownload = async () => {
        setLoading(true)
        try {
            const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
                import('jspdf'),
                import('html2canvas'),
            ])

            const el = document.getElementById('pdf-print-area')
            if (!el) return

            const canvas = await html2canvas(el, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#ffffff',
                logging: false,
            })

            const imgData = canvas.toDataURL('image/jpeg', 0.95)
            const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' })
            const pageW = pdf.internal.pageSize.getWidth()
            const pageH = pdf.internal.pageSize.getHeight()
            const margin = 10
            const imgW = pageW - margin * 2
            const imgH = (canvas.height * imgW) / canvas.width

            let y = margin
            let remaining = imgH

            while (remaining > 0) {
                const sliceH = Math.min(remaining, pageH - margin * 2)
                const srcY = (imgH - remaining) * (canvas.height / imgH)
                const srcH = sliceH * (canvas.height / imgH)

                const sliceCanvas = document.createElement('canvas')
                sliceCanvas.width = canvas.width
                sliceCanvas.height = srcH
                const ctx = sliceCanvas.getContext('2d')!
                ctx.drawImage(canvas, 0, srcY, canvas.width, srcH, 0, 0, canvas.width, srcH)

                if (y > margin) { pdf.addPage(); y = margin }
                pdf.addImage(sliceCanvas.toDataURL('image/jpeg', 0.95), 'JPEG', margin, y, imgW, sliceH)
                remaining -= sliceH
                y += sliceH
            }

            pdf.save('YKS-2026-Tahmin-Sonucum.pdf')
        } catch (e) {
            console.error('PDF hatası:', e)
        } finally {
            setLoading(false)
        }
    }

    const now = new Date()
    const tarih = now.toLocaleDateString('tr-TR')
    const saat = now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    const obp = results.obp ?? 0

    return (
        <div className="mt-4">
            {/* PDF içeriği — her zaman DOM'da, görünür */}
            <div
                id="pdf-print-area"
                style={{
                    position: 'absolute',
                    left: '-9999px',
                    top: 0,
                    width: '794px',
                    background: '#fff',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '11px',
                    color: '#000',
                    padding: '24px',
                }}
            >
                {/* Başlık */}
                <div style={{ borderBottom: '3px solid #003087', paddingBottom: '10px', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#003087', letterSpacing: '2px' }}>ÖSYM</div>
                            <div style={{ fontSize: '10px', color: '#555' }}>Ölçme, Seçme ve Yerleştirme Merkezi</div>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '10px', color: '#555' }}>
                            <div>YKS 2026 Tahmini Sonuç Belgesi</div>
                            <div>{tarih} — {saat}</div>
                        </div>
                    </div>
                    <div style={{ marginTop: '10px', textAlign: 'center', fontSize: '13px', fontWeight: 'bold', color: '#003087' }}>
                        YKS 2026 — TAHMİNİ PUAN VE SIRALAMA RAPORU
                    </div>
                    <div style={{ textAlign: 'center', fontSize: '9px', color: '#c53030', marginTop: '3px' }}>
                        ⚠ Bu belge yksnethesapla.com tarafından üretilmiş TAHMİNİ bir sonuçtur. Resmi ÖSYM belgesi değildir.
                    </div>
                </div>

                {/* TYT */}
                <div style={{ marginBottom: '14px' }}>
                    <div style={{ background: '#003087', color: '#fff', padding: '4px 10px', fontSize: '11px', fontWeight: 'bold', marginBottom: '4px' }}>
                        TYT (Temel Yeterlilik Testi) — Net Sonuçları
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10px' }}>
                        <thead>
                            <tr style={{ background: '#e8edf5' }}>
                                <th style={{ border: '1px solid #bbb', padding: '4px 8px', textAlign: 'left' }}>Ders</th>
                                <th style={{ border: '1px solid #bbb', padding: '4px 8px', textAlign: 'center', width: '80px' }}>Net</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Türkçe', results.nets.tyt.turkce],
                                ['Matematik', results.nets.tyt.matematik],
                                ['Sosyal Bilimler', results.nets.tyt.sosyal],
                                ['Fen Bilimleri', results.nets.tyt.fen],
                            ].map(([d, n], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f5f7fb' }}>
                                    <td style={{ border: '1px solid #bbb', padding: '3px 8px' }}>{d}</td>
                                    <td style={{ border: '1px solid #bbb', padding: '3px 8px', textAlign: 'center', fontWeight: 'bold' }}>{fmt(n as number)}</td>
                                </tr>
                            ))}
                            <tr style={{ background: '#dbeafe', fontWeight: 'bold' }}>
                                <td style={{ border: '1px solid #bbb', padding: '4px 8px' }}>TYT TOPLAM NET</td>
                                <td style={{ border: '1px solid #bbb', padding: '4px 8px', textAlign: 'center' }}>{fmt(results.nets.tyt.toplam)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* AYT */}
                <div style={{ marginBottom: '14px' }}>
                    <div style={{ background: '#003087', color: '#fff', padding: '4px 10px', fontSize: '11px', fontWeight: 'bold', marginBottom: '4px' }}>
                        AYT (Alan Yeterlilik Testi) — Net Sonuçları
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10px' }}>
                        <thead>
                            <tr style={{ background: '#e8edf5' }}>
                                <th style={{ border: '1px solid #bbb', padding: '4px 8px', textAlign: 'left' }}>Ders</th>
                                <th style={{ border: '1px solid #bbb', padding: '4px 8px', textAlign: 'center', width: '80px' }}>Net</th>
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
                            ].map(([d, n], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f5f7fb' }}>
                                    <td style={{ border: '1px solid #bbb', padding: '3px 8px' }}>{d}</td>
                                    <td style={{ border: '1px solid #bbb', padding: '3px 8px', textAlign: 'center', fontWeight: 'bold' }}>{fmt(n as number)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Puanlar */}
                <div style={{ marginBottom: '14px' }}>
                    <div style={{ background: '#003087', color: '#fff', padding: '4px 10px', fontSize: '11px', fontWeight: 'bold', marginBottom: '4px' }}>
                        Tahmini Yerleştirme Puanları ve Sıralamalar
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10px' }}>
                        <thead>
                            <tr style={{ background: '#e8edf5' }}>
                                <th style={{ border: '1px solid #bbb', padding: '4px 8px', textAlign: 'left' }}>Puan Türü</th>
                                <th style={{ border: '1px solid #bbb', padding: '4px 8px', textAlign: 'center' }}>Ham Puan</th>
                                <th style={{ border: '1px solid #bbb', padding: '4px 8px', textAlign: 'center' }}>Yerleştirme Puanı</th>
                                <th style={{ border: '1px solid #bbb', padding: '4px 8px', textAlign: 'center' }}>Tahmini Sıralama</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { label: 'SAY (Sayısal)', ham: results.points.sayHam ?? results.points.say, puan: results.points.say, rank: results.estimatedRanks?.say },
                                { label: 'EA (Eşit Ağırlık)', ham: results.points.eaHam ?? results.points.ea, puan: results.points.ea, rank: results.estimatedRanks?.ea },
                                { label: 'SÖZ (Sözel)', ham: results.points.sozHam ?? results.points.soz, puan: results.points.soz, rank: results.estimatedRanks?.soz },
                                { label: 'DİL (Yabancı Dil)', ham: results.points.dilHam ?? results.points.dil, puan: results.points.dil, rank: results.ydtHesaplandi ? results.estimatedRanks?.dil : undefined },
                            ].map(({ label, ham, puan, rank }, i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f5f7fb' }}>
                                    <td style={{ border: '1px solid #bbb', padding: '4px 8px', fontWeight: 'bold' }}>{label}</td>
                                    <td style={{ border: '1px solid #bbb', padding: '4px 8px', textAlign: 'center' }}>{fmt(ham)}</td>
                                    <td style={{ border: '1px solid #bbb', padding: '4px 8px', textAlign: 'center', fontWeight: 'bold', color: '#003087' }}>{fmt(puan)}</td>
                                    <td style={{ border: '1px solid #bbb', padding: '4px 8px', textAlign: 'center', color: '#c53030' }}>
                                        {!results.ydtHesaplandi && label === 'DİL (Yabancı Dil)' ? 'Hesaplanmadı' : fmtRank(rank)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {obp > 0 && (
                    <div style={{ marginBottom: '12px', fontSize: '10px', background: '#f0f4ff', border: '1px solid #c3d0f0', padding: '7px 12px', borderRadius: '4px' }}>
                        <strong>OBP Bilgisi:</strong> Diploma Notu: {obp} → OBP: {(obp * 5).toFixed(0)} → Puan Katkısı: +{(obp * 5 * 0.12).toFixed(2)}
                    </div>
                )}

                <div style={{ borderTop: '2px solid #003087', paddingTop: '8px', fontSize: '8px', color: '#888', textAlign: 'center' }}>
                    <div>Bu belge yksnethesapla.com tarafından üretilmiştir. ÖSYM ile resmi bir bağı bulunmamaktadır.</div>
                    <div>Tahmini sonuçlar 2025 YKS verilerine dayalı logaritmik interpolasyon ile hesaplanmıştır. Resmi sonuçlar için: osym.gov.tr</div>
                </div>
            </div>

            {/* Buton */}
            <button
                onClick={handleDownload}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors text-sm mt-2"
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
