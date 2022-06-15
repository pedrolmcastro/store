<script setup>
    import { ref, reactive } from "vue";
    import { useRouter } from "vue-router";

    import Store from "@/Store.vue";
    import Data from "@/assets/datastore";

    const router = useRouter();


    const phoneregex = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/;
    const emailregex = /^.+@.+\..+$/;

    let show = ref("login");


    const login = reactive({
        error: "",
        email: "",
        password: "",
    });

    login.validate = function() {
        if (this.email === "")            return this.error = "Please, inform an email.";
        if (this.password === "")         return this.error = "Please, inform a password.";
        if (!emailregex.test(this.email)) return this.error = 'Sorry, invalid email format, expected something like "user@email.com".';

        const user = Data.users.find(user => user.email === this.email);

        if (user === undefined)              return this.error = "Sorry, the user informed was not found.";
        if (user.password !== this.password) return this.error = "Sorry, the password informed is incorrect.";

        Store.isLoggedIn = true;
        router.push('/');
        return "";
    };


    const register = reactive({
        name: "",
        phone: "",
        error: "",
        email: "",
        address: "",
        confirm: "",
        password: "",
    });

    register.validate = function() {
        if (this.name === "")                                                 return this.error = "Please, inform a name.";
        if (this.email === "")                                                return this.error = "Please, inform an email.";
        if (this.password === "")                                             return this.error = "Please, inform a password.";
        if (this.confirm === "")                                              return this.error = "Please, confirm your password.";
        if (this.phone !== "" && !phoneregex.test(this.phone))                return this.error = 'Sorry, invalid phone format, expected something like "(12) 12345-1234".';
        if (!emailregex.test(this.email))                                     return this.error = 'Sorry, invalid email format, expected something like "user@email.com".';
        if (this.password !== this.confirm)                                   return this.error = "Sorry, the password informed and its confirmation do not match.";
        if (Data.users.find(user => user.email === this.email) !== undefined) return this.error = "Sorry, the informed email has already been used.";

        Data.users.push({
            id:       Data.users.length.toString(), // ID sequencial
            name:     this.name,
            address:  this.address,
            phone:    this.phone,
            email:    this.email,
            password: this.password,
            isAdmin:  false,
        });

        Store.isLoggedIn = true;
        router.push('/');
        return "";
    };
</script>

<template>
    <main class="window">
        <section id="container">
            <div class="options">
                <button :class="{ 'selected': show === 'login' }" @click="show = 'login'"> LOG IN </button>
                <button :class="{ 'selected': show === 'register' }" @click="show = 'register'"> REGISTER </button>
            </div>

            <div class="inputs" v-if="show === 'login'">
                <input type="email" placeholder="EMAIL *" v-model="login.email">
                <input type="password" placeholder="PASSWORD *" v-model="login.password">

                <div class="error"> <small> {{ login.error }} </small> </div>
                <button class="action-button" @click="login.validate()"> LOG IN </button>
            </div>

            <div class="inputs" v-else>
                <input type="text" placeholder="NAME *" v-model="register.name">
                <input type="text" placeholder="ADDRESS" v-model="register.address">
                <input type="tel" placeholder="PHONE" v-model="register.phone" v-maska="'(##) #####-####'">
                <input type="email" placeholder="EMAIL *" v-model="register.email">
                <input type="password" placeholder="PASSWORD *" v-model="register.password">
                <input type="password" placeholder="CONFIRM PASSWORD *" v-model="register.confirm">

                <div class="error"> <small> {{ register.error }} </small> </div>
                <button class="action-button" @click="register.validate()"> REGISTER </button>
            </div>
        </section>
    </main>
</template>

<style scoped>
    .window {
        display: flex;
        justify-content: center;
    }

    #container {
        margin: 5vh;
        width: 30vw;
        min-height: 70vh;
        overflow: hidden;
        border-radius: 5px;
        box-sizing: border-box;
        background-color: var(--white);
        box-shadow: 2px 2px 2px var(--shadow);
    }


    .options {
        display: flex;
        margin-bottom: 10%;
        align-items: center;
        justify-content: center;
    }

    .options button {
        flex-grow: 1;
        border: none;
        padding: 10px;
        font-size: 1rem;
        cursor: pointer;
        background-color: var(--white);
    }

    .selected {
        color: var(--red);
        border-bottom: 2px solid var(--red) !important;
    }


    .inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .inputs input {
        all: unset;
        width: 70%;
        margin: 10px;
        padding: 10px;
        font-size: 1rem;
        border: 1px solid var(--dark-grey);
    }

    .action-button {
        margin: 10%;
        padding: 1em;
        width: 120px;
        min-width: 30%;
    }


    .error {
        width: 100%;
        padding: 10px;
        color: var(--red);
        text-align: center;
    }
</style>
