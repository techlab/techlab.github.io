---
layout: product
title: Demo - jQuery SmartCart v3
description: jQuery Shopping Cart plugin with PayPal payment support
head:
  - - meta
    - name: description
      content: jQuery Shopping Cart plugin with PayPal payment support
  - - meta
    - name: keywords
      content: jQuery, jQuery plugin, jQuery Shopping Cart, jQuery SmartCart
---

<div class="tl-md-container tl-md-container-mt vp-doc">


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

</div>