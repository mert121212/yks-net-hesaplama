const https = require('https')
const fs = require('fs')
const path = require('path')
const ts = require('typescript')

// 81 Türk İli
const TR_CITIES = [
    'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
    'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale',
    'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum',
    'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin',
    'İstanbul', 'İzmir', 'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli',
    'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir',
    'Niğde', 'Ordu', 'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat',
    'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak', 'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt',
    'Karaman', 'Kırıkkale', 'Batman', 'Şırnak', 'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük',
    'Kilis', 'Osmaniye', 'Düzce'
]

const cityMap = new Map()
TR_CITIES.forEach(c => cityMap.set(c.toLocaleUpperCase('tr-TR'), c))

const knownUniCities = {
    'BOĞAZİÇİ ÜNİVERSİTESİ': 'İstanbul',
    'ORTA DOĞU TEKNİK ÜNİVERSİTESİ': 'Ankara',
    'HACETTEPE ÜNİVERSİTESİ': 'Ankara',
    'İSTANBUL TEKNİK ÜNİVERSİTESİ': 'İstanbul',
    'EGE ÜNİVERSİTESİ': 'İzmir',
    'DOKUZ EYLÜL ÜNİVERSİTESİ': 'İzmir',
    'ANADOLU ÜNİVERSİTESİ': 'Eskişehir',
    'AKDENİZ ÜNİVERSİTESİ': 'Antalya',
    'BURSA ULUDAĞ ÜNİVERSİTESİ': 'Bursa',
    'ÇUKUROVA ÜNİVERSİTESİ': 'Adana',
    'ONDOKUZ MAYIS ÜNİVERSİTESİ': 'Samsun',
    'KARADENİZ TEKNİK ÜNİVERSİTESİ': 'Trabzon'
}

function normalizeCity(ilAdi, uniName) {
    if (!ilAdi) return null
    for (const [key, val] of Object.entries(knownUniCities)) {
        if (uniName.includes(key)) return val
    }
    const upper = ilAdi.trim().toLocaleUpperCase('tr-TR')
    return cityMap.get(upper) || null
}

function cleanUniversityName(raw) {
    if (!raw) return ''
    return raw
        .trim()
        .replace(/\s*\([A-ZÇĞİÖŞÜa-zçğıöşü\s]+\)$/, '')
        .trim()
        .toLocaleUpperCase('tr-TR')
}

function cleanProgramName(birimAdi, birimGrupAdi) {
    let name = birimAdi || birimGrupAdi || ''
    name = name.replace(/\s*\((?:Burslu|Ücretli|%[0-9]+\s*İndirimli)\)/gi, '').trim()
    name = name.replace(/\s*\((?:KKTC Uyruklu|M\.T\.O\.K\.|İÖ|İkinci Öğretim|AÖF)\)/gi, '').trim()
    name = name.replace(/\s+/g, ' ').trim()
    return name
}

function loadTsModule(filePath) {
    const code = fs.readFileSync(filePath, 'utf8')
    const res = ts.transpileModule(code, {
        compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
    })
    const mod = { exports: {} }
    new Function('exports', 'module', res.outputText)(mod.exports, mod)
    return mod.exports
}

async function fetchMCPPage(puanTuru, uniTuru, page, size = 100, retries = 4) {
    const body = JSON.stringify({
        jsonrpc: '2.0',
        method: 'tools/call',
        id: 1,
        params: {
            name: 'search_programs',
            arguments: {
                degree_type: 'bachelor',
                puan_turu: puanTuru,
                universite_turu: uniTuru,
                page: page,
                size: size,
                sort_by: 'basariSirasi',
                direction: 'ASC'
            }
        }
    })

    for (let i = 0; i < retries; i++) {
        try {
            return await new Promise((resolve, reject) => {
                const req = https.request({
                    hostname: 'yokatlasmcp.fastmcp.app',
                    path: '/mcp',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json, text/event-stream',
                        'Content-Length': Buffer.byteLength(body),
                        'Connection': 'close'
                    }
                }, res => {
                    let data = ''
                    res.on('data', chunk => data += chunk)
                    res.on('end', () => {
                        const lines = data.split('\n')
                        for (const line of lines) {
                            if (line.startsWith('data: ')) {
                                try {
                                    const json = JSON.parse(line.slice(6))
                                    const content = JSON.parse(json.result.content[0].text)
                                    resolve(content.content || [])
                                    return
                                } catch (e) {
                                    resolve([])
                                    return
                                }
                            }
                        }
                        resolve([])
                    })
                })

                req.on('error', reject)
                req.setTimeout(20000, () => {
                    req.destroy()
                    reject(new Error('timeout'))
                })
                req.write(body)
                req.end()
            })
        } catch (e) {
            console.log(`    [Tekrar ${i + 1}/${retries}] Hata: ${e.message}, bekleniyor...`)
            await new Promise(r => setTimeout(r, 2000))
        }
    }
    return []
}

