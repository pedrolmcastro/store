<script setup>
    import { useRoute } from "vue-router";

    import Store from "@/Store.vue";
import { onBeforeMount, ref } from "vue";
import axios from "axios";


    const id = useRoute().params.id;

    const product = ref({
        image: 'default.webp'
    })
    
    onBeforeMount(async () => {
        product.value = (await axios.get(`/products/${id}`)).data
    })
</script>


<template>
    <main class="window">
        <section id="product" class="large shadow">
            <div id="image"> <img :src="require('@/assets/products/' + product.image || 'default.webp')"> </div>

            <div id="text">
                <div>
                    <h1> {{ product.name }} </h1>
                    <p> {{ product.summary }} </p>
                </div>

                <div id="buy">
                    <div>
                       <h1> {{ Store.price(product.price) }} </h1>
                       <p> {{ product.quantity > 0 ? `In Stock: ${product.quantity} Units` : "Out of Stock" }} </p>
                    </div>
                    <button class="action" @click="Store.add(product)"> Buy </button>
                </div>
            </div>
        </section>

        <section id="description" class="large shadow">
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


    /* Media Queries */

    @media (max-width: 728px) {
        #product {
            flex-direction: column;
        }
        
        #image, #text {
            width: 100%;
        }

        .action {
            font-size: 1rem;
            padding: 0rem 2rem;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        #image {
            width: 40%;
        }

        #text {
            width: 60%;
        }
        
        .action {
            font-size: 1rem;
            padding: 0rem 2rem;
        }
    }
</style>
