import { defineConfig } from 'vitepress'

// Get Google Analytics ID from environment variable
const GA_TAG_ID = process.env.GA_TAG_ID ?? ''
const CARBON_SERVE_ID = process.env.CARBON_SERVE_ID ?? ''
const CARBON_PLACEMENT = process.env.CARBON_PLACEMENT ?? ''

export default defineConfig({
    title: 'TechLaboratory',
    description: 'Smart and open-source JavaScript plugins',
    cleanUrls: true,
    appearance: true, // Enable dark mode toggle
    themeConfig: {
        search: {
            provider: 'local'
        },
        logo: '/images/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'JavaScript',
                items: [
                    { text: 'Copify JS', link: '/copify/' },
                    { text: 'React Smart Tab', link: '/react-smarttab/' },
                    { text: 'create-jquery-plugin', link: '/create-jquery-plugin/' }
                ]
            },
            {
                text: 'jQuery Plugins',
                items: [
                    { text: 'jQuery Smart Wizard', link: '/jquery-smartwizard/' },
                    { text: 'jQuery Smart Tab', link: '/jquery-smarttab/' },
                    { text: 'jQuery Smart Cart', link: '/jquery-smartcart/' },
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/techlab' },
            { icon: 'npm', link: 'https://www.npmjs.com/~dipuraj' }
        ],
        carbonAds: {
            code: CARBON_SERVE_ID,
            placement: CARBON_PLACEMENT
        }
    },
    head: [
        [
            'script',
            { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=${GA_TAG_ID}' }
        ],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', ${GA_TAG_ID});`
        ],
        ['meta', { name: 'theme-color', content: '#0b69ff' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    sitemap: {
        hostname: 'https://techlaboratory.net'
    },
    ignoreDeadLinks: true
})