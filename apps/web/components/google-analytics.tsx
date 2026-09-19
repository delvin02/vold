'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void
    }
}

export function GoogleAnalytics() {
    const pathname = usePathname()
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

    useEffect(() => {
        if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
            return
        }

        const url = pathname + window.location.search
        window.gtag?.('config', GA_MEASUREMENT_ID, {
            page_path: url,
        })
    }, [GA_MEASUREMENT_ID, pathname])

    if (!GA_MEASUREMENT_ID) {
        return null
    }

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script id="ga4-init" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: false,
          });
        `}
            </Script>
        </>
    )
}
