'use strict'
const express = require('express');
const httpErrors = require('http-errors');
const mongoose = require('mongoose');
const cors = require('cors');



//db connection
const username = "andrezzz";
const password = "qxlfTglR7Mfba5af"
const cluster = "cluster0.igj6d"
const dbname = "MyMovieList"

mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, { 
    authSource: "admin",
    useNewUrlParser : true,
    useUnifiedTopology: true },
    err => {
        if(err)
            console.log(err);
        else 
            console.log('Connected to MyMovieList database');
    }
);



// Create the express app and setting middlewares
const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());



//routes
var usersRoutes = require('./routes/users.routes.js');
app.use("/user", usersRoutes);
var listsRoutes = require('./routes/lists.routes.js');
app.use("/list", listsRoutes);




// Set default options
const port = 5353;
const host = "localhost";



// Start server
var server = app.listen(port, host, function (err) {
    if (err) {
        console.error(err);
        //err handling
    }

    const addr = server.address()
    console.log(`Started at ${addr.host || host || 'localhost'}:${addr.port}`)
})


