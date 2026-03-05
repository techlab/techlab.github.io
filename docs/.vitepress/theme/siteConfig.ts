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
        description: 'A modern and accessible step wizard plugin for jQuery ',
        versions: ['v7', 'v6', 'v5', 'v4', 'v2'],
        features: [
            'Easy to implement with minimal and clean HTML structure',
            'Fully rewritten in TypeScript (v7) with built-in type declarations',
            'Compatible with all modern browsers',
            'Responsive and mobile-ready design',
            'Multiple built-in themes (`basic` | `arrows` | `glow` | `pills`), easily customizable',
            'Flexible color customization using CSS variables',
            'Light / dark / auto display mode support',
            'Built-in transition animations (`default` | `fade` | `slideHorizontal` | `slideVertical` | `slideSwing` | `css`)',
            'Compatible with CSS animation libraries (including [Animate.css](https://animate.style/))',
            'Extendable transition system with custom animation handlers',
            'Comprehensive step states: `completed`, `active`, `disabled`, `hidden`, `error`, `warning`',
            'Runtime option updates via `setOptions()`',
            'Automatic horizontal scrolling when steps overflow (mouse wheel supported)',
            'Keyboard navigation (left/right arrow keys)',
            'Form validation support via `leave.sw` event',
            'RTL (right-to-left language) support',
            'Accessible navigation controls',
            'Support for external navigation controls',
            'Dynamic content loading via `contentLoader` callback',
            'Auto content height adjustment',
            'Customizable toolbar with support for additional HTML elements',
            'Integrated progress bar',
            'URL hash navigation with browser history integration',
            'UMD (Universal Module Definition) compatible',
            'Supports jQuery >= 1.11.1, jQuery 3.x, jQuery 4.x, and jQuery Slim versions'
        ],
        tags: ['jQuery'],
        pageLink: 'jquery-smartwizard',

        docsLink: 'jquery-smartwizard#documentation',
        demoLink: 'jquery-smartwizard#demo',
        screenshot: './media/jquery-smart-wizard/v7/all-screens.png'
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
