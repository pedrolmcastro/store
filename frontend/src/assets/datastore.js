export default {
    products: [
        {
            id: '0',
            quantity: 5,
            price: 15000,
            image: "0.jpg",
            category: "processor",
            name: "Intel I5 11400F",
            summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. \n\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
        },
        {
            id: '1',
            quantity: 3,
            price: 30000,
            image: "1.jpg",
            category: "processor",
            name: "Ryzen R5 3600X",
            summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. \n\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
        },
        {
            id: '2',
            quantity: 5,
            price: 15000,
            image: "2.jpg",
            category: "processor",
            name: "Ryzen R3 3400",
            summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. \n\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
        },
        {
            id: '3',
            quantity: 2,
            price: 22000,
            image: "3.jpg",
            category: "motherboard",
            name: "Gigabyte B450M-DS3H",
            summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. \n\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
        },
        {
            id: '4',
            quantity: 5,
            price: 10000,
            image: "4.jpg",
            category: "motherboard",
            name: "Asrock H110M-HG4",
            summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. \n\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
        },
    ],

    users: [
        {
            id: '0',
            admin: true,
            name: "Admin",
            password: "admin",
            email: "admin@email.com",
            phone: "(00) 00000-0000",
            address: "Admins Street, 0 - Adminland - AL",
        },
        {
            id: '1',
            admin: false,
            name: "User",
            password: "user",
            email: "user@email.com",
            phone: "(11) 11111-1111",
            address: "Users Street, 1 - Userland - UL",
        },
    ],

    purchases: [
        {
            id: '0',
            user: '1',
            total: 35000,
            date: "2001-01-01",
            products: [
                {
                    id: '0',
                    quantity: 1,
                    paid: 15000,
                    image: "0.jpg",
                    name: "Intel I5 11400F",
                },
                {
                    id: '4',
                    quantity: 2,
                    paid: 20000,
                    image: "4.jpg",
                    name: "Asrock H110M-HG4",
                },
            ],
        },
    ],

    ids: {
        purchases: 1,
        products: 5,
        users: 2,
    }
}
