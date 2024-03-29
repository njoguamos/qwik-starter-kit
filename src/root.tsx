import { QwikPartytown } from '~/components/partytown/partytown'

import { component$ } from '@builder.io/qwik'
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city'

import { RouterHead } from './components/router-head/router-head'
import './css/global.css'

export default component$(() => {
    /**
     * The root of a QwikCity site always start with the <QwikCityProvider> component,
     * immediately followed by the document's <head> and <body>.
     *
     * Don't remove the `<head>` and `<body>` elements.
     */

    return (
        <QwikCityProvider>
            <head>
                <meta charSet="utf-8" />
                <link
                    rel="manifest"
                    href="/manifest.json"
                />
                <QwikPartytown />
                <script
                    async
                    type="text/partytown"
                    data-domain="example.com"
                    src="https://plausible.io/js/script.js"
                />
                <RouterHead />
                <ServiceWorkerRegister />
            </head>
            <body
                lang="en"
                class="fonts-sans"
            >
                <RouterOutlet />
            </body>
        </QwikCityProvider>
    )
})
