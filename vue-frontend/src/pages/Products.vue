<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

</script>

<template>
  <h1>Products/Catalogue Page</h1>
  <h2> Router Query: {{ route.query }}</h2>
</template>