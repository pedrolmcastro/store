import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";


// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCircleUser, faCartShopping, faBars, faMagnifyingGlass, faCaretDown, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleUser, faCartShopping, faBars, faMagnifyingGlass, faCaretDown, faMinus, faPlus);


// Maska
import Maska from "maska";


// Collapsible Panel
import VueCollapsiblePanel from "@dafcoe/vue-collapsible-panel";


import App from "@/App.vue";
import Home from "@/pages/Home.vue";
import Cart from "@/pages/Cart.vue";
import Login from "@/pages/Login.vue";
import Admin from "@/pages/Admin.vue";
import Product from "@/pages/Product.vue";
import Profile from "@/pages/Profile.vue";
import Products from "@/pages/Products.vue";


// Router Setup
const routes = [
    { path: '/', component: Home },
    { path: "/cart", component: Cart },
    { path: "/login", component: Login },
    { path: "/admin", component: Admin },
    { path: "/profile", component: Profile },
    { path: "/products", component: Products },
    { path: "/products/:id", component: Product },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


createApp(App)
    .use(router)
    .use(Maska)
    .use(VueCollapsiblePanel)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
