import type { QwikIntrinsicElements } from '@builder.io/qwik'

function ArrowRight(props: QwikIntrinsicElements['svg'], key: string) {
    return (
        <svg
            {...props}
            key={key}
            viewBox="0 0 21 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.2519 0.5L11.0571 1.54475L17.39 7.25H0.555168V8.75H17.39L11.0571 14.4298L12.2519 15.5L20.6066 8L12.2519 0.5Z"
                fill="currentColor"
            />
        </svg>
    )
}

export { ArrowRight }
