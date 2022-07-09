const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const schema = new mongoose.Schema({
    admin: {
        type: Boolean,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
});

schema.method("compare", async (formpassword, userpassword) => { 
    return bcrypt.compare(formpassword, userpassword);
});


const User = mongoose.model("User", schema);
module.exports = User;