function passesLegalBaraj(programName, field, rank) {
    const name = programName.toLowerCase()
    if (name.includes('tıp') && !name.includes('tıbbi') && field === 'SAY' && rank > 50000) return false
    if (name.includes('diş hekimliği') && rank > 80000) return false
    if (name.includes('eczacılık') && rank > 100000) return false
    if (name.includes('hukuk') && rank > 125000) return false
    if (name.includes('mimarlık') && !name.includes('iç') && rank > 250000) return false
    if (name.includes('mühendisliği') &&
        !name.includes('ziraat') &&
        !name.includes('su ürünleri') &&
        !name.includes('orman') &&
        !name.includes('ağaç') &&
        !name.includes('yönetim bilişim') &&
        rank > 300000) return false
    if (name.includes('öğretmenliği') && rank > 300000) return false
    return true
}

function passesFieldType(programName, field) {
    const name = programName.toLowerCase()
    if ((name.includes('tıp') && !name.includes('tıbbi')) ||
        name.includes('diş hekimliği') ||
        name.includes('eczacılık') ||
        name.includes('veteriner') ||
        name.includes('hemşirelik') ||
        name.includes('ebelik') ||
        name.includes('fizyoterapi') ||
        name.includes('beslenme ve diyetetik') ||
        (name.includes('mühendisliği') && !name.includes('yönetim bilişim'))) {
        if (field !== 'SAY') return false
    }

    if (name.includes('hukuk') ||
        name.includes('psikoloji') ||
        name.includes('iktisat') ||
        name.includes('işletme') ||
        name.includes('uluslararası ilişkiler') ||
        name.includes('siyaset bilimi') ||
        name.includes('maliye') ||
        name.includes('ekonometri') ||
        name.includes('kamu yönetimi') ||
        name.includes('yönetim bilişim sistemleri')) {
        if (field !== 'EA') return false
    }

    if (name.includes('türkçe öğretmenliği') ||
        name.includes('özel eğitim öğretmenliği') ||
        name.includes('okul öncesi öğretmenliği') ||
        name.includes('ilahiyat') ||
        name.includes('gastronomi') ||
        name.includes('gazetecilik') ||
        name.includes('halkla ilişkiler') ||
        name.includes('radyo, televizyon') ||
        name.includes('tarih öğretmenliği') ||
        name.includes('çizgi film ve animasyon')) {
        if (field !== 'SOZ') return false
    }

    if (name.includes('ingilizce öğretmenliği') ||
        name.includes('ingiliz dili ve edebiyatı') ||
        name.includes('mütercim') ||
        name.includes('amerikan kültürü') ||
        name.includes('çeviribilim') ||
        name.includes('alman dili') ||
        name.includes('fransız dili')) {
        if (field !== 'DIL') return false
    }

    return true
}

function calculateCorrelation(data, rankKey = 'minRank', scoreKey = 'minScore') {
    const valid = data.filter(d => d[rankKey] && d[scoreKey])
    const n = valid.length
    if (n < 5) return 0
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0
    valid.forEach(d => {
        sumX += d[scoreKey]
        sumY += d[rankKey]
        sumXY += d[scoreKey] * d[rankKey]
        sumX2 += d[scoreKey] * d[scoreKey]
        sumY2 += d[rankKey] * d[rankKey]
    })
    const num = (n * sumXY) - (sumX * sumY)
    const den = Math.sqrt(((n * sumX2) - (sumX * sumX)) * ((n * sumY2) - (sumY * sumY)))
    return den === 0 ? 0 : num / den
}

