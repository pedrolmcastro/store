<script setup>
    import { Slide } from "vue3-burger-menu";

    import Store from "@/Store.vue";
    import Search from "@/components/Search.vue";
</script>


<template>
    <nav>
        <div id="left">
            <Slide width="255" :closeOnNavigation="true">
                <h1> Hardware </h1>
                <router-link class="category" to="/products/?category=cooler"> Cooler </router-link>
                <router-link class="category" to="/products/?category=processor"> Processor </router-link>
                <router-link class="category" to="/products/?category=harddrive"> Hard Drive </router-link>
                <router-link class="category" to="/products/?category=motherboard"> Motherboard </router-link>
                <router-link class="category" to="/products/?category=powersupply"> Power Supply </router-link>
                <router-link class="category" to="/products/?category=memorystick"> Memory Stick </router-link>
                <router-link class="category" to="/products/?category=graphicscard"> Graphics Card </router-link>
                <router-link class="category" to="/products/?category=solidstatedrive"> Solid State Drive </router-link>

                <h1> Peripherals </h1>
                <router-link class="category" to="/products/?category=mouse"> Mouse </router-link>
                <router-link class="category" to="/products/?category=monitor"> Monitor </router-link>
                <router-link class="category" to="/products/?category=keyboard"> Keyboard </router-link>
                <router-link class="category" to="/products/?category=mousepad"> Mousepad </router-link>
                <router-link class="category" to="/products/?category=headphone"> Headphone </router-link>
            </Slide>

            <Search id="search" />
        </div>

        <router-link id="center" to="/">
            <img :src="require('@/assets/logo.svg')">
            <h1> Gaming Gem </h1>
        </router-link>

        <div id="right">
            <router-link class="button" to="/admin" v-if="Store.user?.admin"> <font-awesome-icon icon="gears" /> </router-link>
            <router-link class="button" to="/cart"> <font-awesome-icon icon="cart-shopping" /> </router-link>
            <router-link class="button" :to="Store.logged() ? '/profile' : '/login'"> <font-awesome-icon icon="circle-user" /> </router-link>
        </div>
    </nav>
</template>


<style scoped>
    nav {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--black);
    }


    /* Left */

    #left {
        width: 33%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    #search {
        height: 50%;
        width: max-content;
    }


    /* Center */

    #center {
        display: flex;
        font-size: 10px;
        font-weight: 500;
        color: var(--red);
        text-decoration: none;
        text-transform: uppercase;
    }

    #center img {
        width: 25px;
        margin-right: 10px;
    }


    /* Right */

    #right {
        width: 33%;
        text-align: end;
    }

    .button {
        border: none;
        margin: 0 10px;
        font-size: 25px;
        color: var(--white);
        background: transparent;
    }

    .button:hover {
        cursor: pointer;
        filter: brightness(70%);
    }
</style>


<style>
    /* Burger Menu */

    .bm-burger-button {
        width: 20px;
        height: 20px;
        margin: 0 10px;
        position: sticky;
        color: var(--grey);
    }

    .bm-cross-button {
        margin: 12px;
    }

    .bm-burger-button:hover, .bm-cross-button:hover {
        cursor: pointer;
        filter: brightness(70%);
    }

    .bm-burger-bars, .bm-cross {
        background-color: var(--white);
    }


    .bm-menu {
        padding-top: 35px;
        background-color: var(--black);
    }

    .bm-overlay {
        background: var(--background);
    }


    .bm-item-list {
        margin: 0;
        padding: 0;
    }

    .bm-item-list > h1 {
        margin: 0;
        font-weight: 700;
        font-size: 1.2rem;
        color: var(--white);
        padding: 30px 0 10px 20px;
        text-transform: uppercase;
    }

    .bm-item-list > .category {
        margin: 0;
        font-size: 1rem;
        font-weight: 300;
        padding: 5px 30px;
        color: var(--white);
    }

    .bm-item-list > .category:hover {
        cursor: pointer;
        background-color: var(--red);
    }
</style>
