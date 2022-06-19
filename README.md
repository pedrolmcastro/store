# Gaming Gem

- Pedro Lucas de Moliner de Castro - 11795784
- Lucas Massao Fukusawa Dagnone - 11295810
- João Guilherme Jarochinski Marinho - 10698193


## 1. Requirements

The assignment is to build an online store and the products chosen to be sold are **computer components** and **peripherals**. The application must have two types of users: **customers** and **administrators**, a cart system and accept payments with credit cards. An extra functionality is also required so a **search bar** and a **categories menu** were added. Lastly, the system should provide accessibility requirements, good usability and be responsive.

- **User Information:** ID, name, password, email, phone, address and if is admin.
- **Product Information:** ID, name, category, summary, description, quantity, price and image.
- **Purchase Information:** ID, user, date, total price and a list of the products with ID, quantity and price paid.

> In the frontend mock data there are 2 created accounts, `user@email.com/user` and `admin@email.com/admin`, 5 products and 1 purchase.


## 2. Project Description

**Gaming Gem** is an online computer components and peripherals store focused on hardware for gaming. The website will be presented as a Single Page Application and its full Mockup can be seen in [Figma](https://www.figma.com/file/ozZUSnOeuyotmszMJvDc2P/Vuetify-Components-(Community)?node-id=13144%3A605) on the "Store" page. A partial interactive one, including Login/Register, Home and Product Description, can be found in [Github Pages](https://pedrolmcastro.github.io/store/mockup/pages/home.html) and its source code in the [/mockup](https://github.com/pedrolmcastro/store/tree/main/mockup) directory.

- **Sections:** Login/Register, Home, Product Catalogue, Product Description, Cart, Payment, Profile, Manage Products/Users and Add/Edit Product.

![Navigation Diagram](mockup/diagram/navigation.png)

> The above Navigation Diagram refers to the original plan in the mockup phase, since then one change has been made were the admin route for the Manage Products/Costumers page is separated from the one linking users to their profiles.


## 3. Comments About the Code

The client side was developed using Vue 3 with the following project structure: `App.vue` has the app template and general CSS styles, `Store.vue` holds global variables and functions, the mock data are in `assets/datastore.js` and custom components are located under the `components/` or `pages/` directories. The server side will be implemented using Node and Express.


## 4. Test Plan

Since it requires user inputs through a graphic interface, no automated tests were created for the frontend side of the project, but the mock data are sufficient to allow reasonable manual testing. The Jest framework will be used for unit testing in the backend code base.

<!-- TODO: Test Script -->


## 5. Test Results

TODO


## 6. Build Procedures

To build the client side of this website, go to the frontend directory and compile the Vue project with the following commands:

```shell
cd frontend/
npm install
npm run serve
```

Now you will be able to see the application running on your browser by accessing the [localhost:8080](http://localhost:8080/). To terminate the execution hit `Ctrl + C` in your terminal.


## 7. Problems

During the frontend development, the group noticed that implementing a generic filter that worked with any product category would be outside of the scope of the project, so the bonus feature was reduced to be only the search by name/category. Also, Vuetify is not yet fully supported in Vue 3 so the [Font Awesome](https://fontawesome.com/), [Maska](https://github.com/beholdr/maska), [Toggle](https://github.com/vueform/toggle), [VueCollapsiblePanel](https://github.com/dafcoe/vue-collapsible-panel) and [VueBurgerMenu](https://github.com/mbj36/vue-burger-menu) libraries were used as replacements.


## 8. Comments

TODO
