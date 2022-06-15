<script setup>
import Search from '@/components/Search.vue';
import Card from '@/components/Card.vue';
import Data from '@/assets/datastore'

let products = [...Data.products]
while (products.length > 4)
  products.pop()

</script>

<template>
  <div class="window">
    <div id="banner">
      <Search id="banner-search"></Search>
    </div>
    <div id="featured-products">
      <Card  v-for="product in products" :key="product.id" :id="product.id" :name="product.name" :value="product.price_cents / 100" />
    </div>
  </div>
</template>

<style scoped>

#banner {
  width: 100%;
  height: 40vh;
  background: url(../assets/banner.jpg) no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

#banner-search {
  font-size: 32px;
  height: 3rem;
}

#banner :deep(input), #banner :deep(button) {
  font-size: 1.5rem;
}

#featured-products {
  padding: 2rem 0;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

</style>