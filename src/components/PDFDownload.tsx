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

// HTML string olarak PDF içeriği oluştur — DOM'a eklenmez, sadece PDF için kullanılır
function buildHTML(results: Props['results']): string {
    const now = new Date()
    const tarih = now.toLocaleDateString('tr-TR')
    const saat = now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    const obp = results.obp ?? 0

    const tytRows = [
        ['Türkçe', results.nets.tyt.turkce],
        ['Matematik', results.nets.tyt.matematik],
        ['Sosyal Bilimler', results.nets.tyt.sosyal],
        ['Fen Bilimleri', results.nets.tyt.fen],
    ].map(([d, n], i) => `<tr style="background:${i % 2 === 0 ? '#fff' : '#f5f7fb'}"><td style="border:1px solid #bbb;padding:3px 8px">${d}</td><td style="border:1px solid #bbb;padding:3px 8px;text-align:center;font-weight:bold">${fmt(n as number)}</td></tr>`).join('')

    const aytRows = [
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
    ].map(([d, n], i) => `<tr style="background:${i % 2 === 0 ? '#fff' : '#f5f7fb'}"><td style="border:1px solid #bbb;padding:3px 8px">${d}</td><td style="border:1px solid #bbb;padding:3px 8px;text-align:center;font-weight:bold">${fmt(n as number)}</td></tr>`).join('')

    const scoreRows = [
        { label: 'SAY (Sayısal)', ham: results.points.sayHam ?? results.points.say, puan: results.points.say, rank: results.estimatedRanks?.say },
        { label: 'EA (Eşit Ağırlık)', ham: results.points.eaHam ?? results.points.ea, puan: results.points.ea, rank: results.estimatedRanks?.ea },
        { label: 'SÖZ (Sözel)', ham: results.points.sozHam ?? results.points.soz, puan: results.points.soz, rank: results.estimatedRanks?.soz },
        { label: 'DİL (Yabancı Dil)', ham: results.points.dilHam ?? results.points.dil, puan: results.points.dil, rank: results.ydtHesaplandi ? results.estimatedRanks?.dil : undefined },
    ].map(({ label, ham, puan, rank }, i) => {
        const isDil = label.startsWith('DİL')
        const rankStr = !results.ydtHesaplandi && isDil ? 'Hesaplanmadı' : fmtRank(rank)
        return `<tr style="background:${i % 2 === 0 ? '#fff' : '#f5f7fb'}">
            <td style="border:1px solid #bbb;padding:4px 8px;font-weight:bold">${label}</td>
            <td style="border:1px solid #bbb;padding:4px 8px;text-align:center">${fmt(ham)}</td>
            <td style="border:1px solid #bbb;padding:4px 8px;text-align:center;font-weight:bold;color:#003087">${fmt(puan)}</td>
            <td style="border:1px solid #bbb;padding:4px 8px;text-align:center;color:#c53030">${rankStr}</td>
        </tr>`
    }).join('')

    const obpRow = obp > 0 ? `<div style="margin-bottom:12px;font-size:10px;background:#f0f4ff;border:1px solid #c3d0f0;padding:7px 12px;border-radius:4px">
        <strong>OBP Bilgisi:</strong> Diploma Notu: ${obp} → OBP: ${(obp * 5).toFixed(0)} → Puan Katkısı: +${(obp * 5 * 0.12).toFixed(2)}
    </div>` : ''

    return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
        body{font-family:Arial,sans-serif;font-size:11px;color:#000;background:#fff;padding:24px;width:750px}
        table{width:100%;border-collapse:collapse;font-size:10px;margin-bottom:4px}
        th{background:#e8edf5;border:1px solid #bbb;padding:4px 8px;text-align:left}
    </style></head><body>
    <div style="border-bottom:3px solid #003087;padding-bottom:10px;margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;align-items:center">
            <div><div style="font-size:22px;font-weight:bold;color:#003087;letter-spacing:2px">ÖSYM</div>
            <div style="font-size:10px;color:#555">Ölçme, Seçme ve Yerleştirme Merkezi</div></div>
            <div style="text-align:right;font-size:10px;color:#555"><div>YKS 2026 Tahmini Sonuç Belgesi</div><div>${tarih} — ${saat}</div></div>
        </div>
        <div style="margin-top:10px;text-align:center;font-size:13px;font-weight:bold;color:#003087">YKS 2026 — TAHMİNİ PUAN VE SIRALAMA RAPORU</div>
        <div style="text-align:center;font-size:9px;color:#c53030;margin-top:3px">⚠ Bu belge yksnethesapla.com tarafından üretilmiş TAHMİNİ bir sonuçtur. Resmi ÖSYM belgesi değildir.</div>
    </div>
    <div style="background:#003087;color:#fff;padding:4px 10px;font-size:11px;font-weight:bold;margin-bottom:4px">TYT (Temel Yeterlilik Testi) — Net Sonuçları</div>
    <table><thead><tr><th>Ders</th><th style="width:80px;text-align:center">Net</th></tr></thead><tbody>${tytRows}
    <tr style="background:#dbeafe;font-weight:bold"><td style="border:1px solid #bbb;padding:4px 8px">TYT TOPLAM NET</td><td style="border:1px solid #bbb;padding:4px 8px;text-align:center">${fmt(results.nets.tyt.toplam)}</td></tr>
    </tbody></table>
    <div style="background:#003087;color:#fff;padding:4px 10px;font-size:11px;font-weight:bold;margin:10px 0 4px">AYT (Alan Yeterlilik Testi) — Net Sonuçları</div>
    <table><thead><tr><th>Ders</th><th style="width:80px;text-align:center">Net</th></tr></thead><tbody>${aytRows}</tbody></table>
    <div style="background:#003087;color:#fff;padding:4px 10px;font-size:11px;font-weight:bold;margin:10px 0 4px">Tahmini Yerleştirme Puanları ve Sıralamalar</div>
    <table><thead><tr><th>Puan Türü</th><th style="text-align:center">Ham Puan</th><th style="text-align:center">Yerleştirme Puanı</th><th style="text-align:center">Tahmini Sıralama</th></tr></thead><tbody>${scoreRows}</tbody></table>
    ${obpRow}
    <div style="border-top:2px solid #003087;padding-top:8px;font-size:8px;color:#888;text-align:center;margin-top:12px">
        <div>Bu belge yksnethesapla.com tarafından üretilmiştir. ÖSYM ile resmi bir bağı bulunmamaktadır.</div>
        <div>Tahmini sonuçlar 2025 YKS verilerine dayalı logaritmik interpolasyon ile hesaplanmıştır. Resmi sonuçlar için: osym.gov.tr</div>
    </div>
    </body></html>`
}

export default function PDFDownload({ results }: Props) {
    const [loading, setLoading] = useState(false)

    const handleDownload = async () => {
        setLoading(true)
        try {
            const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
                import('jspdf'),
                import('html2canvas'),
            ])

            // Geçici iframe oluştur — mevcut sayfayı etkilemez
            const iframe = document.createElement('iframe')
            iframe.style.cssText = 'position:fixed;left:-9999px;top:0;width:794px;height:1123px;border:none;visibility:hidden'
            document.body.appendChild(iframe)

            const doc = iframe.contentDocument!
            doc.open()
            doc.write(buildHTML(results))
            doc.close()

            // Render için kısa bekleme
            await new Promise(r => setTimeout(r, 500))

            const canvas = await html2canvas(doc.body, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#ffffff',
                logging: false,
                width: 794,
            })

            document.body.removeChild(iframe)

            const imgData = canvas.toDataURL('image/jpeg', 0.95)
            const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' })
            const pageW = pdf.internal.pageSize.getWidth()
            const pageH = pdf.internal.pageSize.getHeight()
            const margin = 10
            const imgW = pageW - margin * 2
            const imgH = (canvas.height * imgW) / canvas.width

            if (imgH <= pageH - margin * 2) {
                pdf.addImage(imgData, 'JPEG', margin, margin, imgW, imgH)
            } else {
                // Çok uzunsa sayfalara böl
                let srcY = 0
                let first = true
                const slicePx = Math.floor((pageH - margin * 2) * (canvas.height / imgH))
                while (srcY < canvas.height) {
                    if (!first) pdf.addPage()
                    const h = Math.min(slicePx, canvas.height - srcY)
                    const sliceCanvas = document.createElement('canvas')
                    sliceCanvas.width = canvas.width
                    sliceCanvas.height = h
                    sliceCanvas.getContext('2d')!.drawImage(canvas, 0, srcY, canvas.width, h, 0, 0, canvas.width, h)
                    const sliceH = h * imgW / canvas.width
                    pdf.addImage(sliceCanvas.toDataURL('image/jpeg', 0.95), 'JPEG', margin, margin, imgW, sliceH)
                    srcY += h
                    first = false
                }
            }

            pdf.save('YKS-2026-Tahmin-Sonucum.pdf')
        } catch (e) {
            console.error('PDF hatası:', e)
        } finally {
            setLoading(false)
        }
    }

    return (
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
    )
}
