<script setup>
    import { ref, computed } from "vue";
    import { useRoute } from "vue-router";

    import Data from "@/assets/datastore";
    import Card from "@/components/Card.vue";


    const route = useRoute();
    let order = ref("order by: a-z");

    const products = computed(() => {
        let filtered = Data.products.filter(product => product.quantity > 0);

        if ("search" in route.query)        filtered = filtered.filter(product => product.name.toLowerCase().includes(route.query.search.toLowerCase()));
        else if ("category" in route.query) filtered = filtered.filter(product => product.category === route.query.category);

        if (order.value.includes("a-z"))        filtered.sort((first, second) => first.name.localeCompare(second.name, undefined, { sensitivity: "base" }));
        else if (order.value.includes("price")) filtered.sort((first, second) => first.price - second.price);

        return filtered;
    });
</script>


<template>
    <main class="window">
        <section>
            <div id="top">
                <select v-model="order">
                    <option selected> order by: a-z </option>
                    <option> order by: price </option>
                </select>
            </div>

            <div id="products">
                <Card v-for="product in products" :key="product.id" :product="product" />
            </div>
        </section>
    </main>
</template>


<style scoped>
    .window {
        display: flex;
        flex-direction: row;
    }

    section {
        width: 100%;
        height: 100%;
    }


    /* Top */

    #top {
        width: 100%;
        text-align: center;
    }

    select {
        margin: 20px;
        border: none;
        font-size: 1rem;
        color: var(--grey);
        background-color: transparent;
    }

    select:focus {
        outline: none;
    }


    /* Products */

    #products {
        display: grid;
        justify-content: space-evenly;
        grid-template-columns: repeat(auto-fill, 350px);
    }
</style> 
