require("dotenv").config();
const routes = require("./paths")
const express = require("express");
const app = express();




// Middlewares
app.use(express.static("public"));
app.set("view engine", "ejs");


app.use(routes)



app.listen(3005, function(){
    console.log("Running on port 3005")
})