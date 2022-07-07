
const express = require('express')
const User = require('../models/user')

const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const { passport, secretKey } = require('../auth/authentication')

const router = express.Router()

router.post("/login", async (req, res, next) => { 
    // Using passport to authenticate login route
    passport.authenticate('local', { session: false }, (err, user, info) => { 
        if (err) { 
            return res.status(500).json({ err })
        }

        if (!user) { 
            const { message } = info
            return res.status(401).json({ message })
        }
        
        const { id } = user
        const token = jwt.sign({ id }, secretKey, { expiresIn: '1h' })

        res.status(200).send({ "token": token })

    })(req, res, next)
})

router.post("/register", async (req, res) => { 
    // Using passport to validate registration route
    if (!req.body.password) {
        return res.status(400).json({ error: "Invalid password" })
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    try {
        const user = new User({
            ...req.body,
            password: hashedPassword
        })
        
        await user.save()

        res.status(200).send({ message: "User created!", user })
    } catch (err) {
        console.log(err)
        return res.status(400).json({ error: "Error during user registration" })
    }
})

module.exports = router     

