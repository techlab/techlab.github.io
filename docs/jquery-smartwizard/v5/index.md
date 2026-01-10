---
title: jQuery SmartWizard v5
description: The awesome step wizard plugin for jQuery
head:
  - - meta
    - name: description
      content: The awesome step wizard plugin for jQuery
  - - meta
    - name: keywords
      content: wizard, step, jQuery, jQuery plugin, jQuery wizard, jQuery step wizard
---

# jQuery SmartWizard <span class="text-gray-400">v5</span>

The awesome jQuery step wizard plugin
<hr>

::: warning Unmaintained Version
This version is not maintained anymore. Please use the [latest version](/jquery-smartwizard/).
:::

jQuery Smart Wizard is an accessible step wizard plugin for jQuery. Provides a neat and stylish interface for your forms, checkout screen, registration steps, etc.

## Installation

### NPM

```bash
npm install smartwizard@5
```

### CDN - jsDelivr

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/css/smart_wizard_all.min.css" rel="stylesheet" type="text/css" />

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
```
## Features
- Standalone CSS
- Accessible controls
- Bootstrap compatible
- Cool themes included
- Dark mode
- URL navigation and selection
- Event support
- Ajax content support
- Keyboard navigation
- Auto height adjustment
- Cool animations (fade/slide-horizontal/slide-vertical/slide-swing)
- External anchor support
- Customizable toolbar, option to add extra buttons
- Responsive design
- reset option
- Easy navigation with step anchors and navigation buttons
- Easy to implement and minimal HTML required
- Supports all modern browsers
- Compatible with all jQuery versions (jQuery 1.11.1+, jQuery 2+, jQuery 3.5+)

## Documentation

### Requirements

- [jQuery](http://jquery.com/) (supports jQuery 1.11.1+, jQuery 2+, jQuery 3.5+)

### Include jQuery SmartWizard CSS

```html
<link href="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/css/smart_wizard_all.min.css" rel="stylesheet" type="text/css" />
```

### The HTML Markup

```html
<div id="smartwizard">
  <ul class="nav">
    <li>
      <a class="nav-link" href="#step-1">Step 1</a>
    </li>
    <li>
      <a class="nav-link" href="#step-2">Step 2</a>
    </li>
    <li>
      <a class="nav-link" href="#step-3">Step 3</a>
    </li>
    <li>
      <a class="nav-link" href="#step-4">Step 4</a>
    </li>
  </ul>

  <div class="tab-content">
    <div id="step-1" class="tab-pane" role="tabpanel">
      Step content
    </div>
    <div id="step-2" class="tab-pane" role="tabpanel">
      Step content
    </div>
    <div id="step-3" class="tab-pane" role="tabpanel">
      Step content
    </div>
    <div id="step-4" class="tab-pane" role="tabpanel">
      Step content
    </div>
  </div>
</div>
```

### Include jQuery

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

### Include jQuery SmartWizard JavaScript

```html
<script src="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>
```

### Initialize the jQuery SmartWizard

```javascript
$(document).ready(function(){
  // SmartWizard initialize
  $('#smartwizard').smartWizard();
});
```

### CSS Files Selection

You can see many CSS files at `dist/css/` folder. All the CSS files are standalone. The only difference is the theme.

- `../dist/css/smart_wizard_all.css` - contains all themes
- `../dist/css/smart_wizard.css` - contains only the default theme
- `../dist/css/smart_wizard_(theme name).css` - theme-specific files

All these files have corresponding min files that are compressed for size reduction. Ex. `../dist/css/smart_wizard_all.min.css`

## Advanced Options

### Optional parameters
```javascript
$('#smartwizard').smartWizard({
  selected: 0, // Initial selected step, 0 = first step
  theme: 'default', // theme for the wizard, related css need to include for other than default theme
  justified: true, // Nav menu justification. true/false
  darkMode:false, // Enable/disable Dark Mode if the theme supports. true/false
  autoAdjustHeight: true, // Automatically adjust content height
  cycleSteps: false, // Allows to cycle the navigation of steps
  backButtonSupport: true, // Enable the back button support
  enableURLhash: true, // Enable selection of the step based on url hash
  transition: {
      animation: 'none', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
      speed: '400', // Transion animation speed
      easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
  },
  toolbarSettings: {
      toolbarPosition: 'bottom', // none, top, bottom, both
      toolbarButtonPosition: 'right', // left, right, center
      showNextButton: true, // show/hide a Next button
      showPreviousButton: true, // show/hide a Previous button
      toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
  },
  anchorSettings: {
      anchorClickable: true, // Enable/Disable anchor navigation
      enableAllAnchors: false, // Activates all anchors clickable all times
      markDoneStep: true, // Add done state on navigation
      markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
      removeDoneStepOnNavigateBack: false, // While navigate back done step after active step will be cleared
      enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
  },
  keyboardSettings: {
      keyNavigation: true, // Enable/Disable keyboard navigation(left and right keys are used if enabled)
      keyLeft: [37], // Left key code
      keyRight: [39] // Right key code
  },
  lang: { // Language variables for button
      next: 'Next',
      previous: 'Previous'
  },
  disabledSteps: [], // Array Steps disabled
  errorSteps: [], // Highlight step with errors
  hiddenSteps: [] // Hidden steps
});
```

### Implement Ajax Contents

Ajax is not built-in, instead you can listen to `stepContent` event and provide the ajax contents. This is usefull to load ajax contents and give you full control on the ajax calls. The `stepContent` event can accept Promise as return or you can return the string as the content of the step. The event will be passed with three parameters, `anchorObject` the jQuery object of the selected step, `stepIndex` the zero based index number of the steps and `stepDirection` to give the direction of navigation. Here is an ajax call example with Promise.

```javascript
// Ajax content loading with "stepContent" event
$("#smartwizard").on("stepContent", function(e, anchorObject, stepIndex, stepDirection) {
 
    // Read data value from the anchor element
    var repo    = anchorObject.data('repo');
    var ajaxURL = "https://api.npms.io/v2/package/" + repo;
 
    // Return a promise object
    return new Promise((resolve, reject) => {
 
      // Ajax call to fetch your content
      $.ajax({
          method  : "GET",
          url     : ajaxURL,
          beforeSend: function( xhr ) {
              // Show the loader
              $('#smartwizard').smartWizard("loader", "show");
          }
      }).done(function( res ) {
          var html = 'Ajax data about ' + repo + ' loaded from GitHub';
          html += 'URL:' + ajaxURL;
          html += 'Name:' + res.collected.metadata.name;
 
          // Resolve the Promise with the content
          resolve(html);
 
          // Hide the loader
          $('#smartwizard').smartWizard("loader", "hide");
      }).fail(function(err) {
 
          // Reject the Promise with error message to show as content
          reject( "An error loading the resource" );
 
          // Hide the loader
          $('#smartwizard').smartWizard("loader", "hide");
      });
 
    });
});


