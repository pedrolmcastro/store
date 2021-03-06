<script setup>
    import { onMounted } from "vue";

    import Store from "./Store.vue";
    import Navbar from "@/components/Navbar.vue";
    import Footer from "@/components/Footer.vue";


    onMounted(() => {
        const token = localStorage.getItem("token");
        if (token) Store.login(token);
    });
</script>


<template>
    <Navbar />
    <div id="content">
        <router-view></router-view>
    </div>
    <Footer />
</template>


<style> 
    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

    :root {
        --red: rgb(252, 57, 82);
        --grey: rgb(80, 80, 80);
        --black: rgb(31, 31, 31);
        --white: rgb(255, 255, 255);
        --shadow: rgba(0, 0, 0, 0.2);
        --background: rgb(243, 243, 243);
    }


    * {
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }

    #app {
        display: flex;
        min-width: 100%;
        min-height: 100vh;
        flex-direction: column;
        justify-content: space-between;

        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    #content {
        flex-grow: 1;
        display: flex;
    }

    html, body {
        margin: 0;
        padding: 0;
        background-color: var(--background);
    }


    .window {
        flex-grow: 1;
        min-height: 95vh;
    }


    /* Containers */
    
    .small {
        margin: 5vh;
        width: 30vw;
        min-height: 70vh;
        background-color: var(--white);
    }

    .medium {
        margin: 5vh;
        width: 40vw;
        min-height: 70vh;
        background-color: var(--white);
    }

    .large {
        width: 65vw;
        margin: 5rem;
        padding: 2rem 3rem;
        background-color: var(--white);
    }

    .center {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .shadow {
        overflow: hidden;
        border-radius: 5px;
        box-shadow: 2px 2px 2px var(--shadow);
    }


    /* Options */

    .options {
        display: flex;
        margin-bottom: 10%;
        align-items: center;
        justify-content: center;
    }

    .options button {
        border: none;
        padding: 10px;
        font-size: 1rem;
        cursor: pointer;
        text-transform: uppercase;
        background-color: var(--white);
    }

    .selected {
        color: var(--red);
        border-bottom: 2px solid var(--red) !important;
    }


    /* Inputs */

    .inputs input {
        all: unset;
        width: 70%;
        margin: 5px;
        padding: 10px;
        font-size: 1rem;
        border: 1px solid var(--grey);
    }

    .inputs textarea {
        all: unset;
        margin: 5px;
        padding: 10px;
        font-size: 1rem;
        line-height: 1.2rem;
        border: 1px solid var(--grey);
    }

    .inputs input::placeholder, .inputs textarea::placeholder {
        text-transform: uppercase;
    }

    .error {
        padding: 20px;
        text-align: center;
    }


    /* Listing */

    .listing {
        display: flex;
        margin-bottom: 1rem;
        justify-content: space-between;
    }

    .listing img {
        object-fit: contain;
    }

    .listing .information {
        display: flex;
        margin-left: 1rem;
        margin-right: auto;
        flex-direction: column;
        justify-content: space-between;
    }


    /* Button */

    .action {
        all: unset;
        cursor: pointer;
        transition: 0.2s;
        border-radius: 5px;
        text-align: center;
        color: var(--white);
        text-transform: uppercase;
        background-color: var(--red);
    }

    .action:hover {
        filter: brightness(130%);
    }

    .disabled, .disabled:hover, .disabled:active {
        cursor: not-allowed;
        filter: brightness(100%);
        background-color: var(--grey);
    }

    .big {
        margin: 10%;
        padding: 1em;
        width: 120px;
        min-width: 30%;
    }


    /* Selector */

    .selector {
        border: none;
        outline: none;
        font-size: 1rem;
        background-color: transparent;
    }


    /* Media Queries */

    @media (max-width: 768px) {
        .small, .medium, .large {
            margin: 2vw;
            width: 90vw;
        }

        .options button {
            font-size: 0.8rem;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        .small {
            width: 60vw;
        }

        .medium {
            width: 70vw;
        }
    }

    @media (min-width: 1025px) and (max-width: 1380px) {
        .small {
            width: 40vw;
        }

        .medium {
            width: 45vw;
        }
    }
</style>
