---
layout: product
title: Documentation - jQuery SmartCart v2
description: jQuery shopping cart plugin with tabbed interface
head:
  - - meta
    - name: description
      content: jQuery Shopping Cart plugin with PayPal payment support
  - - meta
    - name: keywords
      content: jQuery, jQuery plugin, jQuery Shopping Cart, jQuery SmartCart
---

<div class="tl-md-container tl-md-container-mt vp-doc">

## Getting Started

### Basic Initialization

```javascript
$('#SmartCart').smartCart();
```

### With Options

```javascript
$('#SmartCart').smartCart({
  selected: 0, // 0 = products list, 1 = cart
  resultName: 'products_selected[]',
  enableImage: true,
  enableImageTooltip: true,
  enableSearch: true,
  enableCategoryFilter: true,
  productItemTemplate: '<strong><%=pname%></strong><br />Category: <%=pcategory%><br /><small><%=pdesc%></small><br /><strong>Price: <%=pprice%></strong>',
  cartItemTemplate: '<strong><%=pname%></strong>',
  
  // Events
  onAdd: null,
  onAdded: null,
  onRemove: null,
  onRemoved: null,
  onUpdate: null,
  onUpdated: null,
  onCheckout: null
});
```

## Installation

### Step 1: Include Files

```html
<head>
  <script type="text/javascript" src="js/jquery-1.3.2.min.js"></script>
  <script type="text/javascript" src="js/jquery.smartCart-2.0.js"></script>
  <link href="styles/smart_cart.css" rel="stylesheet" type="text/css">
</head>
```

### Step 2: The JavaScript

```html
<head>
  <script type="text/javascript">
    $(document).ready(function(){
      $('#SmartCart').smartCart();
    });
  </script>
</head>
```

### Step 3: The HTML

```html
<body>
  <div id="SmartCart" class="scMain">
    <input type="hidden" 
           pimage="products/product1.jpg" 
           pprice="2299.99" 
           pdesc="" 
           pcategory="Computers" 
           pname="Apple MacBook Pro MA464LL/A 15.4" 
           pid="100">
    
    <input type="hidden" 
           pimage="products/product6.jpg" 
           pprice="2699.99" 
           pdesc="" 
           pcategory="Computers" 
           pname="Sony VAIO 11.1&quot; Notebook PC" 
           pid="101">
    
    <input type="hidden" 
           pimage="products/product3.jpg" 
           pprice="550.00" 
           pdesc="" 
           pcategory="Cameras" 
           pname="Canon Digital Rebel" 
           pid="102">
  </div>
</body>
```

## Parameters

### selected
**(integer)** Initial selected tab. `0` = products list, `1` = cart

### resultName
**(string)** Name attribute for form submission

### enableImage
**(boolean)** Enable/disable product images

### enableImageTooltip
**(boolean)** Enable/disable image tooltips

### enableSearch
**(boolean)** Enable/disable product search

### enableCategoryFilter
**(boolean)** Enable/disable category filter

### productItemTemplate
**(string)** Template for product item display

### cartItemTemplate
**(string)** Template for cart item display

## Events

### onAdd
Triggers before adding item to cart

### onAdded
Triggers after item is added to cart

### onRemove
Triggers before removing item from cart

### onRemoved
Triggers after item is removed from cart

### onUpdate
Triggers before updating cart

### onUpdated
Triggers after cart is updated

### onCheckout
Triggers when checkout is initiated

</div>
