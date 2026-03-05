---
title: jQuery SmartWizard v6 - Demos
description: Interactive demos of jQuery SmartWizard v6
head:
  - - meta
    - name: description
      content: The awesome step wizard plugin for jQuery
  - - meta
    - name: keywords
      content: wizard, step, jQuery, jQuery plugin, jQuery wizard, jQuery step wizard
  - - link
    - rel: stylesheet
      href: 'https://cdn.jsdelivr.net/npm/smartwizard@6/dist/css/smart_wizard_all.min.css'
  - - link
    - rel: stylesheet
      href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
---

# jQuery SmartWizard <span class="text-gray-400">v6</span> Demos

Interactive demos of jQuery SmartWizard

:::details jQuery SmartWizard Settings
<div class="settings-panel grid grid-cols-3 gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
    <!-- Theme & Animation -->
    <div class="settings-section">
      <h4>Appearance</h4>
      <div class="form-group">
        <label for="theme_selector">Theme</label>
        <select id="theme_selector">
          <option value="basic">Basic</option>
          <option value="arrows" selected>Arrows</option>
          <option value="square">Square</option>
          <option value="round">Round</option>
          <option value="dots">Dots</option>
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
          <option value="Blue (Default)" data-colors="eyItLXN3LXRvb2xiYXItYnRuLWJhY2tncm91bmQtY29sb3IiOiIjMDA5RUY3IiwiLS1zdy1hbmNob3ItZGVmYXVsdC1wcmltYXJ5LWNvbG9yIjoiI2Y4ZjlmYSIsIi0tc3ctYW5jaG9yLWRlZmF1bHQtc2Vjb25kYXJ5LWNvbG9yIjoiI2IwYjBiMSIsIi0tc3ctYW5jaG9yLWFjdGl2ZS1wcmltYXJ5LWNvbG9yIjoiIzAwOUVGNyIsIi0tc3ctYW5jaG9yLWFjdGl2ZS1zZWNvbmRhcnktY29sb3IiOiIjZmZmZmZmIiwiLS1zdy1hbmNob3ItZG9uZS1wcmltYXJ5LWNvbG9yIjoiIzkwZDRmYSIsIi0tc3ctYW5jaG9yLWRvbmUtc2Vjb25kYXJ5LWNvbG9yIjoiI2ZlZmVmZSIsIi0tc3ctcHJvZ3Jlc3MtY29sb3IiOiIjMDA5RUY3IiwiLS1zdy1sb2FkZXItY29sb3IiOiIjMDA5RUY3In0=">Blue (Default)</option><option value="Green" data-colors="eyItLXN3LWJvcmRlci1jb2xvciI6IiNlZWVlZWUiLCItLXN3LXRvb2xiYXItYnRuLWNvbG9yIjoiI2ZmZmZmZiIsIi0tc3ctdG9vbGJhci1idG4tYmFja2dyb3VuZC1jb2xvciI6IiMwMDg5MzEiLCItLXN3LWFuY2hvci1kZWZhdWx0LXByaW1hcnktY29sb3IiOiIjZjhmOWZhIiwiLS1zdy1hbmNob3ItZGVmYXVsdC1zZWNvbmRhcnktY29sb3IiOiIjYjBiMGIxIiwiLS1zdy1hbmNob3ItYWN0aXZlLXByaW1hcnktY29sb3IiOiIjNzhjMDQzIiwiLS1zdy1hbmNob3ItYWN0aXZlLXNlY29uZGFyeS1jb2xvciI6IiNmZmZmZmYiLCItLXN3LWFuY2hvci1kb25lLXByaW1hcnktY29sb3IiOiIjNTg4ODM1IiwiLS1zdy1hbmNob3ItZG9uZS1zZWNvbmRhcnktY29sb3IiOiIjYzJjMmMyIiwiLS1zdy1hbmNob3ItZGlzYWJsZWQtcHJpbWFyeS1jb2xvciI6IiNmOGY5ZmEiLCItLXN3LWFuY2hvci1kaXNhYmxlZC1zZWNvbmRhcnktY29sb3IiOiIjZGJlMGU1IiwiLS1zdy1hbmNob3ItZXJyb3ItcHJpbWFyeS1jb2xvciI6IiNkYzM1NDUiLCItLXN3LWFuY2hvci1lcnJvci1zZWNvbmRhcnktY29sb3IiOiIjZmZmZmZmIiwiLS1zdy1hbmNob3Itd2FybmluZy1wcmltYXJ5LWNvbG9yIjoiI2ZmYzEwNyIsIi0tc3ctYW5jaG9yLXdhcm5pbmctc2Vjb25kYXJ5LWNvbG9yIjoiI2ZmZmZmZiIsIi0tc3ctcHJvZ3Jlc3MtY29sb3IiOiIjNzhjMDQzIiwiLS1zdy1wcm9ncmVzcy1iYWNrZ3JvdW5kLWNvbG9yIjoiI2Y4ZjlmYSIsIi0tc3ctbG9hZGVyLWNvbG9yIjoiIzc4YzA0MyIsIi0tc3ctbG9hZGVyLWJhY2tncm91bmQtY29sb3IiOiIjZjhmOWZhIiwiLS1zdy1sb2FkZXItYmFja2dyb3VuZC13cmFwcGVyLWNvbG9yIjoicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIn0=">Green</option><option value="Yellow" data-colors="eyItLXN3LWJvcmRlci1jb2xvciI6IiNlZWVlZWUiLCItLXN3LXRvb2xiYXItYnRuLWNvbG9yIjoiI2ZmZmZmZiIsIi0tc3ctdG9vbGJhci1idG4tYmFja2dyb3VuZC1jb2xvciI6IiNlNGE3MDciLCItLXN3LWFuY2hvci1kZWZhdWx0LXByaW1hcnktY29sb3IiOiIjZjhmOWZhIiwiLS1zdy1hbmNob3ItZGVmYXVsdC1zZWNvbmRhcnktY29sb3IiOiIjYjBiMGIxIiwiLS1zdy1hbmNob3ItYWN0aXZlLXByaW1hcnktY29sb3IiOiIjZmJiZDE5IiwiLS1zdy1hbmNob3ItYWN0aXZlLXNlY29uZGFyeS1jb2xvciI6IiNmZmZmZmYiLCItLXN3LWFuY2hvci1kb25lLXByaW1hcnktY29sb3IiOiIjZTRhNzA3IiwiLS1zdy1hbmNob3ItZG9uZS1zZWNvbmRhcnktY29sb3IiOiIjZGJlMGU1IiwiLS1zdy1hbmNob3ItZGlzYWJsZWQtcHJpbWFyeS1jb2xvciI6IiNmOGY5ZmEiLCItLXN3LWFuY2hvci1kaXNhYmxlZC1zZWNvbmRhcnktY29sb3IiOiIjZGJlMGU1IiwiLS1zdy1hbmNob3ItZXJyb3ItcHJpbWFyeS1jb2xvciI6IiNkYzM1NDUiLCItLXN3LWFuY2hvci1lcnJvci1zZWNvbmRhcnktY29sb3IiOiIjZmZmZmZmIiwiLS1zdy1hbmNob3Itd2FybmluZy1wcmltYXJ5LWNvbG9yIjoiI2ZmYzEwNyIsIi0tc3ctYW5jaG9yLXdhcm5pbmctc2Vjb25kYXJ5LWNvbG9yIjoiI2ZmZmZmZiIsIi0tc3ctcHJvZ3Jlc3MtY29sb3IiOiIjZmJiZDE5IiwiLS1zdy1wcm9ncmVzcy1iYWNrZ3JvdW5kLWNvbG9yIjoiI2Y4ZjlmYSIsIi0tc3ctbG9hZGVyLWNvbG9yIjoiI2ZiYmQxOSIsIi0tc3ctbG9hZGVyLWJhY2tncm91bmQtY29sb3IiOiIjZjhmOWZhIiwiLS1zdy1sb2FkZXItYmFja2dyb3VuZC13cmFwcGVyLWNvbG9yIjoicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIn0=">Yellow</option><option value="Red" data-colors="eyItLXN3LWJvcmRlci1jb2xvciI6IiNlZWVlZWUiLCItLXN3LXRvb2xiYXItYnRuLWNvbG9yIjoiI2ZmZmZmZiIsIi0tc3ctdG9vbGJhci1idG4tYmFja2dyb3VuZC1jb2xvciI6IiNmNDQzMzYiLCItLXN3LWFuY2hvci1kZWZhdWx0LXByaW1hcnktY29sb3IiOiIjZjhmOWZhIiwiLS1zdy1hbmNob3ItZGVmYXVsdC1zZWNvbmRhcnktY29sb3IiOiIjYjBiMGIxIiwiLS1zdy1hbmNob3ItYWN0aXZlLXByaW1hcnktY29sb3IiOiIjZjQ0MzM2IiwiLS1zdy1hbmNob3ItYWN0aXZlLXNlY29uZGFyeS1jb2xvciI6IiNmZmZmZmYiLCItLXN3LWFuY2hvci1kb25lLXByaW1hcnktY29sb3IiOiIjZjg4NzdmIiwiLS1zdy1hbmNob3ItZG9uZS1zZWNvbmRhcnktY29sb3IiOiIjZmVmZWZlIiwiLS1zdy1hbmNob3ItZGlzYWJsZWQtcHJpbWFyeS1jb2xvciI6IiNmOGY5ZmEiLCItLXN3LWFuY2hvci1kaXNhYmxlZC1zZWNvbmRhcnktY29sb3IiOiIjZGJlMGU1IiwiLS1zdy1hbmNob3ItZXJyb3ItcHJpbWFyeS1jb2xvciI6IiNkYzM1NDUiLCItLXN3LWFuY2hvci1lcnJvci1zZWNvbmRhcnktY29sb3IiOiIjZmZmZmZmIiwiLS1zdy1hbmNob3Itd2FybmluZy1wcmltYXJ5LWNvbG9yIjoiI2ZmYzEwNyIsIi0tc3ctYW5jaG9yLXdhcm5pbmctc2Vjb25kYXJ5LWNvbG9yIjoiI2ZmZmZmZiIsIi0tc3ctcHJvZ3Jlc3MtY29sb3IiOiIjZjQ0MzM2IiwiLS1zdy1wcm9ncmVzcy1iYWNrZ3JvdW5kLWNvbG9yIjoiI2Y4ZjlmYSIsIi0tc3ctbG9hZGVyLWNvbG9yIjoiI2Y0NDMzNiIsIi0tc3ctbG9hZGVyLWJhY2tncm91bmQtY29sb3IiOiIjZjhmOWZhIiwiLS1zdy1sb2FkZXItYmFja2dyb3VuZC13cmFwcGVyLWNvbG9yIjoicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIn0=">Red</option><option value="Lite Blue" data-colors="eyItLXN3LWJvcmRlci1jb2xvciI6IiNlZWVlZWUiLCItLXN3LXRvb2xiYXItYnRuLWNvbG9yIjoiI2ZmZmZmZiIsIi0tc3ctdG9vbGJhci1idG4tYmFja2dyb3VuZC1jb2xvciI6IiMwY2I2ZDgiLCItLXN3LWFuY2hvci1kZWZhdWx0LXByaW1hcnktY29sb3IiOiIjZjhmOWZhIiwiLS1zdy1hbmNob3ItZGVmYXVsdC1zZWNvbmRhcnktY29sb3IiOiIjYjBiMGIxIiwiLS1zdy1hbmNob3ItYWN0aXZlLXByaW1hcnktY29sb3IiOiIjMDBkNWZmIiwiLS1zdy1hbmNob3ItYWN0aXZlLXNlY29uZGFyeS1jb2xvciI6IiNmZmZmZmYiLCItLXN3LWFuY2hvci1kb25lLXByaW1hcnktY29sb3IiOiIjMGNiNmQ4IiwiLS1zdy1hbmNob3ItZG9uZS1zZWNvbmRhcnktY29sb3IiOiIjZGJlMGU1IiwiLS1zdy1hbmNob3ItZGlzYWJsZWQtcHJpbWFyeS1jb2xvciI6IiNmOGY5ZmEiLCItLXN3LWFuY2hvci1kaXNhYmxlZC1zZWNvbmRhcnktY29sb3IiOiIjZGJlMGU1IiwiLS1zdy1hbmNob3ItZXJyb3ItcHJpbWFyeS1jb2xvciI6IiNkYzM1NDUiLCItLXN3LWFuY2hvci1lcnJvci1zZWNvbmRhcnktY29sb3IiOiIjZmZmZmZmIiwiLS1zdy1hbmNob3Itd2FybmluZy1wcmltYXJ5LWNvbG9yIjoiI2ZmYzEwNyIsIi0tc3ctYW5jaG9yLXdhcm5pbmctc2Vjb25kYXJ5LWNvbG9yIjoiI2ZmZmZmZiIsIi0tc3ctcHJvZ3Jlc3MtY29sb3IiOiIjMGRjYWYwIiwiLS1zdy1wcm9ncmVzcy1iYWNrZ3JvdW5kLWNvbG9yIjoiI2Y4ZjlmYSIsIi0tc3ctbG9hZGVyLWNvbG9yIjoiIzBkY2FmMCIsIi0tc3ctbG9hZGVyLWJhY2tncm91bmQtY29sb3IiOiIjZjhmOWZhIiwiLS1zdy1sb2FkZXItYmFja2dyb3VuZC13cmFwcGVyLWNvbG9yIjoicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIn0=">Lite Blue</option><option value="Dark" data-colors="eyItLXN3LWJvcmRlci1jb2xvciI6IiNlZWVlZWUiLCItLXN3LXRvb2xiYXItYnRuLWNvbG9yIjoiI2ZmZmZmZiIsIi0tc3ctdG9vbGJhci1idG4tYmFja2dyb3VuZC1jb2xvciI6IiMwYTI3MzAiLCItLXN3LWFuY2hvci1kZWZhdWx0LXByaW1hcnktY29sb3IiOiIjNzU3NTc1IiwiLS1zdy1hbmNob3ItZGVmYXVsdC1zZWNvbmRhcnktY29sb3IiOiIjYjBiMGIxIiwiLS1zdy1hbmNob3ItYWN0aXZlLXByaW1hcnktY29sb3IiOiIjMDAwMDAwIiwiLS1zdy1hbmNob3ItYWN0aXZlLXNlY29uZGFyeS1jb2xvciI6IiNmZmZmZmYiLCItLXN3LWFuY2hvci1kb25lLXByaW1hcnktY29sb3IiOiIjMzMzMzMzIiwiLS1zdy1hbmNob3ItZG9uZS1zZWNvbmRhcnktY29sb3IiOiIjYWFhYWFhIiwiLS1zdy1hbmNob3ItZGlzYWJsZWQtcHJpbWFyeS1jb2xvciI6IiNmOGY5ZmEiLCItLXN3LWFuY2hvci1kaXNhYmxlZC1zZWNvbmRhcnktY29sb3IiOiIjZGJlMGU1IiwiLS1zdy1hbmNob3ItZXJyb3ItcHJpbWFyeS1jb2xvciI6IiNkYzM1NDUiLCItLXN3LWFuY2hvci1lcnJvci1zZWNvbmRhcnktY29sb3IiOiIjZmZmZmZmIiwiLS1zdy1hbmNob3Itd2FybmluZy1wcmltYXJ5LWNvbG9yIjoiI2ZmYzEwNyIsIi0tc3ctYW5jaG9yLXdhcm5pbmctc2Vjb25kYXJ5LWNvbG9yIjoiI2ZmZmZmZiIsIi0tc3ctcHJvZ3Jlc3MtY29sb3IiOiIjMGEyNzMwIiwiLS1zdy1wcm9ncmVzcy1iYWNrZ3JvdW5kLWNvbG9yIjoiI2Y4ZjlmYSIsIi0tc3ctbG9hZGVyLWNvbG9yIjoiIzBhMjczMCIsIi0tc3ctbG9hZGVyLWJhY2tncm91bmQtY29sb3IiOiIjZjhmOWZhIiwiLS1zdy1sb2FkZXItYmFja2dyb3VuZC13cmFwcGVyLWNvbG9yIjoicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIn0=">Dark</option></select>
      </div>
      <div class="form-group">
        <label class="checkbox-label">
          <input type="checkbox" id="is_justified" checked>
          <span>Justified Layout</span>
        </label>
      </div>
    </div>
    <div class="">
      <!-- Anchor Settings -->
      <h4>Anchor Settings</h4>
      <div class="form-check">
        <input class="form-check-input align-middle option-setting-checkbox" type="checkbox" id="anchor_navigation" value="1" checked="">
        <label class="form-check-label align-middle" for="anchor_navigation">Enable Navigation</label>
      </div>
      <div class="form-check">
        <input class="form-check-input align-middle option-setting-checkbox" type="checkbox" id="enableNavigationAlways" value="1">
        <label class="form-check-label align-middle" for="enableNavigationAlways">Enable Navigation Always</label>
      </div>
      <div class="form-check">
        <input class="form-check-input align-middle option-setting-checkbox" type="checkbox" id="enableDoneState" value="1" checked="">
        <label class="form-check-label align-middle" for="enableDoneState">Enable Done State</label>
      </div>
      <div class="form-check">
        <input class="form-check-input align-middle option-setting-checkbox" type="checkbox" id="unDoneOnBackNavigation" value="1">
        <label class="form-check-label align-middle" for="unDoneOnBackNavigation">Undone On Back Navigation</label>
      </div>
      <div class="form-check mb-5">
        <input class="form-check-input align-middle option-setting-checkbox" type="checkbox" id="enableDoneStateNavigation" value="1" checked="">
        <label class="form-check-label align-middle" for="enableDoneStateNavigation">Enable Done State Navigation</label>
      </div>
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
    </div>
    <!-- Controls -->
    <div class="settings-section">
      <h4>Controls</h4>
        <div class="button-group">
          <button class="btn btn-secondary" id="prev-btn" disabled>Previous</button>
          <button class="btn btn-secondary" id="next-btn">Next</button>
          <button class="btn btn-danger" id="reset-btn">Reset</button>
        </div>
        <div class="button-group mb-5">
          <div class="input-group input-group-sm mt-2">
            <select class="form-select" id="got_to_step" aria-label="Select step number">
              <option selected="">Choose step...</option>
              <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button class="btn btn-primary" id="btn-go-to" type="button">Go</button>
            <button class="btn btn-danger" id="btn-go-to-forced" type="button">Force Go</button>
          </div>
      </div>
      <!-- Other Settings -->
      <h4>Other Settings</h4>
      <div class="form-check">
        <input class="form-check-input align-middle option-setting-checkbox" type="checkbox" id="key_navigation" value="1" checked="">
        <label class="form-check-label align-middle" for="key_navigation">Keyboard Navigation</label>
      </div>
      <div class="form-check">
        <input class="form-check-input align-middle option-setting-checkbox" type="checkbox" id="back_button_support" value="1" checked="">
        <label class="form-check-label align-middle" for="back_button_support">Back Button Support</label>
      </div>
      <div class="form-check">
        <input class="form-check-input align-middle option-setting-checkbox" type="checkbox" id="autoAdjustHeight" value="1" checked="">
        <label class="form-check-label align-middle" for="autoAdjustHeight">Auto Adjust Height</label>
      </div>
    </div>
