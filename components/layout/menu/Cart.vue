<script setup lang="ts">
	const PRODUCTS = [
		{
			title: 'Смартфон Honor X9A, Титаново-серебристый, 6/128 GB',
			price: 4791700,
		},
		{
			title: 'Смартфон Honor X9A, Титаново-серебристый, 6/128 GB',
			price: 4791700,
		},
		{
			title: 'Смартфон Honor X9A, Титаново-серебристый, 6/128 GB',
			price: 4791700,
		},
	];
</script>

<template>
	<Sheet>
		<SheetTrigger as-child>
			<Button variant="ghost">
				<Icon
					class="mr-1"
					size="26"
					name="ic:outline-shopping-cart"
					color="hsl(var(--primary))"
				/>
				Корзина
			</Button>
		</SheetTrigger>
		<SheetContent>
			<SheetHeader>
				<SheetTitle>Корзина</SheetTitle>
				<SheetDescription> </SheetDescription>
			</SheetHeader>
			<LayoutMenuSheetItem
				v-for="(product, idx) in PRODUCTS"
				:product="product"
				type="cart"
				:key="idx"
			/>
			<div class="font-bold">Общая стоимость: 121212121</div>
			<SheetFooter class="mt-4">
				<SheetClose as-child>
					<Button variant="secondary"> Закрыть </Button>
				</SheetClose>
				<Button type="submit"> Оформить заказ </Button>
			</SheetFooter>
		</SheetContent>
	</Sheet>
</template>
