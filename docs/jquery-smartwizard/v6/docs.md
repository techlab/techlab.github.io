---
layout: product
title: Documentation - jQuery SmartWizard v6
description: The awesome step wizard plugin for jQuery
head:
  - - meta
    - name: description
      content: The awesome step wizard plugin for jQuery
  - - meta
    - name: keywords
      content: wizard, step, jQuery, jQuery plugin, jQuery wizard, jQuery step wizard
---

<div class="tl-md-container tl-md-container-mt vp-doc">

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
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/smartwizard@6/dist/css/smart_wizard_all.min.css" rel="stylesheet" type="text/css" />

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/smartwizard@6/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
```

**UNPKG**

```html
<!-- CSS -->
<link href="https://unpkg.com/smartwizard@6/dist/css/smart_wizard_all.min.css" rel="stylesheet" type="text/css" />

<!-- JavaScript -->
<script src="https://unpkg.com/smartwizard@6/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
```

### Download

[Download jQuery Smart Wizard](https://github.com/techlab/jquery-smartwizard/archive/master.zip)


## Usage

**Common JS**

```javascript
var $ = require("jquery");
require("smartwizard/dist/css/smart_wizard_all.css");
const smartWizard = require("smartwizard");

$(function() {
  $('#smartwizard').smartWizard();
});
```

**ES6**

```javascript
import $ from "jquery";
import "smartwizard/dist/css/smart_wizard_all.css";
import smartWizard from 'smartwizard';