</div>
:::

## Basic Example
A simple wizard with 4 steps demonstrating the basic functionality of SmartWizard

<!-- Basic Demo -->
<div>
  <div id="smartwizard-basic" class="smartwizard-example">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="#step-1">
          <div class="num">1</div>
          Customer Details
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#step-2">
          <span class="num">2</span>
          Products Details
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#step-3">
          <span class="num">3</span>
          Shipping Details
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#step-4">
          <span class="num">4</span>
          Confirm Order
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div id="step-1" class="tab-pane" role="tabpanel" aria-labelledby="step-1">
        <h3>Customer Details</h3>
        <p>Please enter your customer information below:</p>
        <div style="max-width: 500px;">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Full Name *</label>
            <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="John Doe" required>
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Email Address *</label>
            <input type="email" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="john@example.com" required>
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Phone Number</label>
            <input type="tel" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="+1 (555) 123-4567">
          </div>
        </div>
      </div>
      <div id="step-2" class="tab-pane" role="tabpanel" aria-labelledby="step-2">
        <h3>Products Details</h3>
        <p>Select the products you wish to order:</p>
        <div style="max-width: 500px;">
          <div style="margin-bottom: 1.5rem; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 6px;">
            <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
              <input type="checkbox" style="width: 18px; height: 18px;">
              <div>
                <div style="font-weight: 600;">Product A - $29.99</div>
                <div style="font-size: 0.875rem; color: #666;">Premium quality product with excellent features</div>
              </div>
            </label>
          </div>
          <div style="margin-bottom: 1.5rem; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 6px;">
            <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
              <input type="checkbox" style="width: 18px; height: 18px;">
              <div>
                <div style="font-weight: 600;">Product B - $49.99</div>
                <div style="font-size: 0.875rem; color: #666;">Advanced features for professional use</div>
              </div>
            </label>
          </div>
          <div style="margin-bottom: 1.5rem; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 6px;">
            <label style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;">
              <input type="checkbox" style="width: 18px; height: 18px;">
              <div>
                <div style="font-weight: 600;">Product C - $19.99</div>
                <div style="font-size: 0.875rem; color: #666;">Budget-friendly option with great value</div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div id="step-3" class="tab-pane" role="tabpanel" aria-labelledby="step-3">
        <h3>Shipping Details</h3>
        <p>Enter your shipping address:</p>
        <div style="max-width: 500px;">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Street Address *</label>
            <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="123 Main St" required>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">City *</label>
              <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="New York" required>
            </div>
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ZIP Code *</label>
              <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="10001" required>
            </div>
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Country *</label>
            <select style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" required>
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>
      <div id="step-4" class="tab-pane" role="tabpanel" aria-labelledby="step-4">
        <h3>✅ Confirm Order</h3>
        <p>Please review your order details before confirming:</p>
        <div style="max-width: 500px; padding: 1.5rem; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
          <h4 style="margin-top: 0; color: #5ea8de;">Order Summary</h4>
          <p style="margin: 0.5rem 0;"><strong>Customer:</strong> Review your details in step 1</p>
          <p style="margin: 0.5rem 0;"><strong>Products:</strong> Review your selection in step 2</p>
          <p style="margin: 0.5rem 0;"><strong>Shipping:</strong> Review your address in step 3</p>
          <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 2px solid #e5e7eb;">
            <p style="font-size: 1.125rem; font-weight: 700; margin: 0;">Ready to complete your order?</p>
            <p style="margin: 0.5rem 0; color: #666;">Click the "Finish" button below to place your order.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>
