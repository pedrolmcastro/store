<script setup>
    import Search from './Search.vue';
</script>

<template>
    <nav id="navbar">
        <div class="nav-side" id="nav-left">
            <button class="nav-button">
                <font-awesome-icon icon="bars" />
            </button>
                <Search id="search-container"></Search>
        </div>

        <div>
            <router-link id="title" to="/"> 
                <img src="../assets/logo.svg">
                <h1> Gaming Gem </h1>
            </router-link>
        </div>

        <div class="nav-side" id="nav-right">
            <router-link class="nav-button" to="/cart">
                <font-awesome-icon icon="cart-shopping" />
            </router-link>
            <router-link class="nav-button" to="/profile">
                <font-awesome-icon icon="circle-user" />
            </router-link>
        </div>
    </nav>
</template>

<style scoped>

.nav-side {
    width: 33%;
}

#nav-right {
    text-align: end;
}

#navbar {
    width: 100vw;
    height: 60px;
    background-color: var(--black);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#nav-left {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 100%;
}

#search-container {
    width: max-content;
    height: max-content;
    height: 50%;
}

.nav-button {
    border: 0;
    margin: 0 20px;
    font-size: 30px;
    cursor: pointer;
    color: var(--white);
    background: transparent;
}

#title {
    display: flex;
    font-size: 20px;
    font-weight: 500;
    color: var(--red);
    text-transform: uppercase;
    text-decoration: none;
}

#title img {
    width: 30px;
    margin: 0 20px;
}
</style>