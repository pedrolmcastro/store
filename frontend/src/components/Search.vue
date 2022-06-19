<script setup>
    import { ref } from "vue";
    let search = ref("");
</script>


<template>
    <form class="shadow">
        <router-link :to="`/products/?search=${search}`">
            <button> <font-awesome-icon icon="magnifying-glass" /> </button>
        </router-link>
        <input type="search" placeholder="Search Products" v-model="search">
    </form>
</template>


<style scoped>
    form {
        display: flex;
        border-radius: 3px;
        background-color: white;
    }


    button {
        height: 80%;
        border: none;
        margin: 10% 0;
        cursor: pointer;
        color: var(--grey);
        background-color: var(--white);
    }

    input {
        height: 100%;
        border: none;
        outline: none;
        padding: 0 5px;
        background-color: var(--white);
    }
</style>
