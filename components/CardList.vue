<script setup lang="ts">
import type { IProductCard } from '~/types/product.types';

const props = defineProps<{
	products: IProductCard[] | null
}>()

	// const PRODUCTS = [
	// 	{ title: 'Смартфон Poco X6 Pro, Black, 8/256 GB', price: 4666000 },
	// 	{ title: 'Смартфон Honor X9A, Титаново-серебристый, 6/128 GB', price: 4791700 },
	// 	{ title: 'Смартфон Honor X9A, Титаново-серебристый, 6/128 GB', price: 4791700 },
	// 	{ title: 'Смартфон Poco X6 Pro, Black, 8/256 GB', price: 4666000 },
	// 	{ title: 'Смартфон Poco X6 Pro, Black, 8/256 GB', price: 4666000 },
	// 	{ title: 'Смартфон Honor X9A, Титаново-серебристый, 6/128 GB', price: 4791700 },
	// 	{ title: 'Смартфон Poco X6 Pro, Black, 8/256 GB', price: 4666000 },
	// ];
</script>

<template>
	<div class="grid grid-cols-5 gap-4">
		<CardItem
			v-for="product in products"
			:product="product"
		/>
	</div>
</template>
