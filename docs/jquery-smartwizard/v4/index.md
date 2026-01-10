---
title: jQuery SmartWizard v4
description: The awesome jQuery step wizard plugin with Bootstrap support
---

# jQuery SmartWizard <span class="text-gray-400">v4</span>

The awesome jQuery step wizard plugin with Bootstrap support
<hr>

::: warning Unmaintained Version
This version is not maintained anymore. Please use the [latest version](/jquery-smartwizard/).
:::

Smart Wizard is a flexible and heavily customizable jQuery step wizard plugin with Bootstrap support.

## Installation

### NPM

```bash
npm install smartwizard@4.4.1
```

### Yarn

```bash
yarn add smartwizard@4.4.1
```

### Bower

```bash
bower install smartwizard#4.4.1
```

### Composer

```bash
composer require techlab/smartwizard:4.4.1
```

### CDN - jsDelivr

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/smartwizard@4.4.1/dist/css/smart_wizard.min.css" rel="stylesheet" type="text/css" />

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/smartwizard@4.4.1/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
```

### CDN - UNPKG

```html
<!-- CSS -->
<link href="https://unpkg.com/smartwizard@4.4.1/dist/css/smart_wizard.min.css" rel="stylesheet" type="text/css" />

<!-- JavaScript -->
<script src="https://unpkg.com/smartwizard@4.4.1/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
```

### Download

[Download jQuery Smart Wizard v4.4.1](https://github.com/techlab/SmartWizard/archive/v4.4.1.zip)

## Features

- Bootstrap 3 & 4 support
- Responsive themes
- Heavily customizable toolbar, option to add extra buttons
- Theme support with various themes included
- Customizable css styles
- Url navigation and step selection
- Public methods for external function call
- Enhanced event support
- In-built reset method
- Dynamically hide or disable steps
- Integratable to model window
- Ajax content loading with option to specify individual url for steps
- Keyboard navigation
- Easy navigation with step anchors and navigation buttons
- Multiple wizard instance on same page
- Auto content height adjustment
- Compatible with latest jQuery versions (jQuery 1.9+, jQuery 2+, jQuery 3+)
- Easy to implement, Minimal HTML required

## Documentation

### Requirements

1. [Bootstrap 3+](http://getbootstrap.com/getting-started/#download)
2. [jQuery](http://jquery.com/) (supports jQuery 1.9+, jQuery 2+, jQuery 3+)

### Include Smart Wizard JavaScript & CSS files

```html
<link href="../dist/css/smart_wizard.css" rel="stylesheet" type="text/css" />
<script src="../dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
```

For themed version:

```html
<link href="../dist/css/smart_wizard_theme_arrows.css" rel="stylesheet" type="text/css" />
```

### Initialize Smart Wizard

```javascript
$(document).ready(function(){
  $('#smartwizard').smartWizard();
});
```

### The HTML Markup

```html
<div id="smartwizard">
  <ul>
    <li><a href="#step-1">Step Title<br /><small>Step description</small></a></li>
    <li><a href="#step-2">Step Title<br /><small>Step description</small></a></li>
    <li><a href="#step-3">Step Title<br /><small>Step description</small></a></li>
    <li><a href="#step-4">Step Title<br /><small>Step description</small></a></li>
  </ul>

  <div>
    <div id="step-1">Step Content</div>
    <div id="step-2">Step Content</div>
    <div id="step-3">Step Content</div>
    <div id="step-4">Step Content</div>
  </div>
