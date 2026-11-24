---
layout: product
title: Documentation - jQuery SmartTab v4
description: The flexible jQuery tab control plugin
head:
  - - meta
    - name: description
      content: The flexible jQuery tab control plugin
  - - meta
    - name: keywords
      content: tab, step, jQuery, jQuery plugin, jQuery tab
---

<div class="tl-md-container tl-md-container-mt vp-doc">

## Installation

### NPM

```bash
npm install jquery-smarttab
```

### CDN - jsDelivr

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/jquery-smarttab@4/dist/css/smart_tab_all.min.css" rel="stylesheet" type="text/css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/jquery-smarttab@4/dist/js/jquery.smartTab.min.js" type="text/javascript"></script>
```

### CDN - UNPKG
```html
<!-- CSS -->
<link href="https://unpkg.com/jquery-smarttab@4/dist/css/smart_tab_all.min.css" rel="stylesheet" type="text/css" />

<!-- JavaScript -->
<script src="https://unpkg.com/jquery-smarttab@4/dist/js/jquery.smartTab.min.js" type="text/javascript"></script>
```

## Usage

### Common JS
```javascript
var $ = require( "jquery" );
require( "jquery-smarttab/dist/css/smart_tab_all.css");
const smartTab = require("jquery-smarttab");

$(function() {
    $('#smarttab').smartTab();
});
```

### ES6 

```javascript
import $ from "jquery";
import "jquery-smarttab/dist/css/smart_tab_all.css";
import smartTab from 'jquery-smarttab';

$(function() {
    $('#smarttab').smartTab();
});
```

Note: you need to install the required dependencies

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
    <li>
      <a class="nav-link" href="#tab-1">Tab 1</a>
    </li>
    <li>
      <a class="nav-link" href="#tab-2">Tab 2</a>
    </li>
    <li>
      <a class="nav-link" href="#tab-3">Tab 3</a>
    </li>
    <li>
      <a class="nav-link" href="#tab-4">Tab 4</a>
    </li>
  </ul>

  <div class="tab-content">
    <div id="tab-1" class="tab-pane" role="tabpanel">
      Tab content
    </div>
    <div id="tab-2" class="tab-pane" role="tabpanel">
      Tab content
    </div>
    <div id="tab-3" class="tab-pane" role="tabpanel">
      Tab content
    </div>
    <div id="tab-4" class="tab-pane" role="tabpanel">
      Tab content
    </div>
  </div>
</div>
```

### Include jQuery

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

### Include jQuery SmartTab JavaScript

```html
<script type="text/javascript" src="../dist/js/jquery.smartTab.min.js"></script>
```

### Initialize the jQuery SmartTab

```javascript
$(function() {
  // SmartTab initialize
  $('#smarttab').smartTab();
});
```

### CSS Files Selection

You can see many CSS files at `dist/css/` folder. All the CSS files are standalone. The only difference is the theme.

- `../dist/css/smart_tab_all.css` - contains all themes
- `../dist/css/smart_tab.css` - contains only the default theme
- `../dist/css/smart_tab_(theme name).css` - theme-specific files

All these files have corresponding min files that are compressed for size reduction. Ex. `../dist/css/smart_tab_all.min.css`

## Advanced Options

### Optional Parameters

