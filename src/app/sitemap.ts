import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://yksnethesapla.com'

    const blogDates: Record<string, string> = {
        'tyt-turkce-paragraf-teknikleri': '2026-10-11',
        'yks-son-3-ay-calisma-plani': '2026-10-08',
        'sifirdan-tyt-matematik-calisma-rehberi': '2026-10-03',
        'obp-hesaplama': '2026-10-01',
        'yks-kac-net-kac-puan': '2026-09-28',
        'yks-hazirlik-programi': '2026-09-20',
        'tyt-matematik-konulari': '2026-09-15',
        'ayt-matematik-konulari': '2026-09-10',
        'yks-edebiyat-konulari': '2026-09-05',
        'yks-net-hesaplama-nasil-yapilir': '2026-08-30',
        'yks-2027-basvuru-tarihleri': '2026-08-22',
        'yks-1-net-kac-kisi-atar': '2026-08-15',
        'tyt-net-hesaplama-rehberi': '2026-08-08',
        'tyt-kesin-cikan-konular': '2026-07-25',
        'tyt-net-artirma-taktikleri': '2026-07-18',
        'ayt-puan-hesaplama': '2026-07-10',
        'universite-tercih-stratejileri': '2026-06-28',
        'yks-yigilma-tehlikesi': '2026-06-15',
        'yks-puan-turleri': '2026-06-05',
    }

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date('2026-10-11'),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/universiteler`,
            lastModified: new Date('2026-10-10'),
            changeFrequency: 'daily',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/geri-sayim`,
            lastModified: new Date('2026-10-11'),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/yks-rehberi`,
            lastModified: new Date('2026-10-05'),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/sss`,
            lastModified: new Date('2026-10-09'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date('2026-09-15'),
            changeFrequency: 'monthly',
            priority: 0.2,
        },
        {
            url: `${baseUrl}/hakkimizda`,
            lastModified: new Date('2026-10-01'),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: `${baseUrl}/iletisim`,
            lastModified: new Date('2026-10-01'),
            changeFrequency: 'monthly',
            priority: 0.4,
        },
        {
            url: `${baseUrl}/kullanim-kosullari`,
            lastModified: new Date('2026-09-15'),
            changeFrequency: 'monthly',
            priority: 0.2,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date('2026-10-11'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ]

    const blogPages: MetadataRoute.Sitemap = Object.entries(blogDates).map(([slug, modDate]) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(modDate),
        changeFrequency: 'monthly',
        priority: 0.8,
    }))

    return [...staticPages, ...blogPages]
}