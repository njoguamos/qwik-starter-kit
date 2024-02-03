import { Slot, component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'

//
// import * from "~/utils/server"
// import * from "~/utils/actions"
// import * from "~/utils/loaders"

export const useServerTimeLoader = routeLoader$(() => {
    return {
        date: new Date().toISOString(),
    }
})

export default component$(() => {
    return (
        <>
            <main>
                <Slot />
            </main>
        </>
    )
})
