<script setup>
    import { useRouter } from "vue-router";
    import { computed, reactive, ref } from "vue";

    import Store from "@/Store.vue";
    import Data from "@/assets/datastore";

    const router = useRouter();


    const regex = {
        cvv: /\d\d\d/,
        expiration: /\d\d\/\d\d/,
        number: /\d\d\d\d \d\d\d\d \d\d\d\d \d\d\d\d/,
    }

    let step = ref(0);
    let total = computed(() => Store.cart.reduce((accumulator, item) => accumulator + item.quantity * item.product.price, 0));


    const checkout = reactive({
        cvv: "",
        name: "",
        error: "",
        number: "",
        expiration: "",
        enable: Store.logged() && Store.cart.length > 0,
        address: Store.logged() ? Store.user.address : "",
    });

    checkout.validate = function() {
        // Address
        if (this.address === "") return this.error = "Please, inform an address.";

        // Credit Card
        const year = parseInt("20" + this.expiration.slice(3, 5));
        const month = parseInt(this.expiration.slice(0, 2));

        if (this.cvv === "")                         return this.error = "Please, inform a CVV.";
        if (this.name === "")                        return this.error = "Please, inform a name.";
        if (this.number === "")                      return this.error = "Please, inform a number.";
        if (this.expiration === "")                  return this.error = "Please, inform a expiration date.";
        if (!regex.cvv.test(this.cvv))               return this.error = 'Sorry, invalid CVV, expected something like "123"';
        if (!regex.number.test(this.number))         return this.error = 'Sorry, invalid number, expected something like "1234 1234 1234 1234"';
        if (!regex.expiration.test(this.expiration)) return this.error = 'Sorry, invalid expiration date, expected something like "MM/YY"';
        if (new Date(year, month) < new Date())      return this.error = "Sorry, expired credit card";

        step.value = 2;
    }


    function confirm() {
        Store.cart.forEach(item => item.product.quantity -= item.quantity);

        Data.purchases.push({
            id: Data.purchases.length.toString(), // Sequential ID
            date: new Date().toISOString().slice(0, 10), // Current Date in YYYY-MM-DD
            user: Store.user.id,
            total: total.value,

            products: Store.cart.map(item => ({
                id: item.product.id, quantity: item.quantity,
                paid: item.product.price * item.quantity,
                image: item.product.image,
                name: item.product.name,
            })),
        });

        Store.cart = [];
        router.push('/');
    }


    function plus(item) {
        if (item.quantity < item.product.quantity) item.quantity++;
    }

    function minus(removed) {
        if (removed.quantity === 1) Store.remove(removed);
        else                        removed.quantity--;
    }
</script>


<template>
    <main class="window">
        <section class="shadow">
            <div class="options">
                <button :class="{ 'selected': step === 0 }" @click="step = 0"> Cart </button>
                <button :class="{ 'selected': step === 1 }" :disabled="step < 1" @click="step = 1"> Checkout </button>
                <button :class="{ 'selected': step === 2 }" :disabled="step < 2" @click="step = 2"> Confirmation </button>
            </div>

            <div class="center" v-if="step === 0">
                <div id="listing" v-for="item in Store.cart" :key="item.product.id">
                    <img :src="require('@/assets/products/' + item.product.image)">

                    <div id="info">
                        <span> {{ item.product.name }} </span>
                        <div>
                            <span> {{ item.quantity }} </span>
                            <button @click="plus(item)"> <font-awesome-icon icon="plus" /> </button>
                            <button @click="minus(item)"> <font-awesome-icon icon="minus" /> </button>
                        </div>
                    </div>

                    <span id="price"> {{ Store.price(item.product.price * item.quantity) }} </span>
                </div>

                <h1 v-if="Store.cart.length === 0"> Empty cart </h1>
                <div id="total" v-else> <strong> TOTAL: </strong> <span> {{ Store.price(total) }} </span> </div>

                <p v-if="!Store.logged()"> Please, <router-link id="link" to="/login"> log in</router-link> to place your order. </p>
                <button :class="{ 'action': true, 'disabled': !checkout.enable, 'large': true }" :disabled="!checkout.enable" @click.stop.prevent="step = 1"> Checkout </button>
            </div>

            <div class="center" v-else-if="step === 1">
                <form class="center inputs">
                    <h1> Delivery Address </h1>
                    <input type="text" placeholder="Address *" v-model="checkout.address" >
                </form>

                <form class="center inputs">
                    <h1> Card Information </h1>
                    <input type="text" placeholder="Name *" v-model="checkout.name">
                    <input type="text" placeholder="Number *" v-model="checkout.number" v-maska="'#### #### #### ####'">
                    <input type="text" placeholder="CVV *" v-maska="'###'" v-model="checkout.cvv">
                    <input type="text" placeholder="Expiration Date *" v-maska="'##/##'" v-model="checkout.expiration">
                </form>

                <small class="error"> {{ checkout.error }} </small>
                <button class="action large" @click="checkout.validate()"> Validade </button>
            </div>

            <div class="center" v-else-if="step === 2">
                <ul type="none">
                    <li> <strong> Delivery Address: </strong> {{ checkout.address }} </li>
                    <li> <strong> Credit Card: </strong> #### #### #### {{ checkout.number.slice(-4) }} </li>
                    <li> <strong> Final Price: </strong> {{ Store.price(total) }} </li>
                </ul>

                <button class="action large" @click="confirm()"> Confirm </button>
            </div>
        </section>
    </main>
</template>


<style scoped>
    .window {
        display: flex;
        justify-content: center;
    }

    .options button {
        width: calc(100% / 3);
    }


    section {
        margin: 5vh;
        width: 40vw;
        min-height: 70vh;
        background-color: var(--white);
    }


    /* Cart */

    #listing {
        width: 90%;
        height: 80px;
        display: flex;
        margin-bottom: 1rem;
        justify-content: space-between;
    }

    #listing img {
        width: 80px;
        height: 80px;
        object-fit: contain;
    }


    #info {
        display: flex;
        margin-left: 1rem;
        font-size: 1.3rem;
        margin-right: auto;
        flex-direction: column;
        justify-content: space-between;
    }

    #info button {
        all: unset;
        cursor: pointer;
        margin-left: 0.5rem;
    }

    #info span:first-of-type {
        padding-top: 3px;
    }


    #price {
        font-weight: 600;
        font-size: 1.5rem;
        color: var(--red);
    }


    #total {
        width: 90%;
        display: flex;
        font-weight: bolder;
        justify-content: space-between;
    }

    #total strong {
        font-size: 1.5rem;
    }

    #total span {
        font-size: 1.5rem;
        color: var(--red);
    }


    #link {
        color: var(--red);
    }


    /* Checkout */

    form {
        width: 100%;
    }

    form h1 {
        font-size: 1.2rem;
        text-transform: uppercase;
    }


    /* Confirm */

    ul {
        width: 90%;
    }

    ul li strong {
        font-weight: 500;
        font-size: 1.2rem;
    }
</style>
