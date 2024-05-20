<script setup lang='ts'>
import type { IProductCard, IProductRes } from '~/types/product.types';

const store = useFilterStore()
const { search } = storeToRefs(store)

const params = computed(() => {
  if (search.value) {
    return { 'filters[title][$contains]': search.value }
  }
}

)

const { data: products } = await useAsyncData('products', () => $fetch<IProductRes>('http://localhost:1337/api/products', {
  params: params.value
}), {
  watch: [search],
  transform: (products): IProductCard[] => {
    return products.data.map((product) => ({
      id: product.id,
      title: product.attributes.title,
      price: product.attributes.price,
      main_image: `http://localhost:1337${product.attributes.main_image.data.attributes.url}`,
    }))
  }
})

useHead({
  title: getTitle('Home')
})
</script>

<template>
  <CardList :products="products" />
</template>