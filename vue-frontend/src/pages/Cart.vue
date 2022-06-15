<script setup>
import { computed, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import Store from '../Store.vue';
import Data from '@/assets/datastore';

const cartItems = computed(() => {
  return Store.cart.map(item => {
    const pid = Data.products.findIndex(product => item.id === product.id);

    return {
      product: Data.products[pid],
      quantity: item.quantity,
      exhibtion_price: (Data.products[pid].price_cents / 100).toFixed(2)
    }
  })
})

const checkoutDisabled = computed(() => !Store.userId || cartItems.value.length === 0)

const totalValue = computed((() =>
  (cartItems.value.reduce((acc, item) => acc + item.quantity * item.product.price_cents, 0) / 100).toFixed(2)
))

const plus = (item) => {
  if (item.product.quantity > item.quantity) {
    Store.cart.find((i) => i.id === item.product.id).quantity += 1
  }
}

const minus = (item) => {
  if (item.quantity > 0) {
    Store.cart.find((i) => i.id === item.product.id).quantity -= 1
  }

  if (item.quantity === 1) {
    Store.cart = Store.cart.filter(i => i.id != item.product.id)
  }
}

let step = ref(0)
const router = useRouter()

const checkLogged = () => {
  if (!Store.userId) {
    return router.push('/login')
  }

  checkout.address = Data.users.find(user => user.id === Store.userId).address
  step.value = 1
}

const checkout = reactive({
  address: '',
  cardName: '',
  cardNumber: '',
  cvv: '',
  expirationDate: '',
  error: '',
})

const validateData = () => {
  if (checkout.address === '')
    return 'Please supply an address.'
  if (checkout.cardName === '')
    return 'Please supply the name written on your credit card.'
  if (!checkout.cardNumber.match(/\d\d\d\d \d\d\d\d \d\d\d\d \d\d\d\d/))
    return 'Please supply a valid 16 digit credit card number.'
  if (!checkout.cvv.match(/\d\d\d/))
    return 'Please supply a valid 3 digit CVV.'
  if (!checkout.expirationDate.match(/\d\d\/\d\d/))
    return 'Please supply a valid expiration date.'

  const year = parseInt('20' + checkout.expirationDate.slice(-2))
  const month = parseInt(checkout.expirationDate.slice(0, 2))
  if (new Date(year, month) < new Date())
    return 'Expired credit card.'

  step.value = 2
}

const confirmPurchase = () => {
  Data.previous_purchases.push({
    id: Data.previous_purchases.length.toString(),
    user: Store.userId,
    products: cartItems.value.map(item => ({
      id: item.product.id,
      quantity: item.quantity,
      paidPrice: item.product.price_cents,
    }))
  })

  cartItems.value.forEach(item => { 
    console.log(item)
    let p = Data.products.find(product => item.product.id === product.id)
    console.log(p)
    p.quantity -= item.quantity

    let x = Data.products.find(product => item.product.id === product.id)
    console.log(x)
  })
  Store.cart = []
  router.push('/profile')
}

</script>

<template>
  <div class="window">
    <div id="container">
      <div class="options">
        <button :class="{ 'selected': step >= 0 }" @click="step = 0">CART</button>
        <button :class="{ 'selected': step >= 1 }" :disabled="step < 1" @click="checkLogged">CHECKOUT</button>
        <button :class="{ 'selected': step >= 2 }" :disabled="step < 2" @click="confirmPurchase">CONFIRMATION</button>
      </div>
      <div class="list" v-if="step === 0">
        <div class="listing" v-for="item in cartItems" :key="item.product.id">
          <img :src="require(`../assets/products/${item.product.id}.jpg`)">

          <div class="name-quantity">
            <span>{{ item.product.name }}</span>
            <div class="quantity">
              <span>{{ item.quantity }}</span>
              <button @click="plus(item)">
                <font-awesome-icon icon="plus" />
              </button>
              <button @click="minus(item)">
                <font-awesome-icon icon="minus" />
              </button>
            </div>
          </div>

          <div class="price">
            <span>${{ item.exhibtion_price }}</span>
          </div>
        </div>

        <h2 v-if="cartItems.length === 0">Empty cart</h2>
        <div class="total-value" v-else>
          <h2>TOTAL:</h2>
          <h2 class="red">${{ totalValue }}</h2>
        </div>

        <p v-if="!Store.userId">
          <router-link to="/login">Log in </router-link>to place your order
        </p>
        <button class="action-button" :class="{ 'disabled-button': checkoutDisabled }" :disabled="checkoutDisabled"
          @click="checkLogged">CHECKOUT</button>
      </div>

      <div class="list" v-else-if="step === 1">
        <div class="form-subtitle">
          <h3>DELIVERY ADDRESS</h3>
        </div>
        <input v-model="checkout.address" type="text" placeholder="* ADDRESS">
        <div class="form-subtitle">
          <h3>CARD INFORMATION</h3>
        </div>
        <input v-model="checkout.cardName" type="text" placeholder="* NAME ON CARD">
        <input v-model="checkout.cardNumber" type="text" placeholder="* CARD NUMBER" v-maska="'#### #### #### ####'">
        <input v-model="checkout.cvv" type="text" placeholder="* CVV" v-maska="'###'">
        <input v-model="checkout.expirationDate" type="text" placeholder="* EXPIRATION DATE" v-maska="'##/##'">

        <p>{{ checkout.error }}</p>
        <button class="action-button" @click="checkout.error = validateData()">VALIDATE</button>
      </div>

      <div class="list" v-else-if="step === 2">
        <table>
          <tr>
            <td>Delivery Address</td>
            <td>{{ checkout.address }}</td>
          </tr>
          <tr>
            <td>Credit Card</td>
            <td>#### #### #### {{checkout.cardNumber.slice(-4)}}</td>
          </tr>
          <tr>
            <td>Delivery Fees</td>
            <td>Free of charge</td>
          </tr>
          <tr>
            <td>Final Price</td>
            <td>${{ totalValue }}</td>
          </tr>
        </table>
        <button class="action-button" @click="confirmPurchase">CONFIRM</button>
      </div>
    </div>
  </div>

</template>


<style scoped>
.window {
  display: flex;
  justify-content: center;
}

#container {
  margin: 5vh;
  width: 40vw;
  min-height: 70vh;
  background-color: var(--white)
}