$(function() {
  $('#smartwizard').smartWizard();
});
```


## Features

- Easy to implement and minimal HTML required
- Supports all modern browsers
- Responsive CSS design
- Bootstrap compatible
- Cool themes included and can be easily customized
- Easy color customization using CSS variables
- Built-in transition animations (none|fade|slideHorizontal|slideVertical|slideSwing|css)
- Transition animations can be added easily by extending
- CSS Animations support for transition animations (supports Animate.css)
- Form validation support
- RTL(Right-to-left language) support
- Accessible controls
- External controls support
- Easy ajax content integration
- Keyboard navigation
- Auto content height adjustment
- Customizable toolbar and option to provide extra HTML
- Built-in progressbar
- Built-in loader
- Built-in events
- UMD (Universal Module Definition) support
- Compatible with all jQuery versions (jQuery 1.11.1+, jQuery 3.6+, and jQuery Slim)

## Documentation

### Requirements

- [jQuery](https://jquery.com/)

### Include CSS

```html
<link href="https://cdn.jsdelivr.net/npm/smartwizard@6/dist/css/smart_wizard_all.min.css" rel="stylesheet" type="text/css" />
```

### The HTML Markup

```html
<!-- SmartWizard html -->
<div id="smartwizard">
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link" href="#step-1">
        <div class="num">1</div>
        Step Title
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#step-2">
        <span class="num">2</span>
        Step Title
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#step-3">
        <span class="num">3</span>
        Step Title
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#step-4">
        <span class="num">4</span>
        Step Title
      </a>
    </li>
  </ul>

  <div class="tab-content">
    <div id="step-1" class="tab-pane" role="tabpanel" aria-labelledby="step-1">
      Step content
    </div>
    <div id="step-2" class="tab-pane" role="tabpanel" aria-labelledby="step-2">
      Step content
    </div>
    <div id="step-3" class="tab-pane" role="tabpanel" aria-labelledby="step-3">
      Step content
    </div>
    <div id="step-4" class="tab-pane" role="tabpanel" aria-labelledby="step-4">
      Step content
    </div>
  </div>

  <!-- Include optional progressbar HTML -->
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
</div>
```

### Include JavaScript
_Note:- jQuery should be included before the jQuery SmartWizard JavaScript file._

```html
<script src="https://cdn.jsdelivr.net/npm/smartwizard@6/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
```

### Initialize the jQuery SmartWizard

```javascript
$(function() {
  // SmartWizard initialize
  $('#smartwizard').smartWizard();
});
```

### CSS Files Selection

You can see many CSS files at `dist/css/` folder and may be confused about which one to use. The answer is you can use any of them, all the CSS files are standalone. Only difference in these files is the theme. The file `../dist/css/smart_wizard_all.css` contains all the themes, while the `../dist/css/smart_wizard.css` only contains the default theme. Also other files are theme-specific files named with the respective theme names, like `../dist/css/smart_wizard_(theme name).css`.

All these files have corresponding min files that are compressed for size reduction, those files are recommended unless you don't want to customize the CSS yourself. Ex. `../dist/css/smart_wizard_all.min.css`

## Advanced Options

### Optional Parameters

```javascript
$('#smartwizard').smartWizard({
  selected: 0, // Initial selected step, 0 = first step
  theme: 'default', // theme for the wizard, related css need to include for other than default theme
  justified: true, // Nav menu justification. true/false
  autoAdjustHeight: true, // Automatically adjust content height
  backButtonSupport: true, // Enable the back button support
  enableUrlHash: true, // Enable selection of the step based on url hash
  transition: {
    animation: 'none', // Effect on navigation, none|fade|slideHorizontal|slideVertical|slideSwing|css
    speed: '400', // Animation speed. Not used if animation is 'css'
    easing: '', // Animation easing. Not supported without a jQuery easing plugin
    prefixCss: '', // Only used if animation is 'css'. Animation CSS prefix
    fwdShowCss: '', // Only used if animation is 'css'. Step show Animation CSS on forward direction
    fwdHideCss: '', // Only used if animation is 'css'. Step hide Animation CSS on forward direction
    bckShowCss: '', // Only used if animation is 'css'. Step show Animation CSS on backward direction
    bckHideCss: '', // Only used if animation is 'css'. Step hide Animation CSS on backward direction
  },
  toolbar: {
    position: 'bottom', // none|top|bottom|both
    showNextButton: true, // show/hide a Next button
    showPreviousButton: true, // show/hide a Previous button
    extraHtml: '' // Extra html to show on toolbar
  },
  anchor: {
    enableNavigation: true, // Enable/Disable anchor navigation
    enableNavigationAlways: false, // Activates all anchors clickable always
    enableDoneState: true, // Add done state on visited steps
    markPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
    unDoneOnBackNavigation: false, // While navigate back, done state will be cleared
    enableDoneStateNavigation: true // Enable/Disable the done state navigation
  },
  keyboard: {
    keyNavigation: true, // Enable/Disable keyboard navigation
    keyLeft: [37], // Left key code
    keyRight: [39] // Right key code
  },
  lang: {
    next: 'Next',
    previous: 'Previous'
  },
  disabledSteps: [], // Array Steps disabled
  errorSteps: [], // Array Steps error
  warningSteps: [], // Array Steps warning
  hiddenSteps: [], // Hidden steps
  getContent: null // Callback function for content loading
});
```

### Ajax Content Implementation

External ajax based contents are supported using `getContent` callback function which is called before showing each step. The `getContent` callback function will receive 5 parameters:

- **stepIndex** - (integer) zero based index number of the steps
- **stepDirection** - (string) step direction (forward/backward)
- **stepPosition** - (string) step position (first/last/middle)
- **selStep** - (object) jQuery object of the anchor element to show
- **callback** - (function) the callback function which accepts HTML content as string


**Example code:**

```javascript
// Function to fetch the ajax content
function provideContent(idx, stepDirection, stepPosition, selStep, callback) {
  // You can use stepDirection to get ajax content on the forward movement and stepPosition to identify the step position
  if (stepDirection == 'forward' && stepPosition == 'middle') {
    let ajaxURL = "YOUR AJAX URL";
 
    // Ajax call to fetch your content
    $.ajax({
        method  : "GET",
        url     : ajaxURL,
        beforeSend: function( xhr ) {
            // Show the loader
            $('#smartwizard').smartWizard("loader", "show");
        }
    }).done(function( res ) {
        // Build the content HTML
        let html = `<div class="card w-100" >
                        <div class="card-body">
                            <p class="card-text">${res}</p>
                        </div>
                    </div>`;
 
        // Resolve the Promise with the tab content
        callback(html);
 
        // Hide the loader
        $('#smartwizard').smartWizard("loader", "hide");
    }).fail(function(err) {
        // Handle ajax error
 
        // Hide the loader
        $('#smartwizard').smartWizard("loader", "hide");
    });
  }
 
  // The callback must called in any case to procced the steps
  // The empty callback will not apply any dynamic contents to the steps
  callback();
}
 
// SmartWizard initialize with step content callback
$('#smartwizard').smartWizard({
  getContent: provideContent
});
```

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
Also themes Square and Dots have progressbar on the navigation element itself (It doesnt support multiple wizards ona single page for now). You can enable this by adding `nav-progress` CSS Class on the `nav` element

```html
<div id="smartwizard">
    <ul class="nav nav-progress"> <!-- <= Check here -->
        ...
    </ul>
    ...
