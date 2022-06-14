<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Store from '../Store.vue';
import Listing from '@/components/Listing.vue';

let step = ref(0)
const router = useRouter()

const checkLogged = () => {
  if (!Store.isLoggedIn) {
    // Popup
    router.push('/login')
  } else {
    step.value = 1
  }
}

const validateData = () => {
  step.value = 2
}

const confirmPurchase = () => {
  // Finish purchase
  router.push('/profile')
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
      <div class="inputs" v-if="step === 0">
        <Listing v-for="item in Store.cart" :key="item.id" :id="item.id" :quantity="item.quantity" :value="item.price_cents / 100"></Listing>
        
        <button class="action-button" @click="checkLogged">CHECKOUT</button>
      </div>
      <div class="inputs" v-else-if="step === 1">
        <h2>DELIVERY ADDRESS</h2>
        <input type="text" placeholder="ZIP CODE">
        <input type="text" placeholder="ADDRESS">

        <h2>CARD INFORMATION</h2>
        <input type="email" placeholder="NAME ON CARD">
        <input type="text" placeholder="CREDIT CARD">
        <input type="text" placeholder="CVV">
        <input type="text" placeholder="EXPIRATION DATE">
        <button class="action-button" @click="validateData">VALIDATE</button>
      </div>
      <div class="inputs" v-else-if="step === 2">
        
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
  width: 30vw;
  min-height: 70vh;
  background-color: var(--white)
}
.options {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
}
.options button {
  background-color: var(--white);
  border: none;
  cursor: pointer;
  width: calc(100% * 1/3);
  padding: 10px;
  font-size: 1.2rem;
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

</style>