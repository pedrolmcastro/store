<script setup>
import { computed, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import Store from '../Store.vue';
import Data from '@/assets/datastore';

let step = ref(0)
const router = useRouter()

const checkout = reactive({
  address: "",
  cardName: "",
  cardNumber: "",
  cvv: "",
  expirationDate: "",
})

const checkLogged = () => {
  if (!Store.userId) {
    return router.push('/login')
  }

  Data.users.isLoggedIn()
  step.value = 1

}

const validateData = () => {
  step.value = 2
}

const confirmPurchase = () => {
  // Finish purchase
  router.push('/profile')
}

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

</script>

<template>
  <div class="window">
    <div id="container">
      <div class="options">
        <button :class="{ 'selected': step >= 0 }" @click="step = 0">CART</button>
        <button :class="{ 'selected': step >= 1 }" :disabled="step < 1" @click="checkLogged">CHECKOUT</button>
        <button :class="{ 'selected': step >= 2 }" :disabled="step < 2" @click="validateData">CONFIRMATION</button>
      </div>
      <div class="list" v-if="step === 0">

        <div class="listing" v-for="item in cartItems" :key="item.product.id">
          <img :src="require(`../assets/products/${item.product.id}.jpg`)">

          <div class="name-quantity">
            <span>{{ item.product.name }}</span>
            <div class="quantity">
              <span>{{ item.quantity }}</span>
              <button @click="() => plus(item)">
                <font-awesome-icon icon="plus" />
              </button>
              <button @click="() => minus(item)">
                <font-awesome-icon icon="minus" />
              </button>
            </div>
          </div>

          <div class="price">
            <span>${{ item.exhibtion_price }}</span>
          </div>
        </div>

        <div class="total-value">
          <h2>TOTAL:</h2>
          <h2 class="red">${{ totalValue }}</h2>
        </div>

        <p v-if="!Store.userId">
          <router-link to="/login">Log in </router-link>to place your order
        </p>
        <button class="action-button" :class="{ 'disabled-button': !Store.userId }" :disabled="!Store.userId"
          @click="checkLogged">CHECKOUT</button>
      </div>

      <div class="list" v-else-if="step === 1">
        <h3>DELIVERY ADDRESS</h3>
        <input type="text" placeholder="* ADDRESS">

        <h3>CARD INFORMATION</h3>
        <input type="email" placeholder="* NAME ON CARD">
        <input type="text" placeholder="* CREDIT CARD">
        <input type="text" placeholder="* CVV">
        <input type="text" placeholder="* EXPIRATION DATE">

        <button class="action-button" @click="validateData">VALIDATE</button>
      </div>

      <div class="list" v-else-if="step === 2">
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
</style>