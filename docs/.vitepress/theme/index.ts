import type { App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './styles.css'

// Global Components
import Badge from './components/global/Badge.vue'
import Breadcrumbs from './components/global/Breadcrumbs.vue'
import AdSlot from './components/global/AdSlot.vue'

// Home Components
import HomeView from './components/home/HomeView.vue'
import HomeHero from './components/home/HomeHero.vue'
import FlagshipShowcase from './components/home/FlagshipShowcase.vue'
import ProductGrid from './components/home/ProductGrid.vue'
import DemosHighlight from './components/home/DemosHighlight.vue'
import ToolsHighlight from './components/home/ToolsHighlight.vue'
import CTASection from './components/home/CTASection.vue'

// Product Components
import ProductCard from './components/product/ProductCard.vue'
import ProductNav from './components/product/ProductNav.vue'
import ProductHero from './components/product/ProductHero.vue'
import ProductFeatures from './components/product/ProductFeatures.vue'
import ProductMetrics from './components/product/ProductMetrics.vue'
import ProductPricingPreview from './components/product/ProductPricingPreview.vue'
import ProductLayout from './components/product/ProductLayout.vue'

// Pricing Components
import PricingCard from './components/pricing/PricingCard.vue'
import PricingTable from './components/pricing/PricingTable.vue'

// Demo Components
import DemoEmbed from './components/demo/DemoEmbed.vue'

// Article Components
import ArticleCard from './components/articles/ArticleCard.vue'
import FeaturedArticle from './components/articles/FeaturedArticle.vue'
import ArticleList from './components/articles/ArticleList.vue'

// Tools Components
import ToolCard from './components/tools/ToolCard.vue'
import ToolList from './components/tools/ToolList.vue'
import JsonFormatter from './components/tools/JsonFormatter.vue'
import Base64Tool from './components/tools/Base64Tool.vue'
import UrlEncoderTool from './components/tools/UrlEncoderTool.vue'
import UuidGenerator from './components/tools/UuidGenerator.vue'
import RegexTester from './components/tools/RegexTester.vue'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }: { app: App }) {
    // Global Elements
    app.component('Badge', Badge)
    app.component('Breadcrumbs', Breadcrumbs)
    app.component('AdSlot', AdSlot)

    // Home
    app.component('HomeView', HomeView)
    app.component('HomeHero', HomeHero)
    app.component('FlagshipShowcase', FlagshipShowcase)
    app.component('ProductCard', ProductCard)
    app.component('ProductGrid', ProductGrid)
    app.component('DemosHighlight', DemosHighlight)
    app.component('ToolsHighlight', ToolsHighlight)
    app.component('CTASection', CTASection)

    // Product
    app.component('ProductNav', ProductNav)
    app.component('ProductHero', ProductHero)
    app.component('ProductFeatures', ProductFeatures)
    app.component('ProductMetrics', ProductMetrics)
    app.component('ProductPricingPreview', ProductPricingPreview)
    app.component('ProductLayout', ProductLayout)

    // Pricing
    app.component('PricingCard', PricingCard)
    app.component('PricingTable', PricingTable)

    // Demos
    app.component('DemoEmbed', DemoEmbed)

    // Articles
    app.component('ArticleCard', ArticleCard)
    app.component('FeaturedArticle', FeaturedArticle)
    app.component('ArticleList', ArticleList)

    // Tools
    app.component('ToolCard', ToolCard)
    app.component('ToolList', ToolList)
    app.component('JsonFormatter', JsonFormatter)
    app.component('Base64Tool', Base64Tool)
    app.component('UrlEncoderTool', UrlEncoderTool)
    app.component('UuidGenerator', UuidGenerator)
    app.component('RegexTester', RegexTester)
  }
}