```javascript
$('#smarttab').smartTab({
  selected: 0, // Initial selected tab, 0 = first tab
  theme: 'basic', // theme, related css need to include for other than default theme
  justified: true, // Nav menu justification. true/false
  autoAdjustHeight: true, // Automatically adjust content height
  backButtonSupport: true, // Enable the back button support
  enableUrlHash: true, // Enable selection of the step based on url hash
  transition: {
      animation: 'none', // Animation effect on navigation, none|fade|slideHorizontal|slideVertical|slideSwing|css(Animation CSS class also need to specify)
      speed: '400', // Animation speed. Not used if animation is 'css'
      easing: '', // Animation easing. Not supported without a jQuery easing plugin. Not used if animation is 'css'
      prefixCss: '', // Only used if animation is 'css'. Animation CSS prefix
      fwdShowCss: '', // Only used if animation is 'css'. Step show Animation CSS on forward direction
      fwdHideCss: '', // Only used if animation is 'css'. Step hide Animation CSS on forward direction
      bckShowCss: '', // Only used if animation is 'css'. Step show Animation CSS on backward direction
      bckHideCss: '', // Only used if animation is 'css'. Step hide Animation CSS on backward direction
  },
  autoProgress: { // Auto navigate tabs on interval
      enabled: false, // Enable/Disable Auto navigation
      interval: 3500, // Auto navigate Interval (used only if "autoProgress" is enabled)
      stopOnFocus: true, // Stop auto navigation on focus and resume on outfocus
  },
  keyboard: {
      keyNavigation: true, // Enable/Disable keyboard navigation(left and right keys are used if enabled)
      keyLeft: [37, 38], // Left key code
      keyRight: [39, 40], // Right key code
      keyHome: [36], // Home key code
      keyEnd: [35] // End key code
  },
  style: { // CSS Class settings
      mainCss: 'st',
      navCss: 'nav',
      navLinkCss: 'nav-link',
      contentCss: 'tab-content',
      contentPanelCss: 'tab-pane',
      themePrefixCss: 'st-theme-',
      justifiedCss: 'st-justified',
      anchorDefaultCss: 'default',
      anchorActiveCss: 'active',
      loaderCss: 'st-loading'
  },
  getContent: null
});
```

### Ajax Content Implementation

External ajax based contents are supported using `getContent` callback function which is called before showing each step. The `getContent` callback function will receive 5 parameters:

- **stepIndex** - `(integer)` Zero based index number of the steps
- **stepDirection** - `(string)` Step direction (forward/backward)
- **stepPosition** - `(string)` Step position (first/last/middle)
- **selStep** - `(object)` jQuery object of the anchor element to show
- **callback** - `(function)` The callback function which accepts HTML content as string

**Example:**

```javascript
// Function to fetch the ajax content
function provideContent(idx, stepDirection, stepPosition, selStep, callback) {
  // You can use stepDirection to get ajax content on the forward movement 
  // and stepPosition to identify the step position
  let ajaxURL = "YOUR AJAX URL";

  // Ajax call to fetch your content
  $.ajax({
    method: "GET",
    url: ajaxURL,
    beforeSend: function(xhr) {
      // Show the loader
      $('#smarttab').smartTab("loader", "show");
    }
  }).done(function(res) {
    // Build the content HTML
    let html = `<div class="card w-100">
                  <div class="card-body">
                    <p class="card-text">${res}</p>
                  </div>
                </div>`;

    // Resolve the Promise with the tab content
    callback(html);

    // Hide the loader
    $('#smarttab').smartTab("loader", "hide");
  }).fail(function(err) {
    // Handle ajax error

    // Hide the loader
    $('#smarttab').smartTab("loader", "hide");
  });

  // The callback must be called in any case to proceed the steps
  // The empty callback will not apply any dynamic contents to the steps
  callback();
}

// SmartTab initialize with step content callback
$('#smarttab').smartTab({
  getContent: provideContent
});
```

### Set Colors Using CSS Variables

The colors on jQuery Smart Tab are customizable using CSS variables. You can overwrite the CSS variables by applying your own colors. Add the CSS colors on root element after including the jQuery Smart Tab CSS.

```html
<link href="https://cdn.jsdelivr.net/npm/smarttab@4/dist/css/smart_tab_all.min.css" rel="stylesheet" type="text/css" />

<style>
  :root {
    --st-background: unset;
    --st-border: 1px solid #eeeeee;
    --st-anchor-default-primary-color: #f8f9fa;
    --st-anchor-default-secondary-color: #b0b0b1;
    --st-anchor-active-primary-color: #009EF7;
    --st-anchor-active-secondary-color: #ffffff;
    --st-anchor-disabled-primary-color: #f8f9fa;
    --st-anchor-disabled-secondary-color: #dbe0e5;
    --st-loader-color: #009EF7;
    --st-loader-background-color: #f8f9fa;
    --st-loader-background-wrapper-color: rgba(255, 255, 255, 0.7);
  }
</style>
```

### Extend Transition Animations

Moreover built-in animations, jQuery Smart Tab supports extending the transition animations with your own. Just add your function to `$.fn.smartTab.transitions` variable. The parameters received on the functions are:

