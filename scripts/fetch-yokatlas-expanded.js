const https = require('https')
const fs = require('fs')
const path = require('path')
const ts = require('typescript')

// 81 Türk İli (Resmi YÖK Atlas / Türkiye Standartları)
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
TR_CITIES.forEach(c => {
    cityMap.set(c.toLocaleUpperCase('tr-TR'), c)
})

// Bilinen üniversite - şehir eşleştirmeleri
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

function cleanProgramName(birimAdi, birimGrupAdi, uniTuru) {
    let name = birimAdi || birimGrupAdi || ''
    
    // Burs / Ücret ibarelerini temizle
    name = name.replace(/\s*\((?:Burslu|Ücretli|%[0-9]+\s*İndirimli)\)/gi, '').trim()
    
    // Özel kontenjanları temizle
    name = name.replace(/\s*\((?:KKTC Uyruklu|M\.T\.O\.K\.|İÖ|İkinci Öğretim|AÖF)\)/gi, '').trim()
    
    // Çift boşlukları tek boşluğa indir
    name = name.replace(/\s+/g, ' ').trim()
    return name
}

// TypeScript dosyasını transpile ederek yükle
function loadTsModule(filePath) {
    const code = fs.readFileSync(filePath, 'utf8')
    const res = ts.transpileModule(code, {
        compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
    })
    const mod = { exports: {} }
    new Function('exports', 'module', res.outputText)(mod.exports, mod)
    return mod.exports
}

// FastMCP çağrısı
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

// Baraj kontrolü
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

// Alan uyumu kontrolü
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

// Pearson korelasyonu testi
function calculateCorrelation(data) {
    const n = data.length
    if (n < 5) return 0
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0
    data.forEach(d => {
        sumX += d.minScore
        sumY += d.minRank
        sumXY += d.minScore * d.minRank
        sumX2 += d.minScore * d.minScore
        sumY2 += d.minRank * d.minRank
    })
    const num = (n * sumXY) - (sumX * sumY)
    const den = Math.sqrt(((n * sumX2) - (sumX * sumX)) * ((n * sumY2) - (sumY * sumY)))
    return den === 0 ? 0 : num / den
}

