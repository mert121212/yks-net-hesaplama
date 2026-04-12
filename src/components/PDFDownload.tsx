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

const f2 = (n: number) => n.toFixed(2)
const fRank = (n?: number) => n ? n.toLocaleString('tr-TR') : '—'

export default function PDFDownload({ results }: Props) {
    const [loading, setLoading] = useState(false)

    const handleDownload = async () => {
        setLoading(true)
        try {
            const { default: jsPDF } = await import('jspdf')
            const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' })

            const W = 210  // A4 genişlik
            const margin = 14
            const colW = W - margin * 2
            let y = margin

            const now = new Date()
            const tarih = now.toLocaleDateString('tr-TR') + ' — ' + now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })

            // ── Yardımcı fonksiyonlar ──────────────────────────────────────
            const newPageIfNeeded = (needed: number) => {
                if (y + needed > 280) { pdf.addPage(); y = margin }
            }

            const sectionHeader = (text: string) => {
                newPageIfNeeded(8)
                pdf.setFillColor(0, 48, 135)
                pdf.rect(margin, y, colW, 7, 'F')
                pdf.setTextColor(255, 255, 255)
                pdf.setFontSize(10)
                pdf.setFont('helvetica', 'bold')
                pdf.text(text, margin + 3, y + 5)
                pdf.setTextColor(0, 0, 0)
                y += 7
            }

            const tableHeader = (cols: { label: string; w: number }[]) => {
                pdf.setFillColor(232, 237, 245)
                pdf.rect(margin, y, colW, 6, 'F')
                pdf.setFontSize(8.5)
                pdf.setFont('helvetica', 'bold')
                let x = margin
                cols.forEach(({ label, w }) => {
                    pdf.text(label, x + 2, y + 4.2)
                    x += w
                })
                // Çizgiler
                pdf.setDrawColor(187, 187, 187)
                pdf.rect(margin, y, colW, 6)
                x = margin
                cols.forEach(({ w }, i) => { if (i < cols.length - 1) { x += w; pdf.line(x, y, x, y + 6) } })
                y += 6
            }

            const tableRow = (cells: { text: string; w: number; bold?: boolean; color?: [number, number, number] }[], even: boolean) => {
                newPageIfNeeded(6)
                if (even) { pdf.setFillColor(245, 247, 251); pdf.rect(margin, y, colW, 6, 'F') }
                pdf.setDrawColor(187, 187, 187)
                pdf.rect(margin, y, colW, 6)
                let x = margin
                cells.forEach(({ text, w, bold, color }, i) => {
                    if (i < cells.length - 1) pdf.line(x + w, y, x + w, y + 6)
                    pdf.setFont('helvetica', bold ? 'bold' : 'normal')
                    pdf.setFontSize(8.5)
                    if (color) pdf.setTextColor(...color); else pdf.setTextColor(0, 0, 0)
                    pdf.text(text, x + 2, y + 4.2)
                    x += w
                })
                pdf.setTextColor(0, 0, 0)
                y += 6
            }

            // ── BAŞLIK ─────────────────────────────────────────────────────
            pdf.setDrawColor(0, 48, 135)
            pdf.setLineWidth(0.8)
            pdf.line(margin, y + 14, W - margin, y + 14)

            pdf.setFontSize(18)
            pdf.setFont('helvetica', 'bold')
            pdf.setTextColor(0, 48, 135)
            pdf.text('ÖSYM', margin, y + 8)

            pdf.setFontSize(8)
            pdf.setFont('helvetica', 'normal')
            pdf.setTextColor(80, 80, 80)
            pdf.text('Ölçme, Seçme ve Yerleştirme Merkezi', margin, y + 12.5)

            pdf.setFontSize(8)
            pdf.text('YKS 2026 Tahmini Sonuç Belgesi', W - margin, y + 8, { align: 'right' })
            pdf.text(tarih, W - margin, y + 12.5, { align: 'right' })

            y += 18

            pdf.setFontSize(12)
            pdf.setFont('helvetica', 'bold')
            pdf.setTextColor(0, 48, 135)
            pdf.text('YKS 2026 — TAHMİNİ PUAN VE SIRALAMA RAPORU', W / 2, y, { align: 'center' })
            y += 5

            pdf.setFontSize(7.5)
            pdf.setFont('helvetica', 'normal')
            pdf.setTextColor(197, 48, 48)
            pdf.text('⚠ Bu belge yksnethesapla.com tarafından üretilmiş TAHMİNİ bir sonuçtur. Resmi ÖSYM belgesi değildir.', W / 2, y, { align: 'center' })
            pdf.setTextColor(0, 0, 0)
            y += 8

            // ── TYT ────────────────────────────────────────────────────────
            sectionHeader('TYT (Temel Yeterlilik Testi) — Net Sonuçları')
            const tytCols = [{ label: 'Ders', w: colW - 30 }, { label: 'Net', w: 30 }]
            tableHeader(tytCols)
            const tytData = [
                ['Türkçe', f2(results.nets.tyt.turkce)],
                ['Matematik', f2(results.nets.tyt.matematik)],
                ['Sosyal Bilimler', f2(results.nets.tyt.sosyal)],
                ['Fen Bilimleri', f2(results.nets.tyt.fen)],
            ]
            tytData.forEach(([d, n], i) => tableRow([{ text: d, w: colW - 30 }, { text: n, w: 30, bold: true }], i % 2 !== 0))
            // Toplam satırı
            newPageIfNeeded(7)
            pdf.setFillColor(219, 234, 254)
            pdf.rect(margin, y, colW, 6.5, 'F')
            pdf.setDrawColor(187, 187, 187)
            pdf.rect(margin, y, colW, 6.5)
            pdf.line(margin + colW - 30, y, margin + colW - 30, y + 6.5)
            pdf.setFont('helvetica', 'bold'); pdf.setFontSize(8.5); pdf.setTextColor(0, 0, 0)
            pdf.text('TYT TOPLAM NET', margin + 2, y + 4.5)
            pdf.text(f2(results.nets.tyt.toplam), margin + colW - 28, y + 4.5)
            y += 10

            // ── AYT ────────────────────────────────────────────────────────
            sectionHeader('AYT (Alan Yeterlilik Testi) — Net Sonuçları')
            tableHeader(tytCols)
            const aytData = [
                ['Matematik', f2(results.nets.ayt.matematik)],
                ['Fizik', f2(results.nets.ayt.fizik)],
                ['Kimya', f2(results.nets.ayt.kimya)],
                ['Biyoloji', f2(results.nets.ayt.biyoloji)],
                ['Edebiyat', f2(results.nets.ayt.edebiyat)],
                ['Tarih-1', f2(results.nets.ayt.tarih1)],
                ['Coğrafya-1', f2(results.nets.ayt.cografya1)],
                ['Tarih-2', f2(results.nets.ayt.tarih2)],
                ['Coğrafya-2', f2(results.nets.ayt.cografya2)],
                ['Felsefe', f2(results.nets.ayt.felsefe)],
                ['Din Kültürü', f2(results.nets.ayt.din)],
            ]
            aytData.forEach(([d, n], i) => tableRow([{ text: d, w: colW - 30 }, { text: n, w: 30, bold: true }], i % 2 !== 0))
            y += 6

            // ── PUANLAR ────────────────────────────────────────────────────
            sectionHeader('Tahmini Yerleştirme Puanları ve Sıralamalar')
            const c1 = 50, c2 = 35, c3 = 40, c4 = colW - c1 - c2 - c3
            tableHeader([
                { label: 'Puan Türü', w: c1 },
                { label: 'Ham Puan', w: c2 },
                { label: 'Yerleştirme Puanı', w: c3 },
                { label: 'Tahmini Sıralama', w: c4 },
            ])
            const scoreData = [
                { label: 'SAY (Sayısal)', ham: results.points.sayHam ?? results.points.say, puan: results.points.say, rank: results.estimatedRanks?.say },
                { label: 'EA (Eşit Ağırlık)', ham: results.points.eaHam ?? results.points.ea, puan: results.points.ea, rank: results.estimatedRanks?.ea },
                { label: 'SÖZ (Sözel)', ham: results.points.sozHam ?? results.points.soz, puan: results.points.soz, rank: results.estimatedRanks?.soz },
                { label: 'DİL (Yabancı Dil)', ham: results.points.dilHam ?? results.points.dil, puan: results.points.dil, rank: results.ydtHesaplandi ? results.estimatedRanks?.dil : undefined },
            ]
            scoreData.forEach(({ label, ham, puan, rank }, i) => {
                const isDil = label.startsWith('DİL')
                const rankStr = !results.ydtHesaplandi && isDil ? 'Hesaplanmadı' : fRank(rank)
                tableRow([
                    { text: label, w: c1, bold: true },
                    { text: f2(ham), w: c2 },
                    { text: f2(puan), w: c3, bold: true, color: [0, 48, 135] },
                    { text: rankStr, w: c4, color: [197, 48, 48] },
                ], i % 2 !== 0)
            })
            y += 6

            // ── OBP ────────────────────────────────────────────────────────
            const obp = results.obp ?? 0
            if (obp > 0) {
                newPageIfNeeded(10)
                pdf.setFillColor(240, 244, 255)
                pdf.setDrawColor(195, 208, 240)
                pdf.roundedRect(margin, y, colW, 8, 1, 1, 'FD')
                pdf.setFont('helvetica', 'bold'); pdf.setFontSize(8.5); pdf.setTextColor(0, 0, 0)
                pdf.text('OBP Bilgisi:', margin + 3, y + 5.2)
                pdf.setFont('helvetica', 'normal')
                pdf.text(`Diploma Notu: ${obp}  →  OBP: ${(obp * 5).toFixed(0)}  →  Puan Katkısı: +${(obp * 5 * 0.12).toFixed(2)}`, margin + 28, y + 5.2)
                y += 12
            }

            // ── ALT BİLGİ ─────────────────────────────────────────────────
            newPageIfNeeded(14)
            pdf.setDrawColor(0, 48, 135)
            pdf.setLineWidth(0.5)
            pdf.line(margin, y, W - margin, y)
            y += 4
            pdf.setFont('helvetica', 'normal'); pdf.setFontSize(7); pdf.setTextColor(120, 120, 120)
            pdf.text('Bu belge yksnethesapla.com tarafından üretilmiştir. ÖSYM ile resmi bir bağı bulunmamaktadır.', W / 2, y, { align: 'center' })
            y += 4
            pdf.text('Tahmini sonuçlar 2025 YKS verilerine dayalı logaritmik interpolasyon ile hesaplanmıştır.  |  Resmi sonuçlar için: osym.gov.tr', W / 2, y, { align: 'center' })

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
