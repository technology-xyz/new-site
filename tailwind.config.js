// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
    purge   : [
        './src/**/*.html',
        './src/**/*.js'
    ],
    darkMode: false,

    theme: {



        screens   : {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
        },
        colors    : {
            gray: colors.coolGray,
            blue: colors.lightBlue,
            red : colors.rose,
            pink: colors.fuchsia
        },
        fontFamily: {
            sans : ['Prompt', 'sans-serif']
        },

        extend  : {
            backgroundImage: theme => ({
                'grad-bkg': "url('/img/grad_bkg.png')"

            }),
            colors         : {
                primary  : "#3acebc",
                secondary: "#563399",
                neutral  : "#8b37a0"
            },
            fill           : theme => theme('colors'),
            spacing        : {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius   : {
                '4xl': '2rem',
            }


        },
        variants: {
            extend: {}
        },
        plugins : []
    }
}

