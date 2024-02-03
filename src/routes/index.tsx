import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
    return (
        <>
            <h1 class="text-5xl">Welcome to hompage</h1>
        </>
    )
})

export const head: DocumentHead = {
    title: 'Welcome to Home',
    meta: [
        {
            name: 'description',
            content: 'Home page description',
        },
    ],
}
