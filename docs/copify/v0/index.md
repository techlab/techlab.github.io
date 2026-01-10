---
title: Copify JS
description: A modern, cross-platform clipboard utility library for web
head:
  - - meta
    - name: description
      content: A modern, cross-platform clipboard utility library for web
  - - meta
    - name: keywords
      content: clipboard, utility, library, web, copify
---

# Copify JS

A modern, cross-platform clipboard utility library for web
<hr>


Copify JS is a modern clipboard utility library that provides a simple and reliable way to interact with the system clipboard in web applications. It uses modern browser APIs with fallbacks for broader compatibility.

## Features

- ✓ Support on all modern browsers
- ✓ TypeScript support with comprehensive type definitions
- ✓ Fallback mechanisms for different levels of browser support
- ✓ Comprehensive error handling with detailed results
- ✓ Standalone with zero dependencies
- ✓ Lightweight and fast

## Installation

```bash
npm install copify
```

## Basic Usage

### Copy to Clipboard

```typescript
import Copify from 'copify';

async function copyText() {
  try {
    const result = await Copify.copy(Copify.item.fromText('Hello, world!'));
    if (result.success) {
      console.log('Text copied successfully!');
    } else {
      console.error('Failed to copy:', result.error);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Read from Clipboard

```typescript
async function readFromClipboard() {
  try {
    const result = await Copify.read();
    if (result) {
      console.log('Clipboard content:', await result.getText());
    } else {
      console.error('Failed to read clipboard');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## Browser Compatibility

Copify uses modern browser APIs with fallbacks for broader compatibility:

- **Modern browsers**: Uses the Clipboard API (`navigator.clipboard`)
- **Older browsers**: Falls back to `document.execCommand`

## Documentation

For detailed documentation, visit our [GitHub repository](https://github.com/techlab/copify).

## License

Copify JS is dual-licensed:

- **Open Source (MIT)** — for personal, educational, and open-source use
- **Commercial License** — required for commercial projects without attribution

## Links

- [NPM Package](https://www.npmjs.com/package/copify)
- [GitHub Repository](https://github.com/techlab/copify)
- [Report Issues](https://github.com/techlab/copify/issues)

## Support

If you find this project useful, please consider:
- ⭐ Starring the project on GitHub
- 📦 Following on [NPM](https://www.npmjs.com/~dipuraj)
