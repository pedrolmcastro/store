<script setup>
import { useRoute } from 'vue-router';
import Data from '@/assets/datastore'

const pid = useRoute().params.id

const product = Data.products.find(product => product.id === pid)
const view_price = (product.price_cents / 100).toFixed(2)

</script>

<template>
    <div class="window">
        <div class="section" id="product">
            <div id="image">
                <img :src="require(`../assets/products/${product.id}.jpg`)">
                <!-- TODO Decidir se coloca multiplas imagens ou náo -->
            </div>
            <div id="main">
                <div>
                    <h1> {{ product.name }} </h1>
                    <p> {{ product.summary }} </p>
                </div>
                <div id="buy-options">
                    <div id="price-quantity">
                       <h1 id="price">${{view_price}}</h1>
                       <p id="quantity">{{ product.quantity > 0 ? `In Stock: ${product.quantity} units` : 'Out of Stock'}}</p>
                    </div>
                    <button class="action-button">
                        BUY
                    </button>
                </div>
            </div>
        </div>

        <div class="section" id="description">
            <h1>Description</h1>
            <p> {{product.description}} </p>
        </div>
    </div>
</template>

<style scoped>

p {
    white-space: pre-line;
    line-height: 2rem;
}
.window {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section {
    width: 65%;
    background-color: var(--white);
    padding: 2rem 3rem;
    box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.1);
}

#product {
    display: flex;
    margin: 5rem 0 1rem 0;
}

#description {
    margin: 1rem 0 5rem 0;
}

#image {
    width: 30%;
    margin-right: 3rem;
}

img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

#main {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
}

#buy-options {
    display: flex;
    justify-content: space-between;
}
#price {
    color: var(--red);
    margin: 0;
}

#quantity {
    margin: 0;
}

.action-button {
    padding: 0rem 3rem;
    font-size: 2rem;
}

</style>
