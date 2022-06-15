<script setup>
import { useRoute } from 'vue-router'
import Data from '@/assets/datastore'
import Card from '@/components/Card.vue'
import { ref, computed } from 'vue';
import Search from '@/components/Search.vue';

const route = useRoute()
let orderBy = ref('order by: a-z');

const products = computed(() => {
  let p =  Data.products
    .filter(product => product.name.toLowerCase().includes(route.query?.search?.toLowerCase()))
    .filter(product => product.quantity > 0)
  p.sort((a, b) => orderBy.value.includes('price') ? a.price_cents - b.price_cents : a.name.toLowerCase().localeCompare(b.name.toLowerCase()))

  return p
})

</script>

<template>
  <div class="window">
    <div id="filters">
      <h2>Filters</h2>
      <p> Category 1</p>
      <p> Category 2</p>
       <!-- algo como: <Section v-for="filter in filters" :options="filter.options"> 
        Reusa a lógica da barra lateral de categorias, só muda a coloração
        Cada Section vai ser um dos negócinhos expandíveis
        Se filter.options.length == 1, não expande, mas sim seleciona direto
        Se > 1, expande e abre as options.
        Funciona do mesmo jeito pros departamentos no barra principal. Só substitui options por subdepartamentos 
      -->
        
    </div>
    <div id="main-view">
      <div id="top-section">
        <Search></Search>
        <select v-model="orderBy">
          <option>order by: a-z</option>
          <option>order by: price</option>
        </select>
      </div>
      <div id="products">
        <Card v-for="product in products" :key="product.id" :id="product.id" :name="product.name" :price="product.price_cents" />
      </div>
    </div>
  </div>
</template>


<style scoped>

.window {
  display: flex;
  flex-direction: row;
}

#filters {
  padding: 10px 10px;
  background-color: var(--dark-grey);
  width: 15%;
  color: var(--white);
}

#main-view {
  width: 85%
}

#top-section {
  margin: 2rem;
  display: flex;
  font-size: 2rem;
  height: 3rem;
}

#top-section :deep(input), #top-section :deep(button) {
  font-size: 1.5rem;
}

select {
  font-size: 1.5rem;
  align-items: center;
  border: none;
  background-color: transparent;
}

select:focus {
  outline: none;
}

#caret {
  font-size: 1.5rem;
}

#products {
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  justify-content: space-evenly;
}

</style> 