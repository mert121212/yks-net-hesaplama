export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
    if (typeof window !== 'undefined') {
        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: url,
        })
    }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
    action,
    category,
    label,
    value,
}: {
    action: string
    category: string
    label?: string
    value?: number
}) => {
    if (typeof window !== 'undefined') {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }
}

// YKS spesifik event'ler
export const trackNetCalculation = (examType: 'TYT' | 'AYT' | 'YDT', totalNet: number) => {
    event({
        action: 'net_calculation',
        category: 'YKS_Calculator',
        label: examType,
        value: Math.round(totalNet),
    })
}

export const trackScoreCalculation = (scoreType: 'SAY' | 'EA' | 'SOZ' | 'DIL', score: number) => {
    event({
        action: 'score_calculation',
        category: 'YKS_Calculator',
        label: scoreType,
        value: Math.round(score),
    })
}

export const trackCountdownView = () => {
    event({
        action: 'countdown_view',
        category: 'YKS_Engagement',
        label: 'countdown_page',
    })
}

export const trackGuideView = (section: string) => {
    event({
        action: 'guide_view',
        category: 'YKS_Content',
        label: section,
    })
}

declare global {
    interface Window {
        gtag: (...args: any[]) => void
    }
}