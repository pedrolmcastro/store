<script setup>
import { ref } from 'vue';

    let currentSearch = ref("");

</script>

<template>
    <form>
        <input v-model="currentSearch" type="search" placeholder="Search products">
        <router-link to="/products">
            <font-awesome-icon icon="magnifying-glass"></font-awesome-icon>
        </router-link>

    </form>
</template>


<style scoped>

input:focus {
    outline:none;
}

input, button {
    height: 100%;
    background-color: var(--white);
    padding: 0 5px;
    margin: 0px;
    border: 0px solid transparent;
}

</style>