</div>  
```

### Set colors using CSS variables

The colors on the jQuery Smart Wizard is cusomizable using CSS variables. You can overwrite the css variables by applying your own colors. Add the CSS colors on root element after including the jQuery Smart Wizard CSS.

```html
<link href="https://cdn.jsdelivr.net/npm/smartwizard@6/dist/css/smart_wizard_all.min.css" rel="stylesheet" type="text/css" />
 
<style>
  :root {
    --sw-border-color:  #eeeeee;
    --sw-toolbar-btn-color:  #ffffff;
    --sw-toolbar-btn-background-color:  #009EF7;
    --sw-anchor-default-primary-color:  #f8f9fa;
    --sw-anchor-default-secondary-color:  #b0b0b1;
    --sw-anchor-active-primary-color:  #009EF7;
    --sw-anchor-active-secondary-color:  #ffffff;
    --sw-anchor-done-primary-color:  #90d4fa;
    --sw-anchor-done-secondary-color:  #fefefe;
    --sw-anchor-disabled-primary-color:  #f8f9fa;
    --sw-anchor-disabled-secondary-color:  #dbe0e5;
    --sw-anchor-error-primary-color:  #dc3545;
    --sw-anchor-error-secondary-color:  #ffffff;
    --sw-anchor-warning-primary-color:  #ffc107;
    --sw-anchor-warning-secondary-color:  #ffffff;
    --sw-progress-color:  #009EF7;
    --sw-progress-background-color:  #f8f9fa;
    --sw-loader-color:  #009EF7;
    --sw-loader-background-color:  #f8f9fa;
    --sw-loader-background-wrapper-color:  rgba(255, 255, 255, 0.7);
  }
<style/>
```

### Extend transition animations

Moreover built-in animations jQuery Smart Wizard supports extending the transition animations with your own. Just add your function to `$.fn.smartWizard.transitions` variable. The paramters receives on the functions are:

- **elmToShow** - (object) tabContentObject of the element to show
- **elmToHide** - (object) tabContentObject of the element to hide
- **stepDirection** - (string) The direction of the navigation
- **wizardObj** - (object) Object of the main element
- **callback** - (function) The callback function to call when the animation is finished. Pass false if an error on processing the animation, the wizard will take the default options to continue.

```javascript
// Smart Wizard initialize using custom transition animation
$('#smartwizard').smartWizard({
    transition: {
      animation:'myAnimation'
    }}
});
 
// Add your custom animation function
$.fn.smartWizard.transitions.myAnimation = (elmToShow, elmToHide, stepDirection, wizardObj, callback) => {
  if (!$.isFunction(elmToShow.fadeOut)) { callback(false); return; }
 
  if (elmToHide) {
      elmToHide.fadeOut(wizardObj.options.transition.speed, wizardObj.options.transition.easing, () => {
          elmToShow.fadeIn(wizardObj.options.transition.speed, wizardObj.options.transition.easing, () => {
              callback();
          });
      });
  } else {
      elmToShow.fadeIn(wizardObj.options.transition.speed, wizardObj.options.transition.easing, () => {
          callback();
      });
  }
}
```

## Public Functions

jQuery SmartWizard has public methods that help to handle the Wizard from external controls.

### next

Navigates to next step

```javascript
$('#smartwizard').smartWizard("next");
```

### prev

Navigates to previous step

```javascript
$('#smartwizard').smartWizard("prev");
```

### reset

Reset the wizard to initial state

```javascript
$('#smartwizard').smartWizard("reset");
```

### goToStep

Allow you to go to a certain step. The function accepts 2 parameters:

- **stepIndex** - (integer) zero based index number of the steps to which to go
- **force** - (boolean) it will forcefully navigate to the step without checking if it is a visited step or not

```javascript
// Go to step without force
$('#smartwizard').smartWizard("goToStep", 3);

// Go to step with force
$('#smartwizard').smartWizard("goToStep", 3, true);
```

### setOptions

Allow you to set the options dynamically.

```javascript
// Change theme
var options = {
  theme: 'arrows'
};
$('#smartwizard').smartWizard("setOptions", options);

