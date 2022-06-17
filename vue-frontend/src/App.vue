<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


</script>


<template>
  <Navbar />
  <div id="content">
    <router-view></router-view>
  </div>
  <Footer />
</template>


<style> 
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

:root {
    --red: #FC3952;
    --white: #FFFFFF;
    --bg-color: #F3F3F3;
    --grey: #c4c4c4;
    --dark-grey: #505050;
    --black: #1F1F1F;
    --shadow: #00000033;
}

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

#app {
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#content {
  display: flex;
  flex-grow: 1;
}

html, body {
  margin: 0;
  padding: 0;

  background-color: var(--bg-color);
}


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


.action-button {
  all: unset;
  background-color: var(--red);
  color: var(--white);

  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
  text-transform: uppercase;
}

.action-button:hover {
  filter: brightness(120%);
}

.action-button:active {
  filter: brightness(90%);
}

.disabled-button, .disabled-button:hover, .disabled-button:active {
  background-color: grey;
  filter: brightness(100%);
  cursor: not-allowed;
}

.window {
  min-height: 95vh;
  flex-grow: 1;
}

.shadow {
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 2px 2px 2px var(--shadow);
}

.error {
  padding: 20px;
  text-align: center;
}


.inputs {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.inputs input {
  all: unset;
  width: 70%;
  margin: 5px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid var(--dark-grey);
}

.inputs input::placeholder {
  text-transform: uppercase;
}


</style>