</div>
```

## Configuration

### Example: Smart Wizard Initialize with all option parameters

```javascript
$('#smartwizard').smartWizard({
  selected: 0, // Initial selected step, 0 = first step
  keyNavigation: true, // Enable/Disable keyboard navigation
  autoAdjustHeight: true, // Automatically adjust content height
  cycleSteps: false, // Allows to cycle the navigation of steps
  backButtonSupport: true, // Enable the back button support
  useURLhash: true, // Enable selection of the step based on url hash
  lang: {
    next: 'Next',
    previous: 'Previous'
  },
  toolbarSettings: {
    toolbarPosition: 'bottom', // none, top, bottom, both
    toolbarButtonPosition: 'right', // left, right
    showNextButton: true,
    showPreviousButton: true,
    toolbarExtraButtons: [
      $('<button></button>').text('Finish')
        .addClass('btn btn-info')
        .on('click', function(){
          alert('Finish button click');
        }),
      $('<button></button>').text('Cancel')
        .addClass('btn btn-danger')
        .on('click', function(){
          alert('Cancel button click');
        })
    ]
  },
  anchorSettings: {
    anchorClickable: true,
    enableAllAnchors: false,
    markDoneStep: true,
    enableAnchorOnDoneStep: true
  },
  contentURL: null, // Enables Ajax content loading
  disabledSteps: [],
  errorSteps: [],
  theme: 'dots',
  transitionEffect: 'fade', // none/slide/fade
  transitionSpeed: '400'
});
```

## Parameters

### Core Parameters

| Parameter | Description | Values | Default |
|-----------|-------------|--------|---------|
| `selected` | Specify the selected step on the first load | integer | `0` |
| `keyNavigation` | Enable/disable key navigation (left/right keys are used if enabled) | `true`/`false` | `true` |
| `autoAdjustHeight` | Automatically adjust content height | `true`/`false` | `true` |
| `cycleSteps` | Allows to cycle the navigation of steps | `true`/`false` | `false` |
| `backButtonSupport` | Enable the back button support | `true`/`false` | `true` |
| `useURLhash` | Enable selection of the step based on url hash | `true`/`false` | `true` |
| `showStepURLhash` | Show url hash based on step | `true`/`false` | `true` |
| `theme` | Name of the theme to use (remember to include the theme CSS) | String | `'default'` |
| `transitionEffect` | Animation effect on step navigation | `none`/`slide`/`fade` | `none` |
| `transitionSpeed` | Transition animation speed | Number or String | `400` |

### Ajax Content Parameters

| Parameter | Description | Values | Default |
|-----------|-------------|--------|---------|
| `contentURL` | Specify the ajax content url. Setting `null` will disable ajax contents. You can also add a `data-content-url` attribute to individual step anchors | `null` or valid URL | `null` |
| `contentCache` | Enable/disable caching of step contents on ajax calls. If `false`, content is fetched always from ajax url | `true`/`false` | `true` |
| `ajaxSettings` | Provide extra settings for step ajax content calls | Object as per [jQuery.ajax()](http://api.jquery.com/jquery.ajax/#jQuery-ajax-settings) | `{}` |

### Step State Parameters

| Parameter | Description | Values | Default |
|-----------|-------------|--------|---------|
| `disabledSteps` | An array of step numbers to show as disabled | Zero-based array of step index (e.g., `[2, 4]`) | `[]` |
| `errorSteps` | An array of step numbers to show as error steps | Zero-based array of step index (e.g., `[2, 4]`) | `[]` |
| `hiddenSteps` | An array of step numbers to be hidden | Zero-based array of step index (e.g., `[2, 4]`) | `[]` |

### Toolbar Settings

The `toolbarSettings` parameter is an object with the following properties:

| Parameter | Description | Default |
|-----------|-------------|---------|
| `toolbarPosition` | Position of the toolbar | `'bottom'` (options: `none`, `top`, `bottom`, `both`) |
| `toolbarButtonPosition` | Position of the toolbar buttons | `'right'` (options: `left`, `right`) |
| `showNextButton` | Show/hide the Next button | `true` |
| `showPreviousButton` | Show/hide the Previous button | `true` |
| `toolbarExtraButtons` | Specify extra buttons and their events to show on toolbar | `[]` |

### Anchor Settings

The `anchorSettings` parameter is an object with the following properties:

| Parameter | Description | Default |
|-----------|-------------|---------|
| `anchorClickable` | Enable or disable the click option on the step header anchors | `true` |
| `enableAllAnchors` | Enable all anchors on load | `false` |
| `markDoneStep` | Mark already visited steps as done | `true` |
| `markAllPreviousStepsAsDone` | When a step is selected by url hash, all previous steps are marked done | `true` |
| `removeDoneStepOnNavigateBack` | While navigating back, done step after active step will be cleared | `false` |
| `enableAnchorOnDoneStep` | Enable/disable the done steps navigation | `true` |

### Language Settings

The `lang` parameter is an object with the following properties:

| Parameter | Description | Default |
|-----------|-------------|---------|
| `next` | Text for next button | `'Next'` |
| `previous` | Text for previous button | `'Previous'` |

## Events

### Event Descriptions

| Event | Description | Parameters |
|-------|-------------|------------|
| `leaveStep` | Triggers when leaving a step. This is a decision-making event - based on its function return value (`true`/`false`), the current step navigation can be cancelled. | **Object**: object of the step anchor element<br>**Int**: Index of the step<br>**String**: Direction of the navigation (e.g., `forward`, `backward`) |
| `showStep` | Triggers when showing a step. | **Object**: object of the step anchor element<br>**Int**: Index of the step<br>**String**: Direction of the navigation (e.g., `forward`, `backward`). Passes empty string on page load and reset. |
| `beginReset` | Triggers when reset action starts. This is a decision-making event - based on its function return value (`true`/`false`), the reset action can be cancelled. | None |
| `endReset` | Triggers when reset action ends. | None |
| `themeChanged` | Triggers when theme is changed. | **String**: name of the theme |


### Event Initialize

```javascript
// Initialize Smart Wizard
$('#smartwizard').smartWizard();

// Initialize the leaveStep event
$("#smartwizard").on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
  return confirm("Do you want to leave the step " + stepNumber + "?");
});

// Initialize the showStep event
$("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection) {
  alert("You are on step " + stepNumber + " now");
});

// Initialize the beginReset event
$("#smartwizard").on("beginReset", function(e) {
  return confirm("Do you want to reset the wizard?");
});

// Initialize the endReset event
$("#smartwizard").on("endReset", function(e) {
  alert("endReset called");
});

// Initialize the themeChanged event
$("#smartwizard").on("themeChanged", function(e, theme) {
  alert("Theme changed. New theme name: " + theme);
});
```

## License

Released under the terms of the [MIT License](https://github.com/techlab/jquery-smartwizard/blob/master/LICENSE).
