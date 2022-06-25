<script setup>
    import { ref, watchEffect } from "vue";
    import { useRoute } from "vue-router";
    import Card from "@/components/Card.vue";
import axios from "axios";

    const route = useRoute();
    let order = ref("order by: a-z");
    const products =  ref([]);

    watchEffect(async () => {
        let params = {
            search: route.query.search || "",
            instock: true,
            sort: order.value === "order by: a-z" ? "name" : "price"
        }

        if (route.query.category)
            params.category = route.query.category

        console.log(params)
        let res = (await axios.get("/products", { params })).data
        console.log(res)
        products.value = res
    })



</script>


<template>
    <main class="window">
        <section>
            <div id="top">
                <select class="selector" v-model="order">
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

    .selector {
        margin: 20px;
        color: var(--grey);
    }


    /* Products */

    #products {
        display: grid;
        justify-content: space-evenly;
        grid-template-columns: repeat(auto-fill, 350px);
    }
</style>
