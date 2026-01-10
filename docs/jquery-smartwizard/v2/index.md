---
title: jQuery SmartWizard v2
description: Smart and flexible jQuery step wizard plugin
---

# jQuery SmartWizard <span class="text-gray-400">v2</span>

Smart and flexible jQuery step wizard plugin
<hr>

::: warning Unmaintained Version
This version is not maintained anymore. Please use the [latest version](/jquery-smartwizard/).
:::

Smart Wizard is a flexible jQuery plugin for wizard-like interface.


## Downloads

[Download jQuery Smart Wizard v2.0.1](https://github.com/techlab/jquery-smartwizard/archive/v2.0.1.zip)

## Features

- Easy to implement, minimal HTML required
- Ajax contents loading option
- Cool animation effects on step navigation (none/fade/slide/slideleft)
- Keyboard navigation option
- Horizontal and vertical style step anchors
- Easy step input validation option
- Option to highlight error steps
- In-built message box
- Easy navigation with step anchors and navigation buttons
- Can have multiple wizards on same page
- Option to enable all steps on first load

## Getting Started

### Basic Initialization

```javascript
$('#wizard').smartWizard();
```

### With Options

```javascript
$('#wizard').smartWizard({
  // Properties
  selected: 0, // Selected Step, 0 = first step
  keyNavigation: true, // Enable/Disable key navigation
  enableAllSteps: false, // Enable/Disable all steps on first load
  transitionEffect: 'fade', // Effect on navigation: none/fade/slide/slideleft
  contentURL: null, // Specifying content url enables ajax content loading
  contentCache: true, // Cache step contents
  cycleSteps: false, // Cycle step navigation
  enableFinishButton: false, // Makes finish button enabled always
  errorSteps: [], // Array of step numbers to highlight as error steps
  labelNext: 'Next', // Label for Next button
  labelPrevious: 'Previous', // Label for Previous button
  labelFinish: 'Finish', // Label for Finish button
  
  // Events
  onLeaveStep: null, // Triggers when leaving a step
  onShowStep: null, // Triggers when showing a step
  onFinish: null // Triggers when Finish button is clicked
});
```

## Parameters

### Parameter Descriptions

| Parameter | Description | Values | Default |
|-----------|-------------|--------|---------|
| `selected` | Specify the selected step | integer | `0` |
| `keyNavigation` | Enable/disable key navigation (left/right keys are used if enabled) | `true` = enabled<br>`false` = disabled | `true` |
| `enableAllSteps` | Enable/disable all steps on first load | `true` = enabled<br>`false` = disabled | `false` |
| `transitionEffect` | Animation effect on step navigation | `none`/`fade`/`slide`/`slideleft` | `fade` |
| `contentURL` | Setting this property will enable ajax content loading. Setting `null` will disable ajax contents | `null` or a valid URL | `null` |
| `contentCache` | Enable caching of the content on ajax content mode. Contents are fetched from the URL only on first load of the step | `true` = enabled<br>`false` = disabled | `true` |
| `cycleSteps` | Allow cycling of step navigation | `true` = enabled<br>`false` = disabled | `false` |
| `enableFinishButton` | Make the finish button enabled always | `true` = enabled<br>`false` = disabled | `false` |
| `errorSteps` | An array of step numbers to highlight as error steps | Array of integers (e.g., `[2, 4]`) | `[]` |
| `labelNext` | Label for Next button | String | `'Next'` |
| `labelPrevious` | Label for Previous button | String | `'Previous'` |
| `labelFinish` | Label for Finish button | String | `'Finish'` |

## Events

### Event Descriptions

| Event | Description | Parameters | Default |
|-------|-------------|------------|---------|
| `onLeaveStep` | Triggers when leaving a step.<br><br>This is a decision-making event - based on its function return value (`true`/`false`), the current step navigation can be cancelled. | **Object**: object of the step anchor element. You can access the step number and step body element using this object | `null` |
| `onShowStep` | Triggers when showing a step.<br><br>This is a decision-making event - based on its function return value (`true`/`false`), the current step navigation can be cancelled. | **Object**: object of the step anchor element. You can access the step number and step body element using this object | `null` |
| `onFinish` | Triggers when the Finish button is clicked.<br><br>This is a decision-making event - based on its function return value (`true`/`false`), further actions can be cancelled.<br><br>**Note**: If the validation fails, you can cancel form submission and show an error message (see the form validation example).<br><br>If not set, clicking the finish button will submit the form in which the wizard is placed, and do nothing if a parent form is not found. | **Object Array**: an array of the object of all the step anchor elements | `null` |


## Installation

### Step 1: Include Files

```html
<head>
  <script type="text/javascript" src="jquery-1.4.2.min.js"></script>
  <link href="smart_wizard.css" rel="stylesheet" type="text/css">
  <script type="text/javascript" src="jquery.smartWizard-2.0.min.js"></script>
</head>
```

### Step 2: The JavaScript

```html
<head>
  <script type="text/javascript">
    $(document).ready(function() {
      // Initialize Smart Wizard
      $('#wizard').smartWizard();
    });
  </script>
</head>
```

### Step 3: The HTML

```html
<body>
  <div id="wizard" class="swMain">
    <ul>
      <li><a href="#step-1">
        <label class="stepNumber">1</label>
        <span class="stepDesc">
          Step 1<br />
          <small>Step 1 description</small>
        </span>
      </a></li>
      <li><a href="#step-2">
        <label class="stepNumber">2</label>
        <span class="stepDesc">
          Step 2<br />
          <small>Step 2 description</small>
        </span>
      </a></li>
      <li><a href="#step-3">
        <label class="stepNumber">3</label>
        <span class="stepDesc">
          Step 3<br />
          <small>Step 3 description</small>
        </span>
      </a></li>
      <li><a href="#step-4">
        <label class="stepNumber">4</label>
        <span class="stepDesc">
          Step 4<br />
          <small>Step 4 description</small>
        </span>
      </a></li>
    </ul>

    <div id="step-1">
      <h2 class="StepTitle">Step 1 Content</h2>
      <!-- step content -->
    </div>
    <div id="step-2">
      <h2 class="StepTitle">Step 2 Content</h2>
      <!-- step content -->
    </div>
    <div id="step-3">
      <h2 class="StepTitle">Step 3 Title</h2>
      <!-- step content -->
    </div>
    <div id="step-4">
      <h2 class="StepTitle">Step 4 Title</h2>
      <!-- step content -->
    </div>
  </div>
</body>
```

## Load Ajax Content

### Basic Ajax Loading

```javascript
$(document).ready(function() {
  // Initialize Smart Wizard with ajax content load
  $('#wizard').smartWizard({
    contentURL: 'services/ajaxcontents.php'
  });
});
```

The PHP service will receive `$step_number = $_REQUEST["step_number"];`

### Ajax with Cache Disabled

```javascript
$(document).ready(function() {
  // Initialize Smart Wizard with ajax content load and cache disabled
  $('#wizard').smartWizard({
    contentURL: 'services/ajaxcontents.php',
    contentCache: false
  });
});
```

## Input Validation

### Step Validation Example

```javascript
$(document).ready(function(){
  // Smart Wizard
  $('#wizard').smartWizard({
    onLeaveStep: leaveAStepCallback,
    onFinish: onFinishCallback
  });

  function leaveAStepCallback(obj){
    var step_num = obj.attr('rel'); // get the current step number
    return validateSteps(step_num); // return false to stay on step and true to continue navigation
  }

  function onFinishCallback(){
    if(validateAllSteps()){
      $('form').submit();
    }
  }

  // Your Step validation logic
  function validateSteps(stepnumber){
    var isStepValid = true;
    // validate step 1
    if(stepnumber == 1){
      // Your step validation logic
      // set isStepValid = false if has errors
    }
    // ... validate other steps
    return isStepValid;
  }

  function validateAllSteps(){
    var isStepValid = true;
    // all step validation logic
    return isStepValid;
  }
});
```

## Highlight Error Steps

You can highlight specific steps as error steps using the `setError` method:

```javascript
$('#wizard').smartWizard('setError', {stepnum: 3, iserror: true});
```

### Example Implementation

```javascript
$(document).ready(function() {
  // Initialize Smart Wizard
  $('#wizard').smartWizard();

  function setError(stepnumber){
    $('#wizard').smartWizard('setError', {stepnum: stepnumber, iserror: true});
  }
});
```

## Show Message Inside the Wizard

Display messages inside the wizard using the `showMessage` method:

```javascript
$('#wizard').smartWizard('showMessage', 'Hello! World');
```

### Example Implementation

```javascript
$(document).ready(function() {
  // Initialize Smart Wizard
  $('#wizard').smartWizard();

  function showWizardMessage(){
    var myMessage = 'Hello this is my message';
    // You can call this line wherever to show message inside the wizard
    $('#wizard').smartWizard('showMessage', myMessage);
  }
});
```

## License

Released under the terms of the [MIT License](https://github.com/techlab/jquery-smartwizard/blob/master/LICENSE).
