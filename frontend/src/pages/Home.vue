<script setup>
    import axios from "axios";
    import { ref, onBeforeMount } from "vue";

    import Card from "@/components/Card.vue";
    import Search from "@/components/Search.vue";


    const products = ref([]);

    onBeforeMount(async () => {
        products.value = (await axios.get("/products", { params: { max: 4, instock: true }})).data;
    });
</script>


<template>
    <main class="window">
        <section id="banner">
            <Search id="search"></Search>
        </section>

        <section id="products">
            <Card v-for="product in products" :key="product.id" :product="product" />
        </section>
    </main>
</template>


<style scoped>
    /* Banner */

    #banner {
        width: 100%;
        height: 40vh;
        display: flex;
        align-items: center;
        background-size: cover;
        justify-content: center;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("@/assets/banner.jpeg");
    }

    #banner :deep(input), #banner :deep(button) {
        font-size: 1.3rem;
    }

    #search {
        height: 2.6rem;
    }


    /* Products */

    #products {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 3rem 0;
        justify-content: space-evenly;
    }
</style>
