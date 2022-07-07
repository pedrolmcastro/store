const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const multer = require('multer');

// Routes
const productsRouter = require('./routers/products')
const purchasesRouter = require('./routers/purchases')
const usersRouter = require('./routers/users')
const authRouter = require('./routers/auth')
  
// Authentication middleware
const { passport } = require('./auth/authentication')

// Database
mongoose.connect('mongodb://admin:admin@127.0.0.1:27017')

mongoose.set('toJSON', {
    virtuals: true,
    transform: (doc, converted) => {
        delete converted._id;
        delete converted.__v;
    }
});

// Express
const app = express()

// Registering middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(passport.initialize())
app.use(cors())

// Registering routes
app.use('/auth', authRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/purchases', purchasesRouter)

// Static files
app.use('/images', express.static(__dirname + '/images'));

// Starting App
const port = 3001
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`)
})