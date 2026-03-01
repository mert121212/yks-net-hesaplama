interface BlogArticleSchemaProps {
    title: string
    description: string
    datePublished: string
    dateModified?: string
    url: string
    keywords?: string[]
}

export default function BlogArticleSchema({
    title,
    description,
    datePublished,
    dateModified,
    url,
    keywords = []
}: BlogArticleSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description: description,
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        author: {
            '@type': 'Organization',
            name: 'YKS Net Hesaplama',
            url: 'https://yksnethesapla.com'
        },
        publisher: {
            '@type': 'Organization',
            name: 'YKS Net Hesaplama',
            logo: {
                '@type': 'ImageObject',
                url: 'https://yksnethesapla.com/icon.svg',
                width: 512,
                height: 512
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url
        },
        keywords: keywords.join(', '),
        inLanguage: 'tr-TR',
        isAccessibleForFree: true
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
