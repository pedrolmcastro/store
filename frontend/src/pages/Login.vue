<script setup>
    import { ref, reactive } from "vue";
    import { useRouter } from "vue-router";

    import Store from "@/Store.vue";
    import Data from "@/assets/datastore";

    const router = useRouter();


    const regex = {
        phone: /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/,
        email: /^.+@.+\..+$/,
    }

    let show = ref("login");


    const login = reactive({
        error: "",
        email: "",
        password: "",
    });

    login.validate = function() {
        if (this.email === "")             return this.error = "Please, inform an email.";
        if (this.password === "")          return this.error = "Please, inform a password.";
        if (!regex.email.test(this.email)) return this.error = 'Sorry, invalid email format, expected something like "user@email.com".';

        const user = Data.users.find(user => user.email === this.email);

        if (user === undefined)              return this.error = "Sorry, the user informed was not found.";
        if (user.password !== this.password) return this.error = "Sorry, the password informed is incorrect.";

        Store.user = user;
        router.push('/');
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
        if (this.phone !== "" && !regex.phone.test(this.phone))               return this.error = 'Sorry, invalid phone format, expected something like "(12) 12345-1234".';
        if (!regex.email.test(this.email))                                    return this.error = 'Sorry, invalid email format, expected something like "user@email.com".';
        if (this.password !== this.confirm)                                   return this.error = "Sorry, the password informed and its confirmation do not match.";
        if (Data.users.find(user => user.email === this.email) !== undefined) return this.error = "Sorry, the informed email has already been used.";

        const user = {
            id:       Data.users.length.toString(), // Sequential ID
            name:     this.name,
            address:  this.address,
            phone:    this.phone,
            email:    this.email,
            password: this.password,
            admin:    false,
        };
        
        Store.user = user;
        Data.users.push(user);
        router.push('/');
    };
</script>


<template>
    <main class="window">
        <section class="shadow">
            <div class="options">
                <button :class="{ 'selected': show === 'login' }" @click="show = 'login'"> Log In </button>
                <button :class="{ 'selected': show === 'register' }" @click="show = 'register'"> Register </button>
            </div>

            <form class="center inputs" v-if="show === 'login'">
                <input type="email" placeholder="Email *" v-model="login.email">
                <input type="password" placeholder="Password *" v-model="login.password">

                <small class="error"> {{ login.error }} </small>
                <button class="action large" @click.stop.prevent="login.validate()"> Log In </button>
            </form>

            <form class="center inputs" v-else>
                <input type="text" placeholder="Name *" v-model="register.name">
                <input type="text" placeholder="Address" v-model="register.address">
                <input type="tel" placeholder="Phone" v-model="register.phone" v-maska="'(##) #####-####'">
                <input type="email" placeholder="Email *" v-model="register.email">
                <input type="password" placeholder="Password *" v-model="register.password">
                <input type="password" placeholder="Confirm Password *" v-model="register.confirm">

                <small class="error"> {{ register.error }} </small>
                <button class="action large" @click.stop.prevent="register.validate()"> Register </button>
            </form>
        </section>
    </main>
</template>


<style scoped>
    .window {
        display: flex;
        justify-content: center;
    }

    .options button {
        width: 50%;
    }


    section {
        margin: 5vh;
        width: 30vw;
        min-height: 70vh;
        background-color: var(--white);
    }
</style>
