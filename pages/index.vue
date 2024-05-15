<script setup lang='ts'>
import type { IProductCard, IProductRes } from '~/types/product.types';

const { data: products } = await useFetch('http://localhost:1337/api/products', {
  transform: (products: IProductRes): IProductCard[] => {
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