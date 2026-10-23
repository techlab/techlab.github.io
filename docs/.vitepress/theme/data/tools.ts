export interface ToolDefinition {
  id: string
  name: string
  tagline: string
  description: string
  category: 'Formatting' | 'Encoding' | 'Generators' | 'Testing'
  link: string
  badge?: string
  icon: string
}

export const developerTools: ToolDefinition[] = [
  {
    id: 'json-formatter',
    name: 'JSON Formatter & Validator',
    tagline: 'Prettify, validate, and minify JSON with error detection',
    description: 'Format unreadable JSON into clean, indented structure. Detect syntax errors with exact line numbers, minify for production, and copy with a single click. 100% in-browser.',
    category: 'Formatting',
    link: '/tools/json-formatter/',
    badge: 'Popular',
    icon: '{ }'
  },
  {
    id: 'base64',
    name: 'Base64 Encoder / Decoder',
    tagline: 'Encode and decode UTF-8 strings to Base64 instantly',
    description: 'Fast, client-side Base64 encoding and decoding with full UTF-8 Unicode support and URL-safe Base64 options. No server uploads.',
    category: 'Encoding',
    link: '/tools/base64/',
    badge: 'Utility',
    icon: '64'
  },
  {
    id: 'url-encoder',
    name: 'URL Encoder / Decoder',
    tagline: 'Safely encode URI components or parse query strings',
    description: 'Convert query parameters and URLs between encoded and human-readable forms. Decode percent-encoded components without data leakage.',
    category: 'Encoding',
    link: '/tools/url-encoder/',
    icon: '%20'
  },
  {
    id: 'uuid-generator',
    name: 'UUID v4 & v7 Generator',
    tagline: 'Generate cryptographically secure unique identifiers',
    description: 'Bulk generate RFC-compliant UUID v4 random identifiers with options for hyphens, uppercase formatting, and instant batch clipboard export.',
    category: 'Generators',
    link: '/tools/uuid-generator/',
    badge: 'Fast',
    icon: 'ID'
  },
  {
    id: 'regex-tester',
    name: 'Regex Tester & Matcher',
    tagline: 'Test JavaScript Regular Expressions with live match highlighting',
    description: 'Interactive regex testing sandbox with global, multiline, and case-insensitive flags. Highlights captures and matches in real-time.',
    category: 'Testing',
    link: '/tools/regex-tester/',
    badge: 'Interactive',
    icon: '.*'
  }
];

export function getTool(id: string): ToolDefinition | undefined {
  return developerTools.find(t => t.id === id);
}
