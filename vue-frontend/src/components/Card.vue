<script setup>

import { defineProps } from 'vue'
import Store from '@/Store.vue'

const props = defineProps({
    id: String,
    name: String,
    value: Number,
})

let addToCart = () => {
    if (!Store.cart.find(item => item.id === props.id)) {
        Store.cart.push({ id: props.id, quantity: 1 })
    }
}

</script>

<template>
    <div class="card">
        <router-link id="title" :to="'/products/' + props.id">
            <div class="card-image">
                <img :src="require(`../assets/products/${props.id}.jpg`)">
            </div>
        </router-link>

        <div class="card-info">
            <p>{{ props.name }}</p>
            <div class="price-and-cart">
                <span>{{ '$' + props.value.toFixed(2) }}</span>
                <button class="card-button action-button" @click="addToCart">ADD TO CART</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

p {
    font-weight: bold;
}
.card {
    padding: 1rem;
    margin: 2rem;
    width: 300px;
    height: 300px;
    background-color: var(--white);
}

.card-image {
    height: 67%;
    width: 100%;
}

.card-info {
    height: 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.price-and-cart {
    display: flex;
    justify-content: space-between;
}
.price-and-cart span {
    color: var(--red);
    font-weight: bolder;
    font-size: 1.4rem;
}

img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

.card-button {
  padding: 0.1rem 0.5rem;
}

</style>