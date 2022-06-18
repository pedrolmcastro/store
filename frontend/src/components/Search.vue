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
