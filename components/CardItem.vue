<script setup lang="ts">
import type { IProductCard } from '~/types/product.types';

defineProps<{
	product: IProductCard;
}>();
</script>

<template>
	<NuxtLink :to="`/${product.id}`"
		class="min-h-[350px] relative bg-white border-2 border-slate-100 rounded-xl p-4 cursor-pointer transition hover:shadow-xl">
		<!-- <div
			class="flex justify-center items-center bg-red-300 h-3/5 rounded-xl"
		>
			Image
		</div> -->
		<div class="flex justify-center items-center h-3/5">
			<img :src="product.main_image" alt="">
		</div>
		<div class="flex flex-col justify-between h-2/5 pt-1">
			<div class="leading-4 text-sm">{{ product.title }}</div>
			<div class="font-bold">{{ product.price.toLocaleString("en-US") }} сум</div>
			<Button class="h-8">Добавить в корзину</Button>
		</div>
	</NuxtLink>
</template>
