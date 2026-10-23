import { createContentLoader } from 'vitepress'

export interface Article {
  title: string
  description: string
  url: string
  date: string
  formattedDate: string
  author: string
  tags: string[]
  cover?: string
  featured?: boolean
  readTime: string
}

export default createContentLoader('articles/posts/*.md', {
  includeSrc: true,
  transform(raw): Article[] {
    return raw
      .map(({ url, frontmatter, src }) => {
        const wordCount = src ? src.split(/\s+/).length : 600
        const readMinutes = Math.max(2, Math.ceil(wordCount / 200))
        const dateObj = frontmatter.date ? new Date(frontmatter.date) : new Date('2026-10-20')
        return {
          title: frontmatter.title || 'Untitled Article',
          description: frontmatter.description || '',
          url,
          date: dateObj.toISOString(),
          formattedDate: dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          author: frontmatter.author || 'Dipu Raj',
          tags: frontmatter.tags || ['Engineering'],
          cover: frontmatter.cover,
          featured: Boolean(frontmatter.featured),
          readTime: `${readMinutes} min read`
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
})
