export interface DemoDefinition {
  id: string
  title: string
  description: string
  product: string
  productName: string
  framework: string
  tags: string[]
  link: string
  embedUrl?: string
  stackblitz?: string
  previewImage?: string
  featured?: boolean
}

export const demos: DemoDefinition[] = [
  {
    id: 'smart-wizard-horizontal-arrows',
    title: 'Smart Wizard — Arrows Theme',
    description: 'Modern horizontal stepper with clean arrow transitions, responsive steps, and step validation hooks.',
    product: 'smart-wizard',
    productName: 'Smart Wizard',
    framework: 'Vanilla / TS',
    tags: ['horizontal', 'arrows', 'stepper', 'forms'],
    link: '/smart-wizard/v1/demo',
    embedUrl: '/demo/smartwizard/demo.html',
    previewImage: '/media/jquery-smart-wizard/v7/arrows.png',
    featured: true
  },
  {
    id: 'smart-wizard-vertical-pills',
    title: 'Smart Wizard — Vertical Pills Layout',
    description: 'Vertical orientation designed for dashboard settings, multi-step profile configuration, and side navigation.',
    product: 'smart-wizard',
    productName: 'Smart Wizard',
    framework: 'Vanilla / TS',
    tags: ['vertical', 'pills', 'sidebar', 'settings'],
    link: '/smart-wizard/v1/demo#wizard-vertical',
    previewImage: '/media/jquery-smart-wizard/v7/glow.png',
    featured: true
  },
  {
    id: 'jquery-smartwizard-checkout',
    title: 'jQuery Smart Wizard — E-Commerce Checkout',
    description: 'Battle-tested checkout flow with credit card validation, shipping address verification, and order confirmation.',
    product: 'jquery-smartwizard',
    productName: 'jQuery Smart Wizard',
    framework: 'jQuery',
    tags: ['checkout', 'validation', 'ecommerce'],
    link: '/jquery-smartwizard/v7/demo',
    previewImage: '/media/jquery-smart-wizard/v7/checkout.png',
    featured: true
  },
  {
    id: 'jquery-smarttab-themes',
    title: 'jQuery Smart Tab — Theme Variations',
    description: 'Dynamic tab rotation, Ajax content fetching, and smooth CSS keyframe transition animations.',
    product: 'jquery-smarttab',
    productName: 'jQuery Smart Tab',
    framework: 'jQuery',
    tags: ['tabs', 'ajax', 'animations'],
    link: '/jquery-smarttab/v4/',
    previewImage: '/media/jquery-smart-tab/v4/st-v4-basic.gif',
    featured: false
  },
  {
    id: 'copify-clipboard-demo',
    title: 'Copify JS — Async Clipboard Operations',
    description: 'Interactive demo showing fast copy-to-clipboard actions with visual status feedback and browser fallbacks.',
    product: 'copify',
    productName: 'Copify JS',
    framework: 'TypeScript',
    tags: ['clipboard', 'utility', 'api'],
    link: '/copify/v0/',
    featured: false
  }
];

export function getDemosByProduct(productId: string): DemoDefinition[] {
  return demos.filter(d => d.product === productId);
}

export function getFeaturedDemos(): DemoDefinition[] {
  return demos.filter(d => d.featured);
}
