---
layout: product
title: Documentation - Copify JS
description: A modern, cross-platform clipboard utility library for web
head:
  - - meta
    - name: description
      content: A modern, cross-platform clipboard utility library for web
  - - meta
    - name: keywords
      content: clipboard, utility, library, web, copify
---

<div class="tl-md-container tl-md-container-mt vp-doc">

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

</div>