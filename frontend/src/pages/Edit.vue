<script setup>
    import { reactive } from "vue";
    import { useRoute } from "vue-router";

    import Data from "@/assets/datastore";


    const empty = {
        id: Data.products.length.toString(), // Sequential ID
        name: "",
        price: 0,
        quantity: 0,
        summary: "",
        category: "",
        description: "",
        image: "default.webp",
    }
    
    const id = useRoute().params.id;
    const product = reactive(id === "-1" ? Data.products[Data.products.push(empty) - 1] : Data.products.find(product => product.id === id));
</script>


<template>
    <main class="window">
        <section class="shadow">
            <div id="image"> <img :src="require('@/assets/products/' + product.image)"> </div>

            <form class="inputs">
                <input id="name" type="text" placeholder="Name" v-model="product.name" />
                <textarea rows="2" id="summary" type="text" placeholder="Summary" v-model="product.summary" />
                <textarea rows="5" id="description" type="text" placeholder="description" v-model="product.description" />

                <div id="test">    
                    <label for="quantity"> Quantity: </label>
                    <input id="quantity" type="number" min="0" v-model="product.quantity" />

                    <label for="price"> Price: </label>
                    <input id="price" type="number" min="0" step="100" v-model="product.price" />

                    <label for="category"> Category: </label>
                    <select id="category" v-model="product.category">
                        <option disabled selected value=""> Category </option>
                        
                        <!-- Hardware -->
                        <option> Cooler </option>
                        <option value="Processor"> Processor </option>
                        <option> Hard Drive </option>
                        <option> Motherboard </option>
                        <option> Power Supply </option>
                        <option> Memory Stick </option>
                        <option> Graphics Card </option>
                        <option> Solid State Drive </option>

                        <!-- Peripherals -->
                        <option> Mouse </option>
                        <option> Monitor </option>
                        <option> Keyboard </option>
                        <option> Mousepad </option>
                        <option> Headphone </option>
                    </select>
                </div>
            </form>
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

    section {
        width: 65%;
        display: flex;
        padding: 2rem 3rem;
        margin: 5rem 0 1rem 0;
        background-color: var(--white);
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


    form {
        width: 70%;
    }

    #name {
        width: 100%;
    }

    #summary {
        width: 100%;
    }

    #description {
        width: 100%;
    }

    #quantity {
        border: 0;
        width: 40px;
    }

    #price {
        border: 0;
        width: 65px;
    }

    select {
        border: none;
        font-size: 1rem;
        background-color: transparent;
    }

    select:focus {
        outline: none;
    }

    #test {
        padding: 0 5px;
    }

    label {
        font-weight: 500;
    }
</style>
