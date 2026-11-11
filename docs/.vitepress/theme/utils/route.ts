import { computed, type ComputedRef } from 'vue'
import { useRoute } from 'vitepress'
import { products, getProductDetails, type ProductDefinition, type ProductDetails } from '../data/products'
import { developerTools, type ToolDefinition } from '../data/tools'

export type PageType = 'general' | 'product' | 'article' | 'tools'

/**
 * Common metadata present on every resolved route
 */
export interface BaseRouteResult {
    path: string
    segments: string[]
    pageType: PageType
}

/**
 * Product-specific route data
 */
export interface ProductPageData extends ProductDetails {
    section?: string
}

export interface ProductRouteResult extends BaseRouteResult {
    pageType: 'product'
    pageData: ProductPageData
}

/**
 * Article-specific route data
 */
export interface ArticlePageData {
    isIndex: boolean
    slug?: string
    postUrl?: string
}

export interface ArticleRouteResult extends BaseRouteResult {
    pageType: 'article'
    pageData: ArticlePageData
}

/**
 * Developer Tool-specific route data
 */
export interface ToolsPageData {
    isIndex: boolean
    toolId?: string
    tool?: ToolDefinition
}

export interface ToolsRouteResult extends BaseRouteResult {
    pageType: 'tools'
    pageData: ToolsPageData
}

/**
 * General page route data
 */
export interface GeneralPageData {
    isHome: boolean
    slug?: string
}

export interface GeneralRouteResult extends BaseRouteResult {
    pageType: 'general'
    pageData: GeneralPageData
}

/**
 * Discriminated union of all possible route results
 */
export type CurrentRouteResult =
    | ProductRouteResult
    | ArticleRouteResult
    | ToolsRouteResult
    | GeneralRouteResult

// ==========================================
// Performance: Pre-indexed lookups & Cache
// ==========================================

const productIndex = new Map<string, ProductDefinition>()
for (const product of products) {
    productIndex.set(product.id.toLowerCase(), product)

    // Map any explicit subMenu home links (e.g., 'smart-wizard/v1')
    for (const vData of Object.values(product.versionData)) {
        for (const menu of vData.subMenu) {
            if (menu.type === 'home' && menu.link) {
                const normalized = menu.link.replace(/^\/+|\/+$/g, '').toLowerCase()
                if (normalized) {
                    productIndex.set(normalized, product)
                }
            }
        }
    }
}

const toolIndex = new Map<string, ToolDefinition>()
for (const tool of developerTools) {
    toolIndex.set(tool.id.toLowerCase(), tool)
}

// In-memory route parsing cache: finite number of paths, O(1) lookups
const routeCache = new Map<string, CurrentRouteResult>()

/**
 * Normalizes a raw pathname by stripping queries, hashes, and trailing slashes
 */
function normalizePath(rawPath: string): string {
    if (!rawPath) return '/'
    let clean = rawPath.split('?')[0].split('#')[0].trim()
    clean = clean.replace(/\.html$/, '')
    clean = clean.replace(/\/index$/, '')
    const trimmed = clean.replace(/\/+$/, '')
    return trimmed || '/'
}

/**
 * Pure route resolver that parses any path string and returns typed route data.
 * Results are memoized for maximum performance.
 */
export function resolveRoute(rawPath: string): CurrentRouteResult {
    const normalizedPath = normalizePath(rawPath)

    const cached = routeCache.get(normalizedPath)
    if (cached) {
        return cached
    }

    const segments = normalizedPath === '/'
        ? []
        : normalizedPath.slice(1).split('/').filter(Boolean)

    let result: CurrentRouteResult

    if (segments.length === 0) {
        result = {
            path: normalizedPath,
            segments,
            pageType: 'general',
            pageData: {
                isHome: true,
                slug: ''
            }
        }
        routeCache.set(normalizedPath, result)
        return result
    }

    const firstSegment = segments[0].toLowerCase()

    // 1. Check Product Pages
    const product = productIndex.get(firstSegment)
    if (product) {
        const isVersion = Boolean(segments[1] && product.versions.includes(segments[1]))
        const version = isVersion ? segments[1] : undefined
        const section = isVersion ? segments[2] : segments[1]

        result = {
            path: normalizedPath,
            segments,
            pageType: 'product',
            pageData: {
                ...getProductDetails(product, version),
                section
            }
        }
        routeCache.set(normalizedPath, result)
        return result
    }

    // 2. Check Tools Pages (/tools or /tools/:toolId)
    if (firstSegment === 'tools') {
        const toolId = segments[1]?.toLowerCase()
        const isIndex = !toolId
        const tool = toolId ? toolIndex.get(toolId) : undefined

        result = {
            path: normalizedPath,
            segments,
            pageType: 'tools',
            pageData: {
                isIndex,
                toolId: tool?.id || toolId,
                tool
            }
        }
        routeCache.set(normalizedPath, result)
        return result
    }

    // 3. Check Articles Pages (/articles or /articles/posts/:slug)
    if (firstSegment === 'articles' || firstSegment === 'article') {
        const isIndex = segments.length <= 1
        const slug = isIndex ? undefined : segments[segments.length - 1]

        result = {
            path: normalizedPath,
            segments,
            pageType: 'article',
            pageData: {
                isIndex,
                slug,
                postUrl: isIndex ? undefined : normalizedPath
            }
        }
        routeCache.set(normalizedPath, result)
        return result
    }

    // 4. Default / General Pages (e.g. /about, /privacy, etc.)
    result = {
        path: normalizedPath,
        segments,
        pageType: 'general',
        pageData: {
            isHome: false,
            slug: segments[0]
        }
    }

    routeCache.set(normalizedPath, result)
    return result
}

/**
 * Returns structured and strongly typed information about the current route.
 * Can be called with an explicit path or inside Vue components using VitePress's useRoute().
 */
export function getCurrentRoute(customPath?: string): CurrentRouteResult {
    if (customPath !== undefined) {
        return resolveRoute(customPath)
    }

    let path = '/'
    try {
        const route = useRoute()
        if (route?.path) {
            path = route.path
        }
    } catch {
        if (typeof window !== 'undefined' && window.location?.pathname) {
            path = window.location.pathname
        }
    }

    return resolveRoute(path)
}

/**
 * Vue reactive composable for tracking current route data with automatic reactivity.
 */
export function useCurrentRoute(): ComputedRef<CurrentRouteResult> {
    const route = useRoute()
    return computed(() => resolveRoute(route.path))
}

/**
 * Clears memoized route cache if needed (e.g., during tests or dynamic reload)
 */
export function clearRouteCache(): void {
    routeCache.clear()
}

export function isActive(linkPath: string, currentPath?: string): boolean {
    let current = currentPath
    if (!current) {
        try {
            const route = useRoute()
            current = route?.path
        } catch {
            if (typeof window !== 'undefined' && window.location?.pathname) {
                current = window.location.pathname
            }
        }
    }
    if (!current || !linkPath) return false
    const cleanCurrent = current.split('?')[0].split('#')[0].replace(/\/+$/, '').toLowerCase()
    const cleanTarget = linkPath.split('?')[0].split('#')[0].replace(/\/+$/, '').toLowerCase()
    return cleanCurrent === cleanTarget
}