// SmartWizard initialize
$('#smartwizard').smartWizard();
```

## Public functions
There are public methods that are handy to do certain functions

#### **goToStep**
Allow you to go to a certain step.

```javascript
// Go to step
$('#smartwizard').smartWizard("goToStep", 3);
```

#### **setOptions**
Allow you to set the options dynamically.

```javascript
// Change theme
var options = {
  theme: 'dark'
};
$('#smartwizard').smartWizard("setOptions", options);
 
// Change animation
var options = {
  transition: {
      animation: 'slide-h'
  },
};
$('#smartwizard').smartWizard("setOptions", options);
```

#### **next**
Navigates to next step

```javascript
// Navigate next
$('#smartwizard').smartWizard("next");
```

#### **prev**
Navigates to previous step

```javascript
// Navigate previous
$('#smartwizard').smartWizard("prev");
```

#### **reset**
Reset the wizard to initial state

```javascript
// Reset wizard
$('#smartwizard').smartWizard("reset");
```

#### **stepState**
Change the state of a step

```javascript
// Disable step
$('#smartwizard').smartWizard("stepState", [1,3], "disable");
 
// Hide step
$('#smartwizard').smartWizard("stepState", [2], "hide");
```

#### **getStepIndex**
Gets the current step index

```javascript
// Get current step index
var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
```

#### **loader**
Allow you to show/hide the built-n loader animation.

```javascript
// Show the loader
$('#smartwizard').smartWizard("loader", "show");
 
