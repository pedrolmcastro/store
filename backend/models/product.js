const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({ 
    quantity: Number,
    price: Number,
    image: String,
    category: String,
    name: String,
    summary: String,
    description: String
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product