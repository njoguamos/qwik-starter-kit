const defaultTheme = require('tailwindcss/defaultTheme')

const commonTheme = {
    '--rounded-box': '0', // border radius rounded-box utility class, used in card and other large boxes
    '--rounded-btn': '0', // border radius rounded-btn utility class, used in buttons and similar element
    '--rounded-badge': '0', // border radius rounded-badge utility class, used in badges and similar
    '--animation-btn': '0', // duration of animation when you click on button
    '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
    '--btn-text-case': 'sentence', // set default text transform for buttons
    '--btn-focus-scale': 1, // scale transform of button when you focus on it
    '--border-btn': '1px', // border width of buttons
    '--tab-border': '1px', // border width of tabs
    '--tab-radius': '0', // border radius of tabs
}

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            aspectRatio: {
                '5/4': '5 / 4',
                '16/9': '16 / 9',
                '1.91/1': '1.91 / 1',
            },
            screens: {
                xs: '414px',
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/theming/themes')['light'],
                    ...commonTheme,
                    primary: '#0043CF',
                    'primary-focus': '#1865F5',
                    'primary-content': '#ffffff',
                    success: '#03703C',
                    'success-content': '#ffffff',
                    error: '#E11900',
                    'error-content': '#ffffff',
                    info: '#276EF1',
                    'info-content': '#ffffff',
                    warning: '#f5b864',
                    'warning-content': '#694811',
                },
                dark: {
                    ...require('daisyui/src/theming/themes')['dark'],
                    ...commonTheme,
                    primary: '#1865F5',
                    'primary-focus': '#0043CF',
                    success: '#048848',
                    'success-content': '#ffffff',
                    error: '#AB1300',
                    'error-content': '#ffffff',
                    info: '#276EF1',
                    'info-content': '#ffffff',
                    warning: '#BC8B2C',
                    'warning-content': '#694811',
                },
            },
        ],
    },
}
