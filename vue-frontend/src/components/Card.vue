<script setup>
    import { defineProps } from "vue";
    import Store from "@/Store.vue";


    const props = defineProps({
        id: String,
        name: String,
        price: Number,
    });


    function add() {
        if (Store.cart.find(item => item.id === props.id) === undefined) Store.cart.push({ id: props.id, quantity: 1 });
        // TODO: Pop Up Confirmation
    }
</script>


<template>
    <div id="card" class="shadow">
        <router-link :to="`/products/${props.id}`">
            <div id="image"> <img :src="require(`@/assets/products/${props.id}.jpg`)"> </div>
        </router-link>

        <div id="info">
            <h1> {{ props.name }} </h1>

            <div id="bottom">
                <strong> {{ '$' + props.price.toFixed(2) }} </strong>
                <button class="action-button" @click="add()"> Add To Cart </button>
            </div>
        </div>
    </div>
</template>


<style scoped>
    #card {
        bottom: 0;
        width: 300px;
        margin: 1rem;
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
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #info h1 {
        font-size: 1.2rem;
        font-weight: 700;
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

    .action-button {
        padding: 0.2rem 0.5rem;
    }
</style>
