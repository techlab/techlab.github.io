export interface Product {
    title: string
    description: string
    versions: string[]
    features: string[]
    tags?: string[]
    pageLink: string
    docsLink?: string
    demoLink?: string
    screenshot?: string
    showOnHome?: boolean
}

export const products: Product[] = [
    {
        title: 'jQuery Smart Wizard',
        description: 'The awesome step wizard plugin for jQuery',
        versions: ['v6', 'v5', 'v4', 'v2'],
        features: [
            'Easy to implement and minimal HTML required',
            'Responsive CSS design',
            'Bootstrap compatible',
            'Cool themes included and can be easily customized',
            'Easy color customization using CSS variables',
            'Form validation support',
            'RTL (Right-to-left language) support',
            'Accessible controls',
            'External controls support',
            'Easy ajax content integration',
            'Auto content height adjustment',
            'Customizable toolbar and option to provide extra HTML'
        ],
        tags: ['jQuery'],
        pageLink: 'jquery-smartwizard',

        docsLink: 'jquery-smartwizard#documentation',
        demoLink: 'jquery-smartwizard#demo',
        // screenshot: './media/jquery-smart-wizard/v6/sw-6-arrows.png'
        screenshot: './media/jquery-smart-wizard/v6/gif/sw-6-validation.gif'
    },
    {
        title: 'jQuery Smart Cart',
        description: 'jQuery Shopping Cart plugin with PayPal payment support',
        versions: ['v3', 'v2'],
        features: [
            'In-built PayPal, Ajax and form submit methods',
            'Bootstrap support',
            'Compatible with latest jQuery versions',
            'Public methods for external function call',
            'Enhanced event support',
            'Clean and compact design'
        ],
        tags: ['jQuery'],
        pageLink: 'jquery-smartcart',
        screenshot: './media/jquery-smart-cart/v3/SmartCart3-Normal.png'
    },
    {
        title: 'jQuery Smart Tab',
        description: 'The flexible jQuery tab control plugin',
        versions: ['v4', 'v3', 'v2'],
        features: [
            'Responsive design',
            'Standalone CSS',
            'Bootstrap compatible',
            'Various themes included',
            'URL navigation and tab selection',
            'Ajax content loading support',
            'Keyboard navigation',
            'Auto content height adjustment',
            'Compatible with all jQuery versions',
            'Supports all modern browsers',
            'Auto Progress',
            'Cool transition animations'
        ],
        tags: ['jQuery'],
        pageLink: 'jquery-smarttab',
        screenshot: './media/jquery-smart-tab/v4/st-v4-basic.gif'
    },
    {
        title: 'Copify JS',
        description: 'A modern, cross-platform clipboard utility library for web',
        versions: ['v0'],
        features: [
            'Support on all modern browsers',
            'TypeScript support with comprehensive type definitions',
            'Fallback mechanisms for different levels of browser support',
            'Comprehensive error handling with detailed results',
            'Standalone with zero dependencies',
            'Lightweight and fast'
        ],
        tags: ['JavaScript'],
        pageLink: 'copify',
    },
    {
        title: 'create-jquery-plugin',
        description: 'CLI for creating ready-to-start modern jQuery Plugins',
        versions: ['v1'],
        features: [
            'Easy-to-use CLI',
            'CSS and SCSS templates',
            'Creates ready-to-start local development environment',
            'Unit testing with Jasmine and Karma'
        ],
        tags: ['jQuery', 'CLI'],
        pageLink: 'create-jquery-plugin',
        showOnHome: false,
    },
    {
        title: 'React Smart Tab',
        description: 'The awesome react tab component for ReactJS',
        versions: ['v1'],
        features: [
            'Responsive design',
            'Standalone CSS',
            'Bootstrap compatible',
            'Various themes included',
            'Customizable CSS',
            'Easy to implement',
            'Supports all modern browsers'
        ],
        tags: ['React'],
        pageLink: 'react-smarttab',
        showOnHome: false,
    },
]
