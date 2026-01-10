---
title: jQuery SmartWizard v6
description: The awesome step wizard plugin for jQuery
head:
  - - meta
    - name: description
      content: The awesome step wizard plugin for jQuery
  - - meta
    - name: keywords
      content: wizard, step, jQuery, jQuery plugin, jQuery wizard, jQuery step wizard
---

# jQuery SmartWizard <span class="text-gray-400">v6</span>

The awesome step wizard plugin for jQuery 
<hr>

**jQuery Smart Wizard** is an accessible step wizard plugin for jQuery. Provides a neat and stylish interface for your forms, checkout screen, registration steps, etc. Easy implementation, Bootstrap compatibility, customizable toolbars, themes, events and Ajax support are few of the features.

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
            <a class="nav-link " href="#step-4">
                <span class="num">4</span>
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
import { computed, onMounted } from 'vue'

// External Animations Configuration
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
} as const;

const presetColors = {
    "Blue (Default)": {
        "--sw-toolbar-btn-background-color": "#009EF7",
        "--sw-anchor-default-primary-color": "#f8f9fa",
        "--sw-anchor-default-secondary-color": "#b0b0b1",
        "--sw-anchor-active-primary-color": "#009EF7",
        "--sw-anchor-active-secondary-color": "#ffffff",
        "--sw-anchor-done-primary-color": "#90d4fa",
        "--sw-anchor-done-secondary-color": "#fefefe",
        "--sw-progress-color": "#009EF7",
        "--sw-loader-color": "#009EF7",
    },
    "Green": {
        "--sw-border-color": "#eeeeee",
        "--sw-toolbar-btn-color": "#ffffff",
        "--sw-toolbar-btn-background-color": "#008931",
        "--sw-anchor-default-primary-color": "#f8f9fa",
        "--sw-anchor-default-secondary-color": "#b0b0b1",
        "--sw-anchor-active-primary-color": "#78c043",
        "--sw-anchor-active-secondary-color": "#ffffff",
        "--sw-anchor-done-primary-color": "#588835",
        "--sw-anchor-done-secondary-color": "#c2c2c2",
        "--sw-anchor-disabled-primary-color": "#f8f9fa",
        "--sw-anchor-disabled-secondary-color": "#dbe0e5",
        "--sw-anchor-error-primary-color": "#dc3545",
        "--sw-anchor-error-secondary-color": "#ffffff",
        "--sw-anchor-warning-primary-color": "#ffc107",
        "--sw-anchor-warning-secondary-color": "#ffffff",
        "--sw-progress-color": "#78c043",
        "--sw-progress-background-color": "#f8f9fa",
        "--sw-loader-color": "#78c043",
        "--sw-loader-background-color": "#f8f9fa",
        "--sw-loader-background-wrapper-color": "rgba(255, 255, 255, 0.7)",
    },
    "Yellow": {
        "--sw-border-color": "#eeeeee",
        "--sw-toolbar-btn-color": "#ffffff",
        "--sw-toolbar-btn-background-color": "#e4a707",
        "--sw-anchor-default-primary-color": "#f8f9fa",
        "--sw-anchor-default-secondary-color": "#b0b0b1",
        "--sw-anchor-active-primary-color": "#fbbd19",
        "--sw-anchor-active-secondary-color": "#ffffff",
        "--sw-anchor-done-primary-color": "#e4a707",
        "--sw-anchor-done-secondary-color": "#dbe0e5",
        "--sw-anchor-disabled-primary-color": "#f8f9fa",
        "--sw-anchor-disabled-secondary-color": "#dbe0e5",
        "--sw-anchor-error-primary-color": "#dc3545",
        "--sw-anchor-error-secondary-color": "#ffffff",
        "--sw-anchor-warning-primary-color": "#ffc107",
        "--sw-anchor-warning-secondary-color": "#ffffff",
        "--sw-progress-color": "#fbbd19",
        "--sw-progress-background-color": "#f8f9fa",
        "--sw-loader-color": "#fbbd19",
        "--sw-loader-background-color": "#f8f9fa",
        "--sw-loader-background-wrapper-color": "rgba(255, 255, 255, 0.7)",
    },
    "Red": {
        "--sw-border-color": "#eeeeee",
        "--sw-toolbar-btn-color": "#ffffff",
        "--sw-toolbar-btn-background-color": "#f44336",
        "--sw-anchor-default-primary-color": "#f8f9fa",
        "--sw-anchor-default-secondary-color": "#b0b0b1",
        "--sw-anchor-active-primary-color": "#f44336",
        "--sw-anchor-active-secondary-color": "#ffffff",
        "--sw-anchor-done-primary-color": "#f8877f",
        "--sw-anchor-done-secondary-color": "#fefefe",
        "--sw-anchor-disabled-primary-color": "#f8f9fa",
        "--sw-anchor-disabled-secondary-color": "#dbe0e5",
        "--sw-anchor-error-primary-color": "#dc3545",
        "--sw-anchor-error-secondary-color": "#ffffff",
        "--sw-anchor-warning-primary-color": "#ffc107",
        "--sw-anchor-warning-secondary-color": "#ffffff",
        "--sw-progress-color": "#f44336",
        "--sw-progress-background-color": "#f8f9fa",
        "--sw-loader-color": "#f44336",
        "--sw-loader-background-color": "#f8f9fa",
        "--sw-loader-background-wrapper-color": "rgba(255, 255, 255, 0.7)",
    },
    "Lite Blue": {
        "--sw-border-color": "#eeeeee",
        "--sw-toolbar-btn-color": "#ffffff",
        "--sw-toolbar-btn-background-color": "#0cb6d8",
        "--sw-anchor-default-primary-color": "#f8f9fa",
        "--sw-anchor-default-secondary-color": "#b0b0b1",
        "--sw-anchor-active-primary-color": "#00d5ff",
        "--sw-anchor-active-secondary-color": "#ffffff",
        "--sw-anchor-done-primary-color": "#0cb6d8",
        "--sw-anchor-done-secondary-color": "#dbe0e5",
        "--sw-anchor-disabled-primary-color": "#f8f9fa",
        "--sw-anchor-disabled-secondary-color": "#dbe0e5",
        "--sw-anchor-error-primary-color": "#dc3545",
        "--sw-anchor-error-secondary-color": "#ffffff",
        "--sw-anchor-warning-primary-color": "#ffc107",
        "--sw-anchor-warning-secondary-color": "#ffffff",
        "--sw-progress-color": "#0dcaf0",
        "--sw-progress-background-color": "#f8f9fa",
        "--sw-loader-color": "#0dcaf0",
        "--sw-loader-background-color": "#f8f9fa",
        "--sw-loader-background-wrapper-color": "rgba(255, 255, 255, 0.7)",
    },
    "Dark": {
        "--sw-border-color": "#eeeeee",
        "--sw-toolbar-btn-color": "#ffffff",
        "--sw-toolbar-btn-background-color": "#0a2730",
        "--sw-anchor-default-primary-color": "#757575",
        "--sw-anchor-default-secondary-color": "#b0b0b1",
        "--sw-anchor-active-primary-color": "#000000",
        "--sw-anchor-active-secondary-color": "#ffffff",
        "--sw-anchor-done-primary-color": "#333333",
        "--sw-anchor-done-secondary-color": "#aaaaaa",
        "--sw-anchor-disabled-primary-color": "#f8f9fa",
        "--sw-anchor-disabled-secondary-color": "#dbe0e5",
        "--sw-anchor-error-primary-color": "#dc3545",
        "--sw-anchor-error-secondary-color": "#ffffff",
        "--sw-anchor-warning-primary-color": "#ffc107",
        "--sw-anchor-warning-secondary-color": "#ffffff",
        "--sw-progress-color": "#0a2730",
        "--sw-progress-background-color": "#f8f9fa",
        "--sw-loader-color": "#0a2730",
        "--sw-loader-background-color": "#f8f9fa",
        "--sw-loader-background-wrapper-color": "rgba(255, 255, 255, 0.7)",
    }
} as const;

