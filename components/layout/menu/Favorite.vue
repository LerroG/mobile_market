<script setup lang="ts">
	const PRODUCTS = [
		{ title: 'Смартфон Poco X6 Pro, Black, 8/256 GB', price: 4666000 },
		{ title: 'Смартфон Poco X6 Pro, Black, 8/256 GB', price: 4666000 },
		{ title: 'Смартфон Poco X6 Pro, Black, 8/256 GB', price: 4666000 },
		{ title: 'Смартфон Poco X6 Pro, Black, 8/256 GB', price: 4666000 },
	];
</script>

<template>
	<Sheet>
		<SheetTrigger as-child>
			<Button variant="ghost">
				<Icon
					class="mr-1"
					size="26"
					name="ic:baseline-favorite-border"
					color="hsl(var(--primary))"
				/>
				Избранное
			</Button>
		</SheetTrigger>
		<SheetContent>
			<SheetHeader>
				<SheetTitle>Избранное</SheetTitle>
				<SheetDescription> </SheetDescription>
			</SheetHeader>
			<LayoutMenuSheetItem
				v-for="(product, idx) in PRODUCTS"
				:product="product"
				type="favorite"
				:key="idx"
			/>
			<SheetFooter class="mt-4">
				<SheetClose as-child>
					<Button variant="secondary"> Закрыть </Button>
				</SheetClose>
				<Button type="submit"> Очистить избранное </Button>
			</SheetFooter>
		</SheetContent>
	</Sheet>
</template>