</div>

## Form Validation Example
This demo shows how to integrate form validation with SmartWizard. Try clicking "Next" without filling the required fields

<!-- Form Validation Demo -->
<div>
  <div id="smartwizard-validation" class="smartwizard-example">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="#val-step-1">
          <div class="num">1</div>
          Account Info
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#val-step-2">
          <span class="num">2</span>
          Profile
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#val-step-3">
          <span class="num">3</span>
          Complete
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div id="val-step-1" class="tab-pane" role="tabpanel">
        <h3>Account Information</h3>
        <form id="form-step-1">
          <div style="max-width: 500px;">
            <div style="margin-bottom: 1rem;">
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Username * <span style="color: red; font-size: 0.875rem;" id="username-error"></span></label>
              <input type="text" id="username" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="Enter username" required>
            </div>
            <div style="margin-bottom: 1rem;">
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Email * <span style="color: red; font-size: 0.875rem;" id="email-error"></span></label>
              <input type="email" id="email" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="your@email.com" required>
            </div>
            <div style="margin-bottom: 1rem;">
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Password * <span style="color: red; font-size: 0.875rem;" id="password-error"></span></label>
              <input type="password" id="password" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="Enter password" required>
            </div>
          </div>
        </form>
      </div>
      <div id="val-step-2" class="tab-pane" role="tabpanel">
        <h3>Profile Information</h3>
        <div style="max-width: 500px;">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">First Name</label>
            <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="John">
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Last Name</label>
            <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;" placeholder="Doe">
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Bio</label>
            <textarea style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; min-height: 100px;" placeholder="Tell us about yourself"></textarea>
          </div>
        </div>
      </div>
      <div id="val-step-3" class="tab-pane" role="tabpanel">
        <h3>🎉 Registration Complete!</h3>
        <p>Your account has been created successfully.</p>
        <div style="max-width: 500px; padding: 1.5rem; background: #f0fdf4; border-radius: 8px; border: 1px solid #86efac;">
          <p style="margin: 0; color: #166534; font-weight: 600;">✓ Account created successfully!</p>
        </div>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 0%"></div>
    </div>
  </div>
