<script setup lang="ts">
import { products } from '../siteConfig'
import { withBase } from 'vitepress'
import { computed } from 'vue'

// Filter products to only show on home page if showOnHome is not false
const homeProducts = computed(() => products.filter(p => p.showOnHome !== false))
</script>

<template>
	<div class="min-h-screen- bg-gradient-to-b from-gray-50 dark:from-gray-900 dark:to-gray-800">
		
		<!-- Hero Section -->
		<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
			<div class="text-center">
				<!-- Hero Badges -->
				<div class="flex justify-center gap-3 mb-8 flex-wrap">
					<div class="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-lg">
						JavaScript
					</div>
					<div class="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-lg">
						React
					</div>
					<div class="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-lg">
						jQuery
					</div>
				</div>

				<!-- Hero Title -->
				<h1 class="block text-4xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
					Smart <span class="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">JavaScript</span> components for the web
				</h1>

				<!-- Hero Tagline -->
				<p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mx-auto mb-12 leading-relaxed">
					Modern and open-source UI components, ready-to-use examples with modern UI support
				</p>

				<!-- Hero Stats -->
				<div class="flex justify-center gap-8 sm:gap-16 flex-wrap">
					<div class="text-center">
						<div class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-2">
							5+
						</div>
						<div class="text-sm text-gray-600 dark:text-gray-400 font-medium">Products</div>
					</div>
					<div class="text-center">
						<div class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-2">
							100%
						</div>
						<div class="text-sm text-gray-600 dark:text-gray-400 font-medium">Open Source</div>
					</div>
					<div class="text-center">
						<div class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-2">
							MIT
						</div>
						<div class="text-sm text-gray-600 dark:text-gray-400 font-medium">Licensed</div>
					</div>
				</div>
			</div>
		</section>

		<section class="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28 mb-0">	
			<div class="absolute inset-0">
				<div class="h-1/3 sm:h-2/3"></div>
			</div>
			<div class="relative mx-auto max-w-7xl">
				<div class="text-center">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Products</h2>
				<p class="text-xl text-gray-500 sm:mt-4">
					Explore our collection of modern, well-documented components</p>
				</div>
				<div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-2">
					<!-- Product Cards -->	
					<div v-for="(product, index) in homeProducts" 
									:key="product.title" 
							class="group flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300">
						<!-- Product Screenshot -->
						<div v-if="product.screenshot" class="flex-shrink-0">
							<img 
								:src="product.screenshot" 
								:alt="product.title + ' screenshot'" 
								class="h-48 w-full object-cover"
							/>
						</div>

						<div class="flex flex-1 flex-col justify-between bg-white dark:bg-gray-800 p-6">
							<div class="flex-1">
								<!-- Title -->
								<a :href="withBase(product.pageLink)" class="mt-2 block">
								<p class="text-xl font-semibold text-gray-900 dark:text-white">{{ product.title }}</p>
								</a>
								
								<p class="mt-3 text-base text-gray-500">{{ product.description }}</p>

								<!-- Features Preview -->
								<div class="space-y-2 mb-6">
									<div 
										v-for="(feature, idx) in product.features.slice(0, 3)" 
										:key="idx"
										class="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
									>
										<svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
										</svg>
										<span>{{ feature }}</span>
									</div>
									<div 
										v-if="product.features.length > 3" 
										class="text-sm text-blue-600 dark:text-blue-400 font-medium pl-7"
									>
										+{{ product.features.length - 3 }} more features
									</div>
								</div>
							</div>

							<!-- Card Footer -->
							<div class="flex items-center justify-between pt-4 ">
								<!-- Explore Button -->
								<a 
									:href="withBase(product.pageLink)" 
									class="btn-special px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5- transition-all duration-200 no-underline"
								>
									Explore
								</a>

								<!-- Tags -->
								<div class="flex gap-2">
									<span v-for="(tag, index) in product.tags" :key="index" class="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium">
										{{ tag }}
									</span>
								</div>
							</div>

							<!-- <div class="mt-6 flex justify-end">
								<div class="flex space-x-1 text-sm text-gray-500">
									<time datetime="2020-03-16">Mar 16, 2020</time>
									<span aria-hidden="true">·</span>
									<span>6 min read</span>
								</div>
							</div> -->
						</div>
					</div>
				
				</div>
			</div>
		</section>
	</div>
</template>