const colorList = computed(() => Object.keys(presetColors));

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
        await loadScript('https://code.jquery.com/jquery-3.7.1.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/smartwizard@6/dist/js/jquery.smartWizard.min.js');
        await loadStyle('https://cdn.jsdelivr.net/npm/smartwizard@6/dist/css/smart_wizard_all.min.css');
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

    // Step show event
    // Step show event
    $("#smartwizard").on("showStep", function(e: any, anchorObject: any, stepIndex: number, stepDirection: string, stepPosition: string) {
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
    $('#smartwizard').smartWizard({
        selected: 0,
        theme: 'arrows', // basic, arrows, square, round, dots
        enableUrlHash: false,
        transition: {
            animation:'slideHorizontal' // none|fade|slideHorizontal|slideVertical|slideSwing|css
        },
        toolbar: {
            position: 'both', // none/ top/ both bottom
        }
    });

    // External Button Events
    $("#reset-btn").on("click", function() {
        $('#smartwizard').smartWizard("reset");
        return true;
    });

    $("#prev-btn").on("click", function() {
        $('#smartwizard').smartWizard("prev");
        return true;
    });

    $("#next-btn").on("click", function() {
        $('#smartwizard').smartWizard("next");
        return true;
    });

    // Toolbar position
    $('#toolbar-position').on('change', function() {
        $('#smartwizard').smartWizard('setOptions', {
            toolbar: { position: $(this).val() }
        });
    });

    // Toolbar buttons
    $('#toolbar-showNextButton').on('change', function() {
      $('#smartwizard').smartWizard('setOptions', {
        toolbar: { showNextButton: $(this).prop('checked') }
      });
    });

    $('#toolbar-showPreviousButton').on('change', function() {
      $('#smartwizard').smartWizard('setOptions', {
        toolbar: { showPreviousButton: $(this).prop('checked') }
      });
    });

    // Demo Button Events
    $("#is_justified").on("click", function(this: HTMLElement) {
        var options = {
            justified: $(this).prop("checked")
        };
        $('#smartwizard').smartWizard("setOptions", options);
        return true;
    });

    $("#animation").on("change", function(this: HTMLElement) {
        const anim = $(this).val() as keyof typeof cssAnimationList;
        const cssAnim = cssAnimationList[anim];
        var options = {};

        if (cssAnim != undefined) {
            options = {
                transition: {
                    animation: 'css',
                    ...cssAnim
                },
            };
        } else {
            options = {
                transition: {
                    animation: anim
                },
            };
        }

        $('#smartwizard').smartWizard("setOptions", options);
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
        const colorName = $(this).val() as keyof typeof presetColors;
        const colorObj = presetColors[colorName];
        if (colorObj) {
            $.each(colorObj, function(key: string, val: string) {
                document.documentElement.style.setProperty(key, val);
            });
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

::: tip Visit **[Interactive Demo Page](/jquery-smartwizard/v6/demo)** to explore more live examples:

- 🎯 [**Basic Example**](/jquery-smartwizard/v6/demo#basic-example) - Simple 4-step wizard
- ✅ [**Form Validation Example**](/jquery-smartwizard/v6/demo#form-validation-example) - Wizard with validation
- 🔄 [**Ajax Content Example**](/jquery-smartwizard/v6/demo#ajax-content-example) - Dynamic content loading
- 🌐 [**RTL (Right-to-Left Language) Example**](/jquery-smartwizard/v6/demo#rtl-right-to-left-language-example) - Right-to-left languages

:::

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

## License

Released under the terms of the [MIT License](https://github.com/techlab/jquery-smartwizard/blob/master/LICENSE). You are free to use on both personal and commercial environment as long as the copyright header is left intact.