async function main() {
    console.log('🚀 2026 VE 2025 YÖK ATLAS VERİLERİNİ SENKRONİZE ETME BAŞLATILIYOR...\n')

    const uniDir = path.resolve(__dirname, '../src/data/universities')
    const existingSay = loadTsModule(path.join(uniDir, 'sayisal.ts')).sayisalPrograms || []
    const existingEA = loadTsModule(path.join(uniDir, 'esitAgirlik.ts')).esitAgirlikPrograms || []
    const existingSOZ = loadTsModule(path.join(uniDir, 'sozel.ts')).sozelPrograms || []
    const existingDIL = loadTsModule(path.join(uniDir, 'dil.ts')).dilPrograms || []

    const fieldConfigs = [
        {
            field: 'SAY',
            mcpField: 'SAY',
            plans: [
                { type: 'DEVLET', pages: 8 },
                { type: 'VAKIF', pages: 4 }
            ],
            existingList: existingSay,
            fileName: 'sayisal.ts',
            varName: 'sayisalPrograms',
            title: 'Sayısal (SAY)'
        },
        {
            field: 'EA',
            mcpField: 'EA',
            plans: [
                { type: 'DEVLET', pages: 7 },
                { type: 'VAKIF', pages: 4 }
            ],
            existingList: existingEA,
            fileName: 'esitAgirlik.ts',
            varName: 'esitAgirlikPrograms',
            title: 'Eşit Ağırlık (EA)'
        },
        {
            field: 'SOZ',
            mcpField: 'SÖZ',
            plans: [
                { type: 'DEVLET', pages: 5 },
                { type: 'VAKIF', pages: 3 }
            ],
            existingList: existingSOZ,
            fileName: 'sozel.ts',
            varName: 'sozelPrograms',
            title: 'Sözel (SÖZ)'
        },
        {
            field: 'DIL',
            mcpField: 'DİL',
            plans: [
                { type: 'DEVLET', pages: 4 },
                { type: 'VAKIF', pages: 3 }
            ],
            existingList: existingDIL,
            fileName: 'dil.ts',
            varName: 'dilPrograms',
            title: 'Yabancı Dil (DİL)'
        }
    ]

    for (const config of fieldConfigs) {
        console.log(`\n========================================`)
        console.log(`📥 ${config.field} SENKRONİZASYONU (${config.mcpField})`)
        console.log(`========================================`)

        // Program Haritası oluştur (key: uni___prog___field)
        const progMap = new Map()

        // Önce mevcut programları yükle ve 2025 verilerini koru
        config.existingList.forEach(p => {
            const key = `${p.university.trim()}___${p.program.trim()}___${config.field}`.toLowerCase()
            progMap.set(key, {
                ...p,
                minScore2025: p.minScore2025 || p.minScore,
                minRank2025: p.minRank2025 || p.minRank,
                quota2025: p.quota2025 || p.quota,
                // Mevcut değerleri de koru
                minScore: p.minScore,
                minRank: p.minRank,
                quota: p.quota
            })
        })

        // MCP'den 2026 ve 2025 verilerini çek
        for (const sub of config.plans) {
            console.log(`  -> ${sub.type} (${sub.pages} sayfa)...`)
            for (let page = 0; page < sub.pages; page++) {
                const items = await fetchMCPPage(config.mcpField, sub.type, page, 100)

                for (const raw of items) {
                    if (sub.type === 'VAKIF' && raw.burs_orani_adi && !raw.burs_orani_adi.includes('Burslu')) {
                        continue
                    }
                    if (raw.birim_adi && (raw.birim_adi.includes('KKTC Uyruklu') || raw.birim_adi.includes('UOLP'))) {
                        continue
                    }

                    const university = cleanUniversityName(raw.universite_adi)
                    const city = normalizeCity(raw.il_adi, university)
                    if (!city) continue

                    const program = cleanProgramName(raw.birim_adi, raw.birim_grup_adi)
                    if (!program || program.length < 2) continue

                    const key = `${university.trim()}___${program.trim()}___${config.field}`.toLowerCase()

                    // 2026 Verisi
                    let s2026 = undefined, r2026 = undefined, q2026 = undefined
                    if (raw.current && raw.current.min_puan > 0 && raw.current.basari_sirasi > 0) {
                        s2026 = Math.round(raw.current.min_puan * 100) / 100
                        r2026 = Math.round(raw.current.basari_sirasi)
                        q2026 = raw.current.kontenjan || raw.current.yerlesen || 50
                    }

                    // 2025 Verisi
                    let s2025 = undefined, r2025 = undefined, q2025 = undefined
                    if (raw.history && raw.history[0] && raw.history[0].min_puan > 0 && raw.history[0].basari_sirasi > 0) {
                        s2025 = Math.round(raw.history[0].min_puan * 100) / 100
                        r2025 = Math.round(raw.history[0].basari_sirasi)
                        q2025 = raw.history[0].kontenjan || raw.current?.kontenjan || 50
                    }

                    // En az bir yılın verisi olmalı
                    if (!s2026 && !s2025) continue

                    // Skala kontrolleri
                    const checkRank = r2026 || r2025
                    const checkScore = s2026 || s2025
                    if (checkScore < 150 || checkScore > 560) continue
                    if (checkRank < 1 || checkRank > 2500000) continue
                    if (checkScore >= 500 && checkRank > 15000) continue
                    if (checkScore <= 300 && checkRank < 1000) continue
                    if (!passesLegalBaraj(program, config.field, checkRank)) continue
                    if (!passesFieldType(program, config.field)) continue

                    if (progMap.has(key)) {
                        const existing = progMap.get(key)
                        if (s2026 && r2026) {
                            existing.minScore2026 = s2026
                            existing.minRank2026 = r2026
                            existing.quota2026 = q2026
                        }
                        if (s2025 && r2025 && !existing.minScore2025) {
                            existing.minScore2025 = s2025
                            existing.minRank2025 = r2025
                            existing.quota2025 = q2025
                        }
                    } else {
                        // Yeni kayıt
                        const defaultScore = s2026 || s2025
                        const defaultRank = r2026 || r2025
                        const defaultQuota = q2026 || q2025 || 50

                        const newEntry = {
                            university,
                            program,
                            city,
                            field: config.field,
                            minScore: defaultScore,
                            minRank: defaultRank,
                            quota: defaultQuota
                        }
                        if (s2026 && r2026) {
                            newEntry.minScore2026 = s2026
                            newEntry.minRank2026 = r2026
                            newEntry.quota2026 = q2026
                        }
                        if (s2025 && r2025) {
                            newEntry.minScore2025 = s2025
                            newEntry.minRank2025 = r2025
                            newEntry.quota2025 = q2025
                        }
                        progMap.set(key, newEntry)
                    }
                }

                await new Promise(r => setTimeout(r, 600))
            }
        }

        const finalPrograms = Array.from(progMap.values())
        finalPrograms.sort((a, b) => a.minRank - b.minRank)

        const count2026 = finalPrograms.filter(p => p.minRank2026).length
        const count2025 = finalPrograms.filter(p => p.minRank2025).length
        const countBoth = finalPrograms.filter(p => p.minRank2026 && p.minRank2025).length

        console.log(`  ✔ Toplam Program: ${finalPrograms.length}`)
        console.log(`  ✔ 2026 Verisi Olan: ${count2026}`)
        console.log(`  ✔ 2025 Verisi Olan: ${count2025}`)
        console.log(`  ✔ Her İki Yıl da Olan: ${countBoth}`)

        // Dosyaya yaz
        const filePath = path.join(uniDir, config.fileName)
        const tsContent = `import { UniversityProgram } from '@/types/yks'\n\n// 2025 ve 2026 YKS ${config.title} Taban Puanları ve Başarı Sıraları - YÖK Atlas\nexport const ${config.varName}: UniversityProgram[] = ${JSON.stringify(finalPrograms, null, 2)}\n`
        fs.writeFileSync(filePath, tsContent, 'utf8')
        console.log(`  💾 ${config.fileName} kaydedildi.`)
    }

    console.log(`\n🎉 TÜM ALANLARDA 2026 VE 2025 VERİLERİ SENKRONİZE EDİLDİ!`)
}

main().catch(err => {
    console.error('Hata:', err)
    process.exit(1)
})
