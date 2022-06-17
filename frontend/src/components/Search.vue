<script setup>
    import { ref } from "vue";

    let query = ref("");

    function search(query) {
        return `/products/?search=${query}`;
    }
</script>


<template>
    <form class="shadow">
        <router-link :to="search(query)">
            <button> <font-awesome-icon icon="magnifying-glass" /> </button>
        </router-link>
        <input type="search" placeholder="Search Products" v-model="query">
    </form>
</template>


<style scoped>
    form {
        display: flex;
        border-radius: 3px;
        background-color: white;
    }


    input {
        height: 100%;
        padding: 0 5px;
        border: 0px solid transparent;
        background-color: var(--white);
    }

    input:focus {
        outline:none;
    }


    button {
        height: 80%;
        margin: 10% 0;
        cursor: pointer;
        color: var(--grey);
        border: 0px solid transparent;
        background-color: var(--white);
    }
</style>
