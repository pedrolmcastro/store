<script setup>
import { useRoute } from 'vue-router';
import Data from '@/assets/datastore'

const pid = useRoute().params.id

const product = Data.products.find(product => product.id === pid)

</script>

<template>
 <div> {{ product }} </div>
</template>