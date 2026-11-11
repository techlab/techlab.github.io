---
layout: product
title: Demo - jQuery SmartTab v4
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

</div>