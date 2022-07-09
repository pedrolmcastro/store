const mongoose = require("mongoose");
const User = require("../models/user");
const Product = require("../models/product");
const Purchase = require("../models/purchase");


const products = [
    {
        quantity: 5,
        price: 15000,
        image: '0.jpg',
        category: 'processor',
        name: 'Intel I5 11400F',
        summary: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. \n\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.',
    },
    {
        quantity: 3,
        price: 30000,
        image: '1.jpg',
        category: 'processor',
        name: 'Ryzen R5 3600X',
        summary: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. \n\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.',
    },
    {
        quantity: 5,
        price: 15000,
        image: '2.jpg',
        category: 'processor',
        name: 'Ryzen R3 3400',
        summary: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. \n\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.',
    },
    {
        quantity: 2,
        price: 22000,
        image: '3.jpg',
        category: 'motherboard',
        name: 'Gigabyte B450M-DS3H',
        summary: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. \n\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.',
    },
    {
        quantity: 5,
        price: 10000,
        image: '4.jpg',
        category: 'motherboard',
        name: 'Asrock H110M-HG4',
        summary: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. \n\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.',
    },
];

const users = [
    {
        admin: true,
        name: "Admin",
		password: "$2b$10$e5ssQBmwH7HQ3iCqM.g5Q.9gbvMm45IaRYnc.yubKkNR0VJxrTVAC",
        email: "admin@admin.com",
        phone: "(13) 99444-1234",
        address: "Rua dos Admins, 123",
    },
    {
        admin: false,
        name: "Client",
		password: "$2b$10$U90pHM3o.kN76hrigM2G5eOF65GybKjrXAIwBzvUyY2VJPzYdo26u",
        email: "client@client.com",
        phone: "(13) 99888-1234",
        address: "Rua dos Clientes, 123",
    },
];

let purchase = {
    total: 35000,
    date: "2001-01-01",
    products: [
        {
            id: '0',
            image: "0.jpg",
            quantity: 1,
            paid: 15000,
            image: "0.jpg",
            name: "Intel I5 11400F",
        },
        {
            id: '4',
            image: "4.jpg",
            quantity: 2,
            paid: 20000,
            image: "4.jpg",
            name: "Asrock H110M-HG4",
        },
    ],
};


async function populate() {
    mongoose.connect("mongodb://admin:admin@127.0.0.1:27017");

    // Clear the Database
    await Product.deleteMany({}).exec();
    await User.deleteMany({}).exec();
    await Purchase.deleteMany({}).exec();


    for (const product of products) {
        await new Product(product).save();
    }


    let userid;

    for (const user of users) {
        userid = (await new User(user).save())._id;
    }


    purchase.user = userid;
    await new Purchase(purchase).save();


    mongoose.connection.close();
}


populate();
