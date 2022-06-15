<script setup>
    import Store from "@/Store.vue";
    import Search from "@/components/Search.vue";
</script>


<template>
    <nav>
        <div id="left" class="side">
            <button class="button"> <font-awesome-icon icon="bars" /> </button>
            <Search id="search"></Search>
        </div>

        <router-link id="title" to="/">
            <img :src="require('@/assets/logo.svg')">
            <h1> Gaming Gem </h1>
        </router-link>

        <div id="right" class="side">
            <router-link class="button" to="/cart"> <font-awesome-icon icon="cart-shopping" /> </router-link>
            <router-link class="button" :to="Store.userId ? '/profile' : '/login'"> <font-awesome-icon icon="circle-user" /> </router-link> <!-- TODO: Admin route -->
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

    .button {
        border: 0;
        margin: 0 10px;
        font-size: 25px;
        color: var(--white);
        background: transparent;
    }

    .button:hover {
        cursor: pointer;
        color: var(--grey);
    }


    .side {
        width: 33%;
    }

    #left {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: left;
    }

    #right {
        text-align: end;
    }


    #title {
        display: flex;
        font-size: 10px;
        font-weight: 500;
        color: var(--red);
        text-decoration: none;
        text-transform: uppercase;
    }

    #title img {
        width: 25px;
        margin: 0 10px;
    }

    #search {
        height: 50%;
        width: max-content;
    }
</style>
