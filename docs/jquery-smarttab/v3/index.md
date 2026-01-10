---
title: jQuery SmartTab v3
description: The flexible jQuery tab control plugin
---

# jQuery SmartTab v3

::: danger Deprecated
This version is deprecated. Please upgrade to [v4](/jquery-smarttab/v4/).
:::

The flexible jQuery tab control plugin for easy implementation of tab interface.


## Installation

### NPM

```bash
npm install jquery-smarttab@3
```

### CDN

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/jquery-smarttab@3/dist/css/smart_tab_all.min.css" rel="stylesheet" type="text/css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/jquery-smarttab@3/dist/js/jquery.smartTab.min.js" type="text/javascript"></script>
```

## Features

- Easy to implement and minimal HTML required
- Supports all modern browsers
- Responsive CSS design
- Bootstrap compatible
- Cool themes included
- Built-in transition animations
- Accessible controls
- External controls support
- Easy ajax content integration
- Keyboard navigation
- Auto content height adjustment
- Built-in events
- URL navigation and tab selection

## Documentation

### Requirements

- [jQuery](http://jquery.com/)

### Include jQuery SmartTab CSS

```html
<link href="../dist/css/smart_tab_all.min.css" rel="stylesheet" type="text/css">
```

### The HTML Markup

```html
<div id="smarttab">
  <ul class="nav">
    <li><a class="nav-link" href="#tab-1">Tab 1</a></li>
    <li><a class="nav-link" href="#tab-2">Tab 2</a></li>
    <li><a class="nav-link" href="#tab-3">Tab 3</a></li>
    <li><a class="nav-link" href="#tab-4">Tab 4</a></li>
  </ul>

  <div class="tab-content">
    <div id="tab-1" class="tab-pane" role="tabpanel">Tab content</div>
    <div id="tab-2" class="tab-pane" role="tabpanel">Tab content</div>
    <div id="tab-3" class="tab-pane" role="tabpanel">Tab content</div>
    <div id="tab-4" class="tab-pane" role="tabpanel">Tab content</div>
  </div>
</div>
```

### Initialize the jQuery SmartTab

```javascript
$(function() {
  $('#smarttab').smartTab();
});
```

## Advanced Options

```javascript
$('#smarttab').smartTab({
  selected: 0,
  theme: 'default',
  orientation: 'horizontal',
  justified: true,
  autoAdjustHeight: true,
  backButtonSupport: true,
  enableUrlHash: true,
  transition: {
    animation: 'none',
    speed: '400'
  }
});
```

## Public Functions

### goToTab
```javascript
$('#smarttab').smartTab("goToTab", 2);
```

### next
```javascript
$('#smarttab').smartTab("next");
```

### prev
```javascript
$('#smarttab').smartTab("prev");
```

## Events

### showTab
```javascript
$("#smarttab").on("showTab", function(e, anchorObject, tabIndex) {
  console.log("Tab shown");
});
```

### leaveTab
```javascript
$("#smarttab").on("leaveTab", function(e, anchorObject, currentTabIndex, nextTabIndex) {
  return true;
});
```

## License

Released under the terms of the [MIT License](https://github.com/techlab/jquery-smarttab/blob/master/LICENSE).
