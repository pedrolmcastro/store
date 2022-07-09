<script setup>
    import { ref, onBeforeMount } from "vue";
    import axios from "axios";

    import Toggle from "@vueform/toggle";
    import "@vueform/toggle/themes/default.css";

    import Store from "@/Store.vue";


    const content = ref({
        users: [],
        products: [],
    });

    onBeforeMount(async () => {
        content.value.products = (await axios.get("/products")).data;
        content.value.users = (await axios.get("/users")).data;
    });


    let show = ref("products");


    const products = {
        async delete(deleted) {
            if (confirm(`Product "${deleted.name}" will be deleted.`)) {
                await axios.delete("/products/" + deleted.id);
                content.value.products = (await axios.get("/products")).data;
            }
        },
    };

    const users = {
        async delete(deleted) {
            if (confirm(`User "${deleted.name}" will be deleted.`)) {
                await axios.delete("/users/" + deleted.id);
                content.value.users = (await axios.get("/users")).data;
            }
        },

        async toggle(toggled) {
            await axios.patch("/users/" + toggled.id, { admin: toggled.admin });
        },
    };
</script>


<template>
    <main class="window">
        <section class="small shadow">
            <div class="options">
                <button :class="{ 'selected': show === 'products' }" @click="show = 'products'"> Products </button>
                <button :class="{ 'selected': show === 'users' }" @click="show = 'users'"> Users </button>
            </div>

            <div class="center" v-if="show === 'products'">
                <div class="listing" v-for="product in content.products" :key="product.id">
                    <img :src="product.image ? `http://localhost:3001/images/${product.image}` : require('@/assets/undefined.webp')">

                    <div class="information">
                        <strong> {{ product.name }} </strong>
                        <span> {{ product.quantity }} in stock </span>
                    </div>

                    <div>
                        <router-link class="router" :to="`/edit/${product.id}`"> <button class="edit">  <font-awesome-icon icon="pencil" /> </button> </router-link>
                        <button class="edit" @click="products.delete(product)"> <font-awesome-icon icon="trash" /> </button>
                    </div>
                </div>

                <router-link class="router" :to="'/edit/new'"> <button class="action big"> Add Product </button>  </router-link>
            </div>

            <div class="center" v-else>
                <div class="listing" v-for="user in content.users" :key="user.id">
                    <div class="information">
                        <strong> {{ user.name }} </strong>
                        <span> {{ Store.id(user) }} </span>
                    </div>

                    <div>
                        <button class="edit" @click="users.delete(user)"> <font-awesome-icon icon="trash" /> </button>
                        <Toggle v-model="user.admin" @change="users.toggle(user)"> Admin </Toggle>
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

    .router {
        all: unset;
    }


    /* Products */

    .listing {
        width: 70%;
        height: 40px;
    }

    .listing img {
        width: 40px;
        height: 40px;
    }

    .edit {
        all: unset;
        padding: 10px;
        color: var(--grey);
    }

    .edit:hover {
        cursor: pointer;
        color: var(--red);
    }


    /* Media Queries */

    @media (max-width: 728px) {
        .listing {
            width: 90%;
        }
        
        .edit {
            padding: 5px;
        }
    }
</style>


<style>
    /* Toggle */

    :root {
        --toggle-height: 1rem;
        --toggle-width: 2.5rem;
        --toggle-bg-on: var(--red);
        --toggle-border-on: var(--red);
    }
</style>
