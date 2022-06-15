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
    --grey: #E0E0E0;
    --dark-grey: #2D2D2D;
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

.action-button {
  all: unset;
  background-color: var(--red);
  color: var(--white);

  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
}

.action-button:hover {
  filter: brightness(110%);
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
  flex-grow: 1;
}


</style>