// Change animation
var options = {
  transition: {
    animation: 'slideHorizontal'
  },
};
$('#smartwizard').smartWizard("setOptions", options);
```

### getOptions

Gets the jQuery SmartWizard options

```javascript
let options = $('#smartwizard').smartWizard("getOptions");
console.log(options);
```

### getStepInfo

Gets the jQuery SmartWizard step info. Ex: `{ currentStep: 1, totalSteps: 4 }`

```javascript
let stepInfo = $('#smartwizard').smartWizard("getStepInfo");
console.log(stepInfo);
```

### setState

Set the state of a step. Parameters are array of step index and name of state (default/active/done/disable/hidden/error/warning).

```javascript
// Disable step
$('#smartwizard').smartWizard("setState", [1,3], "disable");
```

### unsetState

Unset the state of a step. Parameters are array of step index and name of state (default/active/done/disable/hidden/error/warning).

```javascript
// Enable step
$('#smartwizard').smartWizard("unsetState", [1,3], "disable");
```

### loader

Allow you to show/hide the built-in loader animation.

```javascript
// Show the loader
$('#smartwizard').smartWizard("loader", "show");

// Hide the loader
$('#smartwizard').smartWizard("loader", "hide");
```

### fixHeight

Adjust the content height of the current step.

```javascript
$('#smartwizard').smartWizard("fixHeight");
```

## Parameters

### selected

**(integer)** Initial selected step, 0 = first step. Default: `0`

### theme

**(string)** Theme for the wizard. Default: `'default'`

### justified

**(boolean)** Nav menu justification. Default: `true`

### autoAdjustHeight

**(boolean)** Automatically adjust content height. Default: `true`

### backButtonSupport

**(boolean)** Enable the back button support. Default: `true`

### enableUrlHash

**(boolean)** Enable selection of the step based on url hash. Default: `true`

### transition

**(object)** Settings for transition animation with the following options:

- **animation** - (string) Effect on navigation
- **speed** - (string) Animation speed
- **easing** - (string) Animation easing
- **prefixCss** - (string) Animation CSS prefix
- **fwdShowCss** - (string) Step show Animation CSS on forward
- **fwdHideCss** - (string) Step hide Animation CSS on forward
- **bckShowCss** - (string) Step show Animation CSS on backward
- **bckHideCss** - (string) Step hide Animation CSS on backward


**Example Usage**
```javascript
// Using an built-in transition animation
$('#smartwizard').smartWizard({
  transition: {
      animation: 'slideHorizontal', // Effect on navigation, none|fade|slideHorizontal|slideVertical|slideSwing|css(Animation CSS class also need to specify)
  }
});
 
// Using an css transition animation. You need to include Animate.css 
$('#smartwizard').smartWizard({
  transition: {
      animation: 'css', // Effect on navigation, none|fade|slideHorizontal|slideVertical|slideSwing|css(Animation CSS class also need to specify)
      prefixCss: 'animate__animated animate__faster',
      fwdShowCss: 'animate__bounceIn',
      fwdHideCss: 'animate__bounceOut',
      bckShowCss: 'animate__bounceIn',
      bckHideCss: 'animate__bounceOut'
  }
});
```

### toolbar

**(object)** Settings for the toolbar with the following options:

- **position** - (string) none|top|bottom|both
- **showNextButton** - (boolean) show/hide a Next button
- **showPreviousButton** - (boolean) show/hide a Previous button
- **extraHtml** - (string) Extra html to show on toolbar

Example:

```javascript
function onFinish(){
  alert('Finish Clicked');
}

function onCancel(){
  $('#smartwizard').smartWizard("reset");
}