- **elmToShow** - `(object)` tabContentObject of the element to show
- **elmToHide** - `(object)` tabContentObject of the element to hide
- **tabDirection** - `(string)` The direction of the navigation
- **mainObj** - `(object)` Object of the main element
- **callback** - `(function)` The callback function to call when the animation is finished. Pass `false` if an error on processing the animation, the wizard will take the default options to continue.

**Example:**

```javascript
// Smart Tab initialize using custom transition animation
$('#smarttab').smartTab({
  transition: {
    animation: 'myAnimation'
  }
});

// Add your custom animation function
$.fn.smartTab.transitions.myAnimation = (elmToShow, elmToHide, tabDirection, mainObj, callback) => {
  if (!$.isFunction(elmToShow.fadeOut)) { 
    callback(false); 
    return; 
  }

  if (elmToHide) {
    elmToHide.fadeOut(mainObj.options.transition.speed, mainObj.options.transition.easing, () => {
      elmToShow.fadeIn(mainObj.options.transition.speed, mainObj.options.transition.easing, () => {
        callback();
      });
    });
  } else {
    elmToShow.fadeIn(mainObj.options.transition.speed, mainObj.options.transition.easing, () => {
      callback();
    });
  }
}
```

## Public Functions


### goToTab

Navigate to a specific tab

```javascript
// Go to tab
$('#smarttab').smartTab("goToTab", 2);
```

### next

Navigate to next tab

```javascript
$('#smarttab').smartTab("next");
```

### prev

Navigate to previous tab

```javascript
$('#smarttab').smartTab("prev");
```

### reset

Reset the tab to initial state

```javascript
$('#smarttab').smartTab("reset");
```

### loader

Show/hide the built-in loader

```javascript
// Show loader
$('#smarttab').smartTab("loader", "show");

// Hide loader
$('#smarttab').smartTab("loader", "hide");
```

### first

Navigate to first tab

```javascript
$('#smarttab').smartTab("first");
```

### last

Navigate to last tab

```javascript
$('#smarttab').smartTab("last");
```

### setOptions

Dynamically set options

```javascript
// Change theme
var options = {
  theme: 'pills'
};
$('#smarttab').smartTab("setOptions", options);

// Change animation
var options = {
  transition: {
    animation: 'fade'
  }
};
$('#smarttab').smartTab("setOptions", options);
```

### getOptions

Get current options

```javascript
let options = $('#smarttab').smartTab("getOptions");
console.log(options);
```

### getInfo

Get jQuery SmartTab info (e.g., `{ currentTab: 1, totalTabs: 4 }`)

```javascript
let info = $('#smarttab').smartTab("getInfo");
console.log(info);
```

### fixHeight

Adjust the content height of the current tab

```javascript
$('#smarttab').smartTab("fixHeight");
```


## Parameters

### selected

**(integer)** Specify the selected tab on the first load. Default value is `0`.

### theme

**(string)** Theme for the tab. Default value is `'default'`.

### justified

**(boolean)** Nav menu justification. Default value is `true`.

### autoAdjustHeight

**(boolean)** Automatically adjust content height. Default value is `true`.

### backButtonSupport

**(boolean)** Enable the back button support. Default value is `true`.

### enableURLhash

**(boolean)** Enable selection of the tab based on url hash. Default value is `true`.

### transition

**(object)** Settings for the transition with the following options:

- **animation** - `(string)` Effect on navigation: `none`|`fade`|`slideHorizontal`|`slideVertical`|`slideSwing`|`css` (Animation CSS class also needs to be specified)
- **speed** - `(number)` Animation speed. Not used if animation is `'css'`
- **easing** - `(string)` Animation easing. Not supported without a jQuery easing plugin. Not used if animation is `'css'`
- **prefixCss** - `(string)` Only used if animation is `'css'`. Animation CSS prefix
- **fwdShowCss** - `(string)` Only used if animation is `'css'`. Tab show Animation CSS on forward direction
- **fwdHideCss** - `(string)` Only used if animation is `'css'`. Tab hide Animation CSS on forward direction
- **bckShowCss** - `(string)` Only used if animation is `'css'`. Tab show Animation CSS on backward direction
- **bckHideCss** - `(string)` Only used if animation is `'css'`. Tab hide Animation CSS on backward direction

