const express = require("express");
const User = require("../models/user");
const { default: mongoose } = require("mongoose");
const { isauthenticated, isadmin } = require("../auth/authorization");


const router = express.Router();
router.use(isauthenticated);


const NOT_FOUND = "User not found."
const INVALID_ID = "Invalid ID Supplied."


// Get Yourself based on Passport ID Middleware
router.get("/me", async (request, response) => {
    if (!mongoose.isValidObjectId(request.user.id)) return response.status(400).send({ error: INVALID_ID });

    const user = await User.findById(request.user.id).exec();
    if (!user) return response.status(404).send({ error: NOT_FOUND });

    response.status(200).send(user);
});


router.use(isadmin);


// Get User by ID
router.get("/:id", async (request, response) => {
    if (!mongoose.isValidObjectId(request.params.id)) return response.status(400).send({ error: INVALID_ID });

    const user = await User.findById(request.params.id).exec();
    if (!user) return response.status(404).send({ error: NOT_FOUND });
    
    response.status(200).send(user);
});

// Get all Users
router.get('/', async (request, response) => {    
    response.status(200).send(await User.find({}).sort("name").exec());
});


// Modify User by ID
router.patch("/:id", async (request, response) => {
    if (!mongoose.isValidObjectId(request.params.id)) return response.status(400).send({ error: INVALID_ID });

    let user = await User.findByIdAndUpdate(request.params.id, { ...request.body }, { returnDocument: "after" }).exec();
    if (!user) return response.status(404).send({ error: NOT_FOUND });

    response.status(200).send(user);
});


// Delete User by ID
router.delete("/:id", async (request, response) => {
    if (!mongoose.isValidObjectId(request.params.id)) return response.status(400).send({ error: INVALID_ID });

    const user = await User.findByIdAndRemove(request.params.id).exec();
    if (!user) return response.status(404).send({ error: NOT_FOUND });

    return response.status(200).send();
});


module.exports = router;
