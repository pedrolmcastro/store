const express = require("express");
const upload = require("../upload");
const Product = require("../models/product");
const { default: mongoose } = require("mongoose");
const { isauthenticated, isadmin } = require("../auth/authorization");

const router = express.Router();


const NOT_FOUND = "Product not found.";
const INVALID_ID = "Invalid ID Supplied.";


// Get all Products with Filters
router.get('/', async (request, response) => {    
    response.status(200).send(
        await Product
            .find({
                ...request.query,
                quantity: { $gt: request.query.instock === "true" ? 0 : -1 },
                name: { $regex: request.query.search || "", $options: 'i' },
            })
            .limit(request.query.max || 10000)
            .sort(request.query.sort || "name")
            .exec()
    );
});

// Get Product by ID
router.get("/:id", async (request, response) => {
    if (!mongoose.isValidObjectId(request.params.id)) return response.status(400).send({ error: INVALID_ID });

    const product = await Product.findById(request.params.id).exec();
    if (!product) return response.status(404).send({ error: NOT_FOUND });
    
    response.status(200).send(product);
});


router.use(isauthenticated, isadmin);


// Create Product
router.post('/', async (request, response) => {
    try {
        const product = new Product({ ...request.body });
        await product.save();

        response.status(200).send(product);   
    }
    catch(error) {
        return response.status(400).send({ error: "Error during product registration." });
    }
});

// Set Product Image
router.post("/:id/image", upload.single("image"), async (request, response) => {
    if (!mongoose.isValidObjectId(request.params.id)) return response.status(400).send({ error: INVALID_ID });

    const product = await Product.findByIdAndUpdate(request.params.id, { image: request.filename }).exec();
    if (!product) return response.status(404).send({ error: NOT_FOUND });

    response.status(200).send({ "link": request.filename });    
});


// Modify Product by ID
router.patch("/:id", async (request, response) => {
    if (!mongoose.isValidObjectId(request.params.id)) return response.status(400).send({ error: INVALID_ID });

    let product = await Product.findByIdAndUpdate(request.params.id, { ...request.body }, { returnDocument: "after" }).exec();
    if (!product) return response.status(404).send({ error: NOT_FOUND });

    response.status(200).send(product);
});


// Delete Product by ID
router.delete("/:id", async (request, response) => {
    if (!mongoose.isValidObjectId(request.params.id)) return response.status(400).send({ error: INVALID_ID });

    const product = await Product.findByIdAndRemove(request.params.id).exec();
    if (!product) return response.status(404).send({ error: NOT_FOUND });

    return response.status(200).send();
});


module.exports = router;
