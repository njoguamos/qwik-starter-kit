import { join } from 'path'
import { type UserConfig, defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { partytownVite } from '@builder.io/partytown/utils'
import { qwikCity } from '@builder.io/qwik-city/vite'
import { qwikVite } from '@builder.io/qwik/optimizer'


export default defineConfig((): UserConfig => {
    return {
        plugins: [
            qwikCity(),
            qwikVite(),
            tsconfigPaths(),
            partytownVite({ dest: join(__dirname, 'dist', '~partytown') }),
        ],
        server: {
            headers: {
                'Cache-Control': 'public, max-age=0',
            },
        },
        preview: {
            headers: {
                'Cache-Control': 'public, max-age=600',
            },
        },
    }
})