**Example Usage:**

```javascript
// Using a built-in transition animation
$('#smarttab').smartTab({
  transition: {
    animation: 'slideHorizontal' // Effect on navigation
  }
});

// Using a CSS transition animation. You need to include Animate.css
$('#smarttab').smartTab({
  transition: {
    animation: 'css',
    prefixCss: 'animate__animated animate__faster',
    fwdShowCss: 'animate__bounceIn',
    fwdHideCss: 'animate__bounceOut',
    bckShowCss: 'animate__bounceIn',
    bckHideCss: 'animate__bounceOut'
  }
});
```

### autoProgress

**(object)** Settings for auto navigate tabs on interval with the following options:

- **enabled** - `(boolean)` Enable/Disable Auto navigation
- **interval** - `(number)` Auto navigate Interval (used only if "autoProgress" is enabled)
- **stopOnFocus** - `(boolean)` Stop auto navigation on focus and resume on outfocus (used only if "autoProgress" is enabled)

**Example Usage:**

```javascript
$('#smarttab').smartTab({
  autoProgress: { // Auto navigate tabs on interval
    enabled: false, // Enable/Disable Auto navigation
    interval: 3500, // Auto navigate Interval
    stopOnFocus: true // Stop auto navigation on focus and resume on outfocus
  }
});
```

### keyboard

**(object)** Settings for the keyboard with the following options:

- **keyNavigation** - `(boolean)` Enable/Disable keyboard navigation
- **keyLeft** - `(array)` Left key code
- **keyRight** - `(array)` Right key code
- **keyHome** - `(array)` Home key code
- **keyEnd** - `(array)` End key code

**Example Usage:**

```javascript
$('#smarttab').smartTab({
  keyboard: {
    keyNavigation: true, // Enable/Disable keyboard navigation
    keyLeft: [37, 38], // Left key codes
    keyRight: [39, 40], // Right key codes
    keyHome: [36], // Home key code
    keyEnd: [35] // End key code
  }
});
```

### getContent

**(function)** Callback function to provide tab content. Default value is `null`.

**Example Usage:**

```javascript
function provideContent(idx, tabDirection, tabPosition, selTab, callback) {
  // Your content loading logic here
  callback();
}

$('#smarttab').smartTab({
  getContent: provideContent
});
```


## Events

### initialized

The `initialized` event triggers when jQuery Smart Tab is initialized.

**Event Example:**

```javascript
// Initialize event
$("#smarttab").on("initialized", function(e) {
  console.log("initialized");
});
```

### loaded

The `loaded` event triggers when jQuery Smart Tab is fully loaded.

**Event Example:**

```javascript
// loaded event
$("#smarttab").on("loaded", function(e) {
  console.log("loaded");
});
```

### leaveTab

The `leaveTab` event triggers just before leaving from a tab. You can cancel the event by returning `false`, so the navigation is also cancelled and the tab will retain the current state.

**Event Parameters:**

The event will receive the following parameters:

- **anchorObject** - `(object)` jQuery object of the anchor element
- **currentIndex** - `(integer)` Index of the current tab
- **nextIndex** - `(integer)` Index of the next tab
- **tabDirection** - `(string)` Tab direction

**Event Example:**

```javascript
// Initialize the leaveTab event
$("#smarttab").on("leaveTab", function(e, anchorObject, currentIndex, nextIndex, tabDirection) {
  return confirm("Do you want to leave the tab " + currentIndex + "?");
});
```


Triggers when a tab is shown

```javascript
$("#smarttab").on("showTab", function(e, anchorObject, tabIndex) {
  console.log("Tab " + tabIndex + " shown");
});
```

### showTab

The showTab event triggers when a step is shown.

**Event Parameters:**

The event will receive the following parameters:

- **anchorObject** - `(object)` jQuery object of the anchor element
- **tabIndex** - `(integer)` Index of the tab
- **tabDirection** - `(string)` Tab direction
- **tabPosition** - `(string)` Tab position.

**Event Example:**

```javascript
// Initialize the showTab event
$("#smarttab").on("showTab", function(e, anchorObject, tabIndex, tabDirection, tabPosition) {
   alert("You are on tab " + tabIndex + " now");
});
```

</div>