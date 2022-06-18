<script setup>
    import Navbar from "@/components/Navbar.vue";
    import Footer from "@/components/Footer.vue";
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

        /* Toggle */
        --toggle-height: 1rem;
        --toggle-width: 2.5rem;
        --toggle-bg-on: var(--red);
        --toggle-border-on: var(--red);
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


    /* Container */

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

    .large {
        margin: 10%;
        padding: 1em;
        width: 120px;
        min-width: 30%;
    }
</style>
