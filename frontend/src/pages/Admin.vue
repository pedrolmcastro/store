<script setup>
    import { reactive, ref } from "vue";

    import Toggle from "@vueform/toggle";
    import "@vueform/toggle/themes/default.css";

    import Store from "@/Store.vue";
    import Data from "@/assets/datastore";


    let data = reactive(Data); // Make the Data Reactive
    let show = ref("products");


    const products = {
        delete(deleted) {
            if (confirm(`Product "${deleted.name}" will be deleted.`)) {
                data.products = data.products.filter(product => product.id !== deleted.id);
            }
        },
    }

    const users = {
        delete(deleted) {
            if (confirm(`User "${deleted.name}" will be deleted.`)) {
                data.users = data.users.filter(user => user.id !== deleted.id);
            }
        },
    }
</script>


<template>
    <main class="window">
        <section class="shadow">
            <div class="options">
                <button :class="{ 'selected': show === 'products' }" @click="show = 'products'"> Products </button>
                <button :class="{ 'selected': show === 'users' }" @click="show = 'users'"> Users </button>
            </div>

            <div class="center" v-if="show === 'products'">
                <div class="listing" v-for="product in data.products" :key="product.id">
                    <img :src="require('@/assets/products/' + product.image)">

                    <div class="info">
                        <strong> {{ product.name }} </strong>
                        <span> {{ product.quantity }} in stock </span>
                    </div>

                    <div>
                        <router-link class="router" :to="`/edit/${product.id}`"> <button class="edit">  <font-awesome-icon icon="pencil" /> </button> </router-link>
                        <button class="edit" @click="products.delete(product)"> <font-awesome-icon icon="trash" /> </button>
                    </div>
                </div>

                <router-link class="router" :to="'/edit/-1'"> <button class="action large"> Add Product </button>  </router-link>
            </div>

            <div class="center" v-else>
                <div class="listing" v-for="user in data.users" :key="user.id">
                    <div class="info">
                        <strong> {{ user.name }} </strong>
                        <span> {{ Store.id(user) }} </span>
                    </div>

                    <div>
                        <button id="test" class="edit" @click="users.delete(user)"> <font-awesome-icon icon="trash" /> </button>
                        <Toggle v-model="user.admin"> Admin </Toggle>
                        <span :style="`color: ${user.admin ? 'var(--red)' : 'var(--grey)'};`"> Admin </span>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>


<style scoped>
    .window {
        display: flex;
        justify-content: center;
    }

    .options button {
        width: 50%;
    }

    section {
        margin: 5vh;
        width: 30vw;
        min-height: 70vh;
        background-color: var(--white);
    }


    /* Products */

    .listing {
        width: 70%;
        height: 40px;
        display: flex;
        margin-bottom: 1rem;
        justify-content: space-between;
    }
    
    .listing img {
        width: 40px;
        height: 40px;
        object-fit: contain;
    }

    .info {
        display: flex;
        margin-left: 1rem;
        margin-right: auto;
        flex-direction: column;
        justify-content: space-between;
    }

    .edit {
        all: unset;
        width: 20px;
        height: 20px;
        padding: 5px;
        color: var(--grey);
    }

    .edit:hover {
        cursor: pointer;
        color: var(--red);
    }

    .router {
        all: unset;
    }


    /* Costumers */
</style>
