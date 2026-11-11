import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

// Get Google Analytics ID from environment variable
const GA_TAG_ID = process.env.VITE_GA_TAG_ID ?? 'XXX1'
const GA_CLIENT_ID = process.env.VITE_GA_CLIENT_ID ?? 'XXX2'

export default defineConfig({
    title: 'TechLaboratory',
    titleTemplate: ':title | TechLaboratory',
    description: 'Modern developer tools, open-source components, interactive playgrounds, and engineering guides for building better web applications.',
    base: '/',
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
                text: 'Components',
                items: [
                    { text: 'Smart Wizard', link: '/smart-wizard/', rel: 'smart-wizard' },
                    { text: 'Copify JS', link: '/copify/', rel: 'copify' },
                    { text: 'React Smart Tab', link: '/react-smarttab/', rel: 'react-smarttab' }
                ]
            },
            {
                text: 'jQuery',
                items: [
                    { text: 'jQuery Smart Wizard', link: '/jquery-smartwizard/', rel: 'jquery-smartwizard' },
                    { text: 'jQuery Smart Cart', link: '/jquery-smartcart/', rel: 'jquery-smartcart' },
                    { text: 'jQuery Smart Tab', link: '/jquery-smarttab/', rel: 'jquery-smarttab' },
                    { text: 'create-jquery-plugin', link: '/create-jquery-plugin/', rel: 'create-jquery-plugin' }
                ]
            },
            // {
            //     text: 'Tools',
            //     link: '/tools/'
            // },
            // {
            //     text: 'Articles',
            //     link: '/articles/'
            // }
        ],
        // sidebar: {
        //     '/tools/': [
        //         {
        //             text: 'Developer Utilities',
        //             items: [
        //                 { text: 'All Tools Suite', link: '/tools/' },
        //                 { text: 'JSON Formatter & Validator', link: '/tools/json-formatter/' },
        //                 { text: 'Base64 Encoder / Decoder', link: '/tools/base64/' },
        //                 { text: 'URL Encoder / Decoder', link: '/tools/url-encoder/' },
        //                 { text: 'UUID Generator (v4)', link: '/tools/uuid-generator/' },
        //                 { text: 'Regex Tester & Matcher', link: '/tools/regex-tester/' }
        //             ]
        //         }
        //     ],
        //     '/articles/': [
        //         {
        //             text: 'Engineering Blog',
        //             items: [
        //                 { text: 'All Articles', link: '/articles/' },
        //                 { text: 'Designing Multi-Step Form UX', link: '/articles/posts/multi-step-form-ux' },
        //                 { text: 'Smart Wizard v1 Architecture', link: '/articles/posts/smart-wizard-v1-architecture' },
        //                 { text: 'Zero-Dependency Component Design', link: '/articles/posts/zero-dependency-component-design' },
        //                 { text: 'AI Trap #1', link: '/articles/posts/ai-trap-1' }
        //             ]
        //         }
        //     ]
        // },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/techlab' },
            { icon: 'npm', link: 'https://www.npmjs.com/~dipuraj' }
        ]
    },
    head: [
        // Preconnect Fonts
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap' }],

        // Open Graph Meta
        ['meta', { property: 'og:site_name', content: 'TechLaboratory' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:image', content: 'https://techlaboratory.net/images/og-card.png' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:site', content: '@techlaboratory' }],
        ['meta', { name: 'theme-color', content: '#080c14' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }],

        // Google Adsense
        [
            'script',
            {
                async: '',
                src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + GA_CLIENT_ID,
                crossorigin: 'anonymous'
            }
        ],
        // Google Tag manager
        [
            'script',
            { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=' + GA_TAG_ID }
        ],
        // Google Analytics
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TAG_ID}');`
        ]
    ],
    sitemap: {
        hostname: 'https://techlaboratory.net'
    },
    ignoreDeadLinks: true,
    srcExclude: ['**/*bakcup*', '**/*backup*'],
    vite: {
        resolve: {
            alias: {
                // Creates an alias pointing directly to your .vitepress directory
                '@vitepress': fileURLToPath(new URL('./', import.meta.url))
            }
        }
    }
})
