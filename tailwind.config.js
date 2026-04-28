import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                dark: '#0B0C10',
                darker: '#050608',
                primary: '#1F2833',
                secondary: '#45A29E',
                accent: '#66FCF1',
                light: '#C5C6C7',
                white: '#FFFFFF',
            }
        },
    },

    plugins: [forms],
};
