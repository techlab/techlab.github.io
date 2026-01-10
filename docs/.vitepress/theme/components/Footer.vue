<script setup>
import { useData, withBase } from 'vitepress'
const { site } = useData()
</script>

<template>
  <footer class="tl-footer">
    <div class="tl-container">
      <div class="footer-left">
        <div class="footer-logo">
          <img src="/images/logo.png" alt="TechLaboratory" class="logo-img" />
          <strong class="footer-title">{{ site.title }}</strong>
        </div>
      </div>

      <div class="footer-right">
        <div class="footer-section">
          <h4>Resources</h4>
          <a :href="withBase('/')">Home</a>
          <a :href="withBase('/about')">About</a>
          <a :href="withBase('/privacy')">Privacy Policy</a>
        </div>
        
        <div class="footer-section">
          <h4>Products</h4>
          <a :href="withBase('/react-smarttab/')">React Smart Tab</a>
          <a :href="withBase('/jquery-smartwizard/')">jQuery Smart Wizard</a>
          <a :href="withBase('/jquery-smartcart/')">jQuery Smart Cart</a>
          <a :href="withBase('/jquery-smarttab/')">jQuery Smart Tab</a>
          <a :href="withBase('/create-jquery-plugin/')">create-jquery-plugin</a>
        </div>
        
      </div>
    </div>

    <div class="copy">
      © {{ new Date().getFullYear() }} TechLaboratory. All rights reserved.
    </div>
  </footer>
</template>

<style scoped>
.tl-footer {
  margin-top: 4rem;
  padding: 3rem 0 1.5rem;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  width: 100%;
}

.tl-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-left {
  flex: 1;
  min-width: 250px;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.footer-title {
  font-weight: 700;
  color: #5ea8de;
  font-size: 2rem;
}

.logo-img {
  margin: 0;
  padding: 0;
}

.footer-left p {
  margin: 0.75rem 0 0;
  line-height: 1.6;
}

.footer-right {
  display: flex;
  gap: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: baseline;
}

.footer-section h4 {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: 100%;
  margin-bottom: 0.5rem;
}

.footer-section a {
  text-decoration: none;
  color: var(--vp-c-text-2);
  transition: color 0.2s;
  font-size: 0.95rem;
}

.footer-section a:hover {
  color: var(--vp-c-brand-1);
}

.copy {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
  text-align: center;
  font-size: 0.85rem;
  opacity: 0.7;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

@media (max-width: 768px) {
  .tl-container {
    flex-direction: column;
  }
  
  .footer-right {
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>


