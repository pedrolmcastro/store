const Product = require('../models/product');
const mongoose = require('mongoose');

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
]

mongoose.connect('mongodb://admin:admin@127.0.0.1:27017');

mongoose.Schema.set

// IIAFE - Imediately Invoked Asynchronous Function Expression
// Necessary for top-level await on non-modules node projects
(async () => {
    await Product.deleteMany({}).exec();

    for (const product of products)
        await new Product(product).save();
    console.log("Finished")
})();