</div>

## Ajax Content Example
This demo simulates loading content dynamically via Ajax. Content is loaded when you navigate to each step

<!-- Ajax Content Demo -->
<div>
  <div id="smartwizard-ajax" class="smartwizard-example">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="#ajax-step-1">
          <div class="num">1</div>
          Step 1
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#ajax-step-2">
          <span class="num">2</span>
          Step 2
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#ajax-step-3">
          <span class="num">3</span>
          Step 3
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div id="ajax-step-1" class="tab-pane" role="tabpanel">
        <div class="ajax-content">
          <div style="text-align: center; padding: 2rem;">
            <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #5ea8de; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <p style="margin-top: 1rem; color: #666;">Loading content...</p>
          </div>
        </div>
      </div>
      <div id="ajax-step-2" class="tab-pane" role="tabpanel">
        <div class="ajax-content">
          <div style="text-align: center; padding: 2rem;">
            <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #5ea8de; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <p style="margin-top: 1rem; color: #666;">Loading content...</p>
          </div>
        </div>
      </div>
      <div id="ajax-step-3" class="tab-pane" role="tabpanel">
        <div class="ajax-content">
          <div style="text-align: center; padding: 2rem;">
            <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #5ea8de; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <p style="margin-top: 1rem; color: #666;">Loading content...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 0%"></div>
    </div>
  </div>
