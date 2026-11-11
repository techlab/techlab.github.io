---
layout: product
title: Documentation - jQuery SmartWizard v7
description: A modern and accessible step wizard plugin for jQuery 
head:
  - - meta
    - name: description
      content: A modern and accessible step wizard plugin for jQuery 
  - - meta
    - name: keywords
      content: wizard, step, jQuery, jQuery plugin, jQuery wizard, jQuery step wizard
---

<div class="tl-md-container vp-doc">

## Installation

### Using package managers 

**NPM**
```bash
npm install smartwizard
```

**Yarn**
```bash
yarn add smartwizard
```

### Using CDN

**jsDelivr**

```html
<!-- Base CSS -->
<link href="https://cdn.jsdelivr.net/npm/smartwizard@7/dist/css/smartwizard.min.css" rel="stylesheet" type="text/css" />

<!-- Theme CSS -->
<link href="https://cdn.jsdelivr.net/npm/smartwizard@7/dist/css/themes/arrows.min.css" rel="stylesheet" type="text/css" />

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/smartwizard@7/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
```    

**UNPKG**

```html
<!-- Base CSS -->
<link href="https://unpkg.com/smartwizard@7/dist/css/smartwizard.min.css" rel="stylesheet" type="text/css" />

<!-- Theme CSS -->
<link href="https://unpkg.com/smartwizard@7/dist/css/themes/arrows.min.css" rel="stylesheet" type="text/css" />

<!-- JavaScript -->
<script src="https://unpkg.com/smartwizard@7/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
```

### ES Module / Bundler
```js
import $ from "jquery";
import "smartwizard/dist/css/smartwizard.min.css";
import "smartwizard/dist/css/themes/arrows.min.css";
import smartWizard from "smartwizard";

$(function() {
    $('#smartwizard').smartWizard();
});
```

### CommonJS / Webpack
```js
var $ = require("jquery");
require("smartwizard/dist/css/smartwizard.min.css");
require("smartwizard/dist/css/themes/arrows.min.css");
const smartWizard = require("smartwizard");

$(function() {
    $('#smartwizard').smartWizard();
});
```

### Download

