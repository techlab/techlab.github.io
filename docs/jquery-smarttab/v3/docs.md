---
layout: product
title: jQuery SmartTab v3
description: The flexible jQuery tab control plugin
---

<div class="tl-md-container tl-md-container-mt vp-doc">

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

</div>