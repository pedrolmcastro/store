import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";


// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faMagnifyingGlass, faCartShopping, faCircleUser, faGears, faPlus, faMinus, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faMagnifyingGlass, faCartShopping, faCircleUser, faGears, faPlus, faMinus, faPencil, faTrash);


// Libraries
import axios from "axios";
import Maska from "maska";
import VueCollapsiblePanel from "@dafcoe/vue-collapsible-panel";


import App from "@/App.vue";
import Home from "@/pages/Home.vue";
import Cart from "@/pages/Cart.vue";
import Edit from "@/pages/Edit.vue";
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
    { path: "/edit/:id", component: Edit},
    { path: "/profile", component: Profile },
    { path: "/products", component: Products },
    { path: "/products/:id", component: Product },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


// Axios Setup
axios.defaults.baseURL = "http://localhost:3001";


createApp(App)
    .use(router)
    .use(Maska)
    .use(VueCollapsiblePanel)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
