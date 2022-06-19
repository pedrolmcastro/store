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
    const product = reactive(id === "new" ? Data.products[Data.products.push(empty) - 1] : Data.products.find(product => product.id === id));
</script>


<template>
    <main class="window">
        <section class="large shadow">
            <div id="image"> <img :src="require('@/assets/products/' + product.image)"> </div>

            <form class="inputs">
                <input id="name" type="text" placeholder="Name" v-model="product.name" />
                <textarea rows="2" id="summary" type="text" placeholder="Summary" v-model="product.summary" />
                <textarea rows="5" id="description" type="text" placeholder="description" v-model="product.description" />

                <div id="bottom">
                    <label for="quantity"> Quantity: </label>
                    <input id="quantity" type="number" min="0" v-model="product.quantity" />

                    <label for="price"> Price: </label>
                    <input id="price" type="number" min="0" step="100" v-model="product.price" />

                    <label for="category"> Category: </label>
                    <select id="category" class="selector" v-model="product.category">
                        <option disabled selected value=""> Select </option>

                        <!-- Hardware -->
                        <option value="cooler"> Cooler </option>
                        <option value="processor"> Processor </option>
                        <option value="harddrive"> Hard Drive </option>
                        <option value="motherboard"> Motherboard </option>
                        <option value="powersupply"> Power Supply </option>
                        <option value="memorystick"> Memory Stick </option>
                        <option value="graphicscard"> Graphics Card </option>
                        <option value="solidstatedrive"> Solid State Drive </option>

                        <!-- Peripherals -->
                        <option value="mouse"> Mouse </option>
                        <option value="monitor"> Monitor </option>
                        <option value="keyboard"> Keyboard </option>
                        <option value="mousepad"> Mousepad </option>
                        <option value="headphone"> Headphone </option>
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
        display: flex;
    }


    /* Image */

    #image {
        width: 30%;
        margin-right: 3rem;
    }

    #image img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }


    /* Form */

    form {
        width: 70%;
    }

    label {
        font-weight: 500;
    }

    #name, #summary, #description {
        width: 100%;
    }

    #quantity {
        margin: 0;
        padding: 0;
        width: 40px;
        border: none;
    }

    #price {
        margin: 0;
        padding: 0;
        width: 65px;
        border: none;
    }

    #bottom {
        padding-left: 5px;
    }


    /* Media Queries */

    @media (max-width: 728px) {
        section {
            flex-direction: column;
        }

        #image, form {
            width: 100%;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        #image {
            width: 40%;
        }

        form {
            width: 60%;
        }
    }
</style>
