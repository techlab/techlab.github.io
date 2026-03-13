---
title: jQuery SmartWizard v7
description: A modern and accessible step wizard plugin for jQuery 
head:
  - - meta
    - name: description
      content: A modern and accessible step wizard plugin for jQuery 
  - - meta
    - name: keywords
      content: wizard, step, jQuery, jQuery plugin, jQuery wizard, jQuery step wizard
---

# jQuery SmartWizard <span class="text-gray-400">v7</span>

A modern and accessible step wizard plugin for jQuery 
<hr>

**jQuery Smart Wizard v7** is a lightweight and extensible step wizard plugin built for modern web applications using jQuery. It provides a clean, intuitive interface for managing multi-step processes such as registration forms, checkout screens, surveys, configuration flows, and more.

**jQuery Smart Wizard v7** focuses on usability and flexibility. It offers customizable navigation styles, toolbars, transitions, and events, making it easy to integrate into existing applications. Whether you’re building a simple step form or a complex workflow, Smart Wizard adapts to your needs.

<div class="flex flex-wrap flex-row justify-start gap-1 gap-y-0">

[![Build Status](https://travis-ci.org/techlab/jquery-smartwizard.svg?branch=master)](https://travis-ci.org/techlab/jquery-smartwizard)

[![npm version](https://badge.fury.io/js/smartwizard.svg)](https://www.npmjs.com/package/smartwizard)

[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/smartwizard/badge?style=rounded)](https://www.jsdelivr.com/package/npm/smartwizard)

[![Npm Downloads](https://badgen.net/npm/dm/smartwizard?icon=npm)](https://www.npmjs.com/package/smartwizard)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/techlab/jquery-smartwizard/master/LICENSE)

[![GitHub Repo](https://badgen.net/badge/icon/jquery-smartwizard?icon=github&label=&color=0da4d3)](https://github.com/techlab/jquery-smartwizard)

[![GitHub Sponsor](https://img.shields.io/badge/Sponsor-techlab-blue.svg?logo=github)](https://github.com/sponsors/techlab)

</div>

## Live Demo

:::details jQuery SmartWizard Settings
<div class="settings-panel grid grid-cols-2 gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
    <!-- Theme & Animation -->
    <div class="settings-section">
      <h4>Appearance</h4>
      <div class="form-group">
        <label for="theme_selector">Theme</label>
        <select id="theme_selector">
          <option value="">Default</option>
          <option value="arrows" selected>Arrows</option>
          <option value="glow">Glow</option>
          <option value="basic">Basic</option>
          <option value="pills">Pills</option>
        </select>
      </div>
      <div class="form-group">
        <label for="animation">Transition</label>
        <select id="animation">
          <optgroup label="Buit-in Animations">
            <option value="none">None</option>
            <option value="fade">Fade</option>
            <option value="slideHorizontal" selected="">Slide Horizontal</option>
            <option value="slideVertical">Slide Vertical</option>
            <option value="slideSwing">Slide Swing</option>
          </optgroup>
          <optgroup label="CSS Animations (External Plugin)">
            <option value="cssSlideH">Slide Horizontal</option>
            <option value="cssSlideV">Slide Vertical</option>
            <option value="cssFade">Fade</option>
            <option value="cssFadeSlideH">Fade + Slide Horizontal</option>
            <option value="cssFadeSlideV">Fade + Slide Vertical</option>
            <option value="cssFadeSlideCorner1">Fade + Slide Corner 1</option>
            <option value="cssFadeSlideCorner2">Fade + Slide Corner 2</option>
            <option value="cssBounce">Bounce</option>
            <option value="cssBounceSlideH">Bounce + Slide Horizontal</option>
            <option value="cssBounceSlideV">Bounce + Slide Vertical</option>
            <option value="cssBackSlideH">Back + Slide Horizontal</option>
            <option value="cssBackSlideV">Back + Slide Vertical</option>
            <option value="cssFlipH">Flip Horizontal</option>
            <option value="cssFlipV">Flip Vertical</option>
            <option value="cssLightspeed">Lightspeed</option>
            <option value="cssRotate">Rotate</option>
            <option value="cssRotateClock">Rotate Clockwise</option>
            <option value="cssRotateAntiClock">Rotate Anti Clockwise</option>
            <option value="cssZoom">Zoom</option>
          </optgroup>
        </select>
      </div>
      <div class="form-group">
          <label for="theme_colors">Colors</label>
          <select id="theme_colors" aria-label="">
            <!-- <option value="custom" selected>Custom</option> -->
            <option value="">Default</option>
            <option value="ocean">Ocean</option>
            <option value="teal">Teal</option>
            <option value="forest">Forest</option>
            <option value="violet">Violet</option>
            <option value="crimson">Crimson</option>
            <option value="amber">Amber</option>
            <option value="indigo">Indigo</option>
            <option value="slate">Slate ♿</option>
          </select>
      </div>
    </div>
    <div class="">
      <!-- Toolbar Settings -->
      <h4>Toolbar Settings</h4>
      <div class="form-group">
        <label for="toolbar-position">Position</label>
        <select id="toolbar-position" name="toolbar-position">
          <option value="none">None</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="both" selected>Both</option>
        </select>
      </div>
      <div class="form-check">
        <input class="form-check-input align-middle option-setting-checkbox" type="checkbox" id="toolbar-showNextButton" value="1" checked="">
        <label class="form-check-label align-middle" for="toolbar-showNextButton">Show Next Button</label>
      </div>
      <div class="form-check mb-5">
        <input class="form-check-input align-middle option-setting-checkbox" type="checkbox" id="toolbar-showPreviousButton" value="1" checked="">
        <label class="form-check-label align-middle" for="toolbar-showPreviousButton">Show Previous Button</label>
      </div>
    <!-- Controls -->
      <h4>Controls</h4>
        <div class="button-group">
          <button class="btn btn-secondary" id="prev-btn" disabled>Previous</button>
          <button class="btn btn-secondary" id="next-btn">Next</button>
          <button class="btn btn-danger" id="reset-btn">Reset</button>
        </div>
    </div>
</div>
:::

<div id="smartwizard">
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link" href="#step-1">
                <div class="badge">1</div>
                Customer Details
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#step-2">
                <span class="badge">2</span>
                Products Details
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#step-3">
                <span class="badge">3</span>
                Shipping Details
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="#step-4">
                <span class="badge">4</span>
                Confirm Order
            </a>
        </li>
    </ul>
    <div class="tab-content">
        <div id="step-1" class="tab-pane" role="tabpanel" aria-labelledby="step-1">
            <h3>Step 1 Content</h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div id="step-2" class="tab-pane" role="tabpanel" aria-labelledby="step-2">
            <h3>Step 2 Content</h3>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>
        </div>
        <div id="step-3" class="tab-pane" role="tabpanel" aria-labelledby="step-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div id="step-4" class="tab-pane" role="tabpanel" aria-labelledby="step-4">
            <h3>Step 4 Content</h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
    </div>
    <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
</div>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, onMounted, watch } from 'vue'

const { isDark } = useData()
// Watch for changes to isDark
watch(isDark, (dark) => {
    const wizardElement = $('#smartwizard');
    wizardElement.smartWizard('setOptions', {
        displayMode: dark ? 'dark' : 'light',
    });
})


// ── CSS Animation definitions (Animate.css) ──
const cssAnimationList = {
    cssSlideH: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__slideInLeft', hide: 'animate__slideOutRight' }, backward: { show: 'animate__slideInRight', hide: 'animate__slideOutLeft' } },
    cssSlideV: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__slideInDown', hide: 'animate__slideOutDown' }, backward: { show: 'animate__slideInUp', hide: 'animate__slideOutUp' } },
    cssFade: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__fadeIn', hide: 'animate__fadeOut' }, backward: { show: 'animate__fadeIn', hide: 'animate__fadeOut' } },
    cssFadeSlideH: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__fadeInLeft', hide: 'animate__fadeOutRight' }, backward: { show: 'animate__fadeInRight', hide: 'animate__fadeOutLeft' } },
    cssFadeSlideV: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__fadeInDown', hide: 'animate__fadeOutDown' }, backward: { show: 'animate__fadeInUp', hide: 'animate__fadeOutUp' } },
    cssFadeSlideCorner1: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__fadeInTopLeft', hide: 'animate__fadeOutBottomRight' }, backward: { show: 'animate__fadeInBottomRight', hide: 'animate__fadeOutTopLeft' } },
    cssFadeSlideCorner2: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__fadeInBottomLeft', hide: 'animate__fadeOutTopRight' }, backward: { show: 'animate__fadeInTopRight', hide: 'animate__fadeOutBottomLeft' } },
    cssBounce: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__bounceIn', hide: 'animate__bounceOut' }, backward: { show: 'animate__bounceIn', hide: 'animate__bounceOut' } },
    cssBounceSlideH: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__bounceInLeft', hide: 'animate__bounceOutRight' }, backward: { show: 'animate__bounceInRight', hide: 'animate__bounceOutLeft' } },
    cssBounceSlideV: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__bounceInDown', hide: 'animate__bounceOutDown' }, backward: { show: 'animate__bounceInUp', hide: 'animate__bounceOutUp' } },
    cssBackSlideH: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__backInLeft', hide: 'animate__backOutRight' }, backward: { show: 'animate__backInRight', hide: 'animate__backOutLeft' } },
    cssBackSlideV: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__backInDown', hide: 'animate__backOutDown' }, backward: { show: 'animate__backInUp', hide: 'animate__backOutUp' } },
    cssFlipH: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__flipInY', hide: 'animate__flipOutY' }, backward: { show: 'animate__flipInY', hide: 'animate__flipOutY' } },
    cssFlipV: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__flipInX', hide: 'animate__flipOutX' }, backward: { show: 'animate__flipInX', hide: 'animate__flipOutX' } },
    cssLightspeed: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__lightSpeedInLeft', hide: 'animate__lightSpeedOutRight' }, backward: { show: 'animate__lightSpeedInRight', hide: 'animate__lightSpeedOutLeft' } },
    cssRotate: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__rotateIn', hide: 'animate__rotateOut' }, backward: { show: 'animate__rotateIn', hide: 'animate__rotateOut' } },
    cssRotateClock: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__rotateInDownLeft', hide: 'animate__rotateOutDownLeft' }, backward: { show: 'animate__rotateInUpLeft', hide: 'animate__rotateOutUpLeft' } },
    cssRotateAntiClock: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__rotateInDownRight', hide: 'animate__rotateOutDownRight' }, backward: { show: 'animate__rotateInUpRight', hide: 'animate__rotateOutUpRight' } },
    cssZoom: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__zoomIn', hide: 'animate__zoomOut' }, backward: { show: 'animate__zoomIn', hide: 'animate__zoomOut' } },
};

const loadScripts = async () => {
    const loadScript = (src: string) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    };

    const loadStyle = (href: string) => {
         return new Promise((resolve, reject) => {
             const link = document.createElement('link');
             link.rel = 'stylesheet';
             link.href = href;
             link.onload = resolve;
             link.onerror = reject;
             document.head.appendChild(link);
         })
    }

    try {
        await loadScript('https://code.jquery.com/jquery-4.0.0.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/smartwizard@7/dist/js/jquery.smartWizard.min.js');
        await loadStyle('https://cdn.jsdelivr.net/npm/smartwizard@7/dist/css/smartwizard.min.css');
        await loadStyle('https://cdn.jsdelivr.net/npm/smartwizard@7/dist/css/themes/basic.min.css');
        await loadStyle('https://cdn.jsdelivr.net/npm/smartwizard@7/dist/css/themes/arrows.min.css');
        await loadStyle('https://cdn.jsdelivr.net/npm/smartwizard@7/dist/css/themes/pills.min.css');
        await loadStyle('https://cdn.jsdelivr.net/npm/smartwizard@7/dist/css/themes/glow.min.css');
        await loadStyle('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
        return true;
    } catch (error) {
        console.error('Failed to load scripts:', error);
        return false;
    }
};

const initSmartWizard = () => {
    // @ts-ignore
    if (typeof jQuery === 'undefined') return;
    
    // @ts-ignore
    const $ = jQuery;

    const wizardElement = $('#smartwizard');

    // Step show event
    wizardElement.on("shown.sw", function (e, args) {
        const stepPosition = args.stepPosition;
        $("#prev-btn").removeClass('disabled').prop('disabled', false);
        $("#next-btn").removeClass('disabled').prop('disabled', false);
        if(stepPosition === 'first') {
            $("#prev-btn").addClass('disabled').prop('disabled', true);
        } else if(stepPosition === 'last') {
            $("#next-btn").addClass('disabled').prop('disabled', true);
        } else {
            $("#prev-btn").removeClass('disabled').prop('disabled', false);
            $("#next-btn").removeClass('disabled').prop('disabled', false);
        }
      });

    // Smart Wizard
    wizardElement.smartWizard({
        initialStep: 0,
        theme: 'arrows',
        displayMode: isDark.value ? 'dark' : 'light',
        transition: {
            effect:'slideHorizontal' // none|fade|slideHorizontal|slideVertical|slideSwing|css
        },
        toolbar: {
            position: 'both', // none/ top/ both bottom
        }
    });

    // External Button Events
    $("#reset-btn").on("click", function() {
        wizardElement.smartWizard("reset");
        return true;
    });

    $("#prev-btn").on("click", function() {
        wizardElement.smartWizard("prev");
        return true;
    });

    $("#next-btn").on("click", function() {
        wizardElement.smartWizard("next");
        return true;
    });

    // Toolbar position
    $('#toolbar-position').on('change', function() {
        wizardElement.smartWizard('setOptions', {
            toolbar: { position: $(this).val() }
        });
    });

    // Toolbar buttons
    $('#toolbar-showNextButton').on('change', function() {
      wizardElement.smartWizard('setOptions', {
        toolbar: { buttons: {showNext: $(this).prop('checked') }}
      });
    });

    $('#toolbar-showPreviousButton').on('change', function() {
      wizardElement.smartWizard('setOptions', {
        toolbar: { buttons: {showPrevious: $(this).prop('checked') }}
      });
    });

    $("#animation").on("change", function(this: HTMLElement) {
        const anim = $(this).val() as keyof typeof cssAnimationList;
        const cssAnim = cssAnimationList[anim];
        const options = cssAnim
            ? { transition: { effect: 'css', css: { ...cssAnim } } }
            : { transition: { effect: anim } };
        wizardElement.smartWizard('setOptions', options);
        return true;
    });

    $("#theme_selector").on("change", function(this: HTMLElement) {
        var options = {
            theme: $(this).val()
        };
        $('#smartwizard').smartWizard("setOptions", options);
        return true;
    });

    $("#theme_colors").on("change", function(this: HTMLElement) {
        const colorName = $(this).val();
        if (colorName) {
            wizardElement.attr('data-color', colorName);
        } else {
            wizardElement.removeAttr('data-color');
        }
        return true;
    });
}

onMounted(async () => {
    if (typeof window !== 'undefined') {
        const loaded = await loadScripts();
        if (loaded) {
            initSmartWizard();
        }
    }
});
</script>

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
- UMD (Universal Module Definition) compatible
- Supports jQuery >= 1.11.1, jQuery 3.x, jQuery 4.x, and jQuery Slim versions

## Documentation

### Requirements

  + [jQuery](https://jquery.com/) >= 1.11.1 (jQuery 4.x and jQuery Slim versions are also supported)

### Include CSS

Include the base css file `/dist/css/smart_wizard.min.css` and the theme css file `/dist/css/themes/<theme-name>.min.css`.

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
    <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#step-1">
            <div class="badge">1</div>
            Step Title
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#step-2">
            <span class="badge">2</span>
            Step Title
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#step-3">
            <span class="badge">3</span>
            Step Title
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#step-4">
            <span class="badge">4</span>
            Step Title
          </a>
        </li>
    </ul>

    <div class="tab-content">
        <div id="step-1" class="tab-pane" role="tabpanel" aria-labelledby="step-1">
            Step 1 content
        </div>
        <div id="step-2" class="tab-pane" role="tabpanel" aria-labelledby="step-2">
            Step 2 content
        </div>
        <div id="step-3" class="tab-pane" role="tabpanel" aria-labelledby="step-3">
            Step 3 content
        </div>
        <div id="step-4" class="tab-pane" role="tabpanel" aria-labelledby="step-4">
            Step 4 content
        </div>
    </div>

    <!-- Optional progressbar -->
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
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
    theme: 'basic',         // Theme: basic | arrows | dots | round | square | progress (ensure related CSS is included)
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
            left: [37],            // Key codes for backward navigation
            right: [39]            // Key codes for forward navigation
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

    scrollToView: false, // Scroll the active step anchor into view on step change

    contentLoader: null  // function(stepIndex, stepDirection, stepPosition, stepElement, callback)
                         // Dynamically load step content; call callback(htmlContent) when ready
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
jQuery Smart Wizard has built in progressbar support. You can simply add this by adding the Bootstrap style progressbar HTML inside the wizard HTML.
```html
<div id="smartwizard">
    <ul class="nav">
        ...
    </ul>
 
    <div class="tab-content">
        ...
    </div>
 
    <!-- Include optional progressbar HTML -->
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
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
