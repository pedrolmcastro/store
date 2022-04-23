# Gaming Gem

- Pedro Lucas de Moliner de Castro - 11795784
- Lucas Massao Fukusawa Dagnone - 11295810
- João Guilherme Jarochinski Marinho - 10698193


## 1. Requirements

The assignment is to build an **online store** and the products chosen to be sold are **computer components** and **peripherals**. The application must have two types of users: **customers** and **administrators** with name, id, address, phone and email data, coming with an administrator account "admin" with password "admin". A customer must be able to **search** and **filter** the products catalogue by hardware specification, add products to a **cart** and make purchases paying with a **credit card**.

A administrator is responsable for creating, updating or deleting administrators, customers and products. Each product sold needs a name, id, photo, description, price, quantity in stock and quantity sold; since the products have many traits their description should match their category specifications, for example: a Processor has cores, threads, frequency, supported sockets, cache size, etc. Lastly, the system should provide accessibility requirements, good usability and be responsive.


## 2. Project Description

**Gaming Gem** is an online computer components and peripherals store focused on hardware for gaming. The website will be presented as a Single Page Application having the following sections: Login/Register, Home, Products Catalogue, Product Description, Cart, Payment, Profile and Manage Products/Customers. The full Mockup can be seen in [Figma](https://www.figma.com/file/ozZUSnOeuyotmszMJvDc2P/Vuetify-Components-(Community)?node-id=13144%3A605) on the "Store" page and a partial interactive one including Login/Register, Home and Product Description can be found in [Github Pages](https://pedrolmcastro.github.io/store/mockup/pages/home.html) and its source code in the [/mockup](https://github.com/pedrolmcastro/store/tree/main/mockup) directory. The navigation diagram for the project can be seen below:

<img src="https://github.com/pedrolmcastro/store/blob/main/mockup/diagram/navigation.png" width="100%">


## 3. Comments About the Code

The website will be built using Vue and Vuetify for the front-end and Node with Express for the back-end.


## 4. Test Plan

The Jest framework will be used for unit testing in the code base.


## 5. Test Results

TODO


## 6. Build Procedures

TODO


## 7. Problems

For the Mockup stage, the group found hard to represent the product description in a generic way, since it is tied to the specifics of the product category. This problem is more evident in the **Add/Edit Product** section where the Administrator should add the hardware specifications, because of that this section is the most likely to change from the Mockup to the final product. Also, the exact .svg icons used by Vuetify were not found, so replacements from Font Awesome were used to construct the HTML5/CSS3 interactive Mockup.


## 8. Comments

TODO