[Download jQuery Smart Wizard](https://github.com/techlab/jquery-smartwizard/archive/master.zip)


## Features

- Easy to implement with minimal and clean HTML structure
- Fully rewritten in TypeScript (v7) with built-in type declarations
- Compatible with all modern browsers
- Responsive and mobile-ready design
- Multiple built-in themes (`basic` | `arrows` | `glow` | `pills`), easily customizable
- Flexible color customization using CSS variables
- Light / dark / auto display mode support
- Built-in transition animations (`default` | `fade` | `slideHorizontal` | `slideVertical` | `slideSwing` | `css`)
- Compatible with CSS animation libraries (including [Animate.css](https://animate.style/))
- Extendable transition system with custom animation handlers
- Comprehensive step states: `completed`, `active`, `disabled`, `hidden`, `error`, `warning`
- Runtime option updates via `setOptions()`
- Automatic horizontal scrolling when steps overflow (mouse wheel supported)
- Keyboard navigation (left/right arrow keys)
- Form validation support via `leave.sw` event
- RTL (right-to-left language) support
- Accessible navigation controls
- Support for external navigation controls
- Dynamic content loading via `contentLoader` callback
- Auto content height adjustment
- Customizable toolbar with support for additional HTML elements
- Integrated progress bar
- URL hash navigation with browser history integration
- Isolated `sw-*` CSS class prefixing to prevent collisions with Bootstrap, Tailwind, and other CSS frameworks
- Built-in content sanitization (`contentSanitize`) to guard against DOM XSS in dynamically loaded content
- Adaptive navigation bar scrolling and active step centering (`scrollToView`)
- UMD (Universal Module Definition) compatible
- Supports jQuery >= 1.11.1, jQuery 3.x, jQuery 4.x, and jQuery Slim versions

## Documentation

### Requirements

  + [jQuery](https://jquery.com/) >= 1.11.1 (jQuery 4.x and jQuery Slim versions are also supported)

### Include CSS

Include the base css file `/dist/css/smartwizard.min.css` and the theme css file `/dist/css/themes/<theme-name>.min.css`.

```html
<!-- Base CSS -->
<link href="https://cdn.jsdelivr.net/npm/smartwizard@7/dist/css/smartwizard.min.css" rel="stylesheet" type="text/css" />

<!-- Theme CSS (choose your theme) -->
<link href="https://cdn.jsdelivr.net/npm/smartwizard@7/dist/css/themes/arrows.min.css" rel="stylesheet" type="text/css" />
```

### The HTML Markup

```html
<!-- SmartWizard html -->
<div id="smartwizard">
    <ul class="sw-nav">
        <li class="sw-nav-item">
          <a class="sw-nav-link" href="#step-1">
            <div class="sw-badge">1</div>
            Step Title
          </a>
        </li>
        <li class="sw-nav-item">
          <a class="sw-nav-link" href="#step-2">
            <span class="sw-badge">2</span>
            Step Title
          </a>
        </li>
        <li class="sw-nav-item">
          <a class="sw-nav-link" href="#step-3">
            <span class="sw-badge">3</span>
            Step Title
          </a>
        </li>
        <li class="sw-nav-item">
          <a class="sw-nav-link" href="#step-4">
            <span class="sw-badge">4</span>
            Step Title
          </a>
        </li>
    </ul>

    <div class="sw-tab-content">
        <div id="step-1" class="sw-tab-pane" role="tabpanel" aria-labelledby="step-1">
            Step 1 content
        </div>
        <div id="step-2" class="sw-tab-pane" role="tabpanel" aria-labelledby="step-2">
            Step 2 content
        </div>
        <div id="step-3" class="sw-tab-pane" role="tabpanel" aria-labelledby="step-3">
            Step 3 content
        </div>
        <div id="step-4" class="sw-tab-pane" role="tabpanel" aria-labelledby="step-4">
            Step 4 content
        </div>
    </div>

    <!-- Optional progressbar -->
    <div class="sw-progress">
      <div class="sw-progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>

</div>
```

### Include JavaScript
_Note: jQuery should be included before the jQuery SmartWizard JavaScript file._

```html
<!-- SmartWizard -->
<script src="https://cdn.jsdelivr.net/npm/smartwizard@7/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
```

### Initialize the jQuery SmartWizard

```javascript
$(function() {
  // SmartWizard initialize
  $('#smartwizard').smartWizard();
});
```

## Advanced Options

### Optional Parameters

```js
$('#smartwizard').smartWizard({
    initialStep: 0,         // Initial selected step (0 = first step)
    theme: 'basic',         // Theme: default | arrows | basic | glow | pills (ensure related CSS is included)
    displayMode: 'auto',    // Display mode: auto (system preference) | dark | light | none

    behavior: {
        autoHeight: true,             // Auto-adjust content height to active step
        useUrlHash: false,            // Enable step selection via URL hash
        supportBrowserHistory: false  // Enable browser back/forward button support
    },

    navigation: {
        enabled: true,          // Enable/disable anchor click navigation
        alwaysClickable: false, // Allow clicking any step at any time
        completed: {
            enabled: true,                  // Mark visited steps as completed
            completeAllPreviousSteps: true, // Mark all prior steps done when navigating via URL hash
            clearOnBack: false,             // Clear completed state when navigating backward
            clickable: true                 // Allow navigating back to completed steps
        }
    },

    transition: {
        effect: 'default',  // none | fade | slideHorizontal | slideVertical | slideSwing | css
        speed: 400,         // Animation speed in ms (not used for 'css')
        easing: '',         // jQuery easing (requires easing plugin; not used for 'css')
        css: {              // Settings used only when effect is 'css'
            prefix: '',     // CSS animation class prefix (e.g. 'animate__animated')
            forward:  { show: '', hide: '' },  // Classes for forward animation
            backward: { show: '', hide: '' }   // Classes for backward animation
        }
    },

    toolbar: {
        position: 'bottom',        // none | top | bottom | both
        buttons: {
            showNext: true,        // Show/hide the Next button
            showPrevious: true     // Show/hide the Previous button
        },
        extraElements: ''          // Additional HTML or jQuery elements to append to toolbar
    },

    keyboardNavigation: {
        enabled: true,             // Enable left/right arrow key navigation
        keys: {
            left: ['ArrowLeft'],   // Key names for backward navigation
            right: ['ArrowRight']  // Key names for forward navigation
        }
    },

    swipeNavigation: {
        enabled: false,            // Enable swipe navigation on touch devices
        threshold: 50              // Minimum swipe distance in px to trigger navigation
    },

    localization: {
        buttons: {
            next: 'Next',
            previous: 'Previous'
        }
    },

    stepStates: {
        completed: [],  // Step indexes to mark as completed on init
        disabled: [],   // Step indexes to disable on init
        hidden: [],     // Step indexes to hide on init
        error: [],      // Step indexes to mark as error on init
        warning: []     // Step indexes to mark as warning on init
    },

    scrollToView: true, // Scroll the active step anchor into view on step change

    contentLoader: null, // function(stepIndex, stepDirection, stepPosition, stepElement, callback)
                         // Dynamically load step content; call callback(htmlContent) when ready
    contentSanitize: true // Sanitize dynamic HTML content loaded via contentLoader to prevent XSS
});
```

### Ajax Content Implementation
You can use ajax, axios or fetch to load contents dynamically using the `contentLoader` option.
Please see the ajax example for the usage.

### RTL (Right-to-left language) support

jQuery Smart Wizard has built in right-to-left language support. Please see Right-to-left Language(RTL) example. You can enable RTL support either by adding the HTML parameter `dir="rtl"` on the the HTML tag or the wizard main element.
```html
  <!-- SmartWizard html -->
  <div id="smartwizard" dir="rtl">
    ...
  </div>
```
OR
```html
  <html dir="rtl">
```

### Progressbar support
jQuery Smart Wizard has built in progressbar support. You can simply add this by adding the progressbar HTML inside the wizard HTML.
```html
<div id="smartwizard">
    <ul class="sw-nav">
        ...
    </ul>
 
    <div class="sw-tab-content">
        ...
    </div>
 
    <!-- Include optional progressbar HTML -->
    <div class="sw-progress">
      <div class="sw-progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>  
```


### Set colors using CSS variables

Colors in jQuery SmartWizard v7 are fully customizable via CSS custom properties.
You can create your own custom color theme and then by adding a `data-color` attribute to the wizard element.

```html
<style>
  [data-color="myCustom"] {
    /* Surface */
    --sw-border-color: #eeeeee;
    --sw-surface: #ffffff;
    --sw-border: #e0e0e0;
    --sw-shadow: 0 2px 10px rgba(0, 0, 0, .08);
    --sw-radius: 8px;

    /* Content */
    --sw-content-pad: 8px;
    --sw-content-bg: var(--sw-surface);
    --sw-content-text: #333333;
 
    /* Brand */
    --sw-accent: #2196f3;
    --sw-accent-dark: #1565c0;
    --sw-accent-light: #64b5f6;
    --sw-accent-text: #ffffff;

    /* Buttons */
    --sw-btn-primary-bg: var(--sw-accent);
    --sw-btn-primary-text: var(--sw-accent-text);
    --sw-btn-secondary-bg: #eeeeee;
    --sw-btn-secondary-text: #333333;

    /* Transition */
    --sw-transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);

    /* Loader */
    --sw-loader-color: #009EF7;
    --sw-loader-background-color: #f8f9fa;
    --sw-loader-background-wrapper-color: rgba(255, 255, 255, 0.7);

    /* Progress */
    --sw-progress-color: #009EF7;
    --sw-progress-background-color: #f8f9fa;

    /* Progress connector line */
    --sw-connector-width: 60px;
    --sw-connector-height: 2px;
    --sw-connector-color: var(--sw-inactive-border);

    /* Toolbar */
    --sw-toolbar-btn-color: #ffffff;
    --sw-toolbar-btn-background-color: #009EF7;

    /* Navigation */
    /* Badge */
    --sw-nav-badge-size: 32px;
    --sw-nav-badge-radius: 50%;

    /* Steps */
    --sw-nav-default-text: #9e9e9e;
    --sw-nav-default-bg: #eeeeee;
    --sw-nav-default-badge-text: #999999;
    --sw-nav-default-badge-bg: #dddddd;

    --sw-nav-active-text: #ffffff;
    --sw-nav-active-bg: #2196f3;
    --sw-nav-active-badge-text: #2196f3;
    --sw-nav-active-badge-bg: #ffffff;

    --sw-nav-completed-text: #eeeeee;
    --sw-nav-completed-bg: #59b0f6;
    --sw-nav-completed-badge-text: #59b0f6;
    --sw-nav-completed-badge-bg: #eeeeee;

    --sw-nav-error-text: #ffffff;
    --sw-nav-error-bg: #f44336;
    --sw-nav-error-badge-text: #f44336;
    --sw-nav-error-badge-bg: #dddddd;

    --sw-nav-warning-text: #ffffff;
    --sw-nav-warning-bg: #ff9800;
    --sw-nav-warning-badge-text: #ff9800;
    --sw-nav-warning-badge-bg: #dddddd;
  }
</style>

<!-- SmartWizard HTML -->
<div id="smartwizard" data-color="myCustom">
    <!-- rest of the wizard html -->
</div>
```

### Color presets

Ready-made presets are included with the base CSS — just add a `data-color` attribute to the wizard element:

```html
<div id="smartwizard" data-color="ocean">...</div>
```

| Preset | `data-color` value |
|--------|-------------------|
| Default (Blue) | _(no attribute)_ |
| Ocean | `ocean` |
| Teal | `teal` |
| Forest | `forest` |
| Violet | `violet` |
| Crimson | `crimson` |
| Amber | `amber` |
| Indigo | `indigo` |
| Slate (WCAG AA Compliant) | `slate` |

### Display mode

Control the dark / light appearance via the `displayMode` option:

```javascript
$('#smartwizard').smartWizard({
    displayMode: 'auto'   // 'auto' | 'dark' | 'light' | 'none'
});
```

| Value | Behaviour |
|-------|-----------|
| `auto` | Follows the system's `prefers-color-scheme` |
| `dark` | Forces dark mode |
| `light`| Forces light mode |
| `none` | No `data-theme` attribute applied (manual control) |

Or set it imperatively via the `data-theme` HTML attribute:

```html
<div id="smartwizard" data-theme="dark">...</div>
```

### Extend transition animations

You can register completely custom transition handlers on `$.smartWizard.transitions`:

```javascript
// Register a custom transition
$.smartWizard.transitions['myFade'] = (next, current, stepDirection, wizard, callback) => {
    if (current) {
        current.fadeOut(wizard.getOptions().transition.speed, () => {
            next.fadeIn(wizard.getOptions().transition.speed, callback);
        });
    } else {
        next.fadeIn(wizard.getOptions().transition.speed, callback);
    }
};

// Use it
$('#smartwizard').smartWizard({
    transition: { effect: 'myFade' }
});
```

## Events

All v7 events use the `.sw` namespace.

```javascript
// Fires after the wizard is fully initialized
$('#smartwizard').on('initialized.sw', function(e) { });

// Fires after the initial step is shown for the first time
$('#smartwizard').on('loaded.sw', function(e) { });

// Fires before leaving the current step
// Return false from the handler to cancel navigation
$('#smartwizard').on('leave.sw', function(e, args) {
    // args: { stepIndex, nextStepIndex, stepElement, stepDirection, stepPosition }
    // Return false to prevent navigation
});

// Fires after a new step is shown
$('#smartwizard').on('shown.sw', function(e, args) {
    // args: { stepIndex, stepElement, stepDirection, stepPosition }
});
```

### Form validation example

Use the `leave.sw` event to validate before advancing:

```javascript
$('#smartwizard').on('leave.sw', function(e, args) {
    if (args.stepDirection === 'forward') {
        const form = document.getElementById('form-' + (args.stepIndex + 1));
        if (form && !form.checkValidity()) {
            form.classList.add('was-validated');
            $('#smartwizard').smartWizard('setState', [args.stepIndex], 'error');
            return false; // cancel navigation
        }
        $('#smartwizard').smartWizard('unsetState', [args.stepIndex], 'error');
    }
});
```

## Public Methods

```javascript
const wizard = $('#smartwizard');

wizard.smartWizard('next');                  // Navigate to next step
wizard.smartWizard('prev');                  // Navigate to previous step
wizard.smartWizard('goToStep', 2);           // Go to step index 2
wizard.smartWizard('goToStep', 2, true);     // Go to step index 2 (force, marks previous as done)
wizard.smartWizard('reset');                 // Reset wizard to initial state
wizard.smartWizard('setOptions', { theme: 'arrows' }); // Update options at runtime

wizard.smartWizard('setState',   [1, 2], 'disable'); // Disable steps 1 and 2
wizard.smartWizard('setState',   [3],    'error');   // Mark step 3 as error
wizard.smartWizard('setState',   [0],    'warning'); // Mark step 0 as warning
wizard.smartWizard('unsetState', [1, 2], 'disable'); // Re-enable steps 1 and 2

wizard.smartWizard('loader', 'show'); // Show loader
wizard.smartWizard('loader', 'hide'); // Hide loader

wizard.smartWizard('adjustHeight'); // Manually re-adjust content height

const info = wizard.smartWizard('getStepInfo');
// Returns: { currentStep, totalSteps }

const options = wizard.smartWizard('getOptions');
// Returns the current options object
```

### setState / unsetState

Step states available: `default` | `active` | `completed` | `disable` | `hidden` | `error` | `warning`

```javascript
// Mark steps 1 and 3 as disabled
$('#smartwizard').smartWizard('setState', [1, 3], 'disable');

// Re-enable them
$('#smartwizard').smartWizard('unsetState', [1, 3], 'disable');

// Mark step 2 as error
$('#smartwizard').smartWizard('setState', [2], 'error');
```

### setOptions

Change any option at runtime without reinitializing:

```javascript
// Switch theme
$('#smartwizard').smartWizard('setOptions', { theme: 'arrows' });

// Switch transition
$('#smartwizard').smartWizard('setOptions', {
    transition: { effect: 'slideHorizontal' }
});

// Use a CSS animation (Animate.css)
$('#smartwizard').smartWizard('setOptions', {
    transition: {
        effect: 'css',
        css: {
            prefix: 'animate__animated animate__faster',
            forward:  { show: 'animate__fadeInLeft',  hide: 'animate__fadeOutRight' },
            backward: { show: 'animate__fadeInRight', hide: 'animate__fadeOutLeft'  }
        }
    }
});
```

## License

**jQuery SmartWizard v7** is dual-licensed:

**[MIT License](https://github.com/techlab/jquery-smartwizard/blob/master/LICENSE)** — Free for personal and open-source projects.

**[Commercial License](https://techlaboratory.net/jquery-smartwizard#license)** — Required for closed-source, SaaS, or any commercial projects.  

> If you use **jQuery SmartWizard v7** in a commercial or client application, please purchase a commercial license.  
> _Commercial licenses help support continued development, maintenance, and new features._

<a class="btn-main" href="https://tech-lab.lemonsqueezy.com/checkout/buy/8831b61d-c726-41cf-b5e7-6a60956a1ea7">Purchase Commercial License</a>

::: info 🎉 Limited-Time Deal 🎉 
Apply coupon code `SWEET20` at checkout to get 20% discount on your purchase.
:::


## Contribute

If you like the project please support with your contribution.

[GitHub Sponsor](https://github.com/sponsors/techlab)

Happy Coding ❤️
</div>
