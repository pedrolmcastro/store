<script setup>
import { useRoute } from 'vue-router'
import Data from '@/assets/datastore'
import Card from '@/components/Card.vue'
import { watch, ref } from 'vue';

const route = useRoute()
let products = ref(Data.products.filter(product => product.name.toLowerCase().includes(route.query?.search?.toLowerCase())))

watch(route, route => { 
  products.value = Data.products.filter(product => product.name.toLowerCase().includes(route.query?.search?.toLowerCase()))
  console.log(products.value)
})


</script>

<template>
  <h1>Products/Catalogue Page</h1>
  <h2> Router Query: {{ route.query }}</h2>
  <Card  v-for="product in products" :key="product.id" :id="product.id" :name="product.name" :value="product.price_cents / 100" />
</template>