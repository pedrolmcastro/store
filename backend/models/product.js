const mongoose = require("mongoose");


const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
    },
    category: {
        type: String,
    },
    summary: {
        type: String,
    },
    description: {
        type: String,
    },
});


const Product = mongoose.model("Product", schema);
module.exports = Product;
