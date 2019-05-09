// Dependencies
var express = require("express");
var mongodb = require("mongodb");
var mongoose = require("mongoose");
var axios = require("axios");

// Initialize Express
var app = express();
var routes = require("./routes");
var PORT = process.env.PORT || 3001;
var collections = ["coupons, shoppinglist, wishlist"];

app.use(express.urlencoded({ extended : true}));
app.use(express.json());

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/Coupons',
    {
        useCreateIndex : true,
        useNewUrlParser : true
    }
);

app.listen(PORT, () =>
    console.log( `==> API Server now listening on PORT ${PORT}!`)
);

// Database configuration
// Save the URL of our database as well as the name of our collection



// // Use mongojs to hook the database to the db variable
// var db = mongojs(databaseUrl, collections);

// // This makes sure that any errors are logged if mongodb runs into an issue
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });

// // Routes
// // 1. At the root path, send a simple hello world message to the browser
// app.get("/", function(req, res) {
//   res.send("Hello world");
// });

// // 2. At the "/all" path, display every entry in the animals collection
// app.get("/all", function(req, res) {
//   // Query: In our database, go to the animals collection, then "find" everything
//   db.animals.find({}, function(err, found) {
//     // Log any errors if the server encounters one
//     if (err) {
//       console.log(err);
//     }
//     // Otherwise, send the result of this query to the browser
//     else {
//       res.json(found);
//     }
//   });
// });

// // 3. At the "/name" path, display every entry in the animals collection, sorted by name
// app.get("/name", function(req, res) {
//   // Query: In our database, go to the animals collection, then "find" everything,
//   // but this time, sort it by name (1 means ascending order)
//   db.animals.find().sort({ name: 1 }, function(err, found) {
//     // Log any errors if the server encounters one
//     if (err) {
//       console.log(err);
//     }
//     // Otherwise, send the result of this query to the browser
//     else {
//       res.json(found);
//     }
//   });
// });

// // 4. At the "/weight" path, display every entry in the animals collection, sorted by weight
// app.get("/weight", function(req, res) {
//   // Query: In our database, go to the animals collection, then "find" everything,
//   // but this time, sort it by weight (-1 means descending order)
//   db.animals.find().sort({ weight: -1 }, function(err, found) {
//     // Log any errors if the server encounters one
//     if (err) {
//       console.log(err);
//     }
//     // Otherwise, send the result of this query to the browser
//     else {
//       res.json(found);
//     }
//   });
// });

// Set the app to listen on port 3000

