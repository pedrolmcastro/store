<script setup>
    import { defineProps } from "vue";
    import Store from "@/Store.vue";


    const props = defineProps({ product: Object, });
</script>


<template>
    <div id="card" class="shadow">
        <router-link :to="`/products/${props.product.id}`">
            <div id="image"> <img :src="require(`@/assets/products/${props.product.id}.jpg`)"> </div>
        </router-link>

        <div id="info">
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


    #image {
        width: 100%;
        height: 67%;
    }

    #image img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }


    #info {
        height: 33%;
        display: flex;
        padding: 0.75rem;
        flex-direction: column;
        justify-content: space-between;
    }

    #info h1 {
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
