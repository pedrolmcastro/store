const mongoose = require('mongoose')

const productPurchaseSchema = new mongoose.Schema({
    quantity: Number,
    paid: Number,
    image: String,
    name: String
})

const purchaseSchema = new mongoose.Schema({ 
    user: mongoose.Types.ObjectId,
    total: Number,
    date: String,
    products: {
        type: [ productPurchaseSchema ],
        default: [{
            quantity: 'Quantity',
            paid: 'Price',
            image: 'Image',
            name: 'Name'
        }]
    }
})

const Product = mongoose.model('Product', purchaseSchema)

Product.create()