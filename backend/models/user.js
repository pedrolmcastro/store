const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({ 
    admin: Boolean,
    name: String,
    password: String,
    email: String,
    phone: String,
    address: String,
})

const User = mongoose.model('Product', userSchema)