async function main() {
    console.log('🚀 YÖK ATLAS VERİ GENİŞLETME İŞLEMİ BAŞLATILIYOR...\n')

    // 1. Mevcut programları yükle
    const uniDir = path.resolve(__dirname, '../src/data/universities')
    const existingSay = loadTsModule(path.join(uniDir, 'sayisal.ts')).sayisalPrograms || []
    const existingEA = loadTsModule(path.join(uniDir, 'esitAgirlik.ts')).esitAgirlikPrograms || []
    const existingSOZ = loadTsModule(path.join(uniDir, 'sozel.ts')).sozelPrograms || []
    const existingDIL = loadTsModule(path.join(uniDir, 'dil.ts')).dilPrograms || []

    console.log(`Mevcut Program Sayıları:`)
    console.log(`  SAY: ${existingSay.length}`)
    console.log(`  EA:  ${existingEA.length}`)
    console.log(`  SOZ: ${existingSOZ.length}`)
    console.log(`  DIL: ${existingDIL.length}`)
    console.log(`  TOPLAM: ${existingSay.length + existingEA.length + existingSOZ.length + existingDIL.length}\n`)

    const existingKeys = new Set([
        ...existingSay,
        ...existingEA,
        ...existingSOZ,
        ...existingDIL
    ].map(p => `${p.university.trim()}___${p.program.trim()}___${p.field.trim()}`.toLowerCase()))

    // Fetch konfigürasyonu (her alan için kaç sayfa çekilecek)
    const fetchPlans = [
        {
            field: 'SAY',
            mcpField: 'SAY',
            plans: [
                { type: 'DEVLET', pages: 8 }, // 800 program
                { type: 'VAKIF', pages: 4 }   // 400 program
            ],
            targetList: [...existingSay]
        },
        {
            field: 'EA',
            mcpField: 'EA',
            plans: [
                { type: 'DEVLET', pages: 7 }, // 700 program
                { type: 'VAKIF', pages: 4 }   // 400 program
            ],
            targetList: [...existingEA]
        },
        {
            field: 'SOZ',
            mcpField: 'SÖZ',
            plans: [
                { type: 'DEVLET', pages: 5 }, // 500 program
                { type: 'VAKIF', pages: 3 }   // 300 program
            ],
            targetList: [...existingSOZ]
        },
        {
            field: 'DIL',
            mcpField: 'DİL',
            plans: [
                { type: 'DEVLET', pages: 4 }, // 400 program
                { type: 'VAKIF', pages: 3 }   // 300 program
            ],
            targetList: [...existingDIL]
        }
    ]

    for (const plan of fetchPlans) {
        console.log(`\n========================================`)
        console.log(`📥 ${plan.field} ALANI ÇEKİLİYOR (${plan.mcpField})`)
        console.log(`========================================`)

        let fetchedCount = 0
        let addedCount = 0

        for (const sub of plan.plans) {
            console.log(`  -> ${sub.type} (${sub.pages} sayfa, 100'erlik)...`)
            for (let page = 0; page < sub.pages; page++) {
                const items = await fetchMCPPage(plan.mcpField, sub.type, page, 100)
                fetchedCount += items.length

                for (const raw of items) {
                    // Vakıf ise sadece Burslu olanları al (en doğru taban puan & baraj standartı)
                    if (sub.type === 'VAKIF') {
                        if (raw.burs_orani_adi && !raw.burs_orani_adi.includes('Burslu')) {
                            continue
                        }
                    }

                    // KKTC veya yurtdışı uyruklu programları atla
                    if (raw.birim_adi && (raw.birim_adi.includes('KKTC Uyruklu') || raw.birim_adi.includes('UOLP'))) {
                        continue
                    }

                    const university = cleanUniversityName(raw.universite_adi)
                    const city = normalizeCity(raw.il_adi, university)
                    if (!city) continue

                    const program = cleanProgramName(raw.birim_adi, raw.birim_grup_adi, sub.type)
                    if (!program || program.length < 2) continue

                    const key = `${university.trim()}___${program.trim()}___${plan.field}`.toLowerCase()
                    if (existingKeys.has(key)) continue

                    // Puan ve Sıralama Çözümlemesi
                    let minScore = 0
                    let minRank = 0

                    if (raw.history && raw.history[0] && raw.history[0].min_puan > 0 && raw.history[0].basari_sirasi > 0) {
                        minScore = Math.round(raw.history[0].min_puan * 100) / 100
                        minRank = Math.round(raw.history[0].basari_sirasi)
                    } else if (raw.current && raw.current.min_puan > 0 && raw.current.basari_sirasi > 0) {
                        minScore = Math.round(raw.current.min_puan * 100) / 100
                        minRank = Math.round(raw.current.basari_sirasi)
                    }

                    if (minScore <= 0 || minRank <= 0) continue

                    // Skala sınırları
                    if (minScore < 150 || minScore > 560) continue
                    if (minRank < 1 || minRank > 2500000) continue

                    // Anomali kontrolleri
                    if (minScore >= 500 && minRank > 15000) continue
                    if (minScore <= 300 && minRank < 1000) continue

                    // Baraj ve Alan Doğrulaması
                    if (!passesLegalBaraj(program, plan.field, minRank)) continue
                    if (!passesFieldType(program, plan.field)) continue

                    let quota = raw.current?.kontenjan || raw.current?.yerlesen || 50
                    if (quota <= 0 || quota > 500) quota = 50

                    const newEntry = {
                        university,
                        program,
                        city,
                        field: plan.field,
                        minScore,
                        minRank,
                        quota
                    }

                    plan.targetList.push(newEntry)
                    existingKeys.add(key)
                    addedCount++
                }

                await new Promise(r => setTimeout(r, 600))
            }
        }

        console.log(`  ✔ Toplam ${fetchedCount} ham program incelendi.`)
        console.log(`  ✔ ${addedCount} yeni benzersiz program eklendi! (Yeni toplam: ${plan.targetList.length})`)

        // Sırala: Önce sıralamaya göre en iyiden kötüye
        plan.targetList.sort((a, b) => a.minRank - b.minRank)

        // Korelasyon kontrolü
        const r = calculateCorrelation(plan.targetList)
        console.log(`  📊 Pearson Korelasyonu: r = ${r.toFixed(3)} (Hedef: < -0.75)`)
    }

    // Dosyalara yaz
    console.log(`\n========================================`)
    console.log(`💾 DOSYALAR GÜNCELLENİYOR`)
    console.log(`========================================`)

    const filesToWrite = [
        { file: 'sayisal.ts', list: fetchPlans[0].targetList, varName: 'sayisalPrograms', title: 'Sayısal (SAY)' },
        { file: 'esitAgirlik.ts', list: fetchPlans[1].targetList, varName: 'esitAgirlikPrograms', title: 'Eşit Ağırlık (EA)' },
        { file: 'sozel.ts', list: fetchPlans[2].targetList, varName: 'sozelPrograms', title: 'Sözel (SÖZ)' },
        { file: 'dil.ts', list: fetchPlans[3].targetList, varName: 'dilPrograms', title: 'Yabancı Dil (DİL)' }
    ]

    for (const f of filesToWrite) {
        const filePath = path.join(uniDir, f.file)
        const tsContent = `import { UniversityProgram } from '@/types/yks'\n\n// 2025 YKS ${f.title} Taban Puanları ve Başarı Sıraları - YÖK Atlas\nexport const ${f.varName}: UniversityProgram[] = ${JSON.stringify(f.list, null, 2)}\n`
        fs.writeFileSync(filePath, tsContent, 'utf8')
        console.log(`  ✔ ${f.file} kaydedildi (${f.list.length} program)`)
    }

    const totalAll = filesToWrite.reduce((acc, curr) => acc + curr.list.length, 0)
    console.log(`\n🎉 TAMAMLANDI! Toplam veri hacmi: ${totalAll} üniversite programı.`)
}

main().catch(err => {
    console.error('Kritik Hata:', err)
    process.exit(1)
})