.options {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}

.options button {
  background-color: var(--white);
  border: none;
  cursor: pointer;
  width: calc(100% * 1/3);
  padding: 10px;
  font-size: 1.2rem;
}

.total-value {
  display: flex;
  justify-content: space-between;
  font-weight: bolder;
  width: 90%;
}

.selected {
  color: var(--red);
  border-bottom: 2px solid var(--red) !important;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-subtitle {
  width: 73%;
}

.list h3 {
  margin-right: auto;
}

input {
  all: unset;
  width: 70%;
  margin: 10px;
  font-size: 1rem;
  padding: 10px;
  border: 1px solid var(--dark-grey)
}

.action-button {
  margin: 10%;
  padding: 1em;
  min-width: 30%;
  width: 120px;
}

.disabled-button {
  margin-top: 2%;
}

.listing {
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 80px;
  margin-bottom: 1rem;
}

.listing img {
  width: 80px;
  height: 80px;
}

.name-quantity button {
  all: unset;
  margin-left: 0.5rem;
  cursor: pointer;
}

.name-quantity {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
  margin-right: auto;
  font-size: 1.3rem;
}

.price {
  color: var(--red);
  font-size: 1.5rem;
  font-weight: bold;
}

.red {
  color: var(--red);
}

table {
  font-size: 1.5rem;
  width: 70%;
  border-collapse: collapse;
}

td {
  border: 1px solid black;
}

</style>