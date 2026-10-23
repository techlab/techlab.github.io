export interface ProductMetric {
  label: string
  value: string
  description?: string
}

export interface ProductDefinition {
  id: string
  name: string
  title: string
  tagline: string
  description: string
  category: 'Component' | 'Plugin' | 'Utility' | 'CLI'
  status: 'stable' | 'beta' | 'experimental' | 'new' | 'popular'
  badge?: string
  featured?: boolean
  logo?: string
  repository?: string
  npm?: string
  pageLink: string
  docsLink?: string
  demoLink?: string
  pricingLink?: string
  changelogLink?: string
  versions: string[]
  metrics?: ProductMetric[]
  frameworks?: string[]
  features: string[]
  screenshot?: string
  showOnHome?: boolean
}

export const products: ProductDefinition[] = [
  {
    id: 'smart-wizard',
    name: 'Smart Wizard',
    title: 'Smart Wizard',
    tagline: 'Modern, framework-agnostic multi-step wizard component',
    description: 'Built from the ground up with TypeScript and zero runtime dependencies. Features official React and Vue 3 adapters, modular themes, fluent step APIs, and W3C WAI-ARIA accessibility.',
    category: 'Component',
    status: 'popular',
    badge: 'Flagship',
    featured: true,
    repository: 'https://github.com/techlab/smart-wizard',
    npm: '@smart-wizard/core',
    pageLink: '/smart-wizard/',
    docsLink: '/smart-wizard/v1/',
    demoLink: '/smart-wizard/demos',
    pricingLink: '/smart-wizard/pricing',
    changelogLink: '/smart-wizard/changelog',
    versions: ['v1'],
    metrics: [
      { label: 'Runtime Dependencies', value: '0', description: 'Pure TypeScript core' },
      { label: 'Framework Adapters', value: '3+', description: 'Vanilla, React & Vue 3' },
      { label: 'Themes Included', value: '4', description: 'Default, Arrows, Pills, Glow' },
      { label: 'WAI-ARIA Compliance', value: '100%', description: 'Fully accessible' }
    ],
    frameworks: ['TypeScript', 'JavaScript', 'React', 'Vue 3'],
    features: [
      'Zero runtime dependencies, written in TypeScript with full type declarations',
      'Framework-agnostic core architecture with official React and Vue 3 adapters',
      'Modern, accessible UI strictly adhering to W3C WAI-ARIA authoring practices',
      'Multiple modular built-in themes (default, arrows, pills, glow)',
      'Extensive color presets and automatic, light, and dark color-scheme support',
      'Horizontal and vertical layout modes with responsive mobile auto-folding',
      'Built-in transitions (fade, slideHorizontal, slideVertical, slideSwing) and Animate.css support',
      'Comprehensive step states: completed, active, disabled, hidden, error, warning',
      'Extensible lifecycle plugin system (touch swipe, URL hash & browser history)',
      'Dynamic asynchronous content loading via contentLoader callback',
      'Integrated progress bar, loader overlay, and auto height adjustment'
    ],
    screenshot: '/media/jquery-smart-wizard/v7/screens-banner.png',
    showOnHome: true
  },
  {
    id: 'jquery-smartwizard',
    name: 'jQuery Smart Wizard',
    title: 'jQuery Smart Wizard',
    tagline: 'The premier step wizard plugin for jQuery',
    description: 'The battle-tested, highly customizable multi-step navigation plugin. Serving web developers for over a decade with millions of downloads and robust enterprise form validation.',
    category: 'Plugin',
    status: 'stable',
    badge: '10M+ Hits',
    featured: false,
    repository: 'https://github.com/techlab/jquery-smartwizard',
    npm: 'smartwizard',
    pageLink: '/jquery-smartwizard/',
    docsLink: '/jquery-smartwizard/v7/',
    demoLink: '/jquery-smartwizard/v7/demo',
    versions: ['v7', 'v6', 'v5', 'v4', 'v2'],
    metrics: [
      { label: 'CDN Requests', value: '10M+', description: 'Monthly requests across jsDelivr & cdnjs' },
      { label: 'GitHub Stars', value: '3.2k+', description: 'Trusted worldwide' },
      { label: 'Years Maintained', value: '12+', description: 'Actively updated since 2012' }
    ],
    frameworks: ['jQuery', 'JavaScript', 'Bootstrap'],
    features: [
      'Fully rewritten in TypeScript (v7) with built-in type declarations',
      'Clean and minimal HTML structure with responsive, mobile-ready layout',
      'Multiple themes (basic, arrows, glow, pills) easily customizable via CSS variables',
      'Rich transition animations with full support for external CSS animation libraries',
      'Form validation integration via leave.sw event hooks',
      'RTL (right-to-left) language support and keyboard navigation',
      'Dynamic Ajax content loading and URL hash history integration',
      'Compatible with jQuery >= 1.11.1, jQuery 3.x, jQuery 4.x, and jQuery Slim'
    ],
    screenshot: '/media/jquery-smart-wizard/v7/all-screens.png',
    showOnHome: true
  },
  {
    id: 'jquery-smartcart',
    name: 'jQuery Smart Cart',
    title: 'jQuery Smart Cart',
    tagline: 'Interactive shopping cart plugin with payment gateway support',
    description: 'A streamlined, feature-rich interactive shopping cart plugin with built-in PayPal integration, Ajax submissions, currency customization, and Bootstrap styling.',
    category: 'Plugin',
    status: 'stable',
    badge: 'E-Commerce',
    featured: false,
    repository: 'https://github.com/techlab/jquery-smartcart',
    npm: 'smartcart',
    pageLink: '/jquery-smartcart/',
    docsLink: '/jquery-smartcart/v3/',
    versions: ['v3', 'v2'],
    metrics: [
      { label: 'Setup Time', value: '< 5 min', description: 'Drop-in HTML & JS integration' },
      { label: 'Payment Gateways', value: 'PayPal & Custom', description: 'Form & Ajax submit ready' }
    ],
    frameworks: ['jQuery', 'Bootstrap'],
    features: [
      'In-built PayPal, Ajax, and form submit payment methods',
      'Clean, modern, and compact responsive checkout interface',
      'Public methods for programmatic cart updates and event listeners',
      'Dynamic subtotal, tax, and shipping calculation',
      'Bootstrap 3, 4, and 5 compatibility out of the box'
    ],
    screenshot: '/media/jquery-smart-cart/v3/SmartCart3-Normal.png',
    showOnHome: true
  },
  {
    id: 'jquery-smarttab',
    name: 'jQuery Smart Tab',
    title: 'jQuery Smart Tab',
    tagline: 'The flexible, animated jQuery tab control plugin',
    description: 'Versatile tab navigation control with responsive layouts, URL hash tracking, Ajax panel loading, auto-progress timers, and diverse visual themes.',
    category: 'Plugin',
    status: 'stable',
    featured: false,
    repository: 'https://github.com/techlab/jquery-smarttab',
    npm: 'smarttab',
    pageLink: '/jquery-smarttab/',
    docsLink: '/jquery-smarttab/v4/',
    versions: ['v4', 'v3', 'v2'],
    frameworks: ['jQuery', 'Bootstrap'],
    features: [
      'Responsive layout with automatic mobile adaptations',
      'Built-in visual themes (basic, brick, elite, pills)',
      'URL hash navigation and deep-linking support',
      'Ajax content loading and auto-progress tab rotation',
      'Keyboard navigation and auto content height adjustments'
    ],
    screenshot: '/media/jquery-smart-tab/v4/st-v4-basic.gif',
    showOnHome: true
  },
  {
    id: 'copify',
    name: 'Copify JS',
    title: 'Copify JS',
    tagline: 'Modern, cross-platform clipboard utility for the web',
    description: 'Lightweight, zero-dependency browser clipboard utility supporting modern Async Clipboard API with automatic fallback mechanisms and TypeScript declarations.',
    category: 'Utility',
    status: 'new',
    badge: 'Zero-Dep',
    featured: false,
    repository: 'https://github.com/techlab/copify',
    npm: 'copify',
    pageLink: '/copify/',
    docsLink: '/copify/v0/',
    versions: ['v0'],
    frameworks: ['TypeScript', 'JavaScript'],
    features: [
      'Zero dependencies and sub-2KB gzipped footprint',
      'Async Clipboard API support with execCommand fallback',
      'Comprehensive error handling and promise-based API',
      'TypeScript type definitions included'
    ],
    showOnHome: true
  },
  {
    id: 'react-smarttab',
    name: 'React Smart Tab',
    title: 'React Smart Tab',
    tagline: 'Awesome tab component for ReactJS applications',
    description: 'Modern React tab component with custom CSS themes, vertical/horizontal orientations, and easy JSX declarative syntax.',
    category: 'Component',
    status: 'stable',
    featured: false,
    repository: 'https://github.com/techlab/react-smarttab',
    pageLink: '/react-smarttab/',
    docsLink: '/react-smarttab/v2/',
    versions: ['v2', 'v1'],
    frameworks: ['React', 'JavaScript'],
    features: [
      'Declarative React component structure',
      'Multiple themes and dark mode styles',
      'Horizontal and vertical layout orientation'
    ],
    screenshot: '/media/react-smart-tab/v2/react-smarttab-v2-brick.png',
    showOnHome: false
  },
  {
    id: 'create-jquery-plugin',
    name: 'create-jquery-plugin',
    title: 'create-jquery-plugin',
    tagline: 'CLI for scaffolding modern, production-grade jQuery plugins',
    description: 'Command-line tool for bootstrapping modern jQuery plugin development environments with Rollup, Jasmine, Karma, and SCSS templates.',
    category: 'CLI',
    status: 'stable',
    badge: 'CLI Tool',
    featured: false,
    repository: 'https://github.com/techlab/create-jquery-plugin',
    npm: 'create-jquery-plugin',
    pageLink: '/create-jquery-plugin/',
    docsLink: '/create-jquery-plugin/v1/',
    versions: ['v1'],
    frameworks: ['Node.js', 'CLI', 'jQuery'],
    features: [
      'Instant modern plugin scaffolding with a single command',
      'Preconfigured build steps (Rollup, Babel, UMD)',
      'Automated unit testing setup with Jasmine and Karma'
    ],
    showOnHome: false
  }
];

export function getProduct(id: string): ProductDefinition | undefined {
  return products.find(p => p.id === id || p.pageLink.includes(id));
}

export function getFeaturedProduct(): ProductDefinition {
  return products.find(p => p.featured) || products[0];
}
