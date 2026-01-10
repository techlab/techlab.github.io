---
title: jQuery SmartTab v4
description: The flexible jQuery tab control plugin
head:
  - - meta
    - name: description
      content: The flexible jQuery tab control plugin
  - - meta
    - name: keywords
      content: tab, step, jQuery, jQuery plugin, jQuery tab
---

# jQuery SmartTab <span class="text-gray-400">v4</span>

The flexible jQuery tab control plugin. 
<hr>

jQuery Smart Tab is a jQuery plugin for easy implementation of tab interface with features like theme support, transition effects, URL navigation, and auto progress.

<div class="flex flex-wrap flex-row justify-start gap-1 gap-y-0">

[![Build Status](https://travis-ci.org/techlab/jquery-smarttab.svg?branch=master)](https://travis-ci.org/techlab/jquery-smarttab)

[![npm version](https://badge.fury.io/js/jquery-smarttab.svg)](https://badge.fury.io/js/jquery-smarttab)

[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/jquery-smarttab/badge?style=rounded)](https://www.jsdelivr.com/package/npm/jquery-smarttab)

[![Npm Downloadsl](https://badgen.net/npm/dm/jquery-smarttab?icon=npm)](https://www.npmjs.com/package/jquery-smarttab)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/techlab/jquery-smarttab/master/LICENSE)

[![GitHub Sponsor](https://img.shields.io/badge/Sponsor-techlab-blue.svg?logo=github)](https://github.com/sponsors/techlab)

</div>

## Live Demo

:::details jQuery SmartTab Settings
<div class="settings-panel grid grid-cols-1 gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
    <!-- Theme & Animation -->
    <div class="settings-section">
      <h4>Appearance</h4>
      <div class="form-group">
        <label for="theme_selector">Theme</label>
        <select id="theme_selector">
          <option value="basic" selected>Basic (Default)</option>
          <option value="elite">Elite</option>
          <option value="pills">Pills</option>
          <option value="brick">Brick</option>
          <option value="forge">Forge</option>
          <option value="blocks">Blocks</option>
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
          <input type="checkbox" id="is_vertical" checked>
          <span>Vertical Layout</span>
        </label>
        <label class="checkbox-label">
          <input type="checkbox" id="is_justified" checked>
          <span>Justified</span>
        </label>
      </div>
    </div>
</div>
:::
<!-- SmartTab html -->
<div id="smarttab">
    <ul class="nav">
        <li>
          <a class="nav-link" href="#tab-1">
            <strong>Tab 1</strong> This is tab description
          </a>
        </li>
        <li>
          <a class="nav-link" href="#tab-2">
            <strong>Tab 2</strong> This is tab description
          </a>
        </li>
        <li>
          <a class="nav-link" href="#tab-3">
            <strong>Tab 3</strong> This is tab description
          </a>
        </li>
        <li>
          <a class="nav-link" href="#tab-4">
            <strong>Tab 4</strong> This is tab description
          </a>
        </li>
    </ul>
    <div class="tab-content">
        <div id="tab-1" class="tab-pane" role="tabpanel">
            <h3>Tab 1 Content</h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div id="tab-2" class="tab-pane" role="tabpanel">
            <h3>Tab 2 Content</h3>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>
        </div>
        <div id="tab-3" class="tab-pane" role="tabpanel">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div id="tab-4" class="tab-pane" role="tabpanel">
            <h3>Tab 4 Content</h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
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
          "--st-background": "unset",
          "--st-border": "1px solid #eeeeee",
          "--st-anchor-default-primary-color": "#60bef5",
          "--st-anchor-default-secondary-color": "#b0b0b1",
          "--st-anchor-active-primary-color": "#009EF7",
          "--st-anchor-active-secondary-color": "#ffffff",
          "--st-loader-color": "#009EF7",
        },
        "Green": {
          "--st-background": "unset",
          "--st-border": "1px solid #eeeeee",
          "--st-anchor-default-primary-color": "#588835",
          "--st-anchor-default-secondary-color": "#c2c2c2",
          "--st-anchor-active-primary-color": "#78c043",
          "--st-anchor-active-secondary-color": "#ffffff",
          "--st-loader-color": "#78c043",
        },
        "Yellow": {
          "--st-background": "unset",
          "--st-border": "1px solid #eeeeee",
          "--st-anchor-default-primary-color": "#e4a707",
          "--st-anchor-default-secondary-color": "#dbe0e5",
          "--st-anchor-active-primary-color": "#e4a707",
          "--st-anchor-active-secondary-color": "#ffffff",
          "--st-loader-color": "#e4a707",
        },  
        "Red": {
          "--st-background": "unset",
          "--st-border": "1px solid #eeeeee",
          "--st-anchor-default-primary-color": "#f8877f",
          "--st-anchor-default-secondary-color": "#fefefe",
          "--st-anchor-active-primary-color": "#f44336",
          "--st-anchor-active-secondary-color": "#ffffff",
          "--st-loader-color": "#f44336",
        },
        "Lite Blue": {
          "--st-background": "unset",
          "--st-border": "1px solid #eeeeee",
          "--st-anchor-default-primary-color": "#0cb6d8",
          "--st-anchor-default-secondary-color": "#dbe0e5",
          "--st-anchor-active-primary-color": "#00d5ff",
          "--st-anchor-active-secondary-color": "#ffffff",
          "--st-loader-color": "#00d5ff",
        },
        "Dark": {
          "--st-background": "#000000",
          "--st-border": "1px solid #eeeeee",
          "--st-anchor-default-primary-color": "#333333",
          "--st-anchor-default-secondary-color": "#aaaaaa",
          "--st-anchor-active-primary-color": "#ffffff",
          "--st-anchor-active-secondary-color": "#ffffff",
          "--st-anchor-disabled-primary-color": "#222222",
          "--st-anchor-disabled-secondary-color": "#ffffff",
          "--st-loader-color": "#000000",
        }
};

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
        await loadScript('https://cdn.jsdelivr.net/npm/jquery-smarttab@4/dist/js/jquery.smartTab.min.js');
        await loadStyle('https://cdn.jsdelivr.net/npm/jquery-smarttab@4/dist/css/smart_tab_all.min.css');
        await loadStyle('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
        return true;
    } catch (error) {
        console.error('Failed to load scripts:', error);
        return false;
    }
};

const initDemo = () => {
    // @ts-ignore
    if (typeof jQuery === 'undefined') return;
    
    // @ts-ignore
    const $ = jQuery;

    $('#smarttab').smartTab({
      transition: {
          animation: 'slideHorizontal'
      },
      backButtonSupport: false, // Enable the back button support
      enableURLhash: false,
      autoProgress: { // Auto navigate tabs on interval
          enabled: false, // Enable/Disable Auto navigation
          interval: 3500, // Auto navigate Interval (used only if "autoProgress" is set to true)
          stopOnFocus: true, // Stop auto navigation on focus and resume on outfocus
      }
    });

    // Demo Button Events
    $("#is_justified").on("click", function(this: HTMLElement) {
        var options = {
            justified: $(this).prop("checked")
        };
        $('#smarttab').smartTab("setOptions", options);
        return true;
    });

    $("#is_vertical").on("click", function(this: HTMLElement) {
        // Change Orientation
        $('#smarttab').toggleClass("st-vertical", $(this).prop("checked"));
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

        $('#smarttab').smartTab("setOptions", options);
        return true;
    });

    $("#theme_selector").on("change", function(this: HTMLElement) {
        var options = {
            theme: $(this).val()
        };
        $('#smarttab').smartTab("setOptions", options);
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
            initDemo();
        }
    }
});
</script>

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

## Features

- Easy to implement and minimal HTML required
- Supports all modern browsers
- Responsive CSS design
- Bootstrap compatible
- Cool themes included and can be easily customized
- Easy color customization using CSS variables
- Built-in transition animations (none|fade|slideHorizontal|slideVertical|slideSwing|css)
- CSS Animations support (Supports Animate.css)
- Accessible controls
- External controls support
- Easy ajax content integration
- Keyboard navigation
- Auto content height adjustment
- Built-in loader
- Built-in events
- UMD (Universal Module Definition) support
- Compatible with all jQuery versions (jQuery 1.11.1+, jQuery 3.6+, and jQuery Slim)
- URL navigation and tab selection
- Auto Progress (automatic navigation of tabs)

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

## License

Released under the terms of the [MIT License](https://github.com/techlab/jquery-smarttab/blob/master/LICENSE).


