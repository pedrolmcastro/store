export default {
    "products": [
        {
            "id": "i511400f",
            "name": "Intel I5 11400F",
            "category": "CPU",
            "quantity": 5,
            "description": "A sad CPU, waiting to be bought",
            "price_cents": 15000,
            "image": "assets_link"
        },
        {
            "id": "r53600x",
            "name": "Ryzen R5 3600X",
            "category": "CPU",
            "quantity": 3,
            "description": "A happy CPU, waiting to be bought",
            "price_cents": 30000,
            "image": "assets_link"
        },
        {
            "id": "r33400",
            "name": "Ryzen R3 3400",
            "category": "CPU",
            "quantity": 5,
            "description": "A sad CPU, waiting to be bought",
            "price_cents": 15000,
            "image": "assets_link"
        },
        {
            "id": "gbb450",
            "name": "Gigabyte B450M-DS3H",
            "category": "Motherboard",
            "quantity": 2,
            "description": "A sad motherboard, waiting to be bought",
            "price_cents": 22000,
            "image": "assets_link"
        },
        {
            "id": "asrh110m",
            "name": "Asrock H110M-HG4",
            "category": "Motherboard",
            "quantity": 5,
            "description": "A happy motherboard, waiting to be bought",
            "price_cents": 10000,
            "image": "assets_link"
        }
    ],

    "users": [
        {
            "id": "pato",
            "name": "Pato",
            "address": "Rua dos Patos, 1 - Pato Branco - RJ",
            "phone": "(16) 99777-1111",
            "mail": "pato@mail.com",
            "password": "1234pato",
            "isAdmin": false
        },
        {
            "id": "calango",
            "name": "Calango Rios",
            "address": "Rua Calango, 1 - Calanguineos - MG",
            "phone": "(36) 99222-1111",
            "mail": "calango@mail.com",
            "password": "1234calango",
            "isAdmin": true
        }
    ],

    "cards": [
        {
            "id": "cpato",
            "user": "pato@mail.com",
            "nameOnCard": "PATO TORRES",
            "number": "1234 1111 2222 3333",
            "validity": "2025-06-11",
            "cvv": "177"
        }
    ],

    "previous_purchases": [
        {
            "id": "compato",
            "user": "pato@mail.com",
            "products": [
                {
                    "product": "Asrock H110M-HG4",
                    "quantity": 1,
                    "paidPrice": 10000
                },
                {
                    "product": "Intel I5 11400F",
                    "quantity": 1,
                    "paidPrice": 12500
                }
            ]
        }
    ]
}
