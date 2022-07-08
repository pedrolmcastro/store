
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { passport, secretkey } = require("../auth/authentication");

const router = express.Router();


// Authenticate Login
router.post("/login", async (request, response, next) => { 
    passport.authenticate("local", { session: false }, (error, user, information) => { 
        if (error) return response.status(500).json({ error });

        if (!user) { 
            const { message } = information;
            return response.status(401).json({ message });
        }

        const { id } = user;
        const token = jwt.sign({ id }, secretkey, { expiresIn: "1h" });

        response.status(200).send({ token: token });
    })(request, response, next)
});

// Create User
router.post("/register", async (request, response) => { 
    if (!request.body.password) return response.status(400).send({ error: "Invalid password." });

    const hashed = await bcrypt.hash(request.body.password, 10);

    try {
        const user = new User({
            ...request.body,
            password: hashed,
        });
        
        await user.save();

        response.status(200).send(user);
    }
    catch (error) {
        return response.status(400).send({ error: "Error during user registration." });
    }
});


module.exports = router;
