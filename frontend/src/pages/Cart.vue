<script setup>
    import axios from "axios";
    import { useRouter } from "vue-router";
    import { computed, reactive, ref } from "vue";

    import Store from "@/Store.vue";

    const router = useRouter();


    const regex = {
        cvv: /\d{3}/,
        expiration: /\d{2}\/\d{2}/,
        number: /\d{4} \d{4} \d{4} \d{4}/,
    };

    let step = ref(0);
    let enable = computed(() => Store.logged() && !Store.empty());
    let total = computed(() => Store.cart.reduce((accumulator, item) => accumulator + item.quantity * item.product.price, 0));


    const checkout = reactive({
        cvv: "",
        name: "",
        error: "",
        number: "",
        expiration: "",
        address: Store.logged() ? Store.user.address : "",
    });

    checkout.validate = function() {
        // Address
        if (this.address === "") return this.error = "Please, inform an address.";

        // Credit Card
        const year = parseInt("20" + this.expiration.slice(3, 5));
        const month = parseInt(this.expiration.slice(0, 2));

        if (this.name === "")                        return this.error = "Please, inform a name.";
        if (this.number === "")                      return this.error = "Please, inform a number.";
        if (this.cvv === "")                         return this.error = "Please, inform a CVV.";
        if (this.expiration === "")                  return this.error = "Please, inform a expiration date.";
        if (!regex.number.test(this.number))         return this.error = 'Sorry, invalid number, expected something like "1234 1234 1234 1234".';
        if (!regex.cvv.test(this.cvv))               return this.error = 'Sorry, invalid CVV, expected something like "123".';
        if (!regex.expiration.test(this.expiration)) return this.error = 'Sorry, invalid expiration date, expected something like "MM/YY".';
        if (month < 1 || month > 12)                 return this.error = "Sorry, invalid month on expiration date, expected a number between 01 and 12.";
        if (new Date(year, month) < new Date())      return this.error = "Sorry, expired credit card.";

        step.value = 2;
    };


    async function confirm() {
        const purchase = {
            user: Store.user.id,
            total: total.value,
            date: new Date().toISOString().slice(0, 10), // Current Date in YYYY-MM-DD

            products: Store.cart.map(item => ({
                id: item.product.id,
                quantity: item.quantity,
                paid: item.product.price * item.quantity,
                image: item.product.image,
                name: item.product.name,
            })),
        };

        await axios.post("/purchases", purchase);

        Store.clear();
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
        <section class="medium shadow">
            <div class="options">
                <button :class="{ 'selected': step === 0 }" @click="step = 0"> Cart </button>
                <button :class="{ 'selected': step === 1 }" :disabled="step < 1" @click="step = 1"> Checkout </button>
                <button :class="{ 'selected': step === 2 }" :disabled="step < 2" @click="step = 2"> Confirmation </button>
            </div>

            <div class="center" v-if="step === 0">
                <div class="listing" v-for="item in Store.cart" :key="item.product.id">
                    <img :src="item.product.image ? `http://localhost:3001/images/${item.product.image}` : require('@/assets/undefined.webp')">

                    <div class="information">
                        <span> {{ item.product.name }} </span>
                        <div>
                            <span> {{ item.quantity }} </span>
                            <button @click="plus(item)"> <font-awesome-icon icon="plus" /> </button>
                            <button @click="minus(item)"> <font-awesome-icon icon="minus" /> </button>
                        </div>
                    </div>

                    <span id="price"> {{ Store.price(item.product.price * item.quantity) }} </span>
                </div>

                <h1 v-if="Store.empty()"> Empty cart </h1>
                <div id="total" v-else> <strong> TOTAL: </strong> <span> {{ Store.price(total) }} </span> </div>

                <p v-if="!Store.logged()"> Please, <router-link id="router" to="/login"> log in</router-link> to place your order. </p>
                <button :class="{ 'action': true, 'disabled': !enable, 'big': true }" :disabled="!enable" @click.stop.prevent="step = 1"> Checkout </button>
            </div>

            <div class="center" v-else-if="step === 1">
                <form class="center inputs">
                    <h1> Delivery Address </h1>
                    <input type="text" placeholder="Address *" v-model="checkout.address">

                    <h1> Card Information </h1>
                    <input type="text" placeholder="Name *" v-model="checkout.name">
                    <input type="text" placeholder="Number *" v-model="checkout.number" v-maska="'#### #### #### ####'">
                    <input type="text" placeholder="CVV *" v-maska="'###'" v-model="checkout.cvv">
                    <input type="text" placeholder="Expiration Date *" v-maska="'##/##'" v-model="checkout.expiration">
                </form>

                <small class="error"> {{ checkout.error }} </small>
                <button class="action big" @click="checkout.validate()"> Validade </button>
            </div>

            <div class="center" v-else-if="step === 2">
                <ul type="none">
                    <li> <strong> Delivery Address: </strong> {{ checkout.address }} </li>
                    <li> <strong> Credit Card: </strong> #### #### #### {{ checkout.number.slice(-4) }} </li>
                    <li> <strong> Final Price: </strong> {{ Store.price(total) }} </li>
                </ul>

                <button class="action big" @click="confirm()"> Confirm </button>
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


    /* Cart */

    .listing {
        width: 90%;
        height: 80px;
    }

    .listing img {
        width: 80px;
        height: 80px;
    }


    .listing .information {
        font-size: 1.3rem;
    }

    .information button {
        all: unset;
        cursor: pointer;
        margin-left: 0.3rem;
    }

    .information > span {
        padding-top: 2px;
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

    #router {
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