</div>

## RTL (Right-to-Left Language) Example
This demo shows SmartWizard with RTL support for languages like Arabic, Hebrew, etc

<!-- RTL Demo -->
<div id="demo-rtl" class="demo-container">
  <div id="smartwizard-rtl" dir="rtl" class="smartwizard-example">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="#rtl-step-1">
          <div class="num">1</div>
          الخطوة الأولى
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#rtl-step-2">
          <span class="num">2</span>
          الخطوة الثانية
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#rtl-step-3">
          <span class="num">3</span>
          الخطوة الثالثة
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div id="rtl-step-1" class="tab-pane" role="tabpanel">
        <h3>معلومات شخصية</h3>
        <p>الرجاء إدخال معلوماتك الشخصية أدناه:</p>
        <div style="max-width: 500px;">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">الاسم الكامل *</label>
            <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; text-align: right;" placeholder="أدخل اسمك">
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">البريد الإلكتروني *</label>
            <input type="email" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; text-align: right;" placeholder="email@example.com">
          </div>
        </div>
      </div>
      <div id="rtl-step-2" class="tab-pane" role="tabpanel">
        <h3>العنوان</h3>
        <p>أدخل عنوانك:</p>
        <div style="max-width: 500px;">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">الشارع</label>
            <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; text-align: right;">
          </div>
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">المدينة</label>
            <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; text-align: right;">
          </div>
        </div>
      </div>
      <div id="rtl-step-3" class="tab-pane" role="tabpanel">
        <h3>✅ اكتمل!</h3>
        <p>تم إكمال النموذج بنجاح.</p>
        <div style="max-width: 500px; padding: 1.5rem; background: #f0fdf4; border-radius: 8px; border: 1px solid #86efac;">
          <p style="margin: 0; color: #166534; font-weight: 600;">✓ تم بنجاح!</p>
        </div>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" style="width: 0%"></div>
    </div>
  </div>
