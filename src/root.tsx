import { QwikPartytown } from '~/components/partytown/partytown'

import { component$ } from '@builder.io/qwik'
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city'

import { RouterHead } from './components/router-head/router-head'
import './css/global.css'

const domain: string = import.meta.env.PUBLIC_PLAUSIBLE_DOMAIN
const event: string = import.meta.env.PUBLIC_PLAUSIBLE_EVENT_ENDPOINT
const src: string = import.meta.env.PUBLIC_PLAUSIBLE_SCRIPT_URL

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
                <QwikPartytown />
                <script
                    async
                    type="text/partytown"
                    data-api={`${event}`}
                    src={`${src}`}
                    data-domain={`${domain}`}
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
