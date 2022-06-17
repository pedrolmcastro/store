<script setup>
    import { computed } from "vue";
    import { useRouter } from "vue-router";

    import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css';
    import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from "@dafcoe/vue-collapsible-panel";

    import Store from "@/Store.vue";
    import Data from "@/assets/datastore";

    const router = useRouter();


    const profile = Data.users.find(user => user.id === Store.user);
    const purchases = computed(() => Data.purchases.filter(purchase => purchase.user === Store.user));


    function logout() {
        Store.user = undefined;
        router.push('/');
    }
</script>

<template>
    <main class="window">
        <section id="profile" class="shadow">
            <h1> {{ profile.name }} #{{ profile.id }} </h1>

            <p>
                {{ profile.address }} <br>
                {{ profile.email }} <br>
                {{ profile.phone }}
            </p>

            <button class="action large" @click="logout()"> Log Out </button>
        </section>

        <section id="purchases" class="shadow">
            <h1> Purchases </h1>

            <vue-collapsible-panel-group v-for="purchase in purchases" :key="purchase.id" base-color="#ffffff">
                <vue-collapsible-panel id="panel" :expanded="false">
                    <template #title>
                        <div id="title">
                            <span> {{ Store.date(purchase.date) }} </span>
                            <span> {{ Store.price(purchase.total) }} </span>
                        </div>
                    </template>

                    <template #content>
                        <div id="content" v-for="product in purchase.products" :key="product.id">
                            <div id="left">
                                <img :src="require(`@/assets/products/${product.id}.jpg`)">
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

    section {
        width: 30vw;
        padding: 2rem 3rem;
        box-sizing: border-box;
        background-color: var(--white);
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

    #panel {
        padding: 0;
        width: 100%;
    }


    #title {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    #title span:nth-of-type(2) {
        font-weight: 700;
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
