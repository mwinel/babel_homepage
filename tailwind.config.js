const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontSize: {
            'display-lg': ['80px', '80px'],
            'display-md': ['56px', '60px'],
            'display-sm': ['36px', '40px'],
            'label-md': ['22px', '30px'],
            'label-sm': ['16px', '20px'],
            'buttons-lg': ['20px', '24px'],
            'buttons-md': ['18px', '20px'],
            'buttons-sm': ['16px', '18px'],
            lg: ['20px', '30px'],
            md: ['18px', '26px'],
            sm: ['16px', '24px'],
            xs: ['14px', '18px'],
        },
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
            gradient: '#48C6EF',
            'gradient-2': '#539DDA',
            'gradient-3': '#6F86D6',
            shadow: '#68C3FA',
            red: colors.red,
        },
        extend: {
            fontFamily: {
                urbanist: ['Urbanist', 'sans-serif'],
            },
            boxShadow: {
                'button-2xl': '0px 14px 40px -8px #68C3FA',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
