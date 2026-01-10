---
title: jQuery SmartTab v2
description: Flexible jQuery Tab Control plugin
---

# jQuery SmartTab v2

::: danger Deprecated
This version is deprecated. Please upgrade to [v4](/jquery-smarttab/v4/).
:::

Flexible jQuery Tab Control plugin for tabbed interface.

## Downloads

[Download from GitHub](https://github.com/techlab/jquery-smarttab/archive/v2.zip)

## Features

- Easy to implement, minimal HTML required
- Clean and compact design
- Supports all modern browsers
- Bootstrap compatible
- Built-in transition effects
- Keyboard navigation
- URL navigation support
- Event support

## Documentation

### Installation

```html
<head>
  <script type="text/javascript" src="js/jquery.min.js"></script>
  <script type="text/javascript" src="js/jquery.smartTab.js"></script>
  <link href="styles/smart_tab.css" rel="stylesheet" type="text/css">
</head>
```

### Initialize

```javascript
$(document).ready(function(){
  $('#smarttab').smartTab();
});
```

### HTML Markup

```html
<div id="smarttab">
  <ul>
    <li><a href="#tab-1">Tab 1</a></li>
    <li><a href="#tab-2">Tab 2</a></li>
    <li><a href="#tab-3">Tab 3</a></li>
    <li><a href="#tab-4">Tab 4</a></li>
  </ul>

  <div>
    <div id="tab-1">Tab 1 Content</div>
    <div id="tab-2">Tab 2 Content</div>
    <div id="tab-3">Tab 3 Content</div>
    <div id="tab-4">Tab 4 Content</div>
  </div>
</div>
```

## Options

```javascript
$('#smarttab').smartTab({
  selected: 0, // Selected tab, 0 = first tab
  keyNavigation: true, // Enable/Disable keyboard navigation
  autoAdjustHeight: true, // Automatically adjust content height
  cycleSteps: false, // Allows to cycle the tabs
  backButtonSupport: true, // Enable the back button support
  enableURLhash: true, // Enable selection of the tab based on url hash
  transition: {
    animation: 'fade', // none/fade/slide
    speed: '400'
  }
});
```

## Events

### showTab
```javascript
$("#smarttab").on("showTab", function(e, anchorObject, tabIndex) {
  alert("Tab " + tabIndex + " shown");
});
```

### leaveTab
```javascript
$("#smarttab").on("leaveTab", function(e, anchorObject, currentTabIndex, nextTabIndex) {
  return confirm("Leave tab?");
});
```

## License

Released under the terms of the [MIT License](https://github.com/techlab/jquery-smarttab/blob/master/LICENSE).
