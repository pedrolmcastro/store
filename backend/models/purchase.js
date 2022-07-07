const mongoose = require('mongoose')

const productPurchaseSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    paid: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: String,
})

const purchaseSchema = new mongoose.Schema({ 
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
        type: [ productPurchaseSchema ],
        required: true
    }
})

const Purchase = mongoose.model('Purchase', purchaseSchema)

module.exports = Purchase
