const mongoose = require("mongoose");


const productschema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    paid: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
});

const purchaseschema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    products: {
        type: [ productschema ],
        required: true,
    },
});


const Purchase = mongoose.model("Purchase", purchaseschema);
module.exports = Purchase;
