import { component$ } from '@builder.io/qwik'
import { useDocumentHead, useLocation } from '@builder.io/qwik-city'

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
// prettier-ignore
export const RouterHead = component$(() => {
    const head = useDocumentHead()
    const loc = useLocation()

    return (
        <>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>

            <title>{head.title}</title>

            <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            {/*<link rel="mask-icon" sizes="any" href="/gray-ark-mask-icon.svg" color="#141414"/>*/}
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="light"/>
            <meta name="apple-mobile-web-app-title" content="Gray Ark"/>
            <meta name="apple-touch-fullscreen" content="yes"/>
            {/*<link rel="apple-touch-startup-image" href="/icons/icon-name@1024.png"/>*/}

            <link rel="manifest" href="/manifest.json"/>
            <meta name="theme-color" media="(prefers-color-scheme: light)" content="white"/>
            <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black"/>
            {/*<link rel="apple-touch-icon" sizes="120x120" href="/icons/icon-name@120.png"/>*/}
            {/*<link rel="apple-touch-icon" sizes="128x128" href="/icons/icon-name@128.png"/>*/}
            {/*<link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-name@144.png"/>*/}
            {/*<link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-name@152.png"/>*/}
            {/*<link rel="apple-touch-icon" sizes="167x167" href="/icons/icon-name@167.png"/>*/}
            {/*<link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-name@180.png"/>*/}
            {/*<link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-name@192.png"/>*/}
            {/*<link rel="icon" type="image/png" sizes="512x512" href="/icons/icon-name@512.png"/>*/}

            <link rel="canonical" href={loc.url.href}/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="Gray Ark"/>

            <meta property="og:image:type" content="image/jpeg"/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@TwitterUsername"/>

            <meta property="og:title" content={head.title}/>
            <meta property="og:url" content={loc.url.href}/>

            {head.meta.map((m) => (
                <meta
                    key={m.key}
                    {...m}
                />
            ))}

            {head.links.map((l) => (
                <link
                    key={l.key}
                    {...l}
                />
            ))}

            {head.styles.map((s) => (
                <style
                    key={s.key}
                    {...s.props}
                    dangerouslySetInnerHTML={s.style}
                />
            ))}

            {head.scripts.map((s) => (
                <script
                    key={s.key}
                    {...s.props}
                    dangerouslySetInnerHTML={s.script}
                />
            ))}
        </>
    )
})
