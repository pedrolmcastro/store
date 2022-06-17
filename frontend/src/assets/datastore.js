export default {
    products: [
        {
            id: '0',
            quantity: 5,
            price: 15000,
            category: "CPU",
            name: "Intel I5 11400F",
            summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. \n\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
        },
        {
            id: '1',
            quantity: 3,
            price: 30000,
            category: "CPU",
            name: "Ryzen R5 3600X",
            summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. \n\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
        },
        {
            id: '2',
            quantity: 5,
            price: 15000,
            category: "CPU",
            name: "Ryzen R3 3400",
            summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. \n\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
        },
        {
            id: '3',
            quantity: 2,
            price: 22000,
            category: "Motherboard",
            name: "Gigabyte B450M-DS3H",
            summary: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. \n\n Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eaque natus neque eos ipsam facilis, ea eveniet saepe mollitia voluptatibus earum deleniti et ratione, adipisci ipsa fugiat temporibus expedita. Libero.",
        },
        {
            id: '4',
            quantity: 5,
            price: 10000,
            category: "Motherboard",
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
            address: "Rua dos Admins, 0 - Adminlandia - AL",
        },
        {
            id: '1',
            admin: false,
            name: "User",
            password: "user",
            email: "user@email.com",
            phone: "(11) 11111-1111",
            address: "Rua dos Users, 1 - Userlandia - UL",
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
                    name: "Intel I5 11400F",
                },
                {
                    id: '4',
                    quantity: 2,
                    paid: 20000,
                    name: "Asrock H110M-HG4",
                },
            ],
        },
    ],
}
