const Purchase = require('../models/purchase')
const express = require('express')
const { default: mongoose } = require('mongoose')

const { isAuthenticated, isAdmin } = require('../auth/authorization')
const Product = require('../models/product')

const NotFound = "Purchase not found."
const InvalidId = "Invalid ID Supplied."

const router = express.Router()

router.use(isAuthenticated)

// Read all Purchases, using user_id as filter
router.get('/', async (req, res) => {
    const filters = {}
    if (!req.user.isAdmin) {
        filters.user = req.user.id
    }

    res.status(200).send(
        await Purchase
            .find(filters)
            .sort("date")
            .exec()
    )
})

// Get purchase by id
router.get('/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send({error: InvalidId})
    }

    const purchase = await Purchase.findOne({
        _id: req.params.id,
        user: req.user.id
    }).exec()
    if (!purchase)
        return res.status(404).send({error: NotFound})
    
    res.status(200).send(purchase)
})

// Create new purchase
router.post('/', async (req, res) => {
    try {
        const purchase = new Purchase({
            user: req.user.id,
            total: req.body.total,
            date: req.body.date,
            products: req.body.products
        })
    
        await purchase.save()

        // Removing bought quantities from product        
        await Promise.all(req.body.products.map(prod => Product.findByIdAndUpdate(prod.id, {
            $inc: { quantity: -prod.quantity}
        }) ))

        res.status(200).send(purchase)
    } catch (err) {
        res.status(400).send({ msg: "Error while processing purchase" })
    }
})

module.exports = router