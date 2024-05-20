<script setup lang="ts">
import type { IProductCard } from '~/types/product.types';

const props = defineProps<{
	products: IProductCard[] | null
}>()
</script>

<template>
	<div class="grid grid-cols-5 gap-4">
		<CardItem
			v-for="product in products"
			:product="product"
		/>
	</div>
</template>
