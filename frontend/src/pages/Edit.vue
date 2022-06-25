<script setup>
    import { ref, onBeforeMount } from "vue";
    import { useRoute, useRouter } from "vue-router";
    import axios from "axios"

    const id = useRoute().params.id;
    const product = ref({
        name: "",
        price: 0,
        quantity: 0,
        summary: "",
        category: "",
        description: "",
        image: "default.webp",
    })

    onBeforeMount(async () => {
        if (id !== "new")
            product.value = {
                ...(await axios.get(`/products/${id}`)).data
            }
    })

    const router = useRouter()
    const submitChanges = async () => {
        if (id === "new")
            await axios.post("/products", {
                ...product.value
            })
        else
            await axios.patch(`/products/${id}`, {
                ...product.value
            })
        
        router.push('/admin')
    }
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
                    <div>
                        <label for="quantity"> Quantity: </label>
                        <input id="quantity" type="number" min="0" v-model="product.quantity" />
                    </div>

                    <div>
                        <label for="price"> Price: </label>
                        <input id="price" type="number" min="0" step="100" v-model="product.price" />
                    </div>

                    <div>
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
                </div>
                <button class="action" @click.prevent="submitChanges">CONFIRM</button>
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
        display: flex;
        justify-content: space-between;
    }

    button {
        margin-top: 2rem;
        padding: 1rem 3rem;
    }


    /* Media Queries */

    @media (max-width: 728px) {
        section {
            flex-direction: column;
        }

        #image, form {
            width: 100%;
        }

        button {
            width: 100%;
            padding: 2rem 0;
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
