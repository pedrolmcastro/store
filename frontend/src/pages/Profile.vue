<script setup>
import Data from '@/assets/datastore';
import Store from '@/Store.vue'
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const purchases = computed(() => Data.purchases.filter(purchase => Store.user === purchase.user))

const router = useRouter()
const logout = () => {
  Store.user = undefined
  router.push('/')
}
</script>

<template>
  <div class="window">
    <p v-for="purchase in purchases" :key="purchase.id"> {{ purchase }} </p>
    <button @click="logout" class="action">LOG OUT</button>
  </div>
</template>


<style scoped>
.action {
  padding: 1rem;
}
</style>
