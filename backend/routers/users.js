const User = require('../models/user')
const express = require('express')
const { default: mongoose } = require('mongoose')

const { isAuthenticated, isAdmin } = require('../auth/authorization')

const NotFound = "User not found."
const InvalidId = "Invalid ID Supplied."

const router = express.Router()

router.use(isAuthenticated)

// Get yourself (based on passport id middleware)
router.get('/me', async (req, res) => {
    if (!mongoose.isValidObjectId(req.user.id)) {
        return res.status(400).send({error: InvalidId})
    }

    const user = await User.findById(req.user.id).exec()
    if (!user)
        return res.status(404).send({error: NotFound})
    
    res.status(200).send(user)
})

router.use(isAdmin)

// Get user by id
router.get('/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send({error: InvalidId})
    }

    const user = await User.findById(req.params.id).exec()
    if (!user)
        return res.status(404).send({error: NotFound})
    
    res.status(200).send(user)
})

// Read all users
router.get('/', async (req, res) => {    
    res.status(200).send(
        await User.find({}).sort("name").exec()
    )
})

// Modify specific user
router.patch('/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send({error: InvalidId})
    }

    let user = await User.findByIdAndUpdate(req.params.id, {...req.body}, {returnDocument: 'after'}).exec()

    if (!user)
        return res.status(404).send({error: NotFound})

    res.status(200).send(user)
})

// Delete user by id
router.delete('/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send({error: InvalidId})
    }

    const user = await User.findByIdAndRemove(req.params.id).exec()

    if (!user)
        return res.status(404).send({error: NotFound})

    return res.status(200).send()
})

module.exports = router