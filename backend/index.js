const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


// Routes
const authrouter = require("./routers/auth");
const usersrouter = require("./routers/users");
const productsrouter = require("./routers/products");
const purchasesrouter = require("./routers/purchases");


// Authentication Middleware
const { passport } = require("./auth/authentication");


// Database
mongoose.connect("mongodb://admin:admin@127.0.0.1:27017");

mongoose.set("toJSON", {
    virtuals: true,
    transform: (document, converted) => {
        delete converted._id;
        delete converted.__v;
    },
});


// Express
const app = express();


// Register Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(passport.initialize());
app.use(cors());


// Register Routes
app.use("/auth", authrouter);
app.use("/users", usersrouter);
app.use("/products", productsrouter);
app.use("/purchases", purchasesrouter);


// Static files
app.use("/images", express.static(__dirname + "/images"));


// Start App
const port = 3001;
const server = app.listen(port, () => console.log(`Listening on localhost:${port}`));


// At Exit
process.on("SIGINT", () => {
    server.close();
    mongoose.connection.close();
});
