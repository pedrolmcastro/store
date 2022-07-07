<script setup>
    import { computed, onBeforeMount, ref } from "vue";
    import { useRouter } from "vue-router";
    import axios from "axios";

    import "@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css";
    import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from "@dafcoe/vue-collapsible-panel";

    import Store from "@/Store.vue";


    const router = useRouter();

    const purchases = ref([])
    onBeforeMount(async () => {
        purchases.value = (await axios.get('/purchases')).data
    })


    function logout() {
        Store.logout();
        router.push('/');
    }
</script>


<template>
    <main class="window">
        <section id="profile" class="small shadow">
            <h1> {{ Store.user?.name }} </h1>
            <p>Id: {{ Store.id(Store.user) }} </p>

            <p>
                {{ Store.user?.address }} <br>
                {{ Store.user?.email }} <br>
                {{ Store.user?.phone }}
            </p>

            <button class="action big" @click="logout()"> Log Out </button>
        </section>

        <section id="purchases" class="small shadow">
            <h1> Purchases </h1>

            <vue-collapsible-panel-group v-for="purchase in purchases" :key="purchase.id" base-color="#ffffff">
                <vue-collapsible-panel id="panel" :expanded="false">
                    <template #title>
                        <div id="title">
                            <span> {{ Store.date(purchase.date) }} </span>
                            <strong> {{ Store.price(purchase.total) }} </strong>
                        </div>
                    </template>

                    <template #content>
                        <div id="content" v-for="product in purchase.products" :key="product.id">
                            <div id="left">
                                <img :src="product.image ? `http://localhost:3001/images/${product.image}` : require('@/assets/products/default.webp')">
                                <span> {{ product.quantity }}x {{ product.name}} </span>
                            </div>

                            <strong> {{ Store.price(product.paid) }} </strong>
                        </div>
                    </template>
                </vue-collapsible-panel>
            </vue-collapsible-panel-group>
        </section>
    </main>
</template>


<style scoped>
    .window {
        display: flex;
        align-items: center;
        line-height: 1.5rem;
        flex-direction: column;
    }

    .small {
        min-height: 0;
        padding: 2rem 3rem;
    }


    /* Profile */

    #profile {
        display: flex;
        margin: 5rem 0 1rem 0;
        flex-direction: column;
    }

    #profile h1 {
        font-size: 2rem;
    }

    #profile button {
        align-self: center;
    }


    /* Purchases */

    #purchases {
        margin: 1rem 0 5rem 0;
    }

    #purchases h1 {
        font-size: 1.3rem;
        margin-bottom: 3rem;
        text-transform: uppercase;
    }


    /* Panels */

    #panel {
        padding: 0;
        width: 100%;
    }

    #title {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    #title strong {
        color: var(--red);
        padding-right: 5px;
    }

    #content {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    
    #content img {
        width: 40px;
        height: 40px;
        object-fit: contain;
    }

    #left {
        display: flex;
        justify-content: space-between;
    }

    #left span {
        padding-left: 10px;
    }
</style>
