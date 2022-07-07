const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({ 
    admin: {
        type: Boolean,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
})

userSchema.method('compare', async (formPass, userPass) => { 
    return bcrypt.compare(formPass, userPass)
})

const User = mongoose.model('User', userSchema)

module.exports = User