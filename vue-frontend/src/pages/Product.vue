<script setup>
    import { useRoute } from "vue-router";

    import Data from "@/assets/datastore";
    import Store from "@/Store.vue";


    const id = useRoute().params.id;
    const product = Data.products.find(product => product.id === id);
</script>


<template>
    <main class="window">
        <section id="product" class="shadow">
            <div id="image"> <img :src="require(`@/assets/products/${product.id}.jpg`)"> </div>

            <div id="text">
                <div>
                    <h1> {{ product.name }} </h1>
                    <p> {{ product.summary }} </p>
                </div>

                <div id="buy">
                    <div>
                       <h1> {{ Store.price(product.price_cents) }} </h1>
                       <p> {{ product.quantity > 0 ? `In Stock: ${product.quantity} Units` : "Out of Stock" }} </p>
                    </div>
                    <button class="action" @click="Store.add(product)"> Buy </button>
                </div>
            </div>
        </section>

        <section id="description" class="shadow">
            <h1> Description </h1>
            <p> {{ product.description }} </p>
        </section>
    </main>
</template>


<style scoped>
    .window {
        display: flex;
        line-height: 1.8rem;
        align-items: center;
        text-align: justify;
        white-space: pre-line;
        flex-direction: column;
    }

    .action {
        font-size: 2rem;
        padding: 0rem 3rem;
    }


    section {
        width: 65%;
        padding: 2rem 3rem;
        background-color: var(--white);
    }


    /* Product */

    #product {
        display: flex;
        margin: 5rem 0 1rem 0;
    }


    #image {
        width: 30%;
        margin-right: 3rem;
    }

    #image img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }


    #text {
        width: 70%;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }


    #buy {
        display: flex;
        justify-content: space-between;
    }

    #buy h1 {
        margin: 0;
        color: var(--red);
    }

    #buy p {
        margin: 0;
    }


    /* Description */

    #description {
        margin: 1rem 0 5rem 0;
    }
</style>
