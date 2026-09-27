import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://yksnethesapla.com'

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/'],
            },
            {
                userAgent: 'Mediapartners-Google',
                allow: '/',
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    }
}