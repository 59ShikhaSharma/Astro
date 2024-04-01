
require('dotenv').config();
const express = require('express');


const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

//express app
const app = express();


//Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//router
app.use('astro-eosin-two.vercel.app', userRoutes)

//Database Connection
mongoose.connect(process.env.DB_URL)
.then(() => {

    app.listen(process.env.PORT , () => {
        console.log("DB connected: and Server is running", process.env.PORT);
    })
})
.catch((error) => {
    console.log(error);
})

