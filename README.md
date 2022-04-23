# Gaming Gem

## Integrantes
- Pedro Lucas de Moliner de Castro - 11795784
- Lucas Massao Fukusawa Dagnone - 11295810
- João Guilherme Jarochinski Marinho - 10698193


## 1. Requirements

+ The store will have two types of users: **Customers** and **Administrators** with name, id, address, phone and email data. 
+ Customers are users who access the system to buy products.
+ Administrators are responsible for registering/managing administrators, customers, and products provided. The application already comes with an account admin with password admin. They are able to add new products or edit them.
+ The store will sell **Computer Components** and **Peripherals**, each product sold needs a name, id, photo, description, price, quantity in stock and quantity sold. Since the products have many traits the description must contain its category and specifications, for example: a Processor has cores, threads, frequency, supported sockets, cache size, etc. The customer should also be able to **Filter** the product catalogue by hardware specifications. Lastly the store must have a **Shopping Cart** system and support payment with a credit card number.
+ The number of itens in the website for a certain product will be deducted by how many times that item has been purchased by a customer, and that number will be added to the quantity sold, the cart is only emptied on payment or by the customer.
+ The system must provide accessibility requirements and provide good usability in addition to beign responsive.



## 2. Project Description

+ **Gaming Gem** is an online computer components and peripherals store focused on hardware for gaming. The website will be presented as a Single Page Application having the following sections: Login/Register, Home, Products Catalogue, Product Description, Cart, Payment, Profile and Manage Products/Customers. 
+ The full mockup can be seen in [Figma](https://www.figma.com/file/ozZUSnOeuyotmszMJvDc2P/Vuetify-Components-(Community)?node-id=13144%3A605) in the "Store" page and a partial one made with HTML5 and CSS3 can be found in \_. The navigation diagram for the project can be seen below:

<img src="https://github.com/pedrolmcastro/store/blob/main/mockup/Navigation%20Diagram.drawio.png" width="100%">


## 3. Comments About the Code

The website will be built using Vue and Vuetify for the front-end and Node with Express for the back-end.


## 4. Test Plan

The Jest framework will be used for unit testing in the code base.


## 5. Test Results

TODO


## 6. Build Procedures

TODO


## 7. Problems

For the mockup stage, the group found hard to represent the product description in a generic way, since it is tied to the specifics of the product category. This problem is more evident in the **Add/Edit Product** section where the Administrator should add the hardware specifications, because of that this section is the most likely to change from the mockup to the final product.


## 8. Comments

TODO
