<script setup>
import { ref } from 'vue';

    let currentTab = ref(0);

    function select(tab) {
        currentTab = tab
    }

</script>
<template>
    <div id="container">
        <div id="selector">
            <button id="login" :key="0" @click="select(0)">LOG IN</button>
            <button id="register" :key="1" @click="select(1)" >REGISTER</button>
        </div>
        <form>
            <input type="text">
        </form>
    </div>
</template>


<style scoped>

    #selector {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-bottom: 10px;
    }
    #selector button {
        flex-grow: 1;
        background-color: var(--white);
        border: none;
    }
    
    #container {
        background-color: var(--white);
        width: 50vw;
        text-align: center;
    }

    form {
        width: 100%;
        padding: 1em;
    }

    input {
        width: 80%;
        border: 1px solid var(--dark-grey);
    }

    input:focus {
        outline: none;
    }

</style>