</div>

<ClientOnly>

<script>
if (typeof window !== 'undefined') {
  // Load jQuery
  const jqueryScript = document.createElement('script');
  jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
  jqueryScript.onload = function() {
    // Load SmartWizard after jQuery is loaded
    const swScript = document.createElement('script');
    swScript.src = 'https://cdn.jsdelivr.net/npm/smartwizard@6/dist/js/jquery.smartWizard.min.js';
    swScript.onload = function() {
      initializeDemos();
    };
    document.head.appendChild(swScript);
  };
  document.head.appendChild(jqueryScript);

  // Theme changer
  window.changeTheme = function(theme) {
    if (window.themesWizard) {
      $('#smartwizard-themes').smartWizard('theme', theme);
    }
  }
}

function initializeDemos() {
  // Initialize all SmartWizard instances
  $('.smartwizard-example').smartWizard({
    selected: 0,
    theme: 'arrows',
    transition: {
      animation: 'slideHorizontal',
      speed: 400
    },
    toolbar: {
      position: 'both',
      showNextButton: true,
      showPreviousButton: true
    },
    anchor: {
      enableNavigation: true,
      enableNavigationAlways: false,
      enableDoneState: true,
      enableDoneStateNavigation: true
    },
    keyboard: {
      keyNavigation: true,
      keyLeft: [37],
      keyRight: [39]
    },
    autoAdjustHeight: true,
    backButtonSupport: true,
    justified: true
  });

  // CSS Animations Configuration
  const cssAnimationList = {
      cssSlideH: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__slideInLeft',
          fwdHideCss: 'animate__slideOutRight',
          bckShowCss: 'animate__slideInRight',
          bckHideCss: 'animate__slideOutLeft',
      },
      cssSlideV: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__slideInDown',
          fwdHideCss: 'animate__slideOutDown',
          bckShowCss: 'animate__slideInUp',
          bckHideCss: 'animate__slideOutUp',
      },
      cssFade: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__fadeIn',
          fwdHideCss: 'animate__fadeOut',
          bckShowCss: 'animate__fadeIn',
          bckHideCss: 'animate__fadeOut',
      },
      cssFadeSlideH: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__fadeInLeft',
          fwdHideCss: 'animate__fadeOutRight',
          bckShowCss: 'animate__fadeInRight',
          bckHideCss: 'animate__fadeOutLeft',
      },
      cssFadeSlideV: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__fadeInDown',
          fwdHideCss: 'animate__fadeOutDown',
          bckShowCss: 'animate__fadeInUp',
          bckHideCss: 'animate__fadeOutUp',
      },
      cssFadeSlideCorner1: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__fadeInTopLeft',
          fwdHideCss: 'animate__fadeOutBottomRight',
          bckShowCss: 'animate__fadeInBottomRight',
          bckHideCss: 'animate__fadeOutTopLeft',
      },
      cssFadeSlideCorner2: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__fadeInBottomLeft',
          fwdHideCss: 'animate__fadeOutTopRight',
          bckShowCss: 'animate__fadeInTopRight',
          bckHideCss: 'animate__fadeOutBottomLeft',
      },
      cssBounce: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__bounceIn',
          fwdHideCss: 'animate__bounceOut',
          bckShowCss: 'animate__bounceIn',
          bckHideCss: 'animate__bounceOut',
      },
      cssBounceSlideH: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__bounceInLeft',
          fwdHideCss: 'animate__bounceOutRight',
          bckShowCss: 'animate__bounceInRight',
          bckHideCss: 'animate__bounceOutLeft',
      },
      cssBounceSlideV: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__bounceInDown',
          fwdHideCss: 'animate__bounceOutDown',
          bckShowCss: 'animate__bounceInUp',
          bckHideCss: 'animate__bounceOutUp',
      },
      cssBackSlideH: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__backInLeft',
          fwdHideCss: 'animate__backOutRight',
          bckShowCss: 'animate__backInRight',
          bckHideCss: 'animate__backOutLeft',
      },
      cssBackSlideV: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__backInDown',
          fwdHideCss: 'animate__backOutDown',
          bckShowCss: 'animate__backInUp',
          bckHideCss: 'animate__backOutUp',
      },
      cssFlipH: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__flipInY',
          fwdHideCss: 'animate__flipOutY',
          bckShowCss: 'animate__flipInY',
          bckHideCss: 'animate__flipOutY',
      },
      cssFlipV: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__flipInX',
          fwdHideCss: 'animate__flipOutX',
          bckShowCss: 'animate__flipInX',
          bckHideCss: 'animate__flipOutX',
      },
      cssLightspeed: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__lightSpeedInLeft',
          fwdHideCss: 'animate__lightSpeedOutRight',
          bckShowCss: 'animate__lightSpeedInRight',
          bckHideCss: 'animate__lightSpeedOutLeft',
      },
      cssRotate: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__rotateIn',
          fwdHideCss: 'animate__rotateOut',
          bckShowCss: 'animate__rotateIn',
          bckHideCss: 'animate__rotateOut',
      },
      cssRotateClock: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__rotateInDownLeft',
          fwdHideCss: 'animate__rotateOutDownLeft',
          bckShowCss: 'animate__rotateInUpLeft',
          bckHideCss: 'animate__rotateOutUpLeft',
      },
      cssRotateAntiClock: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__rotateInDownRight',
          fwdHideCss: 'animate__rotateOutDownRight',
          bckShowCss: 'animate__rotateInUpRight',
          bckHideCss: 'animate__rotateOutUpRight',
      },
      cssZoom: {
          prefixCss: 'animate__animated animate__faster',
          fwdShowCss: 'animate__zoomIn',
          fwdHideCss: 'animate__zoomOut',
          bckShowCss: 'animate__zoomIn',
          bckHideCss: 'animate__zoomOut',
      }
  };

  // Theme selector
  $('#theme_selector').on('change', function() {
    // Change theme
    var options = {
      theme: $(this).val()
    };
    $('.smartwizard-example').smartWizard("setOptions", options);
    return true;
  });

  // Animation selector
  $('#animation').on('change', function() {
    const anim = $(this).val();
    const cssAnim = cssAnimationList[anim];
    let options = {};

    if (cssAnim) {
      options = {
        transition: {
          animation: 'css',
          ...cssAnim
        }
      };
    } else {
      options = {
        transition: {
          animation: anim
        }
      };
    }
    $('.smartwizard-example').smartWizard('setOptions', options);
  });

  // Color theme selector
  $('#theme_colors').on('change', function() {
    const colorData = $(this).find(':selected').data('colors');
    if (colorData) {
      try {
        const colorObj = JSON.parse(atob(colorData));
        $.each(colorObj, function(key, val) {
          document.documentElement.style.setProperty(key, val);
        });
      } catch (e) {
        console.error('Error parsing color data:', e);
      }
    }
  });

  // Justified checkbox
  $('#is_justified').on('change', function() {
    $('.smartwizard-example').smartWizard('setOptions', {
      justified: $(this).prop('checked')
    });
  });

  // Anchor settings
  $('#anchor_navigation').on('change', function() {
    $('.smartwizard-example').smartWizard('setOptions', {
      anchor: { enableNavigation: $(this).prop('checked') }
    });
  });

  $('#enableNavigationAlways').on('change', function() {
    $('.smartwizard-example').smartWizard('setOptions', {
      anchor: { enableNavigationAlways: $(this).prop('checked') }
    });
  });

  $('#enableDoneState').on('change', function() {
    $('.smartwizard-example').smartWizard('setOptions', {
      anchor: { enableDoneState: $(this).prop('checked') }
    });
  });

  $('#unDoneOnBackNavigation').on('change', function() {
    $('.smartwizard-example').smartWizard('setOptions', {
      anchor: { unDoneOnBackNavigation: $(this).prop('checked') }
    });
  });

  $('#enableDoneStateNavigation').on('change', function() {
    $('.smartwizard-example').smartWizard('setOptions', {
      anchor: { enableDoneStateNavigation: $(this).prop('checked') }
    });
  });

  // Toolbar position
  $('#toolbar-position').on('change', function() {
    $('.smartwizard-example').smartWizard('setOptions', {
      toolbar: { position: $(this).val() }
    });
  });

  // Toolbar buttons
  $('#toolbar-showNextButton').on('change', function() {
    $('.smartwizard-example').smartWizard('setOptions', {
      toolbar: { showNextButton: $(this).prop('checked') }
    });
  });

  $('#toolbar-showPreviousButton').on('change', function() {
    $('.smartwizard-example').smartWizard('setOptions', {
      toolbar: { showPreviousButton: $(this).prop('checked') }
    });
  });

  // Other settings
  $('#key_navigation').on('change', function() {
    $('.smartwizard-example').smartWizard('setOptions', {
      keyboard: { keyNavigation: $(this).prop('checked') }
    });
  });

  $('#back_button_support').on('change', function() {
    $('.smartwizard-example').smartWizard('setOptions', {
      backButtonSupport: $(this).prop('checked')
    });
  });

  $('#autoAdjustHeight').on('change', function() {
    $('.smartwizard-example').smartWizard('setOptions', {
      autoAdjustHeight: $(this).prop('checked')
    });
  });

  // External control buttons
  $('#prev-btn').on('click', function() {
    $('.smartwizard-example').smartWizard('prev');
  });

  $('#next-btn').on('click', function() {
    $('.smartwizard-example').smartWizard('next');
  });

  $('#reset-btn').on('click', function() {
    $('.smartwizard-example').smartWizard('reset');
  });

  // Go to step
  $('#btn-go-to').on('click', function() {
    const stepIndex = parseInt($('#got_to_step').val()) - 1;
    if (stepIndex >= 0) {
      $('.smartwizard-example').smartWizard('goToStep', stepIndex);
    }
  });

  $('#btn-go-to-forced').on('click', function() {
    const stepIndex = parseInt($('#got_to_step').val()) - 1;
    if (stepIndex >= 0) {
      $('.smartwizard-example').smartWizard('goToStep', stepIndex, true);
    }
  });

  // Update button states on step change
  $('.smartwizard-example').on('showStep', function(e, anchorObject, stepIndex, stepDirection, stepPosition) {
    $('#prev-btn').prop('disabled', stepPosition === 'first');
    $('#next-btn').prop('disabled', stepPosition === 'last');
  });

  // Simulate Ajax loading
  $('#smartwizard-ajax').on('showStep', function(e, anchorObject, stepIndex, stepDirection) {
    const stepId = $(anchorObject).attr('href');
    const content = $(stepId).find('.ajax-content');
    
    setTimeout(function() {
      content.html(`
        <h3>Step ${stepIndex + 1} Content</h3>
        <p>This content was loaded dynamically via Ajax simulation.</p>
        <div style="padding: 1rem; background: #f0f9ff; border-radius: 6px; border: 1px solid #bae6fd;">
          <p style="margin: 0; color: #0369a1;">✓ Content loaded successfully at ${new Date().toLocaleTimeString()}</p>
        </div>
      `);
    }, 800);
  });
}
</script>
</ClientOnly>
