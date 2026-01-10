import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './styles.css'

export default {
  extends: DefaultTheme,
  // Override the Layout with a wrapper component
  Layout: Layout,
}