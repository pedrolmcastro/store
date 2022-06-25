const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const productRouter = require('./routers/products')
const app = express()


mongoose.connect('mongodb://admin:admin@127.0.0.1:27017')

mongoose.set('toJSON', {
    virtuals: true,
    transform: (doc, converted) => {
        delete converted._id;
    }
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use('/products', productRouter)


const port = 3001
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`)
})