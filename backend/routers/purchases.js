const express = require("express");
const Product = require("../models/product");
const Purchase = require("../models/purchase");
const { default: mongoose } = require("mongoose");
const { isauthenticated } = require("../auth/authorization");


const router = express.Router();
router.use(isauthenticated);


const NOT_FOUND = "Purchase not found.";
const INVALID_ID = "Invalid ID Supplied.";


// Read all Purchases with User ID as Filter
router.get('/', async (request, response) => {
    response.status(200).send(await Purchase.find({ user: request.user.id }).sort("date").exec());
});

// Get Purchase by ID
router.get("/:id", async (request, response) => {
    if (!mongoose.isValidObjectId(request.params.id)) return response.status(400).send({ error: INVALID_ID });

    const purchase = await Purchase.findOne({ _id: request.params.id, user: request.user.id }).exec();
    if (!purchase) return response.status(404).send({ error: NOT_FOUND });
    
    response.status(200).send(purchase);
});


// Create Purchase
router.post('/', async (request, response) => {
    try {
        const purchase = new Purchase({
            user: request.user.id,
            total: request.body.total,
            date: request.body.date,
            products: request.body.products,
        });
        
        await purchase.save();

        await Promise.all(request.body.products.map(product => Product.findByIdAndUpdate(product.id, {
            $inc: { quantity: - product.quantity }, // Remove Bought Quantities from Product
        })));

        response.status(200).send(purchase);
    }
    catch (err) {
        return response.status(400).send({ error: "Error while processing purchase." });
    }
});


module.exports = router;
