const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')

const productRouter = require('./routers/products')
const app = express()


mongoose.connect('mongodb://admin:admin@127.0.0.1:27017')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/products', productRouter)


const port = 3001
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`)
})