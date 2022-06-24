const Product = require('../models/product')
const express = require('express')

const router = express.Router()

const NotFound = "Product not found."

// Read all products with filters
router.get('/', async (req, res) => {
    res.status(200).send(
        await Product.find({...req.query}).exec()
    )
})

// Get product by id
router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id).exec()
    if (!product)
        return res.status(404).send({error: NotFound})
    
    res.status(200).send(product)
})

// Create new product
router.post('/', async (req, res) => {
    await new Product({
        quantity: req.body.quantity,
        price: req.body.price,
        image: req.body.image,
        category: req.body.category,
        name: req.body.name,
        summary: req.body.summary,
        description: req.body.description,
    }).save()
    
    res.status(200).send()
})

// Modify specific product
router.patch('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id).exec()

    if (!product)
        return res.status(404).send({error: NotFound})

    product = {
        ...product,
        ...req.body
    }

    await product.save()

    res.status(200).send({})
})

router.delete('/:id', async (req, res) => {
    const product = await Product.findByIdAndRemove(req.params.id).exec()

    if (!product)
        return res.status(404).send({error: NotFound})
    return res.status(200).send()
})

module.exports = router