import { products, type ProductDefinition } from './products'

/**
 * Exact path redirects (normalized: lowercase, no trailing slash except root).
 * Derived from GA4 404 reports for legacy TechLaboratory URLs.
 */
export const EXACT_REDIRECTS: Record<string, string> = {
  '/smartwizard': '/jquery-smartwizard/',
  '/smartwizard/demo': '/jquery-smartwizard/v7/demo',
  '/smartwizard/demo/validation': '/jquery-smartwizard/v7/demo',
  '/smartwizard/demo/basic': '/jquery-smartwizard/v7/demo',
  '/smartwizard/documentation': '/jquery-smartwizard/v7/docs',
  '/smartcart': '/jquery-smartcart/',
  '/smartcart/demo': '/jquery-smartcart/v3/demo',
  '/smartcart/documentation': '/jquery-smartcart/v3/docs',
  '/smarttab': '/jquery-smarttab/',
  '/projects/demo/jquery-smart-tab/v4': '/jquery-smarttab/v4/demo',
  '/projects/demo/jquery-smart-tab/v4/ajax': '/jquery-smarttab/v4/demo',
  '/projects/demo/jquery-smart-tab/v4/multiple': '/jquery-smarttab/v4/demo',
  '/archive/jquery-smart-wizard/v4': '/jquery-smartwizard/v4/',
  '/react-smarttab': '/react-smart-tab/',
  '/articles': '/articles/',
  '/article': '/articles/',
  // Safeguards for clean URLs without trailing slash
  '/smart-wizard': '/smart-wizard/',
  '/jquery-smartwizard': '/jquery-smartwizard/',
  '/jquery-smartcart': '/jquery-smartcart/',
  '/jquery-smarttab': '/jquery-smarttab/',
  '/copify': '/copify/',
  '/create-jquery-plugin': '/create-jquery-plugin/',
}

/**
 * Query-parameter redirects for legacy PHP endpoints (e.g. /products.php?product=smartwizard).
 */
export const QUERY_PRODUCT_REDIRECTS: Record<string, string> = {
  smartwizard: '/jquery-smartwizard/',
  'jquery-smartwizard': '/jquery-smartwizard/',
  swiz: '/jquery-smartwizard/',
  smartcart: '/jquery-smartcart/',
  'jquery-smartcart': '/jquery-smartcart/',
  scat: '/jquery-smartcart/',
  smarttab: '/jquery-smarttab/',
  'jquery-smarttab': '/jquery-smarttab/',
  stab: '/jquery-smarttab/',
  'react-smart-tab': '/react-smart-tab/',
  'react-smarttab': '/react-smart-tab/',
  copify: '/copify/',
  'smart-wizard': '/smart-wizard/',
  'create-jquery-plugin': '/create-jquery-plugin/',
}

/**
 * Prefix fallback rules evaluated in order when no exact match is found.
 */
const PREFIX_REDIRECTS: Array<{ prefix: string; target: string }> = [
  { prefix: '/smartwizard/demo/', target: '/jquery-smartwizard/v7/demo' },
  { prefix: '/smartwizard/documentation/', target: '/jquery-smartwizard/v7/docs' },
  { prefix: '/smartwizard/', target: '/jquery-smartwizard/' },
  { prefix: '/smartcart/demo/', target: '/jquery-smartcart/v3/demo' },
  { prefix: '/smartcart/documentation/', target: '/jquery-smartcart/v3/docs' },
  { prefix: '/smartcart/', target: '/jquery-smartcart/' },
  { prefix: '/projects/demo/jquery-smart-tab/', target: '/jquery-smarttab/v4/demo' },
  { prefix: '/projects/demo/jquery-smart-wizard/', target: '/jquery-smartwizard/v7/demo' },
  { prefix: '/projects/demo/jquery-smart-cart/', target: '/jquery-smartcart/v3/demo' },
  { prefix: '/archive/jquery-smart-wizard/', target: '/jquery-smartwizard/' },
  { prefix: '/archive/jquery-smart-tab/', target: '/jquery-smarttab/' },
  { prefix: '/archive/jquery-smart-cart/', target: '/jquery-smartcart/' },
  { prefix: '/labs/smartwizard2/', target: '/jquery-smartwizard/v2/' },
  { prefix: '/labs/smartwizard/', target: '/jquery-smartwizard/' },
  { prefix: '/labs/', target: '/jquery-smartwizard/' },
  { prefix: '/article/', target: '/articles/' },
]

function normalizePath(pathname: string): string {
  const lower = pathname.toLowerCase().trim()
  if (lower.length > 1 && lower.endsWith('/')) {
    return lower.slice(0, -1)
  }
  return lower
}

/**
 * Resolves a legacy 404 URL (pathname + search) to a current VitePress route, or null if none matches.
 */
export function resolveLegacyRedirect(pathname: string, search = ''): string | null {
  const normalized = normalizePath(pathname)

  // 1. Legacy PHP product endpoint: /products.php?product=...
  if (normalized === '/products.php' && search) {
    const params = new URLSearchParams(search)
    const productParam = params.get('product')?.toLowerCase().trim()
    if (productParam && QUERY_PRODUCT_REDIRECTS[productParam]) {
      return QUERY_PRODUCT_REDIRECTS[productParam]
    }
  }

  // 2. Exact path match (also strip optional .html suffix)
  const withoutHtml = normalized.endsWith('.html')
    ? normalized.slice(0, -5)
    : normalized

  if (EXACT_REDIRECTS[normalized]) {
    return EXACT_REDIRECTS[normalized]
  }
  if (EXACT_REDIRECTS[withoutHtml]) {
    return EXACT_REDIRECTS[withoutHtml]
  }

  // 3. Prefix fallbacks
  for (const rule of PREFIX_REDIRECTS) {
    if (normalized.startsWith(rule.prefix)) {
      return rule.target
    }
  }

  return null
}

/**
 * Finds products whose id, name, or tags match tokens in the requested 404 URL.
 */
export function findSuggestedProducts(pathname: string, search = ''): ProductDefinition[] {
  const haystack = `${pathname} ${search}`.toLowerCase()
  const tokens = haystack
    .split(/[^a-z0-9]+/)
    .filter(t => t.length >= 3 && !['html', 'php', 'demo', 'docs', 'documentation', 'projects'].includes(t))

  if (tokens.length === 0) return []

  const scored = products
    .map(product => {
      const searchable = [
        product.id,
        product.name.toLowerCase(),
        ...product.tags.map(t => t.toLowerCase()),
      ].join(' ')

      let score = 0
      for (const token of tokens) {
        if (product.id.includes(token)) score += 3
        else if (searchable.includes(token)) score += 1
      }
      return { product, score }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored.slice(0, 2).map(item => item.product)
}

