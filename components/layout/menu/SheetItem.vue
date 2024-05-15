<script setup lang="ts">
	import type { IProduct } from '~/types/product.types';

	const props = defineProps<{
		product: IProduct;
		type: 'cart' | 'favorite';
	}>();

	const quantity = ref(1);

	const totalProductPrice = computed(
		() => props.product.price * quantity.value
	);

	console.log(totalProductPrice.value);
</script>

<template>
	<div
		class="grid grid-cols-3 gap-4 border border-slate-200 rounded-sm p-2 my-2 cursor-pointer transition hover:shadow-md"
	>
		<div class="flex justify-center items-center bg-red-300 rounded-sm">
			Image
		</div>
		<div class="flex col-span-2">
			<div>
				<div class="leading-4 mb-2">{{ product.title }}</div>
				<div class="font-bold mb-2">
					{{ totalProductPrice.toLocaleString('en-US') }} сум
				</div>
				<div
					v-if="type === 'cart'"
					class="flex gap-2 items-center"
				>
					<span>количество</span>
					<Input
						type="number"
						v-model="quantity"
						class="w-14 h-6 py-0 px-1 rounded"
					/>
				</div>
			</div>
			<Button
				variant="outline"
				class="h-6 p-1"
				><Icon
					name="ic:baseline-close"
					color="hsl(var(--primary))"
			/></Button>
		</div>
	</div>
</template>
