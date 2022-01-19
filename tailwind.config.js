const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            neutral: '#FFFFFF',
            'neutral-50': '#F5F6F7',
            'neutral-100': '#EEEFF1',
            'neutral-200': '#E2E3E6',
            'neutral-300': '#C5C7CE',
            'neutral-400': '#A3A6B1',
            'neutral-500': '#7C8090',
            'neutral-600': '#686D7F',
            'neutral-700': '#494F64',
            'neutral-800': '#0C1431',
            primary: '#DAF4FC',
            'primary-50': '#C2ECFA',
            'primary-100': '#A3E2F7',
            'primary-200': '#85D9F4',
            'primary-300': '#67CFF2',
            'primary-400': '#48C6EF',
            'primary-500': '#3CA5C7',
            'primary-600': '#245978',
            'primary-700': '#183850',
            'primary-800': '#0E2230',
        },
        extend: {
            fontFamily: {
                urbanist: ['Urbanist', 'sans-serif'],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
