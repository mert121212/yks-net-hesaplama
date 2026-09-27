'use client'

import { useState } from 'react'

export default function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('Teknik Destek / Hata Bildirimi')
    const [message, setMessage] = useState('')
    const [copied, setCopied] = useState(false)

    const recipient = 'mertcaliskan36065d@gmail.com'

    // Form içeriğini e-posta gövdesine dönüştür
    const buildEmailContent = () => {
        const fullSubject = `[YKS Net Hesapla - ${subject}] ${name ? `${name}` : ''}`
        const body = `Gönderen: ${name || 'Belirtilmedi'}
E-Posta: ${email || 'Belirtilmedi'}
Konu: ${subject}

Mesaj:
${message}`
        return { fullSubject, body }
    }

    // Gmail Web üzerinden açma (öğrenciler için en sorunsuz yöntem)
    const handleGmailSend = (e: React.FormEvent) => {
        e.preventDefault()
        const { fullSubject, body } = buildEmailContent()
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(body)}`
        window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    }

    // Yerel E-posta İstemcisi (mailto)
    const handleDefaultMailSend = () => {
        const { fullSubject, body } = buildEmailContent()
        const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(body)}`
        window.location.href = mailtoUrl
    }

    // E-posta Adresini Panoya Kopyalama
    const handleCopyEmail = () => {
        navigator.clipboard.writeText(recipient)
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
    }

    return (
        <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
            <form onSubmit={handleGmailSend} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Adınız Soyadınız
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 text-sm"
                            placeholder="Adınız Soyadınız"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            E-Posta Adresiniz
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 text-sm"
                            placeholder="ornek@email.com"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Konu
                    </label>
                    <select
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 text-sm"
                    >
                        <option value="Teknik Destek / Hata Bildirimi">Teknik Destek / Hata Bildirimi</option>
                        <option value="İçerik Önerisi">İçerik Önerisi</option>
                        <option value="İş Birliği / Reklam">İş Birliği / Reklam</option>
                        <option value="Diğer">Diğer</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Mesajınız
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900 text-sm resize-y"
                        placeholder="Geri bildiriminizi veya sorunuzu buraya yazın..."
                    />
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    {/* Gmail ile Gönder Butonu */}
                    <button
                        type="submit"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold rounded-xl transition-all shadow-sm hover:shadow text-sm"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                        </svg>
                        Gmail ile Gönder
                    </button>

                    {/* Mailto Butonu */}
                    <button
                        type="button"
                        onClick={handleDefaultMailSend}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-sm hover:shadow text-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Mail Uygulaması ile Aç
                    </button>

                    {/* Adresi Kopyala Butonu */}
                    <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="px-4 py-3.5 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium rounded-xl transition-colors text-sm flex items-center justify-center gap-1.5"
                        title="E-posta adresini panoya kopyala"
                    >
                        {copied ? (
                            <>
                                <span className="text-green-600 font-semibold">✓ Kopyalandı</span>
                            </>
                        ) : (
                            <>
                                <span>📋 Adresi Kopyala</span>
                            </>
                        )}
                    </button>
                </div>

                <p className="text-xs text-gray-500 text-center sm:text-left">
                    💡 Formu doldurduğunuzda bilgileriniz hazır bir e-posta taslağına dönüştürülür ve doğrudan geliştiriciye iletilir.
                </p>
            </form>
        </div>
    )
}
