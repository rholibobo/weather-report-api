require("dotenv").config();
const routes = require("./api")
const express = require("express");
const app = express();
const bodyParser= require("body-parser");



// Middlewares
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))

app.use(routes)



app.listen(3005, function(){
    console.log("Running on port 3005")
})