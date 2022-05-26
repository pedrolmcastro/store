<script setup>
import { ref } from 'vue';

    let query = ref("");
    
    function toLink(query) {
        return `/products/?search=${query}`
    }

</script>

<template>
    <form id="search-container">
        <router-link id="search-button" :to="toLink(query)">
            <button>
                <font-awesome-icon icon="magnifying-glass"></font-awesome-icon>
            </button>
        </router-link>
        <input v-model="query" type="search" placeholder="Search products">
    </form>
</template>


<style scoped>

#search-container {
    background-color: white;
    display: flex;
}

input:focus {
    outline:none;
}

input, button  {
    height: 100%;
    background-color: var(--white);
    margin: 0px;
    border: 0px solid transparent;
    padding: 0 5px;
}

</style>