export interface ProductMetric {
  label: string
  value: string
  description?: string
}

export interface ProductSubMenuItem {
  type: 'home' | 'docs' | 'demo' | 'pricing' | 'changelog' | string
  title: string
  link: string
}

export interface FeatureItem {
  icon: string
  title: string
  description: string
}

export interface ProductVersionData {
  subMenu: ProductSubMenuItem[]
  features?: FeatureItem[]
  screenshot?: string
}

export interface ProductDefinition {
  id: string
  name: string
  // Metadata
  title: string
  tagline: string
  description: string
  tags: string[]
  category: 'Component' | 'Plugin' | 'Utility' | 'CLI'
  featured?: boolean
  logo?: string
  repository?: string
  npm?: string
  pricingLink?: string
  changelogLink?: string
  versions: string[]
  metrics?: ProductMetric[]
  showOnHome?: boolean
  versionData: Record<string, ProductVersionData>
}

export const products: ProductDefinition[] = [
  {
    id: 'smart-wizard',
    name: 'Smart Wizard',
    title: 'Smart Wizard',
    tagline: 'Modern, framework-agnostic multi-step wizard component with React & Vue support',
    description: `A next-generation, extensible multi-step wizard component built for modern web applications.
The evolution of the popular jQuery SmartWizard, rebuilt from the ground up with TypeScript with zero runtime dependencies, Smart Wizard provides a lightweight, accessible, and customizable solution for building complex workflows, registration forms, checkout flows, surveys, and onboarding experiences. 
Featuring official React and Vue 3 adapters, modular themes, and a fluent API, it delivers flexibility and simplicity for modern web development.`,
    category: 'Component',
    tags: ['TypeScript', 'JavaScript', 'React', 'Vue'],
    featured: true,
    repository: 'https://github.com/techlab/smart-wizard',
    npm: '@smart-wizard/core',
    pricingLink: '/smart-wizard/pricing',
    changelogLink: '/smart-wizard/changelog',
    versions: ['v1'],
    metrics: [
      { label: 'Runtime Dependencies', value: '0', description: 'Pure TypeScript core' },
      { label: 'Framework Adapters', value: '3+', description: 'Vanilla, React & Vue 3' },
      { label: 'Themes Included', value: '4', description: 'Default, Arrows, Pills, Glow' },
      { label: 'WAI-ARIA Compliance', value: '100%', description: 'Fully accessible' }
    ],
    showOnHome: true,
    versionData: {
      'v1': {
        subMenu: [
          { type: 'home', title: 'Overview', link: '/smart-wizard/v1/' },
          { type: 'demo', title: 'Demos', link: '/smart-wizard/v1/demos' },
          { type: 'docs', title: 'Documentation', link: '/smart-wizard/v1/docs' },
          { type: 'pricing', title: 'Pricing', link: '/smart-wizard/v1/pricing' },
        ],
        features: [
          { icon: '⚡', title: 'Zero Dependencies', description: 'Zero runtime dependencies, written in TypeScript with full type declarations' },
          { icon: '', title: 'Framework Agnostic', description: 'Framework-agnostic core architecture with official React and Vue 3 adapters' },
          { icon: '♿', title: 'Fully Accessible', description: 'Modern, accessible UI strictly adhering to W3C WAI-ARIA authoring practices' },
          { icon: '🎭', title: 'Modular Themes', description: 'Multiple modular built-in themes (default, arrows, pills, glow)' },
          { icon: '🎨', title: 'Color Customization', description: 'Extensive color presets and automatic, light, and dark color-scheme support' },
          { icon: '📐', title: 'Layout Flexibility', description: 'Horizontal and vertical layout modes with responsive mobile auto-folding' },
          { icon: '🌀', title: 'Transitions', description: 'Built-in transitions (fade, slideHorizontal, slideVertical, slideSwing) and Animate.css support' },
          { icon: '🏷️', title: 'Step States', description: 'Comprehensive step states: completed, active, disabled, hidden, error, warning' },
          { icon: '🔌', title: 'Lifecycle Plugins', description: 'Extensible lifecycle plugin system (touch swipe, URL hash & browser history)' },
          { icon: '⏳', title: 'Async Loading', description: 'Dynamic asynchronous content loading via contentLoader callback' },
          { icon: '🛠️', title: 'Integrated Features', description: 'Integrated progress bar, loader overlay, and auto height adjustment' },
          { icon: '🛡️', title: 'TypeScript', description: 'Built from the ground up with strict typings and full TypeScript declarations' },
          { icon: '🔄', title: 'Official Adapters', description: 'First-class support for **React** (`useSmartWizard`, `SmartWizardProvider`) and **Vue 3** (`useSmartWizard`)' },
          { icon: '🌀', title: 'Fluent Step API', description: 'Clean, chainable API for single or bulk step state manipulation' },

        ],
        screenshot: '/media/jquery-smart-wizard/v7/screens-banner.png',
      }
    }
  },
  {
    id: 'jquery-smartwizard',
    name: 'jQuery Smart Wizard',
    title: 'jQuery Smart Wizard',
    tagline: 'The premier step wizard plugin for jQuery',
    description: 'The battle-tested, highly customizable multi-step navigation plugin. Serving web developers for over a decade with millions of downloads and robust enterprise form validation.',
    category: 'Plugin',
    featured: false,
    repository: 'https://github.com/techlab/jquery-smartwizard',
    npm: 'smartwizard',
    versions: ['v7', 'v6', 'v5', 'v4', 'v2'],
    metrics: [
      { label: 'CDN Requests', value: '10M+', description: 'Monthly requests across jsDelivr & cdnjs' },
      { label: 'GitHub Stars', value: '3.2k+', description: 'Trusted worldwide' },
      { label: 'Years Maintained', value: '12+', description: 'Actively updated since 2012' }
    ],
    tags: ['jQuery', 'JavaScript', 'Bootstrap'],
    showOnHome: true,
    versionData: {
      'v7': {
        subMenu: [
          { type: 'home', title: 'Overview', link: '/jquery-smartwizard/v7' },
          { type: 'docs', title: 'Documentation', link: '/jquery-smartwizard/v7/docs' },
          { type: 'demo', title: 'Demo', link: '/jquery-smartwizard/v7/demo' },
        ],
        features: [
          { icon: '⚡', title: 'TypeScript Powered', description: 'Fully rewritten in TypeScript (v7) with built-in type declarations' },
          { icon: '📱', title: 'Responsive Design', description: 'Clean and minimal HTML structure with responsive, mobile-ready layout' },
          { icon: '🎭', title: 'Multiple Themes', description: 'Multiple themes (basic, arrows, glow, pills) easily customizable via CSS variables' },
          { icon: '✨', title: 'Rich Transitions', description: 'Rich transition animations with full support for external CSS animation libraries' },
          { icon: '🛡️', title: 'Form Validation', description: 'Form validation integration via leave.sw event hooks' },
          { icon: '🌐', title: 'RTL Support', description: 'RTL (right-to-left) language support and keyboard navigation' },
          { icon: '🔄', title: 'Dynamic Ajax Loading', description: 'Dynamic Ajax content loading and URL hash history integration' },
          { icon: '🔌', title: 'Broad Compatibility', description: 'Compatible with jQuery >= 1.11.1, jQuery 3.x, jQuery 4.x, and jQuery Slim' },
        ],
        screenshot: '/media/jquery-smart-wizard/v7/all-screens.png'
      },
      'v6': {
        subMenu: [
          { type: 'home', title: 'Overview', link: '/jquery-smartwizard/v6' },
          { type: 'docs', title: 'Documentation', link: '/jquery-smartwizard/v6/docs' },
          { type: 'demo', title: 'Demo', link: '/jquery-smartwizard/v6/demo' },
        ],
        features: [
          { icon: '⚡', title: 'TypeScript Powered', description: 'Fully rewritten in TypeScript (v7) with built-in type declarations' },
          { icon: '📱', title: 'Responsive Design', description: 'Clean and minimal HTML structure with responsive, mobile-ready layout' },
          { icon: '🎭', title: 'Multiple Themes', description: 'Multiple themes (basic, arrows, glow, pills) easily customizable via CSS variables' },
          { icon: '✨', title: 'Rich Transitions', description: 'Rich transition animations with full support for external CSS animation libraries' },
          { icon: '🛡️', title: 'Form Validation', description: 'Form validation integration via leave.sw event hooks' },
          { icon: '🌐', title: 'RTL Support', description: 'RTL (right-to-left) language support and keyboard navigation' },
          { icon: '🔄', title: 'Dynamic Ajax Loading', description: 'Dynamic Ajax content loading and URL hash history integration' },
          { icon: '🔌', title: 'Broad Compatibility', description: 'Compatible with jQuery >= 1.11.1, jQuery 3.x, jQuery 4.x, and jQuery Slim' },
        ],
        screenshot: '/media/jquery-smart-wizard/v7/all-screens.png'
      },
      'v5': {
        subMenu: [
          { type: 'home', title: 'Overview', link: '/jquery-smartwizard/v5' },
          { type: 'docs', title: 'Documentation', link: '/jquery-smartwizard/v5/docs' },
        ],
        features: [
          { icon: '⚡', title: 'TypeScript Powered', description: 'Fully rewritten in TypeScript (v7) with built-in type declarations' },
          { icon: '📱', title: 'Responsive Design', description: 'Clean and minimal HTML structure with responsive, mobile-ready layout' },
          { icon: '🎭', title: 'Multiple Themes', description: 'Multiple themes (basic, arrows, glow, pills) easily customizable via CSS variables' },
          { icon: '✨', title: 'Rich Transitions', description: 'Rich transition animations with full support for external CSS animation libraries' },
          { icon: '🛡️', title: 'Form Validation', description: 'Form validation integration via leave.sw event hooks' },
          { icon: '🌐', title: 'RTL Support', description: 'RTL (right-to-left) language support and keyboard navigation' },
          { icon: '🔄', title: 'Dynamic Ajax Loading', description: 'Dynamic Ajax content loading and URL hash history integration' },
          { icon: '🔌', title: 'Broad Compatibility', description: 'Compatible with jQuery >= 1.11.1, jQuery 3.x, jQuery 4.x, and jQuery Slim' },
        ],
        screenshot: '/media/jquery-smart-wizard/v7/all-screens.png'
      },
      'v4': {
        subMenu: [
          { type: 'home', title: 'Overview', link: '/jquery-smartwizard/v4' },
          { type: 'docs', title: 'Documentation', link: '/jquery-smartwizard/v4/docs' },
        ],
        features: [
          { icon: '⚡', title: 'TypeScript Powered', description: 'Fully rewritten in TypeScript (v7) with built-in type declarations' },
          { icon: '📱', title: 'Responsive Design', description: 'Clean and minimal HTML structure with responsive, mobile-ready layout' },
          { icon: '🎭', title: 'Multiple Themes', description: 'Multiple themes (basic, arrows, glow, pills) easily customizable via CSS variables' },
          { icon: '✨', title: 'Rich Transitions', description: 'Rich transition animations with full support for external CSS animation libraries' },
          { icon: '🛡️', title: 'Form Validation', description: 'Form validation integration via leave.sw event hooks' },
          { icon: '🌐', title: 'RTL Support', description: 'RTL (right-to-left) language support and keyboard navigation' },
          { icon: '🔄', title: 'Dynamic Ajax Loading', description: 'Dynamic Ajax content loading and URL hash history integration' },
          { icon: '🔌', title: 'Broad Compatibility', description: 'Compatible with jQuery >= 1.11.1, jQuery 3.x, jQuery 4.x, and jQuery Slim' },
        ],
        screenshot: '/media/jquery-smart-wizard/v7/all-screens.png'
      },
      'v2': {
        subMenu: [
          { type: 'home', title: 'Overview', link: '/jquery-smartwizard/v2' },
          { type: 'docs', title: 'Documentation', link: '/jquery-smartwizard/v2/docs' },
        ],
        features: [
          { icon: '⚡', title: 'TypeScript Powered', description: 'Fully rewritten in TypeScript (v7) with built-in type declarations' },
          { icon: '📱', title: 'Responsive Design', description: 'Clean and minimal HTML structure with responsive, mobile-ready layout' },
          { icon: '🎭', title: 'Multiple Themes', description: 'Multiple themes (basic, arrows, glow, pills) easily customizable via CSS variables' },
          { icon: '✨', title: 'Rich Transitions', description: 'Rich transition animations with full support for external CSS animation libraries' },
          { icon: '🛡️', title: 'Form Validation', description: 'Form validation integration via leave.sw event hooks' },
          { icon: '🌐', title: 'RTL Support', description: 'RTL (right-to-left) language support and keyboard navigation' },
          { icon: '🔄', title: 'Dynamic Ajax Loading', description: 'Dynamic Ajax content loading and URL hash history integration' },
          { icon: '🔌', title: 'Broad Compatibility', description: 'Compatible with jQuery >= 1.11.1, jQuery 3.x, jQuery 4.x, and jQuery Slim' },
        ],
        screenshot: '/media/jquery-smart-wizard/v7/all-screens.png'
      }
    }
  },
  {
    id: 'jquery-smartcart',
    name: 'jQuery Smart Cart',
    title: 'jQuery Smart Cart',
    tagline: 'Interactive shopping cart plugin with payment gateway support',
    description: 'A streamlined, feature-rich interactive shopping cart plugin with built-in PayPal integration, Ajax submissions, currency customization, and Bootstrap styling.',
    category: 'Plugin',
    featured: false,
    repository: 'https://github.com/techlab/jquery-smartcart',
    npm: 'smartcart',
    versions: ['v3', 'v2'],
    metrics: [
      { label: 'Setup Time', value: '< 5 min', description: 'Drop-in HTML & JS integration' },
      { label: 'Payment Gateways', value: 'PayPal & Custom', description: 'Form & Ajax submit ready' }
    ],
    tags: ['jQuery', 'Bootstrap'],
    showOnHome: true,
    versionData: {
      'v3': {
        subMenu: [
          { type: 'home', title: 'Overview', link: '/jquery-smartcart/v3' },
          { type: 'docs', title: 'Documentation', link: '/jquery-smartcart/v3/docs' },
          { type: 'demo', title: 'Demo', link: '/jquery-smartcart/v3/demo' },
        ],
        features: [
          { icon: '💳', title: 'Payment Gateways', description: 'In-built PayPal, Ajax, and form submit payment methods' },
          { icon: '📱', title: 'Responsive Checkout', description: 'Clean, modern, and compact responsive checkout interface' },
          { icon: '⚙️', title: 'Public Methods & Events', description: 'Public methods for programmatic cart updates and event listeners' },
          { icon: '🧮', title: 'Automatic Calculations', description: 'Dynamic subtotal, tax, and shipping calculation' },
          { icon: '🎨', title: 'Bootstrap Compatibility', description: 'Bootstrap 3, 4, and 5 compatibility out of the box' },
        ],
        screenshot: '/media/jquery-smart-cart/v3/SmartCart3-Normal.png'
      },
      'v2': {
        subMenu: [
          { type: 'home', title: 'Overview', link: '/jquery-smartcart/v2' },
          { type: 'docs', title: 'Documentation', link: '/jquery-smartcart/v2/docs' },
        ],
        features: [
          { icon: '💳', title: 'Payment Gateways', description: 'In-built PayPal, Ajax, and form submit payment methods' },
          { icon: '📱', title: 'Responsive Checkout', description: 'Clean, modern, and compact responsive checkout interface' },
          { icon: '⚙️', title: 'Public Methods & Events', description: 'Public methods for programmatic cart updates and event listeners' },
          { icon: '🧮', title: 'Automatic Calculations', description: 'Dynamic subtotal, tax, and shipping calculation' },
          { icon: '🎨', title: 'Bootstrap Compatibility', description: 'Bootstrap 3, 4, and 5 compatibility out of the box' },
        ],
        screenshot: '/media/jquery-smart-cart/v3/SmartCart3-Normal.png'
      }
    }
  },
  {
    id: 'jquery-smarttab',
    name: 'jQuery Smart Tab',
    title: 'jQuery Smart Tab',
    tagline: 'The flexible, animated jQuery tab control plugin',
    description: 'Versatile tab navigation control with responsive layouts, URL hash tracking, Ajax panel loading, auto-progress timers, and diverse visual themes.',
    category: 'Plugin',
    featured: false,
    repository: 'https://github.com/techlab/jquery-smarttab',
    npm: 'smarttab',
    versions: ['v4', 'v3', 'v2'],
    tags: ['jQuery', 'Bootstrap'],
    showOnHome: true,
    versionData: {
      'v4': {
        subMenu: [
          { type: 'home', title: 'Overview', link: '/jquery-smarttab/v4' },
          { type: 'docs', title: 'Documentation', link: '/jquery-smarttab/v4/docs' },
          { type: 'demo', title: 'Demo', link: '/jquery-smarttab/v4/demo' },
        ],
        features: [
          { icon: '📱', title: 'Responsive Layout', description: 'Responsive layout with automatic mobile adaptations' },
          { icon: '🎭', title: 'Visual Themes', description: 'Built-in visual themes (basic, brick, elite, pills)' },
          { icon: '🔗', title: 'URL Hash Navigation', description: 'URL hash navigation and deep-linking support' },
          { icon: '🔄', title: 'Ajax & Auto-Progress', description: 'Ajax content loading and auto-progress tab rotation' },
          { icon: '⌨️', title: 'Keyboard & Auto-Height', description: 'Keyboard navigation and auto content height adjustments' },
        ],
        screenshot: '/media/jquery-smart-tab/v4/st-v4-basic.gif'
      },
      'v3': {
        subMenu: [
          { type: 'home', title: 'Overview', link: '/jquery-smarttab/v3' },
          { type: 'docs', title: 'Documentation', link: '/jquery-smarttab/v3/docs' },
        ],
        features: [
          { icon: '📱', title: 'Responsive Layout', description: 'Responsive layout with automatic mobile adaptations' },
          { icon: '🎭', title: 'Visual Themes', description: 'Built-in visual themes (basic, brick, elite, pills)' },
          { icon: '🔗', title: 'URL Hash Navigation', description: 'URL hash navigation and deep-linking support' },
          { icon: '🔄', title: 'Ajax & Auto-Progress', description: 'Ajax content loading and auto-progress tab rotation' },
          { icon: '⌨️', title: 'Keyboard & Auto-Height', description: 'Keyboard navigation and auto content height adjustments' },
        ],
        screenshot: '/media/jquery-smart-tab/v4/st-v4-basic.gif'
      },
      'v2': {
        subMenu: [
          { type: 'home', title: 'Overview', link: '/jquery-smarttab/v2' },
          { type: 'docs', title: 'Documentation', link: '/jquery-smarttab/v2/docs' },
        ],
        features: [
          { icon: '📱', title: 'Responsive Layout', description: 'Responsive layout with automatic mobile adaptations' },
          { icon: '🎭', title: 'Visual Themes', description: 'Built-in visual themes (basic, brick, elite, pills)' },
          { icon: '🔗', title: 'URL Hash Navigation', description: 'URL hash navigation and deep-linking support' },
          { icon: '🔄', title: 'Ajax & Auto-Progress', description: 'Ajax content loading and auto-progress tab rotation' },
          { icon: '⌨️', title: 'Keyboard & Auto-Height', description: 'Keyboard navigation and auto content height adjustments' },
        ],
        screenshot: '/media/jquery-smart-tab/v4/st-v4-basic.gif'
      }
    }
  },
  {
    id: 'copify',
    name: 'Copify JS',
    title: 'Copify JS',
    tagline: 'Modern, cross-platform clipboard utility for the web',
    description: 'Lightweight, zero-dependency browser clipboard utility supporting modern Async Clipboard API with automatic fallback mechanisms and TypeScript declarations.',
    category: 'Utility',
    featured: false,
    repository: 'https://github.com/techlab/copify',
    npm: 'copify',
    versions: ['v0'],
    tags: ['TypeScript', 'JavaScript'],
    showOnHome: true,
    versionData: {
      'v0': {
        subMenu: [
          { type: 'home', title: 'Overview', link: '/copify/v0' },
          { type: 'docs', title: 'Documentation', link: '/copify/v0/docs' },
        ],
        features: [
          { icon: '⚡', title: 'Zero Dependencies', description: 'Zero dependencies and sub-2KB gzipped footprint' },
          { icon: '📋', title: 'Async Clipboard API', description: 'Async Clipboard API support with execCommand fallback' },
          { icon: '🛡️', title: 'Promise-Based API', description: 'Comprehensive error handling and promise-based API' },
          { icon: '📘', title: 'TypeScript Definitions', description: 'TypeScript type definitions included' },
        ]
      }
    }
  },
  {
    id: 'react-smarttab',
    name: 'React Smart Tab',
    title: 'React Smart Tab',
    tagline: 'Awesome tab component for ReactJS applications',
    description: 'Modern React tab component with custom CSS themes, vertical/horizontal orientations, and easy JSX declarative syntax.',
    category: 'Component',
    featured: false,
    repository: 'https://github.com/techlab/react-smarttab',
    versions: ['v2', 'v1'],
    tags: ['React', 'JavaScript'],
    showOnHome: false,
    versionData: {
      'v2': {
        subMenu: [
          { type: 'home', title: 'Overview', link: '/react-smarttab/v2' },
          { type: 'docs', title: 'Documentation', link: '/react-smarttab/v2/docs' },
        ],
        features: [
          { icon: '⚛️', title: 'Declarative React', description: 'Declarative React component structure' },
          { icon: '🎨', title: 'Themes & Dark Mode', description: 'Multiple themes and dark mode styles' },
          { icon: '📐', title: 'Flexible Orientation', description: 'Horizontal and vertical layout orientation' },
          { icon: '', title: 'Responsive design', description: 'Responsive design' },
          { icon: '', title: 'Standalone CSS', description: 'Standalone CSS' },
          { icon: '', title: 'Bootstrap compatible', description: 'Bootstrap compatible' },
        ],
        screenshot: '/media/react-smart-tab/v2/react-smarttab-v2-brick.png'
      }
    }
  },
  {
    id: 'create-jquery-plugin',
    name: 'create-jquery-plugin',
    title: 'create-jquery-plugin',
    tagline: 'CLI for scaffolding modern, production-grade jQuery plugins',
    description: 'Command-line tool for bootstrapping modern jQuery plugin development environments with Rollup, Jasmine, Karma, and SCSS templates.',
    category: 'CLI',
    featured: false,
    repository: 'https://github.com/techlab/create-jquery-plugin',
    npm: 'create-jquery-plugin',
    versions: ['v1'],
    tags: ['Node.js', 'CLI', 'jQuery'],
    showOnHome: true,
    versionData: {
      'v1': {
        subMenu: [
          { type: 'home', title: 'Overview', link: '/create-jquery-plugin/v1/' },
          { type: 'docs', title: 'Documentation', link: '/create-jquery-plugin/v1/docs' },
        ],
        features: [
          { icon: '🚀', title: 'Instant Scaffolding', description: 'Instant modern plugin scaffolding with a single command' },
          { icon: '📦', title: 'Preconfigured Bundler', description: 'Preconfigured build steps (Rollup, Babel, UMD)' },
          { icon: '🧪', title: 'Automated Testing', description: 'Automated unit testing setup with Jasmine and Karma' },
        ]
      }
    }
  }
];

