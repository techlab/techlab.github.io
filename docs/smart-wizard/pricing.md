---
title: Smart Wizard Pricing & Commercial Licenses
description: Licensing options for Smart Wizard. 100% Free MIT Open Source, plus Commercial Developer and Team options.
ads: false
---

<script setup>
import ProductNav from '../.vitepress/theme/components/product/ProductNav.vue'
import PricingCard from '../.vitepress/theme/components/pricing/PricingCard.vue'
import PricingTable from '../.vitepress/theme/components/pricing/PricingTable.vue'
import { getProduct } from '../.vitepress/theme/data/products'

const product = getProduct('smart-wizard')
</script>

<ProductNav :product="product" />

<div class="tl-container" style="padding-top: 2rem;">

# Smart Wizard Pricing & Licensing

Choose the plan that fits your project. Smart Wizard is proudly **100% Free and Open Source (MIT)**. Commercial licenses are available for teams requiring indemnification, no-attribution terms, and direct SLA support.

---

<div class="tl-pricing-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin: 3rem 0;">
  <PricingCard
    name="Community"
    price="$0"
    period="forever"
    badge="Open Source"
    description="Full access to the core engine, official adapters, and standard themes."
    :features="[
      'MIT Open Source License',
      'TypeScript core (0 dependencies)',
      'React & Vue 3 official adapters',
      'Standard themes (Arrows, Pills, Glow)',
      'Community GitHub support'
    ]"
    ctaText="Get Started Free"
    ctaLink="/smart-wizard/v1/"
  />

  <PricingCard
    name="Commercial Developer"
    price="$29"
    period="one-time"
    badge="Most Popular"
    :highlighted="true"
    description="For individual developers building commercial closed-source applications."
    :features="[
      'Commercial perpetual license (1 dev)',
      'No source code attribution required',
      'Unlimited client & commercial apps',
      'Priority email bug resolution (48h)',
      'Access to upcoming premium extensions'
    ]"
    ctaText="Purchase Developer License"
    ctaLink="https://github.com/sponsors/techlab"
  />

  <PricingCard
    name="Commercial Team"
    price="$79"
    period="one-time"
    badge="For Teams"
    description="For development teams building mission-critical commercial platforms."
    :features="[
      'Commercial license for up to 10 developers',
      'No attribution required',
      'Unlimited commercial projects',
      'Priority ticket resolution (24h)',
      'Direct Slack/Discord access',
      '1 Architecture & theme review session'
    ]"
    ctaText="Purchase Team License"
    ctaLink="https://github.com/sponsors/techlab"
  />
</div>

---

## Detailed Plan Comparison

<PricingTable />

---

## Frequently Asked Questions

### Can I use the Community version in commercial projects?
Yes! The core Smart Wizard library is licensed under the permissive **MIT License**, meaning you are free to use it in both commercial and non-commercial products. The MIT license requires preserving the original copyright notice in your bundled source files.

### Why purchase a Commercial License?
The Commercial License removes the attribution requirement for closed-source client deliverables, provides dedicated email/Slack support with guaranteed response times, and directly funds continuous maintenance and extension development.

### Is the license recurring or one-time?
All commercial developer and team licenses are **perpetual one-time purchases** including 1 full year of priority updates and support.

### How do I receive support?
Community users can file issues and ask questions on [GitHub Discussions](https://github.com/techlab/smart-wizard/discussions). Commercial license holders receive direct email assistance from the core author.

</div>

<style>
@media (max-width: 960px) {
  .tl-pricing-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
