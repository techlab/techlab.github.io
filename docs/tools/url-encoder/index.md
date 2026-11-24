---
title: URL Encoder & Decoder — TechLaboratory Tools
description: Free online URL encoder and decoder. Convert query strings, percent-encoded URI components, and parse deep link parameters locally.
head:
  - - meta
    - name: keywords
      content: url encoder, url decoder, percent encoding, encodeURIComponent, decodeURIComponent
---

<div class="tl-page-header">
  <div class="tl-breadcrumb-trail">
    <a href="/tools/">Developer Tools</a> &gt; <span>URL Encoder / Decoder</span>
  </div>
  <div class="tl-badge tl-badge-cyan" style="margin-top: 0.75rem;">URI Processing • Client-Side</div>
  <h1 class="tl-page-title">URL Encoder / Decoder</h1>
  <p class="tl-page-lead">
    Safely encode query string parameters, form payloads, and full URLs using RFC 3986 percent-encoding standards. Decode raw HTTP requests with zero server transit.
  </p>
</div>

<UrlEncoderTool />

<div class="tl-tool-content-section" style="margin-top: 4rem;">

## How It Works

URL encoding replaces unsafe ASCII characters with a `%` followed by two hexadecimal digits. Spaces can either be encoded as `%20` (RFC 3986 standard) or `+` (application/x-www-form-urlencoded).

### Component Encoding vs Full URI Encoding
- **encodeURIComponent()**: Encodes almost all non-alphanumeric characters including `:`, `/`, `?`, `&`, and `#`. This is suitable for individual query string values.
- **encodeURI()**: Preserves protocol and path delimiters (`https://`, `/`, `?`) while encoding invalid query characters. Suitable for complete URLs.

```bash
# Example
Input:  https://techlab.github.io/search?q=smart wizard&filter=v8
Encoded: https://techlab.github.io/search?q=smart%20wizard&filter=v8
```

## Related Developer Tools

- [**Base64 Encoder / Decoder**](/tools/base64/) — Encode authorization headers and binary payloads.
- [**JSON Formatter & Validator**](/tools/json-formatter/) — Format decoded JSON bodies from REST API calls.
- [**UUID Generator**](/tools/uuid-generator/) — Generate unique correlation IDs for API tracing.

</div>
