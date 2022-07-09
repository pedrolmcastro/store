<script setup>
    import { defineProps } from "vue";
    import Store from "@/Store.vue";


    const props = defineProps({ product: Object, });
</script>


<template>
    <div id="card" class="shadow">
        <router-link id="image" :to="`/products/${props.product.id}`">
            <img :src="props.product.image ? `http://localhost:3001/images/${props.product.image}` : require('@/assets/undefined.webp')">
        </router-link>

        <div id="information">
            <h1> {{ props.product.name }} </h1>

            <div id="bottom">
                <strong> {{ Store.price(props.product.price) }} </strong>
                <button class="action" @click="Store.add(props.product)"> Add To Cart </button>
            </div>
        </div>
    </div>
</template>


<style scoped>
    #card {
        bottom: 0;
        margin: 1rem;
        width: 300px;
        height: 300px;
        position: relative;
        transition: bottom .3s ease;
        background-color: var(--white);
    }

    #card:hover {
        bottom: 5px;
    }


    /* Image */

    #image {
        width: 100%;
        height: 67%;
    }

    #image img {
        width: 100%;
        height: 67%;
        object-fit: contain;
    }


    /* Information */

    #information {
        height: 33%;
        display: flex;
        padding: 0.5rem;
        flex-direction: column;
        justify-content: space-between;
    }

    #information h1 {
        font-weight: 700;
        font-size: 1.2rem;
    }

    #bottom {
        display: flex;
        justify-content: space-between;
    }

    #bottom strong {
        font-weight: 800;
        color: var(--red);
        font-size: 1.3rem;
    }

    .action {
        padding: 0.2rem 0.5rem;
    }
</style>
