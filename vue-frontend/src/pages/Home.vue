<script setup>
    import { computed } from "vue";

    import Data from "@/assets/datastore";
    import Card from "@/components/Card.vue";
    import Search from "@/components/Search.vue";


    const products = computed(() => Data.products.filter(item => item.quantity > 0).slice(0, 4));
</script>


<template>
    <main class="window">
        <section id="banner">
            <Search id="search"></Search>
        </section>

        <section id="products">
            <Card v-for="product in products" :key="product.id" :id="product.id" :name="product.name" :price="product.price_cents" />
        </section>
    </main>
</template>


<style scoped>
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


    #products {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 3rem 0;
        justify-content: space-evenly;
    }
</style>
