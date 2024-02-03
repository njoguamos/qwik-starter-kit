import type { Provider } from '@auth/core/providers'
import Credentials from '@auth/core/providers/credentials'

import { serverAuth$ } from '@builder.io/qwik-auth'

const pages = {
    signIn: '/login',
    error: '/login',
    newUser: '/signin',
}

const EmailCredentials = Credentials({
    credentials: {
        email: {},
        password: {},
    },
    name: 'credentials',
    type: 'credentials',
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async authorize(credentials) {

        // Get user from your api
        // resp = await fetch('https://example.com/login', {})
        //
        // if (!resp.errors) {
        //     return resp.data.login
        // } else {
        //     return null
        // }
    },
})

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } = serverAuth$(({ env }) => ({
    secret: env.get('AUTH_SECRET'),
    trustHost: true,
    pages: pages,
    session: {
        strategy: 'jwt',
    },
    providers: [EmailCredentials] as Provider[],
    callbacks: {
        jwt: async function ({ token, user }) {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (user) {
                // Persist the OAuth access_token to the token right after signin
                // @ts-ignore
                token.access_token = user.access_token
            }

            return token
        },
        async session({ session, token }) {
            // Send properties to the client, like a token from a provider.
            // @ts-ignore
            session.access_token = token.access_token

            return session
        },
    },
}))