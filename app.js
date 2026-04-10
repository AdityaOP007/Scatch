const express = require('express');
const app = express();
const mongooseConnection = require('./config/mongoose-connection');
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/userRouters');
const productsRouter = require('./routes/productRouters');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(3000);