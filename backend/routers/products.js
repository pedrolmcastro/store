const Product = require('../models/product')
const express = require('express')
const { default: mongoose } = require('mongoose')

const router = express.Router()

const NotFound = "Product not found."
const InvalidId = "Invalid ID Supplied."
const MaxResults = 10000
const DefaultSort = "name"

// Read all products with filters
router.get('/', async (req, res) => {    
    res.status(200).send(
        await Product
            .find({
                ...req.query,
                quantity: { $gt: req.query.instock === "true" ? 0 : -1 },
                name: { $regex: req.query.search || "", $options: "i" } 
            }).limit(req.query.max || MaxResults)
            .sort(req.query.sort || DefaultSort)
            .exec()
    )
})

// Get product by id
router.get('/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send({error: InvalidId})
    }

    const product = await Product.findById(req.params.id).exec()
    if (!product)
        return res.status(404).send({error: NotFound})
    
    res.status(200).send(product)
})

// Create new product
router.post('/', async (req, res) => {
    const product = new Product({
        quantity: req.body.quantity,
        price: req.body.price,
        image: req.body.image,
        category: req.body.category,
        name: req.body.name,
        summary: req.body.summary,
        description: req.body.description,
    })

    await product.save()
    
    res.status(200).send(product)
})

// Modify specific product
router.patch('/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send({error: InvalidId})
    }

    let product = await Product.findByIdAndUpdate(req.params.id, {...req.body}, {returnDocument: 'after'}).exec()

    if (!product)
        return res.status(404).send({error: NotFound})

    res.status(200).send(product)
})

router.delete('/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send({error: InvalidId})
    }

    const product = await Product.findByIdAndRemove(req.params.id).exec()

    if (!product)
        return res.status(404).send({error: NotFound})

    return res.status(200).send()
})

module.exports = router