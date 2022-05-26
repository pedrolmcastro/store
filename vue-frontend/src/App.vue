<script setup>
import Navbar from './components/Navbar.vue'
import { RouterLink } from 'vue-router';


</script>


<template>
  <Navbar></Navbar>

  <router-view></router-view>
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
}

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

#app {
  width: 100vw;
  height: 100vh;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body {
  margin: 0;
  padding: 0;

  background-color: var(--bg-color);
}
</style>
