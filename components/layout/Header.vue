<script setup lang="ts">
const store = useFilterStore()
const { search } = storeToRefs(store)
</script>

<template>
	<header class="flex items-center justify-between h-20 max-w-screen-xl m-auto mb-4">
		<NuxtLink to="/" class="text-6xl font-black w-1/5 tracking-tighter">MM</NuxtLink>
		<div class="flex items-center gap-2 w-1/3">
			<Input v-model="search" placeholder="Поиск" class="h-10" />
			<Button class="h-10">
				<Icon size="26" name="ic:baseline-search" color="white" />
			</Button>
		</div>
		<LayoutMenu />
	</header>
</template>
