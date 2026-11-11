---
layout: product
title: Smart Wizard Pricing & Commercial Licenses
description: Licensing options for Smart Wizard. 100% Free MIT Open Source, plus Commercial Developer and Team options.
---

<script setup>
import PricingCard from '../../.vitepress/theme/components/pricing/PricingCard.vue'
import PricingTable from '../../.vitepress/theme/components/pricing/PricingTable.vue'
import { getProduct } from '../../.vitepress/theme/data/products'

const product = getProduct('smart-wizard')
</script>

<ProductPricingPreview />


<div class="tl-md-container tl-md-container-mt vp-doc">

# Smart Wizard - Pricing & Licensing

Smart Wizard is dual-licensed: 100% Free and Open Source (GPLv3) and Commercial licenses for commercial projects.

---


**[GNU General Public License v3.0 (GPLv3)](https://github.com/techlab/smart-wizard/blob/main/LICENSE)** - free and open-source under the GNU General Public License v3.0

**[Commercial License](https://techlaboratory.net/smart-wizard#license)** — Required for **proprietary (closed-source) application, commercial SaaS, or client project** without releasing your application's source code under the GPLv3.

Commercial licenses help support continued development, maintenance, and new features.

<a class="btn-main" href="https://tech-lab.lemonsqueezy.com/checkout/buy/7039e9a4-e3b0-4f06-bc4e-cb9892798cc8">Purchase Single Commercial License</a>

::: info 🎉 Special Launch Offer 🎉
Use coupon code `EARLY20` during checkout to receive **20% discount** on your license purchase.
:::


<div class="tl-pricing-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin: 3rem 0;">
  <PricingCard
    name="Community"
    price="Free"
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
