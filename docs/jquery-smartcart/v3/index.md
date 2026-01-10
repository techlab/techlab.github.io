---
title: jQuery SmartCart v3
description: jQuery Shopping Cart plugin with PayPal payment support
head:
  - - meta
    - name: description
      content: jQuery Shopping Cart plugin with PayPal payment support
  - - meta
    - name: keywords
      content: jQuery, jQuery plugin, jQuery Shopping Cart, jQuery SmartCart
---

# jQuery SmartCart <span class="text-gray-400">v3</span>

jQuery Shopping Cart plugin with PayPal payment support
<hr>

jQuery Smart Cart is an interactive and user-friendly jQuery Shopping Cart plugin with PayPal payment support. Has built-in support for form submit, Ajax submit and PayPal submit of the cart items.

<div class="flex flex-wrap flex-row justify-start gap-1 gap-y-0">

[![Build Status](https://travis-ci.org/techlab/jquery-smartcart.svg?branch=master)](https://travis-ci.org/techlab/jquery-smartcart)

[![npm version](https://badge.fury.io/js/jquery-smartcart.svg)](https://badge.fury.io/js/jquery-smartcart)

[![Latest Stable Version](https://poser.pugx.org/techlab/jquery-smartcart/v/stable)](https://packagist.org/packages/techlab/jquery-smartcart)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/techlab/jquery-smartcart/blob/master/LICENSE)

[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/npm/jquery-smartcart/badge?style=rounded)](https://www.jsdelivr.com/package/npm/jquery-smartcart)

[![Npm Downloads](https://badgen.net/npm/dm/jquery-smartcart?icon=npm)](https://www.npmjs.com/package/jquery-smartcart)

[![GitHub Sponsor](https://img.shields.io/badge/Sponsor-techlab-blue.svg?logo=github)](https://github.com/sponsors/techlab)

</div>

## Live Demo

<div class="mx-auto grid grid-cols-2 gap-4">
  <div class="flex flex-col bg-white border border-gray-200 shadow-2xs dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
    <div class="bg-gray-100 border-b border-gray-200 px-2 dark:bg-neutral-900 dark:border-neutral-700">
      <p class="text-lg text-gray-500 dark:text-neutral-500">
        Products
      </p>
    </div>
    <div class="p-4 md:p-5">
            <div class="panel-body">
                        <div class="grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-2">
                            <!-- BEGIN PRODUCTS -->
                            <div class="group flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div class="flex-shrink-0">
                                  <img  data-name="product_image" src="https://placehold.co/250x100/5ea8de/white?text=Product+1"/>
                                </div>
                                <div class="sc-product-item flex flex-1 flex-col justify-between bg-white dark:bg-gray-800 p-4">
                                    <div class="caption">
                                        <p data-name="product_name" class="text-xl py-0 font-semibold text-gray-900 dark:text-white">Product 1</p>
                                        <p data-name="product_desc">Product details</p>
                                        <div>
                                            <div class="form-group">
                                                <label>Size: </label>
                                                <select name="product_size" class="form-control input-sm">
                                                    <option>S</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>Color: </label><br />
                                                <label class="radio-inline">
                                                    <input type="radio" name="product_color" value="red"> red
                                                </label>
                                                <label class="radio-inline">
                                                    <input type="radio" name="product_color" value="blue"> blue
                                                </label>
                                                <label class="radio-inline">
                                                    <input type="radio" name="product_color" value="green"> green
                                                </label>
                                            </div>
                                            <div class="form-group2">
                                                <input class="sc-cart-item-qty" name="product_quantity" min="1" value="1" type="number">
                                            </div>
                                            <strong class="price pull-left">$2,990.50</strong>
                                            <input name="product_price" value="2990.50" type="hidden" />
                                            <input name="product_id" value="12" type="hidden" />
                                            <button class="sc-add-to-cart btn btn-primary btn-sm pull-right">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="group flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div class="flex-shrink-0">
                                  <img  data-name="product_image" src="https://placehold.co/250x100/5ea8de/white?text=Product+2"/>
                                </div>
                                <div class="sc-product-item flex flex-1 flex-col justify-between bg-white dark:bg-gray-800 p-4">
                                    <div class="caption">
                                        <p data-name="product_name" class="text-xl py-0 font-semibold text-gray-900 dark:text-white">Product 2</p>
                                        <p data-name="product_desc">Product details</p>
                                        <div>
                                            <div class="form-group">
                                                <label>Size: </label>
                                                <select name="product_size" class="form-control input-sm">
                                                    <option>S</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>Color: </label><br />
                                                <label class="radio-inline">
                                                    <input type="radio" name="product_color" value="red"> red
                                                </label>
                                                <label class="radio-inline">
                                                    <input type="radio" name="product_color" value="blue"> blue
                                                </label>
                                                <label class="radio-inline">
                                                    <input type="radio" name="product_color" value="green"> green
                                                </label>
                                            </div>
                                            <div class="form-group2">
                                                <input class="sc-cart-item-qty" name="product_quantity" min="1" value="1" type="number">
                                            </div>
                                            <strong class="price pull-left">$4,990.50</strong>
                                            <input name="product_price" value="2990.50" type="hidden" />
                                            <input name="product_id" value="12" type="hidden" />
                                            <button class="sc-add-to-cart btn btn-primary btn-sm pull-right">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="group flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div class="flex-shrink-0">
                                  <img  data-name="product_image" src="https://placehold.co/250x100/5ea8de/white?text=Product+3"/>
                                </div>
                                <div class="sc-product-item flex flex-1 flex-col justify-between bg-white dark:bg-gray-800 p-4">
                                    <div class="caption">
                                        <p data-name="product_name" class="text-xl py-0 font-semibold text-gray-900 dark:text-white">Product 3</p>
                                        <p data-name="product_desc">Product details</p>
                                        <div>
                                            <div class="form-group">
                                                <label>Size: </label>
                                                <select name="product_size" class="form-control input-sm">
                                                    <option>S</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>Color: </label><br />
                                                <label class="radio-inline">
                                                    <input type="radio" name="product_color" value="red"> red
                                                </label>
                                                <label class="radio-inline">
                                                    <input type="radio" name="product_color" value="blue"> blue
                                                </label>
                                                <label class="radio-inline">
                                                    <input type="radio" name="product_color" value="green"> green
                                                </label>
                                            </div>
                                            <div class="form-group2">
                                                <input class="sc-cart-item-qty" name="product_quantity" min="1" value="1" type="number">
                                            </div>
                                            <strong class="price pull-left">$1,990.50</strong>
                                            <input name="product_price" value="2990.50" type="hidden" />
                                            <input name="product_id" value="12" type="hidden" />
                                            <button class="sc-add-to-cart btn btn-primary btn-sm pull-right">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- END PRODUCTS -->
                        </div>
                    </div>
    </div>
  </div>
  <div class="flex flex-col bg-white border border-gray-200 shadow-2xs dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
    <div class="bg-gray-100 border-b border-gray-200 px-2 dark:bg-neutral-900 dark:border-neutral-700">
      <p class="text-lg text-gray-500 dark:text-neutral-500">
        Cart
      </p>
    </div>
    <div class="p-4 md:p-5">
      <!-- Cart submit form -->
      <form action="#" method="POST">
          <!-- SmartCart element -->
          <div id="smartcart"></div>
      </form>
    </div>
  </div>
</div>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

onMounted(async () => {
    if (typeof window !== 'undefined') {
        const loaded = await loadScripts();
        if (loaded) {
            initDemo();
        }
    }
});

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
        await loadScript('https://cdn.jsdelivr.net/npm/jquery-smartcart/dist/js/jquery.smartCart.min.js');
        await loadStyle('https://cdn.jsdelivr.net/npm/jquery-smartcart/dist/css/smart_cart.min.css');
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
    // Smart Cart
    $(document).ready(function(){
        // Initialize Smart Cart
        $('#smartcart').smartCart();
		});
}
</script>

## Installation

### NPM

```bash
npm install jquery-smartcart
```

### CDN

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/jquery-smartcart/dist/css/smart_cart.min.css" rel="stylesheet">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/jquery-smartcart/dist/js/jquery.smartCart.min.js"></script>
```

## Downloads

[Download from GitHub](https://github.com/techlab/jquery-smartcart/archive/master.zip)

## Features

- In-built PayPal, Ajax and form submit methods
- Bootstrap support
- Compatible with latest jQuery versions
- Public methods for external function call
- Enhanced event support
- Clean and compact design
- Theme support
- Customizable toolbars
- Customization options

## Documentation

### Requirements

1. [Bootstrap 3+](http://getbootstrap.com/getting-started/#download)
2. [jQuery](http://jquery.com/) (supports jQuery 1.9+, jQuery 2+, jQuery 3+)

### Include jQuery SmartCart CSS

```html
<link href="../dist/css/smart_cart.min.css" rel="stylesheet" type="text/css">
```

### Include jQuery

```html
<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

### Include jQuery SmartCart JavaScript

```html
<script type="text/javascript" src="../dist/js/jquery.smartCart.min.js"></script>
```

### Initialize the jQuery SmartCart

```javascript
$(document).ready(function() {
  $('#smartcart').smartCart();
});
```

### The HTML Markup

The HTML has two parts: **product list** and **cart list**.

#### Product List

The product list can be any design you prefer. Smart Cart will not manage it, but there are some settings needed so that Smart Cart can identify the "Add To Cart" buttons and the values of the product.

**Things to note:**
- Add to cart button is identified by the class name `sc-add-to-cart`
- Product container is identified by the class name `sc-product-item`
- The product container must have basic values like `product_name`, `product_price`, etc.
- Product values are identified by searching for elements with attribute `name` or `data-name`
- All element values with attribute `name` or `data-name` will be added to the product object

**Example:**

```html
<div class="row">
  <!-- BEGIN PRODUCTS -->
  <div class="col-md-4 col-sm-6">
    <!-- PRODUCT CONTAINER 1 -->
    <div class="sc-product-item">
      <!-- PRODUCT IMAGE -->
      <img data-name="product_image" src="http://placehold.it/250x150/2aabd2/ffffff?text=Product+1" alt="...">
      
      <!-- PRODUCT NAME -->
      <h4 data-name="product_name">Product 1</h4>
      
      <!-- PRODUCT DESCRIPTION -->
      <p data-name="product_desc">Product details</p>
      
      <!-- PRODUCT PRICE -->
      <input name="product_price" value="2990.50" type="hidden" />
      
      <!-- PRODUCT ID -->
      <input name="product_id" value="12" type="hidden" />
      
      <!-- ADD TO CART BUTTON -->
      <button class="sc-add-to-cart btn btn-success">Add to cart</button>
    </div>
  </div>

  <div class="col-md-4 col-sm-6">
    <!-- PRODUCT CONTAINER 2 -->
    <div class="sc-product-item">
      <img data-name="product_image" src="http://placehold.it/250x150/2aabd2/ffffff?text=Product+2" alt="...">
      <h4 data-name="product_name">Product 2</h4>
      <p data-name="product_desc">Product details</p>
      <input name="product_price" value="320.75" type="hidden" />
      <input name="product_id" value="14" type="hidden" />
      <button class="sc-add-to-cart btn btn-success">Add to cart</button>
    </div>
  </div>
  <!-- END PRODUCTS -->
</div>
```

#### Cart HTML

The cart HTML is simple - a `div` element wrapped with a `form` element which can be used to submit the cart values:

```html
<form action="results.php" method="POST">
  <!-- SmartCart element -->
  <div id="smartcart"></div>
</form>
```

## PayPal Implementation

### HTML for the Cart

```html
<!-- Paypal Submit URL: https://www.paypal.com/cgi-bin/webscr -->
<!-- Paypal Sandbox Submit URL: https://www.sandbox.paypal.com/cgi-bin/webscr -->

<!-- Paypal Cart submit form -->
<form action="https://www.paypal.com/cgi-bin/webscr" method="POST">
  <!-- SmartCart element -->
  <div id="smartcart"></div>
  
  <!-- Paypal required info, Please update based on your details -->
  <input name="business" value="YOUR-PAYPAL-EMAIL-HERE" type="hidden">
  <input name="currency_code" value="USD" type="hidden">
  <input name="return" value="http://www.yourdomain.com/yoursuccessurl" type="hidden">
  <input name="cancel_return" value="http://www.yourdomain.com/yourcancelurl" type="hidden">
  <input name="cmd" value="_cart" type="hidden">
  <input name="upload" value="1" type="hidden">
</form>
```

### Invoke SmartCart with PayPal Option

```javascript
$('#smartcart').smartCart({
  submitSettings: {
    submitType: 'paypal' // form, paypal, ajax
  },
  toolbarSettings: {
    checkoutButtonStyle: 'paypal' // default, paypal, image
  }
});
```

## Parameters

### Core Parameters

| Parameter | Description | Values | Default |
|-----------|-------------|--------|---------|
| `cart` | Initial products on cart | Object Array | `[]` |
| `resultName` | Submit name of the cart parameter | String | `'cart_list'` |
| `theme` | Theme for the cart (related CSS needs to be included for themes other than default) | String | `'default'` |
| `combineProducts` | Combine similar products on cart | `true`/`false` | `true` |
| `highlightEffect` | Highlight effect on adding/updating product in cart | `true`/`false` | `true` |
| `cartItemTemplate` | Template to show items in the cart | String | See below |
| `cartItemQtyTemplate` | Template to show item quantity in the cart | String | `{display_price} × {display_quantity} = {display_amount}` |
| `productContainerSelector` | Selector used to identify the product container in the product list | String | `'.sc-product-item'` |
| `productElementSelector` | Selector used to identify the elements whose values to be included with the cart object | String | `'*'` |
| `addCartSelector` | Selector used to identify the "Add To Cart" button | String | `'.sc-add-to-cart'` |
| `debug` | Enable/disable debug mode | Boolean | `false` |

### Detailed Parameter Descriptions


### productContainerSelector
**(string)** CSS selector for product container. Default: `'.sc-product-item'`

### productElementSelector
**(string)** CSS selector for product elements. Default: `'*'`

### addCartSelector
**(string)** CSS selector for add to cart button. Default: `'.sc-add-to-cart'`

### productParams
**(object)** Product parameter mapping:
```javascript
{
  productPrice: 'product_price',
  productQuantity: 'product_quantity',
  productName: 'product_name',
  productId: 'product_id',
}
```

### lang
**(object)** Language variables:
```javascript
{
  cartTitle: "Shopping Cart",
  checkout: 'Checkout',
  clear: 'Clear',
  subtotal: 'Subtotal:',
  cartRemove: '×',
  cartEmpty: 'Cart is Empty!<br />Choose your products'
}
```

### submitSettings
**(object)** Submit configuration:
```javascript
{
  submitType: 'form', // form, paypal, ajax
  ajaxURL: '', // Ajax submit URL
  ajaxSettings: {} // Ajax extra settings
}
```

### currencySettings
**(object)** Currency formatter settings:
```javascript
{
  locales: 'en-US',
  currencyOptions: {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol'
  }
}
```

### toolbarSettings
**(object)** Toolbar configuration:
```javascript
{
  showToolbar: true,
  showCheckoutButton: true,
  showClearButton: true,
  showCartSummary: true,
  checkoutButtonStyle: 'default', // default, paypal, image
  checkoutButtonImage: '',
  toolbarExtraButtons: [] // Extra buttons array
}
```

## Events

### Event Descriptions

| Event | Description | Parameters |
|-------|-------------|------------|
| `itemAdded` | Triggers when an item is added to the cart | **Object**: object of the product |
| `itemUpdated` | Triggers when an item is updated on the cart | **Object**: object of the product |
| `itemRemoved` | Triggers when an item is removed from the cart | **Object**: object of the product |
| `cartCleared` | Triggers when the cart is cleared | None |
| `quantityUpdated` | Triggers when an item quantity is updated on the cart | **Object**: object of the product<br>**Integer**: new quantity value |
| `cartEmpty` | Triggers when the cart is empty | None |
| `cartSubmitted` | Triggers when the cart is submitted | **Object Array**: object array of full cart |


### Example: Event Initialize

```javascript
// Initialize the cartEmpty event
$("#smartcart").on("cartEmpty", function(e) {
  alert("Cart is empty");
});

// Initialize Smart Cart
$('#smartcart').smartCart();
```

## License

Released under the terms of the [MIT License](https://github.com/techlab/jquery-smartcart/blob/master/LICENSE). You are free to use on both personal and commercial environments as long as the copyright header is left intact.