$('#smartwizard').smartWizard({
  toolbar: {
    showNextButton: true,
    showPreviousButton: true,
    position: 'both',
    extraHtml: `<button class="btn btn-success" onclick="onFinish()">Finish</button>
                <button class="btn btn-secondary" onclick="onCancel()">Cancel</button>`
  }
});
```

### anchor

**(object)** Settings for the anchor with the following options:

- **enableNavigation** - (boolean) Enable/Disable anchor navigation
- **enableNavigationAlways** - (boolean) Activates all anchors clickable all times
- **enableDoneState** - (boolean) Add done state on navigation
- **markPreviousStepsAsDone** - (boolean) When a step selected by url hash, all previous steps are marked done
- **unDoneOnBackNavigation** - (boolean) While navigate back done step after active step will be cleared
- **enableDoneStateNavigation** - (boolean) Enable/Disable the done steps navigation

**Example Usage**
```javascript
$('#smartwizard').smartWizard({
  anchor: {
      anchorClickable: true, // Enable/Disable anchor navigation
      enableAllAnchors: false, // Activates all anchors clickable all times
      markDoneStep: true, // Add done state on navigation
      markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
      removeDoneStepOnNavigateBack: false, // While navigate back done step after active step will be cleared
      enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
  }
});
```

### keyboard

**(object)** Settings for the keyboard with the following options:

- **keyNavigation** - (boolean) Enable/Disable keyboard navigation
- **keyLeft** - (array) Left key code
- **keyRight** - (array) Right key code

**Example Usage**
```javascript
$('#smartwizard').smartWizard({
  keyboard: {
      keyNavigation: true, // Enable/Disable keyboard navigation(left and right keys are used if enabled)
      keyLeft: [37], // Left key code
      keyRight: [39] // Right key code
  }
});
```

### lang

**(object)** Language settings with the following options:

- **next** - (string) Next button label
- **previous** - (string) Previous button label

**Example Usage**
```javascript
$('#smartwizard').smartWizard({
  lang: { // Language variables for button
      next: 'Next',
      previous: 'Previous'
  }
});
```

### style
**(object)** The CSS class names are configurable but normally you don't have to change this.

**Example Usage**
```javascript
$('#smartwizard').smartWizard({
  style: { // CSS Class settings
    mainCss: 'sw',
    navCss: 'nav',
    navLinkCss: 'nav-link',
    contentCss: 'tab-content',
    contentPanelCss: 'tab-pane',
    themePrefixCss: 'sw-theme-',
    anchorDefaultCss: 'default',
    anchorDoneCss: 'done',
    anchorActiveCss: 'active',
    anchorDisabledCss: 'disabled',
    anchorHiddenCss: 'hidden',
    anchorErrorCss: 'error',
    anchorWarningCss: 'warning',
    justifiedCss: 'sw-justified',
    btnCss: 'sw-btn',
    btnNextCss: 'sw-btn-next',
    btnPrevCss: 'sw-btn-prev',
    loaderCss: 'sw-loading',
    progressCss: 'progress',
    progressBarCss: 'progress-bar',
    toolbarCss: 'toolbar',
    toolbarPrefixCss: 'toolbar-',
  }
});
```

### disabledSteps

**(array)** Steps disabled. Default value is `[]`.

```javascript
$('#smartwizard').smartWizard({
  disabledSteps: [0,1]
});
```

### errorSteps

**(array)** Step with errors. Default value is `[]`.

```javascript
$('#smartwizard').smartWizard({
  errorSteps: [1]
});
```

### warningSteps

**(array)** Step with warnings. Default value is `[]`.

```javascript
$('#smartwizard').smartWizard({
  warningSteps: [1]
});
```

### hiddenSteps

**(array)** Hidden steps. Default value is `[]`.

```javascript
$('#smartwizard').smartWizard({
  hiddenSteps: [2,3]
});
```

### getContent

**(function)** Callback function to provide step content. Default value is `null`.

```javascript
function provideContent(idx, stepDirection, stepPosition, selStep, callback) {
  callback();
}

$('#smartwizard').smartWizard({
  getContent: provideContent
});
```

## Events

### initialized

The `initialized` event triggers when the jQuery Smart Wizard is initialized.

```javascript
$("#smartwizard").on("initialized", function(e) {
  console.log("initialized");
});
```

### loaded

The `loaded` event triggers when the jQuery Smart Wizard is fully loaded.

```javascript
$("#smartwizard").on("loaded", function(e) {
  console.log("loaded");
});
```

### leaveStep

The `leaveStep` event triggers just before leaving from a step. You can cancel the event by returning `false`, so the navigation is also cancelled and the wizard will retain the current state.

The event will receive the following parameters:

- **anchorObject** - (object) jQuery object of the anchor element
- **currentStepIndex** - (integer) Index of the current step
- **nextStepIndex** - (integer) Index of the next step
- **stepDirection** - (string) Step direction

```javascript
$("#smartwizard").on("leaveStep", function(e, anchorObject, currentStepIndex, nextStepIndex, stepDirection) {
  return confirm("Do you want to leave the step " + currentStepIndex + "?");
});
```

### showStep

The `showStep` event triggers when a step is shown.

The event will receive the following parameters:

- **anchorObject** - (object) jQuery object of the anchor element
- **stepIndex** - (integer) Index of the step
- **stepDirection** - (string) Step direction
- **stepPosition** - (string) Step position

```javascript
$("#smartwizard").on("showStep", function(e, anchorObject, stepIndex, stepDirection, stepPosition) {
  alert("You are on step " + stepIndex + " now");
});
```

</div>