// Hide the loader
$('#smartwizard').smartWizard("loader", "hide");
```

## Parameters

#### selected
`(integer)` Specify the selected step on the first load. Default value is 0.

#### theme
`(string)` Theme for the wizard. Default value is 'default'.

#### justified
`(boolean)` Nav menu justification. Default value is true.

#### darkMode
`(boolean)` Enable/disable Dark Mode if the theme supports. Default value is false.

#### autoAdjustHeight
`(boolean)` Automatically adjust content height. Default value is true.

#### cycleSteps
`(boolean)` Keep the navigation cycle through. Default value is true.

#### backButtonSupport
`(boolean)` Enable the back button support. Default value is true.

#### enableURLhash
`(boolean)` Enable selection of the step based on url hash. Default value is true.

#### transition
`(object)` Settings for the transition with the following options:

animation - `(string)` Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
speed - `(number)` Transion animation speed
easing - `(string)` Transition animation easing. Not supported without a jQuery easing plugin  

EXAMPLE USAGE
```javascript
$('#smartwizard').smartWizard({
  transition: {
      animation: 'none', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
      speed: '400', // Transion animation speed
      easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
  }
});
```

#### toolbarSettings
`(object)` Settings for the toolbar with the following options:

toolbarPosition - `(string)` Position of the toolbar (none, top, bottom, both)
toolbarButtonPosition - `(string)` Button alignment of the toolbar (left, right, center)  
showNextButton - `(boolean)` show/hide a Next button  
showPreviousButton - `(boolean)` show/hide a Previous button  
toolbarExtraButtons - `(array of jQuery object)` Extra buttons to show on toolbar, array of jQuery input/buttons elements

EXAMPLE USAGE
```javascript
$('#smartwizard').smartWizard({
  toolbarSettings: {
      toolbarPosition: 'bottom', // none, top, bottom, both
      toolbarButtonPosition: 'right', // left, right, center
      showNextButton: true, // show/hide a Next button
      showPreviousButton: true, // show/hide a Previous button
      toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
  }
});
```

#### anchorSettings
`(object)` Settings for the anchor with the following options:

anchorClickable - `(boolean)` Enable/Disable anchor navigation  
enableAllAnchors - `(boolean)` Activates all anchors clickable all times  
markDoneStep - `(boolean)` Add done state on navigation  
markAllPreviousStepsAsDone - `(boolean)` When a step selected by url hash, all previous steps are marked done  
removeDoneStepOnNavigateBack - `(boolean)` While navigate back done step after active step will be cleared  
enableAnchorOnDoneStep - `(boolean)` Enable/Disable the done steps navigation

EXAMPLE USAGE
```javascript
$('#smartwizard').smartWizard({
  anchorSettings: {
      anchorClickable: true, // Enable/Disable anchor navigation
      enableAllAnchors: false, // Activates all anchors clickable all times
      markDoneStep: true, // Add done state on navigation
      markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
      removeDoneStepOnNavigateBack: false, // While navigate back done step after active step will be cleared
      enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
  }
});
```

#### keyboardSettings
`(object)` Settings for the keyboard with the following options:

keyNavigation - `(boolean)` Enable/Disable keyboard navigation  
keyLeft - `(array)` Left key code  
keyRight - `(array)` Right key code  

EXAMPLE USAGE
```javascript
$('#smartwizard').smartWizard({
  keyboardSettings: {
      keyNavigation: true, // Enable/Disable keyboard navigation(left and right keys are used if enabled)
      keyLeft: [37], // Left key code
      keyRight: [39] // Right key code
  }
});
```

#### lang
`(object)` Language settings with the following options:

next - `(string)` Next button label  
previous - `(string)` Previous button label  

EXAMPLE USAGE
```javascript
$('#smartwizard').smartWizard({
  lang: { // Language variables for button
      next: 'Next',
      previous: 'Previous'
  }
});
```

#### disabledSteps
`(array)` Steps disabled. Default value is [].

EXAMPLE USAGE
```javascript
$('#smartwizard').smartWizard({
  disabledSteps: [0,1] // Array Steps disabled
});
```

#### errorSteps
`(array)` Step with errors. Default value is [].

EXAMPLE USAGE
```javascript
$('#smartwizard').smartWizard({
  errorSteps: [1] // Highlight step with errors
});
```

#### hiddenSteps
`(array)` Hidden steps. Default value is [].

EXAMPLE USAGE
```javascript
$('#smartwizard').smartWizard({
  hiddenSteps: [2,3] // Hidden steps
});
```

## Events

### leaveStep
The leaveStep event triggers just before leaving from a step. You can cancel the event by returning false, so the navigation is also be cancelled and the wizard will retain the current state.

EVENT PARAMETERS  
The event will receive the following parameters:

anchorObject - `(object)` jQuery object of the anchor element 
currentStepNumber - `(integer)` Index of the step  
nextStepNumber - `(integer)` Index of the step  
stepDirection - `(string)` Step direction  

EVENT EXAMPLE
```javascript
// Initialize the leaveStep event
$("#smartwizard").on("leaveStep", function(e, anchorObject, currentStepIndex, nextStepIndex, stepDirection) {
   return confirm("Do you want to leave the step " + currentStepIndex + "?");
});
```

#### showStep
The showStep event triggers when a step is shown.

EVENT PARAMETERS  
The event will receive the following parameters:

anchorObject - `(object)` jQuery object of the anchor element  
stepIndex - `(integer)` Index of the step  
stepDirection - `(string)` Step direction  

EVENT EXAMPLE
```javascript
// Initialize the showStep event
$("#smartwizard").on("showStep", function(e, anchorObject, stepIndex, stepDirection) {
   alert("You are on step "+stepIndex+" now");
});
```

#### stepContent
The stepContent event triggers when a step content is about to load. This event will allow to pass a string value as return parameter to be used as the content of the step. You can also pass a Promise object and on the Promise completion the result will be used as the content of the step. This is usefull to load ajax contents and give more control on the ajax calls. Please see the ajax example.

EVENT PARAMETERS  
The event will receive the following parameters:

anchorObject - `(object)` jQuery object of the anchor element  
stepIndex - `(integer)` Index of the step  
stepDirection - `(string)` Step direction  

EVENT EXAMPLE
```javascript
// Initialize the stepContent event
$("#smartwizard").on("stepContent", function(e, anchorObject, stepIndex, stepDirection) {
   return "Here is the content for step " + stepIndex;
});
```

## License

Released under the terms of the [MIT License](https://github.com/techlab/jquery-smartwizard/blob/master/LICENSE).
