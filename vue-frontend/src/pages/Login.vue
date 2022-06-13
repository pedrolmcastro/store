<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Store from '../Store.vue';

let show = ref('login')
const router = useRouter()


let login = () => {
  Store.isLoggedIn = true
  router.push('/')
}

let register = () => {
  // validate
  login()
}

</script>

<template>
  <div id="window">
    <div id="form">
      <div class="options">
        <button :class="{ 'selected': show === 'login' }" @click="show = 'login'">LOG IN</button>
        <button :class="{ 'selected': show === 'register' }" @click="show = 'register'">REGISTER</button>
      </div>
      <div class="inputs" v-if="show === 'login'">
        <input type="text" placeholder="EMAIL">
        <input type="password" placeholder="PASSWORD">
        <button class="action-button" @click="login">LOG IN</button>
      </div>
      <div class="inputs" v-else>
        <input type="text" placeholder="NAME">
        <input type="text" placeholder="ADDRESS">
        <input type="text" placeholder="PHONE">
        <input type="email" placeholder="EMAIL">
        <input type="password" placeholder="PASSWORD">
        <input type="password" placeholder="CONFIRM PASSWORD">
        <button class="action-button" @click="register">REGISTER</button>
      </div>
    </div>
  </div>

</template>


<style scoped>

#window {
  width: 100%;
  display: flex;
  justify-content: center;
}

#form {
  margin: 5vh;
  width: 50vw;
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
  flex-grow: 1;
  padding: 10px;
  font-size: 1.5rem;
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
  font-size: 1.5rem;
  padding: 10px;
  border: 1px solid var(--dark-grey)
}

.action-button {
  all: unset;
  background-color: var(--red);
  color: var(--white);
  margin: 10%;
  padding: 1em;
  min-width: 30%;
  width: 120px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
</style>