<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const query = ref(route.query)

</script>

<template>
  <h1>Products/Catalogue Page</h1>
  <h2> Router Query: {{ query }}</h2>
</template>