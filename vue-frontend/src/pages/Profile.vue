<script setup>
import Data from '@/assets/datastore';
import Store from '@/Store.vue'
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const purchases = computed(() => Data.previous_purchases.filter(purchase => Store.userId === purchase.user))

const router = useRouter()
const logout = () => {
  Store.userId = undefined
  router.push('/')
}
</script>

<template>
  <div class="window">
    <p v-for="purchase in purchases" :key="purchase.id"> {{ purchase }} </p>
    <button @click="logout" class="action-button">LOG OUT</button>
  </div>
</template>


<style scoped>

.action-button {
  padding: 1rem;
}
</style>