export function getProduct(id: string): ProductDefinition | undefined {
  return products.find(p => {
    if (p.id === id) return true
    // Check if id matches any version's home link
    return Object.values(p.versionData).some(v =>
      v.subMenu.some(m => m.type === 'home' && m.link.replace(/^\/|\/$/g, '') === id.replace(/^\/|\/$/g, ''))
    )
  })
}

export function getProductDescription(id: string): string | undefined {
  const p = products.find(p => {
    if (p.id === id) return true
  })

  return p?.tagline
}

export function getProductPageLink(product: ProductDefinition): string {
  const latestVersion = product.versions[0]
  const vd = product.versionData[latestVersion]
  if (vd) {
    const homeItem = vd.subMenu.find(m => m.type === 'home')
    if (homeItem) return homeItem.link
  }
  return `/${product.id}/`
}

export function getProductVersionData(product: ProductDefinition, version?: string): ProductVersionData | undefined {
  const ver = version || product.versions[0]
  return product.versionData[ver]
}

export function getFeaturedProduct(): ProductDefinition {
  return products.find(p => p.featured) || products[0]
}

export interface ProductDetails {
  id: string
  name: string
  title: string
  tagline: string
  description: string
  category: 'Component' | 'Plugin' | 'Utility' | 'CLI'
  tags: string[]
  repository?: string
  npm?: string
  metrics?: ProductMetric[]
  features?: FeatureItem[]
  subMenu: Record<string, ProductSubMenuItem>
  versions: string[]
  currentVersion: string
  versionDetails?: ProductVersionData
  raw: ProductDefinition
}

export function getProductDetails(product: ProductDefinition, version?: string): ProductDetails {
  const resolvedVersion = (version && product.versionData[version]) ? version : product.versions[0];
  const versionDetails = product.versionData[resolvedVersion];
  return {
    id: product.id,
    name: product.name,
    title: product.title,
    tagline: product.tagline,
    description: product.description,
    category: product.category,
    tags: product.tags,
    repository: product.repository,
    npm: product.npm,
    metrics: product.metrics,
    features: versionDetails.features,
    // Sub menu
    subMenu: getSubMenu(versionDetails),
    // Version data
    versions: product.versions,
    currentVersion: resolvedVersion,
    versionDetails: versionDetails,
    raw: product,
  }
}

function getSubMenu(versionDetails?: ProductVersionData): Record<string, ProductSubMenuItem> {
  const subMenu: Record<string, ProductSubMenuItem> = {};
  if (!versionDetails?.subMenu) return subMenu;
  for (const menu of versionDetails.subMenu) {
    subMenu[menu.type] = menu;
  }
  return subMenu;
}
