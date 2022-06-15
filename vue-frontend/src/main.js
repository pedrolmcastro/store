import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'


// Router Setup
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Products from './pages/Products.vue'
import Product from './pages/Product.vue'
import Checkout from './pages/Checkout.vue'
import Cart from './pages/Cart.vue'
import Profile from './pages/Profile.vue'
import Admin from './pages/Admin.vue'

// Mapping components to routes
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/products', component: Products },
  { path: '/products/:id', component: Product },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout },
  { path: '/profile', component: Profile },
  { path: '/admin', component: Admin },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleUser, faCartShopping, faBars, faMagnifyingGlass, faCaretDown, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
// import faRegular from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCircleUser, faCartShopping, faBars, faMagnifyingGlass, faCaretDown, faMinus, faPlus)

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app")
